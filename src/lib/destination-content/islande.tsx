import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const islande: DestinationContent = {
  slug: "islande",
  meta: {
    title:
      "Voyage en Islande : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Islande avec CTA Voyages. Cercle d'Or, cascades de la côte sud, glaciers, lagune de Jökulsárlón, aurores boréales, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Cascade et paysage volcanique sous une lumière dorée — Voyage en Islande avec CTA Voyages",
    label: "Destination Islande",
    h1: "Voyage en Islande : terre de feu, de glace et d'aurores",
    description:
      "Circuit nature, road-trip sur la Route 1, chasse aux aurores boréales ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des paysages uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~3h30 de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-1h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Islandais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Couronne (ISK)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin à août (aurores l'hiver)",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Islande, terre de feu et de glace",
    body: (
      <>
        Posée aux confins de l&apos;Atlantique Nord, l&apos;Islande déploie des
        paysages d&apos;une puissance brute et d&apos;une beauté irréelle.
        Volcans fumants, champs de lave moussus, cascades vertigineuses,
        glaciers millénaires et plages de sable noir composent un décor de bout
        du monde, façonné par les forces telluriques. De l&apos;effervescence
        culturelle de <strong>Reykjavik</strong> aux geysers du{" "}
        <strong>Cercle d&apos;Or</strong>, des cascades de la{" "}
        <strong>côte sud</strong> aux icebergs scintillants de la lagune de{" "}
        <strong>Jökulsárlón</strong>, chaque étape révèle une facette de cette
        île hors du temps. Se baigner dans une source géothermale sous la neige,
        guetter la danse verte des <strong>aurores boréales</strong>, randonner
        au pied d&apos;un glacier ou parcourir les fjords sauvages de
        l&apos;Est&nbsp;: l&apos;Islande se vit aussi bien en{" "}
        <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>road-trip sur la Route 1</strong>, en{" "}
        <strong>escapade hivernale</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Islande ?",
    cards: [
      {
        icon: "water_drop",
        title: "Des cascades spectaculaires",
        text: "Gullfoss, Seljalandsfoss, Skógafoss : l'Islande abrite certaines des plus impressionnantes chutes d'eau d'Europe, à portée de regard depuis la route.",
        img: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600&h=400&fit=crop&auto=format",
        alt: "Cascade de Skógafoss tombant d'une falaise verdoyante en Islande",
      },
      {
        icon: "ac_unit",
        title: "Glaciers et icebergs",
        text: "Lagune glaciaire de Jökulsárlón, langues de glace du Vatnajökull, Diamond Beach : un monde de glace bleutée qui se laisse explorer à pied ou en bateau.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&h=400&fit=crop&auto=format",
        alt: "Icebergs flottant dans la lagune glaciaire de Jökulsárlón",
      },
      {
        icon: "auto_awesome",
        title: "Les aurores boréales",
        text: "De septembre à mars, le ciel islandais s'embrase de voiles verts et violets : un spectacle inoubliable, loin de la pollution lumineuse.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600&h=400&fit=crop&auto=format",
        alt: "Aurore boréale verte dansant au-dessus d'un paysage islandais enneigé",
      },
      {
        icon: "hot_tub",
        title: "Sources géothermales",
        text: "Blue Lagoon, Secret Lagoon, bains naturels : se prélasser dans une eau chaude laiteuse face aux paysages volcaniques est une expérience typiquement islandaise.",
        img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
        alt: "Bassin d'eau géothermale fumante au milieu d'un champ de lave",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Islande",
    steps: [
      {
        id: "reykjavik",
        label: "JOURS 1 À 2",
        title: "Reykjavik : la capitale du Nord",
        text: "Immersion dans la plus septentrionale des capitales : l'église Hallgrímskirkja, le front de mer et son Sun Voyager, les cafés design et la scène culturelle. Premier contact avec l'âme islandaise avant de prendre la route.",
        img: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&h=400&fit=crop&auto=format",
        alt: "Reykjavik",
        align: "left",
      },
      {
        id: "cercle-or",
        label: "JOUR 3",
        title: "Le Cercle d'Or : geysers et chutes",
        text: "La boucle incontournable : le parc national de Þingvellir et sa faille entre deux continents, la zone géothermale de Geysir et son Strokkur jaillissant, puis la majestueuse cascade de Gullfoss.",
        img: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&h=400&fit=crop&auto=format",
        alt: "Cercle d'Or",
        align: "right",
      },
      {
        id: "cote-sud",
        label: "JOURS 4 À 5",
        title: "La côte sud & ses cascades",
        text: "Cap au sud le long de la Route 1 : la cascade de Seljalandsfoss derrière laquelle on chemine, l'imposante Skógafoss, la plage de sable noir de Reynisfjara et ses orgues basaltiques près de Vík.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop&auto=format",
        alt: "Côte sud",
        align: "left",
      },
      {
        id: "jokulsarlon",
        label: "JOURS 6 À 7",
        title: "Glacier & lagune de Jökulsárlón",
        text: "Le clou du voyage : randonnée sur une langue glaciaire du Vatnajökull, navigation parmi les icebergs de la lagune de Jökulsárlón et flânerie sur la Diamond Beach, où la glace échoue sur le sable noir.",
        img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&h=400&fit=crop&auto=format",
        alt: "Jökulsárlón",
        align: "right",
      },
      {
        id: "fjords-est",
        label: "JOURS 8 À 9",
        title: "Les fjords de l'Est",
        text: "Route panoramique au cœur des fjords sauvages de l'Est : villages de pêcheurs colorés, montagnes plongeant dans la mer, rennes et macareux. Un Islande secrète, loin des foules.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&h=400&fit=crop&auto=format",
        alt: "Fjords de l'Est",
        align: "left",
        objectPosition: "center 45%",
      },
      {
        id: "snaefellsnes",
        label: "JOURS 10 À 11",
        title: "Péninsule de Snæfellsnes",
        text: "Surnommée « l'Islande en miniature » : le volcan-glacier Snæfellsjökull, la montagne Kirkjufell et sa cascade, les falaises d'Arnarstapi et les plages dorées. Un final contrasté avant le retour vers Reykjavik.",
        img: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&h=400&fit=crop&auto=format",
        alt: "Snæfellsnes",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la péninsule de Reykjanes, les Hautes Terres,
        l&apos;île de Vestmann ou le nord autour de Mývatn et Akureyri peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Islande",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Islande&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Islande se visite toute l&apos;année, mais chaque saison a
              son caractère :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : journées sans fin sous le
                soleil de minuit, routes ouvertes et accès aux Hautes Terres.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (septembre à mars)</strong> : la saison des{" "}
                <strong>aurores boréales</strong>, paysages enneigés et grottes
                de glace.
              </li>
              <li>
                <Icon name="check" />
                <strong>Demi-saisons (mai &amp; septembre)</strong> : nature
                spectaculaire, moins de monde et tarifs plus doux.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à
              votre projet, aurores ou soleil de minuit.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Islande&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, l&apos;Islande fait partie de l&apos;espace
              Schengen&nbsp;: aucun visa n&apos;est requis pour les
              ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit pour entrer sur le territoire.
              </li>
              <li>
                <Icon name="check" />
                Un passeport est toutefois recommandé pour faciliter les
                <strong> formalités aériennes</strong>.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour au moment de votre
              réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous en Islande&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour
              l&apos;Islande :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Road-trip</strong> : autotour libre le long de la Route
                1, à votre rythme.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire accompagné, individuel ou
                en petit groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade aurores boréales</strong> : court séjour
                hivernal au départ de Reykjavik.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et
                expériences privatisées.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>étapes et la durée</strong> : Cercle d&apos;Or, côte
                sud, fjords de l&apos;Est, Snæfellsnes, Nord…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel design,
                ferme-auberge, lodge isolé sous les aurores.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnée
                glaciaire, baignade géothermale, sortie aux baleines.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Islande&nbsp;?</>,
        answer: (
          <>
            <p>Le budget dépend de plusieurs facteurs :</p>
            <ul>
              <li>
                <Icon name="check" />
                La durée du séjour
              </li>
              <li>
                <Icon name="check" />
                La période de départ
              </li>
              <li>
                <Icon name="check" />
                Le niveau d&apos;hébergement souhaité
              </li>
              <li>
                <Icon name="check" />
                Le type de voyage choisi
              </li>
              <li>
                <Icon name="check" />
                Les activités et prestations incluses
              </li>
            </ul>
            <p>
              Pour obtenir une estimation,{" "}
              <a href="/demande-devis">contactez-nous</a>. Nos conseillers vous
              adressent une proposition personnalisée, gratuite et sans
              engagement.
            </p>
          </>
        ),
      },
      {
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> L&apos;anglais est parlé partout et
              CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les circuits
                accompagnés.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets, bons,
                feuilles de route.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout
                votre séjour.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels hébergements proposez-vous&nbsp;?</>,
        answer: (
          <>
            <p>Nous sélectionnons les hébergements selon vos préférences :</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hôtels design</strong> au cœur de Reykjavik.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et hôtels isolés</strong> idéaux pour observer les
                aurores boréales.
              </li>
              <li>
                <Icon name="check" />
                <strong>Fermes-auberges</strong> et guesthouses authentiques le
                long de la route.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> face aux glaciers et aux
                fjords.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment demander un devis&nbsp;?</>,
        answer: (
          <>
            <p>C&apos;est simple, rapide et gratuit :</p>
            <ul>
              <li>
                <Icon name="description" />
                Via notre <strong>formulaire en ligne</strong>.
              </li>
              <li>
                <Icon name="call" />
                Par téléphone : <strong>+33 (0)5 34 391 391</strong>
              </li>
              <li>
                <Icon name="mail" />
                Par email : <strong>voyages@cta-events.com</strong>
              </li>
            </ul>
            <p>
              Nos conseillers vous répondent <strong>sous 48h</strong>,
              gratuitement et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter l'Islande ?",
        answer:
          "L'été (juin à août) offre le soleil de minuit et l'accès aux Hautes Terres, tandis que l'hiver (septembre à mars) est la saison des aurores boréales et des paysages enneigés. Les demi-saisons (mai et septembre) combinent nature spectaculaire et tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre en Islande ?",
        answer:
          "Non, l'Islande fait partie de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous en Islande ?",
        answer:
          "CTA Voyages propose des road-trips autotour sur la Route 1, des circuits accompagnés, des escapades aurores boréales, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Islande ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Islande ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Islande ?",
        answer:
          "Non. L'anglais est parlé partout et nos guides francophones ainsi que notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Islande ?",
        answer:
          "Hôtels design à Reykjavik, lodges isolés pour observer les aurores, fermes-auberges authentiques et adresses de charme face aux glaciers et fjords.",
      },
      {
        question: "Comment demander un devis pour un voyage en Islande ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Islande comme ailleurs,
        nous privilégions des prestataires locaux responsables, le respect des
        écosystèmes fragiles et des sites naturels, et un tourisme attentif à la
        préservation de cette nature exceptionnelle.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Islande commence ici",
    body: "Parlez-nous de votre projet. Road-trip, circuit, escapade aurores boréales ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default islande;
