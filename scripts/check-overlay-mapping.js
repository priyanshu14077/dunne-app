const fs = require('fs');
const path = require('path');

// Mock data content (need to extract CHARMS array)
const mockDataPath = '/Users/priyanshu/Desktop/dunne-2/lib/mock-data.ts';
const content = fs.readFileSync(mockDataPath, 'utf8');

// Simplistic extraction from mock-data
const charmMatches = content.matchAll(/category:\s*"([^"]+)",[\s\S]*?previewImage:\s*"([^"]+)"/g);
const charms = Array.from(charmMatches).map(m => ({ category: m[1], previewImage: m[2] }));

const overlayDir = '/Users/priyanshu/Desktop/dunne-2/public/overlay-charms';
const categories = fs.readdirSync(overlayDir).filter(f => fs.statSync(path.join(overlayDir, f)).isDirectory());

let found = 0;
let missing = [];

charms.forEach(charm => {
    const categoryDir = path.join(overlayDir, charm.category);
    if (!fs.existsSync(categoryDir)) {
        missing.push(`${charm.previewImage} (Category folder ${charm.category} missing)`);
        return;
    }

    const files = fs.readdirSync(categoryDir);

    // Extract filename from previewImage path
    const parts = charm.previewImage.split('/');
    const rawFilename = parts[parts.length - 1];
    const previewFilename = rawFilename.replace('Label = ', '');

    if (files.includes(previewFilename)) {
        found++;
    } else {
        // Try case-insensitive
        const lowerFiles = files.map(f => f.toLowerCase());
        const lowerPreview = previewFilename.toLowerCase();

        if (lowerFiles.includes(lowerPreview)) {
            found++;
        } else {
            missing.push(`${previewFilename} in ${charm.category}`);
        }
    }
});

console.log(`Found: ${found}/${charms.length}`);
console.log('Missing:', missing.slice(0, 10), missing.length > 10 ? '...' : '');
