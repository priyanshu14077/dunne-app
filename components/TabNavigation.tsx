// Branded icons from assets are used
import { Share, Info, Check } from "lucide-react";
import { STORAGE_BASE } from "@/lib/constants";

interface TabNavigationProps {
    currentStep: 'charms' | 'base' | 'space';
    onStepChange: (step: 'charms' | 'base' | 'space') => void;
    onInfoClick?: () => void;
    onShareClick?: () => void;
}

export default function TabNavigation({ currentStep, onStepChange, onInfoClick, onShareClick }: TabNavigationProps) {
    const steps = [
        { id: 'charms', label: 'Charms', defaultIcon: `${STORAGE_BASE}/Icons /Charm.svg`, activeIcon: `${STORAGE_BASE}/Icons /Charm.svg` },
        { id: 'base', label: 'Base', defaultIcon: `${STORAGE_BASE}/Icons /Base.svg`, activeIcon: `${STORAGE_BASE}/Icons /Base.svg` },
        { id: 'space', label: 'Space', defaultIcon: `${STORAGE_BASE}/Icons /Space.svg`, activeIcon: `${STORAGE_BASE}/Icons /Space.svg` },
    ] as const;

    const order = ['charms', 'base', 'space'];
    const currentIndex = order.indexOf(currentStep);

    return (
        <div className="relative flex items-center justify-between h-[62px] w-full px-6 lg:px-12 bg-white select-none">
            
            {/* Left: Info Icon */}
            <button 
                id="walkthrough-info"
                onClick={onInfoClick}
                className="hover:opacity-70 transition-opacity flex items-center justify-center"
            >
                <div className="w-[44px] h-[44px] rounded-full bg-[#F5EBDD] flex items-center justify-center shadow-sm">
                    <Info className="w-[18px] h-[18px] text-black" strokeWidth={2} />
                </div>
            </button>

            {/* Center Section: Compact centered container */}
            <div 
                id="walkthrough-progress"
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between w-[160px] h-[46px] translate-y-[2px]"
            > 
                {steps.map((step, index) => {
                     const isCompleted = index < currentIndex;
                     const isActive = index === currentIndex;
                     
                     // Labels for display
                     let labelText: string = step.label;
                     let labelColor = "text-black";
                     
                     if (isActive) {
                         labelText = "In Progress";
                         labelColor = "text-[#DE3C27]"; // Brand Red
                     }

                     return (
                        <div key={step.id} className="flex items-center relative">
                            {/* Connector Line - 31px wide, Dark Green border per Figma/CSS */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-[30px] w-[31px] top-[14px] -translate-y-1/2 flex items-center justify-center z-0">
                                     <div className="w-full h-0 border-t border-[#1F4B30]"></div>
                                </div>
                            )}

                            <div className="flex flex-col items-center group justify-center relative z-10 cursor-default">
                                <div className={`w-[24px] h-[24px] flex items-center justify-center relative rounded-full transition-all mb-1
                                    ${isCompleted ? 'bg-[#1F4B30]' : isActive ? 'bg-transparent' : 'bg-transparent'}
                                `}>
                                    {isCompleted ? (
                                        <Check className="w-[12px] h-[12px] text-white" strokeWidth={4} />

                                    ) : isActive ? (
                                        <img 
                                            src={step.activeIcon} 
                                            alt={step.label} 
                                            className="w-full h-full object-contain" 
                                        />
                                    ) : (
                                        <img 
                                            src={step.defaultIcon} 
                                            alt={step.label} 
                                            className="w-full h-full object-contain" 
                                        />
                                    )}
                                </div>
                                <span 
                                    className={`text-[9px] lg:text-[11px] font-normal tracking-[0.02em] absolute -bottom-4 whitespace-nowrap ${labelColor}`}
                                    style={{ fontFamily: 'Neutra Text, sans-serif' }}
                                >
                                    {labelText}
                                </span>
                            </div>
                        </div>
                     )
                })}
            </div>

            {/* Right: Share Icon */}
            <button 
                id="walkthrough-share"
                onClick={onShareClick}
                className="hover:opacity-70 transition-opacity flex items-center justify-center"
            >
                <div className="w-[44px] h-[44px] rounded-full bg-[#F5EBDD] flex items-center justify-center shadow-sm">
                    <Share className="w-[18px] h-[18px] text-black" strokeWidth={2} />
                </div>
            </button>
        </div>
    );
}
