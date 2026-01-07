import Image from "next/image";
import { Product, Charm } from "../lib/mock-data";
import { PRODUCT_ANCHORS } from "../lib/anchors";
import { CANVAS_HEIGHTS } from "../lib/design-tokens";

interface JewelryCanvasProps {
    baseProduct: Product | null;
    placedCharms: { charm: Charm; anchorId: string }[];
    spacingMode: 'standard' | 'spaced' | 'customize';
    previewCharm?: Charm | null;
    currentStep: string;
}

export default function JewelryCanvas({ baseProduct, placedCharms, spacingMode, previewCharm, currentStep }: JewelryCanvasProps) {
    
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

    const isStep1 = !baseProduct;

    // Image sizing string for Next.js Image component
    const canvasSizes = "(max-width: 375px) 336px, (max-width: 768px) 441px, (max-width: 1024px) 600px, 800px";

    return (
        <div className="w-full flex-1 min-h-0 flex items-center justify-center bg-transparent relative overflow-hidden p-4 lg:p-8">
             
            {/* 
               RESPONSIVE CONTAINER CONFIG:
               - Mobile: 70vh, aspect-ratio 3:4
               - Tablet/Desktop: 75vh, aspect-ratio 1.38:1
            */}
            <div className={`
                relative 
                w-full 
                max-w-[441px] md:max-w-[600px] lg:max-w-[800px]
                h-[70vh] md:h-[75vh] lg:h-[75vh]
                flex items-center justify-center 
                transition-all duration-300
                mx-auto
                canvas-aspect
            `}>
                {/* Main Product / Preview Image */}
                {isStep1 ? (
                    // Step 1: Big Charm Preview
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
                        {(previewCharm || placedCharms.length > 0) ? (
                            <div className="w-[95%] h-[95%] z-10 animate-fade-in-up relative">
                                <Image 
                                    src={(previewCharm || placedCharms[placedCharms.length - 1].charm).previewImage || (previewCharm || placedCharms[placedCharms.length - 1].charm).image} 
                                    alt="Charm Preview" 
                                    fill
                                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-105"
                                    sizes={canvasSizes}
                                    priority={currentStep === 'charms'}
                                    quality={85}
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
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in scale-[1.2] transition-transform duration-700 ease-in-out">
                        {baseProduct && (
                            <Image 
                                src={baseProduct.image} 
                                alt={baseProduct.name}
                                fill
                                className="object-contain select-none"
                                sizes={canvasSizes}
                                priority={currentStep === 'base'}
                                quality={85}
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
                                            <Image 
                                                src={itemToShow.previewImage || itemToShow.image} 
                                                alt={itemToShow.name}
                                                fill
                                                className="object-contain drop-shadow-md select-none pointer-events-none"
                                                sizes="100px" // Small ornaments don't need large sizing
                                                quality={85}
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
