// Extrait les metadonnees des 116 articles (slug, titre, chapo, visuel...) dans
// un module autonome, sans leur corps JSX.
//
// Pourquoi : le maillage interne (articles lies, articles par destination, plan
// du site) a besoin de connaitre tous les articles depuis des pages qui ne sont
// pas le blog. Importer blog-content/index.ts depuis une fiche destination
// tirerait les 116 fichiers de contenu et leur JSX dans le chunk de la page.
// meta.generated.ts n'embarque que des chaines.
//
// Lance automatiquement avant `next build` (script npm "prebuild"), donc la
// liste reste a jour sans intervention.

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dir = path.join(root, "src", "lib", "blog-content");
const out = path.join(dir, "meta.generated.ts");

/** Champ chaine au premier niveau de l'objet article (indentation 2 espaces). */
function field(src, name) {
  // Gere les valeurs sur la meme ligne comme celles renvoyees a la ligne, et
  // les echappements (\" et \\) a l'interieur de la chaine.
  const re = new RegExp(`^  ${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`, "m");
  const m = re.exec(src);
  return m ? m[1] : null;
}

// L'ordre d'affichage de la grille /blog est celui de BLOG_ARTICLES : on le
// reprend tel quel plutot que l'ordre alphabetique des fichiers.
const indexSrc = fs.readFileSync(path.join(dir, "index.ts"), "utf8");
const registry = /BLOG_ARTICLES[^=]*=\s*\{([\s\S]*?)\n\};/.exec(indexSrc);
if (!registry) {
  throw new Error("build-blog-meta : registre BLOG_ARTICLES introuvable dans index.ts");
}
const slugs = [...registry[1].matchAll(/^\s*"([^"]+)":/gm)].map((m) => m[1]);

// slug -> fichier de contenu (le nom de fichier ne suit pas toujours le slug).
const bySlug = new Map();
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".tsx")) continue;
  const src = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = field(src, "slug");
  if (slug) bySlug.set(slug, { file, src });
}

const articles = slugs.map((slug) => {
  const entry = bySlug.get(slug);
  if (!entry) {
    throw new Error(`build-blog-meta : aucun fichier de contenu pour "${slug}"`);
  }
  const { src, file } = entry;
  const meta = {
    slug,
    category: field(src, "category"),
    date: field(src, "date"),
    readingTime: field(src, "readingTime"),
    title: field(src, "title"),
    excerpt: field(src, "excerpt"),
    heroImg: field(src, "heroImg"),
    heroAlt: field(src, "heroAlt"),
  };
  for (const [key, value] of Object.entries(meta)) {
    if (value === null) {
      throw new Error(`build-blog-meta : champ "${key}" illisible dans ${file}`);
    }
  }
  return meta;
});

const body = articles
  .map(
    (a) =>
      "  {\n" +
      Object.entries(a)
        .map(([k, v]) => `    ${k}: ${JSON.stringify(v)},`)
        .join("\n") +
      "\n  },",
  )
  .join("\n");

fs.writeFileSync(
  out,
  `// Genere par scripts/build-blog-meta.mjs — ne pas editer a la main.\n` +
    `// Metadonnees des articles, sans leur corps : importable depuis n'importe\n` +
    `// quelle page sans tirer les 116 fichiers de contenu.\n\n` +
    `export type BlogMeta = {\n` +
    `  slug: string;\n` +
    `  category: string;\n` +
    `  date: string;\n` +
    `  readingTime: string;\n` +
    `  title: string;\n` +
    `  excerpt: string;\n` +
    `  heroImg: string;\n` +
    `  heroAlt: string;\n` +
    `};\n\n` +
    `export const BLOG_META: BlogMeta[] = [\n${body}\n];\n`,
  "utf8",
);

console.log(`build-blog-meta : ${articles.length} articles -> ${path.relative(root, out)}`);
