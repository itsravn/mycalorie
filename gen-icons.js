const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#38bdf8"/></svg>`;

// We will use the same SVG for all of them just to satisfy the PWA plugin for now.
// In a real app, the user would replace these with real PNGs.
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), svgContent); // using svg content, might be invalid png but fine for build
fs.writeFileSync(path.join(publicDir, 'masked-icon.svg'), svgContent);
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), svgContent);
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), svgContent);

console.log('Dummy icons generated');
