const https = require('https');
const fs = require('fs');
const path = require('path');

// ユーザー提供のAPIキー
const API_KEY = 'AIzaSyCLNQLSVwVYjtX6tQVmQXjDC4j8u5iUJcA';

// 画像生成のプロンプト（日本人の人物を含む横長画像）
const imagePrompts = [
  {
    filename: 'service-consulting.png',
    prompt: 'Wide horizontal landscape photo of a professional business consulting meeting in a modern Japanese office with glass walls. Japanese business professionals, both men and women in business attire, discussing strategy around a table. Premium, clean, corporate aesthetic. Soft natural lighting. Blue and white color tones. Tokyo skyline visible through windows. High resolution, photorealistic. Wide aspect ratio 16:9.'
  },
  {
    filename: 'service-content.png',
    prompt: 'Wide horizontal landscape photo of a creative modern workspace for content creation in Japan. Japanese creators, men and women, working with high-end cameras, lenses, and computer screens displaying video editing software and graphic design. Artistic lighting, warm and inviting but professional. Premium creative studio vibe in Tokyo. High resolution, photorealistic. Wide aspect ratio 16:9.'
  },
  {
    filename: 'service-development.png',
    prompt: 'Wide horizontal landscape photo of Japanese software developers, men and women, working on modern computers in a sleek tech office. Multiple monitors showing code and development tools. Modern, minimalist workspace with natural light. Professional tech company atmosphere in Tokyo. High resolution, photorealistic. Wide aspect ratio 16:9.'
  },
  {
    filename: 'service-sales.png',
    prompt: 'Wide horizontal landscape photo of a Japanese sales team in a modern office environment. Professional Japanese business people, men and women in suits, having a sales meeting, using laptops and presentations. Energetic and professional atmosphere. Modern Tokyo office setting. High resolution, photorealistic. Wide aspect ratio 16:9.'
  }
];

async function generateImage(prompt) {
  return new Promise((resolve, reject) => {
    // Gemini APIを使用してテキストから画像生成を試みる
    // 注: Gemini 2.0では画像生成機能が限定的な可能性があります
    const postData = JSON.stringify({
      contents: [{
        parts: [{
          text: `Generate a detailed image description for: ${prompt}`
        }]
      }]
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

    console.log(`Requesting: ${options.hostname}${options.path}`);

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
    // Base64データをバッファに変換
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`✓ Saved: ${filename} (${buffer.length} bytes)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to save ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('='.repeat(70));
  console.log('Image Generation for Makeup HP - Service Hero Images');
  console.log('='.repeat(70));
  console.log(`API Key: ${API_KEY.substring(0, 20)}...`);
  console.log(`Total images to generate: ${imagePrompts.length}`);
  console.log('='.repeat(70));
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < imagePrompts.length; i++) {
    const { filename, prompt } = imagePrompts[i];

    console.log(`[${i + 1}/${imagePrompts.length}] Generating: ${filename}`);
    console.log(`Prompt: ${prompt.substring(0, 80)}...`);
    console.log('');

    try {
      const response = await generateImage(prompt);

      // レスポンスの構造を確認
      console.log('Response structure:', JSON.stringify(response, null, 2).substring(0, 500));

      // 画像データを抽出（APIのレスポンス構造に応じて調整が必要）
      if (response.predictions && response.predictions[0] && response.predictions[0].bytesBase64Encoded) {
        const imageData = response.predictions[0].bytesBase64Encoded;
        const saved = await saveImage(imageData, filename);
        if (saved) {
          successCount++;
        } else {
          failCount++;
        }
      } else if (response.candidates && response.candidates[0]) {
        // Gemini APIのレスポンス形式の場合
        console.log('⚠ This appears to be a text generation API response, not an image generation API.');
        console.log('⚠ The provided API key may not have access to Imagen API.');
        failCount++;
      } else {
        console.log('⚠ Unexpected response format. Cannot extract image data.');
        failCount++;
      }

    } catch (error) {
      console.error(`✗ Error generating ${filename}:`, error.message);
      failCount++;
    }

    console.log('');

    // API制限を避けるため少し待機
    if (i < imagePrompts.length - 1) {
      console.log('Waiting 3 seconds before next request...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log('');
    }
  }

  console.log('='.repeat(70));
  console.log('Image Generation Complete');
  console.log('='.repeat(70));
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log('='.repeat(70));

  if (failCount > 0) {
    console.log('');
    console.log('Note: If image generation failed, the API key may not have access to Imagen API.');
    console.log('Please check:');
    console.log('1. Vertex AI API is enabled in Google Cloud Console');
    console.log('2. The API key has permission to use Imagen');
    console.log('3. You may need to use a service account instead of an API key');
  }
}

main().catch(console.error);
