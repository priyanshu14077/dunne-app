import { Plus } from "lucide-react";
import { Charm } from "../lib/mock-data";

interface SummaryOverlayProps {
    charms: { charm: Charm; id: string }[];
    onViewAll: () => void;
}

export default function SummaryOverlay({ charms, onViewAll }: SummaryOverlayProps) {
    // Take last 5 unique charms for display
    const visibleCharms = charms.slice(-12);

    return (
        <div className="absolute bottom-[30px] right-8 z-40 bg-transparent animate-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full">
                
                {/* Horizontal Icons: No background, floating */}
                <div className="flex items-center -space-x-5">
                    {visibleCharms.map((item, i) => {
                        return (
                            <div 
                                key={item.id} 
                                className="w-[42px] h-[42px] rounded-full flex items-center justify-center p-1.5 overflow-hidden transition-all hover:scale-125 hover:z-50 relative"
                                style={{ zIndex: 50 - i }}
                            >
                                <img 
                                    src={item.charm.image} 
                                    alt="" 
                                    className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]" 
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Vertical Divider (Subtle) */}
                <div className="w-[1px] h-6 bg-black/5 mx-1" />

                {/* View All Button */}
                <button 
                    onClick={onViewAll}
                    className="text-[#DE3C27] text-[15px] font-bold hover:opacity-80 transition-all whitespace-nowrap drop-shadow-sm"
                >
                    View All
                </button>
            </div>
        </div>
    );
}
