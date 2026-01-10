
import { pixelsToPercent, convertPixelAnchors } from '../lib/anchor-utils';

/**
 * Migration Script Example
 * 
 * Usage:
 * 1. Edit the 'inputData' below with your pixel coordinates and image dimensions.
 * 2. Run this script using ts-node:
 *    npx ts-node scripts/migrate-anchors.ts
 */

const inputData = {
    naturalWidth: 1000,
    naturalHeight: 1000,
    anchors: [
        { id: 'p1', x: 200, y: 500, rotation: 0 },
        { id: 'p2', x: 300, y: 550, rotation: 10 },
        { id: 'p3', x: 400, y: 600, rotation: 20 },
    ]
};

console.log("--- Migrating Anchors ---");
console.log(`Image Dimensions: ${inputData.naturalWidth} x ${inputData.naturalHeight}`);

const converted = convertPixelAnchors(
    inputData.anchors, 
    inputData.naturalWidth, 
    inputData.naturalHeight
);

console.log("\n--- Result (Copy to lib/anchor.ts) ---");
console.log(JSON.stringify(converted, null, 2));
