
import { STORAGE_BASE } from './constants';

export interface Product {
  id: string;
  handle?: string;
  productId?: number;
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
  productId?: number;
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
    id: 'lustre-link',
    name: 'Lustre Link Bracelet',
    handle: 'lustre-link-bracelet',
    productId: 9118981390595,
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
    id: "paper-clip",
    handle: 'paperclip-bracelet',
    name: 'Paper Clip Bracelet',
    productId: 9135397503235,
    variantId: 47325603299587,
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
    id: 'golden-link',
    name: 'Golden Link Bracelet',
    handle: 'golden-link-bracelet',
    productId: 9135212396803,
    variantId: 47325289775363,
    price: 850.00,
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
    id: 'monochrome-braid',
    name: 'Monochrome Braid Bracelet',
    handle: 'monochrome-braid-bracelet',
    productId: 9135213019395,
    variantId: 47325289775363,
    price: 850.00,
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
    productId: 9135213052163,
    variantId: 47325289808131,
    price: 850.00,
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
    productId: 9135212888323,
    variantId: 47325289939203,
    price: 850.00,
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
    productId: 9135212953859,
    variantId: 47325289971971,
    price: 850.00,
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
    productId: 9135212527875,
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
    productId: 9135213084931,
    variantId: 47325290004739,
    price: 850.00,
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
    productId: 9131219452163,
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
    productId: 9131219845379,
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
    productId: 9131219648771,
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
    productId: 9131219550467,
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
    productId: 9131219583235,
    variantId: 47314572247299,
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
    productId: 9131219157251,
    variantId: 47314571952387,
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
    productId: 9131219353859,
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
    productId: 9131219386627,
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
    productId: 9131219747075,
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
    productId: 9131219878147,
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
    productId: 9131055055107,
    variantId: 47314242011395,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Bloom Vase Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Bloom Vase Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Bloom Vase Charm.png",
    description: "The Bloom Vase Charm is a miniature work of art, celebrating the beauty of flowers captured in a timeless ceramic style motif. Featuring a delicately painted blue vase with pink blossoms, it embodies grace, heritage, and charm.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2 cm (height) × 1.2 cm (width)",
      weight: "Approx. 1.8 g",
      material: "Stainless Steel with Gold Plating and Enamel Artwork",
      finish: "Smooth ivory enamel with hand painted floral vase design",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-2",
    name: "Blooming Lily Flower Charm",
    handle: 'blooming-lily-charm',
    productId: 9131055153411,
    variantId: 47314242109699,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blooming Lily Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blooming Lily Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blooming Lily Charm.png",
    description: "The Blooming Lily Charm is a delicate emblem of grace and renewal. Featuring a soft pink flower with fresh green leaves, hand painted over an ivory enamel oval, this charm captures the beauty of nature’s quiet moments. A symbol of growth, purity, and elegance, it makes for a meaningful piece in your everyday jewelry.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.8 cm (height) × 1.2 cm (width)",
      weight: "Approx. 2.0 g",
      material: "Stainless Steel with Gold Plating and Enamel Work",
      finish: "Smooth enamel surface framed with polished gold edges",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-3",
    name: "Blossom Vase Floral Charm",
    handle: 'blossom-vase-charm',
    productId: 9131055317251,
    variantId: 47314242306307,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blossom Vase Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blossom Vase Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blossom Vase Charm.png",
    description: "The Blossom Vase Charm blends artistry with nature, showcasing a timeless blue vase holding a bouquet of soft pink blooms. With its hand painted enamel detailing, this charm celebrates the beauty of flowers preserved in still life — a symbol of elegance, abundance, and serenity. Ideal for those who adore art inspired jewelry with a romantic touch.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.5 cm",
      weight: "Approx. 2 g",
      material: "Stainless Steel with Gold Plating & Enamel",
      finish: "Polished gold frame with enamel artistry",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-4",
    name: "Blue Blossom Heart Charm",
    handle: 'blue-blossom-heart-charm',
    productId: 9131055644931,
    variantId: 47314242666755,
    price: 490.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blue Blossom Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blue Blossom Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blue Blossom Heart Charm.png",
    description: "The Blue Blossom Heart Charm blends romance with artisanal detail. A soft enamel heart showcases petite blue florals, framed with a dotted border for a vintage touch. Perfect for layering, this charm symbolizes timeless elegance with a whisper of nostalgia.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.6 cm",
      weight: "Approx. 2 g",
      material: "Stainless Steel with Gold Plating & Enamel",
      finish: "Gloss enamel with polished gold outline",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-5",
    name: "Blue Meadow Bloom Charm",
    handle: 'blue-meadow-bloom-charm',
    productId: 9131055415555,
    variantId: 47314242404611,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blue Meadow Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blue Meadow Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blue Meadow Bloom Charm.png",
    description: "The Blue Meadow Bloom Charm is a delicate ode to nature’s quiet beauty. At its heart, a hand painted flower blooms gracefully, framed by a sky blue enamel border sprinkled with white dots. A perfect balance of softness and strength, this charm celebrates growth, grounding, and the joy found in small details.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.5 cm",
      weight: "Approx. 2 g",
      material: "Stainless Steel with Gold Plating and Enamel",
      finish: "Polished gold with pastel enamel accents",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-6",
    name: "Blue Rose Floral Charm",
    handle: 'blue-rose-charm',
    productId: 9131055382787,
    variantId: 47314242371843,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Blue Rose Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Blue Rose Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Blue Rose Charm.png",
    description: "Symbolizing mystery, rarity, and the pursuit of the impossible, the Blue Rose Charm is a statement of dreams that defy limits. Hand painted with a striking indigo rose and framed with a delicate dotted enamel border, this charm blends elegance with intrigue. Wear it as a reminder to embrace your uniqueness and chase what feels beyond reach.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.2 cm",
      weight: "Approx. 2 g",
      material: "Stainless Steel with Gold Plating & Enamel",
      finish: "Glossy enamel with dotted border",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-7",
    name: "DescriBlue Heart Charm",
    handle: 'describlue-heart-charm',
    productId: 9131055481091,
    variantId: 47314242470147,
    price: 490.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = DescriBlue Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = DescriBlue Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/DescriBlue Heart Charm.png",
    description: "Minimal and tender, the Blue Heart Charm symbolizes calm, trust, and loyalty. With its soft pastel enamel set in a polished gold border, this piece adds a delicate, modern touch to your jewelry. Perfect for stacking with other heart charms or wearing as a subtle statement of love and serenity.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.5 cm",
      weight: "~1.8 g",
      material: "Stainless Steel with Gold Plating & Enamel",
      finish: "Glossy enamel with polished gold frame",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-8",
    name: "Eternal Rose Oval Charm",
    handle: 'eternal-rose-oval-charm',
    productId: 9131055022339,
    variantId: 47314241978627,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Eternal Rose Oval Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Eternal Rose Oval Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Eternal Rose Oval Charm.png",
    description: "The Eternal Rose Oval Charm is a symbol of everlasting beauty and love. Featuring a hand painted rose on a creamy enamel base, it captures the charm of vintage keepsakes with a modern minimal touch.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2 cm (height) × 1.2 cm (width)",
      weight: "Approx. 1.5 g",
      material: "Stainless Steel with Gold Plating and Enamel Detailing",
      finish: "Smooth ivory enamel with painted rose motif",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-9",
    name: "Folk Bloom Floral Charm",
    handle: 'folk-bloom-charm',
    productId: 9131055120643,
    variantId: 47314242076931,
    price: 690.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Folk Bloom Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Folk Bloom Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Folk Bloom Charm.png",
    description: "The Folk Bloom Charm celebrates timeless artistry with a touch of modern playfulness. Featuring vibrant red orange tulip flowers tied together with a delicate blue bow, this rectangular enamel charm captures the warmth of handcrafted tiles and heritage florals. It’s a symbol of joy, growth, and beauty — perfect for adding a storytelling element to your jewelry stack.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.8 cm (height) × 1.2 cm (width)",
      weight: "Approx. 2.2 g",
      material: "Stainless Steel with Gold Plating and Enamel Detailing",
      finish: "Smooth enamel surface framed with polished gold edges",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-10",
    name: "Love Note Heart Charm",
    price: 690.00,
    productId: 9131055251715,
    variantId: 47314242240771,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Love Note Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Love Note Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Love Note Charm.png",
    description: "The Love Note Charm captures the magic of heartfelt confessions and secret letters. Crafted in a miniature envelope design with enamel detailing and a red heart seal, it symbolizes affection, connection, and memories preserved forever. A dainty reminder of love in its purest form, perfect to wear solo or layer with other charms for a playful yet meaningful look.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.2 cm (width)",
      weight: "Approx. 1.8 g",
      material: "Stainless Steel with Gold Plating and Enamel",
      finish: "Glossy enamel with polished gold frame",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-11",
    name: "Mama Script Heart Charm",
    price: 690.00,
    productId: 9131055350019,
    category: "Eternal Bond",
    isBestSeller: true,
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Mama Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Mama Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Mama Charm.png",
    description: "A heartfelt tribute in the form of a charm — the Mama Charm is a simple yet meaningful piece that celebrates love, gratitude, and the irreplaceable bond we share with our mothers. With its hand painted enamel design and playful dotted frame, it’s a keepsake designed to be treasured, worn solo or layered with other charms for a personal story.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.2 cm",
      weight: "Approx. 1.5 g",
      material: "Stainless Steel with Gold Plating & Enamel",
      finish: "Smooth enamel with dotted border",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  {
    id: "eb-13",
    name: "Pop Heart Red Charm",
    price: 690.00,
    productId: 9131055087875,
    variantId: 47182446199043,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Pop Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Pop Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Pop Heart Charm.png",
    description: "The Pop Heart Charm is a bold declaration of love, joy, and creativity. With its vibrant red heart framed against a playful blue and white checkered enamel backdrop, it captures the spirit of fun and fearless expression. This charm adds a quirky yet modern edge to your collection — perfect for stacking with minimal or statement pieces alike.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.8 cm (height) × 1.2 cm (width)",
      weight: "Approx. 2 g",
      material: "Stainless Steel with Gold Plating and Enamel Inlay",
      finish: "Gloss enamel surface with polished gold edges",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-14",
    name: "Red Heart Simple Charm",
    handle: 'red-heart-charm',
    productId: 9131055612163,
    variantId: 47314242633987,
    price: 490.00,
    category: "Eternal Bond",
    image: STORAGE_BASE + "/charms-cards/Eternal Bloom/Label = Red Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Eternal bloom/Label = Red Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Eternal Bloom/Red Heart Charm.png",
    description: "Minimal and tender, the Red Heart Charm symbolizes passion, trust, and loyalty. With its soft pastel enamel set in a polished gold border, this piece adds a delicate, modern touch to your jewelry. Perfect for stacking with other heart charms or wearing as a subtle statement of love and serenity.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.5 cm",
      weight: "~1.8 g",
      material: "Stainless Steel with Gold Plating & Enamel",
      finish: "Glossy enamel with polished gold frame",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "eb-15",
    name: "Rosette Bloom Floral Charm",
    handle: 'rosette-bloom-charm',
    productId: 9131055218947,
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
    productId: 9131055448323,
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
    price: 690.00,
    productId: 9131055513859,
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
    productId: 9131055284483,
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
    productId: 9131055186179,
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
    productId: 9131055677699,
    variantId: 47314242699523,
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
    price: 590.00,
    productId: 9131055710467,
    variantId: 91310557104677,
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
    price: 590.00,
    productId: 9131056038147,
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
    productId: 9131055841539,
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
    price: 590.00,
    productId: 9131055808771,
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
    productId: 9131055907075,
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
    productId: 9131057250563,
    variantId: 47314244829443,
    price: 590.00,
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
    productId: 9131057185027,
    variantId: 47314244763907,
    price: 490.00,
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
    productId: 9131056922883,
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
    productId: 9131057479939,
    variantId: 47314245058819,
    handle: 'crescent-star-charm',
    name: "Crescent Star Guardian Charm",
    price: 490.00,
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
    productId: 9131057021187,
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
    productId: 9131057381635,
    variantId: 47314244960515,
    handle: 'guardian-hamsa-charm',
    name: "Guardian Hamsa Hand Charm",
    price: 490.00,
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
    productId: 9131057316099,
    variantId: 47314244894979,
    handle: 'guardian-hand-charm',
    name: "Guardian Hand Protection Charm",
    price: 690.00,
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
    productId: 9131057217795,
    variantId: 47314244796675,
    price: 590.00,
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
    productId: 9131057086723,
    variantId: 47314244665603,
    price: 590.00,
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
    productId: 9131056955651,
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
    productId: 9131056890115,
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
    productId: 9131057283331,
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
    productId: 9131057348867,
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
    productId: 9131057152259,
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
    productId: 9131057152259,
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
    productId: 9131057053955,
    variantId: 47314244632835,
    price: 590.00,
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
    productId: 9131057119491,
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
    productId: 9131057447171,
    variantId: 47314245452035,
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
    productId: 9131057414403,
    variantId: 47314244993283,
    handle: 'turquoise-eye-charm',
    name: "Turquoise Eye Protection Charm",
    price: 590.00,
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
    productId: 9131056365827,
    variantId: 47314243518723,
    price: 690.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Blooming Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Blooming Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Blooming Heart Charm.png",
    description: "The Blooming Heart Charm is a vibrant ode to love and growth. Crafted in a bold pink enamel finish, it's adorned with delicate golden floral motifs that symbolize blossoming affection and joy. A playful yet elegant piece, this charm captures the essence of romance in full bloom, perfect for those who carry a lively spirit with a touch of grace.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.5 cm (height) × 2.3 cm (width)",
      weight: "Approx. 3.5 g",
      material: "Stainless Steel with High Gloss Gold Plating and Enamel Detailing",
      finish: "Smooth Enamel Base with Raised Golden Florals",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-2",
    name: "Blush Heart Simple Charm",
    handle: 'blush-heart-charm',
    productId: 9131056693507,
    variantId: 47314244239619,
    price: 490.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Blush Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Blush Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Blush Heart Charm.png",
    description: "The Blush Heart Charm is a delicate expression of tenderness and warmth. Featuring a soft pink heart set against a pure white enamel backdrop, it radiates purity and subtle romance. Its petite size makes it a graceful everyday piece or a sweet layering charm to pair with bolder accents.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.0 cm (height) × 0.9 cm (width)",
      weight: "Approx. 1.5 g",
      material: "Stainless Steel with Gold Plating and Enamel Inlay",
      finish: "Smooth Enamel with Polished Gold Rim",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-3",
    name: "Crystal Green Candy Charm",
    handle: 'crystal-green-candy',
    productId: 9131056300291,
    variantId: 47314243453187,
    price: 690.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Crystal Green candy.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Crystal Green candy.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Crystal Green candy.png",
    description: "The Crystal Green Candy Charm embodies playful romance with a modern edge. Crafted in a green crystal like finish, it sparkles with every movement, symbolizing love, passion, and vibrant energy. Its textured surface creates a multidimensional shine, making it a bold yet elegant statement piece for everyday wear or special occasions.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.5 cm (height) × 2.0 cm (width)",
      weight: "Approx. 3.0 g",
      material: "High Quality Resin with Gold Plated Bail",
      finish: "Faceted, Textured Crystal Effect",
      quality: "Lightweight, Durable, and Tarnish Resistant"
    }
  },
  {
    id: "ls-4",
    name: "Crystal Heart Sparkle Charm",
    price: 690.00,
    productId: 9131056234755,
    variantId: 47314243387651,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Crystal Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Crystal Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Crystal Heart Charm.png",
    description: "The Crystal Heart Charm embodies playful romance with a modern edge. Crafted in a radiant red crystal like finish, it sparkles with every movement, symbolizing love, passion, and vibrant energy. Its textured surface creates a multidimensional shine, making it a bold yet elegant statement piece for everyday wear or special occasions.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.5 cm (height) × 2.0 cm (width)",
      weight: "Approx. 3.0 g",
      material: "High Quality Resin with Gold Plated Bail",
      finish: "Faceted, Textured Crystal Effect",
      quality: "Lightweight, Durable, and Tarnish Resistant"
    }
  },
  {
    id: "ls-5",
    name: "Crystal Pink Candy Charm",
    handle: 'crystal-pink-candy',
    productId: 9131056267523,
    variantId: 47314243420419,
    price: 599.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Crystal Pink candy.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Crystal Pink candy.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Crystal Pink candy.png",
    description: "The Crystal Pink Candy Charm embodies playful romance with a modern edge. Crafted in a pink crystal like finish, it sparkles with every movement, symbolizing love, passion, and vibrant energy. Its textured surface creates a multidimensional shine, making it a bold yet elegant statement piece for everyday wear or special occasions.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.5 cm (height) × 2.0 cm (width)",
      weight: "Approx. 3.0 g",
      material: "High Quality Resin with Gold Plated Bail",
      finish: "Faceted, Textured Crystal Effect",
      quality: "Lightweight, Durable, and Tarnish Resistant"
    }
  },
  {
    id: "ls-6",
    name: "Daisy Heart Floral Charm",
    handle: 'daisy-heart-charm',
    productId: 9131056529667,
    variantId: 47314244043011,
    price: 590.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Daisy Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Daisy Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Daisy Heart Charm.png",
    description: "The Daisy Heart Charm captures the innocence of sunlit meadows and carefree days. With its glossy white ceramic base adorned by a hand painted yellow daisy and lilac accents, this charm radiates freshness, optimism, and tender beauty. A sweet nod to nature's charm, it's perfect for those who adore subtle, cheerful details in their jewelry.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.8 cm (height) × 1.5 cm (width)",
      weight: "Approx. 2 g",
      material: "Ceramic with Gold Tone Detailing",
      finish: "Glossy Enamel with Hand Painted Floral Motif",
      quality: "Lightweight, Hypoallergenic"
    }
  },
  {
    id: "ls-7",
    name: "Ember Heart Fire Charm",
    price: 490.00,
    productId: 9131056627971,
    variantId: 47314244141315,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Ember Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Ember Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Ember Heart Charm.png",
    description: "The Ember Heart Charm is a radiant symbol of passion and warmth. Featuring concentric hearts in fiery red and orange enamel, it glows with a golden outline that adds depth and brilliance. Small yet impactful, this charm embodies love, strength, and timeless devotion.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.2 cm (height) × 1.1 cm (width)",
      weight: "Approx. 1.8 g",
      material: "Stainless Steel with Gold Plating and Enamel Inlay",
      finish: "Glossy Enamel with Polished Gold Outline",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-8",
    isBestSeller: true,
    name: "Emerald Heart Gem Charm",
    price: 490.00,
    productId: 9131056759043,
    variantId: 47314244305155,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Emerald Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Emerald Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Emerald Heart Charm.png",
    description: "The Emerald Heart Charm captures the richness of old world romance. With its deep green enamel center framed by golden ornate details, it radiates a vintage charm that feels both regal and timeless. A perfect accent for stacking with minimal hearts or wearing as a statement piece to add depth and color to your jewelry.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.2 cm (height) × 1.0 cm (width)",
      weight: "Approx. 1.6 g",
      material: "Stainless Steel with Gold Plating",
      finish: "Gloss Enamel in Emerald Green with Ornate Gold Frame",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-9",
    name: "Eternal Heart Love Charm",
    price: 490.00,
    productId: 9131056431363,
    variantId: 47314243780867,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Eternal Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Eternal Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Eternal Heart Charm.png",
    description: "The Eternal Heart Charm is a delicate symbol of love and protection. Featuring a vivid red heart encased in a polished golden circle, it represents passion safeguarded by strength. Its minimal yet striking design makes it a timeless addition to your collection — a reminder of love that endures.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.2 cm (height) × 1.0 cm (width)",
      weight: "Approx. 1.5 g",
      material: "Stainless Steel with High Gloss Gold Plating and Enamel Heart Center",
      finish: "Smooth Polished Gold with Glossy Red Enamel Detail",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-10",
    isBestSeller: true,
    name: "Heart of Vision Charm",
    handle: 'heart-of-vision-charm',
    productId: 9131056595203,
    variantId: 47314244108547,
    price: 590.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Heart of Vision Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Heart of Vision Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Heart of Vision Charm 2.png",
    description: "The Heart of Vision Charm blends romance with protection. A delicate pink enamel heart framed by golden beaded detailing, it features a central crystal eye — symbolizing clarity, intuition, and love. This charm is both whimsical and meaningful, making it a standout piece in any collection.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.8 cm (height) × 1.6 cm (width)",
      weight: "Approx. 2 g",
      material: "Stainless Steel with Enamel and Cubic Zirconia",
      finish: "Glossy Pink Enamel with Gold Beaded Border",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-11",
    name: "Love Letter Envelope Charm",
    price: 590.00,
    productId: 9131056496899,
    variantId: 47314243813635,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Love Letter Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Love Letter Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Love Letter Charm.png",
    description: "The Love Letter Charm is a sweet token of affection, carrying the timeless symbol of heartfelt connection. Featuring a polished gold frame and a delicate envelope design sealed with a vibrant red heart, it embodies romance, warmth, and cherished memories. A modern keepsake with a classic sentiment, it’s the perfect charm for celebrating love in all its forms.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.0 cm (height) × 1.4 cm (width)",
      weight: "Approx. 2.8 g",
      material: "Stainless Steel with High Gloss Gold Plating and Enamel Detailing",
      finish: "Polished Gold with Smooth Enamel Heart Seal",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-12",
    name: "Peach Blush Heart Charm",
    handle: 'peach-blush-heart-charm',
    productId: 9131056824579,
    variantId: 47314244370691,
    price: 490.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Peach Blush Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Peach Blush Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Peach Blush Heart.png",
    description: "The Peach Blush Heart Charm radiates warmth and tenderness with its soft peach enamel finish. Compact yet full of character, this charm brings a subtle pop of color while keeping the design sweet and refined. Perfect for pairing with other pastel charms or worn solo as a gentle statement of love and softness.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.2 cm (height) × 1.2 cm (width)",
      weight: "Approx. 1.2 g",
      material: "Stainless Steel with Gold Plating and Enamel Finish",
      finish: "Gloss Enamel in Peach Blush",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },
  {
    id: "ls-13",
    name: "Pure Heart Simple Charm",
    handle: 'pure-heart-charm',
    productId: 9131056726275,
    variantId: 47314244272387,
    price: 490.00,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Pure Heart Charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Pure Heart Charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Pure Heart Charm.png",
    description: "The Pure Heart Charm embodies simplicity and innocence in its most elegant form. With a soft ivory tone and smooth polished finish, it adds a minimal yet timeless touch to any bracelet or necklace. A versatile piece that pairs beautifully with both vibrant charms and subtle neutrals, making it a must have for everyday layering.",
    specifications: {
      style: "Single charm",
      size: "Approx. 1.0 cm (height) × 0.9 cm (width)",
      weight: "Approx. 1.5 g",
      material: "Stainless Steel with Gold Plated Hardware",
      finish: "Glossy Enamel Like Coating in Ivory White",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  {
    id: "ls-15",
    isBestSeller: true,
    name: "Sacred Heart Divine Charm",
    price: 690.00,
    productId: 9131056169219,
    variantId: 47637934506243,
    category: "LoveStruck",
    image: STORAGE_BASE + "/charms-cards/Lovestruck/Label = Sacred Heart charm.png",
    previewImage: STORAGE_BASE + "/charms-canvas/Lovestruck/Label = Sacred Heart charm.png",
    overlayImage: STORAGE_BASE + "/overlay-charms/Lovestruck/Sacred Heart charm.png",
    description: "The Sacred Heart Charm is a symbol of love, strength, and devotion. Framed in warm gold with a soft blush enamel backdrop, it features a radiant red heart adorned with golden detailing, embodying both passion and protection. A modern take on a timeless motif, this charm carries depth and meaning while adding a striking touch to any jewelry piece.",
    specifications: {
      style: "Single charm",
      size: "Approx. 2.2 cm (height) × 1.5 cm (width)",
      weight: "Approx. 3 g",
      material: "Stainless Steel with High Gloss Gold Plating and Enamel Inlay",
      finish: "Smooth Enamel with Polished Gold Accents",
      quality: "Anti Tarnish, Hypoallergenic"
    }
  },

  // Persona (Initials & Zodiacs)
  {
    id: "pe-1",
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter A Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter B Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter D Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter E Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter H Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter I Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter M Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter N Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter O Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter P Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter Q Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter R Initial Charm",
    price: 490.00,
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
    price: 490.00,
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
    price: 490.00,
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
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
    name: "Letter X Initial Charm",
    price: 490.00,
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
    productId: 9218601451779,
    variantId: 47557882020099,
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
    productId: 9218601451779,
    variantId: 47557882020099,
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
    productId: 9131058528515,
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
    productId: 9131059118339,
    variantId: 47314246828291,
    handle: 'aurora-croissant-charm',
    name: "Aurora Croissant Sweet Charm",
    price: 490.00,
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
    productId: 9131058626819,
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
    productId: 9131058987267,
    variantId: 47314246697219,
    handle: 'avocado-toast-charm',
    name: "Avocado Toast Brunch Charm",
    price: 490.00,
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
    productId: 9131058823427,
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
    productId: 9131058790659,
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
    price: 490.00,
    productId: 9131058757891,
    variantId: 47314246369539,
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
    price: 590.00,
    productId: 9131059249411,
    variantId: 47314246959363,
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
    productId: 9131058561283,
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
    price: 490.00,
    productId: 9131058888963,
    variantId: 47314246500611,
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
    productId: 9131058921731,
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
    productId: 9131059052803,
    variantId: 47314246762755,
    handle: 'grapes-charm',
    name: "Grapes Fruit Fresh Charm",
    price: 490.00,
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
    productId: 9131058856195,
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
    productId: 9131058594051,
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
    productId: 9131059052803,
    variantId: 47314246729987,
    handle: 'mango-charm',
    name: "Grapes Fruit Fresh",
    price: 490.00,
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
    productId: 9131058692355,
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
    price: 490.00,
    productId: 9131058659587,
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
    price: 490.00,
    productId: 9131059183875,
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
    productId: 9131059151107,
    variantId: 47314246861059,
    handle: 'pink-donut-with-golden-sprinkles-charm',
    name: "Pink Donut Gold Sprinkles",
    price: 490.00,
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
    productId: 9131058495747,
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
    productId: 9131059085571,
    variantId: 47314246795523,
    handle: 'popsicle-charm',
    name: "Popsicle Summer Charm",
    price: 490.00,
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
    productId: 9131059216643,
    variantId: 47314246926595,
    price: 490.00,
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
    price: 490.00,
    productId: 9131058725123,
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
    price: 590.00,
    productId: 9131058299139,
    variantId: 47314245910787,
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
    productId: 9131057873155,
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
    productId: 9131057545475,
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
    productId: 9131057512707,
    variantId: 47314245091587,
    handle: 'emerald-bloom-charm',
    name: "Emerald Bloom Wild Charm",
    price: 390.00,
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
    price: 390.00,
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
    productId: 9131057643779,
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
    productId: 9131058135299,
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
    productId: 9131058397443,
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
    productId: 9131058430211,
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
    productId: 9131058168067,
    variantId: 47314245779715,
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
    productId: 9131057578243,
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
    productId: 9131057938691,
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
    productId: 9131057905923,
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
    productId: 9131058102531,
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
    productId: 9131058462979,
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
    productId: 9131058200835,
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
    productId: 9131057971459,
    variantId: 47314245583107,
    handle: 'ocean-shell-charm',
    name: "Ocean Shell Seashell Charm",
    price: 390.00,
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
    price: 490.00,
    productId: 9131058036995,
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
    price: 390.00,
    productId: 9131058331907,
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
    productId: 9131058233603,
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
    productId: 9131058364675,
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
    productId: 9131058299139,
    variantId: 47314245681411,
    handle: 'sunny-fish-charm',
    name: "Aurora Fish Ocean",
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
    productId: 9131058004227,
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
