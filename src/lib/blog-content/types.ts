import type { ReactNode } from "react";

/** Section d'un article : sous-titre + corps (JSX) + image optionnelle. */
export type ArticleSection = {
  h2: string;
  body: ReactNode;
  img?: string;
  imgAlt?: string;
};

/**
 * Modèle de contenu d'un article de blog (piloté par données, rendu par le
 * gabarit de la route /blog/[slug]). Pour ajouter un article : dupliquer un
 * fichier de contenu et l'enregistrer dans index.ts.
 */
export type BlogArticle = {
  /** Identifiant d'URL : article servi sur /blog/<slug>. */
  slug: string;
  category: string;
  /** Date affichée, ex. "Juin 2026". */
  date: string;
  /** Temps de lecture estimé, ex. "5 min". */
  readingTime: string;
  meta: { title: string; description: string };
  title: string;
  /** Chapô / accroche affiché sous le titre. */
  excerpt: string;
  heroImg: string;
  heroAlt: string;
  intro: ReactNode;
  sections: ArticleSection[];
  conclusion: ReactNode;
  /**
   * FAQ de fin d'article (SEO). Réponses en texte simple pour alimenter à la
   * fois l'affichage et le balisage JSON-LD FAQPage.
   */
  faq?: { q: string; a: string }[];
};
