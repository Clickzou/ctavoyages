import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const perou: DestinationContent = {
  slug: "perou",
  meta: {
    title:
      "Voyage au Pérou : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Pérou avec CTA Voyages. Machu Picchu, Cusco et la Vallée sacrée des Incas, lac Titicaca, canyon de Colca, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Citadelle inca du Machu Picchu au lever du jour — Voyage au Pérou avec CTA Voyages",
    label: "Destination Pérou",
    h1: "Voyage au Pérou : cités incas et sommets andins",
    description:
      "Circuit culturel, trek d'altitude, immersion andine ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~14h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-6h / -7h",
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
      value: "Sol (PEN)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Pérou, l'âme vivante des Andes",
    body: (
      <>
        Terre de civilisations millénaires, le Pérou déploie ses cités incas
        perchées, ses sommets andins enneigés et ses déserts côtiers dans une
        intensité qui ne ressemble à aucune autre. De l&apos;effervescence de{" "}
        <strong>Lima</strong> et de sa gastronomie célébrée dans le monde
        entier aux ruelles coloniales de <strong>Cusco</strong>, du mystère du{" "}
        <strong>Machu Picchu</strong> aux eaux scintillantes du{" "}
        <strong>lac Titicaca</strong>, chaque étape révèle une facette de ce pays
        où histoire précolombienne, traditions andines vivantes et paysages
        grandioses se conjuguent à merveille. Marcher sur les pas des Incas dans
        la Vallée sacrée, survoler le canyon de Colca à la rencontre des condors,
        partager le quotidien des communautés du Titicaca ou s&apos;émerveiller
        devant la cité perdue au lever du jour : le Pérou se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en <strong>trek d&apos;altitude</strong>,
        en <strong>immersion andine</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Pérou ?",
    cards: [
      {
        icon: "temple_buddhist",
        title: "Un héritage inca unique",
        text: "Machu Picchu, Sacsayhuamán, Ollantaytambo : le Pérou est un voyage saisissant au cœur de l'une des plus grandes civilisations de l'Histoire.",
        img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop&auto=format",
        alt: "Citadelle inca du Machu Picchu enveloppée de brume",
      },
      {
        icon: "landscape",
        title: "Des paysages grandioses",
        text: "Sommets andins, canyon de Colca, déserts côtiers et hauts plateaux : le Pérou offre une diversité de panoramas à couper le souffle.",
        img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=800&h=600&fit=crop&auto=format",
        alt: "Montagne aux couleurs de l'arc-en-ciel dans les Andes péruviennes",
      },
      {
        icon: "ramen_dining",
        title: "Une gastronomie d'exception",
        text: "Ceviche, lomo saltado, causa : régulièrement primée, la cuisine péruvienne est l'une des plus inventives et réputées au monde.",
        img: "https://images.unsplash.com/photo-1632789395770-20e6f63be806?w=800&h=600&fit=crop&auto=format",
        alt: "Plat de ceviche péruvien aux agrumes et piment",
      },
      {
        icon: "diversity_3",
        title: "Des traditions vivantes",
        text: "Communautés du Titicaca, marchés colorés, textiles andins : au Pérou, la culture quechua se vit au quotidien, dans un accueil chaleureux.",
        img: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&h=600&fit=crop&auto=format",
        alt: "Femme quechua en tenue traditionnelle sur les hauts plateaux andins",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Pérou",
    steps: [
      {
        id: "lima",
        label: "JOURS 1 À 2",
        title: "Lima : la capitale gourmande",
        text: "Arrivée dans la capitale, entre océan Pacifique et architecture coloniale. Le centre historique classé à l'UNESCO, le quartier bohème de Barranco et une cuisine parmi les plus réputées au monde.",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&h=600&fit=crop&auto=format",
        alt: "Lima",
        align: "left",
      },
      {
        id: "cusco",
        label: "JOURS 3 À 4",
        title: "Cusco : le nombril du monde inca",
        text: "Envol vers l'ancienne capitale de l'Empire inca, à 3 400 m d'altitude. Acclimatation en douceur entre ruelles coloniales, forteresse de Sacsayhuamán et marché de San Pedro.",
        img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop&auto=format",
        alt: "Cusco",
        align: "right",
      },
      {
        id: "vallee-sacree",
        label: "JOURS 5 À 6",
        title: "La Vallée sacrée des Incas",
        text: "Au fil de l'Urubamba, les sites majestueux de Pisac et Ollantaytambo, les salines de Maras et les terrasses circulaires de Moray. Rencontre avec les artisans tisserands des villages andins.",
        img: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&h=600&fit=crop&auto=format",
        alt: "Vallée sacrée des Incas",
        align: "left",
      },
      {
        id: "machu-picchu",
        label: "JOUR 7",
        title: "Machu Picchu : la cité perdue",
        text: "Le point d'orgue du voyage : train panoramique vers Aguas Calientes puis montée vers la citadelle inca au lever du jour. Un moment suspendu face à l'une des merveilles du monde.",
        img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=600&fit=crop&auto=format",
        alt: "Machu Picchu",
        align: "right",
      },
      {
        id: "titicaca",
        label: "JOURS 8 À 9",
        title: "Le lac Titicaca : le lac sacré",
        text: "Cap sur Puno et le plus haut lac navigable du monde, à 3 800 m. Navigation vers les îles flottantes des Uros et l'île de Taquile, à la rencontre des communautés andines et de leurs traditions.",
        img: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=800&h=600&fit=crop&auto=format",
        alt: "Lac Titicaca",
        align: "left",
      },
      {
        id: "arequipa-colca",
        label: "JOURS 10 À 12",
        title: "Arequipa & le canyon de Colca",
        text: "La ville blanche d'Arequipa et son centre baroque, puis le canyon de Colca, deux fois plus profond que le Grand Canyon. Aux premières lueurs, l'envol majestueux des condors clôture le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?w=800&h=600&fit=crop&auto=format",
        alt: "Arequipa et canyon de Colca",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme les lignes de Nazca, la cité de Chan Chan, la
        forêt amazonienne d&apos;Iquitos ou un trek sur le Chemin de l&apos;Inca
        peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Pérou",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Pérou&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Pérou se visite toute l&apos;année, mais une saison se
              distingue selon les régions :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (mai à septembre)</strong> : la période
                idéale dans les Andes, ensoleillée et claire, parfaite pour le
                Machu Picchu et les treks.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison des pluies (décembre à mars)</strong> : paysages
                verdoyants et tarifs plus doux, mais averses fréquentes en
                montagne.
              </li>
              <li>
                <Icon name="check" />
                <strong>Côte et Amazonie</strong> : climats spécifiques, à
                combiner selon vos étapes.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à
              votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Pérou&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient
              d&apos;une exemption de visa pour un séjour touristique de moins de
              90 jours.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date de retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>carte de migration</strong> est remise à
                l&apos;arrivée, à conserver durant tout le séjour.
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
        question: <>Quels types de voyages proposez-vous au Pérou&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Pérou :
            </p>
            <ul>
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
                <strong>Trek &amp; aventure</strong> : Chemin de l&apos;Inca,
                Salkantay, randonnées d&apos;altitude.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Pérou &amp; Bolivie</strong> : Titicaca,
                Uyuni et au-delà.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et
                expériences privatisées.
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
                Les <strong>étapes et la durée</strong> : Lima, Cusco, Machu
                Picchu, Titicaca, Arequipa, Nazca…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                hacienda, lodge andin.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : trek, survol de
                Nazca, immersion dans une communauté.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Pérou&nbsp;?</>,
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
        question: <>L&apos;altitude est-elle un problème au Pérou&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas d&apos;inquiétude, tout est prévu.</strong> Cusco et le
              Titicaca culminent au-dessus de 3 400 m :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Acclimatation progressive</strong> intégrée à
                l&apos;itinéraire dès l&apos;arrivée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Conseils et bonnes pratiques</strong> communiqués avant
                le départ.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance disponible</strong> tout au long de votre
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes
                villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Haciendas et maisons coloniales</strong> de caractère
                dans la Vallée sacrée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges andins</strong> face aux sommets et aux paysages
                d&apos;altitude.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels
                authentiques.
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
        question: "Quelle est la meilleure période pour visiter le Pérou ?",
        answer:
          "La saison sèche, de mai à septembre, est la période idéale dans les Andes : ensoleillée et claire, parfaite pour le Machu Picchu et les treks. La saison des pluies (décembre à mars) offre des paysages verdoyants et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre au Pérou ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique de moins de 90 jours. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Pérou ?",
        answer:
          "CTA Voyages propose des circuits culturels, des voyages sur mesure, des treks et aventures (Chemin de l'Inca, Salkantay), des combinés Pérou-Bolivie et des voyages de noces.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Pérou ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Pérou ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "L'altitude est-elle un problème au Pérou ?",
        answer:
          "Cusco et le lac Titicaca dépassent 3 400 m. Une acclimatation progressive est intégrée à l'itinéraire, avec conseils avant le départ et assistance pendant le séjour.",
      },
      {
        question: "Quels hébergements proposez-vous au Pérou ?",
        answer:
          "Hôtels 4 et 5 étoiles, haciendas et maisons coloniales dans la Vallée sacrée, lodges andins face aux sommets et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage au Pérou ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Pérou comme ailleurs, nous
        privilégions des prestataires locaux responsables, le soutien aux
        communautés andines et un tourisme respectueux des cultures, des sites
        incas et des écosystèmes d&apos;altitude.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Pérou commence ici",
    body: "Parlez-nous de votre projet. Circuit, trek d'altitude, immersion andine ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default perou;
