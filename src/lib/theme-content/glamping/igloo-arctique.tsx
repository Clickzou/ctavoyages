import type { ThemeContent } from "../types";

/**
 * Page thème « Igloo & cabane arctique ». Images : visuels du Grand Nord à valider/remplacer.
 */
const glampingIglooArctique: ThemeContent = {
  slug: "igloo-arctique",
  parentLabel: "Glamping",
  parentHref: "/glamping",
  meta: {
    title: "Igloo & cabane arctique sous les aurores boréales | CTA Voyages",
    description:
      "Dormez sous les aurores boréales dans un igloo de verre ou une cabane arctique. CTA Voyages compose votre séjour grand froid : Laponie, Norvège, Islande, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Igloo de verre sous une aurore boréale dans un paysage enneigé",
    label: "Igloo & cabane arctique",
    h1: "Igloo arctique : dormir sous les aurores boréales",
    description:
      "Un dôme de verre chauffé, la neige tout autour et le ciel qui s'embrase de vert : l'igloo arctique offre une nuit hors du temps, à mi-chemin entre le grand froid magique et le confort le plus douillet.",
    primaryCtaLabel: "Composer mon séjour igloo",
    secondaryCtaLabel: "Pourquoi un igloo arctique ?",
  },
  presentation: {
    eyebrow: "L'expérience grand froid",
    h2: "Le ciel pour plafond, la neige pour décor",
    body: (
      <>
        Allongé sous un dôme de verre, bien au chaud sous la couette, vous
        guettez les premières lueurs vertes danser au-dessus de la toundra
        gelée&nbsp;: l&apos;igloo arctique, c&apos;est l&apos;art de vivre le
        Grand Nord sans renoncer au confort. Chez CTA Voyages, votre conseiller
        sélectionne le lodge le mieux placé sous le ciel boréal, l&apos;igloo de
        verre ou la cabane chauffée idéale, et les expériences à ne pas manquer —
        chiens de traîneau, motoneige ou sauna face aux étoiles. Une nuit
        magique, sans froid ni mauvaise surprise.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt enneigée de Laponie sous une aurore boréale",
      badge: "FINLANDE",
      name: "Laponie",
      desc: "Le royaume des igloos de verre : aurores, rennes et villages du père Noël.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
      alt: "Fjord norvégien enneigé sous un ciel étoilé",
      badge: "NORVÈGE",
      name: "Norvège",
      desc: "Tromsø et les Lofoten : fjords gelés et aurores au-dessus de l'océan.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade gelée et paysage volcanique d'Islande en hiver",
      badge: "ISLANDE",
      name: "Islande",
      desc: "Terre de glace et de feu : geysers fumants, glaciers et bains chauds.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=600&h=400&fit=crop&auto=format",
      alt: "Cabane rouge isolée dans la neige en Suède",
      badge: "SUÈDE",
      name: "Suède",
      desc: "Laponie suédoise et hôtel de glace : silence blanc et nuits étoilées.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt boréale enneigée du Canada sous un ciel d'aurores",
      badge: "CANADA",
      name: "Canada",
      desc: "Yukon et Grand Nord : immensités sauvages et aurores spectaculaires.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=600&h=400&fit=crop&auto=format",
      alt: "Iceberg et banquise du Groenland au crépuscule",
      badge: "GROENLAND",
      name: "Groenland",
      desc: "Banquise, icebergs géants et villages inuits au bout du monde.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi vivre une nuit en igloo arctique avec CTA Voyages ?",
    cards: [
      {
        icon: "ac_unit",
        title: "Un igloo de verre face au ciel",
        text: "Dôme chauffé, baie vitrée orientée plein nord : vous observez les aurores sans quitter votre lit.",
        img: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=600&h=400&fit=crop&auto=format",
        alt: "Intérieur d'un igloo de verre avec lit face au ciel étoilé",
      },
      {
        icon: "auto_awesome",
        title: "Aux meilleures heures d'aurores",
        text: "Saison, latitude, indice de pollution lumineuse : nous calons votre séjour quand les chances sont maximales.",
        img: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=600&h=400&fit=crop&auto=format",
        alt: "Aurore boréale verte intense au-dessus de la montagne",
      },
      {
        icon: "fireplace",
        title: "Le confort malgré le froid",
        text: "Cabanes chauffées, équipement grand froid fourni, sauna et repas chauds : le Grand Nord en douceur.",
        img: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?w=600&h=400&fit=crop&auto=format",
        alt: "Chalet en bois enneigé sous le ciel du Grand Nord",
      },
      {
        icon: "sledding",
        title: "Activités du Grand Nord",
        text: "Chiens de traîneau, motoneige, raquettes ou pêche blanche : nous ajoutons les expériences qui vous tentent.",
        img: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=600&h=400&fit=crop&auto=format",
        alt: "Attelage de chiens de traîneau dans la neige",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Quatre nuits sous les aurores en Laponie finlandaise",
    intro:
      "De Rovaniemi aux igloos de verre, quatre jours pour vivre la magie du Grand Nord, entre traîneaux, rennes et ciel embrasé.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée à Rovaniemi & village du Père Noël",
        text: "Atterrissage à Rovaniemi, sur le cercle polaire arctique. Transfert vers votre lodge, équipement grand froid, puis visite du village du Père Noël et premier dîner finlandais au coin du feu.",
        img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop&auto=format",
        alt: "Village enneigé de Rovaniemi illuminé sur le cercle polaire arctique",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Safari motoneige & chiens de traîneau",
        text: "Matinée pleine de sensations en motoneige à travers la forêt boréale, puis prise en main d'un attelage de huskies pour filer sur la neige immaculée. Pause autour d'un feu et boisson chaude en pleine toundra.",
        img: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=600&h=400&fit=crop&auto=format",
        alt: "Attelage de chiens de traîneau lancé dans la neige de Laponie",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3",
        title: "Nuit en igloo de verre sous les aurores",
        text: "Installation dans votre igloo de verre chauffé, baie vitrée orientée plein nord. La nuit tombée, vous guettez les aurores boréales danser au-dessus de la toundra, confortablement allongé sous la couette.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop&auto=format",
        alt: "Igloo de verre éclairé sous une aurore boréale verte en Laponie",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 4",
        title: "Rencontre à la ferme de rennes",
        text: "Cap sur une ferme de rennes traditionnelle : balade en traîneau tiré par les rennes, rencontre avec un éleveur sami et découverte d'un mode de vie millénaire au rythme du Grand Nord.",
        img: "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=600&h=400&fit=crop&auto=format",
        alt: "Rennes dans une forêt enneigée de Laponie sous le ciel boréal",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 5",
        title: "Dernier instant blanc & départ",
        text: "Une ultime promenade en raquettes ou un café au coin du feu avant le transfert vers l'aéroport de Rovaniemi. Vous repartez la tête pleine d'images de neige, de silence et d'aurores.",
        img: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=600&h=400&fit=crop&auto=format",
        alt: "Cabane rouge isolée dans un paysage enneigé de Laponie au petit matin",
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
    h2: "Nos refuges arctiques confidentiels",
    intro:
      "Envie d'un coin de banquise vraiment préservé ? Voici quelques adresses arctiques que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop&auto=format",
        alt: "Cabane sur pilotis dans les îles Lofoten enneigées",
        tag: "Norvège",
        name: "Îles Lofoten",
        text: "Rorbu rouges sur pilotis, pics escarpés et aurores reflétées dans l'eau noire.",
      },
      {
        img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&h=400&fit=crop&auto=format",
        alt: "Archipel enneigé du Svalbard au crépuscule polaire",
        tag: "Arctique",
        name: "Svalbard",
        text: "Au 78e parallèle : ours polaires, nuit polaire et glaciers à perte de vue.",
      },
      {
        img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&h=400&fit=crop&auto=format",
        alt: "Igloo traditionnel de neige illuminé de l'intérieur",
        tag: "Finlande",
        name: "Kakslauttanen",
        text: "Le village d'igloos mythique : dômes de verre et igloos de neige au cœur de la forêt.",
      },
      {
        img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop&auto=format",
        alt: "Village inuit isolé sur la côte du Groenland",
        tag: "Groenland",
        name: "Ilulissat",
        text: "Fjord glacé classé UNESCO : icebergs colossaux et silence du bout du monde.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir voir les aurores en igloo ?",
    intro:
      "La saison des aurores court de septembre à mars, par ciel sombre et dégagé. Votre conseiller affine selon la destination et vos dates.",
    rows: [
      {
        destination: "Laponie",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Norvège",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Islande",
        months: ["ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Suède",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Canada",
        months: ["ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Groenland",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre nuit en igloo arctique",
    left: [
      {
        question: "Est-ce qu'on a froid dans un igloo de verre ?",
        answer: (
          <p>
            Non&nbsp;: les igloos de verre sont chauffés et équipés d&apos;une
            literie grand froid. Vous observez les aurores depuis votre lit,
            confortablement installé. Les igloos de neige, eux, restent autour de
            0&nbsp;°C mais sont fournis avec des sacs de couchage polaires.
          </p>
        ),
      },
      {
        question: "Est-on sûr de voir les aurores boréales ?",
        answer: (
          <p>
            Aucune garantie absolue&nbsp;: les aurores dépendent de l&apos;activité
            solaire et d&apos;un ciel dégagé. Mais en choisissant la bonne saison
            et plusieurs nuits sur place, vos chances sont très élevées. Votre
            conseiller cale le séjour aux meilleures périodes.
          </p>
        ),
      },
      {
        question: "Combien de nuits prévoir pour un séjour igloo ?",
        answer: (
          <p>
            Comptez 3 à 5 nuits&nbsp;: assez pour multiplier les chances
            d&apos;aurores et profiter des activités (traîneau, motoneige). Une à
            deux nuits en igloo de verre suffisent, complétées par un lodge confort
            pour le reste du séjour.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Faut-il un équipement spécial grand froid ?",
        answer: (
          <p>
            La plupart des lodges arctiques prêtent une combinaison grand froid,
            des bottes et des moufles pour les activités. Pour le reste, prévoyez
            des couches techniques&nbsp;: nous vous transmettons une liste de
            préparation détaillée.
          </p>
        ),
      },
      {
        question: "Peut-on partir en igloo en famille ?",
        answer: (
          <p>
            Bien sûr. Plusieurs sites proposent des igloos ou cabanes familiales et
            des activités adaptées aux enfants (rencontre avec les rennes, balade en
            traîneau). Nous sélectionnons l&apos;hébergement et le programme adéquats.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous la destination (ou vos envies), vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Est-ce qu'on a froid dans un igloo de verre ?",
        answer:
          "Non : les igloos de verre sont chauffés et équipés d'une literie grand froid, on observe les aurores au chaud depuis son lit. Les igloos de neige restent autour de 0 °C mais sont fournis avec des sacs de couchage polaires.",
      },
      {
        question: "Est-on sûr de voir les aurores boréales ?",
        answer:
          "Aucune garantie absolue : les aurores dépendent de l'activité solaire et d'un ciel dégagé. En choisissant la bonne saison et plusieurs nuits sur place, les chances sont très élevées.",
      },
      {
        question: "Combien de nuits prévoir pour un séjour igloo arctique ?",
        answer:
          "Comptez 3 à 5 nuits pour multiplier les chances d'aurores et profiter des activités. Une à deux nuits en igloo de verre suffisent, complétées par un lodge confort.",
      },
      {
        question: "Faut-il un équipement spécial grand froid ?",
        answer:
          "La plupart des lodges arctiques prêtent une combinaison grand froid, des bottes et des moufles. Prévoyez des couches techniques : nous transmettons une liste de préparation détaillée.",
      },
      {
        question: "Peut-on partir en igloo arctique en famille ?",
        answer:
          "Oui, plusieurs sites proposent des igloos ou cabanes familiales et des activités adaptées aux enfants (rennes, traîneau). Nous sélectionnons l'hébergement et le programme adéquats.",
      },
      {
        question: "Comment obtenir un devis pour un séjour igloo ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        L&apos;Arctique est un milieu fragile&nbsp;: nous privilégions les lodges
        engagés, les groupes restreints et les acteurs locaux qui respectent la
        toundra et les communautés du Grand Nord. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à passer une nuit sous les aurores ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre séjour igloo arctique sur mesure, gratuitement et sans engagement.",
  },
};

export default glampingIglooArctique;
