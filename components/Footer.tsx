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
    <footer className="fixed bottom-0 left-0 w-full bg-[#1F4B30] text-white px-6 py-2 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] h-[65px]">
      <div className="flex items-center justify-between max-w-5xl mx-auto w-full h-full">
        
        {/* Left: Product Details */}
        <div className="flex flex-col max-w-[50%]">
            <h3 className="font-heading text-base lg:text-lg leading-tight tracking-wide uppercase truncate">
                {highlightedItem ? highlightedItem.name : "Select an Item"}
            </h3>
            <p className="font-heading text-xs lg:text-sm opacity-90 text-white/80 italic">
                {highlightedItem ? `₹ ${highlightedItem.price}` : "Start Customizing"}
            </p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
            {/* Next Button Only */}
            <button 
                onClick={onNext}
                className="bg-white text-[#1F4B30] px-6 lg:px-8 py-2 rounded-full font-bold text-xs lg:text-sm hover:bg-gray-100 transition-colors"
            >
                Next
            </button>
        </div>
      </div>
    </footer>
  );
}
