const fs = require('fs');

// Read the manual anchor points
const rawData = fs.readFileSync('anchor-points.md', 'utf8');

// Function to calculate rotation based on position for circular products (bracelets)
function calculateBraceletRotation(x, y, centerX = 50, centerY = 50) {
    // Calculate angle from center
    const dx = x - centerX;
    const dy = y - centerY;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    // Rotate 90 degrees to make charms face outward
    angle += 90;
    // Negate to reverse direction
    return Math.round(-angle);
}

// Function to calculate rotation for necklaces (U-curve)
function calculateNecklaceRotation(x, pointIndex, totalPoints = 9) {
    // For necklaces, rotation based on horizontal position
    // Center points = 0, edges tilt to follow curve
    const normalized = (x - 50) / 50; // -1 to 1
    const rotation = Math.round(normalized * -30); // Max ±30 degrees
    // Negate to reverse direction
    return -rotation;
}

// ID correction map: anchor-points.md IDs → mock-data.ts IDs
const ID_CORRECTIONS = {
    'classic-loop--1': 'classic-loop',
    'dual-link--1': 'dual-link',
    'golden-charm-chain--1': 'golden-charm',
    'golden-link-chain--1': 'golden-link',
    'lustre-link--1': 'lustre-link',
    'luxe-chain--1': 'luxe-chain',
    'monochrome-braid--1': 'monochrome-braid',
    'neon-twist--1': 'neon-twist',
    'ocean-weave--1': 'ocean-weave',
    'paper-clip--1': 'paper-clip',
    'skyline-braid--1': 'skyline-braid',
    'twist-elegance--1': 'twist-elegance',
    'verdant-braid--1': 'verdant-braid'
};

// Extract all product entries using regex
const productPattern = /"([^"]+)":\s*{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?anchors:\s*([\s\S]+?)\s*,\s*center:/g;

let match;
const products = {};

while ((match = productPattern.exec(rawData)) !== null) {
    const [_, key, rawId, category, anchorsRaw] = match;

    // Correct the ID
    const id = ID_CORRECTIONS[rawId] || rawId;

    let breakpointAnchors = {};

    // Check if anchors is an object (new format) or array (old format)
    if (anchorsRaw.trim().startsWith('{')) {
        // New Object format: { mobile: [], tablet: [], desktop: [] }
        const mobileMatch = anchorsRaw.match(/"?mobile"?:\s*\[([\s\S]*?)\]/);
        const tabletMatch = anchorsRaw.match(/"?tablet"?:\s*\[([\s\S]*?)\]/);
        const desktopMatch = anchorsRaw.match(/"?desktop"?:\s*\[([\s\S]*?)\]/);

        const parseArray = (text, bp) => {
            if (!text) return [];
            const anchorMatches = text.matchAll(/{[^}]+}/g);
            return Array.from(anchorMatches).map((m, index) => {
                const anchorText = m[0];
                const xMatch = anchorText.match(/"x":\s*([\d.-]+)/);
                const yMatch = anchorText.match(/"y":\s*([\d.-]+)/);
                const rotMatch = anchorText.match(/"rotation":\s*([\d.-]+)/);
                const scaleMatch = anchorText.match(/"scale":\s*([\d.-]+)/);
                const labelMatch = anchorText.match(/"label":\s*"([^"]+)"/);

                const x = xMatch ? parseFloat(xMatch[1]) : 0;
                const y = yMatch ? parseFloat(yMatch[1]) : 0;
                const scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1.5;
                let rotation = rotMatch ? parseFloat(rotMatch[1]) : 0;

                // Only calculate rotation if it was 0 in the source (legacy default)
                if (rotation === 0) {
                    if (category.includes('bracelet')) {
                        rotation = calculateBraceletRotation(x, y);
                    } else {
                        rotation = calculateNecklaceRotation(x, index);
                    }
                }

                return {
                    x,
                    y,
                    rotation,
                    scale,
                    label: labelMatch ? labelMatch[1] : `p${index}`
                };
            });
        };

        breakpointAnchors = {
            mobile: parseArray(mobileMatch ? mobileMatch[1] : '', 'mobile'),
            tablet: parseArray(tabletMatch ? tabletMatch[1] : '', 'tablet'),
            desktop: parseArray(desktopMatch ? desktopMatch[1] : '', 'desktop')
        };
    } else {
        // Old Array format: [ {x, y...}, ... ]
        const anchorMatches = anchorsRaw.matchAll(/{[^}]+}/g);
        const anchors = Array.from(anchorMatches).map((m, index) => {
            const anchorText = m[0];
            const xMatch = anchorText.match(/"x":\s*([\d.-]+)/);
            const yMatch = anchorText.match(/"y":\s*([\d.-]+)/);
            const rotMatch = anchorText.match(/"rotation":\s*([\d.-]+)/);
            const scaleMatch = anchorText.match(/"scale":\s*([\d.-]+)/);

            const x = xMatch ? parseFloat(xMatch[1]) : 0;
            const y = yMatch ? parseFloat(yMatch[1]) : 0;
            const scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1.5;
            let rotation = rotMatch ? parseFloat(rotMatch[1]) : 0;

            if (rotation === 0) {
                if (category.includes('bracelet')) {
                    rotation = calculateBraceletRotation(x, y);
                } else {
                    rotation = calculateNecklaceRotation(x, index);
                }
            }

            return { x, y, rotation, scale, label: `p${index}` };
        });

        // Replicate to all breakpoints
        breakpointAnchors = {
            mobile: anchors,
            tablet: anchors,
            desktop: anchors
        };
    }

    // Store unique products (skip duplicates)
    if (!products[id]) {
        products[id] = {
            id,
            category,
            anchors: breakpointAnchors
        };
    }
}

