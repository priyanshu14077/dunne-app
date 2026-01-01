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
  {
    "id": "eternalbloom-1",
    "name": "Bloom Vase",
    "price": 840,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Bloom Vase Charm M.png"
  },
  {
    "id": "eternalbloom-2",
    "name": "Blooming Lily",
    "price": 840,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Blooming Lily Charm M.png"
  },
  {
    "id": "eternalbloom-3",
    "name": "Blossom Vase",
    "price": 690,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Blossom Vase Charm M.png"
  },
  {
    "id": "eternalbloom-4",
    "name": "Blue Blossom Heart",
    "price": 690,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Blue Blossom Heart Charm M.png"
  },
  {
    "id": "eternalbloom-5",
    "name": "Blue Meadow Bloom",
    "price": 690,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Blue Meadow Bloom Charm M.png"
  },
  {
    "id": "eternalbloom-6",
    "name": "Blue Rose",
    "price": 840,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Blue Rose Charm L.png"
  },
  {
    "id": "eternalbloom-7",
    "name": "DescriBlue Heart",
    "price": 790,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/DescriBlue Heart Charm M.png"
  },
  {
    "id": "eternalbloom-8",
    "name": "Eternal Rose Oval",
    "price": 690,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Eternal Rose Oval Charm M.png"
  },
  {
    "id": "eternalbloom-9",
    "name": "Folk Bloom",
    "price": 740,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Folk Bloom Charm M.png"
  },
  {
    "id": "eternalbloom-10",
    "name": "Love Note",
    "price": 740,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Love Note Charm S.png"
  },
  {
    "id": "eternalbloom-11",
    "name": "Mama",
    "price": 740,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Mama Charm S.png"
  },
  {
    "id": "eternalbloom-12",
    "name": "Mom’s Heart",
    "price": 690,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Mom’s Heart Charm S.png"
  },
  {
    "id": "eternalbloom-13",
    "name": "Mom’s Heart Charm",
    "price": 840,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Mom’s Heart Charm.png"
  },
  {
    "id": "eternalbloom-14",
    "name": "Pop Heart",
    "price": 890,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Pop Heart Charm M.png"
  },
  {
    "id": "eternalbloom-15",
    "name": "Red Heart",
    "price": 840,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Red Heart Charm M.png"
  },
  {
    "id": "eternalbloom-16",
    "name": "Rosette Bloom",
    "price": 690,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Rosette Bloom Charm M.png"
  },
  {
    "id": "eternalbloom-17",
    "name": "Scarlet Tulip",
    "price": 740,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Scarlet Tulip Charm M.png"
  },
  {
    "id": "eternalbloom-18",
    "name": "Starlit Crescent",
    "price": 790,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Starlit Crescent Charm L.png"
  },
  {
    "id": "eternalbloom-19",
    "name": "Tulip Dawn",
    "price": 890,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Tulip Dawn Charm M.png"
  },
  {
    "id": "eternalbloom-20",
    "name": "Twin Blossom",
    "price": 790,
    "category": "Eternal Bloom",
    "image": "/charms-categories/Eternal Bloom/Twin Blossom Charm M.png"
  },
  {
    "id": "gameon-21",
    "name": "Golden Ping Pong Passion",
    "price": 790,
    "category": "Game On",
    "image": "/charms-categories/Game On/Golden Ping Pong Passion Charm  M.png"
  },
  {
    "id": "gameon-22",
    "name": "Pickleball Spark",
    "price": 790,
    "category": "Game On",
    "image": "/charms-categories/Game On/Pickleball Spark Charm L.png"
  },
  {
    "id": "gameon-23",
    "name": "Pink Smash",
    "price": 890,
    "category": "Game On",
    "image": "/charms-categories/Game On/Pink Smash Charm M.png"
  },
  {
    "id": "gameon-24",
    "name": "Silver Tennis Spark",
    "price": 890,
    "category": "Game On",
    "image": "/charms-categories/Game On/Silver Tennis Spark Charm L.png"
  },
  {
    "id": "gameon-25",
    "name": "Tennis Ace",
    "price": 690,
    "category": "Game On",
    "image": "/charms-categories/Game On/Tennis Ace Charm L.png"
  },
  {
    "id": "gameon-26",
    "name": "Tennis Sparkle Racket",
    "price": 890,
    "category": "Game On",
    "image": "/charms-categories/Game On/Tennis Sparkle Racket Charm L.png"
  },
  {
    "id": "guardian-27",
    "name": "Aqua Vision",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Aqua Vision Charm M.png"
  },
  {
    "id": "guardian-28",
    "name": "Blush Teardrop Eye",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Blush Teardrop Eye Charm M.png"
  },
  {
    "id": "guardian-29",
    "name": "Celestial Eye",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Celestial Eye Charm M.png"
  },
  {
    "id": "guardian-30",
    "name": "Crescent Star",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Crescent Star Charm M.png"
  },
  {
    "id": "guardian-31",
    "name": "Guardian Eye",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Guardian Eye Charm M.png"
  },
  {
    "id": "guardian-32",
    "name": "Guardian Hamsa",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Guardian Hamsa Charm M.png"
  },
  {
    "id": "guardian-33",
    "name": "Guardian Hand",
    "price": 840,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Guardian Hand Charm L.png"
  },
  {
    "id": "guardian-34",
    "name": "Guardian Heart Eye",
    "price": 840,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Guardian Heart Eye Charm M.png"
  },
  {
    "id": "guardian-35",
    "name": "Luminous Eye",
    "price": 840,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Luminous Eye Charm M.png"
  },
  {
    "id": "guardian-36",
    "name": "Midnight Eye",
    "price": 740,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Midnight Eye Charm M.png"
  },
  {
    "id": "guardian-37",
    "name": "Mystic Eye",
    "price": 740,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Mystic Eye Charm M.png"
  },
  {
    "id": "guardian-38",
    "name": "North Star",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/North Star Charm M.png"
  },
  {
    "id": "guardian-39",
    "name": "Prism Eye",
    "price": 840,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Prism Eye Charm XL.png"
  },
  {
    "id": "guardian-40",
    "name": "Radiant Eye Charm -",
    "price": 690,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Radiant Eye Charm - 2 M.png"
  },
  {
    "id": "guardian-41",
    "name": "Radiant Eye",
    "price": 740,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Radiant Eye Charm M.png"
  },
  {
    "id": "guardian-42",
    "name": "Sentinel Eye",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Sentinel Eye Charm M.png"
  },
  {
    "id": "guardian-43",
    "name": "Solara",
    "price": 740,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Solara Charm M.png"
  },
  {
    "id": "guardian-44",
    "name": "Turquoise Eye",
    "price": 790,
    "category": "Guardian",
    "image": "/charms-categories/Guardian/Turquoise Eye Charm M.png"
  },
  {
    "id": "lovestruck-45",
    "name": "Blooming Heart",
    "price": 790,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Blooming Heart Charm L.png"
  },
  {
    "id": "lovestruck-46",
    "name": "Blush Heart",
    "price": 690,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Blush Heart Charm S.png"
  },
  {
    "id": "lovestruck-47",
    "name": "Crystal Green candy",
    "price": 840,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Crystal Green candy L.png"
  },
  {
    "id": "lovestruck-48",
    "name": "Crystal Heart",
    "price": 840,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Crystal Heart Charm L.png"
  },
  {
    "id": "lovestruck-49",
    "name": "Crystal Pink candy",
    "price": 840,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Crystal Pink candy L.png"
  },
  {
    "id": "lovestruck-50",
    "name": "Daisy Heart",
    "price": 740,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Daisy Heart Charm M.png"
  },
  {
    "id": "lovestruck-51",
    "name": "Ember Heart",
    "price": 690,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Ember Heart Charm S.png"
  },
  {
    "id": "lovestruck-52",
    "name": "Emerald Heart",
    "price": 740,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Emerald Heart Charm S.png"
  },
  {
    "id": "lovestruck-53",
    "name": "Eternal Heart",
    "price": 690,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Eternal Heart Charm S.png"
  },
  {
    "id": "lovestruck-54",
    "name": "Heart of Vision",
    "price": 690,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Heart of Vision Charm 1 M.png"
  },
  {
    "id": "lovestruck-55",
    "name": "Lilac Drop Hearh",
    "price": 740,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Lilac Drop Hearh Charm M.png"
  },
  {
    "id": "lovestruck-56",
    "name": "Love Letter",
    "price": 740,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Love Letter Charm M.png"
  },
  {
    "id": "lovestruck-57",
    "name": "Peach Blush Heart",
    "price": 840,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Peach Blush Heart S.png"
  },
  {
    "id": "lovestruck-58",
    "name": "Pure Heart",
    "price": 790,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Pure Heart Charm S.png"
  },
  {
    "id": "lovestruck-59",
    "name": "Retro Heart",
    "price": 840,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Retro Heart Charm M.png"
  },
  {
    "id": "lovestruck-60",
    "name": "Sacred Heart",
    "price": 790,
    "category": "LoveStruck",
    "image": "/charms-categories/LoveStruck/Sacred Heart charm L.png"
  },
  {
    "id": "persona-61",
    "name": "A Initial Charm",
    "price": 690,
    "category": "Persona",
    "image": "/charms-categories/Persona/A Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-62",
    "name": "B Initial Charm",
    "price": 690,
    "category": "Persona",
    "image": "/charms-categories/Persona/B Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-63",
    "name": "Capricorn Zodiac",
    "price": 690,
    "category": "Persona",
    "image": "/charms-categories/Persona/Capricorn Zodiac Pendant (BG - Removed) M.png"
  },
  {
    "id": "persona-64",
    "name": "D Initial Charm",
    "price": 840,
    "category": "Persona",
    "image": "/charms-categories/Persona/D Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-65",
    "name": "E Initial Charm",
    "price": 740,
    "category": "Persona",
    "image": "/charms-categories/Persona/E Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-66",
    "name": "H Initial Charm",
    "price": 740,
    "category": "Persona",
    "image": "/charms-categories/Persona/H Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-67",
    "name": "I Initial Charm",
    "price": 840,
    "category": "Persona",
    "image": "/charms-categories/Persona/I Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-68",
    "name": "Leo Zodiac",
    "price": 740,
    "category": "Persona",
    "image": "/charms-categories/Persona/Leo Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "persona-69",
    "name": "Libra Zodiac",
    "price": 740,
    "category": "Persona",
    "image": "/charms-categories/Persona/Libra Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "persona-70",
    "name": "M Initial Charm",
    "price": 790,
    "category": "Persona",
    "image": "/charms-categories/Persona/M Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-71",
    "name": "N Initial Charm",
    "price": 840,
    "category": "Persona",
    "image": "/charms-categories/Persona/N Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-72",
    "name": "O Initial Charm",
    "price": 890,
    "category": "Persona",
    "image": "/charms-categories/Persona/O Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-73",
    "name": "P Initial Charm",
    "price": 890,
    "category": "Persona",
    "image": "/charms-categories/Persona/P Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-74",
    "name": "Pisces Zodiac",
    "price": 740,
    "category": "Persona",
    "image": "/charms-categories/Persona/Pisces Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "persona-75",
    "name": "Q Initial Charm",
    "price": 790,
    "category": "Persona",
    "image": "/charms-categories/Persona/Q Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-76",
    "name": "R Initial Charm",
    "price": 690,
    "category": "Persona",
    "image": "/charms-categories/Persona/R Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-77",
    "name": "Sagittarius Zodiac",
    "price": 690,
    "category": "Persona",
    "image": "/charms-categories/Persona/Sagittarius Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "persona-78",
    "name": "Scorpio Zodiac",
    "price": 840,
    "category": "Persona",
    "image": "/charms-categories/Persona/Scorpio Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "persona-79",
    "name": "T Initial Charm",
    "price": 890,
    "category": "Persona",
    "image": "/charms-categories/Persona/T Initial Charm (BG-Removed) M.png"
  },
  {
    "id": "persona-80",
    "name": "Taurus Zodiac",
    "price": 840,
    "category": "Persona",
    "image": "/charms-categories/Persona/Taurus Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "persona-81",
    "name": "Virgo Zodiac",
    "price": 890,
    "category": "Persona",
    "image": "/charms-categories/Persona/Virgo Zodiac Pendant (BG-Removed) M.png"
  },
  {
    "id": "sugarpop-82",
    "name": "Acorn Strength",
    "price": 890,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Acorn Strength Charm M.png"
  },
  {
    "id": "sugarpop-83",
    "name": "Aurora Croissant",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Aurora Croissant Charm M.png"
  },
  {
    "id": "sugarpop-84",
    "name": "Avocado Love",
    "price": 790,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Avocado Love Charm M.png"
  },
  {
    "id": "sugarpop-85",
    "name": "Avocado Toast",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Avocado Toast Charm M.png"
  },
  {
    "id": "sugarpop-86",
    "name": "Banana Fun",
    "price": 740,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Banana Fun Charm M.png"
  },
  {
    "id": "sugarpop-87",
    "name": "Burger Bite",
    "price": 690,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Burger Bite Charm M.png"
  },
  {
    "id": "sugarpop-88",
    "name": "Cherry Pop",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Cherry Pop Charm M.png"
  },
  {
    "id": "sugarpop-89",
    "name": "Coffee Cup",
    "price": 690,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Coffee Cup Charm M.png"
  },
  {
    "id": "sugarpop-90",
    "name": "Croissant",
    "price": 740,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Croissant Charm M.png"
  },
  {
    "id": "sugarpop-91",
    "name": "Donut Delight",
    "price": 790,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Donut Delight Charm M.png"
  },
  {
    "id": "sugarpop-92",
    "name": "Golden Croissant",
    "price": 790,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Golden Croissant Charm M.png"
  },
  {
    "id": "sugarpop-93",
    "name": "Grapes",
    "price": 690,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Grapes Charm M.png"
  },
  {
    "id": "sugarpop-94",
    "name": "Hotdog",
    "price": 890,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Hotdog Charm M.png"
  },
  {
    "id": "sugarpop-95",
    "name": "Mango Bliss",
    "price": 890,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Mango Bliss Charm M.png"
  },
  {
    "id": "sugarpop-96",
    "name": "Mango",
    "price": 740,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Mango Charm M.png"
  },
  {
    "id": "sugarpop-97",
    "name": "Mystic Mushroom",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Mystic Mushroom Charm M.png"
  },
  {
    "id": "sugarpop-98",
    "name": "Orange Zest",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Orange Zest Charm M.png"
  },
  {
    "id": "sugarpop-99",
    "name": "Papaya",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Papaya Charm M.png"
  },
  {
    "id": "sugarpop-100",
    "name": "Pink Donut",
    "price": 890,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Pink Donut with Golden Sprinkles Charm M.png"
  },
  {
    "id": "sugarpop-101",
    "name": "Pink Popsicle",
    "price": 740,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Pink Popsicle Charm M.png"
  },
  {
    "id": "sugarpop-102",
    "name": "Popsicle",
    "price": 740,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Popsicle Charm M.png"
  },
  {
    "id": "sugarpop-103",
    "name": "Strawberry Shortcake",
    "price": 740,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Strawberry Shortcake Charm S.png"
  },
  {
    "id": "sugarpop-104",
    "name": "Sunny Toast",
    "price": 840,
    "category": "Sugar Pop",
    "image": "/charms-categories/Sugar Pop/Sunny Toast Charm M.png"
  },
  {
    "id": "wildfree-105",
    "name": "Aurora Fish",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Aurora Fish Charm XL.png"
  },
  {
    "id": "wildfree-111",
    "name": "Golden Conch",
    "price": 890,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Golden Conch Charm M.png"
  },
  {
    "id": "wildfree-106",
    "name": "Bloom",
    "price": 890,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Bloom Charm M.png"
  },
  {
    "id": "wildfree-107",
    "name": "Blue Rose Oval",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Blue Rose Oval Charm M.png"
  },
  {
    "id": "wildfree-108",
    "name": "Emerald Bloom",
    "price": 790,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Emerald Bloom Charm M.png"
  },
  {
    "id": "wildfree-109",
    "name": "Eye",
    "price": 840,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Eye Charm M.png"
  },
  {
    "id": "wildfree-110",
    "name": "Flutter",
    "price": 840,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Flutter Charm M.png"
  },
  {
    "id": "wildfree-112",
    "name": "Golden Elephant",
    "price": 890,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Golden Elephant Charm S.png"
  },
  {
    "id": "wildfree-113",
    "name": "Golden Koi",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Golden Koi Charm M.png"
  },
  {
    "id": "wildfree-114",
    "name": "Golden Palm",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Golden Palm Charm S.png"
  },
  {
    "id": "wildfree-115",
    "name": "Lavender Wave",
    "price": 790,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Lavender Wave Charm M.png"
  },
  {
    "id": "wildfree-116",
    "name": "Lotus Bloom",
    "price": 740,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Lotus Bloom Charm M.png"
  },
  {
    "id": "wildfree-117",
    "name": "Lucky Horseshoe",
    "price": 740,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Lucky Horseshoe Charm M.png"
  },
  {
    "id": "wildfree-118",
    "name": "Lustrous Pearl",
    "price": 790,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Lustrous Pearl Charm M.png"
  },
  {
    "id": "wildfree-119",
    "name": "Majestic Koi",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Majestic Koi Charm XL.png"
  },
  {
    "id": "wildfree-120",
    "name": "Midnight Owl",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Midnight Owl Charm M.png"
  },
  {
    "id": "wildfree-121",
    "name": "Midnight Palm",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Midnight Palm Charm S.png"
  },
  {
    "id": "wildfree-122",
    "name": "Noir Gem",
    "price": 740,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Noir Gem Charm M.png"
  },
  {
    "id": "wildfree-123",
    "name": "OMG",
    "price": 740,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/OMG Charm M.png"
  },
  {
    "id": "wildfree-124",
    "name": "Ocean Shell",
    "price": 840,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Ocean Shell Charm L.png"
  },
  {
    "id": "wildfree-125",
    "name": "Palm Paradise",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Palm Paradise Charm M.png"
  },
  {
    "id": "wildfree-126",
    "name": "Pearl Fish",
    "price": 890,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Pearl Fish Charm S.png"
  },
  {
    "id": "wildfree-127",
    "name": "Pink Lagoon",
    "price": 890,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Pink Lagoon Charm M.png"
  },
  {
    "id": "wildfree-128",
    "name": "Rising Sun",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Rising Sun Charm M.png"
  },
  {
    "id": "wildfree-129",
    "name": "Seafoam Dream",
    "price": 740,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Seafoam Dream Charm M.png"
  },
  {
    "id": "wildfree-130",
    "name": "Sunny Fish",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Sunny Fish Charm M.png"
  },
  {
    "id": "wildfree-131",
    "name": "Wanderlust Trio",
    "price": 690,
    "category": "Wild & Free",
    "image": "/charms-categories/Wild & Free/Wanderlust Trio L.png"
  }
];
