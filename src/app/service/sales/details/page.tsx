"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Highlight } from "@/components/ui/Highlight";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Target, BarChart3, Users } from "lucide-react";
import { getImagePath } from "@/lib/utils";

export default function SalesDetailsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-sales-jp.jpg")}
            alt="営業代行サービス詳細"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              営業代行サービス 詳細
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              データドリブンな営業手法で、確実に成果を出す
            </p>
          </motion.div>
        </div>
      </section>

      {/* 営業プロセスの全体像 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              7ステップの営業プロセス
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              当社では、<Highlight color="purple">リード獲得からクロージング</Highlight>まで、
              一貫した営業プロセスを体系化しています。各ステップで明確な<Highlight color="purple">KPIを設定</Highlight>し、
              データに基づいた改善を繰り返すことで、成果を最大化します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { step: 1, title: "ターゲット企業の選定", desc: "業界・規模・課題を分析し、最適なターゲットリストを作成" },
              { step: 2, title: "初回アプローチ", desc: "メール・電話・SNSなど、最適なチャネルでファーストコンタクト" },
              { step: 3, title: "関係構築", desc: "定期的なフォローアップで信頼関係を醸成" },
              { step: 4, title: "ニーズヒアリング", desc: "SPIN営業手法で潜在ニーズを引き出す" },
              { step: 5, title: "提案・プレゼン", desc: "課題解決型の提案で価値を明確化" },
              { step: 6, title: "クロージング", desc: "適切なタイミングで商談をまとめる" },
              { step: 7, title: "アフターフォロー", desc: "継続的な関係維持とアップセル機会の創出" },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.step * 0.1 }}
                className="p-6 bg-purple-50 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="text-purple-600" />
              各ステップのKPI管理
            </h3>
            <p className="text-slate-700 leading-relaxed">
              営業活動の各段階で<Highlight color="purple">具体的な数値目標</Highlight>を設定します。
              例えば、初回アプローチでは「100件のコンタクトで20件のアポ獲得（20%）」、
              提案フェーズでは「10件の提案で3件の成約（30%）」といった形で、
              <Highlight color="purple">業界平均を上回る成果</Highlight>を追求します。
              週次でKPIをレビューし、PDCAサイクルを高速で回すことで、継続的な改善を実現しています。
            </p>
          </div>
        </div>
      </section>

      {/* データドリブンな営業手法 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              データドリブンな営業手法
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              経験と勘に頼らず、<Highlight color="blue">データ分析に基づいた科学的アプローチ</Highlight>で
              営業活動を最適化します。
            </p>
          </motion.div>

          <ComparisonSection
            leftTitle="従来の営業手法"
            leftContent={
              <div className="space-y-4">
                <p>
                  多くの企業では、営業担当者の<Highlight color="orange">経験や勘</Highlight>に依存した
                  営業活動が行われています。これでは成果が<Highlight color="orange">属人的</Highlight>になり、
                  再現性が低くなってしまいます。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>個人の経験に依存した営業スタイル</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>成果のバラツキが大きい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>改善のポイントが不明確</span>
                  </li>
                </ul>
              </div>
            }
            rightTitle="当社のデータドリブン営業"
            rightContent={
              <div className="space-y-4">
                <p>
                  当社では、SFA/CRMシステムで営業活動を<Highlight color="blue">全て数値化</Highlight>し、
                  データ分析によって<Highlight color="blue">勝ちパターン</Highlight>を発見します。
                  これにより、誰もが高い成果を出せる仕組みを構築しています。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <span>全営業活動をデータで可視化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <span>成功パターンの分析と横展開</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <span>週次のデータレビューで素早い改善</span>
                  </li>
                </ul>
              </div>
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
              <BarChart3 className="text-purple-600 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">SFA/CRM活用</h3>
              <p className="text-slate-600 text-sm">
                Salesforceなどの営業支援ツールで、全ての顧客接点を記録・分析します。
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
              <TrendingUp className="text-purple-600 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">勝ちパターン分析</h3>
              <p className="text-slate-600 text-sm">
                成約に至った商談の共通点を抽出し、再現性のある営業手法を確立します。
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
              <Users className="text-purple-600 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">PDCAサイクル</h3>
              <p className="text-slate-600 text-sm">
                週次でデータをレビューし、仮説検証を繰り返すことで営業力を向上させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 具体的な成果事例 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              具体的な成果事例
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              様々な業界で<Highlight color="purple">圧倒的な成果</Highlight>を実現してきました
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* SaaS企業の事例 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">SaaS企業様：アポ獲得率3倍、成約率2倍を実現</h3>
                  <p className="text-slate-600">業界：クラウドサービス / 従業員規模：50名</p>
                </div>
              </div>
              <ComparisonSection
                leftTitle="導入前の課題"
                leftContent={
                  <div className="space-y-3">
                    <p>
                      新規顧客開拓に苦戦し、<Highlight color="orange">月間アポ獲得数が5件程度</Highlight>に留まっていました。
                      営業担当者のスキルにバラツキがあり、成約率も<Highlight color="orange">10%前後</Highlight>と低迷していました。
                    </p>
                  </div>
                }
                rightTitle="導入後の成果"
                rightContent={
                  <div className="space-y-3">
                    <p>
                      データ分析でターゲット企業を厳選し、<Highlight color="blue">月間アポ獲得数が15件に増加</Highlight>。
                      営業トークスクリプトの最適化により、成約率が<Highlight color="blue">20%に向上</Highlight>しました。
                      結果として、月次の新規契約数が3倍になりました。
                    </p>
                  </div>
                }
              />
            </motion.div>

            {/* 製造業の事例 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">製造業様：新規顧客開拓で月商20%増</h3>
                  <p className="text-slate-600">業界：精密機器製造 / 従業員規模：200名</p>
                </div>
              </div>
              <ComparisonSection
                leftTitle="導入前の課題"
                leftContent={
                  <div className="space-y-3">
                    <p>
                      既存顧客への依存度が高く、<Highlight color="orange">新規顧客開拓が停滞</Highlight>していました。
                      営業担当者は技術説明に重点を置きすぎて、顧客の<Highlight color="orange">課題解決という視点が不足</Highlight>していました。
                    </p>
                  </div>
                }
                rightTitle="導入後の成果"
                rightContent={
                  <div className="space-y-3">
                    <p>
                      <Highlight color="emerald">課題解決型営業</Highlight>へのアプローチ変更により、
                      顧客の真のニーズを引き出すことに成功。半年で<Highlight color="emerald">新規取引先を15社獲得</Highlight>し、
                      月商が20%増加しました。
                    </p>
                  </div>
                }
              />
            </motion.div>

            {/* 不動産業の事例 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">不動産業様：問い合わせ数5倍、成約率40%向上</h3>
                  <p className="text-slate-600">業界：商業不動産仲介 / 従業員規模：30名</p>
                </div>
              </div>
              <ComparisonSection
                leftTitle="導入前の課題"
                leftContent={
                  <div className="space-y-3">
                    <p>
                      WEBサイトへのアクセスはあるものの、<Highlight color="orange">問い合わせ転換率が低い</Highlight>状態でした。
                      また、問い合わせ後のフォローアップが不十分で、成約率も<Highlight color="orange">25%程度</Highlight>でした。
                    </p>
                  </div>
                }
                rightTitle="導入後の成果"
                rightContent={
                  <div className="space-y-3">
                    <p>
                      WEBマーケティングの改善とリードナーチャリングの仕組み化により、
                      <Highlight color="purple">月間問い合わせ数が5倍</Highlight>に増加。
                      さらに、営業プロセスの最適化で成約率が<Highlight color="purple">35%に向上</Highlight>しました。
                    </p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 当社の強み */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              当社の強み
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              なぜ、私たちは<Highlight color="purple">圧倒的な成果</Highlight>を出せるのか
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-lg border border-purple-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-900">
                業界経験豊富な営業チーム
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                当社の営業メンバーは、<Highlight color="purple">SaaS、製造業、不動産、金融など多様な業界</Highlight>での
                実績を持つプロフェッショナル集団です。各業界特有の商習慣や意思決定プロセスを熟知しているため、
                スムーズな営業活動が可能です。
              </p>
              <p className="text-slate-700 leading-relaxed">
                また、定期的な<Highlight color="purple">ロールプレイング研修</Highlight>や
                勉強会を実施し、営業スキルの向上に努めています。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-lg border border-purple-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-900">
                独自の営業メソッド
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                これまでの支援実績から導き出した<Highlight color="purple">「3D営業メソッド」</Highlight>を確立しています。
                Data（データ分析）、Design（営業設計）、Delivery（実行支援）の3つのDで、
                確実に成果を出す営業活動を実現します。
              </p>
              <p className="text-slate-700 leading-relaxed">
                このメソッドは、業界や商材を問わず適用可能で、
                <Highlight color="purple">再現性の高い成果</Highlight>を生み出しています。
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                柔軟なサポート体制
              </h3>
              <p className="leading-relaxed mb-4">
                お客様のニーズに合わせて、<Highlight color="pink">フルアウトソース型</Highlight>から
                <Highlight color="pink">ハンズオン支援型</Highlight>まで、柔軟な契約形態をご用意しています。
                営業活動の全てを任せたい企業様から、自社営業チームの強化を目指す企業様まで、
                幅広く対応可能です。
              </p>
              <p className="leading-relaxed">
                また、月次レポートでの詳細な活動報告と定期的な戦略ミーティングにより、
                常に最適な営業戦略を追求し続けます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* プロセス分析セクション */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                データに基づく営業プロセス分析
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                当社では、CRMデータと営業活動の各指標を詳細に分析し、
                ボトルネックの特定と改善施策の立案を行います。
                単なる営業代行ではなく、データドリブンなアプローチで成果を最大化します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">リード分析</div>
                    <div className="text-slate-600 text-sm">質の高いリードを見極め、効率的にアプローチします</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">コンバージョン率の向上</div>
                    <div className="text-slate-600 text-sm">各ステージの通過率を可視化し、改善点を明確化します</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-slate-900 mb-1">PDCAサイクルの高速化</div>
                    <div className="text-slate-600 text-sm">週次でのデータレビューにより、迅速な改善を実現します</div>
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
                src={getImagePath("/images/sales-process-analysis-jp.jpg")}
                alt="営業プロセス分析"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              よくある質問
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              営業代行サービスに関して、お客様からよくいただくご質問にお答えします
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-start gap-3">
                <span className="text-2xl">Q1.</span>
                <span>契約期間はどのくらいですか？</span>
              </h3>
              <p className="text-slate-700 leading-relaxed ml-8">
                <strong className="text-purple-700">A.</strong> 基本的には<Highlight color="purple">6ヶ月間</Highlight>の契約をおすすめしています。
                営業活動は成果が出るまでに一定の期間が必要なため、短期間では十分な効果を発揮できません。
                ただし、お客様のニーズに応じて<Highlight color="purple">3ヶ月からの短期契約</Highlight>や、
                1年以上の長期契約も可能です。トライアルとして、1ヶ月間のお試しプランもご用意しています。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-start gap-3">
                <span className="text-2xl">Q2.</span>
                <span>どのような業界・商材に対応できますか？</span>
              </h3>
              <p className="text-slate-700 leading-relaxed ml-8">
                <strong className="text-blue-700">A.</strong> <Highlight color="blue">BtoB全般</Highlight>に対応しており、
                SaaS、製造業、不動産、金融、人材など幅広い業界での実績があります。
                また、<Highlight color="blue">有形商材・無形商材</Highlight>問わず対応可能です。
                初回のヒアリングで貴社の商材や市場環境を詳しくお伺いし、最適な営業戦略を立案いたします。
                業界特有の商習慣や規制にも精通したメンバーがサポートします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200"
            >
              <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-start gap-3">
                <span className="text-2xl">Q3.</span>
                <span>自社の営業チームとの連携はどうなりますか？</span>
              </h3>
              <p className="text-slate-700 leading-relaxed ml-8">
                <strong className="text-emerald-700">A.</strong> 当社の営業メンバーが<Highlight color="emerald">貴社チームの一員</Highlight>として活動します。
                週次ミーティングで進捗を共有し、情報の透明性を確保します。
                また、CRMやSlackなどのツールを共有し、リアルタイムでのコミュニケーションを実現します。
                自社営業チームへの<Highlight color="emerald">ノウハウ移転</Highlight>も積極的に行い、
                契約終了後も貴社が自走できるようサポートします。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-200"
            >
              <h3 className="text-xl font-bold mb-4 text-pink-900 flex items-start gap-3">
                <span className="text-2xl">Q4.</span>
                <span>成果が出なかった場合はどうなりますか？</span>
              </h3>
              <p className="text-slate-700 leading-relaxed ml-8">
                <strong className="text-pink-700">A.</strong> 当社は<Highlight color="pink">成果にコミット</Highlight>します。
                契約期間中は週次でKPIを確認し、目標達成に向けてPDCAサイクルを回します。
                万が一、進捗が芳しくない場合は、即座に戦略を見直し、軌道修正を行います。
                綿密な戦略立案とスピーディーな改善により、確実に成果を出すことをお約束します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 導入までの流れ */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              導入までの流れ
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              <Highlight color="purple">スムーズな導入</Highlight>で、すぐに営業活動を開始できます
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
                <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-slate-900">お問い合わせ</h3>
                <p className="text-sm text-slate-600 text-center">
                  まずはお気軽にご相談ください
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-300 text-2xl">
                →
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-slate-900">ヒアリング</h3>
                <p className="text-sm text-slate-600 text-center">
                  課題や目標を詳しくお伺いします
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300 text-2xl">
                →
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl">
                <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-slate-900">提案</h3>
                <p className="text-sm text-slate-600 text-center">
                  最適な戦略とプランをご提案
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-300 text-2xl">
                →
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-xl">
                <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-slate-900">契約</h3>
                <p className="text-sm text-slate-600 text-center">
                  契約内容に合意後、正式契約
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-pink-300 text-2xl">
                →
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold mx-auto">
                  5
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-slate-900">キックオフ</h3>
                <p className="text-sm text-slate-600 text-center">
                  最短2週間で営業活動開始
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">
              キックオフまでの期間
            </h3>
            <p className="text-slate-700 leading-relaxed text-center mb-6">
              お問い合わせから営業活動開始まで、通常<Highlight color="purple">2〜4週間</Highlight>程度です。
              お急ぎの場合は、最短<Highlight color="purple">1週間</Highlight>での開始も可能です。
              貴社の状況に合わせて柔軟に対応いたしますので、まずはお気軽にご相談ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              営業代行サービスについて<br />もっと詳しく知りたい方へ
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              貴社の営業課題を丁寧にヒアリングして、最適なソリューションをご提案いたします。
              初回のご相談は無料です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                お問い合わせ
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/service/sales"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-800 text-white rounded-full font-bold hover:bg-purple-900 transition-all border-2 border-white/20"
              >
                サービス概要に戻る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
