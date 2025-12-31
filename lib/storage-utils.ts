import { supabase } from './supabase'

export interface UploadResult {
    publicUrl: string
    path: string
}

/**
 * Get the public URL for a file in Supabase Storage
 */
export function getPublicUrl(bucket: string, path: string): string {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path)
    return data.publicUrl
}

/**
 * Upload a file to Supabase Storage
 */
export async function uploadFile(
    bucket: string,
    path: string,
    file: File | Buffer,
    contentType?: string,
    client = supabase
): Promise<UploadResult> {
    const { data, error } = await client.storage
        .from(bucket)
        .upload(path, file, {
            contentType,
            upsert: true, // Overwrite if exists
        })

    if (error) {
        throw new Error(`Failed to upload ${path}: ${error.message}`)
    }

    const publicUrl = getPublicUrl(bucket, data.path)

    return {
        publicUrl,
        path: data.path,
    }
}

/**
 * Delete a file from Supabase Storage
 */
export async function deleteFile(bucket: string, path: string, client = supabase): Promise<void> {
    const { error } = await client.storage.from(bucket).remove([path])

    if (error) {
        throw new Error(`Failed to delete ${path}: ${error.message}`)
    }
}

/**
 * List all files in a bucket with optional prefix
 */
export async function listFiles(
    bucket: string,
    prefix?: string,
    client = supabase
): Promise<string[]> {
    const { data, error } = await client.storage.from(bucket).list(prefix)

    if (error) {
        throw new Error(`Failed to list files: ${error.message}`)
    }

    return data.map((file) => file.name)
}

/**
 * Check if a bucket exists
 */
export async function bucketExists(bucketName: string, client = supabase): Promise<boolean> {
    const { data } = await client.storage.listBuckets()
    return data?.some((bucket) => bucket.name === bucketName) ?? false
}

/**
 * Create or update a public storage bucket
 */
export async function createBucket(
    bucketName: string,
    isPublic = true,
    client = supabase
): Promise<void> {
    const exists = await bucketExists(bucketName, client)
    
    const bucketOptions = {
        public: isPublic,
        fileSizeLimit: 52428800, // 50MB
        allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/svg+xml',
            'image/webp',
        ],
    }

    if (exists) {
        console.log(`Bucket "${bucketName}" already exists, updating configuration...`)
        const { error } = await client.storage.updateBucket(bucketName, bucketOptions)
        if (error) {
            throw new Error(`Failed to update bucket ${bucketName}: ${error.message}`)
        }
        return
    }

    const { error } = await client.storage.createBucket(bucketName, bucketOptions)

    if (error) {
        throw new Error(`Failed to create bucket ${bucketName}: ${error.message}`)
    }

    console.log(`✅ Created bucket: ${bucketName}`)
}
