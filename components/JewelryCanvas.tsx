import Image from "next/image";
import { useState, useEffect } from "react";
import { Product, Charm } from "../lib/mock-data";
import { PRODUCT_ANCHORS, AnchorPoint } from "@/lib/anchor";
import { CANVAS_HEIGHTS } from "../lib/design-tokens";

interface JewelryCanvasProps {
    baseProduct: Product | null;
    placedCharms: { charm: Charm; anchorId: string }[];
    spacingMode: 'standard' | 'spaced' | 'customize';
    previewCharm?: Charm | null;
    currentStep: string;
}

export default function JewelryCanvas({ baseProduct, placedCharms, spacingMode, previewCharm, currentStep }: JewelryCanvasProps) {
    
    // --- RESPONSIVE BREAKPOINT DETECTION (SSR-safe) ---
    const [currentBreakpoint, setCurrentBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
    
    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setCurrentBreakpoint('mobile');
            } else if (width < 1024) {
                setCurrentBreakpoint('tablet');
            } else {
                setCurrentBreakpoint('desktop');
            }
        };
        
        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
        return () => window.removeEventListener('resize', updateBreakpoint);
    }, []);
    
    // Get anchors for the current base product
    const productData = baseProduct ? PRODUCT_ANCHORS[baseProduct.id] : null;
    
    // Get anchors with fallback: prefer current breakpoint, fall back to any available
    const getAnchorsWithFallback = (): AnchorPoint[] => {
        if (!productData?.anchors) return [];
        
        const { mobile, tablet, desktop } = productData.anchors;
        
        // Priority based on current breakpoint
        const priorities: Array<'mobile' | 'tablet' | 'desktop'> = 
            currentBreakpoint === 'mobile' ? ['mobile', 'tablet', 'desktop'] :
            currentBreakpoint === 'tablet' ? ['tablet', 'mobile', 'desktop'] :
            ['desktop', 'tablet', 'mobile'];
        
        for (const bp of priorities) {
            if (productData.anchors[bp] && productData.anchors[bp].length > 0) {
                return productData.anchors[bp];
            }
        }
        
        return [];
    };
    
    const anchors = getAnchorsWithFallback();

    // --- PREVIEW LOGIC ---
    // In index-based system, preview is just the next available slot
    let previewPlacementIndex = -1;
    if (previewCharm && baseProduct) {
        if (placedCharms.length < anchors.length) {
            previewPlacementIndex = placedCharms.length;
        }
    }

    const isStep1 = !baseProduct;

    // Image sizing string for Next.js Image component
    const canvasSizes = "(max-width: 375px) 336px, (max-width: 768px) 441px, (max-width: 1024px) 600px, 800px";

    return (
        <div className="w-full flex-1 min-h-0 flex items-center justify-center bg-transparent relative p-4 lg:p-8 pb-20">
             
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
                    // Apply dynamic scaling: 1.2x for necklaces, 0.8x for bracelets (to prevent clipping)
                    // Step 2/3: Base Product + Charms
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
                       {/* 
                          SQUARE CONTAINER: 
                          Forces the render area to be a square (1:1 aspect ratio) matching the product images.
                          This ensures that 'left: 50%' is always visually 50% of the IMAGE, not the rectangular generic container.
                          max-w-full ensures it doesn't overflow if the screen is very narrow (mobile).
                        */}
                       <div className="relative aspect-square max-w-full max-h-full flex items-center justify-center w-full md:w-auto h-auto md:h-full">
                            {/* Inner wrapper for scale transform - applied uniformly to image and charms */}
                            <div 
                                className="relative w-full h-full"
                                style={{ transform: `scale(${baseProduct?.type === 'necklace' ? 1.2 : 0.8})` }}
                            >
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
                                {baseProduct && anchors.map((anchor, index) => {
                                    // Check if this anchor index has a charm
                                    const placedCharm = placedCharms[index]?.charm;
                                    const isPreview = index === previewPlacementIndex;
                                    const itemToShow = placedCharm || (isPreview ? previewCharm : null);

                                    if (!itemToShow && !isPreview) return null;

                                    return (
                                        <div 
                                            key={`anchor-${index}`}
                                            className={`absolute flex items-center justify-center transition-all duration-300 ${isPreview ? 'z-20' : 'z-10'} 
                                                ${itemToShow?.overlayImage 
                                                    ? 'w-[20%] h-[20%] md:w-[22%] md:h-[22%] lg:w-[25%] lg:h-[25%]' 
                                                    : 'w-[12%] h-[12%] md:w-[14%] md:h-[14%] lg:w-[15%] lg:h-[15%]'}`}
                                            style={{
                                                left: `${anchor.x}%`,
                                                top: `${anchor.y}%`,
                                                // Top-Center alignment with -4% overlap for bail (per spec)
                                                transform: `translate(-50%, -4%) rotate(${anchor.rotation || 0}deg) scale(${anchor.scale || 1})`,
                                            }}
                                        >
                                            {itemToShow && (
                                                <div className={`relative w-full h-full flex items-center justify-center ${isPreview ? 'opacity-40 brightness-110' : ''}`}> 
 
                                                    <Image 
                                                        src={itemToShow.overlayImage || itemToShow.previewImage || itemToShow.image} 
                                                        alt={itemToShow.name}
                                                        fill
                                                        className={`object-contain select-none pointer-events-none ${isPreview ? '' : 'drop-shadow-md'}`}
                                                        sizes="150px"
                                                        quality={85}
                                                    />
                                                    {isPreview && (
                                                        <div className={`absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/50 animate-pulse ${itemToShow.overlayImage ? 'scale-75 translate-y-[-20%]' : ''}`} />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
