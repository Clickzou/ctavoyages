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

const philippines: DestinationContent = {
  slug: "philippines",
  meta: {
    title:
      "Voyage aux Philippines : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage aux Philippines avec CTA Voyages. Lagons d'El Nido à Palawan, épaves de Coron, rizières de Banaue, collines de chocolat de Bohol et plages de Boracay. Island hopping ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/philippines.jpg",
    imageAlt:
      "Lagon turquoise et falaises karstiques d'El Nido à Palawan — Voyage aux Philippines avec CTA Voyages",
    label: "Destination Philippines",
    h1: "Voyage aux Philippines : lagons, rizières et 7 641 îles",
    description:
      "Island hopping à Palawan, séjour plongée, découverte des rizières du Nord ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~16h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+6h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Filipino, anglais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Peso philippin (PHP)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Novembre à mai",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Les Philippines, l'archipel encore préservé de l'Asie",
    body: (
      <>
        7 641 îles, dont un peu plus de deux mille seulement sont habitées&nbsp;:
        les Philippines offrent ce que l&apos;Asie du Sud-Est propose de plus
        spectaculaire en matière de paysages marins, sans l&apos;affluence de ses
        voisins. À <strong>Palawan</strong>, l&apos;archipel de Bacuit et les
        lagons d&apos;<strong>El Nido</strong> alignent des falaises calcaires
        surgissant d&apos;une eau émeraude&nbsp;; à <strong>Coron</strong>, une
        dizaine d&apos;épaves japonaises de la Seconde Guerre mondiale reposent
        par vingt mètres de fond. Au nord de Luzon, les{" "}
        <strong>rizières en terrasses de Banaue</strong>, sculptées à la main il
        y a deux mille ans, escaladent les montagnes des Cordillères. À{" "}
        <strong>Bohol</strong>, les collines de chocolat et les tarsiers,
        primates minuscules aux yeux immenses&nbsp;; à{" "}
        <strong>Siargao</strong>, les vagues et une atmosphère décontractée. Le
        tout porté par un peuple réputé comme l&apos;un des plus accueillants au
        monde. <strong>Island hopping</strong>,{" "}
        <strong>séjour plongée</strong>, <strong>voyage de noces</strong> ou{" "}
        <strong>itinéraire sur mesure</strong>&nbsp;: à vous de choisir.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Philippines ?",
    cards: [
      {
        icon: "sailing",
        title: "Les lagons d'El Nido",
        text: "Falaises karstiques, lagons cachés accessibles par une faille dans la roche, plages désertes : l'un des paysages marins les plus saisissants d'Asie.",
        img: "/generated/philippines-1.jpg",
        alt: "Lagon turquoise cerné de falaises karstiques à El Nido",
      },
      {
        icon: "scuba_diving",
        title: "La plongée sur épaves",
        text: "À Coron, une dizaine de navires japonais reposent par faible profondeur, colonisés par les coraux : un site mondialement réputé, accessible dès le niveau 1.",
        img: "/generated/philippines-3.jpg",
        alt: "Plongeur explorant un récif corallien aux Philippines",
      },
      {
        icon: "agriculture",
        title: "Les rizières de Banaue",
        text: "Deux mille ans de terrasses sculptées à la main dans les Cordillères, classées à l'UNESCO et toujours cultivées par le peuple ifugao.",
        img: "/generated/philippines-2.jpg",
        alt: "Rizières en terrasses des Cordillères philippines",
      },
      {
        icon: "beach_access",
        title: "Des plages encore secrètes",
        text: "Boracay et son sable blanc, Siargao et ses vagues, Siquijor et ses cascades : des îles où l'on trouve encore des plages pour soi.",
        img: "/generated/philippines-4.jpg",
        alt: "Plage de sable blanc et bateau à balancier philippin",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Philippines",
    steps: [
      {
        id: "manille",
        label: "JOUR 1",
        title: "Arrivée à Manille",
        text: "Escale dans la capitale : le quartier fortifié d'Intramuros, héritage espagnol, ses églises baroques et ses calèches, avant de mettre le cap sur les îles.",
        img: "/generated/philippines.jpg",
        alt: "Quartier historique et architecture coloniale de Manille",
        align: "left",
      },
      {
        id: "banaue",
        label: "JOURS 2 À 4",
        title: "Rizières de Banaue & Batad",
        text: "Route vers les Cordillères : randonnée dans l'amphithéâtre de rizières de Batad, nuit chez l'habitant et rencontre avec les communautés ifugao.",
        img: "/generated/philippines-2.jpg",
        alt: "Amphithéâtre de rizières en terrasses de Batad",
        align: "right",
      },
      {
        id: "el-nido",
        label: "JOURS 5 À 7",
        title: "El Nido & l'archipel de Bacuit",
        text: "Envol vers Palawan : journées d'island hopping entre lagons secrets, plages de sable blanc, snorkeling sur les récifs et déjeuners grillés sur une île déserte.",
        img: "/generated/philippines-1.jpg",
        alt: "Bateaux à balancier dans un lagon d'El Nido",
        align: "left",
      },
      {
        id: "coron",
        label: "JOURS 8 ET 9",
        title: "Coron & ses épaves",
        text: "Traversée vers Coron : plongée ou snorkeling sur les épaves de la Seconde Guerre mondiale, lac Kayangan aux eaux limpides et sources chaudes en fin de journée.",
        img: "/generated/philippines-3.jpg",
        alt: "Eaux limpides et formations rocheuses de Coron",
        align: "right",
      },
      {
        id: "bohol",
        label: "JOURS 10 À 12",
        title: "Bohol & détente",
        text: "Dernière étape : les collines de chocolat, les tarsiers, une croisière sur la rivière Loboc et quelques jours de farniente sur la plage d'Alona.",
        img: "/generated/philippines-3.jpg",
        alt: "Plage de sable blanc et cocotiers sur l'île de Bohol",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Siargao, Siquijor, Cebu ou une croisière d&apos;expédition entre El Nido
        et Coron s&apos;intègrent facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Philippines",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour les Philippines&nbsp;?</>
        ),
        answer: (
          <>
            <p>La saison sèche est nettement plus favorable&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à mai</strong>&nbsp;: la saison sèche, avec
                une mer calme et un ciel dégagé.
              </>,
              <>
                <strong>De janvier à avril</strong>&nbsp;: la période idéale,
                températures agréables et visibilité optimale en plongée.
              </>,
              <>
                <strong>De juin à octobre</strong>&nbsp;: saison des pluies et
                risque de typhons, surtout sur la côte est.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour les Philippines&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont simples&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique jusqu&apos;à 30 jours.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour
                et billet de sortie du territoire.
              </>,
              <>
                Une <strong>déclaration électronique d&apos;arrivée</strong> est
                à remplir dans les jours précédant le vol.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("aux Philippines", [
        <>
          <strong>Island hopping</strong>&nbsp;: Palawan, Coron et les îles de
          Bacuit.
        </>,
        <>
          <strong>Séjour plongée</strong>&nbsp;: épaves, récifs et requins-
          baleines.
        </>,
        <>
          <strong>Circuit nature & culture</strong>&nbsp;: rizières des
          Cordillères et villages ifugao.
        </>,
        <>
          <strong>Voyage de noces</strong>&nbsp;: resort confidentiel et
          excursions privatisées.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>îles et la durée</strong>&nbsp;: Palawan, Bohol, Cebu,
          Siargao, Luzon.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: itinérance entre les îles ou séjour
          posé sur une seule.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: plongée, kayak, trek dans les
          rizières, croisière d&apos;expédition.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "aux Philippines",
        "Le nombre d'îles visitées : chaque étape implique un vol intérieur ou un ferry",
      ),
      {
        question: <>Comment se déplacer entre les îles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est le point clé de l&apos;organisation</strong>, et
              nous nous en chargeons&nbsp;:
            </p>
            {checklist([
              <>
                <strong>Les vols intérieurs</strong>&nbsp;: nombreux et
                abordables, souvent via Manille ou Cebu.
              </>,
              <>
                <strong>Les ferries rapides</strong>&nbsp;: idéaux entre El Nido
                et Coron, ou entre Cebu et Bohol.
              </>,
              <>
                <strong>Les bangkas</strong>, bateaux à balancier traditionnels,
                pour l&apos;island hopping à la journée.
              </>,
            ])}
            <p>
              Nous prévoyons systématiquement des marges entre les vols pour
              absorber les aléas météo.
            </p>
          </>
        ),
      },
      faqHebergements("aux Philippines", [
        <>
          <strong>Resorts de charme</strong> face au lagon à Palawan et Bohol.
        </>,
        <>
          <strong>Éco-resorts</strong> sur des îles privées de
          l&apos;archipel de Bacuit.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> chez l&apos;habitant dans les
          Cordillères.
        </>,
        <>
          <strong>Bateaux d&apos;expédition</strong> pour naviguer plusieurs
          jours entre les îles.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter les Philippines ?",
        answer:
          "De novembre à mai pendant la saison sèche, avec une mer calme et un ciel dégagé. La période de janvier à avril est idéale pour la plongée. De juin à octobre, la saison des pluies s'accompagne d'un risque de typhons.",
      },
      {
        question: "Faut-il un visa pour les Philippines ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique jusqu'à 30 jours. Il faut un passeport valide six mois après le retour, un billet de sortie et une déclaration électronique d'arrivée.",
      },
      {
        question: "Comment se déplacer entre les îles des Philippines ?",
        answer:
          "Par vols intérieurs nombreux et abordables via Manille ou Cebu, par ferries rapides entre El Nido et Coron ou entre Cebu et Bohol, et par bangkas, les bateaux à balancier traditionnels, pour l'island hopping à la journée.",
      },
      {
        question: "Combien coûte un voyage aux Philippines ?",
        answer:
          "Le budget dépend de la durée, de la saison, du nombre d'îles visitées — chaque étape impliquant un vol ou un ferry —, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "aux Philippines",
        "de l'island hopping à Palawan et Coron, des séjours plongée, des circuits nature et culture dans les rizières des Cordillères, des voyages de noces et des voyages entièrement sur mesure.",
        "Resorts de charme face au lagon, éco-resorts sur des îles privées de l'archipel de Bacuit, maisons d'hôtes chez l'habitant dans les Cordillères et bateaux d'expédition entre les îles.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Aux Philippines, nous
        sélectionnons des opérateurs qui respectent les quotas de visite des
        lagons, refusons les interactions forcées avec les requins-baleines et
        privilégions les hébergements insulaires qui gèrent leurs déchets et
        emploient les communautés locales.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Philippines commence ici",
    body: "Parlez-nous de votre projet. Island hopping à Palawan, séjour plongée, découverte des rizières du Nord ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default philippines;
