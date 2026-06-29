import type { ThemeContent } from "./types";

/**
 * Page thème « Séjour balnéaire » — POC du gabarit ThemeTemplate.
 * Images : visuels de plage/lagon déjà éprouvés sur le site (à valider/remplacer).
 */
const sejourBalneaire: ThemeContent = {
  slug: "balneaire",
  parentLabel: "Séjours",
  parentHref: "/sejours",
  meta: {
    title: "Séjour balnéaire sur mesure — Plage, resort & farniente | CTA Voyages",
    description:
      "Organisez votre séjour balnéaire avec CTA Voyages : resorts les pieds dans l'eau, formules tout compris, plages de rêve et activités nautiques. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Resort balnéaire avec piscine à débordement face à la mer turquoise",
    label: "Séjour balnéaire",
    h1: "Séjour balnéaire : soleil, plage et farniente",
    description:
      "Du resort tout compris à l'hôtel de charme les pieds dans l'eau, nous composons le séjour balnéaire qui vous ressemble — détente, baignade et couchers de soleil sur l'océan.",
    primaryCtaLabel: "Composer mon séjour balnéaire",
    secondaryCtaLabel: "Pourquoi un séjour balnéaire ?",
  },
  presentation: {
    eyebrow: "Le grand classique des vacances",
    h2: "Le farniente, version sur mesure",
    body: (
      <>
        Le séjour balnéaire, c&apos;est l&apos;art de ne penser à rien : une
        chambre face au lagon, une plage de sable fin à quelques pas, une piscine
        à débordement et le rythme des journées dicté par le soleil. Chez CTA
        Voyages, nous allons plus loin que le simple &laquo;&nbsp;all
        inclusive&nbsp;&raquo; standardisé&nbsp;: votre conseiller sélectionne la
        destination, l&apos;hébergement et la formule qui correspondent vraiment à
        vos envies, votre budget et la saison idéale. Lune de miel, vacances en
        famille ou parenthèse à deux — chaque séjour balnéaire est pensé pour vous.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
      alt: "Lagon turquoise et resort à l'Île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Lagons turquoise, resorts de charme et douceur de vivre tropicale.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
      alt: "Villas sur pilotis au-dessus du lagon aux Maldives",
      badge: "OCÉAN INDIEN",
      name: "Maldives",
      desc: "Villas sur pilotis, eaux cristallines et fonds marins d'exception.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
      alt: "Plage de granit et sable blanc aux Seychelles",
      badge: "OCÉAN INDIEN",
      name: "Seychelles",
      desc: "Rochers de granit, plages de carte postale et nature préservée.",
    },
    {
      href: "/destination-thailande",
      img: "/plage-thailande.jpg",
      alt: "Plage tropicale et eaux turquoise en Thaïlande",
      badge: "ASIE",
      name: "Thaïlande",
      desc: "Îles paradisiaques, plages de sable fin et art de vivre thaï.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
      alt: "Plage de sable blanc bordée de cocotiers à Zanzibar",
      badge: "AFRIQUE",
      name: "Zanzibar",
      desc: "Sable blanc, eaux chaudes et épices au large de la Tanzanie.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
      alt: "Plage caribéenne bordée de cocotiers en République dominicaine",
      badge: "CARAÏBES",
      name: "Rép. dominicaine",
      desc: "Plages des Caraïbes, clubs tout compris et ambiance festive.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un séjour balnéaire avec CTA Voyages ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des plages de rêve",
        text: "Lagons turquoise, sable blanc et eaux cristallines — nous choisissons les plus belles plages selon la destination et la saison.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et eau turquoise des Seychelles",
      },
      {
        icon: "restaurant",
        title: "Formules tout compris",
        text: "Hébergement, repas, boissons et animations : vous maîtrisez votre budget avant le départ et profitez sans compter.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
        alt: "Resort en bord de lagon à l'Île Maurice",
      },
      {
        icon: "scuba_diving",
        title: "Activités nautiques",
        text: "Snorkeling, plongée, paddle ou simple baignade — les plus beaux spots marins sont à portée de palmes.",
        img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de Zanzibar avec eaux propices aux activités nautiques",
      },
      {
        icon: "spa",
        title: "Détente & bien-être",
        text: "Spa, massages face à la mer et hôtels pensés pour la détente : le farniente devient une vraie expérience.",
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format",
        alt: "Espace détente d'un hôtel balnéaire au bord de l'eau",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Une semaine les pieds dans le lagon à l'Île Maurice",
    intro:
      "Sept nuits de douceur tropicale, entre farniente sur le sable, escapades en mer et pauses bien-être.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée & installation au resort",
        text: "Accueil à l'aéroport de Maurice et transfert privé vers votre resort les pieds dans l'eau. Cocktail de bienvenue, découverte des lieux et premier coucher de soleil sur le lagon.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
        alt: "Resort de bord de lagon à l'Île Maurice au coucher du soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOURS 2 À 3",
        title: "Farniente sur la plage",
        text: "Deux journées rien que pour vous : sable blanc, transat à l'ombre des filaos et baignades dans une eau à 27°C. Le rythme est dicté par le soleil et la marée.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et transats face à une mer turquoise",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 4",
        title: "Sortie catamaran & snorkeling",
        text: "Embarquement pour une croisière en catamaran le long de la côte. Masque et tuba pour explorer les jardins de corail, déjeuner barbecue à bord et baignade avec les poissons multicolores.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format",
        alt: "Snorkeling au-dessus d'un récif corallien aux eaux cristallines",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 5",
        title: "Excursion nature dans l'île",
        text: "Cap sur l'intérieur des terres : la terre des sept couleurs de Chamarel, ses cascades et la forêt de Black River. Une parenthèse verdoyante entre deux journées de plage.",
        img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=600&h=400&fit=crop&auto=format",
        alt: "Cascade et végétation tropicale à l'intérieur de l'Île Maurice",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 6",
        title: "Spa & bien-être",
        text: "Journée placée sous le signe de la détente : massage signature face à la mer, soins au monoï et accès aux bains du spa. Le corps et l'esprit s'accordent une vraie pause.",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop&auto=format",
        alt: "Espace spa et table de massage ouverte sur la mer",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 7",
        title: "Journée libre & départ",
        text: "Une dernière matinée pour une ultime baignade ou un brunch les pieds dans le sable, avant le transfert vers l'aéroport. Vous repartez la tête pleine de soleil et de lagon.",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop&auto=format",
        alt: "Lagon turquoise bordé de cocotiers au petit matin",
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
    h2: "Nos pépites balnéaires confidentielles",
    intro:
      "Envie de plages préservées, loin de la foule ? Voici quelques destinations balnéaires plus rares, que nos conseillers connaissent et adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&h=400&fit=crop&auto=format",
        alt: "Plage sauvage de l'archipel du Cap-Vert",
        tag: "Atlantique",
        name: "Cap-Vert",
        text: "Plages sauvages battues par l'Atlantique, dunes et ambiance créole décontractée, à seulement 6h de vol.",
      },
      {
        img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&h=400&fit=crop&auto=format",
        alt: "Bancs de sable et eaux turquoise de l'archipel de Bazaruto",
        tag: "Océan Indien",
        name: "Mozambique",
        text: "L'archipel de Bazaruto : bancs de sable immaculés, dauphins et snorkeling dans des eaux encore secrètes.",
      },
      {
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop&auto=format",
        alt: "Lagons et pitons calcaires de Palawan aux Philippines",
        tag: "Asie",
        name: "Palawan",
        text: "Les lagons cachés d'El Nido et de Coron, parmi les plus beaux paysages marins du monde, aux Philippines.",
      },
      {
        img: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&h=400&fit=crop&auto=format",
        alt: "Plage des îles Gili au large de Lombok en Indonésie",
        tag: "Asie",
        name: "Lombok & Gili",
        text: "L'alternative paisible à Bali : îlots sans voitures, tortues marines et couchers de soleil sur le volcan.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en séjour balnéaire ?",
    intro:
      "Chaque destination a sa saison idéale. Voici un repère rapide ; votre conseiller affinera selon vos dates et votre budget.",
    rows: [
      {
        destination: "Île Maurice",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok"],
      },
      {
        destination: "Maldives",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Seychelles",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ok", "ok", "ok", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Thaïlande",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Zanzibar",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
      {
        destination: "Rép. dominicaine",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok", "avoid", "avoid", "avoid", "ok", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre séjour balnéaire",
    left: [
      {
        question: "Quelles sont les meilleures destinations pour un séjour balnéaire ?",
        answer: (
          <p>
            Tout dépend de la saison et de vos envies&nbsp;: l&apos;Île Maurice,
            les Seychelles et Zanzibar pour l&apos;océan Indien, la Thaïlande pour
            l&apos;Asie, le Maroc pour une escapade proche, ou les Caraïbes en
            hiver. Votre conseiller vous orientera vers la destination où la météo
            sera idéale à vos dates.
          </p>
        ),
      },
      {
        question: "Qu'est-ce qu'une formule tout compris (all inclusive) ?",
        answer: (
          <p>
            Elle inclut l&apos;hébergement, les repas, la plupart des boissons et
            souvent les animations et activités de l&apos;hôtel. Vous connaissez
            votre budget avant de partir et profitez de vos vacances sans avoir à
            sortir le portefeuille à chaque pause.
          </p>
        ),
      },
      {
        question: "Un séjour balnéaire convient-il aux familles ?",
        answer: (
          <p>
            Tout à fait. Nous sélectionnons des clubs et resorts dotés de piscines,
            de clubs enfants et d&apos;activités adaptées à chaque âge — pour des
            vacances reposantes aussi bien pour les parents que pour les enfants.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Quelle est la meilleure période pour partir ?",
        answer: (
          <p>
            Chaque destination a sa saison sèche idéale. Nous vous conseillons les
            périodes où l&apos;ensoleillement est optimal et les risques de pluie
            ou de cyclone minimaux, tout en tenant compte des tarifs selon la
            haute ou basse saison.
          </p>
        ),
      },
      {
        question: "Puis-je combiner plage et découverte ?",
        answer: (
          <p>
            Oui&nbsp;: un séjour balnéaire se combine très bien avec quelques jours
            de circuit ou d&apos;excursions (temples, safari, villes). Votre
            conseiller peut bâtir un programme &laquo;&nbsp;découverte +
            farniente&nbsp;&raquo; pour le meilleur des deux mondes.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis pour un séjour balnéaire ?",
        answer: (
          <p>
            Il suffit de nous indiquer vos dates, votre destination (ou vos envies)
            et le nombre de voyageurs. Nous revenons vers vous sous 48h avec une
            proposition personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelles sont les meilleures destinations pour un séjour balnéaire ?",
        answer:
          "Selon la saison : Île Maurice, Seychelles et Zanzibar pour l'océan Indien, Thaïlande pour l'Asie, Maroc pour une escapade proche, ou les Caraïbes en hiver. Votre conseiller vous oriente vers la destination où la météo est idéale à vos dates.",
      },
      {
        question: "Qu'est-ce qu'une formule tout compris (all inclusive) ?",
        answer:
          "Elle inclut l'hébergement, les repas, la plupart des boissons et souvent les animations et activités de l'hôtel. Vous maîtrisez votre budget avant de partir.",
      },
      {
        question: "Un séjour balnéaire convient-il aux familles ?",
        answer:
          "Oui. Nous sélectionnons des clubs et resorts avec piscines, clubs enfants et activités adaptées à chaque âge, pour des vacances reposantes pour toute la famille.",
      },
      {
        question: "Quelle est la meilleure période pour partir en séjour balnéaire ?",
        answer:
          "Chaque destination a sa saison sèche idéale. Nous conseillons les périodes au meilleur ensoleillement et aux risques météo minimaux, en tenant compte des tarifs haute/basse saison.",
      },
      {
        question: "Puis-je combiner plage et découverte ?",
        answer:
          "Oui, un séjour balnéaire se combine avec des excursions ou un court circuit (temples, safari, villes). Votre conseiller bâtit un programme découverte + farniente.",
      },
      {
        question: "Comment obtenir un devis pour un séjour balnéaire ?",
        answer:
          "Indiquez vos dates, votre destination ou vos envies et le nombre de voyageurs. Nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Séjour balnéaire ne rime pas avec tourisme de masse&nbsp;: nous
        privilégions des hébergements engagés dans la préservation des littoraux,
        des lagons et des écosystèmes marins. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à poser votre serviette sur le sable ?",
    body: "Parlez-nous de votre séjour balnéaire idéal — destination, dates, budget — et votre conseiller dédié compose une proposition sur mesure, gratuitement et sans engagement.",
  },
};

export default sejourBalneaire;
