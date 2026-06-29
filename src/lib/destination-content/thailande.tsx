import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const thailande: DestinationContent = {
  slug: "thailande",
  meta: {
    title:
      "Voyage en Thaïlande : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Thaïlande avec CTA Voyages. Temples de Bangkok, triangle d'or de Chiang Mai, plages de la mer d'Andaman, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Temple bouddhiste doré au coucher du soleil — Voyage en Thaïlande avec CTA Voyages",
    label: "Destination Thaïlande",
    h1: "Voyage en Thaïlande : temples dorés et îles paradisiaques",
    description:
      "Circuit culturel, séjour balnéaire, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+5h / +6h",
      minuteRotation: "2160deg",
      hourRotation: "180deg",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Thaï",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Baht (THB)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Nov. à Mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Thaïlande, le Sourire de l'Asie",
    body: (
      <>
        Joyau de l&apos;Asie du Sud-Est, la Thaïlande déploie ses temples scintillants,
        ses marchés flottants et ses plages de carte postale dans une atmosphère
        d&apos;une douceur unique. De l&apos;effervescence trépidante de Bangkok à la
        sérénité des rizières du Nord, des sanctuaires d&apos;éléphants de{" "}
        <strong>Chiang Mai</strong> aux eaux turquoise de la{" "}
        <strong>mer d&apos;Andaman</strong>, chaque étape révèle une facette de ce
        royaume où spiritualité, gastronomie de rue légendaire et hospitalité
        chaleureuse se conjuguent à merveille. Naviguer entre les pitons calcaires de
        Krabi, s&apos;initier à la cuisine thaïe, méditer dans un temple au lever du
        jour ou se prélasser sur une plage déserte : la Thaïlande se vit aussi bien
        en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>séjour balnéaire</strong>, en <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Thaïlande ?",
    cards: [
      {
        icon: "temple_buddhist",
        title: "Des temples fascinants",
        text: "Wat Arun, Wat Pho, Grand Palais, temples du Nord : la Thaïlande est une plongée vibrante au cœur du bouddhisme et de l'art khmer.",
        img: "/assets/images/thailande/thailande-temple.jpg",
        alt: "Temple Wat Arun au bord de la rivière Chao Phraya à Bangkok",
      },
      {
        icon: "beach_access",
        title: "Des plages de rêve",
        text: "Eaux turquoise, pitons calcaires et sable blanc : Krabi, Koh Phi Phi et Koh Lanta comptent parmi les plus belles plages du monde.",
        img: "/assets/images/thailande/thailande-plage.jpg",
        alt: "Plage de Railay aux eaux turquoise et falaises calcaires, Krabi",
      },
      {
        icon: "ramen_dining",
        title: "Une gastronomie de rue",
        text: "Pad thaï, curry vert, mangue collante, marchés de nuit : la cuisine thaïe est une explosion de saveurs, parmi les plus appréciées au monde.",
        img: "/assets/images/thailande/thailande-streetfood.jpg",
        alt: "Préparation de street food sur un marché de Bangkok",
      },
      {
        icon: "forest",
        title: "Une nature généreuse",
        text: "Jungle luxuriante, rizières en terrasses et sanctuaires d'éléphants éthiques : le Nord thaïlandais est une invitation à l'aventure responsable.",
        img: "/assets/images/thailande/thailande-elephant.jpg",
        alt: "Éléphant dans un sanctuaire éthique près de Chiang Mai",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Thaïlande",
    steps: [
      {
        id: "bangkok",
        label: "JOURS 1 À 3",
        title: "Bangkok : la capitale trépidante",
        text: "Immersion dans l'énergie de Bangkok : le Grand Palais, Wat Pho et son Bouddha couché, Wat Arun au coucher du soleil et les marchés animés de Chinatown.",
        img: "/assets/images/thailande/thailande-bangkok.jpg",
        alt: "Bangkok",
        align: "left",
      },
      {
        id: "ayutthaya",
        label: "JOUR 4",
        title: "Ayutthaya : l'ancienne capitale",
        text: "Excursion vers les ruines majestueuses d'Ayutthaya, classées à l'UNESCO, et ses temples enlacés par les racines. Sur la route, le célèbre marché flottant de Damnoen Saduak.",
        img: "/assets/images/thailande/thailande-ayutthaya.jpg",
        alt: "Ayutthaya",
        align: "right",
      },
      {
        id: "chiang-mai",
        label: "JOURS 5 À 7",
        title: "Chiang Mai : la rose du Nord",
        text: "Au cœur des montagnes, Chiang Mai et ses temples séculaires, son marché de nuit et son sanctuaire d'éléphants éthique. Initiation à la cuisine thaïe et rencontre des artisans locaux.",
        img: "/assets/images/thailande/thailande-chiang-mai.jpg",
        alt: "Chiang Mai",
        align: "left",
      },
      {
        id: "chiang-rai",
        label: "JOUR 8",
        title: "Chiang Rai : le temple blanc",
        text: "Découverte du Wat Rong Khun, l'éblouissant temple blanc, et des paysages du triangle d'or, à la frontière du Laos et de la Birmanie.",
        img: "/assets/images/thailande/thailande-chiang-rai.jpg",
        alt: "Chiang Rai",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "krabi",
        label: "JOURS 9 À 12",
        title: "Krabi & les îles : final balnéaire",
        text: "Envol vers le Sud et ses eaux turquoise : plages de Railay, sortie en bateau vers les îles Phi Phi et farniente face à la mer d'Andaman pour clôturer le voyage en beauté.",
        img: "/assets/images/thailande/thailande-maya-bay.jpg",
        alt: "Krabi",
        align: "left",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages adaptera chaque étape selon vos
        envies, votre rythme et votre budget. D&apos;autres étapes comme Sukhothai,
        Kanchanaburi ou les îles de Koh Samui et Koh Lanta peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Thaïlande",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Thaïlande&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Thaïlande se visite presque toute l&apos;année, mais une saison se
              distingue :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (novembre à mars)</strong> : la période idéale,
                ensoleillée et plus fraîche, parfaite pour combiner culture et
                plages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison chaude (avril à juin)</strong> : températures élevées,
                idéale pour les îles et la baignade.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison verte (juillet à octobre)</strong> : averses courtes,
                paysages luxuriants et tarifs plus doux.
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
        question: <>Faut-il un visa pour se rendre en Thaïlande&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient d&apos;une
              exemption de visa pour un séjour touristique.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date de
                retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>billet de retour</strong> peut être demandé à
                l&apos;arrivée.
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
        question: <>Quels types de voyages proposez-vous en Thaïlande&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Thaïlande :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire dans les îles ou citadin à
                Bangkok.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné culture &amp; plage</strong> : le Nord et les temples,
                puis les plages du Sud.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et expériences
                privatisées.
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
                Les <strong>étapes et la durée</strong> : Bangkok, Chiang Mai,
                Ayutthaya, Krabi, Koh Samui…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, resort pieds dans
                l&apos;eau, lodge en pleine nature.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : cours de cuisine,
                sanctuaire d&apos;éléphants, plongée.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Thaïlande&nbsp;?</>,
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
                Le type de voyage choisi
              </li>
              <li>
                <Icon name="check" />
                Les activités et prestations incluses
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
              <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales visites.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plus belles
                plages des îles.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et écolodges</strong> au cœur de la jungle du Nord.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de caractère.
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
        question: "Quelle est la meilleure période pour visiter la Thaïlande ?",
        answer:
          "La saison sèche, de novembre à mars, est la période idéale : ensoleillée et plus fraîche, parfaite pour combiner culture et plages. La saison verte (juillet-octobre) offre des paysages luxuriants et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre en Thaïlande ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Thaïlande ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits culturels, des combinés culture et plage, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Thaïlande ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Thaïlande ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Thaïlande ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Thaïlande ?",
        answer:
          "Hôtels 4 et 5 étoiles, resorts pieds dans l'eau sur les îles, lodges au cœur de la jungle et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Thaïlande ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Thaïlande comme ailleurs, nous
        privilégions des prestataires locaux responsables, des sanctuaires
        d&apos;éléphants éthiques et un tourisme respectueux des cultures et des
        écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Thaïlande commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné culture et plage ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default thailande;
