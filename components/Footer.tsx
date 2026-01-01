import { Plus, ShoppingBag } from "lucide-react";

interface FooterProps {
    highlightedItem?: {
        name: string;
        price: number;
    } | null;
    defaultTotal: number;
    onNext: () => void;
    onAdd: () => void;
    isFinalStep?: boolean; 
}

export default function Footer({ 
    highlightedItem, 
    defaultTotal,
    onNext,
    onAdd,
    isFinalStep = false
}: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#1F4B30] text-white px-[48px] py-5 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
        
        {/* Info Side */}
        <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#A3CFA9] uppercase tracking-[0.2em] mb-1">
                {isFinalStep ? 'Final Total' : 'Total Price'}
            </span>
             <span className="text-2xl font-serif text-white tracking-tight">
                ₹{defaultTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
        </div>

        {/* Actions Side */}
        <div className="flex items-center gap-6">
          
          {isFinalStep ? (
              // Final Step: "Add to Cart"
              <button 
                onClick={onAdd}
                className="flex items-center gap-2.5 px-10 py-3.5 bg-white text-[#1F4B30] rounded-full font-bold text-[15px] hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                <span className="whitespace-nowrap">Add to Cart</span>
                <img src="/icons/web-icons-clean/cart.png" alt="" className="w-5 h-5 object-contain" />
              </button>
          ) : (
              // Navigation Steps: "Next" Only (Green Variant)
              <div className="flex items-center gap-4">
                <button 
                    onClick={onNext}
                    className="flex items-center gap-2 px-12 py-3.5 bg-[#1F4B30] text-white border border-[#A3CFA9]/30 rounded-full font-bold text-[15px] hover:translate-y-[-1px] transition-all active:translate-y-0 shadow-lg"
                >
                    Next
                </button>
              </div>
          )}
        </div>
      </div>
    </footer>
  );
}
