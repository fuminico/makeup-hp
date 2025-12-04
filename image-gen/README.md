# 画像生成環境

このディレクトリには、ユーザー提供のAPIキーを使用してサービスページ用の画像を生成するスクリプトが含まれています。

## セットアップ

```bash
cd image-gen
npm install
```

## 実行

```bash
npm run generate
```

## 生成される画像

1. `service-consulting.png` - 日本人ビジネスパーソンによるコンサルティング会議
2. `service-content.png` - 日本人クリエイターによるコンテンツ制作風景
3. `service-development.png` - 日本人開発者による開発作業
4. `service-sales.png` - 日本人営業チームによる営業活動

すべての画像は横長(16:9)のアスペクト比で生成され、`../public/`ディレクトリに保存されます。

## 注意事項

このスクリプトはImagen APIを使用しようとしますが、提供されたAPIキーがImagen APIにアクセスできない場合は失敗します。
その場合は、Vertex AI APIを有効化し、適切な権限を持つサービスアカウントキーを使用する必要があります。
