const fs = require('fs');
const path = require('path');
const { NECKLACE_CURVES } = require('./necklace-curves.js');

// --- CONFIGURATION ---
const SCAN_DIRS = ['public/bracelets', 'public/necklace'];
const OUTPUT_FILE = path.join(__dirname, '../lib/anchor.ts');

// --- MATH HELPERS ---

// --- MATH HELPERS ---

function reorderCenterOut(points) {
    if (!points.length) return [];

    // 1. Sort by Y to find the "bottom" part (which is visually where we want to start)
    // Actually, for bracelets (circle), "bottom" is max Y. for necklaces (U), "bottom" is max Y.
    // But we need to be careful.
    // "Center most point that is at the bottom".

    // Let's find the point with the highest Y value (max Y = bottom in dom coords)
    // Then alternate left/right from there.

    // Sort all points by X to establish a "linear" order (left to right) works well for U-shape.
    // For a circle (bracelet), it's trickier because it wraps.
    // But my generation logic generates them in order (top->right->bottom->left for bracelet, left->right for necklace).

    // BRACELET STRATEGY: 
    // My getBraceletPoints generates clockwise from top (-PI/2).
    // Indices: 0 (top), ... 3 (right), ... 6 (bottom), ... 9 (left).
    // If steps=9, indices 0..8. Bottom is roughly index 4 or 5.

    // NECKLACE STRATEGY:
    // Left to right. Center is middle index.

    // GENERAL STRATEGY:
    // 1. Find the point closest to {x: 50, y: 100} (Bottom Center).
    // 2. That is index 0.
    // 3. Then take the next closest, etc? 
    // Better: Sort by "distance from bottom center" is risky if shape is specific.
    // "Start from center most point... next should be on right and then left"

    // Let's stick to the generation order I Control.
    // Necklace: 0..8 (Left->Right). Center is 4. Order: 4, 5, 3, 6, 2, 7, 1, 8, 0.
    // Bracelet: 0..8 (Top->Clockwise->Top). bottom is ~4.

    // Let's implement a generic "Center-Out" sorter for an array that is ALREADY sorted linearly/circularly such that the "middle" of the array is the "bottom center".

    // For Necklace (generated left->right): Middle index is bottom.
    // For Bracelet (generated top->clockwise): Bottom is roughly half-way.

    const centerIndex = Math.floor((points.length - 1) / 2); // e.g. 9 points -> index 4

    const reordered = [points[centerIndex]];
    let offset = 1;

    while (reordered.length < points.length) {
        // Right (Next in array)
        if (centerIndex + offset < points.length) {
            reordered.push(points[centerIndex + offset]);
        }
        // Left (Prev in array)
        if (centerIndex - offset >= 0) {
            reordered.push(points[centerIndex - offset]);
        }
        offset++;
    }

    // Re-label them p1..p9 based on this new order? Or keep original labels? 
    // User sees "p1" in admin tool. It clarifies order if we re-label them.
    return reordered.map((p, i) => ({ ...p, label: `p${i}` }));
}

// Generate a Circle/Oval for Bracelets
function getBraceletPoints() {
    const points = [];
    const centerX = 0.5;
    const centerY = 0.5;
    const radiusX = 0.35;
    const radiusY = 0.35;
    const steps = 9;

    // Angle: PI (Left) -> 0 (Right). Bottom is PI/2.
    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1);
        const angle = Math.PI * (1 - t); // PI -> 0

        const x = (centerX + radiusX * Math.cos(angle)) * 100;
        const y = (centerY + radiusY * Math.sin(angle)) * 100;

        // Rotation: Align with radius. 
        // At Bottom (PI/2), rotation should be 0.
        // At Left (PI), rotation should be 90.
        // Formula: (Angle - PI/2) * (180/PI).
        // Check: PI -> PI/2 -> 90. Correct.
        // Check: 0 -> -PI/2 -> -90. Correct.
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        points.push({
            x: Number(x.toFixed(2)),
            y: Number(y.toFixed(2)),
            rotation: Number(rotation.toFixed(0)),
            scale: 1.0
        });
    }
    return reorderCenterOut(points);
}

