import type { ThemeContent } from "../types";

/**
 * Page thème « Circuit nature ». Images : visuels de grands espaces à valider/remplacer.
 */
const circuitNature: ThemeContent = {
  slug: "nature",
  parentLabel: "Circuits",
  parentHref: "/circuits",
  meta: {
    title: "Circuit nature & grands espaces sur mesure — Parcs, volcans, faune sauvage | CTA Voyages",
    description:
      "Partez en circuit nature avec CTA Voyages : parcs nationaux, volcans, forêts et faune sauvage du Costa Rica au Kenya. Guides naturalistes, lodges engagés, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Vallée verdoyante traversée par une rivière au lever du jour",
    label: "Circuit nature",
    h1: "Circuit nature : à la rencontre des grands espaces",
    description:
      "Parcs nationaux, volcans fumants, forêts primaires et faune sauvage&nbsp;: nous composons des itinéraires pour les amoureux de nature et d'aventure douce. Guides naturalistes, lodges immersifs et émerveillement garanti.",
    primaryCtaLabel: "Composer mon circuit nature",
    secondaryCtaLabel: "Pourquoi un circuit nature ?",
  },
  presentation: {
    eyebrow: "L'appel du sauvage",
    h2: "La nature comme terrain de jeu",
    body: (
      <>
        Un volcan au petit matin, une forêt tropicale bruissante de vie, un fjord
        sculpté par les glaciers et la silhouette d&apos;un fauve dans la
        savane&nbsp;: le circuit nature, c&apos;est l&apos;art de renouer avec les
        grands espaces, au rythme du vivant. Chez CTA Voyages, votre conseiller
        compose un itinéraire qui alterne randonnées accessibles, observation de
        la faune et nuits en lodge — pour vivre une aventure douce, intense et
        respectueuse des milieux traversés.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt tropicale luxuriante du Costa Rica",
      badge: "AMÉRIQUES",
      name: "Costa Rica",
      desc: "Volcans, forêts primaires et biodiversité folle : le paradis de l'écotourisme.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
      alt: "Lac de montagne et forêt des Rocheuses canadiennes",
      badge: "AMÉRIQUES",
      name: "Canada",
      desc: "Lacs turquoise, forêts sans fin et ours bruns dans les Rocheuses.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et paysage volcanique d'Islande",
      badge: "EUROPE",
      name: "Islande",
      desc: "Geysers, cascades, glaciers et champs de lave : la terre à l'état brut.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Éléphants dans la savane du Kenya au coucher du soleil",
      badge: "AFRIQUE",
      name: "Kenya",
      desc: "Safari dans le Masai Mara : la grande migration et le Big Five.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
      alt: "Fjord norvégien encadré de montagnes escarpées",
      badge: "EUROPE",
      name: "Norvège",
      desc: "Fjords spectaculaires, aurores boréales et randonnées au bout du monde.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
      alt: "Zèbres dans le parc du Serengeti en Tanzanie",
      badge: "AFRIQUE",
      name: "Tanzanie",
      desc: "Serengeti, cratère du Ngorongoro et faune sauvage à perte de vue.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un circuit nature avec CTA Voyages ?",
    cards: [
      {
        icon: "forest",
        title: "Des guides naturalistes",
        text: "Guides locaux passionnés qui décryptent la faune, la flore et les milieux : l'observation prend tout son sens.",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&auto=format",
        alt: "Guide observant une forêt à l'aube",
      },
      {
        icon: "pets",
        title: "Faune sauvage au plus près",
        text: "Safaris, sorties d'observation et affûts au bon moment : nous maximisons vos chances de belles rencontres.",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop&auto=format",
        alt: "Lion observé lors d'un safari",
      },
      {
        icon: "cabin",
        title: "Des lodges immersifs",
        text: "Écolodges, refuges et hébergements au cœur des parcs : vous dormez là où la nature commence.",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&auto=format",
        alt: "Lodge isolé au cœur d'un paysage naturel",
      },
      {
        icon: "hiking",
        title: "Une aventure douce",
        text: "Randonnées accessibles, rythme adapté et logistique réglée : l'aventure sans l'épuisement.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
        alt: "Randonneur sur un sentier de montagne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Neuf jours de safari & nature au Kenya",
    intro:
      "De Nairobi au Masai Mara, du lac Nakuru aux pieds du Kilimandjaro à Amboseli : un grand voyage au cœur de la faune sauvage d'Afrique de l'Est, ponctué d'une rencontre avec les Masai.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée à Nairobi",
        text: "Accueil à l'aéroport international de Nairobi et transfert vers votre lodge. Briefing de votre guide naturaliste, dîner et première nuit aux portes de la savane pour vous acclimater en douceur.",
        img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop&auto=format",
        alt: "Vue sur la skyline de Nairobi en bordure de savane",
        align: "left",
      },
      {
        id: "s2",
        label: "JOURS 2 À 3",
        title: "Safari dans la réserve du Masai Mara",
        text: "Route vers le Masai Mara, joyau du safari kényan. Deux journées de game drives matin et soir à la recherche du Big Five — lions, éléphants, buffles, léopards et rhinocéros — au cœur de la grande migration.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
        alt: "Éléphants traversant la savane du Masai Mara au coucher du soleil",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 4",
        title: "Rencontre avec les Masai",
        text: "Immersion dans un village masai : danses traditionnelles, artisanat et échange avec ce peuple d'éleveurs semi-nomades. Un moment authentique pour comprendre leur lien ancestral avec la terre et le bétail.",
        img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop&auto=format",
        alt: "Guerriers masai en tenue traditionnelle dans leur village",
        align: "left",
      },
      {
        id: "s4",
        label: "JOURS 5 À 6",
        title: "Le lac Nakuru et ses flamants roses",
        text: "Cap sur la vallée du Rift et le parc national du lac Nakuru. Observation des nuées de flamants roses, des rhinocéros blancs et noirs, et d'une avifaune exceptionnelle dans un décor de lacs et de falaises.",
        img: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=600&h=400&fit=crop&auto=format",
        alt: "Flamants roses massés sur les rives du lac Nakuru",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 7 À 8",
        title: "Amboseli, face au Kilimandjaro",
        text: "Direction le parc d'Amboseli et ses troupeaux d'éléphants évoluant devant les neiges du Kilimandjaro. Game drives au lever et au coucher du soleil pour saisir l'une des plus belles cartes postales d'Afrique.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
        alt: "Éléphants d'Amboseli devant le sommet enneigé du Kilimandjaro",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 9",
        title: "Retour à Nairobi & départ",
        text: "Dernier petit-déjeuner face à la savane, puis route vers Nairobi. Selon votre vol, visite possible d'un sanctuaire d'éléphanteaux ou d'une girafe avant le transfert à l'aéroport et le vol retour.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&h=400&fit=crop&auto=format",
        alt: "Girafe se détachant sur le ciel de la savane kényane",
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
    h2: "Nos évasions nature confidentielles",
    intro:
      "Envie de grands espaces encore préservés du tourisme de masse ? Voici quelques destinations nature que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
        alt: "Désert et formations rocheuses de Patagonie",
        tag: "Amérique du Sud",
        name: "Patagonie",
        text: "Glaciers, steppes balayées par le vent et sommets mythiques au bout du monde.",
      },
      {
        img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format",
        alt: "Forêt humide et montagnes du Rwanda",
        tag: "Afrique de l'Est",
        name: "Rwanda",
        text: "Le pays des mille collines : trekking gorilles dans la brume des volcans Virunga.",
      },
      {
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&auto=format",
        alt: "Vastes plaines verdoyantes des Açores",
        tag: "Atlantique",
        name: "Açores",
        text: "Îles volcaniques émeraude : cratères, lacs, baleines et nature intacte.",
      },
      {
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
        alt: "Forêt de fougères géantes en Nouvelle-Zélande",
        tag: "Pacifique",
        name: "Nouvelle-Zélande",
        text: "Fiordland, geysers et forêts primaires : la nature à l'état sauvage version sud.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en circuit nature ?",
    intro:
      "Chaque destination a sa saison idéale (saison sèche, migrations, lumière). Votre conseiller affine selon vos dates et la faune à observer.",
    rows: [
      {
        destination: "Costa Rica",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "ok", "ok", "avoid", "avoid", "ok", "ideal"],
      },
      {
        destination: "Canada",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Islande",
        months: ["ok", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Kenya",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Norvège",
        months: ["ok", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Tanzanie",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre circuit nature",
    left: [
      {
        question: "Faut-il être sportif pour un circuit nature ?",
        answer: (
          <p>
            Pas nécessairement. Nous parlons d&apos;aventure douce&nbsp;:
            randonnées accessibles, rythme adapté et étapes confortables. Votre
            conseiller cale l&apos;intensité sur votre forme et vos envies.
          </p>
        ),
      },
      {
        question: "Verra-t-on vraiment de la faune sauvage ?",
        answer: (
          <p>
            Aucune observation n&apos;est garantie dans la nature, mais nous
            choisissons les meilleures saisons, les bons parcs et des guides
            expérimentés pour maximiser vos chances de belles rencontres.
          </p>
        ),
      },
      {
        question: "Quelles destinations pour un premier circuit nature ?",
        answer: (
          <p>
            Le Costa Rica, l&apos;Islande ou le Canada sont des valeurs
            sûres&nbsp;: faune accessible, infrastructures rassurantes et
            paysages spectaculaires sans difficulté particulière.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en circuit nature en famille ?",
        answer: (
          <p>
            Bien sûr. Nous sélectionnons des itinéraires et des activités
            adaptés aux enfants (safaris, sorties faciles, lodges familiaux)
            pour émerveiller petits et grands.
          </p>
        ),
      },
      {
        question: "Comment sont choisis les hébergements ?",
        answer: (
          <p>
            Nous privilégions écolodges, refuges et hôtels engagés, idéalement
            situés au cœur ou à l&apos;orée des parcs, pour vivre la nature dès
            le réveil tout en limitant l&apos;empreinte du séjour.
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
        question: "Faut-il être sportif pour un circuit nature ?",
        answer:
          "Pas nécessairement. Il s'agit d'aventure douce : randonnées accessibles, rythme adapté et étapes confortables, calés sur votre forme et vos envies.",
      },
      {
        question: "Verra-t-on vraiment de la faune sauvage ?",
        answer:
          "Aucune observation n'est garantie dans la nature, mais le choix de la saison, des parcs et de guides expérimentés maximise vos chances de belles rencontres.",
      },
      {
        question: "Quelles destinations pour un premier circuit nature ?",
        answer:
          "Le Costa Rica, l'Islande ou le Canada sont des valeurs sûres : faune accessible, infrastructures rassurantes et paysages spectaculaires sans difficulté.",
      },
      {
        question: "Peut-on partir en circuit nature en famille ?",
        answer:
          "Oui, avec des itinéraires et activités adaptés aux enfants (safaris, sorties faciles, lodges familiaux) pour émerveiller petits et grands.",
      },
      {
        question: "Comment sont choisis les hébergements ?",
        answer:
          "Nous privilégions écolodges, refuges et hôtels engagés au cœur ou à l'orée des parcs, pour vivre la nature dès le réveil tout en limitant l'empreinte du séjour.",
      },
      {
        question: "Comment obtenir un devis pour un circuit nature ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        La nature mérite qu&apos;on la préserve&nbsp;: nous privilégions les parcs
        gérés durablement, les écolodges engagés et les guides locaux, dans le
        respect strict de la faune et des milieux. Observer sans déranger, voyager
        mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à renouer avec les grands espaces ?",
    body: "Dites-nous quelle nature vous fait rêver — destination, dates, budget — et votre conseiller dédié compose votre circuit sur mesure, gratuitement et sans engagement.",
  },
};

export default circuitNature;
