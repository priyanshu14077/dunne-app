const fs = require('fs');

const tsPath = '/Users/priyanshu/Desktop/dunne-2/lib/anchor.ts';

// Shift amount (Iterative step 1)
const SCALE_Y_SHIFT = -12; // Move UP by 12%

let content = fs.readFileSync(tsPath, 'utf8');

// The file structure is:
// mobile: [{"x":...}, ...]

// Regex to capture the mobile array block
// relying on consistent formatting from previous script
// mobile: [{...}, ..., {...}], 

content = content.replace(/mobile: \[(.*?)\]/g, (match, arrayBody) => {
    try {
        // Parse the objects inside the array string
        // The arrayBody string contains objects like {"x":50.51,"y":83.44,...},...
        // We can wrap it in [] and parse JSON if valid, but previous JSON.stringify might be valid

        let anchors = JSON.parse(`[${arrayBody}]`);

        // Apply shift
        const shiftedAnchors = anchors.map(a => ({
            ...a,
            y: Number((a.y + SCALE_Y_SHIFT).toFixed(2))
        }));

        return `mobile: ${JSON.stringify(shiftedAnchors)}`;
    } catch (e) {
        console.error("Error parsing mobile block:", e);
        return match; // Return unchanged on error
    }
});

fs.writeFileSync(tsPath, content, 'utf8');
console.log(`✅ Shifted mobile anchors by ${SCALE_Y_SHIFT}% Y.`);
