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

const bahamas: DestinationContent = {
  slug: "bahamas",
  meta: {
    title:
      "Voyage aux Bahamas : séjour, croisière",
    description:
      "Organisez votre voyage aux Bahamas avec CTA Voyages. Exumas et cochons nageurs, sable rose d'Harbour Island, Nassau, blue holes d'Andros.",
  },
  hero: {
    image: "/generated/bahamas.jpg",
    imageAlt:
      "Eaux turquoise et banc de sable aux Bahamas — Voyage aux Bahamas avec CTA Voyages",
    label: "Destination Bahamas",
    h1: "Voyage aux Bahamas : lagons turquoise et îles désertes",
    description:
      "Séjour balnéaire de luxe, croisière en catamaran dans les Exumas, lune de miel ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~12h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-6h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Anglais" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dollar bahaméen (BSD), USD accepté",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Décembre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Les Bahamas, sept cents îles sur des eaux irréelles",
    body: (
      <>
        Vues du ciel, les Bahamas ressemblent à un dégradé de turquoise
        impossible&nbsp;: les hauts-fonds sableux et l&apos;absence de fleuves
        chargés de sédiments donnent à la mer une transparence spectaculaire, à
        tel point que les astronautes citent souvent l&apos;archipel comme le
        point le plus reconnaissable depuis l&apos;espace. Les{" "}
        <strong>Exumas</strong>, chapelet de trois cent soixante-cinq îlots,
        concentrent l&apos;essentiel de la magie&nbsp;: bancs de sable
        émergeants, grottes marines, iguanes endémiques et les fameux{" "}
        <strong>cochons nageurs</strong> de Big Major Cay. À{" "}
        <strong>Harbour Island</strong>, la plage doit sa teinte rose aux débris
        de coraux mêlés au sable&nbsp;; à <strong>Andros</strong>, les{" "}
        <strong>blue holes</strong> — puits marins vertigineux — attirent les
        plongeurs du monde entier, le long de la troisième barrière de corail de
        la planète. <strong>Nassau</strong> conserve ses forts coloniaux et son
        marché de paille, tandis que Paradise Island déploie ses resorts.{" "}
        <strong>Séjour balnéaire</strong>,{" "}
        <strong>croisière en catamaran</strong>,{" "}
        <strong>lune de miel</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: le choix vous appartient.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Bahamas ?",
    cards: [
      {
        icon: "water",
        title: "Les eaux des Exumas",
        text: "Des bancs de sable qui émergent en pleine mer, des dégradés de turquoise à perte de vue et des mouillages parmi les plus beaux des Caraïbes.",
        img: "/generated/bahamas-1.jpg",
        alt: "Banc de sable et dégradés turquoise vus du ciel aux Exumas",
      },
      {
        icon: "beach_access",
        title: "La plage de sable rose",
        text: "À Harbour Island, cinq kilomètres de sable teinté de rose par les débris de coraux : l'une des plages les plus singulières du monde.",
        img: "/generated/bahamas-3.jpg",
        alt: "Plage de sable rosé bordée d'une mer turquoise",
      },
      {
        icon: "scuba_diving",
        title: "Les fonds marins",
        text: "Blue holes d'Andros, épaves, jardins de corail et récifs cristallins : une visibilité qui dépasse souvent trente mètres.",
        img: "/generated/bahamas-4.jpg",
        alt: "Plongée sur un récif corallien dans les eaux limpides des Bahamas",
      },
      {
        icon: "sailing",
        title: "La navigation entre les îles",
        text: "Sept cents îles et îlots à explorer en catamaran : criques désertes, grottes marines et mouillages où l'on est seuls au monde.",
        img: "/generated/bahamas-2.jpg",
        alt: "Catamaran au mouillage devant un îlot désert des Bahamas",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Bahamas",
    steps: [
      {
        id: "nassau",
        label: "JOURS 1 ET 2",
        title: "Nassau & Paradise Island",
        text: "Arrivée dans la capitale : forts coloniaux, escalier de la Reine, marché de paille et première baignade sur les plages de Cable Beach.",
        img: "/generated/bahamas-2.jpg",
        alt: "Front de mer et bâtiments coloniaux de Nassau",
        align: "left",
      },
      {
        id: "exumas",
        label: "JOURS 3 À 6",
        title: "Croisière dans les Exumas",
        text: "Embarquement pour l'archipel des Exumas : bancs de sable en pleine mer, cochons nageurs de Big Major Cay, iguanes de Bitter Guana et grotte de Thunderball.",
        img: "/generated/bahamas-1.jpg",
        alt: "Îlots et eaux turquoise de l'archipel des Exumas",
        align: "right",
      },
      {
        id: "harbour-island",
        label: "JOURS 7 ET 8",
        title: "Harbour Island & sable rose",
        text: "Cap sur Eleuthera : la plage rose de Pink Sands, les cottages coloniaux de Dunmore Town et les voiturettes de golf comme seul moyen de transport.",
        img: "/generated/bahamas-3.jpg",
        alt: "Plage de sable rose et cottages colorés d'Harbour Island",
        align: "left",
      },
      {
        id: "andros",
        label: "JOURS 9 ET 10",
        title: "Andros & les blue holes",
        text: "La plus grande et la plus sauvage des îles : plongée dans les blue holes, exploration de la barrière de corail et pêche à la mouche dans les flats.",
        img: "/generated/bahamas.jpg",
        alt: "Blue hole et eaux profondes au large d'Andros",
        align: "right",
      },
      {
        id: "detente",
        label: "JOURS 11 À 13",
        title: "Détente en resort",
        text: "Fin du voyage dans un resort face au lagon : spa, sports nautiques, sorties en bateau privatisé et dîners les pieds dans le sable.",
        img: "/generated/bahamas-3.jpg",
        alt: "Resort en bord de plage et transats face au lagon",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Les Abacos, Long Island ou un combiné avec la Floride ou Cuba
        s&apos;organisent facilement depuis Nassau.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Bahamas",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour les Bahamas&nbsp;?</>
        ),
        answer: (
          <>
            <p>La haute saison est nettement plus sûre&nbsp;:</p>
            {checklist([
              <>
                <strong>De décembre à avril</strong>&nbsp;: temps sec, mer calme
                et températures idéales, hors saison cyclonique.
              </>,
              <>
                <strong>Mai et novembre</strong>&nbsp;: de bonnes intersaisons,
                avec moins de monde et des tarifs plus doux.
              </>,
              <>
                <strong>De juin à novembre</strong>&nbsp;: saison des pluies et
                risque de cyclones, principalement d&apos;août à octobre.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour les Bahamas&nbsp;?</>,
        answer: (
          <>
            <p>Un point de vigilance sur les escales&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 90 jours.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour
                et billet de retour.
              </>,
              <>
                La plupart des vols transitent par les{" "}
                <strong>États-Unis</strong>&nbsp;: une autorisation ESTA est
                alors indispensable.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("aux Bahamas", [
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: resort face au lagon à Nassau
          ou sur les Out Islands.
        </>,
        <>
          <strong>Croisière en catamaran</strong>&nbsp;: navigation dans les
          Exumas, en cabine ou en privatisation.
        </>,
        <>
          <strong>Séjour plongée</strong>&nbsp;: blue holes, épaves et barrière
          de corail.
        </>,
        <>
          <strong>Lune de miel</strong>&nbsp;: suite face à l&apos;océan et
          expériences privatisées.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>îles et la durée</strong>&nbsp;: New Providence, Exumas,
          Eleuthera, Andros, Abacos.
        </>,
        <>
          Le <strong>format</strong>&nbsp;: séjour posé, itinérance en avion-taxi
          ou navigation en catamaran.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: excursion aux cochons nageurs,
          plongée, pêche au gros, sortie au coucher du soleil.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "aux Bahamas",
        "Le choix des îles : les Out Islands impliquent des vols internes ou des transferts en bateau",
      ),
      {
        question: <>Quelle île choisir aux Bahamas&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Chaque île a une personnalité très marquée&nbsp;:</strong>
            </p>
            {checklist([
              <>
                <strong>New Providence et Paradise Island</strong>&nbsp;: resorts,
                animation et facilité d&apos;accès.
              </>,
              <>
                <strong>Les Exumas</strong>&nbsp;: les plus beaux paysages marins,
                idéals pour la navigation.
              </>,
              <>
                <strong>Harbour Island et Eleuthera</strong>&nbsp;: le charme
                colonial et la plage rose.
              </>,
              <>
                <strong>Andros et les Abacos</strong>&nbsp;: la nature, la plongée
                et la tranquillité.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("aux Bahamas", [
        <>
          <strong>Resorts de luxe</strong> face au lagon à Nassau et Paradise
          Island.
        </>,
        <>
          <strong>Boutique-hôtels</strong> coloniaux à Harbour Island.
        </>,
        <>
          <strong>Villas privées</strong> avec plage et personnel sur les Out
          Islands.
        </>,
        <>
          <strong>Catamarans</strong> avec équipage pour naviguer dans les
          Exumas.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter les Bahamas ?",
        answer:
          "De décembre à avril, avec un temps sec, une mer calme et des températures idéales, hors saison cyclonique. Mai et novembre sont de bonnes intersaisons. De juin à novembre, le risque de cyclones est présent, surtout d'août à octobre.",
      },
      {
        question: "Faut-il un visa pour les Bahamas ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour de moins de 90 jours, avec un passeport valide six mois après le retour. La plupart des vols transitant par les États-Unis, une autorisation ESTA est indispensable.",
      },
      {
        question: "Quelle île choisir aux Bahamas ?",
        answer:
          "New Providence et Paradise Island pour les resorts et la facilité d'accès, les Exumas pour les plus beaux paysages marins et la navigation, Harbour Island et Eleuthera pour le charme colonial et la plage rose, Andros et les Abacos pour la nature et la plongée.",
      },
      {
        question: "Combien coûte un voyage aux Bahamas ?",
        answer:
          "Le budget dépend de la durée, de la saison, des îles choisies — les Out Islands impliquant des vols internes ou des transferts en bateau —, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "aux Bahamas",
        "des séjours balnéaires en resort, des croisières en catamaran dans les Exumas, des séjours plongée, des lunes de miel et des voyages entièrement sur mesure.",
        "Resorts de luxe face au lagon à Nassau et Paradise Island, boutique-hôtels coloniaux à Harbour Island, villas privées avec plage sur les Out Islands et catamarans avec équipage.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Aux Bahamas, nous
        sélectionnons des opérateurs respectueux de la faune — notamment lors des
        excursions vers les cochons nageurs et les iguanes, où le nourrissage est
        strictement encadré — et des hébergements engagés dans la protection des
        récifs et la limitation du plastique à usage unique.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Bahamas commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire de luxe, croisière en catamaran dans les Exumas, lune de miel ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default bahamas;
