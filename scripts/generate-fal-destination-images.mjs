// Génère les visuels de section des fiches destination (fal.ai Flux Pro v1.1),
// à la convention /generated/<slug>-<n>.jpg (n = 1..4).
//
// Chaque fiche « riche » utilise quatre visuels : un par carte « Pourquoi
// voyager… », réutilisés ensuite dans les étapes d'itinéraire. Les prompts
// ci-dessous suivent l'ordre des cartes de chaque fiche.
//
// Usage :
//   node scripts/generate-fal-destination-images.mjs            # génère ce qui manque
//   node scripts/generate-fal-destination-images.mjs --force    # regénère tout
//   node scripts/generate-fal-destination-images.mjs --slug=chine
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

const PROMPTS = {
  "royaume-uni": [
    "Wide Scottish Highlands landscape with a dark loch, heather moorland and mist-wrapped mountains",
    "London street scene with Victorian architecture, a red double-decker bus and a clock tower in the distance",
    "Honey-coloured stone cottages with flowering front gardens along a quiet Cotswolds village lane, England",
    "Medieval British castle with round towers on a green hill overlooking rolling countryside, dramatic sky",
  ],
  "pays-bas": [
    "Endless rows of colourful tulip fields with a traditional windmill under a wide Dutch sky",
    "Amsterdam canal lined with narrow gabled houses, an arched stone bridge and moored boats at golden hour",
    "Row of traditional windmills along a canal with a cycle path crossing the flat Dutch polder landscape",
    "Grand neoclassical museum building with a reflecting pond and lawns in a leafy Amsterdam square",
  ],
  danemark: [
    "Wide sandy beach and drifting dunes on the Danish North Sea coast, marram grass, soft northern light",
    "Colourful narrow townhouses and wooden sailing boats along the Nyhavn canal in Copenhagen",
    "Renaissance Danish royal castle with a moat, copper spires and formal gardens",
    "Minimalist Scandinavian interior with pale wood furniture, soft daylight, ceramics and a lit candle",
  ],
  finlande: [
    "Green aurora borealis over a snow-covered pine forest in Finnish Lapland at night",
    "Helsinki waterfront with the white neoclassical cathedral and the harbour market in crisp winter light",
    "Traditional Finnish wooden sauna beside a frozen lake in a snowy forest at dusk, warm glowing window",
    "Wooden lakeside cabin with a jetty on a mirror-calm Finnish lake under the midnight sun",
  ],
  autriche: [
    "Alpine village of pastel houses on the shore of an emerald lake beneath steep forested mountains, Austria",
    "Baroque imperial palace facade with formal gardens and fountains in Vienna at golden hour",
    "Historic old town with baroque domes below a hilltop fortress, snow-capped alpine peaks behind, Salzburg",
    "Ornate gilded concert hall interior with crystal chandeliers, balconies and an empty orchestra stage, Vienna",
  ],
  suisse: [
    "The Matterhorn peak reflected in a still alpine lake at sunrise, Switzerland",
    "Red panoramic train crossing a curved stone viaduct in the snowy Swiss Alps",
    "Swiss lakeside town with a covered wooden bridge, church spires and terraced vineyards, mountains beyond",
    "Hiking trail along a high alpine ridge facing glaciers and jagged 4000-metre peaks, Switzerland",
  ],
  indonesie: [
    "Lush green rice terraces with palm trees and morning mist in the hills of Bali, Indonesia",
    "Ancient stone Buddhist temple with rows of bell-shaped stupas emerging from morning mist, Java",
    "Traditional outrigger boat on turquoise water below dramatic limestone cliffs, Indonesian island",
    "Smoking volcanic crater and vast sea of volcanic sand at sunrise, Mount Bromo Java",
  ],
  malaisie: [
    "Wide brown river winding through dense primary rainforest at dawn, low mist, Borneo",
    "Kuala Lumpur skyline with illuminated twin skyscrapers at dusk seen across a park lake",
    "Colourful heritage shophouse street with street food stalls, lanterns and murals, George Town Penang",
    "White sand beach with leaning palm trees and turquoise water on a Malaysian tropical island",
  ],
  cambodge: [
    "Angkor Wat temple towers reflected in a lotus pond at sunrise, Cambodia",
    "Bustling Cambodian market street with tuk-tuks, colourful fruit stalls and awnings",
    "Stilt houses and wooden pirogues in a floating village on a wide lake at golden hour, Cambodia",
    "Giant fig tree roots engulfing ancient carved temple ruins in the jungle, Ta Prohm Cambodia",
  ],
  laos: [
    "Traditional wooden slow boat on the Mekong river between steep forested mountains, Laos",
    "Golden Buddhist temple with sweeping roofs and monks in saffron robes at dawn, Luang Prabang",
    "Turquoise tiered waterfall pools cascading through tropical forest, Kuang Si Laos",
    "Hillside village with terraced rice fields and limestone karst peaks in misty northern Laos",
  ],
  philippines: [
    "Turquoise lagoon enclosed by towering limestone karst cliffs, El Nido Palawan",
    "Ancient rice terraces carved into steep green mountains, Banaue Philippines",
    "Diver above a vibrant coral reef in crystal-clear tropical water, Philippines",
    "White sand beach with a traditional bangka outrigger boat and coconut palms, Philippines",
  ],
  "coree-du-sud": [
    "Traditional Korean Buddhist temple with curved painted roofs nestled in a forested mountain, autumn colours",
    "Korean royal palace with tiled roofs and a stone courtyard in front of a modern Seoul skyline",
    "Korean night market street with steaming food stalls, hanging lanterns and colourful dishes",
    "Forest trail through Korean mountains ablaze with red and gold autumn maples",
  ],
  chine: [
    "Karst limestone peaks along a winding river with a bamboo raft and mist, Guilin China",
    "Courtyard and golden-roofed pavilions of the Forbidden City under a clear sky, Beijing",
    "Shanghai Pudong skyline at dusk seen from the Bund across the river, illuminated towers",
  ],
  senegal: [
    "Mangrove channel with a traditional wooden pirogue in the Saloum delta at golden hour, Senegal",
    "Busy colourful West African market street with fabric stalls, baskets and awnings, Senegal",
    "Brightly painted wooden fishing pirogues drawn up on a wide Atlantic beach, Senegal",
    "Pastel colonial houses with wooden balconies along a quiet sandy street, Saint-Louis Senegal",
  ],
  "cap-vert": [
    "Hiking path along a dramatic volcanic ridge above deep cultivated green valleys, Cape Verde",
    "Colourful colonial street with music bars and pastel facades in Mindelo, Cape Verde",
    "Sunlit white sand beach and turquoise Atlantic water with volcanic hills behind, Cape Verde",
    "Kitesurfer flying over breaking waves on a windy Atlantic beach, Cape Verde",
  ],
  tunisie: [
    "Golden Sahara dunes with a palm oasis at the foot of ochre desert cliffs, Tunisia",
    "Well-preserved Roman columns and an amphitheatre under a bright Mediterranean sky, Tunisia",
    "Calm Mediterranean beach with white sand and whitewashed blue-doored buildings, Djerba Tunisia",
    "Vaulted whitewashed medina alley with carpet shops, lanterns and blue wooden doors, Tunisia",
  ],
  argentine: [
    "Towering blue glacier front calving into a milky lake surrounded by mountains, Patagonia Argentina",
    "Elegant Buenos Aires avenue with ornate belle époque facades and plane trees at golden hour",
    "Iguazu Falls cascading through subtropical rainforest with rising mist and a rainbow",
    "Rows of vineyards with the snow-capped Andes rising behind, Mendoza Argentina",
  ],
  bresil: [
    "Wide river winding through the dense Amazon rainforest at dawn, low mist over the canopy",
    "Rio de Janeiro bay with granite mountains, curved beaches and the Sugarloaf at sunset",
    "Colourful colonial facades and a cobbled street in the Pelourinho district, Salvador Bahia",
    "Jaguar resting on a riverbank in a lush tropical wetland at golden hour, Pantanal Brazil",
  ],
  chili: [
    "Otherworldly desert valley with salt formations and distant volcanoes at sunset, Atacama Chile",
    "Colourful houses stacked on a steep hillside with a funicular railway, Valparaiso Chile",
    "Granite towers of Torres del Paine rising above a turquoise glacial lake, Patagonia Chile",
    "Snow-capped volcano perfectly reflected in a calm lake ringed by forest, Chilean lake district",
  ],
  bolivie: [
    "Endless white salt flat with a thin water layer mirroring the sky and clouds, Salar de Uyuni Bolivia",
    "Andean city of pale brick houses climbing steep canyon walls, cable cars, snow peak behind, Bolivia",
    "Red altiplano lagoon with flamingos and volcanoes under a deep blue sky, Bolivia",
    "Deep blue high-altitude lake with reed boats and terraced islands, Lake Titicaca Bolivia",
  ],
  mexique: [
    "Underground cenote with turquoise water, hanging roots and a shaft of light, Yucatan Mexico",
    "Colourful colonial street with pastel facades and papel picado banners overhead, Mexico",
    "Maya stone pyramid rising above the jungle canopy in warm morning light, Mexico",
    "Vibrant Mexican market stall with dried chillies, spices, and traditional prepared dishes",
  ],
  guatemala: [
    "Lake Atitlan ringed by volcanoes at sunrise with a small Maya village on the shore, Guatemala",
    "Cobbled street with pastel colonial facades and a volcano rising behind, Antigua Guatemala",
    "Maya temple pyramid rising above the rainforest canopy at dawn, Tikal Guatemala",
    "Erupting volcano at night with glowing lava seen from a high mountain camp, Guatemala",
  ],
  jamaique: [
    "Tiered waterfall cascading over rocks through lush tropical vegetation, Jamaica",
    "Colourful street murals and vibrant reggae culture in a Kingston neighbourhood, Jamaica",
    "Long white sand beach with leaning coconut palms and calm turquoise Caribbean water, Jamaica",
    "Misty blue mountain ridges with terraced coffee plantations at sunrise, Jamaica",
  ],
  bahamas: [
    "Aerial view of a curving sandbank and turquoise gradients in shallow tropical water, Exumas Bahamas",
    "Pastel colonial waterfront buildings and a small harbour with boats, Nassau Bahamas",
    "Pink sand beach with turquoise water, gentle waves and palm trees, Bahamas",
    "Diver above a vivid coral reef in exceptionally clear blue water, Bahamas",
  ],
  "antilles-francaises": [
    "Waterfall in dense tropical rainforest with tree ferns and heliconias, Guadeloupe",
    "Traditional rum distillery with copper stills beside green sugar cane fields, French Antilles",
    "White sand beach with coconut palms and turquoise Caribbean water, Martinique",
    "Snorkeler above a colourful coral reef in clear shallow Caribbean water",
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

const jobs = [];
for (const [slug, prompts] of Object.entries(PROMPTS)) {
  if (ONLY && slug !== ONLY) continue;
  prompts.forEach((prompt, idx) => {
    const out = path.join(OUT_DIR, `${slug}-${idx + 1}.jpg`);
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
      console.log(
        `  ✓ ${job.slug}-${job.n}.jpg (${(jpg.length / 1024).toFixed(0)} KB) [${done + failed}/${jobs.length}]`,
      );
    } catch (e) {
      failed++;
      console.error(
        `  ✗ ${job.slug}-${job.n}.jpg : ${e.message} [${done + failed}/${jobs.length}]`,
      );
    }
  }
}

const queue = [...jobs];
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, queue.length) }, () => worker(queue)),
);

console.log(`\nTerminé : ${done} générée(s), ${failed} échec(s).`);
if (failed > 0) process.exitCode = 1;
