import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadEnv() {
  try {
    const envContent = await fs.readFile(path.join(__dirname, '.env'), 'utf-8');
    const lines = envContent.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        const value = valueParts.join('=');
        process.env[key.trim()] = value.trim();
      }
    }
  } catch (error) {
    console.error('.envファイルの読み込みに失敗しました:', error.message);
  }
}

async function generateImage(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`;

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API エラー (${response.status}): ${errorText}`);
  }

  return await response.json();
}

async function saveImage(base64Data, filename) {
  const docsDir = path.join(__dirname, 'docs', 'images');
  const publicDir = path.join(__dirname, 'public', 'images');

  for (const outputDir of [docsDir, publicDir]) {
    try {
      await fs.access(outputDir);
    } catch {
      await fs.mkdir(outputDir, { recursive: true });
    }

    const filepath = path.join(outputDir, filename);
    const buffer = Buffer.from(base64Data, 'base64');
    await fs.writeFile(filepath, buffer);
  }

  console.log(`✓ 画像を保存しました: ${filename} (docs/images/ と public/images/)`);
}

const consultingPrompt = `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese business consulting with ONLY JAPANESE people.

IMPORTANT: This must show ON-SITE CONSULTING at a JAPANESE OFFICE WORKSPACE (NOT a factory, NOT a formal conference room).

Scene: A Japanese business consultant in business casual attire (rolled-up sleeves, smart casual) working directly with Japanese office employees in their actual workspace - at employees' desks in an open office area.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features (East Asian features)
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business/office worker hairstyles
- Wearing casual business attire common in Japanese offices

Key Visual Elements - MUST INCLUDE:
1. Open Japanese office workspace or desk area as the background
2. Japanese consultant examining work processes on computers or documents with Japanese employees
3. Japanese office staff in casual business attire working at their desks or standing nearby
4. Whiteboard with process flow diagrams, improvement suggestions, sticky notes (preferably with some Japanese text visible)
5. Japanese office elements: computers/monitors, desks, filing cabinets, office supplies, papers/documents
6. Natural office lighting from windows (daylight) or modern LED office lighting
7. Japanese consultant actively discussing or pointing at workflow on computer screens with Japanese employees
8. Coffee cups, notebooks, pens visible on desks - authentic Japanese office environment
9. Post-it notes or charts on walls showing improvement ideas or process maps

Additional Japanese Office Context:
- Collaboration happening AT employee workstations in typical Japanese office layout
- Multiple monitors showing actual work being reviewed
- Casual, approachable atmosphere typical of modern Japanese workplaces
- Evidence of "going to where the work happens" - consultant embedded with team
- Japanese office culture elements visible

Visual Style:
- Documentary-style Japanese business photography
- Authentic Japanese office workplace atmosphere
- Natural, bright office lighting (daylight strongly preferred)
- Candid, collaborative composition
- Shows real Japanese office work being analyzed and improved

Mood & Atmosphere:
- Practical and collaborative Japanese work style
- "Hands-on" problem-solving in Japanese office
- Action-oriented consulting
- Results-focused process improvement
- Accessible, down-to-earth approach common in Japanese business culture
- Working alongside Japanese employees, not lecturing

What to AVOID:
- Formal conference rooms or boardrooms
- Formal business presentations
- Factory or manufacturing settings
- PowerPoint presentations or projection screens
- Staged meeting room scenes
- Executive environments
- Everyone wearing formal suits
- ANY non-Japanese people or foreigners

Japanese modern office context with realistic workplace setting showing genuine business process consulting and operational improvement work happening at Japanese employees' desks or workstations. All people must be clearly Japanese.`;

async function main() {
  console.log('=== コンサルティング画像の再生成（日本人スタッフのみ） ===\n');

  await loadEnv();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('エラー: GEMINI_API_KEY が設定されていません');
    process.exit(1);
  }

  try {
    console.log('画像生成リクエストを送信中...\n');
    const result = await generateImage(consultingPrompt, apiKey);

    if (result.candidates && result.candidates.length > 0) {
      const candidate = result.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            await saveImage(part.inlineData.data, 'hero-consulting-jp.jpg');
            console.log('\n✓ コンサルティング画像の再生成が完了しました！');
            console.log('  - オフィス環境での現場コンサルティング');
            console.log('  - 日本人スタッフのみ');
            break;
          }
        }
      }
    } else {
      console.error('✗ 画像生成に失敗しました');
      process.exit(1);
    }
  } catch (error) {
    console.error('✗ エラー:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);
