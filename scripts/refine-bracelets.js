const fs = require('fs');

const getAnchors = (centerX, centerY, radiusX, radiusY, thetaSteps, scale) => {
    return thetaSteps.map((thetaDeg, index) => {
        const thetaRad = thetaDeg * Math.PI / 180;
        const x = centerX + radiusX * Math.sin(thetaRad);
        const y = centerY + radiusY * Math.cos(thetaRad);
        const rotation = -Math.atan((radiusY / radiusX) * Math.tan(thetaRad)) * 180 / Math.PI;

        return {
            x: Number(x.toFixed(2)),
            y: Number(y.toFixed(2)),
            rotation: Number(rotation.toFixed(2)),
            scale,
            label: `p${index}`
        };
    });
};

const generateBraceletAnchors = (id, imageUrl, isBraid = false) => {
    const thetaSteps = [0, 22, -22, 45, -45, 68, -68, 90, -90];

    // BREAKPOINT SPECIFIC CONFIGS
    // Mobile
    const mobileCX = 50, mobileCY = 51, mobileRX = isBraid ? 27 : 29, mobileRY = isBraid ? 27 : 24;
    const mobileAnchors = getAnchors(mobileCX, mobileCY, mobileRX, mobileRY, thetaSteps, 1.1);

    // Tablet: "Up and In"
    const tabletCX = 50, tabletCY = 48, tabletRX = isBraid ? 25 : 27, tabletRY = isBraid ? 25 : 22;
    const tabletAnchors = getAnchors(tabletCX, tabletCY, tabletRX, tabletRY, thetaSteps, 1.05);

    // Desktop: Smaller scale
    const desktopCX = 50, desktopCY = 52, desktopRX = isBraid ? 26 : 28, desktopRY = isBraid ? 26 : 23;
    const desktopAnchors = getAnchors(desktopCX, desktopCY, desktopRX, desktopRY, thetaSteps, 0.9);

    return {
        id,
        category: "bracelets",
        imageUrl,
        anchors: {
            mobile: mobileAnchors,
            tablet: tabletAnchors,
            desktop: desktopAnchors
        },
        center: { x: 50, y: 50 }
    };
};

const linkIds = ["classic-loop", "lustre-link", "dual-link", "paper-clip", "golden-charm", "luxe-chain"];
const braidIds = ["monochrome-braid", "neon-twist", "ocean-weave", "skyline-braid", "twist-elegance", "verdant-braid"];

const nameMap = {
    "classic-loop": "Classic Loop bracelet.png",
    "lustre-link": "Lustre Link bracelet.png",
    "dual-link": "Dual Link Bracelet.png",
    "paper-clip": "paper clip bracelet.png",
    "golden-charm": "Golden Charm Chain Bracelet.png",
    "luxe-chain": "Luxe Chain Bracelet.png",
    "monochrome-braid": "Monochrome Braid Bracelet.png",
    "neon-twist": "Neon Twist Bracelet.png",
    "ocean-weave": "Ocean Weave Bracelet.png",
    "skyline-braid": "Skyline Braid Bracelet.png",
    "twist-elegance": "Twist Elegance Bracelet.png",
    "verdant-braid": "Verdant Braid Bracelet.png"
};

let output = `import { ChainConfig, ChainAnchor } from "./types";

export const BRACELET_ANCHORS: Record<string, ChainConfig> = {
`;

linkIds.forEach(id => {
    const data = generateBraceletAnchors(id, `/bracelets/${nameMap[id]}`, false);
    output += `  "${id}": ${JSON.stringify(data, null, 2)},\n`;
});

braidIds.forEach(id => {
    const data = generateBraceletAnchors(id, `/bracelets/${nameMap[id]}`, true);
    output += `  "${id}": ${JSON.stringify(data, null, 2)},\n`;
});

output += `};\n`;

fs.writeFileSync('/Users/priyanshu/Desktop/dunne-2/lib/anchors/bracelets.ts', output);
console.log("Updated bracelets.ts with responsive configs.");
