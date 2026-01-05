import { X } from "lucide-react";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
}

export default function DeleteConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  itemName = "this item"
}: DeleteConfirmationDialogProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#F4EFE6] w-full max-w-[400px] rounded-[20px] shadow-2xl border border-[#1F4B30] p-6 flex flex-col gap-4 animate-modal-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#DE3C27]/10 flex items-center justify-center">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#DE3C27" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#1F4B30] text-center font-bold text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Remove Charm?
        </h3>

        {/* Message */}
        <p className="text-[#1F4B30]/70 text-center text-sm" style={{ fontFamily: 'Neutra Text, sans-serif' }}>
          Are you sure you want to remove <strong>{itemName}</strong> from your selection?
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-full border border-[#1F4B30] text-[#1F4B30] font-bold text-sm hover:bg-white/50 transition-all active:scale-95"
            style={{ fontFamily: 'Neutra Text, sans-serif' }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 rounded-full bg-[#DE3C27] text-white font-bold text-sm hover:bg-[#DE3C27]/90 transition-all active:scale-95 shadow-md"
            style={{ fontFamily: 'Neutra Text, sans-serif' }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
