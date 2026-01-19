/**
 * Verifies the HMAC signature provided by Shopify for App Proxy requests.
 * Uses Web Crypto API for Edge Runtime compatibility.
 */
export async function verifyShopifyProxySignature(query: Record<string, string | string[] | undefined>, secret: string): Promise<boolean> {
  const signature = query.hmac;
  if (!signature || typeof signature !== 'string') return false;

  const sortedParams = Object.keys(query)
    .filter((key) => key !== 'hmac')
    .sort()
    .map((key) => {
      const value = query[key];
      const valueString = Array.isArray(value) ? value.join(',') : value;
      return `${key}=${valueString}`;
    })
    .join('');

  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(sortedParams);

  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBuffer = await crypto.subtle.sign(
    'HMAC',
    key,
    messageData
  );

  const calculatedSignature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return calculatedSignature === signature;
}
