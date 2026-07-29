/**
 * Maillage interne du site.
 *
 * Rattache chaque article de blog aux fiches destination qu'il traite, et
 * inversement, pour que les deux rubriques se citent mutuellement au lieu de
 * vivre côte à côte sans se lier.
 *
 * N'importe que des métadonnées (`meta.generated.ts`, `destinations.ts`) : une
 * fiche destination peut proposer des articles sans embarquer leur contenu.
 */
import { ALL_DESTINATIONS } from "./destinations";
import { STATIC_RICH_SLUGS } from "./destination-content/static-slugs";
import { BLOG_META, type BlogMeta } from "./blog-content/meta.generated";

export type { BlogMeta };

/** Destination citable par un lien : slug, nom affiché et URL canonique. */
export type LinkableDestination = {
  slug: string;
  name: string;
  /** Badge affiché sur la fiche : « Asie », « Océan Indien », « Europe »… */
  continent: string;
  href: string;
};

/**
 * URL canonique d'une fiche destination. `japon` et `thailande` sont servis par
 * une page statique dédiée ; la route dynamique y redirige, donc pointer vers
 * `/destination/japon` ferait passer chaque lien interne par une redirection.
 */
export function destinationPath(slug: string): string {
  return STATIC_RICH_SLUGS.includes(slug)
    ? `/destination-${slug}`
    : `/destination/${slug}`;
}

/**
 * Le Japon a une fiche riche et une route, mais pas d'entrée dans
 * `ALL_DESTINATIONS` (qui ne recense que les fiches « légères »).
 */
const EXTRA_DESTINATIONS: { slug: string; name: string; continent: string }[] = [
  { slug: "japon", name: "Japon", continent: "Asie" },
];

/** Toutes les destinations vers lesquelles un lien interne peut pointer, A→Z. */
export const LINKABLE_DESTINATIONS: LinkableDestination[] = [
  ...ALL_DESTINATIONS.map((d) => ({
    slug: d.slug,
    name: d.name,
    continent: d.continent,
  })),
  ...EXTRA_DESTINATIONS,
]
  .filter(
    (d, i, all) => all.findIndex((other) => other.slug === d.slug) === i,
  )
  .map((d) => ({ ...d, href: destinationPath(d.slug) }))
  .sort((a, b) => a.name.localeCompare(b.name, "fr"));

const DESTINATION_BY_SLUG = new Map(
  LINKABLE_DESTINATIONS.map((d) => [d.slug, d]),
);

export function getLinkableDestination(
  slug: string,
): LinkableDestination | undefined {
  return DESTINATION_BY_SLUG.get(slug);
}

/**
 * Rattachements que le slug de l'article ne suffit pas à déduire : articles
 * transversaux (« Où voir les aurores boréales ») et villes ou régions qui
 * n'ont pas de fiche propre mais relèvent d'un pays qui en a une.
 *
 * Ces destinations s'ajoutent à celles déduites automatiquement.
 */
