import { ChainAnchor, BreakpointAnchors, ChainConfig } from "./anchors/types";
import { CHAIN_ANCHORS } from "./anchors/necklaces";
import { BRACELET_ANCHORS } from "./anchors/bracelets";

// Export types for use in components
export type { ChainAnchor, BreakpointAnchors, ChainConfig };

// Backward compatibility aliases
export type AnchorPoint = ChainAnchor;
export type ProductAnchorData = ChainConfig;

export { CHAIN_ANCHORS, BRACELET_ANCHORS };

export const PRODUCT_ANCHORS: Record<string, ChainConfig> = {
  ...CHAIN_ANCHORS,
  ...BRACELET_ANCHORS
};
