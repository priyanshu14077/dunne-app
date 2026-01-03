import { Product, Charm } from "../lib/mock-data";
import { PRODUCT_ANCHORS } from "../lib/anchors";
import { Plus } from "lucide-react";

interface JewelryCanvasProps {
    baseProduct: Product | null;
    placedCharms: { charm: Charm; anchorId: string }[];
    spacingMode: 'standard' | 'spaced';
    previewCharm?: Charm | null;
}

export default function JewelryCanvas({ baseProduct, placedCharms, spacingMode, previewCharm }: JewelryCanvasProps) {
    
    // Get anchors for the current base product and mode
    const anchorConfig = baseProduct ? PRODUCT_ANCHORS[baseProduct.id] : null;
    const anchors = anchorConfig ? anchorConfig[spacingMode] : [];

    // --- PREVIEW LOGIC ---
    let previewPlacement: { charm: Charm; anchorId: string } | null = null;
    if (previewCharm && baseProduct) {
        const usedAnchorIds = placedCharms.map(p => p.anchorId);
        const firstEmptyAnchor = anchors.find(a => !usedAnchorIds.includes(a.id));
        if (firstEmptyAnchor) {
            previewPlacement = { charm: previewCharm, anchorId: firstEmptyAnchor.id };
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center bg-transparent relative overflow-hidden rounded-lg">
             
            {/* Guide Lines / Dimensions (from design) - Purely decorative for now */}
            
            {/* 
               RESPONSIVE CONTAINER CONFIG:
               - Min Width: 225px, Max Width: 490px
               - Min Height: 180px, Max Height: 392px
               - Aspect Ratio: ~1.25 (5:4) based on dimensions.
            */}
            <div className={`
                relative 
                h-auto w-full
                min-w-[225px] max-w-[490px]
                min-h-[180px] max-h-[392px]
                aspect-[1.25]
                flex items-center justify-center 
                transition-all duration-300
                mx-auto
            `}>
                {/* Base Product */}
                {baseProduct ? (
                    <img 
                        src={baseProduct.image} 
                        alt={baseProduct.name}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    // Big Preview State (No Base Selected)
                    <div className="w-full h-full flex items-center justify-center relative animate-in fade-in zoom-in duration-700">
                        
                        {/* Latest Charm in Big Preview - ENHANCED SIZE */}
                        {(previewCharm || placedCharms.length > 0) && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] z-10 animate-in slide-in-from-bottom-4 duration-500">
                                <img 
                                    src={(previewCharm || placedCharms[placedCharms.length - 1].charm).previewImage || (previewCharm || placedCharms[placedCharms.length - 1].charm).image} 
                                    alt="" 
                                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform hover:scale-105" 
                                />
                            </div>
                        )}

                        {!previewCharm && placedCharms.length === 0 && (
                            <div className="text-[#1F4B30]/30 text-xs font-medium uppercase tracking-widest animate-pulse">
                                Select a charm to preview
                            </div>
                        )}
                    </div>
                )}

                {/* Anchors & Charms (Only if base is selected) */}
                {baseProduct && anchors.map((anchor) => {
                    const occupiedBy = placedCharms.find(p => p.anchorId === anchor.id);
                    
                    const isPreview = previewPlacement?.anchorId === anchor.id;
                    const itemToShow = occupiedBy ? occupiedBy.charm : (isPreview ? previewPlacement?.charm : null);

                    return (
                        <div 
                            key={anchor.id}
                            className={`absolute w-[8%] h-[8%] flex items-center justify-center ${isPreview ? 'z-20 animate-pulse' : 'z-10'}`}
                            style={{
                                left: `${anchor.x}%`,
                                top: `${anchor.y}%`,
                                transform: `translate(-50%, -100%) rotate(${anchor.rotation || 0}deg)`,
                            }}
                        >
                            {itemToShow ? (
                                <div className={`relative group w-[200%] h-[200%] -mt-[50%] flex items-center justify-center ${isPreview ? 'opacity-90' : ''}`}> 
                                    <img 
                                        src={itemToShow.previewImage || itemToShow.image} 
                                        alt={itemToShow.name}
                                        className="w-full h-full object-contain drop-shadow-md transform transition-transform hover:scale-110"
                                    />
                                </div>
                            ) : (
                                <div className="hidden group-hover:flex w-4 h-4 rounded-full bg-white/50 border border-dashed border-gray-400 items-center justify-center">
                                    <Plus className="w-2 h-2 text-gray-400" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>


            {/* No Info Icon here anymore */}

        </div>
    );
}
