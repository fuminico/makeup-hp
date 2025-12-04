"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle, Code, TrendingUp, Users, Zap, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getImagePath } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-home.jpg")}
            alt="ビジネスの可能性を最大化する"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/50 to-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-tight leading-tight">
              ビジネスの<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                可能性を、最大化する
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              テクノロジーとクリエイティブの力で、<br />
              貴社のビジネスを次のステージへ
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              無料相談を始める <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              その課題、解決のプロフェッショナルがここにいます。
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
              <p>
                「良いサービスなのに、なぜか売上が伸びない」<br />
                「日々の業務が煩雑で、本来の仕事に集中できない」
              </p>
              <p>
                メイクアップは、そんなお客様が抱える課題の根本原因を突き止め、解決への最短ルートをご提案します。私たちの強みは、4つの専門分野を連携させた「総合力」です。
              </p>
              <p>
                事業の進むべき道筋を描き（Strategize）、<br />
                想いを伝えるコンテンツで顧客を惹きつけ（Engage）、<br />
                強固なシステムで日々の業務を支え（Build）、<br />
                そして圧倒的な営業力でビジネスを加速させる（Accelerate）。
              </p>
              <p>
                私たちは単なる業務委託先ではありません。お客様の最も身近な相談相手であり、成功に向けて共に走り続けるパートナーです。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-xl text-slate-600">4つの専門サービスで、ビジネスを全方位から支援</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* WEBシステム開発 */}
            <Link href="/service/development">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-blue-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-dev-jp.jpg")}
                    alt="WEBシステム開発"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Code size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">WEBシステム開発</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    アナログ業務の自動化から、大規模プラットフォーム構築まで。最新テクノロジーで貴社の成長を支えるシステムを構築します。
                  </p>
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
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-purple-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-sales-jp.jpg")}
                    alt="営業代行"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">営業代行</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    「良い商品なのに売れない」を終わらせる。戦略立案から実行まで、プロフェッショナルが貴社の売上を最大化します。
                  </p>
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
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-consulting-jp.jpg")}
                    alt="コンサルティング"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <Users size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">コンサルティング</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    机上の空論はいらない。現場に入り込み、共に汗をかき、成果が出るまで伴走する実践的なコンサルティング。
                  </p>
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
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-pink-200 transition-all cursor-pointer h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getImagePath("/images/hero-content-jp.jpg")}
                    alt="コンテンツ制作"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                    <Video size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">コンテンツ制作</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    心を動かし、行動を変えるクリエイティブ。貴社の想いを「伝わる」カタチにし、ビジネスの成果につなげます。
                  </p>
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

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            課題が明確でなくても大丈夫です。<br />
            対話を通じて、一緒に解決策を見つけていきましょう。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div >
  );
}
