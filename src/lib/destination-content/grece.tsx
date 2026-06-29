import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const grece: DestinationContent = {
  slug: "grece",
  meta: {
    title:
      "Voyage en Grèce : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Grèce avec CTA Voyages. Acropole d'Athènes, Delphes, Météores, Santorin, Mykonos et Crète : circuit, séjour balnéaire ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Maisons blanches et coupoles bleues face à la mer Égée — Voyage en Grèce avec CTA Voyages",
    label: "Destination Grèce",
    h1: "Voyage en Grèce : berceau de la civilisation et îles de rêve",
    description:
      "Circuit antique, séjour insulaire, escapade culturelle ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+1h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~3h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Grec",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Euro (EUR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Grèce, berceau de la civilisation",
    body: (
      <>
        Terre des dieux et des philosophes, la Grèce déploie ses temples
        millénaires, ses villages blanchis à la chaux et ses eaux d&apos;un bleu
        irréel dans une lumière incomparable. De l&apos;effervescence
        historique d&apos;<strong>Athènes</strong> au mystère des oracles de{" "}
        <strong>Delphes</strong>, des monastères suspendus des{" "}
        <strong>Météores</strong> aux caldeiras flamboyantes de{" "}
        <strong>Santorin</strong>, chaque étape révèle une facette de ce pays où
        mythologie, gastronomie ensoleillée et hospitalité légendaire — la
        fameuse <em>philoxenia</em> — se conjuguent à merveille. Flâner dans les
        ruelles de Mykonos, plonger dans les criques turquoise de la Crète,
        savourer une moussaka face au coucher de soleil ou contempler le
        Parthénon au crépuscule : la Grèce se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>séjour insulaire</strong>, en <strong>escapade nature</strong>{" "}
        ou en <strong>voyage entièrement sur mesure</strong>. Votre conseiller
        CTA Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à
        votre rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Grèce ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine antique",
        text: "Acropole, Delphes, Olympie, Épidaure : la Grèce est un musée à ciel ouvert où naissent la démocratie, le théâtre et la philosophie.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&auto=format",
        alt: "Le Parthénon sur l'Acropole d'Athènes au coucher du soleil",
      },
      {
        icon: "beach_access",
        title: "Des îles de rêve",
        text: "Coupoles bleues, criques turquoise et villages immaculés : Santorin, Mykonos et les Cyclades comptent parmi les plus belles îles de Méditerranée.",
        img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop&auto=format",
        alt: "Maisons blanches et coupoles bleues de Santorin face à la mer Égée",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie ensoleillée",
        text: "Moussaka, souvlaki, féta, huile d'olive et vins locaux : la cuisine grecque, pilier du régime méditerranéen, est un pur bonheur de partage.",
        img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&h=600&fit=crop&auto=format",
        alt: "Table de mezze grecs avec féta, olives et légumes grillés",
      },
      {
        icon: "hiking",
        title: "Une nature spectaculaire",
        text: "Monastères suspendus des Météores, gorges de Samaria en Crète et sentiers côtiers : la Grèce continentale et insulaire est une invitation à l'aventure.",
        img: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&h=600&fit=crop&auto=format",
        alt: "Monastères perchés sur les pitons rocheux des Météores",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Grèce",
    steps: [
      {
        id: "athenes",
        label: "JOURS 1 À 3",
        title: "Athènes : aux sources de l'Antiquité",
        text: "Immersion dans la capitale historique : l'Acropole et le Parthénon, l'Agora antique, le musée de l'Acropole et les ruelles animées de Plaka au pied du rocher sacré.",
        img: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&auto=format",
        alt: "L'Acropole d'Athènes et le Parthénon",
        align: "left",
      },
      {
        id: "delphes",
        label: "JOUR 4",
        title: "Delphes : le nombril du monde",
        text: "Excursion vers le sanctuaire d'Apollon à Delphes, classé à l'UNESCO, où la Pythie rendait ses oracles. Le temple, le théâtre et le stade dominent une vallée d'oliviers à couper le souffle.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&auto=format",
        alt: "Ruines du sanctuaire d'Apollon à Delphes",
        align: "right",
      },
      {
        id: "meteores",
        label: "JOURS 5 À 6",
        title: "Les Météores : monastères suspendus",
        text: "Découverte des Météores, ces monastères orthodoxes perchés au sommet de pitons rocheux vertigineux. Un site spirituel et naturel unique au monde, lui aussi classé à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Monastère des Météores perché sur un piton rocheux",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "santorin",
        label: "JOURS 7 À 9",
        title: "Santorin : la perle des Cyclades",
        text: "Envol vers la mer Égée et la mythique caldeira de Santorin : villages d'Oia et de Fira accrochés aux falaises, couchers de soleil légendaires, plages volcaniques et vignobles.",
        img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop&auto=format",
        alt: "Village d'Oia à Santorin au coucher du soleil",
        align: "right",
      },
      {
        id: "mykonos",
        label: "JOURS 10 À 11",
        title: "Mykonos : l'île festive et chic",
        text: "Cap sur Mykonos et ses moulins emblématiques, sa Petite Venise, ses ruelles immaculées et ses plages animées. Une escale conviviale entre farniente et art de vivre cycladique.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&auto=format",
        alt: "Moulins à vent blancs de Mykonos face à la mer",
        align: "left",
      },
      {
        id: "crete",
        label: "JOURS 12 À 14",
        title: "La Crète : final entre mer et histoire",
        text: "Dernière étape sur la plus grande île grecque : palais minoen de Knossos, vieille ville vénitienne de La Canée, lagon de Balos et gorges de Samaria pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon de Balos aux eaux turquoise en Crète",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le Péloponnèse, Olympie, Nauplie, Rhodes ou
        les îles ioniennes de Corfou et Zante peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Grèce",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Grèce&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Grèce se savoure d&apos;avril à octobre, avec quelques nuances
              :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : la période idéale,
                douce et fleurie, parfaite pour les sites antiques et les
                premières baignades.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet à août)</strong> : chaud et ensoleillé,
                idéal pour les îles et la vie nocturne, mais plus fréquenté.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à octobre)</strong> : mer encore
                chaude, lumière dorée et affluence en baisse.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et les îles les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Grèce&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, la Grèce fait partie de l&apos;Union
              européenne et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit pour les ressortissants français.
              </li>
              <li>
                <Icon name="check" />
                Aucune formalité de visa n&apos;est requise pour un séjour
                touristique.
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
        question: <>Quels types de voyages proposez-vous en Grèce&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Grèce
              :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire dans les Cyclades ou citadin
                à Athènes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné continent &amp; îles</strong> : sites antiques
                puis cabotage dans les Cyclades.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et
                couchers de soleil à Santorin.
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
                Les <strong>étapes et la durée</strong> : Athènes, Delphes,
                Météores, Santorin, Mykonos, Crète…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de
                caractère, suite avec vue caldeira, villa face à la mer.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : croisière entre
                les îles, dégustation de vins, visites guidées privées.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Grèce&nbsp;?</>,
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
              adressent une proposition personnalisée, gratuite et sans
              engagement.
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
                <strong>Guides francophones</strong> pour les principales
                visites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets,
                bons, programmes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout
                votre séjour.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur d&apos;Athènes et
                des grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Suites avec vue caldeira</strong> sur les falaises de
                Santorin.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas et maisons cycladiques</strong> face à la mer
                Égée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de
                caractère.
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
              Nos conseillers vous répondent <strong>sous 48h</strong>,
              gratuitement et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Grèce ?",
        answer:
          "La Grèce se visite d'avril à octobre. Le printemps (avril-juin) est idéal pour les sites antiques, l'été (juillet-août) pour les îles, et l'automne (septembre-octobre) offre une mer encore chaude avec moins d'affluence.",
      },
      {
        question: "Faut-il un visa pour se rendre en Grèce ?",
        answer:
          "Non, la Grèce fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous en Grèce ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits culturels, des combinés continent et îles, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Grèce ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Grèce ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Grèce ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Grèce ?",
        answer:
          "Hôtels 4 et 5 étoiles à Athènes, suites avec vue caldeira à Santorin, villas cycladiques face à la mer et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Grèce ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Grèce comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements
        engagés et un tourisme respectueux des îles, de leur patrimoine et de
        leurs écosystèmes fragiles.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Grèce commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné continent et îles ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default grece;
