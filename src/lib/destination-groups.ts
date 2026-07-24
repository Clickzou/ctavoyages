/**
 * Regroupement pays → villes / régions rattachées.
 *
 * Les listes publiques (carte monde et grille de la page Destinations) ne
 * présentent que des PAYS. Les fiches de villes ou de régions restent en ligne
 * (leur URL et leur référencement sont préservés) mais ne génèrent ni marqueur,
 * ni carte, ni bouton de filtre : on y accède depuis la fiche de leur pays,
 * via le bloc « Villes & régions ».
 *
 * Clé = slug du pays, valeurs = slugs des fiches rattachées.
 */
export const COUNTRY_CITIES: Record<string, string[]> = {
  "royaume-uni": ["londres", "ecosse"],
  "pays-bas": ["amsterdam"],
  finlande: ["laponie"],
  grece: ["santorin", "crete"],
  italie: ["venise", "rome"],
  portugal: ["porto", "acores"],
  indonesie: ["bali"],
  argentine: ["patagonie"],
};

/** Slugs rattachés à un pays : exclus des marqueurs, cartes et filtres. */
export const CHILD_CITY_IDS = new Set<string>(
  Object.values(COUNTRY_CITIES).flat(),
);
