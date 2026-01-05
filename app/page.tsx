"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import SelectionDrawer from "@/components/SelectionDrawer";
import JewelryCanvas from "@/components/JewelryCanvas";
import SelectedCharmsModal from "@/components/SelectedCharmsModal";
import SummaryOverlay from "@/components/SummaryOverlay";
import InfoModal from "@/components/InfoModal";
import ShareModal from "@/components/ShareModal";
import CartBar from "@/components/CartBar";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationDialog";
import { BASE_PRODUCTS, CHARMS, Product, Charm } from "@/lib/mock-data";
import { PRODUCT_ANCHORS } from "@/lib/anchors";
import { CardState } from "@/components/CharmCard";
import { CONSTRAINTS } from "@/lib/design-tokens";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'charms' | 'base' | 'space'>('charms');
  
  // NEW State Structure for 3-state system
  const [charmCardStates, setCharmCardStates] = useState<Record<string, CardState>>({});
  const [charmQuantities, setCharmQuantities] = useState<Record<string, number>>({});
  
  const [baseCardStates, setBaseCardStates] = useState<Record<string, CardState>>({});
  const [selectedBase, setSelectedBase] = useState<Product | null>(null);
  
  const [previewedItem, setPreviewedItem] = useState<Product | Charm | null>(null);
  
  // Existing state
  const [spacingMode, setSpacingMode] = useState<'standard' | 'spaced'>('standard');
  const [note, setNote] = useState("");
  
  // Category state
  const [activeCharmCategory, setActiveCharmCategory] = useState("Eternal Bloom");
  const [activeBaseCategory, setActiveBaseCategory] = useState("Bracelets");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [infoItem, setInfoItem] = useState<Product | Charm | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    itemId: string;
    itemName: string;
  }>({ isOpen: false, itemId: '', itemName: '' });
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Computed values
  const totalCharmCount = Object.values(charmQuantities).reduce((sum, qty) => sum + qty, 0);
  const maxCharms = CONSTRAINTS.MAX_CHARMS;
  const maxReached = totalCharmCount >= maxCharms;

  // Convert to placedCharms for compatibility with existing components
  const placedCharms = Object.entries(charmQuantities).flatMap(([charmId, qty]) => {
    const charm = CHARMS.find(c => c.id === charmId);
    if (!charm) return [];
    return Array.from({ length: qty }, (_, i) => ({
      charm,
      anchorId: `anchor-${charmId}-${i}`,
      id: `inst-${charmId}-${i}`
    }));
  });

  // Price Calculation
  const charmsPrice = Object.entries(charmQuantities).reduce((sum, [charmId, qty]) => {
    const charm = CHARMS.find(c => c.id === charmId);
    return sum + (charm ? charm.price * qty : 0);
  }, 0);
  const basePrice = selectedBase?.price || 0;
  const totalPrice = charmsPrice + basePrice;

  // Cart item count (charms + base)
  const cartItemCount = totalCharmCount + (selectedBase ? 1 : 0);

  // --- CHARM HANDLERS ---
  
  const handleCharmBodyClick = (item: Product | Charm) => {
    const charm = item as Charm;
    setPreviewedItem(charm);
    
    // Update card state to preview if not already added
    if (!charmCardStates[charm.id] || charmCardStates[charm.id] === 'default') {
      setCharmCardStates(prev => ({ ...prev, [charm.id]: 'preview' }));
    }
  };

  const handleCharmAdd = (item: Product | Charm) => {
    if (maxReached) {
      triggerToast();
      return;
    }

    const charm = item as Charm;
    setCharmCardStates(prev => ({ ...prev, [charm.id]: 'added' }));
    setCharmQuantities(prev => ({ ...prev, [charm.id]: (prev[charm.id] || 0) + 1 }));
    setPreviewedItem(null); // Clear preview after adding
  };

  const handleCharmIncrement = (item: Product | Charm) => {
    if (maxReached) {
      triggerToast();
      return;
    }

    const charm = item as Charm;
    setCharmQuantities(prev => ({ ...prev, [charm.id]: (prev[charm.id] || 0) + 1 }));
  };

  const handleCharmRemove = (charmId: string) => {
    const quantity = charmQuantities[charmId] || 0;
    const charm = CHARMS.find(c => c.id === charmId);
    
    // Show confirmation only if this is the last charm (quantity will become 0)
    if (quantity === 1) {
      setDeleteConfirmation({
        isOpen: true,
        itemId: charmId,
        itemName: charm?.name || 'this charm'
      });
    } else {
      // Decrement directly
      const newQty = quantity - 1;
      setCharmQuantities(prev => ({ ...prev, [charmId]: newQty }));
      
      if (newQty === 0) {
        setCharmCardStates(prev => ({ ...prev, [charmId]: 'default' }));
      }
    }
  };

  const confirmCharmRemoval = () => {
    const { itemId } = deleteConfirmation;
    setCharmQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
    setCharmCardStates(prev => ({ ...prev, [itemId]: 'default' }));
    setDeleteConfirmation({ isOpen: false, itemId: '', itemName: '' });
  };

  const handleReset = () => {
    setCharmQuantities({});
    setCharmCardStates({});
    setPreviewedItem(null);
  };

  const handleRandomize = () => {
    if (maxReached) {
      triggerToast();
      return;
    }

    const randomCharms = [...CHARMS].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    randomCharms.forEach(charm => {
      if (totalCharmCount < maxCharms) {
        setCharmCardStates(prev => ({ ...prev, [charm.id]: 'added' }));
        setCharmQuantities(prev => ({ ...prev, [charm.id]: (prev[charm.id] || 0) + 1 }));
      }
    });
  };

  // --- BASE HANDLERS ---
  
  const handleBaseBodyClick = (item: Product | Charm) => {
    const product = item as Product;
    setPreviewedItem(product);
    
    // Update card state to preview if not already selected
    if (!selectedBase || selectedBase.id !== product.id) {
      setBaseCardStates({ [product.id]: 'preview' });
    }
  };

  const handleBaseAdd = (item: Product | Charm) => {
    const product = item as Product;
    setSelectedBase(product);
    setBaseCardStates({ [product.id]: 'added' });
    setPreviewedItem(null);
  };

  const handleBaseRemove = (productId: string) => {
    if (selectedBase?.id === productId) {
      setSelectedBase(null);
      setBaseCardStates({});
    }
  };

  // --- NAVIGATION ---
  
  const handleNavigate = () => {
    if (currentStep === 'charms') {
      setCurrentStep('base');
    } else if (currentStep === 'base') {
      setCurrentStep('space');
    }
  };

  const handleSpacingToggle = (mode: 'standard' | 'spaced') => {
    setSpacingMode(mode);
  };


  return (
    <div className="flex flex-col h-[100dvh] bg-white font-sans text-slate-900 overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-[#DE3C27] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-modal-slide-up select-none pointer-events-none lg:pointer-events-auto">
           <span className="font-bold text-sm lg:text-base whitespace-nowrap" style={{ fontFamily: 'Manrope, sans-serif' }}>Maximum 9 charms reached</span>
           <button onClick={() => setShowToast(false)} className="hover:opacity-70 transition-opacity hidden lg:block">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
        </div>
      )}

      {/* 1. Header Area (Static) */}
      <div className="flex-shrink-0 bg-white pt-[10px]">
        <TabNavigation 
          currentStep={currentStep} 
          onStepChange={setCurrentStep}
          onInfoClick={() => {
            let itemToShow: Product | Charm | null = previewedItem;
            if (!itemToShow && placedCharms.length > 0) {
              itemToShow = placedCharms[placedCharms.length - 1].charm;
            } else if (!itemToShow && selectedBase) {
              itemToShow = selectedBase;
            }
            if (itemToShow) {
              setInfoItem(itemToShow);
              setIsInfoModalOpen(true);
            }
          }}
          onShareClick={() => setIsShareModalOpen(true)}
        />
      </div>

      {/* 2. Canvas Area (Middle - fills available space) */}
      <div className="flex-1 w-full bg-white relative min-h-0 flex items-center justify-center overflow-hidden">
        <JewelryCanvas 
          baseProduct={currentStep === 'charms' ? null : selectedBase}
          placedCharms={placedCharms}
          spacingMode={spacingMode}
          previewCharm={previewedItem as Charm | null}
        />
      </div>

      {/* View All Section - Positioned exactly ABOVE the green navigation bar */}
      {currentStep === 'charms' && totalCharmCount > 0 && (
        <div className="flex-shrink-0 bg-white pt-2">
           <SummaryOverlay 
             charms={placedCharms}
             onViewAll={() => setIsModalOpen(true)}
           />
        </div>
      )}

      {/* 4. Total Value Bar (Strict Requirement: h-12 Static Block) */}
      <div className="flex-shrink-0 h-12 w-full bg-[#1F4B30] flex items-center justify-center px-6">
        <button
          onClick={handleNavigate}
          disabled={totalCharmCount === 0}
          className={`
            w-full max-w-[400px] flex items-center justify-between transition-all duration-300
            ${totalCharmCount > 0 ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}
          `}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          <div className="flex flex-col items-start leading-none text-white">
            <span className="text-[10px] opacity-80 uppercase tracking-wider mb-0.5">Total Value</span>
            <span className="text-[18px] font-extrabold">₹{totalPrice.toFixed(0)}</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-sm font-bold uppercase tracking-widest">{currentStep === 'charms' ? 'Select Base' : 'Select Spacing'}</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </button>
      </div>

      {/* 5. Product Card Carousel (Very bottom of flow) */}
      <div className="flex-shrink-0 bg-[#F5EBDD]">
        {currentStep === 'space' ? (
          <div className="w-full py-4 lg:py-6 flex flex-col items-center gap-3 lg:gap-6 px-6">
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
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-[#1F4B30] text-sm font-medium">Add a Note</h3>
              <textarea 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Have any instructions for us?"
                className="w-full p-4 rounded-xl border-none shadow-inner bg-white text-sm focus:ring-2 focus:ring-[#DE3C27] outline-none min-h-[60px]"
              />
            </div>
          </div>
        ) : (
          <SelectionDrawer 
            type={currentStep === 'charms' ? 'charms' : 'base'}
            items={currentStep === 'charms' ? CHARMS : BASE_PRODUCTS}
            cardStates={currentStep === 'charms' ? charmCardStates : baseCardStates}
            quantities={currentStep === 'charms' ? charmQuantities : {}}
            onCardBodyClick={currentStep === 'charms' ? handleCharmBodyClick : handleBaseBodyClick}
            onAdd={currentStep === 'charms' ? handleCharmAdd : handleBaseAdd}
            onIncrement={handleCharmIncrement}
            onRemove={currentStep === 'charms' ? handleCharmRemove : handleBaseRemove}
            activeCategory={currentStep === 'charms' ? activeCharmCategory : activeBaseCategory}
            onCategoryChange={currentStep === 'charms' ? setActiveCharmCategory : setActiveBaseCategory}
            onRandomize={currentStep === 'charms' ? handleRandomize : undefined}
            maxReached={maxReached}
          />
        )}
      </div>

      {/* Modals placed outside main flow */}
      {isModalOpen && (
        <SelectedCharmsModal 
          selectedCharms={placedCharms}
          onClose={() => setIsModalOpen(false)}
          onRemove={(instanceId) => {
            const charmId = instanceId.split('-')[1];
            if (charmId) handleCharmRemove(charmId);
          }}
          onAddAnother={(charm) => handleCharmAdd(charm)}
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
      <DeleteConfirmationDialog 
        isOpen={deleteConfirmation.isOpen}
        onClose={() => setDeleteConfirmation({ isOpen: false, itemId: '', itemName: '' })}
        onConfirm={confirmCharmRemoval}
        itemName={deleteConfirmation.itemName}
      />
    </div>
  );
}
