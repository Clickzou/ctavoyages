import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const italie: DestinationContent = {
  slug: "italie",
  meta: {
    title:
      "Voyage en Italie : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Italie avec CTA Voyages. Rome éternelle, Florence et la Toscane, Venise, les Cinque Terre, Naples et la côte amalfitaine, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Vue panoramique de Rome au coucher du soleil — Voyage en Italie avec CTA Voyages",
    label: "Destination Italie",
    h1: "Voyage en Italie : art de vivre, patrimoine et paysages d'exception",
    description:
      "Circuit culturel, séjour citadin, escapade en bord de mer ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "Aucun",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Italien",
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
    h2: "L'Italie, le berceau de la dolce vita",
    body: (
      <>
        Terre de passions et de chefs-d&apos;œuvre, l&apos;Italie déploie ses villes
        d&apos;art, ses collines toscanes et ses côtes baignées de lumière dans une
        atmosphère d&apos;une élégance intemporelle. De la grandeur antique de{" "}
        <strong>Rome</strong> à la Renaissance de <strong>Florence</strong>, des canaux
        romantiques de <strong>Venise</strong> aux villages colorés des{" "}
        <strong>Cinque Terre</strong>, chaque étape révèle une facette de ce pays où
        histoire, gastronomie et art de vivre se conjuguent à la perfection. Flâner sur
        une piazza au soleil couchant, s&apos;attabler devant une assiette de pâtes
        fraîches, admirer une fresque vieille de cinq siècles ou longer la côte
        amalfitaine en cabriolet : l&apos;Italie se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en <strong>séjour citadin</strong>,
        en <strong>escapade en bord de mer</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Italie ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine unique au monde",
        text: "Colisée, Vatican, Pompéi, galerie des Offices : l'Italie concentre le plus grand nombre de sites classés à l'UNESCO de la planète.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&auto=format",
        alt: "Le Colisée de Rome au lever du soleil",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie légendaire",
        text: "Pâtes fraîches, pizza napolitaine, gelato, grands vins de Toscane : la cuisine italienne est une fête des sens, célébrée dans le monde entier.",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&auto=format",
        alt: "Assiette de pâtes fraîches italiennes",
      },
      {
        icon: "palette",
        title: "Le berceau de l'art",
        text: "De la Renaissance au baroque, Michel-Ange, Léonard de Vinci et Botticelli ont façonné un héritage artistique sans équivalent.",
        img: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=800&h=600&fit=crop&auto=format",
        alt: "Cathédrale et coupole de Florence vues d'en haut",
      },
      {
        icon: "beach_access",
        title: "Des côtes à couper le souffle",
        text: "Villages perchés des Cinque Terre, falaises d'Amalfi, eaux turquoise de Sardaigne : le littoral italien est un enchantement permanent.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop&auto=format",
        alt: "Village coloré des Cinque Terre surplombant la mer",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Italie",
    steps: [
      {
        id: "rome",
        label: "JOURS 1 À 3",
        title: "Rome : la ville éternelle",
        text: "Immersion au cœur de l'Antiquité : le Colisée, le Forum romain, la fontaine de Trevi et la cité du Vatican avec la chapelle Sixtine. Le soir, dolce vita dans les ruelles du Trastevere.",
        img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop&auto=format",
        alt: "Rome",
        align: "left",
      },
      {
        id: "florence-toscane",
        label: "JOURS 4 À 6",
        title: "Florence & la Toscane : la Renaissance",
        text: "Berceau de la Renaissance, Florence dévoile le Duomo, le Ponte Vecchio et la galerie des Offices. Échappée dans les collines toscanes, entre vignobles du Chianti et villages médiévaux comme Sienne et San Gimignano.",
        img: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800&h=600&fit=crop&auto=format",
        alt: "Florence et la Toscane",
        align: "right",
      },
      {
        id: "venise",
        label: "JOURS 7 ET 8",
        title: "Venise : la cité des Doges",
        text: "Promenade en gondole sur les canaux, place Saint-Marc, palais des Doges et pont du Rialto. Évasion vers les îles colorées de Murano et Burano, joyaux de la lagune.",
        img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop&auto=format",
        alt: "Venise",
        align: "left",
      },
      {
        id: "cinque-terre",
        label: "JOURS 9 ET 10",
        title: "Cinque Terre : les villages suspendus",
        text: "Cinq villages de pêcheurs accrochés à la falaise, reliés par des sentiers panoramiques au-dessus de la mer Ligure. Maisons colorées, terrasses de vignes et eaux scintillantes pour une parenthèse hors du temps.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&auto=format",
        alt: "Cinque Terre",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "naples-pompei",
        label: "JOURS 11 ET 12",
        title: "Naples & Pompéi : l'âme du Sud",
        text: "Naples, capitale vibrante de la pizza, et l'ascension du Vésuve. Visite saisissante du site archéologique de Pompéi, figé par l'éruption de 79 après J.-C. et classé à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1518730518541-d0843268c287?w=800&h=600&fit=crop&auto=format",
        alt: "Naples et Pompéi",
        align: "left",
      },
      {
        id: "cote-amalfitaine",
        label: "JOURS 13 À 15",
        title: "Côte amalfitaine : final en bord de mer",
        text: "Route panoramique entre Positano, Amalfi et Ravello, avec leurs villages accrochés aux falaises plongeant dans la Méditerranée. Citronniers, plages confidentielles et coucher de soleil pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&h=600&fit=crop&auto=format",
        alt: "Côte amalfitaine",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Milan, le lac de Côme, la Sicile, les Pouilles ou la
        Sardaigne peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Italie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Italie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Italie se visite toute l&apos;année, mais certaines saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : la période idéale, douce et
                fleurie, parfaite pour les villes d&apos;art et la campagne.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet-août)</strong> : ensoleillé et festif, idéal pour
                les côtes et les îles, mais plus fréquenté.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre-octobre)</strong> : lumière dorée, vendanges
                en Toscane et affluence apaisée.
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
        question: <>Faut-il un visa pour se rendre en Italie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, l&apos;Italie fait partie de l&apos;espace
              Schengen : aucun visa n&apos;est requis pour les ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit pour entrer sur le territoire.
              </li>
              <li>
                <Icon name="check" />
                La <strong>carte européenne d&apos;assurance maladie</strong> est
                recommandée pour votre séjour.
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
        question: <>Quels types de voyages proposez-vous en Italie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour l&apos;Italie :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Rome, Venise ou Florence, ou
                balnéaire sur les côtes.
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
                <strong>Combiné villes d&apos;art &amp; mer</strong> : les grandes
                cités, puis la côte amalfitaine ou les Cinque Terre.
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
                Les <strong>étapes et la durée</strong> : Rome, Florence, Venise, les
                Cinque Terre, Naples, la côte amalfitaine…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, palazzo
                historique, agritourisme en Toscane.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : cours de cuisine,
                dégustation de vins, visites privées.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Italie&nbsp;?</>,
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
        question: <>Comment se déplacer en Italie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>L&apos;Italie est très bien desservie.</strong> CTA Voyages
              organise tous vos déplacements :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Trains à grande vitesse</strong> reliant Rome, Florence, Venise
                et Naples en quelques heures.
              </li>
              <li>
                <Icon name="check" />
                <strong>Location de voiture</strong> avec chauffeur pour la Toscane ou
                la côte amalfitaine.
              </li>
              <li>
                <Icon name="check" />
                <strong>Transferts privés</strong> et excursions en bateau le long des
                côtes.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des villes d&apos;art.
              </li>
              <li>
                <Icon name="check" />
                <strong>Palazzi historiques</strong> et boutique-hôtels de caractère.
              </li>
              <li>
                <Icon name="check" />
                <strong>Agritourismes</strong> au milieu des vignobles de Toscane.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses face à la mer</strong> sur la côte amalfitaine et les
                Cinque Terre.
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
        question: "Quelle est la meilleure période pour visiter l'Italie ?",
        answer:
          "Le printemps (avril à juin) est idéal, doux et fleuri, parfait pour les villes d'art et la campagne. L'automne (septembre-octobre) offre une lumière dorée, les vendanges en Toscane et une affluence apaisée.",
      },
      {
        question: "Faut-il un visa pour se rendre en Italie ?",
        answer:
          "Non, l'Italie fait partie de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous en Italie ?",
        answer:
          "CTA Voyages propose des séjours citadins ou balnéaires, des circuits culturels, des combinés villes d'art et mer, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Italie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Italie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplacer en Italie ?",
        answer:
          "L'Italie est très bien desservie : trains à grande vitesse entre les grandes villes, location de voiture avec chauffeur, transferts privés et excursions en bateau le long des côtes.",
      },
      {
        question: "Quels hébergements proposez-vous en Italie ?",
        answer:
          "Hôtels 4 et 5 étoiles, palazzi historiques, boutique-hôtels de caractère, agritourismes en Toscane et adresses face à la mer sur la côte amalfitaine.",
      },
      {
        question: "Comment demander un devis pour un voyage en Italie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Italie comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements engagés et
        un tourisme respectueux du patrimoine, des villages et des écosystèmes
        méditerranéens.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Italie commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné villes d'art et mer ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default italie;
