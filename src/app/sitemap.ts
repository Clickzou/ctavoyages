import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/destinations";
import { STATIC_RICH_SLUGS } from "@/lib/destination-content";

const BASE_URL = "https://cta-voyages.com";

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
    "/groupe-cta",
    "/engagements-rse",
    "/equipe",
    "/demande-devis",
    "/boxing-day",
    "/f1",
    "/foot-europeen",
    "/motogp",
    "/nba",
    "/nfl",
    "/rugby",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
  ];

  // Seuls japon et thailande ont une page dédiée /destination-<slug>.
  const richRoutes = STATIC_RICH_SLUGS.map((slug) => `/destination-${slug}`);

  // Toutes les autres fiches sont servies par la route /destination/<slug>,
  // qu'elles disposent ou non d'un contenu riche.
  const destinationRoutes = getAllSlugs()
    .filter((slug) => !STATIC_RICH_SLUGS.includes(slug))
    .map((slug) => `/destination/${slug}`);

  return [...staticRoutes, ...richRoutes, ...destinationRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
