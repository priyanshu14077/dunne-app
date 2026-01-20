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

    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: "image/png",
    };

    await s3Client.send(new PutObjectCommand(uploadParams));

    const imageUrl = `${CLOUDFRONT_URL}/${fileName}`;

    return NextResponse.json({ success: true, imageUrl });
  } catch (error: any) {
    console.error("S3 Upload Error:", error);
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}
