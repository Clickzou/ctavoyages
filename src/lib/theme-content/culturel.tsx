import type { ThemeContent } from "./types";

/**
 * Page thème « Séjour culturel » — patrimoine, histoire, médinas et temples.
 * Images : visuels de monuments et sites historiques à valider/remplacer.
 */
const culturel: ThemeContent = {
  slug: "culturel",
  parentLabel: "Séjours",
  parentHref: "/sejours",
  meta: {
    title: "Séjour culturel sur mesure — Patrimoine, histoire & traditions | CTA Voyages",
    description:
      "Organisez votre séjour culturel avec CTA Voyages : sites classés, médinas, temples et traditions vivantes. Guides experts francophones, itinéraires sur mesure, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Temple ancien éclairé au coucher du soleil, témoin d'un patrimoine millénaire",
    label: "Séjour culturel",
    h1: "Séjour culturel : l'histoire pour décor, le monde pour musée",
    description:
      "Médinas vivantes, temples millénaires, cités antiques et traditions transmises de génération en génération — nous composons le séjour culturel qui révèle l'âme d'une destination, guides experts et rencontres authentiques à l'appui.",
    primaryCtaLabel: "Composer mon séjour culturel",
    secondaryCtaLabel: "Pourquoi un séjour culturel ?",
  },
  presentation: {
    eyebrow: "Le voyage qui donne du sens",
    h2: "Comprendre un pays, pas seulement le visiter",
    body: (
      <>
        Le séjour culturel, c&apos;est le plaisir de relier les pierres aux
        histoires&nbsp;: arpenter une médina au petit matin, déchiffrer les
        hiéroglyphes d&apos;un temple, partager un thé avec un artisan ou
        assister à une cérémonie séculaire. Chez CTA Voyages, nous allons
        au-delà du simple circuit&nbsp;: votre conseiller bâtit un itinéraire
        rythmé et cohérent, confié à des guides experts francophones, qui
        éclairent chaque site de son contexte historique et de ses traditions
        vivantes. Passionnés d&apos;archéologie, amateurs d&apos;art ou simples
        curieux du monde — chaque séjour culturel est pensé pour vous faire
        comprendre, et pas seulement voir.
      </>
    ),
  },
  destinations: [
    {
      href: "/destination-japon",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
      alt: "Temple traditionnel et pagode au cœur de Kyoto au Japon",
      badge: "ASIE",
      name: "Japon",
      desc: "Temples de Kyoto, cérémonie du thé et raffinement d'une culture millénaire.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
      alt: "Ruelles colorées de la médina de Marrakech au Maroc",
      badge: "AFRIQUE DU NORD",
      name: "Maroc",
      desc: "Médinas labyrinthiques, palais andalous et art de vivre berbère.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&h=400&fit=crop&auto=format",
      alt: "Pyramides de Gizeh et désert d'Égypte au soleil couchant",
      badge: "AFRIQUE",
      name: "Égypte",
      desc: "Pyramides, temples de Louxor et croisière au fil du Nil éternel.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
      alt: "Acropole d'Athènes et Parthénon antique en Grèce",
      badge: "EUROPE",
      name: "Grèce",
      desc: "Berceau de la civilisation : Acropole, sites antiques et mythes fondateurs.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
      alt: "Cité inca du Machu Picchu perchée dans les Andes au Pérou",
      badge: "AMÉRIQUE DU SUD",
      name: "Pérou",
      desc: "Machu Picchu, vallée sacrée des Incas et héritage précolombien.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
      alt: "Le Colisée et les vestiges antiques de Rome en Italie",
      badge: "EUROPE",
      name: "Italie (Rome)",
      desc: "Forum romain, Vatican et vingt-cinq siècles d'art à ciel ouvert.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un séjour culturel avec CTA Voyages ?",
    cards: [
      {
        icon: "museum",
        title: "Un patrimoine d'exception",
        text: "Sites classés à l'UNESCO, cités antiques et musées majeurs : nous sélectionnons les lieux qui racontent vraiment l'histoire d'un pays.",
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop&auto=format",
        alt: "Galerie d'un grand musée d'art et d'histoire",
      },
      {
        icon: "history_edu",
        title: "Des guides experts francophones",
        text: "Historiens, archéologues ou guides passionnés : ils donnent vie aux pierres et partagent l'envers du décor, en français.",
        img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop&auto=format",
        alt: "Guide commentant un site historique à un petit groupe",
      },
      {
        icon: "temple_buddhist",
        title: "Immersion & traditions vivantes",
        text: "Au-delà des monuments : rencontres avec des artisans, cérémonies, fêtes locales et cuisine authentique pour toucher l'âme du pays.",
        img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop&auto=format",
        alt: "Cérémonie traditionnelle et costumes locaux",
      },
      {
        icon: "mosque",
        title: "Des itinéraires sur mesure",
        text: "Rythme maîtrisé, distances réfléchies et temps libre : votre conseiller compose un circuit dense en découvertes mais jamais épuisant.",
        img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=400&fit=crop&auto=format",
        alt: "Médina ancienne et minaret au lever du jour",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "L'Égypte des pharaons en 12 jours : du Caire à Abou Simbel",
    intro:
      "Des pyramides de Gizeh aux temples nubiens, un circuit qui remonte cinq mille ans d'histoire au fil du Nil.",
    steps: [
      {
        id: "caire",
        label: "JOURS 1 À 2",
        title: "Le Caire & Gizeh : aux pieds des pyramides",
        text: "Accueil dans la mégapole et face-à-face avec les trois pyramides de Gizeh, dernière des Sept Merveilles du monde antique, gardées par l'énigmatique Sphinx. Coucher de soleil sur le plateau et première plongée dans l'Égypte des bâtisseurs de l'Ancien Empire.",
        img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&h=400&fit=crop&auto=format",
        alt: "Pyramides de Gizeh et le grand Sphinx dans le désert au Caire",
        align: "left",
      },
      {
        id: "musee",
        label: "JOUR 3",
        title: "Le Musée égyptien : le trésor de Toutânkhamon",
        text: "Une matinée consacrée aux collections pharaoniques, du masque d'or de Toutânkhamon aux momies royales, pour donner un visage aux dynasties. L'après-midi, flânerie dans le Caire islamique, ses mosquées et le souk animé de Khan el-Khalili.",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&h=400&fit=crop&auto=format",
        alt: "Statues et trésors pharaoniques exposés dans un musée égyptien",
        align: "right",
      },
      {
        id: "louxor",
        label: "JOURS 4 À 5",
        title: "Louxor & la Vallée des Rois",
        text: "Vol vers Louxor, l'antique Thèbes, capitale du Nouvel Empire. Sur la rive ouest, descente dans les tombeaux peints de la Vallée des Rois, dont celui de Toutânkhamon, et halte au temple en terrasses de la reine Hatchepsout.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop&auto=format",
        alt: "Hiéroglyphes et colonnes peintes d'un temple antique à Louxor",
        align: "left",
      },
      {
        id: "karnak",
        label: "JOUR 6",
        title: "Les temples de Karnak : la demeure d'Amon",
        text: "Visite du gigantesque complexe de Karnak et de sa salle hypostyle aux cent trente-quatre colonnes monumentales, le plus vaste sanctuaire jamais édifié. En fin de journée, embarquement à bord de votre bateau pour la croisière sur le Nil.",
        img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop&auto=format",
        alt: "Colonnes monumentales de la salle hypostyle du temple de Karnak",
        align: "right",
      },
      {
        id: "croisiere",
        label: "JOURS 7 À 10",
        title: "Croisière sur le Nil vers Assouan",
        text: "Au rythme paisible du fleuve nourricier, escales aux temples d'Edfou, dédié au dieu faucon Horus, et de Kôm Ombo. Paysages de palmeraies, felouques à voile latine et villages nubiens défilent jusqu'à la sereine Assouan.",
        img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&h=400&fit=crop&auto=format",
        alt: "Felouques à voile blanche naviguant sur le Nil au coucher du soleil",
        align: "left",
      },
      {
        id: "abou-simbel",
        label: "JOURS 11 À 12",
        title: "Abou Simbel : le chef-d'œuvre de Ramsès II",
        text: "Excursion vers les colosses d'Abou Simbel, temple taillé dans la falaise par Ramsès II et sauvé des eaux du lac Nasser dans les années 1960. Retour vers Le Caire et envol, des images plein la tête, après ce voyage au cœur des civilisations.",
        img: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=400&fit=crop&auto=format",
        alt: "Colosses monumentaux du temple de Ramsès II à Abou Simbel",
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
    h2: "Nos séjours culturels confidentiels",
    intro:
      "Envie de civilisations plus rares et de sites encore préservés du tourisme de masse ? Voici quelques itinéraires culturels que nos conseillers chérissent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=400&fit=crop&auto=format",
        alt: "Médersa et coupoles turquoise de Samarcande en Ouzbékistan",
        tag: "Asie centrale",
        name: "Ouzbékistan",
        text: "Samarcande, Boukhara et Khiva : les cités mythiques de la route de la Soie, leurs médersas et leurs coupoles turquoise.",
      },
      {
        img: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&h=400&fit=crop&auto=format",
        alt: "Façade du Trésor de Pétra taillée dans la roche en Jordanie",
        tag: "Proche-Orient",
        name: "Jordanie",
        text: "La cité nabatéenne de Pétra creusée dans le grès rose, le désert du Wadi Rum et les mosaïques de Madaba.",
      },
      {
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop&auto=format",
        alt: "Palais des vents et architecture du Rajasthan en Inde",
        tag: "Sous-continent indien",
        name: "Inde — Rajasthan",
        text: "Le pays des maharajas : forts majestueux, palais de Jaipur et Udaipur, et l'inoubliable Taj Mahal au lever du soleil.",
      },
      {
        img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&h=400&fit=crop&auto=format",
        alt: "Temples d'Angkor envahis par la jungle au Cambodge",
        tag: "Asie du Sud-Est",
        name: "Cambodge — Angkor",
        text: "La cité khmère d'Angkor, ses temples enlacés par la jungle et les visages de pierre du Bayon au petit matin.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en séjour culturel ?",
    intro:
      "Visiter sites et médinas se savoure hors des grandes chaleurs et de la foule. Voici un repère rapide ; votre conseiller affinera selon vos dates et vos envies.",
    rows: [
      {
        destination: "Japon",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Maroc",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Égypte",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Pérou",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Inde — Rajasthan",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre séjour culturel",
    left: [
      {
        question: "Quelles sont les meilleures destinations pour un séjour culturel ?",
        answer: (
          <p>
            Tout dépend de vos centres d&apos;intérêt&nbsp;: le Japon pour les
            temples et le raffinement, le Maroc pour les médinas, l&apos;Égypte
            et la Grèce pour l&apos;Antiquité, le Pérou pour les civilisations
            précolombiennes ou l&apos;Italie pour l&apos;art. Votre conseiller
            vous orientera vers la destination la plus en phase avec vos envies
            et la saison idéale.
          </p>
        ),
      },
      {
        question: "Les guides parlent-ils français ?",
        answer: (
          <p>
            Oui&nbsp;: nous privilégions des guides experts francophones —
            historiens ou spécialistes locaux — qui éclairent chaque site de son
            contexte et répondent à toutes vos questions, pour une découverte
            réellement comprise et pas seulement contemplée.
          </p>
        ),
      },
      {
        question: "Un séjour culturel est-il fatigant ?",
        answer: (
          <p>
            Pas avec nous&nbsp;: nous calibrons le rythme, limitons les longues
            routes et ménageons des temps libres. L&apos;objectif est de profiter
            pleinement de chaque site sans courir, avec des hébergements
            confortables pour récupérer.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on combiner culture et détente ?",
        answer: (
          <p>
            Tout à fait. Un circuit culturel se prolonge volontiers par quelques
            nuits balnéaires&nbsp;: temples puis plages en Thaïlande, médinas puis
            côte au Maroc, sites antiques puis îles en Grèce. Votre conseiller
            bâtit un programme &laquo;&nbsp;découverte + farniente&nbsp;&raquo;.
          </p>
        ),
      },
      {
        question: "Le séjour culturel convient-il aux familles ?",
        answer: (
          <p>
            Oui&nbsp;: nous sélectionnons les sites les plus spectaculaires,
            adaptons le rythme aux enfants et privilégions les visites ludiques
            et interactives — pour éveiller la curiosité des plus jeunes sans
            jamais les lasser.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis pour un séjour culturel ?",
        answer: (
          <p>
            Indiquez-nous la destination (ou vos centres d&apos;intérêt), vos
            dates et le nombre de voyageurs&nbsp;: nous revenons vers vous sous
            48h avec un itinéraire personnalisé, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelles sont les meilleures destinations pour un séjour culturel ?",
        answer:
          "Selon vos intérêts : le Japon pour les temples, le Maroc pour les médinas, l'Égypte et la Grèce pour l'Antiquité, le Pérou pour les civilisations précolombiennes ou l'Italie pour l'art. Votre conseiller vous oriente vers la destination idéale selon vos envies et la saison.",
      },
      {
        question: "Les guides parlent-ils français lors d'un séjour culturel ?",
        answer:
          "Oui, nous privilégions des guides experts francophones (historiens ou spécialistes locaux) qui éclairent chaque site de son contexte et répondent à toutes vos questions.",
      },
      {
        question: "Un séjour culturel est-il fatigant ?",
        answer:
          "Pas avec nous : nous calibrons le rythme, limitons les longues routes et ménageons des temps libres, avec des hébergements confortables pour profiter de chaque site sans courir.",
      },
      {
        question: "Peut-on combiner culture et détente ?",
        answer:
          "Oui, un circuit culturel se prolonge facilement par quelques nuits balnéaires : temples puis plages en Thaïlande, médinas puis côte au Maroc, sites antiques puis îles en Grèce.",
      },
      {
        question: "Le séjour culturel convient-il aux familles ?",
        answer:
          "Oui. Nous sélectionnons les sites les plus spectaculaires, adaptons le rythme aux enfants et privilégions les visites ludiques et interactives pour éveiller leur curiosité.",
      },
      {
        question: "Comment obtenir un devis pour un séjour culturel ?",
        answer:
          "Indiquez la destination ou vos centres d'intérêt, vos dates et le nombre de voyageurs. Nous revenons sous 48h avec un itinéraire personnalisé, gratuit et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Voyager pour la culture, c&apos;est aussi la respecter&nbsp;: nous
        travaillons avec des guides et artisans locaux, soutenons la
        préservation des sites et encourageons un tourisme qui profite
        réellement aux communautés visitées. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à remonter le fil de l'histoire ?",
    body: "Parlez-nous de votre séjour culturel idéal — destination, centres d'intérêt, dates, budget — et votre conseiller dédié compose un itinéraire sur mesure, gratuitement et sans engagement.",
  },
};

export default culturel;
