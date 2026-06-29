import { ALL_DESTINATIONS } from "./destinations";

/** Continent utilisé pour le filtrage (4 boutons des cartes). */
export type MapContinent = "asie" | "afrique" | "ameriques" | "europe";

export type MapDestination = {
  id: string;
  name: string;
  /** Bucket de filtrage (4 continents). */
  continent: MapContinent;
  /** Badge/région affiché (peut être plus précis : Océan Indien, Moyen-Orient…). */
  badge: string;
  /** [latitude, longitude] pour le marqueur. */
  ll: [number, number];
  img: string;
  desc: string;
  href: string;
};

/** Coordonnées + bucket + badge par slug (source : lib/destinations.ts). */
const META: Record<
  string,
  { ll: [number, number]; bucket: MapContinent; badge: string }
> = {
  // Europe
  islande: { ll: [64.9, -19.0], bucket: "europe", badge: "Europe" },
  france: { ll: [46.5, 2.2], bucket: "europe", badge: "Europe" },
  grece: { ll: [39.0, 22.0], bucket: "europe", badge: "Europe" },
  santorin: { ll: [36.4, 25.4], bucket: "europe", badge: "Europe" },
  crete: { ll: [35.2, 24.9], bucket: "europe", badge: "Europe" },
  italie: { ll: [42.8, 12.6], bucket: "europe", badge: "Europe" },
  venise: { ll: [45.4, 12.3], bucket: "europe", badge: "Europe" },
  rome: { ll: [41.9, 12.5], bucket: "europe", badge: "Europe" },
  espagne: { ll: [40.3, -3.7], bucket: "europe", badge: "Europe" },
  portugal: { ll: [39.5, -8.0], bucket: "europe", badge: "Europe" },
  porto: { ll: [41.1, -8.6], bucket: "europe", badge: "Europe" },
  croatie: { ll: [45.1, 15.2], bucket: "europe", badge: "Europe" },
  londres: { ll: [51.5, -0.1], bucket: "europe", badge: "Europe" },
  ecosse: { ll: [56.5, -4.2], bucket: "europe", badge: "Europe" },
  amsterdam: { ll: [52.4, 4.9], bucket: "europe", badge: "Europe" },
  norvege: { ll: [60.5, 8.5], bucket: "europe", badge: "Europe" },
  suede: { ll: [62.0, 15.0], bucket: "europe", badge: "Europe" },
  laponie: { ll: [67.8, 24.5], bucket: "europe", badge: "Europe" },
  slovenie: { ll: [46.1, 14.8], bucket: "europe", badge: "Europe" },
  acores: { ll: [37.7, -25.6], bucket: "europe", badge: "Europe" },
  // Afrique & Océan Indien
  maroc: { ll: [31.8, -7.1], bucket: "afrique", badge: "Afrique" },
  egypte: { ll: [26.8, 30.8], bucket: "afrique", badge: "Afrique" },
  kenya: { ll: [0.0, 37.9], bucket: "afrique", badge: "Afrique" },
  tanzanie: { ll: [-6.4, 34.9], bucket: "afrique", badge: "Afrique" },
  "afrique-du-sud": { ll: [-30.6, 22.9], bucket: "afrique", badge: "Afrique" },
  namibie: { ll: [-22.6, 17.1], bucket: "afrique", badge: "Afrique" },
  botswana: { ll: [-22.3, 24.7], bucket: "afrique", badge: "Afrique" },
  zanzibar: { ll: [-6.1, 39.2], bucket: "afrique", badge: "Afrique" },
  "ile-maurice": { ll: [-20.3, 57.5], bucket: "afrique", badge: "Océan Indien" },
  seychelles: { ll: [-4.6, 55.5], bucket: "afrique", badge: "Océan Indien" },
  maldives: { ll: [3.2, 73.0], bucket: "afrique", badge: "Océan Indien" },
  madagascar: { ll: [-18.9, 47.5], bucket: "afrique", badge: "Océan Indien" },
  "la-reunion": { ll: [-21.1, 55.5], bucket: "afrique", badge: "Océan Indien" },
  // Asie & Moyen-Orient
  thailande: { ll: [15.8, 101.0], bucket: "asie", badge: "Asie" },
  vietnam: { ll: [14.1, 108.3], bucket: "asie", badge: "Asie" },
  inde: { ll: [20.6, 79.0], bucket: "asie", badge: "Asie" },
  "sri-lanka": { ll: [7.9, 80.8], bucket: "asie", badge: "Asie" },
  bali: { ll: [-8.4, 115.2], bucket: "asie", badge: "Asie" },
  ouzbekistan: { ll: [41.4, 64.6], bucket: "asie", badge: "Asie" },
  mongolie: { ll: [46.9, 103.8], bucket: "asie", badge: "Asie" },
  jordanie: { ll: [30.6, 36.2], bucket: "asie", badge: "Moyen-Orient" },
  dubai: { ll: [25.2, 55.3], bucket: "asie", badge: "Moyen-Orient" },
  oman: { ll: [21.5, 55.9], bucket: "asie", badge: "Moyen-Orient" },
  polynesie: { ll: [-17.7, -149.4], bucket: "asie", badge: "Océanie" },
  "nouvelle-zelande": { ll: [-41.0, 174.0], bucket: "asie", badge: "Océanie" },
  australie: { ll: [-25.3, 133.8], bucket: "asie", badge: "Océanie" },
  // Amériques
  canada: { ll: [56.0, -106.0], bucket: "ameriques", badge: "Amériques" },
  "costa-rica": { ll: [9.7, -83.7], bucket: "ameriques", badge: "Amériques" },
  perou: { ll: [-9.2, -75.0], bucket: "ameriques", badge: "Amériques" },
  patagonie: { ll: [-49.3, -72.9], bucket: "ameriques", badge: "Amériques" },
  floride: { ll: [27.8, -81.7], bucket: "ameriques", badge: "Amériques" },
  "republique-dominicaine": {
    ll: [18.7, -70.2],
    bucket: "ameriques",
    badge: "Caraïbes",
  },
};

function short(text: string): string {
  return text.length > 130 ? text.slice(0, 127).trimEnd() + "…" : text;
}

/**
 * Source unique des destinations affichées sur les cartes (home + /destinations)
 * et dans la grille de résultats. Japon est ajouté manuellement (fiche riche
 * dédiée, absente de la liste « légère »).
 */
export const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: "japon",
    name: "Japon",
    continent: "asie",
    badge: "Asie",
    ll: [36.2, 138.2],
    img: "/generated/japon.jpg",
    desc: "Temples ancestraux, mégalopoles électriques et nuits en ryokan traditionnel.",
    href: "/destination-japon",
  },
  ...ALL_DESTINATIONS.filter((d) => META[d.slug]).map((d) => ({
    id: d.slug,
    name: d.name,
    continent: META[d.slug].bucket,
    badge: META[d.slug].badge,
    ll: META[d.slug].ll,
    // Image générée et unique par destination (anti-doublons).
    img: `/generated/${d.slug}.jpg`,
    desc: short(d.intro),
    href: `/destination/${d.slug}`,
  })),
];
