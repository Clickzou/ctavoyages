import type { ThemeContent } from "../types";

/**
 * Page thème « Croisière aux Caraïbes ». Images : visuels d'îles et de plages
 * à valider/remplacer.
 */
const croisiereCaraibes: ThemeContent = {
  slug: "caraibes",
  parentLabel: "Croisières",
  parentHref: "/croisieres",
  meta: {
    title: "Croisière aux Caraïbes sur mesure — Îles paradisiaques au soleil | CTA Voyages",
    description:
      "Organisez votre croisière aux Caraïbes avec CTA Voyages : eaux turquoise, plages de sable blanc et escales de rêve aux Bahamas, en Jamaïque ou à Cuba. Cabine idéale, conseiller dédié, devis gratuit.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=1600&h=900&fit=crop&auto=format",
    imageAlt: "Plage de sable blanc et eaux turquoise des Caraïbes",
    label: "Croisière aux Caraïbes",
    h1: "Croisière aux Caraïbes : le soleil d'île en île",
    description:
      "Eaux turquoise, plages de sable blanc et ambiance festive à chaque escale. Du farniente au cocktail au coucher du soleil, nous composons la croisière qui transforme chaque journée en carte postale.",
    primaryCtaLabel: "Composer ma croisière",
    secondaryCtaLabel: "Pourquoi les Caraïbes ?",
  },
  presentation: {
    eyebrow: "Le grand bleu, tout simplement",
    h2: "Une île différente chaque matin",
    body: (
      <>
        On se réveille face à une nouvelle baie turquoise, on plonge dans une
        eau à 28°C, on déjeune les pieds dans le sable puis on repart vers
        l&apos;île suivante au son du steel-drum&nbsp;: la croisière aux
        Caraïbes, c&apos;est l&apos;art de multiplier les paradis sans jamais
        défaire sa valise. Chez CTA Voyages, votre conseiller sélectionne la
        compagnie, l&apos;itinéraire et la cabine idéale — pour un voyage tout
        soleil, du pont supérieur jusqu&apos;aux plages de sable blanc.
      </>
    ),
  },
  destinations: [
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop&auto=format",
      alt: "Plage turquoise et cabanes sur pilotis aux Bahamas",
      badge: "CARAÏBES",
      name: "Bahamas",
      desc: "Eaux cristallines, cayes désertes et plages de carte postale à perte de vue.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
      alt: "Cascade et végétation tropicale en Jamaïque",
      badge: "CARAÏBES",
      name: "Jamaïque",
      desc: "Reggae, cascades luxuriantes et plages de rêve à Ocho Rios et Montego Bay.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&h=400&fit=crop&auto=format",
      alt: "Baie tropicale et palmiers des Antilles",
      badge: "ANTILLES",
      name: "Antilles",
      desc: "Guadeloupe et Martinique : plages créoles, rhum agricole et art de vivre.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
      alt: "Plage bordée de cocotiers en République dominicaine",
      badge: "CARAÏBES",
      name: "République dominicaine",
      desc: "Sable doré, cocotiers et ambiance merengue à Punta Cana et La Romana.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=600&h=400&fit=crop&auto=format",
      alt: "Voitures vintage colorées dans une rue de La Havane à Cuba",
      badge: "CARAÏBES",
      name: "Cuba",
      desc: "La Havane vintage, salsa endiablée et plages immaculées de Varadero.",
    },
    {
      href: "/destinations",
      img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop&auto=format",
      alt: "Cénote et eaux turquoise à Cozumel au Mexique",
      badge: "MEXIQUE",
      name: "Mexique (Cozumel)",
      desc: "Récifs de corail, cénotes et vestiges mayas au large de la Riviera.",
    },
  ],
  why: {
    eyebrow: "Nos atouts",
    h2: "Pourquoi choisir une croisière aux Caraïbes avec CTA Voyages ?",
    cards: [
      {
        icon: "directions_boat",
        title: "La bonne cabine, le bon navire",
        text: "Intérieure, balcon ou suite : nous choisissons la cabine et la compagnie adaptées à votre budget et à vos envies.",
        img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
        alt: "Cabine avec balcon donnant sur la mer des Caraïbes",
      },
      {
        icon: "wb_sunny",
        title: "Du soleil toute l'année",
        text: "Les Caraïbes restent chaudes et ensoleillées en toute saison : votre conseiller cale les meilleures dates pour éviter la saison des pluies.",
        img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=600&h=400&fit=crop&auto=format",
        alt: "Coucher de soleil sur une mer tropicale calme",
      },
      {
        icon: "scuba_diving",
        title: "Plages et fonds marins",
        text: "Snorkeling sur les récifs, plongée et plages de sable blanc : nous sélectionnons les escales aux plus belles eaux turquoise.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format",
        alt: "Plongeur explorant un récif de corail coloré",
      },
      {
        icon: "local_bar",
        title: "L'ambiance des îles",
        text: "Cocktails sur le pont, musique live et soirées festives : la fête se prolonge d'escale en escale, au rythme des Caraïbes.",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop&auto=format",
        alt: "Cocktails colorés au bord d'une piscine sous les palmiers",
      },
    ],
  },
  itinerary: {
    eyebrow: "Exemple de programme",
    h2: "Huit jours d'île en île, de Miami aux Bahamas",
    intro:
      "Un parcours de 8 jours au départ de Miami, ponctué de six escales entre Bahamas et Petites Antilles, pour multiplier les plages turquoise sans jamais défaire sa valise.",
    steps: [
      {
        id: "s1",
        label: "JOUR 1 — MIAMI",
        title: "Embarquement à Miami",
        text: "Accueil au port de Miami et installation à bord. Découverte du navire, cocktail de bienvenue sur le pont supérieur et appareillage au coucher du soleil, cap sur les Bahamas.",
        img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=600&h=400&fit=crop&auto=format",
        alt: "Skyline de Miami et navire de croisière au départ du port",
        align: "left",
      },
      {
        id: "s2",
        label: "JOUR 2 — NASSAU, BAHAMAS",
        title: "Escale à Nassau",
        text: "Première escale dans la capitale des Bahamas : marché de paille, forts coloniaux et plages de Cable Beach. Une journée entre eaux cristallines et ambiance créole insulaire.",
        img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop&auto=format",
        alt: "Plage turquoise et bateaux colorés à Nassau aux Bahamas",
        align: "right",
      },
      {
        id: "s3",
        label: "JOUR 3 — SAINT-THOMAS",
        title: "Saint-Thomas, Îles Vierges",
        text: "Escale à Charlotte Amalie : Magens Bay, l'une des plus belles plages des Caraïbes, snorkeling sur les récifs et panoramas depuis les hauteurs de l'île.",
        img: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=600&h=400&fit=crop&auto=format",
        alt: "Baie turquoise et voiliers à Saint-Thomas dans les Îles Vierges",
        align: "left",
      },
      {
        id: "s4",
        label: "JOUR 4 — SAINT-MARTIN",
        title: "Saint-Martin, deux îles en une",
        text: "Escale sur l'île franco-néerlandaise : marché de Marigot côté français, plages d'Orient Bay et saveurs créoles. Baignade et farniente au programme de la journée.",
        img: "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&h=400&fit=crop&auto=format",
        alt: "Baie tropicale et palmiers de Saint-Martin aux Antilles",
        align: "right",
      },
      {
        id: "s5",
        label: "JOUR 5 — SAINT-KITTS",
        title: "Saint-Kitts, l'île volcanique",
        text: "Escale au pied du mont Liamuiga : forteresse de Brimstone Hill classée à l'UNESCO, plantations de canne et plages sauvages. Une île volcanique luxuriante et confidentielle.",
        img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=600&h=400&fit=crop&auto=format",
        alt: "Reliefs volcaniques et végétation luxuriante de Saint-Kitts",
        align: "left",
      },
      {
        id: "s6",
        label: "JOURS 6 À 8 — RETOUR",
        title: "Journées en mer & retour à Miami",
        text: "Navigation de retour vers la Floride : piscines, spectacles, cocktails au soleil et derniers couchers de soleil sur l'océan, avant le débarquement à Miami au jour 8.",
        img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=600&h=400&fit=crop&auto=format",
        alt: "Coucher de soleil sur la mer depuis le pont d'un navire de croisière",
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
      "Envie d'îles moins courues ? Voici quelques escales caribéennes plus intimes que nos conseillers adorent.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1622465911368-72162f8da3e2?w=600&h=400&fit=crop&auto=format",
        alt: "Plage déserte et eaux transparentes aux Grenadines",
        tag: "Petites Antilles",
        name: "Les Grenadines",
        text: "Îlots déserts, mouillages de rêve et eaux d'un turquoise irréel, loin des foules.",
      },
      {
        img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=600&h=400&fit=crop&auto=format",
        alt: "Falaises volcaniques des Pitons à Sainte-Lucie",
        tag: "Caraïbes",
        name: "Sainte-Lucie",
        text: "Les Pitons volcaniques plongeant dans la mer, sources chaudes et forêt luxuriante.",
      },
      {
        img: "https://images.unsplash.com/photo-1559535332-db9971090158?w=600&h=400&fit=crop&auto=format",
        alt: "Maisons colorées et front de mer de Curaçao",
        tag: "Antilles néerlandaises",
        name: "Curaçao",
        text: "Façades pastel de Willemstad, criques cachées et fonds marins parmi les plus beaux.",
      },
      {
        img: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=600&h=400&fit=crop&auto=format",
        alt: "Voiliers dans une baie turquoise des Îles Vierges",
        tag: "Caraïbes",
        name: "Îles Vierges",
        text: "Archipel paradisiaque de baies abritées, idéal pour le farniente et le snorkeling.",
      },
    ],
  },
  whenToGo: {
    eyebrow: "Bien choisir sa période",
    h2: "Quand partir en croisière aux Caraïbes ?",
    intro:
      "De décembre à avril, c'est la saison sèche idéale. L'été et l'automne restent possibles mais coïncident avec la saison cyclonique ; votre conseiller affine selon vos dates.",
    rows: [
      {
        destination: "Bahamas",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "ok", "ok", "ideal"],
      },
      {
        destination: "Jamaïque",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Antilles",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "avoid", "ok", "ideal"],
      },
      {
        destination: "République dominicaine",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Cuba",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "avoid", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
      {
        destination: "Mexique (Cozumel)",
        months: ["ideal", "ideal", "ideal", "ideal", "ok", "ok", "ok", "avoid", "avoid", "ok", "ideal", "ideal"],
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir sur votre croisière aux Caraïbes",
    left: [
      {
        question: "Quelle est la meilleure période pour une croisière aux Caraïbes ?",
        answer: (
          <p>
            De décembre à avril, pendant la saison sèche&nbsp;: soleil garanti,
            chaleur agréable et mer calme. L&apos;été et l&apos;automne restent
            possibles mais correspondent à la saison cyclonique. Votre conseiller
            choisit les dates les plus sûres.
          </p>
        ),
      },
      {
        question: "Combien de temps dure une croisière aux Caraïbes ?",
        answer: (
          <p>
            En général 7 à 10 nuits, avec 4 à 6 escales sur des îles
            différentes. Des formats plus courts (3 à 5 nuits) existent au départ
            de la Floride pour une première découverte.
          </p>
        ),
      },
      {
        question: "Les vols et les escales sont-ils inclus ?",
        answer: (
          <p>
            Oui, nous composons un forfait complet&nbsp;: vols vers le port de
            départ, transferts, croisière et excursions à chaque escale, selon la
            formule choisie.
          </p>
        ),
      },
    ],
    right: [
      {
        question: "Une croisière aux Caraïbes convient-elle aux familles ?",
        answer: (
          <p>
            Tout à fait. Les grands navires proposent clubs enfants, piscines et
            activités pour tous les âges, et les escales mêlent plages et baignade.
            Nous sélectionnons la compagnie la plus adaptée.
          </p>
        ),
      },
      {
        question: "Quelles îles visite-t-on pendant la croisière ?",
        answer: (
          <p>
            Selon l&apos;itinéraire&nbsp;: Bahamas, Jamaïque, Antilles, République
            dominicaine, Cuba ou encore Cozumel au Mexique. Nous choisissons le
            parcours aux plus belles plages et eaux turquoise.
          </p>
        ),
      },
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <p>
            Indiquez-nous vos dates, le nombre de voyageurs et vos envies
            d&apos;escales&nbsp;: nous revenons sous 48h avec une proposition
            personnalisée, gratuitement et sans engagement.
          </p>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour une croisière aux Caraïbes ?",
        answer:
          "De décembre à avril, pendant la saison sèche : soleil garanti, chaleur agréable et mer calme. L'été et l'automne coïncident avec la saison cyclonique ; votre conseiller choisit les dates les plus sûres.",
      },
      {
        question: "Combien de temps dure une croisière aux Caraïbes ?",
        answer:
          "En général 7 à 10 nuits avec 4 à 6 escales sur des îles différentes. Des formats plus courts de 3 à 5 nuits existent au départ de la Floride.",
      },
      {
        question: "Les vols et les escales sont-ils inclus ?",
        answer:
          "Oui, nous composons un forfait complet : vols vers le port de départ, transferts, croisière et excursions à chaque escale selon la formule choisie.",
      },
      {
        question: "Une croisière aux Caraïbes convient-elle aux familles ?",
        answer:
          "Oui, les grands navires proposent clubs enfants, piscines et activités pour tous les âges, et les escales mêlent plages et baignade.",
      },
      {
        question: "Quelles îles visite-t-on pendant la croisière ?",
        answer:
          "Selon l'itinéraire : Bahamas, Jamaïque, Antilles, République dominicaine, Cuba ou Cozumel au Mexique, avec un parcours choisi pour ses plus belles plages.",
      },
      {
        question: "Comment obtenir un devis pour une croisière aux Caraïbes ?",
        answer:
          "Indiquez vos dates, le nombre de voyageurs et vos envies d'escales : nous revenons sous 48h avec une proposition personnalisée, gratuite et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Naviguer aux Caraïbes peut se faire mieux&nbsp;: nous privilégions les
        compagnies engagées dans la réduction des émissions et le traitement des
        déchets, les excursions respectueuses des récifs et les acteurs locaux des
        îles. Voyager mieux, pas moins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Prêt à larguer les amarres vers le soleil ?",
    body: "Dites-nous quelles îles vous font rêver — dates, durée, budget — et votre conseiller dédié compose votre croisière aux Caraïbes sur mesure, gratuitement et sans engagement.",
  },
};

export default croisiereCaraibes;
