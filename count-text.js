const fs = require('fs');

function countJapaneseContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Remove all code comments
  let cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, '');
  cleanContent = cleanContent.replace(/\/\/.*/g, '');

  // Extract all string literals (both single and double quotes)
  const stringMatches = [
    ...cleanContent.matchAll(/["']([^"']*?)["']/g),
    ...cleanContent.matchAll(/`([^`]*?)`/g)
  ];

  // Extract text content from JSX tags (between > and <)
  const jsxMatches = cleanContent.matchAll(/>\s*([^<>{}]+?)\s*</g);

  // Combine all text
  let allText = '';

  // Add JSX text content
  for (const match of jsxMatches) {
    const text = match[1].trim();
    if (text && /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(text)) {
      allText += text;
    }
  }

  // Add string literals
  for (const match of stringMatches) {
    const text = match[1].trim();
    if (text && /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(text)) {
      allText += text;
    }
  }

  return allText.length;
}

const files = [
  { name: 'WEBシステム開発', path: 'src/app/service/development/page.tsx' },
  { name: '営業代理', path: 'src/app/service/sales/page.tsx' },
  { name: 'コンサルティング', path: 'src/app/service/consulting/page.tsx' },
  { name: 'コンテンツ制作', path: 'src/app/service/content/page.tsx' }
];

console.log('='.repeat(60));
console.log('各事業ページの文字数カウント');
console.log('='.repeat(60));
console.log('');

let total = 0;
files.forEach(file => {
  const count = countJapaneseContent(file.path);
  total += count;
  console.log(`${file.name}: ${count.toLocaleString()}文字`);
});

console.log('');
console.log('-'.repeat(60));
console.log(`合計: ${total.toLocaleString()}文字`);
console.log('='.repeat(60));
