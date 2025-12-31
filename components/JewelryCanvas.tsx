import { Product, Charm } from "../lib/mock-data";
import { PRODUCT_ANCHORS } from "../lib/anchors";
import { Plus } from "lucide-react";

interface JewelryCanvasProps {
    baseProduct: Product | null;
    placedCharms: { charm: Charm; anchorId: string }[];
    spacingMode: 'standard' | 'spaced';
    onToggleSidebar: () => void; // Trigger for sidebar
}

export default function JewelryCanvas({ baseProduct, placedCharms, spacingMode, onToggleSidebar }: JewelryCanvasProps) {
    
    // Get anchors for the current base product and mode
    const anchorConfig = baseProduct ? PRODUCT_ANCHORS[baseProduct.id] : null;
    const anchors = anchorConfig ? anchorConfig[spacingMode] : [];

    return (
        <div className="w-full h-full flex items-center justify-center bg-[#F3F4F6]/50 relative overflow-hidden rounded-lg min-h-[400px]">
             
            {/* Guide Lines / Dimensions (from design) - Purely decorative for now */}

            <div className="relative w-[300px] md:w-[400px] aspect-square flex items-center justify-center">
                {/* Base Product */}
                {baseProduct ? (
                    <img 
                        src={baseProduct.image} 
                        alt={baseProduct.name}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    // Floating Charms State
                    <div className="w-full h-full flex flex-wrap content-center justify-center gap-4 p-8 opacity-100 relative">
                       {/* Center Ring Graphic (Mockup) */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-[#eecfa1] rounded-full shadow-inner z-0"></div>

                       {placedCharms.length === 0 && (
                            <div className="text-gray-400 text-sm text-center z-10 mt-32">
                                Start adding charms from the drawer!
                            </div>
                       )}
                       
                       {/* Render Charms in a "Cluster" if no base */}
                       {placedCharms.map((pc, i) => (
                           <div key={i} className="w-16 h-16 z-10 animate-in zoom-in duration-300">
                               <img src={pc.charm.image} alt={pc.charm.name} className="w-full h-full object-contain drop-shadow-lg" />
                           </div>
                       ))}
                    </div>
                )}

                {/* Anchors & Charms (Only if base is selected) */}
                {baseProduct && anchors.map((anchor) => {
                    const occupiedBy = placedCharms.find(p => p.anchorId === anchor.id);

                    return (
                        <div 
                            key={anchor.id}
                            className="absolute w-8 h-8 flex items-center justify-center"
                            style={{
                                left: `${anchor.x}%`,
                                top: `${anchor.y}%`,
                                transform: `translate(-50%, -100%) rotate(${anchor.rotation || 0}deg)`,
                            }}
                        >
                            {occupiedBy ? (
                                <div className="relative group w-12 h-12 -mt-2"> 
                                    <img 
                                        src={occupiedBy.charm.image} 
                                        alt={occupiedBy.charm.name}
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

            {/* View All Label (Only - No FAB) */}
             <div className="absolute bottom-6 right-6 z-20">
                 <button 
                    onClick={onToggleSidebar}
                    className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-[#1F4B30] shadow-sm hover:bg-white transition-colors"
                 >
                     {placedCharms.length} Selected | <span className="text-[#DE3C27]">View All</span>
                 </button>
             </div>

            {/* No Info Icon here anymore */}

        </div>
    );
}
