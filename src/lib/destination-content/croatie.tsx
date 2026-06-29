import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const croatie: DestinationContent = {
  slug: "croatie",
  meta: {
    title:
      "Voyage en Croatie : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Croatie avec CTA Voyages. Dubrovnik, Split et le palais de Dioclétien, îles de Hvar et Brač, lacs de Plitvice, parc de Krka. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Vieille ville fortifiée de Dubrovnik au bord de l'Adriatique — Voyage en Croatie avec CTA Voyages",
    label: "Destination Croatie",
    h1: "Voyage en Croatie : cités historiques et perles de l'Adriatique",
    description:
      "Circuit culturel, cabotage entre les îles, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "Aucun",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Croate",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Euro (EUR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Croatie, perle de l'Adriatique",
    body: (
      <>
        Baignée par les eaux cristallines de l&apos;Adriatique, la Croatie aligne
        ses remparts médiévaux, ses ruelles de marbre poli et ses îles
        innombrables sous un soleil généreux. Des murailles légendaires de{" "}
        <strong>Dubrovnik</strong> au palais romain de <strong>Dioclétien</strong>{" "}
        à Split, des cascades féeriques des <strong>lacs de Plitvice</strong> aux
        criques secrètes des îles de <strong>Hvar</strong> et <strong>Brač</strong>
        , chaque étape révèle une facette de ce pays où histoire millénaire,
        gastronomie méditerranéenne et art de vivre balnéaire se conjuguent à
        merveille. Naviguer d&apos;île en île à bord d&apos;un voilier, déguster
        un verre de vin face au coucher de soleil, flâner dans une vieille ville
        classée à l&apos;UNESCO ou se baigner dans des eaux turquoise : la Croatie
        se vit aussi bien en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>cabotage entre les îles</strong>, en{" "}
        <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Croatie ?",
    cards: [
      {
        icon: "castle",
        title: "Des cités historiques",
        text: "Remparts de Dubrovnik, palais de Dioclétien à Split, vieilles villes vénitiennes : la Croatie est un livre d'histoire à ciel ouvert, classé à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&auto=format",
        alt: "Remparts et toits orangés de la vieille ville de Dubrovnik",
      },
      {
        icon: "sailing",
        title: "Mille îles à explorer",
        text: "Plus de mille îles aux criques turquoise : Hvar, Brač, Korčula ou les Kornati se découvrent idéalement en bateau, d'escale en escale.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Voilier ancré dans une crique aux eaux turquoise d'une île croate",
      },
      {
        icon: "water_drop",
        title: "Une nature spectaculaire",
        text: "Cascades émeraude des lacs de Plitvice, chutes de Krka, canyons et forêts : la Croatie réserve des paysages naturels d'une rare beauté.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Cascades et bassins émeraude du parc national de Plitvice",
      },
      {
        icon: "restaurant",
        title: "Une table méditerranéenne",
        text: "Poissons grillés, fruits de mer, truffes d'Istrie et grands vins locaux : la cuisine croate célèbre les produits de la mer et de la terre.",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&auto=format",
        alt: "Plat de fruits de mer et poisson grillé accompagné de vin blanc local",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Croatie",
    steps: [
      {
        id: "dubrovnik",
        label: "JOURS 1 À 3",
        title: "Dubrovnik : la perle de l'Adriatique",
        text: "Immersion dans la cité fortifiée classée à l'UNESCO : tour des remparts, ruelles de marbre du Stradun, panorama depuis le mont Srđ et baignade dans les criques voisines.",
        img: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&h=600&fit=crop&auto=format",
        alt: "Dubrovnik",
        align: "left",
      },
      {
        id: "split",
        label: "JOURS 4 À 5",
        title: "Split & le palais de Dioclétien",
        text: "Découverte de Split et de son extraordinaire palais romain de Dioclétien, cœur vivant de la ville. Cathédrale, marchés et front de mer animé de la Riva.",
        img: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=800&h=600&fit=crop&auto=format",
        alt: "Split",
        align: "right",
      },
      {
        id: "iles-hvar-brac",
        label: "JOURS 6 À 8",
        title: "Îles de Hvar & Brač : cabotage en Adriatique",
        text: "Cap sur les îles : la mondaine Hvar et ses champs de lavande, la plage de Zlatni Rat sur Brač et ses criques cachées. Baignades, villages de pêcheurs et eaux cristallines.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Hvar et Brač",
        align: "left",
      },
      {
        id: "krka",
        label: "JOUR 9",
        title: "Parc national de Krka",
        text: "Excursion vers les cascades de Krka, où l'on peut admirer les chutes spectaculaires de Skradinski Buk au cœur d'une nature préservée, le long de passerelles en bois.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Krka",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "plitvice",
        label: "JOURS 10 À 11",
        title: "Lacs de Plitvice : merveille naturelle",
        text: "Journée féerique au parc national de Plitvice, classé à l'UNESCO : une succession de seize lacs étagés aux eaux émeraude reliés par des cascades, à parcourir à pied ou en barque.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Plitvice",
        align: "left",
      },
      {
        id: "zadar-cote",
        label: "JOURS 12 À 13",
        title: "Zadar & la côte : final adriatique",
        text: "Sur la route du retour, Zadar et son célèbre orgue marin, ses ruines romaines et ses couchers de soleil légendaires. Dernières flâneries le long de la côte dalmate.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&auto=format",
        alt: "Zadar",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la péninsule d&apos;Istrie, l&apos;île de
        Korčula, les Kornati ou la capitale Zagreb peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Croatie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Croatie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Croatie se découvre idéalement à la belle saison, mais chaque
              période a ses atouts :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : chaleur, eaux chaudes et
                ambiance festive, parfait pour les îles et la baignade.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mai, juin et septembre</strong> : la période idéale,
                ensoleillée et plus douce, parfaite pour combiner culture et
                plages sans la foule.
              </li>
              <li>
                <Icon name="check" />
                <strong>Avril et octobre</strong> : nature verdoyante, tarifs
                doux et villes plus calmes pour la découverte culturelle.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à
              votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Croatie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, la Croatie fait partie de l&apos;Union
              européenne et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport valide</strong>{" "}
                suffit pour les ressortissants français.
              </li>
              <li>
                <Icon name="check" />
                Aucun visa n&apos;est requis pour un séjour touristique.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour au moment de votre
              réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous en Croatie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Croatie
              :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire en Dalmatie ou citadin à
                Dubrovnik et Split.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière & cabotage</strong> : navigation d&apos;île en
                île le long de la côte adriatique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et
                expériences privatisées.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: (
          <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>étapes et la durée</strong> : Dubrovnik, Split,
                Hvar, Plitvice, Istrie…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                villa face à la mer, voilier privatisé.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : dégustation de
                vins, sortie en bateau, randonnée dans les parcs.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Croatie&nbsp;?</>,
        answer: (
          <>
            <p>Le budget dépend de plusieurs facteurs :</p>
            <ul>
              <li>
                <Icon name="check" />
                La durée du séjour
              </li>
              <li>
                <Icon name="check" />
                La période de départ
              </li>
              <li>
                <Icon name="check" />
                Le niveau d&apos;hébergement souhaité
              </li>
              <li>
                <Icon name="check" />
                Le type de voyage choisi
              </li>
              <li>
                <Icon name="check" />
                Les activités et prestations incluses
              </li>
            </ul>
            <p>
              Pour obtenir une estimation,{" "}
              <a href="/demande-devis">contactez-nous</a>. Nos conseillers vous
              adressent une proposition personnalisée, gratuite et sans
              engagement.
            </p>
          </>
        ),
      },
      {
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales
                visites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets,
                bons, programmes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout
                votre séjour.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels hébergements proposez-vous&nbsp;?</>,
        answer: (
          <>
            <p>Nous sélectionnons les hébergements selon vos préférences :</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des vieilles
                villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas et resorts face à la mer</strong> sur les plus
                belles côtes de Dalmatie.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voiliers et yachts privatisés</strong> pour le cabotage
                entre les îles.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de
                caractère.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment demander un devis&nbsp;?</>,
        answer: (
          <>
            <p>C&apos;est simple, rapide et gratuit :</p>
            <ul>
              <li>
                <Icon name="description" />
                Via notre <strong>formulaire en ligne</strong>.
              </li>
              <li>
                <Icon name="call" />
                Par téléphone : <strong>+33 (0)5 34 391 391</strong>
              </li>
              <li>
                <Icon name="mail" />
                Par email : <strong>voyages@cta-events.com</strong>
              </li>
            </ul>
            <p>
              Nos conseillers vous répondent <strong>sous 48h</strong>,
              gratuitement et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Croatie ?",
        answer:
          "La meilleure période s'étend de mai à septembre. Mai, juin et septembre sont idéaux : ensoleillés et plus doux, parfaits pour combiner culture et plages sans la foule. L'été (juin-août) offre chaleur et ambiance festive, idéal pour les îles.",
      },
      {
        question: "Faut-il un visa pour se rendre en Croatie ?",
        answer:
          "Non, la Croatie fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport valide suffit pour les ressortissants français, sans visa pour un séjour touristique.",
      },
      {
        question: "Quels types de voyages proposez-vous en Croatie ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits culturels, des croisières et cabotages entre les îles, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Croatie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Croatie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Croatie ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Croatie ?",
        answer:
          "Hôtels 4 et 5 étoiles dans les vieilles villes, villas et resorts face à la mer en Dalmatie, voiliers privatisés pour le cabotage et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Croatie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Croatie comme ailleurs,
        nous privilégions des prestataires locaux responsables, des hébergements
        à taille humaine et un tourisme respectueux des cités historiques, des
        parcs nationaux et des écosystèmes marins de l&apos;Adriatique.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Croatie commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, cabotage entre les îles ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default croatie;
