import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/makeup-hp',
  assetPrefix: '/makeup-hp',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
