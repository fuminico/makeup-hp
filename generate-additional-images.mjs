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

// 各ページ用の追加画像プロンプト
const additionalImagePrompts = {
  // 営業代行ページ用
  salesPageFeature: {
    filename: 'sales-team-meeting-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing a Japanese sales team strategy meeting with ONLY JAPANESE people.

Scene: A collaborative Japanese sales team meeting in a modern Japanese office, discussing sales strategies and reviewing performance data together.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business hairstyles

Key Visual Elements:
- Japanese sales team members gathered around a table
- Large monitor or whiteboard displaying sales charts, graphs, KPIs
- Laptops, tablets, and business documents on the table
- Professional Japanese business attire
- Engaging discussion with active participation
- Natural lighting from office windows
- Modern Japanese business office interior
- Coffee cups, notebooks, pens visible

Style: Photorealistic, professional Japanese business photography, natural colors, bright and welcoming atmosphere.

Mood: Collaborative, data-driven, strategic planning, team unity.

IMPORTANT: Show TEAM COLLABORATION and DATA ANALYSIS with exclusively JAPANESE sales professionals.`
  },

  // 営業代行詳細ページ用
  salesDetailsProcess: {
    filename: 'sales-process-analysis-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese sales professionals analyzing customer data with ONLY JAPANESE people.

Scene: Japanese sales professionals working on detailed sales process analysis and customer relationship management in a modern office.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business hairstyles

Key Visual Elements:
- Japanese sales professionals at computer workstations
- CRM software interface visible on screens
- Sales funnel diagrams or customer journey maps
- Charts showing conversion rates and sales metrics
- Professional Japanese business casual attire
- Focused work environment
- Clean, modern Japanese office space
- Natural lighting

Style: Photorealistic, professional Japanese business photography, clear and sharp focus.

Mood: Analytical, systematic, data-driven approach, professional efficiency.

IMPORTANT: Show SALES DATA ANALYSIS and SYSTEMATIC PROCESS with exclusively JAPANESE professionals.`
  },

  // コンサルティングページ用
  consultingPageWorkshop: {
    filename: 'consulting-workshop-discussion-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing a Japanese business consulting workshop with ONLY JAPANESE people.

Scene: A Japanese consulting workshop where consultants and client employees are collaborating on process improvement strategies.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business hairstyles

Key Visual Elements:
- Japanese consultant facilitating a workshop
- Japanese participants gathered around tables
- Whiteboard with diagrams, flowcharts, and sticky notes
- Laptop presentations or printed materials
- Active discussion and brainstorming
- Business casual attire
- Workshop-style seating arrangement
- Natural office lighting

Style: Photorealistic, documentary-style Japanese business photography, warm and collaborative atmosphere.

Mood: Interactive, hands-on problem-solving, participatory approach, knowledge sharing.

IMPORTANT: Show INTERACTIVE WORKSHOP and COLLABORATIVE PROBLEM-SOLVING with exclusively JAPANESE participants.`
  },

  // コンサルティング詳細ページ用
  consultingDetailsImplementation: {
    filename: 'consulting-implementation-support-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese consultants implementing solutions on-site with ONLY JAPANESE people.

Scene: Japanese business consultants working side-by-side with client staff, implementing improvements in a real Japanese office environment.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese business professionals
- Natural Japanese skin tone
- Typical Japanese business hairstyles

Key Visual Elements:
- Japanese consultant working at a desk with Japanese client staff
- Computer screens showing workflow improvements or new systems
- Documents with process diagrams or implementation plans
- Japanese office workspace environment
- Practical, hands-on guidance being provided
- Business casual attire
- Collaborative working atmosphere
- Natural office lighting

Style: Photorealistic, authentic Japanese workplace photography, realistic working environment.

Mood: Practical support, hands-on implementation, close collaboration, results-oriented.

IMPORTANT: Show ON-SITE IMPLEMENTATION SUPPORT with exclusively JAPANESE consultants and staff.`
  },

  // 開発ページ用
  developmentPageArchitecture: {
    filename: 'dev-system-architecture-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese developers discussing system architecture with ONLY JAPANESE people.

Scene: Japanese software architects and developers collaborating on complex system architecture design in a modern Japanese tech office.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese tech professionals
- Natural Japanese skin tone
- Typical Japanese tech worker hairstyles

Key Visual Elements:
- Large whiteboard with system architecture diagrams (microservices, databases, APIs)
- Japanese developers discussing technical design
- Laptops with code editors or architecture tools visible
- Technical diagrams showing cloud infrastructure
- Modern Japanese tech office environment
- Professional yet casual tech attire
- Natural lighting
- Coffee, notebooks, technical books visible

Style: Photorealistic, modern Japanese tech company photography, clean and professional.

Mood: Technical excellence, architectural planning, collaborative design, innovation.

IMPORTANT: Show SYSTEM ARCHITECTURE DESIGN and TECHNICAL COLLABORATION with exclusively JAPANESE developers.`
  },

  // 開発詳細ページ用
  developmentDetailsAgile: {
    filename: 'dev-agile-development-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese development team in agile sprint planning with ONLY JAPANESE people.

Scene: Japanese software development team conducting agile sprint planning in a modern Japanese tech workspace.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese tech professionals
- Natural Japanese skin tone
- Typical Japanese tech worker hairstyles

Key Visual Elements:
- Kanban board or sprint board with task cards visible
- Japanese developers gathered for standup or planning
- Monitors showing code, Jira/GitHub, or CI/CD pipelines
- Agile ceremony in progress
- Modern Japanese tech office space
- Casual professional tech attire
- Collaborative team environment
- Natural office lighting

Style: Photorealistic, modern Japanese tech company photography, dynamic and energetic.

Mood: Agile methodology, iterative development, team collaboration, modern practices.

IMPORTANT: Show AGILE DEVELOPMENT PROCESS and TEAM COLLABORATION with exclusively JAPANESE developers.`
  },

  // コンテンツ制作ページ用
  contentPageProduction: {
    filename: 'content-video-production-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese content creators producing video content with ONLY JAPANESE people.

Scene: Japanese video production team filming and creating digital content in a modern Japanese studio.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese creative professionals
- Natural Japanese skin tone
- Typical Japanese creative worker hairstyles

Key Visual Elements:
- Japanese content creator in front of camera or filming setup
- Professional camera equipment (DSLR, gimbal, lighting)
- Studio lighting setup (softboxes, LED panels)
- Behind-the-scenes production team
- Monitor showing live preview of footage
- Modern studio environment
- Creative professional attire
- Microphones and audio equipment

Style: Photorealistic, vibrant Japanese creative studio photography, professional production quality.

Mood: Creative energy, professional production, multimedia storytelling, engaging content.

IMPORTANT: Show VIDEO PRODUCTION IN ACTION with exclusively JAPANESE content creators and crew.`
  },

  // コンテンツ制作詳細ページ用
  contentDetailsEditing: {
    filename: 'content-creative-editing-jp.jpg',
    prompt: `CRITICAL: ALL PEOPLE IN THIS IMAGE MUST BE JAPANESE. NO FOREIGNERS OR NON-JAPANESE PEOPLE.

Create a professional photorealistic image in 16:9 aspect ratio showing Japanese creators editing and designing content with ONLY JAPANESE people.

Scene: Japanese creative professionals working on video editing and graphic design in a modern Japanese creative workspace.

STRICT REQUIREMENTS - ALL PEOPLE MUST BE:
- Japanese ethnicity with Japanese facial features
- Japanese creative professionals
- Natural Japanese skin tone
- Typical Japanese creative worker hairstyles

Key Visual Elements:
- Large curved monitors displaying video editing timeline (Premiere Pro or DaVinci Resolve)
- Graphic design software interface (Photoshop, Illustrator, Figma)
- Color grading panels or design assets visible
- Japanese content editor focused on creative work
- Storyboards or creative briefs nearby
- Modern creative workspace with personality
- Professional creative attire
- Natural and studio lighting mix

Style: Photorealistic, vibrant Japanese creative studio photography, colorful and engaging.

Mood: Creative focus, post-production excellence, attention to detail, artistic vision.

IMPORTANT: Show CONTENT EDITING AND DESIGN WORK with exclusively JAPANESE creative professionals.`
  }
};

// メイン処理
async function main() {
  console.log('=== 追加画像の生成（8枚） ===\n');

  await loadEnv();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('エラー: GEMINI_API_KEY が .env ファイルに設定されていません');
    process.exit(1);
  }

  const images = Object.entries(additionalImagePrompts);
  let successCount = 0;
  let failCount = 0;

  for (const [imageName, config] of images) {
    console.log(`\n━━━ ${imageName} の画像を生成中 ━━━`);
    console.log(`ファイル名: ${config.filename}`);
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
              console.log(`✓ ${imageName} の画像生成が完了しました\n`);
              break;
            }
          }
        }
      } else {
        console.error(`✗ ${imageName} の画像生成に失敗しました\n`);
        failCount++;
      }

      // API rate limiting 対策で少し待機
      await new Promise(resolve => setTimeout(resolve, 3000));

    } catch (error) {
      console.error(`✗ ${imageName} でエラーが発生しました:`, error.message, '\n');
      failCount++;
    }
  }

  console.log('\n=== 生成完了 ===');
  console.log(`成功: ${successCount}/${images.length}`);
  console.log(`失敗: ${failCount}/${images.length}`);

  if (successCount > 0) {
    console.log(`\n生成された画像は以下のディレクトリに保存されています:`);
    console.log(`- docs/images/`);
    console.log(`- public/images/`);
  }
}

main().catch(console.error);
