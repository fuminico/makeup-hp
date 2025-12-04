"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Users, Lightbulb, TrendingUp, CheckCircle,
  Settings, Target, BarChart2, MessageCircle, Compass
} from "lucide-react";
import { getImagePath } from "@/lib/utils";

export default function ConsultingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-consulting-jp.jpg")}
            alt="コンサルティングサービス"
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
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6 border border-emerald-500/30 backdrop-blur-md">
              BUSINESS CONSULTING
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
              経営の「迷い」を、<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
                「確信」に変える
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              机上の空論はいらない。<br />
              現場に入り込み、共に汗をかき、成果が出るまで伴走する。<br />
              それが当社のコンサルティングスタイルです。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/30"
            >
              経営の相談をする <ArrowRight size={20} />
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
              変化の激しい時代、<br />
              <span className="text-emerald-600">正解のない問い</span>に<br />
              挑み続ける経営者様へ。
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                現代のビジネス環境はかつてないスピードで変化しています。過去の成功体験が通用しない今、経営者は常に難しい決断を迫られています。
              </p>
              <p>
                当社のコンサルティングは、単にレポートを提出して終わりではありません。私たちは貴社の「社外No.2」として、現場の社員を巻き込みながら実行を支援し、組織全体が変わるまで粘り強く伴走します。「絵に描いた餅」で終わらせない、実践的なコンサルティングをお約束します。
              </p>
              <p>
                現状の課題を徹底的に分析し、あるべき姿を描き、そこに至るまでのロードマップを策定します。KPI（重要業績評価指標）を設定し、定量的に効果を測定しながらPDCAサイクルを高速で回します。
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
                src={getImagePath("/images/consulting-workshop-jp.jpg")}
                alt="コンサルティングワークショップの様子"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Style</h2>
            <p className="text-slate-600">当社のコンサルティングの特徴</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "ハンズオン型支援",
                desc: "会議室で議論するだけでなく、現場に入り込んで実務をサポートします。社員の方々と信頼関係を築き、組織の内側から変革を起こします。"
              },
              {
                icon: Compass,
                title: "戦略から実行まで",
                desc: "綺麗な戦略を描くだけでなく、それを実行可能なアクションプランに落とし込みます。PDCAを回しながら、成果が出るまで徹底的にやり抜きます。"
              },
              {
                icon: Target,
                title: "成果へのコミット",
                desc: "「何をしたか」ではなく「どんな成果が出たか」を重視します。KGI/KPIを明確に設定し、定量的なインパクトを追求します。"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">変革を実現する3つのステップ</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                コンサルティングプロジェクトの成否を分けるのは、「診断」「設計」「実行」の3つのステップをいかに丁寧に進められるかです。多くのコンサルティング会社は「診断」と「設計」で終わってしまいますが、当社は最も重要な「実行」まで責任を持って伴走します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Lineup */}
      <section className="py-24 container mx-auto px-4 bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Consulting Menu</h2>
          <p className="text-slate-600">企業の成長フェーズに合わせた支援領域</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 1. Strategy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-emerald-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">経営戦略・事業戦略</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              変化の激しい時代において、企業が勝ち残るためのロードマップを描きます。
              新規事業開発、事業再生、M&Aなど、経営の根幹に関わる意思決定をサポート。
              市場分析、競合分析に基づき、貴社の強みを最大限に活かせる戦略を立案します。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-emerald-500" /> 新規事業開発支援（0→1）</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-emerald-500" /> 事業再生・収益改善</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-emerald-500" /> M&A・アライアンス支援</li>
            </ul>
          </div>

          {/* 2. Marketing */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">マーケティング・ブランディング</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              「選ばれる」企業・商品になるための戦略を立案・実行します。
              デジタルマーケティングを中心に、SEO、広告運用、SNS活用など、集客から顧客育成（CRM）までを一気通貫で支援。
              また、企業のブランド価値を高めるためのCI/VI策定や浸透施策も行います。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-blue-500" /> デジタルマーケティング戦略</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-blue-500" /> ブランディング・CI/VI策定</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-blue-500" /> CRM・ロイヤリティ向上施策</li>
            </ul>
          </div>

          {/* 3. HR / Organization */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-pink-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">組織・人事コンサルティング</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              事業成長を支える「人」と「組織」の課題を解決します。
              採用戦略の立案から、評価制度の設計、人材育成研修まで、組織のフェーズに合わせた施策を提供。
              社員のエンゲージメントを高め、自律的に成長する強い組織づくりを支援します。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> 採用ブランディング・採用代行</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> 人事評価制度設計・運用</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> 管理職研修・スキルアップ研修</li>
            </ul>
          </div>

          {/* 4. BPR */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-orange-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Settings size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">業務改善 (BPR)</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              ムリ・ムダ・ムラをなくし、筋肉質な組織体制を構築します。
              現状の業務プロセスを可視化し、ボトルネックを特定。RPA導入やシステム化による自動化、マニュアル作成による標準化を推進します。
              コスト削減だけでなく、社員がより付加価値の高い業務に集中できる環境を作ります。
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-orange-500" /> 業務フロー可視化・改善</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-orange-500" /> RPA導入・DX推進支援</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-orange-500" /> マニュアル作成・標準化</li>
            </ul>
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
                q: "契約期間はどのくらいですか？",
                a: "プロジェクトにより異なりますが、数ヶ月の短期集中型から1年以上の長期伴走型まで、貴社のニーズに合わせて柔軟に対応いたします。"
              },
              {
                q: "費用対効果はどの程度ですか？",
                a: "プロジェクト開始時にKPIを設定し、定量的に効果を測定します。多くのケースで、コンサルティング費用を大きく上回る価値を生み出しています。売上向上、コスト削減、業務効率化など、具体的な数値目標を定めて進めていきます。"
              },
              {
                q: "他のコンサルティング会社との違いは何ですか？",
                a: "最大の違いは「ハンズオン型」であることです。レポートを作って終わりではなく、現場に入り込んで一緒に汗をかきます。また、開発・営業・コンテンツ制作などの実行部隊も持っているため、戦略立案から実行まで一気通貫で支援できます。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-3 text-slate-900 flex items-start gap-3">
                  <span className="text-emerald-500">Q.</span> {item.q}
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
      <section className="py-24 bg-emerald-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            経営の悩みを、<br />
            次なる成長の糧に。
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            まずは無料相談で、貴社の課題をお聞かせください。<br />
            解決への糸口を一緒に見つけましょう。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}
