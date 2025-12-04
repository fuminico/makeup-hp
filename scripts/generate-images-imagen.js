const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBlqZa_q2V36kKkL5MSmPUvmF7gRI6K8ks';

// 画像生成のプロンプト（日本人の人物を含む）
const imagePrompts = {
  'service-consulting.png': 'A professional business consulting meeting in a modern Japanese office with glass walls. Japanese business professionals (both men and women in business attire) discussing strategy around a table. Premium, clean, corporate aesthetic. Soft natural lighting. Blue and white color tones. High resolution, photorealistic. Tokyo skyline visible through windows.',

  'service-content.png': 'A creative modern workspace for content creation in Japan. Japanese creators working with high-end cameras, lenses, and computer screens displaying video editing software and graphic design. Artistic lighting, warm and inviting but professional. Premium creative studio vibe in Tokyo. High resolution, photorealistic.',

  'service-development.png': 'Japanese software developers working on modern computers in a sleek tech office. Multiple monitors showing code and development tools. Modern, minimalist workspace with natural light. Professional tech company atmosphere in Tokyo. High resolution, photorealistic.',

  'service-sales.png': 'Japanese sales team in a modern office environment. Professional business people in suits having a sales meeting, using laptops and presentations. Energetic and professional atmosphere. Modern Tokyo office setting. High resolution, photorealistic.'
};

async function generateImageWithImagen(prompt) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      instances: [{
        prompt: prompt
      }],
      parameters: {
        sampleCount: 1,
        aspectRatio: "16:9",
        negativePrompt: "cartoon, anime, illustration, drawing, low quality, blurry",
        safetySetting: "block_some"
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

async function saveImage(base64Data, filename) {
  const outputPath = path.join(__dirname, '..', 'public', filename);
  const buffer = Buffer.from(base64Data, 'base64');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✓ Saved: ${filename}`);
}

async function main() {
  console.log('='.repeat(60));
  console.log('Image Generation Script for Makeup HP');
  console.log('='.repeat(60));
  console.log('\nNote: This script requires Imagen API access.');
  console.log('The provided API key appears to be for Gemini API.');
  console.log('\nTo use Imagen API, you need to:');
  console.log('1. Enable Vertex AI API in Google Cloud Console');
  console.log('2. Get a service account key or OAuth token');
  console.log('3. Replace YOUR_PROJECT_ID with your GCP project ID\n');
  console.log('='.repeat(60));
  console.log('\nAlternative: Use the built-in generate_image tool instead.\n');

  // プロンプトを表示
  console.log('Image prompts prepared:');
  for (const [filename, prompt] of Object.entries(imagePrompts)) {
    console.log(`\n${filename}:`);
    console.log(`  ${prompt.substring(0, 100)}...`);
  }
}

main().catch(console.error);
