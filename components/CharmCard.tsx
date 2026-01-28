import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Product, Charm } from "../lib/mock-data";

export type CardState = 'default' | 'preview' | 'added';

interface CharmCardProps {
    item: Product | Charm;
    isPreview: boolean;
    isAdded: boolean;
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
    isPreview,
    isAdded,
    quantity = 0,
    onBodyClick, 
    onAdd,
    onIncrement,
    onRemove, 
    disabled = false,
    type
}: CharmCardProps) {
    
    // State for image source handling fallback
    const [imgSrc, setImgSrc] = useState<string>(item.image);
    const [hasError, setHasError] = useState(false);

    // Sync state if item changes (just in case component is reused without key change)
    const previewImage = 'previewImage' in item ? item.previewImage : undefined;
    if (imgSrc !== item.image && !hasError && imgSrc !== previewImage) {
         setImgSrc(item.image); 
    }

    const showQuantityControls = isAdded && quantity > 0;

    // Handler for Card Body Click → PREVIEW (State 2)
    const handleBodyClick = () => {
        onBodyClick(item);
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

    // Strip "Charm" and force split into two lines
    const rawName = item.name.replace(/charm/gi, '').trim();
    const words = rawName.split(' ');
    
    let line1 = rawName;
    let line2 = '';

    if (words.length === 2) {
        line1 = words[0];
        line2 = words[1];
    } else if (words.length >= 3) {
        // Simple balance for 3+ words: first 1 or 2 on line 1, rest on line 2
        const mid = Math.ceil(words.length / 2);
        line1 = words.slice(0, mid).join(' ');
        line2 = words.slice(mid).join(' ');
    }

    return (
        <div 
            onClick={handleBodyClick}
            id={`charm-card-${item.id}`}
            className={`
                group shrink-0 relative flex flex-col items-center bg-[#F5EBDD] rounded-[15px]
                border transition-all duration-300 cursor-pointer overflow-hidden
                w-[103px] h-[160px] lg:w-[130px] lg:h-[170px]
                ${isPreview ? 'border-black border-[0.5px] shadow-sm' : 'border-transparent hover:border-gray-200'}
            `}
        >
            {/* Bestseller Ribbon */}
            {item.isBestSeller && (
                <div 
                    className="absolute top-0 left-0 z-10 overflow-hidden w-[65px] h-[65px] pointer-events-none"
                    role="img"
                    aria-label="Bestseller product"
                >
                    <div 
                        className="absolute top-[12px] left-[-28px] rotate-[-45deg] bg-gradient-to-r from-[#DE3C27] to-[#C42E1F] text-white text-[7px] lg:text-[8px] font-bold py-[3px] px-7 shadow-lg animate-fade-in"
                        style={{ 
                            fontFamily: 'Manrope, sans-serif',
                            letterSpacing: '0.3px',
                            textTransform: 'uppercase'
                        }}
                    >
                        Bestseller
                    </div>
                </div>
            )}
            {/* Image Container */}
            <div className="flex items-center justify-center w-full h-[70px] lg:h-[85px] pt-1">
                <div className="w-[67px] h-[58px] lg:w-[79px] lg:h-[68px] flex items-center justify-center relative">

                    <Image 
                        src={imgSrc} 
                        alt={rawName}
                        fill
                        className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 200px, 300px"
                        quality={100}
                        priority={['pe-a', 'pe-b', 'pe-d'].includes(item.id)}
                        onError={() => {
                            if (!hasError && 'previewImage' in item && item.previewImage) {
                                setImgSrc(item.previewImage);
                                setHasError(true);
                            }
                        }}
                    />
                </div>
            </div>

            {/* Content Container - 12px from Image Container top */}
            <div className="w-full flex-1 flex flex-col items-center px-1 pb-1 pt-[12px] gap-0">
                {/* Name - Forced 2 lines */}
                <h3 
                    className="text-[10px] lg:text-[12px] leading-[1.1] text-black text-center h-[26px] lg:h-[32px] flex flex-col items-center justify-center w-full px-0.5 font-normal"
                    style={{ fontFamily: 'Neutra Text, sans-serif' }}
                >
                    <span className="block truncate w-full">{line1}</span>
                    {line2 && <span className="block truncate w-full">{line2}</span>}
                </h3>

                {/* State-dependent Area: Price OR Buttons - 10px from Name */}
                <div className="w-full flex-1 flex flex-col items-center justify-between pb-2 mt-[10px]">
                    {isAdded ? (
                        /* ADDED STATE: Quantity Controls or Selected Label */
                        <div className="h-[34px] w-full flex items-center justify-center mb-0.5 animate-fade-in-up">
                            {showQuantityControls ? (
                                <div 
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center justify-between bg-white rounded-full px-1.5 py-1 w-[90px] h-full gap-1.5"
                                    style={{ paddingLeft: '8px' }}
                                >
                                    {/* Trash Button */}
                                    <button 
                                        onClick={handleRemoveClick}
                                        className={`w-7 h-7 flex items-center justify-center bg-[#F4EFE6] rounded-full shadow-sm hover:scale-110 transition-transform active:scale-95 ${quantity > 1 ? 'text-[#1F4B30]' : 'text-[#DE3C27]'}`}
                                        aria-label={quantity > 1 ? `Decrease ${rawName} quantity` : `Remove ${rawName}`}
                                    >
                                        {quantity > 1 ? <Minus size={14} /> : <Trash2 size={14} />}
                                    </button>
                                    
                                    {/* Quantity Display */}
                                    <span 
                                        className="text-[14px] font-bold text-[#1F4B30] w-5 text-center"
                                        style={{ fontFamily: 'Manrope, sans-serif' }}
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
                                        aria-label={`Add another ${rawName}`}
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div 
                                    className="bg-[#1F4B30] text-white px-4 py-1.5 rounded-full text-[12px] font-bold"
                                    style={{ fontFamily: 'Neutra Text, sans-serif' }}
                                >
                                    Selected
                                </div>
                            )}
                        </div>
                    ) : isPreview ? (
                        /* PREVIEW STATE: Add Button */
                        <div className="w-full flex flex-col items-center justify-center animate-fade-in py-1">
                            <button
                                onClick={handleAddClick}
                                id={`add-to-cart-${item.id}`}
                                disabled={disabled}
                                className={`flex flex-col items-center gap-0 transition-all duration-200 bg-transparent active:bg-transparent ${disabled ? 'opacity-50' : 'hover:scale-105 active:scale-95'}`}
                            >
                                <Plus size={24} strokeWidth={2} className="text-black mb-0" />
                                <span 
                                    className="text-black leading-tight"
                                    style={{ fontFamily: 'Neutra Text, sans-serif', fontSize: '10px' }}
                                >
                                    Add to cart
                                </span>
                            </button>
                        </div>
                    ) : (
                        /* DEFAULT STATE: Price */
                        <p 
                            className="text-[12px] lg:text-[14px] font-bold text-[#DE3C27] animate-fade-in"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                            ₹{item.price}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
