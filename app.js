const ARTICLES = [
  {
    "id": "sample-1",
    "category": "国内・国際",
    "title": "国際情勢を読むための視点",
    "tag": "国際",
    "summary": "国際ニュースは、各国の発言や政策だけでなく、歴史的な経緯や地理、安全保障、資源など複数の要因が重なって動いています。",
    "background": "国家間の関係は、経済的な結びつきと安全保障上の利害が同時に存在します。そのため、ある国の政策変更が別の地域や国の判断に波及することがあります。",
    "impact": "外交や貿易、エネルギー価格を通じて、日本の企業活動や家計にも影響が及びます。",
    "outlook": "関係国の公式発表や政策の変化を追い、短期的な出来事と長期的な構造を分けて見ることが重要です。",
    "sample": true
  },
  {
    "id": "sample-2",
    "category": "経済・産業",
    "title": "小売業の変化と物流の役割",
    "tag": "流通",
    "summary": "小売業では、人手不足やコスト上昇を背景に、店舗運営と物流の効率化が課題になっています。",
    "background": "仕入れ、加工、配送、陳列、販売は一連の工程です。店舗だけを効率化しても、前後の工程に負担が移れば全体の改善にはつながりません。",
    "impact": "センター加工や配送の仕組みは、店舗の作業負担だけでなく、品ぞろえ、鮮度、欠品、廃棄にも影響します。",
    "outlook": "作業時間だけでなく、売場の柔軟性や商品ロスなども含めて、全体最適の視点で変化を捉える必要があります。",
    "sample": true
  },
  {
    "id": "sample-3",
    "category": "科学・テクノロジー",
    "title": "生成AIの普及と社会への影響",
    "tag": "AI",
    "summary": "生成AIは文章や画像の作成、情報整理など幅広い用途で活用されています。一方で、正確性や著作権などの課題も残っています。",
    "background": "生成AIは学習したデータのパターンをもとに出力を生成します。自然な文章を作れても、内容が事実であるとは限りません。",
    "impact": "仕事の効率化が期待される一方、出力を検証する能力や、情報を適切に扱うルールが重要になります。",
    "outlook": "性能の向上だけでなく、透明性、責任の所在、利用者側のリテラシーが普及の鍵になりそうです。",
    "sample": true
  },
  {
    "id": "sample-4",
    "category": "思想・言語・文化",
    "title": "言葉は感情をどこまで伝えられるのか",
    "tag": "言語・哲学",
    "summary": "言葉にすることで感情を理解しやすくなる一方、言葉にした瞬間にこぼれ落ちる感覚もあります。",
    "background": "感情は身体感覚や記憶、状況などが絡み合った経験です。言葉はその経験を整理し、他者と共有できる形にしますが、経験そのものを完全に再現するわけではありません。",
    "impact": "感情を言葉にすることは自己理解や対話を助けます。ただし、言葉にできない部分を無理に結論づけない姿勢も大切です。",
    "outlook": "心理学、哲学、言語学の視点を比べることで、「理解する」とは何かをさらに掘り下げられます。",
    "sample": true
  },
  {
    "id": "sample-5",
    "category": "食・生活",
    "title": "食の選択を左右する価格と手軽さ",
    "tag": "食生活",
    "summary": "食品を選ぶ基準は価格だけではありません。調理時間、保存性、栄養、生活環境などが複雑に関係しています。",
    "background": "物価や働き方、世帯構成の変化によって、消費者が食品に求める価値も変わります。簡便性や小分け商品への需要も、こうした生活の変化と結びついています。",
    "impact": "食品メーカーや小売店は、容量、価格帯、調理のしやすさ、売場提案などを通じて需要の変化に対応する必要があります。",
    "outlook": "販売データだけでなく、消費者がどのような場面で商品を選ぶのかを見ることが、商品開発や売場づくりのヒントになります。",
    "sample": true
  },
  {
    "id": "sample-6",
    "category": "エンタメ・ゲーム",
    "title": "ゲーム産業の広がりと収益構造",
    "tag": "ゲーム",
    "summary": "ゲーム産業はソフト販売だけでなく、追加コンテンツ、イベント、配信、グッズなど多様な収益機会を持っています。",
    "background": "買い切り型と長期運営型では、開発費の回収方法やユーザーとの関係が異なります。作品の提供方法そのものがビジネスモデルを左右します。",
    "impact": "作品の評価や売上は、ゲーム本体の完成度だけでなく、運営体制やコミュニティとの関係にも影響されます。",
    "outlook": "作品ごとの収益構造や運営方針を比較すると、ゲーム業界の競争環境や今後の変化が見えやすくなります。",
    "sample": true
  },
  {
    "id": "sample-7",
    "category": "経済・産業",
    "title": "物価と賃金から見る家計の変化",
    "tag": "経済",
    "summary": "物価の上昇と賃金の伸びの関係は、家計が実際にどれだけのモノやサービスを購入できるかを左右します。",
    "background": "名目賃金が増えていても、物価がそれ以上に上昇すれば、実質的な購買力は低下します。名目と実質を区別することが重要です。",
    "impact": "消費者の節約志向や買い物の選び方が変わり、小売業の商品構成や価格戦略にも影響します。",
    "outlook": "賃金、物価、消費の動きを一緒に追うことで、景気の実態をより立体的に捉えられます。",
    "sample": true
  },
  {
    "id": "sample-8",
    "category": "国内・国際",
    "title": "人口構造の変化と地域社会",
    "tag": "社会",
    "summary": "人口減少や高齢化は、労働力、医療・介護、交通、教育、商業施設の維持など幅広い分野に関係します。",
    "background": "人口構造の変化は一時的な景気変動とは異なり、長い時間をかけて社会の仕組みを変えていきます。地域によって人口の年齢構成や移動の傾向も異なります。",
    "impact": "地域のサービス維持や人材確保が難しくなり、自治体や企業には地域ごとの条件に応じた対応が求められます。",
    "outlook": "自治体や企業の取り組みを比較し、地域の実情に合った工夫を見ていく必要があります。",
    "sample": true
  },
  {
    "id": "sample-9",
    "category": "思想・言語・文化",
    "title": "「良い人」とは何か：他者を理解すること",
    "tag": "倫理・哲学",
    "summary": "他者を思いやることは、相手の存在や事情を認識し、その立場を考えようとすることから始まります。",
    "background": "倫理学の徳倫理学では、個々の行為だけでなく、どのような人格や習慣を育てるかに注目します。思いやりも、日々の判断や行動を通じて形づくられる徳の一つです。",
    "impact": "相手を理解しようとすることと、相手の望みをすべて受け入れることは同じではありません。配慮には自分と相手の境界を考えることも含まれます。",
    "outlook": "具体的な場面を通して「見る」「理解する」「配慮する」を分けて考えると、自分の倫理観をより明確にできます。",
    "sample": true
  },
  {
    "id": "sample-10",
    "category": "エンタメ・ゲーム",
    "title": "アニメ制作会社を支える収益の仕組み",
    "tag": "アニメ",
    "summary": "アニメ作品の収益は、制作費だけでなく、配信権、商品化、海外展開、出資など複数の仕組みで成り立っています。",
    "background": "製作委員会方式では複数の企業が出資し、権利や収益を分担することがあります。制作会社がどこまで出資や権利保有に関わるかで、収益構造は変わります。",
    "impact": "作品がヒットしても、制作現場に利益が十分還元されるとは限りません。契約や権利の持ち方が重要になります。",
    "outlook": "配信市場や海外展開の拡大によって、資金調達や権利管理の形がどう変わるかが注目点です。",
    "sample": true
  }
];

