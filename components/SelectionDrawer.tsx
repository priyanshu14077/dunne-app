import { Shuffle, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, Charm } from "../lib/mock-data";
import { useRef, useState, useEffect } from "react";
import { STORAGE_BASE } from "@/lib/constants";
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
    onIncrement?: (item: Product | Charm) => void;
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
    const isCharm = (item: Product | Charm): item is Charm => {
        return typeof (item as Charm).category === "string";
    };
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Draggable State
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    // Category scroll state
    const categoryScrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkCategoryScroll = () => {
        if (categoryScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
            setCanScrollLeft(scrollLeft > 5); // small buffer
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        checkCategoryScroll();
        window.addEventListener('resize', checkCategoryScroll);
        return () => window.removeEventListener('resize', checkCategoryScroll);
    }, [items]); // Re-check when items change

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
        : ['Eternal Bond', 'Game On', 'Persona', 'Guardian', 'LoveStruck', 'Sugar Pop', 'Travel & Wild'];

    // Filter items
    const filteredItems = items.filter(item => {
        if (type === 'base') {
            const product = item as Product;
            if (activeCategory === 'Bracelets') return product.type === 'bracelet';
            if (activeCategory === 'Necklaces') return product.type === 'necklace';
            return false;
        }
        if (!isCharm(item)) return false;
        return item.category === activeCategory;
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
        <div className="bg-[#F5EBDD] w-full pt-0 flex flex-col gap-0 relative z-10 transition-all duration-300">
             
             {/* Header Section: Category Tabs */}
             <div className="px-1 flex items-center justify-between relative z-40 min-h-[50px] lg:min-h-[60px]">
                 {type === 'base' ? (
                     // Base: Toggle Buttons (Simplified border-only style)
                     <div className="flex items-center justify-center gap-4 mx-auto py-2">
                          {categories.map(cat => (
                              <button
                                 key={cat}
                                 onClick={() => onCategoryChange(cat)}
                                 className={`
                                    w-[90px] h-[34px] lg:w-auto lg:h-auto lg:px-8 lg:py-2.5 
                                    rounded-[20px] lg:rounded-full 
                                    text-[14px] lg:text-[18px] font-normal transition-all flex items-center justify-center
                                    ${activeCategory === cat 
                                        ? 'border-[0.5px] border-black text-black bg-[#F5EBDD]/50 shadow-sm' 
                                        : 'bg-transparent text-black/60 hover:text-black'
                                    }
                                 `}
                                 style={{ fontFamily: 'Neutra Text, sans-serif' }}
                              >
                                  {cat}
                              </button>
                          ))}
                     </div>
                  ) : (
                        <div className="w-full flex items-center px-1 py-1 h-full relative">
                          {/* Left Arrow */}
                          <button 
                            onClick={() => {
                                categoryScrollRef.current?.scrollBy({ left: -100, behavior: 'smooth' });
                            }}
                            className={`flex-shrink-0 px-[10px] transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                          >
                               <ChevronLeft className="w-6 h-6 text-black" />
                          </button>

                          {/* Category List - Scrollable */}
                          <div 
                            ref={categoryScrollRef}
                            id="walkthrough-categories"
                            onScroll={checkCategoryScroll}
                            className="flex-1 overflow-x-auto scrollbar-hide flex items-center lg:justify-center gap-6 py-1"
                          >
                              {categories.map((cat) => (
                                  <button
                                      key={cat}
                                      onClick={() => onCategoryChange(cat)}
                                      className={`
                                          whitespace-nowrap rounded-full text-[14px] lg:text-[18px] font-normal transition-all duration-300 ease-out flex-shrink-0
                                          ${activeCategory === cat 
                                              ? 'border-[0.5px] border-black text-black bg-transparent px-5 py-2' 
                                              : 'bg-transparent text-black/60 hover:text-black px-2 py-2'
                                          }
                                      `}
                                      style={{ fontFamily: 'Neutra Text, sans-serif' }}
                                  >
                                      {cat}
                                  </button>
                              ))}
                          </div>

                          {/* Right Arrow */}
                          <button 
                            onClick={() => {
                                categoryScrollRef.current?.scrollBy({ left: 100, behavior: 'smooth' });
                            }}
                            className={`flex-shrink-0 px-[10px] transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                          >
                               <ChevronRight className="w-6 h-6 text-black" />
                          </button>
                       </div>
                 )}
             </div>

             {/* Carousel Container with Arrows */}
             <div className="relative flex-1 flex flex-col group">
                 {/* Left Arrow */}
                 <button 
                    onClick={() => scroll('left')}
                    className="absolute left-2 lg:left-[88px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#1F4B30] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                 >
                     <ChevronLeft className="w-4 h-4 text-black" />
                 </button>

                 {/* Right Arrow */}
                 <button 
                    onClick={() => scroll('right')}
                    className="absolute right-2 lg:right-[88px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#1F4B30] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                 >
                     <ChevronRight className="w-4 h-4 text-black" />
                 </button>

                 {/* Carousel Container */}
                 <div 
                    ref={scrollContainerRef}
                    className={`
                        flex overflow-x-auto lg:overflow-hidden px-4 lg:mx-[150px] lg:px-0 py-1 lg:py-2 gap-[12px] lg:gap-[16px] scrollbar-hide items-center flex-1
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
                            isPreview={cardStates[item.id] === 'preview'}
                            isAdded={quantities[item.id] > 0 || cardStates[item.id] === 'added'}
                            quantity={quantities[item.id] || 0}
                            onBodyClick={onCardBodyClick}
                            onAdd={onAdd}
                            onIncrement={onIncrement}
                            onRemove={onRemove}
                            disabled={type === 'charms' && maxReached && !quantities[item.id]}
                            type={type}
                        />
                     ))}
                 </div>
             </div>
        </div>
    );
}
