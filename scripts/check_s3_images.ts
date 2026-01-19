
import 'dotenv/config';
import { CHARMS as charms } from '../lib/mock-data'; // Ensure this picks up the changes
import https from 'https';

console.log('STORAGE_BASE used:', process.env.NEXT_PUBLIC_CLOUDFRONT_URL || 'FALLBACK_SUPABASE');

const personaCharms = charms.filter(c => c.category === 'Persona');

console.log(`Found ${personaCharms.length} Persona charms.`);

async function checkUrl(url: string) {
    return new Promise<{url: string, status?: number, ok: boolean, error?: string}>((resolve) => {
        try {
            const encodedUrl = new URL(url).toString();
            const req = https.request(encodedUrl, { method: 'HEAD' }, (res) => {
                resolve({ url, status: res.statusCode, ok: res.statusCode === 200 });
            });
            req.on('error', (e) => {
                resolve({ url, error: e.message, ok: false });
            });
            req.end();
        } catch (e: any) {
            resolve({ url, error: e.message, ok: false });
        }
    });
}

(async () => {
    // Check ALL Persona charms
    const checks = personaCharms.map(async (c) => {
        const result = await checkUrl(c.image);
        return { name: c.name, ...result };
    });

    const results = await Promise.all(checks);
    const failed = results.filter(r => !r.ok);

    if (failed.length > 0) {
        console.log('\n--- FAILED IMAGES ---');
        failed.forEach(f => {
            console.log(`[${f.name}] ${f.status || f.error} - ${f.url}`);
        });
    } else {
        console.log('\nAll Persona charm images verified successfully!');
    }
})();
