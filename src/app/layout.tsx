import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlightCursor from "@/components/FlightCursor";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import IconFontReady from "@/components/IconFontReady";

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
    "CTA Voyages, agence de voyages sur mesure à Toulouse. Séjours, circuits, croisières, glamping, catalogue sportif et voyages à la carte. Devis gratuit, conseiller dédié.",
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
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "CTA Voyages",
  description:
    "Agence de voyages sur mesure à Toulouse : séjours, circuits, croisières, glamping et catalogue sportif.",
  url: "https://cta-voyages.com",
  logo: "https://cta-voyages.com/assets/images/Logo%20CTA%20Voyages.png",
  image: "https://cta-voyages.com/assets/images/iStock-2207441086.jpg",
  telephone: "+33534391391",
  email: "voyages@cta-events.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "99 rue de Fenouillet",
    postalCode: "31200",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://www.linkedin.com/company/cta-voyages"],
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
      </body>
    </html>
  );
}
