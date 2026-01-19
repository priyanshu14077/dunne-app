
const fs = require('fs');
const path = require('path');
const https = require('https');

const STORAGE_BASE = 'https://lnvmeghqivgvoziklfpk.supabase.co/storage/v1/object/public/assets';
const MOCK_DATA_PATH = path.join(__dirname, '../lib/mock-data.ts');

const content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');

// Regex to find image assignments. 
// Matches: image: STORAGE_BASE + '/path/to/image.png'
const regex = /image:\s*STORAGE_BASE\s*\+\s*['"]([^'"]+)['"]/g;

let match;
const urls = [];

while ((match = regex.exec(content)) !== null) {
    const relativePath = match[1];
    // Fix common URL encoding issues manually if needed, or rely on URL object
    // encodeURI handles spaces etc.
    const fullUrl = new URL(STORAGE_BASE + relativePath).toString();
    // Manual double check for spaces because sometimes they are not encoded in code but browser handles them
    // The script should handle them like a browser
    urls.push(fullUrl);
}

console.log(`Found ${urls.length} images to verify.`);

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.request(url, { method: 'HEAD' }, (res) => {
            if (res.statusCode === 200) {
                resolve({ url, status: 200, ok: true });
            } else {
                resolve({ url, status: res.statusCode, ok: false });
            }
        }).on('error', (e) => {
            resolve({ url, error: e.message, ok: false });
        }).end();
    });
}

(async () => {
    const results = await Promise.all(urls.map(checkUrl));
    const failed = results.filter(r => !r.ok);

    if (failed.length > 0) {
        console.log('--- FAILED IMAGES ---');
        failed.forEach(f => console.log(`${f.status || f.error}: ${f.url}`));
    } else {
        console.log('All images verified successfully!');
    }
})();
