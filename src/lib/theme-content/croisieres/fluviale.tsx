import type { ThemeContent } from "../types";

/**
 * Page thème « Croisière fluviale ». Images : visuels de fleuves à valider/remplacer.
 */
const croisiereFluviale: ThemeContent = {
  slug: "fluviale",
  parentLabel: "Croisières",
  parentHref: "/croisieres",
  meta: {
    title: "Croisière fluviale sur mesure — Au fil de l'eau au cœur des terres | CTA Voyages",
    description:
      "Organisez votre croisière fluviale avec CTA Voyages : Nil, Danube, Rhin, Douro, Mékong ou Seine. Bateau à taille humaine, escales culturelles quotidiennes, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Bateau de croisière fluviale voguant le long d'un fleuve au coucher du soleil",
    label: "Croisière fluviale",
    h1: "Croisière fluviale : voguer au fil de l'eau, au cœur des terres",
    description:
      "Le confort d'un bateau à taille humaine, une nouvelle escale chaque jour et le paysage qui défile en douceur depuis votre cabine. Nous composons la croisière fluviale qui vous ressemble, du Nil au Mékong.",
    primaryCtaLabel: "Composer ma croisière fluviale",
    secondaryCtaLabel: "Pourquoi la croisière fluviale ?",
  },
  presentation: {
    eyebrow: "Le voyage au rythme du courant",
    h2: "Le cœur d'un pays se découvre par ses fleuves",
    body: (
      <>
        Un château au détour d&apos;un méandre, un village viticole le matin, une
        ville d&apos;art l&apos;après-midi&nbsp;: la croisière fluviale, c&apos;est
        l&apos;art de pénétrer au cœur des terres sans jamais refaire ses valises.
        À bord d&apos;un bateau à taille humaine, le paysage défile au fil de
        l&apos;eau et chaque journée apporte une escale nouvelle. Chez CTA Voyages,
        votre conseiller sélectionne le fleuve, la compagnie et la cabine idéale —
        pour un voyage paisible, cultivé et confortable, sans temps mort.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&h=400&fit=crop&auto=format",
      alt: "Felouques et bateaux sur le Nil en Égypte",
      badge: "ÉGYPTE",
      name: "Le Nil",
      desc: "Temples millénaires, vallée des Rois et felouques au fil du fleuve des pharaons.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&h=400&fit=crop&auto=format",
      alt: "Le Danube traversant Budapest illuminée",
      badge: "EUROPE",
      name: "Le Danube",
      desc: "Vienne, Budapest et Bratislava : capitales impériales reliées par le grand fleuve bleu.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&auto=format",
      alt: "Châteaux et vignobles le long du Rhin romantique",
      badge: "EUROPE",
      name: "Le Rhin",
      desc: "Vignobles en terrasses, châteaux perchés et villages de carte postale.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
      alt: "La vallée du Douro et ses terrasses viticoles au Portugal",
      badge: "PORTUGAL",
      name: "Le Douro",
      desc: "Coteaux de vignes en escaliers, quintas de porto et villages dorés du nord lusitanien.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format",
      alt: "Marché flottant et barques sur le delta du Mékong",
      badge: "ASIE",
      name: "Le Mékong",
      desc: "Marchés flottants, rizières et temples entre Vietnam et Cambodge.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&h=400&fit=crop&auto=format",
      alt: "Péniche sur la Seine devant les monuments de Paris",
      badge: "FRANCE",
      name: "La Loire & la Seine",
      desc: "Châteaux de la Loire, falaises de Normandie et patrimoine des fleuves français.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une croisière fluviale avec CTA Voyages ?",
    cards: [
      {
        icon: "directions_boat",
        title: "Un bateau à taille humaine",
        text: "Cabines confortables, ambiance intimiste et service attentionné : loin des géants des mers, on se sent vite chez soi.",
        img: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&h=400&fit=crop&auto=format",
        alt: "Cabine élégante d'un bateau de croisière fluviale",
      },
      {
        icon: "place",
        title: "Une escale chaque jour",
        text: "Le bateau accoste au cœur des villes : vous débarquez à pied pour visiter, sans transferts interminables.",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&auto=format",
        alt: "Village au bord d'un fleuve, escale de croisière",
      },
      {
        icon: "museum",
        title: "La culture au programme",
        text: "Visites guidées, sites historiques et excursions thématiques : un voyage qui nourrit la curiosité.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop&auto=format",
        alt: "Temple égyptien lors d'une excursion sur le Nil",
      },
      {
        icon: "restaurant",
        title: "Pension complète à bord",
        text: "Cuisine soignée aux saveurs régionales, vins locaux et dîners face au paysage qui défile.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Dîner gastronomique servi à bord d'un bateau",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Huit jours sur le Nil, de Louxor à Abou Simbel",
    intro:
      "Une croisière de 8 jours au fil du fleuve des pharaons, de temple en temple, jusqu'aux colosses d'Abou Simbel.",
    steps: [
      {
        id: "s1",
        label: "ESCALE 1",
        title: "Louxor & la rive de Karnak",
        text: "Embarquement à Louxor, l'antique Thèbes. Première visite de l'immense temple de Karnak et de son allée de sphinx, puis du temple de Louxor illuminé à la tombée du jour.",
        img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&h=400&fit=crop&auto=format",
        alt: "Felouques et temples au bord du Nil à Louxor",
        align: "left",
      },
      {
        id: "s2",
        label: "ESCALE 2",
        title: "Karnak & la vallée des Rois",
        text: "Traversée vers la rive ouest : la vallée des Rois et ses tombeaux peints, le temple de Hatchepsout et les colosses de Memnon, avant de reprendre le fil du fleuve vers le sud.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop&auto=format",
        alt: "Colonnes du temple de Karnak en Égypte",
        align: "right",
      },
      {
        id: "s3",
        label: "ESCALE 3",
        title: "Edfou & le temple d'Horus",
        text: "Navigation paisible jusqu'à Edfou, où une calèche vous mène au temple d'Horus, l'un des mieux conservés d'Égypte. Le bateau poursuit ensuite vers Kom Ombo.",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&h=400&fit=crop&auto=format",
        alt: "Temple d'Horus à Edfou au bord du Nil",
        align: "left",
      },
      {
        id: "s4",
        label: "ESCALE 4",
        title: "Kom Ombo, temple double",
        text: "Escale au temple de Kom Ombo, dédié à Sobek le crocodile et à Horus, posé au bord de l'eau. Coucher de soleil sur le Nil depuis le pont supérieur du bateau.",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&h=400&fit=crop&auto=format",
        alt: "Temple de Kom Ombo au crépuscule sur les rives du Nil",
        align: "right",
      },
      {
        id: "s5",
        label: "ESCALE 5",
        title: "Assouan & ses îles",
        text: "Arrivée à Assouan, la plus nubienne des villes égyptiennes : balade en felouque autour de l'île Éléphantine, jardins botaniques et temple de Philae sur son île.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop&auto=format",
        alt: "Felouques à voile blanche sur le Nil à Assouan",
        align: "left",
      },
      {
        id: "s6",
        label: "ESCALE 6",
        title: "Abou Simbel & départ",
        text: "Excursion vers les temples colossaux d'Abou Simbel, taillés par Ramsès II et sauvés des eaux du barrage. Dernier regard sur le fleuve avant le transfert et le retour.",
        img: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=400&fit=crop&auto=format",
        alt: "Statues colossales du temple d'Abou Simbel en Égypte",
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
    h2: "Nos croisières fluviales confidentielles",
    intro:
      "Envie d'un fleuve moins couru ? Voici quelques croisières originales que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1544085311-11a028465b03?w=600&h=400&fit=crop&auto=format",
        alt: "Bateau sur l'Irrawaddy en Birmanie au lever du jour",
        tag: "Birmanie",
        name: "L'Irrawaddy",
        text: "La Birmanie secrète : pagodes dorées de Bagan et villages au fil du fleuve mythique.",
      },
      {
        img: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=600&h=400&fit=crop&auto=format",
        alt: "Forêt inondée et reflets sur l'Amazone",
        tag: "Amérique du Sud",
        name: "L'Amazone",
        text: "Au cœur de la forêt : faune luxuriante, villages riverains et nuits sous la canopée.",
      },
      {
        img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&h=400&fit=crop&auto=format",
        alt: "Voilier sur le Gange en Inde au crépuscule",
        tag: "Inde",
        name: "Le Gange",
        text: "L'Inde sacrée : ghats de Varanasi, temples et spiritualité au rythme du fleuve.",
      },
      {
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Péniche traversant le canal du Midi sous les platanes",
        tag: "France",
        name: "Le Canal du Midi",
        text: "L'art de vivre du Sud-Ouest : écluses ombragées, vignobles et villages occitans.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en croisière fluviale ?",
    intro:
      "Chaque fleuve a sa saison idéale, entre niveau des eaux et climat. Votre conseiller affine selon vos dates et vos envies.",
    rows: [
      {
        destination: "Le Nil (Égypte)",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Le Danube",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Le Rhin",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Le Douro",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Le Mékong",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ok", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre croisière fluviale",
    left: [
      {
        question: "Quelle est la différence avec une croisière maritime ?",
        answer: (
          <p>
            La croisière fluviale navigue sur les fleuves et rivières, au cœur des
            terres&nbsp;: bateaux à taille humaine (souvent moins de 200
            passagers), escales quotidiennes en centre-ville et navigation paisible,
            sans mal de mer.
          </p>
        ),
      },
      {
        question: "Combien de temps dure une croisière fluviale ?",
        answer: (
          <p>
            En général de 5 à 8 nuits en Europe, et jusqu&apos;à 10-15 nuits pour le
            Nil ou le Mékong. Votre conseiller adapte la durée à l&apos;itinéraire et
            à vos envies.
          </p>
        ),
      },
      {
        question: "Les excursions sont-elles incluses ?",
        answer: (
          <p>
            Selon la formule&nbsp;: la plupart des compagnies incluent les visites
            guidées principales. Nous précisons toujours ce qui est compris et
            pouvons ajouter des excursions optionnelles.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "La pension est-elle complète à bord ?",
        answer: (
          <p>
            Oui, la plupart des croisières fluviales sont en pension complète, souvent
            avec boissons aux repas. Cuisine régionale soignée et dîners face au
            paysage sont au rendez-vous.
          </p>
        ),
      },
      {
        question: "Une croisière fluviale convient-elle à tous ?",
        answer: (
          <p>
            Tout à fait&nbsp;: rythme doux, faibles distances à pied et confort à bord
            la rendent idéale pour les couples comme pour les voyageurs souhaitant un
            séjour reposant. Certaines croisières conviennent aussi aux familles.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous le fleuve (ou vos envies), vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la différence entre croisière fluviale et maritime ?",
        answer:
          "La croisière fluviale navigue sur les fleuves au cœur des terres, avec des bateaux à taille humaine, des escales quotidiennes en centre-ville et une navigation paisible sans mal de mer.",
      },
      {
        question: "Combien de temps dure une croisière fluviale ?",
        answer:
          "En général de 5 à 8 nuits en Europe, et jusqu'à 10 à 15 nuits pour le Nil ou le Mékong. La durée s'adapte à l'itinéraire et à vos envies.",
      },
      {
        question: "Les excursions sont-elles incluses dans une croisière fluviale ?",
        answer:
          "La plupart des compagnies incluent les visites guidées principales. Nous précisons toujours ce qui est compris et pouvons ajouter des excursions optionnelles.",
      },
      {
        question: "La pension est-elle complète à bord ?",
        answer:
          "Oui, la plupart des croisières fluviales sont en pension complète, souvent boissons aux repas incluses, avec une cuisine régionale soignée.",
      },
      {
        question: "Une croisière fluviale convient-elle à tous ?",
        answer:
          "Oui : rythme doux, faibles distances à pied et confort à bord la rendent idéale pour les couples comme pour les voyageurs en quête de repos, et certaines conviennent aux familles.",
      },
      {
        question: "Comment obtenir un devis pour une croisière fluviale ?",
        answer:
          "Indiquez le fleuve, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        La navigation fluviale compte parmi les façons les plus douces de
        voyager&nbsp;: nous privilégions les compagnies engagées, les escales à pied
        au cœur des villes et les acteurs locaux rencontrés en chemin. Voyager mieux,
        pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à larguer les amarres au fil de l'eau ?",
    body: "Dites-nous quel fleuve vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre croisière fluviale sur mesure, gratuitement et sans engagement.",
  },
};

export default croisiereFluviale;
