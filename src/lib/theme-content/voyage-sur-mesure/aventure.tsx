import type { ThemeContent } from "../types";

/**
 * Page thème « Voyage aventure ». Images : visuels grands espaces à valider/remplacer.
 */
const vsmAventure: ThemeContent = {
  slug: "aventure",
  parentLabel: "Voyage sur mesure",
  parentHref: "/voyage-sur-mesure",
  meta: {
    title: "Voyage aventure sur mesure — Trek, immersion & grands espaces | CTA Voyages",
    description:
      "Partez à l'aventure avec CTA Voyages : treks, immersions et sensations dans les plus beaux espaces sauvages du monde. Encadrement expert, logistique millimétrée, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Randonneur face à un panorama de montagnes sauvages au lever du jour",
    label: "Voyage aventure",
    h1: "Voyage aventure : sortez de votre zone de confort",
    description:
      "Trek en haute montagne, immersion chez l'habitant, sensations et grands espaces à perte de vue. Nous composons l'aventure qui vous fera vibrer — encadrée, sécurisée et logistiquement irréprochable.",
    primaryCtaLabel: "Composer mon aventure",
    secondaryCtaLabel: "Pourquoi un voyage aventure ?",
  },
  presentation: {
    eyebrow: "Le voyage qui fait vibrer",
    h2: "Du dépassement de soi, jamais de l'improvisation",
    body: (
      <>
        Un sentier qui grimpe au-dessus des nuages, un bivouac sous un ciel
        d&apos;étoiles, la rencontre d&apos;un peuple loin de tout&nbsp;: le
        voyage aventure, c&apos;est l&apos;art de sortir de sa zone de confort
        en toute sécurité. Chez CTA Voyages, votre conseiller bâtit
        l&apos;itinéraire, mobilise des guides locaux expérimentés et verrouille
        chaque détail logistique — pour que vous n&apos;ayez plus qu&apos;à
        savourer l&apos;effort, l&apos;émotion et l&apos;immensité.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt tropicale et volcan du Costa Rica",
      badge: "AMÉRIQUE CENTRALE",
      name: "Costa Rica",
      desc: "Volcans, jungle luxuriante et faune incroyable : la Pura Vida grandeur nature.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop&auto=format",
      alt: "Sommets enneigés de l'Himalaya au Népal",
      badge: "HIMALAYA",
      name: "Népal",
      desc: "Treks mythiques au pied de l'Everest et des Annapurnas, sourires et stupas.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
      alt: "Le Machu Picchu au Pérou",
      badge: "AMÉRIQUE DU SUD",
      name: "Pérou",
      desc: "Chemin de l'Inca, Machu Picchu et cordillère des Andes à couper le souffle.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et paysage volcanique d'Islande",
      badge: "ATLANTIQUE NORD",
      name: "Islande",
      desc: "Volcans, glaciers, geysers et aurores boréales : la terre de feu et de glace.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&h=400&fit=crop&auto=format",
      alt: "Safari dans la savane du Kenya",
      badge: "AFRIQUE",
      name: "Kenya",
      desc: "Safari dans le Masai Mara, grande migration et savane à perte de vue.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&h=400&fit=crop&auto=format",
      alt: "Massif du Fitz Roy en Patagonie argentine",
      badge: "AMÉRIQUE DU SUD",
      name: "Patagonie",
      desc: "Glaciers, pics granitiques et vents du bout du monde en Argentine sauvage.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi partir à l'aventure avec CTA Voyages ?",
    cards: [
      {
        icon: "hiking",
        title: "Un encadrement expert",
        text: "Guides locaux diplômés, briefings sécurité et matériel adapté : vous repoussez vos limites en confiance.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
        alt: "Guide de montagne menant un groupe de randonneurs",
      },
      {
        icon: "backpack",
        title: "Une logistique millimétrée",
        text: "Portage, permis, bivouacs, ravitaillement : nous orchestrons chaque détail pour que vous voyagiez léger.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Tente de bivouac dressée en pleine nature",
      },
      {
        icon: "diversity_3",
        title: "L'immersion authentique",
        text: "Nuits chez l'habitant, marchés de village, rencontres vraies : l'aventure humaine autant que sportive.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Voyageurs partageant un repas avec une communauté locale",
      },
      {
        icon: "health_and_safety",
        title: "La sécurité avant tout",
        text: "Assistance 24/7, niveaux de difficulté clairs et acclimatation maîtrisée : l'adrénaline sans la prise de risque inutile.",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&auto=format",
        alt: "Randonneur sécurisé sur une crête de montagne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "12 jours de trek au Népal, du Khumbu au camp de base de l'Everest",
    intro:
      "Douze jours d'aventure encadrée au cœur de l'Himalaya, des ruelles de Katmandou aux panoramas mythiques sur le toit du monde.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 2",
        title: "Katmandou & acclimatation",
        text: "Arrivée dans la vallée de Katmandou, accueil par votre guide et installation. Découverte des temples et stupas, derniers préparatifs et briefing logistique avant de gagner les hauteurs de l'Himalaya.",
        img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop&auto=format",
        alt: "Stupa et temples de la vallée de Katmandou au Népal",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 3",
        title: "Vol pour Lukla & marche vers Phakding",
        text: "Vol spectaculaire jusqu'à la piste d'altitude de Lukla, l'une des plus impressionnantes au monde. Première étape de marche en douceur le long de la rivière Dudh Koshi jusqu'au village de Phakding.",
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop&auto=format",
        alt: "Piste de montagne et sommets enneigés autour de Lukla au Népal",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 4 À 5",
        title: "Montée vers Namche Bazaar",
        text: "Traversée de ponts suspendus et entrée dans le parc national de Sagarmatha. Montée vers Namche Bazaar, capitale sherpa nichée en amphithéâtre, suivie d'une journée d'acclimatation indispensable.",
        img: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600&h=400&fit=crop&auto=format",
        alt: "Village sherpa de Namche Bazaar accroché à la montagne",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 6",
        title: "Le monastère de Tengboche",
        text: "Marche à travers forêts de rhododendrons jusqu'au monastère de Tengboche, haut lieu spirituel du Khumbu. Cérémonie des moines et premier face-à-face avec l'Ama Dablam dressé dans le ciel.",
        img: "https://images.unsplash.com/photo-1606117331085-5760e3b58520?w=600&h=400&fit=crop&auto=format",
        alt: "Monastère de Tengboche face aux sommets de l'Himalaya",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 7 À 9",
        title: "Panorama sur l'Everest",
        text: "Progression encadrée vers les hauteurs du Khumbu, acclimatation maîtrisée et points de vue grandioses. Au lever du jour, le panorama s'ouvre sur l'Everest, le Lhotse et le Nuptse — l'instant le plus fort du trek.",
        img: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600&h=400&fit=crop&auto=format",
        alt: "Panorama sur l'Everest et les sommets de l'Himalaya au lever du jour",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 10 À 12",
        title: "Redescente & retour à Katmandou",
        text: "Redescente progressive vers Lukla en savourant les derniers paysages d'altitude, puis vol retour vers Katmandou. Dernière soirée festive avec l'équipe avant l'envol vers la France, la tête pleine de sommets.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
        alt: "Randonneurs en redescente sur un sentier de l'Himalaya népalais",
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
    h2: "Nos aventures confidentielles",
    intro:
      "Envie d'un terrain de jeu moins couru ? Voici quelques aventures originales que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes du désert de Gobi en Mongolie",
        tag: "Asie centrale",
        name: "Mongolie",
        text: "Steppes infinies, yourtes nomades et chevaux sauvages : l'aventure à l'état pur.",
      },
      {
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
        alt: "Vallée de l'Omo en Éthiopie",
        tag: "Corne de l'Afrique",
        name: "Éthiopie",
        text: "Montagnes du Simien, peuples millénaires et églises taillées dans la roche.",
      },
      {
        img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=400&fit=crop&auto=format",
        alt: "Fjords sauvages de l'archipel du Svalbard",
        tag: "Arctique",
        name: "Svalbard",
        text: "Banquise, ours polaires et soleil de minuit aux confins du Grand Nord.",
      },
      {
        img: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop&auto=format",
        alt: "Volcans et rizières en terrasses de l'île de Florès en Indonésie",
        tag: "Indonésie",
        name: "Florès",
        text: "Volcans colorés, dragons de Komodo et villages traditionnels loin des foules.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en voyage aventure ?",
    intro:
      "Chaque terrain a sa fenêtre idéale : saison sèche, fonte des neiges ou migrations. Votre conseiller affine selon votre itinéraire.",
    rows: [
      {
        destination: "Costa Rica",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "ok", "ok", "avoid", "avoid", "ok", "ideal"],
      },
      {
        destination: "Népal",
        months: ["ok", "ok", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Pérou",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
      {
        destination: "Islande",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Kenya",
        months: ["ok", "ideal", "ideal", "ok", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "ok"],
      },
      {
        destination: "Patagonie",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre voyage aventure",
    left: [
      {
        question: "Faut-il être très sportif pour partir à l'aventure ?",
        answer: (
          <p>
            Pas forcément&nbsp;: nous proposons des niveaux du plus accessible au
            plus engagé. Votre conseiller évalue votre condition physique et
            choisit un itinéraire adapté, avec une progression maîtrisée.
          </p>
        ),
      },
      {
        question: "Comment la sécurité est-elle assurée ?",
        answer: (
          <p>
            Guides locaux diplômés, matériel contrôlé, briefings, acclimatation
            progressive et assistance 24/7&nbsp;: chaque aventure est encadrée
            pour vivre les sensations sans prise de risque inutile.
          </p>
        ),
      },
      {
        question: "Quelles destinations pour une première aventure ?",
        answer: (
          <p>
            Le Costa Rica, le Pérou ou l&apos;Islande sont d&apos;excellents
            terrains d&apos;initiation&nbsp;: nature spectaculaire, treks
            accessibles et logistique bien rôdée.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir à l'aventure en famille ?",
        answer: (
          <p>
            Oui. Nous adaptons les distances, le rythme et les activités (safari,
            randonnées douces, immersion) pour que petits et grands partagent une
            aventure mémorable et sûre.
          </p>
        ),
      },
      {
        question: "Le matériel est-il fourni ?",
        answer: (
          <p>
            Selon l&apos;itinéraire&nbsp;: tentes, portage et équipement technique
            sont souvent inclus. Votre conseiller vous remet une liste précise de
            ce qu&apos;il reste à prévoir.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous votre terrain de jeu (ou vos envies), vos dates et le
            nombre de voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Faut-il être très sportif pour partir à l'aventure ?",
        answer:
          "Pas forcément : nous proposons des niveaux du plus accessible au plus engagé. Le conseiller évalue votre condition physique et choisit un itinéraire adapté avec une progression maîtrisée.",
      },
      {
        question: "Comment la sécurité est-elle assurée ?",
        answer:
          "Guides locaux diplômés, matériel contrôlé, briefings, acclimatation progressive et assistance 24/7 : chaque aventure est encadrée pour vivre les sensations sans prise de risque inutile.",
      },
      {
        question: "Quelles destinations pour une première aventure ?",
        answer:
          "Le Costa Rica, le Pérou ou l'Islande sont d'excellents terrains d'initiation : nature spectaculaire, treks accessibles et logistique bien rôdée.",
      },
      {
        question: "Peut-on partir à l'aventure en famille ?",
        answer:
          "Oui, en adaptant les distances, le rythme et les activités (safari, randonnées douces, immersion) pour que petits et grands partagent une aventure mémorable et sûre.",
      },
      {
        question: "Le matériel est-il fourni ?",
        answer:
          "Selon l'itinéraire : tentes, portage et équipement technique sont souvent inclus, et le conseiller remet une liste précise de ce qu'il reste à prévoir.",
      },
      {
        question: "Comment obtenir un devis pour un voyage aventure ?",
        answer:
          "Indiquez votre terrain de jeu, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        L&apos;aventure responsable, c&apos;est notre boussole&nbsp;: guides et
        porteurs rémunérés équitablement, écolodges engagés, respect des milieux
        fragiles et des communautés. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à repousser vos limites ?",
    body: "Dites-nous quel terrain vous fait rêver — dates, niveau, budget — et votre conseiller dédié compose votre aventure sur mesure, gratuitement et sans engagement.",
  },
};

export default vsmAventure;
