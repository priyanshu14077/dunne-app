import { useState, useEffect, useMemo } from 'react';
import { PRODUCT_ANCHORS, ChainAnchor } from '@/lib/anchor';
import { Product } from '@/lib/mock-data';

export function useChainAnchors(baseProduct: Product | null) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) setCurrentBreakpoint('mobile');
      else if (width < 1024) setCurrentBreakpoint('tablet');
      else setCurrentBreakpoint('desktop');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  const anchors = useMemo(() => {
    if (!baseProduct) return [];
    const productData = PRODUCT_ANCHORS[baseProduct.id];
    if (!productData?.anchors) return [];

    const { mobile, tablet, desktop } = productData.anchors;
    
    // Priority logic: prefer current, then fallback
    const bpOrder: ('mobile' | 'tablet' | 'desktop')[] = 
      currentBreakpoint === 'mobile' ? ['mobile', 'tablet', 'desktop'] :
      currentBreakpoint === 'tablet' ? ['tablet', 'mobile', 'desktop'] :
      ['desktop', 'tablet', 'mobile'];

    for (const bp of bpOrder) {
      const bpAnchors = productData.anchors[bp];
      if (bpAnchors && bpAnchors.length > 0) {
        return bpAnchors;
      }
    }
    
    return [];
  }, [baseProduct, currentBreakpoint]);

  return { anchors, currentBreakpoint };
}
