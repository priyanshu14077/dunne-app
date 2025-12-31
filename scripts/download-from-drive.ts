#!/usr/bin/env node

import 'dotenv/config'
import { google } from 'googleapis'
import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse/sync'

// Configuration
const CREDENTIALS_PATH = path.join(process.cwd(), 'google-credentials.json')
const DOWNLOAD_DIR = path.join(process.cwd(), 'downloaded-images')
const MAX_RETRIES = 3
const RETRY_DELAY = 2000 // 2 seconds

if (!fs.existsSync(CREDENTIALS_PATH)) {
  console.error('❌ Missing google-credentials.json')
  process.exit(1)
}

const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
})

const drive = google.drive({ version: 'v3', auth })

/**
 * Extract folder or file ID from Google Drive URL
 */
function extractId(url: string): { id: string | null; type: 'folder' | 'file' | null } {
  if (!url) return { id: null, type: null }
  
  const folderMatch = url.match(/\/folders\/([a-zA-Z0-9-_]+)/)
  if (folderMatch) return { id: folderMatch[1], type: 'folder' }
  
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/)
  if (fileMatch) return { id: fileMatch[1], type: 'file' }
  
  return { id: null, type: null }
}

/**
 * Helper to sleep/wait
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Downloads a file from Google Drive with retries
 */
async function downloadFileWithRetry(fileId: string, destPath: string, attempt = 1): Promise<boolean> {
  const dest = fs.createWriteStream(destPath)
  
  try {
    const res = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' }
    )

    return new Promise((resolve, reject) => {
      res.data
        .on('end', () => resolve(true))
        .on('error', (err) => {
          dest.close()
          reject(err)
        })
        .pipe(dest)
    })
  } catch (error: any) {
    dest.close()
    if (attempt < MAX_RETRIES) {
      console.log(`   ⚠️ Retrying download (${attempt}/${MAX_RETRIES})...`)
      await sleep(RETRY_DELAY * attempt)
      return downloadFileWithRetry(fileId, destPath, attempt + 1)
    }
    throw error
  }
}

/**
 * List files in a folder with retries
 */
async function listFilesWithRetry(folderId: string, attempt = 1): Promise<any[]> {
  try {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, mimeType)',
      pageSize: 1000
    })
    return res.data.files || []
  } catch (error: any) {
    if (attempt < MAX_RETRIES) {
      console.log(`   ⚠️ Retrying list (${attempt}/${MAX_RETRIES})...`)
      await sleep(RETRY_DELAY * attempt)
      return listFilesWithRetry(folderId, attempt + 1)
    }
    throw error
  }
}

/**
 * Normalizes a string for fuzzy matching
 */
function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim()
}

/**
 * Process a CSV file and download images for each item
 */
async function processLibrary(csvFile: string, subDir: string) {
  if (!fs.existsSync(csvFile)) {
    console.warn(`⚠️  CSV file not found: ${csvFile}`)
    return
  }

  const content = fs.readFileSync(csvFile, 'utf-8')
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
  })

  console.log(`\n📂 Processing ${csvFile} (${records.length} items)...`)

  for (const record of records) {
    const name = (record['Name'] || '').trim()
    const itemCode = (record['Item Code'] || '').trim().replace(/\s+/g, '_')
    if (!itemCode && !name) continue

    const url = record['Preview URL'] || record['Icon URL'] || record['Thumbnail URL']
    const { id, type } = extractId(url)

    if (!id) {
      console.log(`⏭️  Skipping ${itemCode || name} - No valid Google Drive ID`)
      continue
    }

    const targetCode = itemCode || normalize(name)
    const itemDir = path.join(DOWNLOAD_DIR, subDir, targetCode)
    if (!fs.existsSync(itemDir)) {
      fs.mkdirSync(itemDir, { recursive: true })
    }

    try {
      if (type === 'file') {
        console.log(`📦 Downloading direct file for ${targetCode}...`)
        const ext = path.extname(url.split('?')[0]) || '.png' // Heuristic
        const targetName = subDir === 'charms' ? 'icon.svg' : 'preview' + ext
        await downloadFileWithRetry(id, path.join(itemDir, targetName))
        console.log(`   ✅ ${targetName}`)
      } 
      else if (type === 'folder') {
        console.log(`📦 Scanning folder for ${targetCode} (${name})...`)
        const files = await listFilesWithRetry(id)
        
        // Strategy: 
        // 1. Try to find files that match the name or code
        // 2. If it's a small folder (1-2 files), maybe just download all
        
        let filesToDownload = []
        const normalizedName = normalize(name)
        const normalizedCode = normalize(itemCode)

        // Find matches
        for (const file of files) {
          const fn = normalize(file.name)
          if (fn.includes(normalizedName) || (normalizedCode && fn.includes(normalizedCode))) {
            filesToDownload.push(file)
          }
        }

        // Fallback: If no match but folder is specific to this item (e.g. only 1-2 files)
        if (filesToDownload.length === 0 && files.length > 0 && files.length <= 3) {
           filesToDownload = files
        }

        if (filesToDownload.length === 0) {
          console.log(`   ⚠️ No matching files found in folder for ${name}`)
          continue
        }

        for (const file of filesToDownload) {
          let targetName = file.name.toLowerCase()
          
          // Rename to script expectations
          if (subDir === 'base-products') {
            if (targetName.includes('preview') || filesToDownload.length === 1) {
              targetName = `preview${path.extname(file.name)}`
            }
          } else if (subDir === 'charms') {
            if (targetName.endsWith('.svg') || targetName.includes('icon')) {
              targetName = 'icon.svg'
            } else if (targetName.includes('thumb') || targetName.includes('thumbnail')) {
              targetName = `thumbnail${path.extname(file.name)}`
            }
          }

          await downloadFileWithRetry(file.id, path.join(itemDir, targetName))
          console.log(`   ✅ ${targetName} (found as: ${file.name})`)
        }
      }
    } catch (error: any) {
      console.error(`   ❌ Failed processing ${targetCode}: ${error.message}`)
    }
  }
}

async function main() {
  console.log('🚀 Starting Automated Image Download (v2)')
  console.log('='.repeat(60))

  try {
    if (!fs.existsSync(DOWNLOAD_DIR)) {
      fs.mkdirSync(DOWNLOAD_DIR, { recursive: true })
    }

    await processLibrary('base-products-urls.csv', 'base-products')
    await processLibrary('charms-urls.csv', 'charms')

    console.log('\n' + '='.repeat(60))
    console.log('✅ Download phase complete!')
    console.log('Next step: npm run migrate:images')
    console.log('='.repeat(60))
  } catch (error) {
    console.error('\n❌ Fatal error:', error)
    process.exit(1)
  }
}

main()
