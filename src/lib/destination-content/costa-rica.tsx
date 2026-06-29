import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const costaRica: DestinationContent = {
  slug: "costa-rica",
  meta: {
    title:
      "Voyage au Costa Rica : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Costa Rica avec CTA Voyages. Volcan Arenal, forêt nuageuse de Monteverde, parc Manuel Antonio, tortues de Tortuguero et plages du Pacifique. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Forêt tropicale luxuriante et cascade au cœur de la jungle — Voyage au Costa Rica avec CTA Voyages",
    label: "Destination Costa Rica",
    h1: "Voyage au Costa Rica : volcans, jungle et Pura Vida",
    description:
      "Circuit nature, séjour balnéaire, aventure en famille ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~12h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-7h / -8h",
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
      value: "Colón (CRC)",
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
    h2: "Le Costa Rica, le pays de la Pura Vida",
    body: (
      <>
        Petit pays d&apos;Amérique centrale au cœur d&apos;une nature
        extraordinaire, le Costa Rica concentre sur un territoire grand comme la
        Suisse une biodiversité parmi les plus riches de la planète. Volcans
        fumants, forêts tropicales humides, canopée suspendue dans la brume,
        plages désertes bordées de deux océans : ici, la nature se vit à pleines
        mains. Des coulées de lave du <strong>volcan Arenal</strong> aux ponts
        suspendus de la <strong>forêt nuageuse de Monteverde</strong>, des
        tortues qui pondent sur les plages de{" "}
        <strong>Tortuguero</strong> aux singes et paresseux du{" "}
        <strong>parc Manuel Antonio</strong>, chaque étape révèle une faune et
        une flore d&apos;une générosité folle. Observer le réveil d&apos;un
        volcan, survoler la canopée en tyrolienne, se baigner dans des sources
        chaudes naturelles ou surfer face au coucher du soleil du Pacifique : le
        Costa Rica se vit aussi bien en <strong>circuit nature</strong>{" "}
        qu&apos;en <strong>séjour balnéaire</strong>, en{" "}
        <strong>aventure en famille</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Pionnier mondial de
        l&apos;écotourisme, le pays cultive un art de vivre apaisé que résume sa
        devise : <strong>Pura Vida</strong>. Votre conseiller CTA Voyages conçoit
        avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon vos
        envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Costa Rica ?",
    cards: [
      {
        icon: "volcano",
        title: "Des volcans spectaculaires",
        text: "Arenal, Poás, Irazú : le Costa Rica est jalonné de volcans majestueux, de lacs de cratère et de sources chaudes naturelles au cœur d'une nature volcanique vivante.",
        img: "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?w=800&h=600&fit=crop&auto=format",
        alt: "Le volcan Arenal coiffé de nuages au-dessus de la forêt tropicale",
      },
      {
        icon: "forest",
        title: "Une biodiversité unique",
        text: "Avec près de 5 % des espèces de la planète, le Costa Rica est un sanctuaire pour les paresseux, singes, toucans, grenouilles colorées et papillons multicolores.",
        img: "https://images.unsplash.com/photo-1536323760109-ca8c07450053?w=800&h=600&fit=crop&auto=format",
        alt: "Paresseux accroché à une branche dans la forêt tropicale costaricienne",
      },
      {
        icon: "surfing",
        title: "Deux océans, mille plages",
        text: "Du Pacifique sauvage du Guanacaste aux plages caraïbes de Puerto Viejo : surf, farniente et couchers de soleil flamboyants entre deux mers.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable doré bordée de cocotiers sur la côte Pacifique du Costa Rica",
      },
      {
        icon: "hiking",
        title: "L'aventure en pleine nature",
        text: "Tyroliennes dans la canopée, ponts suspendus, rafting, randonnées et observation de la faune : le Costa Rica est un terrain de jeu grandeur nature.",
        img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop&auto=format",
        alt: "Tyrolienne au-dessus de la canopée de la forêt nuageuse de Monteverde",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Costa Rica",
    steps: [
      {
        id: "san-jose",
        label: "JOURS 1 À 2",
        title: "San José : porte d'entrée du pays",
        text: "Arrivée dans la capitale, au cœur de la vallée centrale. Découverte du Théâtre national, des marchés colorés et des musées de l'or et du jade avant de prendre la route vers la nature.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
        alt: "San José",
        align: "left",
      },
      {
        id: "arenal",
        label: "JOURS 3 À 5",
        title: "Volcan Arenal & La Fortuna",
        text: "Cap sur le majestueux volcan Arenal et le village de La Fortuna. Randonnées sur les coulées de lave, baignade dans les sources chaudes naturelles, cascade de La Fortuna et ponts suspendus dans la forêt primaire.",
        img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=800&h=600&fit=crop&auto=format",
        alt: "Arenal",
        align: "right",
      },
      {
        id: "monteverde",
        label: "JOURS 6 À 7",
        title: "La forêt nuageuse de Monteverde",
        text: "Immersion dans la mythique forêt nuageuse de Monteverde, enveloppée de brume. Tyroliennes au-dessus de la canopée, ponts suspendus et observation des quetzals et colibris dans une nature féerique.",
        img: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=800&h=600&fit=crop&auto=format",
        alt: "Monteverde",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "manuel-antonio",
        label: "JOURS 8 À 9",
        title: "Le parc national Manuel Antonio",
        text: "Descente vers la côte Pacifique et son parc emblématique. Sentiers à travers la jungle à la rencontre des singes capucins, paresseux et iguanes, puis détente sur les plages de sable blanc bordées de forêt.",
        img: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800&h=600&fit=crop&auto=format",
        alt: "Manuel Antonio",
        align: "right",
      },
      {
        id: "tortuguero",
        label: "JOURS 10 À 11",
        title: "Tortuguero : tortues & canaux",
        text: "Embarquement vers le Tortuguero, surnommé l'Amazonie costaricienne. Navigation au fil des canaux à la découverte des caïmans, singes et oiseaux, et, en saison, observation de la ponte des tortues marines.",
        img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&h=600&fit=crop&auto=format",
        alt: "Tortuguero",
        align: "left",
      },
      {
        id: "guanacaste",
        label: "JOURS 12 À 14",
        title: "Côte Pacifique & Guanacaste",
        text: "Final balnéaire dans la région du Guanacaste, au nord-ouest du pays. Plages sauvages, spots de surf réputés, couchers de soleil flamboyants et farniente face au Pacifique pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=600&fit=crop&auto=format",
        alt: "Guanacaste",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la péninsule de Nicoya, le parc Corcovado, la
        côte caraïbe de Puerto Viejo ou le volcan Rincón de la Vieja peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Costa Rica",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Costa Rica&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Costa Rica se visite toute l&apos;année, mais deux grandes
              saisons se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (décembre à avril)</strong> : la période
                idéale, ensoleillée, parfaite pour combiner volcans, jungle et
                plages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison verte (mai à novembre)</strong> : averses souvent
                en fin de journée, paysages d&apos;un vert éclatant et tarifs
                plus doux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juillet-août</strong> : une accalmie ensoleillée
                bienvenue au cœur de la saison verte.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et les régions les
              plus adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Costa Rica&nbsp;?</>,
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
                Un <strong>passeport valide</strong> couvrant la durée du séjour
                est exigé.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>billet de sortie du territoire</strong> peut être
                demandé à l&apos;arrivée.
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
        question: <>Quels types de voyages proposez-vous au Costa Rica&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Costa
              Rica :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire sur la côte Pacifique ou
                caraïbe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit nature</strong> : itinéraire multi-étapes
                individuel, accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Aventure en famille</strong> : volcans, faune et
                activités adaptées aux enfants.
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
                Les <strong>étapes et la durée</strong> : Arenal, Monteverde,
                Manuel Antonio, Tortuguero, Guanacaste…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, écolodge en
                pleine jungle, resort pieds dans l&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : tyrolienne,
                rafting, observation de la faune, sources chaudes.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Costa Rica&nbsp;?</>,
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes
                villes et stations balnéaires.
              </li>
              <li>
                <Icon name="check" />
                <strong>Écolodges</strong> en pleine jungle, au plus près de la
                faune.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plus
                belles plages du Pacifique.
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
        question: "Quelle est la meilleure période pour visiter le Costa Rica ?",
        answer:
          "La saison sèche, de décembre à avril, est la période idéale : ensoleillée, parfaite pour combiner volcans, jungle et plages. La saison verte (mai-novembre) offre des paysages d'un vert éclatant et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre au Costa Rica ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique de moins de 90 jours. Un passeport valide couvrant la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Costa Rica ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits nature, des aventures en famille, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Costa Rica ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Costa Rica ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Costa Rica ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous au Costa Rica ?",
        answer:
          "Hôtels 4 et 5 étoiles, écolodges en pleine jungle, resorts pieds dans l'eau sur le Pacifique et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage au Costa Rica ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Costa Rica, pionnier mondial
        de l&apos;écotourisme, nous privilégions des écolodges et prestataires
        locaux engagés, des parcs nationaux gérés durablement et une observation
        de la faune respectueuse des animaux et des écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Costa Rica commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit nature, aventure en famille ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default costaRica;
