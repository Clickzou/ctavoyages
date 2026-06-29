import type { ReactNode } from "react";

/**
 * Modèle de contenu d'une fiche destination « riche » (template validé sur le Japon).
 * Chaque destination = un fichier de contenu typé par `DestinationContent`.
 * La route est /destination-<slug> (ex. /destination-japon, /destination-thailande).
 */

/** Bandeau « Informations essentielles » : horloge (décalage) ou transport (vol/train). */
export type InfoZone =
  | {
      kind: "clock";
      label: string;
      value: string;
      /** Rotations CSS de l'animation horloge (ex. "2880deg" / "240deg"). */
      minuteRotation: string;
      hourRotation: string;
    }
  | {
      kind: "transport";
      /** Icône Material Symbols : "flight" (avion) ou "train". */
      icon: "flight" | "train";
      label: string;
      value: string;
    }
  | {
      kind: "fact";
      /** Icône Material Symbols (ex. "translate", "payments", "wb_sunny", "description"). */
      icon: string;
      label: string;
      value: string;
    };

/** Carte « Pourquoi voyager dans ce pays ? ». */
export type WhyCard = {
  /** Icône Material Symbols. */
  icon: string;
  title: string;
  text: string;
  img: string;
  alt: string;
};

/** Étape d'itinéraire : texte (colonne gauche) + image « carte au trésor » (colonne droite). */
export type ItineraryStep = {
  id: string;
  /** Ex. "JOURS 1 À 3". */
  label: string;
  title: string;
  text: string;
  img: string;
  alt: string;
  /** Position de l'image dans la carte au trésor. */
  align: "left" | "right";
  objectPosition?: string;
};

export type FaqEntry = { question: ReactNode; answer: ReactNode };

export type DestinationContent = {
  /** Identifiant d'URL : la page sera servie sur /destination-<slug>. */
  slug: string;
  meta: { title: string; description: string };
  hero: {
    image: string;
    imageAlt: string;
    /** Surtitre, ex. "Destination Japon". */
    label: string;
    h1: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  infos: InfoZone[];
  presentation: { eyebrow: string; h2: string; body: ReactNode };
  why: { eyebrow: string; h2: string; cards: WhyCard[] };
  itinerary: {
    eyebrow: string;
    h2: string;
    steps: ItineraryStep[];
    /** Encadré « itinéraire indicatif ». */
    disclaimer: ReactNode;
  };
  faq: {
    eyebrow: string;
    h2: string;
    left: FaqEntry[];
    right: FaqEntry[];
    /** Version texte pour le balisage JSON-LD (SEO). */
    jsonLd: { question: string; answer: string }[];
  };
  /** Paragraphe RSE spécifique au pays (le reste du bloc est commun). */
  rse: { body: ReactNode };
  ctaFinal: { h2: string; body: string };
};
