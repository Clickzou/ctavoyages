import type { ThemeContent } from "../types";

/**
 * Page thème « Voyage solo » (Voyage sur mesure). Images : visuels à valider/remplacer.
 */
const vsmSolo: ThemeContent = {
  slug: "solo",
  parentLabel: "Voyage sur mesure",
  parentHref: "/voyage-sur-mesure",
  meta: {
    title: "Voyage solo sur mesure — Partir seul en toute sérénité | CTA Voyages",
    description:
      "Organisez votre voyage solo avec CTA Voyages : destinations sûres et accueillantes, accompagnement sur mesure et liberté totale. Conseiller dédié, devis gratuit et sans engagement.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Voyageuse seule contemplant un paysage de montagne au lever du soleil",
    label: "Voyage solo",
    h1: "Voyage solo : partez seul, jamais seul face à l'inconnu",
    description:
      "Partir seul, c'est avancer à son rythme, faire des rencontres et se redécouvrir. Nous choisissons des destinations sûres et accueillantes et restons à vos côtés à chaque étape, pour une liberté totale sans la moindre inquiétude.",
    primaryCtaLabel: "Composer mon voyage solo",
    secondaryCtaLabel: "Pourquoi partir seul ?",
  },
  presentation: {
    eyebrow: "L'aventure à soi",
    h2: "Seul aux commandes, accompagné dans l'ombre",
    body: (
      <>
        Choisir sa route, changer d&apos;avis sur un coup de cœur, dîner avec des
        inconnus devenus amis le temps d&apos;un soir&nbsp;: le voyage solo, c&apos;est
        la liberté à l&apos;état pur. Chez CTA Voyages, votre conseiller bâtit un
        itinéraire pensé pour les voyageurs seuls — hébergements sûrs et conviviaux,
        étapes faciles, contacts locaux de confiance et une assistance joignable
        à tout moment. Vous gardez le contrôle&nbsp;; nous veillons à ce que tout se
        passe bien.
      </>
    ),
  },
  destinations: [
    {
      href: "/destination-japon",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
      alt: "Temple traditionnel japonais entouré d'érables",
      badge: "ASIE",
      name: "Japon",
      desc: "L'un des pays les plus sûrs au monde : trains parfaits et accueil d'une rare bienveillance.",
    },
    {
      href: "/destination-thailande",
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop&auto=format",
      alt: "Temple doré et palmiers en Thaïlande",
      badge: "ASIE",
      name: "Thaïlande",
      desc: "Le paradis des voyageurs solo : routards, plages et sourires à chaque coin de rue.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format",
      alt: "Rizières en terrasse au Vietnam",
      badge: "ASIE",
      name: "Vietnam",
      desc: "Du nord au sud, un fil conducteur facile à suivre seul et des rencontres chaleureuses.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
      alt: "Tramway jaune dans une rue pentue de Lisbonne",
      badge: "EUROPE",
      name: "Portugal",
      desc: "Doux, sûr et abordable : villes à taille humaine et auberges conviviales.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et paysage volcanique en Islande",
      badge: "EUROPE",
      name: "Islande",
      desc: "Nature grandiose et sécurité absolue : la route circulaire se savoure en autonomie.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop&auto=format",
      alt: "Lac turquoise et montagnes des Rocheuses canadiennes",
      badge: "AMÉRIQUES",
      name: "Canada",
      desc: "Grands espaces, villes accueillantes et une réputation de sécurité sans pareille.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi préparer son voyage solo avec CTA Voyages ?",
    cards: [
      {
        icon: "shield",
        title: "Des destinations sûres",
        text: "Nous ne proposons que des pays où voyager seul rime avec sérénité, et adaptons les conseils à votre profil.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format",
        alt: "Voyageur seul marchant sur un sentier sécurisé",
      },
      {
        icon: "support_agent",
        title: "Un conseiller joignable",
        text: "Un contact dédié avant le départ et une assistance disponible sur place : vous n'êtes jamais livré à vous-même.",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
        alt: "Conseiller en voyage au téléphone avec un client",
      },
      {
        icon: "explore",
        title: "Liberté totale",
        text: "Itinéraire ouvert, temps libres préservés : vous improvisez quand vous voulez, sans contrainte de groupe.",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
        alt: "Route ouverte serpentant vers l'horizon",
      },
      {
        icon: "groups",
        title: "Des rencontres faciles",
        text: "Auberges conviviales, excursions partagées, hébergements chez l'habitant : on crée les occasions de rencontrer.",
        img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&h=400&fit=crop&auto=format",
        alt: "Voyageurs partageant un repas autour d'une table conviviale",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "12 jours au Japon en solo, en autonomie accompagnée",
    intro:
      "De Tokyo à Osaka, un itinéraire fluide et sûr où vous gardez votre liberté, soutenu à chaque étape par votre conseiller et nos contacts locaux.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 3",
        title: "Tokyo, premiers pas en confiance",
        text: "Accueil et transfert vers votre hôtel central. Carte de transport, pocket wifi et briefing pratique en main, vous explorez Shibuya, Asakusa et les ruelles de Shinjuku à votre rythme — un guide local vous épaule la première journée.",
        img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format",
        alt: "Carrefour animé de Shibuya à Tokyo de nuit",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 4",
        title: "Hakone, parenthèse nature et onsen",
        text: "Train pour Hakone, au pied du mont Fuji. Bain en onsen traditionnel, croisière sur le lac Ashi et nuit en ryokan : une étape ressourçante, simple à organiser seul grâce à un parcours balisé pour vous.",
        img: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&h=400&fit=crop&auto=format",
        alt: "Mont Fuji se reflétant dans un lac près de Hakone",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 5 À 7",
        title: "Kyoto, l'âme du Japon",
        text: "Cap sur Kyoto en Shinkansen. Temples dorés, bambouseraie d'Arashiyama et quartier de Gion : vous flânez librement, et un atelier partagé (thé ou calligraphie) vous offre une belle occasion de rencontres.",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
        alt: "Pavillon doré et temple traditionnel à Kyoto",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 8",
        title: "Nara, excursion à la journée",
        text: "Courte escapade vers Nara : daims en liberté dans le parc, grand Bouddha du Todai-ji et allées de lanternes. Une journée facile en autonomie, l'aller-retour étant calé pour vous au départ de Kyoto.",
        img: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=600&h=400&fit=crop&auto=format",
        alt: "Daims en liberté devant un temple à Nara",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 9 À 11",
        title: "Osaka, énergie et saveurs",
        text: "Direction Osaka, la ville la plus gourmande du Japon. Street food de Dotonbori, château historique et vie nocturne animée : votre conseiller reste joignable, vous improvisez en toute sérénité.",
        img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&h=400&fit=crop&auto=format",
        alt: "Quartier illuminé de Dotonbori à Osaka le soir",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 12",
        title: "Retour, la tête pleine de souvenirs",
        text: "Dernière matinée libre pour un ultime ramen ou quelques achats, puis transfert vers l'aéroport du Kansai. Vous repartez seul mais jamais isolé, fort d'un voyage maîtrisé de bout en bout.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop&auto=format",
        alt: "Voyageur seul avec sa valise dans un aéroport au lever du jour",
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
    h2: "Nos destinations solo confidentielles",
    intro:
      "Envie de pousser plus loin ? Voici des destinations sûres et dépaysantes que nos conseillers recommandent aux voyageurs seuls aguerris.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Vallée verdoyante et montagnes de Géorgie",
        tag: "Caucase",
        name: "Géorgie",
        text: "Hospitalité légendaire, prix doux et nature spectaculaire : idéale pour partir seul.",
      },
      {
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop&auto=format",
        alt: "Aurore boréale au-dessus d'un paysage scandinave",
        tag: "Scandinavie",
        name: "Norvège",
        text: "Sécurité parfaite et fjords à couper le souffle : la liberté nordique en solitaire.",
      },
      {
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&h=400&fit=crop&auto=format",
        alt: "Vallée alpine et lac de montagne en Slovénie",
        tag: "Europe centrale",
        name: "Slovénie",
        text: "Petit pays, grandes émotions : facile à parcourir seul, vert et étonnamment paisible.",
      },
      {
        img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&auto=format",
        alt: "Côte sauvage et phare en Nouvelle-Zélande",
        tag: "Pacifique",
        name: "Nouvelle-Zélande",
        text: "Le rêve du voyageur solo : routes sûres, auberges accueillantes et nature démesurée.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en voyage solo ?",
    intro:
      "Hors saison, les hébergements solo sont plus accessibles et les rencontres plus naturelles. Votre conseiller affine selon vos dates et la destination.",
    rows: [
      {
        destination: "Japon",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Thaïlande",
        months: ["ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ok", "ideal", "ideal"],
      },
      {
        destination: "Vietnam",
        months: ["ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Portugal",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Islande",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid"],
      },
      {
        destination: "Canada",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre voyage solo",
    left: [
      {
        question: "Est-ce dangereux de voyager seul ?",
        answer: (
          <p>
            Pas si l&apos;on choisit bien sa destination. Nous privilégions des pays
            réputés sûrs et accueillants, et vous transmettons tous les conseils
            pratiques pour partir l&apos;esprit tranquille, que vous soyez un homme
            ou une femme.
          </p>
        ),
      },
      {
        question: "Vais-je me sentir isolé pendant le voyage ?",
        answer: (
          <p>
            Rarement&nbsp;! Nous sélectionnons des hébergements conviviaux et des
            activités partagées qui facilitent les rencontres. Vous restez libre de
            profiter de la solitude quand vous le souhaitez.
          </p>
        ),
      },
      {
        question: "Quelles destinations conseillez-vous pour un premier voyage solo ?",
        answer: (
          <p>
            Le Japon, le Portugal, la Thaïlande ou l&apos;Islande sont des valeurs
            sûres&nbsp;: faciles à parcourir seul, sécurisantes et riches en
            rencontres dès le premier voyage.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Le voyage solo coûte-t-il plus cher ?",
        answer: (
          <p>
            Le supplément chambre individuelle peut peser, mais nous optimisons
            avec des hébergements adaptés (auberges, maisons d&apos;hôtes) et des
            étapes futées pour maîtriser votre budget.
          </p>
        ),
      },
      {
        question: "Suis-je vraiment accompagné en cas de problème ?",
        answer: (
          <p>
            Oui&nbsp;: un conseiller dédié prépare votre voyage et une assistance
            reste joignable pendant le séjour. En cas d&apos;imprévu, vous avez
            toujours un interlocuteur de confiance.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous vos envies, vos dates et votre destination de rêve&nbsp;:
            nous revenons sous 48h avec une proposition personnalisée, gratuitement
            et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Est-ce dangereux de voyager seul ?",
        answer:
          "Pas si l'on choisit bien sa destination. Nous privilégions des pays réputés sûrs et accueillants et transmettons tous les conseils pratiques pour partir l'esprit tranquille.",
      },
      {
        question: "Vais-je me sentir isolé pendant un voyage solo ?",
        answer:
          "Rarement : nous sélectionnons des hébergements conviviaux et des activités partagées qui facilitent les rencontres, tout en préservant votre liberté.",
      },
      {
        question: "Quelles destinations pour un premier voyage solo ?",
        answer:
          "Le Japon, le Portugal, la Thaïlande ou l'Islande sont des valeurs sûres : faciles à parcourir seul, sécurisantes et riches en rencontres.",
      },
      {
        question: "Le voyage solo coûte-t-il plus cher ?",
        answer:
          "Le supplément chambre individuelle peut peser, mais nous optimisons avec des hébergements adaptés et des étapes futées pour maîtriser votre budget.",
      },
      {
        question: "Suis-je accompagné en cas de problème en voyage solo ?",
        answer:
          "Oui : un conseiller dédié prépare votre voyage et une assistance reste joignable pendant le séjour, avec un interlocuteur de confiance en cas d'imprévu.",
      },
      {
        question: "Comment obtenir un devis pour un voyage solo ?",
        answer:
          "Indiquez vos envies, vos dates et votre destination : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Voyager seul, c&apos;est aussi voyager léger et au plus près des
        habitants&nbsp;: nous privilégions les hébergements indépendants, les
        guides locaux et les transports doux. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à partir à votre propre rythme ?",
    body: "Dites-nous où vous rêvez d'aller — destination, dates, budget — et votre conseiller dédié compose votre voyage solo sur mesure, en toute sécurité, gratuitement et sans engagement.",
  },
};

export default vsmSolo;
