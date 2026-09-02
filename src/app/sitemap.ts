import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/destinations";
import { STATIC_RICH_SLUGS } from "@/lib/destination-content";
import { BLOG_SLUGS } from "@/lib/blog-content";
import { CIRCUIT_THEME_SLUGS } from "@/lib/theme-content/circuits";
import { CROISIERE_THEME_SLUGS } from "@/lib/theme-content/croisieres";
import { GLAMPING_THEME_SLUGS } from "@/lib/theme-content/glamping";
import { VSM_THEME_SLUGS } from "@/lib/theme-content/voyage-sur-mesure";
import { BLOG_TOTAL_PAGES } from "@/lib/blog-content/pagination";
import { SITE_URL as BASE_URL } from "@/lib/site";

/** Sous-pages de /sejours, servies par des routes statiques dédiées. */
const SEJOUR_THEMES = [
  "balneaire",
  "culturel",
  "escapade-urbaine",
  "famille",
  "nature",
  "romantique",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sejours",
    "/circuits",
    "/croisieres",
    "/glamping",
    "/voyage-sur-mesure",
    "/catalogue-sportif",
    "/destinations",
    "/blog",
    "/groupe-cta",
    "/engagements-rse",
    "/equipe",
    "/demande-devis",
    "/newsletter",
    "/boxing-day",
    "/f1",
    "/foot-europeen",
    "/motogp",
    "/nba",
    "/nfl",
    "/rugby",
    "/plan-du-site",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
  ];

  // Pages thématiques rattachées à chaque univers de voyage.
  const themeRoutes = [
    ...SEJOUR_THEMES.map((s) => `/sejours/${s}`),
    ...CIRCUIT_THEME_SLUGS.map((s) => `/circuits/${s}`),
    ...CROISIERE_THEME_SLUGS.map((s) => `/croisieres/${s}`),
    ...GLAMPING_THEME_SLUGS.map((s) => `/glamping/${s}`),
    ...VSM_THEME_SLUGS.map((s) => `/voyage-sur-mesure/${s}`),
  ];

  const blogRoutes = BLOG_SLUGS.map((slug) => `/blog/${slug}`);

  // Pages 2+ de la grille : la page 1 est déjà déclarée sous /blog.
  const blogPageRoutes = Array.from(
    { length: BLOG_TOTAL_PAGES - 1 },
    (_, i) => `/blog/page/${i + 2}`,
  );

  // Seuls japon et thailande ont une page dédiée /destination-<slug>.
  const richRoutes = STATIC_RICH_SLUGS.map((slug) => `/destination-${slug}`);

  // Toutes les autres fiches sont servies par la route /destination/<slug>,
  // qu'elles disposent ou non d'un contenu riche.
  const destinationRoutes = getAllSlugs()
    .filter((slug) => !STATIC_RICH_SLUGS.includes(slug))
    .map((slug) => `/destination/${slug}`);

  return [
    ...staticRoutes,
    ...themeRoutes,
    ...blogRoutes,
    ...blogPageRoutes,
    ...richRoutes,
    ...destinationRoutes,
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
