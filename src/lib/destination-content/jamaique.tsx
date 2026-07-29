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

const jamaique: DestinationContent = {
  slug: "jamaique",
  meta: {
    title:
      "Voyage en Jamaïque : séjour, circuit",
    description:
      "Organisez votre voyage en Jamaïque avec CTA Voyages. Chutes de Dunn's River, plage de Negril, Montagnes Bleues, Kingston et le reggae.",
  },
  hero: {
    image: "/generated/jamaique.jpg",
    imageAlt:
      "Plage bordée de palmiers et eaux turquoise en Jamaïque — Voyage en Jamaïque avec CTA Voyages",
    label: "Destination Jamaïque",
    h1: "Voyage en Jamaïque : reggae, cascades et Caraïbes",
    description:
      "Séjour balnéaire tout compris, escapade nature dans les Montagnes Bleues, route du reggae ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-7h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Anglais, patois jamaïcain",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dollar jamaïcain (JMD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Novembre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Jamaïque, bien plus qu'une île de carte postale",
    body: (
      <>
        On connaît la Jamaïque pour ses plages et pour le reggae, né dans les
        studios de <strong>Kingston</strong> et devenu la bande-son de la
        planète. Mais l&apos;île réserve une nature bien plus verticale
        qu&apos;on ne l&apos;imagine&nbsp;: les{" "}
        <strong>Montagnes Bleues</strong> culminent à plus de 2 200 mètres et
        produisent l&apos;un des cafés les plus réputés du monde&nbsp;; les{" "}
        <strong>chutes de Dunn&apos;s River</strong>, à Ocho Rios, se gravissent
        les pieds dans l&apos;eau sur près de deux cents mètres&nbsp;; à{" "}
        <strong>Port Antonio</strong>, on descend le Rio Grande en radeau de
        bambou et l&apos;on se baigne dans la <strong>lagune bleue</strong>,
        alimentée par des sources souterraines. Côté mer, la plage des sept
        milles de <strong>Negril</strong> et ses couchers de soleil sur les
        falaises de Rick&apos;s Café, les récifs de{" "}
        <strong>Montego Bay</strong> et les criques du sud, restées
        confidentielles. <strong>Séjour balnéaire tout compris</strong>,{" "}
        <strong>circuit nature</strong>,{" "}
        <strong>voyage sur les traces du reggae</strong> ou{" "}
        <strong>itinéraire sur mesure</strong>&nbsp;: à vous de choisir.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Jamaïque ?",
    cards: [
      {
        icon: "water_drop",
        title: "Les chutes de Dunn's River",
        text: "Près de deux cents mètres de cascades en escalier, que l'on gravit en chaîne humaine, les pieds dans une eau fraîche : l'expérience emblématique de l'île.",
        img: "/generated/jamaique-1.jpg",
        alt: "Cascade en escalier au cœur de la végétation tropicale jamaïcaine",
      },
      {
        icon: "music_note",
        title: "Le berceau du reggae",
        text: "Kingston, Trench Town, le musée Bob Marley et Nine Mile : un pèlerinage musical dans les lieux qui ont façonné une culture mondiale.",
        img: "/generated/jamaique-2.jpg",
        alt: "Fresque murale et ambiance musicale dans une rue de Kingston",
      },
      {
        icon: "coffee",
        title: "Les Montagnes Bleues",
        text: "Randonnées dans la brume, plantations de Blue Mountain Coffee et lever de soleil depuis le sommet, avec Cuba visible au loin par temps clair.",
        img: "/generated/jamaique-4.jpg",
        alt: "Plantations de café et reliefs verdoyants des Montagnes Bleues",
      },
      {
        icon: "beach_access",
        title: "Les plages des Caraïbes",
        text: "Les sept milles de Negril, les criques de Treasure Beach et les eaux calmes de Montego Bay : le sable blanc et l'eau tiède à perte de vue.",
        img: "/generated/jamaique-3.jpg",
        alt: "Longue plage de sable blanc et cocotiers en Jamaïque",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Jamaïque",
    steps: [
      {
        id: "montego-bay",
        label: "JOURS 1 À 3",
        title: "Montego Bay & la côte nord",
        text: "Arrivée et installation face à la mer : plages tranquilles, snorkeling sur le récif, croisière au coucher du soleil et découverte des grandes demeures coloniales.",
        img: "/generated/jamaique-3.jpg",
        alt: "Baie et plage de Montego Bay en Jamaïque",
        align: "left",
      },
      {
        id: "ocho-rios",
        label: "JOURS 4 ET 5",
        title: "Ocho Rios & Dunn's River",
        text: "Ascension des chutes de Dunn's River, descente de la rivière Blanche en tube et visite d'un jardin tropical dominant la baie.",
        img: "/generated/jamaique-1.jpg",
        alt: "Cascades de Dunn's River entourées de végétation luxuriante",
        align: "right",
      },
      {
        id: "kingston",
        label: "JOURS 6 ET 7",
        title: "Kingston & les Montagnes Bleues",
        text: "Route vers la capitale : musée Bob Marley, Trench Town et scène musicale, puis montée dans les Montagnes Bleues et visite d'une plantation de café.",
        img: "/generated/jamaique-2.jpg",
        alt: "Rue animée et culture musicale à Kingston",
        align: "left",
      },
      {
        id: "port-antonio",
        label: "JOURS 8 ET 9",
        title: "Port Antonio & la lagune bleue",
        text: "La côte est, la plus sauvage : descente du Rio Grande en radeau de bambou, baignade dans la lagune bleue et plages désertes de Winnifred et Frenchman's Cove.",
        img: "/generated/jamaique-1.jpg",
        alt: "Lagune aux eaux profondes bordée de végétation à Port Antonio",
        align: "right",
      },
      {
        id: "negril",
        label: "JOURS 10 À 12",
        title: "Negril, la détente absolue",
        text: "Fin du voyage à l'ouest de l'île : la plage des sept milles, les falaises et le coucher de soleil de Rick's Café, et des journées entières sans programme.",
        img: "/generated/jamaique.jpg",
        alt: "Coucher de soleil sur les falaises et la mer à Negril",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Treasure Beach et le sud tranquille, une croisière dans les Caraïbes ou
        une extension à Cuba complètent facilement le programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Jamaïque",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Jamaïque&nbsp;?</>
        ),
        answer: (
          <>
            <p>La haute saison correspond à l&apos;hiver européen&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à avril</strong>&nbsp;: la saison sèche, avec
                une chaleur agréable et une mer calme.
              </>,
              <>
                <strong>De décembre à mars</strong>&nbsp;: la meilleure période,
                mais aussi la plus demandée&nbsp;: mieux vaut réserver tôt.
              </>,
              <>
                <strong>De juin à novembre</strong>&nbsp;: saison des pluies et
                période cyclonique, avec des tarifs nettement plus doux.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour la Jamaïque&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont légères&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 90 jours.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour
                et billet de retour.
              </>,
              <>
                Attention aux <strong>escales aux États-Unis</strong>&nbsp;: une
                autorisation ESTA est alors nécessaire.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Jamaïque", [
        <>
          <strong>Séjour tout compris</strong>&nbsp;: resort en formule all
          inclusive à Negril ou Montego Bay.
        </>,
        <>
          <strong>Circuit découverte</strong>&nbsp;: tour de l&apos;île entre
          cascades, montagnes et plages.
        </>,
        <>
          <strong>Voyage musical</strong>&nbsp;: Kingston, Nine Mile et les
          hauts lieux du reggae.
        </>,
        <>
          <strong>Voyage de noces</strong>&nbsp;: suite face à la mer et
          expériences privatisées.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Le <strong>dosage</strong>&nbsp;: séjour posé en resort ou itinérance
          autour de l&apos;île.
        </>,
        <>
          Les <strong>régions</strong>&nbsp;: côte nord animée, côte est sauvage
          ou sud confidentiel.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: radeau de bambou, plantation de
          café, concert live, plongée sur le récif.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Jamaïque",
        "La formule d'hébergement : all inclusive ou hôtel en formule libre",
      ),
      {
        question: <>Faut-il choisir un resort tout compris&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Cela dépend de votre façon de voyager&nbsp;:</strong>
            </p>
            {checklist([
              <>
                Le <strong>all inclusive</strong> est très développé sur
                l&apos;île et permet de maîtriser son budget sur place.
              </>,
              <>
                Une <strong>formule libre</strong> ou en villa laisse plus de
                place aux restaurants locaux et aux rencontres.
              </>,
              <>
                La <strong>formule mixte</strong> — quelques nuits en resort,
                quelques nuits en maison d&apos;hôtes — offre souvent le meilleur
                équilibre.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("en Jamaïque", [
        <>
          <strong>Resorts all inclusive</strong> à Negril, Montego Bay et Ocho
          Rios.
        </>,
        <>
          <strong>Boutique-hôtels</strong> sur les falaises de Negril et à Port
          Antonio.
        </>,
        <>
          <strong>Villas privées</strong> avec personnel, une tradition
          jamaïcaine.
        </>,
        <>
          <strong>Écolodges</strong> dans les Montagnes Bleues et le sud de
          l&apos;île.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Jamaïque ?",
        answer:
          "De novembre à avril pendant la saison sèche, avec une chaleur agréable et une mer calme, et plus particulièrement de décembre à mars. De juin à novembre, la saison des pluies et la période cyclonique s'accompagnent de tarifs nettement plus doux.",
      },
      {
        question: "Faut-il un visa pour la Jamaïque ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours, avec un passeport valide six mois après le retour. Attention : une escale aux États-Unis nécessite une autorisation ESTA.",
      },
      {
        question: "Faut-il choisir un resort tout compris en Jamaïque ?",
        answer:
          "Cela dépend de votre façon de voyager : le all inclusive est très développé et permet de maîtriser son budget, une formule libre laisse plus de place aux restaurants locaux, et une formule mixte offre souvent le meilleur équilibre.",
      },
      {
        question: "Combien coûte un voyage en Jamaïque ?",
        answer:
          "Le budget dépend de la durée, de la saison, de la formule d'hébergement (all inclusive ou formule libre), des régions visitées et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "en Jamaïque",
        "des séjours tout compris à Negril ou Montego Bay, des circuits découverte de l'île, des voyages musicaux sur les traces du reggae, des voyages de noces et des voyages entièrement sur mesure.",
        "Resorts all inclusive à Negril, Montego Bay et Ocho Rios, boutique-hôtels sur les falaises et à Port Antonio, villas privées avec personnel et écolodges dans les Montagnes Bleues.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Jamaïque, nous
        privilégions les hébergements indépendants et les villas tenues par des
        familles jamaïcaines, les guides et musiciens locaux, et les prestataires
        engagés dans la protection des récifs coralliens et des rivières de
        l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Jamaïque commence ici",
    body: "Parlez-nous de votre projet. Séjour tout compris, tour de l'île entre cascades et montagnes, voyage sur les traces du reggae ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default jamaique;
