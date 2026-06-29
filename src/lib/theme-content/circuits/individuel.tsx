import type { ThemeContent } from "../types";

/**
 * Page thème « Circuit individuel ». Images : visuels de routes et grands espaces
 * à valider/remplacer.
 */
const circuitIndividuel: ThemeContent = {
  slug: "individuel",
  parentLabel: "Circuits",
  parentHref: "/circuits",
  meta: {
    title: "Circuit individuel privé & autotour sur mesure — Itinéraire rien que pour vous | CTA Voyages",
    description:
      "Partez en circuit individuel avec CTA Voyages : un itinéraire privé et autonome, en voiture ou avec chauffeur, organisé clé en main (vols, hôtels, transferts, road-book). Liberté totale, sérénité garantie, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Route panoramique serpentant à travers un paysage de montagnes au lever du soleil",
    label: "Circuit individuel",
    h1: "Circuit individuel : votre itinéraire, rien que pour vous",
    description:
      "Un voyage privé et autonome où vous gardez la main sur le rythme et les étapes, mais sans aucune logistique à gérer. Vols, hôtels, transferts et road-book détaillé : nous orchestrons tout, vous n'avez plus qu'à prendre la route.",
    primaryCtaLabel: "Composer mon circuit individuel",
    secondaryCtaLabel: "Pourquoi un circuit individuel ?",
  },
  presentation: {
    eyebrow: "La liberté, sans les contraintes",
    h2: "Le sur-mesure qui vous laisse maître du voyage",
    body: (
      <>
        Imaginez un itinéraire conçu pour vous seuls&nbsp;: vous décidez de
        prolonger l&apos;étape qui vous séduit, de faire halte au gré d&apos;un
        point de vue ou de partir aux aurores — sans jamais suivre le tempo
        d&apos;un groupe. Le circuit individuel, c&apos;est cette liberté totale,
        en voiture de location ou avec chauffeur privé, doublée de la sérénité
        d&apos;une organisation entièrement ficelée. Chez CTA Voyages, votre
        conseiller dessine le tracé, réserve vos vols, vos hôtels et vos
        transferts, puis vous remet un road-book détaillé&nbsp;: vous voyagez
        en autonomie, mais jamais seuls face à l&apos;imprévu.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et paysage volcanique d'Islande",
      badge: "EUROPE DU NORD",
      name: "Islande",
      desc: "La route circulaire, ses cascades, geysers et glaciers à votre rythme.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=600&h=400&fit=crop&auto=format",
      alt: "Château et lochs des Highlands écossais",
      badge: "EUROPE",
      name: "Écosse",
      desc: "Lochs mystérieux, châteaux et routes des Highlands en toute liberté.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&auto=format",
      alt: "Éléphants dans la savane d'Afrique du Sud",
      badge: "AFRIQUE",
      name: "Afrique du Sud",
      desc: "Garden Route, vignobles et safaris privés, du Cap au Kruger.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
      alt: "Lac et forêts des Rocheuses canadiennes",
      badge: "AMÉRIQUES",
      name: "Canada",
      desc: "Grands espaces, lacs turquoise et parcs nationaux au volant.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes rouges du désert du Namib en Namibie",
      badge: "AFRIQUE",
      name: "Namibie",
      desc: "Dunes rouges, désert infini et pistes pour aventuriers autonomes.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&auto=format",
      alt: "Village perché de la côte amalfitaine en Italie",
      badge: "EUROPE",
      name: "Italie",
      desc: "Toscane, Pouilles ou côte amalfitaine : la dolce vita au fil des routes.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un circuit individuel avec CTA Voyages ?",
    cards: [
      {
        icon: "explore",
        title: "Un itinéraire 100 % privé",
        text: "Pas de groupe, pas d'horaires imposés : le tracé est pensé pour vous, à votre rythme et selon vos envies.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Carte routière dépliée sur le capot d'une voiture",
      },
      {
        icon: "vpn_key",
        title: "Une organisation clé en main",
        text: "Vols, hôtels, location de voiture ou chauffeur, transferts : tout est réservé et coordonné avant le départ.",
        img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop&auto=format",
        alt: "Mains tenant des clés de voiture devant un paysage",
      },
      {
        icon: "menu_book",
        title: "Un road-book détaillé",
        text: "Étapes, distances, adresses et bons plans : votre carnet de route vous guide sans rien laisser au hasard.",
        img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop&auto=format",
        alt: "Carnet de voyage ouvert avec itinéraire annoté",
      },
      {
        icon: "support_agent",
        title: "Une assistance permanente",
        text: "Un conseiller dédié et une assistance 24h/24 sur place : vous êtes autonome, jamais livré à vous-même.",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
        alt: "Conseiller au téléphone avec un client",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "L'Islande en autotour : 8 jours sur la route circulaire",
    intro:
      "Huit jours au volant entre cascades, glaciers et fjords sauvages, du Cercle d'Or aux confins de la péninsule de Snæfellsnes.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée à Reykjavik",
        text: "Récupération de votre voiture à l'aéroport et route vers la capitale la plus septentrionale d'Europe. Flânerie le long du port, ruelles colorées et première nuit sous le ciel islandais.",
        img: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&h=400&fit=crop&auto=format",
        alt: "Maisons colorées et port de Reykjavik en Islande",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Le Cercle d'Or",
        text: "Cap sur le trio mythique : le parc national de Þingvellir, les geysers bouillonnants de la zone de Geysir et la cascade à deux étages de Gullfoss. Une mise en bouche spectaculaire.",
        img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&h=400&fit=crop&auto=format",
        alt: "Geyser en éruption dans la zone géothermique du Cercle d'Or",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 3 À 4",
        title: "Côte sud & cascades",
        text: "La route longe la côte sud entre les chutes de Seljalandsfoss et de Skógafoss, les plages de sable noir de Reynisfjara et le village de Vík. Paysages volcaniques à perte de vue.",
        img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
        alt: "Cascade et plage de sable noir sur la côte sud d'Islande",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 5",
        title: "Glacier & lagune de Jökulsárlón",
        text: "Découverte du parc national du Vatnajökull et de la lagune glaciaire de Jökulsárlón, où dérivent des icebergs bleutés. Juste à côté, la Diamond Beach et ses blocs de glace échoués sur le sable.",
        img: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=600&h=400&fit=crop&auto=format",
        alt: "Icebergs flottant sur la lagune glaciaire de Jökulsárlón",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 6 À 7",
        title: "Fjords de l'Est",
        text: "Route sinueuse au creux des fjords de l'Est : villages de pêcheurs isolés, montagnes plongeant dans la mer et rencontres possibles avec les rennes. L'Islande la plus secrète et préservée.",
        img: "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=600&h=400&fit=crop&auto=format",
        alt: "Fjord de l'Est islandais bordé de montagnes escarpées",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 8",
        title: "Péninsule de Snæfellsnes & départ",
        text: "Surnommée « l'Islande en miniature », la péninsule de Snæfellsnes dévoile son volcan glaciaire, ses falaises et le célèbre mont Kirkjufell, avant le retour vers l'aéroport.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&h=400&fit=crop&auto=format",
        alt: "Mont Kirkjufell et cascade sur la péninsule de Snæfellsnes",
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
    h2: "Nos circuits individuels confidentiels",
    intro:
      "Envie d'un autotour qui sort de l'ordinaire ? Voici quelques itinéraires privés que nos conseillers adorent imaginer.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&h=400&fit=crop&auto=format",
        alt: "Route côtière et fjords des Lofoten en Norvège",
        tag: "Scandinavie",
        name: "Îles Lofoten",
        text: "Norvège spectaculaire : villages de pêcheurs, fjords et routes suspendues au-dessus de l'eau.",
      },
      {
        img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&h=400&fit=crop&auto=format",
        alt: "Désert et montagnes de Jordanie au coucher du soleil",
        tag: "Moyen-Orient",
        name: "Jordanie",
        text: "De Pétra au Wadi Rum : un autotour entre cité nabatéenne et déserts rougeoyants.",
      },
      {
        img: "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=600&h=400&fit=crop&auto=format",
        alt: "Route de l'Atlas et villages berbères au Maroc",
        tag: "Afrique du Nord",
        name: "Maroc, l'Atlas",
        text: "Du désert aux kasbahs : un circuit privé avec chauffeur entre montagnes et dunes.",
      },
      {
        img: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop&auto=format",
        alt: "Côte sauvage et collines verdoyantes d'Irlande",
        tag: "Europe",
        name: "Irlande",
        text: "La Wild Atlantic Way : falaises, pubs et villages colorés au fil d'une route mythique.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en circuit individuel ?",
    intro:
      "Chaque destination a sa fenêtre idéale pour rouler dans de bonnes conditions. Votre conseiller affine selon vos dates et la météo locale.",
    rows: [
      {
        destination: "Islande",
        months: ["avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Écosse",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Afrique du Sud",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Canada",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Namibie",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Italie",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre circuit individuel",
    left: [
      {
        question: "Qu'est-ce qu'un circuit individuel exactement ?",
        answer: (
          <p>
            C&apos;est un itinéraire privé, rien que pour vous, sans groupe ni
            guide imposé. Vous voyagez en autonomie — en voiture ou avec
            chauffeur — tandis que nous organisons l&apos;ensemble en amont&nbsp;:
            vols, hôtels, transferts et road-book détaillé.
          </p>
        ),
      },
      {
        question: "En voiture de location ou avec chauffeur ?",
        answer: (
          <p>
            Les deux sont possibles. L&apos;autotour vous laisse une liberté
            totale au volant&nbsp;; le chauffeur privé vous libère de la conduite
            et de la navigation. Votre conseiller vous recommande la formule la
            plus adaptée à la destination et à vos envies.
          </p>
        ),
      },
      {
        question: "Que comprend l'organisation clé en main ?",
        answer: (
          <p>
            Tout le nécessaire&nbsp;: vols, hébergements sélectionnés étape par
            étape, location de véhicule ou chauffeur, transferts et un road-book
            complet avec distances, adresses et conseils. Vous arrivez l&apos;esprit
            libre, sans rien avoir à réserver vous-même.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Sommes-nous vraiment libres de notre rythme ?",
        answer: (
          <p>
            Absolument. Les hôtels et les grandes étapes sont réservés, mais entre
            deux, vous êtes maîtres de votre temps&nbsp;: prolonger une visite,
            improviser une halte ou flâner — c&apos;est tout l&apos;esprit du
            circuit individuel.
          </p>
        ),
      },
      {
        question: "Que se passe-t-il en cas d'imprévu sur place ?",
        answer: (
          <p>
            Vous n&apos;êtes jamais seuls&nbsp;: une assistance est joignable 24h/24
            durant tout le voyage, et votre conseiller dédié reste votre
            interlocuteur. En cas de souci, nous prenons le relais immédiatement.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous la destination (ou vos envies), vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec un itinéraire personnalisé
            et un devis détaillé, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Qu'est-ce qu'un circuit individuel ?",
        answer:
          "C'est un itinéraire privé et autonome, rien que pour vous, sans groupe ni guide imposé. Vous voyagez en voiture ou avec chauffeur tandis que l'agence organise vols, hôtels, transferts et road-book.",
      },
      {
        question: "En voiture de location ou avec chauffeur ?",
        answer:
          "Les deux formules sont possibles. L'autotour offre une liberté totale au volant, le chauffeur privé vous libère de la conduite. Votre conseiller recommande la formule adaptée à la destination.",
      },
      {
        question: "Que comprend l'organisation clé en main ?",
        answer:
          "Vols, hébergements étape par étape, location de véhicule ou chauffeur, transferts et un road-book détaillé avec distances, adresses et conseils. Vous n'avez rien à réserver vous-même.",
      },
      {
        question: "Sommes-nous libres de notre rythme ?",
        answer:
          "Oui : les hôtels et grandes étapes sont réservés, mais entre deux vous êtes maîtres de votre temps. Prolonger une visite ou improviser une halte fait tout l'esprit du circuit individuel.",
      },
      {
        question: "Que se passe-t-il en cas d'imprévu sur place ?",
        answer:
          "Une assistance est joignable 24h/24 pendant tout le voyage et votre conseiller dédié reste votre interlocuteur. En cas de souci, l'agence prend le relais immédiatement.",
      },
      {
        question: "Comment obtenir un devis pour un circuit individuel ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec un itinéraire personnalisé et un devis détaillé, gratuit et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <p>
        Voyager en autonomie n&apos;empêche pas de voyager responsable&nbsp;: nous
        privilégions les hébergements engagés, les acteurs locaux et des
        itinéraires pensés pour limiter les trajets inutiles. Pour les
        destinations qui s&apos;y prêtent, nous proposons aussi des véhicules
        moins gourmands. Voyager mieux, pas moins.
      </p>
    ),
  },
  ctaFinal: {
    h2: "Prêt à prendre la route à votre rythme ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre circuit individuel clé en main, gratuitement et sans engagement.",
  },
};

export default circuitIndividuel;
