export interface Product {
  id: string;
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
  name: string;
  price: number;
  image: string;
  previewImage?: string; // High-quality preview version for canvas
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  specifications: Record<string, string>;
}

export const BASE_PRODUCTS: Product[] = [
  {
    id: 'classic-loop',
    name: 'Classic Loop Bracelet',
    price: 850,
    image: '/bracelets/Classic Loop bracelet.png',
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
    price: 950,
    image: '/bracelets/Lustre Link bracelet.png',
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
    price: 1100,
    image: '/bracelets/Dual Link Bracelet.png',
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
    id: 'paper-clip',
    name: 'Paper Clip Bracelet',
    price: 750,
    image: '/bracelets/paper clip bracelet.png',
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
    price: 1200,
    image: '/bracelets/Golden Charm Chain Bracelet.png',
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
    price: 1350,
    image: '/bracelets/Luxe Chain Bracelet.png',
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
    price: 850,
    image: '/bracelets/Monochrome Braid Bracelet.png',
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
    price: 850,
    image: '/bracelets/Neon Twist Bracelet.png',
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
    price: 850,
    image: '/bracelets/Ocean Weave Bracelet.png',
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
    price: 850,
    image: '/bracelets/Skyline Braid Bracelet.png',
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
    price: 650,
    image: '/bracelets/Twist Elegance Bracelet.png',
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
    price: 850,
    image: '/bracelets/Verdant Braid Bracelet.png',
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
    price: 1250,
    image: '/necklace/Paperclip Link Necklace.png',
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
    price: 1250,
    image: '/necklace/Twist Chain Necklace.png',
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
    price: 1250,
    image: '/necklace/Golden Figaro Necklace.png',
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
    price: 1250,
    image: '/necklace/Aurora Link Necklace.png',
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
    price: 1250,
    image: '/necklace/Golden Miami Necklace.png',
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
    price: 1250,
    image: '/necklace/Golden loop Necklace.png',
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
    price: 1250,
    image: '/necklace/Nautical Ring Necklace.png',
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
    price: 1250,
    image: '/necklace/Oval Lock Necklace.png',
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
    image: '/necklace/Paperclip Link (Thin) Necklace.png',
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
    image: '/necklace/Thin Chain Necklace.png',
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
    price: 1250,
    image: '/necklace/Vero Link Necklace.png',
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
  // Eternal Bloom
  {
    id: "eb-1",
    name: "Bloom Vase Floral Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Bloom Vase Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Bloom Vase Charm.png",
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
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blooming Lily Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Blooming Lily Charm.png",
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
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blossom Vase Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Blossom Vase Charm.png",
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
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blue Blossom Heart Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Blue Blossom Heart Charm.png",
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
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blue Meadow Bloom Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Blue Meadow Bloom Charm.png",
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
    price: 840,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blue Rose Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Blue Rose Charm.png",
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
    price: 790,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = DescriBlue Heart Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = DescriBlue Heart Charm.png",
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
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Eternal Rose Oval Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Eternal Rose Oval Charm.png",
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
    price: 740,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Folk Bloom Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Folk Bloom Charm.png",
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
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Love Note Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Love Note Charm.png",
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
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Mama Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Mama Charm.png",
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
    id: "eb-12",
    name: "Mom’s Heart Floral Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Mom’s Heart Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Mom’s Heart Charm.png",
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
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Pop Heart Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Pop Heart Charm.png",
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
    price: 840,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Red Heart Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Red Heart Charm.png",
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
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Rosette Bloom Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Rosette Bloom Charm.png",
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
    price: 740,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Scarlet Tulip Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Scarlet Tulip Charm.png",
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
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Starlit Crescent Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Starlit Crescent Charm.png",
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
    price: 890,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Tulip Dawn Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Tulip Dawn Charm.png",
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
    price: 790,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Twin Blossom Charm.png",
    previewImage: "/charms-canvas/Eternal bloom/Label = Twin Blossom Charm.png",
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
    price: 790,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Golden Ping Pong Passion.png",
    previewImage: "/charms-canvas/Game On/Label = Golden Ping Pong Passion.png",
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
    name: "Pickleball Spark Sport Charm",
    price: 790,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Pickleball Spark Charm.png",
    previewImage: "/charms-canvas/Game On/Label = Pickleball Spark Charm.png",
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
    image: "/charms-cards/Game On/Label = Pink Smash Charm.png",
    previewImage: "/charms-canvas/Game On/Label = Pink Smash Charm.png",
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
    price: 890,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Silver Tennis Spark Charm.png",
    previewImage: "/charms-canvas/Game On/Label = Silver Tennis Spark Charm.png",
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
    name: "Tennis Ace Racket Charm",
    price: 690,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Tennis Ace Charm.png",
    previewImage: "/charms-canvas/Game On/Label = Tennis Ace Charm.png",
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
    price: 890,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Tennis Sparkle Racket Charm.png",
    previewImage: "/charms-canvas/Game On/Label = Tennis Sparkle Racket Charm.png",
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
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Aqua Vision Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Aqua Vision Charm.png",
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
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Blush Teardrop Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Blush Teardrop Eye Charm.png",
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
    name: "Celestial Eye Protection Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Celestial Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Celestial Eye Charm.png",
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
    name: "Crescent Star Guardian Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Crescent Star Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Crescent Star Charm.png",
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
    name: "Guardian Eye Mystic Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Guardian Eye Charm.png",
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
    name: "Guardian Hamsa Hand Charm",
    price: 690,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Hamsa Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Guardian Hamsa Charm.png",
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
    name: "Guardian Hand Protection Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Hand Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Guardian Hand Charm.png",
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
    name: "Guardian Heart Eye Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Heart Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Guardian Heart Eye Charm.png",
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
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Luminous Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Luminous Eye Charm.png",
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
    name: "Midnight Eye Protection Charm",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Midnight Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Midnight Eye Charm.png",
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
    name: "Mystic Eye Guardian Charm",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Mystic Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Mystic Eye Charm.png",
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
    name: "North Star Guide Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = North Star Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = North Star Charm.png",
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
    name: "Prism Eye Crystal Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Prism Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Prism Eye Charm.png",
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
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Radiant Eye Charm - 3-1.png",
    previewImage: "/charms-canvas/Guardian/Label = Radiant Eye Charm.png",
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
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Radiant Eye Charm - 3.png",
    previewImage: "/charms-canvas/Guardian/Label = Radiant Eye Charm.png",
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
    price: 690,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Radiant Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Radiant Eye Charm.png",
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
    name: "Sentinel Eye Protection Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Sentinel Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Sentinel Eye Charm.png",
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
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Solara Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Solara Charm.png",
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
    name: "Turquoise Eye Protection Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Turquoise Eye Charm.png",
    previewImage: "/charms-canvas/Guardian/Label = Turquoise Eye Charm.png",
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
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Blooming Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Blooming Heart Charm.png",
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
    price: 690,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Blush Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Blush Heart Charm.png",
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
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Crystal Green candy.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Crystal Green candy.png",
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
    image: "/charms-cards/Lovestruck/Label = Crystal Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Crystal Heart Charm.png",
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
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Crystal Pink candy.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Crystal Pink candy.png",
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
    price: 740,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Daisy Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Daisy Heart Charm.png",
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
    image: "/charms-cards/Lovestruck/Label = Ember Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Ember Heart Charm.png",
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
    name: "Emerald Heart Gem Charm",
    price: 740,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Emerald Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Emerald Heart Charm.png",
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
    image: "/charms-cards/Lovestruck/Label = Eternal Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Eternal Heart Charm.png",
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
    name: "Heart of Vision Charm",
    price: 690,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Heart of Vision Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Heart of Vision Charm.png",
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
    image: "/charms-cards/Lovestruck/Label = Love Letter Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Love Letter Charm.png",
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
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Peach Blush Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Peach Blush Heart Charm.png",
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
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Pure Heart Charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Pure Heart Charm.png",
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
    name: "Sacred Heart Divine Charm",
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/Lovestruck/Label = Sacred Heart charm.png",
    previewImage: "/charms-canvas/Lovestruck/Label = Sacred Heart charm.png",
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
    name: "Letter A Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = A Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = A Initial Charm.png",
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
    name: "Letter B Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = B Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = B Initial Charm.png",
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
    name: "Letter D Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = D Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = D Initial Charm.png",
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
    name: "Letter E Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = E Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = E Initial Charm.png",
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
    name: "Letter H Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = H Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = H Initial Charm.png",
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
    name: "Letter I Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = I Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = I Initial Charm.png",
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
    name: "Letter M Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = M Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = M Initial Charm.png",
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
    name: "Letter N Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = N Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = N Initial Charm.png",
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
    name: "Letter O Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = O Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = O Initial Charm.png",
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
    name: "Letter P Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = P Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = P Initial Charm.png",
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
    name: "Letter Q Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Q Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = Q Initial Charm.png",
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
    name: "Letter R Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = R Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = R Initial Charm.png",
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
    name: "Letter T Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = T Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = T Initial Charm.png",
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
    name: "Letter U Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = U Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = U Initial Charm.png",
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
    name: "Letter V Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = V Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = V Initial Charm.png",
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
    name: "Letter X Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = X Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = X Initial Charm.png",
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
    name: "Letter Y Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Y Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = Y Initial Charm.png",
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
    name: "Letter Z Initial Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Z Initial Charm.png",
    previewImage: "/charms-canvas/Persona/Label = Z Initial Charm.png",
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
    name: "Aquarius Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Aquarius Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Aquarius Zodiac Pendant.png",
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
    name: "Aries Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Aries Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Aries Zodiac Pendant.png",
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
    name: "Capricorn Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Capricorn Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Capricorn Zodiac Pendant.png",
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
    name: "Gemini Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Gemini Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Gemini Zodiac Pendant.png",
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
    name: "Pisces Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Pisces Zodiac Pendan.png",
    previewImage: "/charms-canvas/Persona/Label = Pisces Zodiac Pendan.png",
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
    name: "Sagittarius Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Sagittarius Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Sagittarius Zodiac Pendant.png",
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
    name: "Scorpio Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Scorpio Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Scorpio Zodiac Pendant.png",
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
    name: "Taurus Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Taurus Zodiac Pendan.png",
    previewImage: "/charms-canvas/Persona/Label = Taurus Zodiac Pendan.png",
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
    name: "Virgo Zodiac Pendant Charm",
    price: 690,
    category: "Persona",
    image: "/charms-cards/Persona/Label = Virgo Zodiac Pendant.png",
    previewImage: "/charms-canvas/Persona/Label = Virgo Zodiac Pendant.png",
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
    name: "Acorn Strength Nature Charm",
    price: 690,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Acorn Strength Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Acorn Strength Charm.png",
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
    name: "Aurora Croissant Sweet Charm",
    price: 840,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Aurora Croissant Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Aurora Croissant Charm.png",
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
    name: "Avocado Love Food Charm",
    price: 790,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Avocado Love Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Avocado Love Charm.png",
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
    name: "Avocado Toast Brunch Charm",
    price: 840,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Avocado Toast Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Avocado Toast Charm.png",
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
    name: "Banana Fun Fruit Charm",
    price: 740,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Banana Fun Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Banana Fun Charm.png",
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
    name: "Burger Bite Food Charm",
    price: 690,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Burger Bite Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Burger Bite Charm.png",
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
    name: "Cherry Pop Fruit Charm",
    price: 840,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Cherry Pop Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Cherry Pop Charm.png",
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
    name: "Coffee Cup Morning Charm",
    price: 690,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Coffee Cup Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Coffee Cup Charm.png",
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
    name: "Croissant Pastry Charm",
    price: 740,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Croissant Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Croissant Charm.png",
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
    name: "Donut Delight Sweet Charm",
    price: 790,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Donut Delight Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Donut Delight Charm.png",
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
    price: 790,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Golden Croissant Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Golden Croissant Charm.png",
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
    name: "Grapes Fruit Fresh Charm",
    price: 690,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Grapes Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Grapes Charm.png",
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
    name: "Hotdog Fast Food Charm",
    price: 890,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Hotdog Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Hotdog Charm.png",
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
    name: "Mango Bliss Fruit Charm",
    price: 890,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Mango Bliss Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Mango Bliss Charm.png",
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
    name: "Mango Fruit Fresh Charm",
    price: 740,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Mango Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Mango Charm.png",
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
    name: "Mystic Mushroom Charm",
    price: 840,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Mystic Mushroom Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Mystic Mushroom Charm.png",
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
    image: "/charms-cards/Sugarpop/Label = Orange Zest Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Orange Zest Charm.png",
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
    image: "/charms-cards/Sugarpop/Label = Papaya Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Papaya Charm.png",
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
    name: "Pink Donut Gold Sprinkles",
    price: 890,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Pink Donut with Golden Sprinkles Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Pink Donut with Golden Sprinkles Charm.png",
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
    name: "Pink Popsicle Sweet Charm",
    price: 740,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Pink Popsicle Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Pink Popsicle Charm.png",
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
    name: "Popsicle Summer Charm",
    price: 740,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Popsicle Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Popsicle Charm.png",
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
    price: 740,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Strawberry Shortcake Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Strawberry Shortcake Charm.png",
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
    name: "Sunny Toast Brunch Charm",
    price: 840,
    category: "Sugar Pop",
    image: "/charms-cards/Sugarpop/Label = Sunny Toast Charm.png",
    previewImage: "/charms-canvas/Sugar Pop/Label = Sunny Toast Charm.png",
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

  // Wild & Free
  {
    id: "wf-1",
    name: "Aurora Fish Ocean Charm",
    price: 690,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Aurora Fish Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Aurora Fish Charm.png",
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
    name: "Bloom Flower Wild Charm",
    price: 890,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Bloom Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Bloom Charm.png",
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
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Blue Rose Oval Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Blue Rose Oval Charm.png",
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
    name: "Emerald Bloom Wild Charm",
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Emerald Bloom Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Emerald Bloom Charm.png",
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
    name: "Eye of Protection Charm",
    price: 790,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Eye Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Eye Charm.png",
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
    name: "Flutter Butterfly Charm",
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Flutter Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Flutter Charm.png",
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
    name: "Golden Conch Shell Charm",
    price: 890,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Golden Conch Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Golden Conch Charm.png",
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
    name: "Golden Elephant Lucky Charm",
    price: 890,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Golden Elephant Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Golden Elephant Charm.png",
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
    name: "Golden Koi Fish Charm",
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Golden Koi Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Golden Koi Charm.png",
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
    name: "Golden Palm Tree Charm",
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Golden Palm Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Golden Palm Charm.png",
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
    name: "Lavender Wave Ocean Charm",
    price: 790,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Lavender Wave Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Lavender Wave Charm.png",
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
    price: 740,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Lotus Bloom Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Lotus Bloom Charm.png",
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
    price: 690,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Lucky Horseshoe Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Lucky Horseshoe Charm.png",
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
    name: "Lustrous Pearl Ocean Charm",
    price: 790,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Lustrous Pearl Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Lustrous Pearl Charm.png",
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
    name: "Majestic Koi Fish Charm",
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Majestic Koi Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Majestic Koi Charm.png",
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
    name: "Midnight Palm Tree Charm",
    price: 740,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Midnight Palm Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Midnight Palm Charm.png",
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
    name: "Ocean Shell Seashell Charm",
    price: 840,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Ocean Shell Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Ocean Shell Charm.png",
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
    name: "Palm Paradise Tree Charm",
    price: 790,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Palm Paradise Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Palm Paradise Charm.png",
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
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Pearl Fish Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Pearl Fish Charm.png",
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
    name: "Pink Lagoon Ocean Charm",
    price: 890,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Pink Lagoon Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Pink Lagoon Charm.png",
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
    name: "Seafoam Dream Ocean Charm",
    price: 790,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Seafoam Dream Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Seafoam Dream Charm.png",
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
    name: "Sunny Fish Ocean Charm",
    price: 690,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Sunny Fish Charm.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Sunny Fish Charm.png",
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
    name: "Wanderlust Trio Travel Charm",
    price: 890,
    category: "Wild & Free",
    image: "/charms-cards/Wild & Free/Label = Wanderlust Trio.png",
    previewImage: "/charms-canvas/Wild & Free/Label = Wanderlust Trio.png",
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
