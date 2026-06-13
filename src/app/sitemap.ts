import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/destinations";

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
    "/destination-japon",
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

  const destinationRoutes = getAllSlugs().map((slug) => `/destination/${slug}`);

  return [...staticRoutes, ...destinationRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
