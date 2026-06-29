import type { ThemeContent } from "../types";

/**
 * Page thème « Circuit culturel ». Images : visuels de sites culturels à valider/remplacer.
 */
const circuitCulturel: ThemeContent = {
  slug: "culturel",
  parentLabel: "Circuits",
  parentHref: "/circuits",
  meta: {
    title: "Circuit culturel sur mesure — Temples, médinas & sites UNESCO | CTA Voyages",
    description:
      "Partez en circuit culturel avec CTA Voyages : temples, médinas, villages et grands sites historiques classés UNESCO, accompagnés de guides experts. Itinéraire sur mesure, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Temple ancien et site historique au lever du soleil",
    label: "Circuit culturel",
    h1: "Circuit culturel : au cœur de l'âme d'une destination",
    description:
      "Temples millénaires, médinas labyrinthiques, villages préservés et grands sites classés UNESCO. Accompagné de guides experts, plongez dans l'histoire et les traditions vivantes d'une civilisation — un itinéraire pensé pour comprendre, pas seulement visiter.",
    primaryCtaLabel: "Composer mon circuit culturel",
    secondaryCtaLabel: "Pourquoi un circuit culturel ?",
  },
  presentation: {
    eyebrow: "Le voyage qui donne du sens",
    h2: "Comprendre une civilisation, pas seulement la photographier",
    body: (
      <>
        Une médina au petit matin, un temple où résonnent encore les prières, un
        village de montagne resté fidèle à ses gestes ancestraux&nbsp;: le circuit
        culturel, c&apos;est l&apos;art d&apos;aller au-delà de la carte postale
        pour saisir l&apos;âme d&apos;une destination. Chez CTA Voyages, votre
        conseiller dessine un itinéraire reliant les grands sites historiques et
        classés UNESCO aux rencontres plus intimes — le tout commenté par des
        guides experts qui transforment chaque pierre en récit.
      </>
    ),
  },
  destinations: [
    {
      href: "/destination-japon",
      img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format",
      alt: "Temple et pagode traditionnels au Japon",
      badge: "ASIE",
      name: "Japon",
      desc: "Temples de Kyoto, jardins zen et villages d'Edo entre tradition et modernité.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&h=400&fit=crop&auto=format",
      alt: "Pyramides de Gizeh en Égypte",
      badge: "AFRIQUE",
      name: "Égypte",
      desc: "Pyramides de Gizeh, temples de Louxor et trésors millénaires du Nil.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1503152394-c571994fd383?w=600&h=400&fit=crop&auto=format",
      alt: "Acropole d'Athènes en Grèce",
      badge: "EUROPE",
      name: "Grèce",
      desc: "Acropole, sites antiques et îles berceaux de la civilisation occidentale.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&h=400&fit=crop&auto=format",
      alt: "Cité inca du Machu Picchu au Pérou",
      badge: "AMÉRIQUES",
      name: "Pérou",
      desc: "Machu Picchu, vallée sacrée des Incas et héritage andin vivant.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop&auto=format",
      alt: "Taj Mahal en Inde",
      badge: "ASIE",
      name: "Inde",
      desc: "Taj Mahal, palais du Rajasthan et temples colorés du sous-continent.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
      alt: "Colisée et ruines antiques de Rome en Italie",
      badge: "EUROPE",
      name: "Italie",
      desc: "Rome antique, Florence Renaissance et villes d'art classées UNESCO.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir un circuit culturel avec CTA Voyages ?",
    cards: [
      {
        icon: "history_edu",
        title: "Des guides experts",
        text: "Historiens, archéologues ou passionnés locaux : nos guides donnent vie aux sites et révèlent ce que l'œil seul ne voit pas.",
        img: "https://images.unsplash.com/photo-1551018612-9715965c6742?w=600&h=400&fit=crop&auto=format",
        alt: "Guide commentant un site historique à un groupe",
      },
      {
        icon: "temple_buddhist",
        title: "Les grands sites UNESCO",
        text: "Temples, cités antiques et médinas classés au patrimoine mondial : nous relions les incontournables sans temps mort.",
        img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop&auto=format",
        alt: "Grand site historique classé au patrimoine mondial",
      },
      {
        icon: "diversity_3",
        title: "Les rencontres vraies",
        text: "Au-delà des monuments, des artisans, des familles et des villages préservés pour toucher la culture vivante.",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=400&fit=crop&auto=format",
        alt: "Artisan local au travail dans son atelier",
      },
      {
        icon: "route",
        title: "Un itinéraire qui a du rythme",
        text: "Distances maîtrisées, hôtels de caractère et pauses bien placées : la culture sans l'épuisement.",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&auto=format",
        alt: "Ruelle pavée d'un centre historique",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Le Japon en 14 jours, de Tokyo à Osaka",
    intro:
      "Deux semaines au fil du Japon impérial et moderne : gratte-ciel de Tokyo, sources chaudes au pied du Mont Fuji, temples de Kyoto, daims de Nara et mémoire d'Hiroshima.",
    steps: [
      {
        id: "s1",
        label: "JOURS 1 À 3",
        title: "Tokyo, l'effervescence moderne",
        text: "Plongée dans la capitale : sanctuaire Meiji, quartiers de Shibuya et Asakusa, temple Senso-ji et marché de Tsukiji. Une première immersion entre néons, traditions et gastronomie de rue.",
        img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format",
        alt: "Vue nocturne des gratte-ciel et néons de Tokyo",
        align: "left",
      },
      {
        id: "s2",
        label: "JOURS 4 À 5",
        title: "Hakone & le Mont Fuji",
        text: "Cap sur la région des lacs : croisière sur le lac Ashi, téléphérique d'Owakudani et nuit en ryokan avec onsen face au Mont Fuji. Une parenthèse de nature et de sérénité.",
        img: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&h=400&fit=crop&auto=format",
        alt: "Mont Fuji enneigé se reflétant dans un lac au lever du soleil",
        align: "right",
      },
      {
        id: "s3",
        label: "JOURS 6 À 8",
        title: "Kyoto, ses temples et ses geishas",
        text: "Trois jours au cœur du Japon impérial : Pavillon d'or, milliers de torii vermillon de Fushimi Inari, forêt de bambous d'Arashiyama et ruelles de Gion à l'heure des geishas.",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
        alt: "Allée de torii vermillon du sanctuaire Fushimi Inari à Kyoto",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 9",
        title: "Nara, daims et grand Bouddha",
        text: "Excursion dans la première capitale du Japon : le temple Todai-ji et son Bouddha de bronze géant, le sanctuaire Kasuga et les daims en liberté qui déambulent dans le parc.",
        img: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=600&h=400&fit=crop&auto=format",
        alt: "Daims en liberté devant un temple ancien à Nara",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 10 À 12",
        title: "Hiroshima & Miyajima",
        text: "Voyage de mémoire et de beauté : le Mémorial de la Paix et son dôme, puis la traversée vers l'île de Miyajima et son célèbre torii flottant du sanctuaire d'Itsukushima.",
        img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop&auto=format",
        alt: "Torii flottant du sanctuaire d'Itsukushima à Miyajima",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 13 À 14",
        title: "Osaka & départ",
        text: "Dernière étape dans la capitale gourmande : château d'Osaka, quartier animé de Dotonbori et dégustation de street food avant le transfert vers l'aéroport, la tête pleine de souvenirs.",
        img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&h=400&fit=crop&auto=format",
        alt: "Château d'Osaka entouré de cerisiers en fleurs",
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
    h2: "Nos circuits culturels confidentiels",
    intro:
      "Envie d'une destination culturelle moins courue ? Voici quelques itinéraires riches d'histoire que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&h=400&fit=crop&auto=format",
        alt: "Temples d'Angkor au Cambodge",
        tag: "Asie",
        name: "Angkor",
        text: "Cambodge mystique : temples engloutis par la jungle et sourires khmers millénaires.",
      },
      {
        img: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=600&h=400&fit=crop&auto=format",
        alt: "Cité antique de Petra en Jordanie",
        tag: "Moyen-Orient",
        name: "Petra",
        text: "Jordanie minérale : cité rose taillée dans la roche et désert du Wadi Rum.",
      },
      {
        img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop&auto=format",
        alt: "Églises rupestres de Lalibela en Éthiopie",
        tag: "Afrique",
        name: "Lalibela",
        text: "Éthiopie sacrée : églises monolithiques taillées dans la pierre et foi vivante.",
      },
      {
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&h=400&fit=crop&auto=format",
        alt: "Place de l'Imam à Ispahan en Iran",
        tag: "Perse",
        name: "Ispahan",
        text: "Iran raffiné : mosquées turquoise, bazars voûtés et hospitalité légendaire.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en circuit culturel ?",
    intro:
      "Les intersaisons offrent souvent le meilleur compromis entre climat clément et affluence raisonnable. Votre conseiller affine selon vos dates et la destination.",
    rows: [
      {
        destination: "Japon",
        months: ["ok", "ok", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "Égypte",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Grèce",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Pérou",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
      {
        destination: "Inde",
        months: ["ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Italie",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre circuit culturel",
    left: [
      {
        question: "Qu'est-ce qu'un circuit culturel exactement ?",
        answer: (
          <p>
            C&apos;est un itinéraire pensé autour du patrimoine d&apos;une
            destination&nbsp;: temples, médinas, villages et grands sites
            historiques ou classés UNESCO. L&apos;objectif est de comprendre une
            civilisation, son histoire et ses traditions vivantes, et pas
            seulement d&apos;enchaîner les visites.
          </p>
        ),
      },
      {
        question: "Y a-t-il toujours un guide ?",
        answer: (
          <p>
            Oui, c&apos;est le cœur de l&apos;expérience. Nous faisons appel à des
            guides experts — historiens, archéologues ou passionnés locaux — qui
            donnent du sens aux sites. Des guides francophones sont disponibles
            sur la plupart des destinations.
          </p>
        ),
      },
      {
        question: "Quelles destinations recommandez-vous pour un premier circuit culturel ?",
        answer: (
          <p>
            Le Japon, l&apos;Égypte, la Grèce, le Pérou, l&apos;Inde ou
            l&apos;Italie sont des valeurs sûres&nbsp;: des sites spectaculaires,
            une logistique éprouvée et une densité culturelle exceptionnelle.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Un circuit culturel est-il fatigant ?",
        answer: (
          <p>
            Pas si l&apos;itinéraire est bien construit. Nous maîtrisons les
            distances, plaçons des pauses et sélectionnons des hôtels de caractère
            pour récupérer. Le rythme s&apos;adapte aussi à vos envies et à votre
            forme.
          </p>
        ),
      },
      {
        question: "Peut-on partir en circuit culturel en famille ?",
        answer: (
          <p>
            Bien sûr. Nous adaptons le rythme et le contenu&nbsp;: visites plus
            courtes, ateliers et explications ludiques pour que petits et grands
            profitent autant les uns que les autres.
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
        question: "Qu'est-ce qu'un circuit culturel ?",
        answer:
          "C'est un itinéraire pensé autour du patrimoine d'une destination : temples, médinas, villages et grands sites historiques ou classés UNESCO, pour comprendre une civilisation et ses traditions vivantes.",
      },
      {
        question: "Y a-t-il toujours un guide sur un circuit culturel ?",
        answer:
          "Oui : nous faisons appel à des guides experts (historiens, archéologues ou passionnés locaux), avec des guides francophones disponibles sur la plupart des destinations.",
      },
      {
        question: "Quelles destinations pour un premier circuit culturel ?",
        answer:
          "Le Japon, l'Égypte, la Grèce, le Pérou, l'Inde ou l'Italie sont des valeurs sûres : sites spectaculaires, logistique éprouvée et grande densité culturelle.",
      },
      {
        question: "Un circuit culturel est-il fatigant ?",
        answer:
          "Pas si l'itinéraire est bien construit : distances maîtrisées, pauses régulières et hôtels de caractère, avec un rythme adapté à vos envies.",
      },
      {
        question: "Peut-on partir en circuit culturel en famille ?",
        answer:
          "Oui, en adaptant le rythme et le contenu (visites plus courtes, ateliers, explications ludiques) pour que petits et grands en profitent.",
      },
      {
        question: "Comment obtenir un devis pour un circuit culturel ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Découvrir un patrimoine, c&apos;est aussi le respecter&nbsp;: nous
        travaillons avec des guides et des hébergeurs locaux, limitons l&apos;impact
        sur les sites fragiles et soutenons l&apos;artisanat traditionnel. Voyager
        mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à explorer l'histoire d'une civilisation ?",
    body: "Dites-nous quelle destination vous inspire — dates, durée, budget — et votre conseiller dédié compose votre circuit culturel sur mesure, gratuitement et sans engagement.",
  },
};

export default circuitCulturel;
