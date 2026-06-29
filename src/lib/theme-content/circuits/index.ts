import type { ThemeContent } from "../types";
import individuel from "./individuel";
import accompagne from "./accompagne";
import petitGroupe from "./petit-groupe";
import roadTrip from "./road-trip";
import culturel from "./culturel";
import nature from "./nature";

/** Pages thème de l'offre Circuits. Clé = slug → /circuits/<slug>. */
export const CIRCUITS_THEMES: Record<string, ThemeContent> = {
  individuel,
  accompagne,
  "petit-groupe": petitGroupe,
  "road-trip": roadTrip,
  culturel,
  nature,
};

export const CIRCUIT_THEME_SLUGS = Object.keys(CIRCUITS_THEMES);
