import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 441, 600, 768, 800, 1024, 1440, 1920],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lnvmeghqivgvoziklfpk.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'd1y585exbg6kr2.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.myshopify.com https://dunne.co.in http://dunne.co.in;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
