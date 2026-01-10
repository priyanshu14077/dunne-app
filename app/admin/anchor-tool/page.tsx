"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import { Copy, Trash2, ArrowRight, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCT_ANCHORS, AnchorPoint } from "@/lib/anchor";
import { BASE_PRODUCTS } from "@/lib/mock-data";

export default function AnchorToolPage() {
  // Create a map of BASE_PRODUCTS for quick lookup
  const baseProductMap = Object.fromEntries(
    BASE_PRODUCTS.map(p => [p.id, p])
  );
  
  // Merge BASE_PRODUCTS images with PRODUCT_ANCHORS data
  const mergedProducts = Object.entries(PRODUCT_ANCHORS)
    .filter(([id]) => baseProductMap[id]) // Only include products in catalogue
    .map(([id, anchorData]) => ({
      ...anchorData,
      imageUrl: baseProductMap[id].image, // Use actual image from BASE_PRODUCTS
      name: baseProductMap[id].name
    }));
  
  const [currentId, setCurrentId] = useState(mergedProducts[0]?.id || "");
  const currentProduct = mergedProducts.find(p => p.id === currentId);
  
  // Breakpoint selector state
  const [activeBreakpoint, setActiveBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  const [points, setPoints] = useState<AnchorPoint[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  // Load existing points if available when switching images or breakpoints
  useEffect(() => {
    if (currentProduct) {
        // Load points from the active breakpoint
        setPoints(currentProduct.anchors[activeBreakpoint] || []);
    }
  }, [currentId, activeBreakpoint]);

  // --- HANDLERS ---

  const [activeDrag, setActiveDrag] = useState<{ index: number; startX: number; startY: number; initialPoint: AnchorPoint } | null>(null);

  // --- HANDLERS ---

  const handleMouseDown = (index: number, e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      e.preventDefault();
      
      if (!points[index]) return;

      setActiveDrag({
          index,
          startX: e.clientX,
          startY: e.clientY,
          initialPoint: { ...points[index] }
      });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!activeDrag || !imageRef.current) return;

      e.preventDefault();

      const rect = imageRef.current.getBoundingClientRect();
      const deltaX = e.clientX - activeDrag.startX;
      const deltaY = e.clientY - activeDrag.startY;

      // Convert delta px to delta %
      const deltaXPercent = (deltaX / rect.width) * 100;
      const deltaYPercent = (deltaY / rect.height) * 100;

      const newPoints = [...points];
      newPoints[activeDrag.index] = {
          ...activeDrag.initialPoint,
          x: Number((activeDrag.initialPoint.x + deltaXPercent).toFixed(2)),
          y: Number((activeDrag.initialPoint.y + deltaYPercent).toFixed(2))
      };

      setPoints(newPoints);
  };

  const handleMouseUp = () => {
      setActiveDrag(null);
  };

  const copyFromDesktop = () => {
    if (currentProduct) {
      setPoints([...(currentProduct.anchors.desktop || [])]);
    }
  };

  const handleCanvasClick = (e: MouseEvent<HTMLDivElement>) => {
    if (activeDrag) return; // Ignore click if dragging
    if (!imageRef.current) return;

    // We click on the overlay div that matches the image size
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    const newPoint: AnchorPoint = {
      x: Number(xPercent.toFixed(2)),
      y: Number(yPercent.toFixed(2)),
      rotation: 0,
      scale: 1.5 
    };

    setPoints([...points, newPoint]);
  };

  const updatePoint = (index: number, field: keyof AnchorPoint, value: number | string) => {
    const newPoints = [...points];
    // @ts-ignore - dynamic assignment
    newPoints[index] = { ...newPoints[index], [field]: value };
    setPoints(newPoints);
  };

  const removePoint = (index: number) => {
    const newPoints = points.filter((_, i) => i !== index);
    setPoints(newPoints);
  };

  const copyToClipboard = () => {
    if (!currentProduct) return;

    // We want to generate the FULL entry for this key
    const entry = {
        ...currentProduct,
        anchors: points
    };
    
    // Pretty print the object logic to match valid JS/TS object literal
    const jsonPoints = JSON.stringify(points, null, 2);
    
    // Support the new BreakpointAnchors structure
    const updatedAnchors = {
      ...currentProduct.anchors,
      [activeBreakpoint]: points
    };
    const jsonFullAnchors = JSON.stringify(updatedAnchors, null, 2);

    const output = `  "${currentProduct.id}": {
    id: "${currentProduct.id}",
    category: "${currentProduct.category}",
    imageUrl: "${currentProduct.imageUrl}",
    // Populated via anchor-tool
    anchors: ${jsonFullAnchors},
    center: { x: 50, y: 50 }
  },`;

    navigator.clipboard.writeText(output);
    alert(`Copied config for "${currentProduct.id}" to clipboard!`);
  };

  if (!currentProduct) return <div>No products found. Run scaffold script.</div>;

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex overflow-hidden">
      
      {/* GALLERY SIDEBAR (Left - 220px) */}
      <div className={`bg-white border-r border-slate-200 flex flex-col shadow-lg z-20 transition-all duration-300 ${isGalleryOpen ? 'w-[280px]' : 'w-0 overflow-hidden opacity-0'}`}>
         <div className="p-4 bg-slate-100 font-bold text-sm text-slate-700 border-b border-slate-200 flex items-center gap-2">
            <ImageIcon size={16} />
            Products ({mergedProducts.length})
         </div>
         <div className="overflow-y-auto flex-1 p-2 space-y-1">
            {mergedProducts.map((prod) => (
                <button
                    key={prod.id}
                    onClick={() => setCurrentId(prod.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded-md truncate transition-colors ${currentId === prod.id ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200' : 'hover:bg-slate-50 text-slate-600'}`}
                    title={prod.name}
                >
                    {prod.name}
                </button>
            ))}
         </div>
      </div>

      {/* TOGGLE GALLERY BUTTON */}
      <button 
        onClick={() => setIsGalleryOpen(!isGalleryOpen)}
        className="absolute bottom-4 left-4 z-50 bg-white p-2 rounded-full shadow-md border border-slate-200 text-slate-500 hover:text-slate-800"
      >
        {isGalleryOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* CONFIG SIDEBAR (Left - 300px) */}
      <div className="w-[300px] bg-white border-r border-slate-200 flex flex-col shadow-md z-10 shrink-0">
        
        {/* Breakpoint Selector Tabs */}
        <div className="p-4 border-b border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="text-[10px] font-semibold text-slate-600 mb-2 uppercase tracking-wide">Screen Size</div>
          <div className="flex gap-1 bg-white p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveBreakpoint('mobile')}
              className={`flex-1 px-3 py-2 text-xs font-semibold rounded-md transition-all ${
                activeBreakpoint === 'mobile'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              📱 Mobile
            </button>
            <button
              onClick={() => setActiveBreakpoint('tablet')}
              className={`flex-1 px-3 py-2 text-xs font-semibold rounded-md transition-all ${
                activeBreakpoint === 'tablet'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              📱 Tablet
            </button>
            <button
              onClick={() => setActiveBreakpoint('desktop')}
              className={`flex-1 px-3 py-2 text-xs font-semibold rounded-md transition-all ${
                activeBreakpoint === 'desktop'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              🖥️ Desktop
            </button>
          </div>
          {activeBreakpoint !== 'desktop' && (
            <button
              onClick={copyFromDesktop}
              className="w-full mt-2 px-3 py-1.5 text-[10px] font-semibold text-indigo-600 border border-indigo-200 rounded-md hover:bg-indigo-50 transition-colors"
            >
              Copy from Desktop
            </button>
          )}
        </div>
        
        {/* Header Section */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h1 className="text-lg font-bold text-[#1F4B30] mb-1">Anchor Tool</h1>
          <div className="text-[10px] text-slate-400 font-mono mb-2">{currentProduct.id}</div>
          
          <div className="flex gap-2">
             <button 
                onClick={() => setPoints([])}
                className="w-full px-3 py-2 text-xs font-semibold text-red-600 border border-slate-200 rounded-md hover:bg-red-50"
             >
                Reset Points
             </button>
          </div>
        </div>

        {/* List of Points */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
            {points.length === 0 && (
                <div className="text-center text-slate-400 py-10 text-xs italic px-4">
                    Click anywhere on the image to add the first anchor point.
                </div>
            )}
            
            {points.map((p, i) => (
                <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                        <span className="font-bold text-xs text-white bg-slate-500 px-2 py-0.5 rounded-full">P{i + 1}</span>
                        <div className="flex items-center gap-3">
                            <button onClick={() => removePoint(i)} className="text-slate-400 hover:text-red-500 transition-colors">
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                        {/* Rotation */}
                        <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-500 uppercase font-semibold">
                                <span>Rotation</span>
                                <span>{p.rotation}°</span>
                            </div>
                            <input 
                                type="range" 
                                min="-180" 
                                max="180" 
                                value={p.rotation}
                                onChange={(e) => updatePoint(i, 'rotation', Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                         {/* Scale */}
                         <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-500 uppercase font-semibold">
                                <span>Scale</span>
                                <span>{Number(p.scale).toFixed(1)}x</span>
                            </div>
                            <input 
                                type="range" 
                                min="0.5" 
                                max="3.0" 
                                step="0.1"
                                value={p.scale}
                                onChange={(e) => updatePoint(i, 'scale', Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200">
             <button 
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
            >
                <Copy size={16} /> Copy Config
            </button>
        </div>
      </div>

      {/* CANVAS AREA (Right) */}
      <div className="flex-1 bg-[#e5e7eb] flex items-center justify-center p-8 overflow-auto relative">
         <div className="relative shadow-2xl bg-white rounded-sm overflow-hidden ring-1 ring-black/5">
           
            {/* The Image */}
            <img 
               ref={imageRef}
               src={currentProduct.imageUrl} 
               alt="Base Product" 
               className="max-h-[85vh] max-w-[90vw] object-contain pointer-events-none block"
            />

            {/* Interactive Overlay Layer */}
            <div 
                className="absolute inset-0 cursor-crosshair z-10"
                onClick={handleCanvasClick}
            >
                {points.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-0 h-0"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                        }}
                    >
                         {/* Hit Area & Draggable Handle */}
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 cursor-move z-20 flex items-center justify-center group"
                            onMouseDown={(e) => handleMouseDown(i, e)}
                        >
                             {/* Red Dot Visual */}
                            <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm ring-2 ring-transparent group-hover:ring-indigo-400 transition-all" />
                        </div>

                         {/* Ghost Charm Visualizer - Non-interactive */}
                        <div 
                            className="absolute pointer-events-none z-10 w-[45px] flex items-center justify-center origin-top-center"
                            style={{
                                // Transform relative to the anchor point (0,0 of this wrapper)
                                transform: `translate(-50%, -4%) rotate(${p.rotation}deg) scale(${p.scale})`, 
                            }}
                        >
                             {/* Ghost Charm Body */}
                             <div className="w-full aspect-square bg-blue-500/20 border-2 border-dashed border-blue-400 rounded-md flex items-center justify-center backdrop-blur-[0px]">
                                <div className="w-0.5 h-full bg-blue-400/50 absolute top-0" /> {/* Vertical Center Line */}
                             </div>
                        </div>

                        {/* Label */}
                         <div className="absolute top-3 left-3 bg-black/70 text-white text-[9px] px-1.5 rounded pointer-events-none whitespace-nowrap z-30 select-none">
                            {p.label || `p${i}`}
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </div>

    </div>
  );
}
