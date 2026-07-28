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
import norvege from "./norvege";
import ecosse from "./ecosse";
import crete from "./crete";
import venise from "./venise";
import espagne from "./espagne";
import portugal from "./portugal";
import inde from "./inde";
import laReunion from "./la-reunion";
import botswana from "./botswana";
import slovenie from "./slovenie";
import patagonie from "./patagonie";
import republiqueDominicaine from "./republique-dominicaine";
import polynesie from "./polynesie";
import nouvelleZelande from "./nouvelle-zelande";
import suede from "./suede";
import acores from "./acores";
import australie from "./australie";
import royaumeUni from "./royaume-uni";
import paysBas from "./pays-bas";
import danemark from "./danemark";
import finlande from "./finlande";
import autriche from "./autriche";
import suisse from "./suisse";
import indonesie from "./indonesie";
import malaisie from "./malaisie";
import cambodge from "./cambodge";
import laos from "./laos";
import philippines from "./philippines";
import coreeDuSud from "./coree-du-sud";
import chine from "./chine";
import senegal from "./senegal";
import capVert from "./cap-vert";
import tunisie from "./tunisie";
import argentine from "./argentine";
import bresil from "./bresil";
import chili from "./chili";
import bolivie from "./bolivie";
import mexique from "./mexique";
import guatemala from "./guatemala";
import jamaique from "./jamaique";
import bahamas from "./bahamas";
import antillesFrancaises from "./antilles-francaises";

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
  norvege,
  ecosse,
  crete,
  venise,
  espagne,
  portugal,
  inde,
  "la-reunion": laReunion,
  botswana,
  slovenie,
  patagonie,
  "republique-dominicaine": republiqueDominicaine,
  polynesie,
  "nouvelle-zelande": nouvelleZelande,
  suede,
  acores,
  australie,
  "royaume-uni": royaumeUni,
  "pays-bas": paysBas,
  danemark,
  finlande,
  autriche,
  suisse,
  indonesie,
  malaisie,
  cambodge,
  laos,
  philippines,
  "coree-du-sud": coreeDuSud,
  chine,
  senegal,
  "cap-vert": capVert,
  tunisie,
  argentine,
  bresil,
  chili,
  bolivie,
  mexique,
  guatemala,
  jamaique,
  bahamas,
  "antilles-francaises": antillesFrancaises,
};

/** Slugs disposant d'une fiche riche dédiée. */
export const RICH_DESTINATION_SLUGS = Object.keys(DESTINATION_CONTENT);

export function getDestinationContent(
  slug: string,
): DestinationContent | undefined {
  return DESTINATION_CONTENT[slug];
}

export type { DestinationContent } from "./types";
