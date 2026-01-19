import { Plus } from "lucide-react";
import { Charm } from "@/lib/mock-data";
import { PlacedCharmInstance } from "@/lib/types";

interface SummaryOverlayProps {
    charms: PlacedCharmInstance[];
    onViewAll: () => void;
}

export default function SummaryOverlay({ charms, onViewAll }: SummaryOverlayProps) {
    // Show if there are charms OR if we want to show the empty state for the walkthrough
    // Ideally we always show it now to indicate "0 Items" or similar if that's the design intent for the tour.
    // The prompt says: "show the 'view all' component with 0 selected written over it to show the walkthrough"
    
    return (
        <div 
            id="walkthrough-summary"
            className="w-full bg-transparent flex flex-col items-center justify-center pb-[10px] relative z-50 min-h-[40px]"
        >
            <button 
                onClick={onViewAll}
                className="text-xs lg:text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'Neutra Text, sans-serif' }}
            >
                <div className="flex items-center gap-2">
                    <div className="flex items-center -space-x-2">
                        {charms.length === 0 ? (
                             <div className="w-6 h-6 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm text-[10px] text-gray-400">
                                0
                             </div>
                        ) : (
                            <>
                                {charms.slice(0, 5).map((pc, i) => (
                                    <div 
                                        key={pc.id} 
                                        className="w-6 h-6 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm"
                                    >
                                        <img 
                                            src={pc.charm.image} 
                                            alt="" 
                                            crossOrigin="anonymous"
                                            className="w-4 h-4 object-contain" 
                                        />
                                    </div>
                                ))}
                                {charms.length > 5 && (
                                    <div className="w-6 h-6 rounded-full bg-[#1F4B30] flex items-center justify-center text-[10px] text-white font-bold border border-white">
                                        +{charms.length - 5}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <span className="mx-1.5 text-gray-300">|</span>
                    <span className="text-[#DE3C27] font-bold">
                        {charms.length === 0 ? "0 Selected" : "View All"}
                    </span>
                </div>
            </button>
        </div>
    );
}
