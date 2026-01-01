// Custom branded icons are used instead of lucide-react

interface TabNavigationProps {
    currentStep: 'charms' | 'base' | 'space';
    onStepChange: (step: 'charms' | 'base' | 'space') => void;
    onInfoClick: () => void;
}

export default function TabNavigation({ currentStep, onStepChange, onInfoClick }: TabNavigationProps) {
    const steps = [
        { 
            id: 'charms', 
            label: 'Charms', 
            activeIcon: '/icons/web-icons-clean/charm-active-32.png',
            defaultIcon: '/icons/web-icons-clean/charm-default-32.png'
        }, 
        { 
            id: 'base', 
            label: 'Base', 
            activeIcon: '/icons/web-icons-clean/base-active-32.png',
            defaultIcon: '/icons/web-icons-clean/base-default-32.png' 
        },
        { 
            id: 'space', 
            label: 'Space', 
            activeIcon: '/icons/web-icons-clean/space-active-32.png',
            defaultIcon: '/icons/web-icons-clean/space-default-32.png' 
        },
    ] as const;
    
    // Helper to check if step is "completed"
    const isCompleted = (stepId: string) => {
        if (currentStep === 'base' && stepId === 'charms') return true;
        if (currentStep === 'space' && (stepId === 'charms' || stepId === 'base')) return true;
        return false;
    };

    return (
        <div className="relative flex items-center justify-between py-5 w-full px-6 max-w-xl mx-auto border-b border-gray-100/50">
            
            {/* Left Section: Info Visibility Fix */}
            <div className="w-16 flex justify-start">
                <button 
                    onClick={onInfoClick}
                    className="hover:scale-110 transition-transform active:scale-95 p-1"
                >
                    <img 
                        src="/icons/web-icons-clean/info.png" 
                        alt="Info" 
                        className="w-12 h-12 object-contain" 
                    />
                </button>
            </div>

            {/* Center Section: Steps */}
            <div className="flex items-center">
                {steps.map((step, index) => {
                     const isActive = currentStep === step.id;
                     const completed = isCompleted(step.id);
                     
                     // Status Logic
                     const labelsMap: Record<string, string> = {
                        charms: 'In Progress',
                        base: 'In Progress',
                        space: 'Space'
                     };

                     const labelText = completed ? 'Completed' : (isActive ? labelsMap[step.id] : step.label);
                     const labelColor = completed ? 'text-[#1F4B30]' : (isActive ? 'text-[#DE3C27]' : 'text-gray-400 font-medium');

                     return (
                        <div key={step.id} className="flex items-center">
                            <button 
                                onClick={() => onStepChange(step.id)}
                                className="flex flex-col items-center min-w-[70px] group"
                            >
                                <div className={`w-10 h-10 flex items-center justify-center relative mb-1 rounded-full transition-all ${completed ? 'bg-[#1F4B30]' : ''}`}>
                                    {completed ? (
                                        <img src="/icons/web-icons-clean/tick.png" alt="Check" className="w-4 h-4 object-contain brightness-0 invert" />
                                    ) : (
                                        <img 
                                            src={isActive ? step.activeIcon : step.defaultIcon} 
                                            alt={step.label} 
                                            className={`w-full h-full object-contain transition-opacity ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}`} 
                                        />
                                    )}
                                </div>
                                <span className={`text-[10px] whitespace-nowrap leading-tight transition-colors ${labelColor}`}>
                                    {labelText}
                                </span>
                            </button>
                            
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="w-6 flex items-center justify-center -mt-4 mx-1">
                                     <div className={`w-full h-[1.2px] transition-colors duration-300 ${completed ? 'bg-[#1F4B30]' : 'bg-gray-200'}`}></div>
                                </div>
                            )}
                        </div>
                     )
                })}
            </div>

            {/* Right Section: Share Visibility Fix */}
            <div className="w-16 flex justify-end">
                <button className="hover:scale-110 transition-transform active:scale-95 p-1">
                    <img 
                        src="/icons/web-icons-clean/share.png" 
                        alt="Share" 
                        className="w-12 h-12 object-contain" 
                    />
                </button>
            </div>
        </div>
    );
}
