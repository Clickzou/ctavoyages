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

const chine: DestinationContent = {
  slug: "chine",
  meta: {
    title:
      "Voyage en Chine : séjour, circuit",
    description:
      "Organisez votre voyage en Chine avec CTA Voyages. Grande Muraille et Cité interdite, armée de terre cuite de Xi'an, rivière Li à Guilin, Shanghai et pandas de Chengdu. Circuit privé ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/chine.jpg",
    imageAlt:
      "La Grande Muraille de Chine serpentant sur les crêtes montagneuses — Voyage en Chine avec CTA Voyages",
    label: "Destination Chine",
    h1: "Voyage en Chine : Grande Muraille, empire et modernité",
    description:
      "Grand circuit impérial, paysages karstiques du Sud, itinéraire en train à grande vitesse ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h (Pékin, direct)",
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
      label: "Langue",
      value: "Mandarin",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Yuan (CNY)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril-juin / sept.-novembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Chine, cinq mille ans d'histoire et un continent de paysages",
    body: (
      <>
        Aucun pays ne concentre autant de superlatifs. La{" "}
        <strong>Grande Muraille</strong> serpente sur plus de vingt mille
        kilomètres&nbsp;; la <strong>Cité interdite</strong> aligne près de neuf
        mille pièces&nbsp;; l&apos;<strong>armée de terre cuite</strong> de{" "}
        <strong>Xi&apos;an</strong>, découverte par hasard en 1974, compte plus
        de huit mille soldats, tous différents. Mais la Chine ne se réduit pas à
        ses monuments&nbsp;: au sud, les pics karstiques de{" "}
        <strong>Guilin</strong> et la descente de la <strong>rivière Li</strong>{" "}
        composent le paysage le plus représenté de la peinture chinoise&nbsp;;
        les rizières en terrasses de <strong>Longji</strong> escaladent les
        montagnes du Guangxi&nbsp;; le <strong>Yunnan</strong> abrite vingt-cinq
        minorités ethniques. À <strong>Chengdu</strong>, on observe les pandas
        géants&nbsp;; à <strong>Shanghai</strong> et sur le Bund, la Chine
        contemporaine s&apos;affiche en gratte-ciel. Le pays se parcourt
        aujourd&apos;hui en <strong>train à grande vitesse</strong>, ce qui rend
        les grandes distances étonnamment confortables.{" "}
        <strong>Circuit privé</strong>, <strong>voyage accompagné</strong> ou{" "}
        <strong>itinéraire sur mesure</strong>&nbsp;: nous vous accompagnons de
        bout en bout.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Chine ?",
    cards: [
      {
        icon: "castle",
        title: "La Grande Muraille",
        text: "Sur les sections restaurées ou sauvages proches de Pékin, la muraille épouse les crêtes à perte de vue : une émotion difficile à anticiper.",
        img: "/generated/chine.jpg",
        alt: "Grande Muraille de Chine suivant la ligne de crête des montagnes",
      },
      {
        icon: "museum",
        title: "L'héritage impérial",
        text: "Cité interdite, Temple du Ciel, Palais d'été et armée de terre cuite : la densité de sites classés à l'UNESCO est sans équivalent.",
        img: "/generated/chine-2.jpg",
        alt: "Cour et pavillons de la Cité interdite à Pékin",
      },
      {
        icon: "landscape",
        title: "Les paysages du Sud",
        text: "Pics karstiques de Guilin, rivière Li en croisière, rizières en terrasses de Longji : les décors de l'imaginaire chinois, bien réels.",
        img: "/generated/chine-1.jpg",
        alt: "Pics karstiques et rivière sinueuse dans la région de Guilin",
      },
      {
        icon: "location_city",
        title: "Shanghai la futuriste",
        text: "Face aux façades coloniales du Bund, la skyline de Pudong illustre en un coup d'œil l'accélération chinoise des quarante dernières années.",
        img: "/generated/chine-3.jpg",
        alt: "Skyline de Shanghai et gratte-ciel de Pudong au crépuscule",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Chine",
    steps: [
      {
        id: "pekin",
        label: "JOURS 1 À 4",
        title: "Pékin & la Grande Muraille",
        text: "Cité interdite, place Tian'anmen, Temple du Ciel et Palais d'été, puis journée sur une section préservée de la Grande Muraille, loin des foules.",
        img: "/generated/chine-2.jpg",
        alt: "Pavillons impériaux de la Cité interdite à Pékin",
        align: "left",
      },
      {
        id: "xian",
        label: "JOURS 5 ET 6",
        title: "Xi'an & l'armée de terre cuite",
        text: "Train à grande vitesse vers l'ancienne capitale : les fosses de l'armée de terre cuite, les remparts Ming à parcourir à vélo et le quartier musulman.",
        img: "/generated/chine-2.jpg",
        alt: "Fosse de l'armée de terre cuite à Xi'an",
        align: "right",
      },
      {
        id: "guilin",
        label: "JOURS 7 À 9",
        title: "Guilin, rivière Li & Yangshuo",
        text: "Envol vers le Sud : croisière au milieu des pics karstiques jusqu'à Yangshuo, balades à vélo dans les campagnes et rizières en terrasses de Longji.",
        img: "/generated/chine-1.jpg",
        alt: "Croisière sur la rivière Li entre les pics karstiques",
        align: "left",
      },
      {
        id: "chengdu",
        label: "JOURS 10 ET 11",
        title: "Chengdu & les pandas géants",
        text: "Visite matinale de la base de recherche sur les pandas géants, puis découverte des maisons de thé, de la cuisine épicée du Sichuan et de l'opéra local.",
        img: "/generated/chine-1.jpg",
        alt: "Bambouseraie et paysage du Sichuan",
        align: "right",
      },
      {
        id: "shanghai",
        label: "JOURS 12 À 14",
        title: "Shanghai & Suzhou",
        text: "Fin du voyage face au Bund et à la skyline de Pudong, avec une excursion à Suzhou, la « Venise de l'Orient », et ses jardins classiques classés.",
        img: "/generated/chine-3.jpg",
        alt: "Le Bund et les gratte-ciel de Shanghai au bord du fleuve",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le Yunnan et ses minorités, les monts Huang, Hong Kong ou une extension
        au Tibet peuvent s&apos;ajouter au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Chine",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Chine&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le pays est immense&nbsp;: les intersaisons conviennent partout.
            </p>
            {checklist([
              <>
                <strong>D&apos;avril à juin</strong>&nbsp;: températures douces et
                végétation éclatante sur l&apos;ensemble du territoire.
              </>,
              <>
                <strong>De septembre à novembre</strong>&nbsp;: ciel dégagé,
                lumière superbe et affluence en baisse.
              </>,
              <>
                <strong>Évitez la « semaine d&apos;or »</strong> début octobre et
                le Nouvel An chinois&nbsp;: le pays entier se déplace.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour la Chine&nbsp;?</>,
        answer: (
          <>
            <p>Le visa est le point d&apos;attention principal&nbsp;:</p>
            {checklist([
              <>
                Un <strong>visa touristique</strong> est requis&nbsp;; une
                exemption jusqu&apos;à 30 jours s&apos;applique actuellement aux
                ressortissants français, sous conditions.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour,
                avec deux pages vierges.
              </>,
              <>
                Prévoyez une <strong>solution de paiement mobile</strong>&nbsp;:
                les espèces et cartes étrangères sont peu utilisées.
              </>,
            ])}
            <p>
              Nous vous accompagnons dans ces démarches et vous transmettons les
              règles à jour.
            </p>
          </>
        ),
      },
      faqFormules("en Chine", [
        <>
          <strong>Grand circuit impérial</strong>&nbsp;: Pékin, Xi&apos;an,
          Shanghai en train à grande vitesse.
        </>,
        <>
          <strong>Circuit privé francophone</strong>&nbsp;: guide et véhicule
          dédiés à votre groupe.
        </>,
        <>
          <strong>Paysages du Sud</strong>&nbsp;: Guilin, Yangshuo, Longji et le
          Yunnan.
        </>,
        <>
          <strong>Croisière sur le Yangtsé</strong>&nbsp;: les Trois Gorges en
          navire confortable.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>étapes et la durée</strong>&nbsp;: du circuit classique de
          douze jours au grand voyage de trois semaines.
        </>,
        <>
          Le <strong>format</strong>&nbsp;: privatif avec guide francophone ou
          petit groupe accompagné.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: grands sites incontournables,
          immersion rurale ou villes contemporaines.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Chine",
        "Le format choisi : circuit privatif francophone ou départ en petit groupe",
      ),
      {
        question: <>Un guide francophone est-il nécessaire&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Nous le recommandons vivement.</strong> Il change
              radicalement l&apos;expérience&nbsp;:
            </p>
            {checklist([
              <>
                La <strong>barrière de la langue</strong> est réelle&nbsp;:
                l&apos;anglais reste peu parlé hors des grands hôtels.
              </>,
              <>
                Les <strong>clés de lecture historiques</strong> transforment la
                visite des sites impériaux.
              </>,
              <>
                L&apos;<strong>organisation pratique</strong> — billets de train,
                accès aux sites, paiements — est prise en charge.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("en Chine", [
        <>
          <strong>Hôtels internationaux</strong> dans les grandes métropoles.
        </>,
        <>
          <strong>Maisons de cour</strong> (siheyuan) restaurées dans les hutongs
          de Pékin.
        </>,
        <>
          <strong>Hôtels de charme</strong> au bord de la rivière Li à Yangshuo.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> dans les villages du Yunnan et du
          Guangxi.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Chine ?",
        answer:
          "D'avril à juin pour des températures douces et une végétation éclatante, et de septembre à novembre pour un ciel dégagé et moins d'affluence. Évitez la semaine d'or début octobre et le Nouvel An chinois, périodes de très forts déplacements.",
      },
      {
        question: "Faut-il un visa pour la Chine ?",
        answer:
          "Un visa touristique est en principe requis, avec une exemption jusqu'à 30 jours actuellement applicable aux ressortissants français sous conditions. Le passeport doit être valide six mois après le retour avec deux pages vierges, et une solution de paiement mobile est indispensable.",
      },
      {
        question: "Faut-il un guide francophone pour voyager en Chine ?",
        answer:
          "Nous le recommandons vivement : la barrière de la langue est réelle car l'anglais reste peu parlé, les clés de lecture historiques transforment la visite des sites impériaux et l'organisation pratique (billets de train, accès, paiements) est prise en charge.",
      },
      {
        question: "Combien coûte un voyage en Chine ?",
        answer:
          "Le budget dépend de la durée, de la saison, des étapes visitées, du format choisi (circuit privatif francophone ou petit groupe), du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "en Chine",
        "des grands circuits impériaux Pékin-Xi'an-Shanghai, des circuits privés francophones, des itinéraires dans les paysages du Sud, des croisières sur le Yangtsé et des voyages entièrement sur mesure.",
        "Hôtels internationaux dans les métropoles, maisons de cour restaurées dans les hutongs de Pékin, hôtels de charme au bord de la rivière Li et maisons d'hôtes dans les villages du Yunnan.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Chine, nous
        privilégions le train à grande vitesse plutôt que l&apos;avion sur les
        liaisons intérieures, des hébergements indépendants et des sections de
        Grande Muraille moins fréquentées, afin de répartir la pression
        touristique et de soutenir les économies rurales.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Chine commence ici",
    body: "Parlez-nous de votre projet. Grand circuit impérial, paysages karstiques du Sud, croisière sur le Yangtsé ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default chine;
