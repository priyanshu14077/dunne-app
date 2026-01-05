/**
 * Design Tokens - Dunne Jewelry Customization Interface
 * Centralized design system configuration based on metaprompt specifications
 */

export const COLORS = {
  // Primary Brand Colors (from existing codebase)
  PRIMARY_GREEN: '#1F4B30',
  PRIMARY_RED: '#DE3C27',
  BEIGE_BG: '#F5EBDD',
  CARD_BG: '#F4EFE6',
  
  // Additional Brand Colors
  PINK: '#E780B5',
  YELLOW: '#EDB53E',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  
  // UI Colors
  TEXT_PRIMARY: '#000000',
  TEXT_SECONDARY: '#1F4B30',
  BORDER_ACTIVE: '#1F4B30',
  BORDER_INACTIVE: 'transparent',
  
  // Background Variations
  BEIGE_LIGHT: '#F9F9F9',
  BEIGE_DARK: '#E6DCC9',
} as const;

export const TYPOGRAPHY = {
  // Font Families
  FONT_NEUTRA: '"Neutra Text", sans-serif',
  FONT_MANROPE: '"Manrope", sans-serif',
  FONT_HILLSTOWN: '"Hillstown Sans Aged", serif',
  
  // Font Sizes - Mobile
  MOBILE: {
    CART_VALUE: '14px',
    PRODUCT_NAME: '11px',
    PRODUCT_PRICE: '12px',
    CATEGORY_TAB: '10px',
    BUTTON: '14px',
    INFO_TEXT: '10px',
  },
  
  // Font Sizes - Desktop
  DESKTOP: {
    CART_VALUE: '20px',
    PRODUCT_NAME: '14px',
    PRODUCT_PRICE: '12px',
    CATEGORY_TAB: '12px',
    BUTTON: '14px',
    INFO_TEXT: '14px',
  },
} as const;

export const SPACING = {
  XS: '6px',
  SM: '8px',
  MD: '10px',
  LG: '12px',
  XL: '20px',
  '2XL': '34px',
  '3XL': '44px',
} as const;

export const BORDER_RADIUS = {
  CARD: '15px',
  BUTTON: '20px',
  MODAL: '32px',
  FULL: '9999px',
} as const;

export const CARD_DIMENSIONS = {
  MOBILE: {
    CHARM: { width: 103, height: 127, borderRadius: 15 },
    BASE: { width: 103, height: 127, borderRadius: 15 },
    IMAGE_CHARM: { width: 67, height: 58 },
    IMAGE_BASE: { width: 67, height: 58 },
  },
  DESKTOP: {
    CHARM: { width: 120, height: 121, borderRadius: 15 },
    BASE: { width: 120, height: 121, borderRadius: 15 },
    IMAGE_CHARM: { width: 79, height: 68 },
    IMAGE_BASE: { width: 79, height: 68 },
  },
} as const;

export const PREVIEW_DIMENSIONS = {
  MOBILE: {
    width: 441,
    height: 352.5,
    aspectRatio: '441:352.5',
  },
  DESKTOP: {
    width: 440,
    height: 321.9,
    aspectRatio: '440:321.9',
  },
} as const;

export const BREAKPOINTS = {
  MOBILE_MAX: 767,
  TABLET_MIN: 768,
  TABLET_MAX: 1023,
  DESKTOP_MIN: 1024,
  DESKTOP_LARGE: 1440,
} as const;

export const ANIMATIONS = {
  DURATION: {
    FAST: '150ms',
    NORMAL: '200ms',
    SLOW: '300ms',
    VERY_SLOW: '500ms',
  },
  EASING: {
    EASE_OUT_CUBIC: 'cubic-bezier(0.33, 1, 0.68, 1)',
    EASE_IN_OUT_CUBIC: 'cubic-bezier(0.65, 0, 0.35, 1)',
    SPRING: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

export const CONSTRAINTS = {
  MAX_CHARMS: 9,
  MAX_DISPLAY_SUMMARY: 5,
  CART_BAR_ENABLE_THRESHOLD: 1,
} as const;

export const QUANTITY_CONTROLS = {
  CONTAINER_PADDING_LEFT: '20px',
  GAP_TRASH_TO_NUMBER: '6px',
  GAP_NUMBER_TO_PLUS: '12px',
  ICON_SIZE: '24px',
  TOUCH_TARGET: '44px',
} as const;

// Helper functions
export const getResponsiveDimensions = (isMobile: boolean, type: 'charm' | 'base') => {
  return isMobile ? CARD_DIMENSIONS.MOBILE[type.toUpperCase() as 'CHARM' | 'BASE'] : CARD_DIMENSIONS.DESKTOP[type.toUpperCase() as 'CHARM' | 'BASE'];
};

export const getPreviewDimensions = (isMobile: boolean) => {
  return isMobile ? PREVIEW_DIMENSIONS.MOBILE : PREVIEW_DIMENSIONS.DESKTOP;
};
