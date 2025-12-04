import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ユーザー提供のAPIキー
const API_KEY = 'AIzaSyCLNQLSVwVYjtX6tQVmQXjDC4j8u5iUJcA';
const MODEL = 'gemini-3-pro-image-preview'; // 画像生成用モデル

// サービスごとの画像プロンプト定義（メイクアップ社のプレミアム・モダンな雰囲気）
const services = [
  {
    filename: 'dev-team-jp.jpg',
    prompt: 'Japanese development team collaboration in premium Tokyo office. Developers working together at standing desks with multiple monitors, discussing code and architecture. Modern workspace with natural light, whiteboards with diagrams, sticky notes. Professional, focused, teamwork atmosphere. Photorealistic, horizontal composition.'
  },
  {
    filename: 'sales-presentation-jp.jpg',
    prompt: 'Japanese sales professional presenting to clients in modern Tokyo meeting room. Business person standing and gesturing toward presentation screen showing charts and data. Clients listening attentively. Premium conference room with city view. Professional, engaging atmosphere. Photorealistic, horizontal composition.'
  },
  {
    filename: 'consulting-workshop-jp.jpg',
    prompt: 'Japanese business consultants facilitating strategy workshop in Tokyo office. Professionals standing around large table with documents, laptops, and strategic planning materials. Whiteboard with frameworks and diagrams visible. Collaborative, professional atmosphere. Photorealistic, horizontal composition.'
  },
  {
    filename: 'content-production-jp.jpg',
    prompt: 'Japanese content creator filming with professional camera in Tokyo studio. Videographer operating cinema camera on tripod, with lighting equipment and monitors showing footage. Clean, professional production environment. Creative, focused atmosphere. Photorealistic, horizontal composition.'
  }
];

async function generateImage(prompt, outputPath) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  const requestBody = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ]
  };

  try {
    console.log(`Generating: ${path.basename(outputPath)}`);
    console.log(`Prompt: ${prompt.substring(0, 80)}...`);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // レスポンスから画像データを抽出
    let base64Image = null;

    if (data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts) {

      for (const part of data.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.mimeType && part.inlineData.mimeType.startsWith('image/')) {
          base64Image = part.inlineData.data;
          break;
        }
      }
    }

    if (!base64Image) {
      console.error('Unexpected response structure:', JSON.stringify(data, null, 2).substring(0, 500));
      throw new Error('No image data found in the response');
    }

    // 画像を保存
    const buffer = Buffer.from(base64Image, 'base64');
    await fs.writeFile(outputPath, buffer);
    console.log(`✓ Saved: ${path.basename(outputPath)} (${(buffer.length / 1024).toFixed(2)} KB)`);
    console.log('');

  } catch (error) {
    console.error(`✗ Error generating image:`, error.message);
    console.log('');
  }
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'public', 'images');

  console.log('='.repeat(70));
  console.log('Image Generation for Makeup HP - Service Hero Images');
  console.log('Using gemini-3-pro-image-preview model');
  console.log('='.repeat(70));
  console.log(`API Key: ${API_KEY.substring(0, 20)}...`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Total images to generate: ${services.length}`);
  console.log('='.repeat(70));
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    const outputPath = path.join(outputDir, service.filename);

    console.log(`[${i + 1}/${services.length}]`);

    try {
      await generateImage(service.prompt, outputPath);
      successCount++;
    } catch (error) {
      failCount++;
    }

    // レート制限回避のための待機
    if (i < services.length - 1) {
      console.log('Waiting 5 seconds before next request...');
      await new Promise(resolve => setTimeout(resolve, 5000));
      console.log('');
    }
  }

  console.log('='.repeat(70));
  console.log('Image Generation Complete');
  console.log('='.repeat(70));
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log('='.repeat(70));
}

main().catch(console.error);