// Generate a "U" Curve for Necklaces
function getNecklacePoints() {
    const points = [];
    const steps = 9;

    for (let i = 0; i < steps; i++) {
        const t = i / (steps - 1); // 0 to 1

        const xVal = 0.25 + (t * 0.5);
        const angle = (t * Math.PI) - (Math.PI / 2);
        const dip = Math.cos(angle);
        const yVal = 0.25 + (dip * 0.55);

        const x = xVal * 100;
        const y = yVal * 100;

        // Rotation for necklace:
        // Usually gravity takes over, so 0 is best.
        // But to "fan out" slightly:
        // Left side (t < 0.5): Positive rotation?
        // Right side (t > 0.5): Negative rotation?
        // Let's try a subtle fan.
        const rotation = (0.5 - t) * 30; // +/- 15 degrees max

        points.push({
            x: Number(x.toFixed(2)),
            y: Number(y.toFixed(2)),
            rotation: Number(rotation.toFixed(0)),
            scale: 1.0
        });
    }
    return reorderCenterOut(points);
}

// Function to handle ID Overrides
const ID_OVERRIDES = {
    // Bracelets
    "golden-charm-chain": "golden-charm",
    "golden-charm-chain-bracelet": "golden-charm",

    // Necklaces - Map to chain-XX format from mock-data.ts
    "paperclip-link": "chain-01",           // Paperclip Link Necklace
    "twist-chain": "chain-02",              // Twist Chain Necklace
    "golden-figaro": "chain-03",            // Golden Figaro Necklace
    "aurora-link": "chain-04",              // Aurora Link Necklace
    "golden-miami": "chain-05",             // Golden Miami Necklace
    "golden-loop": "chain-06",              // Golden loop Necklace
    "nautical-ring": "chain-07",            // Nautical Ring Necklace
    "oval-lock": "chain-08",                // Oval Lock Necklace
    "paperclip-link-(thin)": "chain-09",    // Paperclip Link (Thin) Necklace
    "thin-chain": "chain-10",               // Thin Chain Necklace
    "vero-link": "chain-11"                 // Vero Link Necklace
};

const generateEntry = (rawId, webPath, category) => {
    // Check overrides
    const id = ID_OVERRIDES[rawId] || rawId;

    let anchors = [];
    if (category.includes('bracelet')) {
        anchors = getBraceletPoints();
    } else if (category.includes('necklace')) {
        anchors = getNecklacePoints();
    }

    // Helper to format object string
    const anchorsStr = anchors.map(p =>
        `      { x: ${p.x.toFixed(2)}, y: ${p.y.toFixed(2)}, rotation: ${p.rotation}, scale: ${p.scale}, label: "${p.label}" }`
    ).join(',\n');

    return `  "${id}": {
    id: "${id}",
    category: "${category}",
    imageUrl: "${webPath}",
    anchors: [
${anchorsStr}
    ],
    center: { x: 0.5, y: 0.5 }
  }`;
};

// --- EXECUTION ---

console.log('🤖 Starting Smart Anchor Auto-Fill...');
let allEntries = [];

SCAN_DIRS.forEach(dirRelative => {
    const fullPath = path.join(__dirname, '..', dirRelative);
    if (!fs.existsSync(fullPath)) return;

    const category = path.basename(dirRelative);
    const files = fs.readdirSync(fullPath).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

    console.log(`Processing ${category}: ${files.length} items found.`);

    files.forEach(file => {
        // "Classic Loop bracelet.png" -> "classic-loop" (match mock-data.ts)
        const name = path.parse(file).name;
        const id = name
            .toLowerCase()
            .replace(/bracelet/g, '')
            .replace(/necklace/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+$/, ''); // Remove trailing dashes

        const webPath = `/${category}/${file}`;
        allEntries.push(generateEntry(id, webPath, category));
    });
});

const fileContent = `// Auto-generated by scripts/auto-fill-anchors.js
// Default curves applied. Open /admin/anchor-tool to tweak.

export interface AnchorPoint {
  x: number;
  y: number;
  label?: string;
  type?: 'curve' | 'point';
}

export interface ProductAnchorData {
  id: string;
  category: string;
  imageUrl: string;
  anchors: AnchorPoint[];
  center: { x: number; y: number };
}

export const PRODUCT_ANCHORS: Record<string, ProductAnchorData> = {
${allEntries.join(',\n')}
};
`;

fs.writeFileSync(OUTPUT_FILE, fileContent);
console.log(`✅ Done! Populated lib/anchor.ts with smart defaults for ${allEntries.length} items.`);