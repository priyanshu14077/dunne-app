import { Plus } from "lucide-react";
import { Charm } from "@/lib/mock-data";

interface SummaryOverlayProps {
    charms: { charm: Charm; anchorId: string; id: string }[];
    onViewAll: () => void;
}

export default function SummaryOverlay({ charms, onViewAll }: SummaryOverlayProps) {
    const maxDisplayCharms = 5;
    const displayCharms = charms.slice(-maxDisplayCharms);
    
    return (
        <div className="w-full bg-transparent flex flex-col items-end gap-1 px-6 py-2 relative z-50">
            
            {/* Top Row: Stack Only */}
            <div className="flex items-center gap-3 pr-2" onClick={onViewAll}>
                 
                 <div className="flex items-center pl-1 cursor-pointer">
                    {displayCharms.map((item, i) => (
                        <div 
                            key={item.id} 
                            className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center -ml-5 first:ml-0 relative transition-transform hover:scale-110 hover:z-50"
                            style={{ zIndex: i }} // Stack: Rightmost on top
                        >
                            <img src={item.charm.image} alt="" className="w-4/5 h-4/5 object-contain" />
                        </div>
                    ))}
                 </div>
            </div>

            {/* Bottom Row: Text */}
            <button 
                onClick={onViewAll}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
                <span className="text-[#1F4B30]">{charms.length} Selected</span>
                <span className="mx-1.5 text-gray-300">|</span>
                <span className="text-[#DE3C27] font-bold">View All</span>
            </button>
        </div>
    );
}
