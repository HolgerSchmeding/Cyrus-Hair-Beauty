import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyrus-hair-beauty-da-9iuq.bolt.host',
      },
      {
        protocol: 'https',
        hostname: 'kiohlcptlcxbmfmckouj.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
