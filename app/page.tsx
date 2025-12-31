"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabNavigation from "@/components/TabNavigation";
import SelectionDrawer from "@/components/SelectionDrawer";
import JewelryCanvas from "@/components/JewelryCanvas";
import SelectedCharmsSidebar from "@/components/SelectedCharmsSidebar";
import { BASE_PRODUCTS, CHARMS, Product, Charm } from "@/lib/mock-data";
import { PRODUCT_ANCHORS } from "@/lib/anchors";

// Generic Whatsapp Icon
const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
        <path d="M.057 24l1.687-6.163c-3.138-5.748-1.2-12.86 5.567-16.145 6.766-3.284 14.887-.417 18.172 6.35 3.285 6.766.417 14.887-6.35 18.17-2.73 1.326-5.842 1.55-8.736.63L0 24zm12.92-19.16C7.575 4.84.975 9.18 3.515 14.41c.642 1.32.95 2.76.89 4.217l-.364 1.33 5.488-1.44c1.395.42 2.87.502 4.303.242 5.342-1.956 8.08-7.864 6.124-13.205-1.956-5.34-7.863-8.08-13.204-6.123h-.002z"/>
    </svg>
);

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

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

  const handleRandomize = () => {
    // Pick 3 random charms
    const randomCharms = [...CHARMS].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    // Clear and add them
    // Assuming we want to REPLACE? Or ADD? "Shuffles" usually means rearrange or pick new set.
    // Let's Add them to empty slots.
    
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
          return {
              type: 'charms' as const,
              items: CHARMS,
              activeCategory: activeCharmCategory,
              onCategoryChange: setActiveCharmCategory,
              onSelect: handleCharmSelect,
              onRandomize: handleRandomize,
              selectedIds: [] 
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
      <button className="fixed bottom-[96px] right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
          <WhatsappIcon />
      </button>
  );

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900 overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col relative bg-[#F9F9F9] h-full overflow-hidden"> 
        
        {/* Tab Nav - Fixed Top of Main */}
        <div className="flex-shrink-0 relative z-20 bg-[#F9F9F9]">
            <TabNavigation 
                currentStep={currentStep} 
                onStepChange={setCurrentStep}
                onInfoClick={() => {
                    if (highlightedItem) {
                        alert(`Metadata:\nName: ${highlightedItem.name}\nPrice: ₹${highlightedItem.price}\nID: ${highlightedItem.id}`);
                    } else {
                        alert("Please select a charm to view its details.");
                    }
                }}
            />
        </div>
        
        {/* Sidebar */}
        {isSidebarOpen && (
            <div className="absolute right-0 top-0 bottom-0 z-40 h-full flex">
                 <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setIsSidebarOpen(false)}></div>
                 <div className="relative z-40 h-full bg-white shadow-2xl animate-in slide-in-from-right duration-300">
                     <button onClick={() => setIsSidebarOpen(false)} className="absolute top-2 right-2 p-2">✕</button>
                     <div className="mt-8">
                        <SelectedCharmsSidebar 
                            selectedCharms={placedCharms}
                            onRemove={(id) => setPlacedCharms(placedCharms.filter(p => p.id !== id))}
                        />
                     </div>
                 </div>
            </div>
        )}

        {/* Canvas Area - Flex Grow to Fill */}
        <div className="flex-1 w-full relative min-h-0">
            <JewelryCanvas 
                baseProduct={selectedBase}
                placedCharms={placedCharms}
                spacingMode={spacingMode}
                onToggleSidebar={() => setIsSidebarOpen(true)}
            />
        </div>

        {/* Drawer / Spacing Controls - Constrained Container */}
        <div className="flex-shrink-0 relative z-30 w-full"> 
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
                <div className="h-[340px] w-full"> {/* Fixed height for drawer as per design proportion */}
                    <SelectionDrawer {...drawerProps} />
                </div>
            )}
        </div>

      </main>

      {/* Floating WhatsApp */}
      <WhatsappFloating />

      <Footer 
        highlightedItem={currentStep === 'space' ? null : (highlightedItem ? { name: highlightedItem.name, price: highlightedItem.price } : null)}
        defaultTotal={totalPrice}
        isFinalStep={currentStep === 'space'}
        onNext={() => {
            if (currentStep === 'charms') setCurrentStep('base');
            else if (currentStep === 'base') setCurrentStep('space');
        }}
        onAdd={() => {
            if (currentStep === 'space') {
                alert("Order added to cart with note: " + note);
            } else if (highlightedItem) {
                if (currentStep === 'charms') handleCharmSelect(highlightedItem);
                if (currentStep === 'base') handleBaseSelect(highlightedItem);
            }
        }}
      />
    </div>
  );
}
