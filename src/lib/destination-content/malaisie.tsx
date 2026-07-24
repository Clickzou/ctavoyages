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

const malaisie: DestinationContent = {
  slug: "malaisie",
  meta: {
    title:
      "Voyage en Malaisie : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Malaisie avec CTA Voyages. Kuala Lumpur et les tours Petronas, George Town à Penang, orangs-outans de Bornéo, Cameron Highlands et îles de Langkawi. Circuit ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/malaisie.jpg",
    imageAlt:
      "Gratte-ciel de Kuala Lumpur au crépuscule — Voyage en Malaisie avec CTA Voyages",
    label: "Destination Malaisie",
    h1: "Voyage en Malaisie : mégapoles, jungle et îles turquoise",
    description:
      "Circuit villes et nature, aventure à Bornéo, séjour balnéaire ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~13h (avec escale)",
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
      value: "Malais, anglais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Ringgit (MYR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Déc. à févr. / mai à sept.",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Malaisie, le carrefour des cultures asiatiques",
    body: (
      <>
        Malais, Chinois et Indiens y vivent côte à côte depuis des
        siècles&nbsp;: en Malaisie, une mosquée, un temple hindou et un temple
        chinois se partagent souvent la même rue, et la cuisine mêle les trois
        traditions avec un talent rare. <strong>Kuala Lumpur</strong> incarne
        cette énergie, entre les tours <strong>Petronas</strong>, les échoppes de
        Chinatown et les marchés de nuit. Au nord,{" "}
        <strong>George Town</strong> à <strong>Penang</strong>, classée à
        l&apos;UNESCO, aligne maisons de marchands, fresques murales et
        certaines des meilleures tables de rue d&apos;Asie. Les{" "}
        <strong>Cameron Highlands</strong> offrent la fraîcheur de leurs
        plantations de thé, tandis que les îles de{" "}
        <strong>Langkawi</strong>, Perhentian et Tioman déroulent leurs plages de
        sable blanc. Et de l&apos;autre côté de la mer,{" "}
        <strong>Bornéo</strong> abrite l&apos;une des plus anciennes forêts
        primaires de la planète et ses <strong>orangs-outans</strong>.{" "}
        <strong>Circuit</strong>, <strong>séjour balnéaire</strong>,{" "}
        <strong>aventure nature</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: tout est possible.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Malaisie ?",
    cards: [
      {
        icon: "location_city",
        title: "Kuala Lumpur",
        text: "Les tours Petronas, les grottes de Batu et leurs 272 marches colorées, les marchés de nuit et une skyline spectaculaire au crépuscule.",
        img: "/generated/malaisie-2.jpg",
        alt: "Gratte-ciel et skyline de Kuala Lumpur illuminés",
      },
      {
        icon: "pets",
        title: "Les orangs-outans de Bornéo",
        text: "À Sepilok et sur la rivière Kinabatangan, la rencontre avec les grands singes roux, les nasiques et les éléphants pygmées, en pleine forêt primaire.",
        img: "/generated/malaisie-1.jpg",
        alt: "Forêt tropicale primaire de Bornéo et canopée dense",
      },
      {
        icon: "restaurant",
        title: "La street food de Penang",
        text: "Laksa, char kway teow, roti canai : George Town est considérée comme l'une des capitales mondiales de la cuisine de rue.",
        img: "/generated/malaisie-3.jpg",
        alt: "Étal de cuisine de rue et spécialités malaisiennes à Penang",
      },
      {
        icon: "beach_access",
        title: "Les îles et les plages",
        text: "Langkawi et ses mangroves, les Perhentian et leurs eaux cristallines, Tioman et ses récifs : la Malaisie balnéaire reste encore confidentielle.",
        img: "/generated/malaisie-4.jpg",
        alt: "Plage de sable blanc et eaux turquoise d'une île malaisienne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Malaisie",
    steps: [
      {
        id: "kuala-lumpur",
        label: "JOURS 1 À 3",
        title: "Kuala Lumpur, la capitale métissée",
        text: "Arrivée dans la capitale. Tours Petronas, grottes de Batu, mosquée nationale, Chinatown et Little India, puis dîner dans un marché de nuit local.",
        img: "/generated/malaisie-2.jpg",
        alt: "Rues animées et gratte-ciel de Kuala Lumpur",
        align: "left",
      },
      {
        id: "cameron-highlands",
        label: "JOUR 4",
        title: "Les Cameron Highlands",
        text: "Montée vers les hauts plateaux et leur fraîcheur bienvenue : plantations de thé à perte de vue, fermes de fraises, forêts moussues et villages de montagne.",
        img: "/generated/malaisie.jpg",
        alt: "Plantations de thé en terrasses des Cameron Highlands",
        align: "right",
      },
      {
        id: "penang",
        label: "JOURS 5 ET 6",
        title: "George Town & Penang",
        text: "Immersion dans la ville classée à l'UNESCO : maisons de marchands, temples chinois, fresques murales et parcours gastronomique dans les hawker centres.",
        img: "/generated/malaisie-3.jpg",
        alt: "Rue historique et fresques murales de George Town à Penang",
        align: "left",
      },
      {
        id: "borneo",
        label: "JOURS 7 À 9",
        title: "Bornéo & les orangs-outans",
        text: "Envol vers Sabah : centre de réhabilitation de Sepilok, croisières matin et soir sur la rivière Kinabatangan à la recherche des nasiques et des éléphants pygmées.",
        img: "/generated/malaisie-1.jpg",
        alt: "Rivière et forêt tropicale de Bornéo au lever du jour",
        align: "right",
      },
      {
        id: "langkawi",
        label: "JOURS 10 À 12",
        title: "Détente à Langkawi",
        text: "Fin du voyage sur l'archipel de Langkawi : plages de sable blanc, téléphérique panoramique au-dessus de la jungle et balade en kayak dans les mangroves.",
        img: "/generated/malaisie-1.jpg",
        alt: "Plage et mer turquoise de l'île de Langkawi",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Malacca, les îles Perhentian ou une extension vers Singapour, à quelques
        heures de route, complètent facilement le programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Malaisie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Malaisie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le pays connaît deux moussons opposées selon la côte&nbsp;: il y a
              donc toujours une région où partir.
            </p>
            {checklist([
              <>
                <strong>De décembre à février</strong>&nbsp;: idéal pour la côte
                ouest, Langkawi, Penang et Kuala Lumpur.
              </>,
              <>
                <strong>De mai à septembre</strong>&nbsp;: la bonne période pour
                la côte est, les Perhentian, Tioman et Bornéo.
              </>,
              <>
                <strong>Les Cameron Highlands et les villes</strong> se visitent
                toute l&apos;année.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour la Malaisie&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont légères&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français
                jusqu&apos;à 90 jours de séjour touristique.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour.
              </>,
              <>
                Une <strong>déclaration d&apos;arrivée en ligne</strong> est
                demandée dans les jours précédant le vol.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Malaisie", [
        <>
          <strong>Circuit villes & nature</strong>&nbsp;: Kuala Lumpur, Cameron
          Highlands, Penang.
        </>,
        <>
          <strong>Aventure à Bornéo</strong>&nbsp;: faune sauvage, forêt primaire
          et rivières.
        </>,
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: Langkawi, Perhentian ou
          Tioman.
        </>,
        <>
          <strong>Combiné Asie du Sud-Est</strong>&nbsp;: avec la Thaïlande ou
          Singapour.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: péninsule seule, Bornéo
          seul ou combinaison des deux.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: itinérance culturelle, aventure nature
          ou détente balnéaire.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: parcours street food, croisière
          faune, plantation de thé, plongée.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Malaisie",
        "L'ajout ou non de Bornéo, qui implique des vols intérieurs",
      ),
      {
        question: <>Bornéo vaut-il le détour&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est souvent le temps fort du voyage.</strong>
            </p>
            {checklist([
              <>
                Une <strong>forêt primaire de 130 millions d&apos;années</strong>
                , parmi les plus anciennes de la planète.
              </>,
              <>
                L&apos;observation des <strong>orangs-outans</strong>, des
                nasiques et parfois des éléphants pygmées.
              </>,
              <>
                Le <strong>mont Kinabalu</strong>, plus haut sommet d&apos;Asie
                du Sud-Est, et des sites de plongée réputés à Sipadan.
              </>,
            ])}
            <p>
              Comptez au moins trois nuits sur place pour en profiter
              pleinement.
            </p>
          </>
        ),
      },
      faqHebergements("en Malaisie", [
        <>
          <strong>Hôtels design</strong> au cœur de Kuala Lumpur.
        </>,
        <>
          <strong>Maisons de marchands restaurées</strong> à George Town et
          Malacca.
        </>,
        <>
          <strong>Lodges en forêt</strong> le long de la rivière Kinabatangan à
          Bornéo.
        </>,
        <>
          <strong>Resorts de plage</strong> à Langkawi et sur les îles de la côte
          est.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Malaisie ?",
        answer:
          "De décembre à février pour la côte ouest (Langkawi, Penang, Kuala Lumpur) et de mai à septembre pour la côte est (Perhentian, Tioman) et Bornéo. Les Cameron Highlands et les villes se visitent toute l'année.",
      },
      {
        question: "Faut-il un visa pour la Malaisie ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français jusqu'à 90 jours de séjour touristique. Il faut un passeport valide six mois après la date de retour et remplir une déclaration d'arrivée en ligne avant le vol.",
      },
      {
        question: "Faut-il inclure Bornéo dans un voyage en Malaisie ?",
        answer:
          "C'est souvent le temps fort du voyage : forêt primaire parmi les plus anciennes de la planète, observation des orangs-outans, des nasiques et parfois des éléphants pygmées, mont Kinabalu et plongée à Sipadan. Comptez au moins trois nuits sur place.",
      },
      {
        question: "Combien coûte un voyage en Malaisie ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées — l'ajout de Bornéo implique des vols intérieurs —, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "en Malaisie",
        "des circuits villes et nature, des aventures à Bornéo, des séjours balnéaires à Langkawi ou sur les îles de la côte est, des combinés avec la Thaïlande ou Singapour et des voyages entièrement sur mesure.",
        "Hôtels design à Kuala Lumpur, maisons de marchands restaurées à George Town et Malacca, lodges en forêt le long de la Kinabatangan et resorts de plage sur les îles.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Malaisie, nous
        sélectionnons des lodges engagés dans la reforestation de Bornéo, des
        centres de réhabilitation de la faune reconnus et des prestataires
        locaux qui font vivre les communautés riveraines de la forêt.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Malaisie commence ici",
    body: "Parlez-nous de votre projet. Circuit villes et nature, aventure à Bornéo, séjour balnéaire ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default malaisie;
