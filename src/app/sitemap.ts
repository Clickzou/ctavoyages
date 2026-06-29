import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/destinations";
import { RICH_DESTINATION_SLUGS } from "@/lib/destination-content";

const BASE_URL = "https://www.cta-voyages.com";

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
    "/demande-renseignement",
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

  // Fiches « riches » dédiées (template validé) : /destination-<slug>
  const richRoutes = RICH_DESTINATION_SLUGS.map((slug) => `/destination-${slug}`);

  // Anciennes fiches génériques, hors slugs déjà couverts par une fiche riche.
  const destinationRoutes = getAllSlugs()
    .filter((slug) => !RICH_DESTINATION_SLUGS.includes(slug))
    .map((slug) => `/destination/${slug}`);

  return [...staticRoutes, ...richRoutes, ...destinationRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
