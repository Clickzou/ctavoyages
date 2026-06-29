import type { ThemeContent } from "./types";

/**
 * Page thème « Séjour romantique ». Images : visuels de couples / lunes de
 * miel à valider/remplacer.
 */
const romantique: ThemeContent = {
  slug: "romantique",
  parentLabel: "Séjours",
  parentHref: "/sejours",
  meta: {
    title: "Séjour romantique & lune de miel sur mesure — Voyage à deux | CTA Voyages",
    description:
      "Offrez-vous un séjour romantique avec CTA Voyages : lunes de miel, escapades à deux, boutique-hôtels et dîners face à la mer. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Couple admirant un coucher de soleil depuis une terrasse face à la mer",
    label: "Séjour romantique",
    h1: "Séjour romantique : une parenthèse rien qu'à deux",
    description:
      "Lune de miel, anniversaire ou simple envie d'évasion à deux : nous composons l'escapade romantique qui vous ressemble — boutique-hôtels, suites face à la mer et dîners aux chandelles.",
    primaryCtaLabel: "Composer mon séjour romantique",
    secondaryCtaLabel: "Pourquoi un séjour romantique ?",
  },
  presentation: {
    eyebrow: "Le voyage à deux",
    h2: "L'art de prendre le temps, ensemble",
    body: (
      <>
        Un réveil face au lagon, un petit-déjeuner servi en terrasse, une journée
        sans contrainte et un dîner les pieds dans le sable au coucher du
        soleil&nbsp;: le séjour romantique, c&apos;est l&apos;art de se retrouver,
        loin du quotidien. Chez CTA Voyages, votre conseiller imagine chaque
        détail — la destination, le boutique-hôtel de charme, la suite avec vue et
        les attentions qui font la différence. Lune de miel, anniversaire de
        mariage ou escapade improvisée, chaque voyage à deux est pensé comme une
        parenthèse précieuse, sur mesure et sans fausse note.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
      alt: "Villa sur pilotis au-dessus du lagon aux Maldives",
      badge: "OCÉAN INDIEN",
      name: "Maldives",
      desc: "Villas sur pilotis, lagon cristallin et intimité absolue à deux.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format",
      alt: "Maisons blanches et dômes bleus de Santorin au coucher du soleil",
      badge: "GRÈCE",
      name: "Santorin",
      desc: "Villages blancs perchés et couchers de soleil légendaires sur la Caldeira.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&h=400&fit=crop&auto=format",
      alt: "Gondole sur le Grand Canal de Venise au crépuscule",
      badge: "ITALIE",
      name: "Venise",
      desc: "Balades en gondole, palais romantiques et dolce vita sur la lagune.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
      alt: "Resort de charme en bord de lagon à l'Île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Plages de carte postale, spas raffinés et douceur de vivre tropicale.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&auto=format",
      alt: "Rizières en terrasses et nature luxuriante à Bali",
      badge: "INDONÉSIE",
      name: "Bali",
      desc: "Villas privatives, rizières émeraude et spiritualité enveloppante.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&h=400&fit=crop&auto=format",
      alt: "Patio fleuri d'un riad traditionnel à Marrakech",
      badge: "MAROC",
      name: "Marrakech",
      desc: "Riads intimes, patios fleuris et dîners sous les étoiles de la médina.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un séjour romantique avec CTA Voyages ?",
    cards: [
      {
        icon: "favorite",
        title: "Des cadres d'exception",
        text: "Lagons, vignes en terrasses ou ruelles vénitiennes : nous choisissons les décors les plus romantiques selon vos envies.",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop&auto=format",
        alt: "Couple devant un coucher de soleil sur l'océan",
      },
      {
        icon: "king_bed",
        title: "Boutique-hôtels & suites",
        text: "Suites avec vue, villas privatives et adresses de charme : un hébergement pensé pour l'intimité et le raffinement.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&auto=format",
        alt: "Suite romantique avec lit à baldaquin face à la mer",
      },
      {
        icon: "local_bar",
        title: "Expériences à deux",
        text: "Dîner privatif sur la plage, bain à remous face au couchant, balade en gondole : des moments rien que pour vous.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Table dressée pour un dîner romantique aux chandelles",
      },
      {
        icon: "spa",
        title: "Discrétion & sérénité",
        text: "Spa duo, attentions personnalisées et organisation aux petits soins : vous ne pensez à rien, on s'occupe de tout.",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop&auto=format",
        alt: "Massage en duo dans un spa face à la nature",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Lune de miel à Bali & îles Gili : 8 nuits, rien qu'à deux",
    intro:
      "Des rizières émeraude de Bali aux plages immaculées des îles Gili : un itinéraire pensé comme une déclaration d'amour, entre temples, spa et couchers de soleil.",
    steps: [
      {
        id: "ubud-rizieres",
        label: "NUITS 1 À 2",
        title: "Ubud : les rizières en terrasses",
        text: "Lovés dans une villa nichée au cœur de la jungle, vous ouvrez les yeux sur les rizières émeraude de Tegalalang. Petit-déjeuner servi en terrasse, balade main dans la main entre les terrasses et premières attentions pour célébrer votre union.",
        img: "https://images.unsplash.com/photo-1531592937781-344ad608fabf?w=600&h=400&fit=crop&auto=format",
        alt: "Rizières en terrasses émeraude de Tegalalang à Ubud, Bali",
        align: "left",
      },
      {
        id: "temple-spa",
        label: "NUITS 3 À 4",
        title: "Temples sacrés & spa en duo",
        text: "Lever de soleil sur le temple de Tirta Empul puis après-midi cocooning : massage balinais en duo, bain de fleurs et moment suspendu rien que pour vous. La spiritualité de l'île enveloppe votre escapade d'une douceur unique.",
        img: "https://images.unsplash.com/photo-1540206395-68808572332f?w=600&h=400&fit=crop&auto=format",
        alt: "Temple balinais au bord de l'eau au lever du soleil",
        align: "right",
      },
      {
        id: "gili-villa",
        label: "NUITS 5 À 6",
        title: "Îles Gili : villa privée les pieds dans l'eau",
        text: "Cap sur les îles Gili et leur lagon turquoise pour rejoindre votre villa privative avec piscine face à la mer. Ici, ni voiture ni agitation : seulement le bruit des vagues, le sable blanc et l'intimité absolue d'un refuge à deux.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
        alt: "Villa privée avec piscine face au lagon turquoise des îles Gili",
        align: "left",
      },
      {
        id: "coucher-soleil",
        label: "NUIT 7",
        title: "Coucher de soleil sur le lagon",
        text: "En fin de journée, vous embarquez pour une sortie en mer au plus près des tortues, avant un apéritif face à l'horizon embrasé. Le ciel se pare de rose et d'or tandis que vous trinquez à votre nouvelle vie à deux.",
        img: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=600&h=400&fit=crop&auto=format",
        alt: "Couple admirant un coucher de soleil doré sur un lagon tropical",
        align: "right",
      },
      {
        id: "diner-plage",
        label: "NUIT 8",
        title: "Dîner romantique sur la plage",
        text: "Pour votre dernière soirée, une table dressée rien que pour vous sur le sable, à la lueur des photophores et des étoiles. Un dîner aux saveurs locales, les vagues en fond sonore et l'éternité d'un instant gravé à jamais.",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop&auto=format",
        alt: "Table dressée pour un dîner romantique sur la plage au crépuscule",
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
    h2: "Notre romantique confidentiel",
    intro:
      "Envie d'une escapade à deux loin des destinations attendues ? Voici quelques pépites romantiques que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=600&h=400&fit=crop&auto=format",
        alt: "Bungalows sur pilotis et lagon turquoise de Bora Bora",
        tag: "Polynésie",
        name: "Bora Bora",
        text: "Le mythe absolu de la lune de miel : bungalows sur pilotis et lagon irréel au cœur du Pacifique.",
      },
      {
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
        alt: "Temple et cerisiers en fleurs à Kyoto",
        tag: "Japon",
        name: "Kyoto",
        text: "Ryokans intimistes, jardins zen et cerisiers en fleurs : un romantisme délicat et hors du temps.",
      },
      {
        img: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&h=400&fit=crop&auto=format",
        alt: "Place d'Espagne et architecture mauresque de Séville",
        tag: "Espagne",
        name: "Séville",
        text: "Patios fleuris, soirées flamenco et tapas à deux dans la plus passionnée des villes andalouses.",
      },
      {
        img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et eaux turquoise de Zanzibar",
        tag: "Tanzanie",
        name: "Zanzibar",
        text: "Sable blanc, lodges de charme et boutres au coucher du soleil : l'exotisme romantique de l'océan Indien.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en séjour romantique ?",
    intro:
      "Chaque destination a sa saison idéale. Voici un repère rapide ; votre conseiller affinera selon vos dates et votre budget.",
    rows: [
      {
        destination: "Maldives",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Santorin",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Bali",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Île Maurice",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok"],
      },
      {
        destination: "Maroc",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre séjour romantique",
    left: [
      {
        question: "Quelles sont les meilleures destinations pour une lune de miel ?",
        answer: (
          <p>
            Les Maldives, l&apos;Île Maurice et Bora Bora pour les amoureux de
            lagons, Santorin et Venise pour les couchers de soleil et le charme,
            Bali ou Marrakech pour le dépaysement à deux. Votre conseiller vous
            oriente selon la saison, votre budget et l&apos;ambiance recherchée.
          </p>
        ),
      },
      {
        question: "Proposez-vous des attentions spéciales pour les jeunes mariés ?",
        answer: (
          <p>
            Oui&nbsp;: surclassement selon disponibilité, décoration florale,
            bouteille de champagne, dîner privatif ou soin en duo. Précisez-nous
            l&apos;occasion et nous organisons les petites surprises qui rendent
            le séjour inoubliable.
          </p>
        ),
      },
      {
        question: "Peut-on combiner plusieurs lieux pour notre voyage à deux ?",
        answer: (
          <p>
            Tout à fait. Une étape culturelle suivie d&apos;une parenthèse plage
            (Venise puis les Pouilles, Bali puis les Gili, Kyoto puis une île
            tropicale) compose un séjour romantique riche et équilibré, que votre
            conseiller orchestre de bout en bout.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Quelle est la meilleure période pour un séjour romantique ?",
        answer: (
          <p>
            Chaque destination a sa saison idéale. Nous privilégions les périodes
            au climat le plus doux et aux plus beaux couchers de soleil, tout en
            tenant compte de l&apos;affluence et des tarifs haute ou basse saison.
          </p>
        ),
      },
      {
        question: "Un séjour romantique coûte-t-il forcément cher ?",
        answer: (
          <p>
            Pas nécessairement&nbsp;: le romantisme tient autant au cadre et aux
            attentions qu&apos;au luxe. Du riad intime à la villa sur pilotis,
            votre conseiller compose une escapade à deux mémorable, quel que soit
            votre budget.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis pour un séjour romantique ?",
        answer: (
          <p>
            Indiquez-nous l&apos;occasion, vos dates et la destination (ou vos
            envies)&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelles sont les meilleures destinations pour une lune de miel ?",
        answer:
          "Maldives, Île Maurice et Bora Bora pour les lagons, Santorin et Venise pour le charme et les couchers de soleil, Bali ou Marrakech pour le dépaysement à deux. Votre conseiller vous oriente selon la saison, votre budget et l'ambiance recherchée.",
      },
      {
        question: "Proposez-vous des attentions spéciales pour les jeunes mariés ?",
        answer:
          "Oui : surclassement selon disponibilité, décoration florale, champagne, dîner privatif ou soin en duo. Précisez l'occasion et nous organisons les surprises qui rendent le séjour inoubliable.",
      },
      {
        question: "Peut-on combiner plusieurs lieux pour un voyage à deux ?",
        answer:
          "Oui, une étape culturelle suivie d'une parenthèse plage compose un séjour romantique riche et équilibré, orchestré de bout en bout par votre conseiller.",
      },
      {
        question: "Quelle est la meilleure période pour un séjour romantique ?",
        answer:
          "Chaque destination a sa saison idéale. Nous privilégions les périodes au climat le plus doux et aux plus beaux couchers de soleil, en tenant compte de l'affluence et des tarifs.",
      },
      {
        question: "Un séjour romantique coûte-t-il forcément cher ?",
        answer:
          "Non : le romantisme tient autant au cadre et aux attentions qu'au luxe. Du riad intime à la villa sur pilotis, votre conseiller compose une escapade mémorable quel que soit votre budget.",
      },
      {
        question: "Comment obtenir un devis pour un séjour romantique ?",
        answer:
          "Indiquez l'occasion, vos dates et la destination ou vos envies. Nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Le plus beau des voyages à deux se savoure aussi en conscience&nbsp;: nous
        privilégions des boutique-hôtels engagés, des acteurs locaux et des
        expériences respectueuses des lieux et des communautés. Voyager mieux,
        pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à vous offrir une parenthèse à deux ?",
    body: "Parlez-nous de votre séjour romantique idéal — occasion, destination, dates, budget — et votre conseiller dédié compose une proposition sur mesure, gratuitement et sans engagement.",
  },
};

export default romantique;
