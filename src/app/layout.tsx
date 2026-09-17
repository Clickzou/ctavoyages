import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlightCursor from "@/components/FlightCursor";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import IconFontReady from "@/components/IconFontReady";
import CookieConsent from "@/components/CookieConsent";
import { AGENCE, HORAIRES, MAPS_URL, ZONE_DESSERVIE } from "@/lib/agence";
import { SITE_URL } from "@/lib/site";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cta-voyages.com"),
  title: {
    default: "CTA Voyages - 30 ans d'expertise en voyages sur mesure",
    template: "%s | CTA Voyages",
  },
  description:
    "CTA Voyages, agence de voyages sur mesure à Toulouse. Séjours, circuits, croisières, glamping et catalogue sportif. Devis gratuit, conseiller dédié.",
  icons: {
    icon: "/assets/images/favicon-cta-voyages.png",
    shortcut: "/assets/images/favicon-cta-voyages.png",
    apple: "/assets/images/favicon-cta-voyages.png",
  },
  // Pas de `alternates.canonical` ni de `openGraph.url` ici : les métadonnées
  // sont fusionnées à plat, si bien qu'un champ défini dans ce layout est
  // hérité par toutes les pages qui ne le redéfinissent pas. Une canonique
  // posée ici désignerait donc l'accueil depuis n'importe quelle page. Chaque
  // page déclare la sienne.
  // openGraph et twitter ne fixent volontairement ni title ni description :
  // faute de valeur ici, Next reprend celles de chaque page, si bien qu'un
  // partage sur les réseaux affiche le titre de la page partagée. Les y
  // déclarer les figerait sur toutes les pages du site.
  openGraph: {
    type: "website",
    siteName: "CTA Voyages",
    locale: "fr_FR",
    images: [
      {
        url: "/assets/images/iStock-2207441086.jpg",
        width: 1200,
        height: 630,
        alt: "CTA Voyages : Agence de voyages sur mesure à Toulouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/iStock-2207441086.jpg"],
  },
};

/**
 * Fiche d'entreprise, servie sur toutes les pages : elle donne à Google
 * l'identité, l'adresse et les horaires de l'agence, ce qui alimente le
 * référencement local et le panneau de connaissance. Les pages qui portent
 * déjà un balisage FAQPage ou Article s'y ajoutent sans conflit.
 *
 * L'`@id` sert d'ancre stable : les autres balisages du site (la page de
 * contact, notamment) désignent l'agence par cet identifiant plutôt que d'en
 * redéclarer une copie, ce qui éviterait à Google d'avoir à recouper deux
 * fiches quasi identiques.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#agence`,
  name: AGENCE.name,
  legalName: AGENCE.legalName,
  description:
    "Agence de voyages sur mesure à Toulouse : séjours, circuits, croisières, glamping et catalogue sportif.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/Logo%20CTA%20Voyages.png`,
  image: `${SITE_URL}/assets/images/iStock-2207441086.jpg`,
  telephone: AGENCE.phone,
  email: AGENCE.email,
  // Ordre de grandeur tarifaire attendu par Google pour les établissements
  // locaux. Sur du voyage sur mesure, aucun tarif fixe n'a de sens : l'échelle
  // reste volontairement large.
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: AGENCE.streetAddress,
    postalCode: AGENCE.postalCode,
    addressLocality: AGENCE.city,
    addressRegion: AGENCE.region,
    addressCountry: AGENCE.country,
  },
  // Coordonnées et lien de carte : ils permettent à Google de rapprocher
  // explicitement le site du point porté par la fiche Business Profile.
  geo: {
    "@type": "GeoCoordinates",
    latitude: AGENCE.geo.latitude,
    longitude: AGENCE.geo.longitude,
  },
  hasMap: MAPS_URL,
  // Communes et départements où l'agence intervient sans y avoir d'adresse.
  areaServed: ZONE_DESSERVIE.map((name) => ({ "@type": "Place", name })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Renseignements et devis",
    telephone: AGENCE.phone,
    email: AGENCE.email,
    availableLanguage: ["French"],
    areaServed: AGENCE.country,
  },
  openingHoursSpecification: HORAIRES.filter((h) => h.opens && h.closes).map(
    (h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }),
  ),
  // Profils tiers qui décrivent la même entité. La fiche Google Business
  // Profile a sa place ici : c'est le signal le plus direct entre le site et
  // elle.
  sameAs: ["https://www.linkedin.com/company/cta-voyages", MAPS_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${heading.variable} ${body.variable}`}
    >
      <head>
        {/* Material Symbols (police d'icônes) : display=block pour éviter le flash
            du texte des ligatures pendant le chargement. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
        <IconFontReady />
        <FlightCursor />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
