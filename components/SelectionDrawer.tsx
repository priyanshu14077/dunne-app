import { Plus, Trash2, Shuffle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";
import { useRef, useState, useEffect } from "react";
import CharmCard from "./CharmCard";

interface SelectionDrawerProps {
    type: 'base' | 'charms';
    items: (Product | Charm)[];
    onSelect: (item: Product | Charm) => void;
    onRemove?: (itemId: string) => void; 
    selectedIds?: string[];
    charmCounts?: Record<string, number>; // Renamed from counts
    
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
    charmCounts = {}, // Default empty object
    activeCategory,
    onCategoryChange,
    onRandomize
}: SelectionDrawerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Initial Logic: Scroll Percentage
    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                const totalScrollable = scrollWidth - clientWidth;
                if (totalScrollable > 0) {
                    const percentage = (scrollLeft / totalScrollable) * 100;
                    setScrollProgress(percentage);
                }
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Derived categories based on type
    const categories = type === 'base' 
        ? ['Bracelets', 'Necklaces'] 
        : ['Eternal Bloom', 'Game On', 'Persona', 'Guardian', 'LoveStruck', 'Sugar Pop', 'Wild & Free']; 

    // Filter items
    const filteredItems = items.filter(item => {
        if (type === 'base') {
            const product = item as Product;
            if (activeCategory === 'Bracelets') return product.type === 'bracelet';
            if (activeCategory === 'Necklaces') return product.type === 'necklace';
        }
        
        // For charms
        const charm = item as Charm;
        return charm.category === activeCategory;
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
        <div className="bg-[#F5EBDD] w-full pt-4 pb-[90px] flex flex-col gap-4 relative z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] h-full">
             
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
                                className="flex items-center gap-2 text-[#1F4B30] font-sans text-xl hover:opacity-80 transition-opacity"
                            >
                                <span className="font-bold tracking-tight">{activeCategory}</span>
                                {isDropdownOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {/* Dropdown Menu - Opens Upward */}
                            {isDropdownOpen && (
                                <div className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                onCategoryChange(cat);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center justify-between ${activeCategory === cat ? 'text-[#1F4B30]' : 'text-gray-700'}`}
                                        >
                                            {cat}
                                            {activeCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-[#1F4B30]"></span>}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Scroll Progress Bar (Replaces Randomize) */}
                        <div className="flex items-center gap-3">
                            <div className="w-[100px] h-[3px] bg-[#F5EBDD] rounded-full overflow-hidden relative">
                                <div 
                                    className="absolute inset-y-0 left-0 bg-[#1F4B30] transition-all duration-100 ease-out"
                                    style={{ width: `${scrollProgress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                 )}
             </div>

             {/* Carousel Container with Arrows */}
             <div className="relative flex-1 min-h-0 flex flex-col group mt-[10px]">
                 
                 {/* Left Arrow */}
                 <button 
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#1F4B30] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                 >
                     <img src="/icons/web-icons-clean/chevron-left.png" alt="Left" className="w-4 h-4 object-contain" />
                 </button>

                 {/* Right Arrow */}
                 <button 
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#1F4B30] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                 >
                     <img src="/icons/web-icons-clean/chevron-right.png" alt="Right" className="w-4 h-4 object-contain" />
                 </button>

                 {/* Carousel Container */}
                 <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto px-6 gap-[10px] scrollbar-hide items-center justify-center min-h-[220px]" 
                 >
                    <div className="flex gap-[10px] items-center">
                        {filteredItems.map((item) => {
                             const count = charmCounts[item.id] || 0;
                             
                             return (
                                <CharmCard 
                                    key={item.id} 
                                    item={item} 
                                    isSelected={count > 0} 
                                    count={count} 
                                    onSelect={() => onSelect(item)}
                                    onRemove={() => onRemove && onRemove(item.id)}
                                    type={type}
                                />
                            );
                        })}
                    </div>
                 </div>
             </div>
        </div>
    );
}
