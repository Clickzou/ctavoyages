import { timingSafeEqual } from "crypto";

/**
 * Accès des routes /api/articles-programmes (tableau de bord client Clickzou).
 *
 * `Authorization: Bearer <TABLEAU_DE_BORD_CLE>` — la même valeur est posée côté
 * Clickzou (`CTAVOYAGES_TABLEAU_DE_BORD_CLE`). Clé absente ou de moins de 32
 * caractères : 503 (service non configuré), plutôt qu'une API ouverte par
 * oubli. Clé fausse ou absente de la requête : 401. Comparaison à temps
 * constant.
 */
export function controleTableauDeBord(requete: Request): 200 | 401 | 503 {
  const cle = process.env.TABLEAU_DE_BORD_CLE;
  if (!cle || cle.length < 32) return 503;
  const attendu = Buffer.from(`Bearer ${cle}`);
  const donne = Buffer.from(requete.headers.get("authorization") ?? "");
  return attendu.length === donne.length && timingSafeEqual(attendu, donne) ? 200 : 401;
}

/** En-têtes de toutes les réponses : jamais en cache, jamais indexées. */
export const ENTETES_TABLEAU_DE_BORD = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
} as const;
