// Custom branded icons are used instead of lucide-react
import { Share2, Info } from "lucide-react";

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
        { id: 'space', label: 'Spacing', defaultIcon: '/icons/web-icons-clean/space-default-24.png', activeIcon: '/icons/web-icons-clean/space-active-24.png' },
    ] as const;
    
    // ... (keep logic same)
    
    // Helper to check if step is "completed"
    const isCompleted = (stepId: string) => {
        const order = ['charms', 'base', 'space'];
        return order.indexOf(currentStep) > order.indexOf(stepId);
    };

    return (
        <div className="relative flex items-center justify-between h-[62px] w-full px-6 max-w-5xl mx-auto border-b border-gray-100/50">
            
            {/* Left: Info Icon */}
            <button 
                onClick={onInfoClick}
                className="w-10 h-10 flex items-center justify-start hover:opacity-70 transition-opacity"
            >
                <Info className="w-6 h-6 text-[#1F4B30]" strokeWidth={1.5} />
            </button>

            {/* Center Section: Taller container to accommodate labels */}
            <div className="flex items-center justify-between w-[220px] h-full pt-1"> 
                {steps.map((step, index) => {
                     const isActive = currentStep === step.id;
                     const completed = isCompleted(step.id);
                     
                     // Labels for display
                     let labelText: string = step.label;
                     let labelColor = "text-gray-400";
                     
                     if (completed) {
                         labelText = "Completed";
                         labelColor = "text-[#1F4B30]"; // Green
                     } else if (isActive) {
                         labelText = "In Progress";
                         labelColor = "text-[#DE3C27]"; // Brand Red
                     }

                     return (
                        <div key={step.id} className="flex items-center relative">
                            <button 
                                onClick={() => onStepChange(step.id)}
                                className="flex flex-col items-center group justify-center relative translate-y-[-2px]"
                            >
                                {/* Icon Container */}
                                <div className={`w-[26px] h-[26px] flex items-center justify-center relative rounded-full transition-all mb-1
                                    ${completed ? 'bg-[#1F4B30]' : ''} 
                                    ${isActive ? 'bg-[#DE3C27]' : ''}
                                `}>
                                    {completed ? (
                                        <img src="/icons/web-icons-clean/tick.png" alt="Check" className="w-3.5 h-3.5 object-contain brightness-0 invert" />
                                    ) : isActive ? (
                                        // Active Icon (White if bg is red, or just custom icon)
                                        // Using specific active icon logic or just white tint if needed
                                        <img 
                                            src={step.activeIcon} 
                                            alt={step.label} 
                                            className="w-full h-full object-contain brightness-0 invert" 
                                        />
                                    ) : (
                                        <img 
                                            src={step.defaultIcon} 
                                            alt={step.label} 
                                            className="w-full h-full object-contain opacity-40 group-hover:opacity-60" 
                                        />
                                    )}
                                </div>
                                <span className={`text-[9px] font-bold uppercase tracking-wider absolute -bottom-4 whitespace-nowrap ${labelColor}`}>
                                    {labelText}
                                </span>
                            </button>
                            
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="w-[30px] flex items-center justify-center mx-1 mb-3">
                                     <div className={`w-full h-[1px] transition-colors duration-300 ${completed ? 'bg-[#1F4B30]' : 'bg-gray-200'}`}></div>
                                </div>
                            )}
                        </div>
                     )
                })}
            </div>

            {/* Right: Share Icon */}
            <button 
                onClick={onShareClick}
                className="w-10 h-10 flex items-center justify-end text-[#1F4B30] hover:opacity-70 transition-opacity"
            >
                <Share2 className="w-6 h-6" strokeWidth={1.5} />
            </button>
        </div>
    );
}
