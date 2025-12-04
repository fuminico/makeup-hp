"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, Video, PenTool,
  Image as ImageIcon, Edit3, Play, Layers,
  Monitor, Smartphone, Mic, Aperture, Palette, TrendingUp
} from "lucide-react";

export default function ContentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-content-jp.jpg"
            alt="コンテンツ制作サービス"
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
            <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-300 text-sm font-semibold mb-6 border border-pink-500/30 backdrop-blur-md">
              CREATIVE PRODUCTION
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
              心を動かし、<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-orange-400">
                行動を変える
              </span>
              クリエイティブ
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              美しいだけでは意味がない。<br />
              貴社の想いを「伝わる」カタチにし、ビジネスの成果につなげます。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-lg hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-pink-600/30"
            >
              制作の相談をする <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
              情報過多の時代、<br />
              <span className="text-pink-600">誰の心</span>に<br />
              届けたいですか？
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                現代人は日々膨大な情報にさらされています。その中で貴社のメッセージをターゲットに届けることは容易ではありません。単に「綺麗なデザイン」「かっこいい動画」を作るだけでは一瞬でスルーされてしまいます。
              </p>
              <p>
                株式会社メイクアップのコンテンツ制作は、「誰に」「何を」「どう伝えるか」という戦略設計から始まります。ターゲットのインサイト（深層心理）を洞察し、感情を揺さぶるストーリーと視覚的に惹きつけるデザインを融合させます。
              </p>
              <p>
                動画、記事、SNS投稿、ホワイトペーパーなど、多様なフォーマットに対応し、ブランドの世界観を一貫して表現します。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/content-production-jp.jpg"
                alt="コンテンツ制作現場の様子"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">コンテンツ制作の哲学</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                優れたコンテンツには「戦略性」「創造性」「実行力」の3つの要素が必要です。当社のコンテンツ制作は、マーケティング戦略とクリエイティブ表現の両輪で進めます。ターゲット顧客のペルソナを明確にし、各タッチポイントで最適なコンテンツを企画・制作します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Lineup */}
      <section className="py-24 container mx-auto px-4 bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Creative Menu</h2>
          <p className="text-slate-600">あらゆるメディアに対応する制作メニュー</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 1. Video */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-pink-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                <Video size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">動画制作 (Video Production)</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              テキストや静止画では伝えきれない情報を、映像と音で直感的に伝えます。
              会社紹介、サービス紹介、採用動画、YouTubeチャンネル運用、SNSショート動画など、目的に合わせた最適なフォーマットで制作。
              企画構成から撮影、編集、ナレーション収録までワンストップで対応します。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> 会社紹介・採用動画</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> YouTubeチャンネル運用代行</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> SNSショート動画（TikTok/Reels）</li>
            </ul>
          </div>

          {/* 2. Web Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-purple-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <Monitor size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">WEBデザイン・制作</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              使いやすさと美しさを兼ね備えたWEBサイトを構築します。
              コーポレートサイト、ランディングページ（LP）、採用サイト、オウンドメディアなど。
              SEO対策やモバイル対応（レスポンシブ）はもちろん、更新のしやすさ（CMS導入）も考慮した設計を行います。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> コーポレートサイト・LP制作</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> UI/UXデザイン</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> オウンドメディア構築</li>
            </ul>
          </div>

          {/* 3. Graphic Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-indigo-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <ImageIcon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">グラフィックデザイン</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              紙媒体からデジタルまで、一貫した世界観でデザインします。
              ロゴマーク、名刺、封筒などのステーショナリーから、パンフレット、カタログ、ポスター、展示会パネルまで。
              企業のブランドイメージを視覚的に統一し、信頼感を高めるデザインを提供します。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-indigo-500" /> ロゴ・VI開発</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-indigo-500" /> パンフレット・カタログ</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-indigo-500" /> 名刺・ノベルティグッズ</li>
            </ul>
          </div>

          {/* 4. Writing */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-orange-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Edit3 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">ライティング・編集</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              ユーザーの検索意図や心理を読み解き、SEOにも強い文章を作成します。
              社長インタビュー、社員紹介、導入事例記事などの取材・執筆から、キャッチコピー開発、メルマガ作成まで。
              「読まれる」「伝わる」「行動させる」言葉の力で、ビジネスを後押しします。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-orange-500" /> 取材・インタビュー記事作成</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-orange-500" /> SEO記事ライティング</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-orange-500" /> コピーライティング</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Production Process</h2>
            <p className="text-slate-400">企画から納品まで、一貫した品質管理</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "ヒアリング・企画構成",
                desc: "目的、ターゲット、予算、納期などをヒアリングし、最適なプランを企画・提案します。構成案（絵コンテやワイヤーフレーム）を作成し、完成イメージを共有します。"
              },
              {
                step: "02",
                title: "制作・撮影",
                desc: "デザイン制作、撮影、ライティングなど、各分野のプロフェッショナルが実制作を行います。クオリティ管理を徹底し、スケジュール通りに進行します。"
              },
              {
                step: "03",
                title: "編集・修正",
                desc: "制作物をご確認いただき、フィードバックを反映して修正を行います。細部まで調整し、納得いただけるクオリティに仕上げます。"
              },
              {
                step: "04",
                title: "納品・公開",
                desc: "最終確認後、指定の形式で納品します。WEBサイトの公開作業や、動画のアップロード作業などもサポートいたします。"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center font-bold text-white shadow-lg z-10">
                    {item.step}
                  </div>
                  {index !== 3 && <div className="w-0.5 h-full bg-slate-700 -my-2" />}
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">FAQ</h2>
            <p className="text-slate-600">よくあるご質問</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "制作期間はどのくらいですか？",
                a: "コンテンツの種類により異なります。ロゴデザインで数週間、動画制作で数ヶ月、WEBサイト制作で数ヶ月が目安です。お急ぎの場合は特急対応も可能です。"
              },
              {
                q: "修正は何回まで可能ですか？",
                a: "基本プランでは、各工程ごとに複数回の修正を含んでいます。初回の企画構成段階でしっかりと方向性をすり合わせることで、大幅な修正が発生しないよう努めています。"
              },
              {
                q: "デザインの方向性が決まっていなくても大丈夫ですか？",
                a: "はい、問題ありません。競合分析やターゲット分析を行い、複数のデザイン案をご提案します。その中から最も効果的なものを選定していくプロセスで、貴社のブランドイメージが明確になっていきます。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-3 text-slate-900 flex items-start gap-3">
                  <span className="text-pink-500">Q.</span> {item.q}
                </h3>
                <p className="text-slate-600 pl-8 leading-relaxed">
                  <span className="font-bold text-slate-400 mr-2">A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            貴社の魅力を、<br />
            世界に届けましょう。
          </h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            まずは無料相談で、貴社の想いをお聞かせください。<br />
            最適なクリエイティブをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-xl"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}
