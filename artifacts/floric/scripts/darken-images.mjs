import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "../public");

const targets = [
  "hero.jpg",
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-room.jpg",
  "service-1.jpg",
  "service-2.jpg",
  "service-3.jpg",
  "about.png",
];

async function process(filename) {
  const input = path.join(publicDir, filename);
  const ext = path.extname(filename).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg";

  console.log(`Processing ${filename}...`);

  let pipeline = sharp(input)
    .modulate({
      brightness: 0.52,
      saturation: 1.15,
    })
    .tint({ r: 255, g: 210, b: 165 })
    .linear(1.15, -18);

  if (isJpeg) {
    pipeline = pipeline.jpeg({ quality: 94, mozjpeg: true });
  } else {
    pipeline = pipeline.png({ compressionLevel: 8 });
  }

  await pipeline.toFile(input + ".tmp");

  const { rename } = await import("fs/promises");
  await rename(input + ".tmp", input);

  console.log(`  ✓ ${filename} done`);
}

for (const file of targets) {
  await process(file);
}

console.log("\nAll images processed — dark & cozy effect applied.");
