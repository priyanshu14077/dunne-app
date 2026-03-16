// ---------------------------------------------------------------------------
// Meta / Facebook Pixel – native implementation (no third-party wrapper)
// ---------------------------------------------------------------------------
// Using Facebook's official fbq snippet directly avoids the `react-facebook-pixel`
// package's webpack-bundled fb-pixel.js, which caused a 404/ERR_UNKNOWN_URL_SCHEME
// error in the browser because webpack:// source-map URLs are not valid HTTP URLs.
// ---------------------------------------------------------------------------

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export interface AddToCartPayload {
  content_ids: string[];
  content_type: "product";
  content_name?: string;
  value: number;
  currency: string;
}

/** Track standard AddToCart event. */
export const trackAddToCart = (payload: AddToCartPayload): void => {
  if (typeof window === "undefined") return;

  if (!window.fbq) {
    console.warn("Meta Pixel: fbq is not initialised via snippet.");
    return;
  }

  window.fbq("track", "AddToCart", payload);
};
