

import 'dotenv/config'



import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import { createBucket, uploadFile, getPublicUrl } from '../lib/storage-utils'

// Configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!
const PROJECT_ID = 'lnvmeghqivgvoziklfpk'

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('❌ Missing environment variables:')
    console.error('   NEXT_PUBLIC_SUPABASE_URL')
    console.error('   SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

interface MigrationStats {
    baseProducts: {
        total: number
        migrated: number
        failed: number
        skipped: number
    }
    charms: {
        total: number
        migrated: number
        failed: number
        skipped: number
    }
    errors: Array<{ item: string; error: string }>
}

const stats: MigrationStats = {
    baseProducts: { total: 0, migrated: 0, failed: 0, skipped: 0 },
    charms: { total: 0, migrated: 0, failed: 0, skipped: 0 },
    errors: [],
}


async function setupStorageBuckets() {
    console.log('\n📦 Setting up storage buckets...\n')

    try {
        await createBucket('products', true, supabase)
        await createBucket('charms', true, supabase)
        console.log('✅ Storage buckets ready\n')
    } catch (error) {
        console.error('❌ Failed to create buckets:', error)
        throw error
    }
}

async function backupCurrentUrls() {
    console.log('💾 Backing up current URLs...\n')

    const { data: baseProducts } = await supabase
        .from('base_products')
        .select('id, item_code, preview_image_url, svg_template_url')

    const { data: charms } = await supabase
        .from('charms')
        .select('id, item_code, svg_icon_url, thumbnail_url')

    const backupData = {
        timestamp: new Date().toISOString(),
        baseProducts,
        charms,
    }

    fs.writeFileSync(
        'url-backup.json',
        JSON.stringify(backupData, null, 2)
    )

    console.log('✅ Backup saved to url-backup.json\n')
}

/**
 * Step 3: Get content type from file extension
 */
function getContentType(filename: string): string {
    const ext = path.extname(filename).toLowerCase()
    const types: Record<string, string> = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
    }
    return types[ext] || 'application/octet-stream'
}

/**
 * Step 4: Upload images from local directory
 */
async function uploadImagesFromDirectory(imagesDir: string) {
    if (!fs.existsSync(imagesDir)) {
        console.error(`❌ Images directory not found: ${imagesDir}`)
        console.log('\n📋 Please organize your images as follows:')
        console.log(`   ${imagesDir}/`)
        console.log('     ├── base-products/')
        console.log('     │   ├── DUN_Brac01/')
        console.log('     │   │   └── preview.jpg')
        console.log('     │   ├── DUN_Brac02/')
        console.log('     │   │   └── preview.jpg')
        console.log('     └── charms/')
        console.log('         ├── DUN_CHAR01/')
        console.log('         │   ├── icon.svg')
        console.log('         │   └── thumbnail.jpg')
        console.log('         ├── DUN_CHAR02/')
        console.log('         │   ├── icon.svg')
        console.log('         │   └── thumbnail.jpg\n')
        process.exit(1)
    }

    console.log('📤 Uploading images to Supabase Storage...\n')

    // Upload base product images
    await uploadBaseProductImages(path.join(imagesDir, 'base-products'))

    // Upload charm images
    await uploadCharmImages(path.join(imagesDir, 'charms'))
}

/**
 * Upload base product images
 */
async function uploadBaseProductImages(baseProductsDir: string) {
    if (!fs.existsSync(baseProductsDir)) {
        console.log('⚠️  No base-products directory found, skipping...\n')
        return
    }

    const { data: products } = await supabase
        .from('base_products')
        .select('id, item_code, name')

    if (!products) return

    stats.baseProducts.total = products.length

    for (const product of products) {
        const itemCode = product.item_code.replace(/\s+/g, '_')
        const productDir = path.join(baseProductsDir, itemCode)

        if (!fs.existsSync(productDir)) {
            console.log(`⏭️  Skipping ${itemCode} (no directory)`)
            stats.baseProducts.skipped++
            continue
        }

        try {
            let previewUrl: string | null = null
            let svgUrl: string | null = null

            // Look for preview image
            const previewFiles = ['preview.jpg', 'preview.jpeg', 'preview.png', 'preview.webp']
            for (const filename of previewFiles) {
                const filePath = path.join(productDir, filename)
                if (fs.existsSync(filePath)) {
                    const fileBuffer = fs.readFileSync(filePath)
                    const storagePath = `base-products/${itemCode}/${filename}`
                    const result = await uploadFile(
                        'products',
                        storagePath,
                        fileBuffer,
                        getContentType(filename),
                        supabase
                    )
                    previewUrl = result.publicUrl
                    break
                }
            }

            // Look for SVG template
            const svgPath = path.join(productDir, 'template.svg')
            if (fs.existsSync(svgPath)) {
                const fileBuffer = fs.readFileSync(svgPath)
                const storagePath = `base-products/${itemCode}/template.svg`
                const result = await uploadFile(
                    'products',
                    storagePath,
                    fileBuffer,
                    'image/svg+xml',
                    supabase
                )
                svgUrl = result.publicUrl
            }

            // Update database
            const updates: any = {}
            if (previewUrl) updates.preview_image_url = previewUrl
            if (svgUrl) updates.svg_template_url = svgUrl

            if (Object.keys(updates).length > 0) {
                await supabase
                    .from('base_products')
                    .update(updates)
                    .eq('id', product.id)

                console.log(`✅ ${itemCode} - ${product.name}`)
                stats.baseProducts.migrated++
            } else {
                console.log(`⏭️  ${itemCode} - No images found`)
                stats.baseProducts.skipped++
            }
        } catch (error) {
            console.error(`❌ ${itemCode} - Failed:`, error)
            stats.baseProducts.failed++
            stats.errors.push({
                item: `${itemCode} (${product.name})`,
                error: String(error),
            })
        }
    }
}

