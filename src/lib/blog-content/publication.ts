import { BLOG_META, type BlogMeta } from "./meta.generated";

/**
 * Publication programmée des articles (demande de JC du 6 octobre 2026, modèle
 * Alps Ski Transfers).
 *
 * Un article dont la `datePublication` (AAAA-MM-JJ) n'est pas atteinte à
 * l'heure de Paris est invisible : 404 sur /blog/<slug>, absent de la grille du
 * blog, du sitemap, du plan du site et du maillage (articles liés, fiches
 * destination). Il paraît seul à sa date, sans redéploiement : ces pages se
 * régénèrent au plus toutes les heures (`revalidate = 3600`).
 *
 * C'est la SEULE porte d'entrée publique vers la liste des articles : ne jamais
 * lire `BLOG_META` ni `BLOG_ARTICLES` directement dans une page publique (seuls
 * l'aperçu signé et l'API du tableau de bord Clickzou le font, c'est leur rôle).
 */

/**
 * La date du jour à Paris, en AAAA-MM-JJ.
 *
 * Pas `new Date().toISOString()`, qui donne la date UTC : entre minuit et 1 h
 * (2 h en été) à Paris, un article daté du jour paraîtrait avec du retard. Le
 * format `en-CA` est précisément AAAA-MM-JJ.
 */
export function aujourdhuiParis(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

const PAR_SLUG = new Map(BLOG_META.map((a) => [a.slug, a]));

/** Métadonnées d'un article (publié ou non). */
export function metaArticle(slug: string): BlogMeta | undefined {
  return PAR_SLUG.get(slug);
}

/** Vrai si l'article existe et que sa date de publication est atteinte à Paris. */
export function estPublie(slug: string): boolean {
  const meta = PAR_SLUG.get(slug);
  return Boolean(meta && meta.datePublication <= aujourdhuiParis());
}

/** Les articles en ligne, dans l'ordre de la grille du blog (ordre du registre). */
export function articlesPublies(): BlogMeta[] {
  const jour = aujourdhuiParis();
  return BLOG_META.filter((a) => a.datePublication <= jour);
}
