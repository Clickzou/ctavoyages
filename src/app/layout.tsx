import type { Metadata } from "next";
import { Nunito_Sans, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlightCursor from "@/components/FlightCursor";
import BackToTop from "@/components/BackToTop";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const roboto = Roboto_Flex({
  variable: "--font-roboto",
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
      className={`${nunito.variable} ${roboto.variable}`}
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
