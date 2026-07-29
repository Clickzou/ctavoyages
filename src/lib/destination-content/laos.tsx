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

const laos: DestinationContent = {
  slug: "laos",
  meta: {
    title: "Voyage au Laos : séjour, circuit et voyage sur mesure",
    description:
      "Organisez votre voyage au Laos avec CTA Voyages. Luang Prabang et l'aumône des moines, cascades de Kuang Si, croisière sur le Mékong, Plaine des Jarres et 4 000 îles. Circuit ou voyage sur mesure.",
  },
  hero: {
    image: "/generated/laos.jpg",
    imageAlt:
      "Temple doré et moines en robe safran à Luang Prabang — Voyage au Laos avec CTA Voyages",
    label: "Destination Laos",
    h1: "Voyage au Laos : le Mékong, les temples et la lenteur",
    description:
      "Croisière sur le Mékong, immersion à Luang Prabang, trek dans les montagnes du Nord ou voyage entièrement sur mesure.",
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
      value: "+5h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Lao" },
    { kind: "fact", icon: "payments", label: "Monnaie", value: "Kip (LAK)" },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Novembre à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Laos, le pays qui a choisi la lenteur",
    body: (
      <>
        Seul pays d&apos;Asie du Sud-Est sans accès à la mer, le Laos a gardé
        quelque chose que ses voisins ont en partie perdu&nbsp;: le temps.{" "}
        <strong>Luang Prabang</strong>, ancienne capitale royale classée à
        l&apos;UNESCO, en est l&apos;expression la plus pure&nbsp;: trente-deux
        temples dorés, des maisons coloniales à volets de bois, et chaque matin
        au lever du jour, le <em>tak bat</em>, la procession silencieuse des
        moines en robe safran recueillant l&apos;aumône. Autour, les cascades
        turquoise de <strong>Kuang Si</strong> dévalent la forêt, les grottes de{" "}
        <strong>Pak Ou</strong> abritent des milliers de bouddhas, et le{" "}
        <strong>Mékong</strong> se descend en bateau lent, deux jours durant,
        entre montagnes et villages ethniques. Plus au nord, la mystérieuse{" "}
        <strong>Plaine des Jarres</strong>&nbsp;; au sud, le plateau des{" "}
        <strong>Bolovens</strong> et ses caféiers, et les{" "}
        <strong>4 000 îles</strong> où le fleuve s&apos;éparpille avant le
        Cambodge. <strong>Circuit</strong>, <strong>croisière fluviale</strong>,{" "}
        <strong>trek</strong> ou <strong>voyage sur mesure</strong>&nbsp;: le
        Laos se savoure sans se presser.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Laos ?",
    cards: [
      {
        icon: "temple_buddhist",
        title: "Luang Prabang",
        text: "Trente-deux temples, des maisons coloniales et l'aumône matinale des moines : une ville entière classée à l'UNESCO, à parcourir à pied ou à vélo.",
        img: "/generated/laos-2.jpg",
        alt: "Temple doré et moines en robe safran à Luang Prabang",
      },
      {
        icon: "directions_boat",
        title: "La descente du Mékong",
        text: "Deux jours en bateau lent entre Houeisay et Luang Prabang, au ras de l'eau, entre montagnes boisées et hameaux accessibles seulement par le fleuve.",
        img: "/generated/laos-1.jpg",
        alt: "Bateau traditionnel descendant le Mékong entre les montagnes",
      },
      {
        icon: "water_drop",
        title: "Les cascades de Kuang Si",
        text: "Des bassins d'un turquoise irréel étagés dans la forêt tropicale, où l'on peut se baigner, à trente minutes de Luang Prabang.",
        img: "/generated/laos-3.jpg",
        alt: "Bassins turquoise étagés de la cascade de Kuang Si",
      },
      {
        icon: "diversity_3",
        title: "Les montagnes du Nord",
        text: "Trek entre les villages hmong, khmu et akha, nuits chez l'habitant et rizières en terrasses autour de Nong Khiaw et Muang Ngoi.",
        img: "/generated/laos-4.jpg",
        alt: "Village de montagne et rizières en terrasses dans le nord du Laos",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Laos",
    steps: [
      {
        id: "mekong-slow-boat",
        label: "JOURS 1 ET 2",
        title: "Descente du Mékong en bateau lent",
        text: "Départ de Houeisay à la frontière thaïlandaise : deux journées de navigation paisible entre gorges et villages riverains, avec une nuit d'étape à Pakbeng.",
        img: "/generated/laos-1.jpg",
        alt: "Navigation en bateau lent sur le Mékong entre les montagnes laotiennes",
        align: "left",
      },
      {
        id: "luang-prabang",
        label: "JOURS 3 À 5",
        title: "Luang Prabang, la cité royale",
        text: "Aumône matinale des moines, temples de Wat Xieng Thong et Wat Mai, montée au mont Phousi au coucher du soleil et flânerie au marché de nuit.",
        img: "/generated/laos-2.jpg",
        alt: "Temples et ruelles de la vieille ville de Luang Prabang",
        align: "right",
      },
      {
        id: "kuang-si",
        label: "JOUR 6",
        title: "Cascades de Kuang Si & grottes de Pak Ou",
        text: "Baignade dans les bassins turquoise de Kuang Si, visite du centre de protection des ours, puis remontée du Mékong vers les grottes sacrées de Pak Ou.",
        img: "/generated/laos-3.jpg",
        alt: "Cascade turquoise de Kuang Si dans la forêt tropicale",
        align: "left",
      },
      {
        id: "nong-khiaw",
        label: "JOURS 7 ET 8",
        title: "Nong Khiaw & les montagnes",
        text: "Route vers le nord et ses paysages karstiques : randonnée jusqu'aux points de vue de Nong Khiaw, navigation vers Muang Ngoi et rencontre avec les villages ethniques.",
        img: "/generated/laos-1.jpg",
        alt: "Pitons karstiques et rivière dans le nord du Laos",
        align: "right",
      },
      {
        id: "vientiane",
        label: "JOURS 9 ET 10",
        title: "Vientiane, la capitale tranquille",
        text: "Fin du voyage dans la plus paisible des capitales asiatiques : le stupa doré de That Luang, le Wat Sisaket et ses milliers de bouddhas, et les rives du Mékong au crépuscule.",
        img: "/generated/laos.jpg",
        alt: "Stupa doré et architecture bouddhiste à Vientiane",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le plateau des Bolovens, les 4 000 îles du sud ou un combiné avec le
        Vietnam, le Cambodge ou la Thaïlande s&apos;organisent aisément.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Laos",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Laos&nbsp;?</>
        ),
        answer: (
          <>
            <p>Le climat tropical dicte les saisons&nbsp;:</p>
            {checklist([
              <>
                <strong>De novembre à février</strong>&nbsp;: la meilleure
                période, sèche et douce, idéale pour la navigation et les treks.
              </>,
              <>
                <strong>Mars et avril</strong>&nbsp;: très chaud, avec parfois des
                brûlis agricoles qui voilent les paysages du Nord.
              </>,
              <>
                <strong>De mai à octobre</strong>&nbsp;: saison des pluies,
                cascades spectaculaires et rizières d&apos;un vert intense.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour le Laos&nbsp;?</>,
        answer: (
          <>
            <p>Prévoyez les éléments suivants&nbsp;:</p>
            {checklist([
              <>
                Un <strong>visa touristique</strong> obligatoire, obtenu en ligne
                ou à l&apos;arrivée.
              </>,
              <>
                Un <strong>passeport valide 6 mois</strong> après la date de
                retour, avec une page vierge.
              </>,
              <>
                Aucun vaccin obligatoire&nbsp;: protection antimoustique et eau en
                bouteille restent recommandées.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Laos", [
        <>
          <strong>Circuit découverte</strong>&nbsp;: Luang Prabang, Vientiane et
          le nord du pays.
        </>,
        <>
          <strong>Croisière sur le Mékong</strong>&nbsp;: bateau lent ou navire de
          charme.
        </>,
        <>
          <strong>Trek & rencontres</strong>&nbsp;: villages ethniques et nuits
          chez l&apos;habitant.
        </>,
        <>
          <strong>Combiné indochinois</strong>&nbsp;: avec le Vietnam, le
          Cambodge ou la Thaïlande.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions</strong>&nbsp;: Nord montagneux, centre historique
          ou Sud du Mékong.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: itinérance douce, randonnée sportive
          ou séjour contemplatif.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: cours de cuisine lao, aumône
          matinale, atelier de tissage, navigation privée.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Laos",
        "Le mode de transport interne : bateau, route ou vols domestiques",
      ),
      {
        question: <>Le Laos est-il une destination facile&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est une destination sereine</strong>, à condition
              d&apos;en accepter le rythme&nbsp;:
            </p>
            {checklist([
              <>
                Les <strong>distances routières</strong> sont longues&nbsp;: les
                routes de montagne sont sinueuses et lentes.
              </>,
              <>
                Le pays est réputé <strong>très sûr</strong> et son accueil
                particulièrement doux.
              </>,
              <>
                Les <strong>infrastructures touristiques</strong> sont plus
                simples que chez ses voisins, ce qui fait aussi son charme.
              </>,
            ])}
            <p>
              Nous ajustons les étapes pour éviter les trajets trop longs et
              privilégier le bateau ou l&apos;avion quand c&apos;est pertinent.
            </p>
          </>
        ),
      },
      faqHebergements("au Laos", [
        <>
          <strong>Maisons coloniales restaurées</strong> au cœur de Luang
          Prabang.
        </>,
        <>
          <strong>Écolodges</strong> face au Mékong ou en pleine nature.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> familiales dans les villages du
          Nord.
        </>,
        <>
          <strong>Bateaux de charme</strong> avec cabines pour la croisière
          fluviale.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Laos ?",
        answer:
          "De novembre à février, saison sèche et douce, idéale pour la navigation sur le Mékong et les treks. Mars et avril sont très chauds, et de mai à octobre la saison des pluies rend les cascades spectaculaires et les rizières d'un vert intense.",
      },
      {
        question: "Faut-il un visa pour le Laos ?",
        answer:
          "Oui, un visa touristique est obligatoire, obtenu en ligne ou à l'arrivée, avec un passeport valide six mois après la date de retour et une page vierge. Aucun vaccin n'est obligatoire.",
      },
      {
        question: "Le Laos est-il une destination facile à visiter ?",
        answer:
          "C'est une destination sereine et très sûre, à condition d'accepter son rythme : les routes de montagne sont sinueuses et lentes, et les infrastructures touristiques restent plus simples que chez ses voisins, ce qui fait aussi son charme.",
      },
      {
        question: "Combien coûte un voyage au Laos ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, du mode de transport interne (bateau, route ou vols domestiques), du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Laos",
        "des circuits découverte, des croisières sur le Mékong, des treks avec nuits chez l'habitant, des combinés indochinois et des voyages entièrement sur mesure.",
        "Maisons coloniales restaurées à Luang Prabang, écolodges face au Mékong, maisons d'hôtes familiales dans les villages du Nord et bateaux de charme avec cabines pour la croisière fluviale.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Laos, nous favorisons
        les hébergements et guides locaux, les treks organisés avec les
        communautés villageoises et une approche respectueuse des rites
        bouddhistes, notamment lors de l&apos;aumône matinale, que nous
        demandons d&apos;observer à distance et en silence.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Laos commence ici",
    body: "Parlez-nous de votre projet. Croisière sur le Mékong, immersion à Luang Prabang, trek dans les montagnes du Nord ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default laos;
