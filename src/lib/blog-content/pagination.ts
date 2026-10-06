import { articlesPublies } from "./publication";

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

/**
 * Nombre de pages de la grille /blog, calculé sur les seuls articles publiés
 * à l'instant de l'appel (publication programmée) : une fonction et non une
 * constante, pour qu'un article qui paraît à sa date ajoute sa page sans
 * redéploiement.
 */
export function blogTotalPages(): number {
  return Math.max(1, Math.ceil(articlesPublies().length / ARTICLES_PER_PAGE));
}
