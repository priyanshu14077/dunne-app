import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


const s3Client = new S3Client({
  region: "ap-south-1",
});


const sesClient = new SESClient({
  region: "ap-south-1",
});

const BUCKET_NAME = "dunne-assets-prod";
const CLOUDFRONT_URL = "https://d1y585exbg6kr2.cloudfront.net";


const SENDER_EMAIL = "priyanshudoingcoding@gmail.com"; 
const RECIPIENT_EMAIL = "Dunnemedia1212@gmail.com"; 

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const designId = formData.get("designId") as string;
    const metadataString = formData.get("metadata") as string; // Parse metadata

    if (!file || !designId) {
      return NextResponse.json({ error: "Missing file or designId" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileName = `previewer/${designId}.png`;

    console.log(`Processing file: ${file.name}, size: ${file.size} bytes, type: ${file.type}`);
    console.log(`Target S3 Key: ${fileName}`);

    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: "image/png",
    };

    console.log(`Uploading design preview for ${designId} to S3...`);
    await s3Client.send(new PutObjectCommand(uploadParams));
    console.log(`Successfully uploaded ${fileName} to S3`);

    const imageUrl = `${CLOUDFRONT_URL}/${fileName}`;

    // --- SES Email Sending Logic ---
    try {
      console.log("Preparing to send email notification...");
      
      // Convert image buffer to Base64 for embedding
      const base64Image = buffer.toString("base64");
      
      // --- Build Metadata HTML ---
      let metadataHtml = "<p>No detailed metadata provided.</p>";
      if (metadataString) {
        try {
          const m = JSON.parse(metadataString);
          
          let charmsRows = "";
          if (m.charms && Array.isArray(m.charms)) {
            charmsRows = m.charms.map((c: any) => `
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">${c.name}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Anchor ${c.anchorIndex !== undefined ? c.anchorIndex + 1 : '-'}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${c.price || '-'}</td>
              </tr>
            `).join("");
          }

          metadataHtml = `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h3>Order Details</h3>
              <p><strong>Base Product:</strong> ${m.baseProduct?.name || 'Unknown'} (${m.baseProduct?.type || '-'})</p>
              <p><strong>Note:</strong> ${m.note || 'None'}</p>
              <p><strong>Spacing Mode:</strong> ${m.spacingMode || 'Standard'}</p>
              
              <h4>Selected Charms (${m.charms?.length || 0})</h4>
              <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                  <tr style="background-color: #f2f2f2;">
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Charm Name</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Position</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${charmsRows || '<tr><td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: center;">No charms selected</td></tr>'}
                </tbody>
              </table>
            </div>
          `;
        } catch (e) {
          console.error("Error parsing metadata for email:", e);
          metadataHtml = "<p>Error parsing order details.</p>";
        }
      }
      
      const emailParams = {
        Source: SENDER_EMAIL,
        Destination: {
          ToAddresses: [RECIPIENT_EMAIL],
        },
        Message: {
          Subject: {
            Data: `New Jewelry Design Uploaded: ${designId}`,
          },
          Body: {
            Html: {
              Data: `
                <html>
                  <body>
                    <h1>New Design Uploaded!</h1>
                    <p><strong>Design ID:</strong> ${designId}</p>
                    <p><strong>S3 URL:</strong> <a href="${imageUrl}">${imageUrl}</a></p>
                    <br/>
                    ${metadataHtml}
                    <br/>
                    <p>Here is the preview:</p>
                    <img src="data:image/png;base64,${base64Image}" alt="Design Preview" style="max-width: 100%; height: auto; border: 1px solid #ddd;" />
                  </body>
                </html>
              `,
            },
          },
        },
      };

      const command = new SendEmailCommand(emailParams);
      await sesClient.send(command);
      console.log(`Email sent successfully to ${RECIPIENT_EMAIL}`);

    } catch (emailError: any) {
      console.error("Failed to send SES email:", emailError);
      // We don't block the response if email fails, but we log it.
    }

    return NextResponse.json({ success: true, imageUrl });
  } catch (error: any) {
    console.error("S3 Upload Error Details:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
      metadata: error.$metadata
    });
    return NextResponse.json({ 
      error: error.message || "Upload failed",
      details: error.code || "unknown" 
    }, { status: 500 });
  }
}
