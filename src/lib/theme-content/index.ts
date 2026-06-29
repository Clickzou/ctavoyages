import type { ThemeContent } from "./types";
import sejourBalneaire from "./sejour-balneaire";
import escapadeUrbaine from "./escapade-urbaine";
import nature from "./nature";
import romantique from "./romantique";
import famille from "./famille";
import culturel from "./culturel";

/**
 * Registre des pages « thème » (gabarit ThemeTemplate).
 * Clé = slug → page servie sur /sejours/<slug>.
 */
export const THEME_CONTENT: Record<string, ThemeContent> = {
  balneaire: sejourBalneaire,
  "escapade-urbaine": escapadeUrbaine,
  nature,
  romantique,
  famille,
  culturel,
};

/** Slugs disposant d'une page thème dédiée. */
export const THEME_SLUGS = Object.keys(THEME_CONTENT);

export function getThemeContent(slug: string): ThemeContent | undefined {
  return THEME_CONTENT[slug];
}

export type { ThemeContent } from "./types";
