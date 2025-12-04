"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, TrendingUp, Users, Phone,
  Mail, Target, BarChart2, PieChart, Award,
  Briefcase, MessageCircle, Globe
} from "lucide-react";

export default function SalesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-sales-jp.jpg"
            alt="Sales Agency Service"
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
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-6 border border-purple-500/30 backdrop-blur-md">
              SALES AGENCY SERVICE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
              最強の営業チームを、<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                即座にあなたの会社へ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              「良い商品なのに売れない」を終わらせる。<br />
              戦略立案から実行まで、プロフェッショナルが貴社の売上を最大化します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-600/30"
            >
              営業の相談をする <ArrowRight size={20} />
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
              営業リソース不足が、<br />
              <span className="text-purple-600">成長のボトルネック</span>に<br />
              なっていませんか？
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                素晴らしいプロダクトも、顧客に届けられなければビジネスは成功しません。多くの企業が「営業人材の採用難」「教育コストの増大」「属人化」といった課題に直面しています。
              </p>
              <p>
                当社の営業代理サービスは、単なる「人貸し」ではありません。市場調査、ターゲット選定、トークスクリプトの作成から商談・クロージングまで一気通貫でサポートします。営業は科学です。データに基づいた仮説検証を繰り返し、再現性のある勝ちパターンを確立します。
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
                src="/images/sales-presentation-jp.jpg"
                alt="営業プレゼンテーション"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Us?</h2>
            <p className="text-slate-600">当社の営業代理が選ばれる3つの理由</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "戦略的アプローチ",
                desc: "単なる「数打ちゃ当たる」営業はしません。市場分析に基づき、最も成約確度の高いターゲットを選定。論理的かつ戦略的にアプローチを設計します。"
              },
              {
                icon: Users,
                title: "プロフェッショナルチーム",
                desc: "様々な業界で実績を積んだトップセールスマンがチームを組成。貴社の商材を深く理解し、社員以上の熱量を持って顧客に提案します。"
              },
              {
                icon: BarChart2,
                title: "データドリブンな改善",
                desc: "すべての活動を数値化・可視化。KPIに基づきPDCAを高速で回し、勝ちパターンを確立。営業プロセスをブラックボックス化させません。"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">成功事例の背景</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                当社の営業代理サービスが成果を出せる理由は、マーケティング、心理学、データ分析など複合的なスキルを持つチームが科学的なアプローチで営業活動を設計しているからです。単に数字を作るだけでなく、貴社に「勝ちパターン」を残すことを大切にしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Lineup */}
      <section className="py-24 container mx-auto px-4 bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Service Menu</h2>
          <p className="text-slate-600">フェーズに合わせた最適なプランをご提案</p>
        </div>

        <div className="space-y-24">
          {/* 1. Test Marketing */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-900 mb-6 text-center">営業プロセスの最適化</h4>
                  <div className="space-y-4">
                    {[
                      { label: "リード獲得", icon: "🎯", desc: "ターゲット顧客の選定" },
                      { label: "アプローチ", icon: "📞", desc: "電話・メール・オンライン" },
                      { label: "商談化", icon: "🤝", desc: "ヒアリング・提案" },
                      { label: "クロージング", icon: "✅", desc: "契約締結" }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <div className="text-3xl">{step.icon}</div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">{step.label}</div>
                          <div className="text-sm text-slate-600">{step.desc}</div>
                        </div>
                        {i < 3 && <div className="text-purple-400">→</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">01</span>
                テストマーケティング
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                新規事業の立ち上げ時など、まだ市場の反応が読めない段階で、少人数チームで仮説検証を行います。
                「誰に」「何を」「どのように」売れば響くのか、PMF（Product Market Fit）の達成を支援します。
                大量のリソースを投下する前に、勝てる戦略を見極めるためのプランです。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> ターゲット顧客の選定と検証</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> トークスクリプトのABテスト</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> 顧客フィードバックの収集と製品改善提案</li>
              </ul>
            </div>
          </div>

          {/* 2. Inside Sales */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">02</span>
                インサイドセールス代行
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                電話、メール、オンライン商談ツールを活用し、非対面で効率的にリード（見込み客）を獲得・育成します。
                マーケティング部門が獲得したリードに対して迅速にアプローチし、商談化（アポイント獲得）までを担当。
                フィールドセールスが商談に集中できる環境を作り出し、組織全体の受注率を向上させます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> コール活動（アウトバウンド/インバウンド）</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> メールマーケティング・ナーチャリング</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-pink-500" /> オンライン商談によるヒアリング</li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <Phone className="text-pink-500 mb-2" size={32} />
                    <div className="font-bold text-slate-800">Calls</div>
                    <div className="text-sm text-slate-500">High Volume</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <Mail className="text-blue-500 mb-2" size={32} />
                    <div className="font-bold text-slate-800">Emails</div>
                    <div className="text-sm text-slate-500">Optimized</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <MessageCircle className="text-green-500 mb-2" size={32} />
                    <div className="font-bold text-slate-800">Chats</div>
                    <div className="text-sm text-slate-500">Real-time</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <Globe className="text-purple-500 mb-2" size={32} />
                    <div className="font-bold text-slate-800">Meetings</div>
                    <div className="text-sm text-slate-500">Qualified</div>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-slate-400">
                  ※マルチチャネルでのアプローチイメージ
                </div>
              </div>
            </div>
          </div>

          {/* 3. Closing & Consulting */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-center justify-center h-full flex-col">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 border-8 border-slate-100 rounded-full" />
                    <div className="absolute inset-0 border-8 border-purple-500 rounded-full border-t-transparent border-l-transparent rotate-45" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Award size={48} className="text-purple-600 mb-2" />
                      <div className="text-3xl font-bold text-slate-800">High</div>
                      <div className="text-sm text-slate-500">Goal Achievement</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-xs text-slate-400">
                    ※目標達成率の可視化イメージ
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">03</span>
                クロージング代行・営業コンサルティング
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                商談から契約締結までのクロージング業務を代行します。
                また、営業組織の構築支援、営業研修、SFA/CRMツールの導入支援など、貴社の営業力を底上げするためのコンサルティングも提供します。
                「売れる仕組み」を社内に構築し、最終的には自走できる組織を目指します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> 訪問商談・クロージング</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> 営業マニュアル・プレイブック作成</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle size={18} className="text-purple-500" /> SFA/CRM導入・定着支援</li>
              </ul>
            </div>
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
                q: "料金体系はどうなっていますか？",
                a: "基本的には成果報酬型または固定報酬＋成果報酬のハイブリッド型をご提案しています。貴社のビジネスモデルやフェーズに合わせて、リスクとリターンを共有できる最適なプランを提示いたします。スタートアップ企業様には、初期費用を抑えた成果報酬型を、安定企業様には予算が立てやすい固定報酬型をご提案することが多いです。"
              },
              {
                q: "活動報告はどのくらいの頻度でもらえますか？",
                a: "週次で詳細な活動レポートを提出し、月次で定例会議を実施して戦略の見直しを行います。CRMへのアクセス権をいただければ、リアルタイムで状況をご確認いただけます。"
              },
              {
                q: "対応可能なエリアは？",
                a: "インサイドセールスであれば全国・全世界対応可能です。フィールドセールス（訪問）が必要な場合も、主要都市（東京、大阪、福岡など）を中心に、全国のパートナーネットワークを活用して対応いたします。オンライン商談の普及により、地理的な制約はほとんどなくなりました。"
              },
              {
                q: "どのような業界・商材に対応できますか？",
                a: "BtoB、BtoCを問わず、幅広い業界に対応しています。SaaS、人材、不動産、製造業、金融など、多様な業界での実績があります。ただし、商材の特性や法規制により、対応が難しい場合もございますので、まずはご相談ください。初回ヒアリングで実現可能性を判断いたします。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-3 text-slate-900 flex items-start gap-3">
                  <span className="text-purple-500">Q.</span> {item.q}
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
      <section className="py-24 bg-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            売上の悩みは、<br />
            プロに任せて解決しませんか？
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            まずは現状の課題をお聞かせください。<br />
            貴社に最適な営業戦略をご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors shadow-xl"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}
