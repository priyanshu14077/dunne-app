
export const pixelsToPercent = (
    pxX: number, 
    pxY: number, 
    naturalWidth: number, 
    naturalHeight: number
): { x: number; y: number } => {
    const x = Number(((pxX / naturalWidth) * 100).toFixed(2));
    const y = Number(((pxY / naturalHeight) * 100).toFixed(2));
    return { x, y };
};

export const convertPixelAnchors = (
    anchors: { x: number; y: number; id?: string; rotation?: number }[],
    naturalWidth: number,
    naturalHeight: number
) => {
    return anchors.map(anchor => ({
        ...anchor,
        ...pixelsToPercent(anchor.x, anchor.y, naturalWidth, naturalHeight)
    }));
};
