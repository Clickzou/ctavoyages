import type { ThemeContent } from "../types";

/**
 * Page thème « Bulle transparente » (Glamping). Images : visuels de dômes
 * transparents à valider/remplacer.
 */
const glampingBulle: ThemeContent = {
  slug: "bulle",
  parentLabel: "Glamping",
  parentHref: "/glamping",
  meta: {
    title: "Bulle transparente : nuit sous les étoiles — Dôme & glamping | CTA Voyages",
    description:
      "Dormez dans une bulle transparente avec CTA Voyages : nuit à la belle étoile sous un dôme, ciel étoilé au-dessus du lit, intimité et confort. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Dôme transparent illuminé sous un ciel étoilé en pleine nature",
    label: "Bulle transparente",
    h1: "Bulle transparente : dormir sous les étoiles",
    description:
      "Une nuit à la belle étoile sans renoncer au confort : un dôme transparent, un vrai lit douillet et la voûte céleste pour seul plafond. Intimité, silence et magie, loin de la pollution lumineuse.",
    primaryCtaLabel: "Réserver ma nuit en bulle",
    secondaryCtaLabel: "Pourquoi dormir en bulle ?",
  },
  presentation: {
    eyebrow: "Le glamping céleste",
    h2: "Le ciel étoilé au-dessus de votre lit",
    body: (
      <>
        Imaginez-vous glissé sous la couette, la tête levée vers des milliers
        d&apos;étoiles&nbsp;: la bulle transparente, c&apos;est l&apos;art de
        dormir à la belle étoile sans rien sacrifier au confort. Chez CTA
        Voyages, votre conseiller sélectionne le dôme parfaitement situé — loin
        de la pollution lumineuse, dans un cadre naturel préservé — pour une
        nuit intime et magique que l&apos;on n&apos;oublie pas.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=600&h=400&fit=crop&auto=format",
      alt: "Bulle transparente dans une clairière de campagne française",
      badge: "EUROPE",
      name: "France",
      desc: "Bulles au cœur du Lubéron, de la Dordogne ou des forêts vosgiennes, sous un ciel pur.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=600&h=400&fit=crop&auto=format",
      alt: "Dôme transparent sous un ciel étoilé en Espagne",
      badge: "EUROPE",
      name: "Espagne",
      desc: "Dômes en Andalousie et Catalogne : nuits douces et ciels étoilés méditerranéens.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&auto=format",
      alt: "Bulle transparente face aux dunes du désert marocain",
      badge: "AFRIQUE",
      name: "Maroc",
      desc: "Bulles dans le désert : dunes à perte de vue et l'une des plus belles voûtes étoilées au monde.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=600&h=400&fit=crop&auto=format",
      alt: "Dôme transparent dans la nature portugaise au crépuscule",
      badge: "EUROPE",
      name: "Portugal",
      desc: "Alentejo sauvage : dômes isolés, oliviers et l'un des ciels les plus sombres d'Europe.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop&auto=format",
      alt: "Bulle transparente dans les collines de Toscane en Italie",
      badge: "EUROPE",
      name: "Italie",
      desc: "Toscane et Ombrie : bulles nichées dans les vignes, sous un ciel piqué d'étoiles.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
      alt: "Dôme transparent face aux Alpes suisses étoilées",
      badge: "EUROPE",
      name: "Suisse",
      desc: "Dômes en altitude face aux Alpes : air pur, silence absolu et étoiles à portée de main.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi dormir en bulle transparente avec CTA Voyages ?",
    cards: [
      {
        icon: "nightlight",
        title: "Le ciel pour plafond",
        text: "Des emplacements choisis loin de la pollution lumineuse, pour un spectacle d'étoiles inoubliable depuis votre lit.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&auto=format",
        alt: "Voûte étoilée et Voie lactée au-dessus d'un paysage sombre",
      },
      {
        icon: "king_bed",
        title: "Confort sans compromis",
        text: "Vrai lit douillet, linge de qualité et petites attentions : la belle étoile, version cocooning.",
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&auto=format",
        alt: "Lit confortable et douillet face à une grande baie vitrée",
      },
      {
        icon: "lock",
        title: "Intimité préservée",
        text: "Des dômes isolés, à bonne distance les uns des autres, pour une bulle rien qu'à vous.",
        img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&h=400&fit=crop&auto=format",
        alt: "Dôme transparent isolé dans une nature paisible",
      },
      {
        icon: "local_florist",
        title: "Immersion en pleine nature",
        text: "Forêts, déserts ou vignes : un cadre naturel préservé pour se reconnecter à l'essentiel.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
        alt: "Forêt verdoyante baignée de lumière",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Un week-end de deux nuits sous les étoiles en bulle transparente",
    intro:
      "Deux nuits hors du temps, du coucher de soleil à l'aube, à dormir à la belle étoile sans rien sacrifier au confort.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée & installation au coucher du soleil",
        text: "Accueil en fin d'après-midi et chemin jusqu'à votre dôme isolé en pleine nature. Installation au moment où le ciel s'embrase : vous prenez possession des lieux pendant que le soleil disparaît à l'horizon.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Bulle transparente illuminée au coucher du soleil en pleine nature",
        align: "left",
      },
      {
        id: "s2",
        label: "SOIRÉE",
        title: "Dîner aux chandelles & observation des étoiles",
        text: "Un dîner intime à la lueur des bougies, puis le grand spectacle : allongés dans votre lit, la voûte étoilée se déploie au-dessus de vous, loin de toute pollution lumineuse.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&auto=format",
        alt: "Voûte étoilée et Voie lactée au-dessus d'un paysage nocturne",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 2",
        title: "Petit-déjeuner face à la nature",
        text: "Réveil en douceur avec les premières lueurs du jour. Un petit-déjeuner gourmand servi face au paysage, dans le calme et la fraîcheur du matin, avant une seconde journée de détente.",
        img: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=600&h=400&fit=crop&auto=format",
        alt: "Petit-déjeuner servi en pleine nature au lever du jour",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 3",
        title: "Balade & départ",
        text: "Une dernière matinée pour une balade au cœur du site naturel préservé, le temps de respirer encore un peu, avant un départ tout en douceur, la tête pleine d'étoiles.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
        alt: "Sentier de balade dans une forêt baignée de lumière matinale",
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
    h2: "Nos bulles les plus spectaculaires",
    intro:
      "Envie d'une nuit vraiment hors du commun ? Voici quelques bulles d'exception que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=600&h=400&fit=crop&auto=format",
        alt: "Bulle transparente au pied des dunes au lever du soleil",
        tag: "Désert",
        name: "Erg marocain",
        text: "Une bulle plantée dans les dunes : coucher de soleil sur le sable, puis un océan d'étoiles.",
      },
      {
        img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&h=400&fit=crop&auto=format",
        alt: "Dôme transparent en bord de lac de montagne",
        tag: "Lac alpin",
        name: "Rive suisse",
        text: "Au bord d'un lac alpin : eaux miroir le soir, sommets enneigés et silence absolu.",
      },
      {
        img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600&h=400&fit=crop&auto=format",
        alt: "Bulle transparente nichée dans un vignoble toscan",
        tag: "Vignoble",
        name: "Collines toscanes",
        text: "Une bulle au milieu des vignes : dégustation au crépuscule et étoiles sur l'Ombrie.",
      },
      {
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&auto=format",
        alt: "Dôme transparent dans une forêt portugaise au lever du jour",
        tag: "Forêt",
        name: "Alentejo sauvage",
        text: "Perdue dans la forêt portugaise : chants d'oiseaux à l'aube et l'un des ciels les plus purs d'Europe.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand dormir en bulle transparente ?",
    intro:
      "Les belles saisons offrent les ciels les plus dégagés et les nuits les plus douces. Votre conseiller affine selon la destination et vos dates.",
    rows: [
      {
        destination: "France",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Espagne",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Maroc",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal"],
      },
      {
        destination: "Portugal",
        months: ["avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Italie",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ok", "ok", "ideal", "ideal", "ok", "avoid"],
      },
      {
        destination: "Suisse",
        months: ["avoid", "avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre nuit en bulle",
    left: [
      {
        question: "Voit-on vraiment les étoiles depuis la bulle ?",
        answer: (
          <p>
            Oui&nbsp;: la paroi transparente du dôme et l&apos;emplacement choisi
            — loin de la pollution lumineuse — vous offrent une vue dégagée sur la
            voûte étoilée, directement depuis votre lit.
          </p>
        ),
      },
      {
        question: "Fait-il chaud ou froid la nuit dans une bulle ?",
        answer: (
          <p>
            Les bulles sont équipées pour rester confortables&nbsp;: chauffage,
            ventilation ou climatisation selon la saison, plus une vraie literie
            douillette. Votre conseiller vérifie le confort thermique du dôme.
          </p>
        ),
      },
      {
        question: "A-t-on de l'intimité dans une bulle transparente ?",
        answer: (
          <p>
            Oui. Les dômes sont isolés et espacés, souvent avec une zone opaque
            ou un occultant pour le coin nuit. Vous profitez du ciel sans être
            exposé aux regards.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Une nuit en bulle, est-ce confortable ?",
        answer: (
          <p>
            Tout à fait&nbsp;: c&apos;est du glamping. Vrai lit, linge de qualité,
            sanitaires privatifs le plus souvent et petites attentions&nbsp;: le
            confort d&apos;un hébergement, à la belle étoile.
          </p>
        ),
      },
      {
        question: "Peut-on dormir en bulle en couple ou en famille ?",
        answer: (
          <p>
            Les bulles sont idéales pour une escapade romantique en couple, mais
            il existe aussi des dômes familiaux. Indiquez-nous le nombre de
            voyageurs&nbsp;: nous trouvons la formule adaptée.
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
        question: "Voit-on vraiment les étoiles depuis la bulle ?",
        answer:
          "Oui : la paroi transparente du dôme et un emplacement éloigné de la pollution lumineuse offrent une vue dégagée sur la voûte étoilée directement depuis le lit.",
      },
      {
        question: "Fait-il chaud ou froid la nuit dans une bulle ?",
        answer:
          "Les bulles sont équipées pour rester confortables : chauffage, ventilation ou climatisation selon la saison, avec une vraie literie douillette.",
      },
      {
        question: "A-t-on de l'intimité dans une bulle transparente ?",
        answer:
          "Oui, les dômes sont isolés et espacés, souvent avec une zone opaque ou un occultant pour le coin nuit. On profite du ciel sans être exposé aux regards.",
      },
      {
        question: "Une nuit en bulle, est-ce confortable ?",
        answer:
          "Oui, c'est du glamping : vrai lit, linge de qualité, sanitaires privatifs le plus souvent et petites attentions, le confort d'un hébergement à la belle étoile.",
      },
      {
        question: "Peut-on dormir en bulle en couple ou en famille ?",
        answer:
          "Les bulles sont idéales en couple pour une escapade romantique, et il existe aussi des dômes familiaux selon le nombre de voyageurs.",
      },
      {
        question: "Comment obtenir un devis pour une nuit en bulle ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Dormir sous les étoiles invite à les préserver&nbsp;: nous privilégions
        les hébergements sobres, respectueux des sites naturels et engagés contre
        la pollution lumineuse. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à vous endormir sous les étoiles ?",
    body: "Dites-nous quelle destination vous fait rêver — dates, occasion, budget — et votre conseiller dédié compose votre nuit en bulle sur mesure, gratuitement et sans engagement.",
  },
};

export default glampingBulle;
