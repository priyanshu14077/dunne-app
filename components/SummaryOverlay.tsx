import { Plus } from "lucide-react";
import { Charm } from "@/lib/mock-data";
import { PlacedCharmInstance } from "../app/page";

interface SummaryOverlayProps {
    charms: PlacedCharmInstance[];
    onViewAll: () => void;
}

export default function SummaryOverlay({ charms, onViewAll }: SummaryOverlayProps) {
    if (charms.length === 0) return null;

    return (
        <div className="w-full bg-transparent flex flex-col items-center justify-center pb-[10px] relative z-50">
            <button 
                onClick={onViewAll}
                className="text-xs lg:text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'Neutra Text, sans-serif' }}
            >
                <div className="flex items-center gap-2">
                    <div className="flex items-center -space-x-2">
                        {charms.slice(0, 5).map((pc, i) => (
                            <div 
                                key={pc.id} 
                                className="w-6 h-6 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm"
                            >
                                <img 
                                    src={pc.charm.image} 
                                    alt="" 
                                    className="w-4 h-4 object-contain" 
                                />
                            </div>
                        ))}
                        {charms.length > 5 && (
                            <div className="w-6 h-6 rounded-full bg-[#1F4B30] flex items-center justify-center text-[10px] text-white font-bold border border-white">
                                +{charms.length - 5}
                            </div>
                        )}
                    </div>
                    <span className="mx-1.5 text-gray-300">|</span>
                    <span className="text-[#DE3C27] font-bold">View All</span>
                </div>
            </button>
        </div>
    );
}
