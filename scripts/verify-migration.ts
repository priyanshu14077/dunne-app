#!/usr/bin/env node

import 'dotenv/config'

/**
 * Verification Script
 * 
 * Verifies that the migration was successful by checking:
 * - Storage buckets exist
 * - Database URLs are updated
 * - Images are accessible
 * 
 * Usage:
 *   npm run verify:migration
 */

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('❌ Missing environment variables')
    process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function verifyBuckets() {
    console.log('🔍 Checking storage buckets...')

    const { data: buckets } = await supabase.storage.listBuckets()
    const productsBucket = buckets?.find((b) => b.name === 'products')
    const charmsBucket = buckets?.find((b) => b.name === 'charms')

    if (productsBucket && charmsBucket) {
        console.log('✅ Both buckets exist')
        console.log(`   - products: ${productsBucket.public ? 'public' : 'private'}`)
        console.log(`   - charms: ${charmsBucket.public ? 'public' : 'private'}`)
        return true
    } else {
        console.log('❌ Missing buckets')
        return false
    }
}

async function verifyDatabaseUrls() {
    console.log('\n🔍 Checking database URLs...')

    // Check base products
    const { data: baseProducts } = await supabase
        .from('base_products')
        .select('preview_image_url, svg_template_url')

    const baseProductsWithSupabase = baseProducts?.filter(
        (p) =>
            (p.preview_image_url && p.preview_image_url.includes('supabase.co/storage')) ||
            (p.svg_template_url && p.svg_template_url.includes('supabase.co/storage'))
    ).length || 0

    const baseProductsWithDrive = baseProducts?.filter(
        (p) =>
            (p.preview_image_url && p.preview_image_url.includes('drive.google.com')) ||
            (p.svg_template_url && p.svg_template_url.includes('drive.google.com'))
    ).length || 0

    // Check charms
    const { data: charms } = await supabase
        .from('charms')
        .select('svg_icon_url, thumbnail_url')

    const charmsWithSupabase = charms?.filter(
        (c) =>
            (c.svg_icon_url && c.svg_icon_url.includes('supabase.co/storage')) ||
            (c.thumbnail_url && c.thumbnail_url.includes('supabase.co/storage'))
    ).length || 0

    const charmsWithDrive = charms?.filter(
        (c) =>
            (c.svg_icon_url && c.svg_icon_url.includes('drive.google.com')) ||
            (c.thumbnail_url && c.thumbnail_url.includes('drive.google.com'))
    ).length || 0

    console.log('\n📦 Base Products:')
    console.log(`   Total: ${baseProducts?.length}`)
    console.log(`   With Supabase URLs: ${baseProductsWithSupabase}`)
    console.log(`   With Google Drive URLs: ${baseProductsWithDrive}`)

    console.log('\n🎨 Charms:')
    console.log(`   Total: ${charms?.length}`)
    console.log(`   With Supabase URLs: ${charmsWithSupabase}`)
    console.log(`   With Google Drive URLs: ${charmsWithDrive}`)

    const allMigrated = baseProductsWithDrive === 0 && charmsWithDrive === 0

    if (allMigrated) {
        console.log('\n✅ All URLs migrated to Supabase Storage')
    } else {
        console.log('\n⚠️  Some URLs still point to Google Drive')
    }

    return allMigrated
}

async function testImageAccess() {
    console.log('\n🔍 Testing image accessibility...')

    // Get random sample
    const { data: baseProducts } = await supabase
        .from('base_products')
        .select('item_code, preview_image_url')
        .not('preview_image_url', 'is', null)
        .limit(5)

    const { data: charms } = await supabase
        .from('charms')
        .select('item_code, svg_icon_url')
        .not('svg_icon_url', 'is', null)
        .limit(5)

    let successCount = 0
    let failCount = 0

    console.log('\n📦 Testing base products:')
    for (const product of baseProducts || []) {
        try {
            const response = await fetch(product.preview_image_url!)
            if (response.ok) {
                console.log(`   ✅ ${product.item_code}`)
                successCount++
            } else {
                console.log(`   ❌ ${product.item_code} (${response.status})`)
                failCount++
            }
        } catch (error) {
            console.log(`   ❌ ${product.item_code} (fetch failed)`)
            failCount++
        }
    }

    console.log('\n🎨 Testing charms:')
    for (const charm of charms || []) {
        try {
            const response = await fetch(charm.svg_icon_url!)
            if (response.ok) {
                console.log(`   ✅ ${charm.item_code}`)
                successCount++
            } else {
                console.log(`   ❌ ${charm.item_code} (${response.status})`)
                failCount++
            }
        } catch (error) {
            console.log(`   ❌ ${charm.item_code} (fetch failed)`)
            failCount++
        }
    }

    console.log(`\n📊 Results: ${successCount} accessible, ${failCount} failed`)

    return failCount === 0
}

async function main() {
    console.log('🚀 Starting Migration Verification')
    console.log('='.repeat(60))

    const bucketsOk = await verifyBuckets()
    const urlsOk = await verifyDatabaseUrls()
    const imagesOk = await testImageAccess()

    console.log('\n' + '='.repeat(60))
    console.log('📊 VERIFICATION SUMMARY')
    console.log('='.repeat(60))
    console.log(`Storage Buckets: ${bucketsOk ? '✅' : '❌'}`)
    console.log(`Database URLs:   ${urlsOk ? '✅' : '⚠️'}`)
    console.log(`Image Access:    ${imagesOk ? '✅' : '❌'}`)
    console.log('='.repeat(60))

    if (bucketsOk && urlsOk && imagesOk) {
        console.log('\n✅ Migration verification passed!\n')
    } else {
        console.log('\n⚠️  Migration verification found issues\n')
        process.exit(1)
    }
}

main()
