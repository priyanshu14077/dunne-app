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
        id: 'eternal-rose',
        name: 'Eternal Rose Oval',
        price: 690,
        image: '/charms/Label = Eternal Rose Oval Charm.png',
        isBestSeller: true
    },
    {
        id: 'bloom-vase',
        name: 'Bloom Vase Charm',
        price: 850,
        image: '/charms/Label = Bloom Vase Charm.png'
    },
    {
        id: 'blue-heart',
        name: 'Blue Heart Charm',
        price: 690,
        image: '/charms/Label = DescriBlue Heart Charm.png'
    },
    {
        id: 'pop-heart',
        name: 'Pop Heart Charm',
        price: 750,
        image: '/charms/Label = Pop Heart Charm.png',
        isNew: true
    },
    {
        id: 'mama-charm',
        name: 'Mama Charm',
        price: 850,
        image: '/charms/Label = Mama Charm.png'
    },
    {
        id: 'love-note',
        name: 'Love Note Charm',
        price: 690,
        image: '/charms/Label = Love Note Charm.png'
    },
    {
        id: 'twin-blossom',
        name: 'Twin Blossom Charm',
        price: 950,
        image: '/charms/Label = Twin Blossom Charm.png'
    }
];
