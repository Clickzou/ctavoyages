import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const jordanie: DestinationContent = {
  slug: "jordanie",
  meta: {
    title:
      "Voyage en Jordanie : circuit, séjour et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Jordanie avec CTA Voyages. Pétra la rose, désert du Wadi Rum, mer Morte, Amman et Jerash. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Le Trésor de Pétra taillé dans la roche rose au lever du soleil — Voyage en Jordanie avec CTA Voyages",
    label: "Destination Jordanie",
    h1: "Voyage en Jordanie : Pétra, déserts et mer Morte",
    description:
      "Circuit culturel, aventure dans le désert, escapade bien-être au bord de la mer Morte ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~5h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+1h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Arabe",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dinar (JOD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mars-mai & sept-nov",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Jordanie, royaume du désert et des cités oubliées",
    body: (
      <>
        Écrin du Proche-Orient, la Jordanie concentre sur un territoire à taille
        humaine quelques-uns des sites les plus spectaculaires de la planète. De
        la cité nabatéenne de <strong>Pétra</strong>, taillée dans la roche rose
        et classée parmi les nouvelles merveilles du monde, aux étendues
        lunaires du <strong>désert du Wadi Rum</strong>, des ruines romaines de{" "}
        <strong>Jerash</strong> aux eaux flottantes de la{" "}
        <strong>mer Morte</strong>, chaque étape raconte des millénaires
        d&apos;histoire dans des décors à couper le souffle. Flâner dans les
        souks animés d&apos;Amman, bivouaquer sous les étoiles du désert,
        contempler la Terre promise depuis le mont Nébo ou se laisser porter par
        les eaux les plus salées du monde : la Jordanie se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>aventure dans le désert</strong>, en{" "}
        <strong>escapade bien-être</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Réputée pour la
        chaleur de son accueil et sa stabilité, elle se découvre en toute
        sérénité. Votre conseiller CTA Voyages conçoit avec vous
        l&apos;itinéraire qui vous ressemble, à votre rythme, selon vos envies
        et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Jordanie ?",
    cards: [
      {
        icon: "fort",
        title: "Pétra, la cité rose",
        text: "Sculptée à même la falaise par les Nabatéens, Pétra dévoile son Trésor, ses tombeaux monumentaux et son Monastère au terme du célèbre Siq : un site unique au monde.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop&auto=format",
        alt: "Le Trésor de Pétra vu depuis le Siq, Jordanie",
      },
      {
        icon: "landscape",
        title: "Le désert du Wadi Rum",
        text: "Dunes ocre, arches de grès et montagnes monumentales : le désert de Lawrence d'Arabie se découvre en 4x4 ou à dos de chameau, avant une nuit en bivouac sous les étoiles.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Paysage désertique du Wadi Rum au coucher du soleil, Jordanie",
      },
      {
        icon: "pool",
        title: "La mer Morte",
        text: "Point le plus bas de la Terre, la mer Morte offre la sensation unique de flotter sans effort sur ses eaux salées, et ses boues réputées pour leurs vertus.",
        img: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=800&h=600&fit=crop&auto=format",
        alt: "Bord de la mer Morte avec ses dépôts de sel, Jordanie",
      },
      {
        icon: "history_edu",
        title: "Un héritage millénaire",
        text: "Théâtres romains de Jerash et d'Amman, châteaux du désert, mosaïques de Madaba et mont Nébo : la Jordanie est un livre d'histoire à ciel ouvert.",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop&auto=format",
        alt: "Colonnes antiques de la cité romaine de Jerash, Jordanie",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Jordanie",
    steps: [
      {
        id: "amman",
        label: "JOURS 1 & 2",
        title: "Amman : la capitale aux mille collines",
        text: "Premiers pas dans la capitale jordanienne : la citadelle et son temple d'Hercule, le théâtre romain, les ruelles animées du centre et les souks parfumés du vieil Amman.",
        img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop&auto=format",
        alt: "Vue sur les collines et les toits d'Amman, capitale de la Jordanie",
        align: "left",
      },
      {
        id: "jerash",
        label: "JOUR 3",
        title: "Jerash : la Rome du Proche-Orient",
        text: "Excursion vers l'une des cités romaines les mieux conservées au monde : la place ovale, la rue à colonnades, l'arc d'Hadrien et les théâtres antiques de Jerash.",
        img: "https://images.unsplash.com/photo-1635776062764-e025521e3df3?w=800&h=600&fit=crop&auto=format",
        alt: "Place ovale et colonnades de la cité romaine de Jerash",
        align: "right",
      },
      {
        id: "nebo-madaba",
        label: "JOUR 4",
        title: "Mont Nébo & Madaba : la route des mosaïques",
        text: "Du mont Nébo, contemplez le panorama sur la Terre promise, là où Moïse aperçut Canaan. Puis cap sur Madaba, la ville des mosaïques, et sa célèbre carte byzantine de la Terre sainte.",
        img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&auto=format",
        alt: "Mosaïque byzantine de Madaba, Jordanie",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "petra",
        label: "JOURS 5 & 6",
        title: "Pétra : la merveille nabatéenne",
        text: "Le temps fort du voyage. Franchissez le Siq pour découvrir le Trésor, puis explorez les tombeaux royaux, le grand temple et l'ascension vers le Monastère. Une seconde journée permet de savourer le site à son rythme, et pourquoi pas la Pétra by Night aux chandelles.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop&auto=format",
        alt: "Façade monumentale du Monastère (Ad Deir) à Pétra, Jordanie",
        align: "right",
      },
      {
        id: "wadi-rum",
        label: "JOURS 7 & 8",
        title: "Wadi Rum : bivouac dans le désert",
        text: "Immersion dans le désert mythique de Lawrence d'Arabie : balade en 4x4 entre dunes, canyons et arches de grès, coucher de soleil sur les dunes et nuit magique en bivouac sous une voûte étoilée.",
        img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&h=600&fit=crop&auto=format",
        alt: "Campement de bivouac dans le désert du Wadi Rum la nuit, Jordanie",
        align: "left",
      },
      {
        id: "mer-morte",
        label: "JOURS 9 & 10",
        title: "Mer Morte : détente et bien-être",
        text: "Final tout en douceur au point le plus bas de la Terre : baignade flottante dans les eaux salées, soins aux boues réputées et farniente face à la mer pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Baigneur flottant sur les eaux de la mer Morte, Jordanie",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Aqaba et la mer Rouge, les châteaux du désert,
        la réserve de Dana ou le site de baptême de Béthanie peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Jordanie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Jordanie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Jordanie se visite idéalement aux intersaisons, lorsque les
              températures sont les plus agréables :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (mars à mai)</strong> : la période idéale,
                douce et fleurie, parfaite pour Pétra et le désert.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à novembre)</strong> : ciel dégagé et
                chaleur supportable, excellent pour combiner sites et désert.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (décembre à février)</strong> : journées fraîches,
                possibles averses, mais sites moins fréquentés.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la mieux adaptée à
              votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Jordanie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa est nécessaire pour les
              ressortissants français, mais les formalités sont simples.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le visa s&apos;obtient <strong>à l&apos;arrivée</strong> à
                l&apos;aéroport ou en ligne avant le départ.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>Jordan Pass</strong>, acheté avant le voyage, inclut
                le visa et l&apos;entrée de Pétra et de nombreux sites.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date de retour est exigé.
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
        question: <>Quels types de voyages proposez-vous en Jordanie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la
              Jordanie :
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
                <strong>Aventure &amp; désert</strong> : Wadi Rum, bivouac et
                randonnées dans les wadis.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné culture &amp; bien-être</strong> : les grands
                sites, puis la détente à la mer Morte.
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
                Les <strong>étapes et la durée</strong> : Amman, Jerash, Pétra,
                Wadi Rum, mer Morte, Aqaba…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                camp de luxe dans le désert, resort à la mer Morte.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : Pétra by Night,
                bivouac, randonnée, soins thermaux.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Jordanie&nbsp;?</>,
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
        question: <>La Jordanie est-elle une destination sûre&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui.</strong> La Jordanie est réputée pour sa stabilité et
              l&apos;hospitalité de ses habitants.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                C&apos;est l&apos;une des destinations <strong>les plus sûres</strong>{" "}
                du Proche-Orient pour les voyageurs.
              </li>
              <li>
                <Icon name="check" />
                Nos <strong>guides locaux francophones</strong> vous accompagnent
                tout au long du séjour.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>assistance téléphonique</strong> est joignable
                pendant tout votre voyage.
              </li>
            </ul>
            <p>
              Nous suivons en permanence les recommandations officielles pour
              votre tranquillité.
            </p>
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
                <strong>Hôtels 4 et 5 étoiles</strong> à Amman et à proximité des
                grands sites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps et bivouacs</strong> dans le désert du Wadi Rum,
                du plus authentique au plus luxueux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts de la mer Morte</strong> avec spa et accès à la
                plage.
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
        question: "Quelle est la meilleure période pour visiter la Jordanie ?",
        answer:
          "Le printemps (mars à mai) et l'automne (septembre à novembre) sont les périodes idéales : températures douces et ciel dégagé, parfaits pour Pétra et le désert. L'hiver offre des sites moins fréquentés mais des journées plus fraîches.",
      },
      {
        question: "Faut-il un visa pour se rendre en Jordanie ?",
        answer:
          "Oui, un visa est nécessaire pour les ressortissants français. Il s'obtient à l'arrivée ou en ligne, et le Jordan Pass permet d'inclure le visa ainsi que l'entrée de Pétra et de nombreux sites. Un passeport valide au moins 6 mois après le retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Jordanie ?",
        answer:
          "CTA Voyages propose des circuits culturels, des aventures dans le désert, des combinés culture et bien-être, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Jordanie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et expériences comme Pétra by Night ou le bivouac dans le désert.",
      },
      {
        question: "Combien coûte un voyage en Jordanie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La Jordanie est-elle une destination sûre ?",
        answer:
          "Oui, la Jordanie est l'une des destinations les plus sûres du Proche-Orient, réputée pour sa stabilité et son hospitalité. Nos guides francophones et notre assistance vous accompagnent tout au long du séjour.",
      },
      {
        question: "Quels hébergements proposez-vous en Jordanie ?",
        answer:
          "Hôtels 4 et 5 étoiles à Amman et près des grands sites, camps et bivouacs dans le Wadi Rum, resorts avec spa à la mer Morte et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Jordanie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Jordanie comme ailleurs,
        nous privilégions des prestataires locaux responsables, des camps
        bédouins respectueux du désert et un tourisme attentif à la préservation
        des sites historiques et des écosystèmes fragiles comme la mer Morte.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Jordanie commence ici",
    body: "Parlez-nous de votre projet. Circuit, aventure dans le désert, combiné culture et bien-être ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default jordanie;
