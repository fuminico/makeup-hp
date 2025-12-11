# makeup-hp サービス詳細ページ追加 実装計画

## 現状分析

### 既存ページの文字数
- 営業代行: 1,128文字
- コンサルティング: 1,240文字
- WEBシステム開発: 1,061文字
- コンテンツ制作: 1,179文字
- **合計**: 4,608文字

### 追加目標
- **追加文字数**: 10,000文字以上
- **各サービス**: 約2,500文字の詳細ページを1つずつ追加

## 実装内容

### Phase 1: 共通コンポーネントの作成

#### 1. Highlight コンポーネント
**ファイル**: `src/components/ui/Highlight.tsx`

重要なポイントを色付けハイライトするコンポーネント。左右のテキストで同じキーワードを強調表示する際に使用。

```tsx
// 使用例
<Highlight color="blue">データドリブン</Highlight>
<Highlight color="green">成果にコミット</Highlight>
```

#### 2. ComparisonSection コンポーネント
**ファイル**: `src/components/sections/ComparisonSection.tsx`

左右2カラムレイアウトで、対比や比較を視覚的に表現するコンポーネント。

```tsx
// 使用例
<ComparisonSection
  leftTitle="従来の営業手法"
  leftContent="..."
  rightTitle="当社のアプローチ"
  rightContent="..."
  highlights={["データ分析", "PDCAサイクル"]}
/>
```

### Phase 2: 各サービスの詳細ページ作成

#### 営業代行サービス詳細ページ
**URL**: `/service/sales/details`
**ファイル**: `src/app/service/sales/details/page.tsx`
**文字数**: 約2,500文字

**コンテンツ構成**:
1. **営業プロセスの全体像**（500文字）
   - リード獲得からクロージングまでの7ステップ
   - 各ステップでのKPI設定

2. **データドリブンな営業手法**（600文字）
   - SFA/CRMの活用方法
   - データ分析による勝ちパターンの発見
   - PDCAサイクルの実践

3. **具体的な成果事例**（700文字）
   - SaaS企業：アポ獲得率3倍、成約率2倍
   - 製造業：新規顧客開拓で月商20%増
   - 不動産業：問い合わせ数5倍、成約率40%向上

4. **当社の強み**（700文字）
   - 業界経験豊富な営業チーム
   - 独自の営業メソッド
   - 柔軟なサポート体制

#### コンサルティングサービス詳細ページ
**URL**: `/service/consulting/details`
**ファイル**: `src/app/service/consulting/details/page.tsx`
**文字数**: 約2,500文字

**コンテンツ構成**:
1. **3段階コンサルティングアプローチ**（600文字）
   - 診断フェーズ：現状分析と課題抽出
   - 設計フェーズ：戦略立案とロードマップ作成
   - 実行フェーズ：ハンズオン支援と伴走

2. **業界別コンサルティング事例**（800文字）
   - 小売業：DX推進で業務効率30%改善
   - サービス業：組織改革で離職率50%削減
   - 製造業：生産性向上で利益率15%向上

3. **成果を出すための仕組み**（600文字）
   - 週次レビューと改善サイクル
   - 経営層との密な連携
   - 従業員の巻き込み方

4. **コンサルタントの専門性**（500文字）
   - 経営戦略の専門家
   - IT/DXの実務経験者
   - 業界特化型コンサルタント

#### WEBシステム開発サービス詳細ページ
**URL**: `/service/development/details`
**ファイル**: `src/app/service/development/details/page.tsx`
**文字数**: 約2,500文字

**コンテンツ構成**:
1. **技術スタックと選定基準**（600文字）
   - フロントエンド：React/Next.js/TypeScript
   - バックエンド：Node.js/Python/Go
   - インフラ：AWS/GCP/Azure
   - 要件に応じた最適な技術選定

2. **開発プロセスとアジャイル手法**（700文字）
   - 2週間スプリントでの反復開発
   - デイリースタンドアップミーティング
   - ユーザーフィードバックの即座反映
   - CI/CDによる自動化

3. **開発事例とプロジェクト実績**（700文字）
   - SaaSプラットフォーム：月間100万PV達成
   - ECサイト：コンバージョン率3倍向上
   - 社内業務システム：作業時間70%削減

4. **品質保証とセキュリティ**（500文字）
   - 自動テストとコードレビュー
   - セキュリティ診断の実施
   - 保守運用体制とSLA

#### コンテンツ制作サービス詳細ページ
**URL**: `/service/content/details`
**ファイル**: `src/app/service/content/details/page.tsx`
**文字数**: 約2,500文字

**コンテンツ構成**:
1. **クリエイティブプロセス**（600文字）
   - ターゲット分析とペルソナ設計
   - コンセプト開発とストーリー設計
   - クリエイティブディレクション
   - 制作・編集・納品までのフロー

2. **制作実績とポートフォリオ**（800文字）
   - 採用動画：応募数3倍増
   - 商品PR動画：SNSで10万再生
   - コーポレートサイト：直帰率40%改善
   - インタビュー記事：エンゲージメント率5倍

