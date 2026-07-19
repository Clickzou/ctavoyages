import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
  async redirects() {
    return [
      {
        // Un seul formulaire de devis conservé : le multi-étapes (/demande-devis).
        // L'ancien formulaire simple redirige (308) pour préserver favoris et SEO.
        source: "/demande-renseignement",
        destination: "/demande-devis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
