const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 1. Generate ultra-crisp SVG Favicon for "LA"
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f4f4f5" />
    </linearGradient>
  </defs>

  <!-- Dark Squircle Background -->
  <rect width="512" height="512" rx="128" fill="url(#bg)" />
  <rect width="496" height="496" x="8" y="8" rx="120" fill="none" stroke="rgba(255, 255, 255, 0.16)" stroke-width="8" />

  <!-- Monogram: Bold Modern "LA" -->
  <text 
    x="256" 
    y="348" 
    text-anchor="middle" 
    font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', sans-serif" 
    font-size="270" 
    font-weight="900" 
    letter-spacing="-10" 
    fill="url(#fg)"
  >LA</text>

  <!-- Tech Cyan Accent Dot -->
  <circle cx="410" cy="130" r="22" fill="#38bdf8" />
</svg>
`;

fs.writeFileSync(path.resolve('public', 'favicon.svg'), svgContent);
console.log('Saved public/favicon.svg');

// 2. Pure Node PNG Generator
function createPNG(width, height, colorFn) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8-bit depth
  ihdr.writeUInt8(6, 9); // RGBA
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    let c = -1;
    for (let i = 4; i < 8 + len; i++) {
      c = (c >>> 8) ^ table[(c ^ buf[i]) & 0xff];
    }
    buf.writeInt32BE(~c, 8 + len);
    return buf;
  }

  const raw = Buffer.alloc((1 + width * 4) * height);
  let p = 0;
  for (let y = 0; y < height; y++) {
    raw[p++] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = colorFn(x, y, width, height);
      raw[p++] = r;
      raw[p++] = g;
      raw[p++] = b;
      raw[p++] = a;
    }
  }

  const idat = zlib.deflateSync(raw);
  return Buffer.concat([
    sig,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', idat),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

// Draw a stylized "LA" squircle icon
function renderLAIcon(size) {
  // Rasterize LA letters on a grid
  return createPNG(size, size, (x, y, w, h) => {
    // Normalize to 0..1
    const nx = x / w;
    const ny = y / h;

    // Squircle distance: (x-0.5)^4 + (y-0.5)^4 <= r^4
    const dx = Math.abs(nx - 0.5);
    const dy = Math.abs(ny - 0.5);
    const cornerR = 0.44;
    // Rounding distance
    const distSq = Math.pow(dx / cornerR, 4) + Math.pow(dy / cornerR, 4);

    if (distSq > 1.0) {
      // Outside squircle
      return [0, 0, 0, 0];
    }

    // Border highlight
    if (distSq > 0.88) {
      return [45, 45, 52, 255];
    }

    // Accent dot at top right: (0.78, 0.24)
    const dotDx = nx - 0.80;
    const dotDy = ny - 0.24;
    if (dotDx * dotDx + dotDy * dotDy < 0.05 * 0.05) {
      return [56, 189, 248, 255]; // Cyan dot
    }

    // Letter "L":
    // Vertical stem: nx in [0.22, 0.34], ny in [0.26, 0.74]
    const inLStem = nx >= 0.22 && nx <= 0.34 && ny >= 0.26 && ny <= 0.74;
    // Bottom bar of L: nx in [0.22, 0.52], ny in [0.62, 0.74]
    const inLBar = nx >= 0.22 && nx <= 0.50 && ny >= 0.62 && ny <= 0.74;
    const inL = inLStem || inLBar;

    // Letter "A":
    // Apex at (0.69, 0.26), base from 0.52 to 0.86 at ny=0.74
    // Left leg: line from (0.69, 0.26) to (0.54, 0.74)
    // Right leg: line from (0.69, 0.26) to (0.84, 0.74)
    const progY = (ny - 0.26) / (0.74 - 0.26); // 0 at top, 1 at bottom
    let inA = false;
    if (progY >= 0 && progY <= 1) {
      const leftX = 0.69 - progY * 0.15;
      const rightX = 0.69 + progY * 0.15;
      const legThick = 0.06;
      const inLeftLeg = Math.abs(nx - leftX) <= legThick;
      const inRightLeg = Math.abs(nx - rightX) <= legThick;
      const inCrossbar = progY >= 0.52 && progY <= 0.64 && nx >= leftX && nx <= rightX;
      inA = inLeftLeg || inRightLeg || inCrossbar;
    }

    if (inL || inA) {
      return [255, 255, 255, 255]; // White letters
    }

    // Background gradient: dark charcoal to black
    const grad = Math.floor(18 + ny * 6);
    return [grad, grad, grad + 4, 255];
  });
}

// Generate sizes
const png32 = renderLAIcon(32);
const png64 = renderLAIcon(64);
const png180 = renderLAIcon(180);

fs.writeFileSync(path.resolve('public', 'favicon-32x32.png'), png32);
fs.writeFileSync(path.resolve('public', 'favicon.ico'), png32);
fs.writeFileSync(path.resolve('public', 'apple-touch-icon.png'), png180);

console.log('Generated favicon-32x32.png, favicon.ico, and apple-touch-icon.png');
