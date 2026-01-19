/**
 * Verifies the HMAC signature provided by Shopify for either App Proxy or Admin requests.
 * Uses Web Crypto API for Edge Runtime compatibility.
 */
export async function verifyShopifyProxySignature(query: Record<string, string | string[] | undefined>, secret: string): Promise<boolean> {
  // detect if it's a proxy request (signature param) or admin request (hmac param)
  const hmac = query.hmac;
  const signature = query.signature;
  
  const targetSignature = (hmac || signature) as string;
  if (!targetSignature || typeof targetSignature !== 'string') return false;

  // Proxy requests use no separator, Admin requests use '&'
  // Proxy requests typically have 'path_prefix' or only 'signature'
  const isProxy = !!signature && !hmac;

  const sortedParams = Object.keys(query)
    .filter((key) => key !== 'hmac' && key !== 'signature')
    .sort()
    .map((key) => {
      const value = query[key];
      const valueString = Array.isArray(value) ? value.join(',') : value;
      return `${key}=${valueString}`;
    })
    .join(isProxy ? '' : '&');

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

  return calculatedSignature === targetSignature;
}
