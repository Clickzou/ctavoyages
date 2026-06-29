import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const afriqueDuSud: DestinationContent = {
  slug: "afrique-du-sud",
  meta: {
    title:
      "Voyage en Afrique du Sud : safari, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Afrique du Sud avec CTA Voyages. Le Cap et Table Mountain, route des vins de Stellenbosch, route des Jardins, baleines d'Hermanus, safari Big Five au parc Kruger. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Table Mountain dominant la baie du Cap au coucher du soleil — Voyage en Afrique du Sud avec CTA Voyages",
    label: "Destination Afrique du Sud",
    h1: "Voyage en Afrique du Sud : safari, océans et grands espaces",
    description:
      "Circuit nature, safari Big Five, escapade œnologique ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+1h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Anglais & afrikaans",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Rand (ZAR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à septembre (safari)",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Afrique du Sud, un monde en un seul pays",
    body: (
      <>
        Surnommée la <strong>Nation Arc-en-ciel</strong>, l&apos;Afrique du Sud
        concentre à elle seule une diversité de paysages et d&apos;expériences
        rarement réunie sur un même territoire. Des contreforts spectaculaires de{" "}
        <strong>Table Mountain</strong> qui dominent Le Cap aux étendues sauvages
        du <strong>parc Kruger</strong> où rôdent les Big Five, des vignobles
        vallonnés de <strong>Stellenbosch</strong> aux falaises battues par
        l&apos;océan de la <strong>route des Jardins</strong>, chaque étape révèle
        une facette de ce pays vibrant. Observer les baleines depuis les côtes
        d&apos;<strong>Hermanus</strong>, déguster un grand cru face aux montagnes,
        partir à l&apos;aube en 4×4 à la rencontre des lions, ou se laisser griser
        par l&apos;énergie cosmopolite du Cap : l&apos;Afrique du Sud se vit aussi
        bien en <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>safari d&apos;exception</strong>, en{" "}
        <strong>escapade œnologique</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Afrique du Sud ?",
    cards: [
      {
        icon: "pets",
        title: "Le safari Big Five",
        text: "Lion, léopard, éléphant, rhinocéros et buffle : le parc Kruger et ses réserves privées offrent parmi les plus belles observations animalières au monde.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&h=650&fit=crop&auto=format",
        alt: "Troupeau d'éléphants dans la savane du parc Kruger",
      },
      {
        icon: "landscape",
        title: "Des paysages grandioses",
        text: "Table Mountain, Cape Point, falaises de la route des Jardins : l'Afrique du Sud déploie une nature spectaculaire entre océans, montagnes et savanes.",
        img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&h=650&fit=crop&auto=format",
        alt: "Falaises et océan le long de la route des Jardins",
      },
      {
        icon: "wine_bar",
        title: "La route des vins",
        text: "Stellenbosch, Franschhoek, Paarl : les vignobles du Cap comptent parmi les plus réputés de l'hémisphère sud, dans des décors à couper le souffle.",
        img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&h=650&fit=crop&auto=format",
        alt: "Vignobles vallonnés de Stellenbosch au pied des montagnes",
      },
      {
        icon: "sailing",
        title: "L'appel de l'océan",
        text: "Baleines d'Hermanus, manchots de Boulders Beach, deux océans qui se rencontrent au Cap des Aiguilles : la côte sud-africaine est un sanctuaire marin.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=900&h=650&fit=crop&auto=format",
        alt: "Baleine émergeant au large d'Hermanus",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Afrique du Sud",
    steps: [
      {
        id: "le-cap",
        label: "JOURS 1 À 3",
        title: "Le Cap & Table Mountain",
        text: "Immersion dans la ville la plus envoûtante du pays : ascension de Table Mountain, quartiers colorés de Bo-Kaap, front de mer du V&A Waterfront et coucher de soleil sur Signal Hill.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&h=650&fit=crop&auto=format",
        alt: "Le Cap au pied de Table Mountain",
        align: "left",
      },
      {
        id: "peninsule-du-cap",
        label: "JOUR 4",
        title: "Péninsule du Cap (Cape Point)",
        text: "Route panoramique de Chapman's Peak, colonie de manchots de Boulders Beach et cap de Bonne-Espérance, là où le regard se perd entre deux océans à Cape Point.",
        img: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=900&h=650&fit=crop&auto=format",
        alt: "Cap de Bonne-Espérance et Cape Point",
        align: "right",
      },
      {
        id: "stellenbosch",
        label: "JOURS 5 À 6",
        title: "Route des vins de Stellenbosch",
        text: "Au cœur des Winelands, dégustations dans les domaines historiques de Stellenbosch et Franschhoek, architecture cape dutch et gastronomie raffinée face aux vignes.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&h=650&fit=crop&auto=format",
        alt: "Domaine viticole de Stellenbosch",
        align: "left",
        objectPosition: "center 45%",
      },
      {
        id: "route-des-jardins",
        label: "JOURS 7 À 9",
        title: "La route des Jardins",
        text: "Mythique Garden Route le long de l'océan Indien : lagons de Knysna, forêts de Tsitsikamma, plages de Plettenberg Bay et panoramas spectaculaires à chaque virage.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=900&h=650&fit=crop&auto=format",
        alt: "Côte sauvage de la route des Jardins",
        align: "right",
      },
      {
        id: "hermanus",
        label: "JOUR 10",
        title: "Hermanus, capitale des baleines",
        text: "Sur la route du retour, halte à Hermanus, l'un des meilleurs sites au monde pour observer les baleines franches australes directement depuis la côte (de juin à novembre).",
        img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=900&h=650&fit=crop&auto=format",
        alt: "Côte d'Hermanus, observation des baleines",
        align: "left",
      },
      {
        id: "kruger",
        label: "JOURS 11 À 14",
        title: "Parc Kruger : safari Big Five",
        text: "Envol vers le Nord-Est pour le clou du voyage : safaris matin et soir en 4×4 dans une réserve privée du Kruger, à la rencontre des lions, léopards, éléphants, rhinocéros et buffles.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&h=650&fit=crop&auto=format",
        alt: "Safari Big Five au parc Kruger",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Johannesburg et Soweto, le canyon de la Blyde
        River, le Drakensberg ou une extension aux chutes Victoria peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Afrique du Sud",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Afrique du Sud&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Afrique du Sud se visite toute l&apos;année, mais la période
              dépend de vos priorités :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Mai à septembre (hiver austral)</strong> : la saison idéale
                pour le safari, la végétation est rase et les animaux faciles à
                observer près des points d&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juin à novembre</strong> : la saison des baleines à
                Hermanus et le long de la côte.
              </li>
              <li>
                <Icon name="check" />
                <strong>Novembre à mars (été austral)</strong> : parfait pour Le Cap,
                les plages et la route des vins, sous un climat doux et ensoleillé.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera vers la période la plus adaptée à votre
              projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Afrique du Sud&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français sont exemptés de
              visa pour un séjour touristique de moins de 90 jours.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 30 jours</strong> après la date
                de retour, avec au moins <strong>2 pages vierges</strong>, est exigé.
              </li>
              <li>
                <Icon name="check" />
                Aucune <strong>vaccination obligatoire</strong> hors zones à risque
                de fièvre jaune.
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
        question: <>Quels types de voyages proposez-vous en Afrique du Sud&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour l&apos;Afrique
              du Sud :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Safari</strong> : en réserve privée ou dans le parc Kruger,
                en lodge tout confort.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : autotour ou itinéraire accompagné, du Cap
                au Kruger.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné villes &amp; nature</strong> : Le Cap, la route des
                Jardins puis le safari.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : lodges d&apos;exception et
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
                Les <strong>étapes et la durée</strong> : Le Cap, Winelands, route
                des Jardins, Kruger…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, lodge
                de safari, guesthouse viticole.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : safaris, dégustations,
                observation des baleines, randonnées.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Afrique du Sud&nbsp;?</>,
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
                Le niveau d&apos;hébergement souhaité (notamment les lodges de safari)
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
              adressent une proposition personnalisée, gratuite et sans engagement.
            </p>
          </>
        ),
      },
      {
        question: <>Le safari est-il accessible à tous&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui.</strong> L&apos;Afrique du Sud est l&apos;une des
              destinations safari les plus confortables :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Lodges tout confort</strong> avec rangers expérimentés et
                4×4 ouverts.
              </li>
              <li>
                <Icon name="check" />
                Réserves <strong>sans paludisme</strong> possibles, idéales pour les
                familles avec enfants.
              </li>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> disponibles pour les principales
                étapes.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur du Cap.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges de safari</strong> en réserve privée, des plus
                authentiques aux plus luxueux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Guesthouses viticoles</strong> au cœur des vignobles de
                Stellenbosch et Franschhoek.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> le long de la route des Jardins.
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
              Nos conseillers vous répondent <strong>sous 48h</strong>, gratuitement
              et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter l'Afrique du Sud ?",
        answer:
          "De mai à septembre (hiver austral) pour le safari, lorsque la végétation est rase et les animaux faciles à observer. De juin à novembre pour les baleines à Hermanus, et de novembre à mars pour Le Cap, les plages et la route des vins.",
      },
      {
        question: "Faut-il un visa pour se rendre en Afrique du Sud ?",
        answer:
          "Non, les ressortissants français sont exemptés de visa pour un séjour touristique de moins de 90 jours. Un passeport valide au moins 30 jours après le retour, avec au moins 2 pages vierges, est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Afrique du Sud ?",
        answer:
          "CTA Voyages propose des safaris en réserve privée ou au parc Kruger, des circuits et autotours, des combinés villes et nature, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Afrique du Sud ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Afrique du Sud ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement (notamment les lodges de safari), le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Le safari est-il accessible à tous en Afrique du Sud ?",
        answer:
          "Oui. Les lodges sont confortables, des réserves sans paludisme existent (idéales pour les familles) et des guides francophones sont disponibles pour les principales étapes.",
      },
      {
        question: "Quels hébergements proposez-vous en Afrique du Sud ?",
        answer:
          "Hôtels 4 et 5 étoiles au Cap, lodges de safari en réserve privée, guesthouses viticoles dans les Winelands et adresses de charme le long de la route des Jardins.",
      },
      {
        question: "Comment demander un devis pour un voyage en Afrique du Sud ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Afrique du Sud comme ailleurs,
        nous privilégions des réserves et lodges engagés dans la protection de la
        faune et la lutte contre le braconnage, des prestataires locaux responsables
        et un tourisme respectueux des communautés et des écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Afrique du Sud commence ici",
    body: "Parlez-nous de votre projet. Safari, circuit, combiné villes et nature ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default afriqueDuSud;
