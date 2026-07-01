// Récupération de photos Unsplash pour illustrer les sections d'articles.
//
// Usage :
//   node scripts/unsplash-fetch.mjs <jobs.json> [delaiMs]
//
// jobs.json : [{ "query": "maldives manta ray underwater", "out": "blog-quand-partir-maldives-3.jpg" }, ...]
//   - query : recherche (en anglais, Unsplash indexe surtout en anglais)
//   - out   : nom du fichier écrit dans public/generated/
//
// delaiMs (optionnel) : pause entre chaque requête (respect de la limite 50 req/h
//   en mode Demo → utiliser ~75000 ms pour un traitement de masse). Défaut : 400 ms.
//
// Sortie : écrit <jobs.json>.result.json (tableau { out, alt, credit:{name,link} })
// et affiche le récap sur stdout. La clé est lue dans .env.local (UNSPLASH_ACCESS_KEY).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "generated");
const APP = "cta_voyages"; // pour l'UTM des liens (guidelines Unsplash)

function readAccessKey() {
  if (process.env.UNSPLASH_ACCESS_KEY) return process.env.UNSPLASH_ACCESS_KEY;
  const envPath = path.join(ROOT, ".env.local");
  const txt = fs.readFileSync(envPath, "utf8");
  const m = txt.match(/^UNSPLASH_ACCESS_KEY=(.+)$/m);
  if (!m) throw new Error("UNSPLASH_ACCESS_KEY introuvable dans .env.local");
  return m[1].trim();
}

const KEY = readAccessKey();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchOne(query) {
  const searchUrl =
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}` +
    `&per_page=5&orientation=landscape&content_filter=high&client_id=${KEY}`;
  const res = await fetch(searchUrl);
  if (!res.ok) throw new Error(`search ${res.status} pour "${query}"`);
  const data = await res.json();
  if (!data.results || data.results.length === 0)
    throw new Error(`aucun résultat pour "${query}"`);

  const photo = data.results[0];
  // Image recadrée en paysage, qualité correcte pour un article web.
  const imgUrl =
    photo.urls.raw + "&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80";
  const imgRes = await fetch(imgUrl);
  if (!imgRes.ok) throw new Error(`download image ${imgRes.status} pour "${query}"`);
  const buf = Buffer.from(await imgRes.arrayBuffer());

  // Déclenchement du download endpoint (requis par les guidelines Unsplash).
  try {
    await fetch(`${photo.links.download_location}&client_id=${KEY}`);
  } catch {
    /* non bloquant */
  }

  return {
    buffer: buf,
    alt: photo.alt_description || query,
    credit: {
      name: photo.user.name,
      link: `${photo.user.links.html}?utm_source=${APP}&utm_medium=referral`,
    },
  };
}

async function main() {
  const jobsPath = process.argv[2];
  const delay = process.argv[3] ? Number(process.argv[3]) : 400;
  if (!jobsPath) {
    console.error("Usage: node scripts/unsplash-fetch.mjs <jobs.json> [delaiMs]");
    process.exit(1);
  }
  const jobs = JSON.parse(fs.readFileSync(jobsPath, "utf8"));
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const results = [];
  for (let i = 0; i < jobs.length; i++) {
    const { query, out } = jobs[i];
    try {
      const r = await fetchOne(query);
      fs.writeFileSync(path.join(OUT_DIR, out), r.buffer);
      results.push({ out, alt: r.alt, credit: r.credit });
      console.log(`✓ ${out}  ←  "${query}"  (© ${r.credit.name})`);
    } catch (e) {
      results.push({ out, error: String(e.message || e) });
      console.log(`✗ ${out}  ←  "${query}"  : ${e.message || e}`);
    }
    if (i < jobs.length - 1) await sleep(delay);
  }

  const resultPath = jobsPath + ".result.json";
  fs.writeFileSync(resultPath, JSON.stringify(results, null, 2));
  console.log(`\nRésultats → ${resultPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