const ARTICLE_DESTINATIONS: Record<string, string[]> = {
  // Villes et régions sans fiche dédiée → le pays qui les couvre
  "que-faire-a-marrakech": ["maroc"],
  "visiter-lisbonne-week-end": ["portugal"],
  "visiter-barcelone-3-jours": ["espagne"],
  "circuit-maroc-marrakech-atlas-sahara": ["maroc"],
  "circuit-canada-rocheuses-quebec": ["canada"],
  "croisiere-mediterranee-rome-barcelone": ["rome", "italie", "espagne"],
  "croisiere-fjords-norvegiens": ["norvege"],
  "croisiere-caraibes-antilles": ["antilles-francaises", "republique-dominicaine"],
  "croisiere-fluviale-europe": ["france", "autriche", "portugal"],
  "plus-belles-iles-grecques": ["grece", "santorin", "crete"],
  // Sélections transversales : les destinations que l'article met en avant
  "plus-belles-plages-ocean-indien": [
    "maldives",
    "seychelles",
    "ile-maurice",
    "la-reunion",
    "zanzibar",
  ],
  "ou-voir-aurores-boreales": ["laponie", "islande", "norvege", "finlande"],
  "meilleures-destinations-safari": [
    "kenya",
    "tanzanie",
    "afrique-du-sud",
    "botswana",
  ],
  "plus-beaux-deserts-du-monde": ["namibie", "maroc", "chili", "bolivie"],
  "plus-belles-iles-du-monde": ["polynesie", "maldives", "seychelles", "bali"],
  "plus-belles-plages-d-europe": ["grece", "portugal", "croatie", "italie"],
  "plus-beaux-road-trips-du-monde": [
    "islande",
    "ecosse",
    "nouvelle-zelande",
    "australie",
  ],
  "meilleures-destinations-plongee": ["maldives", "philippines", "indonesie"],
  "destinations-plongee-debutant": ["egypte", "maldives", "philippines"],
  "plus-beaux-sites-unesco": [
    "perou",
    "inde",
    "egypte",
    "cambodge",
    "guatemala",
  ],
  "plus-belles-cascades-du-monde": ["bresil", "argentine", "islande"],
  "voyage-gastronomique-destinations": [
    "italie",
    "japon",
    "vietnam",
    "coree-du-sud",
    "chine",
  ],
  "vacances-au-ski-hors-alpes": ["norvege", "suede", "finlande"],
  "ou-partir-au-soleil-en-hiver": ["cap-vert", "thailande", "senegal"],
  "ou-partir-pas-cher-en-europe": ["portugal", "grece", "croatie", "slovenie"],
  "city-break-europe-hors-saison": [
    "portugal",
    "italie",
    "pays-bas",
    "londres",
    "amsterdam",
    "venise",
    "porto",
    "royaume-uni",
    "danemark",
  ],
  "iles-paradisiaques-pas-cher": [
    "cap-vert",
    "philippines",
    "indonesie",
    "jamaique",
    "bahamas",
  ],
  "destinations-voyage-aventure": ["namibie", "nouvelle-zelande", "patagonie"],
  "voyage-solo-femme-destinations": ["islande", "portugal", "vietnam"],
  "lune-de-miel-destination": ["maldives", "polynesie", "seychelles"],
  "decouvrir-destination-en-train": ["suisse", "autriche", "italie"],
  "slow-travel-guide": ["laos", "malaisie", "slovenie"],
  "voyage-famille-astuces": ["canada", "espagne", "italie"],
  "partir-en-amoureux-week-end": ["venise", "amsterdam", "porto"],
  "voyage-bien-etre-spa": ["japon", "inde", "indonesie"],
  "croisiere-premiere-fois-conseils": ["grece", "italie", "norvege"],
  "voyage-avec-ados-idees": ["costa-rica", "islande", "afrique-du-sud"],
  "voyage-photo-plus-beaux-spots": ["namibie", "islande", "patagonie"],
  "vacances-nature-deconnexion": ["suede", "finlande", "slovenie"],
  "voyage-responsable-ecotourisme": ["costa-rica", "botswana", "slovenie"],
  "road-trip-ouest-americain": ["canada"],
  // Calendrier « où partir en <mois> » : les destinations de saison citées.
  "ou-partir-en-janvier": ["thailande", "cap-vert", "laponie"],
  "ou-partir-en-fevrier": ["senegal", "republique-dominicaine", "laponie"],
  "ou-partir-en-mars": ["japon", "maroc", "egypte"],
  "ou-partir-en-avril": ["japon", "grece", "crete"],
  "ou-partir-en-mai": ["italie", "croatie", "portugal"],
  "ou-partir-en-juin": ["norvege", "islande", "suede"],
  "ou-partir-en-juillet": ["canada", "ecosse", "slovenie"],
  "ou-partir-en-aout": ["indonesie", "perou", "botswana"],
  "ou-partir-en-septembre": ["grece", "italie", "coree-du-sud"],
  "ou-partir-en-octobre": ["maroc", "portugal", "chine"],
  "ou-partir-en-novembre": ["inde", "vietnam", "laos"],
  "ou-partir-en-decembre": ["laponie", "ile-maurice", "malaisie"],
};

