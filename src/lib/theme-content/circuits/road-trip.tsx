import type { ThemeContent } from "../types";

/**
 * Page thème « Road trip organisé ». Images : visuels de routes/paysages à valider/remplacer.
 */
const circuitRoadTrip: ThemeContent = {
  slug: "road-trip",
  parentLabel: "Circuits",
  parentHref: "/circuits",
  meta: {
    title: "Road trip organisé sur mesure — Voiture, van & étapes réservées | CTA Voyages",
    description:
      "Partez en road trip organisé avec CTA Voyages : itinéraire optimisé, voiture ou van, hébergements réservés à l'avance et conseiller dédié. La liberté de la route, sans la logistique. Devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Route sinueuse traversant un paysage de montagnes au lever du jour",
    label: "Road trip organisé",
    h1: "Road trip organisé : la liberté de la route, sans la logistique",
    description:
      "Le volant entre vos mains, l'horizon devant vous — et tout le reste déjà réglé. Nous traçons l'itinéraire idéal, réservons votre véhicule et vos hébergements étape par étape. À vous l'aventure, à nous l'intendance.",
    primaryCtaLabel: "Composer mon road trip",
    secondaryCtaLabel: "Pourquoi un road trip organisé ?",
  },
  presentation: {
    eyebrow: "L'aventure clés en main",
    h2: "La route est à vous, l'organisation est à nous",
    body: (
      <>
        Prendre le volant au petit matin, s&apos;arrêter sur un coup de cœur,
        dormir au pied d&apos;un volcan ou d&apos;une plage déserte&nbsp;: le road
        trip, c&apos;est la liberté à l&apos;état pur. Mais cette liberté se
        prépare. Chez CTA Voyages, votre conseiller optimise chaque étape, calcule
        les distances réalistes, réserve la voiture ou le van adapté et bloque les
        hébergements les mieux situés — souvent introuvables sur place en haute
        saison. Vous gardez l&apos;esprit d&apos;aventure&nbsp;; nous gérons la
        logistique pour que rien ne vienne gâcher la route.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Route traversant un paysage volcanique d'Islande",
      badge: "EUROPE",
      name: "Islande",
      desc: "La Route 1 autour de l'île : cascades, glaciers, geysers et plages noires.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=600&h=400&fit=crop&auto=format",
      alt: "Monument Valley dans l'Ouest américain",
      badge: "AMÉRIQUES",
      name: "Ouest américain",
      desc: "Grand Canyon, Monument Valley et déserts mythiques entre Las Vegas et la Californie.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=600&h=400&fit=crop&auto=format",
      alt: "Route des Highlands écossais au milieu des lochs",
      badge: "EUROPE",
      name: "Écosse",
      desc: "North Coast 500, lochs brumeux, châteaux et villages de pêcheurs.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes rouges du désert de Sossusvlei en Namibie",
      badge: "AFRIQUE",
      name: "Namibie",
      desc: "Pistes désertiques, dunes ocre du Namib et faune sauvage d'Etosha.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&h=400&fit=crop&auto=format",
      alt: "Route panoramique le long de la côte d'Afrique du Sud",
      badge: "AFRIQUE",
      name: "Afrique du Sud",
      desc: "Garden Route, vignobles du Cap et réserves animalières le long de l'océan.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop&auto=format",
      alt: "Route déserte de l'Outback australien au coucher du soleil",
      badge: "OCÉANIE",
      name: "Australie",
      desc: "Great Ocean Road, Outback rouge et côtes infinies entre plages et bush.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un road trip organisé avec CTA Voyages ?",
    cards: [
      {
        icon: "route",
        title: "Un itinéraire optimisé",
        text: "Distances réalistes, plus belles étapes, détours secrets : votre conseiller trace le parcours idéal au bon rythme.",
        img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop&auto=format",
        alt: "Carte routière dépliée sur le capot d'une voiture",
      },
      {
        icon: "directions_car",
        title: "Le bon véhicule, réservé",
        text: "Voiture, 4x4 ou van aménagé selon le terrain : nous sélectionnons et réservons le véhicule adapté à votre route.",
        img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop&auto=format",
        alt: "Van aménagé garé face à un paysage de montagne",
      },
      {
        icon: "bed",
        title: "Hébergements bloqués à l'avance",
        text: "Lodges, hôtels de caractère ou campings d'exception : tout est réservé étape par étape, plus de stress à l'arrivée.",
        img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop&auto=format",
        alt: "Lodge isolé au cœur d'un paysage naturel",
      },
      {
        icon: "support_agent",
        title: "Une assistance sur la route",
        text: "Roadbook détaillé, bons plans et conseiller joignable : vous roulez tranquille, nous restons à vos côtés.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Voyageurs consultant un carnet de route au bord d'une route",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Douze jours sur les routes mythiques de l'Ouest américain",
    intro:
      "De Las Vegas aux plages de Californie, un grand boucle au volant entre canyons rouges, déserts immenses et parcs nationaux légendaires.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 2",
        title: "Las Vegas, le départ électrique",
        text: "Arrivée à Las Vegas et récupération de votre véhicule. Une première nuit au cœur du Strip pour s'imprégner de l'effervescence néon avant de prendre la route. Deuxième journée libre : casinos, spectacles ou escapade au barrage Hoover tout proche.",
        img: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=600&h=400&fit=crop&auto=format",
        alt: "Skyline illuminée de Las Vegas à la tombée de la nuit",
        align: "left",
      },
      {
        id: "s2",
        label: "JOURS 3 À 4",
        title: "Grand Canyon, l'immensité",
        text: "Cap au sud-est vers le Grand Canyon. Deux jours pour arpenter le South Rim, admirer le lever du soleil sur les gorges du Colorado et marcher le long des sentiers panoramiques. Le vertige des grands espaces commence ici.",
        img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&h=400&fit=crop&auto=format",
        alt: "Vue panoramique sur les gorges du Grand Canyon au lever du soleil",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 5 À 6",
        title: "Monument Valley, les terres rouges",
        text: "Route vers les buttes mythiques de Monument Valley, décor des plus grands westerns. Circuit en 4x4 avec un guide navajo, coucher de soleil sur les monolithes de grès et nuit dans un lodge face à la vallée.",
        img: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=600&h=400&fit=crop&auto=format",
        alt: "Buttes de grès rouge de Monument Valley au coucher du soleil",
        align: "left",
      },
      {
        id: "s4",
        label: "JOURS 7 À 8",
        title: "Bryce Canyon & Zion, les merveilles de l'Utah",
        text: "Direction l'Utah et ses deux joyaux : l'amphithéâtre de cheminées de fée orangées de Bryce Canyon, puis les falaises vertigineuses et les sentiers verdoyants de Zion. Randonnées au cœur de paysages à couper le souffle.",
        img: "https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=600&h=400&fit=crop&auto=format",
        alt: "Cheminées de fée orangées de Bryce Canyon dans l'Utah",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 9 À 10",
        title: "Death Valley, le désert extrême",
        text: "Traversée de la Vallée de la Mort, point le plus bas d'Amérique du Nord. Dunes de Mesquite, lac de sel de Badwater et palette de couleurs surnaturelles à Artist's Palette. Une étape minérale et spectaculaire avant de rejoindre la côte.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes et étendues désertiques de la Vallée de la Mort",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 11 À 12",
        title: "Los Angeles & l'océan Pacifique",
        text: "Dernière ligne droite vers Los Angeles : Hollywood, Santa Monica et ses plages, la route mythique le long de l'océan. Une journée libre pour profiter de la Californie avant le transfert vers l'aéroport et le vol retour.",
        img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&h=400&fit=crop&auto=format",
        alt: "Jetée et plage de Santa Monica à Los Angeles au coucher du soleil",
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
    h2: "Nos itinéraires confidentiels",
    intro:
      "Envie de routes moins fréquentées ? Voici quelques road trips originaux que nos conseillers adorent tracer.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&h=400&fit=crop&auto=format",
        alt: "Route côtière des fjords de Norvège",
        tag: "Scandinavie",
        name: "Fjords de Norvège",
        text: "Routes panoramiques entre fjords vertigineux, ferries et villages de pêcheurs colorés.",
      },
      {
        img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&h=400&fit=crop&auto=format",
        alt: "Piste de l'Altiplano bolivien et salar d'Uyuni",
        tag: "Andes",
        name: "Altiplano bolivien",
        text: "Salar d'Uyuni, lagunes colorées et déserts d'altitude à plus de 4 000 mètres.",
      },
      {
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&auto=format",
        alt: "Route forestière d'automne au Canada",
        tag: "Amérique du Nord",
        name: "Est canadien",
        text: "Forêts flamboyantes de l'été indien, parcs nationaux et lacs à perte de vue.",
      },
      {
        img: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop&auto=format",
        alt: "Route de montagne du nord du Vietnam en lacets",
        tag: "Asie",
        name: "Nord du Vietnam",
        text: "Cols en lacets, rizières en terrasses et marchés ethniques loin des foules.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en road trip ?",
    intro:
      "Chaque destination a sa fenêtre idéale selon le climat et l'état des routes. Votre conseiller affine selon vos dates.",
    rows: [
      {
        destination: "Islande",
        months: ["avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Ouest américain",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Écosse",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Namibie",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Afrique du Sud",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Australie",
        months: ["ideal", "ideal", "ideal", "ok", "ok", "ok", "ok", "ok", "ok", "ideal", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre road trip organisé",
    left: [
      {
        question: "Qu'est-ce qu'un road trip organisé exactement ?",
        answer: (
          <p>
            C&apos;est un voyage en totale autonomie au volant, mais entièrement
            préparé en amont&nbsp;: itinéraire, véhicule et hébergements sont
            réservés pour vous. Vous profitez de la liberté de la route sans avoir
            à gérer la logistique.
          </p>
        ),
      },
      {
        question: "Le véhicule est-il inclus dans le forfait ?",
        answer: (
          <p>
            Oui. Selon la destination et le terrain, nous réservons la voiture, le
            4x4 ou le van aménagé adapté, assurances comprises. Vous récupérez les
            clés à l&apos;aéroport ou en ville le jour de votre arrivée.
          </p>
        ),
      },
      {
        question: "Quelles destinations recommandez-vous pour un premier road trip ?",
        answer: (
          <p>
            L&apos;Islande, l&apos;Ouest américain ou l&apos;Écosse sont des
            valeurs sûres&nbsp;: routes faciles, paysages spectaculaires et
            étapes balisées, parfaites pour une première aventure au volant.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Puis-je adapter l'itinéraire à mon rythme ?",
        answer: (
          <p>
            Absolument. Nous calculons des étapes réalistes, mais vous restez
            libre de flâner. Votre conseiller ajuste le nombre de nuits par étape
            selon que vous préférez rouler ou prendre votre temps.
          </p>
        ),
      },
      {
        question: "Que se passe-t-il en cas d'imprévu sur la route ?",
        answer: (
          <p>
            Vous recevez un roadbook détaillé et un contact d&apos;assistance.
            Météo, panne ou changement de programme&nbsp;: votre conseiller reste
            joignable pour vous aider à réorganiser une étape si nécessaire.
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
        question: "Qu'est-ce qu'un road trip organisé ?",
        answer:
          "C'est un voyage en autonomie au volant, entièrement préparé en amont : itinéraire, véhicule et hébergements sont réservés à l'avance. Vous profitez de la liberté de la route sans gérer la logistique.",
      },
      {
        question: "Le véhicule est-il inclus dans le forfait ?",
        answer:
          "Oui. Selon le terrain, nous réservons la voiture, le 4x4 ou le van aménagé adapté, assurances comprises, à récupérer le jour de votre arrivée.",
      },
      {
        question: "Quelles destinations pour un premier road trip ?",
        answer:
          "L'Islande, l'Ouest américain ou l'Écosse sont des valeurs sûres : routes faciles, paysages spectaculaires et étapes balisées.",
      },
      {
        question: "Puis-je adapter l'itinéraire à mon rythme ?",
        answer:
          "Oui, nous calculons des étapes réalistes mais le nombre de nuits par étape s'ajuste selon que vous préférez rouler ou prendre votre temps.",
      },
      {
        question: "Que se passe-t-il en cas d'imprévu sur la route ?",
        answer:
          "Vous recevez un roadbook détaillé et un contact d'assistance. Votre conseiller reste joignable pour vous aider à réorganiser une étape si nécessaire.",
      },
      {
        question: "Comment obtenir un devis pour un road trip ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Rouler peut aussi se faire plus responsable&nbsp;: nous privilégions les
        véhicules récents et sobres, les hébergements engagés et les acteurs
        locaux le long de la route. Nous compensons aussi les émissions liées au
        carburant. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à prendre la route ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié trace votre road trip sur mesure, étapes et hébergements compris, gratuitement et sans engagement.",
  },
};

export default circuitRoadTrip;
