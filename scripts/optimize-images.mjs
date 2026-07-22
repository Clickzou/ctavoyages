// Recompresse les images d'un dossier de public/ sans changer leurs dimensions.
//
// Les visuels generes (fal.ai) etaient encodes a une qualite quasi maximale :
// 1024x768 pour 250 a 480 Ko. Une recompression mozjpeg q=82 divise leur poids
// par deux a trois sans difference visible, ce qui allege le depot, les
// deploiements et surtout le temps de chargement des pages.
//
// Usage : node scripts/optimize-images.mjs [sous-dossier de public] [qualite] [largeurMax]
//   node scripts/optimize-images.mjs generated 82
//   node scripts/optimize-images.mjs assets/images 82 2400
//
// largeurMax (optionnel) : reduit les images plus larges, en conservant le
// ratio. 2400 px couvre le plein ecran sur affichage haute densite.
//
// Sur : ne remplace un fichier que si la sortie est valide, de memes dimensions,
// et plus legere d'au moins 5 %. Les originaux restent recuperables via git.

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const sub = process.argv[2] || "generated";
const quality = Number(process.argv[3] || 82);
const maxWidth = Number(process.argv[4] || 0);
const dir = path.join(process.cwd(), "public", sub);

if (!fs.existsSync(dir)) {
  console.error(`Dossier introuvable : ${dir}`);
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f));
let before = 0, after = 0, changed = 0, skipped = 0;
const errors = [];

for (const f of files) {
  const p = path.join(dir, f);
  const b = fs.statSync(p).size;
  before += b;
  try {
    // On lit en memoire plutot que de passer le chemin a sharp : sous Windows,
    // libvips garde le fichier mappe et le cumul des handles fait echouer les
    // ouvertures suivantes ("UNKNOWN: unknown error, open").
    const input = fs.readFileSync(p);
    const meta = await sharp(input).metadata();
    const resize = maxWidth && meta.width > maxWidth;
    const pipe = resize
      ? sharp(input).resize({ width: maxWidth, withoutEnlargement: true })
      : sharp(input);
    const buf = /\.png$/i.test(f)
      ? await pipe.png({ compressionLevel: 9, effort: 8 }).toBuffer()
      : await pipe.jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer();

    const check = await sharp(buf).metadata();
    const expected = resize ? maxWidth : meta.width;
    if (check.width !== expected) {
      throw new Error(`largeur inattendue : ${check.width} au lieu de ${expected}`);
    }
    // le ratio doit etre conserve (tolerance 1 px d'arrondi)
    if (Math.abs(check.width / check.height - meta.width / meta.height) > 0.01) {
      throw new Error("ratio modifie");
    }
    if (buf.length < b * 0.95) {
      fs.writeFileSync(p, buf);
      after += buf.length;
      changed++;
    } else {
      after += b;
      skipped++;
    }
  } catch (e) {
    after += b;
    errors.push(`${f} : ${e.message}`);
  }
}

const mb = (n) => (n / 1048576).toFixed(1) + " Mo";
console.log(`Dossier       : public/${sub} (qualite ${quality})`);
console.log(`Fichiers      : ${files.length} — ${changed} recompresses, ${skipped} deja optimaux`);
console.log(`Avant / apres : ${mb(before)} -> ${mb(after)}  (-${(100 - (after / before) * 100).toFixed(0)} %)`);
if (errors.length) {
  console.log(`\nERREURS (${errors.length}) :`);
  errors.slice(0, 10).forEach((e) => console.log("  " + e));
}
