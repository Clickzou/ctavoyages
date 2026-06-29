import type { ThemeContent } from "../types";
import mediterranee from "./mediterranee";
import fjords from "./fjords";
import caraibes from "./caraibes";
import ilesGrecques from "./iles-grecques";
import oceanIndien from "./ocean-indien";
import fluviale from "./fluviale";

/** Pages thème de l'offre Croisières. Clé = slug → /croisieres/<slug>. */
export const CROISIERES_THEMES: Record<string, ThemeContent> = {
  mediterranee,
  fjords,
  caraibes,
  "iles-grecques": ilesGrecques,
  "ocean-indien": oceanIndien,
  fluviale,
};

export const CROISIERE_THEME_SLUGS = Object.keys(CROISIERES_THEMES);
