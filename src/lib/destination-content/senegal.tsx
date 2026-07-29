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

const senegal: DestinationContent = {
  slug: "senegal",
  meta: {
    title:
      "Voyage au Sénégal : séjour, circuit",
    description:
      "Organisez votre voyage au Sénégal avec CTA Voyages. Île de Gorée, Saint-Louis, delta du Saloum, lac Rose, désert de Lompoul, réserves animalières et plages de la Petite Côte. Circuit ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/senegal.jpg",
    imageAlt:
      "Pirogues colorées sur une plage de l'Atlantique au Sénégal — Voyage au Sénégal avec CTA Voyages",
    label: "Destination Sénégal",
    h1: "Voyage au Sénégal : la teranga, l'océan et la brousse",
    description:
      "Circuit découverte, séjour balnéaire sur la Petite Côte, immersion dans le delta du Saloum ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~5h30 (direct)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-2h (été)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Français, wolof",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Franc CFA (XOF)",
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
    h2: "Le Sénégal, l'Afrique de l'Ouest à cinq heures de vol",
    body: (
      <>
        Le Sénégal a un mot pour désigner son hospitalité&nbsp;: la{" "}
        <em>teranga</em>. Elle se ressent partout, et c&apos;est souvent ce que
        les voyageurs retiennent d&apos;abord. Le pays a l&apos;avantage
        d&apos;être proche — cinq heures et demie de vol direct, deux heures de
        décalage seulement — et francophone, ce qui facilite les rencontres.{" "}
        <strong>Dakar</strong> vibre au rythme du mbalax et des marchés&nbsp;;
        au large, l&apos;<strong>île de Gorée</strong> et sa maison des Esclaves
        rappellent une mémoire douloureuse, classée à l&apos;UNESCO. Plus au
        nord, <strong>Saint-Louis</strong>, ancienne capitale de l&apos;Afrique
        occidentale française, aligne ses balcons de fer forgé sur une île du
        fleuve Sénégal. Le <strong>delta du Saloum</strong> déroule ses{" "}
        <em>bolongs</em> de mangrove et ses villages de pêcheurs&nbsp;; le{" "}
        <strong>lac Rose</strong> et le <strong>désert de Lompoul</strong> et ses
        dunes ocre offrent un dépaysement immédiat&nbsp;; les réserves de{" "}
        <strong>Bandia</strong> et du <strong>Niokolo-Koba</strong> permettent
        l&apos;observation de la faune. <strong>Circuit</strong>,{" "}
        <strong>séjour balnéaire</strong>, <strong>voyage nature</strong> ou{" "}
        <strong>itinéraire sur mesure</strong>&nbsp;: le Sénégal se prête à tout.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Sénégal ?",
    cards: [
      {
        icon: "diversity_3",
        title: "La teranga sénégalaise",
        text: "Une hospitalité érigée en art de vivre, une langue partagée et une scène musicale bouillonnante : les rencontres sont au cœur du voyage.",
        img: "/generated/senegal-2.jpg",
        alt: "Scène de vie et marché coloré dans une ville sénégalaise",
      },
      {
        icon: "history_edu",
        title: "Gorée & Saint-Louis",
        text: "Deux sites classés à l'UNESCO : l'île mémorielle de Gorée face à Dakar, et les façades coloniales de Saint-Louis, au bord du fleuve.",
        img: "/generated/senegal-4.jpg",
        alt: "Maisons coloniales aux couleurs pastel de Saint-Louis du Sénégal",
      },
      {
        icon: "kayaking",
        title: "Le delta du Saloum",
        text: "Un labyrinthe de mangroves, d'îles et de bolongs classé au patrimoine mondial, où l'on navigue en pirogue au milieu des oiseaux.",
        img: "/generated/senegal-1.jpg",
        alt: "Mangrove et pirogue traditionnelle dans le delta du Saloum",
      },
      {
        icon: "beach_access",
        title: "L'océan & les pirogues",
        text: "Les plages de la Petite Côte, le retour des pêcheurs à Kayar ou Mbour, le surf à Ngor : l'Atlantique rythme la vie sénégalaise.",
        img: "/generated/senegal-3.jpg",
        alt: "Pirogues de pêche colorées échouées sur une plage sénégalaise",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Sénégal",
    steps: [
      {
        id: "dakar-goree",
        label: "JOURS 1 ET 2",
        title: "Dakar & l'île de Gorée",
        text: "Arrivée dans la capitale : marché Sandaga, monument de la Renaissance, pointe des Almadies, puis traversée vers Gorée et sa maison des Esclaves.",
        img: "/generated/senegal-4.jpg",
        alt: "Ruelles colorées et maisons anciennes de l'île de Gorée",
        align: "left",
      },
      {
        id: "lac-rose-lompoul",
        label: "JOUR 3",
        title: "Lac Rose & désert de Lompoul",
        text: "Route vers le nord : les eaux salées du lac Retba et ses ramasseurs de sel, puis nuit sous tente mauritanienne au cœur des dunes ocre de Lompoul.",
        img: "/generated/senegal.jpg",
        alt: "Dunes ocre du désert de Lompoul au coucher du soleil",
        align: "right",
      },
      {
        id: "saint-louis",
        label: "JOURS 4 ET 5",
        title: "Saint-Louis & le fleuve",
        text: "Découverte de l'ancienne capitale coloniale, de ses balcons de fer forgé et du quartier des pêcheurs, puis excursion au parc ornithologique du Djoudj.",
        img: "/generated/senegal-4.jpg",
        alt: "Pont et façades coloniales de Saint-Louis du Sénégal",
        align: "left",
      },
      {
        id: "bandia",
        label: "JOUR 6",
        title: "Réserve de Bandia",
        text: "Safari en 4x4 dans la réserve de Bandia : girafes, rhinocéros, buffles et antilopes évoluent au milieu des baobabs centenaires, à deux heures de Dakar.",
        img: "/generated/senegal-1.jpg",
        alt: "Baobabs et faune sauvage dans une réserve sénégalaise",
        align: "right",
      },
      {
        id: "saloum",
        label: "JOURS 7 À 9",
        title: "Delta du Saloum & Petite Côte",
        text: "Navigation en pirogue entre les bolongs de mangrove, découverte des villages sérères et de leurs amas coquilliers, puis détente sur les plages de Saly.",
        img: "/generated/senegal-3.jpg",
        alt: "Bolong de mangrove et village de pêcheurs du delta du Saloum",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        La Casamance, le parc du Niokolo-Koba ou une extension vers la Gambie
        voisine peuvent s&apos;ajouter au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Sénégal",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Sénégal&nbsp;?</>
        ),
        answer: (
          <>
            <p>La saison sèche est nettement plus agréable&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à mai</strong>&nbsp;: la saison sèche, avec
                une chaleur supportable et un ciel dégagé.
              </>,
              <>
                <strong>De décembre à février</strong>&nbsp;: la période la plus
                douce, idéale pour combiner circuit et plage.
              </>,
              <>
                <strong>De juillet à octobre</strong>&nbsp;: l&apos;hivernage,
                plus chaud et humide, mais avec une brousse verdoyante et une
                faune bien visible.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités et quelle santé&nbsp;?</>,
        answer: (
          <>
            <p>Prévoyez ces éléments avant le départ&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 90 jours.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour.
              </>,
              <>
                Un <strong>traitement antipaludéen</strong> est généralement
                recommandé&nbsp;: consultez votre médecin avant le départ.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Sénégal", [
        <>
          <strong>Circuit découverte</strong>&nbsp;: Dakar, Saint-Louis, Lompoul
          et le Saloum.
        </>,
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: Saly, Somone ou la Petite Côte.
        </>,
        <>
          <strong>Voyage nature</strong>&nbsp;: réserves animalières, parcs
          ornithologiques et mangrove.
        </>,
        <>
          <strong>Voyage solidaire</strong>&nbsp;: hébergements villageois et
          rencontres avec les communautés.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Nord et fleuve,
          Saloum, Casamance ou Sénégal oriental.
        </>,
        <>
          Le <strong>dosage</strong>&nbsp;: part de découverte et part de
          farniente sur la côte.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: soirée musicale, pêche en
          pirogue, safari, nuit dans le désert.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Sénégal",
        "Le mode de circuit : véhicule privatif avec chauffeur ou départ en petit groupe",
      ),
      {
        question: <>Le Sénégal convient-il à un premier voyage en Afrique&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est l&apos;une des meilleures portes
              d&apos;entrée du continent.</strong>
            </p>
            {checklist([
              <>
                Un <strong>vol direct de 5h30</strong> et seulement deux heures de
                décalage horaire.
              </>,
              <>
                Le <strong>français</strong> largement parlé, ce qui facilite
                énormément les échanges.
              </>,
              <>
                Des <strong>infrastructures touristiques solides</strong> sur la
                côte et des distances raisonnables.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("au Sénégal", [
        <>
          <strong>Hôtels de charme</strong> à Dakar, Gorée et Saint-Louis.
        </>,
        <>
          <strong>Campements écologiques</strong> dans le delta du Saloum et le
          désert de Lompoul.
        </>,
        <>
          <strong>Lodges</strong> en bord de plage sur la Petite Côte.
        </>,
        <>
          <strong>Hébergements villageois</strong> pour une immersion au plus
          près des habitants.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Sénégal ?",
        answer:
          "De novembre à mai pendant la saison sèche, avec une chaleur supportable et un ciel dégagé, et plus particulièrement de décembre à février. De juillet à octobre, l'hivernage est plus humide mais la brousse est verdoyante et la faune bien visible.",
      },
      {
        question: "Faut-il un visa pour le Sénégal ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours, avec un passeport valide six mois après le retour. Un traitement antipaludéen est généralement recommandé.",
      },
      {
        question: "Le Sénégal convient-il pour un premier voyage en Afrique ?",
        answer:
          "Oui, c'est l'une des meilleures portes d'entrée du continent : vol direct de 5h30, deux heures de décalage horaire seulement, français largement parlé, infrastructures touristiques solides sur la côte et distances raisonnables.",
      },
      {
        question: "Combien coûte un voyage au Sénégal ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, du mode de circuit (véhicule privatif avec chauffeur ou petit groupe), du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Sénégal",
        "des circuits découverte de Dakar au Saloum, des séjours balnéaires sur la Petite Côte, des voyages nature dans les réserves et la mangrove, des voyages solidaires et des voyages entièrement sur mesure.",
        "Hôtels de charme à Dakar, Gorée et Saint-Louis, campements écologiques dans le Saloum et le désert de Lompoul, lodges en bord de plage et hébergements villageois.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Sénégal, nous
        travaillons avec des guides et chauffeurs sénégalais, favorisons les
        campements villageois qui reversent une part de leurs revenus aux
        communautés et soutenons les initiatives de reboisement de la mangrove
        dans le delta du Saloum.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Sénégal commence ici",
    body: "Parlez-nous de votre projet. Circuit découverte, séjour sur la Petite Côte, immersion dans le delta du Saloum ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default senegal;
