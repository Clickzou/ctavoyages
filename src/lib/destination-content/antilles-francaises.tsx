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

const antillesFrancaises: DestinationContent = {
  slug: "antilles-francaises",
  meta: {
    title:
      "Voyage aux Antilles françaises : Guadeloupe, Martinique et voyage sur mesure",
    description:
      "Organisez votre voyage en Guadeloupe et en Martinique avec CTA Voyages. Plages des Salines et de Grande Anse, Soufrière et chutes du Carbet, Les Saintes, route des rhums et réserve Cousteau. Séjour ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/antilles-francaises.jpg",
    imageAlt:
      "Plage de sable blanc et cocotiers aux Antilles françaises — Voyage aux Antilles avec CTA Voyages",
    label: "Destination Antilles françaises",
    h1: "Voyage aux Antilles françaises : Guadeloupe et Martinique",
    description:
      "Séjour plage, combiné deux îles, randonnées volcaniques ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~8h30 (direct)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-6h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langues", value: "Français, créole" },
    { kind: "fact", icon: "payments", label: "Monnaie", value: "Euro (EUR)" },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Décembre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Les Antilles françaises, les Caraïbes sans dépaysement administratif",
    body: (
      <>
        Guadeloupe et Martinique offrent un rare privilège&nbsp;: un
        dépaysement total à huit heures et demie de vol, sans formalités, sans
        change et sans barrière de langue. La <strong>Guadeloupe</strong>,
        papillon posé sur la mer, réunit deux îles très différentes&nbsp;: la
        Grande-Terre et ses plages de sable blanc, la Basse-Terre volcanique
        couverte de forêt tropicale, dominée par la{" "}
        <strong>Soufrière</strong> et parcourue par les{" "}
        <strong>chutes du Carbet</strong>. Au large, l&apos;archipel des{" "}
        <strong>Saintes</strong> et <strong>Marie-Galante</strong> conservent une
        douceur d&apos;un autre temps. La <strong>Martinique</strong>, l&apos;île
        aux fleurs, décline la plage des <strong>Salines</strong>, les villages
        de pêcheurs du sud, la montagne Pelée et les jardins luxuriants du nord.
        Partout, la <strong>route des rhums</strong> et ses distilleries
        centenaires, une cuisine créole métissée et des fonds marins protégés,
        notamment dans la <strong>réserve Cousteau</strong>.{" "}
        <strong>Séjour plage</strong>, <strong>combiné deux îles</strong>,{" "}
        <strong>randonnée</strong> ou <strong>voyage sur mesure</strong>&nbsp;:
        nous construisons votre séjour avec vous.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Antilles françaises ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des plages pour tous les goûts",
        text: "Sable blanc de la plage des Salines et de Sainte-Anne, sable noir volcanique du nord, criques désertes des Saintes et de Marie-Galante.",
        img: "/generated/antilles-francaises-3.jpg",
        alt: "Plage de sable blanc bordée de cocotiers aux Antilles",
      },
      {
        icon: "forest",
        title: "La forêt tropicale & les volcans",
        text: "La Soufrière, les chutes du Carbet, la montagne Pelée et les sentiers du parc national : une nature exubérante à quelques minutes de la plage.",
        img: "/generated/antilles-francaises-1.jpg",
        alt: "Cascade et forêt tropicale luxuriante en Guadeloupe",
      },
      {
        icon: "local_bar",
        title: "La route des rhums",
        text: "Rhum agricole AOC, distilleries centenaires ouvertes à la visite, dégustations et ti-punch au coucher du soleil : un patrimoine unique au monde.",
        img: "/generated/antilles-francaises-2.jpg",
        alt: "Distillerie traditionnelle et champs de canne à sucre aux Antilles",
      },
      {
        icon: "scuba_diving",
        title: "Les fonds marins",
        text: "La réserve Cousteau et les îlets Pigeon, les fonds blancs du Grand Cul-de-Sac Marin, les épaves de Saint-Pierre : un terrain de jeu exceptionnel.",
        img: "/generated/antilles-francaises-4.jpg",
        alt: "Snorkeling au-dessus d'un récif corallien dans les Caraïbes",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Antilles françaises",
    steps: [
      {
        id: "grande-terre",
        label: "JOURS 1 À 3",
        title: "Guadeloupe : Grande-Terre",
        text: "Arrivée et installation dans le sud : plages de Sainte-Anne et du Gosier, pointe des Châteaux battue par l'Atlantique et marché aux épices de Pointe-à-Pitre.",
        img: "/generated/antilles-francaises-3.jpg",
        alt: "Plage et lagon turquoise de Grande-Terre en Guadeloupe",
        align: "left",
      },
      {
        id: "basse-terre",
        label: "JOURS 4 ET 5",
        title: "Basse-Terre & le parc national",
        text: "Passage sur l'île volcanique : ascension de la Soufrière, chutes du Carbet, cascade aux Écrevisses et snorkeling dans la réserve Cousteau.",
        img: "/generated/antilles-francaises-1.jpg",
        alt: "Sentier de forêt tropicale et cascade dans le parc national de Guadeloupe",
        align: "right",
      },
      {
        id: "les-saintes",
        label: "JOUR 6",
        title: "L'archipel des Saintes",
        text: "Traversée en bateau vers Terre-de-Haut : la baie classée parmi les plus belles du monde, le fort Napoléon et la plage de Pompierre, à parcourir en scooter.",
        img: "/generated/antilles-francaises.jpg",
        alt: "Baie des Saintes et village aux toits rouges vus des hauteurs",
        align: "left",
      },
      {
        id: "martinique-nord",
        label: "JOURS 7 ET 8",
        title: "Martinique : le nord et les rhums",
        text: "Vol vers la Martinique : Saint-Pierre et la montagne Pelée, jardin de Balata, distilleries de rhum agricole et route de la Trace à travers la forêt.",
        img: "/generated/antilles-francaises-2.jpg",
        alt: "Distillerie et paysage verdoyant du nord de la Martinique",
        align: "right",
      },
      {
        id: "martinique-sud",
        label: "JOURS 9 À 12",
        title: "Martinique : le sud & les plages",
        text: "Fin du voyage dans le sud : plage des Salines, presqu'île de Sainte-Anne, sortie en catamaran vers les fonds blancs et dîners créoles face à la mer.",
        img: "/generated/antilles-francaises-3.jpg",
        alt: "Plage des Salines et cocotiers au sud de la Martinique",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Marie-Galante, La Désirade, Saint-Martin ou une croisière dans les
        Caraïbes s&apos;intègrent facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Antilles",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour partir aux Antilles&nbsp;?</>
        ),
        answer: (
          <>
            <p>La saison sèche, appelée le carême, est la plus agréable&nbsp;:</p>
            {checklist([
              <>
                <strong>De décembre à avril</strong>&nbsp;: temps sec, mer chaude
                et ensoleillement optimal — la haute saison.
              </>,
              <>
                <strong>Février</strong>&nbsp;: le carnaval, l&apos;un des moments
                les plus intenses de la vie antillaise.
              </>,
              <>
                <strong>De juillet à novembre</strong>&nbsp;: l&apos;hivernage,
                plus humide, avec un risque cyclonique et des tarifs plus doux.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Aucune.</strong> Guadeloupe et Martinique sont des
              départements français&nbsp;:
            </p>
            {checklist([
              <>
                Une simple <strong>carte d&apos;identité</strong> suffit pour les
                ressortissants français.
              </>,
              <>
                Aucun change&nbsp;: la monnaie est l&apos;
                <strong>euro</strong>, et le forfait téléphonique fonctionne
                comme en métropole.
              </>,
              <>
                La <strong>carte Vitale</strong> est valable&nbsp;: le système de
                santé est identique à celui de la métropole.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("aux Antilles françaises", [
        <>
          <strong>Séjour plage</strong>&nbsp;: hôtel les pieds dans l&apos;eau ou
          villa avec piscine.
        </>,
        <>
          <strong>Combiné deux îles</strong>&nbsp;: Guadeloupe et Martinique en
          un seul voyage.
        </>,
        <>
          <strong>Autotour</strong>&nbsp;: tour de l&apos;île en liberté, entre
          plages, forêt et distilleries.
        </>,
        <>
          <strong>Croisière</strong>&nbsp;: navigation en catamaran dans
          l&apos;arc antillais.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Le <strong>choix des îles</strong>&nbsp;: Guadeloupe, Martinique, Les
          Saintes, Marie-Galante ou combinaison.
        </>,
        <>
          Le <strong>type de séjour</strong>&nbsp;: hôtel, villa privée ou
          location avec voiture incluse.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: plongée, catamaran, randonnée
          volcanique, route des rhums, table créole.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "aux Antilles françaises",
        "La période : les tarifs aériens grimpent fortement pendant les vacances scolaires d'hiver",
      ),
      {
        question: <>Guadeloupe ou Martinique&nbsp;: laquelle choisir&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Les deux se complètent très bien</strong>, mais chacune a
              son caractère&nbsp;:
            </p>
            {checklist([
              <>
                La <strong>Guadeloupe</strong> est plus sauvage et plus variée,
                avec ses îles satellites et son grand parc national.
              </>,
              <>
                La <strong>Martinique</strong> est plus vallonnée et plus
                « habitée », avec un patrimoine et une gastronomie très
                affirmés.
              </>,
              <>
                Un <strong>combiné de deux semaines</strong> permet de découvrir
                les deux, avec un vol interne de quarante-cinq minutes.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("aux Antilles françaises", [
        <>
          <strong>Hôtels les pieds dans l&apos;eau</strong> au Gosier,
          Sainte-Anne et aux Trois-Îlets.
        </>,
        <>
          <strong>Villas privées</strong> avec piscine et vue sur la mer.
        </>,
        <>
          <strong>Écolodges</strong> en lisière de forêt tropicale sur
          Basse-Terre.
        </>,
        <>
          <strong>Maisons créoles</strong> de charme aux Saintes et à
          Marie-Galante.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour partir aux Antilles françaises ?",
        answer:
          "De décembre à avril, pendant le carême : temps sec, mer chaude et ensoleillement optimal. Février accueille le carnaval. De juillet à novembre, l'hivernage est plus humide avec un risque cyclonique, mais les tarifs sont plus doux.",
      },
      {
        question: "Quelles formalités pour la Guadeloupe et la Martinique ?",
        answer:
          "Aucune : ce sont des départements français. Une carte d'identité suffit pour les ressortissants français, la monnaie est l'euro, le forfait téléphonique fonctionne comme en métropole et la carte Vitale est valable.",
      },
      {
        question: "Guadeloupe ou Martinique : laquelle choisir ?",
        answer:
          "La Guadeloupe est plus sauvage et variée avec ses îles satellites et son parc national ; la Martinique est plus vallonnée avec un patrimoine et une gastronomie très affirmés. Un combiné de deux semaines permet de découvrir les deux, reliées par un vol de 45 minutes.",
      },
      {
        question: "Combien coûte un voyage aux Antilles françaises ?",
        answer:
          "Le budget dépend de la durée, de la période — les tarifs aériens grimpent fortement pendant les vacances scolaires d'hiver —, des îles visitées, du type d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "aux Antilles françaises",
        "des séjours plage en hôtel ou en villa, des combinés Guadeloupe-Martinique, des autotours, des croisières en catamaran et des voyages entièrement sur mesure.",
        "Hôtels les pieds dans l'eau au Gosier, à Sainte-Anne et aux Trois-Îlets, villas privées avec piscine, écolodges en lisière de forêt tropicale et maisons créoles de charme aux Saintes et à Marie-Galante.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Aux Antilles, nous
        privilégions les hébergements indépendants tenus par des familles
        antillaises, les producteurs locaux — rhum, cacao, épices — et les
        prestataires nautiques respectueux des herbiers, des tortues marines et
        des récifs de la réserve Cousteau.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Antilles françaises commence ici",
    body: "Parlez-nous de votre projet. Séjour plage, combiné Guadeloupe-Martinique, randonnées volcaniques ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default antillesFrancaises;
