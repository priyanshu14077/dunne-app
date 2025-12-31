import { Hexagon, Circle, Square, Share, Check, Info } from "lucide-react"; // Icons for tabs

interface TabNavigationProps {
    currentStep: 'charms' | 'base' | 'space';
    onStepChange: (step: 'charms' | 'base' | 'space') => void;
    onInfoClick: () => void;
}

export default function TabNavigation({ currentStep, onStepChange, onInfoClick }: TabNavigationProps) {
    const steps = [
        { id: 'charms', label: 'In Progress', icon: Hexagon }, 
        { id: 'base', label: 'Base', icon: Circle },
        { id: 'space', label: 'Space', icon: Square },
    ] as const;
    
    // Helper to check if step is "completed"
    const isCompleted = (stepId: string) => {
        if (currentStep === 'base' && stepId === 'charms') return true;
        if (currentStep === 'space' && (stepId === 'charms' || stepId === 'base')) return true;
        return false;
    };

    return (
        <div className="relative flex items-center justify-between py-4 w-full px-6 max-w-lg mx-auto">
            
            {/* Left: Info Button */}
            <button 
                onClick={onInfoClick}
                className="text-[#1F4B30] hover:bg-[#1F4B30]/10 p-2 rounded-full transition-colors"
                title="View Details"
            >
                <Info className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Center: Steps */}
            <div className="flex items-center gap-3">
                {steps.map((step, index) => {
                     const isActive = currentStep === step.id;
                     const completed = isCompleted(step.id);
                     const Icon = step.icon;
                     
                     return (
                        <div key={step.id} className="flex items-center">
                            <button 
                                onClick={() => onStepChange(step.id)}
                                className={`flex flex-col items-center gap-1 ${isActive || completed ? 'opacity-100' : 'opacity-40 hover:opacity-70'} transition-opacity`}
                            >
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center 
                                    ${completed ? 'bg-[#1F4B30] text-white' : (isActive ? 'bg-[#DE3C27] text-white' : 'bg-gray-200 text-gray-500')}
                                `}>
                                    {completed ? <Check className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5" fill={isActive ? "currentColor" : "none"} />}
                                </div>
                                <span className="text-[9px] uppercase tracking-wide font-medium text-[#1F4B30]">
                                    {completed ? 'Completed' : step.label}
                                </span>
                            </button>
                            
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className={`w-6 h-[1px] mx-1 -mt-4 transition-colors duration-300 ${completed ? 'bg-[#1F4B30]' : 'bg-gray-300'}`}></div>
                            )}
                        </div>
                     )
                })}
            </div>

            {/* Right: Share Button */}
            <button className="text-[#DE3C27] hover:bg-red-50 p-2 rounded-full transition-colors">
                <Share className="w-5 h-5" strokeWidth={1.5} />
            </button>
        </div>
    );
}
