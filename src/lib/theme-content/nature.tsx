import type { ThemeContent } from "./types";

/**
 * Page thème « Séjour nature ». Images : visuels de paysages à valider/remplacer.
 */
const nature: ThemeContent = {
  slug: "nature",
  parentLabel: "Séjours",
  parentHref: "/sejours",
  meta: {
    title: "Séjour nature & grands espaces sur mesure — Faune, randonnée & déconnexion | CTA Voyages",
    description:
      "Organisez votre séjour nature avec CTA Voyages : grands espaces préservés, faune sauvage, randonnées et écolodges aux quatre coins du monde. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Forêt de conifères baignée de lumière au cœur d'un grand espace naturel",
    label: "Séjour nature",
    h1: "Séjour nature : grands espaces et déconnexion",
    description:
      "Des forêts primaires aux fjords, des savanes aux glaciers, nous composons le séjour nature qui vous ressemble — faune sauvage, randonnées et paysages à couper le souffle, loin du tumulte.",
    primaryCtaLabel: "Composer mon séjour nature",
    secondaryCtaLabel: "Pourquoi un séjour nature ?",
  },
  presentation: {
    eyebrow: "Le voyage qui ressource",
    h2: "La nature, en grand et en vrai",
    body: (
      <>
        Le séjour nature, c&apos;est l&apos;art de se reconnecter à
        l&apos;essentiel&nbsp;: le silence d&apos;une forêt au petit matin, la
        silhouette d&apos;un animal sauvage au détour d&apos;un sentier, un
        bivouac sous un ciel constellé d&apos;étoiles. Chez CTA Voyages, nous
        allons plus loin que la simple carte postale&nbsp;: votre conseiller
        sélectionne la destination, l&apos;écolodge et les expériences de plein
        air qui correspondent vraiment à vos envies, votre niveau et la saison
        idéale. Observation de la faune, randonnées, déconnexion totale ou aventure
        en famille — chaque séjour nature est pensé pour vous faire respirer.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt tropicale luxuriante du Costa Rica",
      badge: "AMÉRIQUE CENTRALE",
      name: "Costa Rica",
      desc: "Forêts primaires, volcans et une biodiversité parmi les plus riches du monde.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
      alt: "Lac et montagnes des Rocheuses canadiennes",
      badge: "AMÉRIQUES",
      name: "Canada",
      desc: "Lacs émeraude, forêts infinies et faune des Rocheuses à perte de vue.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et paysage volcanique d'Islande",
      badge: "EUROPE DU NORD",
      name: "Islande",
      desc: "Glaciers, geysers, cascades et terres volcaniques d'une beauté brute.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=600&h=400&fit=crop&auto=format",
      alt: "Fjord norvégien encadré de montagnes abruptes",
      badge: "EUROPE DU NORD",
      name: "Norvège",
      desc: "Fjords spectaculaires, montagnes plongeant dans la mer et air pur.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop&auto=format",
      alt: "Aurore boréale au-dessus d'une forêt enneigée en Laponie",
      badge: "EUROPE DU NORD",
      name: "Laponie",
      desc: "Forêts boréales, aurores boréales et grands espaces du Grand Nord.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Éléphants dans la savane du Kenya au coucher du soleil",
      badge: "AFRIQUE",
      name: "Kenya",
      desc: "Savanes immenses, grande migration et faune sauvage en liberté.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un séjour nature avec CTA Voyages ?",
    cards: [
      {
        icon: "landscape",
        title: "Des grands espaces préservés",
        text: "Parcs nationaux, réserves et sites protégés : nous vous emmenons là où la nature est la plus intacte et spectaculaire.",
        img: "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?w=600&h=400&fit=crop&auto=format",
        alt: "Vaste paysage de montagnes et de vallées préservées",
      },
      {
        icon: "pets",
        title: "La faune sauvage en liberté",
        text: "Safaris, observation des baleines ou des ours : nos conseillers connaissent les meilleurs spots et les bonnes périodes.",
        img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=600&h=400&fit=crop&auto=format",
        alt: "Animal sauvage observé dans son habitat naturel",
      },
      {
        icon: "forest",
        title: "Lodges & écolodges de caractère",
        text: "Cabanes en forêt, lodges face aux glaciers ou tentes safari : un hébergement immergé dans la nature, sans renoncer au confort.",
        img: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=600&h=400&fit=crop&auto=format",
        alt: "Écolodge en bois au cœur d'un paysage naturel",
      },
      {
        icon: "hiking",
        title: "Randonnées & activités plein air",
        text: "Treks, kayak, canoë ou raquettes : des activités adaptées à votre niveau pour vivre la nature de l'intérieur.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
        alt: "Randonneur sur un sentier de montagne en pleine nature",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Le Costa Rica en 10 jours : volcans, forêts et faune sauvage",
    intro:
      "Un circuit nature au cœur du « pays sans armée » le plus vert d'Amérique centrale, des volcans fumants aux plages du Pacifique.",
    steps: [
      {
        id: "san-jose",
        label: "JOURS 1 À 2",
        title: "San José : porte d'entrée des tropiques",
        text: "Arrivée dans la capitale, nichée sur les hauts plateaux centraux entre les volcans. Première immersion dans la culture « pura vida » avant de mettre le cap vers la nature sauvage.",
        img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=600&h=400&fit=crop&auto=format",
        alt: "Forêt tropicale luxuriante des hauts plateaux du Costa Rica",
        align: "left",
      },
      {
        id: "arenal",
        label: "JOURS 3 À 4",
        title: "Volcan Arenal : terre de feu et d'eau",
        text: "Cap au nord vers le majestueux volcan Arenal et son cône parfait. Randonnées sur les coulées de lave, ponts suspendus dans la canopée et détente dans les sources thermales naturelles.",
        img: "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?w=600&h=400&fit=crop&auto=format",
        alt: "Volcan Arenal au cône parfait dominant la forêt tropicale",
        align: "right",
      },
      {
        id: "monteverde",
        label: "JOURS 5 À 6",
        title: "Monteverde : la forêt dans les nuages",
        text: "Direction la mythique forêt nuageuse de Monteverde, suspendue dans la brume. Tyrolienne au-dessus de la canopée, sentiers parmi les orchidées et observation du quetzal resplendissant.",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&auto=format",
        alt: "Forêt nuageuse de Monteverde enveloppée de brume",
        align: "left",
      },
      {
        id: "manuel-antonio",
        label: "JOURS 7 À 8",
        title: "Manuel Antonio : faune et plages dorées",
        text: "Le célèbre parc national où la jungle rejoint la mer : paresseux, singes capucins et iguanes se croisent au-dessus de criques de sable blanc. Le paradis de l'observation animalière.",
        img: "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?w=600&h=400&fit=crop&auto=format",
        alt: "Paresseux suspendu à une branche dans la jungle du Costa Rica",
        align: "right",
      },
      {
        id: "pacifique",
        label: "JOUR 9",
        title: "Côte Pacifique : farniente et couchers de soleil",
        text: "Journée de détente face à l'océan Pacifique, entre plages sauvages et cocotiers. Surf, kayak dans la mangrove ou simple contemplation des couchers de soleil flamboyants.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
        alt: "Plage sauvage et cocotiers sur la côte Pacifique du Costa Rica",
        align: "left",
      },
      {
        id: "depart",
        label: "JOUR 10",
        title: "Retour et derniers instants pura vida",
        text: "Route retour vers San José au rythme des paysages verdoyants. Derniers achats d'artisanat et de café local avant l'envol, des images plein la tête.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&auto=format",
        alt: "Paysage verdoyant de collines et plantations du Costa Rica",
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
    h2: "Nos pépites nature confidentielles",
    intro:
      "Envie de grands espaces loin des circuits classiques ? Voici quelques destinations nature plus rares, que nos conseillers connaissent et adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=600&h=400&fit=crop&auto=format",
        alt: "Cratère volcanique verdoyant et lac des Açores",
        tag: "Atlantique",
        name: "Açores",
        text: "Des îles volcaniques tapissées d'hortensias, lacs de cratère et baleines au large — la nature à l'état pur, au milieu de l'Atlantique.",
      },
      {
        img: "https://images.unsplash.com/photo-1583524505974-6facd53f4597?w=600&h=400&fit=crop&auto=format",
        alt: "Lac de montagne et forêts alpines de Slovénie",
        tag: "Europe",
        name: "Slovénie",
        text: "Lacs alpins, gorges émeraude et forêts des Alpes juliennes : une pépite verte et préservée au cœur de l'Europe.",
      },
      {
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes rouges du désert du Namib en Namibie",
        tag: "Afrique",
        name: "Namibie",
        text: "Dunes rouges du Namib, déserts infinis et faune du désert : des paysages d'une beauté minérale comme nulle part ailleurs.",
      },
      {
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
        alt: "Montagnes et glaciers de Patagonie",
        tag: "Amérique du Sud",
        name: "Patagonie",
        text: "Glaciers, pics acérés et steppes balayées par le vent, entre Argentine et Chili : le bout du monde pour les amoureux de grands espaces.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en séjour nature ?",
    intro:
      "Chaque destination a sa saison idéale pour la faune et les paysages. Voici un repère rapide ; votre conseiller affinera selon vos dates et votre budget.",
    rows: [
      {
        destination: "Costa Rica",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ok", "avoid", "avoid", "ok", "ideal"],
      },
      {
        destination: "Canada",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Islande",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Norvège",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid"],
      },
      {
        destination: "Kenya",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre séjour nature",
    left: [
      {
        question: "Quelles sont les meilleures destinations pour un séjour nature ?",
        answer: (
          <p>
            Tout dépend de la saison et de vos envies&nbsp;: le Costa Rica et le
            Kenya pour la faune, le Canada et la Norvège pour les grands espaces,
            l&apos;Islande pour les paysages volcaniques, la Laponie pour le Grand
            Nord. Votre conseiller vous orientera vers la destination où la nature
            sera la plus généreuse à vos dates.
          </p>
        ),
      },
      {
        question: "Faut-il être sportif pour partir en séjour nature ?",
        answer: (
          <p>
            Pas du tout&nbsp;: nous adaptons les activités à votre niveau. On peut
            vivre la nature en observant la faune depuis un véhicule, en navigant
            au fil de l&apos;eau ou par de courtes balades, comme on peut opter
            pour des treks plus engagés. Chaque programme est sur mesure.
          </p>
        ),
      },
      {
        question: "Un séjour nature convient-il aux familles ?",
        answer: (
          <p>
            Tout à fait. L&apos;observation des animaux, les balades faciles et les
            écolodges adaptés émerveillent petits et grands. Nous composons des
            programmes au rythme des enfants, riches en découvertes mais sans
            étapes trop longues.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Quelle est la meilleure période pour observer la faune ?",
        answer: (
          <p>
            Chaque espèce a sa saison&nbsp;: la grande migration au Kenya entre
            juillet et octobre, les baleines aux Açores au printemps, les ours au
            Canada en été. Votre conseiller vous indique la période où vos chances
            d&apos;observation seront les meilleures.
          </p>
        ),
      },
      {
        question: "Comment voyage-t-on de façon responsable dans la nature ?",
        answer: (
          <p>
            Nous privilégions des écolodges engagés, des guides locaux et des
            réserves qui financent la protection des milieux. Observer sans
            déranger, limiter son empreinte&nbsp;: c&apos;est au cœur de notre
            approche du séjour nature.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis pour un séjour nature ?",
        answer: (
          <p>
            Il suffit de nous indiquer vos dates, votre destination (ou vos envies)
            et le nombre de voyageurs. Nous revenons vers vous sous 48h avec une
            proposition personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelles sont les meilleures destinations pour un séjour nature ?",
        answer:
          "Selon la saison : Costa Rica et Kenya pour la faune, Canada et Norvège pour les grands espaces, Islande pour les paysages volcaniques, Laponie pour le Grand Nord. Votre conseiller vous oriente vers la destination idéale à vos dates.",
      },
      {
        question: "Faut-il être sportif pour partir en séjour nature ?",
        answer:
          "Non, nous adaptons les activités à votre niveau : observation de la faune, navigation, courtes balades ou treks plus engagés. Chaque programme est sur mesure.",
      },
      {
        question: "Un séjour nature convient-il aux familles ?",
        answer:
          "Oui. Observation des animaux, balades faciles et écolodges adaptés émerveillent petits et grands. Nous composons des programmes au rythme des enfants.",
      },
      {
        question: "Quelle est la meilleure période pour observer la faune ?",
        answer:
          "Chaque espèce a sa saison : la grande migration au Kenya de juillet à octobre, les baleines aux Açores au printemps, les ours au Canada en été. Votre conseiller vous indique la meilleure période.",
      },
      {
        question: "Comment voyage-t-on de façon responsable dans la nature ?",
        answer:
          "Nous privilégions des écolodges engagés, des guides locaux et des réserves qui financent la protection des milieux. Observer sans déranger et limiter son empreinte est au cœur de notre approche.",
      },
      {
        question: "Comment obtenir un devis pour un séjour nature ?",
        answer:
          "Indiquez vos dates, votre destination ou vos envies et le nombre de voyageurs. Nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Le séjour nature porte en lui une responsabilité particulière&nbsp;: nous
        sélectionnons des écolodges et des partenaires engagés dans la
        préservation des écosystèmes et de la faune, et privilégions les acteurs
        locaux qui font vivre ces territoires. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à respirer à pleins poumons ?",
    body: "Parlez-nous de votre séjour nature idéal — destination, dates, budget — et votre conseiller dédié compose une proposition sur mesure, gratuitement et sans engagement.",
  },
};

export default nature;
