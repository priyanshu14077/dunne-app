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
        'Eternal Bloom': 19,
        'Game On': 14,
        'Lovestruck': 17,
        'Guardian': 18,
        'Wild & Free': 27,
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
                <div className="px-6 py-5 flex items-center justify-center border-b border-[#1F4B30]/5 relative">
                    <h2 className="text-[#1F4B30] font-serif text-xl font-bold">Choose Category</h2>
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
                            <span className={`text-[16px] transition-all ${activeCategory === cat ? 'font-bold' : 'group-hover:translate-x-1'}`}>
                                {cat}
                                {activeCategory === cat && (
                                    <span className="inline-block ml-2 w-1 h-1 rounded-full bg-[#DE3C27]" />
                                )}
                            </span>
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
