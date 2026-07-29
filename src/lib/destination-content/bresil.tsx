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

const bresil: DestinationContent = {
  slug: "bresil",
  meta: {
    title:
      "Voyage au Brésil : séjour, circuit et voyage sur mesure",
    description:
      "Organisez votre voyage au Brésil avec CTA Voyages. Rio de Janeiro et le Christ Rédempteur, chutes d'Iguaçu, Amazonie, Pantanal et jaguars, Salvador de Bahia et plages du Nordeste. Circuit ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/bresil.jpg",
    imageAlt:
      "Baie de Rio de Janeiro et Pain de Sucre au coucher du soleil — Voyage au Brésil avec CTA Voyages",
    label: "Destination Brésil",
    h1: "Voyage au Brésil : Rio, Amazonie et plages du Nordeste",
    description:
      "Circuit Rio-Iguaçu-Bahia, expédition en Amazonie, safari au Pantanal ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
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
      value: "-5h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Portugais" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Réal brésilien (BRL)",
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
    h2: "Le Brésil, un continent à lui seul",
    body: (
      <>
        Cinquième pays du monde par la superficie, le Brésil couvre près de la
        moitié de l&apos;Amérique du Sud. <strong>Rio de Janeiro</strong> en est
        la carte de visite&nbsp;: le <strong>Christ Rédempteur</strong> bras
        ouverts sur la baie, le <strong>Pain de Sucre</strong>, les plages de{" "}
        <strong>Copacabana</strong> et d&apos;<strong>Ipanema</strong>, et une
        énergie permanente qui culmine au carnaval. Mais le pays réserve bien
        d&apos;autres émerveillements&nbsp;: les <strong>chutes d&apos;Iguaçu</strong>{" "}
        côté brésilien, face à la Gorge du Diable&nbsp;; l&apos;
        <strong>Amazonie</strong>, où l&apos;on navigue sur le Rio Negro entre
        les arbres inondés&nbsp;; le <strong>Pantanal</strong>, plus grande zone
        humide de la planète et meilleur endroit au monde pour observer le{" "}
        <strong>jaguar</strong>&nbsp;; <strong>Salvador de Bahia</strong> et son
        centre colonial coloré, cœur de la culture afro-brésilienne&nbsp;; les
        dunes des <strong>Lençóis Maranhenses</strong> et les plages du{" "}
        <strong>Nordeste</strong>. <strong>Circuit</strong>,{" "}
        <strong>expédition nature</strong>, <strong>séjour balnéaire</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: nous construisons votre
        itinéraire selon vos envies.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Brésil ?",
    cards: [
      {
        icon: "landscape",
        title: "Rio de Janeiro",
        text: "Le Christ Rédempteur, le Pain de Sucre et les plages mythiques dans une baie spectaculaire : peu de villes au monde offrent un tel décor naturel.",
        img: "/generated/bresil-2.jpg",
        alt: "Baie de Rio de Janeiro vue depuis les hauteurs",
      },
      {
        icon: "forest",
        title: "L'Amazonie",
        text: "Navigation sur le Rio Negro, nuits en lodge sur pilotis, pêche au piranha et marches nocturnes : l'immersion la plus totale qui soit dans la forêt tropicale.",
        img: "/generated/bresil-1.jpg",
        alt: "Rivière amazonienne bordée de forêt tropicale dense",
      },
      {
        icon: "pets",
        title: "Le Pantanal & le jaguar",
        text: "Dans cette immense zone humide, les chances d'observer le jaguar sont les meilleures au monde, aux côtés des caïmans, capybaras et aras.",
        img: "/generated/bresil-4.jpg",
        alt: "Faune sauvage et zone humide du Pantanal brésilien",
      },
      {
        icon: "festival",
        title: "Bahia & la culture afro",
        text: "Salvador, son Pelourinho coloré, la capoeira, le candomblé et une cuisine unique : le berceau de l'identité afro-brésilienne.",
        img: "/generated/bresil-3.jpg",
        alt: "Façades colorées du quartier historique de Salvador de Bahia",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Brésil",
    steps: [
      {
        id: "rio",
        label: "JOURS 1 À 4",
        title: "Rio de Janeiro",
        text: "Arrivée dans la ville merveilleuse : Christ Rédempteur, Pain de Sucre au coucher du soleil, plages d'Ipanema et Copacabana, quartier de Santa Teresa et soirée samba.",
        img: "/generated/bresil-2.jpg",
        alt: "Plage et montagnes emblématiques de Rio de Janeiro",
        align: "left",
      },
      {
        id: "iguacu",
        label: "JOURS 5 ET 6",
        title: "Les chutes d'Iguaçu",
        text: "Vol vers la frontière argentine : panorama d'ensemble depuis le côté brésilien, passerelle au-dessus de la Gorge du Diable et parc aux oiseaux.",
        img: "/generated/bresil.jpg",
        alt: "Chutes d'Iguaçu vues depuis le côté brésilien",
        align: "right",
      },
      {
        id: "pantanal",
        label: "JOURS 7 À 9",
        title: "Safari au Pantanal",
        text: "Immersion dans la plus grande zone humide du monde : sorties en bateau et en 4x4 à la recherche du jaguar, des caïmans, des loutres géantes et des aras hyacinthe.",
        img: "/generated/bresil-1.jpg",
        alt: "Rivière et faune du Pantanal au lever du jour",
        align: "left",
      },
      {
        id: "amazonie",
        label: "JOURS 10 À 12",
        title: "Amazonie & Rio Negro",
        text: "Envol vers Manaus : rencontre des eaux, navigation entre les igapós, nuit en lodge au cœur de la forêt et sortie nocturne à la recherche des caïmans.",
        img: "/generated/bresil-1.jpg",
        alt: "Lodge sur pilotis et forêt inondée en Amazonie brésilienne",
        align: "right",
      },
      {
        id: "salvador",
        label: "JOURS 13 À 15",
        title: "Salvador de Bahia & le Nordeste",
        text: "Fin du voyage au rythme afro-brésilien : le Pelourinho et ses églises baroques, un spectacle de capoeira, puis détente sur les plages de Praia do Forte.",
        img: "/generated/bresil-3.jpg",
        alt: "Rue pavée et maisons colorées du Pelourinho à Salvador",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Les dunes des Lençóis Maranhenses, l&apos;île de Fernando de Noronha, le
        Minas Gerais ou une extension en Argentine s&apos;intègrent facilement au
        programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Brésil",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Brésil&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le pays est si vaste que les saisons diffèrent selon les
              régions&nbsp;:
            </p>
            {checklist([
              <>
                <strong>De mai à septembre</strong>&nbsp;: la saison sèche dans la
                plupart des régions, et la meilleure période pour le Pantanal et
                l&apos;Amazonie.
              </>,
              <>
                <strong>De décembre à mars</strong>&nbsp;: l&apos;été austral,
                chaud et festif, idéal pour Rio, les plages et le carnaval.
              </>,
              <>
                <strong>Le Nordeste</strong> reste ensoleillé presque toute
                l&apos;année, avec des pluies concentrées d&apos;avril à juillet.
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
                La <strong>vaccination contre la fièvre jaune</strong> est
                fortement recommandée pour l&apos;Amazonie et le Pantanal.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("au Brésil", [
        <>
          <strong>Grand circuit</strong>&nbsp;: Rio, Iguaçu et Bahia en vols
          intérieurs.
        </>,
        <>
          <strong>Expédition nature</strong>&nbsp;: Amazonie et Pantanal en
          lodges.
        </>,
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: plages du Nordeste et de la
          côte bahianaise.
        </>,
        <>
          <strong>Voyage carnaval</strong>&nbsp;: Rio ou Salvador en février,
          places réservées à l&apos;avance.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Sud-Est, Amazonie,
          Pantanal, Nordeste, Minas Gerais.
        </>,
        <>
          Le <strong>dosage</strong>&nbsp;: villes, nature sauvage et plages, dans
          les proportions que vous souhaitez.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: cours de samba, safari photo,
          survol des chutes, navigation en Amazonie.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "au Brésil",
        "Le nombre de vols intérieurs, incontournables sur un territoire aussi vaste",
      ),
      {
        question: <>Le Brésil est-il une destination sûre&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui, avec les précautions d&apos;usage des grandes
              métropoles.</strong>
            </p>
            {checklist([
              <>
                Nous sélectionnons des <strong>quartiers sûrs</strong> pour
                l&apos;hébergement, notamment à Rio et Salvador.
              </>,
              <>
                Nos <strong>transferts sont privés</strong> entre aéroports,
                hôtels et sites de visite.
              </>,
              <>
                Nos <strong>guides francophones</strong> connaissent
                parfaitement les usages locaux et les zones à éviter.
              </>,
            ])}
            <p>
              Les régions naturelles (Pantanal, Amazonie, Nordeste) sont très
              tranquilles.
            </p>
          </>
        ),
      },
      faqHebergements("au Brésil", [
        <>
          <strong>Hôtels front de mer</strong> à Copacabana et Ipanema.
        </>,
        <>
          <strong>Pousadas de charme</strong> dans les villages coloniaux et sur
          la côte.
        </>,
        <>
          <strong>Lodges écologiques</strong> en Amazonie et au Pantanal.
        </>,
        <>
          <strong>Resorts de plage</strong> dans le Nordeste et à Praia do Forte.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter le Brésil ?",
        answer:
          "De mai à septembre pendant la saison sèche, la meilleure période pour le Pantanal et l'Amazonie. De décembre à mars, l'été austral est idéal pour Rio, les plages et le carnaval. Le Nordeste est ensoleillé presque toute l'année.",
      },
      {
        question: "Faut-il un visa pour le Brésil ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours, avec un passeport valide six mois après le retour. La vaccination contre la fièvre jaune est fortement recommandée pour l'Amazonie et le Pantanal.",
      },
      {
        question: "Le Brésil est-il une destination sûre ?",
        answer:
          "Oui, avec les précautions d'usage des grandes métropoles : nous sélectionnons des quartiers sûrs pour l'hébergement, organisons des transferts privés et travaillons avec des guides francophones connaissant les usages locaux. Les régions naturelles sont très tranquilles.",
      },
      {
        question: "Combien coûte un voyage au Brésil ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, du nombre de vols intérieurs incontournables sur un territoire aussi vaste, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "au Brésil",
        "des grands circuits Rio-Iguaçu-Bahia, des expéditions nature en Amazonie et au Pantanal, des séjours balnéaires dans le Nordeste, des voyages carnaval et des voyages entièrement sur mesure.",
        "Hôtels front de mer à Copacabana et Ipanema, pousadas de charme dans les villages coloniaux, lodges écologiques en Amazonie et au Pantanal et resorts de plage dans le Nordeste.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. Au Brésil, nous
        sélectionnons des lodges amazoniens gérés avec les communautés
        riveraines, des opérateurs du Pantanal engagés dans la conservation du
        jaguar et des hébergements urbains qui emploient et forment localement.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Brésil commence ici",
    body: "Parlez-nous de votre projet. Circuit Rio-Iguaçu-Bahia, expédition en Amazonie, safari au Pantanal ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default bresil;