/**
 * Upload charm images
 */
async function uploadCharmImages(charmsDir: string) {
    if (!fs.existsSync(charmsDir)) {
        console.log('⚠️  No charms directory found, skipping...\n')
        return
    }

    const { data: charms } = await supabase
        .from('charms')
        .select('id, item_code, name')

    if (!charms) return

    stats.charms.total = charms.length

    for (const charm of charms) {
        const itemCode = charm.item_code.replace(/\s+/g, '_')
        const charmDir = path.join(charmsDir, itemCode)

        if (!fs.existsSync(charmDir)) {
            console.log(`⏭️  Skipping ${itemCode} (no directory)`)
            stats.charms.skipped++
            continue
        }

        try {
            let iconUrl: string | null = null
            let thumbnailUrl: string | null = null

            // Look for icon (SVG preferred)
            const iconFiles = ['icon.svg', 'icon.png', 'icon.jpg', 'icon.webp']
            for (const filename of iconFiles) {
                const filePath = path.join(charmDir, filename)
                if (fs.existsSync(filePath)) {
                    const fileBuffer = fs.readFileSync(filePath)
                    const storagePath = `charms/${itemCode}/${filename}`
                    const result = await uploadFile(
                        'charms',
                        storagePath,
                        fileBuffer,
                        getContentType(filename),
                        supabase
                    )
                    iconUrl = result.publicUrl
                    break
                }
            }

            // Look for thumbnail
            const thumbnailFiles = ['thumbnail.jpg', 'thumbnail.jpeg', 'thumbnail.png', 'thumbnail.webp']
            for (const filename of thumbnailFiles) {
                const filePath = path.join(charmDir, filename)
                if (fs.existsSync(filePath)) {
                    const fileBuffer = fs.readFileSync(filePath)
                    const storagePath = `charms/${itemCode}/${filename}`
                    const result = await uploadFile(
                        'charms',
                        storagePath,
                        fileBuffer,
                        getContentType(filename),
                        supabase
                    )
                    thumbnailUrl = result.publicUrl
                    break
                }
            }

            // Update database
            const updates: any = {}
            if (iconUrl) updates.svg_icon_url = iconUrl
            if (thumbnailUrl) updates.thumbnail_url = thumbnailUrl

            if (Object.keys(updates).length > 0) {
                await supabase
                    .from('charms')
                    .update(updates)
                    .eq('id', charm.id)

                console.log(`✅ ${itemCode} - ${charm.name}`)
                stats.charms.migrated++
            } else {
                console.log(`⏭️  ${itemCode} - No images found`)
                stats.charms.skipped++
            }
        } catch (error) {
            console.error(`❌ ${itemCode} - Failed:`, error)
            stats.charms.failed++
            stats.errors.push({
                item: `${itemCode} (${charm.name})`,
                error: String(error),
            })
        }
    }
}

/**
 * Step 5: Generate migration report
 */
function generateReport() {
    console.log('\n' + '='.repeat(60))
    console.log('📊 MIGRATION REPORT')
    console.log('='.repeat(60))
    console.log('\n📦 Base Products:')
    console.log(`   Total:    ${stats.baseProducts.total}`)
    console.log(`   Migrated: ${stats.baseProducts.migrated}`)
    console.log(`   Skipped:  ${stats.baseProducts.skipped}`)
    console.log(`   Failed:   ${stats.baseProducts.failed}`)

    console.log('\n🎨 Charms:')
    console.log(`   Total:    ${stats.charms.total}`)
    console.log(`   Migrated: ${stats.charms.migrated}`)
    console.log(`   Skipped:  ${stats.charms.skipped}`)
    console.log(`   Failed:   ${stats.charms.failed}`)

    if (stats.errors.length > 0) {
        console.log('\n❌ Errors:')
        stats.errors.forEach((err) => {
            console.log(`   ${err.item}: ${err.error}`)
        })
    }

    console.log('\n' + '='.repeat(60))

    // Save report to file
    fs.writeFileSync(
        'migration-report.json',
        JSON.stringify({
            timestamp: new Date().toISOString(),
            stats,
        }, null, 2)
    )

    console.log('💾 Report saved to migration-report.json\n')
}

/**
 * Main migration function
 */
async function main() {
    const args = process.argv.slice(2)
    const imagesDirIndex = args.indexOf('--images-dir')
    const imagesDir = imagesDirIndex !== -1 ? args[imagesDirIndex + 1] : './downloaded-images'

    console.log('🚀 Starting Image Migration')
    console.log('='.repeat(60))
    console.log(`📁 Images directory: ${imagesDir}`)
    console.log('='.repeat(60))

    try {
        await setupStorageBuckets()
        await backupCurrentUrls()
        await uploadImagesFromDirectory(imagesDir)
        generateReport()

        console.log('✅ Migration completed successfully!\n')
    } catch (error) {
        console.error('\n❌ Migration failed:', error)
        process.exit(1)
    }
}

main()
