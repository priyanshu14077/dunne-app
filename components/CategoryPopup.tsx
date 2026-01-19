import { X } from "lucide-react";

interface CategoryPopupProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
    onClose: () => void;
}

export default function CategoryPopup({ categories, activeCategory, onSelect, onClose }: CategoryPopupProps) {
    // Mock counts for design fidelity
    const categoryCounts: Record<string, number> = {
        'Eternal Bond': 19,
        'Game On': 14,
        'Lovestruck': 17,
        'Guardian': 18,
        'Travel & Wild': 27,
        'Sugar Pop': 23,
        'Persona': 38
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
                className="bg-[#F5EBDD] w-full max-w-[350px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-[#1F4B30]/10"
                style={{ height: '363px' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold font-serif text-[#1F4B30]">Select Category</h2>
                    <button 
                        onClick={onClose}
                        className="absolute right-4 p-1 text-[#1F4B30]/50 hover:text-[#1F4B30] transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* List */}
                <div className="overflow-y-auto h-[calc(363px-68px)] py-2 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                onSelect(cat);
                                onClose();
                            }}
                            className={`w-full px-8 py-3.5 flex items-center justify-between group transition-all duration-200
                                ${activeCategory === cat 
                                    ? 'bg-white/40 text-[#1F4B30]' 
                                    : 'text-[#1F4B30]/70 hover:bg-white/20'
                                }
                            `}
                        >
                            <div className="flex items-center gap-4">
                                {/* Category Icon based on name - placeholder or first letter */}
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-serif font-bold
                                    ${activeCategory === cat ? 'bg-[#1F4B30] text-white' : 'bg-[#F5EBDD] text-[#1F4B30] group-hover:bg-[#E5DCCF]'}`}>
                                    {cat[0]}
                                </div>
                                
                                <div className="text-left">
                                    <h3 className={`font-bold font-serif text-lg ${activeCategory === cat ? 'text-[#1F4B30]' : 'text-gray-900 group-hover:text-[#1F4B30]'}`}>
                                        {cat}
                                    </h3>
                                </div>
                            </div>
                            {activeCategory === cat && (
                                <span className="inline-block ml-2 w-1 h-1 rounded-full bg-[#1F4B30]" />
                            )}
                            <span className="text-[14px] text-[#1F4B30]/40 font-medium">
                                {categoryCounts[cat] || 0}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
