
"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { decodeShareConfig, SharedConfig } from '@/lib/share-utils';
import { BASE_PRODUCTS, CHARMS, Product, Charm } from '@/lib/mock-data';
import JewelryCanvas from '@/components/JewelryCanvas';
import Header from '@/components/Header';
import { Suspense, useMemo } from 'react';
import { ArrowLeft, Plus, AlertCircle } from 'lucide-react';
import { PlacedCharmInstance } from '@/lib/types';

function SharedViewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const configParam = searchParams.get('config');

  const decoded = useMemo(() => {
    if (!configParam) return null;
    return decodeShareConfig(configParam);
  }, [configParam]);

  if (!decoded) {
    return (
      <div className="min-h-screen bg-[#F5EBDD] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-[32px] shadow-xl max-w-md w-full space-y-6">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="text-[#EF4444] w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[#1F4B30]">Invalid Design Link</h1>
            <p className="text-gray-500">
              The link you're using might be broken or expired. Start fresh and create your own design!
            </p>
          </div>
          <button 
            onClick={() => router.push('/')}
            className="w-full bg-[#1F4B30] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#1F4B30]/90 transition-all active:scale-95"
          >
            Create Your Own Design <Plus size={20} />
          </button>
        </div>
      </div>
    );
  }

  // Map IDs to full objects
  const baseProduct = BASE_PRODUCTS.find(p => p.id === decoded.baseId) || null;
  const placedCharms: PlacedCharmInstance[] = decoded.charms.map((c, i) => ({
    id: `shared-${c.charmId}-${i}`,
    charm: CHARMS.find(charm => charm.id === c.charmId) as Charm,
    anchorIndex: c.anchorIndex
  })).filter(c => !!c.charm);

  return (
    <div className="min-h-screen bg-[#F5EBDD] flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Sparkle / Decoration (matches landing) */}
        <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-lg bg-white rounded-[40px] shadow-2xl p-8 space-y-8 animate-in zoom-in-95 fade-in duration-700">
          <div className="text-center space-y-2">
            <div className="bg-[#1F4B30]/5 inline-block px-4 py-1.5 rounded-full text-[#1F4B30] text-xs font-bold uppercase tracking-widest mb-2">
              Shared Design
            </div>
            <h2 className="text-3xl font-bold text-[#1F4B30] tracking-tight">
              {baseProduct ? baseProduct.name : "Custom Design"}
            </h2>
            {decoded.note && (
              <p className="text-gray-600 italic text-sm">"{decoded.note}"</p>
            )}
          </div>

          <div className="bg-[#F9F9F9] rounded-[32px] overflow-hidden border border-gray-100 aspect-square flex items-center justify-center relative shadow-inner">
             <JewelryCanvas 
                baseProduct={baseProduct} 
                placedCharms={placedCharms} 
                spacingMode={decoded.spacingMode} 
                currentStep="space"
             />
          </div>

          <div className="flex flex-col gap-4 pt-4">
             <button 
                onClick={() => router.push('/')}
                className="w-full bg-[#1F4B30] text-white py-5 rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#1F4B30]/90 transition-all active:scale-95 shadow-lg"
              >
                Create Your Own Design <Plus size={24} />
              </button>
              
              <button 
                onClick={() => router.push('/')}
                className="w-full flex items-center justify-center gap-2 text-[#1F4B30]/60 font-bold hover:text-[#1F4B30] transition-colors"
                >
                <ArrowLeft size={18} /> Back to Customizer
              </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SharedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5EBDD] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1F4B30]"></div>
      </div>
    }>
      <SharedViewContent />
    </Suspense>
  );
}
