const fs = require('fs');

const anchorPath = '/Users/priyanshu/Desktop/dunne-2/lib/anchor.ts';
let content = fs.readFileSync(anchorPath, 'utf8');

// Rotation pattern: index 0 = 0°, index 1 = 15°, index 2 = -15°, index 3 = 30°, index 4 = -30°, etc.
const getRotation = (index) => {
    if (index === 0) return 0;
    const level = Math.ceil(index / 2); // 1, 1, 2, 2, 3, 3, ...
    const isLeft = index % 2 === 0; // even indices = left (negative for upper positions)
    return isLeft ? -level * 15 : level * 15;
};

// Replace all scale: 1.5 with scale: 1.0
content = content.replace(/scale: 1\.5/g, 'scale: 1.0');

// Now we need to update rotations per anchor array
// This is complex - let's just replace rotation values in order within each array
// Actually, let's use a different approach - find all anchor point lines and update them

const lines = content.split('\n');
let inAnchorArray = false;
let anchorIndex = 0;
const newLines = [];

for (const line of lines) {
    // Detect start of an anchor array
    if (line.match(/^\s*(mobile|tablet|desktop): \[$/)) {
        inAnchorArray = true;
        anchorIndex = 0;
        newLines.push(line);
        continue;
    }

    // Detect end of anchor array
    if (inAnchorArray && line.match(/^\s*\],?$/)) {
        inAnchorArray = false;
        newLines.push(line);
        continue;
    }

    // If in anchor array and line has x, y, rotation, scale
    if (inAnchorArray && line.includes('x:') && line.includes('rotation:')) {
        const rotation = getRotation(anchorIndex);
        // Replace rotation value
        const newLine = line.replace(/rotation: -?\d+/, `rotation: ${rotation}`);
        newLines.push(newLine);
        anchorIndex++;
        continue;
    }

    newLines.push(line);
}

fs.writeFileSync(anchorPath, newLines.join('\n'), 'utf8');
console.log('✅ Updated all anchor points with scale 1.0 and systematic rotation pattern.');
