/**
 * Shopify Integration Utilities
 */

export interface ShopifyCartItem {
  variantId?: number;
  handle: string;
  quantity: number;
  properties?: Record<string, string>;
}

const SHOPIFY_STORE_URL = 'https://dunne.co.in';

/**
 * Adds multiple items to the Shopify cart using a Permalink.
 * This is used for cross-domain cart additions.
 */
export async function addToShopifyCart(items: ShopifyCartItem[]): Promise<{ success: boolean; message?: string; url?: string }> {
  try {
    if (items.length === 0) {
      return { success: false, message: "No items to add." };
    }

    // Filter items with variant IDs
    const validItems = items.filter(item => item.variantId);
    
    if (validItems.length === 0) {
      return { success: false, message: "No valid variant IDs found for the selected items." };
    }

    // Construct the permalink path: /cart/variant_id:quantity,variant_id:quantity
    const cartPath = validItems.map(item => `${item.variantId}:${item.quantity}`).join(',');
    
    // Construct the full URL
    let permalinkUrl = `${SHOPIFY_STORE_URL}/cart/${cartPath}`;

    // Add properties as query parameters
    // Shopify permalinks support attributes/properties via query params
    // Note: This applies properties to the cart/order or items depending on Shopify version
    // A reliable way is to add them as attributes
    const params = new URLSearchParams();
    
    // Add global attributes (Design ID, etc.) from the first item if available
    if (validItems[0].properties) {
      Object.entries(validItems[0].properties).forEach(([key, value]) => {
        params.append(`attributes[${key}]`, value);
      });
    }

    const queryString = params.toString();
    if (queryString) {
      permalinkUrl += `?${queryString}`;
    }

    return { 
      success: true, 
      url: permalinkUrl 
    };
  } catch (error) {
    console.error("Error generating Shopify cart permalink:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
