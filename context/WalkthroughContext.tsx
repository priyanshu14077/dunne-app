"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WalkthroughStep {
  targetId: string;
  text: string;
  phase: 'general' | 'interaction' | 'finalization';
  interactionTrigger?: 'drag' | 'done';
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
  // Phase 1: General Discovery
  { targetId: 'walkthrough-info', text: 'Tap to View Product Information', phase: 'general' },
  { targetId: 'walkthrough-share', text: 'Share design with your friends', phase: 'general' },
  { targetId: 'walkthrough-next-arrow', text: 'Move to \"Base Selection\" after adding charms', phase: 'general' },
  { targetId: 'walkthrough-summary', text: 'View all your selected charms', phase: 'general' },
  { targetId: 'walkthrough-categories', text: 'Explore different categories of our charms', phase: 'general' },
  
  // Phase 2: Interaction (Triggered when a charm is added)
  { targetId: 'walkthrough-canvas-charm', text: 'Drag to change charm position', phase: 'interaction', interactionTrigger: 'drag' },
  
  // Phase 3: Finalization (Triggered in Space step)
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
