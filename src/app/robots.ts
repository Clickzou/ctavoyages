import type { MetadataRoute } from "next";

const BASE_URL = "https://www.cta-voyages.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/merci"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
