# 画像生成スクリプト

このディレクトリには、サービスページ用の画像を生成するためのスクリプトが含まれています。

## 重要な注意事項

提供されたAPIキーは **Gemini API** 用のものですが、**Gemini APIは画像生成に対応していません**。

画像生成には以下のいずれかの方法が必要です:

### 方法1: Antigravityの組み込みツールを使用（推奨）

Antigravityの `generate_image` ツールを使用するのが最も簡単です。
ただし、現在クォータ制限がかかっている場合は回復を待つ必要があります。

### 方法2: Imagen API を使用

Google CloudのImagen APIを使用する場合:

1. Google Cloud Consoleで新しいプロジェクトを作成
2. Vertex AI APIを有効化
3. サービスアカウントキーを取得
4. `generate-images-imagen.js` のプロジェクトIDとAPIキーを更新

### 方法3: 他の画像生成サービスを使用

- DALL-E (OpenAI)
- Midjourney
- Stable Diffusion

## 生成する画像

以下の4つの画像を日本人の人物を含めて生成します:

1. **service-consulting.png** - 日本人ビジネスパーソンによるコンサルティング会議
2. **service-content.png** - 日本人クリエイターによるコンテンツ制作風景
3. **service-development.png** - 日本人開発者による開発作業
4. **service-sales.png** - 日本人営業チームによる営業活動

## プロンプト

各画像のプロンプトは `generate-images-imagen.js` に記載されています。
すべてのプロンプトに「Japanese」「Tokyo」などのキーワードを含め、日本人の人物が生成されるようにしています。

## 実行方法

```bash
# Gemini APIテスト（画像生成はできません）
node scripts/generate-images.js

# プロンプトの確認
node scripts/generate-images-imagen.js
```

## 推奨される対応

現在のクォータ制限が回復するまで待ち、Antigravityの組み込み `generate_image` ツールを使用することをお勧めします。
