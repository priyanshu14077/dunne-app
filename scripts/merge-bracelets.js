const fs = require('fs');
const path = require('path');

const libAnchorPath = '/Users/priyanshu/Desktop/dunne-2/lib/anchor.ts';
const braceletsMdPath = '/Users/priyanshu/Desktop/dunne-2/bracelets-anchors.md';
const outputPath = '/Users/priyanshu/Desktop/dunne-2/lib/anchors/bracelets.ts';

// Helper to apply 15-deg rotation logic
const applyRotation = (anchors) => {
    return anchors.map((a, index) => {
        const level = Math.ceil(index / 2);
        let rotation = 0;
        if (index > 0) {
            rotation = (index % 2 !== 0) ? level * 15 : -level * 15;
        }
        return {
            ...a,
            rotation: a.rotation !== undefined ? a.rotation : rotation, // Keep existing if present
            scale: a.scale || 1.5,
            label: a.label || `p${index}`
        };
    });
};

// 1. Read existing lib/anchor.ts to get all products
const libAnchorContent = fs.readFileSync(libAnchorPath, 'utf8');

// Simple regex to extract product blocks from lib/anchor.ts
// We want everything between "PRODUCT_ANCHORS: Record<string, ProductAnchorData> = {" and "};"
const match = libAnchorContent.match(/PRODUCT_ANCHORS: Record<string, [^>]+> = \{([\s\S]+)\};/);
if (!match) {
    console.error("Could not find PRODUCT_ANCHORS in lib/anchor.ts");
    process.exit(1);
}

const existingDataStr = "{" + match[1] + "}";
// Note: This is not strictly JSON, it's JS. We'll use a safe eval or parse carefully.
// But since we are in a script, we can just use the content to build the next file.

// Actually, I'll just parse the IDs.
const ids = [...match[1].matchAll(/"([^"]+)":/g)].map(m => m[1]).filter(id => !id.startsWith('chain'));

// 2. Read bracelets-anchors.md
const braceletsMdContent = fs.readFileSync(braceletsMdPath, 'utf8');

let output = `import { ChainConfig, ChainAnchor } from "./types";

export const BRACELET_ANCHORS: Record<string, ChainConfig> = {
`;

// Extract complete objects from braceletsMdContent
// Matches everything from "id": "..." to the next closed brace that ends the product object
const mdMatches = braceletsMdContent.match(/"([^"]+)":\s*\{[\s\S]+?center: \{ x: [\d.]+, y: [\d.]+ \},?\n\s+\}/g);
const updatedIds = [];

if (mdMatches) {
    mdMatches.forEach(block => {
        output += `  ${block},\n`;
        const id = block.match(/"([^"]+)":/)[1];
        updatedIds.push(id);
    });
}

// 3. Add remaining from lib/anchor.ts
ids.forEach(id => {
    if (updatedIds.includes(id)) return;

    // Extract the block for this id from lib/anchor.ts
    const idRegex = new RegExp(`"${id}":\\s*\\{([\\s\\S]+?center: \\{ x: [\\d.]+, y: [\\d.]+ \\}\\s+?\\},?)`);
    const idMatch = match[1].match(idRegex);
    if (idMatch) {
        // Apply rotation logic to this block? 
        // User said "ensure charms are embedded onto the curvature", usually means rotation.
        // For now I'll just copy it as is because these were "manual" or "parametric" already.
        output += `  "${id}": {${idMatch[1]}\n`;
    }
});

output += `};\n`;

fs.writeFileSync(outputPath, output);
console.log("Generated lib/anchors/bracelets.ts");
