"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabNavigation from "@/components/TabNavigation";
import SelectionDrawer from "@/components/SelectionDrawer";
import JewelryCanvas from "@/components/JewelryCanvas";
import SelectedCharmsModal from "@/components/SelectedCharmsModal";
import SummaryOverlay from "@/components/SummaryOverlay";
import InfoModal from "@/components/InfoModal";
import ShareModal from "@/components/ShareModal";
import { BASE_PRODUCTS, CHARMS, Product, Charm } from "@/lib/mock-data";
import { PRODUCT_ANCHORS } from "@/lib/anchors";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'charms' | 'base' | 'space'>('charms');
  
  // State 
  const [selectedBase, setSelectedBase] = useState<Product | null>(null);
  const [placedCharms, setPlacedCharms] = useState<{ charm: Charm; anchorId: string; id: string }[]>([]);
  const [spacingMode, setSpacingMode] = useState<'standard' | 'spaced'>('standard');
  const [note, setNote] = useState("");
  
  // Interactive State
  const [activeCharmCategory, setActiveCharmCategory] = useState("Eternal Bloom");
  const [activeBaseCategory, setActiveBaseCategory] = useState("Bracelets");
  const [highlightedItem, setHighlightedItem] = useState<Product | Charm | null>(null);
  
  // Preview State (New)
  const [previewCharm, setPreviewCharm] = useState<Charm | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [infoItem, setInfoItem] = useState<Product | Charm | null>(null);

  // No landing effect - start with fresh state

  // Price Calculation
  const basePrice = selectedBase?.price || 0;
  const charmsPrice = placedCharms.reduce((sum, item) => sum + item.charm.price, 0);
  const totalPrice = basePrice + charmsPrice;

  // --- Handlers ---
  const handleBaseSelect = (item: Product | Charm) => {
    const product = item as Product;
    setSelectedBase(product);
    setHighlightedItem(product);
    setPreviewCharm(null); // Clear preview when base changes
  };

  // Click on Card Body -> Just Preview
  const handleCharmPreview = (item: Product | Charm) => {
      const charm = item as Charm;
      setPreviewCharm(charm);
      setHighlightedItem(charm);
  };

  // Click on "Add" -> Commit to Placed
  const handleCharmSelect = (item: Product | Charm) => {
    const charm = item as Charm;
    setHighlightedItem(charm);
    setPreviewCharm(null); // Clear preview once added? Or keep it? Let's clear to avoid confusion.
    
    // Add Logic
    let targetAnchorId = `temp-${Date.now()}`;
    if (selectedBase) {
         const anchors = PRODUCT_ANCHORS[selectedBase.id]?.[spacingMode] || [];
         const usedAnchorIds = placedCharms.map(p => p.anchorId);
         const firstEmptyAnchor = anchors.find(a => !usedAnchorIds.includes(a.id));
         if (firstEmptyAnchor) targetAnchorId = firstEmptyAnchor.id;
    }
    setPlacedCharms([...placedCharms, { charm, anchorId: targetAnchorId, id: `inst-${Date.now()}` }]);
  };

  const handleRemoveCharm = (instanceId: string) => {
      setPlacedCharms(prev => prev.filter(p => p.id !== instanceId));
  };

  const handleReset = () => {
      setPlacedCharms([]);
      setPreviewCharm(null);
  };

  const handleRandomize = () => {
    // Pick 3 random charms
    const randomCharms = [...CHARMS].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    const newPlaced = [...placedCharms];
    const anchors = selectedBase ? (PRODUCT_ANCHORS[selectedBase.id]?.[spacingMode] || []) : [];
    
    randomCharms.forEach(charm => {
        let targetId = `temp-${Date.now()}-${Math.random()}`;
        if (selectedBase) {
            const used = newPlaced.map(p => p.anchorId);
            const empty = anchors.find(a => !used.includes(a.id));
            if (empty) targetId = empty.id;
        }
        newPlaced.push({ charm, anchorId: targetId, id: `rand-${Date.now()}-${Math.random()}` });
    });
    
    setPlacedCharms(newPlaced);
  };

  const handleSpacingToggle = (mode: 'standard' | 'spaced') => {
      setSpacingMode(mode);
  };


  // --- Render Helpers ---

  const getDrawerProps = () => {
      if (currentStep === 'charms') {
          // Count occurences of each charm ID in placedCharms
          const charmCounts: Record<string, number> = {};
          placedCharms.forEach(p => {
              charmCounts[p.charm.id] = (charmCounts[p.charm.id] || 0) + 1;
          });

            return {
              type: 'charms' as const,
              items: CHARMS,
              activeCategory: activeCharmCategory,
              onCategoryChange: setActiveCharmCategory,
              onSelect: handleCharmSelect, // Add Button
              onPreview: handleCharmPreview, // Body Click
              onRandomize: handleRandomize,
              selectedIds: [], // Not used for charms anymore
              charmCounts: charmCounts, // Pass the counts as charmCounts
              onRemoveCharm: (charmId: string) => {
                  // Find last instance of this charm
                  const lastInstance = [...placedCharms].reverse().find(p => p.charm.id === charmId);
                  if (lastInstance) handleRemoveCharm(lastInstance.id);
              }
          };
      } else {
          return {
               type: 'base' as const,
               items: BASE_PRODUCTS,
               activeCategory: activeBaseCategory,
               onCategoryChange: setActiveBaseCategory,
               onSelect: handleBaseSelect,
               selectedIds: selectedBase ? [selectedBase.id] : []
          };
      }
  };
  
  const drawerProps = getDrawerProps();

  // WhatsApp Button Component
  const WhatsappFloating = () => (
      <button className="fixed bottom-[110px] right-6 z-[60] hover:scale-110 transition-transform active:scale-95 flex items-center justify-center bg-[#25D366] w-14 h-14 rounded-full shadow-lg">
          {/* Using inline SVG for reliability */}
          <svg 
            width="34" 
            height="34" 
            viewBox="0 0 24 24" 
            fill="white" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.251C14.76 13.142 14.529 13.088 14.298 13.439C14.068 13.79 13.411 14.555 13.208 14.785C13.006 15.015 12.803 15.043 12.45 14.866C12.097 14.689 10.966 14.318 9.625 13.123C8.583 12.193 7.879 11.048 7.676 10.695C7.473 10.342 7.654 10.154 7.831 9.978C7.99 9.819 8.185 9.57 8.361 9.366C8.538 9.162 8.598 8.995 8.715 8.761C8.832 8.527 8.773 8.324 8.686 8.148C8.599 7.971 7.896 6.25 7.604 5.567C7.319 4.899 7.031 4.992 6.814 4.992C6.612 4.992 6.381 4.992 6.149 4.992C5.918 4.992 5.541 5.079 5.223 5.426C4.905 5.773 4 6.623 4 8.353C4 10.083 5.264 11.813 5.438 12.046C5.611 12.279 8.041 15.939 11.751 17.537C12.634 17.918 13.323 18.145 13.864 18.317C14.783 18.608 15.617 18.567 16.273 18.469C17.009 18.359 18.523 17.551 18.841 16.657C19.159 15.763 19.159 14.999 19.072 14.852C18.985 14.705 18.754 14.618 18.401 14.441H17.472V14.382ZM12.039 24C9.882 24 7.869 23.42 6.111 22.404L5.736 22.181L1.139 23.391L2.378 18.887L2.134 18.498C1.036 16.746 0.457 14.709 0.457 12.613C0.457 6.223 5.654 1.025 12.043 1.025C15.138 1.025 18.045 2.231 20.231 4.421C22.417 6.611 23.621 9.522 23.621 12.618C23.621 19.008 18.424 24 12.039 24Z" />
          </svg>
      </button>
  );

  return (
    <div className="flex flex-col h-[100dvh] bg-white font-sans text-slate-900 overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col relative bg-white min-h-0 overflow-hidden"> 
        
        {/* Tab Nav - Fixed Top of Main */}
        <div className="flex-shrink-0 relative z-20 bg-white">
            <TabNavigation 
                currentStep={currentStep} 
                onStepChange={setCurrentStep}
                onInfoClick={() => {
                        let itemToShow: Product | Charm | null = null;
                        
                        if (currentStep === 'charms' && placedCharms.length > 0) {
                            itemToShow = placedCharms[placedCharms.length - 1].charm;
                        } else if (currentStep === 'base' && selectedBase) {
                            itemToShow = selectedBase;
                        } else if (highlightedItem) {
                            itemToShow = highlightedItem;
                        }
                        
                        if (itemToShow) {
                            setInfoItem(itemToShow);
                            setIsInfoModalOpen(true);
                        } else {
                            // Optional: show some feedback if nothing is selected
                        }
                }}
                onShareClick={() => setIsShareModalOpen(true)}
            />
        </div>
        
            {isModalOpen && (
                <SelectedCharmsModal 
                    selectedCharms={placedCharms}
                    onClose={() => setIsModalOpen(false)}
                    onRemove={handleRemoveCharm}
                    onAddAnother={handleCharmSelect}
                    onReset={handleReset}
                />
            )}

            {isInfoModalOpen && (
                <InfoModal 
                    item={infoItem}
                    onClose={() => setIsInfoModalOpen(false)}
                />
            )}

            <ShareModal 
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                selectedBase={selectedBase}
                placedCharms={placedCharms}
                spacingMode={spacingMode}
                note={note}
            />

        {/* Canvas Area - Flex Grow to Fill */}
        <div className={`
            flex-1 w-full relative min-h-0 bg-white flex items-center justify-center transition-[padding] duration-300
            ${currentStep !== 'space' && placedCharms.length > 0 ? 'pb-[80px]' : 'pb-0'}
        `}>
            <JewelryCanvas 
                baseProduct={currentStep === 'charms' ? null : selectedBase}
                placedCharms={placedCharms}
                spacingMode={spacingMode}
                previewCharm={previewCharm} 
            />
            
            {/* Summary Strip - Absolute Positioned within Canvas Area */}
            {currentStep !== 'space' && placedCharms.length > 0 && (
                <div className="absolute bottom-4 right-0 z-50">
                    <SummaryOverlay 
                        charms={placedCharms}
                        onViewAll={() => setIsModalOpen(true)}
                    />
                </div>
            )}
        </div>

        {/* Summary Strip - Moved above into relative canvas area */}

        {/* Drawer / Spacing Controls - Responsive Height */}
        <div className="h-auto shrink-0 bg-[#F4EFE6] border-t border-[#E6DCC9] relative z-30 w-full pb-[calc(65px+env(safe-area-inset-bottom))]"> 
            {currentStep === 'space' ? (
                <div className="bg-[#F5EBDD] w-full py-6 flex flex-col items-center gap-6 rounded-t-[30px] shadow-lg px-6 pb-24">
                    
                    {/* Spacing Controls */}
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="text-[#1F4B30] text-sm font-medium">Select Spacing</h3>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => handleSpacingToggle('standard')} 
                                className={`flex-1 py-3 rounded-xl font-bold text-sm border shadow-sm transition-all ${spacingMode === 'standard' ? 'bg-[#DE3C27] text-white border-[#DE3C27]' : 'bg-white text-[#1F4B30] hover:bg-white/80'}`}
                            >
                                Standard
                            </button>
                            <button 
                                onClick={() => handleSpacingToggle('spaced')} 
                                className={`flex-1 py-3 rounded-xl font-bold text-sm border shadow-sm transition-all ${spacingMode === 'spaced' ? 'bg-[#DE3C27] text-white border-[#DE3C27]' : 'bg-white text-[#1F4B30] hover:bg-white/80'}`}
                            >
                                Spaced
                            </button>
                        </div>
                    </div>

                    {/* Note Input */}
                    <div className="w-full flex flex-col gap-2">
                         <h3 className="text-[#1F4B30] text-sm font-medium">Add a Note</h3>
                         <textarea 
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Have any instructions for us?"
                            className="w-full p-4 rounded-xl border-none shadow-inner bg-white text-sm focus:ring-2 focus:ring-[#DE3C27] outline-none min-h-[80px]"
                         />
                    </div>

                </div>
            ) : (
                <div className="w-full"> 
                    <SelectionDrawer {...drawerProps} />
                </div>
            )}
        </div>

      </main>

      {/* Floating WhatsApp */}
      <WhatsappFloating />

      <Footer 
        highlightedItem={
            currentStep === 'space' ? null : (
                highlightedItem 
                ? { name: highlightedItem.name, price: highlightedItem.price } 
                : (placedCharms.length > 0 ? { name: placedCharms[placedCharms.length - 1].charm.name, price: placedCharms[placedCharms.length - 1].charm.price } : null)
            )
        }
        defaultTotal={totalPrice}
        isFinalStep={currentStep === 'space'}
        onNext={() => {
            if (currentStep === 'charms') setCurrentStep('base');
            else if (currentStep === 'base') setCurrentStep('space');
        }}
        onAdd={() => {
            if (currentStep === 'space') {
                alert("Order added to cart with note: " + note);
            } else {
                const activeItem = highlightedItem || (placedCharms.length > 0 ? placedCharms[placedCharms.length - 1].charm : null);
                if (activeItem) {
                    if (currentStep === 'charms') handleCharmSelect(activeItem);
                    if (currentStep === 'base') handleBaseSelect(activeItem);
                }
            }
        }}
      />
    </div>
  );
}