3. **多様なクリエイティブ対応**（600文字）
   - 動画制作（YouTube、TikTok、Instagram）
   - WEBデザイン（LP、コーポレートサイト）
   - グラフィックデザイン（ロゴ、バナー、チラシ）
   - ライティング（記事、広告コピー、SEO）

4. **クリエイターの専門性**（500文字）
   - 映像ディレクター
   - WEBデザイナー
   - コピーライター
   - マーケター

### Phase 3: 左右レイアウトとハイライト機能

#### 実装方法
1. **2カラムグリッドレイアウト**
   - デスクトップ: `grid-cols-2`
   - モバイル: `grid-cols-1`（縦スタック）

2. **ハイライト機能**
   - 重要なキーワードを `<Highlight>` コンポーネントで囲む
   - 左右で同じキーワードを同じ色でハイライト
   - 例: 「データドリブン」を両方青色でハイライト

3. **視覚的な繋がり**
   - 左右で対応する箇所を色で示す
   - アニメーション（ホバー時に両方がハイライト）も検討

### Phase 4: 既存ページへの導線追加

#### 各サービス概要ページに追加
**追加箇所**: FAQ セクションの前

```tsx
{/* さらに詳しく知る */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        さらに詳しく知る
      </h2>
      <p className="text-slate-600 text-lg">
        より具体的な内容や事例をご紹介します
      </p>
    </motion.div>

    <div className="max-w-2xl mx-auto">
      <Link href="/service/sales/details">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group p-8 bg-white rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                営業代行サービスの詳細
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                データドリブンな営業手法の全容、具体的な成果事例、
                当社独自の営業プロセスを詳しく解説します。
              </p>
              <span className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                詳細ページを見る
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  </div>
</section>
```

## 実装順序

### Step 1: 共通コンポーネント作成（30分）
- [ ] `src/components/ui/Highlight.tsx`
- [ ] `src/components/sections/ComparisonSection.tsx`

### Step 2: 営業代行詳細ページ（60分）
- [ ] `src/app/service/sales/details/page.tsx` 作成
- [ ] 約2,500文字のコンテンツ作成
- [ ] 左右レイアウトとハイライト実装

### Step 3: コンサルティング詳細ページ（60分）
- [ ] `src/app/service/consulting/details/page.tsx` 作成
- [ ] 約2,500文字のコンテンツ作成
- [ ] 左右レイアウトとハイライト実装

### Step 4: WEBシステム開発詳細ページ（60分）
- [ ] `src/app/service/development/details/page.tsx` 作成
- [ ] 約2,500文字のコンテンツ作成
- [ ] 左右レイアウトとハイライト実装

### Step 5: コンテンツ制作詳細ページ（60分）
- [ ] `src/app/service/content/details/page.tsx` 作成
- [ ] 約2,500文字のコンテンツ作成
- [ ] 左右レイアウトとハイライト実装

### Step 6: 既存ページへの導線追加（30分）
- [ ] 各サービス概要ページに「さらに詳しく知る」セクション追加
- [ ] Header/Footerのリンク更新（オプション）

### Step 7: 文字数カウントと最終確認（15分）
- [ ] 追加文字数が10,000文字以上であることを確認
- [ ] レスポンシブ確認
- [ ] ビルドエラーチェック

## 合計見積もり時間
約5.5時間（コンテンツライティング含む）

## デザインコンセプト

### カラーテーマ
- **営業代行**: Purple系（`purple-500`, `purple-100`）
- **コンサルティング**: Emerald系（`emerald-500`, `emerald-100`）
- **WEBシステム開発**: Blue系（`blue-500`, `blue-100`）
- **コンテンツ制作**: Pink系（`pink-500`, `pink-100`）

### ハイライトの使い方例
```tsx
<p>
  当社の営業代行サービスでは、
  <Highlight color="purple">データドリブン</Highlight>
  な手法を採用し、
  <Highlight color="purple">成果にコミット</Highlight>
  します。
</p>
```

### 左右レイアウトの使い方例
```tsx
<ComparisonSection
  leftTitle="従来の営業手法"
  leftContent={(
    <div>
      <p>
        経験と勘に頼った営業活動。
        <Highlight color="orange">属人的</Highlight>
        で再現性が低い。
      </p>
    </div>
  )}
  rightTitle="当社のデータドリブン営業"
  rightContent={(
    <div>
      <p>
        データ分析に基づく
        <Highlight color="blue">科学的</Highlight>
        なアプローチ。再現性が高く成果が安定。
      </p>
    </div>
  )}
/>
```

## 品質基準

### コンテンツ品質
- ✅ 各ページ2,500文字以上
- ✅ オリジナルな文面（他サイトと重複なし）
- ✅ 具体的な数値や事例を含む
- ✅ ターゲット（経営者・事業責任者）に響く内容

### 技術品質
- ✅ TypeScript型エラーなし
- ✅ ESLintエラーなし
- ✅ レスポンシブ対応
- ✅ アクセシビリティ対応

### SEO品質
- ✅ メタデータ設定
- ✅ 見出し構造（h1 → h2 → h3）の正しさ
- ✅ 内部リンク構造
