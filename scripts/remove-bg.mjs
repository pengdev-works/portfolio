/**
 * remove-bg.mjs  (v2 — cleaner edge handling)
 *
 * Removes the white studio background from profile.jpg.
 * Uses flood-fill from edges + a tight white/gray threshold.
 * Edge pixels are fully transparent (no semi-transparent fringing
 * that causes dark artifacts on dark backgrounds).
 *
 * Run: node scripts/remove-bg.mjs
 */

import { Jimp, intToRGBA, rgbaToInt } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT  = path.join(__dirname, '../src/assets/images/profile.jpg');
const OUTPUT = path.join(__dirname, '../src/assets/images/profile-nobg.png');

// ── Tuning knobs ─────────────────────────────────────────────────────────────
// Only pixels where ALL channels are >= BG_MIN are "background candidates".
// Tighter = less bleed into the subject; looser = more background removed.
const BG_MIN        = 220;   // R, G, B must all be >= this
const CHANNEL_RANGE = 25;    // max difference between any two channels (near-grey)
const EDGE_DILATE   = 2;     // extra pixels to erase around detected bg border (cleans fringe)
// ─────────────────────────────────────────────────────────────────────────────

async function removeBg() {
  console.log('Loading image…');
  const img = await Jimp.read(INPUT);
  const { width, height } = img.bitmap;
  console.log(`Image size: ${width}×${height}`);

  // ── Helpers ──────────────────────────────────────────────────────────────
  function idx(x, y) { return y * width + x; }

  function getRGBA(x, y) {
    return intToRGBA(img.getPixelColor(x, y));
  }

  function isBackgroundCandidate(x, y) {
    const { r, g, b } = getRGBA(x, y);
    return (
      r >= BG_MIN && g >= BG_MIN && b >= BG_MIN &&
      Math.abs(r - g) <= CHANNEL_RANGE &&
      Math.abs(g - b) <= CHANNEL_RANGE &&
      Math.abs(r - b) <= CHANNEL_RANGE
    );
  }

  // ── Pass 1: BFS flood-fill from all four edges ───────────────────────────
  const isBg   = new Uint8Array(width * height); // 1 = confirmed background
  const visited = new Uint8Array(width * height);

  const queue = [];

  // Seed from perimeter
  for (let x = 0; x < width; x++) {
    [0, height - 1].forEach(y => {
      if (!visited[idx(x,y)] && isBackgroundCandidate(x, y)) {
        visited[idx(x,y)] = 1; isBg[idx(x,y)] = 1; queue.push([x, y]);
      }
    });
  }
  for (let y = 0; y < height; y++) {
    [0, width - 1].forEach(x => {
      if (!visited[idx(x,y)] && isBackgroundCandidate(x, y)) {
        visited[idx(x,y)] = 1; isBg[idx(x,y)] = 1; queue.push([x, y]);
      }
    });
  }

  const dirs4 = [[1,0],[-1,0],[0,1],[0,-1]];
  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    for (const [dx, dy] of dirs4) {
      const nx = cx + dx, ny = cy + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const ni = idx(nx, ny);
      if (visited[ni]) continue;
      visited[ni] = 1;
      if (isBackgroundCandidate(nx, ny)) {
        isBg[ni] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  console.log(`Background pixels (flood-fill): ${queue.length}`);

  // ── Pass 2: Dilate the background mask by EDGE_DILATE pixels ─────────────
  // This erodes the fringe — any subject pixel that borders bg and is
  // noticeably light (could be an anti-aliased fringe) is also erased.
  const isEdge = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!isBg[idx(x, y)]) continue;
      // Mark surrounding non-bg pixels within EDGE_DILATE as edge
      for (let dy = -EDGE_DILATE; dy <= EDGE_DILATE; dy++) {
        for (let dx = -EDGE_DILATE; dx <= EDGE_DILATE; dx++) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const ni = idx(nx, ny);
          if (!isBg[ni]) isEdge[ni] = 1;
        }
      }
    }
  }

  // ── Pass 3: Apply transparency ───────────────────────────────────────────
  // Background pixels → fully transparent (alpha = 0)
  // Edge (fringe) pixels → check if they look like a bg colour, if so erase too
  img.scan(0, 0, width, height, function(x, y, _offset) {
    const i = idx(x, y);
    const { r, g, b, a } = getRGBA(x, y);

    if (isBg[i]) {
      // Fully transparent — no fringing
      img.setPixelColor(rgbaToInt(r, g, b, 0), x, y);
    } else if (isEdge[i]) {
      // Fringe pixel: if it's lighter than a threshold, erase it too
      const brightness = (r + g + b) / 3;
      if (brightness > 180) {
        // Fade proportionally: very bright fringe = more transparent
        const alpha = Math.round(((255 - brightness) / 75) * 255);
        img.setPixelColor(rgbaToInt(r, g, b, Math.min(255, Math.max(0, alpha))), x, y);
      }
      // Dark fringe pixels (suit edges) are kept fully opaque — don't touch them
    }
    // Non-bg, non-edge → leave fully opaque
  });

  console.log('Writing PNG…');
  await img.write(OUTPUT);
  console.log(`✓ Done: ${OUTPUT}`);
}

removeBg().catch(err => { console.error(err); process.exit(1); });
