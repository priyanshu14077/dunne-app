const fs = require('fs');
const path = require('path');

const baseDir = '/Users/priyanshu/Desktop/dunne-2/public/necklace';
const dirs = fs.readdirSync(baseDir).filter(f => f.startsWith('DUN-BASECHAIN'));

const results = [];

dirs.sort((a, b) => {
    // Sort directories numerically if possible (01, 02, etc)
    const numA = parseInt(a.replace('DUN-BASECHAIN', ''));
    const numB = parseInt(b.replace('DUN-BASECHAIN', ''));
    return numA - numB;
});

dirs.forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (fs.statSync(dirPath).isDirectory()) {
        const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.')); // Ignore .DS_Store
        files.sort(); // Alphabetical sort of files

        // Get the second image (index 1)
        const secondImage = files.length >= 2 ? files[1] : files[0];

        results.push({
            id: dir.toLowerCase(),
            name: `Chain ${dir.replace('DUN-BASECHAIN', '')}`,
            folder: dir,
            image: secondImage,
            fullPath: `/necklace/${dir}/${secondImage}`
        });
    }
});

console.log(JSON.stringify(results, null, 2));
