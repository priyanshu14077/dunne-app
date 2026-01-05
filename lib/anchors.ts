
export interface AnchorPoint {
    id: string;
    x: number; // Percentage (0-100)
    y: number; // Percentage (0-100)
    rotation?: number; // Degrees
}

export interface ProductAnchorConfig {
    standard: AnchorPoint[];
    spaced: AnchorPoint[];
}

export const PRODUCT_ANCHORS: Record<string, ProductAnchorConfig> = {
    'gold-link-bracelet': {
        standard: [
            { id: 's1', x: 20, y: 45, rotation: -20 },
            { id: 's2', x: 28, y: 55, rotation: -15 },
            { id: 's3', x: 37, y: 63, rotation: -8 },
            { id: 's4', x: 45, y: 68, rotation: -3 },
            { id: 's5', x: 50, y: 70, rotation: 0 },
            { id: 's6', x: 55, y: 68, rotation: 3 },
            { id: 's7', x: 63, y: 63, rotation: 8 },
            { id: 's8', x: 72, y: 55, rotation: 15 },
            { id: 's9', x: 80, y: 45, rotation: 20 },
        ],
        spaced: [
            { id: 'sp1', x: 22, y: 48, rotation: -18 },
            { id: 'sp2', x: 32, y: 58, rotation: -12 },
            { id: 'sp3', x: 43, y: 66, rotation: -5 },
            { id: 'sp4', x: 50, y: 70, rotation: 0 },
            { id: 'sp5', x: 57, y: 66, rotation: 5 },
            { id: 'sp6', x: 68, y: 58, rotation: 12 },
            { id: 'sp7', x: 78, y: 48, rotation: 18 },
        ]
    },
    'classic-loop-bracelet': {
        standard: [
            { id: 's1', x: 20, y: 40, rotation: -15 },
            { id: 's2', x: 28, y: 48, rotation: -10 },
            { id: 's3', x: 36, y: 55, rotation: -6 },
            { id: 's4', x: 43, y: 60, rotation: -3 },
            { id: 's5', x: 50, y: 62, rotation: 0 },
            { id: 's6', x: 57, y: 60, rotation: 3 },
            { id: 's7', x: 64, y: 55, rotation: 6 },
            { id: 's8', x: 72, y: 48, rotation: 10 },
            { id: 's9', x: 80, y: 40, rotation: 15 },
        ],
        spaced: [
            { id: 'sp1', x: 25, y: 45, rotation: -12 },
            { id: 'sp2', x: 33, y: 52, rotation: -8 },
            { id: 'sp3', x: 42, y: 58, rotation: -4 },
            { id: 'sp4', x: 50, y: 62, rotation: 0 },
            { id: 'sp5', x: 58, y: 58, rotation: 4 },
            { id: 'sp6', x: 67, y: 52, rotation: 8 },
            { id: 'sp7', x: 75, y: 45, rotation: 12 },
        ]
    },
    'golden-link-bracelet': {
        standard: [
            { id: 's1', x: 15, y: 35, rotation: -25 },
            { id: 's2', x: 24, y: 44, rotation: -18 },
            { id: 's3', x: 33, y: 52, rotation: -10 },
            { id: 's4', x: 42, y: 58, rotation: -4 },
            { id: 's5', x: 50, y: 60, rotation: 0 },
            { id: 's6', x: 58, y: 58, rotation: 4 },
            { id: 's7', x: 67, y: 52, rotation: 10 },
            { id: 's8', x: 76, y: 44, rotation: 18 },
            { id: 's9', x: 85, y: 35, rotation: 25 },
        ],
        spaced: [
            { id: 'sp1', x: 18, y: 38, rotation: -22 },
            { id: 'sp2', x: 29, y: 48, rotation: -14 },
            { id: 'sp3', x: 40, y: 56, rotation: -6 },
            { id: 'sp4', x: 50, y: 60, rotation: 0 },
            { id: 'sp5', x: 60, y: 56, rotation: 6 },
            { id: 'sp6', x: 71, y: 48, rotation: 14 },
            { id: 'sp7', x: 82, y: 38, rotation: 22 },
        ]
    }
};
