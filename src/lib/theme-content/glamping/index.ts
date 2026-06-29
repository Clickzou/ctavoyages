import type { ThemeContent } from "../types";
import tenteLodge from "./tente-lodge";
import cabaneArbres from "./cabane-arbres";
import iglooArctique from "./igloo-arctique";
import bulle from "./bulle";
import lodgeSafari from "./lodge-safari";
import campementDesert from "./campement-desert";

/** Pages thème de l'offre Glamping. Clé = slug → /glamping/<slug>. */
export const GLAMPING_THEMES: Record<string, ThemeContent> = {
  "tente-lodge": tenteLodge,
  "cabane-arbres": cabaneArbres,
  "igloo-arctique": iglooArctique,
  bulle,
  "lodge-safari": lodgeSafari,
  "campement-desert": campementDesert,
};

export const GLAMPING_THEME_SLUGS = Object.keys(GLAMPING_THEMES);
