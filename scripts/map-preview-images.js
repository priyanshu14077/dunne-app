const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '../lib/mock-data.ts');
const previewerDir = path.join(__dirname, '../public/charms-canvas');

const categoryMap = {
    'Sugarpop': 'Sugar Pop',
    'Eternal Bloom': 'Eternal bloom',
    'LoveStruck': 'Lovestruck',
    'Lovestruck': 'Lovestruck',
    'Persona': 'Persona',
    'Guardian': 'Guardian',
    'Game On': 'Game On',
    'Wild & Free': 'Wild & Free'
};

let content = fs.readFileSync(mockDataPath, 'utf8');

// Pattern to match charm objects more robustly
const charmRegex = /\{[\s\S]*?id:\s*"(.*?)"[\s\S]*?category:\s*"(.*?)"[\s\S]*?image:\s*"(.*?)"(?:[\s\S]*?previewImage:\s*".*?",)?[\s\S]*?\}/g;

const updatedContent = content.replace(charmRegex, (match, id, category, image) => {
    const imageName = path.basename(image);
    const targetCategory = categoryMap[category] || category;
    const previewPath = `/charms-canvas/${targetCategory}/${imageName}`;
    const fullPath = path.join(__dirname, '../public', previewPath);

    if (fs.existsSync(fullPath)) {
        // If previewImage already exists, replace it, otherwise add it
        if (match.includes('previewImage:')) {
            return match.replace(/(previewImage:\s*")([^"]*)(")/, `$1${previewPath}$3`);
        } else {
            return match.replace(/(image:\s*".*?",)/, `$1\n    previewImage: "${previewPath}",`);
        }
    } else {
        // console.warn(`Warning: Could not find preview image for charm ${id}: ${fullPath}`);
        return match;
    }
});

fs.writeFileSync(mockDataPath, updatedContent);
console.log('Successfully updated lib/mock-data.ts with previewImage paths.');
