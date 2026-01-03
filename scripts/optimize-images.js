import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./public";
const outputDir = "./public/optimized";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const walk = dir =>
  fs.readdirSync(dir).flatMap(f => {
    const p = path.join(dir, f);
    return fs.statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(inputDir).filter(f => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const out = path.join(outputDir, path.basename(file).replace(/\.(png|jpe?g)$/i, ".webp"));
  await sharp(file).resize(1600).webp({ quality: 80 }).toFile(out);
}

console.log("Images optimized.");
