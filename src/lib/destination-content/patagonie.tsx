import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const patagonie: DestinationContent = {
  slug: "patagonie",
  meta: {
    title:
      "Voyage en Patagonie : circuit, trek et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Patagonie avec CTA Voyages. Glacier Perito Moreno, Fitz Roy, Torres del Paine, Ushuaïa et le bout du monde. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Massif du Fitz Roy au lever du soleil sur fond de lac turquoise — Voyage en Patagonie avec CTA Voyages",
    label: "Destination Patagonie",
    h1: "Voyage en Patagonie : glaciers, sommets et bout du monde",
    description:
      "Circuit aventure, trek mythique, croisière australe ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des paysages uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~16h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-4h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Espagnol",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Peso argentin (ARS)",
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
    h2: "La Patagonie, terre sauvage du bout du monde",
    body: (
      <>
        Étirée entre l&apos;Argentine et le Chili, à l&apos;extrême sud du continent
        américain, la Patagonie est un sanctuaire de nature brute où le vent souffle
        sur des étendues infinies. Ici, les <strong>glaciers millénaires</strong>{" "}
        s&apos;effondrent dans des lacs d&apos;un bleu irréel, les sommets granitiques
        du <strong>Fitz Roy</strong> et des <strong>Torres del Paine</strong> déchirent
        le ciel, et les fjords australs déroulent leurs canaux jusqu&apos;à la Terre de
        Feu. Du fracas du <strong>glacier Perito Moreno</strong> aux sentiers
        d&apos;El Chaltén, capitale argentine du trek, des steppes peuplées de guanacos
        aux colonies de manchots du <strong>canal de Beagle</strong>, chaque étape est
        une rencontre avec l&apos;immensité. À <strong>Ushuaïa</strong>, la ville la
        plus australe du monde, on touche du doigt le mythe du bout du monde. La
        Patagonie se vit aussi bien en <strong>circuit aventure</strong> qu&apos;en{" "}
        <strong>trek mythique</strong>, en <strong>croisière australe</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Patagonie ?",
    cards: [
      {
        icon: "ac_unit",
        title: "Des glaciers spectaculaires",
        text: "Le Perito Moreno et ses séracs qui s'effondrent, le Upsala, le Grey : la Patagonie abrite l'un des plus grands champs de glace de la planète.",
        img: "https://images.unsplash.com/photo-1515876305430-f06edab8282a?w=800&h=600&fit=crop&auto=format",
        alt: "Front du glacier Perito Moreno aux séracs bleutés, El Calafate",
      },
      {
        icon: "landscape",
        title: "Des sommets mythiques",
        text: "Fitz Roy et Cerro Torre côté argentin, Torres del Paine côté chilien : des aiguilles granitiques parmi les plus emblématiques de la planète.",
        img: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=800&h=600&fit=crop&auto=format",
        alt: "Aiguilles granitiques des Torres del Paine au lever du jour, Chili",
      },
      {
        icon: "hiking",
        title: "Des treks d'exception",
        text: "Du circuit W de Torres del Paine aux sentiers d'El Chaltén, la Patagonie est un paradis pour la randonnée, accessible à tous les niveaux.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&auto=format",
        alt: "Randonneur sur un sentier face aux montagnes de Patagonie",
      },
      {
        icon: "pets",
        title: "Une faune australe",
        text: "Guanacos, condors, manchots de Magellan, otaries et baleines : la Patagonie et la Terre de Feu offrent des rencontres animalières uniques.",
        img: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=800&h=600&fit=crop&auto=format",
        alt: "Colonie de manchots de Magellan sur une côte de Patagonie",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Patagonie",
    steps: [
      {
        id: "el-calafate",
        label: "JOURS 1 À 3",
        title: "El Calafate & le glacier Perito Moreno",
        text: "Porte d'entrée de la Patagonie australe, El Calafate vous mène au mythique glacier Perito Moreno. Face à ce mur de glace de 60 mètres, assistez au fracas des séracs qui s'effondrent dans le lac Argentino, et partez en navigation au pied des géants de glace.",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&h=700&fit=crop&auto=format",
        alt: "Glacier Perito Moreno et passerelles d'observation, El Calafate",
        align: "left",
      },
      {
        id: "el-chalten",
        label: "JOURS 4 À 6",
        title: "El Chaltén & le Fitz Roy",
        text: "Capitale argentine du trekking, El Chaltén est blottie au pied du majestueux Fitz Roy. Randonnée jusqu'à la Laguna de los Tres pour admirer l'aiguille granitique au lever du soleil, et balades vers la Laguna Torre face au Cerro Torre.",
        img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=900&h=700&fit=crop&auto=format",
        alt: "Massif du Fitz Roy se reflétant dans la Laguna de los Tres, El Chaltén",
        align: "right",
      },
      {
        id: "torres-del-paine",
        label: "JOURS 7 À 9",
        title: "Torres del Paine (Chili)",
        text: "Passage côté chilien pour le joyau de la Patagonie : le parc national Torres del Paine. Ses trois tours granitiques, le lac Pehoé turquoise, le glacier Grey et ses guanacos en font l'un des plus beaux parcs du monde, à parcourir lors du célèbre trek du W.",
        img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=900&h=700&fit=crop&auto=format",
        alt: "Tours de granit et lac turquoise du parc Torres del Paine, Chili",
        align: "left",
      },
      {
        id: "ushuaia",
        label: "JOURS 10 ET 11",
        title: "Ushuaïa, la ville du bout du monde",
        text: "Envol vers la Terre de Feu et Ushuaïa, la ville la plus australe de la planète, lovée entre la mer et les montagnes enneigées. Découverte du parc national Tierra del Fuego, de ses forêts, tourbières et lacs au cœur d'une nature préservée.",
        img: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=900&h=700&fit=crop&auto=format",
        alt: "Ville d'Ushuaïa au bord du canal de Beagle, Terre de Feu",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "canal-beagle",
        label: "JOUR 12",
        title: "Navigation sur le canal de Beagle",
        text: "Embarquement pour une navigation inoubliable sur le légendaire canal de Beagle. Approche des îlots peuplés d'otaries et de cormorans, du phare des Éclaireurs et, selon la saison, d'une colonie de manchots de Magellan, dans un décor de fin du monde.",
        img: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=900&h=700&fit=crop&auto=format",
        alt: "Phare des Éclaireurs sur le canal de Beagle au coucher du soleil",
        align: "left",
      },
      {
        id: "fjords-glaciers",
        label: "JOURS 13 À 15",
        title: "Fjords & glaciers australs",
        text: "Pour clôturer le voyage en beauté, embarquez sur une croisière d'expédition à travers les fjords et glaciers de la Patagonie chilienne. Entre canaux silencieux, parois de glace et cascades suspendues, vous naviguez au cœur d'une nature parmi les plus sauvages du globe.",
        img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=900&h=700&fit=crop&auto=format",
        alt: "Fjord et front glaciaire de la Patagonie chilienne",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la péninsule Valdés, Puerto Madryn, Bariloche ou
        la traversée du cap Horn peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Patagonie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Patagonie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Patagonie se découvre surtout durant l&apos;été austral, lorsque les
              conditions sont les plus favorables :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été austral (novembre à mars)</strong> : la période idéale,
                journées longues, températures douces et sentiers de trek ouverts.
              </li>
              <li>
                <Icon name="check" />
                <strong>Décembre à février</strong> : le cœur de la haute saison,
                parfait pour la randonnée et les navigations.
              </li>
              <li>
                <Icon name="check" />
                <strong>Avril et octobre (épaules de saison)</strong> : couleurs
                d&apos;automne ou de printemps, fréquentation plus calme.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à votre
              projet et aux activités souhaitées.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Patagonie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français sont exemptés de visa
              pour un séjour touristique en Argentine comme au Chili.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> couvrant toute la durée du séjour
                est exigé.
              </li>
              <li>
                <Icon name="check" />
                Pensez à anticiper les <strong>passages de frontière</strong> entre
                l&apos;Argentine et le Chili, fréquents dans un circuit patagonien.
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
        question: <>Quels types de voyages proposez-vous en Patagonie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Patagonie :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Circuit aventure</strong> : itinéraire multi-étapes entre
                Argentine et Chili.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour trek</strong> : randonnées au Fitz Roy ou à Torres del
                Paine.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière australe</strong> : fjords, glaciers et cap Horn.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Patagonie &amp; Terre de Feu</strong> : des glaciers
                jusqu&apos;à Ushuaïa.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Faut-il être très sportif pour voyager en Patagonie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas nécessairement.</strong> La Patagonie s&apos;adapte à tous
              les profils :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Des <strong>treks engagés</strong> pour les randonneurs aguerris
                (circuit W, Laguna de los Tres).
              </li>
              <li>
                <Icon name="check" />
                Des <strong>balades faciles</strong> et points de vue accessibles à
                tous, sans effort soutenu.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>navigations et excursions</strong> pour profiter des
                paysages sans marcher.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Patagonie&nbsp;?</>,
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
                Les vols intérieurs, navigations et excursions inclus
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
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales visites et
                excursions.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets, bons,
                programmes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout votre
                séjour.
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
                <strong>Hôtels de charme</strong> à El Calafate, El Chaltén et
                Ushuaïa.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et estancias</strong> face aux montagnes et aux
                glaciers.
              </li>
              <li>
                <Icon name="check" />
                <strong>Refuges et écolodges</strong> au cœur des parcs nationaux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Cabines de croisière</strong> pour les navigations dans les
                fjords australs.
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
        question: "Quelle est la meilleure période pour visiter la Patagonie ?",
        answer:
          "L'été austral, de novembre à mars, est la période idéale : journées longues, températures douces et sentiers de trek ouverts. Décembre à février constitue le cœur de la haute saison, parfait pour la randonnée et les navigations.",
      },
      {
        question: "Faut-il un visa pour se rendre en Patagonie ?",
        answer:
          "Non, les ressortissants français sont exemptés de visa pour un séjour touristique en Argentine comme au Chili. Un passeport valide couvrant toute la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Patagonie ?",
        answer:
          "CTA Voyages propose des circuits aventure, des séjours trek, des croisières australes, des combinés Patagonie et Terre de Feu et des voyages entièrement sur mesure.",
      },
      {
        question: "Faut-il être très sportif pour voyager en Patagonie ?",
        answer:
          "Pas nécessairement. La Patagonie s'adapte à tous les profils : treks engagés pour les randonneurs aguerris, balades faciles accessibles à tous et navigations pour profiter des paysages sans marcher.",
      },
      {
        question: "Combien coûte un voyage en Patagonie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les vols intérieurs, navigations et excursions inclus. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Patagonie ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Patagonie ?",
        answer:
          "Hôtels de charme, lodges et estancias face aux glaciers, refuges au cœur des parcs nationaux et cabines de croisière pour les navigations australes.",
      },
      {
        question: "Comment demander un devis pour un voyage en Patagonie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Patagonie comme ailleurs, nous
        privilégions des prestataires locaux responsables, le respect strict des
        parcs nationaux et de leur faune, et un tourisme à faible impact, soucieux
        de préserver ces écosystèmes australs parmi les plus fragiles de la planète.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Patagonie commence ici",
    body: "Parlez-nous de votre projet. Circuit aventure, trek mythique, croisière australe ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default patagonie;
