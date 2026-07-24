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

const guatemala: DestinationContent = {
  slug: "guatemala",
  meta: {
    title:
      "Voyage au Guatemala : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Guatemala avec CTA Voyages. Cité maya de Tikal, lac Atitlán et ses volcans, Antigua coloniale, marché de Chichicastenango et ascension de l'Acatenango. Circuit ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/guatemala.jpg",
    imageAlt:
      "Lac Atitlán cerné de volcans au Guatemala — Voyage au Guatemala avec CTA Voyages",
    label: "Destination Guatemala",
    h1: "Voyage au Guatemala : volcans, lacs et cité maya de Tikal",
    description:
      "Circuit volcans et cités mayas, immersion dans les Hautes Terres, combiné avec le Mexique ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~15h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-8h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Espagnol, langues mayas",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Quetzal (GTQ)",
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
    h2: "Le Guatemala, le cœur battant du monde maya",
    body: (
      <>
        Sur un territoire à peine plus grand que le quart de la France, le
        Guatemala concentre trente-sept volcans, dont plusieurs en activité, un
        lac d&apos;altitude considéré comme l&apos;un des plus beaux du monde et
        la plus impressionnante cité maya des Basses Terres.{" "}
        <strong>Tikal</strong> dresse ses temples-pyramides au-dessus de la
        canopée du Petén&nbsp;: au lever du jour, on entend les singes hurleurs
        avant de voir les toits émerger de la brume. Le{" "}
        <strong>lac Atitlán</strong>, cerné de trois volcans, est bordé de
        villages mayas où chaque communauté porte encore son propre tissage.{" "}
        <strong>Antigua</strong>, ancienne capitale coloniale classée à
        l&apos;UNESCO, aligne ses façades pastel et ses ruines de couvents sous
        le regard du volcan Agua. Le marché de{" "}
        <strong>Chichicastenango</strong> est le plus coloré d&apos;Amérique
        centrale, et l&apos;ascension nocturne de l&apos;
        <strong>Acatenango</strong>, face aux éruptions du Fuego, reste un
        souvenir marquant. <strong>Circuit</strong>,{" "}
        <strong>immersion culturelle</strong>,{" "}
        <strong>combiné avec le Mexique ou le Belize</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: tout se construit avec vous.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Guatemala ?",
    cards: [
      {
        icon: "landscape",
        title: "Le lac Atitlán",
        text: "Trois volcans, une eau d'un bleu profond et une douzaine de villages mayas accessibles en barque : chacun avec son artisanat et ses traditions.",
        img: "/generated/guatemala-1.jpg",
        alt: "Lac Atitlán entouré de ses volcans au lever du jour",
      },
      {
        icon: "temple_buddhist",
        title: "Tikal & les cités mayas",
        text: "Des temples-pyramides émergeant de la jungle du Petén, dans un parc national où résonnent les cris des singes hurleurs et des toucans.",
        img: "/generated/guatemala-3.jpg",
        alt: "Temple-pyramide de Tikal émergeant de la canopée",
      },
      {
        icon: "church",
        title: "Antigua la coloniale",
        text: "Rues pavées, façades pastel, couvents en ruine et cafés de charme, au pied de trois volcans : l'une des plus belles villes d'Amérique latine.",
        img: "/generated/guatemala-2.jpg",
        alt: "Rue pavée et façades colorées d'Antigua Guatemala",
      },
      {
        icon: "volcano",
        title: "Les volcans en activité",
        text: "L'ascension de l'Acatenango et sa nuit en bivouac face aux explosions du Fuego : l'un des spectacles naturels les plus saisissants du continent.",
        img: "/generated/guatemala-4.jpg",
        alt: "Volcan en éruption vu depuis un bivouac de montagne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Guatemala",
    steps: [
      {
        id: "antigua",
        label: "JOURS 1 À 3",
        title: "Antigua, l'ancienne capitale",
        text: "Arrivée et installation dans la ville coloniale : couvents en ruine, marché local, atelier de chocolat et, pour les plus sportifs, ascension du volcan Pacaya.",
        img: "/generated/guatemala-2.jpg",
        alt: "Arche coloniale et façades pastel d'Antigua",
        align: "left",
      },
      {
        id: "chichicastenango",
        label: "JOUR 4",
        title: "Le marché de Chichicastenango",
        text: "Route vers les Hautes Terres pour le plus grand marché indigène d'Amérique centrale : tissages, masques, encens et rituels mayas sur les marches de l'église.",
        img: "/generated/guatemala-2.jpg",
        alt: "Étals colorés du marché de Chichicastenango",
        align: "right",
      },
      {
        id: "atitlan",
        label: "JOURS 5 À 7",
        title: "Le lac Atitlán & ses villages",
        text: "Trois jours au bord du lac : traversées en barque vers San Juan et Santiago, ateliers de tissage, randonnée sur les pentes et couchers de soleil sur les volcans.",
        img: "/generated/guatemala-1.jpg",
        alt: "Village maya au bord du lac Atitlán et volcans en arrière-plan",
        align: "left",
      },
      {
        id: "flores-tikal",
        label: "JOURS 8 ET 9",
        title: "Flores & la cité de Tikal",
        text: "Vol vers le Petén : l'île de Flores sur son lac, puis journée à Tikal, du lever du soleil au sommet du Temple IV jusqu'aux places cérémonielles.",
        img: "/generated/guatemala-3.jpg",
        alt: "Grande place et temples de la cité maya de Tikal",
        align: "right",
      },
      {
        id: "rio-dulce",
        label: "JOURS 10 À 12",
        title: "Rio Dulce & la côte caraïbe",
        text: "Descente vers l'Atlantique : navigation dans le canyon du Rio Dulce, village garifuna de Livingston et détente sur les plages caribéennes.",
        img: "/generated/guatemala.jpg",
        alt: "Canyon verdoyant du Rio Dulce au Guatemala",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le site de Copán au Honduras, les piscines naturelles de Semuc Champey ou
        une extension au Mexique ou au Belize complètent facilement le programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Guatemala",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Guatemala&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le pays connaît deux saisons bien marquées&nbsp;:
            </p>
            {checklist([
              <>
                <strong>De novembre à avril</strong>&nbsp;: la saison sèche, ciel
                dégagé sur les volcans et pistes praticables.
              </>,
              <>
                <strong>Décembre à février</strong>&nbsp;: les nuits sont fraîches
                sur les Hautes Terres, prévoyez une polaire.
              </>,
              <>
                <strong>De mai à octobre</strong>&nbsp;: saison des pluies, avec
                des averses en fin de journée et des paysages très verts.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités et quelle santé&nbsp;?</>,
        answer: (
          <>
            <p>Prévoyez les éléments suivants&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 90 jours.
              </>,
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour.
              </>,
              <>
                Aucun vaccin obligatoire&nbsp;: protection antimoustique et eau en
                bouteille recommandées, comme partout en Amérique centrale.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Guatemala", [
        <>
          <strong>Circuit volcans & cités mayas</strong>&nbsp;: Antigua, Atitlán
          et Tikal.
        </>,
        <>
          <strong>Immersion culturelle</strong>&nbsp;: villages mayas, tissage et
          nuits chez l&apos;habitant.
        </>,
        <>
          <strong>Trek & aventure</strong>&nbsp;: ascension de l&apos;Acatenango
          et randonnées volcaniques.
        </>,
        <>
          <strong>Combiné Amérique centrale</strong>&nbsp;: avec le Mexique, le
          Belize ou le Honduras.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>étapes et la durée</strong>&nbsp;: Hautes Terres seules ou
          circuit complet avec le Petén.
        </>,
        <>
          Le <strong>niveau d&apos;activité</strong>&nbsp;: ascensions
          volcaniques ou découverte tranquille.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: atelier de tissage, cours
          d&apos;espagnol, cérémonie maya, école de café.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Guatemala",
        "Le vol intérieur vers Tikal, souvent préféré aux longues heures de route",
      ),
      {
        question: <>Le Guatemala est-il une destination sûre&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui, dans le cadre d&apos;un voyage organisé.</strong>
            </p>
            {checklist([
              <>
                Nos <strong>transferts sont privés</strong>&nbsp;: nous évitons
                les transports collectifs longue distance.
              </>,
              <>
                Les <strong>zones touristiques</strong> — Antigua, Atitlán, Petén
                — sont tranquilles et bien encadrées.
              </>,
              <>
                Nos <strong>guides francophones</strong> connaissent parfaitement
                le terrain et adaptent les itinéraires si nécessaire.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("au Guatemala", [
        <>
          <strong>Hôtels-boutiques</strong> dans les demeures coloniales
          d&apos;Antigua.
        </>,
        <>
          <strong>Lodges au bord du lac</strong> Atitlán, face aux volcans.
        </>,
        <>
          <strong>Écolodges en jungle</strong> près de Tikal et du Petén.
        </>,
        <>
          <strong>Hébergements communautaires</strong> dans les villages mayas des
          Hautes Terres.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Guatemala ?",
        answer:
          "De novembre à avril pendant la saison sèche, avec un ciel dégagé sur les volcans et des pistes praticables. De décembre à février, les nuits sont fraîches sur les Hautes Terres. De mai à octobre, les averses de fin de journée rendent les paysages très verts.",
      },
      {
        question: "Faut-il un visa pour le Guatemala ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours, avec un passeport valide six mois après le retour. Aucun vaccin n'est obligatoire.",
      },
      {
        question: "Le Guatemala est-il une destination sûre ?",
        answer:
          "Oui dans le cadre d'un voyage organisé : nos transferts sont privés, les zones touristiques d'Antigua, Atitlán et du Petén sont tranquilles et bien encadrées, et nos guides francophones connaissent parfaitement le terrain.",
      },
      {
        question: "Combien coûte un voyage au Guatemala ?",
        answer:
          "Le budget dépend de la durée, de la saison, des étapes visitées, du recours au vol intérieur vers Tikal, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "au Guatemala",
        "des circuits volcans et cités mayas, des immersions culturelles dans les villages mayas, des treks volcaniques, des combinés avec le Mexique ou le Belize et des voyages entièrement sur mesure.",
        "Hôtels-boutiques dans les demeures coloniales d'Antigua, lodges au bord du lac Atitlán, écolodges en jungle près de Tikal et hébergements communautaires dans les villages mayas.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Guatemala, nous
        travaillons avec des coopératives de tisserandes, des guides mayas
        francophones et des hébergements communautaires du lac Atitlán, afin que
        les revenus du tourisme profitent directement aux villages visités.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Guatemala commence ici",
    body: "Parlez-nous de votre projet. Circuit volcans et cités mayas, immersion dans les Hautes Terres, combiné avec le Mexique ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default guatemala;
