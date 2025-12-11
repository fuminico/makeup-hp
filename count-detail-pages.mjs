import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 日本語文字（ひらがな、カタカナ、漢字）をカウント
function countJapaneseCharacters(text) {
  // HTMLタグを除去
  const withoutTags = text.replace(/<[^>]*>/g, '');
  // JSXの{}内を除去
  const withoutJsx = withoutTags.replace(/\{[^}]*\}/g, '');
  // 日本語文字のみをカウント（ひらがな、カタカナ、漢字、全角記号）
  const japaneseChars = withoutJsx.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3000-\u303F]/g);
  return japaneseChars ? japaneseChars.length : 0;
}

const detailPages = [
  'src/app/service/sales/details/page.tsx',
  'src/app/service/consulting/details/page.tsx',
  'src/app/service/development/details/page.tsx',
  'src/app/service/content/details/page.tsx'
];

let totalChars = 0;
console.log('=== 新規追加した詳細ページの文字数カウント ===\n');

for (const pagePath of detailPages) {
  const fullPath = path.join(__dirname, pagePath);
  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const charCount = countJapaneseCharacters(content);
    totalChars += charCount;
    const pageName = pagePath.split('/')[3]; // service名を取得
    console.log(`${pageName}: ${charCount.toLocaleString()}文字`);
  } catch (error) {
    console.log(`${pagePath}: 読み込みエラー - ${error.message}`);
  }
}

console.log(`\n合計: ${totalChars.toLocaleString()}文字`);
console.log(`\n目標: 10,000文字以上`);
console.log(`達成率: ${((totalChars / 10000) * 100).toFixed(1)}%`);

if (totalChars >= 10000) {
  console.log('\n✅ 目標達成！10,000文字以上のコンテンツが追加されました。');
} else {
  console.log(`\n⚠️  あと${(10000 - totalChars).toLocaleString()}文字必要です。`);
}
