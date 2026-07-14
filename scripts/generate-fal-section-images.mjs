// Génère les images de section (fal.ai Flux Pro v1.1) pour les nouveaux articles
// d'inspiration, à la convention /generated/blog-<slug>-<n>.jpg (n = 1..5).
//
// Usage :
//   node scripts/generate-fal-section-images.mjs            # génère ce qui manque
//   node scripts/generate-fal-section-images.mjs --force    # regénère tout
//   node scripts/generate-fal-section-images.mjs --slug=circuit-maroc-marrakech-atlas-sahara
//
// La clé fal est lue dans .env.local (FAL_KEY). Images 1200x900 (4:3), JPEG q82.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { fal } from "@fal-ai/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "generated");

function readFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY;
  const txt = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
  const m = txt.match(/^FAL_KEY=(.+)$/m);
  if (!m) throw new Error("FAL_KEY introuvable dans .env.local");
  return m[1].trim();
}

const STYLE =
  "Editorial travel photography for a premium leisure travel magazine. " +
  "Photorealistic, natural light, sharp focus, magazine-quality composition, " +
  "vivid yet natural colors, wide landscape framing. " +
  "No text, no logos, no watermarks, no recognizable faces.";

// 5 scènes par article (ordre = sections 1 à 5).
const PROMPTS = {
  "circuit-canada-rocheuses-quebec": [
    "Turquoise glacial Lake Louise mirroring snow-capped Canadian Rockies, pine forest, dramatic peaks, clear morning light",
    "Vancouver skyline seen from Stanley Park seawall, ocean, coastal mountains, a floatplane in the sky",
    "Niagara Falls powerful cascade with rising mist and rainbow, lush green surroundings",
    "Old Montreal cobblestone street with historic stone buildings and cafe terraces in warm autumn light",
    "Chateau Frontenac in Quebec City above the Saint Lawrence river at golden hour, old town ramparts",
  ],
  "circuit-costa-rica-volcans-jungle": [
    "Arenal volcano perfect cone rising above dense tropical rainforest, steam from hot springs, Costa Rica",
    "Hanging suspension bridge through the misty green Monteverde cloud forest canopy",
    "A sloth hanging peacefully in a tree in a lush Costa Rican rainforest",
    "Manuel Antonio beach where jungle meets turquoise sea, palm trees, white sand",
    "Golden sunset over a wild Pacific beach in Guanacaste, gentle surf, palm silhouettes",
  ],
  "circuit-maroc-marrakech-atlas-sahara": [
    "Jemaa el-Fna square in Marrakech at dusk with the Koutoubia minaret and glowing market lanterns",
    "Traditional Berber village with terraced fields in the High Atlas mountains, Morocco",
    "Ait Ben Haddou earthen ksar fortress glowing warm at sunset, Morocco",
    "Palm grove oasis and ochre kasbah in the Draa valley, Morocco, late afternoon light",
    "Camel caravan crossing the golden Erg Chebbi sand dunes at sunset, Sahara desert",
  ],
  "croisiere-mediterranee-rome-barcelone": [
    "The Colosseum of Rome at golden hour, ancient Roman architecture, warm light",
    "Florence skyline with the Duomo cathedral and rolling Tuscan hills in soft daylight",
    "French Riviera coastline, the bay of Nice with turquoise sea and a palm-lined promenade",
    "Sagrada Familia basilica in Barcelona against a clear blue sky",
    "Large cruise ship deck with a pool overlooking the calm Mediterranean sea at sunset",
  ],
  "croisiere-fjords-norvegiens": [
    "Colorful wooden Bryggen wharf houses in Bergen harbor, Norway, reflections on the water",
    "Geirangerfjord with tall waterfalls and steep green cliffs, a cruise ship far below, Norway",
    "The scenic Flam railway train winding through green Norwegian mountains beside a waterfall",
    "Midnight sun glowing over the Arctic Norwegian coast, golden light on a calm sea",
    "Northern lights aurora borealis dancing over a Norwegian fjord and snowy mountains",
  ],
  "croisiere-caraibes-antilles": [
    "Tropical beach in Martinique with leaning palm trees and turquoise Caribbean sea",
    "The Pitons of Saint Lucia rising above the Caribbean sea, lush green slopes",
    "Vibrant underwater coral reef with colorful fish in crystal-clear Caribbean water",
    "Aerial view of a cruise ship anchored off a white-sand Caribbean island and turquoise lagoon",
    "Idyllic Caribbean beach with a hammock strung between palm trees, calm turquoise water",
  ],
  "croisiere-fluviale-europe": [
    "Elegant river cruise ship gliding on a calm European river at sunset, soft reflections",
    "Terraced vineyards of the Douro valley in Portugal with the river winding below",
    "Medieval hilltop castle overlooking the Rhine river and vineyards, Germany",
    "The Hungarian Parliament building in Budapest illuminated at night, reflected on the Danube",
    "River cruise ship sun deck with lounge chairs passing a picturesque European riverside town",
  ],
  "glamping-cabane-canada": [
    "Cozy log cabin with warmly lit windows at the edge of a calm lake, forest, dusk, Canada",
    "A moose standing at the misty edge of a boreal forest lake at dawn, Canada",
    "A red canoe on a mirror-calm Canadian lake surrounded by fiery autumn forest",
    "A snowy log cabin in a Canadian forest with warm glowing windows on a winter night",
    "Wooden dock on a serene lake at sunrise, mist over the water, Canadian wilderness",
  ],
  "glamping-eco-lodge-costa-rica": [
    "Luxury eco-lodge treehouse bungalow on stilts within the tropical rainforest canopy, Costa Rica",
    "A colorful toucan perched on a branch in a lush tropical rainforest",
    "Eco-lodge wooden terrace overlooking a green jungle valley at sunrise, low mist",
    "A suspension bridge through the rainforest canopy with morning mist, Costa Rica",
    "A hammock on an open-air jungle lodge deck facing lush green forest, tranquil atmosphere",
  ],
  "glamping-ryokan-japon": [
    "Traditional Japanese ryokan room with tatami mats, a futon, shoji paper screens, minimalist and serene",
    "Outdoor onsen hot spring bath with rising steam, surrounded by rocks and red autumn maple trees, Japan",
    "An elegant Japanese kaiseki multi-course meal beautifully plated on a dark wooden table",
    "Traditional wooden ryokan building beside a river in the Japanese Alps, autumn foliage, mountains",
    "A serene Japanese zen garden with a stone lantern, a koi pond and maple trees",
  ],
};

