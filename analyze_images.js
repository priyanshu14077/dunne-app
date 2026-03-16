const fs = require('fs');
const https = require('https');
const sharp = require('sharp');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(dest);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function analyzeImage(path) {
    try {
        const metadata = await sharp(path).metadata();
        const { info } = await sharp(path).trim().toBuffer({ resolveWithObject: true });

        console.log(`\nAnalyzing ${path}:`);
        console.log(`Original: ${metadata.width}x${metadata.height}`);
        console.log(`Trimmed info: width ${info.width}, height ${info.height}, channels ${info.channels}`);

        if (metadata.width && metadata.height) {
            // Bounding box of non-transparent is roughly width x height (Sharp's trim tells us the new dimensions)
            // Usually trim() returns cropOffsetLeft, cropOffsetTop but sharp 0.3x might not return that in info easily.
            // Let's just output dimensions.

            const stats = await sharp(path).stats();
            console.log('Stats:', stats.isOpaque ? "Opaque" : "Has transparency");

            // Get the bounding box using threshold and raw memory
            const { data, info: rawInfo } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
            let minX = rawInfo.width, minY = rawInfo.height, maxX = 0, maxY = 0;

            for (let y = 0; y < rawInfo.height; y++) {
                for (let x = 0; x < rawInfo.width; x++) {
                    const idx = (y * rawInfo.width + x) * rawInfo.channels;
                    const alpha = data[idx + 3];
                    if (alpha > 10) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            console.log(`Bounding Box: minX=${minX}, minY=${minY}, maxX=${maxX}, maxY=${maxY}`);
            console.log(`Visible width: ${maxX - minX + 1}, height: ${maxY - minY + 1}`);
            const centerX = (minX + maxX) / 2;
            const centerY = (minY + maxY) / 2;
            console.log(`Visible center: (${centerX}, ${centerY}) vs actual center: (${rawInfo.width / 2}, ${rawInfo.height / 2})`);
            console.log(`Visible top: ${minY} vs actual top: 0`);
            console.log(`Distance from visible top to image bottom: ${rawInfo.height - minY}`);
            console.log(`Ratio of visible height to total height: ${((maxY - minY + 1) / rawInfo.height).toFixed(2)}`);
        }
    } catch (err) {
        console.error(`Error analyzing ${path}:`, err.message);
    }
}

async function run() {
    const url1 = "https://lnvmeghqivgvoziklfpk.supabase.co/storage/v1/object/public/assets/overlay-charms/Eternal%20Bloom/Bloom%20Vase%20Charm.png";
    const url2 = "https://lnvmeghqivgvoziklfpk.supabase.co/storage/v1/object/public/assets/overlay-charms/Eternal%20Bloom/Sacred%20Balance%20Charm.webp";

    await downloadImage(url1, 'old-charm.png');
    await downloadImage(url2, 'new-charm.webp');

    await analyzeImage('old-charm.png');
    await analyzeImage('new-charm.webp');
}

run();
