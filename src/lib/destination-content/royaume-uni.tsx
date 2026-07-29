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

const royaumeUni: DestinationContent = {
  slug: "royaume-uni",
  meta: {
    title:
      "Voyage au Royaume-Uni : séjour, circuit",
    description:
      "Organisez votre voyage au Royaume-Uni avec CTA Voyages. Londres, Highlands d'Écosse, Cotswolds, châteaux du pays de Galles et côte de Cornouailles.",
  },
  hero: {
    image: "/generated/royaume-uni.jpg",
    imageAlt:
      "Tower Bridge et la Tamise au crépuscule — Voyage au Royaume-Uni avec CTA Voyages",
    label: "Destination Royaume-Uni",
    h1: "Voyage au Royaume-Uni : Londres, Highlands et campagnes anglaises",
    description:
      "City break, autotour en Écosse, escapade en famille ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~1h15 (Londres)",
    },
    { kind: "fact", icon: "schedule", label: "Décalage horaire", value: "-1h" },
    { kind: "fact", icon: "translate", label: "Langue", value: "Anglais" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Livre sterling (GBP)",
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
    h2: "Le Royaume-Uni, quatre nations en un seul voyage",
    body: (
      <>
        À moins de deux heures de vol, le Royaume-Uni réunit quatre nations aux
        caractères bien trempés. <strong>Londres</strong> concentre
        l&apos;énergie d&apos;une capitale mondiale&nbsp;: musées gratuits de
        rang international, marchés vintage, comédies musicales du West End et
        quartiers en perpétuelle réinvention. Quelques heures de train plus au
        nord, l&apos;<strong>Écosse</strong> déroule ses Highlands, ses lochs
        profonds et ses distilleries de whisky, avec Édimbourg et son château
        posé sur un piton volcanique. Le <strong>pays de Galles</strong> aligne
        les châteaux médiévaux et les sommets du parc de Snowdonia, tandis que
        l&apos;<strong>Angleterre</strong> rurale se savoure dans les villages
        de pierre dorée des <strong>Cotswolds</strong>, sur la côte sauvage de
        Cornouailles ou dans les collines du Lake District. Le pays se prête
        aussi bien au <strong>city break</strong> qu&apos;à l&apos;
        <strong>autotour</strong>, au <strong>voyage en famille</strong>
        qu&apos;au <strong>séjour sur mesure</strong>&nbsp;: votre conseiller CTA
        Voyages compose l&apos;itinéraire qui vous ressemble, à votre rythme et
        selon votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Royaume-Uni ?",
    cards: [
      {
        icon: "landscape",
        title: "Les Highlands écossais",
        text: "Lochs, vallées désertes, châteaux en ruine et route panoramique vers l'île de Skye : l'un des plus beaux road trips d'Europe.",
        img: "/generated/royaume-uni-1.jpg",
        alt: "Loch et montagnes des Highlands écossais sous un ciel changeant",
      },
      {
        icon: "museum",
        title: "Londres, capitale culturelle",
        text: "British Museum, Tate Modern, National Gallery : les plus grands musées du monde y sont gratuits, entre deux monuments emblématiques.",
        img: "/generated/royaume-uni-2.jpg",
        alt: "Architecture et rue animée du centre de Londres",
      },
      {
        icon: "cottage",
        title: "Les villages des Cotswolds",
        text: "Maisons de pierre dorée, jardins fleuris, pubs de village et thé de l'après-midi : la campagne anglaise dans sa version la plus charmante.",
        img: "/generated/royaume-uni-3.jpg",
        alt: "Cottage traditionnel en pierre dorée dans un village des Cotswolds",
      },
      {
        icon: "castle",
        title: "Châteaux & patrimoine",
        text: "Du château d'Édimbourg aux forteresses galloises de Conwy et Caernarfon, mille ans d'histoire se visitent à ciel ouvert.",
        img: "/generated/royaume-uni-4.jpg",
        alt: "Château médiéval britannique dominant la campagne environnante",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Royaume-Uni",
    steps: [
      {
        id: "londres",
        label: "JOURS 1 À 3",
        title: "Londres, l'effervescence",
        text: "Arrivée dans la capitale. Big Ben, Westminster et Tower Bridge, puis flâneries dans les marchés de Borough et Camden. Une soirée au West End clôt cette première immersion.",
        img: "/generated/royaume-uni-2.jpg",
        alt: "Monuments et animation du centre de Londres",
        align: "left",
      },
      {
        id: "cotswolds-bath",
        label: "JOURS 4 ET 5",
        title: "Cotswolds & Bath",
        text: "Cap à l'ouest vers la campagne anglaise : villages de pierre dorée, jardins anglais et pubs de caractère, puis découverte de Bath et de ses thermes romains classés à l'UNESCO.",
        img: "/generated/royaume-uni-3.jpg",
        alt: "Village de pierre dorée et campagne vallonnée des Cotswolds",
        align: "right",
      },
      {
        id: "pays-de-galles",
        label: "JOUR 6",
        title: "Pays de Galles & Snowdonia",
        text: "Route vers les châteaux gallois de Conwy et Caernarfon, puis randonnée dans le parc national de Snowdonia, entre lacs d'altitude et sommets escarpés.",
        img: "/generated/royaume-uni-2.jpg",
        alt: "Château gallois et paysage de montagne du parc de Snowdonia",
        align: "left",
      },
      {
        id: "edimbourg",
        label: "JOURS 7 ET 8",
        title: "Édimbourg, la capitale écossaise",
        text: "Montée au château d'Édimbourg, ruelles secrètes de la Old Town et Royal Mile. Dégustation de whisky et découverte de la scène gastronomique écossaise.",
        img: "/generated/royaume-uni.jpg",
        alt: "Vieille ville d'Édimbourg dominée par son château",
        align: "right",
      },
      {
        id: "highlands-skye",
        label: "JOURS 9 À 11",
        title: "Highlands & île de Skye",
        text: "Le grand final : route panoramique vers le loch Ness et Glencoe, puis traversée vers l'île de Skye et ses falaises battues par le vent, avec nuits en manoir ou en auberge de charme.",
        img: "/generated/royaume-uni-1.jpg",
        alt: "Loch et reliefs des Highlands sur la route de l'île de Skye",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le Lake District, la Cornouailles, York ou l&apos;Irlande du Nord et sa
        Chaussée des Géants s&apos;intègrent facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Royaume-Uni",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Royaume-Uni&nbsp;?</>
        ),
        answer: (
          <>
            <p>Chaque saison a ses atouts&nbsp;:</p>
            {checklist([
              <>
                <strong>De mai à septembre</strong>&nbsp;: la meilleure période,
                avec des journées très longues, des jardins en fleurs et un
                climat plus clément pour la campagne et l&apos;Écosse.
              </>,
              <>
                <strong>Avril et octobre</strong>&nbsp;: moins de monde, tarifs
                plus doux et couleurs superbes sur les Highlands.
              </>,
              <>
                <strong>De novembre à mars</strong>&nbsp;: idéal pour un city
                break à Londres, entre musées, théâtres et marchés de Noël.
              </>,
            ])}
            <p>
              Le temps reste changeant toute l&apos;année&nbsp;: prévoyez
              toujours une veste imperméable.
            </p>
          </>
        ),
      },
      {
        question: (
          <>Quelles formalités pour se rendre au Royaume-Uni&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Depuis le Brexit, la carte d&apos;identité ne suffit plus&nbsp;:
            </p>
            {checklist([
              <>
                Un <strong>passeport en cours de validité</strong> est
                obligatoire pour les ressortissants français.
              </>,
              <>
                Une <strong>autorisation électronique de voyage (ETA)</strong>
                &nbsp;est demandée avant le départ pour les séjours touristiques
                courts.
              </>,
              <>
                Pas de visa nécessaire pour un séjour touristique de moins de six
                mois.
              </>,
            ])}
            <p>
              Nous vous communiquons les formalités à jour au moment de votre
              réservation.
            </p>
          </>
        ),
      },
      faqFormules("au Royaume-Uni", [
        <>
          <strong>City break</strong>&nbsp;: Londres, Édimbourg ou Manchester en
          week-end prolongé.
        </>,
        <>
          <strong>Autotour</strong>&nbsp;: Écosse, Cotswolds, Cornouailles ou
          pays de Galles au volant.
        </>,
        <>
          <strong>Circuit accompagné</strong>&nbsp;: guide francophone et
          itinéraire clé en main.
        </>,
        <>
          <strong>Voyage en famille</strong>&nbsp;: studios Harry Potter,
          châteaux et parcs à thème.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Angleterre, Écosse,
          pays de Galles, Irlande du Nord.
        </>,
        <>
          Le <strong>mode de transport</strong>&nbsp;: train, voiture de location
          ou chauffeur privé.
        </>,
        <>
          Le <strong>style d&apos;hébergement</strong>&nbsp;: hôtel de charme,
          bed and breakfast ou manoir écossais.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Royaume-Uni",
        "Le choix de Londres, souvent plus onéreuse que le reste du pays",
      ),
      {
        question: <>Comment se déplacer sur place&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Tout dépend de votre itinéraire.</strong> Nous organisons
              vos déplacements&nbsp;:
            </p>
            {checklist([
              <>
                <strong>Le train</strong>, rapide et confortable entre les
                grandes villes (Londres-Édimbourg en 4h30).
              </>,
              <>
                <strong>La voiture de location</strong>, indispensable pour les
                Highlands, les Cotswolds et la Cornouailles — conduite à gauche.
              </>,
              <>
                <strong>L&apos;Eurostar</strong> depuis Paris ou Lille, une
                alternative confortable à l&apos;avion pour rejoindre Londres.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("au Royaume-Uni", [
        <>
          <strong>Hôtels de charme</strong> au cœur de Londres et
          d&apos;Édimbourg.
        </>,
        <>
          <strong>Bed and breakfast</strong> traditionnels dans les villages
          anglais et gallois.
        </>,
        <>
          <strong>Manoirs et châteaux-hôtels</strong> en Écosse et dans le Lake
          District.
        </>,
        <>
          <strong>Cottages</strong> à louer pour un séjour en famille dans les
          Cotswolds ou en Cornouailles.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Royaume-Uni ?",
        answer:
          "De mai à septembre pour des journées longues et un climat plus clément, idéal pour la campagne et l'Écosse. Avril et octobre offrent moins de monde et de belles couleurs. De novembre à mars, Londres se prête parfaitement au city break.",
      },
      {
        question: "Quelles formalités pour se rendre au Royaume-Uni ?",
        answer:
          "Depuis le Brexit, un passeport en cours de validité est obligatoire pour les ressortissants français, ainsi qu'une autorisation électronique de voyage (ETA) à obtenir avant le départ. Aucun visa n'est nécessaire pour un séjour touristique de moins de six mois.",
      },
      {
        question: "Comment se déplacer au Royaume-Uni ?",
        answer:
          "Le train relie rapidement les grandes villes (Londres-Édimbourg en 4h30), la voiture de location est indispensable pour les Highlands, les Cotswolds et la Cornouailles, et l'Eurostar constitue une alternative confortable à l'avion depuis Paris ou Lille.",
      },
      {
        question: "Combien coûte un voyage au Royaume-Uni ?",
        answer:
          "Le budget dépend de la durée, de la période, des régions visitées, du niveau d'hébergement et des activités incluses, Londres étant généralement plus onéreuse que le reste du pays. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "au Royaume-Uni",
        "des city breaks à Londres ou Édimbourg, des autotours en Écosse, dans les Cotswolds ou en Cornouailles, des circuits accompagnés avec guide francophone, des voyages en famille et des voyages entièrement sur mesure.",
        "Hôtels de charme à Londres et Édimbourg, bed and breakfast traditionnels dans les villages, manoirs et châteaux-hôtels en Écosse, cottages à louer pour un séjour en famille.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Royaume-Uni, nous
        privilégions le train pour les grandes liaisons, des hébergements
        indépendants tenus par des familles et des prestataires locaux engagés
        dans la préservation des parcs nationaux et des paysages ruraux.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Royaume-Uni commence ici",
    body: "Parlez-nous de votre projet. City break à Londres, autotour dans les Highlands, escapade en famille ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default royaumeUni;
