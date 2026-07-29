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

const chili: DestinationContent = {
  slug: "chili",
  meta: {
    title: "Voyage au Chili : séjour, circuit et voyage sur mesure",
    description:
      "Organisez votre voyage au Chili avec CTA Voyages. Désert d'Atacama, Torres del Paine et Patagonie, Valparaíso, région des lacs et volcans, vignobles et île de Pâques. Circuit ou voyage sur mesure.",
  },
  hero: {
    image: "/generated/chili.jpg",
    imageAlt:
      "Massif de Torres del Paine en Patagonie chilienne — Voyage au Chili avec CTA Voyages",
    label: "Destination Chili",
    h1: "Voyage au Chili : du désert d'Atacama à la Patagonie",
    description:
      "Circuit Atacama-Patagonie, autotour dans la région des lacs, extension à l'île de Pâques ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~15h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-6h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Espagnol" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Peso chilien (CLP)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Novembre à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Chili, un ruban de 4 300 kilomètres entre Andes et Pacifique",
    body: (
      <>
        Long de plus de quatre mille kilomètres et large de cent soixante-dix
        en moyenne, le Chili aligne pratiquement tous les climats de la
        planète. Au nord, le <strong>désert d&apos;Atacama</strong> est
        l&apos;endroit le plus aride du monde&nbsp;: geysers du{" "}
        <strong>Tatio</strong> à l&apos;aube, vallée de la Lune, lagunes
        salées peuplées de flamants et l&apos;un des ciels étoilés les plus purs
        qui soient. Au centre, <strong>Santiago</strong> au pied des Andes,{" "}
        <strong>Valparaíso</strong> et ses collines couvertes de maisons
        colorées et de street art, classées à l&apos;UNESCO, et les vallées
        viticoles de <strong>Casablanca</strong> et <strong>Colchagua</strong>.
        Plus au sud, la <strong>région des lacs</strong> déroule volcans
        enneigés, forêts d&apos;araucarias et villages d&apos;influence
        allemande. Et tout en bas, la <strong>Patagonie</strong> chilienne
        culmine avec les tours de granit de{" "}
        <strong>Torres del Paine</strong>. Au large, à cinq heures d&apos;avion,
        l&apos;<strong>île de Pâques</strong> et ses moaï veillent sur le
        Pacifique. <strong>Circuit</strong>, <strong>trek</strong>,{" "}
        <strong>autotour</strong> ou <strong>voyage sur mesure</strong>&nbsp;:
        nous composons l&apos;itinéraire avec vous.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Chili ?",
    cards: [
      {
        icon: "wb_twilight",
        title: "Le désert d'Atacama",
        text: "Geysers à l'aube, vallée de la Lune au crépuscule, lagunes turquoise et un ciel si pur que les plus grands observatoires du monde s'y sont installés.",
        img: "/generated/chili-1.jpg",
        alt: "Paysage minéral et lagune du désert d'Atacama",
      },
      {
        icon: "terrain",
        title: "Torres del Paine",
        text: "Trois tours de granit dressées au-dessus des lacs turquoise, des glaciers et des guanacos : le joyau de la Patagonie chilienne.",
        img: "/generated/chili-3.jpg",
        alt: "Tours de granit de Torres del Paine au-dessus d'un lac turquoise",
      },
      {
        icon: "palette",
        title: "Valparaíso",
        text: "Quinze collines reliées par des funiculaires centenaires, des façades bariolées et des fresques monumentales : la ville la plus artistique du pays.",
        img: "/generated/chili-2.jpg",
        alt: "Maisons colorées à flanc de colline à Valparaíso",
      },
      {
        icon: "wine_bar",
        title: "Volcans, lacs & vignobles",
        text: "Cônes enneigés reflétés dans les lacs du Sud, forêts d'araucarias millénaires et vallées viticoles produisant certains des meilleurs vins du continent.",
        img: "/generated/chili-4.jpg",
        alt: "Volcan enneigé se reflétant dans un lac de la région des lacs chilienne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Chili",
    steps: [
      {
        id: "santiago-valparaiso",
        label: "JOURS 1 À 3",
        title: "Santiago & Valparaíso",
        text: "Arrivée dans la capitale, au pied des Andes. Marché central, quartier Bellavista, puis journée à Valparaíso et dégustation dans une vallée viticole voisine.",
        img: "/generated/chili-2.jpg",
        alt: "Collines colorées et funiculaires de Valparaíso",
        align: "left",
      },
      {
        id: "atacama",
        label: "JOURS 4 À 7",
        title: "Le désert d'Atacama",
        text: "Vol vers Calama : geysers du Tatio au lever du jour, vallée de la Lune, lagunes altiplaniques peuplées de flamants roses et observation astronomique nocturne.",
        img: "/generated/chili-1.jpg",
        alt: "Vallée de la Lune et formations désertiques de l'Atacama",
        align: "right",
      },
      {
        id: "region-lacs",
        label: "JOURS 8 ET 9",
        title: "Volcans & région des lacs",
        text: "Cap au sud vers Puerto Varas : volcan Osorno, cascades de Petrohué, forêts d'araucarias et villages d'architecture allemande au bord du lac Llanquihue.",
        img: "/generated/chili.jpg",
        alt: "Volcan enneigé dominant un lac de la région des lacs",
        align: "left",
      },
      {
        id: "torres-del-paine",
        label: "JOURS 10 À 12",
        title: "Torres del Paine",
        text: "Envol vers la Patagonie : randonnées face aux tours de granit, lac Grey et son glacier, faune sauvage entre guanacos, condors et renards de Magellan.",
        img: "/generated/chili-3.jpg",
        alt: "Massif et lacs turquoise du parc Torres del Paine",
        align: "right",
      },
      {
        id: "ile-de-paques",
        label: "JOURS 13 À 16",
        title: "Extension île de Pâques",
        text: "Cinq heures de vol au-dessus du Pacifique : les moaï d'Ahu Tongariki au lever du soleil, la carrière du Rano Raraku, le village cérémoniel d'Orongo.",
        img: "/generated/chili.jpg",
        alt: "Statues moaï alignées face au Pacifique sur l'île de Pâques",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le désert fleuri d&apos;Atacama, l&apos;archipel de Chiloé, la Carretera
        Austral ou un passage vers la Patagonie argentine complètent aisément le
        programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Chili",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Chili&nbsp;?</>
        ),
        answer: (
          <>
            <p>Les saisons sont inversées par rapport à l&apos;Europe&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à mars</strong>&nbsp;: l&apos;été austral,
                seule période où la Patagonie et la région des lacs sont
                pleinement accessibles.
              </>,
              <>
                <strong>L&apos;Atacama se visite toute l&apos;année</strong>{" "}
                grâce à son climat désertique&nbsp;: prévoyez des nuits très
                fraîches.
              </>,
              <>
                <strong>De septembre à novembre</strong>&nbsp;: le centre du pays
                est fleuri et l&apos;affluence encore modérée.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités et quelles précautions&nbsp;?</>,
        answer: (
          <>
            <p>Le pays est simple d&apos;accès&nbsp;:</p>
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
                Attention à l&apos;<strong>altitude</strong> dans l&apos;Atacama
                (jusqu&apos;à 4 300 m aux geysers)&nbsp;: nous prévoyons une
                acclimatation progressive.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Chili", [
        <>
          <strong>Circuit Atacama & Patagonie</strong>&nbsp;: les deux extrêmes du
          pays.
        </>,
        <>
          <strong>Trek en Patagonie</strong>&nbsp;: le W de Torres del Paine, en
          refuges ou en lodges.
        </>,
        <>
          <strong>Autotour</strong>&nbsp;: région des lacs, volcans et Chiloé au
          volant.
        </>,
        <>
          <strong>Extension île de Pâques</strong>&nbsp;: quatre jours au milieu
          du Pacifique.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Nord désertique, centre
          viticole, Sud des lacs, Patagonie.
        </>,
        <>
          Le <strong>niveau d&apos;activité</strong>&nbsp;: trek engagé,
          randonnées à la journée ou découverte confortable.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: observation astronomique,
          navigation face aux glaciers, dégustation de carménère.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Chili",
        "Les vols intérieurs et l'éventuelle extension à l'île de Pâques",
      ),
      {
        question: <>Faut-il combiner le Chili et l&apos;Argentine&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est souvent pertinent</strong>, notamment en
              Patagonie&nbsp;:
            </p>
            {checklist([
              <>
                Torres del Paine et El Calafate sont séparés de{" "}
                <strong>cinq heures de route</strong> seulement.
              </>,
              <>
                Les deux Patagonies ont des <strong>paysages différents</strong>
                &nbsp;: granit et lacs côté chilien, glaciers et steppe côté
                argentin.
              </>,
              <>
                Comptez <strong>trois semaines</strong> pour un combiné complet
                incluant Atacama et Buenos Aires.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("au Chili", [
        <>
          <strong>Lodges design</strong> au cœur du désert d&apos;Atacama.
        </>,
        <>
          <strong>Hôtels de charme</strong> sur les collines de Valparaíso.
        </>,
        <>
          <strong>Refuges et lodges</strong> dans le parc Torres del Paine.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> au bord des lacs et sur
          l&apos;île de Chiloé.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Chili ?",
        answer:
          "De novembre à mars pendant l'été austral, seule période où la Patagonie et la région des lacs sont pleinement accessibles. L'Atacama se visite toute l'année grâce à son climat désertique, avec des nuits très fraîches.",
      },
      {
        question: "Faut-il un visa pour le Chili ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours, avec un passeport valide pendant tout le séjour. L'altitude dans l'Atacama, jusqu'à 4 300 m, nécessite une acclimatation progressive.",
      },
      {
        question: "Faut-il combiner le Chili et l'Argentine ?",
        answer:
          "C'est souvent pertinent en Patagonie : Torres del Paine et El Calafate ne sont séparés que de cinq heures de route et les paysages diffèrent (granit et lacs côté chilien, glaciers et steppe côté argentin). Comptez trois semaines pour un combiné complet.",
      },
      {
        question: "Combien coûte un voyage au Chili ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, des vols intérieurs et d'une éventuelle extension à l'île de Pâques, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Chili",
        "des circuits Atacama-Patagonie, des treks à Torres del Paine, des autotours dans la région des lacs, des extensions à l'île de Pâques et des voyages entièrement sur mesure.",
        "Lodges design au cœur de l'Atacama, hôtels de charme sur les collines de Valparaíso, refuges et lodges dans le parc Torres del Paine et maisons d'hôtes au bord des lacs et à Chiloé.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Chili, nous
        privilégions des lodges qui limitent leur consommation d&apos;eau dans
        l&apos;Atacama, des guides locaux dans les communautés atacameñas et
        rapa nui, et des opérateurs respectueux des règles strictes des parcs
        nationaux patagoniens.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Chili commence ici",
    body: "Parlez-nous de votre projet. Circuit Atacama-Patagonie, trek à Torres del Paine, autotour dans la région des lacs ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default chili;
