import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const egypte: DestinationContent = {
  slug: "egypte",
  meta: {
    title:
      "Voyage en Égypte : séjour, circuit et croisière sur le Nil sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Égypte avec CTA Voyages. Pyramides de Gizeh, temples de Louxor et Karnak, croisière sur le Nil, Abou Simbel. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Pyramides de Gizeh au coucher du soleil dans le désert — Voyage en Égypte avec CTA Voyages",
    label: "Destination Égypte",
    h1: "Voyage en Égypte : pyramides millénaires et croisière sur le Nil",
    description:
      "Circuit des pharaons, croisière sur le Nil, séjour culturel ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~4h30 de vol",
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
      value: "Livre égyptienne (EGP)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Octobre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Égypte, berceau des pharaons",
    body: (
      <>
        Terre de légendes et de civilisations millénaires, l&apos;Égypte fascine
        depuis toujours les voyageurs venus du monde entier. Des{" "}
        <strong>pyramides de Gizeh</strong> veillées par le Sphinx aux temples
        colossaux de <strong>Louxor</strong> et <strong>Karnak</strong>, des trésors
        dorés des pharaons aux rives fertiles du <strong>Nil</strong>, chaque étape
        plonge le visiteur au cœur de cinq mille ans d&apos;histoire. Naviguer au fil
        du fleuve à bord d&apos;une croisière, percer le mystère de la{" "}
        <strong>Vallée des Rois</strong>, contempler les statues monumentales
        d&apos;<strong>Abou Simbel</strong> au lever du jour ou flâner dans les ruelles
        animées du Caire : l&apos;Égypte se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>croisière sur le Nil</strong>, en{" "}
        <strong>séjour découverte</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Égypte ?",
    cards: [
      {
        icon: "landscape",
        title: "Les pyramides de Gizeh",
        text: "Dernière des Sept Merveilles du monde antique, le plateau de Gizeh et son Sphinx énigmatique offrent un face-à-face inoubliable avec l'éternité.",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=900&h=700&fit=crop&auto=format",
        alt: "Pyramides de Gizeh et Sphinx dans le désert près du Caire",
      },
      {
        icon: "directions_boat",
        title: "La croisière sur le Nil",
        text: "Au fil du fleuve nourricier, temples, villages et palmeraies défilent depuis le pont de votre bateau : la plus belle façon de découvrir la Haute-Égypte.",
        img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&h=700&fit=crop&auto=format",
        alt: "Felouque naviguant sur le Nil au coucher du soleil",
      },
      {
        icon: "museum",
        title: "Les trésors des pharaons",
        text: "Vallée des Rois, masque de Toutânkhamon, temples de Karnak et Louxor : l'Égypte est un musée à ciel ouvert d'une richesse incomparable.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=900&h=700&fit=crop&auto=format",
        alt: "Colonnes et hiéroglyphes du temple de Karnak à Louxor",
      },
      {
        icon: "diamond",
        title: "Le désert et la mer Rouge",
        text: "Dunes infinies, oasis cachées et fonds marins parmi les plus beaux du monde : l'Égypte conjugue aventure saharienne et farniente balnéaire.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=900&h=700&fit=crop&auto=format",
        alt: "Récif corallien et eaux turquoise de la mer Rouge en Égypte",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Égypte",
    steps: [
      {
        id: "le-caire-gizeh",
        label: "JOURS 1 À 2",
        title: "Le Caire & les pyramides de Gizeh",
        text: "Arrivée dans la capitale trépidante et premier émerveillement face aux pyramides de Khéops, Khéphren et Mykérinos, veillées par le Sphinx. Découverte du quartier copte et des souks animés de Khan el-Khalili.",
        img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=900&h=900&fit=crop&auto=format",
        alt: "Pyramides de Gizeh au Caire",
        align: "left",
      },
      {
        id: "musee-egyptien",
        label: "JOUR 3",
        title: "Le Musée égyptien & les trésors antiques",
        text: "Plongée dans cinq mille ans d'histoire au musée du Caire : le trésor de Toutânkhamon, les momies royales et des milliers d'objets fascinants qui racontent la civilisation pharaonique.",
        img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=900&h=900&fit=crop&auto=format",
        alt: "Musée égyptien du Caire",
        align: "right",
      },
      {
        id: "louxor-vallee-des-rois",
        label: "JOURS 4 À 5",
        title: "Louxor & la Vallée des Rois",
        text: "Envol vers Louxor, l'antique Thèbes. Sur la rive ouest, la mythique Vallée des Rois et ses tombeaux peints, le temple d'Hatchepsout et les colosses de Memnon dressés face au désert.",
        img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=900&h=900&fit=crop&auto=format",
        alt: "Vallée des Rois à Louxor",
        align: "left",
      },
      {
        id: "karnak",
        label: "JOUR 6",
        title: "Karnak : le plus grand temple d'Égypte",
        text: "Exploration du gigantesque complexe de Karnak et de sa salle hypostyle aux cent trente-quatre colonnes monumentales, avant l'embarquement à bord de votre bateau de croisière.",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=900&h=900&fit=crop&auto=format",
        alt: "Temple de Karnak à Louxor",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "croisiere-nil",
        label: "JOURS 7 À 8",
        title: "Croisière sur le Nil : Edfou & Kom Ombo",
        text: "Au fil du fleuve, le temple d'Horus à Edfou, l'un des mieux conservés d'Égypte, et le temple double de Kom Ombo dédié à Sobek et Horus. Couchers de soleil et villages nubiens défilent depuis le pont.",
        img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=900&h=900&fit=crop&auto=format",
        alt: "Croisière sur le Nil",
        align: "left",
      },
      {
        id: "assouan-abou-simbel",
        label: "JOURS 9 À 11",
        title: "Assouan & Abou Simbel : le grand final",
        text: "Arrivée à Assouan, ses îles et son barrage, puis excursion vers les temples colossaux d'Abou Simbel, taillés dans la roche par Ramsès II. Un final grandiose face aux statues monumentales du désert nubien.",
        img: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=900&h=900&fit=crop&auto=format",
        alt: "Temples d'Abou Simbel à Assouan",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Alexandrie, le désert blanc, les oasis de Siwa ou
        une extension balnéaire sur la mer Rouge à Hurghada peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Égypte",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Égypte&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Égypte se visite agréablement une grande partie de
              l&apos;année, mais une saison se distingue&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison fraîche (octobre à avril)</strong> : la période
                idéale, aux températures douces, parfaite pour visiter les sites et
                naviguer sur le Nil.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (décembre à février)</strong> : ensoleillé et agréable
                le jour, idéal pour la Haute-Égypte et la croisière.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (mai à septembre)</strong> : très chaud à
                l&apos;intérieur des terres, mais propice à la mer Rouge et à la
                plongée.
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
        question: <>Faut-il un visa pour se rendre en Égypte&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa touristique est obligatoire pour les
              ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Il s&apos;obtient facilement en ligne (<strong>e-visa</strong>) ou à
                l&apos;arrivée à l&apos;aéroport.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date de
                retour est exigé.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour et vous accompagnons dans
              vos démarches au moment de votre réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous en Égypte&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour l&apos;Égypte :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Croisière sur le Nil</strong> : de Louxor à Assouan, au cœur
                des temples.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire des pharaons, individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné culture &amp; mer Rouge</strong> : les temples, puis
                les plages de Hurghada.
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
                Les <strong>étapes et la durée</strong> : Le Caire, Louxor, Assouan,
                Abou Simbel, mer Rouge…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de luxe, bateau de
                croisière, resort au bord de la mer Rouge.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : montgolfière au-dessus
                de Louxor, plongée, soirée son et lumière.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Égypte&nbsp;?</>,
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
                Le niveau d&apos;hébergement et de croisière souhaité
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
                <strong>Guides égyptologues francophones</strong> pour les principales
                visites.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur du Caire et de Louxor.
              </li>
              <li>
                <Icon name="check" />
                <strong>Bateaux de croisière</strong> confortables, du standard au
                grand luxe, sur le Nil.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plages de la mer
                Rouge.
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
        question: "Quelle est la meilleure période pour visiter l'Égypte ?",
        answer:
          "La saison fraîche, d'octobre à avril, est la période idéale : aux températures douces, elle est parfaite pour visiter les sites et naviguer sur le Nil. L'été, plus chaud, se prête davantage à la mer Rouge et à la plongée.",
      },
      {
        question: "Faut-il un visa pour se rendre en Égypte ?",
        answer:
          "Oui, un visa touristique est obligatoire pour les ressortissants français. Il s'obtient facilement en ligne (e-visa) ou à l'arrivée. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Égypte ?",
        answer:
          "CTA Voyages propose des croisières sur le Nil, des circuits des pharaons, des combinés culture et mer Rouge, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Égypte ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Égypte ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement et de croisière, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Égypte ?",
        answer:
          "Non. Nos guides égyptologues francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Égypte ?",
        answer:
          "Hôtels 4 et 5 étoiles au Caire et à Louxor, bateaux de croisière du standard au grand luxe sur le Nil, resorts pieds dans l'eau sur la mer Rouge et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Égypte ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Égypte comme ailleurs, nous
        privilégions des prestataires locaux responsables, des bateaux de croisière
        soucieux du fleuve et un tourisme respectueux du patrimoine, des sites
        archéologiques et des populations.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Égypte commence ici",
    body: "Parlez-nous de votre projet. Croisière sur le Nil, circuit des pharaons, combiné culture et mer Rouge ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default egypte;
