import type { ThemeContent } from "../types";

/**
 * Page thème « Croisière en Méditerranée ». Images : visuels d'escales à valider/remplacer.
 */
const croisiereMediterranee: ThemeContent = {
  slug: "mediterranee",
  parentLabel: "Croisières",
  parentHref: "/croisieres",
  meta: {
    title: "Croisière en Méditerranée sur mesure — Escales de rêve | CTA Voyages",
    description:
      "Embarquez pour une croisière en Méditerranée avec CTA Voyages : escales entre Italie, Grèce, Espagne et Croatie, soleil, patrimoine et confort à bord. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Navire de croisière voguant sur la Méditerranée au coucher du soleil",
    label: "Croisières",
    h1: "Croisière en Méditerranée : le berceau du voyage",
    description:
      "Une mer turquoise, des escales chargées d'histoire et le confort d'un navire qui devient votre hôtel flottant. De l'Italie à la Grèce, de l'Espagne à la Croatie, nous composons l'itinéraire qui vous fera rêver.",
    primaryCtaLabel: "Composer ma croisière",
    secondaryCtaLabel: "Pourquoi la Méditerranée ?",
  },
  presentation: {
    eyebrow: "Le voyage tout compris",
    h2: "Une mer, mille civilisations",
    body: (
      <>
        Réveil face à Santorin, déjeuner sur une terrasse de Dubrovnik, après-midi
        au pied de la Sagrada Família et dîner gastronomique à bord&nbsp;: la
        croisière en Méditerranée, c&apos;est l&apos;art de relier les plus beaux
        rivages d&apos;Europe sans jamais refaire ses valises. Chez CTA Voyages,
        votre conseiller sélectionne la compagnie, le navire et l&apos;itinéraire
        qui vous correspondent — escales emblématiques, cabine idéale et excursions
        triées sur le volet, pour profiter du soleil et du patrimoine sans aucune
        contrainte.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&auto=format",
      alt: "Canaux et gondoles de Venise en Italie",
      badge: "ITALIE",
      name: "Italie",
      desc: "Venise, Rome et la côte amalfitaine : art, dolce vita et patrimoine sans fin.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format",
      alt: "Maisons blanches et dômes bleus de Santorin en Grèce",
      badge: "GRÈCE",
      name: "Grèce",
      desc: "Santorin, Mykonos et les Cyclades : villages blanchis et mer Égée d'azur.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop&auto=format",
      alt: "La Sagrada Família à Barcelone en Espagne",
      badge: "ESPAGNE",
      name: "Espagne",
      desc: "Barcelone, Valence et les Baléares : tapas, plages et architecture vibrante.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
      alt: "Vieille ville fortifiée de Dubrovnik en Croatie",
      badge: "CROATIE",
      name: "Croatie",
      desc: "Dubrovnik, Split et l'Adriatique : remparts dorés et îles à couper le souffle.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&auto=format",
      alt: "Port et bastions baroques de La Valette à Malte",
      badge: "MALTE",
      name: "Malte",
      desc: "La Valette baroque, criques turquoise et 7 000 ans d'histoire au soleil.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
      alt: "Port de Marseille et Notre-Dame de la Garde en Provence",
      badge: "FRANCE",
      name: "Provence",
      desc: "Marseille, les calanques et la Côte d'Azur : lumière du Sud et villages perchés.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir votre croisière en Méditerranée avec CTA Voyages ?",
    cards: [
      {
        icon: "directions_boat",
        title: "Le navire qui vous ressemble",
        text: "Paquebot festif, navire intimiste ou yacht de luxe : nous choisissons le bon bateau et la bonne cabine pour vous.",
        img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
        alt: "Pont supérieur et piscine d'un navire de croisière",
      },
      {
        icon: "anchor",
        title: "Des escales triées sur le volet",
        text: "Italie, Grèce, Espagne, Croatie : nous bâtissons un itinéraire d'escales cohérent, sans temps mort.",
        img: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=600&h=400&fit=crop&auto=format",
        alt: "Petit port méditerranéen aux barques colorées",
      },
      {
        icon: "tour",
        title: "Les bonnes excursions",
        text: "Sites incontournables ou pépites locales : nos conseillers réservent les visites qui valent vraiment le détour.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
        alt: "Le Colisée de Rome, escale emblématique",
      },
      {
        icon: "restaurant",
        title: "Le confort tout compris",
        text: "Pension complète, animations et services à bord : vous profitez, nous gérons la logistique du début à la fin.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Table dressée d'un restaurant gastronomique à bord",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Huit jours d'escales mythiques au départ de Rome",
    intro:
      "De la Ville Éternelle aux Cyclades, six escales emblématiques entre Italie, Grèce et Croatie, au rythme de la Méditerranée.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Embarquement à Civitavecchia (Rome)",
        text: "Transfert vers le port de Civitavecchia et embarquement sur votre navire. Installation en cabine, cocktail de bienvenue et appareillage au coucher du soleil, cap vers le sud de l'Italie.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
        alt: "Le Colisée de Rome au départ de la croisière depuis Civitavecchia",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Escale à Naples & Pompéi",
        text: "Journée napolitaine entre le Vésuve et la baie de Naples. Excursion sur le site antique de Pompéi figé par l'éruption, puis pizza napolitaine sur le port avant de reprendre la mer.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
        alt: "Ruines antiques de Pompéi avec le Vésuve en arrière-plan",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 4",
        title: "Escale à Santorin",
        text: "Après une journée en mer, le navire mouille dans la caldeira de Santorin. Montée vers Oia, ruelles blanchies à la chaux, dômes bleus et l'un des plus beaux couchers de soleil du monde.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format",
        alt: "Maisons blanches et dômes bleus de Santorin surplombant la mer Égée",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 5",
        title: "Escale à Mykonos",
        text: "Cap sur la perle des Cyclades : moulins à vent, Petite Venise et ruelles immaculées. Pause baignade sur une plage turquoise avant l'ambiance festive du port à la nuit tombée.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Moulins à vent et maisons blanches de Mykonos en Grèce",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 7",
        title: "Escale à Dubrovnik",
        text: "Remontée de l'Adriatique jusqu'à la perle de la Croatie. Tour des remparts dorés, ruelles pavées de la vieille ville et panorama sur les toits rouges depuis le téléphérique.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&auto=format",
        alt: "Vieille ville fortifiée de Dubrovnik et ses remparts au bord de l'Adriatique",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 8",
        title: "Retour & débarquement à Civitavecchia",
        text: "Dernière nuit en mer et petit-déjeuner face au lever du soleil avant de retrouver le port de Rome. Débarquement en douceur et transfert, la tête pleine d'escales méditerranéennes.",
        img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop&auto=format",
        alt: "Navire de croisière de retour vers le port au lever du soleil",
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
    h2: "Nos escales confidentielles",
    intro:
      "Envie de sortir des grands ports ? Voici quelques escales méditerranéennes plus rares que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&h=400&fit=crop&auto=format",
        alt: "Calanques et eaux turquoise de Bonifacio en Corse",
        tag: "Corse",
        name: "Bonifacio",
        text: "Falaises de calcaire blanc, citadelle suspendue et criques secrètes de l'île de Beauté.",
      },
      {
        img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&h=400&fit=crop&auto=format",
        alt: "Village blanc de Kotor au bord de la baie au Monténégro",
        tag: "Monténégro",
        name: "Kotor",
        text: "Fjord méditerranéen, remparts vénitiens et montagnes plongeant dans l'Adriatique.",
      },
      {
        img: "https://images.unsplash.com/photo-1567604130959-7ea7ab2a7807?w=600&h=400&fit=crop&auto=format",
        alt: "Maisons colorées des Cinque Terre en Italie",
        tag: "Italie",
        name: "Cinque Terre",
        text: "Cinq villages accrochés à la falaise, vignobles en terrasses et sentiers face à la mer.",
      },
      {
        img: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=600&h=400&fit=crop&auto=format",
        alt: "Port et maisons pastel de Hvar en Croatie",
        tag: "Croatie",
        name: "Hvar",
        text: "Champs de lavande, ruelles baroques et l'une des plus belles îles de l'Adriatique.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en croisière en Méditerranée ?",
    intro:
      "La saison s'étend d'avril à octobre, avec un pic en été. Le printemps et le début d'automne offrent climat doux et escales moins bondées. Votre conseiller affine selon vos dates.",
    rows: [
      {
        destination: "Italie",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Grèce",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Espagne",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Croatie",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Malte",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Provence",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre croisière en Méditerranée",
    left: [
      {
        question: "Combien de temps dure une croisière en Méditerranée ?",
        answer: (
          <p>
            Le plus souvent 7 à 8 nuits, mais on trouve des formats courts de 3 à
            4 nuits comme des grandes boucles de 10 à 14 nuits. Votre conseiller
            adapte la durée et l&apos;itinéraire à vos envies et à votre budget.
          </p>
        ),
      },
      {
        question: "Quelles escales sont incluses ?",
        answer: (
          <p>
            Selon l&apos;itinéraire choisi&nbsp;: Italie, Grèce, Espagne, Croatie,
            Malte ou la Provence figurent parmi les escales les plus prisées. Nous
            bâtissons le parcours qui réunit vos villes de rêve.
          </p>
        ),
      },
      {
        question: "Les repas et activités sont-ils compris à bord ?",
        answer: (
          <p>
            Oui, la pension complète, les animations et la plupart des
            installations sont incluses. Les boissons, le spa et les excursions à
            terre se règlent généralement en supplément&nbsp;; nous vous indiquons
            tout clairement avant le départ.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en croisière en famille ?",
        answer: (
          <p>
            Tout à fait. Nous sélectionnons des navires avec clubs enfants,
            piscines et cabines familiales, ainsi qu&apos;un itinéraire d&apos;escales
            qui plaira à tous les âges.
          </p>
        ),
      },
      {
        question: "Comment se rendre au port d'embarquement ?",
        answer: (
          <p>
            Nous organisons l&apos;ensemble&nbsp;: vols, train ou transferts
            jusqu&apos;au port (Barcelone, Civitavecchia, Marseille, Le Pirée…).
            Vous arrivez l&apos;esprit léger, prêt à embarquer.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous vos envies d&apos;escales, vos dates et le nombre de
            voyageurs&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Combien de temps dure une croisière en Méditerranée ?",
        answer:
          "Le plus souvent 7 à 8 nuits, avec des formats courts de 3 à 4 nuits ou de grandes boucles de 10 à 14 nuits. La durée et l'itinéraire s'adaptent à vos envies et votre budget.",
      },
      {
        question: "Quelles escales sont incluses dans une croisière en Méditerranée ?",
        answer:
          "Selon l'itinéraire : Italie, Grèce, Espagne, Croatie, Malte ou la Provence figurent parmi les escales les plus prisées. Nous bâtissons le parcours qui réunit vos villes de rêve.",
      },
      {
        question: "Les repas et activités sont-ils compris à bord ?",
        answer:
          "Oui, la pension complète et les animations sont incluses. Les boissons, le spa et les excursions à terre sont généralement en supplément, indiqués clairement avant le départ.",
      },
      {
        question: "Peut-on partir en croisière en Méditerranée en famille ?",
        answer:
          "Oui, avec des navires dotés de clubs enfants, piscines et cabines familiales, et un itinéraire d'escales adapté à tous les âges.",
      },
      {
        question: "Comment se rendre au port d'embarquement ?",
        answer:
          "Nous organisons vols, train ou transferts jusqu'au port (Barcelone, Civitavecchia, Marseille, Le Pirée…) pour que vous arriviez l'esprit léger.",
      },
      {
        question: "Comment obtenir un devis pour une croisière en Méditerranée ?",
        answer:
          "Indiquez vos envies d'escales, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        La croisière aussi peut se faire mieux&nbsp;: nous privilégions les
        compagnies les plus engagées (carburants propres, gestion des déchets),
        les excursions à taille humaine et les acteurs locaux dans chaque escale.
        Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à larguer les amarres en Méditerranée ?",
    body: "Dites-nous quelles escales vous font rêver — dates, durée, budget — et votre conseiller dédié compose votre croisière sur mesure, gratuitement et sans engagement.",
  },
};

export default croisiereMediterranee;
