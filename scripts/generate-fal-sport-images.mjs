// Génère les visuels des pages sport tennis et Tour de France (fal.ai Flux Pro v1.1)
// dans public/generated/sport-<nom>.jpg (1600x1000, JPEG q82).
//
// Usage : node scripts/generate-fal-sport-images.mjs [--force]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { fal } from "@fal-ai/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "generated");
const FORCE = process.argv.includes("--force");

function readFalKey() {
  if (process.env.FAL_KEY) return process.env.FAL_KEY;
  const txt = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
  const m = txt.match(/^FAL_KEY=(.+)$/m);
  if (!m) throw new Error("FAL_KEY introuvable dans .env.local");
  return m[1].trim();
}

const STYLE =
  "Editorial sports travel photography for a premium travel agency. " +
  "Photorealistic, natural light, sharp focus, magazine-quality composition, wide landscape framing. " +
  "No text, no logos, no brand names, no watermarks, no recognizable faces.";

const IMAGES = {
  "sport-tennis-hero":
    "Professional grass tennis court seen from the stands on a sunny summer afternoon, crisp white lines, spectators in the stands in soft focus, a player serving in the distance",
  "sport-tennis-billets":
    "Red clay tennis court under warm late-afternoon light, tall stands filled with spectators in soft focus, Mediterranean pines beyond the stadium",
  "sport-tour-de-france-hero":
    "Professional cycling peloton racing on a winding road through green Scottish hills in summer, crowds of spectators cheering along the roadside, seen from above",
  "sport-tour-de-france-village":
    "Elegant white hospitality marquee terrace overlooking a road lined with barriers and spectators, tables set with champagne glasses and buffet, summer afternoon light, guests seen from behind in soft focus, no screens, no signs",
};

fal.config({ credentials: readFalKey() });

for (const [name, prompt] of Object.entries(IMAGES)) {
  const out = path.join(OUT_DIR, `${name}.jpg`);
  if (fs.existsSync(out) && !FORCE) { console.log(`déjà là : ${name}`); continue; }
  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt: `${STYLE} Scene: ${prompt}.`,
      image_size: "landscape_16_9",
      num_inference_steps: 28,
      guidance_scale: 3.5,
      enable_safety_checker: true,
    },
  });
  const url = result.data.images[0].url;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`téléchargement ${res.status}`);
  const jpg = await sharp(Buffer.from(await res.arrayBuffer()))
    .resize(1600, 1000, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(out, jpg);
  console.log(`ok : ${name}`);
}
