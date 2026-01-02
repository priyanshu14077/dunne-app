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
                group shrink-0 relative flex flex-col items-center bg-[#F4EFE6] rounded-[20px]
                border transition-all duration-300 cursor-pointer overflow-hidden
                w-[107px] h-[193px]
                ${isSelected ? 'border-[#1F4B30] shadow-md' : 'border-transparent hover:border-gray-200'}
            `}
        >
            {/* Image Container (Increased height to fill space and avoid overlap) */}
            <div className="flex items-center justify-center w-full h-[95px] pt-4">
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full flex-1 flex flex-col items-center px-1 pb-0 gap-0">
                {/* Name */}
                <h3 className="font-sans text-[11px] leading-tight text-black text-center line-clamp-2 h-[26px] flex items-center justify-center w-full px-2">
                    {item.name}
                </h3>

                {/* Price */}
                <p className="font-sans text-[12px] font-bold text-black mt-1">
                    ₹ {item.price}
                </p>

                {/* Action Area (mt-auto to stick to bottom with exact 5px gap) */}
                <div className="mt-auto h-[38px] w-full flex items-center justify-center mb-[5px]">
                    {showCounter ? (
                         <div 
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-between bg-white rounded-full px-1.5 py-1 w-[90px] h-full"
                        >
                            <button 
                                onClick={() => onRemove?.(item.id)}
                                className="w-7 h-7 flex items-center justify-center bg-[#F4EFE6] rounded-full shadow-sm hover:scale-105 transition-transform active:scale-95 text-[#D64736]"
                            >
                                <Trash2 size={14} />
                            </button>
                            
                            <span className="text-[12px] font-bold text-[#1F4B30] w-4 text-center">
                                {count}
                            </span>
                            
                            <button 
                                onClick={() => onSelect(item)}
                                className="w-7 h-7 flex items-center justify-center bg-[#F4EFE6] rounded-full shadow-sm hover:scale-105 transition-transform active:scale-95 text-[#1F4B30]"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    ) : (
                        <button
                            className={`
                                w-[90px] h-full rounded-full text-[14px] font-bold transition-all duration-300 flex items-center justify-center gap-1.5 font-sans
                                ${isSelected && type === 'base' 
                                    ? 'bg-[#1F4B30] text-white' 
                                    : 'bg-white text-[#1F4B30] hover:bg-[#EEDDCC] hover:scale-105 active:scale-95'
                                }
                            `}
                        >
                            {isSelected && type === 'base' ? (
                                'Selected'
                            ) : (
                                <>
                                    <Plus size={14} />
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
