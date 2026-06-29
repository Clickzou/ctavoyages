import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const santorin: DestinationContent = {
  slug: "santorin",
  meta: {
    title:
      "Voyage à Santorin : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Santorin avec CTA Voyages. Couchers de soleil d'Oia, villages blancs de la caldeira, croisière au volcan, plages volcaniques et vignobles. Séjour, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Maisons blanches et dômes bleus surplombant la caldeira au coucher du soleil — Voyage à Santorin avec CTA Voyages",
    label: "Destination Santorin",
    h1: "Voyage à Santorin : villages blancs et couchers de soleil mythiques",
    description:
      "Séjour romantique, escapade culturelle, croisière dans les Cyclades ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des panoramas uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~3h30 de vol",
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
    h2: "Santorin, la perle des Cyclades",
    body: (
      <>
        Suspendue au-dessus d&apos;une caldeira née d&apos;une éruption volcanique
        légendaire, Santorin est l&apos;une des plus belles îles de la mer Égée.
        Ses villages immaculés s&apos;accrochent aux falaises, leurs maisons
        blanches et leurs dômes bleus dessinant un décor de carte postale face à
        un panorama à couper le souffle. De l&apos;élégance bohème d&apos;
        <strong>Oia</strong> à l&apos;animation de <strong>Fira</strong>, des
        plages de sable noir et rouge aux <strong>vignobles</strong> caressés par
        le soleil, chaque recoin de l&apos;île séduit par son charme intemporel.
        Admirer le coucher de soleil le plus célèbre du monde, naviguer vers le{" "}
        <strong>volcan</strong> et ses sources chaudes, déguster un vin assyrtiko
        face à la mer ou explorer la cité antique d&apos;
        <strong>Akrotiri</strong> : Santorin se vit aussi bien en{" "}
        <strong>séjour romantique</strong> qu&apos;en{" "}
        <strong>escapade culturelle</strong>, en{" "}
        <strong>croisière dans les Cyclades</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Santorin ?",
    cards: [
      {
        icon: "wb_twilight",
        title: "Des couchers de soleil mythiques",
        text: "Le coucher de soleil d'Oia est l'un des plus célèbres au monde : un spectacle de couleurs flamboyantes sur la caldeira, à vivre au moins une fois dans sa vie.",
        img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop&auto=format",
        alt: "Coucher de soleil flamboyant sur les maisons blanches d'Oia à Santorin",
      },
      {
        icon: "holiday_village",
        title: "Des villages de carte postale",
        text: "Ruelles immaculées, dômes bleus et terrasses suspendues : Oia, Fira et Imerovigli comptent parmi les plus beaux villages des Cyclades.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Ruelle blanche et dômes bleus d'un village perché de Santorin",
      },
      {
        icon: "volcano",
        title: "Une île volcanique unique",
        text: "Née d'une éruption spectaculaire, Santorin offre des plages de sable noir et rouge, un volcan toujours actif et des sources chaudes à explorer en mer.",
        img: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&h=600&fit=crop&auto=format",
        alt: "Caldeira volcanique de Santorin vue depuis la mer Égée",
      },
      {
        icon: "wine_bar",
        title: "Une gastronomie ensoleillée",
        text: "Vins assyrtiko issus de vignes centenaires, tomates cerises confites, fava et poissons grillés : la table santorienne est un voyage à elle seule.",
        img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop&auto=format",
        alt: "Dégustation de vin blanc face à la caldeira de Santorin",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Santorin",
    steps: [
      {
        id: "oia",
        label: "JOUR 1",
        title: "Oia & le coucher de soleil mythique",
        text: "Installation au cœur du village le plus photogénique de l'île. Flânerie dans les ruelles bordées de boutiques et de galeries, puis assistance au légendaire coucher de soleil d'Oia, l'un des plus spectaculaires au monde.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&h=700&fit=crop&auto=format",
        alt: "Coucher de soleil sur le village d'Oia à Santorin",
        align: "left",
      },
      {
        id: "fira",
        label: "JOUR 2",
        title: "Fira & balade sur la caldeira",
        text: "Découverte de Fira, la capitale animée de l'île, et de son sentier panoramique longeant la caldeira jusqu'à Imerovigli. Vues vertigineuses sur la mer Égée, cafés perchés et coucher de soleil depuis le « balcon de Santorin ».",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=900&h=700&fit=crop&auto=format",
        alt: "Vue sur Fira et la caldeira de Santorin",
        align: "right",
      },
      {
        id: "volcan",
        label: "JOUR 3",
        title: "Croisière vers le volcan & sources chaudes",
        text: "Embarquement pour une croisière au cœur de la caldeira : ascension du volcan toujours actif de Nea Kameni, baignade dans les sources chaudes sulfureuses et escale sur l'île de Thirassia, loin de l'agitation.",
        img: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=900&h=700&fit=crop&auto=format",
        alt: "Croisière vers le volcan de Santorin dans la caldeira",
        align: "left",
      },
      {
        id: "plages",
        label: "JOUR 4",
        title: "Plages volcaniques & Red Beach",
        text: "Journée détente sur les plages spectaculaires du Sud : la célèbre Red Beach et ses falaises rouges, la plage de sable noir de Perissa et les eaux cristallines de Kamari, bordées de tavernes les pieds dans le sable.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&h=700&fit=crop&auto=format",
        alt: "Red Beach et ses falaises rouges au Sud de Santorin",
        align: "right",
        objectPosition: "center 45%",
      },
      {
        id: "vignobles",
        label: "JOUR 5",
        title: "Vignobles & dégustation",
        text: "Immersion dans le terroir volcanique de Santorin : visite d'un domaine viticole, découverte de la culture en « kouloura » des vignes centenaires et dégustation des vins assyrtiko et vinsanto face à des panoramas saisissants.",
        img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&h=700&fit=crop&auto=format",
        alt: "Vignoble volcanique et dégustation de vin à Santorin",
        align: "left",
      },
      {
        id: "akrotiri",
        label: "JOUR 6",
        title: "Site antique d'Akrotiri",
        text: "Plongée dans l'histoire avec la cité minoenne d'Akrotiri, la « Pompéi de l'Égée » figée par l'éruption il y a plus de 3 500 ans. Fin de séjour entre ruelles préservées du village de Pyrgos et derniers panoramas sur l'île.",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=900&h=700&fit=crop&auto=format",
        alt: "Vestiges de la cité antique d'Akrotiri à Santorin",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme une nuit à Imerovigli, une croisière au
        coucher du soleil ou une extension vers les îles voisines de Naxos, Paros
        ou la Crète peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Santorin",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Santorin&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Santorin profite d&apos;un climat méditerranéen ensoleillé, mais
              certaines périodes se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Mai-juin et septembre-octobre</strong> : la période
                idéale, douce et lumineuse, avec moins d&apos;affluence.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juillet-août</strong> : pleine saison, chaude et
                animée, parfaite pour la baignade mais très fréquentée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver</strong> : île plus calme et authentique, certains
                établissements étant fermés.
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
        question: <>Faut-il un visa pour se rendre à Santorin&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Grèce fait partie de l&apos;Union
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
        question: <>Quels types de voyages proposez-vous à Santorin&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Santorin :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : escapade romantique au cœur des
                villages de la caldeira.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : combiné dans les Cyclades, en
                individuel ou accompagné.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière</strong> : navigation entre les plus belles
                îles grecques.
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
                Les <strong>étapes et la durée</strong> : Oia, Fira, Imerovigli,
                extension dans les Cyclades…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : suite troglodyte
                avec piscine privée, hôtel de charme, boutique-hôtel.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : croisière au
                volcan, dégustation de vins, dîner face au coucher de soleil.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Santorin&nbsp;?</>,
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
            <p>
              À Santorin, l&apos;anglais est par ailleurs très répandu dans
              l&apos;hôtellerie et la restauration.
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
                <strong>Suites troglodytes</strong> avec piscine privée face à la
                caldeira.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur d&apos;Oia ou de
                Fira.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de charme</strong> dans les villages
                authentiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses romantiques</strong> idéales pour un voyage de
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
              Nos conseillers vous répondent <strong>sous 48h</strong>,
              gratuitement et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter Santorin ?",
        answer:
          "Les périodes idéales sont mai-juin et septembre-octobre : douces, lumineuses et moins fréquentées. Juillet-août est la pleine saison, chaude et animée, parfaite pour la baignade mais très touristique.",
      },
      {
        question: "Faut-il un visa pour se rendre à Santorin ?",
        answer:
          "Non. La Grèce fait partie de l'Union européenne et de l'espace Schengen : une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous à Santorin ?",
        answer:
          "CTA Voyages propose des séjours romantiques, des circuits et croisières dans les Cyclades, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Santorin ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Santorin ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à Santorin ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage, et l'anglais est très répandu sur place.",
      },
      {
        question: "Quels hébergements proposez-vous à Santorin ?",
        answer:
          "Suites troglodytes avec piscine privée face à la caldeira, hôtels 4 et 5 étoiles à Oia ou Fira, boutique-hôtels de charme et adresses romantiques.",
      },
      {
        question: "Comment demander un devis pour un voyage à Santorin ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Santorin comme ailleurs, nous
        privilégions des prestataires locaux responsables, des domaines viticoles
        respectueux du terroir volcanique et un tourisme attentif à la
        préservation des villages et des écosystèmes fragiles de l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Santorin commence ici",
    body: "Parlez-nous de votre projet. Séjour romantique, circuit dans les Cyclades, croisière ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default santorin;
