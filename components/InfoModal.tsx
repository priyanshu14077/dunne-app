"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Product, Charm } from "@/lib/mock-data";

interface InfoModalProps {
  item: Product | Charm | null;
  onClose: () => void;
}

export default function InfoModal({ item, onClose }: InfoModalProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'specifications'>('about');
  
  if (!item) return null;

  const isCharm = 'category' in item;

  return (
    <div 
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal Container */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-[350px] h-[474px] rounded-[24px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500 flex flex-col"
      >
        {/* Tab Container (Top Section) */}
        <div className="w-[350px] h-[59px] flex items-center justify-between px-5 bg-transparent shrink-0">
          <div className="flex w-full gap-2">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-3 px-6 rounded-[20px] text-[14px] transition-all duration-200 font-sans ${
                activeTab === 'about' 
                  ? 'bg-[#F5EBDD] text-[#1F4B30] font-bold' 
                  : 'bg-white text-[#1F4B30]/70 font-semibold hover:bg-gray-50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`flex-1 py-3 px-6 rounded-[20px] text-[14px] transition-all duration-200 font-sans ${
                activeTab === 'specifications' 
                  ? 'bg-[#F5EBDD] text-[#1F4B30] font-bold' 
                  : 'bg-white text-[#1F4B30]/70 font-semibold hover:bg-gray-50'
              }`}
            >
              Specifications
            </button>
          </div>
        </div>

        {/* Content Container (Middle Section) */}
        <div className="w-[350px] h-[340px] pt-[10px] pb-5 px-5 overflow-y-auto scrollbar-hide flex-1">
          <h2 className="text-[18px] font-bold uppercase text-[#1F4B30] mb-4 font-sans leading-tight">
            {item.name}
          </h2>

          {activeTab === 'about' ? (
            <p className="text-[14px] leading-[1.6] text-black/80 font-sans font-normal">
              {item.description}
            </p>
          ) : (
            <ul className="space-y-2">
              {Object.entries(item.specifications).map(([key, value]) => {
                if (!value) return null;
                return (
                  <li 
                    key={key} 
                    className="text-[14px] leading-7 text-black/80 font-sans font-normal flex items-start"
                  >
                    <span className="mr-1.5">•</span>
                    <span>
                      <span className="capitalize">{key}</span>: {value}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer Container (Bottom Section) */}
        <div className="w-[350px] h-[75px] py-3 px-5 bg-white border-t border-gray-100 shrink-0 flex items-center justify-center">
          <button
            onClick={onClose}
            className="w-[80px] h-[50px] bg-[#DE3C27] text-white rounded-[30px] text-[16px] font-bold font-sans hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
