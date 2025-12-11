"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Video, FileText, Image as ImageIcon, Palette, TrendingUp, Users, Target, Sparkles } from 'lucide-react';
import { Highlight } from '@/components/ui/Highlight';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { getImagePath } from "@/lib/utils";

export default function ContentDetailsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-content-jp.jpg")}
            alt="コンテンツ制作サービス"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-pink-700/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              コンテンツ制作サービス詳細
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-50 max-w-3xl mx-auto">
              戦略的なコンテンツで、ブランド価値を最大化します
            </p>
            <Link
              href="/service/content"
              className="inline-flex items-center gap-2 text-white hover:text-pink-200 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>サービス概要に戻る</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* クリエイティブプロセス */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              クリエイティブプロセス
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              当社のコンテンツ制作は、<Highlight color="pink">戦略立案</Highlight>から始まります。単なる見た目の良さだけでなく、<Highlight color="pink">ビジネス成果</Highlight>にコミットします。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-xl"
            >
              <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">ターゲット分析</h3>
              <p className="text-slate-700 leading-relaxed">
                <Highlight color="pink">ペルソナ設計</Highlight>とカスタマージャーニーマップを作成し、誰に何を届けるかを明確にします。
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl"
            >
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">コンセプト開発</h3>
              <p className="text-slate-700 leading-relaxed">
                ブランドの<Highlight color="purple">世界観</Highlight>とターゲットに刺さる<Highlight color="purple">ストーリー</Highlight>を設計します。
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl"
            >
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">制作・編集</h3>
              <p className="text-slate-700 leading-relaxed">
                <Highlight color="blue">クリエイティブディレクター</Highlight>の監修のもと、高品質なコンテンツを制作します。
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl"
            >
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">効果測定</h3>
              <p className="text-slate-700 leading-relaxed">
                公開後の<Highlight color="emerald">データ分析</Highlight>を行い、次回のクリエイティブに活かします。
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900">戦略的コンテンツ制作の重要性</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  多くの企業が、<Highlight color="orange">見た目だけのコンテンツ</Highlight>に投資しています。しかし、ターゲットが明確でなく、目的も曖昧なコンテンツは、ビジネスに貢献しません。
                </p>
                <p>
                  当社では、コンテンツ制作の前に<Highlight color="pink">戦略立案</Highlight>を徹底的に行います。誰に何を伝え、どんな行動を起こしてもらいたいのか。KPIを明確にし、効果測定まで一貫してサポートします。
                </p>
              </div>
              <div>
                <p className="mb-4">
                  また、<Highlight color="purple">ブランドの一貫性</Highlight>も重要です。個別のコンテンツが優れていても、全体として統一感がなければ、ブランド価値は向上しません。
                </p>
                <p>
                  当社のクリエイティブディレクターが、ブランドガイドラインに基づき、すべてのコンテンツを監修します。一貫性のある世界観で、ファンを増やします。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 制作アプローチの比較 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              従来型と当社の制作アプローチの違い
            </h2>
          </motion.div>

          <ComparisonSection
            leftTitle="従来型のコンテンツ制作"
            leftContent={
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  一般的な制作会社は、<Highlight color="orange">依頼された通り</Highlight>にコンテンツを作ります。戦略的な視点が欠けており、クライアントの言われるままに制作するだけです。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  また、<Highlight color="orange">デザイナーだけ</Highlight>や<Highlight color="orange">ライターだけ</Highlight>といった単一スキルのクリエイターが担当することが多く、総合的な視点が不足しています。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  納品後のフォローもなく、コンテンツの効果測定や改善提案は行われません。結果として、投資対効果が見えづらくなります。
                </p>
              </div>
            }
            rightTitle="当社の戦略的コンテンツ制作"
            rightContent={
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  当社は、<Highlight color="pink">マーケティング視点</Highlight>でコンテンツを企画します。ターゲット分析から入り、ビジネス目標の達成にコミットします。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <Highlight color="pink">クリエイティブディレクター</Highlight>、デザイナー、ライター、マーケターが<Highlight color="pink">チーム</Highlight>で制作します。多角的な視点で、最適なコンテンツを生み出します。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  公開後のデータ分析と改善提案も含めたトータルサポート。PDCAを回し、コンテンツの価値を最大化します。
                </p>
              </div>
            }
          />
        </div>
      </section>

      {/* 制作実績とポートフォリオ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              制作実績とポートフォリオ
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              多様なメディアで<Highlight color="pink">成果</Highlight>を生み出してきました
            </p>
          </motion.div>

          {/* 事例1: 採用動画 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-500 text-white p-3 rounded-lg">
                <Video size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">採用動画：応募数3倍増</h3>
                <p className="text-slate-600">IT企業の新卒採用動画</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-pink-600">課題：</strong>エントリー数は多いものの、ミスマッチによる早期離職が課題でした。企業の本当の魅力を伝えられておらず、入社後のギャップが大きい状況でした。
              </p>
              <p>
                <strong className="text-pink-600">施策：</strong><Highlight color="pink">社員インタビュー</Highlight>を中心とした3分の採用動画を制作。ありのままの職場環境と、社員のリアルな声を伝えました。<Highlight color="pink">ストーリー性</Highlight>を重視し、共感を生むコンテンツに仕上げました。
              </p>
              <p>
                <strong className="text-pink-600">成果：</strong>採用サイトの滞在時間が2倍に伸び、エントリー数が3倍に増加。さらに重要なのは、入社後3年以内の離職率が50%から20%に減少したことです。適切なマッチングが実現できました。
              </p>
            </div>
          </motion.div>

          {/* 事例2: 商品PR動画 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-500 text-white p-3 rounded-lg">
                <TrendingUp size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">商品PR動画：SNSで10万再生</h3>
                <p className="text-slate-600">食品メーカーの新商品プロモーション</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-purple-600">課題：</strong>新商品の認知度向上が急務でした。従来の広告では若年層にリーチできず、ブランドイメージも古臭いと思われていました。
              </p>
              <p>
                <strong className="text-purple-600">施策：</strong><Highlight color="purple">TikTok</Highlight>と<Highlight color="purple">Instagram Reels</Highlight>向けに、15秒のショート動画を10本制作。商品の魅力を<Highlight color="purple">ビジュアルで直感的</Highlight>に伝え、トレンドの音楽とエフェクトを使いました。
              </p>
              <p>
                <strong className="text-purple-600">成果：</strong>合計で10万再生を達成し、ブランド認知度が若年層で40%向上。商品の売上も前年比150%を記録しました。SNS経由での問い合わせも急増しています。
              </p>
            </div>
          </motion.div>

          {/* 事例3: コーポレートサイト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <Palette size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">コーポレートサイト：直帰率40%改善</h3>
                <p className="text-slate-600">製造業のコーポレートサイトリニューアル</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-blue-600">課題：</strong>古いデザインで情報も整理されておらず、直帰率が70%を超えていました。問い合わせ数も減少傾向で、ブランド価値の低下が懸念されていました。
              </p>
              <p>
                <strong className="text-blue-600">施策：</strong><Highlight color="blue">ユーザー体験</Highlight>を最優先に、情報設計を一から見直しました。<Highlight color="blue">モダンなデザイン</Highlight>と高品質な商品写真で、ブランド価値を表現。SEO対策も徹底しました。
              </p>
              <p>
                <strong className="text-blue-600">成果：</strong>直帰率が30%に改善し、平均滞在時間が3倍に。問い合わせ数が月20件から50件に増加し、商談化率も向上しました。
              </p>
            </div>
          </motion.div>

          {/* 事例4: インタビュー記事 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-500 text-white p-3 rounded-lg">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">インタビュー記事：エンゲージメント率5倍</h3>
                <p className="text-slate-600">SaaS企業のカスタマーサクセス事例</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong className="text-emerald-600">課題：</strong>導入事例を増やしたいが、形式的な事例記事ではエンゲージメントが低く、読まれていませんでした。
              </p>
              <p>
                <strong className="text-emerald-600">施策：</strong>ライターがお客様に<Highlight color="emerald">直接インタビュー</Highlight>し、生の声を引き出しました。<Highlight color="emerald">ストーリー仕立て</Highlight>で読みやすく、共感を生む記事に仕上げました。
              </p>
              <p>
                <strong className="text-emerald-600">成果：</strong>平均読了率が80%に達し、SNSでのシェア数が5倍に。問い合わせ時に「あの記事を見た」と言われることが増え、商談の質が向上しました。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 多様なクリエイティブ対応 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              多様なクリエイティブ対応
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              あらゆるメディアに対応した<Highlight color="pink">ワンストップ制作</Highlight>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-pink-100 text-pink-600 p-3 rounded-lg inline-block mb-4">
                <Video size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">動画制作</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>YouTube向け長尺動画（解説、インタビュー、ウェビナー）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>TikTok/Instagram Reels向けショート動画</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>商品紹介・サービス説明動画</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span>採用動画・会社紹介動画</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4">
                <Palette size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">WEBデザイン</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>ランディングページ（LP）デザイン</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>コーポレートサイト・サービスサイト</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>ECサイトデザイン</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>UI/UXデザイン</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg inline-block mb-4">
                <ImageIcon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">グラフィックデザイン</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>ロゴデザイン・ブランドアイデンティティ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>バナー広告・SNS投稿画像</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>チラシ・パンフレット・名刺</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>プレゼンテーション資料デザイン</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg inline-block mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">ライティング</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>SEO記事・コラム執筆</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>広告コピーライティング</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>プレスリリース・ニュース記事</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>導入事例・インタビュー記事</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* クリエイターの専門性 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              クリエイターの専門性
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              各分野のプロフェッショナルが、あなたのブランドを輝かせます
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Video size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">映像ディレクター</h3>
              <p className="text-slate-600 leading-relaxed">
                TV・CM制作の経験者が、プロフェッショナルな動画を制作します。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Palette size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">WEBデザイナー</h3>
              <p className="text-slate-600 leading-relaxed">
                大手Web制作会社やスタートアップでの実務経験が豊富なデザイナーが担当します。
                UI/UXの設計から、ブランドアイデンティティの構築まで幅広く対応いたします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">コピーライター</h3>
              <p className="text-slate-600 leading-relaxed">
                広告代理店出身のコピーライターが、心に刺さる言葉を紡ぎます。
                ブランドの世界観を言葉で表現し、ターゲットに響くメッセージを届けます。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">マーケター</h3>
              <p className="text-slate-600 leading-relaxed">
                データ分析とマーケティング戦略の専門家が、効果的なコンテンツを設計します。
                数値に基づいた戦略で、確実に成果を生み出します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* クリエイティブ編集セクション */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              クリエイティブな編集技術
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              <Highlight color="pink">プロフェッショナルな編集</Highlight>で、コンテンツの魅力を最大限引き出します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={getImagePath("/images/content-creative-editing-jp.jpg")}
                alt="クリエイティブ編集作業"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-lg flex-shrink-0">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    高度なカラーグレーディング
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    映像のトーンと雰囲気を調整し、ブランドの世界観を視覚的に表現します。色彩心理学に基づいた配色で、視聴者の感情に訴えかけます。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg flex-shrink-0">
                  <Video size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    ダイナミックなトランジション
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    シーン転換を滑らかに、かつ印象的に演出します。視聴者の注意を引きつけ、最後まで飽きさせないストーリーテリングを実現します。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    モーショングラフィックス
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    アニメーション技術で情報をわかりやすく伝達します。複雑なデータや概念も、動きのある視覚表現で直感的に理解できるようにします。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-lg flex-shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    プラットフォーム最適化
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    YouTube、Instagram、TikTokなど、各プラットフォームの特性に合わせた編集を行います。アスペクト比やテンポ感を最適化し、エンゲージメントを最大化します。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              コンテンツ制作のご相談はこちら
            </h2>
            <p className="text-xl mb-8 text-pink-50 max-w-2xl mx-auto">
              戦略立案から制作・効果測定まで、トータルサポートします。
              経験豊富なクリエイターが、貴社のブランド価値を最大化するクリエイティブをご提案いたします。
              初回のご相談は無料です。まずはお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>無料相談を申し込む</span>
                <CheckCircle2 size={24} />
              </Link>
              <Link
                href="/service/content"
                className="bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-800 transition-colors inline-flex items-center justify-center gap-2"
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
