const fs = require('fs');
const path = require('path');

const tsPath = path.resolve(__dirname, '../lib/anchor.ts');

// --- Configuration ---

// Global Defaults
const DEFAULT_CONFIG = {
    centerX: 50,      // Center of the canvas (X %)
    centerY: 40,      // Center of the ellipse (Y %)
    radiusX: 35,      // Width spread
    radiusY: 45,      // Height curvature

    // Y-Offset Correction for Top-Center Alignment
    // Moves anchors UP by ~5% to compensate for Render Translate (0, -4%).
    yOffset: -5,

    angleStep: 20,    // Spacing
};

// --- CIRCULAR CONFIG (Braids) ---
// Braided bracelets are typically circular (equal radii)
const BRAID_CONFIG = {
    centerX: 50,
    centerY: 50,
    radiusX: 40, // More circular (vs 35)
    radiusY: 40, // Less vertical stretch (vs 45)
    startAngleDeg: 125,
    endAngleDeg: 235,
    angleStep: 20, // Keep spacing
    yOffset: -5    // Standard offset
};

// --- NECKLACE CONFIG ---
// Necklaces drape in a U-shape (Wider X, Taller Y, but incomplete top)
const NECKLACE_CONFIG = {
    centerX: 50,
    centerY: 40, // Higher center for drape
    radiusX: 45,
    radiusY: 55,
    startAngleDeg: 120, // Wider arc
    endAngleDeg: 240,
    angleStep: 20,
    yOffset: -15 // Specific lift for necklaces
};

const PRODUCT_CONFIGS = {
    // ELLIPSE (Links/Loops)
    'classic-loop': { ...DEFAULT_CONFIG, yOffset: -7 },
    'lustre-link': { ...DEFAULT_CONFIG, yOffset: -5 },
    'dual-link': { ...DEFAULT_CONFIG, yOffset: -3 },
    'golden-charm-chain': { ...DEFAULT_CONFIG, yOffset: -5 },
    'luxe-chain': { ...DEFAULT_CONFIG, yOffset: -5 },
    'paper-clip': { ...DEFAULT_CONFIG, yOffset: -7 }, // User can manually calibrate this if needed
    'oval-lock': { ...DEFAULT_CONFIG, yOffset: -5 },

    // CIRCULAR (Braids)
    'monochrome-braid': BRAID_CONFIG,
    'neon-twist': BRAID_CONFIG,
    'ocean-weave': BRAID_CONFIG,
    'skyline-braid': BRAID_CONFIG,
    'twist-elegance': BRAID_CONFIG,
    'verdant-braid': BRAID_CONFIG,
    'nautical-ring': BRAID_CONFIG, // Looks circular
    'golden-figaro': DEFAULT_CONFIG, // Link
    'aurora-link': DEFAULT_CONFIG, // Link
    'golden-miami': DEFAULT_CONFIG, // Link
    'golden-loop': DEFAULT_CONFIG, // Link
    'twist-chain': DEFAULT_CONFIG, // Link

    // NECKLACES
    'chain-01': NECKLACE_CONFIG,
    // If other necklaces exist, add them here
};

// --- Math Helpers ---

const toRad = (deg) => deg * (Math.PI / 180);

const calculateAnchor = (index, config) => {
    // Determine position based on index (Center-Out)
    let positionStep = 0;
    let isRight = false;

    if (index === 0) {
        positionStep = 0;
    } else {
        positionStep = Math.ceil(index / 2);
        isRight = (index % 2 !== 0);
    }

    const angleDeg = isRight ? (positionStep * config.angleStep) : -(positionStep * config.angleStep);
    const angleRad = toRad(angleDeg);

    // Main Point
    const x = config.centerX + config.radiusX * Math.sin(angleRad);
    const y = config.centerY + config.radiusY * Math.cos(angleRad) + config.yOffset;

    // Neighbor-based Rotation Calculation
    const epsilon = 0.05;
    const tNext = angleRad + epsilon;
    const tPrev = angleRad - epsilon;

    const xNext = config.centerX + config.radiusX * Math.sin(tNext);
    const yNext = config.centerY + config.radiusY * Math.cos(tNext);

    const xPrev = config.centerX + config.radiusX * Math.sin(tPrev);
    const yPrev = config.centerY + config.radiusY * Math.cos(tPrev);

    const dx = xNext - xPrev;
    const dy = yNext - yPrev;

    let rotationDeg = (Math.atan(dy / dx) * 180 / Math.PI);

    return {
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
        rotation: Number(rotationDeg.toFixed(2)),
        scale: 1.5,
        label: `p${index}`
    };
};

