import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'AIzaSyCLNQLSVwVYjtX6tQVmQXjDC4j8u5iUJcA';
const MODEL = 'gemini-3-pro-image-preview';

// トップページヒーロー画像のプロンプト（既存サイトの雰囲気に合わせる）
const heroPrompt = `
Modern business technology concept illustration.
Abstract geometric shapes representing digital transformation and business growth.
Color scheme: deep blue (#046bd2), navy (#1e293b), white, and light gray (#F0F5FA).
Clean, professional, corporate design.
Floating geometric elements suggesting innovation and progress.
Subtle gradients and soft shadows.
Modern minimalist style, not photorealistic but illustrative.
Professional business atmosphere with tech elements.
Horizontal composition, suitable for website hero section.
High quality, premium feel.
`;

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
    console.log(`Prompt: ${prompt.substring(0, 100)}...`);

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
  const outputPath = path.join(outputDir, 'hero-home.jpg');

  console.log('='.repeat(70));
  console.log('Hero Image Generation for Makeup HP - Top Page');
  console.log('Using gemini-3-pro-image-preview model');
  console.log('='.repeat(70));
  console.log(`API Key: ${API_KEY.substring(0, 20)}...`);
  console.log(`Output directory: ${outputDir}`);
  console.log('='.repeat(70));
  console.log('');

  await generateImage(heroPrompt, outputPath);

  console.log('='.repeat(70));
  console.log('Hero Image Generation Complete');
  console.log('='.repeat(70));
}

main().catch(console.error);
