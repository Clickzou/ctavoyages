import type { ThemeContent } from "../types";

/**
 * Page thème « Tente lodge » (Glamping). Images : visuels safari/lodge à valider/remplacer.
 */
const glampingTenteLodge: ThemeContent = {
  slug: "tente-lodge",
  parentLabel: "Glamping",
  parentHref: "/glamping",
  meta: {
    title: "Tente lodge & safari de luxe — Glamping en pleine nature | CTA Voyages",
    description:
      "Dormez en tente lodge avec CTA Voyages : lit king size, salle de bains privative et confort d'hôtel au cœur de la savane. Safaris au Kenya, en Tanzanie, au Botswana et désert du Maroc. Devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Tente lodge de luxe ouverte sur la savane au lever du soleil",
    label: "Tente lodge",
    h1: "Tente lodge : le confort d'un hôtel en pleine nature",
    description:
      "Un lit king size, une salle de bains privative et une terrasse face à la savane : la tente lodge réunit le luxe d'un grand hôtel et le frisson des grands espaces. L'option idéale pour un safari inoubliable, sans rien sacrifier au confort.",
    primaryCtaLabel: "Composer mon safari lodge",
    secondaryCtaLabel: "Pourquoi une tente lodge ?",
  },
  presentation: {
    eyebrow: "Le luxe en pleine nature",
    h2: "Le raffinement d'un hôtel, l'âme de la savane",
    body: (
      <>
        Imaginez vous réveiller au son des oiseaux, ouvrir la toile de votre
        tente sur une plaine dorée et savourer un petit-déjeuner face aux
        animaux sauvages&nbsp;: la tente lodge, c&apos;est l&apos;art de vivre la
        nature sans renoncer au confort. Lit king size, draps fins, salle de
        bains privative et parfois douche en plein air&nbsp;: tout est pensé
        pour le bien-être. Chez CTA Voyages, votre conseiller sélectionne les
        camps les plus authentiques, idéalement placés au cœur des réserves,
        pour des safaris d&apos;exception et des nuits hors du temps.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Lions dans la savane du Masai Mara au Kenya",
      badge: "AFRIQUE",
      name: "Kenya",
      desc: "Le Masai Mara, royaume des lions et de la grande migration des gnous.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
      alt: "Troupeau d'éléphants dans le Serengeti en Tanzanie",
      badge: "AFRIQUE",
      name: "Tanzanie",
      desc: "Serengeti et cratère du Ngorongoro : les plus grands safaris du continent.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600&h=400&fit=crop&auto=format",
      alt: "Girafes au coucher du soleil en Afrique du Sud",
      badge: "AFRIQUE",
      name: "Afrique du Sud",
      desc: "Le parc Kruger et ses lodges raffinés pour observer les Big Five.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&h=400&fit=crop&auto=format",
      alt: "Camp sous tente dans les dunes du désert marocain",
      badge: "MAGHREB",
      name: "Maroc (désert)",
      desc: "Bivouac de luxe dans les dunes de l'Erg Chebbi, sous un ciel étoilé.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format",
      alt: "Éléphants au bord d'un point d'eau dans le delta de l'Okavango au Botswana",
      badge: "AFRIQUE",
      name: "Botswana",
      desc: "Le delta de l'Okavango, sanctuaire sauvage exploré en mokoro et en 4x4.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&h=400&fit=crop&auto=format",
      alt: "Champ de lavande en Provence avec une tente sous les oliviers",
      badge: "FRANCE",
      name: "France (Provence)",
      desc: "Tentes lodge au milieu des oliviers et des lavandes, l'évasion à deux pas.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une tente lodge avec CTA Voyages ?",
    cards: [
      {
        icon: "king_bed",
        title: "Le confort d'un grand hôtel",
        text: "Lit king size, literie haut de gamme et salle de bains privative : vous dormez comme à l'hôtel, en pleine nature.",
        img: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&h=400&fit=crop&auto=format",
        alt: "Intérieur cosy d'une tente lodge avec grand lit",
      },
      {
        icon: "safari",
        title: "Au cœur des réserves",
        text: "Nos camps sont idéalement placés dans les parcs : safaris matinaux et observation des animaux au plus près.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&h=400&fit=crop&auto=format",
        alt: "Véhicule de safari face à un troupeau de zèbres",
      },
      {
        icon: "local_bar",
        title: "Pension complète & service",
        text: "Repas raffinés, apéritif au coucher du soleil et personnel attentionné : tout est pris en charge.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Table dressée pour un dîner en plein air dans un lodge",
      },
      {
        icon: "nights_stay",
        title: "Des nuits magiques",
        text: "Douche en plein air, terrasse privée et ciel étoilé : la nature à portée de main, le luxe en prime.",
        img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop&auto=format",
        alt: "Tente lodge éclairée sous un ciel étoilé",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Six jours en tente lodge de luxe au cœur du Kenya",
    intro:
      "De Nairobi au Masai Mara, six jours rythmés par les safaris à l'aube, les rencontres masaï et les nuits face à la savane.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée à Nairobi",
        text: "Accueil à l'aéroport de Nairobi et transfert vers votre hôtel de charme. Première soirée pour vous reposer du vol et profiter d'un dîner aux saveurs kényanes, avant le grand départ vers la savane.",
        img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop&auto=format",
        alt: "Vue sur la ville de Nairobi au coucher du soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Envol vers le Masai Mara & installation au camp",
        text: "Vol panoramique au-dessus de la Rift Valley jusqu'au Masai Mara. Accueil dans votre tented lodge de luxe, installation face à la plaine et premier safari de l'après-midi à la rencontre des grands fauves.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Tente lodge de luxe ouverte sur la savane du Masai Mara",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3",
        title: "Safari matin & soir dans la réserve",
        text: "Réveil avant l'aube pour un safari à la lumière dorée du matin : lions, éléphants et troupeaux de gnous. Pause déjeuner au camp, puis nouveau game drive au coucher du soleil, quand la savane s'éveille à nouveau.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&h=400&fit=crop&auto=format",
        alt: "Véhicule de safari face à un troupeau de zèbres au Masai Mara",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 4",
        title: "Rencontre avec un village masaï",
        text: "À la rencontre du peuple masaï : visite d'un village, danses traditionnelles et échanges avec les guerriers qui partagent leur mode de vie et leur lien millénaire avec cette terre. Une journée riche en émotions.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
        alt: "Guerriers masaï en tenue traditionnelle dans la savane",
        align: "right",
      },
      {
        id: "s5",
        label: "JOURS 5 À 6",
        title: "Dernière nuit face à la savane & départ",
        text: "Ultime safari au lever du jour, puis temps libre pour savourer une nuit face à la plaine, sous un ciel constellé d'étoiles. Le lendemain, vol retour vers Nairobi et correspondance, la tête pleine de souvenirs sauvages.",
        img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop&auto=format",
        alt: "Tente lodge éclairée face à la savane sous un ciel étoilé",
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
    h2: "Nos camps de toile confidentiels",
    intro:
      "Envie d'une expérience plus rare ? Voici quelques tentes lodge d'exception que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=400&fit=crop&auto=format",
        alt: "Camp de toile au bord d'une rivière en Zambie",
        tag: "Zambie",
        name: "South Luangwa",
        text: "Le berceau du safari à pied : camps intimistes et faune d'une densité rare.",
      },
      {
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
        alt: "Désert rouge de Namibie avec une tente isolée",
        tag: "Namibie",
        name: "NamibRand",
        text: "Dunes ocre, ciels parmi les plus purs du monde et silence absolu.",
      },
      {
        img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=400&fit=crop&auto=format",
        alt: "Camp de luxe dans la jungle du Rwanda",
        tag: "Rwanda",
        name: "Volcans",
        text: "Lodges raffinés au pied des volcans, à l'approche des gorilles de montagne.",
      },
      {
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
        alt: "Tente lodge dans le bush australien au crépuscule",
        tag: "Australie",
        name: "Outback",
        text: "L'immensité rouge du centre australien, observée depuis un camp de toile design.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en tente lodge ?",
    intro:
      "La saison sèche offre les meilleures observations animalières. Votre conseiller affine selon la destination et la grande migration.",
    rows: [
      {
        destination: "Kenya",
        months: ["ok", "ok", "ok", "avoid", "avoid", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Tanzanie",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
      {
        destination: "Afrique du Sud",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Botswana",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Maroc (désert)",
        months: ["ok", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ok"],
      },
      {
        destination: "France (Provence)",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur la tente lodge",
    left: [
      {
        question: "Qu'est-ce qu'une tente lodge exactement ?",
        answer: (
          <p>
            C&apos;est une tente spacieuse et permanente, montée sur plateforme,
            équipée d&apos;un vrai lit king size, de meubles et d&apos;une salle
            de bains privative. Vous profitez du confort d&apos;un hôtel tout en
            étant immergé dans la nature, séparé d&apos;elle par une simple toile.
          </p>
        ),
      },
      {
        question: "Y a-t-il une vraie salle de bains ?",
        answer: (
          <p>
            Oui. La plupart des tentes lodge disposent de toilettes, d&apos;une
            douche à l&apos;eau chaude (parfois en plein air) et de lavabos
            privatifs. Le niveau d&apos;équipement varie selon les camps, que
            votre conseiller sélectionne avec soin.
          </p>
        ),
      },
      {
        question: "Est-ce sûr de dormir si près des animaux ?",
        answer: (
          <p>
            Tout à fait. Les camps sont gardés et un membre du personnel vous
            accompagne le soir entre la tente et le restaurant. Il suffit de
            suivre les consignes simples données à l&apos;arrivée pour profiter
            sereinement de l&apos;expérience.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Une tente lodge convient-elle à un couple ?",
        answer: (
          <p>
            C&apos;est même une destination de rêve pour un voyage de noces ou
            une escapade romantique&nbsp;: intimité totale, dîners aux chandelles
            et nuits étoilées loin de tout font de la tente lodge un cadre
            d&apos;exception.
          </p>
        ),
      },
      {
        question: "Les repas et les safaris sont-ils inclus ?",
        answer: (
          <p>
            Le plus souvent oui&nbsp;: les camps fonctionnent en pension complète
            avec safaris guidés matin et soir compris. Nous précisons toujours ce
            qui est inclus dans votre devis pour éviter toute surprise.
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
        question: "Qu'est-ce qu'une tente lodge ?",
        answer:
          "Une tente spacieuse et permanente montée sur plateforme, équipée d'un vrai lit king size, de meubles et d'une salle de bains privative : le confort d'un hôtel au cœur de la nature.",
      },
      {
        question: "Y a-t-il une vraie salle de bains dans une tente lodge ?",
        answer:
          "Oui, la plupart des tentes lodge disposent de toilettes, d'une douche à eau chaude (parfois en plein air) et de lavabos privatifs.",
      },
      {
        question: "Est-ce sûr de dormir si près des animaux ?",
        answer:
          "Oui, les camps sont gardés et un membre du personnel vous accompagne le soir. En suivant les consignes données à l'arrivée, l'expérience est parfaitement sereine.",
      },
      {
        question: "Une tente lodge convient-elle à un couple ?",
        answer:
          "C'est idéal pour un voyage de noces ou une escapade romantique : intimité, dîners aux chandelles et nuits étoilées loin de tout.",
      },
      {
        question: "Les repas et les safaris sont-ils inclus ?",
        answer:
          "Le plus souvent oui : les camps fonctionnent en pension complète avec safaris guidés matin et soir compris. Le détail est précisé dans chaque devis.",
      },
      {
        question: "Comment obtenir un devis pour un safari en tente lodge ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Les camps de toile que nous privilégions s&apos;engagent pour la nature
        qui les entoure&nbsp;: énergie solaire, gestion de l&apos;eau,
        protection de la faune et emplois locaux au bénéfice des communautés.
        Voyager mieux, pour que ces grands espaces durent.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à vous endormir face à la savane ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre safari en tente lodge sur mesure, gratuitement et sans engagement.",
  },
};

export default glampingTenteLodge;
