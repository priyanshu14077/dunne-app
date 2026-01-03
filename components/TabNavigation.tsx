// Custom branded icons are used instead of lucide-react
import { Share, Info, Check } from "lucide-react";

interface TabNavigationProps {
    currentStep: 'charms' | 'base' | 'space';
    onStepChange: (step: 'charms' | 'base' | 'space') => void;
    onInfoClick?: () => void;
    onShareClick?: () => void;
}

export default function TabNavigation({ currentStep, onStepChange, onInfoClick, onShareClick }: TabNavigationProps) {
    const steps = [
        { id: 'charms', label: 'Charms', defaultIcon: '/icons/web-icons-clean/charm-default-24.png', activeIcon: '/icons/web-icons-clean/charm-active-24.png' },
        { id: 'base', label: 'Base', defaultIcon: '/icons/web-icons-clean/base-default-24.png', activeIcon: '/icons/web-icons-clean/base-active-24.png' },
        { id: 'space', label: 'Space', defaultIcon: '/icons/web-icons-clean/space-default-24.png', activeIcon: '/icons/web-icons-clean/space-active-24.png' },
    ] as const;

    const order = ['charms', 'base', 'space'];
    const currentIndex = order.indexOf(currentStep);

    return (
        <div className="relative flex items-center justify-between h-[62px] w-full px-6 lg:px-12 bg-white select-none">
            
            {/* Left: Info Icon */}
            <button 
                onClick={onInfoClick}
                className="hover:opacity-70 transition-opacity flex items-center justify-center"
            >
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                    <Info className="w-[20px] h-[20px] text-[#1F4B30]" strokeWidth={2} />
                </div>
            </button>

            {/* Center Section: Compact centered container */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between w-[180px] h-[46px] translate-y-[2px]"> 
                {steps.map((step, index) => {
                     const isCompleted = index < currentIndex;
                     const isActive = index === currentIndex;
                     
                     // Labels for display
                     let labelText: string = step.label;
                     let labelColor = "text-gray-400";
                     
                     if (isCompleted) {
                         labelText = "Completed";
                         labelColor = "text-[#1F4B30]"; // Green
                     } else if (isActive) {
                         labelText = "In Progress";
                         labelColor = "text-[#DE3C27]"; // Brand Red
                     }

                     return (
                        <div key={step.id} className="flex items-center relative">
                            {/* Connector Line - Tightened for 180px width */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-[28px] w-[50px] top-[14px] -translate-y-1/2 flex items-center justify-center z-0">
                                     <div className={`w-full h-[1px] transition-colors duration-300 ${index <= currentIndex ? 'bg-[#1F4B30]' : 'bg-gray-300'}`}></div>
                                </div>
                            )}

                            <button 
                                onClick={() => {
                                    if (index <= currentIndex) onStepChange(step.id);
                                }}
                                disabled={index > currentIndex}
                                className={`flex flex-col items-center group justify-center relative z-10 ${index > currentIndex ? 'cursor-default' : 'cursor-pointer'}`}
                            >
                                <div className={`w-[28px] h-[28px] flex items-center justify-center relative rounded-full transition-all mb-1
                                    ${isCompleted ? 'bg-[#1F4B30]' : isActive ? 'bg-[#DE3C27]' : 'bg-[#F2F2F2]'}
                                `}>
                                    {isCompleted ? (
                                        <Check className="w-[15px] h-[15px] text-white" strokeWidth={3} />
                                    ) : isActive ? (
                                        <img 
                                            src={step.activeIcon} 
                                            alt={step.label} 
                                            className="w-[15px] h-[15px] object-contain brightness-0 invert" 
                                        />
                                    ) : (
                                        <img 
                                            src={step.defaultIcon} 
                                            alt={step.label} 
                                            className="w-[15px] h-[15px] object-contain opacity-40 group-hover:opacity-60" 
                                        />
                                    )}
                                </div>
                                <span className={`text-[8px] font-bold font-sans uppercase tracking-[0.05em] absolute -bottom-3 white-space-nowrap ${labelColor}`}>
                                    {labelText}
                                </span>
                            </button>
                        </div>
                     )
                })}
            </div>

            {/* Right: Share Icon */}
            <button 
                onClick={onShareClick}
                className="hover:opacity-70 transition-opacity flex items-center justify-center"
            >
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                    <Share className="w-[20px] h-[20px] text-[#1F4B30]" strokeWidth={2} />
                </div>
            </button>
        </div>
    );
}
