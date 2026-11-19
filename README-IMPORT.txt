Daily Compass 記事データ取り込み（試験版）

1. ChatGPTから受け取ったDaily Compass用JSONファイルをスマートフォンに保存します。
2. Daily Compassを開き、「記事データを選択」を押します。
3. 保存したJSONファイルを選ぶと記事が表示されます。
4. 取り込んだ記事は、そのブラウザ・端末のローカルストレージに保存されます。

JSON形式の例は article-format-example.json を参照してください。
必須項目：category, title, summary, background, impact, outlook
任意項目：id, tag, source, publishedAt, url

注意：この試験版では、取り込んだ記事は現在表示中の記事を置き換えます。別端末との同期、日付別アーカイブ、自動更新は未実装です。サンプル記事に戻すには、ブラウザのサイトデータを消去してください。
