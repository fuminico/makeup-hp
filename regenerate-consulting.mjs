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
    console.log('コンサルティング画像生成リクエストを送信中...\n');

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
  const filepath = path.join(outputDir, filename);

  // Base64データをバッファに変換して保存
  const buffer = Buffer.from(base64Data, 'base64');
  await fs.writeFile(filepath, buffer);

  console.log(`✓ 画像を保存しました: ${filename}`);
  return filepath;
}

// コンサルティング画像の改善プロンプト（工場以外のシーン）
const consultingPrompt = `Create a professional photorealistic image in 16:9 aspect ratio showing a business consultant working hands-on with a Japanese company at their office workplace.

IMPORTANT: This must show ON-SITE CONSULTING at an OFFICE or BUSINESS WORKSPACE (NOT a factory, NOT a formal conference room).

Scene Description:
A business consultant in business casual attire (rolled-up sleeves, smart casual) working directly with office employees in their actual workspace - such as an open office area, a cubicle space, or at employees' desks. The consultant should be actively engaged with work processes, analyzing workflows, reviewing documents or computer screens with staff, and discussing improvements collaboratively.

Key Visual Elements - MUST INCLUDE:
1. Open office workspace OR desk area OR collaborative work zone as the background
2. Consultant examining actual work processes on computers, documents, or workflows with employees
3. Office staff in casual business attire working at their desks or standing near their workstations
4. Whiteboard with process flow diagrams, improvement suggestions, sticky notes, or workflow charts
5. Office elements visible: computers/monitors, desks, filing cabinets, office supplies, papers/documents
6. Natural office lighting (windows with daylight) or modern office LED lighting
7. Consultant actively discussing or pointing at workflow issues with employees at their desks
8. Coffee cups, notebooks, pens visible on desks - showing authentic office environment

Additional Context:
- Show collaboration happening AT employee workstations, not in a meeting room
- Multiple monitors or computer screens showing actual work being reviewed
- Casual, approachable atmosphere - NOT formal or stiff
- Evidence of "going to where the work happens" - consultant embedded with the team
- Post-it notes or charts on walls showing improvement ideas or process maps

Visual Style:
- Documentary-style business photography
- Authentic office workplace atmosphere
- Natural, bright office lighting (daylight preferred)
- Candid, collaborative composition
- Shows real office work being analyzed and improved

Mood & Atmosphere:
- Practical and collaborative
- "Hands-on" problem-solving in the office
- Action-oriented consulting
- Results-focused process improvement
- Accessible, down-to-earth approach
- Working alongside employees, not lecturing

What to AVOID:
- Formal conference rooms or boardrooms
- Formal business presentations
- Factory or manufacturing settings
- PowerPoint presentations or projection screens
- Staged meeting room scenes
- Executive environments
- Everyone wearing suits

Japanese modern office context with realistic workplace setting showing genuine business process consulting and operational improvement work happening at employees' desks or workstations.`;

// メイン処理
async function main() {
  console.log('=== コンサルティング画像の再生成（オフィス環境） ===\n');

  await loadEnv();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('エラー: GEMINI_API_KEY が .env ファイルに設定されていません');
    process.exit(1);
  }

  try {
    const result = await generateImage(consultingPrompt, apiKey);

    // レスポンスから画像データを抽出
    if (result.candidates && result.candidates.length > 0) {
      const candidate = result.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            await saveImage(part.inlineData.data, 'hero-consulting-jp.jpg');
            console.log('\n✓ コンサルティング画像の再生成が完了しました！');
            console.log('  シーン: オフィス環境での現場コンサルティング');
            break;
          }
        }
      }
    } else {
      console.error('✗ 画像生成に失敗しました: レスポンスに画像データが含まれていません');
      process.exit(1);
    }
  } catch (error) {
    console.error('✗ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);