// Build the lib/anchor.ts content
let output = `// Auto-generated anchor points from manual mapping\n// DO NOT EDIT THIS FILE DIRECTLY - edit anchor-points.md instead\n\nexport interface AnchorPoint {\n  x: number;\n  y: number;\n  rotation: number;\n  scale: number;\n  label?: string;\n}\n\nexport interface BreakpointAnchors {\n  mobile: AnchorPoint[];   // < 768px\n  tablet: AnchorPoint[];   // 768px - 1024px\n  desktop: AnchorPoint[];  // > 1024px\n}\n\nexport interface ProductAnchorData {\n  id: string;\n  category: string;\n  imageUrl: string;\n  anchors: BreakpointAnchors;\n  center: { x: number; y: number };\n}\n\nexport const PRODUCT_ANCHORS: Record<string, ProductAnchorData> = {\n`;

// Add each product
for (const [id, data] of Object.entries(products)) {
    // Determine image URL
    let imageUrl;
    if (data.category.includes('bracelet')) {
        // Find the image filename from the original data
        const imgMatch = rawData.match(new RegExp(`"${id}":[^}]*imageUrl:\\s*"([^"]+)"`));
        imageUrl = imgMatch ? imgMatch[1] : `/bracelets/${id}.png`;
    } else {
        const imgMatch = rawData.match(new RegExp(`"${id}":[^}]*imageUrl:\\s*"([^"]+)"`));
        imageUrl = imgMatch ? imgMatch[1] : `/necklace/${id}.png`;
    }

    output += `  "${id}": {\n`;
    output += `    id: "${id}",\n`;
    output += `    category: "${data.category}",\n`;
    output += `    imageUrl: "${imageUrl}",\n`;
    output += `    anchors: {\n`;

    // For now, we replicate the same anchors for all breakpoints
    const breakpoints = ['mobile', 'tablet', 'desktop'];
    breakpoints.forEach(bp => {
        output += `      ${bp}: [\n`;
        const bpAnchors = data.anchors[bp] || [];
        bpAnchors.forEach(anchor => {
            output += `        { x: ${anchor.x.toFixed(2)}, y: ${anchor.y.toFixed(2)}, rotation: ${anchor.rotation}, scale: ${anchor.scale}, label: "${anchor.label}" },\n`;
        });
        output += `      ],\n`;
    });

    output += `    },\n`;
    output += `    center: { x: 0.5, y: 0.5 }\n`;
    output += `  },\n`;
}

output += `};\n`;

// Write to lib/anchor.ts
fs.writeFileSync('lib/anchor.ts', output, 'utf8');

console.log(`✅ Generated lib/anchor.ts with ${Object.keys(products).length} products`);
console.log('Products included:', Object.keys(products).sort().join(', '));
