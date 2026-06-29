import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const republiqueDominicaine: DestinationContent = {
  slug: "republique-dominicaine",
  meta: {
    title:
      "Voyage en République dominicaine : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en République dominicaine avec CTA Voyages. Plages de Punta Cana, île de Saona, baleines de Samaná, zone coloniale de Saint-Domingue, séjour ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Plage de sable blanc bordée de cocotiers et d'eaux turquoise — Voyage en République dominicaine avec CTA Voyages",
    label: "Destination République dominicaine",
    h1: "Voyage en République dominicaine : plages de rêve et âme caribéenne",
    description:
      "Séjour balnéaire, circuit découverte, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~9h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-5h / -6h",
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
      value: "Peso (DOP)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Décembre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La République dominicaine, perle des Caraïbes",
    body: (
      <>
        Baignée par l&apos;océan Atlantique et la mer des Caraïbes, la République
        dominicaine déploie ses plages de sable blanc, ses cocoteraies à perte de
        vue et ses eaux turquoise dans une atmosphère où le rythme du merengue ne
        s&apos;arrête jamais. Des resorts pieds dans l&apos;eau de{" "}
        <strong>Punta Cana</strong> aux ruelles pavées de la zone coloniale de{" "}
        <strong>Saint-Domingue</strong>, première ville fondée par les Européens dans
        le Nouveau Monde, des baleines à bosse de la{" "}
        <strong>presqu&apos;île de Samaná</strong> aux mangroves sauvages du parc des{" "}
        <strong>Los Haitises</strong>, chaque étape révèle une facette de cette île
        généreuse où farniente, nature exubérante et patrimoine se conjuguent à
        merveille. Se prélasser sur une plage déserte de l&apos;île de Saona, sentir
        la fraîcheur d&apos;une cascade au cœur des terres, danser au son de la
        bachata ou savourer un café local face à l&apos;océan : la République
        dominicaine se vit aussi bien en{" "}
        <strong>séjour balnéaire</strong> qu&apos;en{" "}
        <strong>circuit découverte</strong>, en <strong>escapade nature</strong> ou
        en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en République dominicaine ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des plages paradisiaques",
        text: "Sable blanc, cocotiers et lagons turquoise : Punta Cana, Bávaro et l'île de Saona comptent parmi les plus belles plages des Caraïbes.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc et cocotiers face à un lagon turquoise à Punta Cana",
      },
      {
        icon: "sailing",
        title: "Baleines & nature sauvage",
        text: "Baleines à bosse de Samaná, mangroves des Los Haitises, cascades du Limón : la nature dominicaine est une invitation à l'émerveillement.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&auto=format",
        alt: "Baleine à bosse émergeant dans la baie de Samaná",
      },
      {
        icon: "account_balance",
        title: "Un patrimoine colonial",
        text: "La zone coloniale de Saint-Domingue, classée à l'UNESCO, abrite la première cathédrale et la première rue pavée des Amériques.",
        img: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800&h=600&fit=crop&auto=format",
        alt: "Ruelle pavée et façades coloniales de la zone coloniale de Saint-Domingue",
      },
      {
        icon: "music_note",
        title: "Une culture chaleureuse",
        text: "Merengue, bachata, rhum et cigares : l'âme dominicaine se vit au rythme d'une hospitalité joyeuse et d'une convivialité contagieuse.",
        img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=600&fit=crop&auto=format",
        alt: "Musiciens jouant du merengue dans une rue colorée de République dominicaine",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en République dominicaine",
    steps: [
      {
        id: "punta-cana",
        label: "JOURS 1 À 3",
        title: "Punta Cana : plages de carte postale",
        text: "Arrivée à Punta Cana et premiers instants de farniente sur les plages de Bávaro : sable blanc, cocotiers et lagon turquoise, le décor parfait pour se mettre à l'heure caribéenne.",
        img: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=900&h=700&fit=crop&auto=format",
        alt: "Plage de Bávaro à Punta Cana",
        align: "left",
      },
      {
        id: "saona",
        label: "JOUR 4",
        title: "L'île de Saona : un lagon de rêve",
        text: "Excursion en catamaran vers l'île de Saona, au cœur du parc national de l'Est : piscines naturelles, étoiles de mer et déjeuner les pieds dans le sable sur une plage déserte.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&h=700&fit=crop&auto=format",
        alt: "Lagon turquoise et plage de l'île de Saona",
        align: "right",
      },
      {
        id: "samana",
        label: "JOURS 5 À 7",
        title: "Samaná : à la rencontre des baleines",
        text: "Cap sur la presqu'île de Samaná, sauvage et préservée. De janvier à mars, observation des baleines à bosse, baignade à la cascade du Limón et farniente sur la sublime plage de Rincón.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&h=700&fit=crop&auto=format",
        alt: "Presqu'île de Samaná et sa baie",
        align: "left",
      },
      {
        id: "saint-domingue",
        label: "JOURS 8 À 9",
        title: "Saint-Domingue : la zone coloniale",
        text: "Immersion dans la capitale et sa zone coloniale classée à l'UNESCO : la cathédrale Santa María, l'Alcázar de Colón et les ruelles pavées chargées d'histoire, premier témoignage du Nouveau Monde.",
        img: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=900&h=700&fit=crop&auto=format",
        alt: "Zone coloniale de Saint-Domingue",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "los-haitises",
        label: "JOUR 10",
        title: "Bayahibe & Los Haitises : nature préservée",
        text: "Depuis le charmant village de pêcheurs de Bayahibe, exploration en bateau du parc national des Los Haitises : mangroves, mogotes spectaculaires, grottes ornées de pétroglyphes taïnos et colonies d'oiseaux.",
        img: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&h=700&fit=crop&auto=format",
        alt: "Mogotes et mangroves du parc national des Los Haitises",
        align: "left",
      },
      {
        id: "cap-cana",
        label: "JOURS 11 À 12",
        title: "Cap Cana : farniente final",
        text: "Retour vers la côte est et ses resorts d'exception à Cap Cana : marina élégante, plage de Juanillo, spa et derniers moments de détente face à la mer des Caraïbes pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&h=700&fit=crop&auto=format",
        alt: "Plage et marina de Cap Cana",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Puerto Plata, la péninsule de Pedernales, le lac
        Enriquillo ou la montagne de Jarabacoa peuvent facilement s&apos;intégrer à
        votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en République dominicaine",
    left: [
      {
        question: (
          <>
            Quelle est la meilleure période pour visiter la République
            dominicaine&nbsp;?
          </>
        ),
        answer: (
          <>
            <p>
              La République dominicaine se visite toute l&apos;année grâce à son
              climat tropical, mais certaines saisons se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (décembre à avril)</strong> : la période idéale,
                ensoleillée et plus douce, parfaite pour la plage comme pour les
                excursions.
              </li>
              <li>
                <Icon name="check" />
                <strong>Observation des baleines (janvier à mars)</strong> : moment
                unique pour admirer les baleines à bosse dans la baie de Samaná.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison humide (mai à novembre)</strong> : averses courtes,
                paysages verdoyants et tarifs plus doux, hors période cyclonique.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à votre
              projet.
            </p>
          </>
        ),
      },
      {
        question: (
          <>Faut-il un visa pour se rendre en République dominicaine&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français n&apos;ont pas besoin
              de visa pour un séjour touristique.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> couvrant toute la durée du séjour
                est exigé.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>carte de tourisme</strong>, généralement incluse dans le
                billet d&apos;avion, est requise à l&apos;entrée.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>formulaire électronique (e-Ticket)</strong> est à remplir
                avant l&apos;arrivée et le départ.
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
        question: (
          <>Quels types de voyages proposez-vous en République dominicaine&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la République
              dominicaine :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire en resort tout compris à Punta
                Cana, Bayahibe ou Samaná.
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
                <strong>Combiné plage &amp; découverte</strong> : nature, culture
                coloniale, puis farniente.
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
        question: (
          <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>étapes et la durée</strong> : Punta Cana, Samaná,
                Saint-Domingue, Bayahibe, Saona…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : resort tout compris,
                boutique-hôtel, lodge nature.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : observation des
                baleines, plongée, excursions en catamaran.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en République dominicaine&nbsp;?</>,
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
                <strong>Resorts tout compris</strong> sur les plus belles plages de
                Punta Cana et Bayahibe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur de Saint-Domingue.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et écolodges</strong> dans la nature préservée de
                Samaná.
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
        question:
          "Quelle est la meilleure période pour visiter la République dominicaine ?",
        answer:
          "La saison sèche, de décembre à avril, est la période idéale : ensoleillée et plus douce, parfaite pour la plage comme pour les excursions. De janvier à mars, c'est aussi le moment unique pour observer les baleines à bosse dans la baie de Samaná.",
      },
      {
        question: "Faut-il un visa pour se rendre en République dominicaine ?",
        answer:
          "Non, les ressortissants français n'ont pas besoin de visa pour un séjour touristique. Un passeport valide couvrant la durée du séjour et une carte de tourisme (souvent incluse dans le billet d'avion) sont exigés, ainsi qu'un e-Ticket à remplir avant l'arrivée.",
      },
      {
        question:
          "Quels types de voyages proposez-vous en République dominicaine ?",
        answer:
          "CTA Voyages propose des séjours balnéaires en resort tout compris, des circuits découverte, des combinés plage et culture, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question:
          "Peut-on personnaliser entièrement l'itinéraire en République dominicaine ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en République dominicaine ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question:
          "La barrière de la langue est-elle un problème en République dominicaine ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en République dominicaine ?",
        answer:
          "Resorts tout compris sur les plus belles plages de Punta Cana et Bayahibe, hôtels 4 et 5 étoiles à Saint-Domingue, lodges au cœur de la nature de Samaná et adresses de charme.",
      },
      {
        question:
          "Comment demander un devis pour un voyage en République dominicaine ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En République dominicaine comme
        ailleurs, nous privilégions des prestataires locaux responsables, des
        excursions respectueuses des écosystèmes fragiles — mangroves, récifs et
        sanctuaires marins des baleines — et un tourisme attentif aux communautés et
        à leur culture.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en République dominicaine commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, circuit, combiné plage et découverte ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default republiqueDominicaine;
