// Génère src/lib/blog-content/section-images.generated.ts à partir des résultats
// de fetch (scripts/section-images.result.json). Le template /blog/[slug]
// superpose ces images par section, sans toucher aux 105 fichiers d'articles.
//
// Usage : node scripts/build-section-images.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESULT_PATH = path.join(__dirname, "section-images.result.json");
const OUT_TS = path.resolve(
  __dirname,
  "..",
  "src",
  "lib",
  "blog-content",
  "section-images.generated.ts",
);

let data = {};
if (fs.existsSync(RESULT_PATH)) {
  data = JSON.parse(fs.readFileSync(RESULT_PATH, "utf8"));
}

// { slug: { [sectionIndex]: { src, alt, credit } } }
const map = {};
let total = 0;
for (const [slug, recs] of Object.entries(data)) {
  map[slug] = {};
  for (const r of recs) {
    map[slug][r.sectionIndex] = {
      src: `/generated/${r.out}`,
      alt: r.alt,
      credit: r.credit,
    };
    total++;
  }
}

const header = `// FICHIER GÉNÉRÉ — ne pas éditer à la main.
// Produit par scripts/build-section-images.mjs à partir des photos Unsplash.
// Images de section superposées par le gabarit /blog/[slug] (index de section 1..N-1).

export type SectionImageData = {
  src: string;
  alt: string;
  credit: { name: string; link: string };
};

export const SECTION_IMAGES: Record<
  string,
  Record<number, SectionImageData>
> = `;

fs.writeFileSync(OUT_TS, header + JSON.stringify(map, null, 2) + ";\n");
console.log(
  `${Object.keys(map).length} articles, ${total} images → ${path.relative(process.cwd(), OUT_TS)}`,
);
