import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'

// Initialize S3 Client
const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
})

export interface UploadResult {
    publicUrl: string
    path: string
}

/**
 * Get the public URL for a file (served via CloudFront)
 */
export function getPublicUrl(bucket: string, path: string): string {
    const cloudfrontUrl = process.env.NEXT_PUBLIC_CLOUDFRONT_URL || ''
    // Clean up slashes to avoid double slashes
    const cleanBaseUrl = cloudfrontUrl.endsWith('/') ? cloudfrontUrl.slice(0, -1) : cloudfrontUrl
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    
    return `${cleanBaseUrl}/${cleanPath}`
}

/**
 * Upload a file to Amazon S3
 */
export async function uploadFile(
    bucket: string,
    path: string,
    file: File | Buffer,
    contentType?: string
): Promise<UploadResult> {
    try {
        // Convert File to Buffer if necessary (for server-side context)
        let body: Buffer | Uint8Array = file as any
        if (file instanceof File) {
            const arrayBuffer = await file.arrayBuffer()
            body = new Uint8Array(arrayBuffer)
        }

        const command = new PutObjectCommand({
            Bucket: bucket || process.env.AWS_S3_BUCKET_NAME,
            Key: path,
            Body: body,
            ContentType: contentType,
        })

        await s3Client.send(command)

        const publicUrl = getPublicUrl(bucket, path)

        return {
            publicUrl,
            path: path,
        }
    } catch (error: any) {
        throw new Error(`Failed to upload to S3 (${path}): ${error.message}`)
    }
}

/**
 * Delete a file from Amazon S3
 */
export async function deleteFile(bucket: string, path: string): Promise<void> {
    try {
        const command = new DeleteObjectCommand({
            Bucket: bucket || process.env.AWS_S3_BUCKET_NAME,
            Key: path,
        })

        await s3Client.send(command)
    } catch (error: any) {
        throw new Error(`Failed to delete from S3 (${path}): ${error.message}`)
    }
}

/**
 * List all files in a bucket with optional prefix
 */
export async function listFiles(
    bucket: string,
    prefix?: string
): Promise<string[]> {
    try {
        const command = new ListObjectsV2Command({
            Bucket: bucket || process.env.AWS_S3_BUCKET_NAME,
            Prefix: prefix,
        })

        const data = await s3Client.send(command)
        return data.Contents?.map((item) => item.Key || '') || []
    } catch (error: any) {
        throw new Error(`Failed to list files from S3: ${error.message}`)
    }
}

/**
 * Bucket check (Simplified for S3 implementation)
 */
export async function bucketExists(bucketName: string): Promise<boolean> {
    // In S3, we usually assume the bucket exists or handle the 404 in the call
    // but we can return true here as we've pre-configured the bucket
    return true
}

/**
 * Create Bucket (Handled manually in AWS Console for this migration)
 */
export async function createBucket(
    bucketName: string,
    isPublic = true
): Promise<void> {
    console.log(`Note: Bucket "${bucketName}" creation should be done in AWS Console. Skipping...`)
}
