import type { ThemeContent } from "./types";

/**
 * Page thème « Escapade urbaine ». Images : visuels de villes à valider/remplacer.
 */
const escapadeUrbaine: ThemeContent = {
  slug: "escapade-urbaine",
  parentLabel: "Séjours",
  parentHref: "/sejours",
  meta: {
    title: "Escapade urbaine & city break sur mesure — Week-ends en ville | CTA Voyages",
    description:
      "Organisez votre escapade urbaine avec CTA Voyages : city breaks de 2 à 5 nuits dans les plus belles villes d'Europe et d'ailleurs. Vols, hôtel central, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Skyline d'une grande ville européenne au coucher du soleil",
    label: "Escapade urbaine",
    h1: "Escapade urbaine : la ville, le temps d'un week-end",
    description:
      "Deux à cinq nuits au cœur d'une grande ville — musées, terrasses, shopping et bonnes adresses. Nous composons le city break qui vous ressemble, hôtel central et bons plans inclus.",
    primaryCtaLabel: "Composer mon city break",
    secondaryCtaLabel: "Pourquoi une escapade urbaine ?",
  },
  presentation: {
    eyebrow: "Le voyage court format",
    h2: "Quelques jours, mille découvertes",
    body: (
      <>
        Un musée le matin, un déjeuner en terrasse, une balade dans les ruelles
        historiques et un rooftop au coucher du soleil&nbsp;: l&apos;escapade
        urbaine, c&apos;est l&apos;art de concentrer l&apos;essentiel d&apos;une
        ville en quelques jours. Chez CTA Voyages, votre conseiller sélectionne la
        destination, l&apos;hôtel idéalement situé et les expériences à ne pas
        manquer — pour un week-end prolongé sans temps mort ni mauvaise surprise.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&h=400&fit=crop&auto=format",
      alt: "Big Ben et le Parlement de Londres",
      badge: "EUROPE",
      name: "Londres",
      desc: "Musées world-class, marchés branchés et scène culinaire vibrante.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop&auto=format",
      alt: "Canaux et maisons typiques d'Amsterdam",
      badge: "EUROPE",
      name: "Amsterdam",
      desc: "Canaux romantiques, grands musées et balades à vélo.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
      alt: "Le Colisée de Rome",
      badge: "EUROPE",
      name: "Rome",
      desc: "Colisée, Vatican, piazzas baroques et dolce vita à l'italienne.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
      alt: "Quartier de la Ribeira à Porto",
      badge: "EUROPE",
      name: "Porto",
      desc: "Azulejos, caves du Douro et fado dans les ruelles dorées.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop&auto=format",
      alt: "La Sagrada Família à Barcelone",
      badge: "EUROPE",
      name: "Barcelone",
      desc: "Gaudí, tapas et plages urbaines au soleil de la Méditerranée.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop&auto=format",
      alt: "Gratte-ciels de New York",
      badge: "AMÉRIQUES",
      name: "New York",
      desc: "La ville qui ne dort jamais : Central Park, Broadway et skyline mythique.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une escapade urbaine avec CTA Voyages ?",
    cards: [
      {
        icon: "hotel",
        title: "Un hôtel bien situé",
        text: "Central, de charme ou design : nous choisissons l'hébergement au bon endroit pour tout faire à pied.",
        img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&auto=format",
        alt: "Chambre d'hôtel élégante en centre-ville",
      },
      {
        icon: "flight_takeoff",
        title: "Vols et transferts inclus",
        text: "Vols directs quand c'est possible, transferts organisés : vous arrivez l'esprit léger.",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
        alt: "Avion au décollage",
      },
      {
        icon: "museum",
        title: "Les incontournables… et le reste",
        text: "Musées, monuments mais aussi adresses confidentielles : un programme qui sort des sentiers battus.",
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop&auto=format",
        alt: "Galerie d'un grand musée",
      },
      {
        icon: "restaurant",
        title: "Les meilleures tables",
        text: "Bistrots typiques, rooftops, street food : nos conseillers partagent leurs bonnes adresses.",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format",
        alt: "Terrasse de restaurant animée",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Quatre jours à Rome, la Ville éternelle",
    intro:
      "Un city break romain où chaque jour révèle une époque, de l'Antiquité à la dolce vita.",
    steps: [
      {
        id: "arrivee-centre",
        label: "JOUR 1",
        title: "Arrivée & cœur historique",
        text: "Installation à l'hôtel puis première immersion à pied dans le centre historique. Fontaine de Trevi, Panthéon et place Navone vous accueillent au crépuscule, gelato en main.",
        img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=400&fit=crop&auto=format",
        alt: "La fontaine de Trevi illuminée à Rome",
        align: "left",
      },
      {
        id: "vatican-musees",
        label: "JOUR 2",
        title: "Vatican & musées",
        text: "Visite coupe-file de la basilique Saint-Pierre, des musées du Vatican et de la chapelle Sixtine. L'après-midi, montée à la coupole pour un panorama inoubliable sur la ville.",
        img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=400&fit=crop&auto=format",
        alt: "La basilique Saint-Pierre et la place du Vatican",
        align: "right",
      },
      {
        id: "rome-antique",
        label: "JOUR 3",
        title: "Rome antique : Colisée & Forum",
        text: "Plongée dans la grandeur de l'Empire au Colisée, puis flânerie parmi les vestiges du Forum romain et du mont Palatin. Une journée pour marcher dans les pas des Césars.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
        alt: "Le Colisée de Rome sous un ciel dégagé",
        align: "left",
      },
      {
        id: "trastevere",
        label: "JOUR 4",
        title: "Trastevere & dolce vita",
        text: "Matinée shopping et balade dans les ruelles pavées du Trastevere. Déjeuner en terrasse, marché de Campo de' Fiori et apéritif romain pour savourer pleinement la dolce vita.",
        img: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=600&h=400&fit=crop&auto=format",
        alt: "Ruelle pavée et fleurie du quartier du Trastevere à Rome",
        align: "right",
      },
      {
        id: "depart",
        label: "JOUR 5",
        title: "Dernier café & départ",
        text: "Un dernier cappuccino au comptoir et une ultime promenade avant le transfert vers l'aéroport. Vous repartez la tête pleine de souvenirs, déjà prêt à revenir.",
        img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&h=400&fit=crop&auto=format",
        alt: "Cappuccino italien servi sur une terrasse romaine",
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
    h2: "Nos city breaks confidentiels",
    intro:
      "Envie d'une ville moins courue ? Voici quelques escapades urbaines originales que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&h=400&fit=crop&auto=format",
        alt: "Vieille ville de Tbilissi en Géorgie",
        tag: "Caucase",
        name: "Tbilissi",
        text: "Géorgie envoûtante : vieille ville colorée, bains de soufre et vins millénaires.",
      },
      {
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&auto=format",
        alt: "Ruelles de La Valette à Malte",
        tag: "Méditerranée",
        name: "La Valette",
        text: "Malte baroque, remparts dorés et mer turquoise au coin de chaque rue.",
      },
      {
        img: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=600&h=400&fit=crop&auto=format",
        alt: "Centre historique de Naples",
        tag: "Italie",
        name: "Naples",
        text: "L'Italie authentique : pizza, ruelles vivantes et le Vésuve en toile de fond.",
      },
      {
        img: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=600&h=400&fit=crop&auto=format",
        alt: "Vieille ville médiévale de Tallinn en Estonie",
        tag: "Baltique",
        name: "Tallinn",
        text: "Estonie médiévale : remparts, ruelles pavées et café branché design.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en escapade urbaine ?",
    intro:
      "Le printemps et l'automne offrent le meilleur climat et moins de foule. Votre conseiller affine selon vos dates et les événements.",
    rows: [
      {
        destination: "Londres",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
      {
        destination: "Amsterdam",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Rome",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Barcelone",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "New York",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre escapade urbaine",
    left: [
      {
        question: "Combien de jours pour une escapade urbaine ?",
        answer: (
          <p>
            En général 2 à 5 nuits. Un long week-end (3 nuits) suffit pour
            découvrir l&apos;essentiel d&apos;une ville sans courir. Votre
            conseiller adapte la durée à la destination et à vos envies.
          </p>
        ),
      },
      {
        question: "Les vols et l'hôtel sont-ils compris ?",
        answer: (
          <p>
            Oui, nous composons un forfait complet&nbsp;: vols, hôtel idéalement
            situé et transferts si besoin. Vous pouvez aussi ajouter des visites
            ou des billets coupe-file.
          </p>
        ),
      },
      {
        question: "Quelles villes recommandez-vous pour un premier city break ?",
        answer: (
          <p>
            Londres, Amsterdam, Rome, Porto ou Barcelone sont des valeurs sûres,
            faciles d&apos;accès et riches en découvertes pour quelques jours.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en city break en famille ?",
        answer: (
          <p>
            Bien sûr. Nous sélectionnons des hôtels familiaux et un programme
            adapté (parcs, musées interactifs, balades) pour petits et grands.
          </p>
        ),
      },
      {
        question: "Faut-il réserver les visites à l'avance ?",
        answer: (
          <p>
            Pour les sites très demandés (Vatican, musées majeurs), oui&nbsp;: nous
            réservons vos billets coupe-file pour vous éviter les files
            d&apos;attente.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous la ville (ou vos envies), vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Combien de jours pour une escapade urbaine ?",
        answer:
          "En général 2 à 5 nuits. Un long week-end de 3 nuits suffit pour découvrir l'essentiel d'une ville. La durée s'adapte à la destination et à vos envies.",
      },
      {
        question: "Les vols et l'hôtel sont-ils compris ?",
        answer:
          "Oui, nous composons un forfait complet : vols, hôtel central et transferts si besoin, avec la possibilité d'ajouter visites et billets coupe-file.",
      },
      {
        question: "Quelles villes pour un premier city break ?",
        answer:
          "Londres, Amsterdam, Rome, Porto ou Barcelone sont des valeurs sûres, faciles d'accès et riches en découvertes.",
      },
      {
        question: "Peut-on partir en city break en famille ?",
        answer:
          "Oui, avec des hôtels familiaux et un programme adapté (parcs, musées interactifs, balades) pour petits et grands.",
      },
      {
        question: "Faut-il réserver les visites à l'avance ?",
        answer:
          "Pour les sites très demandés, oui : nous réservons vos billets coupe-file pour éviter les files d'attente.",
      },
      {
        question: "Comment obtenir un devis pour une escapade urbaine ?",
        answer:
          "Indiquez la ville, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Voyager en ville aussi peut se faire mieux&nbsp;: nous privilégions le
        train quand c'est pertinent, les hôtels engagés et les acteurs locaux.
        Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à boucler votre sac pour le week-end ?",
    body: "Dites-nous quelle ville vous fait envie — dates, durée, budget — et votre conseiller dédié compose votre escapade sur mesure, gratuitement et sans engagement.",
  },
};

export default escapadeUrbaine;
