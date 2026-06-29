import type { ThemeContent } from "../types";

/**
 * Page thème « Lodge safari ». Images : visuels de savane et lodges à valider/remplacer.
 */
const glampingLodgeSafari: ThemeContent = {
  slug: "lodge-safari",
  parentLabel: "Glamping",
  parentHref: "/glamping",
  meta: {
    title: "Lodge safari de luxe — Glamping au cœur de la savane | CTA Voyages",
    description:
      "Vivez le grand safari autrement avec CTA Voyages : lodges d'exception face à la savane, réveil avec les animaux sauvages, safaris guidés au lever du jour. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Troupeau d'éléphants traversant la savane au coucher du soleil",
    label: "Lodge safari",
    h1: "Lodge safari : dormir au cœur du grand spectacle",
    description:
      "Des lodges d'exception posés au milieu de la savane, le réveil face aux animaux sauvages et des safaris guidés au lever du jour. Le luxe et l'aventure réunis, sans jamais quitter le confort.",
    primaryCtaLabel: "Composer mon safari",
    secondaryCtaLabel: "Pourquoi un lodge safari ?",
  },
  presentation: {
    eyebrow: "L'Afrique grandeur nature",
    h2: "Le grand frisson, version cinq étoiles",
    body: (
      <>
        Un café fumant sur la terrasse pendant qu&apos;un troupeau d&apos;éléphants
        traverse la plaine, un 4x4 ouvert au lever du jour, un dîner aux lanternes
        sous la Voie lactée&nbsp;: le lodge safari, c&apos;est l&apos;art de vivre
        l&apos;aventure sauvage dans un confort d&apos;exception. Chez CTA Voyages,
        votre conseiller sélectionne le lodge idéalement placé, les réserves les
        plus riches en faune et les guides francophones — pour des Big Five sans
        compromis sur le raffinement ni sur l&apos;émotion.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
      alt: "Lions dans la savane du Masai Mara au Kenya",
      badge: "AFRIQUE DE L'EST",
      name: "Kenya",
      desc: "Le Masai Mara, la grande migration et des lodges mythiques face aux fauves.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
      alt: "Girafe devant le cratère du Ngorongoro en Tanzanie",
      badge: "AFRIQUE DE L'EST",
      name: "Tanzanie",
      desc: "Serengeti infini, cratère du Ngorongoro et tented camps d'exception.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&h=400&fit=crop&auto=format",
      alt: "Rhinocéros dans le parc Kruger en Afrique du Sud",
      badge: "AFRIQUE AUSTRALE",
      name: "Afrique du Sud",
      desc: "Le Kruger, les réserves privées de Sabi Sand et un confort haut de gamme.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&h=400&fit=crop&auto=format",
      alt: "Éléphants dans le delta de l'Okavango au Botswana",
      badge: "AFRIQUE AUSTRALE",
      name: "Botswana",
      desc: "Le delta de l'Okavango en mokoro et des camps confidentiels au bord de l'eau.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop&auto=format",
      alt: "Dunes rouges du désert du Namib en Namibie",
      badge: "AFRIQUE AUSTRALE",
      name: "Namibie",
      desc: "Dunes de Sossusvlei, Etosha et lodges design face aux grands espaces.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=600&h=400&fit=crop&auto=format",
      alt: "Chutes Victoria au Zimbabwe",
      badge: "AFRIQUE AUSTRALE",
      name: "Zimbabwe",
      desc: "Chutes Victoria, parc de Hwange et guides parmi les meilleurs du continent.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi réserver votre lodge safari avec CTA Voyages ?",
    cards: [
      {
        icon: "cottage",
        title: "Des lodges d'exception",
        text: "Tented camps de luxe ou suites face à la savane : nous choisissons l'adresse parfaitement placée pour vivre la faune au plus près.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Tente de luxe d'un lodge safari face à la savane",
      },
      {
        icon: "safari",
        title: "Safaris guidés au lever du jour",
        text: "Game drives en 4x4 ouvert avec des guides francophones experts, pour traquer les Big Five aux meilleures heures.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&h=400&fit=crop&auto=format",
        alt: "Véhicule de safari observant la faune dans la savane",
      },
      {
        icon: "flight_takeoff",
        title: "Vols et transferts inclus",
        text: "Vols internationaux, vols-brousse et transferts privés : vous passez d'une réserve à l'autre sans logistique.",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format",
        alt: "Petit avion de brousse au décollage",
      },
      {
        icon: "local_bar",
        title: "Le confort jusqu'au bout",
        text: "Pension complète, sundowners au bord du bush et service attentionné : l'aventure sans renoncer au raffinement.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
        alt: "Apéritif sundowner au coucher du soleil dans le bush",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Six jours en lodge de luxe en Afrique du Sud",
    intro:
      "De Johannesburg au cœur du Kruger, six jours rythmés par les game drives, les rencontres avec les Big Five et le confort d'un lodge face au point d'eau.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée à Johannesburg",
        text: "Accueil à l'aéroport de Johannesburg et première nuit dans un boutique-hôtel raffiné. Le temps de se reposer du vol avant de plonger dans l'aventure, autour d'un dîner sud-africain et d'un grand cru local.",
        img: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=600&h=400&fit=crop&auto=format",
        alt: "Vue sur les gratte-ciels de Johannesburg au coucher du soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Envol vers la réserve du Kruger",
        text: "Vol-brousse vers la région du Kruger, transfert en 4x4 ouvert et installation au lodge. Premier game drive en fin d'après-midi : déjà les premières silhouettes d'antilopes et de girafes dans la lumière dorée.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&h=400&fit=crop&auto=format",
        alt: "Véhicule de safari ouvert observant la faune dans la réserve du Kruger",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3",
        title: "Safari Big Five & lodge face au point d'eau",
        text: "Game drives au lever et au coucher du jour à la recherche du lion, du léopard, de l'éléphant, du buffle et du rhinocéros. Entre deux sorties, l'observation se poursuit depuis la terrasse du lodge, face au point d'eau fréquenté par la faune.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
        alt: "Lions s'abreuvant à un point d'eau dans la savane du Kruger",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 4",
        title: "Safari à pied guidé",
        text: "Au petit matin, départ pour un safari à pied accompagné d'un ranger et d'un pisteur armés. Une immersion sensorielle unique : lecture des empreintes, approche silencieuse de la faune et compréhension intime de l'écosystème du bush.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Ranger guidant un safari à pied au lever du jour dans la brousse",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 5",
        title: "Sundowner dans la brousse",
        text: "Une journée pleine de safaris, ponctuée par un moment magique : le sundowner. Verre à la main au milieu de la savane, vous regardez le soleil embraser l'horizon avant le retour au lodge pour un dîner aux lanternes sous les étoiles.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
        alt: "Apéritif sundowner au coucher du soleil dans la brousse sud-africaine",
        align: "left",
      },
      {
        id: "s6",
        label: "JOUR 6",
        title: "Dernier game drive & départ",
        text: "Un ultime game drive matinal pour de nouvelles rencontres, puis transfert vers l'aéroport et vol retour. Vous repartez la tête pleine d'images sauvages, du grondement des lions aux levers de soleil sur la savane.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
        alt: "Girafe se détachant sur la savane au lever du soleil avant le départ",
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
    h2: "Nos safaris confidentiels",
    intro:
      "Envie d'une réserve loin des foules ? Voici quelques lodges safari d'exception que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop&auto=format",
        alt: "Léopard dans un arbre du delta de l'Okavango",
        tag: "Botswana",
        name: "Okavango",
        text: "Un delta secret en saison des eaux : safaris en mokoro et camps sur pilotis.",
      },
      {
        img: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop&auto=format",
        alt: "Zèbres dans le parc national d'Etosha en Namibie",
        tag: "Namibie",
        name: "Etosha",
        text: "Un immense salar blanc où la faune se rassemble autour des points d'eau.",
      },
      {
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&auto=format",
        alt: "Éléphants au coucher du soleil dans le parc de Hwange",
        tag: "Zimbabwe",
        name: "Hwange",
        text: "La plus grande réserve du pays, troupeaux d'éléphants et guides d'élite.",
      },
      {
        img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=600&h=400&fit=crop&auto=format",
        alt: "Guépard guettant sa proie dans le Serengeti",
        tag: "Tanzanie",
        name: "Sud Serengeti",
        text: "Les plaines reculées du sud, théâtre de la mise bas des gnous au printemps.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en lodge safari ?",
    intro:
      "La saison sèche concentre la faune autour des points d'eau et offre les meilleures observations. Votre conseiller affine selon la migration et vos dates.",
    rows: [
      {
        destination: "Kenya",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
      {
        destination: "Tanzanie",
        months: ["ideal", "ideal", "ok", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ideal"],
      },
      {
        destination: "Afrique du Sud",
        months: ["ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok"],
      },
      {
        destination: "Botswana",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Namibie",
        months: ["ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok"],
      },
      {
        destination: "Zimbabwe",
        months: ["avoid", "ok", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre lodge safari",
    left: [
      {
        question: "Qu'est-ce qu'un lodge safari exactement ?",
        answer: (
          <p>
            C&apos;est un hébergement haut de gamme situé au cœur ou en bordure
            d&apos;une réserve&nbsp;: tented camp de luxe, suite ou villa face à la
            savane. Vous vivez la faune au plus près, avec un confort et un service
            d&apos;exception.
          </p>
        ),
      },
      {
        question: "Les safaris sont-ils inclus dans le séjour ?",
        answer: (
          <p>
            Oui&nbsp;: les game drives matin et soir en 4x4 ouvert avec guide font
            partie du forfait, tout comme la pension complète. Nous ajoutons selon
            vos envies safari à pied, en mokoro ou en montgolfière.
          </p>
        ),
      },
      {
        question: "Quelle destination pour un premier safari ?",
        answer: (
          <p>
            Le Kenya, la Tanzanie et l&apos;Afrique du Sud sont des valeurs sûres&nbsp;:
            faune abondante, lodges variés et logistique rodée pour découvrir les
            Big Five en toute sérénité.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Peut-on partir en lodge safari en famille ?",
        answer: (
          <p>
            Bien sûr. Nous sélectionnons des lodges family-friendly, avec des
            activités adaptées aux enfants et des guides pédagogues, pour un
            émerveillement partagé en toute sécurité.
          </p>
        ),
      },
      {
        question: "Faut-il un traitement contre le paludisme ?",
        answer: (
          <p>
            Cela dépend des zones&nbsp;: certaines réserves sont sans risque, d&apos;autres
            nécessitent un traitement préventif. Nous vous orientons et conseillons
            de valider avec votre médecin avant le départ.
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
        question: "Qu'est-ce qu'un lodge safari ?",
        answer:
          "C'est un hébergement haut de gamme au cœur ou en bordure d'une réserve : tented camp de luxe, suite ou villa face à la savane, pour vivre la faune au plus près avec un confort d'exception.",
      },
      {
        question: "Les safaris sont-ils inclus dans le séjour ?",
        answer:
          "Oui, les game drives matin et soir en 4x4 ouvert avec guide font partie du forfait, ainsi que la pension complète. On peut ajouter safari à pied, mokoro ou montgolfière.",
      },
      {
        question: "Quelle destination pour un premier safari ?",
        answer:
          "Le Kenya, la Tanzanie et l'Afrique du Sud sont des valeurs sûres : faune abondante, lodges variés et logistique rodée pour découvrir les Big Five.",
      },
      {
        question: "Peut-on partir en lodge safari en famille ?",
        answer:
          "Oui, avec des lodges family-friendly, des activités adaptées aux enfants et des guides pédagogues pour un émerveillement partagé en toute sécurité.",
      },
      {
        question: "Faut-il un traitement contre le paludisme ?",
        answer:
          "Cela dépend des zones : certaines réserves sont sans risque, d'autres nécessitent un traitement préventif. Nous vous orientons et vous conseillons de valider avec votre médecin.",
      },
      {
        question: "Comment obtenir un devis pour un lodge safari ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Le safari peut être un formidable allié de la conservation&nbsp;: nous
        privilégions les lodges qui financent la protection de la faune, emploient
        les communautés locales et limitent leur empreinte. Voyager mieux, pour que
        la savane reste sauvage.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à vous réveiller face à la savane ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, durée, budget — et votre conseiller dédié compose votre lodge safari sur mesure, gratuitement et sans engagement.",
  },
};

export default glampingLodgeSafari;
