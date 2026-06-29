import type { ThemeContent } from "../types";

/**
 * Page thème « Voyage de luxe ». Images : visuels d'exception à valider/remplacer.
 */
const vsmLuxe: ThemeContent = {
  slug: "luxe",
  parentLabel: "Voyage sur mesure",
  parentHref: "/voyage-sur-mesure",
  meta: {
    title: "Voyage de luxe sur mesure — Palaces & expériences d'exception | CTA Voyages",
    description:
      "Composez votre voyage de luxe avec CTA Voyages : palaces et adresses d'exception, services privés, expériences exclusives et attentions sur mesure. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Suite de palace avec vue panoramique sur l'océan au crépuscule",
    label: "Voyage de luxe",
    h1: "Voyage de luxe : l'excellence à chaque instant",
    description:
      "Palaces et adresses d'exception, majordome dédié, transferts privés et expériences réservées à quelques privilégiés. Nous orchestrons un séjour où chaque détail est anticipé pour vous.",
    primaryCtaLabel: "Composer mon voyage d'exception",
    secondaryCtaLabel: "Pourquoi un voyage de luxe ?",
  },
  presentation: {
    eyebrow: "L'art du voyage d'exception",
    h2: "Le sur-mesure poussé à son sommet",
    body: (
      <>
        Une suite face au lagon, un dîner privé sur la plage au coucher du soleil,
        un majordome qui connaît vos préférences avant même que vous les
        exprimiez&nbsp;: le voyage de luxe, c&apos;est l&apos;art de
        l&apos;attention sur mesure. Chez CTA Voyages, votre conseiller sélectionne
        les palaces et adresses d&apos;exception, orchestre les services privés et
        ouvre les portes d&apos;expériences exclusives — pour un séjour sans la
        moindre fausse note, où l&apos;excellence se vit à chaque instant.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
      alt: "Villa sur pilotis aux Maldives au-dessus d'un lagon turquoise",
      badge: "OCÉAN INDIEN",
      name: "Maldives",
      desc: "Villas sur pilotis, spa flottant et dîners privés les pieds dans l'eau.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format",
      alt: "Skyline futuriste de Dubaï avec la Burj Khalifa",
      badge: "ÉMIRATS",
      name: "Dubaï",
      desc: "Palaces démesurés, désert privatisé et shopping d'exception.",
    },
    {
      href: "/destination-japon",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
      alt: "Ryokan traditionnel japonais et jardin zen au printemps",
      badge: "ASIE",
      name: "Japon",
      desc: "Ryokans d'exception, omakase étoilés et raffinement millénaire.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=600&h=400&fit=crop&auto=format",
      alt: "Bungalow de luxe au-dessus du lagon de Bora-Bora en Polynésie",
      badge: "PACIFIQUE",
      name: "Polynésie",
      desc: "Bora-Bora et ses lagons, suites overwater et croisières privées.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=400&fit=crop&auto=format",
      alt: "Plage de sable blanc et eaux turquoise de l'Île Maurice",
      badge: "OCÉAN INDIEN",
      name: "Île Maurice",
      desc: "Resorts 5 étoiles, golf, spa signature et hospitalité créole raffinée.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1589979481223-deb893043163?w=600&h=400&fit=crop&auto=format",
      alt: "Plage paradisiaque et rochers de granit des Seychelles",
      badge: "OCÉAN INDIEN",
      name: "Seychelles",
      desc: "Îles privées, criques secrètes et villas avec majordome dédié.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi confier votre voyage de luxe à CTA Voyages ?",
    cards: [
      {
        icon: "diamond",
        title: "Les plus belles adresses",
        text: "Palaces, relais & châteaux, villas privées : nous sélectionnons l'hébergement d'exception qui vous correspond.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&auto=format",
        alt: "Suite de palace au design raffiné avec vue mer",
      },
      {
        icon: "concierge",
        title: "Services privés sur mesure",
        text: "Majordome, chauffeur privé, transferts en jet ou hélicoptère : chaque déplacement est pensé pour votre confort.",
        img: "https://images.unsplash.com/photo-1551516594-56cb78394645?w=600&h=400&fit=crop&auto=format",
        alt: "Voiture de luxe avec chauffeur devant un hôtel",
      },
      {
        icon: "star",
        title: "Des expériences exclusives",
        text: "Tables étoilées, visites privées, accès réservés : nous ouvrons des portes habituellement fermées.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Dîner gastronomique étoilé dressé avec raffinement",
      },
      {
        icon: "support_agent",
        title: "Une conciergerie dédiée",
        text: "Un conseiller unique, disponible avant et pendant le voyage, qui anticipe le moindre détail pour vous.",
        img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&auto=format",
        alt: "Spa de luxe avec piscine à débordement face à l'océan",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Huit nuits d'exception entre Dubaï et les Maldives",
    intro:
      "Une parenthèse hors du temps, du faste émirati aux lagons des Maldives, ponctuée de services privés et d'expériences réservées à quelques privilégiés.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 3",
        title: "Dubaï : suite d'exception & démesure",
        text: "Accueil VIP à l'aéroport, transfert en berline privée et installation dans une suite avec majordome dédié, vue sur la skyline. Trois jours pour savourer Dubaï : table étoilée, shopping d'exception et soirée au sommet de la Burj Khalifa.",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format",
        alt: "Skyline de Dubaï avec la Burj Khalifa au crépuscule",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 3",
        title: "Expériences exclusives dans le désert",
        text: "Échappée privatisée dans les dunes : safari en 4x4 d'exception, fauconnerie au coucher du soleil et dîner gastronomique sous les étoiles, dressé rien que pour vous au cœur du désert.",
        img: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=600&h=400&fit=crop&auto=format",
        alt: "Campement de luxe et dunes de sable au coucher du soleil dans le désert de Dubaï",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 4",
        title: "Envol vers les Maldives & villa sur pilotis",
        text: "Vol vers les Maldives puis transfert en hydravion privé jusqu'à votre île. Installation dans une villa sur pilotis privée, piscine à débordement face au lagon et accès direct aux eaux turquoise depuis votre terrasse.",
        img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&auto=format",
        alt: "Villa sur pilotis privée au-dessus d'un lagon turquoise aux Maldives",
        align: "left",
      },
      {
        id: "s4",
        label: "JOURS 5 À 6",
        title: "Spa signature & dîner sous-marin",
        text: "Deux journées placées sous le signe du raffinement : massage signature dans un spa flottant, soins face à l'océan, puis dîner gastronomique dans un restaurant sous-marin, entouré de poissons multicolores et de coraux.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&auto=format",
        alt: "Spa de luxe ouvert sur l'océan aux Maldives",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 7 À 8",
        title: "Croisière en yacht privé & départ",
        text: "Croisière privée en yacht à la rencontre des dauphins, baignade dans des lagons secrets et coucher de soleil au champagne à bord. Une dernière nuit d'exception avant le transfert privé vers l'aéroport.",
        img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&h=400&fit=crop&auto=format",
        alt: "Yacht privé naviguant sur un lagon turquoise au coucher du soleil",
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
    h2: "Nos escapades de luxe confidentielles",
    intro:
      "Envie d'un luxe plus secret ? Voici quelques destinations d'exception, loin de la foule, que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&auto=format",
        alt: "Tente de luxe dans un camp de safari en Afrique au coucher du soleil",
        tag: "Afrique",
        name: "Botswana",
        text: "Safari privé en lodge d'exception, survol en hélicoptère du delta de l'Okavango.",
      },
      {
        img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&h=400&fit=crop&auto=format",
        alt: "Hôtel troglodyte et montgolfières au-dessus de la Cappadoce",
        tag: "Turquie",
        name: "Cappadoce",
        text: "Suite troglodyte raffinée et vol privé en montgolfière au lever du jour.",
      },
      {
        img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop&auto=format",
        alt: "Aurores boréales au-dessus d'un lodge en Laponie",
        tag: "Laponie",
        name: "Finlande",
        text: "Igloo de verre privé, dîner gastronomique sous les aurores boréales.",
      },
      {
        img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&h=400&fit=crop&auto=format",
        alt: "Villa privée surplombant la mer à Santorin",
        tag: "Cyclades",
        name: "Santorin",
        text: "Villa avec piscine privée à flanc de caldeira, yacht et chef à domicile.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir pour un voyage de luxe ?",
    intro:
      "La saison sèche garantit le climat idéal pour profiter pleinement de chaque destination. Votre conseiller affine selon vos dates et vos envies.",
    rows: [
      {
        destination: "Maldives",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ok", "ideal", "ideal"],
      },
      {
        destination: "Dubaï",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Japon",
        months: ["ok", "ok", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Polynésie",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Île Maurice",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Seychelles",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ideal", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre voyage de luxe",
    left: [
      {
        question: "Qu'est-ce qui distingue un voyage de luxe sur mesure ?",
        answer: (
          <p>
            Tout&nbsp;: des adresses d&apos;exception, des services privés
            (majordome, chauffeur, transferts), des expériences exclusives et un
            conseiller dédié qui anticipe le moindre détail. Rien n&apos;est
            standard, tout est pensé pour vous.
          </p>
        ),
      },
      {
        question: "Quelles destinations recommandez-vous pour le luxe ?",
        answer: (
          <p>
            Maldives, Polynésie, Seychelles et Île Maurice pour les lagons, Dubaï
            pour la démesure, le Japon pour le raffinement&nbsp;: à chaque envie
            son écrin d&apos;exception.
          </p>
        ),
      },
      {
        question: "Pouvez-vous organiser des services privés ?",
        answer: (
          <p>
            Bien sûr&nbsp;: jet ou hélicoptère privé, yacht, majordome, chef à
            domicile, visites avant ouverture… Nous orchestrons l&apos;ensemble
            des prestations confidentielles.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Le voyage de luxe est-il réservé aux longs séjours ?",
        answer: (
          <p>
            Non. Une escapade de quelques nuits dans un palace peut être tout aussi
            exceptionnelle qu&apos;un grand tour. Nous adaptons la durée à vos
            envies et à votre budget.
          </p>
        ),
      },
      {
        question: "Peut-on voyager en famille ou en couple ?",
        answer: (
          <p>
            Absolument. Lune de miel, voyage de noces, anniversaire ou séjour en
            famille&nbsp;: nous composons un programme d&apos;exception adapté à
            chaque occasion et à chacun.
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
        question: "Qu'est-ce qui distingue un voyage de luxe sur mesure ?",
        answer:
          "Des adresses d'exception, des services privés (majordome, chauffeur, transferts), des expériences exclusives et un conseiller dédié qui anticipe chaque détail. Rien n'est standard, tout est pensé pour vous.",
      },
      {
        question: "Quelles destinations recommandez-vous pour un voyage de luxe ?",
        answer:
          "Maldives, Polynésie, Seychelles et Île Maurice pour les lagons, Dubaï pour la démesure, le Japon pour le raffinement : à chaque envie son écrin d'exception.",
      },
      {
        question: "Pouvez-vous organiser des services privés ?",
        answer:
          "Oui : jet ou hélicoptère privé, yacht, majordome, chef à domicile, visites avant ouverture. Nous orchestrons l'ensemble des prestations confidentielles.",
      },
      {
        question: "Le voyage de luxe est-il réservé aux longs séjours ?",
        answer:
          "Non. Une escapade de quelques nuits dans un palace peut être aussi exceptionnelle qu'un grand tour. Nous adaptons la durée à vos envies et à votre budget.",
      },
      {
        question: "Peut-on partir en voyage de luxe en famille ou en couple ?",
        answer:
          "Oui : lune de miel, voyage de noces, anniversaire ou séjour en famille, nous composons un programme d'exception adapté à chaque occasion.",
      },
      {
        question: "Comment obtenir un devis pour un voyage de luxe ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Le vrai luxe se conjugue aussi avec le respect&nbsp;: nous privilégions les
        palaces et lodges engagés, les acteurs locaux d&apos;exception et les
        expériences à faible empreinte. Voyager mieux, dans le plus grand des
        raffinements.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à vivre un voyage d'exception ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, occasion — et votre conseiller dédié compose votre voyage de luxe sur mesure, gratuitement et sans engagement.",
  },
};

export default vsmLuxe;
