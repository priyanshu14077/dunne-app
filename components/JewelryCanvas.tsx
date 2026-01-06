import { Product, Charm } from "../lib/mock-data";
import { PRODUCT_ANCHORS } from "../lib/anchors";
import { Plus } from "lucide-react";

interface JewelryCanvasProps {
    baseProduct: Product | null;
    placedCharms: { charm: Charm; anchorId: string }[];
    spacingMode: 'standard' | 'spaced' | 'customize';
    previewCharm?: Charm | null;
}

export default function JewelryCanvas({ baseProduct, placedCharms, spacingMode, previewCharm }: JewelryCanvasProps) {
    
    // Get anchors for the current base product and mode
    const anchorConfig = baseProduct ? PRODUCT_ANCHORS[baseProduct.id] : null;
    const anchors = anchorConfig ? (anchorConfig[spacingMode === 'customize' ? 'spaced' : spacingMode] || []) : [];

    // --- PREVIEW LOGIC ---
    let previewPlacement: { charm: Charm; anchorId: string } | null = null;
    if (previewCharm && baseProduct) {
        const usedAnchorIds = placedCharms.map(p => p.anchorId);
        const firstEmptyAnchor = anchors.find(a => !usedAnchorIds.includes(a.id));
        if (firstEmptyAnchor) {
            previewPlacement = { charm: previewCharm, anchorId: firstEmptyAnchor.id };
        }
    }

    // Step 1: Charm-only preview (no baseProduct)
    // Step 2: Base product preview or Base + Charms
    const isStep1 = !baseProduct;

    return (
        <div className="w-full h-full flex items-center justify-center bg-transparent relative overflow-hidden p-4 lg:p-8">
             
            {/* 
               RESPONSIVE CONTAINER CONFIG:
               - Mobile: 441 x 352.5px (aspect 1.25)
               - Desktop: 440 x 321.9px (aspect ~1.367)
            */}
            <div className={`
                relative 
                w-full h-full
                max-w-[441px] 
                lg:max-w-[600px]
                flex items-center justify-center 
                transition-all duration-300
                mx-auto
                aspect-[1.25] lg:aspect-[1.367]
            `}>
                {/* Main Product / Preview Image */}
                {isStep1 ? (
                    // Step 1: Big Charm Preview
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
                        {(previewCharm || placedCharms.length > 0) ? (
                            <div className="w-[80%] h-[80%] z-10 animate-fade-in-up">
                                <img 
                                    src={(previewCharm || placedCharms[placedCharms.length - 1].charm).previewImage || (previewCharm || placedCharms[placedCharms.length - 1].charm).image} 
                                    alt="Charm Preview" 
                                    className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-105" 
                                />
                            </div>
                        ) : (
                            <div className="text-[#1F4B30]/30 text-xs font-bold uppercase tracking-widest animate-pulse" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                TAP A CHARM TO PREVIEW
                            </div>
                        )}
                    </div>
                ) : (
                    // Step 2/3: Base Product + Charms
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
                        {baseProduct && (
                            <img 
                                src={baseProduct.image} 
                                alt={baseProduct.name}
                                className="w-full h-full object-contain select-none"
                            />
                        )}

                        {/* Anchors & Charms */}
                        {baseProduct && anchors.map((anchor) => {
                            const occupiedBy = placedCharms.find(p => p.anchorId === anchor.id);
                            const isPreview = previewPlacement?.anchorId === anchor.id;
                            const itemToShow = occupiedBy ? occupiedBy.charm : (isPreview ? previewPlacement?.charm : null);

                            if (!itemToShow && !isPreview) return null;

                            return (
                                <div 
                                    key={anchor.id}
                                    className={`absolute w-[10%] h-[10%] flex items-center justify-center transition-all duration-300 ${isPreview ? 'z-20 animate-pulse opacity-90' : 'z-10'}`}
                                    style={{
                                        left: `${anchor.x}%`,
                                        top: `${anchor.y}%`,
                                        transform: `translate(-50%, -100%) rotate(${anchor.rotation || 0}deg)`,
                                    }}
                                >
                                    {itemToShow && (
                                        <div className="relative w-[250%] h-[250%] -mt-[50%] flex items-center justify-center"> 
                                            <img 
                                                src={itemToShow.previewImage || itemToShow.image} 
                                                alt={itemToShow.name}
                                                className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
