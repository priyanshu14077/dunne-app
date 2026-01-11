"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useWalkthrough, STEPS } from '@/context/WalkthroughContext';

export default function WalkthroughOverlay() {
  const { currentStep, isActive, nextStep, skipWalkthrough } = useWalkthrough();
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);

  const step = STEPS[currentStep];

  useEffect(() => {
    if (!isActive || currentStep === -1 || !step) return;

    const updatePosition = () => {
      // For dynamic target IDs (like canvas-charm-[id]), we might need to search for a partial match
      let element: HTMLElement | null = null;
      if (step.targetId.includes('canvas-charm')) {
        element = document.querySelector('[id^="canvas-charm-"]') as HTMLElement;
      } else {
        element = document.getElementById(step.targetId);
      }

      if (element) {
        const rect = element.getBoundingClientRect();
        setTargetRect(rect);

        // Tooltip logic: mostly center/bottom or clever positioning
        const isTop = rect.top > window.innerHeight / 2;
        setTooltipPos({
          top: isTop ? rect.top - 120 : rect.bottom + 20,
          left: Math.max(20, Math.min(window.innerWidth - 300, rect.left + rect.width / 2 - 140))
        });

        // Ensure target is visible or scroll into view if needed
        // element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // If element not found (e.g., charm not added yet for Phase 2), hide until ready
        setTargetRect(null);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    // Re-check periodically in case of lazy loading or layout shifts
    const interval = setInterval(updatePosition, 500);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
      clearInterval(interval);
    };
  }, [isActive, currentStep, step]);

  if (!isActive || currentStep === -1 || !step || !targetRect) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden animate-fade-in"
    >
      {/* Dimmed Backdrop with SVG masking for spotlight */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="spotlight-mask">
            <rect width="100%" height="100%" fill="white" />
            <rect 
              x={targetRect.left - 5}
              y={targetRect.top - 5}
              width={targetRect.width + 10}
              height={targetRect.height + 10}
              rx={15}
              fill="black"
            />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.7)" mask="url(#spotlight-mask)" />
        
        {/* Dashed highlight border */}
        <rect 
          x={targetRect.left - 5}
          y={targetRect.top - 5}
          width={targetRect.width + 10}
          height={targetRect.height + 10}
          rx={15}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="6,4"
          className="animate-pulse"
        />
      </svg>

      {/* Tooltip */}
      <div 
        className="absolute w-[280px] lg:w-[320px] transition-all duration-300 ease-out"
        style={{ top: tooltipPos.top, left: tooltipPos.left }}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <p 
            className="text-white text-[16px] lg:text-[18px] leading-relaxed drop-shadow-md"
            style={{ fontFamily: 'Neutra Text, sans-serif' }}
          >
            {step.text}
          </p>

          <div className="flex items-center gap-4">
            <button 
              onClick={skipWalkthrough}
              className="px-6 py-2 border border-white rounded-[15px] bg-transparent text-white text-[14px] hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Neutra Text, sans-serif' }}
            >
              Skip
            </button>
            <button 
              onClick={nextStep}
              className="px-8 py-2 border border-white rounded-[15px] bg-white text-black text-[14px] font-bold hover:bg-white/90 transition-colors"
              style={{ fontFamily: 'Neutra Text, sans-serif' }}
            >
              {currentStep === STEPS.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
