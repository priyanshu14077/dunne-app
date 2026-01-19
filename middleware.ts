import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyShopifyProxySignature } from './lib/shopify-proxy-verify';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // We only want to verify signature for the main customizer entry point
  // or specific API routes if you have them.
  // For now, let's verify on the root path if it contains Shopify query params.
  
  const hmac = searchParams.get('hmac');
  const shop = searchParams.get('shop');

  // If it's a Shopify request (contains hmac), verify it
  if (hmac && shop) {
    const secret = process.env.SHOPIFY_API_SECRET;
    
    if (!secret) {
      console.error('SHOPIFY_API_SECRET is not defined in environment variables');
      return NextResponse.next();
    }

    // Convert URLSearchParams to a simple object for verification
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const isValid = await verifyShopifyProxySignature(params, secret);

    if (!isValid) {
      return new NextResponse('Invalid Shopify Signature', { status: 403 });
    }
  }

  return NextResponse.next();
}

// Ensure the middleware runs on all routes under the base path
export const config = {
  matcher: '/:path*',
};
