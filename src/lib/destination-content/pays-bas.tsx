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

const paysBas: DestinationContent = {
  slug: "pays-bas",
  meta: {
    title:
      "Voyage aux Pays-Bas : séjour, circuit",
    description:
      "Organisez votre voyage aux Pays-Bas avec CTA Voyages. Canaux d'Amsterdam, champs de tulipes et Keukenhof, moulins de Kinderdijk, Rotterdam et Delft.",
  },
  hero: {
    image: "/generated/pays-bas.jpg",
    imageAlt:
      "Canal bordé de maisons à pignons aux Pays-Bas — Voyage aux Pays-Bas avec CTA Voyages",
    label: "Destination Pays-Bas",
    h1: "Voyage aux Pays-Bas : canaux, tulipes et art de vivre",
    description:
      "Week-end à Amsterdam, escapade au temps des tulipes, itinéraire à vélo ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "train",
      label: "Depuis Paris",
      value: "~3h20 en Thalys",
    },
    { kind: "fact", icon: "schedule", label: "Décalage horaire", value: "Aucun" },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Néerlandais (anglais très répandu)",
    },
    { kind: "fact", icon: "payments", label: "Monnaie", value: "Euro (EUR)" },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Les Pays-Bas, un pays gagné sur l'eau",
    body: (
      <>
        Un quart du territoire sous le niveau de la mer, des digues, des polders
        et un réseau de canaux qui structure les villes comme la campagne&nbsp;:
        les Pays-Bas sont une prouesse d&apos;ingéniosité devenue paysage.{" "}
        <strong>Amsterdam</strong> en est la vitrine, avec ses canaux classés à
        l&apos;UNESCO, ses maisons à pignons penchées, le{" "}
        <strong>Rijksmuseum</strong> et le <strong>musée Van Gogh</strong>. Mais
        le pays ne s&apos;arrête pas à sa capitale&nbsp;: <strong>Rotterdam</strong>{" "}
        étonne par son architecture contemporaine audacieuse,{" "}
        <strong>Delft</strong> par ses faïences bleues, <strong>Utrecht</strong>{" "}
        par ses quais animés en contrebas des rues. Au printemps, les champs de
        fleurs du Bollenstreek et les jardins de <strong>Keukenhof</strong>{" "}
        déroulent des rubans de couleur à perte de vue, tandis que les moulins de{" "}
        <strong>Kinderdijk</strong> et le village de{" "}
        <strong>Zaanse Schans</strong> racontent la Hollande d&apos;autrefois.
        Tout se parcourt facilement, à vélo, en train ou au fil de l&apos;eau, en{" "}
        <strong>week-end</strong>, en <strong>autotour</strong> ou en{" "}
        <strong>voyage sur mesure</strong>.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Pays-Bas ?",
    cards: [
      {
        icon: "local_florist",
        title: "Les champs de tulipes",
        text: "D'avril à mai, le Bollenstreek se couvre de bandes colorées et les jardins de Keukenhof rassemblent sept millions de bulbes en fleurs.",
        img: "/generated/pays-bas-1.jpg",
        alt: "Champs de tulipes colorés et moulin dans la campagne néerlandaise",
      },
      {
        icon: "directions_boat",
        title: "Les canaux d'Amsterdam",
        text: "Classés à l'UNESCO, ils se découvrent en bateau au coucher du soleil, entre maisons à pignons, péniches habitées et ponts illuminés.",
        img: "/generated/pays-bas-2.jpg",
        alt: "Canal d'Amsterdam bordé de maisons anciennes et de ponts",
      },
      {
        icon: "museum",
        title: "L'âge d'or de la peinture",
        text: "Rembrandt, Vermeer, Van Gogh : les Pays-Bas concentrent une densité de chefs-d'œuvre unique en Europe, dans des musées remarquablement conçus.",
        img: "/generated/pays-bas-4.jpg",
        alt: "Façades du quartier des musées à Amsterdam",
      },
      {
        icon: "pedal_bike",
        title: "Le pays du vélo",
        text: "35 000 km de pistes cyclables, un relief plat et des paysages de polders : c'est le pays idéal pour un itinéraire à deux roues, même en famille.",
        img: "/generated/pays-bas-3.jpg",
        alt: "Piste cyclable traversant la campagne et les polders néerlandais",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Pays-Bas",
    steps: [
      {
        id: "amsterdam",
        label: "JOURS 1 ET 2",
        title: "Amsterdam au fil de l'eau",
        text: "Arrivée en Thalys puis croisière sur les canaux. Découverte du quartier du Jordaan, de la maison d'Anne Frank et d'un premier grand musée, avant un dîner dans une adresse typique.",
        img: "/generated/pays-bas-2.jpg",
        alt: "Croisière sur les canaux d'Amsterdam entre maisons à pignons",
        align: "left",
      },
      {
        id: "musees",
        label: "JOUR 3",
        title: "Rijksmuseum & Van Gogh",
        text: "Une journée consacrée à l'âge d'or néerlandais : la Ronde de nuit de Rembrandt, la Laitière de Vermeer, puis la collection la plus complète au monde consacrée à Van Gogh.",
        img: "/generated/pays-bas.jpg",
        alt: "Quartier des musées d'Amsterdam et bassin réfléchissant",
        align: "right",
      },
      {
        id: "keukenhof",
        label: "JOUR 4",
        title: "Keukenhof & champs de fleurs",
        text: "Excursion au cœur du Bollenstreek au printemps : les jardins de Keukenhof et leurs sept millions de bulbes, puis balade à vélo entre les parcelles de tulipes en fleurs.",
        img: "/generated/pays-bas-1.jpg",
        alt: "Jardins fleuris de Keukenhof et champs de tulipes alentour",
        align: "left",
      },
      {
        id: "moulins-villages",
        label: "JOUR 5",
        title: "Moulins & villages traditionnels",
        text: "Route vers les moulins de Kinderdijk, classés à l'UNESCO, puis découverte de Zaanse Schans, de ses maisons vertes, de ses fromageries et de ses ateliers de sabots.",
        img: "/generated/pays-bas-3.jpg",
        alt: "Alignement de moulins traditionnels au bord d'un canal",
        align: "right",
      },
      {
        id: "rotterdam-delft",
        label: "JOURS 6 ET 7",
        title: "Rotterdam, Delft & La Haye",
        text: "Contraste saisissant pour finir : l'architecture contemporaine de Rotterdam, les faïences bleues de Delft et les collections du Mauritshuis à La Haye.",
        img: "/generated/pays-bas-3.jpg",
        alt: "Architecture contemporaine de Rotterdam au bord de la Meuse",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Utrecht, les îles de la mer des Wadden ou une extension vers la Belgique
        voisine s&apos;intègrent facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Pays-Bas",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter les Pays-Bas&nbsp;?</>
        ),
        answer: (
          <>
            <p>Deux périodes se distinguent nettement&nbsp;:</p>
            {checklist([
              <>
                <strong>D&apos;avril à mi-mai</strong>&nbsp;: la floraison des
                tulipes et l&apos;ouverture de Keukenhof, le moment le plus
                spectaculaire de l&apos;année.
              </>,
              <>
                <strong>De juin à septembre</strong>&nbsp;: journées longues,
                terrasses au bord des canaux et conditions idéales pour le vélo.
              </>,
              <>
                <strong>Décembre</strong>&nbsp;: marchés de Noël, patinoires et
                ambiance chaleureuse dans les villes.
              </>,
            ])}
            <p>
              Keukenhof n&apos;ouvre que huit semaines par an&nbsp;: mieux vaut
              réserver tôt.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour les Pays-Bas&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> Les Pays-Bas font partie de l&apos;Union
              européenne et de l&apos;espace Schengen.
            </p>
            {checklist([
              <>
                Une <strong>carte d&apos;identité ou un passeport</strong> en
                cours de validité suffit pour les ressortissants français.
              </>,
              <>
                Aucune formalité de change&nbsp;: la monnaie est l&apos;
                <strong>euro</strong>.
              </>,
              <>
                La carte européenne d&apos;assurance maladie est acceptée pour
                les soins courants.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("aux Pays-Bas", [
        <>
          <strong>Week-end et city break</strong>&nbsp;: Amsterdam, Rotterdam ou
          Utrecht en train.
        </>,
        <>
          <strong>Escapade tulipes</strong>&nbsp;: Keukenhof et les champs de
          fleurs au printemps.
        </>,
        <>
          <strong>Itinéraire à vélo</strong>&nbsp;: étapes douces entre polders,
          digues et villages.
        </>,
        <>
          <strong>Croisière fluviale</strong>&nbsp;: navigation sur le Rhin et
          les canaux hollandais.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>villes et la durée</strong>&nbsp;: Amsterdam seule ou
          combinée à Rotterdam, Delft et Utrecht.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: musées et patrimoine, nature et vélo,
          ou détente au fil de l&apos;eau.
        </>,
        <>
          Les <strong>expériences privatisées</strong>&nbsp;: croisière privée,
          visite guidée francophone, atelier gourmand.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "aux Pays-Bas",
        "La période : les tarifs hôteliers grimpent fortement pendant la saison des tulipes",
      ),
      {
        question: <>Comment se déplacer sur place&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est l&apos;un des pays les plus simples
              d&apos;Europe.</strong>
            </p>
            {checklist([
              <>
                <strong>Le train</strong>&nbsp;: réseau très dense, Amsterdam-
                Rotterdam en 40 minutes.
              </>,
              <>
                <strong>Le vélo</strong>&nbsp;: le moyen de transport local par
                excellence, y compris en ville.
              </>,
              <>
                <strong>Le bateau</strong>&nbsp;: canaux urbains et croisières
                fluviales entre les grandes villes.
              </>,
              <>
                La voiture n&apos;est utile que pour la campagne&nbsp;: le
                stationnement est cher dans les centres.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("aux Pays-Bas", [
        <>
          <strong>Hôtels de charme</strong> dans les maisons de canal
          d&apos;Amsterdam.
        </>,
        <>
          <strong>Hôtels design</strong> à Rotterdam et dans les quartiers
          créatifs.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> dans les villages et au bord des
          polders.
        </>,
        <>
          <strong>Péniches aménagées</strong> pour une nuit insolite sur les
          canaux.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter les Pays-Bas ?",
        answer:
          "D'avril à mi-mai pour la floraison des tulipes et l'ouverture de Keukenhof, de juin à septembre pour les longues journées, les terrasses et le vélo, et décembre pour les marchés de Noël.",
      },
      {
        question: "Faut-il un visa pour se rendre aux Pays-Bas ?",
        answer:
          "Non. Les Pays-Bas sont dans l'Union européenne et l'espace Schengen : une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français, et la monnaie est l'euro.",
      },
      {
        question: "Comment se déplacer aux Pays-Bas ?",
        answer:
          "Le train est très dense (Amsterdam-Rotterdam en 40 minutes), le vélo est le moyen de transport local par excellence et le bateau permet de découvrir canaux urbains et croisières fluviales. La voiture n'est utile que pour la campagne.",
      },
      {
        question: "Combien coûte un voyage aux Pays-Bas ?",
        answer:
          "Le budget dépend de la durée, de la période — les tarifs hôteliers grimpent fortement pendant la saison des tulipes —, des villes visitées, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "aux Pays-Bas",
        "des week-ends et city breaks, des escapades au temps des tulipes, des itinéraires à vélo, des croisières fluviales et des voyages entièrement sur mesure.",
        "Hôtels de charme dans les maisons de canal d'Amsterdam, hôtels design à Rotterdam, maisons d'hôtes dans les villages et péniches aménagées pour une nuit insolite.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Aux Pays-Bas, nous
        privilégions le train depuis la France plutôt que l&apos;avion, les
        déplacements à vélo une fois sur place et des hébergements indépendants
        engagés dans une démarche environnementale.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Pays-Bas commence ici",
    body: "Parlez-nous de votre projet. Week-end à Amsterdam, escapade au temps des tulipes, itinéraire à vélo ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default paysBas;
