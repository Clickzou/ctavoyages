// Recense les illustrations de section generees (public/generated/blog-<slug>-<n>.jpg)
// dans un module TypeScript.
//
// Pourquoi : la page /blog/[slug] testait l'existence de ces fichiers avec
// fs.existsSync(path.join(process.cwd(), "public")). Le file tracer de Next
// embarquait alors TOUT le dossier public (275 Mo) dans la fonction serverless,
// ce qui depassait la limite Vercel de 250 Mo et faisait echouer chaque build.
//
// Lance automatiquement avant `next build` (script npm "prebuild"), donc la
// liste reste a jour sans intervention.

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dir = path.join(root, "public", "generated");
const out = path.join(root, "src", "lib", "blog-content", "generated-images.generated.ts");

/** @type {Record<string, number[]>} */
const bySlug = {};
const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
for (const f of files) {
  const m = /^blog-(.+)-(\d+)\.jpg$/.exec(f);
  if (!m) continue;
  const [, slug, n] = m;
  (bySlug[slug] ??= []).push(Number(n));
}

const entries = Object.keys(bySlug)
  .sort()
  .map((slug) => `  ${JSON.stringify(slug)}: [${bySlug[slug].sort((a, b) => a - b).join(", ")}],`)
  .join("\n");

const content = `// Fichier GENERE par scripts/build-generated-blog-images.mjs — ne pas editer.
// Index des illustrations disponibles en /generated/blog-<slug>-<n>.jpg.
export const GENERATED_SECTION_IMAGES: Record<string, number[]> = {
${entries}
};
`;

fs.writeFileSync(out, content, "utf8");
console.log(
  `generated-images.generated.ts : ${Object.keys(bySlug).length} articles, ` +
    `${Object.values(bySlug).reduce((n, a) => n + a.length, 0)} images.`,
);
