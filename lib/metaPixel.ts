export const initMetaPixel = async () => {
  if (typeof window === "undefined") return;
  // Make sure we only initialize once
  if ((window as any).fbq) return;

  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  if (!pixelId) {
    console.warn("Meta Pixel ID is missing from environment variables.");
    return;
  }

  const requireConsent = process.env.NEXT_PUBLIC_META_PIXEL_REQUIRE_CONSENT === "true";

  if (requireConsent) {
    // If requirement is true and there is no implemented consent state, do not set up Pixel.
    console.log("Meta Pixel initialization skipped: awaiting user consent.");
    return;
  }

  // Dynamically import the library client-side only
  const ReactPixelModule = await import("react-facebook-pixel");
  const ReactPixel = ReactPixelModule.default || ReactPixelModule;

  // Initialize with autoConfig: false to suppress the automatic PageView event
  ReactPixel.init(pixelId, undefined, {
    autoConfig: false,
    debug: process.env.NODE_ENV !== "production",
  });
};

export interface AddToCartPayload {
  content_ids: string[];
  content_type: "product";
  content_name?: string;
  value: number;
  currency: string;
}

export const trackAddToCart = async (payload: AddToCartPayload) => {
  if (typeof window === "undefined") return;

  const ReactPixelModule = await import("react-facebook-pixel");
  const ReactPixel = ReactPixelModule.default || ReactPixelModule;

  // Track standard AddToCart event
  ReactPixel.track("AddToCart", payload);
};
