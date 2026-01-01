export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    type: 'bracelet' | 'necklace';
    isNew?: boolean;
    isBestSeller?: boolean;
}

export interface Charm {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const BASE_PRODUCTS: Product[] = [
    {
        id: 'classic-loop',
        name: 'Classic Loop Bracelet',
        price: 850,
        image: '/base-products/Classic Loop bracelet.png',
        type: 'bracelet',
        isBestSeller: true
    },
    {
        id: 'lustre-link',
        name: 'Lustre Link Bracelet',
        price: 950,
        image: '/base-products/Lustre Link bracelet.png',
        type: 'bracelet'
    },
    {
        id: 'dual-link',
        name: 'Dual Link Bracelet',
        price: 1100,
        image: '/base-products/Dual Link Bracelet.png',
        type: 'bracelet'
    },
    {
        id: 'paper-clip',
        name: 'Paper Clip Bracelet',
        price: 750,
        image: '/base-products/paper clip bracelet.png',
        type: 'bracelet'
    },
    {
        id: 'golden-charm',
        name: 'Golden Charm Chain',
        price: 1200,
        image: '/base-products/Golden Charm Chain Bracelet.png',
        type: 'bracelet'
    },
    {
        id: 'luxe-chain',
        name: 'Luxe Chain Bracelet',
        price: 1350,
        image: '/base-products/Luxe Chain Bracelet.png',
        type: 'bracelet',
        isNew: true
    }
];

export const CHARMS: Charm[] = [
  // Eternal Bloom
  {
    id: "eb-1",
    name: "Bloom Vase Floral Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Bloom Vase Charm.png"
  },
  {
    id: "eb-2",
    name: "Blooming Lily Flower Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blooming Lily Charm.png"
  },
  {
    id: "eb-3",
    name: "Blossom Vase Floral Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blossom Vase Charm.png"
  },
  {
    id: "eb-4",
    name: "Blue Blossom Heart Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blue Blossom Heart Charm.png"
  },
  {
    id: "eb-5",
    name: "Blue Meadow Bloom Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blue Meadow Bloom Charm.png"
  },
  {
    id: "eb-6",
    name: "Blue Rose Floral Charm",
    price: 840,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Blue Rose Charm.png"
  },
  {
    id: "eb-7",
    name: "DescriBlue Heart Charm",
    price: 790,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = DescriBlue Heart Charm.png"
  },
  {
    id: "eb-8",
    name: "Eternal Rose Oval Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Eternal Rose Oval Charm.png"
  },
  {
    id: "eb-9",
    name: "Folk Bloom Floral Charm",
    price: 740,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Folk Bloom Charm.png"
  },
  {
    id: "eb-10",
    name: "Love Note Heart Charm",
    price: 740,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Love Note Charm.png"
  },
  {
    id: "eb-11",
    name: "Mama Script Heart Charm",
    price: 740,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Mama Charm.png"
  },
  {
    id: "eb-12",
    name: "Mom’s Heart Floral Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Mom’s Heart Charm.png"
  },
  {
    id: "eb-13",
    name: "Pop Heart Red Charm",
    price: 890,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Pop Heart Charm.png"
  },
  {
    id: "eb-14",
    name: "Red Heart Simple Charm",
    price: 840,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Red Heart Charm.png"
  },
  {
    id: "eb-15",
    name: "Rosette Bloom Floral Charm",
    price: 690,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Rosette Bloom Charm.png"
  },
  {
    id: "eb-16",
    name: "Scarlet Tulip Flower Charm",
    price: 740,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Scarlet Tulip Charm.png"
  },
  {
    id: "eb-17",
    name: "Starlit Crescent Moon Charm",
    price: 790,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Starlit Crescent Charm.png"
  },
  {
    id: "eb-18",
    name: "Tulip Dawn Floral Charm",
    price: 890,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Tulip Dawn Charm.png"
  },
  {
    id: "eb-19",
    name: "Twin Blossom Flower Charm",
    price: 790,
    category: "Eternal Bloom",
    image: "/charms-cards/Eternal Bloom/Label = Twin Blossom Charm.png"
  },

  // Game On
  {
    id: "go-1",
    name: "Golden Ping Pong Passion Charm",
    price: 790,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Golden Ping Pong Passion.png"
  },
  {
    id: "go-2",
    name: "Pickleball Spark Sport Charm",
    price: 790,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Pickleball Spark Charm.png"
  },
  {
    id: "go-3",
    name: "Pink Smash Tennis Charm",
    price: 840,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Pink Smash Charm.png"
  },
  {
    id: "go-4",
    name: "Silver Tennis Spark Charm",
    price: 890,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Silver Tennis Spark Charm.png"
  },
  {
    id: "go-5",
    name: "Tennis Ace Racket Charm",
    price: 690,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Tennis Ace Charm.png"
  },
  {
    id: "go-6",
    name: "Tennis Sparkle Racket Charm",
    price: 890,
    category: "Game On",
    image: "/charms-cards/Game On/Label = Tennis Sparkle Racket Charm.png"
  },

  // Guardian
  {
    id: "gu-1",
    name: "Aqua Vision Eye Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Aqua Vision Charm.png"
  },
  {
    id: "gu-2",
    name: "Blush Teardrop Eye Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Blush Teardrop Eye Charm.png"
  },
  {
    id: "gu-3",
    name: "Celestial Eye Protection Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Celestial Eye Charm.png"
  },
  {
    id: "gu-4",
    name: "Crescent Star Guardian Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Crescent Star Charm.png"
  },
  {
    id: "gu-5",
    name: "Guardian Eye Mystic Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Eye Charm.png"
  },
  {
    id: "gu-6",
    name: "Guardian Hamsa Hand Charm",
    price: 690,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Hamsa Charm.png"
  },
  {
    id: "gu-7",
    name: "Guardian Hand Protection Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Hand Charm.png"
  },
  {
    id: "gu-8",
    name: "Guardian Heart Eye Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Guardian Heart Eye Charm.png"
  },
  {
    id: "gu-9",
    name: "Luminous Eye Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Luminous Eye Charm.png"
  },
  {
    id: "gu-10",
    name: "Midnight Eye Protection Charm",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Midnight Eye Charm.png"
  },
  {
    id: "gu-11",
    name: "Mystic Eye Guardian Charm",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Mystic Eye Charm.png"
  },
  {
    id: "gu-12",
    name: "North Star Guide Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = North Star Charm.png"
  },
  {
    id: "gu-13",
    name: "Prism Eye Crystal Charm",
    price: 840,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Prism Eye Charm.png"
  },
  {
    id: "gu-14",
    name: "Radiant Eye Charm - Large",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Radiant Eye Charm - 3-1.png"
  },
  {
    id: "gu-15",
    name: "Radiant Eye Charm - Medium",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Radiant Eye Charm - 3.png"
  },
  {
    id: "gu-16",
    name: "Radiant Eye Charm - Small",
    price: 690,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Radiant Eye Charm.png"
  },
  {
    id: "gu-17",
    name: "Sentinel Eye Protection Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Sentinel Eye Charm.png"
  },
  {
    id: "gu-18",
    name: "Solara Sun Eye Charm",
    price: 740,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Solara Charm.png"
  },
  {
    id: "gu-19",
    name: "Turquoise Eye Protection Charm",
    price: 790,
    category: "Guardian",
    image: "/charms-cards/Guardian/Label = Turquoise Eye Charm.png"
  },

  // LoveStruck
  {
    id: "ls-1",
    name: "Blooming Heart Floral Charm",
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Blooming Heart Charm.png"
  },
  {
    id: "ls-2",
    name: "Blush Heart Simple Charm",
    price: 690,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Blush Heart Charm.png"
  },
  {
    id: "ls-3",
    name: "Crystal Green Candy Charm",
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Crystal Green candy.png"
  },
  {
    id: "ls-4",
    name: "Crystal Heart Sparkle Charm",
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Crystal Heart Charm.png"
  },
  {
    id: "ls-5",
    name: "Crystal Pink Candy Charm",
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Crystal Pink candy.png"
  },
  {
    id: "ls-6",
    name: "Daisy Heart Floral Charm",
    price: 740,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Daisy Heart Charm.png"
  },
  {
    id: "ls-7",
    name: "Ember Heart Fire Charm",
    price: 690,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Ember Heart Charm.png"
  },
  {
    id: "ls-8",
    name: "Emerald Heart Gem Charm",
    price: 740,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Emerald Heart Charm.png"
  },
  {
    id: "ls-9",
    name: "Eternal Heart Love Charm",
    price: 690,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Eternal Heart Charm.png"
  },
  {
    id: "ls-10",
    name: "Heart of Vision Charm",
    price: 690,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Heart of Vision Charm.png"
  },
  {
    id: "ls-11",
    name: "Love Letter Envelope Charm",
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Love Letter Charm.png"
  },
  {
    id: "ls-12",
    name: "Peach Blush Heart Charm",
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Peach Blush Heart Charm.png"
  },
  {
    id: "ls-13",
    name: "Pure Heart Simple Charm",
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Pure Heart Charm.png"
  },
  {
    id: "ls-14",
    name: "Retro Heart Vintage Charm",
    price: 840,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Retro Heart Charm.png"
  },
  {
    id: "ls-15",
    name: "Sacred Heart Divine Charm",
    price: 790,
    category: "LoveStruck",
    image: "/charms-cards/LoveStruck/Label = Sacred Heart charm.png"
  },

  // Persona (Initials & Zodiacs)
  { id: "pe-1", name: "Letter A Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = A Initial Charm.png" },
  { id: "pe-2", name: "Letter B Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = B Initial Charm.png" },
  { id: "pe-3", name: "Letter D Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = D Initial Charm.png" },
  { id: "pe-4", name: "Letter E Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = E Initial Charm.png" },
  { id: "pe-5", name: "Letter H Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = H Initial Charm.png" },
  { id: "pe-6", name: "Letter I Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = I Initial Charm.png" },
  { id: "pe-7", name: "Letter M Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = M Initial Charm.png" },
  { id: "pe-8", name: "Letter N Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = N Initial Charm.png" },
  { id: "pe-9", name: "Letter O Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = O Initial Charm.png" },
  { id: "pe-10", name: "Letter P Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = P Initial Charm.png" },
  { id: "pe-11", name: "Letter Q Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Q Initial Charm.png" },
  { id: "pe-12", name: "Letter R Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = R Initial Charm.png" },
  { id: "pe-13", name: "Letter T Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = T Initial Charm.png" },
  { id: "pe-14", name: "Letter U Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = U Initial Charm.png" },
  { id: "pe-15", name: "Letter V Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = V Initial Charm.png" },
  { id: "pe-16", name: "Letter X Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = X Initial Charm.png" },
  { id: "pe-17", name: "Letter Y Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Y Initial Charm.png" },
  { id: "pe-18", name: "Letter Z Initial Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Z Initial Charm.png" },
  // Zodiacs
  { id: "pe-z1", name: "Aquarius Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Aquarius Zodiac Pendant.png" },
  { id: "pe-z2", name: "Aries Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Aries Zodiac Pendant.png" },
  { id: "pe-z3", name: "Capricorn Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Capricorn Zodiac Pendant.png" },
  { id: "pe-z4", name: "Gemini Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Gemini Zodiac Pendant.png" },
  { id: "pe-z5", name: "Pisces Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Pisces Zodiac Pendan.png" },
  { id: "pe-z6", name: "Sagittarius Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Sagittarius Zodiac Pendant.png" },
  { id: "pe-z7", name: "Scorpio Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Scorpio Zodiac Pendant.png" },
  { id: "pe-z8", name: "Taurus Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Taurus Zodiac Pendan.png" },
  { id: "pe-z9", name: "Virgo Zodiac Pendant Charm", price: 690, category: "Persona", image: "/charms-cards/Persona/Label = Virgo Zodiac Pendant.png" },

  // Sugar Pop
  { id: "sp-1", name: "Acorn Strength Nature Charm", price: 690, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Acorn Strength Charm.png" },
  { id: "sp-2", name: "Aurora Croissant Sweet Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Aurora Croissant Charm.png" },
  { id: "sp-3", name: "Avocado Love Food Charm", price: 790, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Avocado Love Charm.png" },
  { id: "sp-4", name: "Avocado Toast Brunch Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Avocado Toast Charm.png" },
  { id: "sp-5", name: "Banana Fun Fruit Charm", price: 740, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Banana Fun Charm.png" },
  { id: "sp-6", name: "Burger Bite Food Charm", price: 690, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Burger Bite Charm.png" },
  { id: "sp-7", name: "Cherry Pop Fruit Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Cherry Pop Charm.png" },
  { id: "sp-8", name: "Coffee Cup Morning Charm", price: 690, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Coffee Cup Charm.png" },
  { id: "sp-9", name: "Croissant Pastry Charm", price: 740, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Croissant Charm.png" },
  { id: "sp-10", name: "Donut Delight Sweet Charm", price: 790, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Donut Delight Charm.png" },
  { id: "sp-11", name: "Golden Croissant Charm", price: 790, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Golden Croissant Charm.png" },
  { id: "sp-12", name: "Grapes Fruit Fresh Charm", price: 690, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Grapes Charm.png" },
  { id: "sp-13", name: "Hotdog Fast Food Charm", price: 890, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Hotdog Charm.png" },
  { id: "sp-14", name: "Mango Bliss Fruit Charm", price: 890, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Mango Bliss Charm.png" },
  { id: "sp-15", name: "Mango Fruit Fresh Charm", price: 740, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Mango Charm.png" },
  { id: "sp-16", name: "Mystic Mushroom Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Mystic Mushroom Charm.png" },
  { id: "sp-17", name: "Orange Zest Fruit Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Orange Zest Charm.png" },
  { id: "sp-18", name: "Papaya Fruit Fresh Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Papaya Charm.png" },
  { id: "sp-19", name: "Pink Donut Gold Sprinkles", price: 890, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Pink Donut with Golden Sprinkles Charm.png" },
  { id: "sp-20", name: "Pink Popsicle Sweet Charm", price: 740, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Pink Popsicle Charm.png" },
  { id: "sp-21", name: "Popsicle Summer Charm", price: 740, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Popsicle Charm.png" },
  { id: "sp-22", name: "Strawberry Shortcake Charm", price: 740, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Strawberry Shortcake Charm.png" },
  { id: "sp-23", name: "Sunny Toast Brunch Charm", price: 840, category: "Sugar Pop", image: "/charms-cards/Sugarpop/Label = Sunny Toast Charm.png" },

  // Wild & Free
  { id: "wf-1", name: "Aurora Fish Ocean Charm", price: 690, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Aurora Fish Charm.png" },
  { id: "wf-2", name: "Bloom Flower Wild Charm", price: 890, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Bloom Charm.png" },
  { id: "wf-3", name: "Blue Rose Oval Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Blue Rose Oval Charm.png" },
  { id: "wf-4", name: "Emerald Bloom Wild Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Emerald Bloom Charm.png" },
  { id: "wf-5", name: "Eye of Protection Charm", price: 790, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Eye Charm.png" },
  { id: "wf-6", name: "Flutter Butterfly Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Flutter Charm.png" },
  { id: "wf-7", name: "Golden Conch Shell Charm", price: 890, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Golden Conch Charm.png" },
  { id: "wf-8", name: "Golden Elephant Lucky Charm", price: 890, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Golden Elephant Charm.png" },
  { id: "wf-9", name: "Golden Koi Fish Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Golden Koi Charm.png" },
  { id: "wf-10", name: "Golden Palm Tree Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Golden Palm Charm.png" },
  { id: "wf-11", name: "Lavender Wave Ocean Charm", price: 790, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Lavender Wave Charm.png" },
  { id: "wf-12", name: "Lotus Bloom Flower Charm", price: 740, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Lotus Bloom Charm.png" },
  { id: "wf-13", name: "Lucky Horseshoe Charm", price: 690, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Lucky Horseshoe Charm.png" },
  { id: "wf-14", name: "Lustrous Pearl Ocean Charm", price: 790, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Lustrous Pearl Charm.png" },
  { id: "wf-15", name: "Majestic Koi Fish Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Majestic Koi Charm.png" },
  { id: "wf-16", name: "Midnight Palm Tree Charm", price: 740, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Midnight Palm Charm.png" },
  { id: "wf-17", name: "Ocean Shell Seashell Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Ocean Shell Charm.png" },
  { id: "wf-18", name: "Palm Paradise Tree Charm", price: 790, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Palm Paradise Charm.png" },
  { id: "wf-19", name: "Pearl Fish Ocean Charm", price: 840, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Pearl Fish Charm.png" },
  { id: "wf-20", name: "Pink Lagoon Ocean Charm", price: 890, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Pink Lagoon Charm.png" },
  { id: "wf-21", name: "Seafoam Dream Ocean Charm", price: 790, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Seafoam Dream Charm.png" },
  { id: "wf-22", name: "Sunny Fish Ocean Charm", price: 690, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Sunny Fish Charm.png" },
  { id: "wf-23", name: "Wanderlust Trio Travel Charm", price: 890, category: "Wild & Free", image: "/charms-cards/Wild & Free/Label = Wanderlust Trio.png" }
];
