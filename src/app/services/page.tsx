"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Code, TrendingUp, Users, PenTool, CheckCircle, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getImagePath } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-services.jpg")}
            alt="サービス概要"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/30 to-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
              サービス概要
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              4つの専門サービスで、ビジネスを全方位から支援
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            ビジネスの成長を、<br />
            あらゆる角度からサポート
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            当社は、WEBシステム開発、営業代行、コンサルティング、コンテンツ制作の4つの専門サービスを提供しています。
            それぞれの分野のプロフェッショナルが連携し、お客様のビジネス課題を総合的に解決します。
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* WEBシステム開発 */}
            <Link href="/service/development">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-blue-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-dev-jp.jpg")}
                    alt="WEBシステム開発"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                      <Code size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">WEBシステム開発</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    アナログ業務の自動化から、大規模プラットフォーム構築まで。最新テクノロジーで貴社の成長を支えるシステムを構築します。
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      業務システム開発・DX推進
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      WEBプラットフォーム構築
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      ECサイト開発・運用
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group">
                    詳しく見る
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 営業代行 */}
            <Link href="/service/sales">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-purple-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-sales-jp.jpg")}
                    alt="営業代行"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                      <TrendingUp size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">営業代行</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    「良い商品なのに売れない」を終わらせる。戦略立案から実行まで、プロフェッショナルが貴社の売上を最大化します。
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      新規開拓・テレアポ代行
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      インサイドセールス構築
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      営業戦略立案・実行支援
                    </div>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold group">
                    詳しく見る
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* コンサルティング */}
            <Link href="/service/consulting">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-consulting-jp.jpg")}
                    alt="コンサルティング"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                      <Users size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">コンサルティング</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    机上の空論はいらない。現場に入り込み、共に汗をかき、成果が出るまで伴走する実践的なコンサルティング。
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      経営戦略・事業戦略立案
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      マーケティング・ブランディング
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      組織改革・業務改善
                    </div>
                  </div>
                  <div className="flex items-center text-emerald-600 font-semibold group">
                    詳しく見る
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* コンテンツ制作 */}
            <Link href="/service/content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-pink-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-content-jp.jpg")}
                    alt="コンテンツ制作"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-4">
                      <Video size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">コンテンツ制作</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    心を動かし、行動を変えるクリエイティブ。貴社の想いを「伝わる」カタチにし、ビジネスの成果につなげます。
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                      動画制作・映像コンテンツ
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                      WEBデザイン・グラフィック
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                      ライティング・編集
                    </div>
                  </div>
                  <div className="flex items-center text-pink-600 font-semibold group">
                    詳しく見る
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
            当社が選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-3xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">総合力</h3>
              <p className="text-slate-600 leading-relaxed">
                4つの専門サービスを連携させ、ビジネス課題を多角的に解決します。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                <span className="text-3xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">実践的</h3>
              <p className="text-slate-600 leading-relaxed">
                机上の空論ではなく、現場に入り込み、成果が出るまで伴走します。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
                <span className="text-3xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">パートナー</h3>
              <p className="text-slate-600 leading-relaxed">
                単なる業務委託先ではなく、貴社の成功を共に目指すパートナーです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            課題が明確でなくても大丈夫です。<br />
            対話を通じて、一緒に解決策を見つけていきましょう。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-12 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            無料相談を申し込む <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div >
  );
}
