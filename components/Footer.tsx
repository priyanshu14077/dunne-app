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
    <footer className="fixed bottom-0 left-0 w-full bg-[#1F4B30] text-white px-6 py-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between max-w-md mx-auto w-full md:max-w-4xl">
        
        {/* Info Side */}
        <div className="flex flex-col">
            {highlightedItem ? (
                <>
                  <span className="text-xs font-bold text-[#A3CFA9] uppercase tracking-wider mb-0.5">
                      Selected Item
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide text-white/90 truncate max-w-[150px]">
                      {highlightedItem.name}
                  </span>
                  <span className="text-xl font-serif text-[#A3CFA9]">
                      ₹{highlightedItem.price.toFixed(2)}
                  </span>
                </>
            ) : (
                <>
                  <span className="text-xs font-bold text-[#A3CFA9] uppercase tracking-wider mb-0.5">
                      {isFinalStep ? 'Final Total' : 'Total Cart'}
                  </span>
                   <span className="text-xl font-serif text-[#A3CFA9]">
                      ₹{defaultTotal.toFixed(2)}
                  </span>
                </>
            )}
        </div>

        {/* Actions Side */}
        <div className="flex items-center gap-3">
          
          {isFinalStep ? (
              // Final Step: "Add to Cart" full width button style
              <button 
                onClick={onAdd}
                className="flex items-center gap-2 px-8 py-3 bg-white text-[#1F4B30] rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
              >
                <span className="whitespace-nowrap">Add to Cart</span>
                <ShoppingBag className="w-4 h-4" />
              </button>
          ) : (
              // Navigation Steps: "Add" + "Next"
              <>
                <button 
                    onClick={onAdd}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#1F4B30] rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg"
                >
                    <Plus className="w-4 h-4" />
                    Add
                </button>
                
                <button 
                    onClick={onNext}
                    className="px-8 py-2.5 bg-white/10 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                    Next
                </button>
              </>
          )}

        </div>

      </div>
    </footer>
  );
}
