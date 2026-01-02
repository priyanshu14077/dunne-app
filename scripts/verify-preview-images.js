const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '../lib/mock-data.ts');
const content = fs.readFileSync(mockDataPath, 'utf8');

const previewRegex = /previewImage:\s*"(.*?)"/g;
let match;
let count = 0;
let errors = 0;

while ((match = previewRegex.exec(content)) !== null) {
    const previewPath = match[1];
    const fullPath = path.join(__dirname, '../public', previewPath);
    count++;

    if (previewPath.includes('charms-previwer')) {
        console.error(`Error: Path still points to rewards: ${previewPath}`);
        errors++;
        continue;
    }

    if (!fs.existsSync(fullPath)) {
        console.error(`Error: Missing preview image: ${fullPath}`);
        errors++;
    }
}

console.log(`Verification complete. Checked ${count} preview images. Found ${errors} errors.`);
if (errors > 0) {
    process.exit(1);
}