const CATEGORIES = ["すべて","国内・国際","経済・産業","科学・テクノロジー","思想・言語・文化","食・生活","エンタメ・ゲーム"];
let currentView = "today";
let currentCategory = "すべて";
let savedIds = new Set(JSON.parse(localStorage.getItem("dc-saved") || "[]"));
let deferredInstallPrompt = null;

const list = document.querySelector("#newsList");
const filters = document.querySelector("#categoryFilters");
const empty = document.querySelector("#emptyState");

function renderFilters() {
  filters.innerHTML = "";
  CATEGORIES.forEach(category => {
    const button = document.createElement("button");
    button.className = "filter" + (category === currentCategory ? " active" : "");
    button.textContent = category;
    button.addEventListener("click", () => { currentCategory = category; render(); });
    filters.append(button);
  });
}
function makeArticle(article) {
  const card = document.createElement("article");
  card.className = "article";
  const top = document.createElement("div"); top.className = "article-top";
  const cat = document.createElement("span"); cat.className = "category-label"; cat.textContent = article.category;
  const tag = document.createElement("span"); tag.className = "tag"; tag.textContent = article.tag;
  top.append(cat, tag);
  const title = document.createElement("h3"); title.textContent = article.title;
  card.append(top, title);
  [["概要",article.summary],["背景",article.background],["影響",article.impact],["今後の展望",article.outlook]].forEach(([heading,body]) => {
    const p = document.createElement("p");
    const strong = document.createElement("strong"); strong.textContent = heading;
    p.append(strong, document.createTextNode(body)); card.append(p);
  });
  const actions = document.createElement("div"); actions.className = "article-actions";
  const source = document.createElement("span"); source.className = "source-placeholder"; source.textContent = "出典欄：実ニュース版で追加";
  const save = document.createElement("button"); save.className = "save-button" + (savedIds.has(article.id) ? " saved" : "");
  save.textContent = savedIds.has(article.id) ? "✓ 保存済み" : "＋ 保存する";
  save.addEventListener("click", () => {
    if (savedIds.has(article.id)) savedIds.delete(article.id); else savedIds.add(article.id);
    localStorage.setItem("dc-saved", JSON.stringify([...savedIds])); render();
  });
  actions.append(source, save); card.append(actions);
  return card;
}
function render() {
  renderFilters();
  let shown = ARTICLES;
  if (currentView === "saved") shown = ARTICLES.filter(a => savedIds.has(a.id));
  if (currentView === "archive") shown = [];
  if (currentView === "today" && currentCategory !== "すべて") shown = shown.filter(a => a.category === currentCategory);
  if (currentView === "saved" && currentCategory !== "すべて") shown = shown.filter(a => a.category === currentCategory);
  list.innerHTML = "";
  shown.forEach(a => list.append(makeArticle(a)));
  empty.hidden = shown.length > 0;
  list.hidden = shown.length === 0;
  document.querySelector("#articleCount").textContent = ARTICLES.length;
  document.querySelector("#savedCount").textContent = savedIds.size;
  document.querySelector("#filterCount").textContent = `${currentCategory} · ${shown.length}件`;
  document.querySelector("#listHeading").textContent = currentView === "today" ? "今日のニュース" : currentView === "saved" ? "保存記事" : "アーカイブ";
  document.querySelector("#listSubheading").textContent = currentView === "archive" ? "過去の記事" : "全記事を掲載";
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.view === currentView));
  document.querySelector(".filter-section").hidden = currentView === "archive";
  document.querySelector(".prototype-note").hidden = currentView === "archive" ? false : false;
}
document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
  currentView = tab.dataset.view; currentCategory = "すべて"; render();
}));
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(console.error));
}
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault(); deferredInstallPrompt = event;
  document.querySelector("#installButton").hidden = false;
});
document.querySelector("#installButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector("#installButton").hidden = true;
});
