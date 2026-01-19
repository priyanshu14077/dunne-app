/**
 * Shopify Integration Utilities
 */

export interface ShopifyCartItem {
  handle: string;
  quantity: number;
  properties?: Record<string, string>;
}

/**
 * Fetches product data from Shopify using the product handle.
 * This works on most Shopify themes via /{handle}.js
 */
async function getVariantIdFromHandle(handle: string): Promise<number | null> {
  try {
    const response = await fetch(`/products/${handle}.js`);
    if (!response.ok) {
      console.error(`Failed to fetch product data for handle: ${handle}`);
      return null;
    }
    const product = await response.json();
    return product.variants?.[0]?.id || null;
  } catch (error) {
    console.error(`Error fetching variant ID for ${handle}:`, error);
    return null;
  }
}

/**
 * Adds multiple items to the Shopify cart.
 * Uses the Shopify AJAX API /cart/add.js
 */
export async function addToShopifyCart(items: ShopifyCartItem[]): Promise<{ success: boolean; message?: string }> {
  try {
    const cartItems = [];

    for (const item of items) {
      const variantId = await getVariantIdFromHandle(item.handle);
      if (variantId) {
        cartItems.push({
          id: variantId,
          quantity: item.quantity,
          properties: item.properties
        });
      } else {
        console.warn(`Could not find variant ID for handle: ${item.handle}`);
      }
    }

    if (cartItems.length === 0) {
      return { success: false, message: "No valid variant IDs found." };
    }

    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cartItems })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.description || "Failed to add to cart." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding to Shopify cart:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
