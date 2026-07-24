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

const cambodge: DestinationContent = {
  slug: "cambodge",
  meta: {
    title:
      "Voyage au Cambodge : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Cambodge avec CTA Voyages. Temples d'Angkor, Bayon et Ta Prohm, villages flottants du Tonlé Sap, Phnom Penh et plages de Kep et Koh Rong. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image: "/generated/cambodge.jpg",
    imageAlt:
      "Temple d'Angkor Wat au lever du soleil, Cambodge — Voyage au Cambodge avec CTA Voyages",
    label: "Destination Cambodge",
    h1: "Voyage au Cambodge : Angkor, Mékong et sourire khmer",
    description:
      "Circuit des temples, combiné indochinois, extension plage ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~14h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+5h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Khmer" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Riel (KHR), dollar accepté",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Novembre à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Cambodge, l'héritage khmer et la douceur du Mékong",
    body: (
      <>
        Il y a d&apos;abord <strong>Angkor</strong>, évidemment&nbsp;: quatre
        cents kilomètres carrés de temples édifiés entre le IX<sup>e</sup> et le
        XV<sup>e</sup> siècle, capitale d&apos;un empire qui dominait
        l&apos;Asie du Sud-Est. <strong>Angkor Wat</strong> au lever du soleil,
        les deux cents visages de pierre du <strong>Bayon</strong>, les racines
        de fromagers qui étreignent <strong>Ta Prohm</strong>&nbsp;: peu de sites
        au monde produisent une telle impression. Mais le Cambodge ne se résume
        pas à ses ruines. Sur le <strong>Tonlé Sap</strong>, plus grand lac
        d&apos;eau douce d&apos;Asie du Sud-Est, des villages entiers flottent et
        se déplacent au gré des saisons. <strong>Phnom Penh</strong> mêle palais
        royal, architecture coloniale et devoir de mémoire. Au sud, la côte de{" "}
        <strong>Kep</strong> et <strong>Kampot</strong>, célèbre pour son poivre,
        et l&apos;archipel de <strong>Koh Rong</strong> offrent des plages encore
        épargnées. <strong>Circuit culturel</strong>,{" "}
        <strong>combiné avec le Vietnam ou le Laos</strong>,{" "}
        <strong>croisière sur le Mékong</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: tout se conçoit à votre rythme.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Cambodge ?",
    cards: [
      {
        icon: "temple_buddhist",
        title: "Les temples d'Angkor",
        text: "Le plus vaste site religieux du monde, à explorer sur plusieurs jours en tuk-tuk ou à vélo, du lever du soleil aux dernières lumières.",
        img: "/generated/cambodge-1.jpg",
        alt: "Temple d'Angkor Wat et ses tours reflétées dans un bassin",
      },
      {
        icon: "forest",
        title: "Ta Prohm, le temple-jungle",
        text: "Les racines géantes des fromagers enlacent les pierres depuis des siècles : l'image la plus saisissante de la puissance de la forêt tropicale.",
        img: "/generated/cambodge-4.jpg",
        alt: "Racines d'arbres géants enlaçant les ruines du temple de Ta Prohm",
      },
      {
        icon: "directions_boat",
        title: "Les villages flottants",
        text: "Sur le Tonlé Sap, écoles, marchés et maisons sont posés sur l'eau : une organisation sociale unique, rythmée par la crue du Mékong.",
        img: "/generated/cambodge-3.jpg",
        alt: "Maisons sur pilotis et pirogues d'un village flottant du Tonlé Sap",
      },
      {
        icon: "diversity_3",
        title: "L'accueil khmer",
        text: "Malgré une histoire douloureuse, le Cambodge est réputé pour la chaleur et la gentillesse de ses habitants : c'est souvent ce que l'on en retient.",
        img: "/generated/cambodge-2.jpg",
        alt: "Scène de marché et vie quotidienne dans une ville cambodgienne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Cambodge",
    steps: [
      {
        id: "siem-reap",
        label: "JOUR 1",
        title: "Arrivée à Siem Reap",
        text: "Installation dans la ville-porte d'Angkor. Découverte du marché, des ateliers d'artisanat khmer et d'un spectacle de danse apsara pour une première immersion.",
        img: "/generated/cambodge-2.jpg",
        alt: "Rues animées et marché de Siem Reap",
        align: "left",
      },
      {
        id: "angkor-wat",
        label: "JOURS 2 ET 3",
        title: "Angkor Wat & Angkor Thom",
        text: "Lever du soleil sur Angkor Wat, puis exploration d'Angkor Thom et des visages du Bayon. Le lendemain, Ta Prohm, Banteay Srei et les temples les plus secrets du site.",
        img: "/generated/cambodge-1.jpg",
        alt: "Tours et galeries du complexe d'Angkor au petit matin",
        align: "right",
      },
      {
        id: "tonle-sap",
        label: "JOUR 4",
        title: "Le lac Tonlé Sap",
        text: "Navigation en pirogue entre les maisons sur pilotis et les villages flottants, à la rencontre des pêcheurs qui vivent au rythme de la crue du Mékong.",
        img: "/generated/cambodge-3.jpg",
        alt: "Pirogue naviguant entre les maisons flottantes du Tonlé Sap",
        align: "left",
      },
      {
        id: "phnom-penh",
        label: "JOURS 5 ET 6",
        title: "Phnom Penh, la capitale",
        text: "Route ou vol vers la capitale : palais royal et pagode d'Argent, musée national, marché central Art déco, et visite mémorielle du musée Tuol Sleng.",
        img: "/generated/cambodge.jpg",
        alt: "Palais royal et architecture khmère à Phnom Penh",
        align: "right",
      },
      {
        id: "kep-kampot",
        label: "JOURS 7 À 9",
        title: "Kampot, Kep & la côte",
        text: "Fin du voyage vers le sud : plantations de poivre de Kampot, crabe bleu de Kep face à la mer, et détente sur les plages de l'archipel de Koh Rong.",
        img: "/generated/cambodge-3.jpg",
        alt: "Côte cambodgienne et bateaux de pêche traditionnels",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le Cambodge se combine idéalement avec le Vietnam, le Laos ou la
        Thaïlande sur un itinéraire indochinois de deux à trois semaines.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Cambodge",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Cambodge&nbsp;?</>
        ),
        answer: (
          <>
            <p>Le climat tropical impose une saison plus favorable&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à mars</strong>&nbsp;: la saison sèche et
                fraîche, la meilleure période pour visiter Angkor.
              </>,
              <>
                <strong>D&apos;avril à mai</strong>&nbsp;: très chaud, jusqu&apos;à
                38 °C, mais les sites sont moins fréquentés.
              </>,
              <>
                <strong>De juin à octobre</strong>&nbsp;: saison des pluies,
                averses courtes, paysages verdoyants et Tonlé Sap à son niveau
                maximal.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités et quelle santé&nbsp;?</>,
        answer: (
          <>
            <p>Prévoyez ces éléments avant le départ&nbsp;:</p>
            {checklist([
              <>
                Un <strong>visa touristique</strong> obligatoire, obtenu en ligne
                ou à l&apos;arrivée.
              </>,
              <>
                Un <strong>passeport valide 6 mois</strong> après la date de
                retour.
              </>,
              <>
                Aucun vaccin obligatoire, mais une{" "}
                <strong>protection antimoustique</strong> et une eau en bouteille
                sont recommandées.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Cambodge", [
        <>
          <strong>Circuit des temples</strong>&nbsp;: Angkor en profondeur avec
          guide francophone.
        </>,
        <>
          <strong>Combiné indochinois</strong>&nbsp;: avec le Vietnam, le Laos ou
          la Thaïlande.
        </>,
        <>
          <strong>Croisière sur le Mékong</strong>&nbsp;: de Phnom Penh au delta
          vietnamien.
        </>,
        <>
          <strong>Temples & plages</strong>&nbsp;: culture puis détente sur la
          côte sud.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          La <strong>durée à Angkor</strong>&nbsp;: de deux à quatre jours selon
          votre appétit archéologique.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: visites tôt le matin, pauses en
          journée, guide privé francophone.
        </>,
        <>
          Les <strong>extensions</strong>&nbsp;: côte sud, Mondolkiri, Battambang
          ou pays voisins.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Cambodge",
        "La durée passée à Angkor et le type de guide (privé ou en groupe)",
      ),
      {
        question: <>Combien de jours faut-il pour visiter Angkor&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Trois jours constituent le bon équilibre</strong> pour la
              plupart des voyageurs&nbsp;:
            </p>
            {checklist([
              <>
                <strong>1 jour</strong>&nbsp;: le grand circuit essentiel, Angkor
                Wat, Bayon et Ta Prohm — dense mais réalisable.
              </>,
              <>
                <strong>3 jours</strong>&nbsp;: le petit et le grand circuit, plus
                Banteay Srei et les temples périphériques.
              </>,
              <>
                <strong>4 jours et plus</strong>&nbsp;: les sites éloignés comme
                Beng Mealea, Koh Ker ou Preah Vihear.
              </>,
            ])}
            <p>
              Nous conseillons les visites tôt le matin et en fin de journée pour
              éviter la chaleur et l&apos;affluence.
            </p>
          </>
        ),
      },
      faqHebergements("au Cambodge", [
        <>
          <strong>Hôtels de charme</strong> coloniaux à Siem Reap et Phnom Penh.
        </>,
        <>
          <strong>Boutique-hôtels</strong> avec piscine au cœur des jardins
          tropicaux.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> familiales dans les villages et à
          Battambang.
        </>,
        <>
          <strong>Resorts de plage</strong> sur l&apos;archipel de Koh Rong.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Cambodge ?",
        answer:
          "De novembre à mars, durant la saison sèche et fraîche, c'est la meilleure période pour visiter Angkor. D'avril à mai il fait très chaud mais les sites sont moins fréquentés, et de juin à octobre les pluies rendent les paysages verdoyants.",
      },
      {
        question: "Faut-il un visa pour le Cambodge ?",
        answer:
          "Oui, un visa touristique est obligatoire, obtenu en ligne ou à l'arrivée, avec un passeport valide six mois après la date de retour. Aucun vaccin n'est obligatoire mais une protection antimoustique est recommandée.",
      },
      {
        question: "Combien de jours faut-il pour visiter Angkor ?",
        answer:
          "Trois jours constituent le bon équilibre : un jour permet de voir Angkor Wat, le Bayon et Ta Prohm, trois jours couvrent le petit et le grand circuit ainsi que Banteay Srei, et quatre jours ou plus permettent d'atteindre Beng Mealea ou Koh Ker.",
      },
      {
        question: "Combien coûte un voyage au Cambodge ?",
        answer:
          "Le budget dépend de la durée, de la saison, du temps passé à Angkor, du type de guide, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "au Cambodge",
        "des circuits des temples d'Angkor avec guide francophone, des combinés indochinois avec le Vietnam, le Laos ou la Thaïlande, des croisières sur le Mékong, des combinés temples et plages et des voyages entièrement sur mesure.",
        "Hôtels de charme coloniaux à Siem Reap et Phnom Penh, boutique-hôtels avec piscine dans les jardins tropicaux, maisons d'hôtes familiales et resorts de plage à Koh Rong.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Cambodge, nous
        travaillons avec des guides khmers francophones, des hébergements
        engagés dans la formation des jeunes et des projets communautaires, et
        nous refusons les visites d&apos;orphelinats, une pratique aujourd&apos;hui
        reconnue comme préjudiciable aux enfants.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Cambodge commence ici",
    body: "Parlez-nous de votre projet. Circuit des temples d'Angkor, combiné indochinois, croisière sur le Mékong ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default cambodge;
