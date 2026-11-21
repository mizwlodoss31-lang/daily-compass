# Daily Compass — PWA prototype

スマートフォン向けニュース閲覧PWAの初期プロトタイプです。

## 含まれる機能
- 10件のサンプル記事を最初から全文表示
- 6カテゴリーの絞り込み
- LocalStorageを使った記事保存（記事本文も保存し、当日の一覧から消えても保持）
- 記事データを取り込む際、前回の記事セットを日付別アーカイブとして最大180日分保存
- JSON記事の `imageUrl` に画像URLを指定すると、記事カード上部にサムネイルを表示（未指定・読み込み失敗時は非表示）
- PWA manifest / service worker によるホーム画面追加・アプリシェルのキャッシュ

## 記事JSONの画像項目

各記事に任意項目として `imageUrl` を追加できます。HTTPSまたはHTTPの画像URLを指定してください。

```json
{
  "id": "article-001",
  "category": "経済・産業",
  "tag": "流通",
  "title": "記事タイトル",
  "summary": "概要",
  "background": "背景",
  "impact": "影響",
  "outlook": "今後の展望",
  "source": "出典名",
  "publishedAt": "2026-11-21",
  "url": "https://example.com/article",
  "imageUrl": "https://example.com/thumbnail.jpg"
}
```

## ローカルでの確認
PWA機能（Service Worker / インストール）にはHTTPSまたはlocalhostが必要です。

```bash
python -m http.server 8000
```
ブラウザで `http://localhost:8000` を開いてください。

## 公開方法
GitHub Pages、Netlify、Cloudflare Pagesなどの静的ホスティングに、このフォルダの内容を配置できます。公開URLはHTTPSにしてください。

## 次の開発工程
1. ニュース収集・編集のバックエンド/API
2. 記事データベースと端末間で共有できる日付別アーカイブ
3. 毎朝6時（日本時間）の自動更新ジョブ
4. 出典URL・公開日時・訂正履歴の表示
5. 保存記事を端末間で同期するユーザー認証

## 注意
現在の10件はUI確認用のサンプル記事で、最新ニュースではありません。実ニュースとして配信する前に、信頼できる情報源の取得・検証・出典表示を実装してください。
