const fs = require('fs');
const path = require('path');

const mockDataPath = '/Users/priyanshu/Desktop/dunne-2/lib/mock-data.ts';
let content = fs.readFileSync(mockDataPath, 'utf8');

const overlayDir = '/Users/priyanshu/Desktop/dunne-2/public/overlay-charms';

// Regex to match a charm object and its content
// We look for name, category, and previewImage to have enough info for mapping
const charmPattern = /{\n\s*id:\s*"([^"]+)",\n\s*name:\s*"([^"]+)",\n\s*price:\s*\d+,\n\s*category:\s*"([^"]+)",\n\s*image:\s*"([^"]+)",\n\s*previewImage:\s*"([^"]+)",/g;

let match;
let missingCount = 0;
let foundCount = 0;

// Use a temporary string to store the new content during replacement
let newContent = content;

const matches = Array.from(content.matchAll(charmPattern));

// Process in reverse to maintain string indices if we were modifying the string directly, 
// but here we will build a mapping first.
matches.forEach(match => {
    const [fullMatch, id, name, category, image, previewImage] = match;

    const categoryDir = path.join(overlayDir, category);
    if (!fs.existsSync(categoryDir)) {
        missingCount++;
        return;
    }

    const files = fs.readdirSync(categoryDir);
    const parts = previewImage.split('/');
    const rawFilename = parts[parts.length - 1];
    const previewFilename = rawFilename.replace('Label = ', '');

    let overlayFilename = null;

    if (files.includes(previewFilename)) {
        overlayFilename = previewFilename;
    } else {
        const lowerFiles = files.map(f => f.toLowerCase());
        const lowerPreview = previewFilename.toLowerCase();
        const idx = lowerFiles.indexOf(lowerPreview);
        if (idx !== -1) {
            overlayFilename = files[idx];
        }
    }

    if (overlayFilename) {
        const overlayPath = `/overlay-charms/${category}/${overlayFilename}`;
        const replacement = `${fullMatch}\n    overlayImage: "${overlayPath}",`;
        newContent = newContent.replace(fullMatch, replacement);
        foundCount++;
    } else {
        missingCount++;
    }
});

fs.writeFileSync(mockDataPath, newContent, 'utf8');
console.log(`Updated ${foundCount} charms with overlayImage.`);
console.log(`${missingCount} charms could not be mapped.`);
