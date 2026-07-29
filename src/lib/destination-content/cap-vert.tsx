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

const capVert: DestinationContent = {
  slug: "cap-vert",
  meta: {
    title:
      "Voyage au Cap-Vert : séjour, circuit",
    description:
      "Organisez votre voyage au Cap-Vert avec CTA Voyages. Plages de Sal et Boa Vista, randonnées à Santo Antão, volcan de Fogo, Mindelo et musique cap-verdienne.",
  },
  hero: {
    image: "/generated/cap-vert.jpg",
    imageAlt:
      "Plage de sable et océan Atlantique au Cap-Vert — Voyage au Cap-Vert avec CTA Voyages",
    label: "Destination Cap-Vert",
    h1: "Voyage au Cap-Vert : le soleil toute l'année et la morabeza",
    description:
      "Séjour balnéaire à Sal ou Boa Vista, randonnées à Santo Antão, itinéraire multi-îles ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~6h (direct)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-3h (été)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Portugais, créole",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Escudo (CVE)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Toute l'année",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Cap-Vert, dix îles entre Afrique et Atlantique",
    body: (
      <>
        Posé à cinq cents kilomètres au large du Sénégal, l&apos;archipel
        cap-verdien bénéficie d&apos;un climat sec et ensoleillé toute
        l&apos;année, et d&apos;une identité créole unique, née de la rencontre
        entre l&apos;Afrique et le Portugal. Chaque île a son caractère&nbsp;:{" "}
        <strong>Sal</strong> et <strong>Boa Vista</strong> alignent des plages
        interminables et des spots de kitesurf réputés&nbsp;;{" "}
        <strong>Santo Antão</strong> déroule des sentiers vertigineux
        au-dessus de vallées cultivées en terrasses, sans doute parmi les plus
        belles randonnées de l&apos;Atlantique&nbsp;; <strong>Fogo</strong>{" "}
        s&apos;organise autour de son volcan encore actif, avec des villages
        installés à l&apos;intérieur même de la caldeira&nbsp;;{" "}
        <strong>São Vicente</strong> et sa ville de <strong>Mindelo</strong>,
        berceau de Cesária Évora, vit au rythme de la <em>morna</em> et de la{" "}
        <em>coladeira</em>. Un mot résume l&apos;esprit local&nbsp;: la{" "}
        <em>morabeza</em>, ce mélange de gentillesse et de douceur de vivre.{" "}
        <strong>Séjour balnéaire</strong>, <strong>randonnée</strong>,{" "}
        <strong>itinéraire multi-îles</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: le choix vous appartient.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Cap-Vert ?",
    cards: [
      {
        icon: "wb_sunny",
        title: "Le soleil toute l'année",
        text: "Un climat sec et doux en permanence, entre 24 et 30 °C : c'est la destination soleil la plus proche de l'Europe en plein hiver.",
        img: "/generated/cap-vert-3.jpg",
        alt: "Plage ensoleillée et eaux turquoise d'une île du Cap-Vert",
      },
      {
        icon: "hiking",
        title: "Les sentiers de Santo Antão",
        text: "Vallées luxuriantes, crêtes vertigineuses, chemins pavés à flanc de falaise : un terrain de randonnée spectaculaire et encore confidentiel.",
        img: "/generated/cap-vert-1.jpg",
        alt: "Sentier de randonnée sur une crête volcanique de Santo Antão",
      },
      {
        icon: "music_note",
        title: "La musique cap-verdienne",
        text: "Morna, coladeira, funaná : à Mindelo, la musique sort des bars chaque soir, dans la ville qui a donné Cesária Évora au monde.",
        img: "/generated/cap-vert-2.jpg",
        alt: "Rue colorée et ambiance musicale à Mindelo",
      },
      {
        icon: "kitesurfing",
        title: "Les sports de glisse",
        text: "Alizés constants, spots réputés à Sal et Boa Vista : le Cap-Vert est l'une des destinations européennes de référence pour le kite et la planche.",
        img: "/generated/cap-vert-4.jpg",
        alt: "Kitesurf et vagues sur une plage venteuse du Cap-Vert",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Cap-Vert",
    steps: [
      {
        id: "sal",
        label: "JOURS 1 À 3",
        title: "Sal, plages et salines",
        text: "Arrivée sur l'île la plus accessible : plages infinies de Santa Maria, bain flottant dans les salines de Pedra de Lume, installées dans un cratère.",
        img: "/generated/cap-vert-3.jpg",
        alt: "Longue plage de sable clair et océan à Santa Maria, Sal",
        align: "left",
      },
      {
        id: "sao-vicente",
        label: "JOURS 4 ET 5",
        title: "São Vicente & Mindelo",
        text: "Vol vers la capitale culturelle de l'archipel : le port colonial, le marché africain, les façades colorées et une soirée musicale dans un bar de morna.",
        img: "/generated/cap-vert-2.jpg",
        alt: "Port et maisons colorées de Mindelo à São Vicente",
        align: "right",
      },
      {
        id: "santo-antao",
        label: "JOURS 6 À 8",
        title: "Randonnées à Santo Antão",
        text: "Traversée en ferry vers l'île la plus verte : descente de la vallée de Paúl, route de la Corda entre les nuages et villages accrochés aux pentes.",
        img: "/generated/cap-vert-1.jpg",
        alt: "Vallée cultivée en terrasses et crêtes de Santo Antão",
        align: "left",
      },
      {
        id: "fogo",
        label: "JOURS 9 ET 10",
        title: "L'île volcanique de Fogo",
        text: "Cap au sud : ascension du Pico do Fogo, découverte des villages installés dans la caldeira et dégustation du vin et du café cultivés sur la lave.",
        img: "/generated/cap-vert-1.jpg",
        alt: "Cône volcanique du Pico do Fogo et champs de lave",
        align: "right",
      },
      {
        id: "boa-vista",
        label: "JOURS 11 À 13",
        title: "Détente à Boa Vista",
        text: "Fin du voyage sur l'île aux dunes : plages désertes de Santa Mónica, observation des tortues en saison et excursion en 4x4 dans le désert de Viana.",
        img: "/generated/cap-vert.jpg",
        alt: "Dunes et plage déserte de l'île de Boa Vista",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Santiago, l&apos;île historique avec Cidade Velha classée à
        l&apos;UNESCO, ou un séjour balnéaire prolongé s&apos;intègrent
        facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Cap-Vert",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour le Cap-Vert&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>L&apos;archipel se visite toute l&apos;année</strong>,
              avec quelques nuances&nbsp;:
            </p>
            {checklist([
              <>
                <strong>De novembre à juin</strong>&nbsp;: la période la plus sûre,
                sèche et ensoleillée, idéale pour la randonnée.
              </>,
              <>
                <strong>De juillet à octobre</strong>&nbsp;: un peu plus chaud et
                humide, mais c&apos;est la saison de ponte des tortues.
              </>,
              <>
                <strong>De décembre à mars</strong>&nbsp;: les alizés soufflent
                fort, pour le plus grand bonheur des kitesurfeurs.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour le Cap-Vert&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont simples&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour de moins de 30 jours.
              </>,
              <>
                Une <strong>taxe d&apos;entrée</strong> est à régler en ligne
                avant le départ&nbsp;: nous vous guidons dans la démarche.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Cap-Vert", [
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: Sal ou Boa Vista en hôtel les
          pieds dans l&apos;eau.
        </>,
        <>
          <strong>Séjour randonnée</strong>&nbsp;: Santo Antão et Fogo, avec
          guide local.
        </>,
        <>
          <strong>Itinéraire multi-îles</strong>&nbsp;: trois à quatre îles en
          vols et ferries.
        </>,
        <>
          <strong>Séjour sportif</strong>&nbsp;: kitesurf, planche à voile et
          plongée.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>îles et la durée</strong>&nbsp;: une seule île pour un
          séjour posé, ou trois à quatre en itinérance.
        </>,
        <>
          Le <strong>dosage</strong>&nbsp;: part de plage, part de randonnée et
          part de culture.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: soirée morna, ascension du
          volcan, observation des tortues, sortie en catamaran.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Cap-Vert",
        "Le nombre d'îles visitées : chaque étape implique un vol interne ou un ferry",
      ),
      {
        question: <>Quelle île choisir au Cap-Vert&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Tout dépend de ce que vous cherchez&nbsp;:</strong>
            </p>
            {checklist([
              <>
                <strong>Sal et Boa Vista</strong>&nbsp;: plages, hôtels-clubs et
                sports nautiques, avec vols directs depuis Paris.
              </>,
              <>
                <strong>Santo Antão</strong>&nbsp;: la randonnée, sans conteste la
                plus spectaculaire de l&apos;archipel.
              </>,
              <>
                <strong>São Vicente</strong>&nbsp;: la culture et la musique, à
                Mindelo.
              </>,
              <>
                <strong>Fogo et Santiago</strong>&nbsp;: le volcan, l&apos;histoire
                et l&apos;authenticité.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("au Cap-Vert", [
        <>
          <strong>Hôtels-clubs</strong> en bord de plage à Sal et Boa Vista.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> dans les vallées de Santo Antão.
        </>,
        <>
          <strong>Hôtels de charme</strong> dans le centre historique de Mindelo.
        </>,
        <>
          <strong>Écolodges</strong> au cœur de la caldeira de Fogo.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Cap-Vert ?",
        answer:
          "L'archipel se visite toute l'année. De novembre à juin, le climat est sec et ensoleillé, idéal pour la randonnée. De juillet à octobre, il fait un peu plus chaud et humide, mais c'est la saison de ponte des tortues. De décembre à mars, les alizés font le bonheur des kitesurfeurs.",
      },
      {
        question: "Faut-il un visa pour le Cap-Vert ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour de moins de 30 jours, mais une taxe d'entrée doit être réglée en ligne avant le départ. Le passeport doit être valide six mois après la date de retour.",
      },
      {
        question: "Quelle île choisir au Cap-Vert ?",
        answer:
          "Sal et Boa Vista pour les plages, les hôtels-clubs et les sports nautiques avec vols directs, Santo Antão pour la randonnée spectaculaire, São Vicente et Mindelo pour la culture et la musique, Fogo et Santiago pour le volcan et l'histoire.",
      },
      {
        question: "Combien coûte un voyage au Cap-Vert ?",
        answer:
          "Le budget dépend de la durée, de la saison, du nombre d'îles visitées — chaque étape impliquant un vol interne ou un ferry —, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Cap-Vert",
        "des séjours balnéaires à Sal ou Boa Vista, des séjours randonnée à Santo Antão et Fogo, des itinéraires multi-îles, des séjours sportifs et des voyages entièrement sur mesure.",
        "Hôtels-clubs en bord de plage à Sal et Boa Vista, maisons d'hôtes dans les vallées de Santo Antão, hôtels de charme à Mindelo et écolodges dans la caldeira de Fogo.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Cap-Vert, archipel où
        l&apos;eau douce est une ressource rare, nous privilégions les
        hébergements engagés dans sa gestion raisonnée, les guides de randonnée
        locaux et les programmes de protection des tortues marines lors de la
        saison de ponte.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Cap-Vert commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire à Sal ou Boa Vista, randonnées à Santo Antão, itinéraire multi-îles ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default capVert;
