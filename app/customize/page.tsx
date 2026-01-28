"use client";

import { useState, useMemo, useEffect, useRef } from "react";
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
import { WalkthroughProvider, useWalkthrough } from "@/context/WalkthroughContext";
import WalkthroughOverlay from "@/components/WalkthroughOverlay";
import { BASE_PRODUCTS, CHARMS, Product, Charm } from "@/lib/mock-data";
import { STORAGE_BASE } from "@/lib/constants";
import { PRODUCT_ANCHORS } from "@/lib/anchor";
import { CONSTRAINTS } from "@/lib/design-tokens";
import { PlacedCharmInstance } from "@/lib/types";
import { addToShopifyCart, ShopifyCartItem } from "@/lib/shopify";

import { Check, Loader2, ShoppingCart } from "lucide-react";
import { toPng, toBlob } from "html-to-image";


export default function Home() {
  return (
    <WalkthroughProvider>
      <HomeContent />
    </WalkthroughProvider>
  );
}

function HomeContent() {
  const { setStepByPhase, isActive: isTourActive, triggerAction, currentStep: tourStep } = useWalkthrough();
  const [currentStep, setCurrentStep] = useState<'charms' | 'base' | 'space'>('charms');
  const noteRef = useRef<HTMLTextAreaElement>(null);

  const isCharm = (item: Product | Charm): item is Charm => {
    return typeof (item as Charm).category === "string";
  };

  const isCharmLike = (value: unknown): value is Charm => {
    if (!value || typeof value !== "object") return false;
    const maybeCharm = value as { category?: unknown };
    return typeof maybeCharm.category === "string";
  };

  // Ensure we never persist base products inside placedCharms.
  const filterCharmsOnly = (list: PlacedCharmInstance[]) =>
    list.filter((pc) => isCharmLike(pc.charm));

  const setPlacedCharmsSafe = (
    updater:
      | PlacedCharmInstance[]
      | ((prev: PlacedCharmInstance[]) => PlacedCharmInstance[])
  ) => {
    setPlacedCharms((prev) => {
      const next = typeof updater === "function" ? (updater as any)(prev) : updater;
      return filterCharmsOnly(next);
    });
  };
  
  // Audio Helper
  const playSelectSound = () => {
    try {
      const audio = new Audio(`${STORAGE_BASE}/sounds/sound.mp3`);
      audio.volume = 0.5;
      audio.play().catch(() => {}); // Ignore errors if file not found or browser blocks
    } catch (e) {}
  };
  
  const [previewedItem, setPreviewedItem] = useState<Product | Charm | null>(null);
  const [placedCharms, setPlacedCharms] = useState<PlacedCharmInstance[]>([]);
  
  const [baseCardStates, setBaseCardStates] = useState<Record<string, any>>({});
  const [selectedBase, setSelectedBase] = useState<Product | null>(null);
  
  // Existing state
  const [spacingMode, setSpacingMode] = useState<'standard' | 'spaced' | 'customize'>('standard');
  const [manualPlacedCharms, setManualPlacedCharms] = useState<PlacedCharmInstance[]>([]);
  const [note, setNote] = useState("");
  
  // Category state
  const [activeCharmCategory, setActiveCharmCategory] = useState("Eternal Bond");
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
  const [isAdding, setIsAdding] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Computed values
  const totalCharmCount = placedCharms.length;
  
  const charmQuantities = useMemo(() => {
    const counts: Record<string, number> = {};
    placedCharms.forEach(pc => {
      counts[pc.charm.id] = (counts[pc.charm.id] || 0) + 1;
    });
    return counts;
  }, [placedCharms]);

  const charmCardStates = useMemo(() => {
    const states: Record<string, any> = {};
    CHARMS.forEach(c => {
      if (previewedItem?.id === c.id) states[c.id] = 'preview';
      else if (charmQuantities[c.id]) states[c.id] = 'added';
      else states[c.id] = 'default';
    });
    return states;
  }, [charmQuantities, previewedItem]);

  const maxCharms = CONSTRAINTS.MAX_CHARMS;
  const maxReached = totalCharmCount >= maxCharms;

  // Price Calculation
  const charmsPrice = placedCharms.reduce((sum, pc) => sum + pc.charm.price, 0);
  const basePrice = selectedBase?.price || 0;
  const totalPrice = charmsPrice + basePrice;

  // Cart item count (charms + base)
  const cartItemCount = totalCharmCount + (selectedBase ? 1 : 0);

  // --- WALKTHROUGH TRIGGERS ---
  useEffect(() => {
    if (totalCharmCount === 1 && currentStep === 'charms') {
      setStepByPhase('interaction');
    }
  }, [totalCharmCount, currentStep, setStepByPhase]);

  useEffect(() => {
    if (currentStep === 'space') {
      setStepByPhase('finalization');
    }
  }, [currentStep, setStepByPhase]);

  // --- CHARM HANDLERS ---
  
  const handleCharmBodyClick = (item: Product | Charm) => {
    if (!isCharm(item)) return;
    setPreviewedItem(item);
  };

  const handleCharmAdd = (item: Product | Charm) => {
    if (!isCharm(item)) return;
    if (maxReached) {
      triggerToast();
      return;
    }

    const charm = item;
    // Find first available anchor index (0-8)
    const occupiedIndices = new Set(placedCharms.map(pc => pc.anchorIndex));
    let nextIndex = 0;
    while (occupiedIndices.has(nextIndex) && nextIndex < 9) {
      nextIndex++;
    }

    if (nextIndex >= 9) return;

    const newInstance: PlacedCharmInstance = {
      id: `inst-${charm.id}-${Date.now()}`,
      charm,
      anchorIndex: nextIndex
    };

    setPlacedCharmsSafe(prev => {
      const nextArr = [...prev].sort((a,b) => a.anchorIndex - b.anchorIndex).concat(newInstance).sort((a,b) => a.anchorIndex - b.anchorIndex);
      if (spacingMode === 'standard') setManualPlacedCharms(nextArr);
      return nextArr;
    });
    setPreviewedItem(null);
    playSelectSound();
  };

  const handleCharmIncrement = (item: Product | Charm) => {
    handleCharmAdd(item);
  };

  const handleCharmRemove = (instanceId: string) => {
    const instance = placedCharms.find(pc => pc.id === instanceId);
    if (!instance) {
       // Check if it's a charmId (from the drawer)
       const lastOfId = [...placedCharms].reverse().find(pc => pc.charm.id === instanceId);
       if (lastOfId) {
        setPlacedCharmsSafe(prev => {
            const next = prev.filter(pc => pc.id !== lastOfId.id);
            if (spacingMode === 'standard') setManualPlacedCharms(next);
            return next;
         });
       }
       return;
    }
    
    setPlacedCharmsSafe(prev => {
      const next = prev.filter(pc => pc.id !== instanceId);
      if (spacingMode === 'standard') setManualPlacedCharms(next);
      return next;
    });
  };

  const confirmCharmRemoval = () => {
    const { itemId } = deleteConfirmation;
    handleCharmRemove(itemId);
    setDeleteConfirmation({ isOpen: false, itemId: '', itemName: '' });
  };

  const handleReset = () => {
    setPlacedCharmsSafe([]);
    setManualPlacedCharms([]);
    setPreviewedItem(null);
  };

  const handleRandomize = () => {
    if (maxReached) {
      triggerToast();
      return;
    }

    const randomCharms = [...CHARMS].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    randomCharms.forEach((charm, i) => {
      if (totalCharmCount + i < maxCharms) {
         setPlacedCharmsSafe(prev => {
            const occupied = new Set(prev.map(p => p.anchorIndex));
            let idx = 0;
            while(occupied.has(idx) && idx < 9) idx++;
            if (idx < 9) {
               const next = [...prev, { id: `inst-${charm.id}-${Date.now()}-${i}`, charm, anchorIndex: idx }];
               if (spacingMode === 'standard') setManualPlacedCharms(next);
               return next;
            }
            return prev;
         });
      }
    });
  };

  const handleUpdateAnchor = (instanceId: string, newIndex: number) => {
    setPlacedCharmsSafe(prev => {
      const target = prev.find(p => p.id === instanceId);
      if (!target) return prev;

      // Swap logic if target anchor is occupied
      const existingAtNew = prev.find(p => p.anchorIndex === newIndex);
      let nextArr: PlacedCharmInstance[];
      if (existingAtNew) {
        nextArr = prev.map(p => {
          if (p.id === instanceId) return { ...p, anchorIndex: newIndex };
          if (p.id === existingAtNew.id) return { ...p, anchorIndex: target.anchorIndex };
          return p;
        });
      } else {
        nextArr = prev.map(p => p.id === instanceId ? { ...p, anchorIndex: newIndex } : p);
      }

      setManualPlacedCharms(nextArr);
      setSpacingMode('standard'); // Dragging manually enters standard mode
      return nextArr;
    });
  };

  const handleReorderList = (newOrderIds: string[]) => {
    setPlacedCharmsSafe(prev => {
      // Reorder means reassigning ALL occupied anchor indices based on the new order of instances
      const occupiedIndices = [...prev].sort((a,b) => a.anchorIndex - b.anchorIndex).map(p => p.anchorIndex);
      
      const newItems = newOrderIds.map((id, i) => {
        const item = prev.find(p => p.id === id);
        if (!item) return null;
        return { ...item, anchorIndex: occupiedIndices[i] };
      }).filter(Boolean) as PlacedCharmInstance[];

      setManualPlacedCharms(newItems);
      setSpacingMode('standard'); // Reordering manually enter standard mode
      return newItems;
    });
  };

  // --- BASE HANDLERS ---
  
  const handleBaseBodyClick = (item: Product | Charm) => {
    const product = item as Product;
    setPreviewedItem(product);
    
    // Clear any existing preview states before setting the new one
    setBaseCardStates(prev => {
      const newStates = { ...prev };
      Object.keys(newStates).forEach(id => {
        if (newStates[id] === 'preview') {
          newStates[id] = 'default';
        }
      });

      // Update card state to preview if not already selected
      if (!selectedBase || selectedBase.id !== product.id) {
        newStates[product.id] = 'preview';
      }
      return newStates;
    });
  };

  const handleBaseAdd = (item: Product | Charm) => {
    const product = item as Product;
    setSelectedBase(product);
    setBaseCardStates({ [product.id]: 'added' });
    setPreviewedItem(null);
    playSelectSound();
  };

  const handleBaseRemove = (productId: string) => {
    if (selectedBase?.id === productId) {
      setSelectedBase(null);
      setBaseCardStates({});
    }
  };

  // --- NAVIGATION ---

  // Helper to determine which base product to show on the canvas
  const baseToDisplay = useMemo(() => {
    // Keep the selected base visible even when navigating back to charms,
    // so step navigation doesn't "reset" the user's visual context.
    if (currentStep === 'charms') return selectedBase;
    
    // In Step 2 (Base Selection), prefer the previewed item if it's a base product
    if (currentStep === 'base' && previewedItem && 'type' in previewedItem) {
      return previewedItem as Product;
    }
    
    return selectedBase;
  }, [currentStep, previewedItem, selectedBase]);
  
  const handleNavigate = () => {
    if (currentStep === 'charms') {
      triggerAction('navigate');
      setCurrentStep('base');
    } else if (currentStep === 'base') {
      // Clear preview when moving to space step if it's a base preview
      if (previewedItem && 'type' in previewedItem) {
        setPreviewedItem(null);
        // Also clear the preview card state
        setBaseCardStates(prev => {
          const newStates = { ...prev };
          Object.keys(newStates).forEach(id => {
            if (newStates[id] === 'preview') newStates[id] = 'default';
          });
          return newStates;
        });
      }
      setCurrentStep('space');
    } else if (currentStep === 'space') {
      handleAddToCart();
    }
  };

  const handleAddToCart = async () => {
    if (!selectedBase) return;
    
    setIsAdding(true);
    setCheckoutError(null);

    const designId = `design-${Date.now()}`;
    const items: ShopifyCartItem[] = [];

    // --- Visual Preview Capture & Upload ---
    let designPreviewUrl = "";
    try {
      const element = document.getElementById("jewelry-design-canvas");
      if (element) {
        const blob = await toBlob(element, { 
          backgroundColor: '#ffffff', 
          cacheBust: true,
          skipFonts: true,
          pixelRatio: 2
        });

        if (blob) {
          const formData = new FormData();
          formData.append("file", blob, `${designId}.png`);
          formData.append("designId", designId);

          const uploadRes = await fetch("/api/upload-preview", {
            method: "POST",
            body: formData,
          });

          if (uploadRes.ok) {
            const uploadData = await uploadRes.json();
            designPreviewUrl = uploadData.imageUrl;
          }
        }
      }
    } catch (err: any) {
      console.error("Capture/Upload process failed:", err);
    }

    // Add Base Product
    if (selectedBase.handle || selectedBase.variantId) {
      items.push({
        variantId: selectedBase.variantId,
        handle: selectedBase.handle,
        quantity: 1,
        properties: {
          '_Design ID': designId,
          '_image': designPreviewUrl,
          'Design Preview': designPreviewUrl,
          'Type': 'Base Product',
          'Custom Note': note,
          'Spacing Mode': spacingMode
        }
      });
    }

    // Add Charms
    placedCharms.forEach((pc, idx) => {
      if (pc.charm.handle || pc.charm.variantId) {
        items.push({
          variantId: pc.charm.variantId,
          handle: pc.charm.handle,
          quantity: 1,
          properties: {
            '_Design ID': designId,
            '_image': designPreviewUrl,
            'Type': 'Charm',
            'Position': (pc.anchorIndex + 1).toString(),
            'Linked To': selectedBase.name,
            [`Charm ${idx + 1} Name`]: pc.charm.name
          }
        });
      }
    });

    const result = await addToShopifyCart(items);

    if (result.success && result.url) {
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = result.url as string;
      }, 1500);
    } else {
      setCheckoutError(result.message || "Failed to add items to cart.");
      setIsAdding(false);
    }
  };

  const handleBack = () => {
    if (currentStep === 'base') {
      setCurrentStep('charms');
      // Don't mutate selections when navigating; only clear base *preview* state.
      if (previewedItem && 'type' in previewedItem) {
        setPreviewedItem(null);
        setBaseCardStates(prev => {
          const next = { ...prev };
          Object.keys(next).forEach(id => {
            if (next[id] === 'preview') next[id] = 'default';
          });
          return next;
        });
      }

      // Safety: ensure only charms live inside placedCharms (prevents "random bracelet" showing up in the selected list).
    setPlacedCharmsSafe(prev => prev);
      setManualPlacedCharms(prev => prev.filter(pc => isCharmLike(pc.charm)));
    } else if (currentStep === 'space') {
      setCurrentStep('base');
    }
  };

  const handleSpacingToggle = (mode: 'standard' | 'spaced' | 'customize') => {
    // Notify walkthrough
    triggerAction('done');

    if (mode === 'customize') {
      setTimeout(() => {
        noteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        noteRef.current?.focus();
      }, 100);
    }

    if (mode === 'standard') {
      setPlacedCharmsSafe(manualPlacedCharms);
      setSpacingMode('standard');
      return;
    }

    setSpacingMode(mode);
    if (mode === 'spaced' && placedCharms.length > 0) {
       // Save current as manual before applying space
       setManualPlacedCharms([...placedCharms]);
       
       const n = placedCharms.length;
       const indices: number[] = [];
       if (n === 1) indices.push(4);
       else if (n === 2) indices.push(0, 8);
       else if (n === 3) indices.push(0, 4, 8);
       else if (n === 4) indices.push(0, 2, 6, 8);
       else if (n === 5) indices.push(0, 2, 4, 6, 8);
       else if (n === 6) indices.push(0, 1, 3, 5, 7, 8);
       else if (n === 7) indices.push(0, 1, 2, 4, 6, 7, 8);
       else if (n === 8) indices.push(0, 1, 2, 3, 5, 6, 7, 8);
       else if (n >= 9) indices.push(0, 1, 2, 3, 4, 5, 6, 7, 8);

       setPlacedCharms(prev => {
          const sorted = [...prev].sort((a,b) => a.anchorIndex - b.anchorIndex);
          return sorted.map((p, i) => ({ ...p, anchorIndex: indices[i] }));
       });
    }
  };


  return (
    <div className="flex flex-col h-[100dvh] bg-white font-sans text-slate-900 overflow-hidden pb-0">
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
          baseProduct={baseToDisplay}
          placedCharms={placedCharms}
          spacingMode={spacingMode}
          previewCharm={previewedItem && 'category' in previewedItem ? (previewedItem as Charm) : null}
          currentStep={currentStep}
          onUpdateAnchor={handleUpdateAnchor}
          onActionTrigger={() => triggerAction('drag')}
        />
      </div>

      {/* View All Section - Positioned exactly ABOVE the green navigation bar */}
      {(totalCharmCount > 0 || (isTourActive && tourStep === 1)) && (
        <div className="flex-shrink-0 bg-white">
           <SummaryOverlay 
             charms={placedCharms}
             onViewAll={() => setIsModalOpen(true)}
           />
        </div>
      )}

      {/* 4. Total Value Bar (Strict Requirement: h-12 Static Block) */}
      <div className="flex-shrink-0 h-auto min-h-[48px] py-1 w-full bg-[#1F4B30] relative flex items-center px-[30px]">
        {/* Back Arrow (Left-aligned with 30px padding) */}
        {((currentStep === 'base' || currentStep === 'space') || (isTourActive && (tourStep === 3 || tourStep === 6))) && (
          <button 
            id="walkthrough-back-arrow"
            onClick={handleBack}
            className={`flex items-center justify-center text-white hover:opacity-70 transition-opacity ${
              // Opacity 100 if interacting normally OR if tour is highlighting it (Step 3 or 6)
              ((currentStep === 'base' || currentStep === 'space') || (isTourActive && (tourStep === 3 || tourStep === 6))) ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
        )}

        {/* Centered Price Section */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-white text-center">
          <span className="text-[12px] opacity-90 mb-0.5" style={{ fontFamily: 'Neutra Text, sans-serif' }}>Cart Value</span>
          <span className="text-[14px] font-bold leading-none" style={{ fontFamily: 'Manrope, sans-serif' }}>₹{totalPrice.toFixed(0)}</span>
        </div>

        {/* Forward Arrow (Right-aligned with 30px padding) */}
        {/* Always visible if charms > 0 OR if tour is highlighting it (Step 1) OR potentially later steps */}
        {(totalCharmCount > 0 || (isTourActive && (tourStep === 1 || tourStep === 6))) && (
          <button
            id="walkthrough-next-arrow"
            onClick={handleNavigate}
            disabled={(currentStep === 'base' && !selectedBase) || (currentStep === 'charms' && totalCharmCount === 0)}
            className={`ml-auto flex items-center justify-center text-white hover:opacity-70 transition-opacity ${
              ((currentStep === 'base' && !selectedBase) || (currentStep === 'charms' && totalCharmCount === 0 && !isTourActive)) 
              ? 'opacity-30 cursor-not-allowed' 
              : (isTourActive && tourStep === 1) 
                ? 'opacity-100' 
                : ''
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        )}
      </div>

      {/* 5. Product Card Carousel (Very bottom of flow) */}
      <div className="flex-shrink-0 bg-[#F5EBDD] w-full lg:h-[265px] h-[235px] flex flex-col pb-[env(safe-area-inset-bottom)]">
        {currentStep === 'space' ? (
          <div className="w-full flex-1 flex flex-col gap-0">
            {/* Header: Spacing Buttons (Matching category tabs) */}
            <div 
              id="walkthrough-spacing"
              className="w-full px-1 flex items-center justify-center min-h-[50px] lg:min-h-[60px] py-1"
            >
              <div className="flex items-center justify-center gap-4 mx-auto">
                {(['standard', 'spaced', 'customize'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => handleSpacingToggle(mode)}
                    className={`
                      px-6 py-2 lg:px-8 lg:py-2.5 
                      rounded-full text-[14px] font-normal transition-all duration-300
                      ${spacingMode === mode 
                        ? 'border-[0.5px] border-black text-black bg-transparent shadow-sm' 
                        : 'bg-transparent text-black/60 hover:text-black'
                      }
                    `}
                    style={{ fontFamily: 'Neutra Text, sans-serif' }}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-black text-[15px] font-normal mb-[10px] uppercase tracking-wider" style={{ fontFamily: 'Neutra Text, sans-serif' }}>
                 Add a Note
              </h3>
              <textarea 
                ref={noteRef} 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Have any instructions for us?"
                className="w-full max-w-[340px] lg:max-w-[876px] h-[120px] lg:h-[135px] p-4 rounded-[20px] border-none shadow-sm bg-[#F4EFE6] text-sm focus:ring-0 outline-none resize-none placeholder:text-gray-500/50"
                style={{ fontFamily: 'Manrope, sans-serif' }}
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
            onIncrement={currentStep === 'charms' ? handleCharmIncrement : undefined}
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
          selectedCharms={[...placedCharms].sort((a,b) => a.anchorIndex - b.anchorIndex)}
          onClose={() => setIsModalOpen(false)}
          onRemove={handleCharmRemove}
          onAddAnother={(charm) => handleCharmAdd(charm)}
          onReset={handleReset}
          onReorder={handleReorderList}
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
      {/* Checkout Loading/Success Overlay */}
      {(isAdding || isSuccess) && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
          <div className="bg-[#F4EFE6] w-full max-w-sm p-12 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center animate-scale-in">
            {isSuccess ? (
              <>
                <div className="w-20 h-20 bg-[#1F4B30] rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F4B30] mb-2">Added to Cart!</h3>
                <p className="text-black/60">Redirecting to checkout...</p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Loader2 className="w-10 h-10 text-[#1F4B30] animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F4B30] mb-2">Processing...</h3>
                <p className="text-black/60">Linking your custom design with your cart.</p>
              </>
            )}
            
            {checkoutError && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                {checkoutError}
                <button 
                  onClick={() => setIsAdding(false)} 
                  className="block w-full mt-2 font-bold underline"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Walkthrough Overlay */}
      <WalkthroughOverlay />
    </div>
  );
}

