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
  "royaume-uni": { ll: [54.0, -2.5], bucket: "europe", badge: "Europe" },
  londres: { ll: [51.5, -0.1], bucket: "europe", badge: "Europe" },
  ecosse: { ll: [56.5, -4.2], bucket: "europe", badge: "Europe" },
  "pays-bas": { ll: [52.2, 5.4], bucket: "europe", badge: "Europe" },
  amsterdam: { ll: [52.4, 4.9], bucket: "europe", badge: "Europe" },
  norvege: { ll: [60.5, 8.5], bucket: "europe", badge: "Europe" },
  suede: { ll: [62.0, 15.0], bucket: "europe", badge: "Europe" },
  danemark: { ll: [56.0, 10.0], bucket: "europe", badge: "Europe" },
  finlande: { ll: [63.5, 26.0], bucket: "europe", badge: "Europe" },
  laponie: { ll: [67.8, 24.5], bucket: "europe", badge: "Europe" },
  autriche: { ll: [47.6, 14.1], bucket: "europe", badge: "Europe" },
  suisse: { ll: [46.8, 8.2], bucket: "europe", badge: "Europe" },
  slovenie: { ll: [46.1, 14.8], bucket: "europe", badge: "Europe" },
  acores: { ll: [37.7, -25.6], bucket: "europe", badge: "Europe" },
  // Afrique & Océan Indien
  maroc: { ll: [31.8, -7.1], bucket: "afrique", badge: "Afrique" },
  tunisie: { ll: [34.0, 9.5], bucket: "afrique", badge: "Afrique" },
  egypte: { ll: [26.8, 30.8], bucket: "afrique", badge: "Afrique" },
  senegal: { ll: [14.5, -14.5], bucket: "afrique", badge: "Afrique" },
  "cap-vert": { ll: [15.9, -23.9], bucket: "afrique", badge: "Afrique" },
  kenya: { ll: [0.0, 37.9], bucket: "afrique", badge: "Afrique" },
  tanzanie: { ll: [-6.4, 34.9], bucket: "afrique", badge: "Afrique" },
  "afrique-du-sud": { ll: [-30.6, 22.9], bucket: "afrique", badge: "Afrique" },
  namibie: { ll: [-22.6, 17.1], bucket: "afrique", badge: "Afrique" },
  botswana: { ll: [-22.3, 24.7], bucket: "afrique", badge: "Afrique" },
  zanzibar: { ll: [-6.1, 39.2], bucket: "afrique", badge: "Afrique" },
  "ile-maurice": { ll: [-20.3, 57.5], bucket: "afrique", badge: "Océan Indien" },
  seychelles: { ll: [-4.6, 55.5], bucket: "afrique", badge: "Océan Indien" },
  maldives: { ll: [3.2, 73.0], bucket: "afrique", badge: "Océan Indien" },
  "la-reunion": { ll: [-21.1, 55.5], bucket: "afrique", badge: "Océan Indien" },
  // Asie & Moyen-Orient
  thailande: { ll: [15.8, 101.0], bucket: "asie", badge: "Asie" },
  vietnam: { ll: [14.1, 108.3], bucket: "asie", badge: "Asie" },
  cambodge: { ll: [12.6, 104.9], bucket: "asie", badge: "Asie" },
  laos: { ll: [19.9, 102.5], bucket: "asie", badge: "Asie" },
  malaisie: { ll: [4.2, 102.0], bucket: "asie", badge: "Asie" },
  indonesie: { ll: [-2.5, 118.0], bucket: "asie", badge: "Asie" },
  bali: { ll: [-8.4, 115.2], bucket: "asie", badge: "Asie" },
  philippines: { ll: [12.9, 121.8], bucket: "asie", badge: "Asie" },
  chine: { ll: [35.0, 104.0], bucket: "asie", badge: "Asie" },
  "coree-du-sud": { ll: [36.5, 127.9], bucket: "asie", badge: "Asie" },
  inde: { ll: [20.6, 79.0], bucket: "asie", badge: "Asie" },
  "sri-lanka": { ll: [7.9, 80.8], bucket: "asie", badge: "Asie" },
  dubai: { ll: [25.2, 55.3], bucket: "asie", badge: "Moyen-Orient" },
  polynesie: { ll: [-17.7, -149.4], bucket: "asie", badge: "Océanie" },
  "nouvelle-zelande": { ll: [-41.0, 174.0], bucket: "asie", badge: "Océanie" },
  australie: { ll: [-25.3, 133.8], bucket: "asie", badge: "Océanie" },
  // Amériques
  canada: { ll: [56.0, -106.0], bucket: "ameriques", badge: "Amériques" },
  mexique: { ll: [23.6, -102.5], bucket: "ameriques", badge: "Amériques" },
  guatemala: { ll: [15.5, -90.2], bucket: "ameriques", badge: "Amériques" },
  "costa-rica": { ll: [9.7, -83.7], bucket: "ameriques", badge: "Amériques" },
  perou: { ll: [-9.2, -75.0], bucket: "ameriques", badge: "Amériques" },
  bolivie: { ll: [-16.5, -64.5], bucket: "ameriques", badge: "Amériques" },
  bresil: { ll: [-12.0, -50.0], bucket: "ameriques", badge: "Amériques" },
  chili: { ll: [-35.0, -71.0], bucket: "ameriques", badge: "Amériques" },
  argentine: { ll: [-38.4, -63.6], bucket: "ameriques", badge: "Amériques" },
  patagonie: { ll: [-49.3, -72.9], bucket: "ameriques", badge: "Amériques" },
  "republique-dominicaine": {
    ll: [18.7, -70.2],
    bucket: "ameriques",
    badge: "Caraïbes",
  },
  jamaique: { ll: [18.1, -77.3], bucket: "ameriques", badge: "Caraïbes" },
  bahamas: { ll: [24.5, -77.5], bucket: "ameriques", badge: "Caraïbes" },
  "antilles-francaises": {
    ll: [16.2, -61.6],
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
