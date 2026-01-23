import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statischer Export für IONOS
  trailingSlash: true, // Wichtig für statisches Hosting
  images: {
    unoptimized: true, // Erforderlich für statischen Export
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
