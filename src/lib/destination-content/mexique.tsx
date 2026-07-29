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

const mexique: DestinationContent = {
  slug: "mexique",
  meta: {
    title:
      "Voyage au Mexique : séjour, circuit",
    description:
      "Organisez votre voyage au Mexique avec CTA Voyages. Chichén Itzá, Tulum et Palenque, cénotes du Yucatán, Mexico et Teotihuacán, villes coloniales, Oaxaca et Riviera Maya. Circuit ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/mexique.jpg",
    imageAlt:
      "Pyramide maya de Chichén Itzá au Mexique — Voyage au Mexique avec CTA Voyages",
    label: "Destination Mexique",
    h1: "Voyage au Mexique : cités mayas, cénotes et Caraïbes",
    description:
      "Autotour dans le Yucatán, circuit colonial et Oaxaca, combiné culture et Riviera Maya ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h30 (direct)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-7h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Espagnol" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Peso mexicain (MXN)",
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
    h2: "Le Mexique, la civilisation maya et la fête permanente",
    body: (
      <>
        Peu de pays offrent une telle densité de sites archéologiques, de
        villes coloniales et de plages. Dans le <strong>Yucatán</strong>, les
        cités mayas de <strong>Chichén Itzá</strong>, <strong>Uxmal</strong> et{" "}
        <strong>Tulum</strong> — cette dernière posée sur une falaise face à la
        mer des Caraïbes — voisinent avec des centaines de{" "}
        <strong>cénotes</strong>, ces puits naturels d&apos;eau douce
        cristalline creusés dans le calcaire, jadis considérés comme des accès au
        monde des morts. Au sud, <strong>Palenque</strong> émerge de la jungle du
        Chiapas. Sur les hauts plateaux, <strong>Mexico</strong> et les pyramides
        de <strong>Teotihuacán</strong>, les rues pastel de{" "}
        <strong>San Miguel de Allende</strong> et de <strong>Guanajuato</strong>,
        et <strong>Oaxaca</strong>, capitale gastronomique et artisanale. Sans
        oublier une cuisine inscrite au patrimoine immatériel de l&apos;UNESCO,
        des fêtes comme le <em>Día de los Muertos</em>, et la barrière de corail
        de <strong>Cozumel</strong>. <strong>Autotour</strong>,{" "}
        <strong>circuit accompagné</strong>, <strong>séjour balnéaire</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: tout est possible.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Mexique ?",
    cards: [
      {
        icon: "account_balance",
        title: "Les cités mayas",
        text: "Chichén Itzá et sa pyramide de Kukulcán, Tulum face aux Caraïbes, Palenque dans la jungle : trois mille ans d'une civilisation fascinante.",
        img: "/generated/mexique-3.jpg",
        alt: "Pyramide maya dominant un site archéologique mexicain",
      },
      {
        icon: "water_drop",
        title: "Les cénotes du Yucatán",
        text: "Des puits naturels d'eau douce turquoise, ouverts ou souterrains, où l'on nage sous des racines suspendues et des rais de lumière.",
        img: "/generated/mexique-1.jpg",
        alt: "Cénote souterrain aux eaux turquoise dans la jungle du Yucatán",
      },
      {
        icon: "palette",
        title: "Les villes coloniales",
        text: "San Miguel de Allende, Guanajuato, Oaxaca, Mérida : façades pastel, patios fleuris, marchés débordants et places animées jusque tard.",
        img: "/generated/mexique-2.jpg",
        alt: "Rue colorée et façades pastel d'une ville coloniale mexicaine",
      },
      {
        icon: "restaurant",
        title: "La cuisine mexicaine",
        text: "Classée à l'UNESCO : moles d'Oaxaca, cochinita pibil du Yucatán, tacos de rue et mezcal artisanal, dans une variété insoupçonnée.",
        img: "/generated/mexique-4.jpg",
        alt: "Marché et spécialités culinaires mexicaines colorées",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Mexique",
    steps: [
      {
        id: "mexico",
        label: "JOURS 1 À 3",
        title: "Mexico & Teotihuacán",
        text: "Arrivée dans la capitale : Zócalo, musée national d'anthropologie, quartier coloré de Coyoacán et maison de Frida Kahlo, puis pyramides de Teotihuacán.",
        img: "/generated/mexique-2.jpg",
        alt: "Place centrale et architecture coloniale de Mexico",
        align: "left",
      },
      {
        id: "oaxaca",
        label: "JOURS 4 ET 5",
        title: "Oaxaca & Monte Albán",
        text: "Vol vers le sud : marchés d'artisanat, ateliers de tapis et de mezcal, cuisine réputée la plus riche du pays, et site zapotèque de Monte Albán.",
        img: "/generated/mexique-2.jpg",
        alt: "Marché artisanal et façades colorées à Oaxaca",
        align: "right",
      },
      {
        id: "palenque",
        label: "JOURS 6 ET 7",
        title: "Chiapas & Palenque",
        text: "Cap sur la jungle : cascades d'Agua Azul, canyon du Sumidero et le site de Palenque au petit matin, quand la brume monte encore entre les temples.",
        img: "/generated/mexique-3.jpg",
        alt: "Temples de Palenque émergeant de la jungle du Chiapas",
        align: "left",
      },
      {
        id: "merida-chichen",
        label: "JOURS 8 À 10",
        title: "Mérida, Uxmal & Chichén Itzá",
        text: "Route vers le Yucatán : la « ville blanche » de Mérida, le site puuc d'Uxmal, les haciendas henequeneras et Chichén Itzá tôt le matin.",
        img: "/generated/mexique.jpg",
        alt: "Pyramide de Kukulcán sur le site de Chichén Itzá",
        align: "right",
      },
      {
        id: "riviera-maya",
        label: "JOURS 11 À 14",
        title: "Cénotes & Riviera Maya",
        text: "Fin du voyage entre baignades dans les cénotes, ruines de Tulum face à la mer, réserve de Sian Ka'an et détente sur les plages de la Riviera Maya.",
        img: "/generated/mexique-1.jpg",
        alt: "Plage des Caraïbes et eaux turquoise de la Riviera Maya",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Baja California et ses baleines, Puebla, la côte Pacifique ou une
        extension au Guatemala voisin s&apos;intègrent facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Mexique",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Mexique&nbsp;?</>
        ),
        answer: (
          <>
            <p>La saison sèche est nettement plus favorable&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à avril</strong>&nbsp;: la saison sèche, avec
                un ciel dégagé et des températures idéales.
              </>,
              <>
                <strong>Fin octobre / début novembre</strong>&nbsp;: le Día de los
                Muertos, l&apos;un des moments les plus intenses de l&apos;année.
              </>,
              <>
                <strong>De juin à octobre</strong>&nbsp;: saison des pluies et
                risque de cyclones sur les côtes&nbsp;; averses souvent brèves.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour le Mexique&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont simples&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 180 jours.
              </>,
              <>
                <strong>Passeport valide</strong> pendant toute la durée du
                séjour et billet de retour.
              </>,
              <>
                Un <strong>formulaire migratoire</strong> est délivré à
                l&apos;arrivée&nbsp;: à conserver jusqu&apos;au départ.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Mexique", [
        <>
          <strong>Autotour Yucatán</strong>&nbsp;: cités mayas, cénotes et
          villages coloniaux au volant.
        </>,
        <>
          <strong>Circuit colonial & Oaxaca</strong>&nbsp;: Mexico, Puebla,
          Oaxaca et le Chiapas.
        </>,
        <>
          <strong>Combiné culture & plage</strong>&nbsp;: sites archéologiques
          puis Riviera Maya.
        </>,
        <>
          <strong>Voyage de noces</strong>&nbsp;: resort de charme et excursions
          privatisées.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Yucatán seul, grand
          circuit Sud ou combiné avec le Guatemala.
        </>,
        <>
          Le <strong>mode de transport</strong>&nbsp;: voiture de location,
          chauffeur privé ou vols intérieurs.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: cours de cuisine, plongée sur
          la barrière de corail, observation des tortues, mezcalerías.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Mexique",
        "La formule : autotour en voiture de location ou circuit avec chauffeur-guide",
      ),
      {
        question: <>Le Yucatán se visite-t-il facilement en autotour&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est la formule que nous recommandons le
              plus.</strong>
            </p>
            {checklist([
              <>
                Les <strong>routes sont bonnes</strong> et la signalisation
                claire dans toute la péninsule.
              </>,
              <>
                Les <strong>distances sont raisonnables</strong>&nbsp;: rarement
                plus de trois heures entre deux étapes.
              </>,
              <>
                La voiture permet d&apos;accéder aux{" "}
                <strong>cénotes et villages</strong> hors des circuits
                classiques.
              </>,
            ])}
            <p>
              Nous fournissons un carnet de route détaillé et restons joignables
              pendant tout le séjour.
            </p>
          </>
        ),
      },
      faqHebergements("au Mexique", [
        <>
          <strong>Haciendas restaurées</strong> au cœur du Yucatán.
        </>,
        <>
          <strong>Hôtels-boutiques</strong> dans les centres coloniaux de Mérida,
          Oaxaca et San Miguel.
        </>,
        <>
          <strong>Écolodges</strong> en bordure de la réserve de Sian Ka&apos;an
          et dans le Chiapas.
        </>,
        <>
          <strong>Resorts de plage</strong> sur la Riviera Maya et à Playa del
          Carmen.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Mexique ?",
        answer:
          "De novembre à avril pendant la saison sèche, avec un ciel dégagé et des températures idéales. Fin octobre et début novembre offrent le Día de los Muertos. De juin à octobre, la saison des pluies s'accompagne d'un risque de cyclones sur les côtes.",
      },
      {
        question: "Faut-il un visa pour le Mexique ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 180 jours. Il faut un passeport valide pendant tout le séjour, un billet de retour et conserver le formulaire migratoire délivré à l'arrivée.",
      },
      {
        question: "Le Yucatán se visite-t-il facilement en autotour ?",
        answer:
          "Oui, c'est la formule la plus recommandée : les routes sont bonnes, la signalisation claire, les distances rarement supérieures à trois heures entre deux étapes, et la voiture permet d'accéder aux cénotes et villages hors des circuits classiques.",
      },
      {
        question: "Combien coûte un voyage au Mexique ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, de la formule choisie (autotour en voiture de location ou circuit avec chauffeur-guide), du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Mexique",
        "des autotours dans le Yucatán, des circuits coloniaux et Oaxaca, des combinés culture et Riviera Maya, des voyages de noces et des voyages entièrement sur mesure.",
        "Haciendas restaurées au cœur du Yucatán, hôtels-boutiques dans les centres coloniaux, écolodges en bordure de Sian Ka'an et resorts de plage sur la Riviera Maya.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Mexique, nous
        privilégions les haciendas et hôtels-boutiques indépendants, les
        coopératives mayas qui gèrent certains cénotes et réserves, et les
        opérateurs qui limitent l&apos;impact de la fréquentation sur la barrière
        de corail et les sites archéologiques.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Mexique commence ici",
    body: "Parlez-nous de votre projet. Autotour dans le Yucatán, circuit colonial et Oaxaca, combiné culture et Riviera Maya ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default mexique;
