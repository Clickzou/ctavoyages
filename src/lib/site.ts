/**
 * Adresse canonique du site, sans `www` ni barre finale.
 *
 * Doit rester strictement identique au domaine de production déclaré dans
 * Vercel : une forme différente ferait pointer les canoniques, le sitemap et
 * les données structurées vers une URL redirigée.
 */
export const SITE_URL = "https://cta-voyages.com";

/** URL absolue à partir d'un chemin interne (`/blog` → `https://…/blog`). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
