import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlightCursor from "@/components/FlightCursor";
import BackToTop from "@/components/BackToTop";

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
  metadataBase: new URL("https://www.cta-voyages.com"),
  title: {
    default: "CTA Voyages - 30 ans d'expertise en voyages sur mesure",
    template: "%s | CTA Voyages",
  },
  description:
    "CTA Voyages, agence de voyages sur mesure à Toulouse. Séjours, circuits, croisières, glamping, catalogue sportif et voyages à la carte. Devis gratuit, conseiller dédié.",
  icons: {
    icon: "/assets/images/Logo CTA Voyages.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "CTA Voyages",
    locale: "fr_FR",
    url: "/",
    title: "CTA Voyages - 30 ans d'expertise en voyages sur mesure",
    description:
      "Agence de voyages sur mesure à Toulouse. Séjours, circuits, croisières, glamping, catalogue sportif et voyages à la carte.",
    images: [
      {
        url: "/assets/images/iStock-2207441086.jpg",
        width: 1200,
        height: 630,
        alt: "CTA Voyages — Agence de voyages sur mesure à Toulouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTA Voyages - 30 ans d'expertise en voyages sur mesure",
    description:
      "Agence de voyages sur mesure à Toulouse. Séjours, circuits, croisières, glamping, catalogue sportif et voyages à la carte.",
    images: ["/assets/images/iStock-2207441086.jpg"],
  },
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
        {/* Material Symbols (police d'icônes) — chargée comme dans l'original */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md">
        <Header />
        {children}
        <Footer />
        <FlightCursor />
        <BackToTop />
      </body>
    </html>
  );
}
