import type { DestinationContent } from "./types";
import {
  checklist,
  faqBudget,
  faqDevis,
  faqFormules,
  faqHebergements,
  faqPersonnalisation,
  itineraryDisclaimer,
  jsonLdCommon,
} from "./_shared";

const argentine: DestinationContent = {
  slug: "argentine",
  meta: {
    title:
      "Voyage en Argentine : séjour, circuit et voyage sur mesure",
    description:
      "Organisez votre voyage en Argentine avec CTA Voyages. Buenos Aires et le tango, chutes d'Iguazú, glacier Perito Moreno et Patagonie, vignobles de Mendoza et Nord-Ouest andin. Circuit ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/argentine.jpg",
    imageAlt:
      "Massif du Fitz Roy en Patagonie argentine — Voyage en Argentine avec CTA Voyages",
    label: "Destination Argentine",
    h1: "Voyage en Argentine : tango, glaciers et grands espaces",
    description:
      "Grand tour d'Argentine, trek en Patagonie, route des vins de Mendoza ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~14h (direct)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-5h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Espagnol" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Peso argentin (ARS)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Octobre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Argentine, un pays long de 3 700 kilomètres",
    body: (
      <>
        Du tropique du Capricorne aux glaces australes, l&apos;Argentine étire
        son territoire sur plus de trois mille sept cents kilomètres, ce qui en
        fait l&apos;un des pays les plus divers de la planète.{" "}
        <strong>Buenos Aires</strong> ouvre le voyage&nbsp;: avenues haussmanniennes,
        cimetière de la Recoleta, façades bariolées de La Boca et milongas où le{" "}
        <strong>tango</strong> se danse jusqu&apos;au bout de la nuit. Au nord,
        les <strong>chutes d&apos;Iguazú</strong> déversent leurs 275 cascades
        dans un vacarme assourdissant, en pleine forêt subtropicale. À
        l&apos;ouest, <strong>Mendoza</strong> et ses vignobles de malbec
        s&apos;étendent au pied de l&apos;<strong>Aconcagua</strong>, plus haut
        sommet des Amériques. Au nord-ouest, <strong>Salta</strong>,{" "}
        <strong>Purmamarca</strong> et sa montagne aux sept couleurs déclinent
        des paysages andins irréels. Et tout au sud, la{" "}
        <strong>Patagonie</strong>&nbsp;: le glacier{" "}
        <strong>Perito Moreno</strong> qui vêle dans un fracas de tonnerre, les
        aiguilles du <strong>Fitz Roy</strong>, les estancias perdues dans la
        steppe. <strong>Grand circuit</strong>, <strong>trek</strong>,{" "}
        <strong>route des vins</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: tout se construit avec vous.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Argentine ?",
    cards: [
      {
        icon: "ac_unit",
        title: "Le glacier Perito Moreno",
        text: "Soixante mètres de glace bleue au-dessus de l'eau, et des blocs qui s'effondrent dans un fracas spectaculaire : l'un des rares glaciers encore en équilibre.",
        img: "/generated/argentine-1.jpg",
        alt: "Front bleuté du glacier Perito Moreno en Patagonie",
      },
      {
        icon: "nightlife",
        title: "Buenos Aires & le tango",
        text: "Une capitale élégante et théâtrale, entre librairies mythiques, parrillas, quartiers colorés et milongas où le tango se danse toute la nuit.",
        img: "/generated/argentine-2.jpg",
        alt: "Façades colorées et scène de tango dans un quartier de Buenos Aires",
      },
      {
        icon: "water_drop",
        title: "Les chutes d'Iguazú",
        text: "275 cascades réparties sur près de trois kilomètres, dominées par la Gorge du Diable : l'une des merveilles naturelles les plus impressionnantes du monde.",
        img: "/generated/argentine-3.jpg",
        alt: "Cascades d'Iguazú déversant leurs eaux dans la forêt tropicale",
      },
      {
        icon: "wine_bar",
        title: "Les vignobles de Mendoza",
        text: "Le malbec argentin cultivé jusqu'à 1 500 mètres d'altitude, avec les sommets andins en toile de fond et des bodegas ouvertes à la dégustation.",
        img: "/generated/argentine-4.jpg",
        alt: "Vignobles de Mendoza au pied de la cordillère des Andes",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Argentine",
    steps: [
      {
        id: "buenos-aires",
        label: "JOURS 1 À 3",
        title: "Buenos Aires, la reine du Plata",
        text: "Arrivée dans la capitale : San Telmo et son marché dominical, La Boca et Caminito, la Recoleta, puis une soirée tango dans une milonga authentique.",
        img: "/generated/argentine-2.jpg",
        alt: "Avenues et façades élégantes du centre de Buenos Aires",
        align: "left",
      },
      {
        id: "iguazu",
        label: "JOURS 4 ET 5",
        title: "Les chutes d'Iguazú",
        text: "Vol vers le nord subtropical : passerelles au plus près des cascades côté argentin, panorama d'ensemble côté brésilien et forêt peuplée de coatis et de toucans.",
        img: "/generated/argentine-3.jpg",
        alt: "Passerelles et cascades du parc national d'Iguazú",
        align: "right",
      },
      {
        id: "salta",
        label: "JOURS 6 À 8",
        title: "Salta & le Nord-Ouest andin",
        text: "Cap sur les Andes : la quebrada de Humahuaca, la montagne aux sept couleurs de Purmamarca, les cactus géants de Cachi et les vignobles d'altitude de Cafayate.",
        img: "/generated/argentine.jpg",
        alt: "Montagnes colorées et vallée andine du Nord-Ouest argentin",
        align: "left",
      },
      {
        id: "calafate",
        label: "JOURS 9 ET 10",
        title: "El Calafate & Perito Moreno",
        text: "Envol vers la Patagonie australe : passerelles face au front du glacier, navigation entre les icebergs et, pour les plus aventureux, minitrek sur la glace.",
        img: "/generated/argentine-1.jpg",
        alt: "Glacier Perito Moreno et icebergs flottant sur le lac Argentino",
        align: "right",
      },
      {
        id: "el-chalten",
        label: "JOURS 11 À 13",
        title: "El Chaltén & le Fitz Roy",
        text: "Fin du voyage dans la capitale argentine du trekking : randonnées vers la laguna de los Tres au pied du Fitz Roy, et nuit en estancia au milieu de la steppe.",
        img: "/generated/argentine-1.jpg",
        alt: "Aiguilles du Fitz Roy dominant la steppe patagonienne",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Ushuaia et le bout du monde, la péninsule Valdés et ses baleines, ou une
        extension au Chili voisin complètent facilement le programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Argentine",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Argentine&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Les saisons sont inversées par rapport à l&apos;Europe&nbsp;:
            </p>
            {checklist([
              <>
                <strong>D&apos;octobre à avril</strong>&nbsp;: l&apos;été austral,
                seule période où la Patagonie est pleinement accessible.
              </>,
              <>
                <strong>De mars à mai et de septembre à novembre</strong>&nbsp;:
                idéal pour Buenos Aires, le Nord-Ouest et Mendoza — les vendanges
                ont lieu en mars.
              </>,
              <>
                <strong>Iguazú</strong> se visite toute l&apos;année&nbsp;: le
                débit est maximal de décembre à mars.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour l&apos;Argentine&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont simples&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 90 jours.
              </>,
              <>
                <strong>Passeport valide</strong> pendant toute la durée du
                séjour.
              </>,
              <>
                Aucun vaccin obligatoire&nbsp;: prévoyez simplement une protection
                solaire élevée en altitude.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Argentine", [
        <>
          <strong>Grand tour</strong>&nbsp;: Buenos Aires, Iguazú, Salta et
          Patagonie en vols intérieurs.
        </>,
        <>
          <strong>Trek en Patagonie</strong>&nbsp;: El Chaltén, glaciers et
          estancias.
        </>,
        <>
          <strong>Route des vins</strong>&nbsp;: Mendoza, Cafayate et bodegas
          d&apos;altitude.
        </>,
        <>
          <strong>Combiné Argentine & Chili</strong>&nbsp;: les deux Patagonies
          en un seul voyage.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Nord-Ouest, Patagonie,
          Pampa, Terre de Feu.
        </>,
        <>
          Le <strong>niveau d&apos;activité</strong>&nbsp;: randonnées sportives
          ou découvertes contemplatives.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: cours de tango, asado en
          estancia, dégustation de malbec, navigation entre les icebergs.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Argentine",
        "Le nombre de vols intérieurs, indispensables vu les distances",
      ),
      {
        question: <>Combien de temps prévoir&nbsp;?</>,
        answer: (
          <>
            <p>
              Le pays est immense&nbsp;: il faut accepter de choisir.
            </p>
            {checklist([
              <>
                <strong>10 jours</strong>&nbsp;: Buenos Aires et la Patagonie
                australe, ou Buenos Aires et le Nord-Ouest.
              </>,
              <>
                <strong>15 jours</strong>&nbsp;: le grand tour classique, avec
                Iguazú en plus.
              </>,
              <>
                <strong>3 semaines</strong>&nbsp;: pour ajouter Ushuaia, la
                péninsule Valdés ou le Chili.
              </>,
            ])}
            <p>
              Nous conseillons un minimum de douze jours sur place compte tenu de
              la durée du vol.
            </p>
          </>
        ),
      },
      faqHebergements("en Argentine", [
        <>
          <strong>Hôtels de charme</strong> dans les quartiers historiques de
          Buenos Aires.
        </>,
        <>
          <strong>Estancias</strong> traditionnelles dans la Pampa et la steppe
          patagonienne.
        </>,
        <>
          <strong>Lodges de montagne</strong> à El Chaltén et El Calafate.
        </>,
        <>
          <strong>Bodegas avec chambres</strong> au milieu des vignes de Mendoza.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter l'Argentine ?",
        answer:
          "D'octobre à avril pendant l'été austral, seule période où la Patagonie est pleinement accessible. De mars à mai et de septembre à novembre pour Buenos Aires, le Nord-Ouest et Mendoza, les vendanges ayant lieu en mars. Iguazú se visite toute l'année.",
      },
      {
        question: "Faut-il un visa pour l'Argentine ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours, avec un passeport valide pendant toute la durée du séjour. Aucun vaccin n'est obligatoire.",
      },
      {
        question: "Combien de temps prévoir pour un voyage en Argentine ?",
        answer:
          "Comptez 10 jours pour Buenos Aires et la Patagonie ou le Nord-Ouest, 15 jours pour le grand tour classique avec Iguazú, et 3 semaines pour ajouter Ushuaia, la péninsule Valdés ou le Chili. Un minimum de douze jours sur place est conseillé.",
      },
      {
        question: "Combien coûte un voyage en Argentine ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, du nombre de vols intérieurs indispensables vu les distances, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "en Argentine",
        "des grands tours Buenos Aires-Iguazú-Salta-Patagonie, des treks en Patagonie, des routes des vins à Mendoza et Cafayate, des combinés Argentine-Chili et des voyages entièrement sur mesure.",
        "Hôtels de charme dans les quartiers historiques de Buenos Aires, estancias traditionnelles dans la Pampa et la steppe, lodges de montagne à El Chaltén et bodegas avec chambres à Mendoza.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Argentine, nous
        privilégions les estancias familiales, les guides de montagne locaux et
        les opérateurs respectueux des règles d&apos;approche des glaciers et de
        la faune australe, dans des écosystèmes patagoniens particulièrement
        sensibles.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Argentine commence ici",
    body: "Parlez-nous de votre projet. Grand tour d'Argentine, trek en Patagonie, route des vins de Mendoza ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default argentine;
