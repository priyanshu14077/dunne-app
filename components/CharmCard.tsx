import { Plus, Trash2 } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";

export type CardState = 'default' | 'preview' | 'added';

interface CharmCardProps {
    item: Product | Charm;
    state: CardState;
    quantity?: number;
    onBodyClick: (item: Product | Charm) => void;
    onAdd: (item: Product | Charm) => void;
    onIncrement?: (item: Product | Charm) => void;
    onRemove?: (itemId: string) => void;
    disabled?: boolean; // For max constraint
    type: 'base' | 'charms';
}

export default function CharmCard({ 
    item, 
    state,
    quantity = 0,
    onBodyClick, 
    onAdd,
    onIncrement,
    onRemove, 
    disabled = false,
    type
}: CharmCardProps) {
    
    const isPreview = state === 'preview';
    const isAdded = state === 'added';
    const showQuantityControls = isAdded && quantity > 0;

    // Handler for Card Body Click → PREVIEW (State 2)
    const handleBodyClick = () => {
        if (!isAdded) {
            onBodyClick(item);
        }
    };

    // Handler for Add Button Click
    const handleAddClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled) {
            onAdd(item);
        }
    };

    // Handler for Increment
    const handleIncrementClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled && onIncrement) {
            onIncrement(item);
        }
    };

    // Handler for Remove
    const handleRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onRemove) {
            onRemove(item.id);
        }
    };

    return (
        <div 
            onClick={handleBodyClick}
            className={`
                group shrink-0 relative flex flex-col items-center bg-[#F4EFE6] rounded-[15px]
                border-2 transition-all duration-200 cursor-pointer overflow-hidden
                w-[103px] h-[127px] lg:w-[120px] lg:h-[121px]
                ${(isPreview || isAdded) ? 'border-[#1F4B30] shadow-md' : 'border-transparent hover:border-gray-200'}
            `}
        >
            {/* Image Container */}
            <div className="flex items-center justify-center w-full h-[70px] lg:h-[75px] pt-3">
                <div className="w-[67px] h-[58px] lg:w-[79px] lg:h-[68px] flex items-center justify-center">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full flex-1 flex flex-col items-center px-2 pb-0 gap-0">
                {/* Name */}
                <h3 
                    className="text-[11px] lg:text-[14px] leading-tight text-black text-center line-clamp-2 h-[26px] lg:h-[30px] flex items-center justify-center w-full px-1"
                    style={{ fontFamily: 'Neutra Text, sans-serif' }}
                >
                    {item.name}
                </h3>

                {/* Price */}
                <p 
                    className="text-[12px] font-bold text-black mt-0.5"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                    ₹{item.price}
                </p>

                {/* Action Area */}
                <div className="mt-auto h-[34px] w-full flex items-center justify-center mb-[5px]">
                    {showQuantityControls ? (
                         <div 
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-between bg-white rounded-full px-1.5 py-1 w-[90px] h-full gap-1.5"
                            style={{ paddingLeft: '8px' }}
                        >
                            {/* Trash Button */}
                            <button 
                                onClick={handleRemoveClick}
                                className="w-7 h-7 flex items-center justify-center bg-[#F4EFE6] rounded-full shadow-sm hover:scale-110 transition-transform active:scale-95 text-[#DE3C27]"
                                aria-label={`Remove ${item.name}`}
                            >
                                <Trash2 size={14} />
                            </button>
                            
                            {/* Quantity Display */}
                            <span 
                                className="text-[14px] font-bold text-[#1F4B30] w-5 text-center"
                                style={{ fontFamily: 'Manrope, sans-serif' }}
                                aria-live="polite"
                            >
                                {quantity}
                            </span>
                            
                            {/* Increment Button */}
                            <button 
                                onClick={handleIncrementClick}
                                disabled={disabled}
                                className={`w-7 h-7 flex items-center justify-center bg-[#F4EFE6] rounded-full shadow-sm transition-transform text-[#1F4B30] ${
                                    disabled 
                                        ? 'opacity-50 cursor-not-allowed' 
                                        : 'hover:scale-110 active:scale-95'
                                }`}
                                aria-label={`Add another ${item.name}`}
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleAddClick}
                            disabled={disabled}
                            className={`
                                w-[90px] h-full rounded-full text-[14px] font-bold transition-all duration-200 flex items-center justify-center gap-1.5
                                ${isAdded && type === 'base' 
                                    ? 'bg-[#1F4B30] text-white' 
                                    : 'bg-white text-[#1F4B30] shadow-sm'
                                }
                                ${disabled 
                                    ? 'opacity-50 cursor-not-allowed' 
                                    : 'hover:scale-105 active:scale-95'
                                }
                                ${isPreview ? 'animate-fade-in-up' : ''}
                            `}
                            style={{ fontFamily: 'Neutra Text, sans-serif' }}
                            aria-label={`Add ${item.name} to cart`}
                        >
                            {isAdded && type === 'base' ? (
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
