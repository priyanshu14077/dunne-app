export interface ChainAnchor {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  label?: string;
}

export interface BreakpointAnchors {
  mobile: ChainAnchor[];
  tablet: ChainAnchor[];
  desktop: ChainAnchor[];
}

export interface ChainConfig {
  id: string;
  category: string;
  imageUrl: string;
  anchors: BreakpointAnchors;
  center: { x: number; y: number };
}
