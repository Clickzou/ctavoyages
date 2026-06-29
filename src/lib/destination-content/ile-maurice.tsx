import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const ileMaurice: DestinationContent = {
  slug: "ile-maurice",
  meta: {
    title:
      "Voyage à l'île Maurice : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à l'île Maurice avec CTA Voyages. Lagons turquoise, plages de sable blanc, terre des 7 couleurs de Chamarel, Grand Bassin, séjour balnéaire ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Lagon turquoise et plage de sable blanc bordée de cocotiers — Voyage à l'île Maurice avec CTA Voyages",
    label: "Destination Île Maurice",
    h1: "Voyage à l'île Maurice : lagons turquoise et douceur de vivre",
    description:
      "Séjour balnéaire de rêve, escapade nature, lune de miel ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+3h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Créole & français",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Roupie (MUR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à décembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'île Maurice, perle de l'océan Indien",
    body: (
      <>
        Posée au cœur de l&apos;océan Indien, l&apos;île Maurice est une invitation
        au lâcher-prise. Ses lagons d&apos;un turquoise irréel, ses plages de sable
        blanc ourlées de cocotiers et ses récifs coralliens en font l&apos;une des
        plus belles destinations balnéaires au monde. Mais l&apos;île ne se résume
        pas à ses rivages de carte postale : à l&apos;intérieur des terres,{" "}
        <strong>la terre des sept couleurs de Chamarel</strong>, les cascades, les
        champs de canne à sucre et les sommets volcaniques composent une nature
        spectaculaire. Métissage des cultures indienne, africaine, chinoise et
        européenne, l&apos;île Maurice charme par son <strong>hospitalité</strong>,
        sa cuisine créole parfumée et la sérénité de lieux sacrés comme{" "}
        <strong>Grand Bassin</strong>. Farniente sur une plage déserte, sortie en
        catamaran vers l&apos;île aux Cerfs, randonnée dans le sud sauvage ou
        flânerie au marché de Port-Louis : l&apos;île Maurice se vit aussi bien en{" "}
        <strong>séjour balnéaire</strong> qu&apos;en <strong>escapade nature</strong>,
        en <strong>voyage de noces</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à l'île Maurice ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des lagons paradisiaques",
        text: "Sable blanc, eaux turquoise et récifs préservés : Belle Mare, Flic en Flac et la péninsule du Morne comptent parmi les plus beaux lagons de l'océan Indien.",
        img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon turquoise et plage de sable blanc à l'île Maurice",
      },
      {
        icon: "landscape",
        title: "Une nature spectaculaire",
        text: "Terre des sept couleurs de Chamarel, cascades, montagnes volcaniques et forêts : l'intérieur de l'île dévoile des paysages d'une beauté saisissante.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Terre des sept couleurs de Chamarel à l'île Maurice",
      },
      {
        icon: "ramen_dining",
        title: "Une cuisine métissée",
        text: "Cari, rougaille, dholl puri, gâteaux-piments : la gastronomie mauricienne mêle saveurs indiennes, créoles, chinoises et françaises sur les marchés colorés.",
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&h=600&fit=crop&auto=format",
        alt: "Étal coloré de fruits et épices sur un marché mauricien",
      },
      {
        icon: "scuba_diving",
        title: "Une mer généreuse",
        text: "Plongée, snorkeling, sorties en catamaran et rencontre des dauphins : le lagon mauricien est un terrain de jeu idéal pour les amoureux de la mer.",
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop&auto=format",
        alt: "Catamaran naviguant sur le lagon turquoise de l'île Maurice",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à l'île Maurice",
    steps: [
      {
        id: "arrivee",
        label: "JOUR 1",
        title: "Arrivée & installation",
        text: "Accueil à l'aéroport et transfert vers votre hôtel les pieds dans l'eau. Première baignade dans le lagon, coucher de soleil sur la plage et premier dîner créole pour entrer en douceur dans l'ambiance mauricienne.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop&auto=format",
        alt: "Hôtel les pieds dans l'eau au coucher du soleil à l'île Maurice",
        align: "left",
      },
      {
        id: "nord",
        label: "JOURS 2 À 3",
        title: "Lagon & plages du nord",
        text: "Détente sur les plages réputées du nord, de Grand Baie à Trou aux Biches. Baignade, snorkeling au-dessus des récifs et farniente sous les filaos, ponctués d'une escapade shopping à Grand Baie.",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc et cocotiers dans le nord de l'île Maurice",
        align: "right",
      },
      {
        id: "ile-aux-cerfs",
        label: "JOUR 4",
        title: "Île aux Cerfs en catamaran",
        text: "Journée en catamaran vers l'île aux Cerfs, joyau de la côte est. Eaux cristallines, déjeuner barbecue à bord, baignade au-dessus des coraux et arrêt à la cascade de Grande Rivière Sud-Est.",
        img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=800&h=600&fit=crop&auto=format",
        alt: "Catamaran ancré près de l'île aux Cerfs, île Maurice",
        align: "left",
      },
      {
        id: "chamarel",
        label: "JOUR 5",
        title: "Terre des 7 couleurs de Chamarel",
        text: "Cap sur l'ouest et le village de Chamarel : la célèbre terre des sept couleurs, sa cascade vertigineuse, sa rhumerie artisanale et ses points de vue panoramiques sur les montagnes.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes ondulées de la terre des sept couleurs de Chamarel",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "sud",
        label: "JOURS 6 À 7",
        title: "Sud sauvage & Grand Bassin",
        text: "Exploration du sud sauvage : falaises battues par l'océan, plages de Gris-Gris et lac sacré de Grand Bassin, haut lieu spirituel hindou entouré de temples et de statues monumentales.",
        img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&h=600&fit=crop&auto=format",
        alt: "Lac sacré de Grand Bassin et ses temples hindous, île Maurice",
        align: "left",
      },
      {
        id: "port-louis",
        label: "JOUR 8",
        title: "Marché de Port-Louis & départ",
        text: "Immersion finale dans la capitale : le marché central de Port-Louis, ses épices et ses fruits exotiques, le front de mer du Caudan, puis transfert vers l'aéroport, des souvenirs plein la tête.",
        img: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=800&h=600&fit=crop&auto=format",
        alt: "Marché central animé de Port-Louis, île Maurice",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme la plongée à Trou aux Biches, la randonnée au
        Morne Brabant ou une excursion vers l&apos;île aux Aigrettes peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à l'île Maurice",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;île Maurice&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;île Maurice se visite toute l&apos;année grâce à son climat
              tropical, mais deux saisons se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (mai à décembre)</strong> : la période idéale,
                ensoleillée et plus fraîche, parfaite pour la plage comme pour les
                excursions.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison chaude et humide (janvier à avril)</strong> :
                températures élevées, eau très chaude, idéale pour la baignade malgré
                quelques averses.
              </li>
              <li>
                <Icon name="check" />
                <strong>Octobre à avril</strong> : la meilleure période pour la
                plongée et l&apos;observation des dauphins.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et la côte les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre à l&apos;île Maurice&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient
              d&apos;une exemption de visa pour un séjour touristique.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date de
                retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>billet de retour</strong> et un justificatif
                d&apos;hébergement peuvent être demandés à l&apos;arrivée.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour au moment de votre
              réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous à l&apos;île Maurice&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour l&apos;île
              Maurice :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour balnéaire</strong> : resort les pieds dans l&apos;eau,
                en formule au choix.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit & découverte</strong> : combiné plage et excursions à
                l&apos;intérieur de l&apos;île.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et expériences
                privatisées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné multi-îles</strong> : Maurice associée à La Réunion ou
                aux Seychelles.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                La <strong>côte et les étapes</strong> : nord, est, ouest, sud
                sauvage…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : resort 5 étoiles, hôtel
                de charme, villa privée.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : catamaran, plongée,
                golf, spa, excursions nature.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à l&apos;île Maurice&nbsp;?</>,
        answer: (
          <>
            <p>Le budget dépend de plusieurs facteurs :</p>
            <ul>
              <li>
                <Icon name="check" />
                La durée du séjour
              </li>
              <li>
                <Icon name="check" />
                La période de départ
              </li>
              <li>
                <Icon name="check" />
                Le niveau d&apos;hébergement souhaité
              </li>
              <li>
                <Icon name="check" />
                La formule choisie (petit-déjeuner, demi-pension, all inclusive)
              </li>
              <li>
                <Icon name="check" />
                Les activités et excursions incluses
              </li>
            </ul>
            <p>
              Pour obtenir une estimation,{" "}
              <a href="/demande-devis">contactez-nous</a>. Nos conseillers vous
              adressent une proposition personnalisée, gratuite et sans engagement.
            </p>
          </>
        ),
      },
      {
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout, bien au contraire.</strong> Le français est
              largement parlé à l&apos;île Maurice :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Français et créole</strong> sont compris partout, en plus de
                l&apos;anglais.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets, bons,
                programmes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout votre
                séjour.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels hébergements proposez-vous&nbsp;?</>,
        answer: (
          <>
            <p>Nous sélectionnons les hébergements selon vos préférences :</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Resorts 4 et 5 étoiles</strong> les pieds dans l&apos;eau, sur
                les plus beaux lagons.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels de charme</strong> et boutique-hôtels de caractère.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas privées</strong> avec piscine, idéales en famille ou
                entre amis.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses romantiques</strong> parfaites pour un voyage de
                noces.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment demander un devis&nbsp;?</>,
        answer: (
          <>
            <p>C&apos;est simple, rapide et gratuit :</p>
            <ul>
              <li>
                <Icon name="description" />
                Via notre <strong>formulaire en ligne</strong>.
              </li>
              <li>
                <Icon name="call" />
                Par téléphone : <strong>+33 (0)5 34 391 391</strong>
              </li>
              <li>
                <Icon name="mail" />
                Par email : <strong>voyages@cta-events.com</strong>
              </li>
            </ul>
            <p>
              Nos conseillers vous répondent <strong>sous 48h</strong>, gratuitement
              et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter l'île Maurice ?",
        answer:
          "La saison sèche, de mai à décembre, est la période idéale : ensoleillée et plus fraîche, parfaite pour la plage comme pour les excursions. D'octobre à avril, l'eau est très chaude, idéale pour la plongée et l'observation des dauphins.",
      },
      {
        question: "Faut-il un visa pour se rendre à l'île Maurice ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous à l'île Maurice ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits découverte, des combinés multi-îles, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à l'île Maurice ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à l'île Maurice ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, la formule choisie et les excursions incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à l'île Maurice ?",
        answer:
          "Non, bien au contraire. Le français et le créole sont parlés partout, en plus de l'anglais, et nous fournissons tous les documents de voyage en français.",
      },
      {
        question: "Quels hébergements proposez-vous à l'île Maurice ?",
        answer:
          "Resorts 4 et 5 étoiles les pieds dans l'eau, hôtels de charme, villas privées avec piscine et adresses romantiques pour un voyage de noces.",
      },
      {
        question: "Comment demander un devis pour un voyage à l'île Maurice ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À l&apos;île Maurice comme
        ailleurs, nous privilégions des prestataires locaux responsables, des
        excursions respectueuses du lagon et des récifs coralliens, et un tourisme
        soucieux de préserver les écosystèmes et les communautés de l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à l'île Maurice commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, escapade nature, voyage de noces ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default ileMaurice;
