"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Briefcase, MapPin, User, Calendar, DollarSign, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getImagePath } from "@/lib/utils";

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-company.jpg")}
            alt="会社概要"
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
              会社概要
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              株式会社メイクアップについて
            </p>
          </motion.div>
        </div>
      </section >

      {/* Company Philosophy */}
      < section className="py-24 container mx-auto px-4" >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 text-center">
              その課題、解決のプロフェッショナルがここにいます。
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
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
      </section >

      {/* Company Information */}
      < section className="py-24 bg-slate-50" >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
              会社情報
            </h2>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="divide-y divide-slate-200">
                {/* 社名 */}
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 px-8 py-6 md:w-1/3 flex items-center gap-3">
                    <Briefcase className="text-blue-600" size={24} />
                    <span className="font-bold text-slate-900">社名</span>
                  </div>
                  <div className="px-8 py-6 md:w-2/3 flex items-center">
                    <span className="text-slate-700">株式会社メイクアップ</span>
                  </div>
                </div>

                {/* 所在地 */}
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 px-8 py-6 md:w-1/3 flex items-center gap-3">
                    <MapPin className="text-blue-600" size={24} />
                    <span className="font-bold text-slate-900">所在地</span>
                  </div>
                  <div className="px-8 py-6 md:w-2/3 flex items-center">
                    <span className="text-slate-700">福岡市早良区百道一丁目1番</span>
                  </div>
                </div>

                {/* 代表者 */}
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 px-8 py-6 md:w-1/3 flex items-center gap-3">
                    <User className="text-blue-600" size={24} />
                    <span className="font-bold text-slate-900">代表者</span>
                  </div>
                  <div className="px-8 py-6 md:w-2/3 flex items-center">
                    <span className="text-slate-700">鏡 貴之</span>
                  </div>
                </div>

                {/* 設立年月日 */}
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 px-8 py-6 md:w-1/3 flex items-center gap-3">
                    <Calendar className="text-blue-600" size={24} />
                    <span className="font-bold text-slate-900">設立年月日</span>
                  </div>
                  <div className="px-8 py-6 md:w-2/3 flex items-center">
                    <span className="text-slate-700">2022年3月</span>
                  </div>
                </div>

                {/* 資本金 */}
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 px-8 py-6 md:w-1/3 flex items-center gap-3">
                    <DollarSign className="text-blue-600" size={24} />
                    <span className="font-bold text-slate-900">資本金</span>
                  </div>
                  <div className="px-8 py-6 md:w-2/3 flex items-center">
                    <span className="text-slate-700">900万円</span>
                  </div>
                </div>

                {/* 事業内容 */}
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 px-8 py-6 md:w-1/3 flex items-center gap-3">
                    <Mail className="text-blue-600" size={24} />
                    <span className="font-bold text-slate-900">事業内容</span>
                  </div>
                  <div className="px-8 py-6 md:w-2/3">
                    <div className="text-slate-700 space-y-2">
                      <p>・WEBシステム開発</p>
                      <p>・営業代行業</p>
                      <p>・コンサルティング</p>
                      <p>・コンテンツ制作</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-24 bg-blue-600" >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            貴社のビジネス課題について、<br />
            まずはお話をお聞かせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
          >
            お問い合わせ <ArrowRight size={20} />
          </Link>
        </div>
      </section >
    </div >
  );
}
