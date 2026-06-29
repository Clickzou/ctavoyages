import type { ThemeContent } from "../types";
import famille from "./famille";
import noces from "./noces";
import solo from "./solo";
import amis from "./amis";
import aventure from "./aventure";
import luxe from "./luxe";

/** Pages thème de l'offre Voyage sur mesure. Clé = slug → /voyage-sur-mesure/<slug>. */
export const VSM_THEMES: Record<string, ThemeContent> = {
  famille,
  noces,
  solo,
  amis,
  aventure,
  luxe,
};

export const VSM_THEME_SLUGS = Object.keys(VSM_THEMES);
