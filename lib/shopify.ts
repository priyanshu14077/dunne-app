
export interface ShopifyCartItem {
  productId?: number;
  variantId?: number;
  handle?: string;
  quantity: number;
  properties?: Record<string, string>;
}

const SHOPIFY_STORE_URL = 'https://dunne.co.in';


export async function addToShopifyCart(items: ShopifyCartItem[]): Promise<{ success: boolean; message?: string; url?: string }> {
  try {
    if (items.length === 0) {
      return { success: false, message: "No items to add." };
    }

  
    const validItems = items.filter(item => item.productId || item.variantId);
    
    if (validItems.length === 0) {
      return { success: false, message: "No valid product or variant IDs found for the selected items." };
    }

   
    const cartPath = validItems.map(item => {
      const id = item.productId || item.variantId;
      return `${id}:${item.quantity}`;
    }).join(',');
    
    
    let permalinkUrl = `${SHOPIFY_STORE_URL}/cart/${cartPath}`;

    const params = new URLSearchParams();
    
 
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
