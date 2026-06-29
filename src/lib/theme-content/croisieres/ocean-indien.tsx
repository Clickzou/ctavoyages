import type { ThemeContent } from "../types";

/**
 * Page thème « Croisière Océan Indien ». Images : visuels à valider/remplacer.
 */
const croisiereOceanIndien: ThemeContent = {
  slug: "ocean-indien",
  parentLabel: "Croisières",
  parentHref: "/croisieres",
  meta: {
    title: "Croisière Océan Indien — Maurice, Seychelles, Madagascar | CTA Voyages",
    description:
      "Partez en croisière dans l'océan Indien avec CTA Voyages : lagons turquoise, îles paradisiaques et culture créole entre Maurice, Seychelles, Madagascar, Maldives et Zanzibar. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1589979481223-deb893043163?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Lagon turquoise et plage de sable blanc d'une île de l'océan Indien",
    label: "Croisière Océan Indien",
    h1: "Croisière dans l'océan Indien : le paradis créole",
    description:
      "Lagons turquoise, plages de sable blanc et îles parfumées d'épices : naviguez de Maurice aux Seychelles, de Madagascar à Zanzibar. Nous composons l'itinéraire qui mêle baignade, nature et culture créole.",
    primaryCtaLabel: "Composer ma croisière",
    secondaryCtaLabel: "Pourquoi l'océan Indien ?",
  },
  presentation: {
    eyebrow: "La grande bleue tropicale",
    h2: "Des îles parmi les plus belles du monde",
    body: (
      <>
        Un réveil face à un lagon translucide, une journée de snorkeling au-dessus
        des coraux, une escale au marché aux épices puis un dîner créole sous les
        étoiles&nbsp;: la croisière dans l&apos;océan Indien, c&apos;est
        l&apos;art de relier les plus belles îles tropicales sans défaire ses
        valises. Chez CTA Voyages, votre conseiller sélectionne la compagnie, la
        cabine et les escales — Maurice, Seychelles, Madagascar — pour un voyage
        sans temps mort ni mauvaise surprise.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=400&fit=crop&auto=format",
      alt: "Plage et eaux turquoise de l'île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Lagons protégés, montagnes verdoyantes et hospitalité créole légendaire.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop&auto=format",
      alt: "Rochers de granit et plage des Seychelles",
      badge: "OCÉAN INDIEN",
      name: "Seychelles",
      desc: "Rochers de granit sculptés, plages de rêve et nature préservée.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
      alt: "Allée des baobabs à Madagascar",
      badge: "OCÉAN INDIEN",
      name: "Madagascar",
      desc: "Baobabs majestueux, lémuriens et biodiversité unique au monde.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
      alt: "Bungalows sur pilotis aux Maldives",
      badge: "OCÉAN INDIEN",
      name: "Maldives",
      desc: "Atolls de corail, eaux cristallines et villas sur pilotis paradisiaques.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=400&fit=crop&auto=format",
      alt: "Voiliers traditionnels dhow au large de Zanzibar",
      badge: "OCÉAN INDIEN",
      name: "Zanzibar",
      desc: "Stone Town, marchés aux épices et plages de sable blanc immaculé.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&h=400&fit=crop&auto=format",
      alt: "Cirque volcanique et reliefs de La Réunion",
      badge: "OCÉAN INDIEN",
      name: "La Réunion",
      desc: "Volcans, cirques classés UNESCO et lagons pour la randonnée et la plage.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une croisière océan Indien avec CTA Voyages ?",
    cards: [
      {
        icon: "directions_boat",
        title: "La cabine idéale",
        text: "Hublot, balcon ou suite : nous choisissons la compagnie et la catégorie de cabine adaptées à vos envies et votre budget.",
        img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
        alt: "Cabine de croisière avec balcon vue mer",
      },
      {
        icon: "flight_takeoff",
        title: "Vols et transferts inclus",
        text: "Vols vers le port d'embarquement, transferts et nuits d'hôtel avant l'escale : vous montez à bord l'esprit léger.",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
        alt: "Avion au décollage",
      },
      {
        icon: "scuba_diving",
        title: "Les plus beaux lagons",
        text: "Snorkeling, plongée, excursions sur les îlots : un programme pensé pour profiter des fonds marins les plus spectaculaires.",
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&h=400&fit=crop&auto=format",
        alt: "Plongée avec tuba au-dessus d'un récif de corail",
      },
      {
        icon: "local_dining",
        title: "Saveurs créoles",
        text: "Cari, rougail, fruits de mer et épices : nos conseillers vous orientent vers les escales et tables les plus authentiques.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
        alt: "Plats créoles épicés servis sur une table",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Dix jours d'escales, de Maurice aux Seychelles",
    intro:
      "Une croisière de dix jours qui relie les plus belles îles de l'océan Indien, de lagon en marché aux épices.",
    steps: [
      {
        id: "s1",
        label: "ESCALE 1",
        title: "Maurice — embarquement",
        text: "Montée à bord à Port-Louis après une nuit d'acclimatation. Cocktail de bienvenue sur le pont supérieur et premier coucher de soleil sur le lagon avant de larguer les amarres.",
        img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=400&fit=crop&auto=format",
        alt: "Lagon turquoise et front de mer de l'Île Maurice à l'embarquement",
        align: "left",
      },
      {
        id: "s2",
        label: "ESCALE 2",
        title: "La Réunion — l'île intense",
        text: "Escale au Port pour une journée entre volcans et cirques classés UNESCO. Excursion vers le piton de la Fournaise ou les cascades de Salazie, puis retour à bord au crépuscule.",
        img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&h=400&fit=crop&auto=format",
        alt: "Cirque volcanique et reliefs verdoyants de La Réunion",
        align: "right",
      },
      {
        id: "s3",
        label: "ESCALE 3",
        title: "Madagascar — Nosy Be",
        text: "Deux jours de navigation puis l'île aux parfums : ylang-ylang, plages dorées et lémuriens curieux. Snorkeling au large de Nosy Tanikely et déjeuner créole face à la mer.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
        alt: "Baie et plages dorées de Nosy Be à Madagascar",
        align: "left",
      },
      {
        id: "s4",
        label: "ESCALE 4",
        title: "Seychelles — Mahé & granit rose",
        text: "Escale au cœur de l'archipel : plages de granit sculpté, marché de Victoria et eaux cristallines. Une journée pour explorer Anse Source d'Argent ou farnienter sur le sable.",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop&auto=format",
        alt: "Rochers de granit rose et plage de rêve des Seychelles",
        align: "right",
      },
      {
        id: "s5",
        label: "ESCALE 5",
        title: "Zanzibar — Stone Town & épices",
        text: "Cap sur l'Afrique de l'Est : flânerie dans les ruelles de Stone Town classées UNESCO, visite d'une plantation d'épices et baignade sur les plages de sable blanc immaculé.",
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=400&fit=crop&auto=format",
        alt: "Voiliers traditionnels dhow et plage de sable blanc de Zanzibar",
        align: "left",
      },
      {
        id: "s6",
        label: "ESCALE 6",
        title: "Retour à Maurice — débarquement",
        text: "Dernière journée de navigation rythmée par les couchers de soleil, avant le retour au port de Maurice. Débarquement et transfert, la tête pleine de lagons et d'épices.",
        img: "https://images.unsplash.com/photo-1589979481223-deb893043163?w=600&h=400&fit=crop&auto=format",
        alt: "Lagon turquoise et plage de sable blanc de l'Île Maurice au retour",
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
    h2: "Nos escales confidentielles",
    intro:
      "Envie d'une île moins courue ? Voici quelques escales originales de l'océan Indien que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&h=400&fit=crop&auto=format",
        alt: "Lagon et îlots de l'archipel de Rodrigues",
        tag: "Mascareignes",
        name: "Rodrigues",
        text: "L'île au bout du monde : lagon immense, pêcheurs créoles et tortues géantes.",
      },
      {
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&h=400&fit=crop&auto=format",
        alt: "Plage déserte et cocotiers de l'île de La Digue",
        tag: "Seychelles",
        name: "La Digue",
        text: "Sans voiture, à vélo : plages de granit rose et farniente absolu.",
      },
      {
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
        alt: "Baie et baobabs de Nosy Be à Madagascar",
        tag: "Madagascar",
        name: "Nosy Be",
        text: "L'île aux parfums : ylang-ylang, plages dorées et lémuriens curieux.",
      },
      {
        img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop&auto=format",
        alt: "Lagon turquoise et atoll des Maldives vu du ciel",
        tag: "Maldives",
        name: "Atoll d'Ari",
        text: "Raies manta et requins-baleines dans l'un des plus beaux atolls du monde.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en croisière océan Indien ?",
    intro:
      "La saison sèche (mai à novembre) offre le meilleur climat et une mer calme. Votre conseiller affine selon les escales et la mousson.",
    rows: [
      {
        destination: "Île Maurice",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Seychelles",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Madagascar",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Maldives",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ok", "ideal", "ideal"],
      },
      {
        destination: "Zanzibar",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
      {
        destination: "La Réunion",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre croisière océan Indien",
    left: [
      {
        question: "Quelle est la durée idéale d'une croisière dans l'océan Indien ?",
        answer: (
          <p>
            En général 7 à 14 nuits. Une semaine permet de relier Maurice et La
            Réunion, deux semaines d&apos;ajouter les Seychelles ou Madagascar.
            Votre conseiller adapte l&apos;itinéraire à vos dates et envies.
          </p>
        ),
      },
      {
        question: "Les vols et la cabine sont-ils compris ?",
        answer: (
          <p>
            Oui, nous composons un forfait complet&nbsp;: vols, transferts, nuits
            d&apos;hôtel éventuelles et cabine de la catégorie de votre choix. Vous
            pouvez ajouter excursions et pension boissons.
          </p>
        ),
      },
      {
        question: "Quelles îles recommandez-vous pour une première croisière ?",
        answer: (
          <p>
            Maurice, La Réunion et les Seychelles forment un trio facile
            d&apos;accès, aux lagons magnifiques et riches en culture créole — idéal
            pour une découverte de l&apos;océan Indien.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en croisière en famille ?",
        answer: (
          <p>
            Bien sûr. Nous sélectionnons des compagnies avec clubs enfants,
            piscines et excursions adaptées (snorkeling encadré, plages) pour petits
            et grands.
          </p>
        ),
      },
      {
        question: "Faut-il réserver les excursions à l'avance ?",
        answer: (
          <p>
            Pour les activités très demandées (plongée avec les raies, sorties
            dauphins), oui&nbsp;: nous réservons vos excursions à l&apos;avance pour
            vous garantir une place.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous vos îles de rêve (ou vos envies), vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la durée idéale d'une croisière dans l'océan Indien ?",
        answer:
          "En général 7 à 14 nuits. Une semaine relie Maurice et La Réunion, deux semaines permettent d'ajouter les Seychelles ou Madagascar. L'itinéraire s'adapte à vos dates et envies.",
      },
      {
        question: "Les vols et la cabine sont-ils compris ?",
        answer:
          "Oui, nous composons un forfait complet : vols, transferts, nuits d'hôtel éventuelles et cabine de la catégorie de votre choix, avec la possibilité d'ajouter excursions et pension boissons.",
      },
      {
        question: "Quelles îles pour une première croisière océan Indien ?",
        answer:
          "Maurice, La Réunion et les Seychelles forment un trio facile d'accès, aux lagons magnifiques et riches en culture créole, idéal pour une découverte.",
      },
      {
        question: "Peut-on partir en croisière océan Indien en famille ?",
        answer:
          "Oui, avec des compagnies proposant clubs enfants, piscines et excursions adaptées (snorkeling encadré, plages) pour petits et grands.",
      },
      {
        question: "Faut-il réserver les excursions à l'avance ?",
        answer:
          "Pour les activités très demandées comme la plongée avec les raies ou les sorties dauphins, oui : nous réservons vos excursions à l'avance pour garantir une place.",
      },
      {
        question: "Comment obtenir un devis pour une croisière océan Indien ?",
        answer:
          "Indiquez vos îles de rêve, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Naviguer dans l&apos;océan Indien peut se faire mieux&nbsp;: nous
        privilégions les compagnies engagées dans la réduction des émissions, les
        excursions respectueuses des récifs et les acteurs locaux des îles. Voyager
        mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à larguer les amarres vers les lagons ?",
    body: "Dites-nous quelles îles vous font rêver — dates, durée, budget — et votre conseiller dédié compose votre croisière sur mesure, gratuitement et sans engagement.",
  },
};

export default croisiereOceanIndien;
