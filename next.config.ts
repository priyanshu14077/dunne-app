import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 441, 600, 768, 800, 1024, 1440, 1920],
    qualities: [75, 85],
  },
};

export default nextConfig;
