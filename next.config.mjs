/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // 静的ホスティング向けに末尾スラッシュを付与
  images: {
    unoptimized: true, // next export で画像最適化を使わない
  },
  env: {
    // フォーム送信先（Formspree）
    NEXT_PUBLIC_FORMSPREE_ENDPOINT: 'https://formspree.io/f/xjknpggo',
  },
};

export default nextConfig;
