/**
 * Coordonnées de l'agence : source unique pour la page de contact, le pied de
 * page et les données structurées.
 *
 * Ces valeurs doivent rester strictement identiques à celles de la fiche Google
 * Business Profile et des annuaires (le « NAP » : name, address, phone). Une
 * simple variation d'écriture — « 99 Rue de Fenouillet » au lieu de « 99 rue de
 * Fenouillet », un téléphone présenté autrement — affaiblit le rattachement
 * entre le site et la fiche, sur lequel repose le référencement local.
 */
export const AGENCE = {
  name: "CTA Voyages",
  /** Entité juridique qui exploite la marque (cf. mentions légales). */
  legalName: "CTA Events",
  streetAddress: "99 rue de Fenouillet",
  postalCode: "31200",
  city: "Toulouse",
  region: "Occitanie",
  country: "FR",
  /** Format international : seul accepté par schema.org et les liens `tel:`. */
  phone: "+33534391391",
  /** Écriture affichée, identique à celle de la fiche Google. */
  phoneDisplay: "05 34 39 13 91",
  email: "voyages@cta-events.com",
  /** Relevé sur OpenStreetMap pour le 99 rue de Fenouillet. */
  geo: { latitude: 43.6304774, longitude: 1.4235593 },
  /** Immatriculation au registre des opérateurs de voyages et de séjours. */
  atoutFrance: "IM031110034",
} as const;

/** Adresse sur une ligne, pour les libellés et les URL Maps. */
export const ADRESSE_COMPLETE = `${AGENCE.streetAddress}, ${AGENCE.postalCode} ${AGENCE.city}`;

/**
 * Horaires d'ouverture, partagés entre l'affichage et le balisage.
 * `days` reprend les valeurs attendues par schema.org ; une entrée sans
 * `opens`/`closes` est un jour de fermeture, affiché mais non balisé.
 */
export const HORAIRES: {
  label: string;
  days: string[];
  opens?: string;
  closes?: string;
}[] = [
  {
    label: "Lundi au jeudi",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:00",
    closes: "18:00",
  },
  { label: "Vendredi", days: ["Friday"], opens: "09:00", closes: "17:00" },
  { label: "Samedi et dimanche", days: ["Saturday", "Sunday"] },
];

/**
 * Lien vers la fiche de l'établissement sur Google.
 *
 * Lien de partage relevé dans Google Business Profile (bouton « Partager ») :
 * il ouvre la fiche complète (avis, photos, horaires) plutôt qu'un simple point
 * sur la carte, et désigne sans ambiguïté l'établissement dans le balisage.
 */
export const MAPS_URL = "https://share.google/AXPyINRUksj9rIVCh";

/** Itinéraire depuis la position du visiteur jusqu'à l'agence. */
export const ITINERAIRE_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADRESSE_COMPLETE,
)}`;

/**
 * Zone desservie, déclarée à l'identique sur la fiche Google. Du plus proche au
 * plus large : Google s'en sert pour rattacher l'établissement à des recherches
 * faites depuis les communes voisines, où l'agence n'a pas d'adresse.
 */
export const ZONE_DESSERVIE = [
  "Toulouse",
  "Blagnac",
  "Colomiers",
  "Balma",
  "L'Union",
  "Tournefeuille",
  "Muret",
  "Haute-Garonne",
  "Occitanie",
];
