// Génère src/lib/blog-content/section-images.generated.ts, qui décrit l'image
// de chaque section d'article (source, texte alternatif, crédit éventuel).
//
// Deux origines, fusionnées ici :
//   - scripts/section-images.result.json : photos Unsplash, avec le crédit du
//     photographe (obligatoire, guidelines Unsplash) ;
//   - scripts/section-prompts/*.json : images générées (fal.ai), décrites par un
//     prompt et un alt rédigé. Elles n'ont pas de crédit — et surtout, elles ne
//     peuvent pas conserver celui de la photo Unsplash qu'elles remplacent, sans
//     quoi le site attribuerait à un photographe une image qu'il n'a pas prise.
//
// Les images générées l'emportent : c'est la source la plus récente et la seule
// dont on sait qu'elle correspond au lieu décrit par la section.
//
// Usage : node scripts/build-section-images.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESULT_PATH = path.join(__dirname, "section-images.result.json");
const PROMPTS_DIR = path.join(__dirname, "section-prompts");
const OUT_TS = path.resolve(
  __dirname,
  "..",
  "src",
  "lib",
  "blog-content",
  "section-images.generated.ts",
);

// { slug: { [sectionIndex]: { src, alt, credit? } } }
const map = {};
let unsplash = 0;
let generated = 0;

// 1. Photos Unsplash
let data = {};
if (fs.existsSync(RESULT_PATH)) {
  data = JSON.parse(fs.readFileSync(RESULT_PATH, "utf8"));
}
for (const [slug, recs] of Object.entries(data)) {
  map[slug] = {};
  for (const r of recs) {
    map[slug][r.sectionIndex] = {
      src: `/generated/${r.out}`,
      alt: r.alt,
      credit: r.credit,
    };
    unsplash++;
  }
}

// 2. Images générées : écrasent l'entrée Unsplash de même index, crédit compris.
if (fs.existsSync(PROMPTS_DIR)) {
  for (const file of fs.readdirSync(PROMPTS_DIR).filter((f) => f.endsWith(".json"))) {
    const batch = JSON.parse(
      fs.readFileSync(path.join(PROMPTS_DIR, file), "utf8"),
    );
    for (const [slug, entries] of Object.entries(batch)) {
      map[slug] ??= {};
      entries.forEach((entry, sectionIndex) => {
        if (typeof entry === "string") return; // prompt sans alt : rien à décrire
        // Convention du gabarit : la section i est illustrée par le fichier i+1,
        // le fichier 1 revenant à la section 0.
        if (map[slug][sectionIndex]?.credit) unsplash--;
        map[slug][sectionIndex] = {
          src: `/generated/blog-${slug}-${sectionIndex + 1}.jpg`,
          alt: entry.alt,
        };
        generated++;
      });
    }
  }
}

const header = `// FICHIER GÉNÉRÉ — ne pas éditer à la main.
// Produit par scripts/build-section-images.mjs.
// Images de section superposées par le gabarit /blog/[slug] (index de section 1..N-1).
// \`credit\` n'est présent que pour les photos Unsplash : les images générées
// (fal.ai) n'ont pas de photographe à créditer.

export type SectionImageData = {
  src: string;
  alt: string;
  credit?: { name: string; link: string };
};

export const SECTION_IMAGES: Record<
  string,
  Record<number, SectionImageData>
> = `;

fs.writeFileSync(OUT_TS, header + JSON.stringify(map, null, 2) + ";\n");
console.log(
  `${Object.keys(map).length} articles — ${generated} images générées, ${unsplash} photos Unsplash conservées → ${path.relative(process.cwd(), OUT_TS)}`,
);
