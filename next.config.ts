import type { NextConfig } from "next";

/**
 * Reprise des URL de l'ancien site (plateforme de réservation Rails servie sur
 * www.cta-events.com). Le nouveau site remplace l'ancien sur le même domaine :
 * ces redirections 308 évitent que les centaines d'URL déjà indexées ne tombent
 * en 404 et transmettent leur référencement aux pages équivalentes.
 *
 * Les pays sans fiche dédiée, les fiches produit et le reste du catalogue sont
 * rabattus sur /destinations par les règles génériques placées en fin de liste
 * (Next.js applique la première règle qui correspond).
 */

/** /products/country/<pays> → fiche destination correspondante. */
const OLD_COUNTRY_TO_PATH: Record<string, string> = {
  // Fiches riches servies sur une route dédiée
  japon: "/destination-japon",
  thailande: "/destination-thailande",
  // Correspondances directes
  "afrique-du-sud": "/destination/afrique-du-sud",
  argentine: "/destination/argentine",
  australie: "/destination/australie",
  autriche: "/destination/autriche",
  bahamas: "/destination/bahamas",
  bolivie: "/destination/bolivie",
  botswana: "/destination/botswana",
  bresil: "/destination/bresil",
  cambodge: "/destination/cambodge",
  canada: "/destination/canada",
  "cap-vert": "/destination/cap-vert",
  chili: "/destination/chili",
  chine: "/destination/chine",
  "coree-du-sud": "/destination/coree-du-sud",
  "costa-rica": "/destination/costa-rica",
  croatie: "/destination/croatie",
  danemark: "/destination/danemark",
  ecosse: "/destination/ecosse",
  egypte: "/destination/egypte",
  espagne: "/destination/espagne",
  finlande: "/destination/finlande",
  france: "/destination/france",
  grece: "/destination/grece",
  guatemala: "/destination/guatemala",
  inde: "/destination/inde",
  indonesie: "/destination/indonesie",
  islande: "/destination/islande",
  italie: "/destination/italie",
  jamaique: "/destination/jamaique",
  kenya: "/destination/kenya",
  laos: "/destination/laos",
  malaisie: "/destination/malaisie",
  maldives: "/destination/maldives",
  maroc: "/destination/maroc",
  mexique: "/destination/mexique",
  namibie: "/destination/namibie",
  norvege: "/destination/norvege",
  "nouvelle-zelande": "/destination/nouvelle-zelande",
  "pays-bas": "/destination/pays-bas",
  perou: "/destination/perou",
  philippines: "/destination/philippines",
  portugal: "/destination/portugal",
  "republique-dominicaine": "/destination/republique-dominicaine",
  "royaume-uni": "/destination/royaume-uni",
  senegal: "/destination/senegal",
  seychelles: "/destination/seychelles",
  slovenie: "/destination/slovenie",
  "sri-lanka": "/destination/sri-lanka",
  suede: "/destination/suede",
  suisse: "/destination/suisse",
  tanzanie: "/destination/tanzanie",
  tunisie: "/destination/tunisie",
  vietnam: "/destination/vietnam",
  // Libellés différents entre l'ancien et le nouveau site
  guadeloupe: "/destination/antilles-francaises",
  martinique: "/destination/antilles-francaises",
  maurice: "/destination/ile-maurice",
  reunion: "/destination/la-reunion",
  "polynesie-francaise": "/destination/polynesie",
  "emirats-arabes-unis": "/destination/dubai",
};

/** /products/thematic/<theme> → page thématique équivalente. */
const OLD_THEMATIC_TO_PATH: Record<string, string> = {
  balneaire: "/sejours/balneaire",
  detente: "/sejours/balneaire",
  mer: "/croisieres",
  circuit: "/circuits",
  decouverte: "/circuits",
  culturel: "/sejours/culturel",
  histoire: "/sejours/culturel",
  "patrimoine-et-histoire": "/sejours/culturel",
  famille: "/sejours/famille",
  nature: "/sejours/nature",
  ville: "/sejours/escapade-urbaine",
  "voyage-de-noces": "/voyage-sur-mesure/noces",
  sport: "/catalogue-sportif",
  golf: "/sejours",
};

/** /products/type/<type> → rubrique équivalente. */
const OLD_TYPE_TO_PATH: Record<string, string> = {
  circuits: "/circuits",
  "circuits-accompagnes": "/circuits/accompagne",
  combines: "/circuits",
  "voyages-individuels": "/circuits/individuel",
  autotours: "/voyage-sur-mesure",
  croisieres: "/croisieres",
  sejours: "/sejours",
  locations: "/sejours",
  "sejours-balneaires": "/sejours/balneaire",
  "sejours-nature": "/sejours/nature",
  "sejours-ville": "/sejours/escapade-urbaine",
};

/** Pages institutionnelles et de contact de l'ancien site. */
const OLD_PAGE_TO_PATH: Record<string, string> = {
  "/mentions-legales/display": "/mentions-legales",
  "/politique-confidentialite/display": "/confidentialite",
  "/pages/conditions-de-vente": "/mentions-legales",
  "/pages/qui-sommes-nous": "/groupe-cta",
  "/pages/assurances": "/blog/choisir-assurance-voyage",
  "/contact/messages/new": "/demande-devis",
  "/coordonnees/coordonnees": "/demande-devis",
};

function mapped(prefix: string, table: Record<string, string>) {
  return Object.entries(table).map(([from, destination]) => ({
    source: `${prefix}${from}`,
    destination,
    permanent: true,
  }));
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
  async redirects() {
    return [
      {
        // Un seul formulaire de devis conservé : le multi-étapes (/demande-devis).
        // L'ancien formulaire simple redirige (308) pour préserver favoris et SEO.
        source: "/demande-renseignement",
        destination: "/demande-devis",
        permanent: true,
      },
      ...mapped("", OLD_PAGE_TO_PATH),
      ...mapped("/products/country/", OLD_COUNTRY_TO_PATH),
      ...mapped("/products/thematic/", OLD_THEMATIC_TO_PATH),
      ...mapped("/products/type/", OLD_TYPE_TO_PATH),
      // Filets de sécurité : tout ce que les tables ci-dessus ne couvrent pas
      // (pays sans fiche, fiches produit, recherches) part vers la liste des
      // destinations plutôt que vers une 404.
      {
        source: "/products/country/:slug",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/product/:path*",
        destination: "/destinations",
        permanent: true,
      },
      { source: "/pages/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
