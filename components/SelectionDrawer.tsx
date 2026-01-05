import { Shuffle } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";
import { useRef, useState, useEffect } from "react";
import CharmCard, { CardState } from "./CharmCard";

interface SelectionDrawerProps {
    type: 'base' | 'charms';
    items: (Product | Charm)[];
    
    // State management for 3-state system
    cardStates: Record<string, CardState>; // itemId -> state
    quantities: Record<string, number>; // itemId -> quantity
    
    // Handlers
    onCardBodyClick: (item: Product | Charm) => void;
    onAdd: (item: Product | Charm) => void;
    onIncrement: (item: Product | Charm) => void;
    onRemove: (itemId: string) => void;
    
    // Categorization
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    
    // Actions
    onRandomize?: () => void;
    
    // Constraints
    maxReached?: boolean;
}

export default function SelectionDrawer({ 
    type, 
    items, 
    cardStates,
    quantities,
    onCardBodyClick,
    onAdd,
    onIncrement,
    onRemove,
    activeCategory,
    onCategoryChange,
    onRandomize,
    maxReached = false
}: SelectionDrawerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Draggable State
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Scroll Progress Logic
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

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Categories
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
        <div className="bg-[#F5EBDD] w-full pt-4 flex flex-col gap-3 relative z-30 h-auto overflow-visible shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
             
             {/* Header Section: Category Tabs */}
             <div className="px-6 flex items-center justify-between relative z-40 min-h-[32px]">
                 {type === 'base' ? (
                     // Base: Toggle Buttons
                     <div className="flex bg-white/50 p-1 rounded-full mx-auto">
                         {categories.map(cat => (
                             <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#1F4B30] text-white shadow-md' : 'text-[#1F4B30]/70 hover:bg-white/80'}`}
                                style={{ fontFamily: 'Neutra Text, sans-serif' }}
                             >
                                 {cat}
                             </button>
                         ))}
                     </div>
                 ) : (
                     // Charms: Horizontal Category Pills
                     <div className="w-full flex items-center justify-between gap-4 overflow-hidden">
                        {/* Category List - Scrollable */}
                        <div className="flex-1 overflow-x-auto scrollbar-hide flex items-center gap-2 lg:gap-3 py-1 px-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => onCategoryChange(cat)}
                                    className={`
                                        whitespace-nowrap px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-[10px] lg:text-[12px] font-bold transition-all duration-300 ease-out flex-shrink-0
                                        ${activeCategory === cat 
                                            ? 'bg-[#1F4B30] text-white shadow-lg scale-105' 
                                            : 'bg-white/50 text-[#1F4B30]/70 hover:bg-white hover:scale-105'
                                        }
                                    `}
                                    style={{ fontFamily: 'Neutra Text, sans-serif' }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Scroll Progress Bar */}
                        <div className="flex items-center gap-3 shrink-0">
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

             {/* Carousel Container with Arrows */}
             <div className="relative flex-1 flex flex-col group">
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
                        flex overflow-x-auto px-6 gap-[12px] lg:gap-[16px] scrollbar-hide items-center min-h-[160px] w-full
                        ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}
                    `}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                 >
                     {filteredItems.map((item) => (
                        <CharmCard 
                            key={item.id} 
                            item={item} 
                            state={cardStates[item.id] || 'default'}
                            quantity={quantities[item.id] || 0}
                            onBodyClick={onCardBodyClick}
                            onAdd={onAdd}
                            onIncrement={onIncrement}
                            onRemove={onRemove}
                            disabled={maxReached && cardStates[item.id] !== 'added'}
                            type={type}
                        />
                     ))}
                 </div>
             </div>
        </div>
    );
}
