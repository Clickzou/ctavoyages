import type { ThemeContent } from "../types";

/**
 * Page thème « Voyage en famille sur mesure ». Images Unsplash à valider/remplacer.
 */
const vsmFamille: ThemeContent = {
  slug: "famille",
  parentLabel: "Voyage sur mesure",
  parentHref: "/voyage-sur-mesure",
  meta: {
    title: "Voyage en famille sur mesure — Itinéraire adapté aux enfants | CTA Voyages",
    description:
      "Organisez votre voyage en famille avec CTA Voyages : itinéraire 100% personnalisé selon l'âge des enfants, rythme adapté, activités pour tous et organisation clé en main. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Famille avec enfants marchant sur une plage au coucher du soleil",
    label: "Voyage en famille",
    h1: "Voyage en famille : un itinéraire pensé pour chacun",
    description:
      "Des plus petits aux ados, nous composons un voyage où chaque âge trouve son bonheur : rythme adapté, activités partagées et logistique entièrement gérée. À vous les souvenirs, à nous l'organisation.",
    primaryCtaLabel: "Composer notre voyage en famille",
    secondaryCtaLabel: "Pourquoi partir en famille avec nous ?",
  },
  presentation: {
    eyebrow: "Le voyage qui rassemble",
    h2: "Un itinéraire à la hauteur de toute la tribu",
    body: (
      <>
        Une matinée à la plage, un atelier qui passionne les enfants, une sieste
        pour les plus petits et une belle table le soir venu&nbsp;: le voyage en
        famille réussi, c&apos;est l&apos;équilibre. Chez CTA Voyages, votre
        conseiller construit un itinéraire 100&nbsp;% personnalisé selon
        l&apos;âge de vos enfants — distances raisonnables, hébergements adaptés
        et activités qui plaisent à tous. Vous profitez de chaque instant, sans
        jamais penser à la logistique.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=400&fit=crop&auto=format",
      alt: "Lagon turquoise et plage de l'île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Lagon calme, hôtels avec kids clubs et nature douce pour les petits.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=600&h=400&fit=crop&auto=format",
      alt: "Ruelle ensoleillée d'un village d'Espagne",
      badge: "EUROPE",
      name: "Espagne",
      desc: "Plages familiales, parcs à thème et tapas pour les gourmands.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&auto=format",
      alt: "Canal de Venise avec gondoles en Italie",
      badge: "EUROPE",
      name: "Italie",
      desc: "Gelato, cités d'histoire vivantes et collines douces à explorer.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
      alt: "Plage et eaux cristallines de Crète en Grèce",
      badge: "EUROPE",
      name: "Crète",
      desc: "Criques peu profondes, ruines amusantes et accueil chaleureux.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&h=400&fit=crop&auto=format",
      alt: "Place colorée et marché animé au Maroc",
      badge: "AFRIQUE",
      name: "Maroc",
      desc: "Riads conviviaux, balade à dos de dromadaire et dunes féeriques.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&h=400&fit=crop&auto=format",
      alt: "Plage de Miami Beach en Floride sous le soleil",
      badge: "AMÉRIQUES",
      name: "Floride",
      desc: "Parcs d'attractions mythiques, plages et nature des Everglades.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi organiser votre voyage en famille avec CTA Voyages ?",
    cards: [
      {
        icon: "family_restroom",
        title: "Un itinéraire selon l'âge",
        text: "Bébés, enfants ou ados : nous adaptons étapes, distances et activités à chaque membre de la famille.",
        img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop&auto=format",
        alt: "Parents et enfants profitant d'un moment en plein air",
      },
      {
        icon: "schedule",
        title: "Un rythme tout en douceur",
        text: "Journées équilibrées, temps de repos et marges pour les imprévus : un voyage serein, sans course.",
        img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=400&fit=crop&auto=format",
        alt: "Enfant détendu en train de jouer pendant les vacances",
      },
      {
        icon: "interests",
        title: "Des activités pour tous",
        text: "Plage, ateliers, nature ou culture : un programme où petits et grands trouvent leur plaisir.",
        img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop&auto=format",
        alt: "Famille randonnant ensemble dans la nature",
      },
      {
        icon: "verified_user",
        title: "L'esprit tranquille",
        text: "Hébergements adaptés, transferts et assistance 24/7 : nous gérons tout pour votre sérénité.",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format",
        alt: "Hôtel familial avec piscine au soleil",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "12 jours en Italie en famille, de Rome à la côte napolitaine",
    intro:
      "Douze jours pensés pour les enfants : histoire vivante, ateliers ludiques, ferme en Toscane et journées plage, sans jamais courir.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 3",
        title: "Rome antique, version ludique",
        text: "Découverte de la Ville éternelle au rythme des enfants : visite costumée du Colisée, jeu de piste au Forum, glaces sur les places et soirée pâtes en terrasse. L'Histoire devient un terrain de jeu.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
        alt: "Le Colisée de Rome sous le soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOURS 4 À 5",
        title: "Florence & les sciences",
        text: "Cap sur la Toscane : musée Galilée et ses instruments, ateliers d'art pour les petites mains, montée au Duomo et chasse aux fresques. Une ville-musée qui se vit en s'amusant.",
        img: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=600&h=400&fit=crop&auto=format",
        alt: "Vue du Duomo et des toits de Florence",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 6 À 7",
        title: "La Toscane à la ferme",
        text: "Pause nature dans un agriturismo entre collines et vignes : soin des animaux, fabrication de pâtes fraîches, baignade à la piscine et longues siestes. Le rythme idéal pour souffler en famille.",
        img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&auto=format",
        alt: "Collines vallonnées et ferme de Toscane",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 8",
        title: "Pise et sa tour penchée",
        text: "Sur la route vers la côte, halte incontournable à Pise : photos rigolotes pour « retenir » la tour penchée, balade sur la Piazza dei Miracoli et déjeuner au soleil avant de reprendre la route.",
        img: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=600&h=400&fit=crop&auto=format",
        alt: "Tour penchée de Pise sur la Piazza dei Miracoli",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 9 À 10",
        title: "Côte & plage",
        text: "Deux journées les pieds dans l'eau sur le littoral tyrrhénien : baignades, châteaux de sable, balades en bord de mer et soirées pizza face au coucher de soleil. Le farniente que tout le monde mérite.",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de la côte italienne et eaux turquoise",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 11 À 12",
        title: "Naples & Pompéi",
        text: "Grand final au sud : exploration de la cité figée de Pompéi comme un livre d'Histoire grandeur nature, panorama sur le Vésuve et dégustation de la vraie pizza napolitaine avant le retour.",
        img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&h=400&fit=crop&auto=format",
        alt: "Ruines de Pompéi avec le Vésuve en arrière-plan",
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
    h2: "Nos voyages en famille originaux",
    intro:
      "Envie de sortir des classiques ? Voici quelques destinations familiales que nos conseillers adorent recommander.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&h=400&fit=crop&auto=format",
        alt: "Paysage volcanique et geyser en Islande",
        tag: "Nature",
        name: "Islande",
        text: "Geysers, cascades et baleines : un terrain de jeu grandeur nature qui émerveille les enfants.",
      },
      {
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
        alt: "Fjords et montagnes verdoyantes de Norvège",
        tag: "Scandinavie",
        name: "Norvège",
        text: "Fjords spectaculaires, trains panoramiques et villages de conte pour toute la tribu.",
      },
      {
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
        alt: "Éléphants dans un parc national au Sri Lanka",
        tag: "Asie",
        name: "Sri Lanka",
        text: "Safaris d'éléphants, plages tranquilles et trains pittoresques au cœur des plantations de thé.",
      },
      {
        img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=600&h=400&fit=crop&auto=format",
        alt: "Fermes et collines vallonnées du Costa Rica",
        tag: "Amérique centrale",
        name: "Costa Rica",
        text: "Forêts tropicales, paresseux et ponts suspendus : l'aventure douce et la faune à portée de main.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en famille ?",
    intro:
      "Vacances scolaires, climat et affluence : votre conseiller cale les dates idéales selon votre destination et le calendrier de l'école.",
    rows: [
      {
        destination: "Île Maurice",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Espagne",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Italie",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Crète",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Maroc",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Floride",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre voyage en famille",
    left: [
      {
        question: "Comment adaptez-vous le voyage à l'âge des enfants ?",
        answer: (
          <p>
            Votre conseiller part de l&apos;âge et du rythme de chacun&nbsp;:
            distances raisonnables, temps de repos, hébergements avec espace et
            activités choisies pour plaire aussi bien aux petits qu&apos;aux
            ados. L&apos;itinéraire est entièrement personnalisé.
          </p>
        ),
      },
      {
        question: "Quelles destinations pour un premier voyage en famille ?",
        answer: (
          <p>
            L&apos;île Maurice, l&apos;Espagne, l&apos;Italie ou la Crète sont
            des valeurs sûres&nbsp;: faciles d&apos;accès, sécurisantes et
            riches en activités pour tous les âges.
          </p>
        ),
      },
      {
        question: "Peut-on voyager avec un bébé ou un tout-petit ?",
        answer: (
          <p>
            Bien sûr. Nous privilégions des vols et trajets courts, des
            hébergements équipés (lit bébé, kitchenette) et un programme tout en
            douceur, avec des marges pour les imprévus.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Les activités sont-elles incluses dans le devis ?",
        answer: (
          <p>
            Oui, nous composons un forfait complet&nbsp;: vols, hébergements,
            transferts et activités sélectionnées pour la famille. Vous pouvez
            ajouter ou retirer des expériences à votre guise.
          </p>
        ),
      },
      {
        question: "Que se passe-t-il en cas d'imprévu sur place ?",
        answer: (
          <p>
            Vous bénéficiez d&apos;une assistance 24/7 et d&apos;un conseiller
            dédié, joignable à tout moment. En cas de souci avec un enfant ou un
            transport, nous réorganisons pour vous immédiatement.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous l&apos;âge de vos enfants, vos dates et vos
            envies&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Comment adaptez-vous le voyage à l'âge des enfants ?",
        answer:
          "Votre conseiller part de l'âge et du rythme de chacun : distances raisonnables, temps de repos, hébergements adaptés et activités choisies pour plaire des petits aux ados. L'itinéraire est entièrement personnalisé.",
      },
      {
        question: "Quelles destinations pour un premier voyage en famille ?",
        answer:
          "L'île Maurice, l'Espagne, l'Italie ou la Crète sont des valeurs sûres : faciles d'accès, sécurisantes et riches en activités pour tous les âges.",
      },
      {
        question: "Peut-on voyager avec un bébé ou un tout-petit ?",
        answer:
          "Oui : nous privilégions des trajets courts, des hébergements équipés (lit bébé, kitchenette) et un programme tout en douceur avec des marges pour les imprévus.",
      },
      {
        question: "Les activités sont-elles incluses dans le devis ?",
        answer:
          "Oui, nous composons un forfait complet : vols, hébergements, transferts et activités sélectionnées pour la famille, modulables selon vos envies.",
      },
      {
        question: "Que se passe-t-il en cas d'imprévu sur place ?",
        answer:
          "Vous bénéficiez d'une assistance 24/7 et d'un conseiller dédié joignable à tout moment, qui réorganise immédiatement en cas de souci.",
      },
      {
        question: "Comment obtenir un devis pour un voyage en famille ?",
        answer:
          "Indiquez l'âge de vos enfants, vos dates et vos envies : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Partir en famille, c&apos;est aussi transmettre&nbsp;: nous privilégions
        des hébergements engagés, des activités respectueuses de la nature et
        des rencontres avec les acteurs locaux, pour des souvenirs qui ont du
        sens. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêts à offrir un grand voyage à toute la famille ?",
    body: "Dites-nous l'âge de vos enfants, vos dates et vos envies — votre conseiller dédié compose un itinéraire sur mesure, clé en main, gratuitement et sans engagement.",
  },
};

export default vsmFamille;
