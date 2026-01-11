import { X, Plus, Minus, Trash2, GripVertical } from "lucide-react";
import { Charm } from "../lib/mock-data";
import { PlacedCharmInstance } from "@/lib/types";
import { useState, useRef, useEffect } from "react";

interface SelectedCharmsModalProps {
    selectedCharms: PlacedCharmInstance[];
    onClose: () => void;
    onRemove: (instanceId: string) => void;
    onAddAnother: (charm: Charm) => void;
    onReset: () => void;
    onReorder: (newOrderIds: string[]) => void;
}

export default function SelectedCharmsModal({ 
    selectedCharms, 
    onClose, 
    onRemove, 
    onAddAnother,
    onReset,
    onReorder
}: SelectedCharmsModalProps) {
    const totalCount = selectedCharms.length;
    
    // Sortable state
    const [items, setItems] = useState(selectedCharms);
    
    useEffect(() => {
        setItems(selectedCharms);
    }, [selectedCharms]);

    const draggingIndex = useRef<number | null>(null);
    const dragNode = useRef<HTMLElement | null>(null);

    const handleDragStart = (e: React.DragEvent, index: number) => {
        // Only allow dragging from the handle
        const target = e.target as HTMLElement;
        if (!target.closest('.drag-handle')) {
            e.preventDefault();
            return;
        }

        draggingIndex.current = index;
        dragNode.current = e.currentTarget as HTMLElement;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            if (dragNode.current) dragNode.current.style.opacity = '0.5';
        }, 0);
    };

    const handleDragEnter = (e: React.DragEvent, index: number) => {
        if (draggingIndex.current === null || draggingIndex.current === index) return;
        
        const newList = [...items];
        const draggedItem = newList.splice(draggingIndex.current, 1)[0];
        newList.splice(index, 0, draggedItem);
        draggingIndex.current = index;
        setItems(newList);
        
        // This will update the parent and thus the canvas in real-time
        onReorder(newList.map(it => it.id));
    };

    const handleDragEnd = () => {
        if (dragNode.current) {
            dragNode.current.style.opacity = '1';
            dragNode.current.removeEventListener('dragend', handleDragEnd);
        }
        draggingIndex.current = null;
        dragNode.current = null;
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="bg-[#FCFBF7] w-full max-w-[400px] rounded-[32px] shadow-2xl overflow-hidden animate-modal-slide-up">
                <div className="px-6 py-6 border-b border-[#E6DCC9] flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span 
                                className="text-black text-2xl lg:text-3xl font-bold tracking-tight"
                                style={{ fontFamily: 'Manrope, sans-serif' }}
                            >
                                Total Selected
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-black shadow-sm">
                                {totalCount}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={onReset}
                            className="bg-[#DE3C27]/10 text-[#DE3C27] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#DE3C27]/20 transition-all active:scale-95 flex items-center gap-2"
                        >
                            <img src="/icons/web-icons-clean/reset.png" alt="" className="w-4 h-4 object-contain opacity-80" />
                            Reset
                        </button>
                        <button 
                            onClick={onClose}
                            className="flex items-center gap-1.5 text-black hover:opacity-70 transition-opacity font-bold text-[15px]"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                            Close <img src="/icons/web-icons-clean/close-small.png" alt="" className="w-4 h-4 object-contain" />
                        </button>
                    </div>
                </div>

                {/* List Container */}
                <div className="max-h-[500px] overflow-y-auto p-4 flex flex-col gap-3 scrollbar-hide bg-[#F9F9F9]">
                    {items.length === 0 ? (
                        <div className="py-12 text-center text-gray-400 font-medium">
                            No charms selected yet.
                        </div>
                    ) : (
                        items.map((item, index) => (
                            <div 
                                key={item.id} 
                                draggable 
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnter={(e) => handleDragEnter(e, index)}
                                onDragOver={(e) => e.preventDefault()}
                                className="bg-[#FFFAF3] p-3 rounded-[20px] flex items-center gap-3 shadow-sm border border-[#E5E5E5] group hover:shadow-md transition-shadow cursor-default"
                            >
                                { /* Drag Handle */ }
                                <div className="drag-handle text-gray-300 cursor-grab active:cursor-grabbing p-2 -ml-2">
                                    <GripVertical className="w-5 h-5" />
                                </div>

                                {/* Charm Image: Transparent Container */}
                                <div className="w-[64px] h-[64px] flex items-center justify-center p-1 relative shrink-0">
                                    <img 
                                        src={item.charm.image} 
                                        alt={item.charm.name} 
                                        className="w-full h-full object-contain drop-shadow-sm" 
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-black font-bold text-[12px] leading-tight mb-1 line-clamp-2 min-h-[30px] flex items-center">
                                        {item.charm.name}
                                    </h4>
                                    <span className="text-black font-bold text-[14px]">
                                        +₹ {item.charm.price.toFixed(2)}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="bg-[#F5EBDD] px-2 py-1.5 rounded-full flex items-center gap-2">
                                    <button 
                                        onClick={() => onRemove(item.id)}
                                        className="p-1 px-1.5 hover:scale-110 transition-transform active:scale-95"
                                    >
                                        <img src="/icons/web-icons-clean/trash.png" alt="Delete" className="w-4.5 h-4.5 object-contain" />
                                    </button>
                                    <span className="text-black font-bold text-sm">1</span>
                                    <button 
                                        onClick={() => onAddAnother(item.charm)}
                                        className="p-1 px-1.5 hover:scale-110 transition-transform active:scale-95"
                                    >
                                        <img src="/icons/web-icons-clean/plus.png" alt="Add" className="w-4.5 h-4.5 object-contain" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    
                    {/* Empty spacer for design fidelity */}
                    <div className="h-12 bg-white/40 rounded-2xl border border-dashed border-gray-200" />
                </div>
            </div>
        </div>
    );
}
