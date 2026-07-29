import { BLOG_META } from "./meta.generated";

/**
 * Nombre d'articles par page de la grille /blog.
 *
 * Défini ici plutôt que dans `BlogGrid` : ce composant porte `"use client"`, et
 * une constante importée depuis un module client par un composant serveur n'est
 * pas garantie d'y être évaluée. Le sitemap, le plan du site et
 * `generateStaticParams` en dépendent — une valeur fausse leur ferait manquer
 * les pages 2 et suivantes.
 */
export const ARTICLES_PER_PAGE = 12;

/** Nombre de pages de la grille /blog. */
export const BLOG_TOTAL_PAGES = Math.max(
  1,
  Math.ceil(BLOG_META.length / ARTICLES_PER_PAGE),
);
