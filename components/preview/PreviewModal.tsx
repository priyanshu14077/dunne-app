import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import CharmOverlay from "./CharmOverlay";
import { Product, Charm, BASE_PRODUCTS } from "@/lib/mock-data";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  placedCharms: { charm: Charm; anchorId: string }[];
  initialBaseProduct: Product | null;
}

export default function PreviewModal({ 
  isOpen, 
  onClose, 
  placedCharms, 
  initialBaseProduct 
}: PreviewModalProps) {
  if (!isOpen) return null;

  const currentBaseProduct = BASE_PRODUCTS.find(p => p.id === selectedBaseId) || BASE_PRODUCTS[0];
  const charms = placedCharms.map(p => p.charm);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-[#F4EFE6] w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative animate-scale-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-black/60" />
        </button>

        {/* Left: Preview Area */}
        <div className="flex-1 bg-white relative flex items-center justify-center p-8 md:p-12">
            <CharmOverlay 
                baseProductId={currentBaseProduct.id}
                baseImageSrc={currentBaseProduct.image}
                selectedCharms={charms}
            />
        </div>

        {/* Right: Controls & Info */}
        <div className="w-full md:w-[320px] bg-[#F4EFE6] border-l border-[#E6DCC9] flex flex-col">
            <div className="p-6 border-b border-[#E6DCC9]">
                <h2 className="text-2xl font-normal text-[#1F4B30]" style={{ fontFamily: 'Neutra Text, sans-serif' }}>
                    Preview Design
                </h2>
                <p className="text-sm text-black/60 mt-2 font-sans">
                    See how your charms look on different base styles.
                </p>
            </div>

            {/* Controls Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">

                {/* Base Product Switcher */}
                <div>
                     <h3 className="text-xs font-bold uppercase tracking-wider text-black/40 mb-3">Base Product</h3>
                     <div className="grid grid-cols-2 gap-3">
                         {BASE_PRODUCTS.map(product => (
                             <button
                                key={product.id}
                                onClick={() => setSelectedBaseId(product.id)}
                                className={`
                                    relative flex flex-col items-center p-3 rounded-xl border transition-all duration-200
                                    ${selectedBaseId === product.id 
                                        ? 'bg-white border-[#1F4B30] shadow-md' 
                                        : 'bg-white/50 border-transparent hover:bg-white hover:border-[#1F4B30]/30'
                                    }
                                `}
                             >
                                 <div className="w-16 h-16 relative mb-2">
                                     <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                 </div>
                                 <span className="text-xs text-center font-medium leading-tight">
                                     {product.name}
                                 </span>
                                 {selectedBaseId === product.id && (
                                     <div className="absolute top-2 right-2 w-4 h-4 bg-[#1F4B30] rounded-full flex items-center justify-center">
                                         <Check className="w-2.5 h-2.5 text-white" />
                                     </div>
                                 )}
                             </button>
                         ))}
                     </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-[#E6DCC9]">
                 <button 
                    onClick={onClose}
                    className="w-full py-4 bg-[#1F4B30] text-white rounded-full font-bold hover:bg-[#163823] transition-colors"
                 >
                    Continue Customizing
                 </button>
            </div>
        </div>

      </div>
    </div>
  );
}
