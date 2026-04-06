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

          metadataHtml = `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h2>New Custom Jewelry Order</h2>
              
              <h3>Base Product</h3>
              <p><strong>Name:</strong> ${m.baseProduct?.name || 'Unknown'}</p>
              <p><strong>Type:</strong> ${m.baseProduct?.type || '-'}</p>
              
              <h3>Selected Charms</h3>
              ${m.charms && m.charms.length > 0 ? `
                <ul style="list-style-type: none; padding-left: 0;">
                  ${m.charms.map((c: any) => `
                    <li style="margin-bottom: 5px;">
                      <strong>${c.name}</strong> - placed on Anchor ${c.anchorIndex !== undefined ? c.anchorIndex + 1 : 'Unknown'}
                    </li>
                  `).join("")}
                </ul>
              ` : '<p>No charms selected.</p>'}
              
              <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
              
              <h3>Design Preview</h3>
              <p>You can view the high-resolution uploaded design preview attached below or via this link:</p>
              <p><a href="${imageUrl}" style="color: #4F46E5; font-weight: bold; text-decoration: none;">View S3 Preview Image &rarr;</a></p>
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
          ToAddresses: [RECIPIENT_EMAIL, SENDER_EMAIL],
        },
        Message: {
          Subject: {
            Data: `New Jewelry Design Uploaded: ${designId}`,
          },
          Body: {
            Html: {
              Data: `
                <html>
                  <body style="padding: 20px;">
                    ${metadataHtml}
                    <br/><br/>
                    <img src="data:image/png;base64,${base64Image}" alt="Design Preview" style="max-width: 600px; width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;" />
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
