import { Plus, Minus, Trash2 } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";

interface CharmCardProps {
    item: Product | Charm;
    isSelected: boolean;
    onSelect: (item: Product | Charm) => void;
    onRemove?: (itemId: string) => void;
    type: 'base' | 'charms';
    count?: number;
}

export default function CharmCard({ item, isSelected, onSelect, onRemove, type, count = 0 }: CharmCardProps) {
    // Only charms have categories in our mock data
    const isMockCharm = 'category' in item;

    // Helper to determine if we should show the counter
    const showCounter = type === 'charms' && count > 0;

    return (
        <div 
            onClick={() => onSelect(item)}
            className={`
                group shrink-0 relative flex flex-col items-center bg-[#FFFAF3] rounded-[24px]
                border transition-all duration-300 cursor-pointer overflow-hidden
                w-[107px] h-[210px]
                ${isSelected ? 'border-[#1F4B30] shadow-md' : 'border-transparent hover:border-gray-200'}
            `}
        >
            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center w-full pt-4 pb-2">
                <div className="w-[70px] h-[60px] flex items-center justify-center">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full flex flex-col items-center px-3 pb-4 gap-2">
                {/* Name */}
                <h3 className="font-sans text-[10px] leading-[1.3] text-black text-center line-clamp-2 h-[26px] flex items-center justify-center w-full">
                    {item.name}
                </h3>

                {/* Price */}
                <p className="font-sans text-[10px] font-bold text-black">
                    SAR {item.price}
                </p>

                {/* Action Area */}
                <div className="h-[28px] w-full flex items-center justify-center mt-1">
                    {showCounter ? (
                         <div 
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-between bg-[#F4EFE6] rounded-full px-1 py-1 w-full max-w-[80px]"
                        >
                            <button 
                                onClick={() => onRemove?.(item.id)}
                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-105 transition-transform active:scale-95 text-[#D64736]"
                            >
                                {count === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
                            </button>
                            
                            <span className="text-[12px] font-bold text-[#1F4B30] w-4 text-center">
                                {count}
                            </span>
                            
                            <button 
                                onClick={() => onSelect(item)}
                                className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-105 transition-transform active:scale-95 text-[#1F4B30]"
                            >
                                <Plus size={12} />
                            </button>
                        </div>
                    ) : (
                        <button
                            className={`
                                w-full h-full rounded-full text-[10px] font-bold transition-all duration-300 flex items-center justify-center gap-1.5
                                ${isSelected && type === 'base' 
                                    ? 'bg-[#1F4B30] text-white' 
                                    : 'bg-[#F4EFE6] text-[#1F4B30] hover:bg-[#EEDDCC] hover:scale-105 active:scale-95'
                                }
                            `}
                        >
                            {isSelected && type === 'base' ? (
                                'Selected'
                            ) : (
                                <>
                                    <Plus size={12} />
                                    Add
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
