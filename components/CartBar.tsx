import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface CartBarProps {
  totalPrice: number;
  itemCount: number;
  onNavigate: () => void;
}

export default function CartBar({ totalPrice, itemCount, onNavigate }: CartBarProps) {
  const [displayPrice, setDisplayPrice] = useState(totalPrice);
  const previousPriceRef = useRef(totalPrice);

  // Count-up animation for price changes
  useEffect(() => {
    const startPrice = previousPriceRef.current;
    const endPrice = totalPrice;
    
    if (startPrice === endPrice) return;

    const duration = 500; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPrice = startPrice + (endPrice - startPrice) * easeOut;
      
      setDisplayPrice(currentPrice);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        previousPriceRef.current = endPrice;
      }
    };

    requestAnimationFrame(animate);
  }, [totalPrice]);

  const isActive = itemCount >= 1;

  return (
    <div className="w-full bg-[#1F4B30] text-white shadow-lg shrink-0 border-t border-[#1F4B30]/20">
      <div className="w-full px-[16px] lg:px-[24px] py-[10px] lg:py-[12px] flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Center: Cart Value stacked */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <span className="text-[12px] opacity-90">Cart Value</span>
            <span className="text-[14px] font-extrabold">₹{displayPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Right: Navigation Arrow */}
        <button
          onClick={onNavigate}
          disabled={!isActive}
          className={`ml-4 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full transition-all duration-300
            ${isActive 
              ? 'opacity-100 cursor-pointer hover:scale-110 active:scale-95' 
              : 'opacity-30 cursor-not-allowed pointer-events-none'
            }
          `}
          aria-label="Proceed to next step"
          aria-disabled={!isActive}
        >
          <ArrowRight size={24} className="text-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
