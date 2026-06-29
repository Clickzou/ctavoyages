import type { ThemeContent } from "../types";

/**
 * Page thème « Voyage entre amis ». Images : visuels à valider/remplacer.
 */
const vsmAmis: ThemeContent = {
  slug: "amis",
  parentLabel: "Voyage sur mesure",
  parentHref: "/voyage-sur-mesure",
  meta: {
    title: "Voyage entre amis sur mesure — Aventures de groupe | CTA Voyages",
    description:
      "Organisez votre voyage entre amis avec CTA Voyages : aventures de groupe sur mesure, hébergements adaptés, activités fun et logistique gérée. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Groupe d'amis en voyage profitant d'un coucher de soleil",
    label: "Voyage entre amis",
    h1: "Voyage entre amis : la bande au grand complet",
    description:
      "Partez à plusieurs sans prise de tête : nous composons l'aventure de groupe qui vous ressemble — hébergements adaptés, activités fun et logistique gérée de A à Z pour profiter ensemble, sans stress.",
    primaryCtaLabel: "Composer notre voyage de groupe",
    secondaryCtaLabel: "Pourquoi partir entre amis ?",
  },
  presentation: {
    eyebrow: "L'aventure se partage",
    h2: "Les meilleurs souvenirs se vivent à plusieurs",
    body: (
      <>
        Un road trip improvisé, une villa avec piscine, une soirée qui finit
        tard et un lever de soleil qu&apos;on n&apos;oubliera jamais&nbsp;: le
        voyage entre amis, c&apos;est l&apos;art de transformer une bande en
        équipage. Chez CTA Voyages, votre conseiller orchestre la destination,
        l&apos;hébergement qui accueille tout le monde et les activités qui
        soudent le groupe — pour que vous n&apos;ayez plus qu&apos;à profiter,
        sans gérer la logistique ni les imprévus.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=600&h=400&fit=crop&auto=format",
      alt: "Toits de Séville en Espagne au soleil",
      badge: "EUROPE",
      name: "Espagne",
      desc: "Tapas, fiestas et villas ensoleillées : le terrain de jeu idéal d'une bande d'amis.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&h=400&fit=crop&auto=format",
      alt: "Côte et îles de la Croatie sur l'Adriatique",
      badge: "EUROPE",
      name: "Croatie",
      desc: "Îles à sauter en bateau, criques turquoise et soirées au bord de l'Adriatique.",
    },
    {
      href: "/destination-thailande",
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&auto=format",
      alt: "Plage et îles paradisiaques de Thaïlande",
      badge: "ASIE",
      name: "Thaïlande",
      desc: "Îles de rêve, street food et fêtes mythiques : l'aventure dépaysante à plusieurs.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
      alt: "Maisons blanches et bleues d'une île grecque",
      badge: "EUROPE",
      name: "Grèce",
      desc: "Îles des Cyclades, plages dorées et tavernes animées au coucher du soleil.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
      alt: "Quartier de la Ribeira à Porto au Portugal",
      badge: "EUROPE",
      name: "Portugal",
      desc: "Surf à Lisbonne, caves du Douro et soirées dans les ruelles dorées de Porto.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&h=400&fit=crop&auto=format",
      alt: "Route mythique à travers l'ouest américain",
      badge: "AMÉRIQUES",
      name: "États-Unis",
      desc: "Le road trip ultime : parcs nationaux, villes mythiques et grands espaces à dévorer.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi organiser votre voyage entre amis avec CTA Voyages ?",
    cards: [
      {
        icon: "villa",
        title: "Un hébergement pour toute la bande",
        text: "Villa avec piscine, grand gîte ou hôtel privatisé : on trouve le lieu qui accueille tout le monde confortablement.",
        img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop&auto=format",
        alt: "Villa de vacances avec piscine au coucher du soleil",
      },
      {
        icon: "groups",
        title: "Logistique gérée de A à Z",
        text: "Vols, transferts, réservations et planning : on s'occupe de tout pour que personne n'ait à jouer l'organisateur.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Amis préparant ensemble un départ en voyage",
      },
      {
        icon: "sports_kabaddi",
        title: "Des activités fun et fédératrices",
        text: "Sortie en bateau, sports nautiques, dégustations ou virée nocturne : un programme qui soude le groupe.",
        img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop&auto=format",
        alt: "Groupe d'amis lors d'une activité nautique",
      },
      {
        icon: "payments",
        title: "Un budget clair, partagé sans accroc",
        text: "Devis détaillé et options par personne : chacun sait ce qu'il paie, sans tensions ni mauvaises surprises.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&auto=format",
        alt: "Amis trinquant ensemble en terrasse",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "8 jours en Croatie entre amis, des îles aux soirées",
    intro:
      "Une semaine conviviale sur l'Adriatique : vieilles villes, îles à explorer en bateau, baignades sauvages et soirées qui finissent tard.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 2",
        title: "Split & sa vieille ville",
        text: "Arrivée à Split et installation dans la bande. On explore le palais de Dioclétien, ses ruelles de pierre et ses terrasses animées, avant un premier apéro au coucher du soleil sur le front de mer.",
        img: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&h=400&fit=crop&auto=format",
        alt: "Front de mer et vieille ville de Split en Croatie",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 3",
        title: "Cap sur les îles de Hvar & Brač",
        text: "Journée bateau privatisé : on met les voiles vers Brač et sa plage de Zlatni Rat, puis Hvar pour la baignade dans des criques turquoise. Pauses snorkeling, musique à bord et fous rires garantis.",
        img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop&auto=format",
        alt: "Bateau et eaux turquoise au large des îles croates",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 4",
        title: "Parc de Krka & baignade",
        text: "Direction le parc national de Krka : sentiers à travers la forêt, cascades spectaculaires et baignade rafraîchissante au pied des chutes. La parenthèse nature parfaite entre deux journées de mer.",
        img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&h=400&fit=crop&auto=format",
        alt: "Cascades et bassins du parc national de Krka en Croatie",
        align: "left",
      },
      {
        id: "s4",
        label: "JOURS 5 À 6",
        title: "Dubrovnik, la perle de l'Adriatique",
        text: "Route vers Dubrovnik : tour des remparts au lever du jour, ruelles de la vieille ville et téléphérique pour la vue panoramique. Le soir, on enchaîne bars perchés et tavernes face à la mer.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
        alt: "Remparts et vieille ville de Dubrovnik sur l'Adriatique",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 7 À 8",
        title: "Plages, soirées & départ",
        text: "Deux dernières journées au rythme du groupe : criques secrètes, sports nautiques, longues siestes au soleil et soirée d'adieu mémorable avant le transfert retour, la tête pleine de souvenirs partagés.",
        img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&h=400&fit=crop&auto=format",
        alt: "Groupe d'amis profitant d'une plage au coucher du soleil",
        align: "left",
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
    h2: "Nos aventures de groupe confidentielles",
    intro:
      "Envie d'une destination qui sort de l'ordinaire ? Voici quelques escapades entre amis que nos conseillers adorent imaginer.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
        alt: "Paysages volcaniques et cascades d'Islande",
        tag: "Grand Nord",
        name: "Islande",
        text: "Road trip entre amis : cascades, sources chaudes et aurores boréales en pleine nature.",
      },
      {
        img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&h=400&fit=crop&auto=format",
        alt: "Désert et dunes du Maroc au coucher du soleil",
        tag: "Afrique du Nord",
        name: "Maroc",
        text: "Nuit sous les étoiles dans le désert, médinas animées et virée en 4x4 inoubliable.",
      },
      {
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=400&fit=crop&auto=format",
        alt: "Côte du Monténégro sur l'Adriatique",
        tag: "Balkans",
        name: "Monténégro",
        text: "L'Adriatique secrète : criques sauvages, montagnes spectaculaires et prix doux.",
      },
      {
        img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&h=400&fit=crop&auto=format",
        alt: "Falaises côtières de l'Algarve au Portugal",
        tag: "Atlantique",
        name: "Algarve",
        text: "Surf, falaises dorées et grottes marines : l'aventure conviviale au bord de l'océan.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en voyage entre amis ?",
    intro:
      "L'été reste la saison reine pour les groupes, mais l'arrière-saison offre soleil, ambiance et tarifs plus doux. Votre conseiller affine selon vos dates.",
    rows: [
      {
        destination: "Espagne",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Croatie",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Thaïlande",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Grèce",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Portugal",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre voyage entre amis",
    left: [
      {
        question: "À partir de combien de personnes organisez-vous un voyage de groupe ?",
        answer: (
          <p>
            Dès 4 personnes et jusqu&apos;à de grandes bandes&nbsp;: nous adaptons
            l&apos;hébergement et la logistique au nombre de voyageurs. Plus vous
            êtes nombreux, plus certaines options deviennent intéressantes.
          </p>
        ),
      },
      {
        question: "Comment gérez-vous le partage du budget ?",
        answer: (
          <p>
            Nous fournissons un devis détaillé avec le coût par personne et les
            options&nbsp;: chacun sait exactement ce qu&apos;il paie. Cela évite
            les calculs compliqués et les tensions dans le groupe.
          </p>
        ),
      },
      {
        question: "Faut-il que tout le monde parte des mêmes dates ?",
        answer: (
          <p>
            L&apos;idéal est un socle de dates communes, mais nous gérons les
            arrivées et départs décalés (vols différents, prolongations) pour
            s&apos;adapter aux contraintes de chacun.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Proposez-vous des activités pour souder le groupe ?",
        answer: (
          <p>
            Oui&nbsp;: sorties en bateau, sports nautiques, ateliers, dégustations
            ou virées nocturnes. Nous composons un programme fédérateur qui mêle
            temps forts collectifs et moments libres.
          </p>
        ),
      },
      {
        question: "Et si tout le monde n'a pas les mêmes envies ?",
        answer: (
          <p>
            C&apos;est fréquent&nbsp;! Nous bâtissons un programme à la carte avec
            des activités optionnelles&nbsp;: les sportifs randonnent, les autres
            se détendent, et tout le monde se retrouve le soir.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous la destination (ou vos envies), vos dates et le nombre
            de voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "À partir de combien de personnes organisez-vous un voyage de groupe ?",
        answer:
          "Dès 4 personnes et jusqu'à de grandes bandes : nous adaptons l'hébergement et la logistique au nombre de voyageurs, avec des options plus avantageuses en grand groupe.",
      },
      {
        question: "Comment gérez-vous le partage du budget entre amis ?",
        answer:
          "Nous fournissons un devis détaillé avec le coût par personne et les options : chacun sait ce qu'il paie, sans calculs compliqués ni tensions.",
      },
      {
        question: "Faut-il que tout le monde parte aux mêmes dates ?",
        answer:
          "L'idéal est un socle de dates communes, mais nous gérons les arrivées et départs décalés et les prolongations pour s'adapter à chacun.",
      },
      {
        question: "Proposez-vous des activités pour souder le groupe ?",
        answer:
          "Oui : sorties en bateau, sports nautiques, ateliers, dégustations ou virées nocturnes, avec un programme fédérateur mêlant temps collectifs et moments libres.",
      },
      {
        question: "Et si tout le monde n'a pas les mêmes envies ?",
        answer:
          "Nous bâtissons un programme à la carte avec des activités optionnelles : chacun choisit son rythme et le groupe se retrouve aux moments forts.",
      },
      {
        question: "Comment obtenir un devis pour un voyage entre amis ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Voyager à plusieurs peut aussi se faire mieux&nbsp;: nous privilégions
        les hébergements engagés, les acteurs locaux et les activités
        respectueuses des sites visités. Voyager mieux, ensemble.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à réunir toute la bande ?",
    body: "Dites-nous où vous rêvez de partir — destination, dates, nombre d'amis et budget — et votre conseiller dédié compose votre aventure de groupe sur mesure, gratuitement et sans engagement.",
  },
};

export default vsmAmis;
