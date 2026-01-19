/**
 * Bestseller Mapping Tool
 * 
 * This script helps you map bestseller products from your spreadsheet
 * to the charm IDs in mock-data.ts
 */

// STEP 1: Paste your raw bestseller data here
// Format: "DUN CHAR## | Collection | Product Name"
const RAW_BESTSELLER_DATA = `
DUN CHAR39 Guardian Midnight Eye Charm
DUN CHAR40 Guardian Guardian Eye Charm  
DUN CHAR52 Guardian Turquoise Eye Charm
`;

// STEP 2: Parse the raw data
function parseBestsellerData(rawData: string) {
  const lines = rawData.trim().split('\n').filter(line => line.trim());
  
  return lines.map(line => {
    // Match pattern: DUN CHAR## Collection Product Name
    const match = line.match(/DUN\s+CHAR(\d+)\s+(.+?)\s+(.+)/i);
    
    if (match) {
      const [_, charNumber, collection, productName] = match;
      return {
        productId: `DUN CHAR${charNumber}`,
        charNumber: parseInt(charNumber),
        collection: collection.trim(),
        productName: productName.trim(),
        matchedId: null as string | null
      };
    }
    return null;
  }).filter(Boolean);
}

// STEP 3: Match with charm IDs
// You'll need to manually map these based on your mock-data.ts
const CHARM_ID_MAPPING: Record<string, string> = {
  // Guardian category
  "Guardian Eye Charm": "gu-5",
  "Midnight Eye Charm": "gu-10", 
  "Turquoise Eye Charm": "gu-19",
  
  // Add more mappings here as you identify them
  // Format: "Product Name": "charm-id"
};

// STEP 4: Generate the mapping
function generateBestsellerMapping() {
  const parsed = parseBestsellerData(RAW_BESTSELLER_DATA);
  
  const mapped = parsed.map(item => {
    if (!item) return null;
    
    // Try to find matching charm ID
    const matchedId = CHARM_ID_MAPPING[item.productName];
    
    return {
      ...item,
      matchedId,
      status: matchedId ? '✅ Matched' : '❌ Not Found'
    };
  });
  
  return mapped;
}

// STEP 5: Output results
const results = generateBestsellerMapping();

console.log('=== BESTSELLER MAPPING RESULTS ===\n');
console.log(JSON.stringify(results, null, 2));

console.log('\n=== CHARM IDS TO UPDATE ===');
const matchedIds = results
  .filter(r => r?.matchedId)
  .map(r => r!.matchedId);

console.log('Add isBestSeller: true to these charm IDs:');
console.log(matchedIds);

console.log('\n=== UNMATCHED PRODUCTS ===');
const unmatched = results.filter(r => !r?.matchedId);
if (unmatched.length > 0) {
  console.log('These products need manual mapping:');
  unmatched.forEach(item => {
    console.log(`- ${item?.productName} (${item?.collection})`);
  });
} else {
  console.log('All products matched! ✅');
}

// STEP 6: Generate code to copy-paste
console.log('\n=== CODE TO ADD TO MOCK-DATA.TS ===');
matchedIds.forEach(id => {
  console.log(`// Find charm with id: "${id}" and add:`);
  console.log(`isBestSeller: true,`);
  console.log('');
});

export { generateBestsellerMapping, CHARM_ID_MAPPING };
