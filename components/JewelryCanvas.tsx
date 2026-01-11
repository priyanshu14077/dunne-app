import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Product, Charm } from "../lib/mock-data";
import { PRODUCT_ANCHORS, ChainAnchor } from "@/lib/anchor";
import { useChainAnchors } from "@/hooks/useChainAnchors";
import { CANVAS_HEIGHTS } from "../lib/design-tokens";
import { PlacedCharmInstance } from "../app/page";

interface JewelryCanvasProps {
    baseProduct: Product | null;
    placedCharms: PlacedCharmInstance[];
    spacingMode: 'standard' | 'spaced' | 'customize';
    previewCharm?: Charm | null;
    currentStep: string;
    onUpdateAnchor?: (instanceId: string, newIndex: number) => void;
    onActionTrigger?: () => void;
}

export default function JewelryCanvas({ baseProduct, placedCharms, spacingMode, previewCharm, currentStep, onUpdateAnchor, onActionTrigger }: JewelryCanvasProps) {
    
    // --- RESPONSIVE ANCHOR SELECTION ---
    const { anchors, currentBreakpoint } = useChainAnchors(baseProduct);
    const containerRef = useRef<HTMLDivElement>(null);

    // --- DRAG AND DROP STATE ---
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
    const [activeTargetIndex, setActiveTargetIndex] = useState<number | null>(null);

    // --- PREVIEW LOGIC ---
    let previewPlacementIndex = -1;
    if (previewCharm && baseProduct) {
        const occupiedIndices = new Set(placedCharms.map(pc => pc.anchorIndex));
        let nextIndex = 0;
        while (occupiedIndices.has(nextIndex) && nextIndex < 9) {
            nextIndex++;
        }
        if (nextIndex < 9) {
            previewPlacementIndex = nextIndex;
        }
    }

    const isStep1 = !baseProduct;

    // Image sizing string for Next.js Image component
    const canvasSizes = "(max-width: 375px) 336px, (max-width: 768px) 441px, (max-width: 1024px) 600px, 800px";

    // --- DRAG HANDLERS ---
    const handlePointerDown = (e: React.PointerEvent, instanceId: string) => {
        if (currentStep !== 'space' && currentStep !== 'base') return;
        setDraggingId(instanceId);
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!draggingId || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setDragPos({ x, y });

        // Find nearest anchor
        let minInfo = { dist: Infinity, index: -1 };
        anchors.forEach((anchor, i) => {
            const dx = x - anchor.x;
            const dy = y - anchor.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minInfo.dist) {
                minInfo = { dist, index: i };
            }
        });

        if (minInfo.dist < 15) { // Snapping threshold
            setActiveTargetIndex(minInfo.index);
        } else {
            setActiveTargetIndex(null);
        }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!draggingId) return;
        if (activeTargetIndex !== null && onUpdateAnchor) {
            onUpdateAnchor(draggingId, activeTargetIndex);
            
            // Notify walkthrough
            if (onActionTrigger) {
                onActionTrigger();
            }
        }
        setDraggingId(null);
        setActiveTargetIndex(null);
    };

    return (
        <div 
            ref={containerRef}
            className="w-full flex-1 min-h-0 flex items-center justify-center bg-transparent relative p-4 lg:p-8 pb-20 touch-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
             
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
                {isStep1 ? (
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
                        {(previewCharm || placedCharms.length > 0) ? (
                            <div className="w-[95%] h-[95%] z-10 animate-fade-in-up relative translate-y-12">
                                <Image 
                                    src={(previewCharm || placedCharms[placedCharms.length - 1]?.charm).previewImage || (previewCharm || placedCharms[placedCharms.length - 1]?.charm).image} 
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
                    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
                       <div className="relative aspect-square max-w-full max-h-full flex items-center justify-center w-full md:w-auto h-auto md:h-full">
                            <div 
                                className="relative w-full h-full"
                                style={{ 
                                    transform: `scale(${baseProduct?.type === 'necklace' ? 1.25 : 0.85}) translateY(5%)`,
                                    transition: 'transform 0.5s ease-out'
                                }}
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

                                {/* Render empty anchor slots as targets in space/base step during dragging */}
                                {(currentStep === 'space' || (currentStep === 'base' && draggingId)) && (anchors as ChainAnchor[]).map((anchor, index) => (
                                    <div 
                                        key={`target-${index}`}
                                        className={`absolute flex items-center justify-center rounded-full transition-all duration-300
                                            ${activeTargetIndex === index ? 'bg-indigo-400/20 scale-125' : 'bg-transparent'}`}
                                        style={{
                                            left: `${anchor.x}%`,
                                            top: `${anchor.y}%`,
                                            width: '8%', height: '8%',
                                            transform: 'translate(-50%, -50%)',
                                            border: activeTargetIndex === index ? '2px dashed rgba(129, 140, 248, 0.5)' : 'none'
                                        }}
                                    />
                                ))}

                                {/* Anchors & Charms */}
                                {(anchors as ChainAnchor[]).map((anchor, index) => {
                                    const placedCharmInstance = placedCharms.find(pc => pc.anchorIndex === index);
                                    const isPreview = index === previewPlacementIndex;
                                    const itemToShow = placedCharmInstance?.charm || (isPreview ? previewCharm : null);
                                    const isBeingDragged = placedCharmInstance?.id === draggingId;

                                    if (!itemToShow && !isPreview) return null;

                                    return (
                                        <div 
                                            key={`anchor-${index}`}
                                            id={placedCharmInstance ? `canvas-charm-${placedCharmInstance.id}` : undefined}
                                            onPointerDown={(e) => placedCharmInstance && handlePointerDown(e, placedCharmInstance.id)}
                                            className={`absolute flex items-start justify-center transition-all duration-300 
                                                ${isPreview ? 'z-20' : 'z-10'}
                                                ${isBeingDragged ? 'opacity-0' : 'opacity-100'}
                                                ${currentStep === 'space' || currentStep === 'base' ? 'cursor-grab active:cursor-grabbing' : ''}
                                                ${itemToShow?.overlayImage 
                                                    ? 'w-[20%] h-[20%] md:w-[22%] md:h-[22%] lg:w-[25%] lg:h-[25%]' 
                                                    : 'w-[12%] h-[12%] md:w-[14%] md:h-[14%] lg:w-[15%] lg:h-[15%]'}`}
                                            style={{
                                                left: `${anchor.x}%`,
                                                top: `${anchor.y}%`,
                                                transformOrigin: "top center",
                                                transform: `translateX(-50%) translateY(0%) rotate(${anchor.rotation || 0}deg) scale(${(anchor.scale || 1) * 1.2})`,
                                            }}
                                        >
                                            {itemToShow && (
                                                <div className={`relative w-full h-full flex items-start justify-center ${isPreview ? 'opacity-40 brightness-110' : ''}`}> 
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

                                {/* Render Active Dragging Charm Overlay */}
                                {draggingId && (
                                    <div 
                                        className="absolute z-[100] w-[15%] h-[15%] pointer-events-none"
                                        style={{
                                            left: `${dragPos.x}%`,
                                            top: `${dragPos.y}%`,
                                            transform: 'translate(-50%, -50%)',
                                            opacity: 0.8
                                        }}
                                    >
                                        {(() => {
                                            const pc = placedCharms.find(p => p.id === draggingId);
                                            if (!pc) return null;
                                            return (
                                                <Image 
                                                    src={pc.charm.overlayImage || pc.charm.previewImage || pc.charm.image}
                                                    alt="Dragging"
                                                    fill
                                                    className="object-contain"
                                                />
                                            );
                                        })()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
