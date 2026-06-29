import type { ThemeContent } from "../types";

/**
 * Page thème « Croisière Îles grecques & Égée ». Images : visuels Unsplash à valider/remplacer.
 */
const croisiereIlesGrecques: ThemeContent = {
  slug: "iles-grecques",
  parentLabel: "Croisières",
  parentHref: "/croisieres",
  meta: {
    title: "Croisière Îles grecques & mer Égée sur mesure — Cyclades & Dodécanèse | CTA Voyages",
    description:
      "Partez en croisière dans les îles grecques avec CTA Voyages : Cyclades aux maisons blanches, eaux turquoise, sites antiques et couchers de soleil mythiques. Escales à Santorin, Mykonos, Crète, Rhodes, Athènes et Corfou. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Maisons blanches et dômes bleus de Santorin surplombant la mer Égée",
    label: "Croisière",
    h1: "Croisière dans les îles grecques : la mer Égée, île après île",
    description:
      "Maisons blanches accrochées aux falaises, eaux turquoise, vestiges antiques et couchers de soleil légendaires. Embarquez pour les Cyclades, le Dodécanèse et la Crète — un itinéraire composé sur mesure par votre conseiller.",
    primaryCtaLabel: "Composer ma croisière",
    secondaryCtaLabel: "Pourquoi une croisière en Grèce ?",
  },
  presentation: {
    eyebrow: "Le voyage au fil de l'eau",
    h2: "Une île chaque matin, un coucher de soleil chaque soir",
    body: (
      <>
        Se réveiller face à une nouvelle île, flâner dans un dédale de ruelles
        blanchies à la chaux, plonger dans une crique turquoise puis assister au
        coucher de soleil le plus célèbre du monde&nbsp;: la croisière dans les
        îles grecques, c&apos;est l&apos;art de relier les merveilles de
        l&apos;Égée sans défaire ses valises. Chez CTA Voyages, votre conseiller
        choisit le navire, l&apos;itinéraire et les escales — Santorin la
        spectaculaire, Mykonos la festive, la Crète minoenne, Rhodes la
        médiévale — pour une croisière qui mêle culture, baignade et art de
        vivre méditerranéen.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
      alt: "Maisons blanches et dômes bleus de Santorin au-dessus de la caldeira",
      badge: "CYCLADES",
      name: "Santorin",
      desc: "La caldeira volcanique, Oia et son coucher de soleil mythique.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
      alt: "Moulins à vent blancs de Mykonos face à la mer",
      badge: "CYCLADES",
      name: "Mykonos",
      desc: "Moulins blancs, Petite Venise, plages branchées et nuits festives.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=600&h=400&fit=crop&auto=format",
      alt: "Eaux turquoise et lagon de la côte crétoise",
      badge: "ÉGÉE",
      name: "Crète",
      desc: "Palais de Knossos, lagon turquoise et gastronomie crétoise.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&h=400&fit=crop&auto=format",
      alt: "Remparts médiévaux de la vieille ville de Rhodes",
      badge: "DODÉCANÈSE",
      name: "Rhodes",
      desc: "Cité médiévale fortifiée, ruelles des Chevaliers et plages dorées.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
      alt: "L'Acropole et le Parthénon d'Athènes au coucher du soleil",
      badge: "ATTIQUE",
      name: "Athènes",
      desc: "Acropole, Parthénon et port du Pirée, porte d'entrée de l'Égée.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=600&h=400&fit=crop&auto=format",
      alt: "Côte verdoyante et mer turquoise de l'île de Corfou",
      badge: "IONIENNE",
      name: "Corfou",
      desc: "Verdure luxuriante, vieille ville vénitienne et criques cachées.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une croisière dans les îles grecques avec CTA Voyages ?",
    cards: [
      {
        icon: "directions_boat",
        title: "Le bon navire, le bon itinéraire",
        text: "Grand paquebot, yacht ou voilier de charme : nous choisissons le bateau et le parcours adaptés à vos envies.",
        img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
        alt: "Bateau de croisière naviguant dans les Cyclades",
      },
      {
        icon: "temple_buddhist",
        title: "L'Antiquité à portée d'escale",
        text: "Knossos, Délos, l'Acropole : nos conseillers organisent vos visites guidées des grands sites antiques.",
        img: "https://images.unsplash.com/photo-1503152394-c571994fd383?w=600&h=400&fit=crop&auto=format",
        alt: "Colonnes d'un temple grec antique",
      },
      {
        icon: "kayaking",
        title: "Baignades et criques turquoise",
        text: "Temps libre pensé pour profiter des plus belles plages et des eaux cristallines de chaque île.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&h=400&fit=crop&auto=format",
        alt: "Crique aux eaux turquoise d'une île grecque",
      },
      {
        icon: "restaurant",
        title: "Saveurs de l'Égée",
        text: "Mezzés, poisson grillé, vin de Santorin : nos conseillers partagent les meilleures tavernes d'escale.",
        img: "https://images.unsplash.com/photo-1544510808-91bcbee1df55?w=600&h=400&fit=crop&auto=format",
        alt: "Table de mezzés et spécialités grecques",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Huit jours en mer Égée, du Pirée à Mykonos, Santorin et la Crète",
    intro:
      "Une croisière de huit jours au départ d'Athènes, qui relie les plus belles escales des Cyclades et du Dodécanèse, île après île.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Embarquement au Pirée (Athènes)",
        text: "Accueil et transfert vers le port du Pirée, embarquement à bord de votre navire. Installation en cabine, premier dîner en mer et appareillage au coucher du soleil, l'Acropole en toile de fond.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
        alt: "L'Acropole et le port du Pirée à Athènes au coucher du soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Escale à Mykonos",
        text: "Première escale dans la plus festive des Cyclades : flânerie dans les ruelles blanchies de la Chora, photo des célèbres moulins à vent et de la Petite Venise, avant une pause baignade sur une plage branchée.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Moulins à vent blancs de Mykonos face à la mer Égée",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3",
        title: "Escale à Santorin",
        text: "L'escale mythique : montée vers Fira et Oia, perchés sur la caldeira volcanique, dégustation d'un vin local en terrasse et, en point d'orgue, le coucher de soleil le plus célèbre du monde sur les maisons blanches.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format",
        alt: "Maisons blanches et dômes bleus de Santorin surplombant la caldeira",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 4",
        title: "Escale à Rhodes",
        text: "Cap sur le Dodécanèse et la cité médiévale fortifiée de Rhodes : ruelle des Chevaliers, palais des Grands Maîtres et remparts classés à l'UNESCO, suivis d'un temps libre sur les plages dorées.",
        img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&h=400&fit=crop&auto=format",
        alt: "Remparts médiévaux de la vieille ville de Rhodes",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 5 À 6",
        title: "Escale en Crète",
        text: "Deux jours sur la plus grande île grecque : visite du palais minoen de Knossos, flânerie dans La Canée vénitienne, déjeuner de spécialités crétoises et après-midi baignade dans un lagon turquoise.",
        img: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=600&h=400&fit=crop&auto=format",
        alt: "Eaux turquoise et lagon de la côte crétoise",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 7 À 8",
        title: "Navigation & retour au Pirée",
        text: "Dernière journée de navigation au fil de l'Égée, entre détente à bord et derniers couchers de soleil en mer, avant le retour matinal au port du Pirée et le transfert vers l'aéroport d'Athènes.",
        img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
        alt: "Bateau de croisière naviguant au coucher du soleil dans les Cyclades",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong> Cet exemple est proposé pour vous
        inspirer. Votre conseiller CTA Voyages adapte chaque étape selon vos
        envies, votre rythme et votre budget.
      </>
    ),
  },
  atypical: {
    eyebrow: "Hors des sentiers battus",
    h2: "Nos escales confidentielles des Cyclades",
    intro:
      "Envie d'îles plus secrètes ? Voici quelques escales authentiques que nos conseillers adorent glisser dans un itinéraire.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&h=400&fit=crop&auto=format",
        alt: "Village blanc perché de Folégandros au-dessus de la mer",
        tag: "Cyclades",
        name: "Folégandros",
        text: "La Cyclade secrète : chora vertigineuse, falaises sauvages et calme absolu.",
      },
      {
        img: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=600&h=400&fit=crop&auto=format",
        alt: "Port coloré de Symi dans le Dodécanèse",
        tag: "Dodécanèse",
        name: "Symi",
        text: "Maisons néoclassiques pastel en amphithéâtre autour d'un port de carte postale.",
      },
      {
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop&auto=format",
        alt: "Plage volcanique et eaux profondes de Milos",
        tag: "Cyclades",
        name: "Milos",
        text: "Île volcanique aux plages lunaires, criques cachées et eaux émeraude.",
      },
      {
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop&auto=format",
        alt: "Village traditionnel de Naxos parmi les oliviers",
        tag: "Cyclades",
        name: "Naxos",
        text: "La plus verte des Cyclades : villages de montagne, ruines antiques et longues plages.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en croisière dans les îles grecques ?",
    intro:
      "La saison s'étend d'avril à octobre. Mai-juin et septembre offrent douceur, mer chaude et moins d'affluence. Votre conseiller affine selon vos dates.",
    rows: [
      {
        destination: "Santorin",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Mykonos",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Crète",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Rhodes",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Athènes",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Corfou",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre croisière dans les îles grecques",
    left: [
      {
        question: "Combien de jours pour une croisière dans les îles grecques ?",
        answer: (
          <p>
            En général 7 à 10 nuits, le temps d&apos;enchaîner les Cyclades et
            le Dodécanèse sans courir. Des formats courts de 4 à 5 nuits
            existent autour des incontournables. Votre conseiller adapte la
            durée à l&apos;itinéraire et à vos envies.
          </p>
        ),
      },
      {
        question: "Quelles sont les escales incontournables ?",
        answer: (
          <p>
            Santorin et son coucher de soleil, Mykonos et ses moulins, la Crète
            minoenne, Rhodes la médiévale, sans oublier Athènes et son Acropole
            au départ&nbsp;: ce sont les classiques que nous combinons selon
            l&apos;itinéraire choisi.
          </p>
        ),
      },
      {
        question: "Les vols et les transferts sont-ils compris ?",
        answer: (
          <p>
            Oui, nous composons un forfait complet&nbsp;: vols jusqu&apos;au
            port d&apos;embarquement (Le Pirée, Athènes…), transferts et
            croisière. Vous pouvez ajouter des excursions ou des nuits avant
            embarquement.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en croisière en Grèce en famille ?",
        answer: (
          <p>
            Bien sûr. Nous sélectionnons des navires aux clubs enfants et un
            programme adapté (baignades, sites antiques ludiques, balades) pour
            petits et grands.
          </p>
        ),
      },
      {
        question: "Faut-il réserver les excursions à l'avance ?",
        answer: (
          <p>
            Pour les sites très demandés (Acropole, Knossos, Délos), oui&nbsp;:
            nous réservons vos visites guidées et billets coupe-file pour
            profiter pleinement de chaque escale.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous vos envies d&apos;escales, vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Combien de jours pour une croisière dans les îles grecques ?",
        answer:
          "En général 7 à 10 nuits pour enchaîner Cyclades et Dodécanèse, avec des formats courts de 4 à 5 nuits possibles. La durée s'adapte à l'itinéraire et à vos envies.",
      },
      {
        question: "Quelles sont les escales incontournables d'une croisière en Grèce ?",
        answer:
          "Santorin, Mykonos, la Crète, Rhodes, ainsi qu'Athènes et son Acropole au départ : ce sont les classiques que nous combinons selon l'itinéraire choisi.",
      },
      {
        question: "Les vols et les transferts sont-ils compris ?",
        answer:
          "Oui, nous composons un forfait complet : vols jusqu'au port d'embarquement, transferts et croisière, avec la possibilité d'ajouter excursions et nuits avant embarquement.",
      },
      {
        question: "Peut-on partir en croisière en Grèce en famille ?",
        answer:
          "Oui, avec des navires aux clubs enfants et un programme adapté (baignades, sites antiques ludiques, balades) pour petits et grands.",
      },
      {
        question: "Faut-il réserver les excursions à l'avance ?",
        answer:
          "Pour les sites très demandés comme l'Acropole, Knossos ou Délos, oui : nous réservons vos visites guidées et billets coupe-file pour profiter pleinement de chaque escale.",
      },
      {
        question: "Comment obtenir un devis pour une croisière dans les îles grecques ?",
        answer:
          "Indiquez vos envies d'escales, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        La croisière aussi peut se faire mieux&nbsp;: nous privilégions les
        compagnies engagées dans la réduction des émissions, les excursions à
        taille humaine et les tavernes locales. Préserver l&apos;Égée, ses îles
        et ses habitants — voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à larguer les amarres vers les Cyclades ?",
    body: "Dites-nous quelles îles vous font rêver — dates, durée, budget — et votre conseiller dédié compose votre croisière sur mesure, gratuitement et sans engagement.",
  },
};

export default croisiereIlesGrecques;
