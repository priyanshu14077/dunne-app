"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WalkthroughStep {
  targetId: string;
  text: string;
  phase: 'general' | 'interaction' | 'finalization';
  interactionTrigger?: 'drag' | 'done' | 'navigate';
  shape?: 'rect' | 'circle';
  tooltipPlacement?: 'top' | 'bottom' | 'auto';
}

interface WalkthroughContextType {
  currentStep: number;
  isActive: boolean;
  isCompleted: boolean;
  startWalkthrough: () => void;
  nextStep: () => void;
  skipWalkthrough: () => void;
  completeWalkthrough: () => void;
  setStepByPhase: (phase: WalkthroughStep['phase']) => void;
  triggerAction: (action: WalkthroughStep['interactionTrigger']) => void;
}

const WalkthroughContext = createContext<WalkthroughContextType | undefined>(undefined);

export const STEPS: WalkthroughStep[] = [
  // Step 1: Categories
  { targetId: 'walkthrough-categories', text: 'Choose across 7+ categories', phase: 'general' },

  // Step 2: Next Arrow (Move to Base)
  { targetId: 'walkthrough-next-arrow', text: 'Move to base selection', phase: 'general', interactionTrigger: 'navigate' },

  // Step 3: Drag Interaction (Targets first charm found)
  // The overlay logic handles partial match for 'canvas-charm'
  { 
    targetId: 'walkthrough-canvas-charm', 
    text: 'Drag to change charm position', 
    phase: 'interaction', 
    interactionTrigger: 'drag',
    shape: 'circle',
    tooltipPlacement: 'top'
  },
  
  // Step 4: View All (Summary)
  { targetId: 'walkthrough-summary', text: 'View all your selected charms', phase: 'general' },

  // Step 5: Info Icon
  { targetId: 'walkthrough-info', text: 'Tap to View Product Information', phase: 'general' },

  // Step 6: Share Icon
  { targetId: 'walkthrough-share', text: 'Share design with your friends', phase: 'general' },
  
  // Step 7: Back Arrow
  { targetId: 'walkthrough-back-arrow', text: 'Move back to charm selection', phase: 'general' },

  // Step 8: Spacing (Existing) - This is usually Phase 3/Finalization
  { targetId: 'walkthrough-spacing', text: 'Choose your desired spacing or leave instructions for us', phase: 'finalization', interactionTrigger: 'done' },
];

export const WalkthroughProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem('walkthrough_completed');
    if (!completed) {
      setCurrentStep(0);
      setIsActive(true);
    } else {
      setIsCompleted(true);
    }
  }, []);

  const startWalkthrough = () => {
    setCurrentStep(0);
    setIsActive(true);
    setIsCompleted(false);
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeWalkthrough();
    }
  };

  const skipWalkthrough = () => {
    localStorage.setItem('walkthrough_completed', 'true');
    setIsActive(false);
    setIsCompleted(true);
  };

  const completeWalkthrough = () => {
    localStorage.setItem('walkthrough_completed', 'true');
    setIsActive(false);
    setIsCompleted(true);
  };

  const setStepByPhase = (phase: WalkthroughStep['phase']) => {
    const index = STEPS.findIndex(s => s.phase === phase);
    // Only switch if we are moving FORWARD to a new phase
    if (index !== -1 && index > currentStep && !isCompleted) {
      setCurrentStep(index);
      setIsActive(true);
    }
  };

  const triggerAction = (action: WalkthroughStep['interactionTrigger']) => {
    const currentStepData = STEPS[currentStep];
    if (currentStepData?.interactionTrigger === action) {
      nextStep();
    }
  };

  return (
    <WalkthroughContext.Provider value={{ 
      currentStep, 
      isActive, 
      isCompleted, 
      startWalkthrough, 
      nextStep, 
      skipWalkthrough, 
      completeWalkthrough,
      setStepByPhase,
      triggerAction
    }}>
      {children}
    </WalkthroughContext.Provider>
  );
};

export const useWalkthrough = () => {
  const context = useContext(WalkthroughContext);
  if (context === undefined) {
    throw new Error('useWalkthrough must be used within a WalkthroughProvider');
  }
  return context;
};
