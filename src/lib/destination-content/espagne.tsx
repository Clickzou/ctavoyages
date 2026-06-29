import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const espagne: DestinationContent = {
  slug: "espagne",
  meta: {
    title:
      "Voyage en Espagne : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Espagne avec CTA Voyages. Barcelone et Gaudí, Madrid, l'Alhambra de Grenade, l'Alcázar de Séville, Cordoue, Valence : circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Façade de la Sagrada Família à Barcelone au coucher du soleil — Voyage en Espagne avec CTA Voyages",
    label: "Destination Espagne",
    h1: "Voyage en Espagne : art, soleil et art de vivre",
    description:
      "Circuit culturel, escapade citadine, séjour balnéaire ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "Aucun",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Espagnol",
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
      value: "Avril à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Espagne, la Passion à Fleur de Peau",
    body: (
      <>
        Terre de contrastes et de passions, l&apos;Espagne marie l&apos;exubérance
        moderniste de <strong>Barcelone</strong> à la grandeur royale de{" "}
        <strong>Madrid</strong>, les patios fleuris d&apos;Andalousie aux plages
        dorées de la Méditerranée. Des courbes folles de Gaudí aux palais
        mauresques de l&apos;<strong>Alhambra</strong> et de l&apos;
        <strong>Alcázar</strong>, des tablaos flamencos aux comptoirs à tapas, chaque
        ville révèle une facette de ce pays où l&apos;art, la fête et l&apos;art de
        vivre se conjuguent avec une intensité unique. Flâner dans les ruelles du
        quartier de Santa Cruz à Séville, s&apos;émerveiller sous les arcs bicolores
        de la <strong>Mezquita</strong> de Cordoue, savourer une paella face à la mer
        à Valence ou se perdre dans les salles du Prado : l&apos;Espagne se vit aussi
        bien en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>escapade citadine</strong>, en <strong>séjour balnéaire</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Espagne ?",
    cards: [
      {
        icon: "church",
        title: "Un patrimoine d'exception",
        text: "Alhambra, Sagrada Família, Mezquita de Cordoue, Alcázar de Séville : l'Espagne concentre certains des plus beaux monuments d'Europe, entre héritage mauresque et génie moderniste.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&auto=format",
        alt: "Cour des Lions de l'Alhambra de Grenade",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie généreuse",
        text: "Tapas, paella valencienne, jambon ibérique, gazpacho et grands vins de la Rioja : la table espagnole est une fête conviviale à partager sans modération.",
        img: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&h=600&fit=crop&auto=format",
        alt: "Assortiment de tapas espagnoles colorées",
      },
      {
        icon: "celebration",
        title: "Une culture vibrante",
        text: "Flamenco andalou, ferias, fêtes de village et terrasses animées jusqu'au bout de la nuit : l'Espagne se vit avec passion et un art de vivre communicatif.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop&auto=format",
        alt: "Danseuse de flamenco en robe rouge",
      },
      {
        icon: "beach_access",
        title: "Soleil et plages dorées",
        text: "Costa Brava, plages de Valence, criques des Baléares : entre deux visites, l'Espagne offre des escales balnéaires baignées de soleil presque toute l'année.",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&auto=format",
        alt: "Crique aux eaux turquoise sur la côte espagnole",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Espagne",
    steps: [
      {
        id: "barcelone",
        label: "JOURS 1 À 3",
        title: "Barcelone : le génie de Gaudí",
        text: "Immersion dans la capitale catalane : la Sagrada Família, le Parc Güell, la Casa Batlló et la Pedrera, puis les ruelles du quartier gothique et les terrasses animées des Ramblas.",
        img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop&auto=format",
        alt: "Barcelone",
        align: "left",
      },
      {
        id: "madrid",
        label: "JOURS 4 À 5",
        title: "Madrid : la capitale royale",
        text: "Cap sur Madrid et ses trésors : le musée du Prado, le Palais Royal, la Plaza Mayor et l'animation de ses tavernes à tapas. Une capitale élégante où l'art et la fête ne s'arrêtent jamais.",
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop&auto=format",
        alt: "Madrid",
        align: "right",
      },
      {
        id: "seville",
        label: "JOURS 6 À 7",
        title: "Séville & l'Alcázar",
        text: "Plongée au cœur de l'Andalousie : le palais de l'Alcázar et ses jardins, la cathédrale et sa Giralda, le quartier de Santa Cruz et une soirée flamenco inoubliable.",
        img: "https://images.unsplash.com/photo-1559070169-a3077159ee16?w=800&h=600&fit=crop&auto=format",
        alt: "Séville",
        align: "left",
      },
      {
        id: "grenade",
        label: "JOURS 8 À 9",
        title: "Grenade & l'Alhambra",
        text: "Le joyau de l'art mauresque : l'Alhambra et ses palais nasrides, les jardins du Generalife et le quartier de l'Albaicín, face à la Sierra Nevada au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=800&h=600&fit=crop&auto=format",
        alt: "Grenade",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "cordoue",
        label: "JOUR 10",
        title: "Cordoue : la Mezquita",
        text: "Étape envoûtante à Cordoue : la grande Mosquée-Cathédrale et sa forêt de colonnes aux arcs bicolores, les patios fleuris de la Judería et le pont romain sur le Guadalquivir.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&auto=format",
        alt: "Cordoue",
        align: "left",
      },
      {
        id: "valence",
        label: "JOURS 11 À 12",
        title: "Valence : final méditerranéen",
        text: "Cap à l'est pour clôturer le voyage : la Cité des Arts et des Sciences, le marché central, la dégustation d'une authentique paella et un dernier moment de détente sur les plages de la Méditerranée.",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop&auto=format",
        alt: "Valence",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Tolède, Saint-Sébastien, Bilbao et son musée
        Guggenheim ou les îles Baléares peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Espagne",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Espagne&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Espagne se visite toute l&apos;année, mais deux saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : climat doux et idéal,
                parfait pour la culture, l&apos;Andalousie et les ferias.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet-août)</strong> : chaleur et ambiance festive,
                idéal pour les plages et les îles, plus chaud à l&apos;intérieur.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre-octobre)</strong> : lumière magnifique,
                températures agréables et affluence plus douce.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et les régions les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Espagne&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> L&apos;Espagne fait partie de l&apos;Union
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
                Aucun visa n&apos;est nécessaire pour un séjour touristique.
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
        question: <>Quels types de voyages proposez-vous en Espagne&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour l&apos;Espagne :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : escapade citadine à Barcelone ou Madrid,
                ou balnéaire sur la côte.
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
                <strong>Combiné villes &amp; Andalousie</strong> : les grandes
                capitales puis les joyaux mauresques.
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
                Les <strong>étapes et la durée</strong> : Barcelone, Madrid, Séville,
                Grenade, Cordoue, Valence…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, palace,
                parador historique.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : spectacle de flamenco,
                visite guidée privée, dégustation de vins.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Espagne&nbsp;?</>,
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
        question: <>Comment se déplacer en Espagne&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Les options ne manquent pas</strong> et nous organisons tout
              pour vous :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Train à grande vitesse (AVE)</strong> : rapide et confortable
                entre les grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voiture de location</strong> : idéale pour explorer
                l&apos;Andalousie et les villages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Transferts privés et guides</strong> francophones selon vos
                besoins.
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
                <strong>Paradores historiques</strong> installés dans des monuments
                d&apos;exception.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels balnéaires</strong> face à la Méditerranée.
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
        question: "Quelle est la meilleure période pour visiter l'Espagne ?",
        answer:
          "Le printemps (avril à juin) et l'automne (septembre-octobre) offrent un climat doux idéal pour la culture et l'Andalousie. L'été est parfait pour les plages et les îles, avec une ambiance festive.",
      },
      {
        question: "Faut-il un visa pour se rendre en Espagne ?",
        answer:
          "Non. L'Espagne fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous en Espagne ?",
        answer:
          "CTA Voyages propose des séjours citadins ou balnéaires, des circuits culturels, des combinés villes et Andalousie, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Espagne ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Espagne ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplacer en Espagne ?",
        answer:
          "Train à grande vitesse AVE entre les grandes villes, voiture de location pour l'Andalousie et les villages, transferts privés et guides francophones. Nous organisons tout pour vous.",
      },
      {
        question: "Quels hébergements proposez-vous en Espagne ?",
        answer:
          "Hôtels 4 et 5 étoiles, paradores historiques installés dans des monuments d'exception, hôtels balnéaires face à la Méditerranée et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Espagne ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Espagne comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements engagés
        et un tourisme respectueux des cultures, du patrimoine et des écosystèmes
        méditerranéens.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Espagne commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné villes et Andalousie ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default espagne;
