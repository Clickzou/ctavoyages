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

const finlande: DestinationContent = {
  slug: "finlande",
  meta: {
    title:
      "Voyage en Finlande : séjour, circuit",
    description:
      "Organisez votre voyage en Finlande avec CTA Voyages. Aurores boréales et igloos de verre en Laponie, village du Père Noël, traîneau à chiens, lacs de Saimaa et design à Helsinki. Séjour hiver ou été, voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/finlande.jpg",
    imageAlt:
      "Aurore boréale au-dessus d'une forêt enneigée de Laponie finlandaise — Voyage en Finlande avec CTA Voyages",
    label: "Destination Finlande",
    h1: "Voyage en Finlande : aurores boréales, lacs et grand Nord",
    description:
      "Séjour polaire en Laponie, escapade design à Helsinki, chalet au bord des lacs ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~3h (Helsinki, direct)",
    },
    { kind: "fact", icon: "schedule", label: "Décalage horaire", value: "+1h" },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Finnois, suédois",
    },
    { kind: "fact", icon: "payments", label: "Monnaie", value: "Euro (EUR)" },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Déc. à mars / juin à août",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Finlande, deux pays en un selon la saison",
    body: (
      <>
        Il existe deux Finlande, et l&apos;on peut difficilement les confondre.
        Celle de l&apos;<strong>hiver</strong> d&apos;abord&nbsp;: la{" "}
        <strong>Laponie</strong> ensevelie sous la neige, les forêts de sapins
        ployant sous le givre, les <strong>aurores boréales</strong> qui ondulent
        au-dessus des igloos de verre, les attelages de chiens de traîneau et le
        village du Père Noël à <strong>Rovaniemi</strong>. Puis celle de l&apos;
        <strong>été</strong>&nbsp;: le soleil de minuit qui ne se couche jamais,
        les 188 000 lacs de la région de <strong>Saimaa</strong>, les{" "}
        <em>mökki</em> — ces chalets de bois au bord de l&apos;eau où les Finlandais
        se ressourcent — et les milliers d&apos;îles de l&apos;archipel de{" "}
        <strong>Turku</strong>. Entre les deux, <strong>Helsinki</strong>{" "}
        rassemble une architecture design remarquable, des saunas publics au bord
        de la Baltique et une scène culinaire inventive. Séjour polaire, escapade
        urbaine, <strong>voyage en famille</strong> ou{" "}
        <strong>itinéraire sur mesure</strong>&nbsp;: votre conseiller CTA
        Voyages compose le programme adapté à votre saison et à vos envies.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Finlande ?",
    cards: [
      {
        icon: "nights_stay",
        title: "Les aurores boréales",
        text: "En Laponie, elles sont visibles environ 200 nuits par an entre septembre et mars, loin de toute pollution lumineuse.",
        img: "/generated/finlande-1.jpg",
        alt: "Aurore boréale verte au-dessus d'une forêt enneigée de Laponie",
      },
      {
        icon: "ac_unit",
        title: "L'hiver arctique",
        text: "Traîneau à chiens, safari en motoneige, rencontre avec les rennes et nuit sous une coupole de verre face au ciel étoilé.",
        img: "/generated/finlande.jpg",
        alt: "Attelage de chiens de traîneau dans un paysage enneigé",
      },
      {
        icon: "hot_tub",
        title: "La culture du sauna",
        text: "Trois millions de saunas pour cinq millions et demi d'habitants : un rituel national, suivi d'un plongeon dans le lac ou dans la neige.",
        img: "/generated/finlande-3.jpg",
        alt: "Sauna finlandais traditionnel en bois au bord d'un lac",
      },
      {
        icon: "kayaking",
        title: "Le pays des mille lacs",
        text: "En été, le soleil de minuit éclaire encore les lacs à 2h du matin : canoë, pêche, cueillette de baies et nuits en chalet au bord de l'eau.",
        img: "/generated/finlande-4.jpg",
        alt: "Chalet de bois au bord d'un lac finlandais sous le soleil de minuit",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire hivernal en Finlande",
    steps: [
      {
        id: "helsinki",
        label: "JOURS 1 ET 2",
        title: "Helsinki, design et Baltique",
        text: "Arrivée dans la capitale : cathédrale blanche, marché du port, quartier du design et sauna public face à la mer gelée, avant de mettre le cap vers le Nord.",
        img: "/generated/finlande-2.jpg",
        alt: "Architecture et port d'Helsinki en hiver",
        align: "left",
      },
      {
        id: "rovaniemi",
        label: "JOUR 3",
        title: "Rovaniemi & le cercle polaire",
        text: "Envol vers la Laponie et franchissement du cercle polaire arctique. Visite du village du Père Noël, puis installation dans un lodge au cœur de la forêt enneigée.",
        img: "/generated/finlande.jpg",
        alt: "Village enneigé de Laponie au bord du cercle polaire",
        align: "right",
      },
      {
        id: "traineau-rennes",
        label: "JOUR 4",
        title: "Traîneau à chiens & rennes",
        text: "Journée d'activités polaires : conduite de son propre attelage de huskies à travers la taïga, puis rencontre avec un éleveur sami et balade en traîneau tiré par les rennes.",
        img: "/generated/finlande-1.jpg",
        alt: "Traîneau tiré par des rennes dans la forêt enneigée de Laponie",
        align: "left",
      },
      {
        id: "aurores-igloo",
        label: "JOUR 5",
        title: "Chasse aux aurores & igloo de verre",
        text: "Soirée d'observation guidée loin des lumières, puis nuit inoubliable sous une coupole de verre chauffée, allongé face au ciel arctique.",
        img: "/generated/finlande-1.jpg",
        alt: "Igloo de verre chauffé sous un ciel d'aurores boréales",
        align: "right",
      },
      {
        id: "motoneige-sauna",
        label: "JOURS 6 ET 7",
        title: "Motoneige, pêche blanche & sauna",
        text: "Derniers jours au rythme du Grand Nord : safari en motoneige sur les lacs gelés, initiation à la pêche sous la glace et sauna traditionnel suivi d'un bain glacé.",
        img: "/generated/finlande-3.jpg",
        alt: "Sauna en bois et lac gelé dans le Grand Nord finlandais",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        La même destination se décline en version estivale&nbsp;: soleil de
        minuit, lacs de Saimaa, archipel de Turku et randonnées dans les parcs
        nationaux.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Finlande",
    left: [
      {
        question: (
          <>Quand voir les aurores boréales en Finlande&nbsp;?</>
        ),
        answer: (
          <>
            <p>Le phénomène dépend de l&apos;obscurité et de la latitude&nbsp;:</p>
            {checklist([
              <>
                <strong>De septembre à mars</strong>&nbsp;: la saison des
                aurores, avec des nuits suffisamment longues et sombres.
              </>,
              <>
                <strong>De décembre à février</strong>&nbsp;: le cœur de
                l&apos;hiver, neige garantie et activités polaires au complet.
              </>,
              <>
                <strong>Plus on monte au nord</strong>, plus la fréquence
                augmente&nbsp;: près de 200 nuits par an en Laponie
                septentrionale.
              </>,
            ])}
            <p>
              Aucune observation ne peut être garantie&nbsp;: nous conseillons
              un séjour d&apos;au moins trois nuits pour maximiser vos chances.
            </p>
          </>
        ),
      },
      {
        question: <>Quelles températures et quel équipement prévoir&nbsp;?</>,
        answer: (
          <>
            <p>
              L&apos;hiver lapon est froid mais sec, donc plus supportable
              qu&apos;on ne l&apos;imagine&nbsp;:
            </p>
            {checklist([
              <>
                Comptez <strong>-10 °C à -25 °C</strong> en Laponie de décembre à
                février, autour de 0 °C à Helsinki.
              </>,
              <>
                Les <strong>combinaisons polaires, bottes et moufles</strong>{" "}
                sont fournies par les prestataires pour toutes les activités.
              </>,
              <>
                Prévoyez plusieurs <strong>couches thermiques</strong>, un bonnet
                et des chaussettes de laine.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Finlande", [
        <>
          <strong>Séjour polaire</strong>&nbsp;: aurores boréales, igloo de verre
          et activités de neige.
        </>,
        <>
          <strong>Voyage en famille</strong>&nbsp;: village du Père Noël,
          huskies et rennes.
        </>,
        <>
          <strong>City break</strong>&nbsp;: Helsinki, design, saunas et
          gastronomie nordique.
        </>,
        <>
          <strong>Séjour nature en été</strong>&nbsp;: chalet au bord des lacs,
          canoë et soleil de minuit.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          La <strong>saison</strong>&nbsp;: hiver arctique ou été des lacs, deux
          voyages radicalement différents.
        </>,
        <>
          Les <strong>activités</strong>&nbsp;: traîneau, motoneige, raquettes,
          pêche blanche, randonnée ou canoë.
        </>,
        <>
          L&apos;<strong>hébergement</strong>&nbsp;: igloo de verre, chalet
          privatif, lodge ou hôtel design.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Finlande",
        "Le type d'hébergement : la nuit en igloo de verre est une prestation d'exception",
      ),
      {
        question: <>La Laponie convient-elle aux enfants&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est une destination familiale par excellence.</strong>
            </p>
            {checklist([
              <>
                La rencontre avec le <strong>Père Noël</strong> à Rovaniemi,
                ouverte toute l&apos;année.
              </>,
              <>
                Des <strong>activités adaptées dès 4-5 ans</strong>&nbsp;:
                traîneau à chiens en passager, ferme de rennes, luge.
              </>,
              <>
                Des <strong>lodges familiaux</strong> chauffés, avec équipement
                grand froid fourni pour tous les âges.
              </>,
            ])}
            <p>
              Nous adaptons la durée des sorties extérieures à l&apos;âge de vos
              enfants.
            </p>
          </>
        ),
      },
      faqHebergements("en Finlande", [
        <>
          <strong>Igloos de verre</strong> chauffés, pour dormir face aux
          aurores.
        </>,
        <>
          <strong>Lodges et chalets</strong> en rondins au cœur de la forêt
          lapone.
        </>,
        <>
          <strong>Hôtels design</strong> à Helsinki et dans les grandes villes.
        </>,
        <>
          <strong>Mökki</strong> traditionnels au bord des lacs, avec sauna
          privatif, en été.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quand voir les aurores boréales en Finlande ?",
        answer:
          "De septembre à mars, lorsque les nuits sont assez longues et sombres, et idéalement de décembre à février en Laponie septentrionale où le phénomène est visible près de 200 nuits par an. Un séjour d'au moins trois nuits est conseillé.",
      },
      {
        question: "Quelles températures prévoir en Laponie finlandaise ?",
        answer:
          "Comptez -10 °C à -25 °C en Laponie de décembre à février et environ 0 °C à Helsinki. Le froid est sec donc supportable, et les combinaisons polaires, bottes et moufles sont fournies pour toutes les activités.",
      },
      {
        question: "La Laponie finlandaise convient-elle aux enfants ?",
        answer:
          "Oui, c'est une destination familiale par excellence : village du Père Noël à Rovaniemi, activités adaptées dès 4-5 ans, fermes de rennes, luge et lodges familiaux chauffés avec équipement grand froid fourni.",
      },
      {
        question: "Combien coûte un voyage en Finlande ?",
        answer:
          "Le budget dépend de la durée, de la saison, des activités polaires choisies et du type d'hébergement, la nuit en igloo de verre étant une prestation d'exception. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "en Finlande",
        "des séjours polaires avec aurores boréales et igloo de verre, des voyages en famille au village du Père Noël, des city breaks à Helsinki, des séjours nature en été au bord des lacs et des voyages entièrement sur mesure.",
        "Igloos de verre chauffés, lodges et chalets en rondins au cœur de la forêt lapone, hôtels design à Helsinki et mökki traditionnels au bord des lacs avec sauna privatif.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Finlande, nous
        travaillons avec des prestataires locaux qui respectent le bien-être des
        chiens et des rennes, valorisent la culture sami et limitent leur
        empreinte sur des écosystèmes arctiques particulièrement fragiles.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Finlande commence ici",
    body: "Parlez-nous de votre projet. Chasse aux aurores boréales, séjour en famille en Laponie, escapade à Helsinki ou été au bord des lacs : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default finlande;
