// Phase 2 — Récupère les photos de section pour TOUS les articles.
//
// Stratégie : 1 recherche Unsplash par article (per_page=30) puis une photo
// distincte affectée à chaque section (index 1..N-1). La section 0 conserve son
// image existante. 1 seule requête API/article → tient dans la limite 50 req/h.
//
// Usage : node scripts/unsplash-fetch-articles.mjs [delaiMs]
//   delaiMs : pause entre articles (défaut 75000 → ~48 req/h, marge sous 50/h).
//
// Résumable : réutilise scripts/section-images.result.json et saute les articles
// déjà entièrement traités (fichiers présents + résultats enregistrés).
// La clé est lue dans .env.local (UNSPLASH_ACCESS_KEY).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "generated");
const RESULT_PATH = path.join(__dirname, "section-images.result.json");
const APP = "cta_voyages";
const SKIP_SLUGS = new Set(["quand-partir-maldives"]); // déjà câblé en dur

function readAccessKey() {
  if (process.env.UNSPLASH_ACCESS_KEY) return process.env.UNSPLASH_ACCESS_KEY;
  const txt = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
  const m = txt.match(/^UNSPLASH_ACCESS_KEY=(.+)$/m);
  if (!m) throw new Error("UNSPLASH_ACCESS_KEY introuvable dans .env.local");
  return m[1].trim();
}

const KEY = readAccessKey();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const articles = JSON.parse(
  fs.readFileSync(path.join(__dirname, "articles-list.json"), "utf8"),
);
const queries = JSON.parse(
  fs.readFileSync(path.join(__dirname, "queries.json"), "utf8"),
);

// Résultats déjà obtenus (résumé) : { slug: [{sectionIndex,out,alt,credit}] }
let results = {};
if (fs.existsSync(RESULT_PATH)) {
  try {
    results = JSON.parse(fs.readFileSync(RESULT_PATH, "utf8"));
  } catch {
    results = {};
  }
}

function saveResults() {
  fs.writeFileSync(RESULT_PATH, JSON.stringify(results, null, 2));
}

async function searchPhotos(query, perPage) {
  const url =
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}` +
    `&per_page=${perPage}&orientation=landscape&content_filter=high&client_id=${KEY}`;
  const res = await fetch(url);
  if (res.status === 403) throw new Error("RATE_LIMIT"); // limite horaire atteinte
  if (!res.ok) throw new Error(`search ${res.status}`);
  const data = await res.json();
  return data.results || [];
}

async function download(photo, outName) {
  const imgUrl =
    photo.urls.raw + "&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80";
  const res = await fetch(imgUrl);
  if (!res.ok) throw new Error(`image ${res.status}`);
  fs.writeFileSync(path.join(OUT_DIR, outName), Buffer.from(await res.arrayBuffer()));
}

function alreadyDone(slug, count) {
  const recs = results[slug];
  if (!recs || recs.length < count) return false;
  return recs.every((r) => fs.existsSync(path.join(OUT_DIR, r.out)));
}

async function main() {
  const delay = process.argv[2] ? Number(process.argv[2]) : 75000;
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const todo = articles.filter(
    (a) => !SKIP_SLUGS.has(a.slug) && a.sections > 1,
  );
  let processed = 0;
  let apiCalls = 0;
  let didWork = false; // a-t-on fait une requête réseau depuis le dernier article ?

  for (let i = 0; i < todo.length; i++) {
    const art = todo[i];
    const count = art.sections - 1; // sections 1..N-1
    if (alreadyDone(art.slug, count)) {
      console.log(`= ${art.slug} (déjà fait)`);
      continue;
    }
    const query = queries[art.slug];
    if (!query) {
      console.log(`! ${art.slug} : pas de requête définie, ignoré`);
      continue;
    }

    if (didWork) await sleep(delay);
    try {
      let photos = await searchPhotos(query, Math.min(30, count + 5));
      apiCalls++;
      didWork = true;
      if (photos.length === 0) {
        // Repli : requête simplifiée (2 premiers mots).
        await sleep(1500);
        photos = await searchPhotos(query.split(" ").slice(0, 2).join(" "), 30);
        apiCalls++;
      }
      if (photos.length === 0) {
        console.log(`✗ ${art.slug} : aucun résultat pour "${query}"`);
        continue;
      }

      const recs = [];
      for (let k = 0; k < count; k++) {
        const photo = photos[k % photos.length];
        const out = `blog-${art.slug}-${k + 2}.jpg`; // section index k+1 → -(k+2).jpg
        await download(photo, out);
        recs.push({
          sectionIndex: k + 1,
          out,
          alt: photo.alt_description || query,
          credit: {
            name: photo.user.name,
            link: `${photo.user.links.html}?utm_source=${APP}&utm_medium=referral`,
          },
        });
      }
      results[art.slug] = recs;
      saveResults();
      processed++;
      console.log(
        `✓ ${art.slug}  (${count} photos, req API cumul: ${apiCalls})  "${query}"`,
      );
    } catch (e) {
      if (String(e.message) === "RATE_LIMIT") {
        console.log(
          `⏸ Limite horaire atteinte (${apiCalls} req). Pause 12 min puis reprise…`,
        );
        saveResults();
        await sleep(12 * 60 * 1000);
        didWork = false;
        i--; // on retente le même article
        continue;
      }
      console.log(`✗ ${art.slug} : ${e.message}`);
    }
  }

  saveResults();
  console.log(
    `\nTerminé. Articles traités cette session : ${processed}. ` +
      `Résultats → ${RESULT_PATH}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
