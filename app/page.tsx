"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabNavigation from "@/components/TabNavigation";
import SelectionDrawer from "@/components/SelectionDrawer";
import JewelryCanvas from "@/components/JewelryCanvas";
import SelectedCharmsModal from "@/components/SelectedCharmsModal";
import SummaryOverlay from "@/components/SummaryOverlay";
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
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // Initial Logic: Random charm on land
  useEffect(() => {
    // Landing state: No base selected, only one random charm icon shown
    if (placedCharms.length === 0) {
      const randomCharm = CHARMS[Math.floor(Math.random() * CHARMS.length)];
      
      // Since no base is selected, we use a temporary anchor ID for the clustering logic
      const targetAnchorId = `init-${Date.now()}`;
      
      setPlacedCharms([{ 
        charm: randomCharm, 
        anchorId: targetAnchorId, 
        id: `init-${Date.now()}` 
      }]);
    }
  }, []);

  // Price Calculation
  const basePrice = selectedBase?.price || 0;
  const charmsPrice = placedCharms.reduce((sum, item) => sum + item.charm.price, 0);
  const totalPrice = basePrice + charmsPrice;

  // --- Handlers ---
  const handleBaseSelect = (item: Product | Charm) => {
    const product = item as Product;
    setSelectedBase(product);
    setHighlightedItem(product);
  };

  const handleCharmSelect = (item: Product | Charm) => {
    const charm = item as Charm;
    setHighlightedItem(charm);
    
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
              onSelect: handleCharmSelect,
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
      <button className="fixed bottom-[110px] right-6 z-50 hover:scale-110 transition-transform active:scale-95">
          <img src="/icons/web-icons-clean/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
      </button>
  );

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900 overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col relative bg-white h-full overflow-hidden"> 
        
        {/* Tab Nav - Fixed Top of Main */}
        <div className="flex-shrink-0 relative z-20 bg-white">
            <TabNavigation 
                currentStep={currentStep} 
                onStepChange={setCurrentStep}
                onInfoClick={() => {
                        const activeItem = highlightedItem || (placedCharms.length > 0 ? placedCharms[placedCharms.length - 1].charm : null);
                        if (activeItem) {
                            alert(`Metadata:\nName: ${activeItem.name}\nPrice: ₹${activeItem.price}\nID: ${activeItem.id}`);
                        } else {
                            alert("Select a charm to view details.");
                        }
                }}
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

        {/* Canvas Area - Flex Grow to Fill */}
        <div className="flex-1 w-full relative min-h-0 bg-white">
            <JewelryCanvas 
                baseProduct={selectedBase}
                placedCharms={placedCharms}
                spacingMode={spacingMode}
            />
        </div>

        {/* Summary Strip - Statically Positioned between Canvas and Drawer */}
        {currentStep !== 'space' && placedCharms.length > 0 && (
            <SummaryOverlay 
                charms={placedCharms}
                onViewAll={() => setIsModalOpen(true)}
            />
        )}

        {/* Drawer / Spacing Controls - Constrained Container */}
        <div className="h-[375px] bg-[#F4EFE6] border-t border-[#E6DCC9] relative z-30 w-full"> 
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
                <div className="h-[360px] w-full"> {/* Fixed height for drawer as per design proportion */}
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
