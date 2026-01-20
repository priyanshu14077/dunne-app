
import { STORAGE_BASE } from './constants';

export interface Product {
  id: string;
  handle?: string;
  variantId?: number;
  name: string;
  price: number;
  image: string;
  type: 'bracelet' | 'necklace';
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  specifications: {
    material?: string;
    length?: string;
    width?: string;
    clasp?: string;
    finish?: string;
    weight?: string;
  };
}

export interface Charm {
  id: string;
  handle?: string;
  variantId?: number;
  name: string;
  price: number;
  image: string;
  previewImage?: string; // High-quality preview version for canvas
  overlayImage?: string; // High-fidelity overlay version with jump ring
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean; // Bestseller badge
  description: string;
  specifications: {
    style?: string;
    size?: string;
    weight?: string;
    material?: string;
    finish?: string;
    quality?: string;
    motifs?: string;
    enamel?: string;
    accent?: string;
  };
}

export const BASE_PRODUCTS: Product[] = [
  {
    id: 'classic-loop',
    name: 'Classic Loop Bracelet',
    handle: 'classic-loop-bracelet',
    variantId: 47325289709827,
    price: 850.00,
    image: STORAGE_BASE + '/bracelets/Classic Loop bracelet.png',
    type: 'bracelet',
    isBestSeller: true,
    description: "Premium base jewelry crafted from high-quality materials. Designed to hold your favorite charms securely with elegant spacing and durable construction.",
    specifications: {
      material: "Sterling Silver 925",
      length: "18 cm adjustable",
      width: "3 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~15 g"
    }
  },
  {
    id: 'lustre-link',
    name: 'Lustre Link Bracelet',
    handle: 'lustre-link-bracelet',
    variantId: 47283744145667,
    price: 950.00,
    image: STORAGE_BASE + '/bracelets/Lustre Link bracelet.png',
    type: 'bracelet',
    description: "Premium base jewelry crafted from high-quality materials. Designed to hold your favorite charms securely with elegant spacing and durable construction.",
    specifications: {
      material: "Sterling Silver 925",
      length: "18 cm adjustable",
      width: "3 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~15 g"
    }
  },
  {
    id: 'dual-link',
    name: 'Dual Link Bracelet',
    handle: 'dual-link-bracelet',
    variantId: 47325289873667,
    price: 750.00,
    image: STORAGE_BASE + '/bracelets/Dual Link Bracelet.png',
    type: 'bracelet',
    description: "Premium base jewelry crafted from high-quality materials. Designed to hold your favorite charms securely with elegant spacing and durable construction.",
    specifications: {
      material: "Sterling Silver 925",
      length: "18 cm adjustable",
      width: "3 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~15 g"
    }
  },
  {
    id: "paper-clip",
    variantId: 47325603299587,
    handle: 'paperclip-bracelet',
    name: 'Paper Clip Bracelet',
    price: 750.00,
    image: STORAGE_BASE + '/bracelets/paper clip bracelet.png',
    type: 'bracelet',
    description: "Premium base jewelry crafted from high-quality materials. Designed to hold your favorite charms securely with elegant spacing and durable construction.",
    specifications: {
      material: "Sterling Silver 925",
      length: "18 cm adjustable",
      width: "3 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~15 g"
    }
  },
  {
    id: 'golden-charm',
    name: 'Golden Charm Chain',
    handle: 'golden-charm-chain-bracelet',
    variantId: 47325289840899,
    price: 750.00,
    image: STORAGE_BASE + '/bracelets/Golden Charm Chain Bracelet.png',
    type: 'bracelet',
    description: "Premium base jewelry crafted from high-quality materials. Designed to hold your favorite charms securely with elegant spacing and durable construction.",
    specifications: {
      material: "Sterling Silver 925",
      length: "18 cm adjustable",
      width: "3 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~15 g"
    }
  },
  {
    id: 'luxe-chain',
    name: 'Luxe Chain Bracelet',
    handle: 'luxe-chain-bracelet',
    variantId: 47325289742595,
    price: 850.00,
    image: STORAGE_BASE + '/bracelets/Luxe Chain Bracelet.png',
    type: 'bracelet',
    isNew: true,
    description: "Premium base jewelry crafted from high-quality materials. Designed to hold your favorite charms securely with elegant spacing and durable construction.",
    specifications: {
      material: "Sterling Silver 925",
      length: "18 cm adjustable",
      width: "3 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~15 g"
    }
  },
  {
    id: 'monochrome-braid',
    name: 'Monochrome Braid Bracelet',
    handle: 'monochrome-braid-bracelet',
    variantId: 47325289775363,
    price: 0.00,
    image: STORAGE_BASE + '/bracelets/Monochrome Braid Bracelet.png',
    type: 'bracelet',
    description: "A sleek and versatile bracelet featuring a black-and-white braided design accented with polished gold-tone details.",
    specifications: {
      material: "Braided Cord with Gold-Tone Stainless Steel Accents, Hypoallergenic",
      length: "Standard bracelet length (7\" / 18 cm, Adjustable fit)",
      width: "N/A",
      clasp: "Slider Clasp",
      finish: "Matte Cord with High Polish Gold Accents",
      weight: "Light (comfortable for all-day wear)"
    }
  },
  {
    id: 'neon-twist',
    name: 'Neon Twist Bracelet',
    handle: 'neon-twist-bracelet',
    variantId: 47325289808131,
    price: 0.00,
    image: STORAGE_BASE + '/bracelets/Neon Twist Bracelet.png',
    type: 'bracelet',
    description: "A playful and energetic bracelet featuring a vibrant neon pink-and-white braided design, finished with gleaming gold-tone accents.",
    specifications: {
      material: "Braided Cord with Gold-Tone Stainless Steel Accents, Hypoallergenic",
      length: "Standard bracelet length (7\" / 18 cm, Adjustable fit)",
      width: "N/A",
      clasp: "Slider Clasp",
      finish: "Matte Cord with High Polish Gold Accents",
      weight: "Light (comfortable for all-day wear)"
    }
  },
  {
    id: 'ocean-weave',
    name: 'Ocean Weave Bracelet',
    handle: 'ocean-weave-bracelet',
    variantId: 47325289939203,
    price: 0.00,
    image: STORAGE_BASE + '/bracelets/Ocean Weave Bracelet.png',
    type: 'bracelet',
    description: "A cool and contemporary bracelet featuring a navy-and-silver braided design highlighted with glossy gold-tone accents.",
    specifications: {
      material: "Braided Cord with Gold-Tone Stainless Steel Accents, Hypoallergenic",
      length: "Standard bracelet length (7\" / 18 cm, Adjustable fit)",
      width: "N/A",
      clasp: "Slider Clasp",
      finish: "Matte Cord with High Polish Gold Accents",
      weight: "Light (comfortable for all-day wear)"
    }
  },
  {
    id: 'skyline-braid',
    name: 'Skyline Braid Bracelet',
    handle: 'skyline-braid-bracelet',
    variantId: 47325289971971,
    price: 0.00,
    image: STORAGE_BASE + '/bracelets/Skyline Braid Bracelet.png',
    type: 'bracelet',
    description: "A fresh and breezy bracelet in a light blue-and-white braided design, finished with polished gold-tone details.",
    specifications: {
      material: "Braided Cord with Gold-Tone Stainless Steel Accents, Hypoallergenic",
      length: "Standard bracelet length (7\" / 18 cm, Adjustable fit)",
      width: "N/A",
      clasp: "Slider Clasp",
      finish: "Matte Cord with High Polish Gold Accents",
      weight: "Light (comfortable for all-day wear)"
    }
  },
  {
    id: 'twist-elegance',
    name: 'Twist Elegance Bracelet',
    handle: 'twist-elegance-bracelet',
    variantId: 47325289906435,
    price: 650.00,
    image: STORAGE_BASE + '/bracelets/Twist Elegance Bracelet.png',
    type: 'bracelet',
    description: "A delicate gold toned bracelet featuring subtle twisted links that catch the light beautifully. Minimal yet refined, this piece is perfect for layering or wearing alone for a graceful touch of sophistication.",
    specifications: {
      material: "Stainless Steel with 18kt Gold Plating, Hypoallergenic",
      length: "Standard bracelet length (7\" / 18 cm)",
      width: "N/A",
      clasp: "Lobster Clasp",
      finish: "High Polish Gold",
      weight: "Light (comfortable for everyday wear)"
    }
  },
  {
    id: 'verdant-braid',
    name: 'Verdant Braid Bracelet',
    handle: 'verdant-braid-bracelet',
    variantId: 47325290004739,
    price: 0.00,
    image: STORAGE_BASE + '/bracelets/Verdant Braid Bracelet.png',
    type: 'bracelet',
    description: "A vibrant and refreshing bracelet in a rich green braided design, accented with gleaming gold-tone details.",
    specifications: {
      material: "Braided Cord with Gold-Tone Stainless Steel Accents, Hypoallergenic",
      length: "Standard bracelet length (7\" / 18 cm, Adjustable fit)",
      width: "N/A",
      clasp: "Slider Clasp",
      finish: "Matte Cord with High Polish Gold Accents",
      weight: "Light (comfortable for all-day wear)"
    }
  },
  // --- Necklaces ---
  {
    id: 'chain-01',
    name: 'Paperclip Link Necklace',
    handle: 'paperclip-link',
    variantId: 47314572148995,
    price: 1350.00,
    image: STORAGE_BASE + '/necklace/Paperclip Link Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-02',
    name: 'Twist Chain Necklace',
    handle: 'twist-chain',
    variantId: 47314572411139,
    price: 1550.00,
    image: STORAGE_BASE + '/necklace/Twist Chain Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-03',
    name: 'Golden Figaro Necklace',
    handle: 'golden-figaro',
    variantId: 47314572280067,
    price: 1350.00,
    image: STORAGE_BASE + '/necklace/Golden Figaro Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-04',
    name: 'Aurora Link Necklace',
    handle: 'aurora-link',
    variantId: 47314572214531,
    price: 1450.00,
    image: STORAGE_BASE + '/necklace/Aurora Link Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-05',
    name: 'Golden Miami Necklace',
    handle: 'golden-miami',
    variantId: 47314572312835,
    price: 1550.00,
    image: STORAGE_BASE + '/necklace/Golden Miami Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-06',
    name: 'Golden loop Necklace',
    handle: 'golden-loop-necklace',
    variantId: 47314572345603,
    price: 1450.00,
    image: STORAGE_BASE + '/necklace/Golden loop Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-07',
    name: 'Nautical Ring Necklace',
    handle: 'nautical-ring',
    variantId: 47314572083459,
    price: 1250.00,
    image: STORAGE_BASE + '/necklace/Nautical Ring Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-08',
    name: 'Oval Lock Necklace',
    handle: 'oval-lock',
    variantId: 47314572116227,
    price: 1150.00,
    image: STORAGE_BASE + '/necklace/Oval Lock Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-09',
    name: 'Paperclip Link (Thin) Necklace',
    price: 1250,
    image: STORAGE_BASE + '/necklace/Paperclip Link (Thin) Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-10',
    name: 'Thin Chain Necklace',
    price: 1250,
    image: STORAGE_BASE + '/necklace/Thin Chain Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  },
  {
    id: 'chain-11',
    name: 'Vero Link Necklace',
    handle: 'vero-link',
    variantId: 47314572443907,
    price: 1450.00,
    image: STORAGE_BASE + '/necklace/Vero Link Necklace.png',
    type: 'necklace',
    description: "Elegant necklace chain designed for versatility and style.",
    specifications: {
      material: "Sterling Silver 925",
      length: "45 cm",
      width: "2 mm",
      clasp: "Lobster clasp",
      finish: "Polished",
      weight: "~8 g"
    }
  }
];


export const CHARMS: Charm[] = [
  // Eternal Bond
  {
    id: "eb-1",
    name: "Bloom Vase Floral Charm",
    handle: 'bloom-vase-charm',
    variantId: 47314242011395,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Bloom Vase Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Bloom Vase Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Bloom Vase Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-2",
    name: "Blooming Lily Flower Charm",
    handle: 'blooming-lily-charm',
    variantId: 47314242109699,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blooming Lily Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blooming Lily Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blooming Lily Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-3",
    name: "Blossom Vase Floral Charm",
    handle: 'blossom-vase-charm',
    variantId: 47314242306307,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blossom Vase Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blossom Vase Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blossom Vase Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-4",
    name: "Blue Blossom Heart Charm",
    handle: 'blue-blossom-heart-charm',
    variantId: 47314242666755,
    price: 490.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blue Blossom Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blue Blossom Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blue Blossom Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-5",
    name: "Blue Meadow Bloom Charm",
    handle: 'blue-meadow-bloom-charm',
    variantId: 47314242404611,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blue Meadow Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blue Meadow Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blue Meadow Bloom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-6",
    name: "Blue Rose Floral Charm",
    handle: 'blue-rose-charm',
    variantId: 47314242371843,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blue Rose Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blue Rose Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blue Rose Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-7",
    name: "DescriBlue Heart Charm",
    handle: 'describlue-heart-charm',
    variantId: 47314242470147,
    price: 490.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = DescriBlue Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = DescriBlue Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/DescriBlue Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-8",
    name: "Eternal Rose Oval Charm",
    handle: 'eternal-rose-oval-charm',
    variantId: 47314241978627,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Eternal Rose Oval Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Eternal Rose Oval Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Eternal Rose Oval Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-9",
    name: "Folk Bloom Floral Charm",
    handle: 'folk-bloom-charm',
    variantId: 47314242076931,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Folk Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Folk Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Folk Bloom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-10",
    name: "Love Note Heart Charm",
    price: 740,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Love Note Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Love Note Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Love Note Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-11",
    name: "Mama Script Heart Charm",
    price: 740,
    category: "Eternal Bond",
    isBestSeller: true,
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Mama Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Mama Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Mama Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  {
    id: "eb-13",
    name: "Pop Heart Red Charm",
    price: 890,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Pop Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Pop Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Pop Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-14",
    name: "Red Heart Simple Charm",
    handle: 'red-heart-charm',
    variantId: 47314242633987,
    price: 490.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Red Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Red Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Red Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-15",
    name: "Rosette Bloom Floral Charm",
    handle: 'rosette-bloom-charm',
    variantId: 47314242208003,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Rosette Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Rosette Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Rosette Bloom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-16",
    name: "Scarlet Tulip Flower Charm",
    handle: 'scarlet-tulip-charm',
    variantId: 47314242437379,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Scarlet Tulip Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Scarlet Tulip Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Scarlet Tulip Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-17",
    name: "Starlit Crescent Moon Charm",
    price: 790,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Starlit Crescent Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Starlit Crescent Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Starlit Crescent Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-18",
    name: "Tulip Dawn Floral Charm",
    handle: 'tulip-dawn-charm',
    variantId: 47314242273539,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Tulip Dawn Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Tulip Dawn Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Tulip Dawn Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-19",
    name: "Twin Blossom Flower Charm",
    handle: 'twin-blossom-charm',
    variantId: 47314242142467,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Twin Blossom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Twin Blossom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Twin Blossom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Game On
  {
    id: "go-1",
    name: "Golden Ping Pong Passion Charm",
    handle: 'golden-ping-pong-passion-charm',
    variantId: 47314243027203,
    price: 590.00,
    category: "Game On",
    image: STORAGE_BASE + "/charms-cards/Game On/Label = Golden Ping Pong Passion.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Game On/Label = Golden Ping Pong Passion.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "go-2",
    isBestSeller: true,
    name: "Pickleball Spark Sport Charm",
    price: 790,
    category: "Game On",
    image: STORAGE_BASE + "/charms-cards/Game On/Label = Pickleball Spark Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Game On/Label = Pickleball Spark Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Game On/Pickleball Spark Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "go-3",
    name: "Pink Smash Tennis Charm",
    price: 840,
    category: "Game On",
    image: STORAGE_BASE + "/charms-cards/Game On/Label = Pink Smash Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Game On/Label = Pink Smash Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Game On/Pink Smash Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "go-4",
    name: "Silver Tennis Spark Charm",
    handle: 'silver-tennis-spark-charm',
    variantId: 47314242928899,
    price: 590.00,
    category: "Game On",
    image: STORAGE_BASE + "/charms-cards/Game On/Label = Silver Tennis Spark Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Game On/Label = Silver Tennis Spark Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Game On/Silver Tennis Spark Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "go-5",
    isBestSeller: true,
    name: "Tennis Ace Racket Charm",
    price: 690,
    category: "Game On",
    image: STORAGE_BASE + "/charms-cards/Game On/Label = Tennis Ace Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Game On/Label = Tennis Ace Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Game On/Tennis Ace Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "go-6",
    name: "Tennis Sparkle Racket Charm",
    handle: 'tennis-sparkle-racket-charm',
    variantId: 47314242994435,
    price: 590.00,
    category: "Game On",
    image: STORAGE_BASE + "/charms-cards/Game On/Label = Tennis Sparkle Racket Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Game On/Label = Tennis Sparkle Racket Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Game On/Tennis Sparkle Racket Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Guardian
  {
    id: "gu-1",
    name: "Aqua Vision Eye Charm",
    handle: 'eye-charm',
    price: 390.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Aqua Vision Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Aqua Vision Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Aqua Vision Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-2",
    name: "Blush Teardrop Eye Charm",
    handle: 'blush-teardrop-eye-charm',
    variantId: 47314244763907,
    price: 290.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Blush Teardrop Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Blush Teardrop Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Blush Teardrop Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-3",
    variantId: 47314244468995,
    handle: 'celestial-eye-charm',
    name: "Celestial Eye Protection Charm",
    price: 590.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Celestial Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Celestial Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Celestial Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-4",
    variantId: 47314245026051,
    handle: 'crescent-star-charm',
    name: "Crescent Star Guardian Charm",
    price: 290.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Crescent Star Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Crescent Star Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Crescent Star Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-5",
    variantId: 47314244600067,
    handle: 'guardian-eye-charm',
    name: "Guardian Eye Mystic Charm",
    price: 590.00,
    category: "Guardian",
    isBestSeller: true,
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Guardian Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Guardian Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Guardian Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-6",
    variantId: 47314244960515,
    handle: 'guardian-hamsa-charm',
    name: "Guardian Hamsa Hand Charm",
    price: 290.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Guardian Hamsa Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Guardian Hamsa Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Guardian Hamsa Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-7",
    variantId: 47314244894979,
    handle: 'guardian-hand-charm',
    name: "Guardian Hand Protection Charm",
    price: 590.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Guardian Hand Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Guardian Hand Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Guardian Hand Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-8",
    isBestSeller: true,
    name: "Guardian Heart Eye Charm",
    handle: 'guardian-heart-eye-charm',
    variantId: 47314244567299,
    price: 490.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Guardian Heart Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Guardian Heart Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Guardian Heart Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-9",
    name: "Luminous Eye Charm",
    handle: 'luminous-eye-charm',
    variantId: 47314244665603,
    price: 490.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Luminous Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Luminous Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Luminous Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-10",
    variantId: 47314244501763,
    handle: 'midnight-eye-charm',
    name: "Midnight Eye Protection Charm",
    price: 590.00,
    category: "Guardian",
    isBestSeller: true,
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Midnight Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Midnight Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Midnight Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-11",
    variantId: 47314244436227,
    handle: 'mystic-eye-charm',
    name: "Mystic Eye Guardian Charm",
    price: 590.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Mystic Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Mystic Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Mystic Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-12",
    variantId: 47314244862211,
    handle: 'north-star-charm',
    name: "North Star Guide Charm",
    price: 490.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = North Star Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = North Star Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/North Star Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-13",
    variantId: 47314244927747,
    handle: 'prism-eye-charm',
    name: "Prism Eye Crystal Charm",
    price: 690.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Prism Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Prism Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Prism Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-14",
    name: "Radiant Eye Charm - Large",
    handle: 'radiant-eye-charm',
    variantId: 47314244632835,
    price: 490.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Radiant Eye Charm - 3-1.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Radiant Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Radiant Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-15",
    name: "Radiant Eye Charm - Medium",
    handle: 'radiant-eye-charm',
    variantId: 47314244632835,
    price: 490.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Radiant Eye Charm - 3.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Radiant Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Radiant Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-16",
    name: "Radiant Eye Charm - Small",
    handle: 'radiant-eye-charm',
    variantId: 47314244632835,
    price: 490.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Radiant Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Radiant Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Radiant Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-17",
    variantId: 47314244698371,
    handle: 'sentinel-eye-charm',
    name: "Sentinel Eye Protection Charm",
    price: 590.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Sentinel Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Sentinel Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Sentinel Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-18",
    name: "Solara Sun Eye Charm",
    handle: 'eye-charm',
    price: 390.00,
    category: "Guardian",
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Solara Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Solara Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Solara Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "gu-19",
    variantId: 47314244993283,
    handle: 'turquoise-eye-charm',
    name: "Turquoise Eye Protection Charm",
    price: 490.00,
    category: "Guardian",
    isBestSeller: true,
    image: STORAGE_BASE + "/charms-cards/Guardian/Label = Turquoise Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Guardian/Label = Turquoise Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Guardian/Turquoise Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // LoveStruck
  {
    id: "ls-1",
    name: "Blooming Heart Floral Charm",
    handle: 'blooming-heart-charm',
    variantId: 47314243518723,
    price: 690.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Blooming Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Blooming Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Blooming Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-2",
    name: "Blush Heart Simple Charm",
    handle: 'blush-heart-charm',
    variantId: 47314244239619,
    price: 290.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Blush Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Blush Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Blush Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-3",
    name: "Crystal Green Candy Charm",
    handle: 'crystal-green-candy',
    variantId: 47314243453187,
    price: 690.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Crystal Green candy.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Crystal Green candy.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Crystal Green candy.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-4",
    name: "Crystal Heart Sparkle Charm",
    price: 840,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Crystal Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Crystal Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Crystal Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-5",
    name: "Crystal Pink Candy Charm",
    handle: 'crystal-pink-candy',
    variantId: 47314243420419,
    price: 690.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Crystal Pink candy.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Crystal Pink candy.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Crystal Pink candy.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-6",
    name: "Daisy Heart Floral Charm",
    handle: 'daisy-heart-charm',
    variantId: 47314244043011,
    price: 590.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Daisy Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Daisy Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Daisy Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-7",
    name: "Ember Heart Fire Charm",
    price: 690,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Ember Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Ember Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Ember Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-8",
    isBestSeller: true,
    name: "Emerald Heart Gem Charm",
    price: 740,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Emerald Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Emerald Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Emerald Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-9",
    name: "Eternal Heart Love Charm",
    price: 690,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Eternal Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Eternal Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Eternal Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-10",
    isBestSeller: true,
    name: "Heart of Vision Charm",
    handle: 'heart-of-vision-charm',
    variantId: 47314244108547,
    price: 490.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Heart of Vision Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Heart of Vision Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-11",
    name: "Love Letter Envelope Charm",
    price: 790,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Love Letter Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Love Letter Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Love Letter Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-12",
    name: "Peach Blush Heart Charm",
    handle: 'peach-blush-heart-charm',
    variantId: 47314244370691,
    price: 290.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Peach Blush Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Peach Blush Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-13",
    name: "Pure Heart Simple Charm",
    handle: 'pure-heart-charm',
    variantId: 47314244272387,
    price: 290.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Pure Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Pure Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Pure Heart Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  {
    id: "ls-15",
    isBestSeller: true,
    name: "Sacred Heart Divine Charm",
    price: 790,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Sacred Heart charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Sacred Heart charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/LoveStruck/Sacred Heart charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Persona (Initials & Zodiacs)
  {
    id: "pe-1",
    variantId: 47646207082755,
    name: "Letter A Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = A Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = A Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/A Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-2",
    variantId: 47646207115523,
    name: "Letter B Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = B Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = B Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/B Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-3",
    variantId: 47646207148291,
    name: "Letter D Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = D Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = D Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/D Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-4",
    variantId: 47646207181059,
    name: "Letter E Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = E Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = E Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/E Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-5",
    variantId: 47646207213827,
    name: "Letter H Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = H Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = H Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/H Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-6",
    variantId: 47646207246595,
    name: "Letter I Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = I Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = I Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/I Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-7",
    variantId: 47646207279363,
    name: "Letter M Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = M Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = M Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/M Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-8",
    variantId: 47646207312131,
    name: "Letter N Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = N Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = N Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/N Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-9",
    variantId: 47646207344899,
    name: "Letter O Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = O Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = O Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/O Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-10",
    variantId: 47646207377667,
    name: "Letter P Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = P Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = P Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/P Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-11",
    variantId: 47646207410435,
    name: "Letter Q Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Q Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Q Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/Q Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-12",
    variantId: 47646207443203,
    name: "Letter R Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = R Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = R Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/R Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-13",
    variantId: 47646207475971,
    name: "Letter T Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = T Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = T Initial Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/T Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-14",
    variantId: 47646207508739,
    name: "Letter U Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = U Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = U Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-15",
    variantId: 47646207541507,
    name: "Letter V Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = V Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = V Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-16",
    variantId: 47646207574275,
    name: "Letter X Initial Charm",
    price: 690,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = X Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = X Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-17",
    variantId: 47557882708227,
    handle: 'initials',
    name: "Letter Y Initial Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Y Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Y Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-18",
    variantId: 47557882740995,
    handle: 'initials',
    name: "Letter Z Initial Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Z Initial Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Z Initial Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Zodiacs
  {
    id: "pe-z1",
    variantId: 47557924421891,
    handle: 'zodiac-signs',
    name: "Aquarius Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Aquarius Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Aquarius Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z2",
    variantId: 47557924487427,
    handle: 'zodiac-signs',
    name: "Aries Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Aries Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Aries Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z3",
    variantId: 47557924389123,
    handle: 'zodiac-signs',
    name: "Capricorn Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Capricorn Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Capricorn Zodiac Pendant.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/Capricorn Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z4",
    variantId: 47557924552963,
    handle: 'zodiac-signs',
    name: "Gemini Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Gemini Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Gemini Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z5",
    variantId: 47557924454659,
    handle: 'zodiac-signs',
    name: "Pisces Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Pisces Zodiac Pendan.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Pisces Zodiac Pendan.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z6",
    variantId: 47557924749571,
    handle: 'zodiac-signs',
    name: "Sagittarius Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Sagittarius Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Sagittarius Zodiac Pendant.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/Sagittarius Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z7",
    variantId: 47557924716803,
    handle: 'zodiac-signs',
    name: "Scorpio Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Scorpio Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Scorpio Zodiac Pendant.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/Scorpio Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z8",
    variantId: 47557924520195,
    handle: 'zodiac-signs',
    name: "Taurus Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Taurus Zodiac Pendan.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Taurus Zodiac Pendan.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "pe-z9",
    variantId: 47557924651267,
    handle: 'zodiac-signs',
    name: "Virgo Zodiac Pendant Charm",
    price: 490.00,
    category: "Persona",
    image: STORAGE_BASE + "/charms-canvas/Persona/Label = Virgo Zodiac Pendant.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Persona/Label = Virgo Zodiac Pendant.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Persona/Virgo Zodiac Pendant.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Sugar Pop
  {
    id: "sp-1",
    variantId: 47314246140163,
    handle: 'acorn-strength-charm',
    name: "Acorn Strength Nature Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Acorn Strength Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Acorn Strength Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Acorn Strength Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-2",
    variantId: 47314246828291,
    handle: 'aurora-croissant-charm',
    name: "Aurora Croissant Sweet Charm",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Aurora Croissant Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Aurora Croissant Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Aurora Croissant Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-3",
    variantId: 47314246238467,
    handle: 'avocado-love-charm',
    name: "Avocado Love Food Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Avocado Love Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Avocado Love Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Avocado Love Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-4",
    variantId: 47314246697219,
    handle: 'avocado-toast-charm',
    name: "Avocado Toast Brunch Charm",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Avocado Toast Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Avocado Toast Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Avocado Toast Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-5",
    variantId: 47314246435075,
    handle: 'banana-fun-charm',
    name: "Banana Fun Fruit Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Banana Fun Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Banana Fun Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Banana Fun Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-6",
    variantId: 47314246402307,
    handle: 'burger-bite-charm',
    name: "Burger Bite Food Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Burger Bite Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Burger Bite Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Burger Bite Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-7",
    isBestSeller: true,
    name: "Cherry Pop Fruit Charm",
    price: 840,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Cherry Pop Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Cherry Pop Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Cherry Pop Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-8",
    isBestSeller: true,
    name: "Coffee Cup Morning Charm",
    price: 690,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Coffee Cup Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Coffee Cup Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Coffee Cup Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-9",
    variantId: 47314246172931,
    handle: 'croissant-charm',
    name: "Croissant Pastry Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Croissant Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Croissant Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Croissant Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-10",
    isBestSeller: true,
    name: "Donut Delight Sweet Charm",
    price: 790,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Donut Delight Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Donut Delight Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Donut Delight Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-11",
    name: "Golden Croissant Charm",
    handle: 'golden-croissant-charm',
    variantId: 47314246533379,
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Golden Croissant Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Golden Croissant Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Golden Croissant Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-12",
    variantId: 47314246762755,
    handle: 'grapes-charm',
    name: "Grapes Fruit Fresh Charm",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Grapes Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Grapes Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Grapes Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-13",
    variantId: 47314246467843,
    handle: 'hotdog-charm',
    name: "Hotdog Fast Food Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Hotdog Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Hotdog Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Hotdog Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-14",
    variantId: 47314246205699,
    handle: 'mango-bliss-charm',
    name: "Mango Bliss Fruit Charm",
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Mango Bliss Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Mango Bliss Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Mango Bliss Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-15",
    variantId: 47314246729987,
    handle: 'mango-charm',
    name: "Mango Fruit Fresh Charm",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Mango Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Mango Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Mango Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-16",
    isBestSeller: true,
    name: "Mystic Mushroom Charm",
    handle: 'mystic-mushroom-charm',
    variantId: 47314246304003,
    price: 490.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Mystic Mushroom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Mystic Mushroom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Mystic Mushroom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-17",
    name: "Orange Zest Fruit Charm",
    price: 840,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Orange Zest Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Orange Zest Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Orange Zest Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-18",
    name: "Papaya Fruit Fresh Charm",
    price: 840,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Papaya Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Papaya Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Papaya Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-19",
    variantId: 47314246861059,
    handle: 'pink-donut-with-golden-sprinkles-charm',
    name: "Pink Donut Gold Sprinkles",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Pink Donut with Golden Sprinkles Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Pink Donut with Golden Sprinkles Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Pink Donut with Golden Sprinkles Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-20",
    variantId: 47314246107395,
    handle: 'pink-popsicle-charm',
    name: "Pink Popsicle Sweet Charm",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Pink Popsicle Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Pink Popsicle Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Pink Popsicle Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-21",
    variantId: 47314246795523,
    handle: 'popsicle-charm',
    name: "Popsicle Summer Charm",
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Popsicle Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Popsicle Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Popsicle Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-22",
    name: "Strawberry Shortcake Charm",
    handle: 'strawberry-shortcake-charm',
    variantId: 47314246926595,
    price: 390.00,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Strawberry Shortcake Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Strawberry Shortcake Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Strawberry Shortcake Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "sp-23",
    isBestSeller: true,
    name: "Sunny Toast Brunch Charm",
    price: 840,
    category: "Sugar Pop",
    image: STORAGE_BASE + "/charms-cards/Sugarpop/Label = Sunny Toast Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Sugar Pop/Label = Sunny Toast Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Sugar Pop/Sunny Toast Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Travel & Wild
  {
    id: "wf-1",
    isBestSeller: true,
    name: "Aurora Fish Ocean Charm",
    price: 690,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Aurora Fish Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Aurora Fish Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Aurora Fish Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-2",
    variantId: 47314245484803,
    handle: 'bloom-charm',
    name: "Bloom Flower Wild Charm",
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Bloom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-3",
    name: "Blue Rose Oval Charm",
    handle: 'blue-rose-oval-charm',
    variantId: 47314245124355,
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Blue Rose Oval Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Blue Rose Oval Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Blue Rose Oval Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-4",
    variantId: 47314245091587,
    handle: 'emerald-bloom-charm',
    name: "Emerald Bloom Wild Charm",
    price: 290.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Emerald Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Emerald Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Emerald Bloom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-5",
    variantId: 47302446940419,
    handle: 'evil-eye-charm-necklace',
    name: "Eye of Protection Charm",
    price: 3300.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Eye Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Eye Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Eye Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-6",
    variantId: 47314245222659,
    handle: 'flutter-charm',
    name: "Flutter Butterfly Charm",
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Flutter Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Flutter Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Flutter Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-7",
    variantId: 47314245746947,
    handle: 'golden-conch-charm',
    name: "Golden Conch Shell Charm",
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Golden Conch Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Golden Conch Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Golden Conch Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-8",
    variantId: 47314246009091,
    handle: 'golden-elephant-charm',
    name: "Golden Elephant Lucky Charm",
    price: 490.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Golden Elephant Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Golden Elephant Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Golden Elephant Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-9",
    variantId: 47314246041859,
    handle: 'golden-koi-charm',
    name: "Golden Koi Fish Charm",
    price: 490.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Golden Koi Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Golden Koi Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Golden Koi Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-10",
    variantId: 47314245648643,
    handle: 'palm-paradise-charm',
    name: "Golden Palm Tree Charm",
    price: 490.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Golden Palm Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Golden Palm Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Golden Palm Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-11",
    variantId: 47314245157123,
    handle: 'lavender-wave-charm',
    name: "Lavender Wave Ocean Charm",
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Lavender Wave Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Lavender Wave Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Lavender Wave Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-12",
    name: "Lotus Bloom Flower Charm",
    handle: 'lotus-bloom-charm',
    variantId: 47314245550339,
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Lotus Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Lotus Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Lotus Bloom Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-13",
    name: "Lucky Horseshoe Charm",
    handle: 'lucky-horseshoe-charm',
    variantId: 47314245517571,
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Lucky Horseshoe Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Lucky Horseshoe Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Lucky Horseshoe Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-14",
    variantId: 47314245714179,
    handle: 'lustrous-pearl-charm',
    name: "Lustrous Pearl Ocean Charm",
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Lustrous Pearl Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Lustrous Pearl Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Lustrous Pearl Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-15",
    variantId: 47314246074627,
    handle: 'majestic-koi-charm',
    name: "Majestic Koi Fish Charm",
    price: 690.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Majestic Koi Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Majestic Koi Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Majestic Koi Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-16",
    variantId: 47314245812483,
    handle: 'midnight-palm-charm',
    name: "Midnight Palm Tree Charm",
    price: 390.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Midnight Palm Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Midnight Palm Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Midnight Palm Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-17",
    variantId: 47314245583107,
    handle: 'ocean-shell-charm',
    name: "Ocean Shell Seashell Charm",
    price: 690.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Ocean Shell Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Ocean Shell Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Ocean Shell Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-18",
    isBestSeller: true,
    name: "Palm Paradise Tree Charm",
    price: 790,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Palm Paradise Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Palm Paradise Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Palm Paradise Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-19",
    name: "Pearl Fish Ocean Charm",
    price: 840,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Pearl Fish Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Pearl Fish Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Pearl Fish Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-20",
    variantId: 47314245845251,
    handle: 'pink-lagoon-charm',
    name: "Pink Lagoon Ocean Charm",
    price: 590.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Pink Lagoon Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Pink Lagoon Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Pink Lagoon Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-21",
    variantId: 47314245976323,
    handle: 'seafoam-dream-charm',
    name: "Seafoam Dream Ocean Charm",
    price: 590.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Seafoam Dream Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Seafoam Dream Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Seafoam Dream Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-22",
    variantId: 47314245681411,
    handle: 'sunny-fish-charm',
    name: "Sunny Fish Ocean Charm",
    price: 490.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Sunny Fish Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Sunny Fish Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Sunny Fish Charm.png",
    description: "Handcrafted charm featuring premium enamel finish and intricate details. Perfect for personalizing your jewelry collection and expressing your unique style.",
    specifications: {
      style: "Single charm",
      size: "~2 cm",
      weight: "~3 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "wf-23",
    isBestSeller: true,
    name: "Wanderlust Trio Travel Charm",
    handle: 'wanderlust-trio',
    variantId: 47314245615875,
    price: 690.00,
    category: "Travel & Wild",
    image: STORAGE_BASE + "/charms-cards/Wild & Free/Label = Wanderlust Trio.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Wild & Free/Label = Wanderlust Trio.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Wild & Free/Wanderlust Trio.png",
    description: "Three symbols of freedom and creativity – a crystal camera, vibrant skateboard, and golden airplane. For those who explore, create, and play.",
    specifications: {
      style: "Cluster charm",
      motifs: "Camera, Suitcase, Airplane",
      size: "~2.5 cm drop",
      weight: "~4 g",
      material: "Stainless Steel with Gold Plating",
      enamel: "Multicolour (green/purple)",
      accent: "Clear crystal stone",
      finish: "Gloss enamel + gold plating",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  }
];
