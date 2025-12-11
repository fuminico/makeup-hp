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

const servicePages = [
  'src/app/service/sales/page.tsx',
  'src/app/service/consulting/page.tsx',
  'src/app/service/development/page.tsx',
  'src/app/service/content/page.tsx'
];

let totalChars = 0;
console.log('=== 既存サービスページの文字数カウント ===\n');

for (const pagePath of servicePages) {
  const fullPath = path.join(__dirname, pagePath);
  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const charCount = countJapaneseCharacters(content);
    totalChars += charCount;
    const pageName = pagePath.split('/').pop().replace('.tsx', '');
    console.log(`${pageName}: ${charCount}文字`);
  } catch (error) {
    console.log(`${pagePath}: 読み込みエラー`);
  }
}

console.log(`\n合計: ${totalChars}文字`);
console.log(`\n追加目標: 10,000文字以上`);
console.log(`各詳細ページの目安: 約2,500文字 × 4サービス = 10,000文字`);