const generateAnchors = (productId) => {
    const specific = PRODUCT_CONFIGS[productId] || PRODUCT_CONFIGS["default"];
    const config = { ...DEFAULT_CONFIG, ...specific };

    const anchors = [];
    for (let i = 0; i < 9; i++) {
        anchors.push(calculateAnchor(i, config));
    }
    return anchors;
};

// --- Execution ---

const baseProducts = [
    "classic-loop", "lustre-link", "dual-link", "paper-clip",
    "golden-charm", "luxe-chain", "monochrome-braid", "neon-twist",
    "ocean-weave", "skyline-braid", "twist-elegance", "verdant-braid",
    "chain-01" // Added Necklace
];

// Map ID to partial path (folder/filename)
const nameMap = {
    "classic-loop": "bracelets/Classic Loop bracelet.png",
    "lustre-link": "bracelets/Lustre Link bracelet.png",
    "dual-link": "bracelets/Dual Link Bracelet.png",
    "paper-clip": "bracelets/paper clip bracelet.png",
    "golden-charm": "bracelets/Golden Charm Chain Bracelet.png",
    "luxe-chain": "bracelets/Luxe Chain Bracelet.png",
    "monochrome-braid": "bracelets/Monochrome Braid Bracelet.png",
    "neon-twist": "bracelets/Neon Twist Bracelet.png",
    "ocean-weave": "bracelets/Ocean Weave Bracelet.png",
    "skyline-braid": "bracelets/Skyline Braid Bracelet.png",
    "twist-elegance": "bracelets/Twist Elegance Bracelet.png",
    "verdant-braid": "bracelets/Verdant Braid Bracelet.png",
    "chain-01": "necklace/Paperclip Link Necklace.png"
};

let output = `// Auto-generated parametric anchor points
// Generated by scripts/generate-parametric-anchors.js

export interface AnchorPoint {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  label?: string;
}

export interface BreakpointAnchors {
  mobile: AnchorPoint[];   // < 768px
  tablet: AnchorPoint[];   // 768px - 1024px
  desktop: AnchorPoint[];  // > 1024px
}

export interface ProductAnchorData {
  id: string;
  category: string;
  imageUrl: string;
  anchors: BreakpointAnchors;
  center: { x: number; y: number };
}

export const PRODUCT_ANCHORS: Record<string, ProductAnchorData> = {
`;

baseProducts.forEach(id => {
    const anchorsDesktop = generateAnchors(id);

    // Mobile Shift: -2.5%
    const anchorsMobile = anchorsDesktop.map(a => ({
        ...a,
        y: Number((a.y - 2.5).toFixed(2))
    }));

    // Determine category based on ID or Path
    const category = id.startsWith('chain') ? 'necklace' : 'bracelets';
    const imagePath = `/${nameMap[id]}`;

    output += `  "${id}": {
    id: "${id}",
    category: "${category}",
    imageUrl: "${imagePath}",
    anchors: {
      mobile: ${JSON.stringify(anchorsMobile)}, 
      tablet: ${JSON.stringify(anchorsDesktop)},
      desktop: ${JSON.stringify(anchorsDesktop)}
    },
    center: { x: 0.5, y: 0.5 }
  },\n`;
});

output += `};\n`;

fs.writeFileSync(tsPath, output, 'utf8');
console.log('✅ Generated Parametric Anchors (Necklace Support Added)');
