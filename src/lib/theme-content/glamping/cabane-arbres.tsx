import type { ThemeContent } from "../types";

/**
 * Page thème « Cabane dans les arbres » (Glamping). Images : visuels de cabanes
 * perchées et forêts à valider/remplacer.
 */
const glampingCabaneArbres: ThemeContent = {
  slug: "cabane-arbres",
  parentLabel: "Glamping",
  parentHref: "/glamping",
  meta: {
    title: "Cabane dans les arbres — Nuit perchée en forêt sur mesure | CTA Voyages",
    description:
      "Dormez perché au cœur de la forêt avec CTA Voyages : cabanes dans les arbres tout confort, déconnexion totale et réveil dans la canopée. Conseiller dédié, devis gratuit.",
  },
  hero: {
    image: "/cabanne-arbre.jpg",
    imageAlt: "Cabane en bois perchée dans la canopée d'une forêt",
    label: "Cabane dans les arbres",
    h1: "Cabane dans les arbres : dormir perché au cœur de la forêt",
    description:
      "Une nuit suspendue entre ciel et feuillage, le retour à l'enfance version luxe : terrasse panoramique, déconnexion totale et réveil au chant des oiseaux. Nous composons votre séjour perché sur mesure.",
    primaryCtaLabel: "Composer mon séjour perché",
    secondaryCtaLabel: "Pourquoi une cabane dans les arbres ?",
  },
  presentation: {
    eyebrow: "Le voyage à hauteur de cime",
    h2: "Une parenthèse suspendue, loin de tout",
    body: (
      <>
        Grimper jusqu&apos;à sa cabane, ouvrir les volets sur un océan de
        feuillage, écouter le silence de la forêt et s&apos;endormir bercé par le
        vent dans les branches&nbsp;: la cabane dans les arbres, c&apos;est le
        retour à l&apos;enfance version luxe. Chez CTA Voyages, votre conseiller
        sélectionne la cabane perchée idéale — spa privatif, terrasse
        panoramique ou bain nordique sous les étoiles — pour une déconnexion
        totale, sans aucun compromis sur le confort.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=600&h=400&fit=crop&auto=format",
      alt: "Cabane perchée dans une forêt de feuillus en France",
      badge: "FRANCE",
      name: "France",
      desc: "Cabanes de charme dans le Périgord, les Vosges ou la Dordogne, spa perché en option.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt boréale canadienne aux couleurs d'automne",
      badge: "AMÉRIQUES",
      name: "Canada",
      desc: "Treehouses face aux forêts boréales, aurores boréales et lacs à perte de vue.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt de pins enneigée en Laponie suédoise",
      badge: "EUROPE",
      name: "Suède",
      desc: "Cabanes design en Laponie, treehotel futuriste et nuits sous les aurores.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1536323760109-ca8c07450053?w=600&h=400&fit=crop&auto=format",
      alt: "Canopée tropicale luxuriante au Costa Rica",
      badge: "AMÉRIQUES",
      name: "Costa Rica",
      desc: "Lodges perchés en pleine jungle, singes hurleurs et toucans pour réveil.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt des Ardennes belges au lever du jour",
      badge: "EUROPE",
      name: "Belgique",
      desc: "Cabanes intimistes dans les Ardennes, à deux pas et loin de tout.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop&auto=format",
      alt: "Forêt alpine et lac de montagne en Slovénie",
      badge: "EUROPE",
      name: "Slovénie",
      desc: "Glamping perché au-dessus des lacs alpins, nature préservée et eaux turquoise.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une cabane dans les arbres avec CTA Voyages ?",
    cards: [
      {
        icon: "forest",
        title: "Une cabane les pieds dans la canopée",
        text: "Perchée, isolée, face à la forêt : nous sélectionnons l'emplacement et la vue qui font toute la magie.",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&auto=format",
        alt: "Vue plongeante sur une forêt depuis une cabane perchée",
      },
      {
        icon: "spa",
        title: "Le confort, sans compromis",
        text: "Spa privatif, bain nordique, literie haut de gamme : le luxe discret au milieu de nulle part.",
        img: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=600&h=400&fit=crop&auto=format",
        alt: "Bain nordique en bois sur une terrasse en forêt",
      },
      {
        icon: "wifi_off",
        title: "Déconnexion totale",
        text: "Loin des écrans et du bruit : on coupe tout pour se reconnecter à l'essentiel et au vivant.",
        img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
        alt: "Hamac suspendu dans une forêt paisible",
      },
      {
        icon: "wb_twilight",
        title: "Un réveil dans les cimes",
        text: "Café sur la terrasse, brume du matin et chant des oiseaux : des réveils que l'on n'oublie pas.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format",
        alt: "Brume matinale au-dessus d'une forêt vallonnée",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Un week-end déconnexion de 3 nuits en cabane perchée",
    intro:
      "Trois nuits suspendues dans la canopée, entre nature, sensations douces et bien-être en pleine forêt.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1",
        title: "Arrivée & montée dans la canopée",
        text: "Accueil en lisière de forêt, dernier sentier à pied jusqu'à votre cabane perchée. Installation, apéritif sur la terrasse panoramique et première nuit bercé par le vent dans les branches.",
        img: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=600&h=400&fit=crop&auto=format",
        alt: "Cabane en bois perchée dans la canopée au coucher du soleil",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2",
        title: "Balade nature & accrobranche",
        text: "Randonnée matinale sur les sentiers de la forêt, puis après-midi sensations dans les parcours d'accrobranche et tyroliennes suspendues entre les cimes. Retour à la cabane pour un coucher de soleil mérité.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
        alt: "Sentier de randonnée au cœur d'une forêt de feuillus",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3",
        title: "Spa nordique en forêt",
        text: "Journée placée sous le signe de la détente : bain nordique fumant en pleine nature, sauna face aux arbres et long moment de lâcher-prise, loin des écrans et du bruit.",
        img: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=600&h=400&fit=crop&auto=format",
        alt: "Bain nordique en bois sur une terrasse au milieu de la forêt",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 4",
        title: "Réveil dans les arbres & départ",
        text: "Une dernière fois, café sur la terrasse dans la brume du matin et chant des oiseaux pour seul réveil. Descente en douceur de la canopée avant le retour, la tête pleine de forêt et de silence.",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop&auto=format",
        alt: "Brume matinale au-dessus d'une forêt vallonnée au lever du jour",
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
    h2: "Nos cabanes perchées les plus surprenantes",
    intro:
      "Envie de pousser l'expérience encore plus loin ? Voici quelques nuits perchées hors du commun que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?w=600&h=400&fit=crop&auto=format",
        alt: "Cabane design en bois et verre au cœur d'une forêt scandinave",
        tag: "Suède",
        name: "Treehotel",
        text: "Architecture futuriste perchée en pleine forêt boréale, design scandinave et aurores boréales.",
      },
      {
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=400&fit=crop&auto=format",
        alt: "Cabane romantique avec terrasse surplombant les arbres",
        tag: "Périgord",
        name: "Cabane-spa",
        text: "Bain à remous suspendu au-dessus de la cime des chênes, accès uniquement par échelle de corde.",
      },
      {
        img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&auto=format",
        alt: "Lodge perché dans la jungle tropicale du Costa Rica",
        tag: "Costa Rica",
        name: "Jungle lodge",
        text: "Cabane ouverte sur la canopée tropicale, réveil avec les singes hurleurs et les toucans.",
      },
      {
        img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=600&h=400&fit=crop&auto=format",
        alt: "Cabane perchée au-dessus d'un lac de montagne en Slovénie",
        tag: "Slovénie",
        name: "Glamping alpin",
        text: "Nuit suspendue au-dessus d'un lac turquoise, plongeon matinal et sommets pour décor.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir dormir dans les arbres ?",
    intro:
      "Le printemps et l'été offrent les forêts les plus généreuses et les longues soirées en terrasse. Votre conseiller affine selon la destination et vos envies.",
    rows: [
      {
        destination: "France",
        months: ["avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Canada",
        months: ["avoid", "avoid", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "avoid", "avoid"],
      },
      {
        destination: "Suède",
        months: ["ideal", "ideal", "ok", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ideal", "ideal"],
      },
      {
        destination: "Costa Rica",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid", "avoid", "avoid", "avoid", "ok", "ideal"],
      },
      {
        destination: "Belgique",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "avoid", "avoid"],
      },
      {
        destination: "Slovénie",
        months: ["avoid", "avoid", "ok", "ideal", "ideal", "ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre nuit dans les arbres",
    left: [
      {
        question: "Une cabane dans les arbres, est-ce vraiment confortable ?",
        answer: (
          <p>
            Oui&nbsp;: nous sélectionnons des cabanes tout confort, avec literie
            haut de gamme, chauffage et souvent salle d&apos;eau privative. Le
            charme du perché sans renoncer au confort d&apos;un bel hôtel.
          </p>
        ),
      },
      {
        question: "Y a-t-il des toilettes et une douche dans la cabane ?",
        answer: (
          <p>
            Cela dépend du niveau de prestation. Beaucoup de nos cabanes
            disposent d&apos;une salle d&apos;eau complète&nbsp;; d&apos;autres,
            plus nature, proposent des sanitaires sèches. Votre conseiller vous
            précise tout avant réservation.
          </p>
        ),
      },
      {
        question: "Est-ce adapté aux enfants ?",
        answer: (
          <p>
            Beaucoup de familles adorent l&apos;aventure&nbsp;! Nous choisissons
            des cabanes sécurisées et accessibles, idéales pour émerveiller petits
            et grands. Certaines, perchées très haut, sont réservées aux adultes.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Combien de nuits réserver dans une cabane ?",
        answer: (
          <p>
            Une à trois nuits suffisent pour une vraie déconnexion. Nous pouvons
            aussi composer un itinéraire combinant plusieurs cabanes ou un séjour
            nature plus long autour de la forêt.
          </p>
        ),
      },
      {
        question: "Que faire en cas de mauvais temps ?",
        answer: (
          <p>
            La forêt sous la pluie a son charme&nbsp;! Nos cabanes restent
            chaleureuses et bien isolées&nbsp;; beaucoup disposent d&apos;un poêle
            ou d&apos;un spa couvert pour profiter quoi qu&apos;il arrive.
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
        question: "Une cabane dans les arbres, est-ce vraiment confortable ?",
        answer:
          "Oui : nous sélectionnons des cabanes tout confort, avec literie haut de gamme, chauffage et souvent salle d'eau privative, sans renoncer au charme du perché.",
      },
      {
        question: "Y a-t-il des toilettes et une douche dans la cabane ?",
        answer:
          "Cela dépend du niveau de prestation : beaucoup de cabanes disposent d'une salle d'eau complète, d'autres plus nature proposent des sanitaires sèches. Votre conseiller vous précise tout avant réservation.",
      },
      {
        question: "Dormir dans les arbres est-il adapté aux enfants ?",
        answer:
          "Beaucoup de familles adorent l'aventure. Nous choisissons des cabanes sécurisées et accessibles pour petits et grands ; certaines, très perchées, restent réservées aux adultes.",
      },
      {
        question: "Combien de nuits réserver dans une cabane perchée ?",
        answer:
          "Une à trois nuits suffisent pour une vraie déconnexion. Nous pouvons aussi composer un itinéraire combinant plusieurs cabanes ou un séjour nature plus long.",
      },
      {
        question: "Que faire en cas de mauvais temps dans une cabane dans les arbres ?",
        answer:
          "Nos cabanes restent chaleureuses et bien isolées ; beaucoup disposent d'un poêle ou d'un spa couvert pour profiter de la forêt quoi qu'il arrive.",
      },
      {
        question: "Comment obtenir un devis pour une cabane dans les arbres ?",
        answer:
          "Indiquez la destination, vos dates et le nombre de voyageurs : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Dormir dans les arbres, c&apos;est déjà voyager autrement&nbsp;: nous
        privilégions des hébergements à faible impact, intégrés à la forêt et
        portés par des acteurs locaux qui protègent leur environnement. Voyager
        mieux, au plus près du vivant.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à passer une nuit la tête dans les étoiles ?",
    body: "Dites-nous où vous rêvez de vous percher — destination, dates, budget — et votre conseiller dédié compose votre séjour dans les arbres sur mesure, gratuitement et sans engagement.",
  },
};

export default glampingCabaneArbres;
