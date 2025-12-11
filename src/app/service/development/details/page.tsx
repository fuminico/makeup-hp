"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Code, Database, Cloud, Shield, Zap, Users, TrendingUp, Rocket } from 'lucide-react';
import { Highlight } from '@/components/ui/Highlight';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { getImagePath } from "@/lib/utils";

export default function DevelopmentDetailsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-dev-jp.jpg")}
            alt="WEBシステム開発サービス"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WEBシステム開発サービス詳細
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto">
              最新技術と確かな開発力で、ビジネスを加速するシステムを構築
            </p>
            <Link
              href="/service/development"
              className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>サービス概要に戻る</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 技術スタックと選定基準 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              技術スタックと選定基準
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              要件に応じて<Highlight color="blue">最適な技術</Highlight>を選定し、<Highlight color="blue">長期的に保守しやすい</Highlight>システムを構築します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* フロントエンド */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl"
            >
              <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">フロントエンド</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <Highlight color="blue">React</Highlight> / <Highlight color="blue">Next.js</Highlight> / <Highlight color="blue">TypeScript</Highlight>を中心に、モダンで保守性の高いフロントエンドを構築します。
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>高速なページ読み込み（SSR/SSG）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>SEO最適化とCore Web Vitals対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>レスポンシブデザインとアクセシビリティ</span>
                </li>
              </ul>
            </motion.div>

            {/* バックエンド */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl"
            >
              <div className="bg-emerald-500 text-white p-3 rounded-lg inline-block mb-4">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">バックエンド</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <Highlight color="emerald">Node.js</Highlight> / <Highlight color="emerald">Python</Highlight> / <Highlight color="emerald">Go</Highlight>など、用途に応じて最適な言語を選定します。
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>REST API / GraphQL設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>マイクロサービスアーキテクチャ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>PostgreSQL / MongoDB / Redis</span>
                </li>
              </ul>
            </motion.div>

            {/* インフラ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl"
            >
              <div className="bg-purple-500 text-white p-3 rounded-lg inline-block mb-4">
                <Cloud size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">インフラ</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <Highlight color="purple">AWS</Highlight> / <Highlight color="purple">GCP</Highlight> / <Highlight color="purple">Azure</Highlight>のクラウドインフラで、スケーラブルなシステムを構築します。
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>コンテナ化（Docker / Kubernetes）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>CI/CD パイプライン構築</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>監視・ログ分析システム</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900">技術選定の基準</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  当社では、<Highlight color="blue">流行の技術</Highlight>に飛びつくのではなく、<Highlight color="blue">実績と将来性</Highlight>を重視して技術を選定します。採用する技術は以下の基準で評価します。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>コミュニティの活発さと長期的なサポート</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>ドキュメントの充実度と学習コスト</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>パフォーマンスとスケーラビリティ</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-4">
                  また、お客様の<Highlight color="emerald">既存システム</Highlight>や<Highlight color="emerald">社内の技術スタック</Highlight>との親和性も考慮します。運用・保守のしやすさを最優先に、長く使い続けられるシステムを目指します。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>既存システムとの連携しやすさ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>保守・運用の容易さ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>エンジニアの採用市場と育成コスト</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 開発プロセスとアジャイル手法 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              開発プロセスとアジャイル手法
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              <Highlight color="blue">2週間スプリント</Highlight>でのアジャイル開発により、変化に強く柔軟なシステムを構築します
            </p>
          </motion.div>

          <ComparisonSection
            leftTitle="ウォーターフォール型開発の課題"
            leftContent={
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  従来の<Highlight color="orange">ウォーターフォール型開発</Highlight>では、すべての要件を最初に決定し、設計・開発・テストを順番に進めます。しかし、この手法には大きな問題があります。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  開発期間が長くなるほど、ビジネス環境が変化し、<Highlight color="orange">当初の要件が陳腐化</Highlight>してしまいます。完成したシステムが、実際に使ってみると使いづらいことも少なくありません。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  また、開発の後半で致命的なバグが発見されると、手戻りのコストが膨大になります。リリース時期の遅延も頻発します。
                </p>
              </div>
            }
            rightTitle="当社のアジャイル開発アプローチ"
            rightContent={
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  当社は<Highlight color="blue">アジャイル開発</Highlight>を採用し、<Highlight color="blue">2週間スプリント</Highlight>で小さな機能を継続的にリリースします。早期にユーザーフィードバックを得ることで、本当に必要な機能を優先的に開発できます。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <Highlight color="blue">デイリースタンドアップミーティング</Highlight>で進捗を共有し、問題があればすぐに対処します。透明性が高く、お客様も開発プロセスに参加できます。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  スプリントごとに動くソフトウェアをデモし、要件の変更にも柔軟に対応します。リスクを最小化し、価値を最大化します。
                </p>
              </div>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <Users className="text-blue-500" size={28} />
                デイリースタンドアップミーティング
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                毎朝15分のミーティングで、チーム全員が進捗を共有します。<Highlight color="blue">昨日やったこと</Highlight>、<Highlight color="blue">今日やること</Highlight>、<Highlight color="blue">困っていること</Highlight>の3点を報告し、問題を早期に発見します。
              </p>
              <p className="text-slate-700 leading-relaxed">
                お客様も参加可能で、開発状況をリアルタイムで把握できます。透明性が高く、安心して開発を任せられます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <Zap className="text-emerald-500" size={28} />
                CI/CDによる自動化
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <Highlight color="emerald">継続的インテグレーション</Highlight>（CI）と<Highlight color="emerald">継続的デリバリー</Highlight>（CD）により、コードの変更を自動的にテスト・ビルド・デプロイします。
              </p>
              <p className="text-slate-700 leading-relaxed">
                人的ミスを防ぎ、リリース頻度を高めることで、素早く価値を届けられます。品質を保ちながら、開発スピードを向上させます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 開発事例とプロジェクト実績 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              開発事例とプロジェクト実績
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              多様な業界で<Highlight color="blue">実績</Highlight>を積み上げてきました
            </p>
          </motion.div>

          {/* 事例1: SaaSプラットフォーム */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <Rocket size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">SaaSプラットフォーム：月間100万PV達成</h3>
                <p className="text-slate-600">人材マッチングSaaSサービス</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-blue-600">課題：</strong>既存の人材紹介サービスをSaaS化し、スケーラビリティと収益性を向上させたい。レスポンス速度の改善と、高度な検索機能の実装が必要でした。
              </p>
              <p>
                <strong className="text-blue-600">技術選定：</strong>フロントエンドは<Highlight color="blue">Next.js + TypeScript</Highlight>、バックエンドは<Highlight color="blue">Node.js + GraphQL</Highlight>、データベースは<Highlight color="blue">PostgreSQL + Elasticsearch</Highlight>を採用。インフラは<Highlight color="blue">AWS（ECS Fargate）</Highlight>で構築しました。
              </p>
              <p>
                <strong className="text-blue-600">成果：</strong>ページ読み込み速度が3秒から0.5秒に改善。検索精度が大幅に向上し、ユーザー満足度が40%アップ。リリース後6ヶ月で月間100万PVを達成し、有料ユーザー数が3倍に増加しました。
              </p>
            </div>
          </motion.div>

          {/* 事例2: ECサイト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-500 text-white p-3 rounded-lg">
                <TrendingUp size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">ECサイト：コンバージョン率3倍向上</h3>
                <p className="text-slate-600">アパレルD2Cブランド</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-emerald-600">課題：</strong>既存ECサイトのコンバージョン率が低く、カート離脱率が高い状況でした。モバイル対応も不十分で、ユーザー体験の改善が急務でした。
              </p>
              <p>
                <strong className="text-emerald-600">技術選定：</strong><Highlight color="emerald">Next.js + Shopify</Highlight>のヘッドレスコマース構成を採用。決済は<Highlight color="emerald">Stripe</Highlight>、配送管理は<Highlight color="emerald">ShipStation API</Highlight>と連携しました。
              </p>
              <p>
                <strong className="text-emerald-600">成果：</strong>ページ表示速度が大幅に向上し、Core Web Vitalsで全項目グリーンを達成。コンバージョン率が1.2%から3.6%に向上し、モバイル経由の売上が5倍に増加しました。
              </p>
            </div>
          </motion.div>

          {/* 事例3: 社内業務システム */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-500 text-white p-3 rounded-lg">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">社内業務システム：作業時間70%削減</h3>
                <p className="text-slate-600">製造業向け生産管理システム</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-purple-600">課題：</strong>Excelベースの生産管理が限界に達し、データの二重入力や転記ミスが頻発。リアルタイムでの進捗把握ができず、意思決定が遅れていました。
              </p>
              <p>
                <strong className="text-purple-600">技術選定：</strong>フロントエンドは<Highlight color="purple">React + TypeScript</Highlight>、バックエンドは<Highlight color="purple">Python + FastAPI</Highlight>、データベースは<Highlight color="purple">PostgreSQL</Highlight>を採用。社内サーバーで運用するため<Highlight color="purple">Docker Compose</Highlight>で構築しました。
              </p>
              <p>
                <strong className="text-purple-600">成果：</strong>データ入力作業が70%削減され、転記ミスがゼロに。リアルタイムダッシュボードにより、経営判断が迅速化。残業時間が月平均30時間削減され、従業員満足度も向上しました。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 品質保証とセキュリティ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              品質保証とセキュリティ
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              安全で高品質なシステムを提供するための取り組み
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all"
            >
              <div className="bg-blue-500 p-3 rounded-lg inline-block mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">自動テストとコードレビュー</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                すべてのコードに対して<Highlight color="blue">ユニットテスト</Highlight>と<Highlight color="blue">統合テスト</Highlight>を実装します。カバレッジ80%以上を維持し、バグの早期発見を徹底します。
              </p>
              <p className="text-slate-300 leading-relaxed">
                また、すべてのコード変更は複数人でレビューし、品質基準を満たすまでマージしません。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all"
            >
              <div className="bg-emerald-500 p-3 rounded-lg inline-block mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">セキュリティ診断の実施</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <Highlight color="emerald">脆弱性診断</Highlight>と<Highlight color="emerald">ペネトレーションテスト</Highlight>を実施し、セキュリティリスクを事前に排除します。OWASP Top 10に対する対策を標準で実装します。
              </p>
              <p className="text-slate-300 leading-relaxed">
                個人情報を扱うシステムでは、暗号化や適切なアクセス制御を徹底します。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all"
            >
              <div className="bg-purple-500 p-3 rounded-lg inline-block mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">保守運用体制とSLA</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                リリース後も<Highlight color="purple">継続的な保守・運用</Highlight>をサポートします。障害発生時の対応時間をSLAで保証し、安心してシステムを運用できます。
              </p>
              <p className="text-slate-300 leading-relaxed">
                月次レポートでシステムの稼働状況を報告し、改善提案も行います。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* アジャイル開発セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                アジャイル開発で迅速にリリース
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                スクラムフレームワークを採用し、2週間のスプリントサイクルで
                継続的に機能をリリースします。
                早期にユーザーフィードバックを得て、価値の高い機能を優先的に開発します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">スプリント計画</div>
                    <div className="text-slate-600 text-sm">優先順位を決めて、2週間で実装可能な機能を選定します</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">デイリースタンドアップ</div>
                    <div className="text-slate-600 text-sm">毎日15分の朝会で進捗共有と課題解決を行います</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">スプリントレビュー</div>
                    <div className="text-slate-600 text-sm">完成した機能をデモし、ユーザーからフィードバックを得ます</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={getImagePath("/images/dev-agile-development-jp.jpg")}
                alt="アジャイル開発"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              よくある質問
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              システム開発に関して、よくいただくご質問にお答えします
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-blue-200 shadow-sm"
            >
              <h3 className="text-lg font-bold mb-3 text-blue-900">Q. 開発期間の目安を教えてください</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>A.</strong> プロジェクトの規模によって大きく異なりますが、<Highlight color="blue">小規模なWebアプリケーション</Highlight>で3〜6ヶ月が目安です。
                <Highlight color="blue">中規模のSaaSプラットフォーム</Highlight>では6〜12ヶ月程度となります。
                まずは要件をお伺いし、詳細なスケジュールをご提示いたします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-sm"
            >
              <h3 className="text-lg font-bold mb-3 text-emerald-900">Q. 既存システムとの連携は可能ですか？</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>A.</strong> はい、<Highlight color="emerald">API連携</Highlight>や<Highlight color="emerald">データベース統合</Highlight>により、
                既存システムとのスムーズな連携が可能です。レガシーシステムのモダナイゼーションも得意としており、
                段階的な移行計画を立てることで、業務を止めることなくシステム刷新を実現できます。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-purple-200 shadow-sm"
            >
              <h3 className="text-lg font-bold mb-3 text-purple-900">Q. 保守運用も依頼できますか？</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>A.</strong> もちろん可能です。<Highlight color="purple">月額保守契約</Highlight>により、システムの安定稼働をサポートします。
                障害対応、機能追加、セキュリティアップデートなど、継続的な改善を行います。
                また、<Highlight color="purple">オンコール対応</Highlight>のオプションもご用意しており、緊急時にも迅速に対応いたします。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              システム開発のご相談はこちら
            </h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              要件定義から運用まで、一貫してサポートします。
              経験豊富なエンジニアが、貴社のビジネス課題をヒアリングし、最適な技術選定と開発プランをご提案いたします。
              初回のご相談は無料です。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>無料相談を申し込む</span>
                <CheckCircle2 size={24} />
              </Link>
              <Link
                href="/service/development"
                className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft size={24} />
                <span>サービス概要に戻る</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}
