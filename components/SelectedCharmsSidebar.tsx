import { Trash2 } from "lucide-react";
import { Charm } from "../lib/mock-data";

interface SelectedCharmsSidebarProps {
    selectedCharms: { charm: Charm; id: string }[]; // Using a unique ID for each instance
    onRemove: (instanceId: string) => void;
}

export default function SelectedCharmsSidebar({ selectedCharms, onRemove }: SelectedCharmsSidebarProps) {
    if (selectedCharms.length === 0) return null;

    return (
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-[200px]">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-[#1F4B30] uppercase tracking-wide">
                    Selected Charms
                </h3>
                <span className="bg-[#DE3C27] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {selectedCharms.length}
                </span>
            </div>

            <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
                {selectedCharms.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-100 shadow-sm animate-in fade-in slide-in-from-left-2 duration-300">
                        <div className="w-8 h-8 flex-shrink-0 bg-gray-50 rounded-md flex items-center justify-center p-1">
                            <img src={item.charm.image} alt={item.charm.name} className="w-full h-full object-contain" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium text-gray-800 truncate leading-tight">{item.charm.name}</p>
                            <p className="text-[9px] text-[#1F4B30] font-bold">₹ {item.charm.price}</p>
                        </div>

                        <button 
                            onClick={() => onRemove(item.id)}
                            className="p-1.5 text-gray-400 hover:text-[#DE3C27] hover:bg-red-50 rounded-md transition-colors"
                        >
                            <Trash2 className="w-3 h-3" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
