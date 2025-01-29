import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
 
module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: '3mb',
    },
  },
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ]
  }
};

export default nextConfig;
