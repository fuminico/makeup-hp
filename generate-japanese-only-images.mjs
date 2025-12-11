import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 環境変数から APIキーを読み込む
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

// Gemini API で画像を生成
async function generateImage(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]
  };

  try {
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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('画像生成エラー:', error.message);
    throw error;
  }
}

// Base64画像をファイルに保存
async function saveImage(base64Data, filename) {
  const docsDir = path.join(__dirname, 'docs', 'images');
  const publicDir = path.join(__dirname, 'public', 'images');

  // 両方のディレクトリに保存
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

  console.log(`✓ 画像を保存しました: ${filename}`);
}

// 日本人スタッフのみの画像生成プロンプト
const servicePrompts = {
  sales: {
    filename: 'hero-sales-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing a Japanese business sales scene with ONLY JAPANESE people.

Scene: A professional Japanese sales representative in a modern Japanese office meeting room, actively presenting to a Japanese client.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business hairstyles

Key Visual Elements:
- Japanese sales person showing product demonstration on a tablet or laptop
- Charts, graphs, and sales data visible on the screen
- Japanese client appearing engaged and interested in the presentation
- Product samples or business documents on the meeting table
- Professional Japanese business attire
- Bright, natural lighting from large windows
- Modern, clean Japanese business office interior
- Business cards, notebooks, or presentation materials visible

Style: Photorealistic, professional Japanese business photography, sharp focus, natural colors, modern Japanese corporate aesthetic.

Mood: Professional, engaging, active selling process, trust-building business relationship.

IMPORTANT: This must clearly show SALES ACTIVITY and CLIENT ENGAGEMENT with exclusively JAPANESE staff, not just a meeting.`
  },
  consulting: {
    filename: 'hero-consulting-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese business consulting with ONLY JAPANESE people.

IMPORTANT: This must show ON-SITE CONSULTING at a JAPANESE OFFICE WORKSPACE (NOT a factory, NOT a formal conference room).

Scene: A Japanese business consultant in business casual attire working directly with Japanese office employees in their actual workspace.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business hairstyles

Key Visual Elements:
- Open Japanese office workspace or desk area as the background
- Japanese consultant examining work processes on computers or documents with Japanese employees
- Japanese office staff in casual business attire at their desks
- Whiteboard with process flow diagrams, improvement suggestions, or sticky notes
- Office elements: computers/monitors, desks, filing cabinets, papers/documents
- Natural office lighting (windows with daylight)
- Japanese consultant actively discussing workflow with Japanese employees at their desks
- Coffee cups, notebooks, pens visible - authentic Japanese office environment
- Post-it notes or charts on walls showing improvement ideas

Style: Documentary-style Japanese business photography, authentic Japanese office atmosphere, natural lighting.

Mood: Practical, collaborative, "hands-on" problem-solving, accessible approach.

IMPORTANT: Show PRACTICAL ON-SITE CONSULTING with exclusively JAPANESE staff, NOT a formal meeting.`
  },
  development: {
    filename: 'hero-dev-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese web system development with ONLY JAPANESE people.

Scene: Japanese software developers collaborating on complex web system architecture in a contemporary Japanese workspace.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese tech professionals
- Natural Japanese skin tone
- Typical Japanese tech worker hairstyles

Key Visual Elements:
- Multiple large monitors displaying code, API documentation, and system diagrams
- Japanese developers actively coding (code visible on screens)
- Database schema diagrams or cloud infrastructure architecture visible
- Agile sprint board or kanban board in the background
- Modern Japanese tech office with natural lighting
- Japanese tech company aesthetic
- Collaborative workspace with modern furniture
- Coffee mugs, notebooks, technical books visible

Style: Photorealistic, modern Japanese tech company photography, bright natural lighting, clean and professional.

Mood: Innovative, technical excellence, collaborative development, modern technology stack.

IMPORTANT: Clearly show SOFTWARE DEVELOPMENT with exclusively JAPANESE developers, with visible code and technical diagrams on screens.`
  },
  content: {
    filename: 'hero-content-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese creative content production with ONLY JAPANESE people.

Scene: Japanese creative professionals working on multimedia content creation in a modern Japanese studio environment.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese creative professionals
- Natural Japanese skin tone
- Typical Japanese creative worker hairstyles

Key Visual Elements:
- Video editing workstation with timeline and footage visible on large monitors
- Graphic design software interface showing creative work
- Camera equipment (DSLR, gimbal, lighting) set up for filming
- Japanese content creator editing video or creating social media content
- Storyboard sketches or creative briefs visible
- Modern studio lighting setup (softboxes, ring lights)
- Creative workspace with colorful atmosphere
- Professional audio equipment (microphone, headphones)

Style: Photorealistic, vibrant Japanese creative studio photography, excellent lighting, dynamic composition.

Mood: Creative, innovative, multimedia storytelling, engaging content production, professional yet artistic.

IMPORTANT: Clearly show CONTENT CREATION and MULTIMEDIA PRODUCTION with exclusively JAPANESE creators, with visible creative software interfaces and production equipment.`
  }
};

// メイン処理
async function main() {
  console.log('=== 日本人スタッフのみの画像生成 ===\n');

  await loadEnv();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('エラー: GEMINI_API_KEY が .env ファイルに設定されていません');
    process.exit(1);
  }

  const services = Object.entries(servicePrompts);
  let successCount = 0;
  let failCount = 0;

  for (const [serviceName, config] of services) {
    console.log(`\n━━━ ${serviceName.toUpperCase()} の画像を生成中（日本人スタッフのみ） ━━━`);
    console.log('画像生成リクエストを送信中...\n');

    try {
      const result = await generateImage(config.prompt, apiKey);

      if (result.candidates && result.candidates.length > 0) {
        const candidate = result.candidates[0];
        if (candidate.content && candidate.content.parts) {
          for (const part of candidate.content.parts) {
            if (part.inlineData && part.inlineData.data) {
              await saveImage(part.inlineData.data, config.filename);
              successCount++;
              console.log(`✓ ${serviceName} の画像生成が完了しました\n`);
              break;
            }
          }
        }
      } else {
        console.error(`✗ ${serviceName} の画像生成に失敗しました\n`);
        failCount++;
      }

      // API rate limiting 対策で少し待機
      await new Promise(resolve => setTimeout(resolve, 3000));

    } catch (error) {
      console.error(`✗ ${serviceName} でエラーが発生しました:`, error.message, '\n');
      failCount++;
    }
  }

  console.log('\n=== 生成完了 ===');
  console.log(`成功: ${successCount}/${services.length}`);
  console.log(`失敗: ${failCount}/${services.length}`);

  if (successCount > 0) {
    console.log(`\n生成された画像は以下のディレクトリに保存されています:`);
    console.log(`- docs/images/`);
    console.log(`- public/images/`);
  }
}

main().catch(console.error);
