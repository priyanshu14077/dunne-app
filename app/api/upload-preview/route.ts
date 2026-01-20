import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// The S3 Client will automatically pick up the IAM Role credentials if running on EC2
const s3Client = new S3Client({
  region: "ap-south-1",
});

const BUCKET_NAME = "dunne-assets-prod";
const CLOUDFRONT_URL = "https://d1y585exbg6kr2.cloudfront.net";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const designId = formData.get("designId") as string;

    if (!file || !designId) {
      return NextResponse.json({ error: "Missing file or designId" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
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
