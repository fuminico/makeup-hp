"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Code, CheckCircle, BarChart, Globe,
  ShoppingCart, Layout, Server, Database, Smartphone,
  Users, Shield, Zap
} from "lucide-react";
import { getImagePath } from "@/lib/utils";

export default function DevelopmentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-dev-jp.jpg")}
            alt="WEBシステム開発"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/20 to-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/30 backdrop-blur-md">
              WEB SYSTEM DEVELOPMENT
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
              ビジネスの進化を加速させる<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                堅牢で柔軟なシステム基盤
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              アナログ業務の自動化から、大規模プラットフォーム構築まで。<br />
              最新テクノロジーとビジネス視点を融合させ、貴社の成長を支えるエンジンを作ります。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              開発の相談をする <ArrowRight size={20} />
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
              「作る」だけではない。<br />
              <span className="text-blue-600">ビジネスを成功させる</span>ための<br />
              システム開発。
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                デジタルトランスフォーメーション（DX）が叫ばれる現代、システムは「業務効率化のツール」から「ビジネスの競争力を決定づける核心」へと役割を変えています。
              </p>
              <p>
                当社のWEBシステム開発は、単なるプログラミング作業ではありません。お客様のビジネスモデルと将来のビジョンを深く理解し、「技術的に可能か」だけでなく「ビジネスとして正しいか」を常に問い続けます。
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
                src={getImagePath("/images/dev-team-jp.jpg")}
                alt="開発チームの協働作業"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details - シンプルで分かりやすく */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">主な開発領域</h2>
            <p className="text-slate-600">あらゆるニーズに対応する開発サービス</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. DX / Business System */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <BarChart size={24} />
                </span>
                <h3 className="text-2xl font-bold text-slate-900">業務システム開発</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                アナログで非効率な業務プロセスをデジタル化し、生産性を劇的に向上させます。紙やExcelでの管理から脱却し、リアルタイムなデータ活用を実現します。
              </p>
              <ul className="space-y-3">
                {[
                  "顧客管理システム (CRM)",
                  "在庫管理・受発注システム",
                  "人事労務・勤怠管理システム",
                  "データ分析・BIツール導入"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Web Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Globe size={24} />
                </span>
                <h3 className="text-2xl font-bold text-slate-900">WEBプラットフォーム</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                BtoB、BtoCを問わず、大規模なWEBサービスの構築実績が豊富です。ユーザー体験を重視した設計で、使いやすく拡張性の高いプラットフォームを構築します。
              </p>
              <ul className="space-y-3">
                {[
                  "ビジネスマッチングサイト",
                  "CtoCシェアリングプラットフォーム",
                  "SaaSプロダクト開発",
                  "予約管理・会員サイト構築"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle size={18} className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. EC Site */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <ShoppingCart size={24} />
                </span>
                <h3 className="text-2xl font-bold text-slate-900">ECサイト構築</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                ShopifyやWooCommerceを用いたスピーディーな立ち上げから、フルスクラッチまで対応。売上を最大化する機能設計と、運用しやすい管理画面を提供します。
              </p>
              <ul className="space-y-3">
                {[
                  "Shopify / WooCommerce導入",
                  "EC-CUBE / フルスクラッチ開発",
                  "越境EC対応",
                  "基幹システム・POS連携"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-slate-400">最新かつ安定した技術を選定し、長期的に運用可能なシステムを構築します</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 mb-4"><Layout size={32} /></div>
              <h3 className="text-xl font-bold mb-2">フロントエンド</h3>
              <p className="text-slate-400 text-sm">リアクト、Next.js、Vue.js、タイプスクリプト、Tailwind CSS</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
              <div className="text-green-400 mb-4"><Server size={32} /></div>
              <h3 className="text-xl font-bold mb-2">バックエンド</h3>
              <p className="text-slate-400 text-sm">Node.js、Go言語、Python、Laravel、GraphQL</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-yellow-500 transition-colors">
              <div className="text-yellow-400 mb-4"><Database size={32} /></div>
              <h3 className="text-xl font-bold mb-2">クラウド・インフラ</h3>
              <p className="text-slate-400 text-sm">AWS、Google Cloud、Azure、Docker、Kubernetes</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-pink-500 transition-colors">
              <div className="text-pink-400 mb-4"><Smartphone size={32} /></div>
              <h3 className="text-xl font-bold mb-2">モバイルアプリ</h3>
              <p className="text-slate-400 text-sm">React Native、Flutter、Swift、Kotlin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">当社の強み</h2>
            <p className="text-slate-600">なぜメイクアップのWEBシステム開発が選ばれるのか</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</span>
                ビジネス視点を持つエンジニア集団
              </h3>
              <p className="text-slate-600 leading-relaxed">
                お客様のビジネスモデルを理解し、ROI（投資対効果）を最大化する提案ができます。「技術的に可能か」だけでなく「ビジネスとして正しいか」を常に考えながら開発を進めます。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</span>
                最新技術への迅速なキャッチアップ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                最新の技術動向をウォッチし、貴社のビジネスに有益な技術を積極的に取り入れます。一方で、無闇に新しい技術を使うのではなく、最適な技術選定を行います。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</span>
                長期的な保守運用を見据えた設計
              </h3>
              <p className="text-slate-600 leading-relaxed">
                将来の機能追加や仕様変更を見据え、拡張性の高いアーキテクチャを設計します。ドキュメント整備やコードレビューを徹底し、誰でもメンテナンスできる状態を保ちます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process - シンプルで分かりやすく */}
      <section className="py-24 container mx-auto px-4 bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">開発プロセス</h2>
          <p className="text-slate-600">アジャイル開発を基本とし、柔軟かつスピーディーに進めます</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {[
            { num: "01", title: "ヒアリング・要件定義", icon: Users },
            { num: "02", title: "設計・プロトタイピング", icon: Layout },
            { num: "03", title: "開発・テスト", icon: Code },
            { num: "04", title: "品質保証", icon: Shield },
            { num: "05", title: "リリース・運用", icon: Zap }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={20} />
                </div>
                <div className="text-blue-600 text-sm font-bold mb-2">{item.num}</div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              </div>
              {index < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">よくあるご質問</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "開発期間はどのくらいですか？",
                a: "プロジェクトの規模により異なりますが、小規模なシステムで数ヶ月、中規模で半年程度、大規模で半年以上が目安です。要件定義の段階で詳細なスケジュールをご提示します。アジャイル開発を採用することで、早期にMVP（Minimum Viable Product）をリリースし、フィードバックを得ながら改善していくことも可能です。"
              },
              {
                q: "開発後の保守運用もお願いできますか？",
                a: "はい、可能です。月額保守契約により、バグ修正、セキュリティアップデート、機能追加などを継続的にサポートいたします。サーバー監視や障害対応もお任せください。システムは「作って終わり」ではなく、ビジネスの成長に合わせて進化させていくものです。当社では、長期的なパートナーとして貴社のシステムを育て続けます。"
              },
              {
                q: "既存システムの改修や引き継ぎは可能ですか？",
                a: "はい、可能です。ただし、既存システムのドキュメント有無やコードの状態によっては、調査にお時間をいただく場合や、リプレイス（作り直し）をご提案する場合もございます。まずは現状のシステムを診断し、最適な改善プランをご提案いたします。"
              },
              {
                q: "セキュリティ対策はどうなっていますか？",
                a: "セキュリティは設計段階から組み込みます。SSL/TLS通信の暗号化、SQLインジェクション・XSS攻撃への対策、適切な認証・認可の実装など、OWASP Top 10に基づいたセキュリティ対策を標準で実施します。また、定期的な脆弱性診断やペネトレーションテストのサポートも提供可能です。"
              },
              {
                q: "他社で開発したシステムとの連携は可能ですか？",
                a: "はい、API連携やデータ連携により、既存システムとの統合が可能です。会計ソフト、CRM、ECカートシステムなど、様々な外部サービスとの連携実績があります。システムを一度にすべて入れ替えるのではなく、段階的に移行していくアプローチも可能です。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-3 text-slate-900 flex items-start gap-3">
                  <span className="text-blue-500">Q.</span> {item.q}
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
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたのビジネスアイデアを、<br />
            最強のシステムで実現しませんか？
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            要件が決まっていなくても大丈夫です。<br />
            技術的な実現可能性から予算感、スケジュールまで丁寧にご説明します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}
