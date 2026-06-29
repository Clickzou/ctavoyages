import type { ThemeContent } from "../types";

/**
 * Page thème « Circuit accompagné ». Images : visuels de circuits à valider/remplacer.
 */
const circuitAccompagne: ThemeContent = {
  slug: "accompagne",
  parentLabel: "Circuits",
  parentHref: "/circuits",
  meta: {
    title: "Circuit accompagné avec guide francophone — Voyages encadrés | CTA Voyages",
    description:
      "Partez en circuit accompagné avec CTA Voyages : un guide ou accompagnateur francophone vous suit sur les temps forts du voyage. Expertise, anecdotes, confort et sérénité d'un voyage encadré. Devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Petit groupe de voyageurs accompagné d'un guide devant un site historique",
    label: "Circuit accompagné",
    h1: "Circuit accompagné : voyagez l'esprit libre, guidé à chaque étape",
    description:
      "Un guide ou accompagnateur francophone vous suit sur les temps forts du voyage — expertise, anecdotes et logistique réglée. Le confort et la sérénité d'un grand circuit encadré, sans rien manquer de l'essentiel.",
    primaryCtaLabel: "Composer mon circuit accompagné",
    secondaryCtaLabel: "Pourquoi un circuit accompagné ?",
  },
  presentation: {
    eyebrow: "Le voyage encadré",
    h2: "Toute la richesse d'un pays, sans la moindre logistique",
    body: (
      <>
        Un guide francophone qui décrypte un temple millénaire, raconte les
        légendes locales et vous emmène là où l&apos;on ne va pas seul&nbsp;:
        le circuit accompagné, c&apos;est l&apos;art de voir l&apos;essentiel
        d&apos;un pays en profitant pleinement, sans vous soucier des transferts,
        des horaires ou des réservations. Chez CTA Voyages, votre conseiller
        compose l&apos;itinéraire, sélectionne les hôtels et confie votre groupe
        à un accompagnateur passionné — pour un voyage riche de sens, en toute
        sérénité.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&h=400&fit=crop&auto=format",
      alt: "Pyramides de Gizeh en Égypte",
      badge: "AFRIQUE",
      name: "Égypte",
      desc: "Pyramides, temples de Louxor et croisière sur le Nil, commentés par un égyptologue francophone.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
      alt: "Le Machu Picchu au lever du soleil au Pérou",
      badge: "AMÉRIQUES",
      name: "Pérou",
      desc: "Machu Picchu, vallée sacrée et Cuzco : la civilisation inca racontée pas à pas.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop&auto=format",
      alt: "Le Taj Mahal en Inde au lever du jour",
      badge: "ASIE",
      name: "Inde",
      desc: "Le Triangle d'or, Taj Mahal et palais du Rajasthan, escortés par un guide chevronné.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format",
      alt: "Le Trésor de Pétra en Jordanie",
      badge: "MOYEN-ORIENT",
      name: "Jordanie",
      desc: "Pétra, le Wadi Rum et la mer Morte, expliqués par un accompagnateur passionné.",
    },
    {
      href: "/destination-vietnam",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format",
      alt: "Jonques dans la baie d'Halong au Vietnam",
      badge: "ASIE",
      name: "Vietnam",
      desc: "Du delta du Mékong à la baie d'Halong, un fil rouge culturel d'un bout à l'autre du pays.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=600&h=400&fit=crop&auto=format",
      alt: "Place du Registan à Samarcande en Ouzbékistan",
      badge: "ASIE CENTRALE",
      name: "Ouzbékistan",
      desc: "Samarcande, Boukhara et la Route de la soie, décryptées par un guide spécialiste.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un circuit accompagné avec CTA Voyages ?",
    cards: [
      {
        icon: "tour",
        title: "Un guide francophone dédié",
        text: "Sur les temps forts du voyage, un accompagnateur passionné partage son expertise, ses anecdotes et ses bonnes adresses.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
        alt: "Guide expliquant un site à un petit groupe de voyageurs",
      },
      {
        icon: "checklist",
        title: "Aucune logistique à gérer",
        text: "Transferts, hôtels, entrées de sites et horaires : tout est réglé à l'avance pour que vous n'ayez qu'à profiter.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Voyageur consultant un carnet de route au bord de l'eau",
      },
      {
        icon: "diversity_3",
        title: "L'esprit de groupe",
        text: "Voyager à plusieurs, c'est partager les découvertes, les repas et les rires — et souvent nouer de belles rencontres.",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
        alt: "Groupe de voyageurs en pleine excursion",
      },
      {
        icon: "verified_user",
        title: "Confort et sérénité",
        text: "Hôtels sélectionnés, rythme maîtrisé et assistance permanente : un voyage encadré, en toute tranquillité.",
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format",
        alt: "Hall d'hôtel confortable accueillant les voyageurs",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Neuf jours guidés au cœur du Pérou inca",
    intro:
      "De Lima aux rives du lac Titicaca, un circuit accompagné par un guide francophone, du Machu Picchu aux canyons d'Arequipa.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 2",
        title: "Lima, la capitale gourmande",
        text: "Accueil à l'aéroport de Lima par votre guide francophone. Découverte du centre historique colonial, du quartier bohème de Barranco et de la côte du Pacifique, avant un dîner d'initiation à la gastronomie péruvienne.",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=600&h=400&fit=crop&auto=format",
        alt: "Vue de la côte et des falaises de Miraflores à Lima au Pérou",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 3",
        title: "Cusco, nombril du monde inca",
        text: "Envol vers Cusco, ancienne capitale de l'Empire inca perchée à 3 400 m. Acclimatation en douceur, visite de la cathédrale, du temple du Qoricancha et flânerie dans les ruelles pavées du quartier de San Blas.",
        img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
        alt: "Toits et place principale de Cusco au Pérou",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 4 À 5",
        title: "La Vallée sacrée des Incas",
        text: "Cap sur la Vallée sacrée et ses villages andins : marché coloré de Pisac, terrasses agricoles et forteresse d'Ollantaytambo. Votre guide raconte le quotidien des Incas au fil des sites, entre montagnes et rivière Urubamba.",
        img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=600&h=400&fit=crop&auto=format",
        alt: "Terrasses agricoles incas et montagnes de la Vallée sacrée au Pérou",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 6",
        title: "Machu Picchu, la cité perdue",
        text: "Train panoramique jusqu'à Aguas Calientes puis ascension vers le Machu Picchu. Visite guidée de la citadelle inca au lever du jour, ses temples et ses terrasses suspendues au-dessus des nuages — le temps fort du voyage.",
        img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop&auto=format",
        alt: "Le Machu Picchu et ses terrasses au lever du soleil au Pérou",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 7 À 8",
        title: "Le lac Titicaca et les îles flottantes",
        text: "Route vers Puno, sur les rives du lac Titicaca, le plus haut lac navigable du monde. Navigation jusqu'aux îles flottantes des Uros, en roseaux tressés, et rencontre avec les communautés quechuas de l'île de Taquile.",
        img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
        alt: "Îles flottantes en roseaux des Uros sur le lac Titicaca au Pérou",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 9",
        title: "Arequipa, la ville blanche & départ",
        text: "Dernière étape à Arequipa, élégante cité bâtie en pierre volcanique blanche au pied du volcan Misti. Visite du monastère Santa Catalina avec votre guide, puis transfert vers l'aéroport, la tête pleine d'images andines.",
        img: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=600&h=400&fit=crop&auto=format",
        alt: "Architecture coloniale blanche d'Arequipa et volcan Misti au Pérou",
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
    h2: "Nos circuits accompagnés confidentiels",
    intro:
      "Envie d'un grand circuit moins couru ? Voici quelques itinéraires encadrés que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&auto=format",
        alt: "Monastère perché sur une falaise en Éthiopie",
        tag: "Afrique",
        name: "Éthiopie",
        text: "Berceau de l'humanité : églises rupestres du Lalibela et hauts plateaux, guidés au plus près.",
      },
      {
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Forteresse de Tigré dans le désert d'Iran",
        tag: "Moyen-Orient",
        name: "Iran",
        text: "Ispahan, Persépolis et bazars envoûtants : la Perse millénaire, escortée d'un expert.",
      },
      {
        img: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=600&h=400&fit=crop&auto=format",
        alt: "Temple bouddhiste au lever du soleil au Myanmar",
        tag: "Asie",
        name: "Myanmar",
        text: "Bagan et ses milliers de pagodes, le lac Inle : un circuit hors du temps, accompagné.",
      },
      {
        img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop&auto=format",
        alt: "Nomades et chameaux dans la steppe de Mongolie",
        tag: "Asie centrale",
        name: "Mongolie",
        text: "Steppes infinies, yourtes et désert de Gobi : l'aventure encadrée au pays des nomades.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en circuit accompagné ?",
    intro:
      "La plupart de ces grands circuits s'apprécient hors de la saison des pluies et des grosses chaleurs. Votre conseiller affine selon vos dates et les départs garantis.",
    rows: [
      {
        destination: "Égypte",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Pérou",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Inde",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Jordanie",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Vietnam",
        months: ["ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok"],
      },
      {
        destination: "Ouzbékistan",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre circuit accompagné",
    left: [
      {
        question: "Qu'est-ce qu'un circuit accompagné ?",
        answer: (
          <p>
            C&apos;est un voyage où un guide ou accompagnateur francophone vous
            suit sur les temps forts&nbsp;: il décrypte les sites, partage ses
            anecdotes et veille à la bonne marche du programme. Vous profitez de
            l&apos;essentiel sans gérer la moindre logistique.
          </p>
        ),
      },
      {
        question: "Le guide parle-t-il français ?",
        answer: (
          <p>
            Oui&nbsp;: nos circuits sont encadrés par un accompagnateur
            francophone, souvent doublé d&apos;un guide local expert. Vous
            comprenez tout et profitez d&apos;un vrai partage culturel.
          </p>
        ),
      },
      {
        question: "Combien de voyageurs dans le groupe ?",
        answer: (
          <p>
            Selon la destination, les groupes comptent généralement de 8 à 25
            personnes. Nous privilégions les petits effectifs pour un voyage plus
            convivial et plus proche du terrain.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en circuit accompagné en couple ou en solo ?",
        answer: (
          <p>
            Bien sûr&nbsp;: rejoindre un circuit accompagné est idéal pour voyager
            serein, faire des rencontres et découvrir un pays sans s&apos;occuper
            de l&apos;organisation, que l&apos;on soit en couple, entre amis ou
            seul.
          </p>
        ),
      },
      {
        question: "Le rythme convient-il à tous ?",
        answer: (
          <p>
            Nos itinéraires sont pensés pour un rythme maîtrisé, avec des temps
            libres. Pour les circuits plus sportifs, nous vous le précisons à
            l&apos;avance afin que vous choisissiez en connaissance de cause.
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
        question: "Qu'est-ce qu'un circuit accompagné ?",
        answer:
          "C'est un voyage où un guide ou accompagnateur francophone vous suit sur les temps forts : il décrypte les sites, partage ses anecdotes et veille au bon déroulé du programme, sans aucune logistique à gérer pour vous.",
      },
      {
        question: "Le guide parle-t-il français ?",
        answer:
          "Oui, nos circuits sont encadrés par un accompagnateur francophone, souvent doublé d'un guide local expert, pour un vrai partage culturel.",
      },
      {
        question: "Combien de voyageurs dans le groupe ?",
        answer:
          "Selon la destination, les groupes comptent généralement de 8 à 25 personnes. Nous privilégions les petits effectifs pour un voyage plus convivial.",
      },
      {
        question: "Peut-on partir en circuit accompagné en couple ou en solo ?",
        answer:
          "Oui, rejoindre un circuit accompagné est idéal pour voyager serein et faire des rencontres, que l'on soit en couple, entre amis ou seul.",
      },
      {
        question: "Le rythme convient-il à tous ?",
        answer:
          "Nos itinéraires offrent un rythme maîtrisé avec des temps libres. Pour les circuits plus sportifs, nous vous le précisons à l'avance.",
      },
      {
        question: "Comment obtenir un devis pour un circuit accompagné ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Voyager en groupe encadré, c&apos;est aussi mutualiser les transports et
        s&apos;appuyer sur des guides et prestataires locaux&nbsp;: nous
        privilégions les accompagnateurs du pays, les hébergements engagés et le
        respect des sites visités. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à partir guidé, l'esprit libre ?",
    body: "Dites-nous quelle destination vous fait envie — dates, durée, budget — et votre conseiller dédié compose votre circuit accompagné sur mesure, gratuitement et sans engagement.",
  },
};

export default circuitAccompagne;
