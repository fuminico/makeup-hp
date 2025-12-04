import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'AIzaSyCLNQLSVwVYjtX6tQVmQXjDC4j8u5iUJcA';
const MODEL = 'gemini-3-pro-image-preview';

const heroImages = [
  {
    filename: 'hero-services.jpg',
    title: 'サービス概要ページ',
    prompt: `Modern business services concept illustration for corporate website hero section.
Abstract geometric composition showing four pillars or columns representing different business services.
Each pillar has subtle icons or symbols: code/tech, handshake/sales, lightbulb/consulting, creativity/content.
Professional color scheme: deep blue (#046bd2), navy (#1e293b), white, light gray (#F0F5FA), with subtle purple and green accents.
Clean, modern, premium design with floating geometric shapes suggesting innovation and comprehensive solutions.
Subtle gradients, soft shadows, professional atmosphere.
Illustrative style (not photorealistic), sophisticated and trustworthy.
Horizontal composition, high quality, premium corporate feel.
Conveys: versatility, expertise, integrated solutions, business growth.
Modern minimalist aesthetic suitable for Japanese corporate website.`
  },
  {
    filename: 'hero-company.jpg',
    title: '会社概要ページ',
    prompt: `Professional corporate identity hero image for company overview page.
Abstract business concept illustration showing stability, trust, and forward-thinking vision.
Elements suggesting: solid foundation, upward growth trajectory, innovation, reliability.
Professional color scheme: deep blue (#046bd2), navy (#1e293b), white, light gray (#F0F5FA).
Clean geometric shapes, modern architecture-inspired elements, subtle tech motifs.
Conveys professionalism, credibility, experience, and future-oriented mindset.
Sophisticated gradients, elegant composition, premium feel.
Illustrative style (not photorealistic), business-appropriate.
Horizontal composition for website hero section, high quality.
Modern minimalist aesthetic suitable for established Japanese corporation.`
  }
];

async function generateImage(prompt, outputPath, title) {
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
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🎨 Generating: ${title}`);
    console.log(`📁 Filename: ${path.basename(outputPath)}`);
    console.log(`${'='.repeat(60)}`);
    console.log(`Prompt: ${prompt.substring(0, 80)}...`);
    console.log('');

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

    const fileSizeKB = (buffer.length / 1024).toFixed(2);
    console.log(`✅ Successfully generated: ${path.basename(outputPath)}`);
    console.log(`📊 File size: ${fileSizeKB} KB`);
    console.log(`💾 Saved to: ${outputPath}`);

    return true;

  } catch (error) {
    console.error(`❌ Error generating ${path.basename(outputPath)}:`, error.message);
    return false;
  }
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'public', 'images');

  console.log('\n🚀 Starting hero image generation for Services and Company pages...');
  console.log('='.repeat(60));
  console.log(`Using model: ${MODEL}`);
  console.log(`Output directory: ${outputDir}`);
  console.log('='.repeat(60));

  let successCount = 0;
  let failCount = 0;

  for (const image of heroImages) {
    const outputPath = path.join(outputDir, image.filename);
    const success = await generateImage(image.prompt, outputPath, image.title);

    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Wait a bit between requests
    if (heroImages.indexOf(image) < heroImages.length - 1) {
      console.log('\n⏳ Waiting 3 seconds before next generation...');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Generation Summary');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📁 Total: ${heroImages.length}`);
  console.log('='.repeat(60) + '\n');
}

main().catch(console.error);
