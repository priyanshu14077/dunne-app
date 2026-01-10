// Necklace-specific anchor definitions based on visual analysis
// Each necklace has custom 9-point curve matching its actual image
// All charms scaled to 1.2x as requested

const NECKLACE_CURVES = {
    // GROUP A: Shallow Wide Curves
    "chain-01": { // Paperclip Link - Very shallow
        points: [
            { x: 50, y: 51, rot: 0, scale: 1.2 },
            { x: 57, y: 48, rot: -6, scale: 1.2 },
            { x: 43, y: 48, rot: 6, scale: 1.2 },
            { x: 64, y: 41, rot: -12, scale: 1.2 },
            { x: 36, y: 41, rot: 12, scale: 1.2 },
            { x: 71, y: 30, rot: -20, scale: 1.2 },
            { x: 29, y: 30, rot: 20, scale: 1.2 },
            { x: 78, y: 19, rot: -28, scale: 1.2 },
            { x: 22, y: 19, rot: 28, scale: 1.2 }
        ]
    },

    "chain-04": { // Aurora Link - Shallow elegant
        points: [
            { x: 50, y: 52, rot: 0, scale: 1.2 },
            { x: 57, y: 49, rot: -7, scale: 1.2 },
            { x: 43, y: 49, rot: 7, scale: 1.2 },
            { x: 64, y: 42, rot: -14, scale: 1.2 },
            { x: 36, y: 42, rot: 14, scale: 1.2 },
            { x: 71, y: 31, rot: -22, scale: 1.2 },
            { x: 29, y: 31, rot: 22, scale: 1.2 },
            { x: 78, y: 20, rot: -30, scale: 1.2 },
            { x: 22, y: 20, rot: 30, scale: 1.2 }
        ]
    },

    "chain-09": { // Paperclip Thin - Delicate
        points: [
            { x: 50, y: 50, rot: 0, scale: 1.2 },
            { x: 56, y: 47, rot: -5, scale: 1.2 },
            { x: 44, y: 47, rot: 5, scale: 1.2 },
            { x: 62, y: 40, rot: -11, scale: 1.2 },
            { x: 38, y: 40, rot: 11, scale: 1.2 },
            { x: 69, y: 29, rot: -18, scale: 1.2 },
            { x: 31, y: 29, rot: 18, scale: 1.2 },
            { x: 76, y: 19, rot: -26, scale: 1.2 },
            { x: 24, y: 19, rot: 26, scale: 1.2 }
        ]
    },

    "chain-10": { // Thin Chain - Subtle U
        points: [
            { x: 50, y: 51, rot: 0, scale: 1.2 },
            { x: 57, y: 48, rot: -6, scale: 1.2 },
            { x: 43, y: 48, rot: 6, scale: 1.2 },
            { x: 64, y: 41, rot: -13, scale: 1.2 },
            { x: 36, y: 41, rot: 13, scale: 1.2 },
            { x: 71, y: 30, rot: -21, scale: 1.2 },
            { x: 29, y: 30, rot: 21, scale: 1.2 },
            { x: 78, y: 19, rot: -29, scale: 1.2 },
            { x: 22, y: 19, rot: 29, scale: 1.2 }
        ]
    },

    "chain-02": { // Twist Chain - Medium-shallow
        points: [
            { x: 50, y: 53, rot: 0, scale: 1.2 },
            { x: 57, y: 50, rot: -7, scale: 1.2 },
            { x: 43, y: 50, rot: 7, scale: 1.2 },
            { x: 64, y: 43, rot: -15, scale: 1.2 },
            { x: 36, y: 43, rot: 15, scale: 1.2 },
            { x: 71, y: 32, rot: -23, scale: 1.2 },
            { x: 29, y: 32, rot: 23, scale: 1.2 },
            { x: 78, y: 21, rot: -31, scale: 1.2 },
            { x: 22, y: 21, rot: 31, scale: 1.2 }
        ]
    },

    // GROUP B: Medium Curves
    "chain-03": { // Golden Figaro - Classic medium
        points: [
            { x: 50, y: 57, rot: 0, scale: 1.2 },
            { x: 58, y: 53, rot: -8, scale: 1.2 },
            { x: 42, y: 53, rot: 8, scale: 1.2 },
            { x: 66, y: 45, rot: -16, scale: 1.2 },
            { x: 34, y: 45, rot: 16, scale: 1.2 },
            { x: 73, y: 33, rot: -25, scale: 1.2 },
            { x: 27, y: 33, rot: 25, scale: 1.2 },
            { x: 80, y: 21, rot: -34, scale: 1.2 },
            { x: 20, y: 21, rot: 34, scale: 1.2 }
        ]
    },

    "chain-05": { // Golden Miami - Chunky balanced
        points: [
            { x: 50, y: 58, rot: 0, scale: 1.2 },
            { x: 58, y: 54, rot: -9, scale: 1.2 },
            { x: 42, y: 54, rot: 9, scale: 1.2 },
            { x: 66, y: 46, rot: -17, scale: 1.2 },
            { x: 34, y: 46, rot: 17, scale: 1.2 },
            { x: 73, y: 34, rot: -26, scale: 1.2 },
            { x: 27, y: 34, rot: 26, scale: 1.2 },
            { x: 80, y: 22, rot: -35, scale: 1.2 },
            { x: 20, y: 22, rot: 35, scale: 1.2 }
        ]
    },

    "chain-06": { // Golden loop - Standard
        points: [
            { x: 50, y: 57, rot: 0, scale: 1.2 },
            { x: 58, y: 53, rot: -8, scale: 1.2 },
            { x: 42, y: 53, rot: 8, scale: 1.2 },
            { x: 66, y: 45, rot: -16, scale: 1.2 },
            { x: 34, y: 45, rot: 16, scale: 1.2 },
            { x: 73, y: 33, rot: -25, scale: 1.2 },
            { x: 27, y: 33, rot: 25, scale: 1.2 },
            { x: 80, y: 21, rot: -34, scale: 1.2 },
            { x: 20, y: 21, rot: 34, scale: 1.2 }
        ]
    },

    "chain-11": { // Vero Link - Medium depth
        points: [
            { x: 50, y: 58, rot: 0, scale: 1.2 },
            { x: 58, y: 54, rot: -9, scale: 1.2 },
            { x: 42, y: 54, rot: 9, scale: 1.2 },
            { x: 66, y: 46, rot: -17, scale: 1.2 },
            { x: 34, y: 46, rot: 17, scale: 1.2 },
            { x: 73, y: 34, rot: -26, scale: 1.2 },
            { x: 27, y: 34, rot: 26, scale: 1.2 },
            { x: 80, y: 22, rot: -35, scale: 1.2 },
            { x: 20, y: 22, rot: 35, scale: 1.2 }
        ]
    },

    // GROUP C: Deep Narrow Curves
    "chain-07": { // Nautical Ring - Deep with pendant
        points: [
            { x: 50, y: 63, rot: 0, scale: 1.2 },
            { x: 58, y: 59, rot: -10, scale: 1.2 },
            { x: 42, y: 59, rot: 10, scale: 1.2 },
            { x: 66, y: 51, rot: -19, scale: 1.2 },
            { x: 34, y: 51, rot: 19, scale: 1.2 },
            { x: 73, y: 39, rot: -29, scale: 1.2 },
            { x: 27, y: 39, rot: 29, scale: 1.2 },
            { x: 79, y: 25, rot: -38, scale: 1.2 },
            { x: 21, y: 25, rot: 38, scale: 1.2 }
        ]
    },

    "chain-08": { // Oval Lock - Pronounced curve
        points: [
            { x: 50, y: 64, rot: 0, scale: 1.2 },
            { x: 58, y: 60, rot: -11, scale: 1.2 },
            { x: 42, y: 60, rot: 11, scale: 1.2 },
            { x: 66, y: 52, rot: -20, scale: 1.2 },
            { x: 34, y: 52, rot: 20, scale: 1.2 },
            { x: 73, y: 40, rot: -30, scale: 1.2 },
            { x: 27, y: 40, rot: 30, scale: 1.2 },
            { x: 79, y: 26, rot: -39, scale: 1.2 },
            { x: 21, y: 26, rot: 39, scale: 1.2 }
        ]
    }
};

module.exports = { NECKLACE_CURVES };
