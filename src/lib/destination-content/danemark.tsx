import type { DestinationContent } from "./types";
import {
  checklist,
  faqBudget,
  faqDevis,
  faqFormules,
  faqHebergements,
  faqPersonnalisation,
  itineraryDisclaimer,
  jsonLdCommon,
} from "./_shared";

const danemark: DestinationContent = {
  slug: "danemark",
  meta: {
    title:
      "Voyage au Danemark : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Danemark avec CTA Voyages. Copenhague et Nyhavn, design scandinave, châteaux royaux, plages du Jutland et gastronomie nordique. City break, autotour ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image: "/generated/danemark.jpg",
    imageAlt:
      "Façades colorées et voiliers du port de Nyhavn à Copenhague — Voyage au Danemark avec CTA Voyages",
    label: "Destination Danemark",
    h1: "Voyage au Danemark : hygge, design et côtes sauvages",
    description:
      "City break à Copenhague, autotour entre châteaux et plages, escapade en famille ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~1h50 (direct)",
    },
    { kind: "fact", icon: "schedule", label: "Décalage horaire", value: "Aucun" },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Danois (anglais très répandu)",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Couronne danoise (DKK)",
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
    h2: "Le Danemark, la douceur de vivre scandinave",
    body: (
      <>
        Le Danemark a exporté un mot devenu universel&nbsp;: le{" "}
        <em>hygge</em>, cet art de créer de la chaleur et du confort au
        quotidien. On le retrouve partout, des cafés à bougies de{" "}
        <strong>Copenhague</strong> aux maisons de bord de mer du{" "}
        <strong>Jutland</strong>. La capitale, l&apos;une des plus agréables
        d&apos;Europe, aligne les façades colorées de <strong>Nyhavn</strong>,
        les jardins de <strong>Tivoli</strong>, une architecture contemporaine
        remarquable et une scène gastronomique qui a réinventé la cuisine
        nordique. Au-delà, le pays se découvre à taille humaine&nbsp;: le château
        de <strong>Kronborg</strong> à Elseneur, décor du Hamlet de Shakespeare,
        les falaises blanches de <strong>Møn</strong>, les dunes infinies de la
        côte ouest et <strong>Odense</strong>, ville natale d&apos;Andersen. En{" "}
        <strong>city break</strong>, en <strong>autotour</strong>, en{" "}
        <strong>voyage en famille</strong> ou en{" "}
        <strong>séjour sur mesure</strong>, le Danemark se parcourt sans effort,
        à vélo, en train ou au volant.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Danemark ?",
    cards: [
      {
        icon: "sailing",
        title: "Copenhague & Nyhavn",
        text: "Le port aux façades colorées, les canaux à parcourir en bateau, les vélos partout : une capitale à la fois élégante et décontractée.",
        img: "/generated/danemark-2.jpg",
        alt: "Maisons colorées et voiliers du port de Nyhavn à Copenhague",
      },
      {
        icon: "chair",
        title: "Le design scandinave",
        text: "Mobilier, architecture, objets du quotidien : le Danemark a façonné une esthétique reconnue mondialement, à découvrir dans ses musées et ses boutiques.",
        img: "/generated/danemark-4.jpg",
        alt: "Intérieur et mobilier au design scandinave caractéristique",
      },
      {
        icon: "restaurant",
        title: "La cuisine nordique",
        text: "Produits locaux, cueillette sauvage et créativité : Copenhague concentre l'une des plus fortes densités de tables étoilées d'Europe.",
        img: "/generated/danemark-3.jpg",
        alt: "Table dressée et spécialités de la cuisine nordique danoise",
      },
      {
        icon: "beach_access",
        title: "Les plages du Jutland",
        text: "Des kilomètres de sable clair, des dunes mouvantes et des maisons de vacances face à la mer du Nord : la Scandinavie balnéaire, méconnue et apaisante.",
        img: "/generated/danemark-1.jpg",
        alt: "Dunes et longue plage de sable de la côte ouest du Jutland",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Danemark",
    steps: [
      {
        id: "copenhague",
        label: "JOURS 1 À 3",
        title: "Copenhague, capitale du hygge",
        text: "Arrivée dans la capitale danoise. Nyhavn, la Petite Sirène, les jardins de Tivoli et le quartier créatif de Vesterbro, entre boutiques de créateurs et cafés à bougies.",
        img: "/generated/danemark-2.jpg",
        alt: "Rues et architecture du centre de Copenhague",
        align: "left",
      },
      {
        id: "chateaux-royaux",
        label: "JOUR 4",
        title: "Les châteaux royaux du Nord",
        text: "Excursion vers le château Renaissance de Frederiksborg puis vers Kronborg à Elseneur, forteresse face au détroit qui inspira le Hamlet de Shakespeare.",
        img: "/generated/danemark-3.jpg",
        alt: "Château royal danois entouré de douves et de jardins",
        align: "right",
      },
      {
        id: "falaises-mon",
        label: "JOUR 5",
        title: "Les falaises de Møn",
        text: "Route vers le sud et les spectaculaires falaises de craie de Møns Klint, hautes de 120 mètres, dominant une mer d'un bleu turquoise inattendu.",
        img: "/generated/danemark.jpg",
        alt: "Falaises de craie blanches surplombant la mer Baltique",
        align: "left",
      },
      {
        id: "odense-fionie",
        label: "JOUR 6",
        title: "Odense & l'île de Fionie",
        text: "Traversée vers le jardin du Danemark : Odense, ville natale de Hans Christian Andersen, ses maisons à colombages et les manoirs de la campagne environnante.",
        img: "/generated/danemark-3.jpg",
        alt: "Maisons à colombages d'une vieille ville danoise",
        align: "right",
      },
      {
        id: "jutland-cotes",
        label: "JOURS 7 À 9",
        title: "Le Jutland et la mer du Nord",
        text: "Fin du voyage sur la côte ouest : dunes mouvantes de Råbjerg Mile, pointe de Skagen où deux mers se rencontrent, et longues plages battues par le vent.",
        img: "/generated/danemark-1.jpg",
        alt: "Dunes et plage sauvage de la côte du Jutland",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Une extension vers la Suède voisine, à trente minutes de train de
        Copenhague, ou vers les îles Féroé s&apos;organise sans difficulté.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Danemark",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Danemark&nbsp;?</>
        ),
        answer: (
          <>
            <p>Le climat danois est doux mais changeant&nbsp;:</p>
            {checklist([
              <>
                <strong>De mai à septembre</strong>&nbsp;: la meilleure période,
                avec des journées très longues — le soleil se couche vers 22h en
                juin — et des terrasses animées.
              </>,
              <>
                <strong>Juillet et août</strong>&nbsp;: le moment idéal pour les
                plages du Jutland et les îles.
              </>,
              <>
                <strong>Décembre</strong>&nbsp;: Copenhague en version marchés de
                Noël, l&apos;expression la plus pure du hygge.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Faut-il un visa et quelle monnaie utiliser&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Aucun visa n&apos;est nécessaire</strong>, mais attention à
              la monnaie&nbsp;:
            </p>
            {checklist([
              <>
                Le Danemark est dans l&apos;Union européenne et
                l&apos;espace Schengen&nbsp;: carte d&apos;identité ou passeport
                en cours de validité.
              </>,
              <>
                La monnaie est la <strong>couronne danoise (DKK)</strong>, pas
                l&apos;euro.
              </>,
              <>
                Le paiement par carte est accepté absolument partout&nbsp;: il
                est inutile de prévoir des espèces.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Danemark", [
        <>
          <strong>City break</strong>&nbsp;: Copenhague en week-end prolongé.
        </>,
        <>
          <strong>Autotour</strong>&nbsp;: châteaux, îles et côtes du Jutland au
          volant.
        </>,
        <>
          <strong>Voyage en famille</strong>&nbsp;: parcs à thème, musées
          interactifs et plages.
        </>,
        <>
          <strong>Combiné scandinave</strong>&nbsp;: Danemark, Suède et Norvège
          en un seul voyage.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Copenhague seule, la
          Fionie, le Jutland ou les îles.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: design et gastronomie, patrimoine
          royal ou nature et grand air.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: table gastronomique, atelier de
          design, croisière dans les canaux.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Danemark",
        "Le niveau de vie élevé du pays, notamment pour la restauration",
      ),
      {
        question: <>Le Danemark est-il adapté aux familles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est l&apos;une des destinations les plus
              familiales d&apos;Europe.</strong>
            </p>
            {checklist([
              <>
                Les <strong>parcs à thème</strong>, dont Tivoli au cœur de
                Copenhague et le parc dédié aux célèbres briques danoises.
              </>,
              <>
                Des <strong>musées interactifs</strong> pensés pour les enfants
                dans la plupart des grandes villes.
              </>,
              <>
                Des <strong>plages sûres</strong> et des maisons de vacances tout
                équipées sur la côte.
              </>,
              <>
                Une <strong>culture du vélo</strong> qui rend les déplacements
                simples et ludiques.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("au Danemark", [
        <>
          <strong>Hôtels design</strong> au cœur de Copenhague.
        </>,
        <>
          <strong>Manoirs et châteaux-hôtels</strong> dans la campagne de Fionie
          et de Zélande.
        </>,
        <>
          <strong>Maisons de vacances</strong> face à la mer sur les côtes du
          Jutland.
        </>,
        <>
          <strong>Auberges traditionnelles</strong> (kro) dans les villages
          historiques.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Danemark ?",
        answer:
          "De mai à septembre pour des journées très longues et des terrasses animées, juillet et août pour les plages du Jutland et les îles, décembre pour les marchés de Noël de Copenhague.",
      },
      {
        question: "Faut-il un visa pour se rendre au Danemark ?",
        answer:
          "Non. Le Danemark est dans l'Union européenne et l'espace Schengen : une carte d'identité ou un passeport en cours de validité suffit. La monnaie reste toutefois la couronne danoise et non l'euro, la carte bancaire étant acceptée partout.",
      },
      {
        question: "Le Danemark est-il une bonne destination en famille ?",
        answer:
          "Oui, c'est l'une des destinations les plus familiales d'Europe : parcs à thème dont Tivoli, musées interactifs, plages sûres, maisons de vacances tout équipées et une culture du vélo qui simplifie les déplacements.",
      },
      {
        question: "Combien coûte un voyage au Danemark ?",
        answer:
          "Le budget dépend de la durée, de la période, des régions visitées, du niveau d'hébergement et des activités incluses, en tenant compte du niveau de vie élevé du pays, notamment pour la restauration. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Danemark",
        "des city breaks à Copenhague, des autotours entre châteaux, îles et côtes du Jutland, des voyages en famille, des combinés scandinaves et des voyages entièrement sur mesure.",
        "Hôtels design à Copenhague, manoirs et châteaux-hôtels dans la campagne, maisons de vacances face à la mer et auberges traditionnelles dans les villages historiques.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Danemark, pays pionnier
        de la transition énergétique, nous privilégions les hébergements
        certifiés, les déplacements à vélo ou en train et une restauration fondée
        sur les circuits courts et les produits de saison.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Danemark commence ici",
    body: "Parlez-nous de votre projet. City break à Copenhague, autotour entre châteaux et plages, séjour en famille ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default danemark;
