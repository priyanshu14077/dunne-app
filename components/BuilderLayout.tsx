"use client";

import React, { ReactNode } from 'react';

interface BuilderLayoutProps {
  header: ReactNode;
  canvas: ReactNode;
  actionBar: ReactNode;
  drawer: ReactNode;
}

export default function BuilderLayout({ 
  header, 
  canvas, 
  actionBar, 
  drawer 
}: BuilderLayoutProps) {
  return (
    <div className="flex flex-col h-[100dvh] w-full bg-white font-sans text-slate-900 overflow-hidden relative">
      {/* Slot 1: Header (Fixed height/None-flexing) */}
      <div className="flex-shrink-0 z-40 bg-white">
        {header}
      </div>

      {/* Slot 2: Canvas Area (Expands to fill, shrinks if needed) */}
      <div className="flex-1 w-full bg-white relative min-h-0 flex items-center justify-center overflow-hidden z-10">
        {canvas}
      </div>

      {/* Slot 3: Action Bar (Total Value / Navigation) */}
      <div className="flex-shrink-0 h-16 w-full bg-[#1F4B30] flex items-center justify-center px-6 z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {actionBar}
      </div>

      {/* Slot 4: Bottom Drawer (Static Flow) */}
      <div className="flex-shrink-0 bg-[#F5EBDD] z-20">
        {drawer}
      </div>
    </div>
  );
}
