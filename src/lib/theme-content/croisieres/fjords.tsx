import type { ThemeContent } from "../types";

/**
 * Page thème « Croisière Fjords & Europe du Nord ». Images : visuels de fjords
 * et villages nordiques à valider/remplacer.
 */
const croisiereFjords: ThemeContent = {
  slug: "fjords",
  parentLabel: "Croisières",
  parentHref: "/croisieres",
  meta: {
    title: "Croisière fjords de Norvège & Europe du Nord — Aurores boréales | CTA Voyages",
    description:
      "Embarquez pour une croisière fjords avec CTA Voyages : parois vertigineuses, villages colorés, soleil de minuit et aurores boréales. Cabine bien choisie, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Fjord norvégien aux parois vertigineuses se reflétant dans une eau calme",
    label: "Croisières",
    h1: "Croisière fjords : la grandeur nordique au fil de l'eau",
    description:
      "Des parois de granit qui plongent dans la mer, des villages colorés blottis au bord de l'eau, le soleil de minuit l'été et les aurores boréales l'hiver. Nous composons la croisière fjords qui vous ressemble, cabine et escales incluses.",
    primaryCtaLabel: "Composer ma croisière fjords",
    secondaryCtaLabel: "Pourquoi une croisière fjords ?",
  },
  presentation: {
    eyebrow: "Le grand spectacle nordique",
    h2: "La nature à l'état brut, au calme",
    body: (
      <>
        Au petit matin, le navire se faufile entre des parois de mille mètres
        tandis qu&apos;une cascade dévale la roche&nbsp;: la croisière fjords,
        c&apos;est l&apos;art de découvrir l&apos;Europe du Nord depuis la mer, là
        où la route ne mène pas. Chez CTA Voyages, votre conseiller sélectionne
        l&apos;itinéraire, la compagnie et la cabine idéale — pour vivre les fjords
        norvégiens, le soleil de minuit ou les aurores boréales sans fausse note.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
      alt: "Fjord profond de Norvège bordé de montagnes enneigées",
      badge: "EUROPE DU NORD",
      name: "Fjords de Norvège",
      desc: "Geirangerfjord, Nærøyfjord et cascades vertigineuses inscrits à l'UNESCO.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=600&h=400&fit=crop&auto=format",
      alt: "Maisons de pêcheurs rouges au pied des montagnes des Lofoten",
      badge: "EUROPE DU NORD",
      name: "Îles Lofoten",
      desc: "Villages de pêcheurs colorés, pics acérés et plages sauvages au-delà du cercle polaire.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et paysage volcanique d'Islande",
      badge: "ATLANTIQUE NORD",
      name: "Islande",
      desc: "Terre de feu et de glace : geysers, glaciers, cascades et côtes spectaculaires.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=600&h=400&fit=crop&auto=format",
      alt: "Banquise et montagnes glacées du Spitzberg dans l'archipel du Svalbard",
      badge: "GRAND NORD",
      name: "Spitzberg",
      desc: "Le Svalbard arctique : glaciers, banquise, ours polaires et soleil de minuit.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
      alt: "Quai coloré de Bryggen à Bergen en Norvège",
      badge: "EUROPE DU NORD",
      name: "Bergen",
      desc: "La porte des fjords : maisons hanséatiques de Bryggen et marché aux poissons.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=600&h=400&fit=crop&auto=format",
      alt: "Côtes verdoyantes et château des Highlands écossais",
      badge: "ÎLES BRITANNIQUES",
      name: "Écosse",
      desc: "Lochs, falaises et îles sauvages : Highlands, Hébrides et châteaux brumeux.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une croisière fjords avec CTA Voyages ?",
    cards: [
      {
        icon: "directions_boat",
        title: "La bonne cabine, au bon prix",
        text: "Balcon face aux fjords, suite ou cabine maline : nous choisissons la compagnie et le pont qui correspondent à votre budget.",
        img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
        alt: "Cabine de croisière avec balcon ouvert sur la mer",
      },
      {
        icon: "map",
        title: "Des escales bien pensées",
        text: "Geiranger, Bergen, Tromsø, les Lofoten : un itinéraire qui enchaîne les plus beaux fjords sans temps mort.",
        img: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&h=400&fit=crop&auto=format",
        alt: "Navire de croisière naviguant dans un fjord étroit",
      },
      {
        icon: "hiking",
        title: "Excursions sélectionnées",
        text: "Train de Flåm, kayak, randonnée glaciaire ou chasse aux aurores : nous réservons les expériences qui valent le détour.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop&auto=format",
        alt: "Randonneur face à un panorama de fjord et de montagnes",
      },
      {
        icon: "ac_unit",
        title: "Soleil de minuit ou aurores",
        text: "Selon la saison, nous calons votre départ sur le soleil de minuit de l'été ou les aurores boréales de l'hiver.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop&auto=format",
        alt: "Aurore boréale verte au-dessus d'un paysage nordique enneigé",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Neuf jours de Bergen au cap Nord, au fil des fjords",
    intro:
      "Une croisière de 9 jours qui enchaîne les fjords classés, le train de Flåm et les sommets des Lofoten, du sud verdoyant jusqu'au Grand Nord.",
    steps: [
      {
        id: "s1",
        label: "ESCALE 1",
        title: "Bergen, la porte des fjords",
        text: "Embarquement dans la cité hanséatique : flânerie sur le quai coloré de Bryggen, marché aux poissons et funiculaire du mont Fløyen avant l'appareillage au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Quai coloré de Bryggen à Bergen en Norvège",
        align: "left",
      },
      {
        id: "s2",
        label: "ESCALE 2",
        title: "Geirangerfjord, l'écrin classé UNESCO",
        text: "Le navire se faufile entre des parois de mille mètres tandis que les cascades des Sept Sœurs dévalent la roche. Une matinée au cœur du plus célèbre fjord de Norvège.",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
        alt: "Fjord profond de Norvège bordé de montagnes enneigées",
        align: "right",
      },
      {
        id: "s3",
        label: "ESCALE 3",
        title: "Flåm & le train panoramique",
        text: "Au fond du Sognefjord, embarquez à bord du Flåmsbana, l'un des plus beaux trains du monde : tunnels, cascades et villages perchés défilent jusqu'aux hauts plateaux.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop&auto=format",
        alt: "Train panoramique de Flåm traversant un paysage de fjord et de montagnes",
        align: "left",
      },
      {
        id: "s4",
        label: "ESCALE 4",
        title: "Ålesund, l'Art nouveau face à la mer",
        text: "Escale dans la plus élégante ville côtière de Norvège : façades Art nouveau, panorama depuis le mont Aksla et balade entre les îlots avant de remonter vers le nord.",
        img: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&h=400&fit=crop&auto=format",
        alt: "Navire de croisière naviguant dans un fjord étroit près d'Ålesund",
        align: "right",
      },
      {
        id: "s5",
        label: "ESCALE 5",
        title: "Cap Nord, le bout de l'Europe",
        text: "Franchissez le cercle polaire jusqu'au plateau du cap Nord, point le plus septentrional du continent. Selon la saison, soleil de minuit l'été ou aurores boréales l'hiver.",
        img: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=600&h=400&fit=crop&auto=format",
        alt: "Falaise du cap Nord plongeant dans la mer de Barents",
        align: "left",
      },
      {
        id: "s6",
        label: "ESCALE 6",
        title: "Îles Lofoten, l'apothéose arctique",
        text: "Dernière escale au pied des pics acérés des Lofoten : villages de pêcheurs aux maisons rouges, plages sauvages et lumière polaire pour clôturer la croisière en beauté.",
        img: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=600&h=400&fit=crop&auto=format",
        alt: "Maisons de pêcheurs rouges au pied des montagnes des Lofoten",
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
    h2: "Nos croisières nordiques confidentielles",
    intro:
      "Envie de pousser plus au nord ou plus à l'ouest ? Voici quelques escales hors du commun que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=600&h=400&fit=crop&auto=format",
        alt: "Petit village côtier du Groenland au pied d'un glacier",
        tag: "Arctique",
        name: "Groenland",
        text: "Icebergs géants, villages inuits et silence glacé au bout du monde.",
      },
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&auto=format",
        alt: "Falaises verdoyantes et cascade des îles Féroé",
        tag: "Atlantique Nord",
        name: "Îles Féroé",
        text: "Falaises émeraude, maisons à toit d'herbe et brume océanique entre Islande et Norvège.",
      },
      {
        img: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=600&h=400&fit=crop&auto=format",
        alt: "Cathédrale arctique et fjord enneigé de Tromsø",
        tag: "Laponie",
        name: "Tromsø",
        text: "La capitale arctique : aurores boréales, cathédrale de glace et nuit polaire.",
      },
      {
        img: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=600&h=400&fit=crop&auto=format",
        alt: "Cap Nord et falaise plongeant dans la mer de Barents",
        tag: "Grand Nord",
        name: "Cap Nord",
        text: "Le point le plus septentrional d'Europe, face à l'océan Arctique infini.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en croisière fjords ?",
    intro:
      "L'été offre le soleil de minuit et les fjords verdoyants ; l'hiver, les aurores boréales du Grand Nord. Votre conseiller affine selon l'itinéraire.",
    rows: [
      {
        destination: "Fjords de Norvège",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Îles Lofoten",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid"],
      },
      {
        destination: "Islande",
        months: ["avoid", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
      {
        destination: "Spitzberg",
        months: ["avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid"],
      },
      {
        destination: "Tromsø (aurores)",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Écosse",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre croisière fjords",
    left: [
      {
        question: "Quelle est la meilleure période pour voir les fjords ?",
        answer: (
          <p>
            De mai à septembre, les fjords sont verdoyants, les cascades en eau et
            les journées très longues — jusqu&apos;au soleil de minuit au-delà du
            cercle polaire. Pour les aurores boréales, privilégiez l&apos;hiver.
          </p>
        ),
      },
      {
        question: "Peut-on voir les aurores boréales en croisière ?",
        answer: (
          <p>
            Oui&nbsp;: de fin septembre à mars, dans le Grand Nord (Tromsø,
            Lofoten, Cap Nord). Nous calons votre départ sur la bonne saison et la
            bonne latitude pour maximiser vos chances.
          </p>
        ),
      },
      {
        question: "Quelle cabine choisir pour une croisière fjords ?",
        answer: (
          <p>
            Une cabine avec balcon prend tout son sens face aux parois&nbsp;: vous
            profitez du paysage au calme. Nous vous orientons selon votre budget,
            du hublot malin à la suite avec vue.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Faut-il prévoir des vêtements chauds en été ?",
        answer: (
          <p>
            Oui&nbsp;: même en plein été, les températures restent fraîches sur le
            pont et dans le Grand Nord. Prévoyez des couches chaudes, un
            coupe-vent et de bonnes chaussures pour les excursions.
          </p>
        ),
      },
      {
        question: "Les excursions sont-elles comprises ?",
        answer: (
          <p>
            Selon la formule&nbsp;: nous vous conseillons les escales qui valent le
            détour (train de Flåm, kayak, randonnée glaciaire) et réservons vos
            excursions à l&apos;avance pour éviter les déconvenues.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous l&apos;itinéraire qui vous tente (ou vos envies), vos
            dates et le nombre de voyageurs&nbsp;: nous revenons sous 48h avec une
            proposition personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour une croisière fjords ?",
        answer:
          "De mai à septembre, les fjords sont verdoyants, les cascades en eau et les journées très longues, jusqu'au soleil de minuit. Pour les aurores boréales, privilégiez l'hiver.",
      },
      {
        question: "Peut-on voir les aurores boréales en croisière ?",
        answer:
          "Oui, de fin septembre à mars dans le Grand Nord (Tromsø, Lofoten, Cap Nord). Le départ est calé sur la bonne saison et la bonne latitude pour maximiser vos chances.",
      },
      {
        question: "Quelle cabine choisir pour une croisière fjords ?",
        answer:
          "Une cabine avec balcon prend tout son sens face aux parois des fjords. Nous orientons votre choix selon votre budget, du hublot malin à la suite avec vue.",
      },
      {
        question: "Faut-il prévoir des vêtements chauds en été ?",
        answer:
          "Oui, même en été les températures restent fraîches sur le pont et dans le Grand Nord. Prévoyez des couches chaudes, un coupe-vent et de bonnes chaussures.",
      },
      {
        question: "Les excursions sont-elles comprises ?",
        answer:
          "Selon la formule : nous conseillons les escales qui valent le détour (train de Flåm, kayak, randonnée glaciaire) et réservons vos excursions à l'avance.",
      },
      {
        question: "Comment obtenir un devis pour une croisière fjords ?",
        answer:
          "Indiquez l'itinéraire, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        La beauté des fjords est fragile&nbsp;: nous privilégions les compagnies
        engagées vers des navires plus propres (électrification, motorisation
        hybride dans les fjords protégés) et les excursions respectueuses de la
        faune. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à larguer les amarres vers le Grand Nord ?",
    body: "Dites-nous quel itinéraire vous fait rêver — fjords, Lofoten, aurores boréales — vos dates et votre budget, et votre conseiller dédié compose votre croisière sur mesure, gratuitement et sans engagement.",
  },
};

export default croisiereFjords;
