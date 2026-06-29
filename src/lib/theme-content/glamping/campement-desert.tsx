import type { ThemeContent } from "../types";

/**
 * Page thème « Campement du désert ». Images : visuels de déserts à valider/remplacer.
 */
const glampingCampementDesert: ThemeContent = {
  slug: "campement-desert",
  parentLabel: "Glamping",
  parentHref: "/glamping",
  meta: {
    title: "Campement du désert & nuit sous tente berbère — Glamping dunes | CTA Voyages",
    description:
      "Vivez une nuit au campement du désert avec CTA Voyages : tente berbère ou caïdale au milieu des dunes, dîner aux chandelles, ciel étoilé et balade à dos de chameau. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Campement de tentes au milieu des dunes du désert au coucher du soleil",
    label: "Campement du désert",
    h1: "Campement du désert : une nuit à la belle étoile sur les dunes",
    description:
      "Une tente berbère ou caïdale dressée au cœur des dunes, un dîner aux chandelles et un ciel étoilé d'une pureté absolue. Nous composons votre nuit au campement — luxe nomade, silence du désert et balade à dos de chameau inclus.",
    primaryCtaLabel: "Composer ma nuit au désert",
    secondaryCtaLabel: "Pourquoi un campement du désert ?",
  },
  presentation: {
    eyebrow: "Le luxe nomade",
    h2: "Le désert, le silence et un ciel infini",
    body: (
      <>
        Une balade à dos de chameau au crépuscule, un thé à la menthe sous la
        tente caïdale, un dîner aux chandelles autour du feu et une nuit bercée
        par le silence des dunes&nbsp;: le campement du désert, c&apos;est
        l&apos;art de dormir au plus près de la nature sans rien sacrifier au
        confort. Chez CTA Voyages, votre conseiller sélectionne le campement, la
        tente idéalement dressée et les expériences à vivre — pour une nuit
        d&apos;exception sous l&apos;un des plus beaux ciels étoilés du monde.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes dorées du désert du Sahara au Maroc",
      badge: "AFRIQUE DU NORD",
      name: "Maroc",
      desc: "Dunes de Merzouga, bivouac berbère et soir de gnaoua sous les étoiles.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&h=400&fit=crop&auto=format",
      alt: "Falaises de grès rouge du Wadi Rum en Jordanie",
      badge: "MOYEN-ORIENT",
      name: "Jordanie (Wadi Rum)",
      desc: "Vallée de la lune, dômes bédouins et grès rouge à perte de vue.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes orange du désert du Namib en Namibie",
      badge: "AFRIQUE AUSTRALE",
      name: "Namibie",
      desc: "Dunes de Sossusvlei, désert du Namib et ciel austral d'une rare pureté.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes du désert de Wahiba Sands à Oman",
      badge: "MOYEN-ORIENT",
      name: "Oman",
      desc: "Wahiba Sands, campements de charme et hospitalité omanaise légendaire.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes du désert de Liwa près d'Abou Dabi aux Émirats",
      badge: "MOYEN-ORIENT",
      name: "Émirats",
      desc: "Désert de Liwa, camps de luxe et safari en 4x4 sur les dunes géantes.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes du désert de Gobi en Mongolie",
      badge: "ASIE",
      name: "Mongolie",
      desc: "Désert de Gobi, yourtes nomades et immensité des steppes infinies.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi vivre un campement du désert avec CTA Voyages ?",
    cards: [
      {
        icon: "festival",
        title: "Une tente d'exception",
        text: "Tente berbère, caïdale ou dôme contemporain : nous choisissons un campement où le confort rejoint l'authenticité.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Tente caïdale luxueuse dressée dans le désert",
      },
      {
        icon: "nights_stay",
        title: "Un ciel étoilé inoubliable",
        text: "Loin de toute pollution lumineuse, la Voie lactée s'offre à vous : un spectacle que l'on n'oublie jamais.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&auto=format",
        alt: "Ciel étoilé et Voie lactée au-dessus du désert",
      },
      {
        icon: "local_dining",
        title: "Un dîner aux chandelles",
        text: "Tajine ou mezze servis sous les étoiles, musique nomade et feu de camp : une soirée hors du temps.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Dîner dressé à la lueur des bougies sous une tente",
      },
      {
        icon: "hiking",
        title: "Balade à dos de chameau",
        text: "Au lever ou au coucher du soleil, partez sur les dunes au pas tranquille du dromadaire, guide local en tête.",
        img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&h=400&fit=crop&auto=format",
        alt: "Caravane de chameaux sur les dunes au coucher du soleil",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Quatre jours du Sahara marocain, de Marrakech aux dunes de Merzouga",
    intro:
      "Quatre jours pour rejoindre les grandes dunes par la route des kasbahs et vivre une nuit en campement caïdal sous les étoiles.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Marrakech, départ vers le Sud",
        text: "Accueil à Marrakech et derniers préparatifs avant le grand départ. Cap au sud par le spectaculaire col du Tizi n'Tichka, qui franchit la chaîne du Haut Atlas entre villages berbères et panoramas vertigineux.",
        img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&h=400&fit=crop&auto=format",
        alt: "Place animée de Marrakech au coucher du soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Route des kasbahs & Aït-Ben-Haddou",
        text: "Journée sur la route des mille kasbahs jusqu'au ksar d'Aït-Ben-Haddou, classé au patrimoine mondial de l'UNESCO. Ruelles de terre ocre, greniers fortifiés et lumière dorée sur les remparts de pisé.",
        img: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&h=400&fit=crop&auto=format",
        alt: "Ksar fortifié d'Aït-Ben-Haddou en terre ocre au Maroc",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3",
        title: "Cap sur les dunes de Merzouga en 4x4",
        text: "En route vers l'erg Chebbi : la piste se transforme en aventure tout-terrain et les premières grandes dunes orange surgissent à l'horizon. Arrivée à Merzouga, porte d'entrée vers le campement.",
        img: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=600&h=400&fit=crop&auto=format",
        alt: "Grandes dunes orange de Merzouga dans le désert marocain",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 3 — SOIR",
        title: "Nuit en campement caïdal sous les étoiles",
        text: "Installation dans une tente caïdale au cœur des dunes, dîner aux chandelles autour du feu et musique gnaoua sous une voûte étoilée d'une pureté absolue. Une nuit hors du temps, bercée par le silence du Sahara.",
        img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=400&fit=crop&auto=format",
        alt: "Campement de tentes caïdales éclairé au cœur des dunes la nuit",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 4",
        title: "Lever de soleil à dos de dromadaire",
        text: "Réveil avant l'aube pour une balade à dos de dromadaire au pas tranquille de la caravane, tandis que le soleil embrase les crêtes des dunes. Petit-déjeuner au campement avant le retour vers Marrakech.",
        img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&h=400&fit=crop&auto=format",
        alt: "Caravane de dromadaires sur les dunes au lever du soleil",
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
    h2: "Nos campements confidentiels",
    intro:
      "Envie d'un désert moins couru ? Voici quelques campements originaux que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&h=400&fit=crop&auto=format",
        alt: "Désert d'Atacama au Chili",
        tag: "Amérique du Sud",
        name: "Atacama",
        text: "Chili lunaire : geysers, lagunes salées et l'un des ciels les plus purs de la planète.",
      },
      {
        img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes du désert blanc en Égypte",
        tag: "Égypte",
        name: "Désert Blanc",
        text: "Formations crayeuses surréalistes, bivouac bédouin et nuit sous un dôme étoilé.",
      },
      {
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes du désert de Thar en Inde",
        tag: "Inde",
        name: "Désert du Thar",
        text: "Rajasthan flamboyant : caravanes de chameaux, musique folk et campement près de Jaisalmer.",
      },
      {
        img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&h=400&fit=crop&auto=format",
        alt: "Dunes du désert australien au crépuscule",
        tag: "Australie",
        name: "Outback rouge",
        text: "Cœur rouge d'Australie : Uluru en toile de fond, swag sous les étoiles et silence absolu.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir au campement du désert ?",
    intro:
      "L'automne, l'hiver et le début du printemps offrent des températures clémentes le jour et des nuits fraîches étoilées. Votre conseiller affine selon vos dates.",
    rows: [
      {
        destination: "Maroc",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Jordanie (Wadi Rum)",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "avoid", "avoid", "avoid", "ideal", "ideal", "ideal", "ok"],
      },
      {
        destination: "Namibie",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Oman",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Émirats",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Mongolie",
        months: ["avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre campement du désert",
    left: [
      {
        question: "Combien de nuits passer au campement du désert ?",
        answer: (
          <p>
            Une à deux nuits suffisent pour vivre la magie du désert sans
            lassitude&nbsp;: coucher de soleil, dîner étoilé et lever du jour sur
            les dunes. Votre conseiller intègre cette étape dans un circuit plus
            large si vous le souhaitez.
          </p>
        ),
      },
      {
        question: "Le confort est-il vraiment au rendez-vous ?",
        answer: (
          <p>
            Oui&nbsp;: nos campements proposent de vraies tentes équipées —
            literie soignée, sanitaires privés et souvent eau chaude. Le luxe
            nomade, sans renoncer à l&apos;authenticité.
          </p>
        ),
      },
      {
        question: "Quelles destinations recommandez-vous pour une première fois ?",
        answer: (
          <p>
            Le Maroc, le Wadi Rum en Jordanie ou Oman sont des valeurs sûres&nbsp;:
            faciles d&apos;accès, campements de qualité et paysages spectaculaires
            dès la première nuit.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on dormir au désert en famille ?",
        answer: (
          <p>
            Bien sûr. Nous sélectionnons des campements adaptés aux enfants, avec
            balades à dos de chameau, contes autour du feu et nuits sécurisées
            pour petits et grands.
          </p>
        ),
      },
      {
        question: "Fait-il froid la nuit dans le désert ?",
        answer: (
          <p>
            Les nuits peuvent être fraîches, surtout en hiver&nbsp;: les
            campements fournissent couvertures et chauffage. Prévoyez une petite
            laine, le contraste avec la chaleur du jour fait partie du charme.
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
        question: "Combien de nuits passer au campement du désert ?",
        answer:
          "Une à deux nuits suffisent pour vivre la magie du désert : coucher de soleil, dîner étoilé et lever du jour sur les dunes. L'étape s'intègre aisément dans un circuit plus large.",
      },
      {
        question: "Le confort est-il au rendez-vous au campement du désert ?",
        answer:
          "Oui, nos campements proposent de vraies tentes équipées : literie soignée, sanitaires privés et souvent eau chaude. Le luxe nomade sans renoncer à l'authenticité.",
      },
      {
        question: "Quelles destinations pour une première nuit au désert ?",
        answer:
          "Le Maroc, le Wadi Rum en Jordanie ou Oman sont des valeurs sûres : faciles d'accès, campements de qualité et paysages spectaculaires.",
      },
      {
        question: "Peut-on dormir au désert en famille ?",
        answer:
          "Oui, avec des campements adaptés aux enfants : balades à dos de chameau, contes autour du feu et nuits sécurisées pour petits et grands.",
      },
      {
        question: "Fait-il froid la nuit dans le désert ?",
        answer:
          "Les nuits peuvent être fraîches, surtout en hiver : les campements fournissent couvertures et chauffage. Une petite laine est recommandée.",
      },
      {
        question: "Comment obtenir un devis pour un campement du désert ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Le désert est un milieu fragile&nbsp;: nous travaillons avec des
        campements engagés qui limitent leur empreinte, emploient des guides
        locaux et respectent les communautés nomades. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à passer une nuit sous les étoiles du désert ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre nuit au campement sur mesure, gratuitement et sans engagement.",
  },
};

export default glampingCampementDesert;
