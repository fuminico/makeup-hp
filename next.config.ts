import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/makeup-hp',
  assetPrefix: '/makeup-hp',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/makeup-hp',
  },
};

export default nextConfig;
