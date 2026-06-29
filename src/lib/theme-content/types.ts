import type { ReactNode } from "react";
import type {
  WhyCard,
  FaqEntry,
  ItineraryStep,
} from "@/lib/destination-content/types";

/**
 * Contenu d'une page « thème » (ex. Séjour balnéaire), pilotée par données et
 * rendue par ThemeTemplate. Réutilise le layout riche validé des fiches
 * destination, sans le bandeau infos ni l'itinéraire « carte au trésor ».
 */
export type ThemeContent = {
  /** Identifiant d'URL : page servie sur <parentHref>/<slug>. */
  slug: string;
  /** Offre parente, ex. "Séjours". */
  parentLabel: string;
  /** Lien de l'offre parente, ex. "/sejours". */
  parentHref: string;
  meta: { title: string; description: string };
  hero: {
    image: string;
    imageAlt: string;
    /** Surtitre, ex. "Séjours". */
    label: string;
    h1: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  presentation: { eyebrow: string; h2: string; body: ReactNode };
  /** Destinations cohérentes avec le thème (carrousel « Nos destinations idéales »). */
  destinations: {
    href: string;
    img: string;
    alt: string;
    badge: string;
    name: string;
    desc: string;
  }[];
  why: { eyebrow: string; h2: string; cards: WhyCard[] };
  /** Section optionnelle : exemple de programme / itinéraire (carte au trésor). */
  itinerary?: {
    eyebrow: string;
    h2: string;
    intro?: string;
    steps: ItineraryStep[];
    disclaimer: ReactNode;
  };
  /** Section optionnelle : destinations confidentielles / hors des sentiers battus. */
  atypical?: {
    eyebrow: string;
    h2: string;
    intro?: string;
    cards: { img: string; alt: string; name: string; tag: string; text: string }[];
  };
  /** Section optionnelle : calendrier « quand partir ? » par destination. */
  whenToGo?: {
    eyebrow: string;
    h2: string;
    intro?: string;
    rows: {
      destination: string;
      /** 12 valeurs (janv. → déc.). */
      months: ("ideal" | "ok" | "avoid")[];
    }[];
  };
  faq: {
    eyebrow: string;
    h2: string;
    left: FaqEntry[];
    right: FaqEntry[];
    jsonLd: { question: string; answer: string }[];
  };
  /** Paragraphe RSE spécifique au thème. */
  rse: { body: ReactNode };
  ctaFinal: { h2: string; body: string };
};
