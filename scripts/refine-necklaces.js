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

const generateNecklaceAnchors = (id, imageUrl) => {
    // Tightened angles to pull the outer pairs inward
    const thetaSteps = [0, 16, -16, 31, -31, 44, -44, 52, -56];

    // BREAKPOINT SPECIFIC CONFIGS
    // Mobile: Current baseline
    const mobileAnchors = getAnchors(51.5, 41.5, 30.2, 32.5, thetaSteps, 0.95);

    // Tablet: "Up and In"
    // Move up (centerY 41.5 -> 38) and in (radiusX 30.2 -> 27)
    const tabletAnchors = getAnchors(51.5, 38, 27, 30, thetaSteps, 0.95);

    // Desktop: Smaller scale and tight
    // Reduce scale 0.95 -> 0.85, keep centering tight
    const desktopAnchors = getAnchors(51.5, 41.5, 29.5, 32, thetaSteps, 0.85);

    return {
        id,
        category: "necklace",
        imageUrl,
        anchors: {
            mobile: mobileAnchors,
            tablet: tabletAnchors,
            desktop: desktopAnchors
        },
        center: { x: 50, y: 50 }
    };
};

const ids = [
    "chain-01", "chain-02", "chain-03", "chain-04", "chain-05",
    "chain-06", "chain-07", "chain-08", "chain-09", "chain-10", "chain-11"
];

const nameMap = {
    "chain-01": "Paperclip Link Necklace.png",
    "chain-02": "Twist Chain Necklace.png",
    "chain-03": "Golden Figaro Necklace.png",
    "chain-04": "Aurora Link Necklace.png",
    "chain-05": "Golden Miami Necklace.png",
    "chain-06": "Golden loop Necklace.png",
    "chain-07": "Nautical Ring Necklace.png",
    "chain-08": "Oval Lock Necklace.png",
    "chain-09": "Paperclip Link (Thin) Necklace.png",
    "chain-10": "Thin Chain Necklace.png",
    "chain-11": "Vero Link Necklace.png"
};

let output = `import { ChainConfig, ChainAnchor } from "./types";

export const CHAIN_ANCHORS: Record<string, ChainConfig> = {
`;

ids.forEach(id => {
    const data = generateNecklaceAnchors(id, `/necklace/${nameMap[id]}`);
    output += `  "${id}": ${JSON.stringify(data, null, 2)},\n`;
});

output += `};\n`;

fs.writeFileSync('/Users/priyanshu/Desktop/dunne-2/lib/anchors/necklaces.ts', output);
console.log("Updated necklaces.ts with responsive arcs.");
