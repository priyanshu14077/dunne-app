#!/usr/bin/env node

import 'dotenv/config'

/**
 * Export Image URLs Script
 * 
 * Exports all current image URLs from the database to a CSV file
 * for manual download from Google Drive.
 * 
 * Usage:
 *   npm run export:urls
 */

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('❌ Missing environment variables')
    process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function exportUrls() {
    console.log('📤 Exporting image URLs from database...\n')

    // Fetch base products
    const { data: baseProducts, error: baseError } = await supabase
        .from('base_products')
        .select('id, item_code, name, preview_image_url, svg_template_url')
        .order('item_code')

    if (baseError) {
        console.error('❌ Error fetching base products:', baseError)
        process.exit(1)
    }

    // Fetch charms
    const { data: charms, error: charmsError } = await supabase
        .from('charms')
        .select('id, item_code, name, svg_icon_url, thumbnail_url')
        .order('item_code')

    if (charmsError) {
        console.error('❌ Error fetching charms:', charmsError)
        process.exit(1)
    }

    // Generate CSV for base products
    let baseProductsCsv = 'Item Code,Name,Preview URL,SVG URL\n'
    baseProducts?.forEach((product) => {
        baseProductsCsv += `"${product.item_code}","${product.name}","${product.preview_image_url || ''}","${product.svg_template_url || ''}"\n`
    })
    fs.writeFileSync('base-products-urls.csv', baseProductsCsv)

    // Generate CSV for charms
    let charmsCsv = 'Item Code,Name,Icon URL,Thumbnail URL\n'
    charms?.forEach((charm) => {
        charmsCsv += `"${charm.item_code}","${charm.name}","${charm.svg_icon_url || ''}","${charm.thumbnail_url || ''}"\n`
    })
    fs.writeFileSync('charms-urls.csv', charmsCsv)

    console.log('✅ Exported URLs:')
    console.log(`   📄 base-products-urls.csv (${baseProducts?.length} products)`)
    console.log(`   📄 charms-urls.csv (${charms?.length} charms)\n`)

    console.log('📋 Next steps:')
    console.log('   1. Open the CSV files')
    console.log('   2. Download images from Google Drive URLs')
    console.log('   3. Organize them in the following structure:')
    console.log('      downloaded-images/')
    console.log('        ├── base-products/')
    console.log('        │   ├── {ITEM_CODE}/')
    console.log('        │   │   └── preview.jpg')
    console.log('        └── charms/')
    console.log('            ├── {ITEM_CODE}/')
    console.log('            │   ├── icon.svg')
    console.log('            │   └── thumbnail.jpg')
    console.log('   4. Run: npm run migrate:images\n')
}

exportUrls()
