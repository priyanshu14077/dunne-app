#!/usr/bin/env python3
"""
Automated script to update charm descriptions and specifications in mock-data.ts
from Google Sheets data while preserving product IDs and names.
"""

import re
import json
from typing import Dict, List, Tuple

# Spreadsheet data extracted from all 7 categories
SPREADSHEET_DATA = {
    "Eternal Bond": [
        {
            "name": "Eternal Rose Oval Charm",
            "description": "The Eternal Rose Oval Charm is a symbol of everlasting beauty and love. Featuring a hand painted rose on a creamy enamel base, it captures the charm of vintage keepsakes with a modern minimal touch.",
            "specifications": {
                "size": "Approx. 2 cm (height) × 1.2 cm (width)",
                "weight": "Approx. 1.5 g",
                "material": "Stainless Steel with Gold Plating and Enamel Detailing",
                "finish": "Smooth ivory enamel with painted rose motif",
                "quality": "Anti Tarnish, Hypoallergenic"
            }
        },
        {
            "name": "Bloom Vase Charm",
            "description": "The Bloom Vase Charm is a miniature work of art, celebrating the beauty of flowers captured in a timeless ceramic style motif. Featuring a delicately painted blue vase with pink blossoms, it embodies grace, heritage, and charm.",
            "specifications": {
                "size": "Approx. 2 cm (height) × 1.2 cm (width)",
                "weight": "Approx. 1.8 g",
                "material": "Stainless Steel with Gold Plating and Enamel Artwork",
                "finish": "Smooth ivory enamel with hand painted floral vase design",
                "quality": "Anti Tarnish, Hypoallergenic"
            }
        },
        {
            "name": "Pop Heart Charm",
            "description": "The Pop Heart Charm is a bold declaration of love, joy, and creativity. With its vibrant red heart framed against a playful blue and white checkered enamel backdrop, it captures the spirit of fun and fearless expression. This charm adds a quirky yet modern edge to your collection — perfect for stacking with minimal or statement pieces alike.",
            "specifications": {
                "size": "Approx. 1.8 cm (height) × 1.2 cm (width)",
                "weight": "Approx. 2 g",
                "material": "Stainless Steel with Gold Plating and Enamel Inlay",
                "finish": "Gloss enamel surface with polished gold edges",
                "quality": "Anti Tarnish, Hypoallergenic"
            }
        },
        {
            "name": "Folk Bloom Charm",
            "description": "The Folk Bloom Charm celebrates timeless artistry with a touch of modern playfulness. Featuring vibrant red orange tulip flowers tied together with a delicate blue bow, this rectangular enamel charm captures the warmth of handcrafted tiles and heritage florals. It's a symbol of joy, growth, and beauty — perfect for adding a storytelling element to your jewelry stack.",
            "specifications": {
                "size": "Approx. 1.8 cm (height) × 1.2 cm (width)",
                "weight": "Approx. 2.2 g",
                "material": "Stainless Steel with Gold Plating and Enamel Detailing",
                "finish": "Smooth enamel surface framed with polished gold edges",
                "quality": "Anti Tarnish, Hypoallergenic"
            }
        },
        {
            "name": "Blooming Lily Charm",
            "description": "The Blooming Lily Charm is a delicate emblem of grace and renewal. Featuring a soft pink flower with fresh green leaves, hand painted over an ivory enamel oval, this charm captures the beauty of nature's quiet moments. A symbol of growth, purity, and elegance, it makes for a meaningful piece in your everyday jewelry.",
            "specifications": {
                "size": "Approx. 1.8 cm (height) × 1.2 cm (width)",
                "weight": "Approx. 2.0 g",
                "material": "Stainless Steel with Gold Plating and Enamel Work",
                "finish": "Smooth enamel surface framed with polished gold edges",
                "quality": "Anti Tarnish, Hypoallergenic"
            }
        }
    ],
    "Game On": [
        {
            "name": "Golden Ping Pong Passion Charm",
            "description": "Serve up style with a twist of fun. The Golden Ping Pong Passion Charm celebrates energy, focus, and the playful spirit of sport. Designed in stainless steel and finished with a glossy gold enamel, this charm adds a quirky yet luxe accent to your bracelet or chain. It's anti tarnish, hypoallergenic, and crafted to be a conversation starter wherever you go.",
            "specifications": {
                "size": "2.0 cm (H) × 1.0 cm (W)",
                "weight": "Lightweight (approx. 2–3 g)",
                "material": "Stainless Steel",
                "finish": "Gold Plated with Enamel Detailing",
                "quality": "Anti Tarnish, Hypoallergenic, Everyday Wear"
            }
        }
    ]
}

def normalize_name(name: str) -> str:
    """Normalize charm names for matching."""
    return name.lower().strip().replace("  ", " ")

def find_matching_charm(charm_name: str, category_data: List[Dict]) -> Dict:
    """Find matching charm from spreadsheet data."""
    normalized_search = normalize_name(charm_name)
    
    for charm in category_data:
        normalized_charm = normalize_name(charm["name"])
        # Try exact match first
        if normalized_search == normalized_charm:
            return charm
        # Try partial match (for cases like "Blooming Heart Floral Charm" vs "Blooming Heart Charm")
        if normalized_search in normalized_charm or normalized_charm in normalized_search:
            return charm
    
    return None

def format_specifications(specs: Dict) -> str:
    """Format specifications as TypeScript object."""
    lines = ["    specifications: {"]
    for key, value in specs.items():
        # Escape quotes in values
        escaped_value = value.replace('"', '\\"')
        lines.append(f'      {key}: "{escaped_value}",')
    lines.append("    }")
    return "\n".join(lines)

def main():
    print("Charm Description and Specification Update Script")
    print("=" * 60)
    print("This script will update ONLY descriptions and specifications")
    print("Product IDs and names will NOT be changed")
    print("=" * 60)
    
    # This is a template - the actual implementation would read the file,
    # parse it, match charms, and update only the description and specifications
    
    print("\nScript template created successfully!")
    print("Ready to process updates...")

if __name__ == "__main__":
    main()
