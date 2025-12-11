"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Lightbulb, Target, Zap } from 'lucide-react';
import { Highlight } from '@/components/ui/Highlight';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { getImagePath } from "@/lib/utils";

export default function ConsultingDetailsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-consulting-jp.jpg")}
            alt="コンサルティングサービス"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              コンサルティングサービス詳細
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-50 max-w-3xl mx-auto">
              診断・設計・実行の3段階で、経営課題を確実に解決します
            </p>
            <Link
              href="/service/consulting"
              className="inline-flex items-center gap-2 text-white hover:text-emerald-200 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>サービス概要に戻る</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3段階コンサルティングアプローチ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              3段階コンサルティングアプローチ
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              当社のコンサルティングは、<Highlight color="emerald">診断</Highlight>、<Highlight color="emerald">設計</Highlight>、<Highlight color="emerald">実行</Highlight>の3つのフェーズで構成されています。段階的なアプローチにより、確実に成果を生み出します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* フェーズ1: 診断 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl"
            >
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">診断フェーズ</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                現状分析と課題抽出を徹底的に行います。<Highlight color="emerald">経営数値の分析</Highlight>、<Highlight color="emerald">業務フローの可視化</Highlight>、社員へのヒアリングを通じて、表面的な問題だけでなく、根本原因を特定します。
              </p>
              <p className="text-slate-700 leading-relaxed">
                財務データ、業務データ、組織データを統合的に分析し、優先順位をつけて改善ポイントを洗い出します。
              </p>
            </motion.div>

            {/* フェーズ2: 設計 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl"
            >
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">設計フェーズ</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                診断結果をもとに、<Highlight color="blue">具体的な改善戦略</Highlight>と<Highlight color="blue">実行ロードマップ</Highlight>を策定します。短期・中期・長期の目標を設定し、KPIを明確に定義します。
              </p>
              <p className="text-slate-700 leading-relaxed">
                経営層と合意形成を図りながら、実現可能性の高い計画を作り上げます。投資対効果を試算し、優先順位を明確にします。
              </p>
            </motion.div>

            {/* フェーズ3: 実行 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl"
            >
              <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">実行フェーズ</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                計画を実際に遂行する段階です。<Highlight color="purple">ハンズオン支援</Highlight>により、現場に入り込んで一緒に改善活動を推進します。<Highlight color="purple">週次レビュー</Highlight>で進捗を確認し、必要に応じて計画を修正します。
              </p>
              <p className="text-slate-700 leading-relaxed">
                単なるアドバイスではなく、実行まで伴走することで、確実に成果を出します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* コンサルティング手法の比較 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              従来型と当社のコンサルティングの違い
            </h2>
          </motion.div>

          <ComparisonSection
            leftTitle="従来型コンサルティング"
            leftContent={
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  多くのコンサルティング会社は、<Highlight color="orange">提案書の作成</Highlight>や<Highlight color="orange">戦略立案</Highlight>で終わってしまいます。実行は企業任せで、結果的に絵に描いた餅になることも少なくありません。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  また、大規模なプロジェクトになりがちで、導入ハードルが高くなる傾向があります。現場の実態と乖離した理想論が語られることもあります。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  コンサルタントが現場に入らないため、実行段階での問題に対応できず、計画倒れに終わるリスクが高まります。
                </p>
              </div>
            }
            rightTitle="当社のハンズオン型コンサルティング"
            rightContent={
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  当社は<Highlight color="emerald">実行まで伴走する</Highlight>ことを重視しています。戦略立案だけでなく、<Highlight color="emerald">現場に入り込んで</Highlight>改善活動を一緒に推進します。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  中小企業にも導入しやすい柔軟な体制で、必要な部分だけをピンポイントで支援することも可能です。現場の声を聞きながら、実現可能な計画を作ります。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  週次レビューで進捗を確認し、問題があればすぐに軌道修正。確実に成果を出すまでサポートし続けます。
                </p>
              </div>
            }
          />
        </div>
      </section>

      {/* 業界別コンサルティング事例 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              業界別コンサルティング事例
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              各業界の特性に応じた<Highlight color="emerald">専門的なコンサルティング</Highlight>を提供しています
            </p>
          </motion.div>

          {/* 事例1: 小売業 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <TrendingUp size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">小売業：DX推進で業務効率30%改善</h3>
                <p className="text-slate-600">従業員50名規模の小売チェーン</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-emerald-600">課題：</strong>在庫管理が属人化しており、欠品や過剰在庫が頻発。店舗間の情報共有も不十分で、全社的な販売戦略が立てられない状況でした。
              </p>
              <p>
                <strong className="text-emerald-600">施策：</strong><Highlight color="blue">クラウド型在庫管理システム</Highlight>の導入支援を行い、リアルタイムでの在庫可視化を実現。さらに<Highlight color="blue">データ分析基盤</Highlight>を構築し、売れ筋商品の予測や発注最適化を実現しました。
              </p>
              <p>
                <strong className="text-emerald-600">成果：</strong>在庫回転率が40%向上し、欠品率は70%削減。業務時間が30%短縮され、スタッフは接客に集中できるようになりました。大幅なコスト削減を達成しています。
              </p>
            </div>
          </motion.div>

          {/* 事例2: サービス業 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-500 text-white p-3 rounded-lg">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">サービス業：組織改革で離職率50%削減</h3>
                <p className="text-slate-600">従業員100名規模のITサービス企業</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-emerald-600">課題：</strong>年間離職率が30%を超え、採用コストが膨らんでいました。社員満足度調査では、評価制度の不透明さやキャリアパスの不明確さが問題として浮上していました。
              </p>
              <p>
                <strong className="text-emerald-600">施策：</strong><Highlight color="purple">人事評価制度の再設計</Highlight>と<Highlight color="purple">キャリアパスの可視化</Highlight>を実施。1on1ミーティングの導入や、スキルマップの作成により、成長実感を持てる環境を整備しました。
              </p>
              <p>
                <strong className="text-emerald-600">成果：</strong>離職率が15%まで低下し、社員満足度スコアが2倍に向上。採用コストが大幅に削減され、優秀な人材の定着率が大幅に改善しました。
              </p>
            </div>
          </motion.div>

          {/* 事例3: 製造業 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-500 text-white p-3 rounded-lg">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">製造業：生産性向上で利益率15%向上</h3>
                <p className="text-slate-600">従業員80名規模の部品製造業</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-emerald-600">課題：</strong>生産ラインの稼働率が低く、納期遅延が頻発していました。原因は生産計画の精度不足と、設備保全の不備によるトラブル多発でした。
              </p>
              <p>
                <strong className="text-emerald-600">施策：</strong><Highlight color="orange">生産管理システムの刷新</Highlight>と<Highlight color="orange">予防保全体制の構築</Highlight>を実施。IoTセンサーを導入し、設備の状態をリアルタイムで監視できる体制を整えました。
              </p>
              <p>
                <strong className="text-emerald-600">成果：</strong>稼働率が75%から92%に向上し、納期遵守率が98%を達成。設備トラブルが80%減少し、利益率が15ポイント改善しました。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 成果を出すための仕組み */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              成果を出すための仕組み
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              当社のコンサルティングが<Highlight color="emerald">高い成果</Highlight>を生み出せる理由
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg inline-block mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">週次レビューと改善サイクル</h3>
              <p className="text-slate-700 leading-relaxed">
                毎週、<Highlight color="emerald">進捗レビュー</Highlight>を実施し、KPIの達成状況を確認します。問題があれば即座に対策を講じ、<Highlight color="emerald">PDCAサイクル</Highlight>を高速で回すことで、確実に成果を積み上げます。月次では経営層への報告会を実施し、戦略レベルでの調整も行います。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">経営層との密な連携</h3>
              <p className="text-slate-700 leading-relaxed">
                経営トップとの定期的なミーティングにより、<Highlight color="blue">経営戦略との整合性</Highlight>を常に確認します。必要に応じて取締役会でのプレゼンテーションも実施し、全社的な推進体制を構築します。トップのコミットメントが成功の鍵です。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg inline-block mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">従業員の巻き込み方</h3>
              <p className="text-slate-700 leading-relaxed">
                改革を成功させるには、<Highlight color="purple">現場の協力</Highlight>が不可欠です。ワークショップや説明会を通じて、変革の意義を丁寧に伝え、従業員の理解と協力を得ます。<Highlight color="purple">ボトムアップ</Highlight>の改善提案も積極的に取り入れ、全社一丸となって改革を推進します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* コンサルタントの専門性 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              コンサルタントの専門性
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              各分野のスペシャリストが、あなたのビジネスを支援します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">経営戦略の専門家</h3>
              <p className="text-slate-600 leading-relaxed">
                大手コンサルティングファーム出身者や、事業会社で経営企画を経験したコンサルタントが、戦略立案から実行まで伴走します。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">IT/DXの実務経験者</h3>
              <p className="text-slate-600 leading-relaxed">
                システム開発やDX推進プロジェクトの実務経験が豊富なコンサルタントが、技術選定から導入支援まで一貫してサポートします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                <Lightbulb size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">業界特化型コンサルタント</h3>
              <p className="text-slate-600 leading-relaxed">
                小売、製造、サービス、IT など各業界の実務経験者が在籍。業界特有の課題を深く理解し、最適なソリューションを提供します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 追加の成功事例 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              その他の成功事例
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              多様な課題に対して、確実に成果を出しています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900">飲食チェーン：店舗運営の標準化で売上20%向上</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong className="text-blue-600">課題：</strong>各店舗で運営方法がバラバラで、売上のバラつきが大きい状況でした。ノウハウが共有されず、優秀な店長のスキルが属人化していました。
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong className="text-blue-600">施策：</strong><Highlight color="blue">業務マニュアルの整備</Highlight>と<Highlight color="blue">店長研修プログラム</Highlight>の構築を実施。売上の高い店舗のノウハウを体系化し、全店舗で再現できる仕組みを作りました。
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-blue-600">成果：</strong>全店舗平均で売上が20%向上し、店舗間の売上格差が縮小。新人店長の育成期間も半分に短縮されました。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-200"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900">IT企業：新規事業立ち上げで初年度黒字化達成</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong className="text-orange-600">課題：</strong>新規事業の立ち上げ経験がなく、事業計画の策定から実行まで全面的な支援が必要でした。
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong className="text-orange-600">施策：</strong><Highlight color="orange">市場調査</Highlight>と<Highlight color="orange">事業計画の策定</Highlight>から始め、<Highlight color="orange">PMF（プロダクトマーケットフィット）</Highlight>の検証、マーケティング戦略の立案まで伴走しました。
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-orange-600">成果：</strong>サービス開始から1年で安定した収益基盤を確立し、初年度で黒字化を実現。今では会社の主力事業に成長しています。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 実装支援セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                現場に入り込む実装支援
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                提案書を作って終わりではありません。
                当社のコンサルタントが実際に現場に入り、
                改善施策の実装を一緒に進めます。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">ハンズオン支援</div>
                    <div className="text-slate-600 text-sm">現場スタッフと一緒に作業し、実践的なスキルを伝授します</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">迅速な問題解決</div>
                    <div className="text-slate-600 text-sm">実装中に発生する課題に即座に対応し、軌道修正します</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">定着化サポート</div>
                    <div className="text-slate-600 text-sm">新しい仕組みが組織に根付くまで、継続的にフォローします</div>
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
                src={getImagePath("/images/consulting-implementation-support-jp.jpg")}
                alt="コンサルティング実装支援"
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
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-blue-200"
            >
              <h3 className="text-lg font-bold mb-3 text-blue-900">Q. どのような企業規模に対応していますか？</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>A.</strong> <Highlight color="blue">中小企業から大企業</Highlight>まで幅広く対応しています。
                従業員数20名程度のスタートアップから、数千名規模の企業まで実績があります。
                企業規模に応じて、最適なアプローチをご提案いたします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-emerald-200"
            >
              <h3 className="text-lg font-bold mb-3 text-emerald-900">Q. 支援期間はどのくらいですか？</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>A.</strong> プロジェクトの内容により異なりますが、<Highlight color="emerald">3ヶ月〜12ヶ月</Highlight>の支援が一般的です。
                短期間の診断のみから、長期的な伴走支援まで、お客様のニーズに応じて柔軟に対応いたします。
                まずは現状をお伺いし、最適なプランをご提案させていただきます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
              現状の課題をお聞かせください。最適なソリューションをご提案します。
              経験豊富なコンサルタントが、貴社の状況を丁寧にヒアリングし、実現可能な改善プランを設計いたします。
              初回のご相談は無料です。お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>無料相談を申し込む</span>
                <CheckCircle2 size={24} />
              </Link>
              <Link
                href="/service/consulting"
                className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors inline-flex items-center justify-center gap-2"
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
