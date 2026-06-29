import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const acores: DestinationContent = {
  slug: "acores",
  meta: {
    title:
      "Voyage aux Açores : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage aux Açores avec CTA Voyages. Cratères de Sete Cidades, sources thermales de Furnas, observation des baleines, volcan de Pico et randonnées. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Lagons jumeaux de Sete Cidades dans un cratère volcanique verdoyant — Voyage aux Açores avec CTA Voyages",
    label: "Destination Açores",
    h1: "Voyage aux Açores : volcans, lagons et océan sauvage",
    description:
      "Circuit nature, randonnée, observation des baleines ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~4h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-2h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Portugais",
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
    h2: "Les Açores, l'archipel volcanique de l'Atlantique",
    body: (
      <>
        Perdues au cœur de l&apos;Atlantique, les Açores forment un archipel
        portugais de neuf îles d&apos;une beauté brute et spectaculaire. Cratères
        tapissés de verdure, lagons aux eaux émeraude, sources thermales fumantes,
        falaises battues par l&apos;océan et villages aux maisons blanches&nbsp;:
        ici, la nature règne en maître. De l&apos;île principale de{" "}
        <strong>São Miguel</strong> et ses lacs jumeaux de{" "}
        <strong>Sete Cidades</strong> aux vignobles inscrits à l&apos;UNESCO de{" "}
        <strong>Pico</strong>, dominés par le plus haut volcan du Portugal, chaque
        île révèle un caractère unique. Observer les baleines et les dauphins en
        plein océan, se baigner dans les eaux thermales de{" "}
        <strong>Furnas</strong>, déguster le fameux <em>cozido</em> cuit sous terre
        par la chaleur volcanique, randonner le long de cascades secrètes&nbsp;: les
        Açores se vivent aussi bien en <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>séjour randonnée</strong>, en <strong>escapade insulaire</strong> ou
        en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Açores ?",
    cards: [
      {
        icon: "landscape",
        title: "Des paysages volcaniques",
        text: "Cratères verdoyants, lagons jumeaux de Sete Cidades, lacs de cratère et caldeiras : les Açores offrent des panorames parmi les plus saisissants d'Europe.",
        img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=600&fit=crop&auto=format",
        alt: "Lagons jumeaux de Sete Cidades vus depuis le mirador, São Miguel",
      },
      {
        icon: "sailing",
        title: "Baleines & dauphins",
        text: "Les Açores comptent parmi les meilleurs sanctuaires au monde pour l'observation des cétacés : cachalots, baleines bleues et dauphins évoluent au large.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&auto=format",
        alt: "Dauphins nageant au large des Açores dans l'océan Atlantique",
      },
      {
        icon: "hot_tub",
        title: "Sources thermales",
        text: "À Furnas, baignez-vous dans des bassins d'eau chaude naturelle au cœur de la forêt et goûtez le cozido, ce plat mijoté cuit sous terre par la chaleur volcanique.",
        img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&h=600&fit=crop&auto=format",
        alt: "Sources thermales fumantes de Furnas entourées de végétation luxuriante",
      },
      {
        icon: "hiking",
        title: "Randonnées & cascades",
        text: "Sentiers côtiers, forêts de lauriers, cascades cachées et ascension du volcan Pico : les Açores sont un paradis pour les amoureux de la marche et de la nature.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
        alt: "Randonneur sur un sentier verdoyant menant à une cascade aux Açores",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Açores",
    steps: [
      {
        id: "sao-miguel-sete-cidades",
        label: "JOURS 1 À 3",
        title: "São Miguel & Sete Cidades",
        text: "Arrivée sur l'île verte. Découverte de Ponta Delgada, puis route vers les célèbres lagons jumeaux de Sete Cidades, nichés dans un immense cratère volcanique, l'un bleu, l'autre vert.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Cratère et lagons de Sete Cidades sur l'île de São Miguel",
        align: "left",
      },
      {
        id: "furnas",
        label: "JOUR 4",
        title: "Furnas : sources thermales & cozido",
        text: "Immersion dans la vallée volcanique de Furnas : geysers fumants, bassins d'eau chaude au cœur du jardin botanique et dégustation du cozido das Furnas, mijoté sous terre par la chaleur de la terre.",
        img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&h=600&fit=crop&auto=format",
        alt: "Vallée thermale de Furnas avec ses geysers et bassins fumants",
        align: "right",
      },
      {
        id: "baleines-dauphins",
        label: "JOUR 5",
        title: "Observation des baleines & dauphins",
        text: "Sortie en mer à la rencontre des géants de l'Atlantique. Au large de São Miguel, cachalots, baleines et bancs de dauphins offrent un spectacle inoubliable dans le respect des animaux.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&auto=format",
        alt: "Observation de baleines et dauphins en bateau au large des Açores",
        align: "left",
      },
      {
        id: "lagons-volcaniques",
        label: "JOUR 6",
        title: "Lagons volcaniques & caldeiras",
        text: "Cap sur les hauteurs de l'île : le lac de Lagoa do Fogo niché dans un ancien cratère, les belvédères panoramiques et les plages de sable noir d'origine volcanique.",
        img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=600&fit=crop&auto=format",
        alt: "Lac de cratère Lagoa do Fogo entouré de collines verdoyantes",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "pico-volcan-vignobles",
        label: "JOURS 7 À 8",
        title: "Île de Pico : volcan & vignobles",
        text: "Envol vers Pico, dominée par le plus haut sommet du Portugal. Découverte des vignobles classés à l'UNESCO, plantés dans la lave noire, et possibilité d'ascension du volcan pour les plus aventureux.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Volcan de Pico surplombant les vignobles plantés dans la lave noire",
        align: "left",
      },
      {
        id: "randonnees-cascades",
        label: "JOURS 9 À 10",
        title: "Randonnées & cascades",
        text: "Derniers jours au rythme des sentiers : forêts de lauriers, cascades cachées, sources naturelles et points de vue spectaculaires sur l'océan pour clôturer le voyage en pleine nature.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
        alt: "Cascade et sentier de randonnée au cœur de la nature açoréenne",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres îles comme Faial, Terceira, São Jorge ou Flores peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Açores",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter les Açores&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Les Açores se visitent toute l&apos;année, mais une saison se
              distingue&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>De mai à octobre</strong>&nbsp;: la période idéale, plus
                douce et ensoleillée, parfaite pour la randonnée et les sorties en
                mer.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juillet et août</strong>&nbsp;: pic de l&apos;observation
                des baleines et températures les plus agréables.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hors saison (novembre à avril)</strong>&nbsp;: paysages
                d&apos;un vert intense, atmosphère préservée et tarifs plus doux.
              </li>
            </ul>
            <p>
              Le climat océanique est changeant&nbsp;: votre conseiller vous
              guidera vers la période la plus adaptée à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre aux Açores&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> Les Açores sont une région autonome du
              Portugal, donc dans l&apos;Union européenne et l&apos;espace
              Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une simple <strong>carte d&apos;identité ou un passeport en cours
                de validité</strong> suffit pour les ressortissants français.
              </li>
              <li>
                <Icon name="check" />
                Aucune formalité de visa ni de change&nbsp;: la monnaie est
                l&apos;<strong>euro</strong>.
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
        question: <>Quels types de voyages proposez-vous aux Açores&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour les
              Açores&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong>&nbsp;: immersion sur une île, idéale São
                Miguel.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong>&nbsp;: itinéraire multi-îles, individuel
                ou accompagné.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour randonnée &amp; nature</strong>&nbsp;: sentiers,
                volcans et cascades.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong>&nbsp;: adresses de charme et
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
              choisissez&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>îles et la durée</strong>&nbsp;: São Miguel, Pico,
                Faial, Terceira, Flores…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong>&nbsp;: hôtel, maison de
                charme, quinta au cœur de la nature.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong>&nbsp;: observation
                des baleines, randonnées, sources thermales.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage aux Açores&nbsp;?</>,
        answer: (
          <>
            <p>Le budget dépend de plusieurs facteurs&nbsp;:</p>
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
                Le nombre d&apos;îles visitées
              </li>
              <li>
                <Icon name="check" />
                Le niveau d&apos;hébergement souhaité
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
        question: <>Comment se déplace-t-on entre les îles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Très facilement.</strong> Nous organisons tous vos
              déplacements&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Vols inter-îles</strong> rapides reliant les principales
                îles de l&apos;archipel.
              </li>
              <li>
                <Icon name="check" />
                <strong>Liaisons en ferry</strong>, idéales pour le triangle
                Pico-Faial-São Jorge.
              </li>
              <li>
                <Icon name="check" />
                <strong>Location de voiture</strong> pour explorer chaque île à
                votre rythme.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels hébergements proposez-vous&nbsp;?</>,
        answer: (
          <>
            <p>Nous sélectionnons les hébergements selon vos préférences&nbsp;:</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hôtels de charme</strong> à Ponta Delgada et dans les
                principales villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Quintas et maisons d&apos;hôtes</strong> au cœur de la
                nature açoréenne.
              </li>
              <li>
                <Icon name="check" />
                <strong>Écolodges</strong> en pleine campagne, face à l&apos;océan.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de caractère</strong> alliant confort et
                authenticité.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment demander un devis&nbsp;?</>,
        answer: (
          <>
            <p>C&apos;est simple, rapide et gratuit&nbsp;:</p>
            <ul>
              <li>
                <Icon name="description" />
                Via notre <strong>formulaire en ligne</strong>.
              </li>
              <li>
                <Icon name="call" />
                Par téléphone&nbsp;: <strong>+33 (0)5 34 391 391</strong>
              </li>
              <li>
                <Icon name="mail" />
                Par email&nbsp;: <strong>voyages@cta-events.com</strong>
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
        question: "Quelle est la meilleure période pour visiter les Açores ?",
        answer:
          "La période idéale s'étend de mai à octobre : un climat plus doux et ensoleillé, parfait pour la randonnée et les sorties en mer. Juillet et août sont le pic de l'observation des baleines. Hors saison, les paysages sont d'un vert intense et les tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre aux Açores ?",
        answer:
          "Non. Les Açores sont une région autonome du Portugal, dans l'Union européenne et l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français, et la monnaie est l'euro.",
      },
      {
        question: "Quels types de voyages proposez-vous aux Açores ?",
        answer:
          "CTA Voyages propose des séjours sur une île, des circuits multi-îles, des séjours randonnée et nature, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire aux Açores ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon les îles choisies, votre rythme, vos envies et votre budget.",
      },
      {
        question: "Combien coûte un voyage aux Açores ?",
        answer:
          "Le budget dépend de la durée, la période, le nombre d'îles visitées, le niveau d'hébergement et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplace-t-on entre les îles des Açores ?",
        answer:
          "Nous organisons vos déplacements : vols inter-îles, liaisons en ferry (idéales pour le triangle Pico-Faial-São Jorge) et location de voiture pour explorer chaque île à votre rythme.",
      },
      {
        question: "Quels hébergements proposez-vous aux Açores ?",
        answer:
          "Hôtels de charme à Ponta Delgada, quintas et maisons d'hôtes au cœur de la nature, écolodges face à l'océan et adresses de caractère alliant confort et authenticité.",
      },
      {
        question: "Comment demander un devis pour un voyage aux Açores ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Aux Açores comme ailleurs,
        nous privilégions des prestataires locaux responsables, une observation des
        cétacés respectueuse des animaux et un tourisme attentif à la préservation
        de ces écosystèmes volcaniques fragiles et de la culture insulaire.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Açores commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit multi-îles, escapade nature ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default acores;
