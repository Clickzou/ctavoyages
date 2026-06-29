import type { ThemeContent } from "./types";

/**
 * Page thème « Séjour en famille » — clubs, resorts familiaux et activités
 * enfants. Images : visuels de familles/clubs à valider/remplacer.
 */
const famille: ThemeContent = {
  slug: "famille",
  parentLabel: "Séjours",
  parentHref: "/sejours",
  meta: {
    title: "Séjour en famille sur mesure — Clubs & resorts familiaux | CTA Voyages",
    description:
      "Organisez vos vacances en famille avec CTA Voyages : clubs et resorts familiaux, chambres communicantes, clubs enfants et activités pour tous les âges. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Famille heureuse jouant sur une plage de sable au coucher du soleil",
    label: "Séjour en famille",
    h1: "Séjour en famille : des vacances pour petits et grands",
    description:
      "Clubs tout compris, resorts avec clubs enfants et hébergements adaptés à toute la tribu : nous composons des vacances en famille sans prise de tête, où chacun trouve son bonheur — détente pour les parents, aventures pour les enfants.",
    primaryCtaLabel: "Composer mon séjour en famille",
    secondaryCtaLabel: "Pourquoi partir en famille avec nous ?",
  },
  presentation: {
    eyebrow: "Des vacances pour toute la tribu",
    h2: "Le bonheur, à hauteur d'enfant comme de parent",
    body: (
      <>
        Partir en famille, c&apos;est jongler entre les envies de chacun&nbsp;:
        une piscine et un club enfants pour les petits, une plage et un transat
        pour souffler, des activités à partager et des soirées sereines une fois
        la marmaille couchée. Chez CTA Voyages, votre conseiller connaît les
        clubs et resorts vraiment pensés pour les familles&nbsp;: chambres
        communicantes ou familiales, encadrement par âge, animations et bonnes
        adresses pour manger sans stress. Résultat&nbsp;: des vacances où les
        enfants rentrent des étoiles plein les yeux et où les parents reviennent
        vraiment reposés.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
      alt: "Lagon turquoise et resort familial à l'Île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Lagons calmes, resorts avec clubs enfants et douceur de vivre tropicale.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=600&h=400&fit=crop&auto=format",
      alt: "Crique et plage de la Costa Brava en Espagne",
      badge: "EUROPE",
      name: "Espagne (Costa Brava)",
      desc: "Criques familiales, clubs animés et tapas à deux pas de la France.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=600&h=400&fit=crop&auto=format",
      alt: "Plage de sable et eaux turquoise en Crète",
      badge: "EUROPE",
      name: "Crète (Grèce)",
      desc: "Eaux peu profondes, hôtels-clubs et mythologie qui fait rêver les enfants.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&auto=format",
      alt: "Côte ensoleillée et village coloré en Italie",
      badge: "EUROPE",
      name: "Italie",
      desc: "Plages, pizzas et villages de charme : la dolce vita en mode famille.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&h=400&fit=crop&auto=format",
      alt: "Piscine d'un club familial sous le soleil du Maroc",
      badge: "AFRIQUE",
      name: "Maroc (clubs)",
      desc: "Clubs tout compris au soleil garanti, à 3h de vol et sans décalage.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&h=400&fit=crop&auto=format",
      alt: "Parc à thème animé en Floride aux États-Unis",
      badge: "AMÉRIQUES",
      name: "Floride",
      desc: "Parcs à thème mythiques, plages et le rêve américain en famille.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi partir en famille avec CTA Voyages ?",
    cards: [
      {
        icon: "family_restroom",
        title: "Clubs & resorts familiaux",
        text: "Nous connaissons les vrais clubs pensés pour les familles : encadrement, animations et services qui font la différence.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&auto=format",
        alt: "Resort familial avec piscine et palmiers",
      },
      {
        icon: "pool",
        title: "Hébergements adaptés",
        text: "Chambres familiales ou communicantes, lits bébé, espace pour tout le monde : on choisit le bon hébergement pour votre tribu.",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format",
        alt: "Chambre d'hôtel spacieuse adaptée aux familles",
      },
      {
        icon: "child_care",
        title: "Activités pour tous les âges",
        text: "Clubs enfants, mini-disco, sports et excursions : chacun trouve de quoi s'amuser, des tout-petits aux ados.",
        img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&auto=format",
        alt: "Enfants jouant lors d'une activité de club de vacances",
      },
      {
        icon: "sports_handball",
        title: "Sérénité & accompagnement",
        text: "Transferts, formalités, conseils par âge : un conseiller dédié règle la logistique pour des vacances sans prise de tête.",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&auto=format",
        alt: "Famille détendue préparant son voyage",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Une semaine en famille à l'Île Maurice, sans prise de tête",
    intro:
      "Du resort avec club enfants aux rencontres avec les dauphins et les tortues : une semaine pensée pour que petits et grands en profitent à leur rythme.",
    steps: [
      {
        id: "arrivee-resort",
        label: "JOUR 1",
        title: "Arrivée au resort familial",
        text: "Transfert privé depuis l'aéroport et installation dans votre chambre familiale, à deux pas de la piscine. L'après-midi, les enfants découvrent le mini-club encadré pendant que vous posez vos valises en toute sérénité.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&auto=format",
        alt: "Resort familial avec piscine et palmiers à l'Île Maurice",
        align: "left",
      },
      {
        id: "plage-piscine",
        label: "JOUR 2",
        title: "Plage, piscine et premiers châteaux de sable",
        text: "Journée tranquille sur le lagon peu profond, idéal pour les plus petits, avec maîtres-nageurs présents. Mini-disco et jeux d'eau pour les enfants, transat et cocktail à l'ombre pour les parents.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et lagon turquoise calme à l'Île Maurice",
        align: "right",
      },
      {
        id: "dauphins-bateau",
        label: "JOUR 3",
        title: "Sortie dauphins en bateau",
        text: "Embarquement en matinée pour une sortie encadrée à la rencontre des dauphins, gilets de sauvetage fournis pour toute la famille. Émerveillement garanti pour les enfants et arrêt baignade dans une eau cristalline.",
        img: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600&h=400&fit=crop&auto=format",
        alt: "Dauphins nageant près d'un bateau dans l'océan Indien",
        align: "left",
      },
      {
        id: "parc-tortues",
        label: "JOUR 4",
        title: "Parc nature et tortues géantes",
        text: "Direction un parc nature familial pour observer les tortues géantes et la faune locale au fil de sentiers ombragés et accessibles aux poussettes. Pique-nique sur place et plein de découvertes à hauteur d'enfant.",
        img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=400&fit=crop&auto=format",
        alt: "Tortue géante dans un parc nature tropical",
        align: "right",
      },
      {
        id: "detente-depart",
        label: "JOURS 5 À 7",
        title: "Détente partagée et départ en douceur",
        text: "Une journée où chacun trouve son bonheur : spa et farniente pour les parents pendant que les enfants enchaînent ateliers et activités du club. Dernières baignades et derniers souvenirs avant le transfert retour, le cœur léger.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
        alt: "Coucher de soleil sur le lagon d'un resort familial à l'Île Maurice",
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
    h2: "Nos voyages en famille un peu plus originaux",
    intro:
      "Envie de marquer les esprits ? Voici des destinations famille qui sortent du club balnéaire et créent des souvenirs pour la vie.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&h=400&fit=crop&auto=format",
        alt: "Paresseux et forêt tropicale luxuriante au Costa Rica",
        tag: "Amériques",
        name: "Costa Rica",
        text: "La nature grandeur nature : paresseux, singes, volcans et plages — un safari tropical qui émerveille les enfants.",
      },
      {
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop&auto=format",
        alt: "Village enneigé et aurores boréales en Laponie",
        tag: "Grand Nord",
        name: "Laponie",
        text: "Le village du Père Noël, les huskies et les aurores boréales : la magie de l'hiver pour de vrai.",
      },
      {
        img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
        alt: "Lac et forêt d'automne dans les Rocheuses canadiennes",
        tag: "Amériques",
        name: "Canada",
        text: "Grands espaces, lacs émeraude et faune sauvage : road-trip nature où petits et grands en prennent plein la vue.",
      },
      {
        img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&h=400&fit=crop&auto=format",
        alt: "Temple traditionnel et cerisiers en fleurs au Japon",
        tag: "Asie",
        name: "Japon",
        text: "Entre temples, robots, parcs Ghibli et trains à grande vitesse : un dépaysement total qui fascine toute la famille.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en famille ?",
    intro:
      "Vacances scolaires obligent, on part souvent à dates fixes. Voici les meilleures destinations selon la période ; votre conseiller affine selon votre calendrier.",
    rows: [
      {
        destination: "Île Maurice",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok"],
      },
      {
        destination: "Espagne (Costa Brava)",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
      {
        destination: "Crète (Grèce)",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
      {
        destination: "Maroc (clubs)",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ideal", "ok"],
      },
      {
        destination: "Floride",
        months: ["ok", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur vos vacances en famille",
    left: [
      {
        question: "Quelles sont les meilleures destinations pour partir en famille ?",
        answer: (
          <p>
            Tout dépend de l&apos;âge des enfants et de vos envies&nbsp;: l&apos;Île
            Maurice, la Crète ou l&apos;Espagne pour des clubs balnéaires au calme,
            le Maroc pour le soleil proche, la Floride pour les parcs à thème, ou
            le Costa Rica et la Laponie pour l&apos;aventure. Votre conseiller vous
            oriente vers la formule idéale pour votre tribu.
          </p>
        ),
      },
      {
        question: "Qu'est-ce qu'un club enfants et à partir de quel âge ?",
        answer: (
          <p>
            Les clubs enfants encadrent les plus jeunes par tranche d&apos;âge
            (souvent dès 3 ou 4 ans, parfois plus tôt avec un mini-club bébé),
            avec des activités adaptées&nbsp;: jeux, sport, mini-disco. Les parents
            profitent ainsi de vrais temps pour souffler.
          </p>
        ),
      },
      {
        question: "Proposez-vous des chambres familiales ou communicantes ?",
        answer: (
          <p>
            Oui&nbsp;: nous sélectionnons des hébergements offrant chambres
            familiales, chambres communicantes ou suites, avec lits bébé et
            services adaptés. De la place pour tout le monde, sans se marcher
            dessus.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Faut-il forcément partir pendant les vacances scolaires ?",
        answer: (
          <p>
            Le plus souvent oui, et la haute saison se réserve tôt pour avoir le
            meilleur choix au meilleur prix. Votre conseiller vous indique les
            périodes idéales par destination et vous aide à anticiper.
          </p>
        ),
      },
      {
        question: "Les vacances en famille reviennent-elles forcément cher ?",
        answer: (
          <p>
            Pas nécessairement&nbsp;: les formules tout compris et les offres
            «&nbsp;enfant gratuit&nbsp;» ou à tarif réduit permettent de maîtriser
            le budget. Nous cherchons le meilleur rapport qualité-prix selon votre
            tribu et vos dates.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis pour un séjour en famille ?",
        answer: (
          <p>
            Indiquez-nous vos dates, votre destination (ou vos envies), ainsi que
            l&apos;âge et le nombre d&apos;enfants. Nous revenons sous 48h avec une
            proposition personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelles sont les meilleures destinations pour partir en famille ?",
        answer:
          "Selon l'âge des enfants : Île Maurice, Crète ou Espagne pour des clubs balnéaires au calme, Maroc pour le soleil proche, Floride pour les parcs à thème, Costa Rica ou Laponie pour l'aventure. Votre conseiller vous oriente vers la formule idéale.",
      },
      {
        question: "Qu'est-ce qu'un club enfants et à partir de quel âge ?",
        answer:
          "Les clubs enfants encadrent les plus jeunes par tranche d'âge (souvent dès 3-4 ans, parfois plus tôt en mini-club bébé) avec des activités adaptées. Les parents profitent ainsi de vrais temps libres.",
      },
      {
        question: "Proposez-vous des chambres familiales ou communicantes ?",
        answer:
          "Oui, nous sélectionnons des hébergements avec chambres familiales, chambres communicantes ou suites, lits bébé et services adaptés, pour de la place sans se marcher dessus.",
      },
      {
        question: "Faut-il forcément partir pendant les vacances scolaires ?",
        answer:
          "Le plus souvent oui : la haute saison se réserve tôt pour le meilleur choix au meilleur prix. Votre conseiller indique les périodes idéales par destination et aide à anticiper.",
      },
      {
        question: "Les vacances en famille reviennent-elles forcément cher ?",
        answer:
          "Pas forcément : les formules tout compris et les offres enfant gratuit ou à tarif réduit aident à maîtriser le budget. Nous cherchons le meilleur rapport qualité-prix selon votre tribu et vos dates.",
      },
      {
        question: "Comment obtenir un devis pour un séjour en famille ?",
        answer:
          "Indiquez vos dates, votre destination ou vos envies, ainsi que l'âge et le nombre d'enfants. Nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Voyager en famille, c&apos;est aussi transmettre&nbsp;: nous privilégions
        des clubs et hébergements engagés, des excursions respectueuses de la
        nature et des rencontres qui éveillent les enfants au monde. Voyager
        mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à partir en vacances avec toute la tribu ?",
    body: "Parlez-nous de vos vacances en famille idéales — destination, dates, âge des enfants, budget — et votre conseiller dédié compose une proposition sur mesure, gratuitement et sans engagement.",
  },
};

export default famille;
