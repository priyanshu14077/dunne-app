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
                <span className="text-black">{charms.length} Selected</span>
                <span className="mx-1.5 text-gray-300">|</span>
                <span className="text-[#DE3C27] font-bold">View All</span>
            </button>
        </div>
    );
}
