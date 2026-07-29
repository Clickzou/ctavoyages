/**
 * Toutes les pages thématiques rattachées à une rubrique d'offre.
 *
 * Chacune n'avait jusqu'ici qu'un seul lien entrant, depuis le carrousel de sa
 * page parente. Ce recensement permet au plan du site de les lister toutes, et
 * évite d'énumérer les slugs à la main à chaque nouvel endroit qui les cite.
 */
import { CIRCUITS_THEMES } from "./theme-content/circuits";
import { CROISIERES_THEMES } from "./theme-content/croisieres";
import { GLAMPING_THEMES } from "./theme-content/glamping";
import { VSM_THEMES } from "./theme-content/voyage-sur-mesure";
import type { ThemeContent } from "./theme-content/types";

export type ThemeLink = { label: string; href: string };

export type ThemeGroup = {
  /** Libellé de la rubrique parente, ex. « Circuits ». */
  title: string;
  /** URL de la rubrique parente. */
  href: string;
  themes: ThemeLink[];
};

function toLinks(
  parentHref: string,
  themes: Record<string, ThemeContent>,
): ThemeLink[] {
  return Object.entries(themes).map(([slug, content]) => ({
    label: content.hero.label,
    href: `${parentHref}/${slug}`,
  }));
}

/**
 * Sous-pages de /sejours : servies par des routes statiques dédiées, elles
 * n'ont pas de contenu `ThemeContent` à parcourir.
 */
const SEJOUR_THEMES: ThemeLink[] = [
  { label: "Séjour balnéaire", href: "/sejours/balneaire" },
  { label: "Séjour culturel", href: "/sejours/culturel" },
  { label: "Escapade urbaine", href: "/sejours/escapade-urbaine" },
  { label: "Séjour en famille", href: "/sejours/famille" },
  { label: "Séjour nature", href: "/sejours/nature" },
  { label: "Séjour romantique", href: "/sejours/romantique" },
];

export const THEME_GROUPS: ThemeGroup[] = [
  { title: "Séjours", href: "/sejours", themes: SEJOUR_THEMES },
  {
    title: "Circuits",
    href: "/circuits",
    themes: toLinks("/circuits", CIRCUITS_THEMES),
  },
  {
    title: "Croisières",
    href: "/croisieres",
    themes: toLinks("/croisieres", CROISIERES_THEMES),
  },
  {
    title: "Glamping",
    href: "/glamping",
    themes: toLinks("/glamping", GLAMPING_THEMES),
  },
  {
    title: "Voyages sur mesure",
    href: "/voyage-sur-mesure",
    themes: toLinks("/voyage-sur-mesure", VSM_THEMES),
  },
];
