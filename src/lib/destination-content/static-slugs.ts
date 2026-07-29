/**
 * Destinations servies par une route statique dédiée `/destination-<slug>`
 * plutôt que par `/destination/<slug>`.
 *
 * Isolé dans son propre module : `index.ts` importe les 70 fiches riches, et
 * les modules de maillage n'ont besoin que de cette liste pour construire une
 * URL canonique. L'importer depuis `index.ts` tirerait tout le contenu.
 */
export const STATIC_RICH_SLUGS = ["japon", "thailande"];
