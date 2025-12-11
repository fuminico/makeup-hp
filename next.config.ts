import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/makeup-hp' : '',
  assetPrefix: isProd ? '/makeup-hp' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/makeup-hp' : '',
  },
};

export default nextConfig;
