import type { ReactNode } from "react";
import { Icon } from "@/components/destination/FaqList";
import type { FaqEntry } from "./types";

/**
 * Blocs de FAQ communs à toutes les fiches destination.
 *
 * Quatre questions reviennent à l'identique sur chaque fiche (formules, budget,
 * hébergements, demande de devis) : elles sont construites ici à partir des
 * seuls éléments qui changent d'un pays à l'autre. Les questions réellement
 * spécifiques (saison, formalités, transport sur place…) restent rédigées dans
 * le fichier de la destination.
 *
 * `label` = complément de lieu accordé, tel qu'il s'écrit dans une phrase :
 * « au Cambodge », « en Argentine », « aux Bahamas », « au Royaume-Uni ».
 */

/** Liste à puces cochées, format commun aux réponses de FAQ. */
export function checklist(items: ReactNode[]) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** « Quels types de voyages proposez-vous <label> ? » */
export function faqFormules(label: string, items: ReactNode[]): FaqEntry {
  return {
    question: <>Quels types de voyages proposez-vous {label}&nbsp;?</>,
    answer: (
      <>
        <p>CTA Voyages propose l&apos;ensemble de ses formules {label}&nbsp;:</p>
        {checklist(items)}
      </>
    ),
  };
}

/** « Peut-on personnaliser entièrement l'itinéraire ? » */
export function faqPersonnalisation(items: ReactNode[]): FaqEntry {
  return {
    question: <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>,
    answer: (
      <>
        <p>
          <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
          choisissez&nbsp;:
        </p>
        {checklist(items)}
        <p>
          Votre conseiller dédié construit le programme avec vous, étape par
          étape, jusqu&apos;à ce qu&apos;il vous corresponde parfaitement.
        </p>
      </>
    ),
  };
}

/** « Quels hébergements proposez-vous <label> ? » */
export function faqHebergements(label: string, items: ReactNode[]): FaqEntry {
  return {
    question: <>Quels hébergements proposez-vous {label}&nbsp;?</>,
    answer: (
      <>
        <p>Nous sélectionnons les hébergements selon vos préférences&nbsp;:</p>
        {checklist(items)}
      </>
    ),
  };
}

/** « Combien coûte un voyage <label> ? » — facteurs de budget communs. */
export function faqBudget(label: string, extra?: ReactNode): FaqEntry {
  return {
    question: <>Combien coûte un voyage {label}&nbsp;?</>,
    answer: (
      <>
        <p>Le budget dépend de plusieurs facteurs&nbsp;:</p>
        {checklist([
          "La durée du séjour",
          "La période de départ",
          extra ?? "Les régions visitées et les trajets internes",
          "Le niveau d'hébergement souhaité",
          "Les activités et prestations incluses",
        ])}
        <p>
          Pour obtenir une estimation,{" "}
          <a href="/demande-devis">contactez-nous</a>. Nos conseillers vous
          adressent une proposition personnalisée, gratuite et sans engagement.
        </p>
      </>
    ),
  };
}

/** « Comment demander un devis ? » */
export function faqDevis(): FaqEntry {
  return {
    question: <>Comment demander un devis&nbsp;?</>,
    answer: (
      <>
        <p>C&apos;est simple, rapide et gratuit&nbsp;:</p>
        <ul>
          <li>
            <Icon name="description" />
            Via notre <strong>formulaire en ligne</strong>.
          </li>
          <li>
            <Icon name="call" />
            Par téléphone&nbsp;: <strong>+33 (0)5 34 391 391</strong>
          </li>
          <li>
            <Icon name="mail" />
            Par email&nbsp;: <strong>voyages@cta-events.com</strong>
          </li>
        </ul>
        <p>
          Nos conseillers vous répondent <strong>sous 48h</strong>, gratuitement
          et sans engagement.
        </p>
      </>
    ),
  };
}

/** Encadré « itinéraire indicatif » sous la carte au trésor. */
export function itineraryDisclaimer(extra: ReactNode): ReactNode {
  return (
    <>
      <strong>Itinéraire indicatif.</strong> Cet exemple est proposé pour vous
      inspirer. Votre conseiller CTA Voyages adaptera chaque étape selon vos
      envies, votre rythme et votre budget. {extra}
    </>
  );
}

/** Les quatre entrées JSON-LD correspondant aux FAQ communes ci-dessus. */
export function jsonLdCommon(
  label: string,
  formules: string,
  hebergements: string,
): { question: string; answer: string }[] {
  const lieu = label.replace(/\s+/g, " ").trim();
  return [
    {
      question: `Quels types de voyages proposez-vous ${lieu} ?`,
      answer: `CTA Voyages propose ${formules}`,
    },
    {
      question: `Peut-on personnaliser entièrement un voyage ${lieu} ?`,
      answer:
        "Oui, absolument. Nos conseillers construisent votre programme étape par étape selon vos envies, votre rythme, vos hébergements et votre budget.",
    },
    {
      question: `Quels hébergements proposez-vous ${lieu} ?`,
      answer: hebergements,
    },
    {
      question: `Comment demander un devis pour un voyage ${lieu} ?`,
      answer:
        "Via notre formulaire en ligne, par téléphone au +33 (0)5 34 391 391 ou par email à voyages@cta-events.com. Réponse sous 48h, gratuitement et sans engagement.",
    },
  ];
}