const argv = process.argv.slice(2);
const FORCE = argv.includes("--force");
const ONLY = argv.find((a) => a.startsWith("--slug="))?.slice("--slug=".length);

fal.config({ credentials: readFalKey() });

async function genOne(prompt) {
  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt: `${STYLE} Scene: ${prompt}.`,
      image_size: "landscape_4_3",
      num_inference_steps: 28,
      guidance_scale: 3.5,
      enable_safety_checker: true,
    },
    logs: false,
  });
  const url = result?.data?.images?.[0]?.url;
  if (!url) throw new Error("fal.ai n'a pas renvoyé d'image");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`téléchargement ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// Construit la liste des tâches (slug, index 1..5, chemin de sortie).
const jobs = [];
for (const [slug, prompts] of Object.entries(PROMPTS)) {
  if (ONLY && slug !== ONLY) continue;
  prompts.forEach((prompt, idx) => {
    const out = path.join(OUT_DIR, `blog-${slug}-${idx + 1}.jpg`);
    if (!FORCE && fs.existsSync(out)) return;
    jobs.push({ slug, n: idx + 1, prompt, out });
  });
}

if (jobs.length === 0) {
  console.log("Rien à générer (tout existe déjà, ou --force absent).");
  process.exit(0);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
console.log(`${jobs.length} image(s) à générer…\n`);

const CONCURRENCY = 4;
let done = 0;
let failed = 0;

async function worker(queue) {
  while (queue.length) {
    const job = queue.shift();
    try {
      const buf = await genOne(job.prompt);
      const jpg = await sharp(buf)
        .resize(1200, 900, { fit: "cover" })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(job.out, jpg);
      done++;
      console.log(`  ✓ blog-${job.slug}-${job.n}.jpg (${(jpg.length / 1024).toFixed(0)} KB) [${done + failed}/${jobs.length}]`);
    } catch (e) {
      failed++;
      console.error(`  ✗ blog-${job.slug}-${job.n}.jpg : ${e.message} [${done + failed}/${jobs.length}]`);
    }
  }
}

const queue = [...jobs];
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

console.log(`\nTerminé : ${done} générées, ${failed} échouées.`);
if (failed > 0) process.exit(1);
