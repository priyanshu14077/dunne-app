import { Plus, Minus, Trash2 } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";

interface CharmCardProps {
    item: Product | Charm;
    isSelected: boolean;
    onSelect: (item: Product | Charm) => void;
    onRemove?: (itemId: string) => void;
    type: 'base' | 'charms';
}

export default function CharmCard({ item, isSelected, onSelect, onRemove, type }: CharmCardProps) {
    const isMockCharm = 'category' in item;
    const isBestSeller = item.isBestSeller;

    return (
        <div 
            onClick={() => onSelect(item)}
            className={`flex-shrink-0 w-[107px] min-h-[156px] flex flex-col items-center text-center relative transition-all duration-300 snap-center rounded-[20px] box-border cursor-pointer overflow-hidden
                ${isSelected 
                    ? 'bg-[#FFFAF3] shadow-md ring-1 ring-[#1F4B30]/20' 
                    : 'bg-[#FFFAF3] border border-[#E5E5E5] hover:shadow-sm'}
            `}
            style={{ padding: '10px 8px' }}
        >
            {/* Most Selling Badge */}
            {isBestSeller && !isSelected && (
                <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none overflow-hidden rounded-tl-[20px]">
                    <div className="absolute top-[12px] left-[-22px] bg-[#DE3C27] text-white text-[8px] font-bold py-1 w-[90px] transform -rotate-45 text-center shadow-sm z-10">
                        Most Selling
                    </div>
                </div>
            )}

            {/* Image Container: 70x60, Transparent */}
            <div className="w-[70px] h-[60px] relative mb-1 flex items-center justify-center shrink-0">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-contain max-h-full max-w-full drop-shadow-sm transition-transform group-hover:scale-110 duration-500"
                />
            </div>

            {/* Content with 4px Gap Logic */}
            <div className="flex-1 flex flex-col gap-1 w-full">
                <hgroup className="min-h-[30px] flex items-center justify-center">
                    <h3 className="text-[#1F4B30] text-[10px] font-bold leading-tight line-clamp-2 text-center">
                        {item.name}
                    </h3>
                </hgroup>
                
                <p className="text-[#DE3C27] text-[13px] font-bold">
                    {type === 'charms' ? `+₹${item.price.toFixed(2)}` : `₹${item.price.toFixed(2)}`}
                </p>

                {/* Footer Action */}
                <div className="w-full">
                    {isSelected && type === 'charms' ? (
                        <div className="flex items-center justify-between bg-[#F5EBDD] rounded-full p-1 h-[32px]">
                            <button 
                                onClick={(e) => { e.stopPropagation(); onRemove?.(item.id); }}
                                className="p-1 px-1.5 hover:scale-110 transition-transform active:scale-95"
                            >
                                <img src="/icons/web-icons-clean/trash.png" alt="Delete" className="w-3.5 h-3.5 object-contain" />
                            </button>
                            <span className="text-[12px] font-bold text-[#1F4B30]">1</span>
                            <button 
                                onClick={(e) => { e.stopPropagation(); onSelect(item); }}
                                className="p-1 px-1.5 hover:scale-110 transition-transform active:scale-95"
                            >
                                <img src="/icons/web-icons-clean/plus.png" alt="Add" className="w-3.5 h-3.5 object-contain" />
                            </button>
                        </div>
                    ) : (
                        <div className={`w-full bg-[#F5EBDD] text-[#1F4B30] text-[10px] font-bold py-1.5 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm ${isSelected && type === 'base' ? 'bg-[#1F4B30] text-white' : 'hover:bg-[#EEDDCC]'}`}>
                           {isSelected && type === 'base' ? (
                               <span>Selected</span>
                           ) : (
                               <>
                                   <img src="/icons/web-icons-clean/plus.png" alt="" className="w-3 h-3 object-contain" />
                                   <span>Add</span>
                               </>
                           )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
