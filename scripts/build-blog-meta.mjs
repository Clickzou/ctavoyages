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

const MOIS = {
  janvier: "01", fevrier: "02", mars: "03", avril: "04", mai: "05", juin: "06",
  juillet: "07", aout: "08", septembre: "09", octobre: "10", novembre: "11", decembre: "12",
};

/**
 * Date de mise en ligne AAAA-MM-JJ : le champ `datePublication` s'il existe,
 * sinon le 1er du mois de la date affichée (« juin 2026 » → 2026-06-01). Les
 * 116 articles antérieurs au 06/10/2026 n'ont que la date affichée, toutes
 * passées : ils restent donc en ligne.
 */
function datePublication(src, file, dateAffichee) {
  const explicite = field(src, "datePublication");
  if (explicite !== null) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(explicite)) {
      throw new Error(`build-blog-meta : datePublication "${explicite}" invalide dans ${file} (AAAA-MM-JJ attendu)`);
    }
    return explicite;
  }
  const m = /^(\S+)\s+(\d{4})$/.exec(dateAffichee.trim());
  const mois = m && MOIS[m[1].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")];
  if (!mois) {
    throw new Error(`build-blog-meta : date "${dateAffichee}" illisible dans ${file} (ajouter datePublication: "AAAA-MM-JJ")`);
  }
  return `${m[2]}-${mois}-01`;
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
    motCle: field(src, "motCle"),
  };
  for (const [key, value] of Object.entries(meta)) {
    if (value === null) {
      throw new Error(`build-blog-meta : champ "${key}" illisible dans ${file}`);
    }
  }
  return { ...meta, datePublication: datePublication(src, file, meta.date) };
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
    `  motCle: string;\n` +
    `  /** AAAA-MM-JJ : jour de mise en ligne (heure de Paris). */\n` +
    `  datePublication: string;\n` +
    `};\n\n` +
    `export const BLOG_META: BlogMeta[] = [\n${body}\n];\n`,
  "utf8",
);

console.log(`build-blog-meta : ${articles.length} articles -> ${path.relative(root, out)}`);
