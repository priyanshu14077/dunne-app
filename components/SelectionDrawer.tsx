import { Plus, Trash2, Shuffle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";
import { useRef, useState } from "react";

interface SelectionDrawerProps {
    type: 'base' | 'charms';
    items: (Product | Charm)[];
    onSelect: (item: Product | Charm) => void;
    onRemove?: (itemId: string) => void; 
    selectedIds?: string[];
    
    // Categorization
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    
    // Actions
    onRandomize?: () => void;
}

export default function SelectionDrawer({ 
    type, 
    items, 
    onSelect, 
    onRemove, 
    selectedIds = [],
    activeCategory,
    onCategoryChange,
    onRandomize
}: SelectionDrawerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Derived categories based on type
    const categories = type === 'base' 
        ? ['Bracelets', 'Necklaces'] 
        : ['Eternal Bloom', 'Game On', 'Persona', 'Guardian', 'Lovestruck', 'Sugar Pop']; 

    // Filter items
    const filteredItems = items.filter(item => {
        if (type === 'base') {
            const product = item as Product;
            if (activeCategory === 'Bracelets') return product.type === 'bracelet';
            if (activeCategory === 'Necklaces') return product.type === 'necklace';
        }
        
        // For charms
        if (activeCategory === 'Eternal Bloom') return true; 
        return true; 
    });

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-[#F5EBDD] w-full pt-4 pb-[88px] flex flex-col gap-4 relative z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] h-full">
             
             {/* Header Section */}
             <div className="px-6 flex items-center justify-between relative z-40">
                 
                 {type === 'base' ? (
                     // Base: Toggle Buttons
                     <div className="flex bg-white/50 p-1 rounded-full mx-auto">
                         {categories.map(cat => (
                             <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#1F4B30] text-white shadow-md' : 'text-[#1F4B30]/70 hover:bg-white/80'}`}
                             >
                                 {cat}
                             </button>
                         ))}
                     </div>
                 ) : (
                     // Charms: Dropdown + Randomize
                    <div className="w-full flex items-center justify-between">
                        
                        {/* Dropdown Trigger */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 text-[#1F4B30] font-serif text-xl hover:opacity-80 transition-opacity"
                            >
                                <span className="font-bold tracking-tight">{activeCategory}</span>
                                {isDropdownOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50 animate-in fade-in zoom-in-95 duration-200">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                onCategoryChange(cat);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center justify-between ${activeCategory === cat ? 'text-[#DE3C27]' : 'text-gray-700'}`}
                                        >
                                            {cat}
                                            {activeCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-[#DE3C27]"></span>}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Randomize Button */}
                        <button 
                            onClick={onRandomize}
                            className="bg-[#DE3C27] text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-sm hover:bg-[#c93522] transition-colors"
                        >
                            Randomize
                            <Shuffle className="w-3 h-3" />
                        </button>
                    </div>
                 )}
             </div>

             {/* Carousel Container with Arrows */}
             <div className="relative flex-1 min-h-0 flex flex-col group">
                 
                 {/* Left Arrow */}
                 <button 
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#1F4B30] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                 >
                     <ChevronLeft className="w-5 h-5" />
                 </button>

                 {/* Right Arrow */}
                 <button 
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#1F4B30] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                 >
                     <ChevronRight className="w-5 h-5" />
                 </button>

                 {/* Carousel */}
                 <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto px-6 gap-4 scrollbar-hide h-full items-center" 
                 >
                    {filteredItems.map((item) => {
                        const isSelected = selectedIds.includes(item.id);
                        const mockItem = item as any; 
                        
                        return (
                            <div key={item.id} 
                                onClick={() => onSelect(item)} 
                                className={`flex-shrink-0 w-[107px] h-[156px] flex flex-col items-center text-center relative transition-all duration-300 snap-center rounded-[20px] box-border
                                    ${isSelected 
                                        ? 'bg-[#FFFAF5] shadow-[0_4px_10px_rgba(0,0,0,0.06)] ring-1 ring-[#1F4B30]/10' 
                                        : 'bg-[#FFFAF5] shadow-sm hover:shadow-md'}
                                `}
                                style={{ padding: '12px 8px' }} 
                            >
                                
                                {mockItem.isBestSeller && !isSelected && (
                                    <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tl-[20px]">
                                        <div className="absolute top-[10px] left-[-20px] bg-[#DE3C27] text-white text-[7px] font-bold py-0.5 w-[80px] transform -rotate-45 text-center shadow-sm z-10">
                                            Most Selling
                                        </div>
                                    </div>
                                )}

                                <div className="w-full h-[55px] relative mb-1 flex items-center justify-center">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="object-contain max-h-full max-w-full drop-shadow-sm"
                                    />
                                </div>

                                <h3 className="text-[#1F4B30] text-[10px] font-medium leading-[1.1] min-h-[2.2em] flex items-center justify-center px-0.5 w-full mb-0.5 line-clamp-2">
                                    {item.name}
                                </h3>
                                <p className="text-[#DE3C27] text-[11px] font-bold mb-1.5">
                                    +₹{item.price.toFixed(2)}
                                </p>

                                <div className="mt-auto w-full px-0.5">
                                    {isSelected && type === 'charms' ? (
                                         <div className="flex items-center justify-between bg-[#F5EBDD] rounded-full p-0.5 pl-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onRemove?.(item.id); }}
                                                className="p-1 hover:text-red-600 text-[#1F4B30] transition-colors"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                            <span className="text-[10px] font-bold text-[#1F4B30] mx-0.5">1</span>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onSelect(item); }}
                                                className="p-0.5 bg-transparent rounded-full text-[#1F4B30] hover:scale-110 transition-transform"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                         </div>
                                    ) : (
                                        <button 
                                            className="w-full bg-[#F5EBDD] hover:bg-[#EEDDCC] text-[#1F4B30] text-[11px] font-bold py-1.5 rounded-full flex items-center justify-center gap-1 transition-colors shadow-sm"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            <span>Add</span>
                                        </button>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                 </div>
             </div>
        </div>
    );
}