/** Découpe un slug en segments comparables (« sri-lanka » → ["sri","lanka"]). */
function tokens(slug: string): string[] {
  return slug.split("-").filter(Boolean);
}

/** Les segments de `needle` apparaissent-ils consécutivement dans `haystack` ? */
function containsSequence(haystack: string[], needle: string[]): boolean {
  if (needle.length === 0 || needle.length > haystack.length) return false;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle.every((part, j) => haystack[i + j] === part)) return true;
  }
  return false;
}

/**
 * Destinations traitées par un article : celles dont le slug apparaît dans
 * celui de l'article, plus les rattachements déclarés ci-dessus.
 *
 * La comparaison porte sur des segments entiers, pas sur des sous-chaînes :
 * « inde » ne doit pas être reconnu dans « independant ».
 */
function computeDestinations(articleSlug: string): string[] {
  const parts = tokens(articleSlug);
  const found = LINKABLE_DESTINATIONS.filter((d) =>
    containsSequence(parts, tokens(d.slug)),
  ).map((d) => d.slug);
  const declared = ARTICLE_DESTINATIONS[articleSlug] ?? [];
  return [...new Set([...found, ...declared])].filter((slug) =>
    DESTINATION_BY_SLUG.has(slug),
  );
}

/** slug d'article → slugs de destination. */
const DESTINATIONS_BY_ARTICLE = new Map<string, string[]>(
  BLOG_META.map((a) => [a.slug, computeDestinations(a.slug)]),
);

/** slug de destination → articles qui la traitent, dans l'ordre de la grille. */
const ARTICLES_BY_DESTINATION = (() => {
  const map = new Map<string, BlogMeta[]>();
  for (const article of BLOG_META) {
    for (const slug of DESTINATIONS_BY_ARTICLE.get(article.slug) ?? []) {
      const list = map.get(slug) ?? [];
      list.push(article);
      map.set(slug, list);
    }
  }
  return map;
})();

/** Destinations citées par un article, prêtes à être liées. */
export function destinationsForArticle(
  articleSlug: string,
): LinkableDestination[] {
  return (DESTINATIONS_BY_ARTICLE.get(articleSlug) ?? [])
    .map((slug) => DESTINATION_BY_SLUG.get(slug))
    .filter((d): d is LinkableDestination => Boolean(d));
}

/** Articles traitant d'une destination (`limit` = 0 pour tout renvoyer). */
export function articlesForDestination(
  destinationSlug: string,
  limit = 0,
): BlogMeta[] {
  const list = ARTICLES_BY_DESTINATION.get(destinationSlug) ?? [];
  return limit > 0 ? list.slice(0, limit) : list;
}

/**
 * Articles à proposer en fin de lecture, par proximité décroissante :
 * destination commune d'abord, puis même catégorie, puis suite de la liste
 * pour qu'aucun article ne reste sans suggestions.
 */
export function relatedArticles(articleSlug: string, limit = 3): BlogMeta[] {
  const current = BLOG_META.find((a) => a.slug === articleSlug);
  if (!current) return [];

  const picked: BlogMeta[] = [];
  const seen = new Set([articleSlug]);
  const take = (candidates: BlogMeta[]) => {
    for (const candidate of candidates) {
      if (picked.length >= limit) return;
      if (seen.has(candidate.slug)) continue;
      seen.add(candidate.slug);
      picked.push(candidate);
    }
  };

  const destinations = DESTINATIONS_BY_ARTICLE.get(articleSlug) ?? [];
  for (const slug of destinations) {
    take(ARTICLES_BY_DESTINATION.get(slug) ?? []);
  }
  take(BLOG_META.filter((a) => a.category === current.category));

  // Dernier recours : on repart de l'article courant dans l'ordre de la grille,
  // ce qui évite que les mêmes articles de tête soient suggérés partout.
  const start = BLOG_META.findIndex((a) => a.slug === articleSlug);
  take([...BLOG_META.slice(start + 1), ...BLOG_META.slice(0, start)]);

  return picked;
}
