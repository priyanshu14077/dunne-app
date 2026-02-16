export const STORAGE_BASE = process.env.NEXT_PUBLIC_CLOUDFRONT_URL || 'https://lnvmeghqivgvoziklfpk.supabase.co/storage/v1/object/public/assets';

export const S3_CONFIG = {
  BUCKET: 'dunne-assets-prod',
  REGION: 'ap-south-1',
  UPLOAD_URL: '/api/upload-preview',
} as const;

export const CLOUDFRONT_CONFIG = {
  DOMAIN: 'https://d1y585exbg6kr2.cloudfront.net',
  PATH_PREFIX: 'previewer',
  CACHE_TTL_SECONDS: 86400, 
} as const;

export const PREVIEW_UPLOAD = {
  MAX_BLOB_SIZE: 5 * 1024 * 1024, 
  MIN_BLOB_SIZE: 50 * 1024, 
  BLOB_TIMEOUT_MS: 10000, 
  UPLOAD_TIMEOUT_MS: 30000, 
  MAX_RETRIES: 3,
  RETRY_DELAYS_MS: [500, 1500, 3000], 
  CAPTURE_CONFIG: {
    backgroundColor: '#ffffff',
    pixelRatio: 2,
    cacheBust: true,
  }
} as const;
