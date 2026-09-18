import type { MetadataRoute } from "next";
import { SITE_URL as BASE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Aucun `disallow` : /merci est tenue hors de l'index par un `noindex`
    // (cf. src/app/merci/page.tsx). Interdire le crawl serait contre-productif,
    // Google ne pourrait plus lire ce `noindex` et risquerait d'indexer l'URL
    // seule, sans titre ni description.
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
