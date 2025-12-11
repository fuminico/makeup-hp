/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // 静的ホスティング向けに末尾スラッシュを付与
  images: {
    unoptimized: true, // next export で画像最適化を使わない
  },
};

export default nextConfig;
