// Extrait, pour chaque article de blog, son slug, son titre et son nombre de
// sections (h2). Sert de base pour crafter les requêtes photo par article.
// Sortie : scripts/articles-list.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, "..", "src", "lib", "blog-content");

const files = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".tsx") && f !== "types.ts");

const out = [];
for (const f of files) {
  const txt = fs.readFileSync(path.join(DIR, f), "utf8");
  const slugM = txt.match(/slug:\s*"([^"]+)"/);
  const titleM = txt.match(/\n\s{2}title:\s*"([^"]+)"/); // title de 1er niveau
  const sectionCount = (txt.match(/^\s+h2:/gm) || []).length;
  out.push({
    slug: slugM ? slugM[1] : f.replace(/\.tsx$/, ""),
    title: titleM ? titleM[1] : "",
    sections: sectionCount,
  });
}

out.sort((a, b) => a.slug.localeCompare(b.slug));
fs.writeFileSync(
  path.join(__dirname, "articles-list.json"),
  JSON.stringify(out, null, 2),
);
console.log(`${out.length} articles → scripts/articles-list.json`);
console.log(
  "Total sections:",
  out.reduce((s, a) => s + a.sections, 0),
  "| à illustrer (hors section 0):",
  out.reduce((s, a) => s + Math.max(0, a.sections - 1), 0),
);
