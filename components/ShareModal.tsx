
"use client";

import { X, Copy, Check, Share2, MessageCircle, Facebook, Twitter, Mail } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Product, Charm } from "@/lib/mock-data";
import { generateShareURL, SharedConfig } from "@/lib/share-utils";
import { PlacedCharmInstance } from "../app/page";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBase: Product | null;
  placedCharms: PlacedCharmInstance[];
  spacingMode: 'standard' | 'spaced' | 'customize';
  note?: string;
}

export default function ShareModal({ 
  isOpen, 
  onClose, 
  selectedBase, 
  placedCharms, 
  spacingMode,
  note 
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  // Memoize the URL generation to prevent recalculation on every render
  const shareURL = useMemo(() => {
    if (!isOpen) return "";
    const config: SharedConfig = {
      baseId: selectedBase?.id || null,
      charms: placedCharms.map(pc => ({
        charmId: pc.charm.id,
        anchorIndex: pc.anchorIndex
      })),
      spacingMode,
      note
    };
    return generateShareURL(config);
  }, [isOpen, selectedBase, placedCharms, spacingMode, note]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-[440px] rounded-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500"
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#1F4B30] to-[#2A5E3F] px-8 py-6 text-white relative">
          <h2 className="text-xl font-bold font-sans">Share Your Design</h2>
          <p className="text-white/70 text-sm mt-1">Anyone with this link can view your creation</p>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          {/* Design Preview Card */}
          <div className="bg-[#F5EBDD] rounded-2x p-5 flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Share2 className="text-[#1F4B30] w-8 h-8" />
            </div>
            <div>
              <h3 className="text-[#1F4B30] font-bold text-lg leading-tight">
                {selectedBase ? selectedBase.name : "Custom Design"}
              </h3>
              <p className="text-[#1F4B30]/60 text-sm font-medium">
                {placedCharms.length} {placedCharms.length === 1 ? 'Charm' : 'Charms'} Added
              </p>
            </div>
          </div>

          {/* URL Input Area */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#1F4B30] pl-1">Sharable Link</label>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {shareURL}
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-sm ${
                  copied 
                    ? 'bg-[#10B981] text-white' 
                    : 'bg-[#1F4B30] text-white hover:bg-[#1F4B30]/90 active:scale-95'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={18} strokeWidth={3} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Grid */}
          <div className="pt-4">
            <label className="text-sm font-bold text-[#1F4B30] mb-4 block pl-1 text-center">Or spread the sparkle via</label>
            <div className="grid grid-cols-4 gap-4">
              {[
                { 
                  name: 'WhatsApp', 
                  icon: <img src="/icons/web-icons-clean/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />, 
                  href: `https://wa.me/?text=${encodeURIComponent('Check out my jewelry design: ' + shareURL)}`,
                  color: 'hover:bg-green-50 text-green-600'
                },
                { 
                  name: 'Facebook', 
                  icon: <Facebook size={24} />, 
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`,
                  color: 'hover:bg-blue-50 text-blue-600'
                },
                { 
                  name: 'Twitter', 
                  icon: <Twitter size={24} />, 
                  href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareURL)}&text=${encodeURIComponent('I just designed this!')}`,
                  color: 'hover:bg-sky-50 text-sky-500'
                },
                { 
                  name: 'Email', 
                  icon: <Mail size={24} />, 
                  href: `mailto:?subject=Look at my jewelry design!&body=${encodeURIComponent(shareURL)}`,
                  color: 'hover:bg-red-50 text-red-500'
                }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-colors ${platform.color}`}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 shadow-sm border border-gray-100">
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
