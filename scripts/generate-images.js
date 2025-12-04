const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBlqZa_q2V36kKkL5MSmPUvmF7gRI6K8ks';
const API_URL = 'generativelanguage.googleapis.com';

// 画像生成のプロンプト
const imagePrompts = {
  'service-consulting.png': 'A professional business consulting meeting in a modern Japanese office with glass walls. Japanese business professionals (both men and women in business attire) discussing strategy around a table. Premium, clean, corporate aesthetic. Soft natural lighting. Blue and white color tones. High resolution, photorealistic. Tokyo skyline visible through windows.',

  'service-content.png': 'A creative modern workspace for content creation in Japan. Japanese creators working with high-end cameras, lenses, and computer screens displaying video editing software and graphic design. Artistic lighting, warm and inviting but professional. Premium creative studio vibe in Tokyo. High resolution, photorealistic.',

  'service-development.png': 'Japanese software developers working on modern computers in a sleek tech office. Multiple monitors showing code and development tools. Modern, minimalist workspace with natural light. Professional tech company atmosphere in Tokyo. High resolution, photorealistic.',

  'service-sales.png': 'Japanese sales team in a modern office environment. Professional business people in suits having a sales meeting, using laptops and presentations. Energetic and professional atmosphere. Modern Tokyo office setting. High resolution, photorealistic.'
};

async function generateImage(prompt) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      contents: [{
        parts: [{
          text: `Generate an image: ${prompt}`
        }]
      }],
      generationConfig: {
        temperature: 0.4,
        topK: 32,
        topP: 1,
        maxOutputTokens: 4096,
      }
    });

    const options = {
      hostname: API_URL,
      path: `/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            resolve(response);
          } catch (e) {
            reject(new Error(`Failed to parse response: ${e.message}`));
          }
        } else {
          reject(new Error(`API request failed with status ${res.statusCode}: ${data}`));
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

async function saveImage(imageData, filename) {
  const outputPath = path.join(__dirname, '..', 'public', filename);

  // Base64データの場合
  if (imageData.startsWith('data:image')) {
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(outputPath, Buffer.from(base64Data, 'base64'));
  } else {
    // バイナリデータの場合
    fs.writeFileSync(outputPath, imageData);
  }

  console.log(`✓ Saved: ${filename}`);
}

async function main() {
  console.log('Starting image generation...\n');

  for (const [filename, prompt] of Object.entries(imagePrompts)) {
    console.log(`Generating: ${filename}`);
    console.log(`Prompt: ${prompt.substring(0, 80)}...\n`);

    try {
      const response = await generateImage(prompt);
      console.log('API Response:', JSON.stringify(response, null, 2));

      // レスポンスから画像データを抽出
      // Note: Gemini 2.0 Flash は画像生成に対応していない可能性があります
      // この場合、Imagen APIを使用する必要があります

      console.log(`⚠ Note: Gemini 2.0 Flash may not support image generation.`);
      console.log(`   You may need to use Imagen API instead.\n`);

    } catch (error) {
      console.error(`✗ Error generating ${filename}:`, error.message);
    }

    // API制限を避けるため少し待機
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\nImage generation process completed.');
}

main().catch(console.error);
