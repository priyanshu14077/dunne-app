
import { BASE_PRODUCTS, CHARMS, Product, Charm } from "@/lib/mock-data";

export interface SharedConfig {
  baseId: string | null;
  charms: { charmId: string; anchorId: string }[];
  spacingMode: 'standard' | 'spaced';
  note?: string;
}

/**
 * Strips HTML tags from a string for basic sanitization.
 */
export function sanitizeNote(note: string): string {
  return note.replace(/<[^>]*>?/gm, '');
}

/**
 * Generates a shareable URL by encoding the design state into a Base64 string.
 */
export function generateShareURL(config: SharedConfig): string {
  if (typeof window === 'undefined') return '';
  
  const sanitizedConfig = {
    ...config,
    note: config.note ? sanitizeNote(config.note) : undefined
  };
  
  const jsonStr = JSON.stringify(sanitizedConfig);
  const base64 = btoa(encodeURIComponent(jsonStr));
  
  const url = new URL(window.location.origin + '/shared');
  url.searchParams.set('config', base64);
  
  return url.toString();
}

/**
 * Decodes a share configuration from a Base64 string and validates the IDs.
 */
export function decodeShareConfig(encoded: string): SharedConfig | null {
  try {
    const jsonStr = decodeURIComponent(atob(encoded));
    const config = JSON.parse(jsonStr) as SharedConfig;
    
    // Validation
    if (config.baseId) {
      const baseExists = BASE_PRODUCTS.some(p => p.id === config.baseId);
      if (!baseExists) return null;
    }
    
    if (Array.isArray(config.charms)) {
      const allCharmsValid = config.charms.every(c => 
        CHARMS.some(charm => charm.id === c.charmId)
      );
      if (!allCharmsValid) return null;
    } else {
      return null;
    }
    
    return {
      baseId: config.baseId || null,
      charms: config.charms || [],
      spacingMode: config.spacingMode === 'spaced' ? 'spaced' : 'standard',
      note: config.note ? sanitizeNote(config.note) : undefined
    };
  } catch (error) {
    console.error("Failed to decode share config:", error);
    return null;
  }
}
