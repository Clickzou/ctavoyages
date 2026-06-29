import type { DestinationContent } from "./types";
import japon from "./japon";
import thailande from "./thailande";
import islande from "./islande";
import france from "./france";
import grece from "./grece";
import egypte from "./egypte";
import perou from "./perou";
import italie from "./italie";
import maldives from "./maldives";
import maroc from "./maroc";
import ileMaurice from "./ile-maurice";
import croatie from "./croatie";
import rome from "./rome";
import londres from "./londres";
import porto from "./porto";
import amsterdam from "./amsterdam";
import canada from "./canada";
import costaRica from "./costa-rica";
import laponie from "./laponie";
import seychelles from "./seychelles";
import zanzibar from "./zanzibar";
import santorin from "./santorin";
import bali from "./bali";
import vietnam from "./vietnam";
import sriLanka from "./sri-lanka";
import kenya from "./kenya";
import tanzanie from "./tanzanie";
import afriqueDuSud from "./afrique-du-sud";
import namibie from "./namibie";
import jordanie from "./jordanie";
import dubai from "./dubai";
import norvege from "./norvege";
import ecosse from "./ecosse";
import crete from "./crete";
import venise from "./venise";
import espagne from "./espagne";
import portugal from "./portugal";
import inde from "./inde";
import madagascar from "./madagascar";
import laReunion from "./la-reunion";
import oman from "./oman";
import botswana from "./botswana";
import slovenie from "./slovenie";
import ouzbekistan from "./ouzbekistan";
import mongolie from "./mongolie";
import patagonie from "./patagonie";
import floride from "./floride";
import republiqueDominicaine from "./republique-dominicaine";
import polynesie from "./polynesie";
import nouvelleZelande from "./nouvelle-zelande";
import suede from "./suede";
import acores from "./acores";
import australie from "./australie";

/**
 * Registre des fiches destination « riches » (template complet avec itinéraire).
 * Clé = slug → page servie sur /destination/<slug> (japon/thailande sur /destination-<slug>).
 */
export const DESTINATION_CONTENT: Record<string, DestinationContent> = {
  japon,
  thailande,
  islande,
  france,
  grece,
  egypte,
  perou,
  italie,
  maldives,
  maroc,
  "ile-maurice": ileMaurice,
  croatie,
  rome,
  londres,
  porto,
  amsterdam,
  canada,
  "costa-rica": costaRica,
  laponie,
  seychelles,
  zanzibar,
  santorin,
  bali,
  vietnam,
  "sri-lanka": sriLanka,
  kenya,
  tanzanie,
  "afrique-du-sud": afriqueDuSud,
  namibie,
  jordanie,
  dubai,
  norvege,
  ecosse,
  crete,
  venise,
  espagne,
  portugal,
  inde,
  madagascar,
  "la-reunion": laReunion,
  oman,
  botswana,
  slovenie,
  ouzbekistan,
  mongolie,
  patagonie,
  floride,
  "republique-dominicaine": republiqueDominicaine,
  polynesie,
  "nouvelle-zelande": nouvelleZelande,
  suede,
  acores,
  australie,
};

/** Slugs disposant d'une fiche riche dédiée. */
export const RICH_DESTINATION_SLUGS = Object.keys(DESTINATION_CONTENT);

export function getDestinationContent(
  slug: string,
): DestinationContent | undefined {
  return DESTINATION_CONTENT[slug];
}

export type { DestinationContent } from "./types";
