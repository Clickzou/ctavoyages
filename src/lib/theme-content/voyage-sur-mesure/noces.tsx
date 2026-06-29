import type { ThemeContent } from "../types";

/**
 * Page thème « Voyage de noces & en couple ». Images : visuels romantiques à valider/remplacer.
 */
const vsmNoces: ThemeContent = {
  slug: "noces",
  parentLabel: "Voyage sur mesure",
  parentHref: "/voyage-sur-mesure",
  meta: {
    title: "Voyage de noces & en couple sur mesure — Lune de miel d'exception | CTA Voyages",
    description:
      "Composez votre voyage de noces ou votre parenthèse romantique avec CTA Voyages : adresses d'exception, attentions personnalisées et moments inoubliables à deux. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Couple admirant un coucher de soleil sur une plage paradisiaque",
    label: "Voyage de noces & en couple",
    h1: "Voyage de noces : le plus beau des voyages à deux",
    description:
      "Lune de miel ou simple parenthèse romantique, nous composons un voyage qui célèbre votre histoire : adresses d'exception, attentions sur mesure et moments rien qu'à vous, loin du quotidien.",
    primaryCtaLabel: "Composer notre voyage de noces",
    secondaryCtaLabel: "Pourquoi nous faire confiance ?",
  },
  presentation: {
    eyebrow: "Le voyage d'une vie",
    h2: "Un voyage à la hauteur de votre amour",
    body: (
      <>
        Un dîner les pieds dans le sable, un réveil face au lagon, une attention
        glissée dans la chambre le soir de votre arrivée&nbsp;: le voyage de
        noces, c&apos;est l&apos;art de transformer chaque instant en souvenir.
        Chez CTA Voyages, votre conseiller imagine avec vous une lune de miel
        cousue main — hôtels d&apos;exception, expériences romantiques et petites
        surprises orchestrées en coulisses — pour que vous n&apos;ayez qu&apos;à
        savourer ce moment à deux.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
      alt: "Villa sur pilotis au-dessus du lagon turquoise des Maldives",
      badge: "OCÉAN INDIEN",
      name: "Maldives",
      desc: "Villas sur pilotis, lagon turquoise et dîners privés sur le sable.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format",
      alt: "Maisons blanches et dômes bleus de Santorin au coucher du soleil",
      badge: "EUROPE",
      name: "Santorin",
      desc: "Couchers de soleil sur la caldeira, suites troglodytes et romantisme grec.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&auto=format",
      alt: "Rizières en terrasses et temple à Bali",
      badge: "ASIE",
      name: "Bali",
      desc: "Rizières, villas avec piscine privée et spa balinais à deux.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=400&fit=crop&auto=format",
      alt: "Plage bordée de cocotiers à l'île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Plages de rêve, lagons protégés et resorts pensés pour les amoureux.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&h=400&fit=crop&auto=format",
      alt: "Bungalows sur l'eau et montagnes de Polynésie française",
      badge: "PACIFIQUE",
      name: "Polynésie",
      desc: "Bora Bora, lagons cristallins et farés sur pilotis face au mont Otemanu.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&auto=format",
      alt: "Gondole sur le Grand Canal de Venise au crépuscule",
      badge: "EUROPE",
      name: "Venise",
      desc: "Balades en gondole, palais romantiques et dîners au bord des canaux.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi confier votre voyage de noces à CTA Voyages ?",
    cards: [
      {
        icon: "favorite",
        title: "Des attentions personnalisées",
        text: "Pétales de fleurs, dîner privé, surclassement : nous orchestrons les petites surprises qui font la différence.",
        img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&auto=format",
        alt: "Chambre romantique décorée de pétales de roses",
      },
      {
        icon: "diamond",
        title: "Des adresses d'exception",
        text: "Resorts intimistes, villas privées et hôtels de charme sélectionnés pour leur cadre et leur service.",
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format",
        alt: "Suite d'hôtel de luxe avec vue sur la mer",
      },
      {
        icon: "support_agent",
        title: "Un conseiller dédié",
        text: "Un interlocuteur unique qui connaît vos envies et veille sur chaque détail, avant et pendant le voyage.",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
        alt: "Conseiller en voyages accueillant un couple",
      },
      {
        icon: "celebration",
        title: "Des expériences inoubliables",
        text: "Survol en hydravion, dîner sur la plage, spa à deux : nous composons des moments rares, rien que pour vous.",
        img: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600&h=400&fit=crop&auto=format",
        alt: "Dîner romantique dressé sur une plage au coucher du soleil",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Dix nuits en amoureux : safari en Tanzanie & plages de Zanzibar",
    intro:
      "Une lune de miel d'exception qui marie l'émotion du safari romantique dans le Serengeti à la douceur des plages de l'océan Indien.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 2",
        title: "Arrivée & lodge romantique",
        text: "Accueil à l'aéroport du Kilimandjaro et transfert vers votre lodge de charme. Première nuit cocooning, dîner aux chandelles sous les étoiles d'Afrique et repos avant l'aventure.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
        alt: "Lodge de safari romantique au coucher du soleil dans la savane africaine",
        align: "left",
      },
      {
        id: "s2",
        label: "JOURS 3 À 5",
        title: "Safari romantique dans le Serengeti",
        text: "Trois jours d'émerveillement à deux : safaris en 4x4 au cœur des grandes plaines, rencontres avec les Big Five et nuits sous une tente de luxe bercées par les bruits de la brousse.",
        img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&h=400&fit=crop&auto=format",
        alt: "Éléphants traversant les plaines du Serengeti au lever du jour",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 6",
        title: "Envol vers Zanzibar",
        text: "Vol panoramique vers l'île aux épices. Changement de décor : aux plaines dorées succèdent le sable blanc et les eaux turquoise. Transfert vers votre villa front de mer pour la suite de votre voyage.",
        img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et eaux turquoise de Zanzibar bordée de cocotiers",
        align: "left",
      },
      {
        id: "s4",
        label: "JOURS 7 À 9",
        title: "Villa front de mer & farniente",
        text: "Trois journées rien qu'à vous dans une villa les pieds dans l'eau : baignades dans le lagon, massage à deux face à l'océan et dîners privés sur le sable au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
        alt: "Villa de luxe front de mer au-dessus d'un lagon turquoise",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 10",
        title: "Épices & Stone Town",
        text: "Avant le départ, escapade dans une plantation d'épices puis flânerie main dans la main dans les ruelles de Stone Town, classée à l'UNESCO. Une dernière émotion à partager avant le retour.",
        img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
        alt: "Ruelle historique et porte sculptée de Stone Town à Zanzibar",
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
    h2: "Nos lunes de miel confidentielles",
    intro:
      "Envie d'une destination moins courue pour votre voyage de noces ? Voici quelques parenthèses romantiques que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&h=400&fit=crop&auto=format",
        alt: "Lagons et plages préservées des Seychelles",
        tag: "Océan Indien",
        name: "Seychelles",
        text: "Granit rose, plages désertes et nature préservée pour une intimité totale.",
      },
      {
        img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&h=400&fit=crop&auto=format",
        alt: "Tente de luxe dans la savane africaine au coucher du soleil",
        tag: "Afrique",
        name: "Safari & plage",
        text: "Tanzanie ou Kenya : safari romantique puis farniente à Zanzibar.",
      },
      {
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&auto=format",
        alt: "Aurore boréale au-dessus d'un paysage enneigé en Laponie",
        tag: "Grand Nord",
        name: "Laponie",
        text: "Bulles de verre sous les aurores boréales et nuits magiques à deux.",
      },
      {
        img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et eau turquoise dans les Caraïbes",
        tag: "Caraïbes",
        name: "Sainte-Lucie",
        text: "Pitons volcaniques, criques cachées et lodges perchés sur la jungle.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en voyage de noces ?",
    intro:
      "Chaque destination a sa saison idéale, à l'abri de la pluie et des foules. Votre conseiller affine selon vos dates et votre budget.",
    rows: [
      {
        destination: "Maldives",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ok", "ideal", "ideal"],
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
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Polynésie",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Venise",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre voyage de noces",
    left: [
      {
        question: "Quand réserver son voyage de noces ?",
        answer: (
          <p>
            Idéalement 6 à 9 mois avant le départ, surtout pour les destinations
            lointaines en haute saison. Cela garantit les plus belles chambres et
            les meilleurs tarifs. Votre conseiller s&apos;adapte aussi aux départs
            de dernière minute.
          </p>
        ),
      },
      {
        question: "Faut-il partir juste après le mariage ?",
        answer: (
          <p>
            Pas du tout&nbsp;: de plus en plus de couples décalent leur lune de
            miel de quelques semaines, voire quelques mois, pour souffler et
            profiter pleinement. Nous composons votre voyage aux dates qui vous
            arrangent.
          </p>
        ),
      },
      {
        question: "Quelles destinations pour un premier voyage à deux ?",
        answer: (
          <p>
            Les Maldives, l&apos;île Maurice, Bali ou Santorin sont des valeurs
            sûres&nbsp;: cadre idyllique, services pensés pour les amoureux et
            accès facile pour profiter dès l&apos;arrivée.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Bénéficie-t-on d'avantages « jeunes mariés » ?",
        answer: (
          <p>
            Souvent oui&nbsp;: surclassement, bouteille de champagne, dîner ou soin
            offerts. Nous signalons votre lune de miel aux hôtels partenaires pour
            maximiser ces attentions, sur présentation de votre acte de mariage.
          </p>
        ),
      },
      {
        question: "Peut-on combiner plusieurs étapes ?",
        answer: (
          <p>
            Bien sûr&nbsp;: un combiné « ville + plage » ou « safari + océan » est
            idéal pour varier les plaisirs. Votre conseiller organise les vols
            internes et les transferts pour un voyage fluide.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous vos envies, vos dates et le nombre de voyageurs&nbsp;:
            nous revenons sous 48h avec une proposition personnalisée, gratuitement
            et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quand réserver son voyage de noces ?",
        answer:
          "Idéalement 6 à 9 mois avant le départ, surtout pour les destinations lointaines en haute saison, afin de garantir les plus belles chambres et les meilleurs tarifs. Les départs de dernière minute restent possibles.",
      },
      {
        question: "Faut-il partir juste après le mariage ?",
        answer:
          "Non, de nombreux couples décalent leur lune de miel de quelques semaines ou mois pour souffler. Nous composons le voyage aux dates qui vous arrangent.",
      },
      {
        question: "Quelles destinations pour un premier voyage de noces ?",
        answer:
          "Les Maldives, l'île Maurice, Bali ou Santorin sont des valeurs sûres : cadre idyllique, services pensés pour les amoureux et accès facile.",
      },
      {
        question: "Bénéficie-t-on d'avantages jeunes mariés ?",
        answer:
          "Souvent oui : surclassement, champagne, dîner ou soin offerts. Nous signalons votre lune de miel aux hôtels partenaires, sur présentation de votre acte de mariage.",
      },
      {
        question: "Peut-on combiner plusieurs étapes lors d'un voyage de noces ?",
        answer:
          "Oui, un combiné ville + plage ou safari + océan permet de varier les plaisirs. Votre conseiller organise vols internes et transferts pour un voyage fluide.",
      },
      {
        question: "Comment obtenir un devis pour un voyage de noces ?",
        answer:
          "Indiquez vos envies, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Célébrer son amour peut aussi rimer avec respect&nbsp;: nous privilégions
        les hôtels engagés, les écolodges et les acteurs locaux qui préservent la
        beauté des lieux que vous venez admirer. Voyager mieux, pour des souvenirs
        qui ont du sens.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêts à imaginer votre plus beau voyage à deux ?",
    body: "Dites-nous tout — vos envies, vos dates, votre budget — et votre conseiller dédié compose un voyage de noces sur mesure, gratuitement et sans engagement.",
  },
};

export default vsmNoces;
