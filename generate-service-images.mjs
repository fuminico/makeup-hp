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
    console.log('画像生成リクエストを送信中...');
    console.log('プロンプト:', prompt.substring(0, 100) + '...');
    console.log('');

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
  const outputDir = path.join(__dirname, 'docs', 'images');

  // imagesディレクトリが存在しない場合は作成
  try {
    await fs.access(outputDir);
  } catch {
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`✓ フォルダを作成しました: ${outputDir}\n`);
  }

  const filepath = path.join(outputDir, filename);

  // Base64データをバッファに変換して保存
  const buffer = Buffer.from(base64Data, 'base64');
  await fs.writeFile(filepath, buffer);

  console.log(`✓ 画像を保存しました: ${filename}`);
  return filepath;
}

// 各サービスの画像生成プロンプト
const servicePrompts = {
  sales: {
    filename: 'hero-sales-jp.jpg',
    prompt: `Create a professional photorealistic image in 16:9 aspect ratio showing a Japanese business sales scene.

Scene: A professional sales representative in a modern Japanese office meeting room, actively presenting to a client.

Key elements to include:
- Sales person showing product demonstration on a tablet or laptop
- Charts, graphs, and sales data visible on the screen
- Client appearing engaged and interested in the presentation
- Product samples or business documents on the meeting table
- Professional business attire (suits)
- Bright, natural lighting from large windows
- Modern, clean Japanese business office interior
- Business cards, notebooks, or presentation materials visible

Style: Photorealistic, professional business photography, sharp focus, natural colors, modern Japanese corporate aesthetic.

Mood: Professional, engaging, active selling process, trust-building business relationship.

Important: This should clearly show SALES ACTIVITY and CLIENT ENGAGEMENT, not just a meeting.`
  },
  consulting: {
    filename: 'hero-consulting-jp.jpg',
    prompt: `Create a professional photorealistic image in 16:9 aspect ratio showing hands-on business consulting in a Japanese workplace.

Scene: A business consultant working ON-SITE with client employees in their actual workplace (NOT in a conference room).

Key elements to include:
- Consultant examining actual work processes or equipment in a workplace/factory floor
- Consultant actively taking notes and analyzing operations
- Consultant discussing improvements directly with employees at their workstations
- Whiteboard with process flow diagrams or improvement suggestions visible
- Work-in-progress materials or equipment in the background
- Natural, workplace lighting
- Japanese business environment
- Consultant in business casual attire, showing a "hands-on" approach

Style: Photorealistic, documentary-style business photography, natural lighting, authentic workplace atmosphere.

Mood: Practical, collaborative, action-oriented consulting, "getting hands dirty", results-focused problem-solving.

Important: This should show PRACTICAL ON-SITE CONSULTING and COLLABORATIVE IMPROVEMENT, NOT a formal conference room meeting. The consultant should be actively engaged with actual work processes.`
  },
  development: {
    filename: 'hero-dev-jp.jpg',
    prompt: `Create a professional photorealistic image in 16:9 aspect ratio showing web system development in a modern Japanese tech office.

Scene: Software developers collaborating on complex web system architecture in a contemporary workspace.

Key elements to include:
- Multiple large monitors displaying code, API documentation, and system diagrams
- Developers actively coding (code visible on screens)
- Database schema diagrams or cloud infrastructure architecture visible
- Agile sprint board or kanban board in the background
- Modern tech office with natural lighting
- Japanese tech company aesthetic
- Collaborative workspace with standing desks or modern furniture
- Coffee mugs, notebooks, technical books visible

Style: Photorealistic, modern tech company photography, bright natural lighting, clean and professional.

Mood: Innovative, technical excellence, collaborative development, modern technology stack.

Important: This should clearly show SOFTWARE DEVELOPMENT and SYSTEM ARCHITECTURE work, with visible code and technical diagrams on screens.`
  },
  content: {
    filename: 'hero-content-jp.jpg',
    prompt: `Create a professional photorealistic image in 16:9 aspect ratio showing creative content production in a modern Japanese studio.

Scene: Creative professionals working on multimedia content creation in a vibrant studio environment.

Key elements to include:
- Video editing workstation with timeline and footage visible on large monitors
- Graphic design software interface showing creative work
- Camera equipment (DSLR, gimbal, lighting) set up for filming
- Content creator editing video or creating social media content
- Storyboard sketches or creative briefs visible
- Modern studio lighting setup (softboxes, ring lights)
- Creative workspace with colorful atmosphere
- Professional audio equipment (microphone, headphones)

Style: Photorealistic, vibrant creative studio photography, excellent lighting, dynamic and engaging composition.

Mood: Creative, innovative, multimedia storytelling, engaging content production, professional yet artistic.

Important: This should clearly show CONTENT CREATION and MULTIMEDIA PRODUCTION work, with visible creative software interfaces and production equipment.`
  }
};

// メイン処理
async function main() {
  console.log('=== makeup-hp サービス画像生成 ===\n');

  await loadEnv();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('エラー: GEMINI_API_KEY が .env ファイルに設定されていません');
    console.error('.env ファイルに以下の形式で追加してください:');
    console.error('GEMINI_API_KEY=your_api_key_here');
    process.exit(1);
  }

  const services = Object.entries(servicePrompts);
  let successCount = 0;
  let failCount = 0;

  for (const [serviceName, config] of services) {
    console.log(`\n━━━ ${serviceName.toUpperCase()} の画像を生成中 ━━━`);

    try {
      const result = await generateImage(config.prompt, apiKey);

      // レスポンスから画像データを抽出
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
        console.error(`✗ ${serviceName} の画像生成に失敗しました: レスポンスに画像データが含まれていません\n`);
        failCount++;
      }

      // API rate limiting 対策で少し待機
      await new Promise(resolve => setTimeout(resolve, 3000));

    } catch (error) {
      console.error(`✗ ${serviceName} の画像生成でエラーが発生しました:`, error.message, '\n');
      failCount++;
    }
  }

  console.log('\n=== 生成完了 ===');
  console.log(`成功: ${successCount}/${services.length}`);
  console.log(`失敗: ${failCount}/${services.length}`);

  if (successCount > 0) {
    console.log(`\n生成された画像は docs/images/ ディレクトリに保存されています`);
  }
}

main().catch(console.error);
