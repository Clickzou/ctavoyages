import type { ThemeContent } from "../types";

/**
 * Page thème « Circuit en petit groupe ». Images : visuels à valider/remplacer.
 */
const circuitPetitGroupe: ThemeContent = {
  slug: "petit-groupe",
  parentLabel: "Circuits",
  parentHref: "/circuits",
  meta: {
    title: "Circuit en petit groupe — Voyages à taille humaine (8-15 pers.) | CTA Voyages",
    description:
      "Partez en circuit accompagné en petit groupe avec CTA Voyages : 8 à 15 voyageurs, convivialité, confort préservé, départs garantis et guide francophone. Devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Petit groupe de voyageurs en randonnée sur un sentier panoramique",
    label: "Circuits accompagnés",
    h1: "Circuit en petit groupe : l'aventure à taille humaine",
    description:
      "De 8 à 15 voyageurs, jamais plus. La convivialité d'un groupe restreint sans rien sacrifier au confort ni à la qualité — guide francophone, rencontres authentiques et départs garantis.",
    primaryCtaLabel: "Composer mon circuit en petit groupe",
    secondaryCtaLabel: "Pourquoi un petit groupe ?",
  },
  presentation: {
    eyebrow: "Le voyage partagé",
    h2: "Le bon nombre pour bien voyager",
    body: (
      <>
        Ni la solitude du voyage en solo, ni l&apos;anonymat des cars bondés&nbsp;:
        le circuit en petit groupe, c&apos;est l&apos;équilibre parfait. À 8 à 15
        voyageurs, on accède à des ruelles, des familles et des tables qu&apos;un
        grand groupe ne franchirait jamais. Chez CTA Voyages, votre conseiller
        compose un itinéraire rythmé mais confortable, avec un guide francophone qui
        connaît son terrain — et des compagnons de route qui deviennent souvent des
        amis. Départs garantis, pour partir l&apos;esprit tranquille.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
      alt: "Le Machu Picchu au lever du soleil au Pérou",
      badge: "AMÉRIQUE DU SUD",
      name: "Pérou",
      desc: "Machu Picchu, vallée sacrée et marchés andins, en petit comité.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format",
      alt: "Le trésor de Pétra en Jordanie",
      badge: "MOYEN-ORIENT",
      name: "Jordanie",
      desc: "Pétra, le Wadi Rum et bivouac sous les étoiles avec les Bédouins.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format",
      alt: "Jonque sur la baie d'Halong au Vietnam",
      badge: "ASIE",
      name: "Vietnam",
      desc: "Baie d'Halong, rizières en terrasses et villages de minorités.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
      alt: "Place Jemaa el-Fna et souks de Marrakech au Maroc",
      badge: "AFRIQUE",
      name: "Maroc",
      desc: "Médinas impériales, dunes du désert et nuits sous la tente nomade.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&h=400&fit=crop&auto=format",
      alt: "Temple et cueilleuses de thé au Sri Lanka",
      badge: "ASIE",
      name: "Sri Lanka",
      desc: "Plantations de thé, temples bouddhistes et safaris animaliers.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=400&fit=crop&auto=format",
      alt: "Place du Registan à Samarcande en Ouzbékistan",
      badge: "ASIE CENTRALE",
      name: "Ouzbékistan",
      desc: "Samarcande, Boukhara et la Route de la Soie en mosaïques d'azur.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un circuit en petit groupe avec CTA Voyages ?",
    cards: [
      {
        icon: "groups",
        title: "Un groupe à taille humaine",
        text: "8 à 15 voyageurs maximum : l'occasion de tisser des liens et de vivre le voyage ensemble, sans la cohue.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
        alt: "Petit groupe de voyageurs souriants ensemble",
      },
      {
        icon: "tour",
        title: "Un guide francophone dédié",
        text: "Un accompagnateur expert qui connaît son terrain, raconte l'histoire des lieux et ouvre les bonnes portes.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Guide expliquant un site à des voyageurs",
      },
      {
        icon: "verified",
        title: "Des départs garantis",
        text: "Une fois le groupe constitué, votre départ est confirmé : vous réservez vos vols et congés en toute sérénité.",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
        alt: "Avion au décollage",
      },
      {
        icon: "king_bed",
        title: "Le confort préservé",
        text: "Hôtels de charme bien situés, transferts privés et rythme maîtrisé : la convivialité sans sacrifier la qualité.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&auto=format",
        alt: "Chambre d'hôtel élégante et confortable",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Dix jours en Jordanie, en petit groupe à taille humaine",
    intro:
      "Un circuit accompagné de 10 jours, d'Amman au Wadi Rum, ponctué de rencontres et de bivouacs sous les étoiles — pensé pour un groupe restreint.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 2",
        title: "Amman, la capitale aux mille visages",
        text: "Accueil à l'aéroport et installation à Amman. Découverte de la citadelle, du théâtre romain et des souks animés du centre-ville, avant un premier dîner convivial pour faire connaissance avec le groupe.",
        img: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&h=400&fit=crop&auto=format",
        alt: "Vue sur la citadelle et les collines d'Amman en Jordanie",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 3",
        title: "Jerash, la Pompéi de l'Orient",
        text: "Cap au nord vers Jerash, l'une des cités gréco-romaines les mieux conservées au monde. Colonnades, arcs de triomphe et théâtres antiques se parcourent à pied, en petit comité, au rythme des explications du guide.",
        img: "https://images.unsplash.com/photo-1601751818941-571144562ff8?w=600&h=400&fit=crop&auto=format",
        alt: "Colonnades antiques du site romain de Jerash en Jordanie",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 4",
        title: "Madaba & mont Nébo",
        text: "Visite de Madaba et de sa célèbre carte byzantine en mosaïque, puis montée au mont Nébo d'où Moïse contempla la Terre promise. Panorama saisissant sur la vallée du Jourdain et la mer Morte.",
        img: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=600&h=400&fit=crop&auto=format",
        alt: "Mosaïque byzantine et paysage du mont Nébo en Jordanie",
        align: "left",
      },
      {
        id: "s4",
        label: "JOURS 5 À 6",
        title: "Pétra, la cité rose des Nabatéens",
        text: "Deux journées pour explorer Pétra, merveille taillée dans le grès. Le Siq, le Trésor, le monastère et les hauts lieux de sacrifice se dévoilent au fil de la marche — et une visite nocturne aux bougies clôt l'expérience.",
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=400&fit=crop&auto=format",
        alt: "Le Trésor de Pétra émergeant au bout du Siq en Jordanie",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 7 À 8",
        title: "Le désert du Wadi Rum",
        text: "Immersion dans le Wadi Rum à bord de 4x4 : dunes ocre, arches de grès et canyons. Nuit en bivouac sous les étoiles dans un camp bédouin, autour d'un repas traditionnel cuit dans le sable — un moment fort en petit groupe.",
        img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes et formations rocheuses du désert du Wadi Rum",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 9 À 10",
        title: "La mer Morte & retour",
        text: "Descente vers la mer Morte, point le plus bas de la planète, pour une baignade insolite et un soin de boue avant de se détendre. Dernière soirée tous ensemble, puis transfert vers l'aéroport pour le vol retour.",
        img: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=600&h=400&fit=crop&auto=format",
        alt: "Rivage minéral et eaux de la mer Morte en Jordanie",
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
    h2: "Nos circuits confidentiels en petit groupe",
    intro:
      "Envie d'une destination moins courue ? Voici quelques aventures en petit comité que nos conseillers adorent partager.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop&auto=format",
        alt: "Monastère perché du Bhoutan dans la brume",
        tag: "Himalaya",
        name: "Bhoutan",
        text: "Royaume du Bonheur : monastères perchés, vallées préservées et culture intacte.",
      },
      {
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&auto=format",
        alt: "Église troglodyte de Lalibela en Éthiopie",
        tag: "Afrique de l'Est",
        name: "Éthiopie",
        text: "Berceau de l'humanité : églises rupestres, hauts plateaux et tribus de l'Omo.",
      },
      {
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
        alt: "Vallée du Pamir au Tadjikistan",
        tag: "Asie centrale",
        name: "Tadjikistan",
        text: "Toit du monde : la route du Pamir, lacs d'altitude et hospitalité légendaire.",
      },
      {
        img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&auto=format",
        alt: "Paysage volcanique du Nicaragua",
        tag: "Amérique centrale",
        name: "Nicaragua",
        text: "Volcans actifs, villes coloniales et lagunes turquoise loin des foules.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en circuit en petit groupe ?",
    intro:
      "Chaque destination a sa saison idéale. Nos départs garantis sont calés sur les meilleures fenêtres météo — votre conseiller affine selon le calendrier.",
    rows: [
      {
        destination: "Pérou",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Jordanie",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Vietnam",
        months: ["ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Maroc",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Sri Lanka",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ok", "ok", "avoid", "ideal", "ideal"],
      },
      {
        destination: "Ouzbékistan",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre circuit en petit groupe",
    left: [
      {
        question: "Combien de personnes dans le groupe ?",
        answer: (
          <p>
            De 8 à 15 voyageurs maximum, jamais plus. Ce format garantit la
            convivialité, l&apos;accès à des lieux préservés et un vrai contact avec
            votre guide et les habitants — loin des cars de cinquante personnes.
          </p>
        ),
      },
      {
        question: "Faut-il voyager seul pour rejoindre un petit groupe ?",
        answer: (
          <p>
            Pas du tout. Nos circuits accueillent aussi bien les voyageurs solos que
            les couples, les amis ou les familles. C&apos;est justement l&apos;occasion
            de partir seul tout en profitant de la compagnie d&apos;un groupe à taille
            humaine.
          </p>
        ),
      },
      {
        question: "Qu'est-ce qu'un départ garanti ?",
        answer: (
          <p>
            Une fois le nombre minimum de participants atteint, le départ est
            confirmé&nbsp;: vous pouvez réserver vos vols et poser vos congés sans
            crainte d&apos;annulation. Nous vous indiquons clairement le statut de
            chaque date.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Le confort est-il vraiment au rendez-vous ?",
        answer: (
          <p>
            Oui. Petit groupe ne rime pas avec rusticité&nbsp;: nous sélectionnons des
            hôtels de charme bien situés, des transferts confortables et un rythme
            équilibré qui laisse le temps de savourer chaque étape.
          </p>
        ),
      },
      {
        question: "Le guide parle-t-il français ?",
        answer: (
          <p>
            La plupart de nos circuits sont accompagnés d&apos;un guide francophone du
            début à la fin. Sur certaines destinations, un guide local anglophone peut
            compléter l&apos;équipe&nbsp;: nous vous le précisons toujours à l&apos;avance.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous la destination (ou vos envies), vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition personnalisée,
            gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Combien de personnes dans le groupe ?",
        answer:
          "De 8 à 15 voyageurs maximum, jamais plus. Ce format garantit la convivialité, l'accès à des lieux préservés et un vrai contact avec le guide et les habitants.",
      },
      {
        question: "Faut-il voyager seul pour rejoindre un petit groupe ?",
        answer:
          "Non, nos circuits accueillent les voyageurs solos comme les couples, amis ou familles. C'est l'occasion idéale de partir seul tout en profitant d'un groupe à taille humaine.",
      },
      {
        question: "Qu'est-ce qu'un départ garanti ?",
        answer:
          "Une fois le nombre minimum de participants atteint, le départ est confirmé : vous pouvez réserver vos vols et congés sans crainte d'annulation.",
      },
      {
        question: "Le confort est-il vraiment au rendez-vous ?",
        answer:
          "Oui, nous sélectionnons des hôtels de charme bien situés, des transferts confortables et un rythme équilibré. Petit groupe ne rime pas avec rusticité.",
      },
      {
        question: "Le guide parle-t-il français ?",
        answer:
          "La plupart de nos circuits sont accompagnés d'un guide francophone du début à la fin, parfois complété par un guide local anglophone, ce que nous précisons toujours à l'avance.",
      },
      {
        question: "Comment obtenir un devis pour un circuit en petit groupe ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Le petit groupe, c&apos;est aussi un tourisme plus responsable&nbsp;: moins
        d&apos;impact sur les sites, des retombées directes pour les guides, familles
        et hébergeurs locaux, et des rencontres authentiques. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à partir à la rencontre du monde, en bonne compagnie ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre circuit en petit groupe sur mesure, gratuitement et sans engagement.",
  },
};

export default circuitPetitGroupe;
