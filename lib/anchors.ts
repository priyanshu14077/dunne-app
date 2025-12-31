
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
            { id: 's1', x: 25, y: 55, rotation: -15 },
            { id: 's2', x: 35, y: 65, rotation: -5 },
            { id: 's3', x: 50, y: 70, rotation: 0 },
            { id: 's4', x: 65, y: 65, rotation: 5 },
            { id: 's5', x: 75, y: 55, rotation: 15 },
        ],
        spaced: [
            { id: 'sp1', x: 25, y: 55, rotation: -15 },
            { id: 'sp2', x: 50, y: 70, rotation: 0 },
            { id: 'sp3', x: 75, y: 55, rotation: 15 },
        ]
    },
    'classic-loop-bracelet': {
        standard: [
            { id: 's1', x: 30, y: 50, rotation: -10 },
            { id: 's2', x: 40, y: 60, rotation: -5 },
            { id: 's3', x: 50, y: 65, rotation: 0 },
            { id: 's4', x: 60, y: 60, rotation: 5 },
            { id: 's5', x: 70, y: 50, rotation: 10 },
        ],
        spaced: [
             { id: 'sp1', x: 30, y: 50, rotation: -10 },
             { id: 'sp2', x: 50, y: 65, rotation: 0 },
             { id: 'sp3', x: 70, y: 50, rotation: 10 },
        ]
    },
    'golden-link-bracelet': {
        standard: [
            { id: 's1', x: 20, y: 40, rotation: -20 },
            { id: 's2', x: 35, y: 55, rotation: -10 },
            { id: 's3', x: 50, y: 60, rotation: 0 },
            { id: 's4', x: 65, y: 55, rotation: 10 },
            { id: 's5', x: 80, y: 40, rotation: 20 },
        ],
        spaced: [
             { id: 'sp1', x: 20, y: 40, rotation: -20 },
             { id: 'sp2', x: 50, y: 60, rotation: 0 },
             { id: 'sp3', x: 80, y: 40, rotation: 20 },
        ]
    }
};
