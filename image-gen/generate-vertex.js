const https = require('https');
const fs = require('fs');
const path = require('path');

// ユーザー提供のAPIキー (Vertex AI有効化済み)
const API_KEY = 'AIzaSyBn13MSYkSTAak-a5wzAfyPgLLrGIrRUrk';

// 画像生成のプロンプト（日本人の人物を含む横長画像）
const imagePrompts = [
  {
    filename: 'service-consulting.png',
    prompt: 'A professional business consulting meeting in a modern Japanese office. Japanese business professionals (men and women in business suits) discussing strategy around a conference table. Clean, premium corporate aesthetic. Natural lighting from large windows showing Tokyo cityscape. Photorealistic, high quality, wide horizontal composition 16:9 aspect ratio.'
  },
  {
    filename: 'service-content.png',
    prompt: 'Japanese content creators working in a modern creative studio. Men and women using professional cameras, video editing software on multiple monitors. Warm artistic lighting, creative workspace with equipment. Premium production environment in Tokyo. Photorealistic, high quality, wide horizontal composition 16:9 aspect ratio.'
  },
  {
    filename: 'service-development.png',
    prompt: 'Japanese software developers coding in a modern tech office. Men and women working on computers with multiple monitors showing code. Minimalist workspace with natural light. Professional technology company in Tokyo. Photorealistic, high quality, wide horizontal composition 16:9 aspect ratio.'
  },
  {
    filename: 'service-sales.png',
    prompt: 'Japanese sales team in a business meeting. Professional men and women in suits presenting with laptops and charts. Energetic corporate atmosphere in modern Tokyo office. Photorealistic, high quality, wide horizontal composition 16:9 aspect ratio.'
  }
];

async function generateImageWithImagen(prompt) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      instances: [{
        prompt: prompt
      }],
      parameters: {
        sampleCount: 1,
        aspectRatio: "16:9",
        negativePrompt: "cartoon, anime, illustration, drawing, painting, sketch, low quality, blurry, distorted, deformed",
        safetySetting: "block_some",
        personGeneration: "allow_adult"
      }
    });

    const options = {
      hostname: 'us-central1-aiplatform.googleapis.com',
      path: `/v1/projects/YOUR_PROJECT_ID/locations/us-central1/publishers/google/models/imagegeneration@006:predict`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log(`Requesting Vertex AI Imagen API...`);

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`Response status: ${res.statusCode}`);
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            resolve(response);
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e.message}`));
          }
        } else {
          console.error(`Error response: ${data.substring(0, 500)}`);
          reject(new Error(`API request failed with status ${res.statusCode}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

// Gemini APIで画像生成を試みる（Gemini 2.0 Flash Experimentalの場合）
async function generateImageWithGemini(prompt) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 1,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: "image/png"
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log(`Requesting Gemini API...`);

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`Response status: ${res.statusCode}`);
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            resolve(response);
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e.message}`));
          }
        } else {
          console.error(`Error response: ${data.substring(0, 500)}`);
          reject(new Error(`API request failed with status ${res.statusCode}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

async function saveImage(base64Data, filename) {
  const outputPath = path.join(__dirname, '..', 'public', filename);

  try {
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`✓ Saved: ${filename} (${(buffer.length / 1024).toFixed(2)} KB)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to save ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('='.repeat(70));
  console.log('Image Generation for Makeup HP - Service Hero Images');
  console.log('Using Vertex AI Imagen API');
  console.log('='.repeat(70));
  console.log(`API Key: ${API_KEY.substring(0, 20)}...`);
  console.log(`Total images to generate: ${imagePrompts.length}`);
  console.log('='.repeat(70));
  console.log('');

  console.log('⚠ IMPORTANT: This script requires PROJECT_ID to be set.');
  console.log('⚠ Please edit this file and replace YOUR_PROJECT_ID with your actual GCP project ID.');
  console.log('⚠ Alternatively, trying Gemini API first...\n');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < imagePrompts.length; i++) {
    const { filename, prompt } = imagePrompts[i];

    console.log(`[${i + 1}/${imagePrompts.length}] Generating: ${filename}`);
    console.log(`Prompt: ${prompt.substring(0, 100)}...`);
    console.log('');

    try {
      // まずGemini APIを試す
      const response = await generateImageWithGemini(prompt);

      console.log('Response received. Checking for image data...');

      // レスポンスからテキストを確認
      if (response.candidates && response.candidates[0] && response.candidates[0].content) {
        const content = response.candidates[0].content;
        console.log('Response type:', typeof content);
        console.log('Response preview:', JSON.stringify(content).substring(0, 200));

        // Gemini APIはテキストのみを返すため、画像生成には対応していない
        console.log('⚠ Gemini API returned text response, not image data.');
        console.log('⚠ Image generation requires Vertex AI Imagen API or other image generation service.');
        failCount++;
      } else {
        console.log('⚠ Unexpected response format.');
        failCount++;
      }

    } catch (error) {
      console.error(`✗ Error generating ${filename}:`, error.message);
      failCount++;
    }

    console.log('');

    // API制限を避けるため少し待機
    if (i < imagePrompts.length - 1) {
      console.log('Waiting 2 seconds before next request...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('');
    }
  }

  console.log('='.repeat(70));
  console.log('Image Generation Process Complete');
  console.log('='.repeat(70));
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log('='.repeat(70));
  console.log('');
  console.log('CONCLUSION:');
  console.log('The provided API key is for Gemini API (text generation).');
  console.log('Image generation requires one of the following:');
  console.log('1. Vertex AI Imagen API with proper project setup');
  console.log('2. Service account credentials (not API key)');
  console.log('3. Alternative image generation service (DALL-E, Midjourney, etc.)');
  console.log('');
  console.log('RECOMMENDED ACTION:');
  console.log('Download images from free stock photo sites (Unsplash, Pexels, 写真AC)');
  console.log('Search keywords: "japanese business meeting", "japanese office", etc.');
}

main().catch(console.error);
