import { Plus, Trash2, Shuffle, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";
import { useRef, useState, useEffect } from "react";
import CharmCard from "./CharmCard";

interface SelectionDrawerProps {
    type: 'base' | 'charms';
    items: (Product | Charm)[];
    onSelect: (item: Product | Charm) => void;
    onPreview?: (item: Product | Charm) => void; // Passed down
    onRemove?: (itemId: string) => void; 
    selectedIds?: string[];
    charmCounts?: Record<string, number>; 
    
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
    onPreview,
    onRemove, 
    selectedIds = [],
    charmCounts = {}, 
    activeCategory,
    onCategoryChange,
    onRandomize
}: SelectionDrawerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Draggable State
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    // Draggable Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };


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
        <div className="bg-[#F5EBDD] w-full pt-2 lg:pt-6 pb-0 flex flex-col gap-0 relative z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] h-auto lg:h-full min-h-[160px] lg:min-h-0">
             
             {/* Header Section */}
             <div className="px-6 flex items-center justify-between relative z-40 h-[24px]">
                 
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
                     // Charms: Horizontal Category Pills
                     <div className="w-full flex items-center justify-between gap-4 overflow-hidden">
                        
                        {/* Category List - Scrollable with padding to prevent mask clip */}
                        <div className="flex-1 overflow-x-auto scrollbar-hide flex items-center gap-3 py-2 px-4 mask-linear-fade">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => onCategoryChange(cat)}
                                    className={`
                                        whitespace-nowrap px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-bold transition-all duration-300 ease-out flex-shrink-0
                                        ${activeCategory === cat 
                                            ? 'bg-[#1F4B30] text-white shadow-lg scale-105 mx-1' 
                                            : 'bg-white/50 text-[#1F4B30]/70 hover:bg-white hover:scale-105'
                                        }
                                    `}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Scroll Progress Bar (kept as requested previously) */}
                        <div className="hidden lg:flex items-center gap-3 shrink-0">
                            <div className="w-[80px] h-[3px] bg-[#E6DCC9] rounded-full overflow-hidden relative">
                                <div 
                                    className="absolute inset-y-0 left-0 bg-[#1F4B30] transition-all duration-100 ease-out"
                                    style={{ width: `${scrollProgress}%` }}
                                />
                            </div>
                        </div>
                     </div>
                 )}
             </div>

             {/* Carousel Container with Arrows - mb-5 for 20px spacing */}
             <div className="relative flex-1 flex flex-col group mt-[5px] lg:mt-[24px] mb-5">
                 
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
                    className={`
                        flex overflow-x-auto px-6 gap-[10px] scrollbar-hide items-center min-h-[160px] 
                        ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}
                    `}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                 >
                    <div className="flex gap-[10px] items-center pointer-events-none"> {/* pointer-events-none to prevent image drag, re-enable click on cards via parent? No, wait. */}
                       {/* 
                         Correction: pointer-events-none on wrapper will break clicks. 
                         We should simply rely on child click handlers. 
                         CharmCard should handle clicks. We need strictly stopPropagation on drag? 
                         Actually, standard click works fine if mouseup happens on same element. 
                         If dragging occurs, click is usually suppressed or we can filter it.
                         For now, removing pointer-events-none wrapper to allow card interaction.
                       */}
                    </div>

                     {/* Direct mapping to avoid extra wrapper if possible, or key off filteredItems */}
                     {filteredItems.map((item) => {
                             const count = charmCounts[item.id] || 0;
                             
                             return (
                                <CharmCard 
                                    key={item.id} 
                                    item={item} 
                                    isSelected={count > 0} 
                                    count={count} 
                                    onSelect={() => onSelect(item)}
                                    onPreview={() => onPreview && onPreview(item)} // Pass preview
                                    onRemove={() => onRemove && onRemove(item.id)}
                                    type={type}
                                />
                            );
                        })}
                 </div>
             </div>
        </div>
    );
}
