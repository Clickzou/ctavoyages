import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const maldives: DestinationContent = {
  slug: "maldives",
  meta: {
    title:
      "Voyage aux Maldives : séjour, lune de miel et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage aux Maldives avec CTA Voyages. Villas sur pilotis, lagons turquoise, snorkeling et plongée, séjour balnéaire ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Villas sur pilotis au-dessus d'un lagon turquoise — Voyage aux Maldives avec CTA Voyages",
    label: "Destination Maldives",
    h1: "Voyage aux Maldives : lagons turquoise et villas sur pilotis",
    description:
      "Séjour balnéaire de rêve, lune de miel, escapade plongée ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~10h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+4h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Dhivehi",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Rufiyaa (MVR)",
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
    h2: "Les Maldives, l'archipel des lagons infinis",
    body: (
      <>
        Égrenées comme un collier de perles au cœur de l&apos;océan Indien, les
        Maldives déploient près de mille deux cents îles coralliennes aux plages de
        sable blanc immaculé et aux lagons d&apos;une transparence irréelle. Des{" "}
        <strong>villas sur pilotis</strong> suspendues au-dessus de l&apos;eau aux
        jardins de corail foisonnants, des bancs de poissons multicolores aux{" "}
        <strong>raies manta</strong> et <strong>requins-baleines</strong>, chaque
        atoll est une invitation à la déconnexion totale. Plonger au lever du jour,
        savourer un dîner les pieds dans le sable, partir en{" "}
        <strong>dhoni</strong> traditionnel admirer le coucher du soleil ou
        s&apos;offrir une parenthèse au spa : les Maldives se vivent aussi bien en{" "}
        <strong>séjour balnéaire</strong> qu&apos;en <strong>lune de miel</strong>,
        en <strong>escapade plongée</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Maldives ?",
    cards: [
      {
        icon: "house_siding",
        title: "Des villas sur pilotis",
        text: "Suspendues au-dessus du lagon, les villas sur pilotis offrent un accès direct à une eau turquoise et des couchers de soleil inoubliables : le symbole même du voyage aux Maldives.",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop&auto=format",
        alt: "Villa sur pilotis au-dessus d'un lagon turquoise aux Maldives",
      },
      {
        icon: "scuba_diving",
        title: "Des fonds marins exceptionnels",
        text: "Récifs coralliens, raies manta, tortues et requins-baleines : les Maldives comptent parmi les plus beaux spots de snorkeling et de plongée de la planète.",
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop&auto=format",
        alt: "Plongeur explorant un récif corallien coloré aux Maldives",
      },
      {
        icon: "beach_access",
        title: "Des plages de carte postale",
        text: "Sable blanc poudreux, cocotiers et lagons cristallins : chaque île est un décor paradisiaque propice au farniente et à la détente absolue.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc bordée de cocotiers et de lagon turquoise aux Maldives",
      },
      {
        icon: "spa",
        title: "Un art de vivre du bien-être",
        text: "Spas posés sur l'eau, dîners romantiques sur la plage et îles privées : les Maldives sont la destination idéale d'une lune de miel ou d'une escapade en amoureux.",
        img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop&auto=format",
        alt: "Pavillon de spa au-dessus du lagon aux Maldives",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Maldives",
    steps: [
      {
        id: "male-hydravion",
        label: "JOUR 1",
        title: "Malé & transfert en hydravion",
        text: "Arrivée à l'aéroport international de Malé, accueil par votre hôte, puis envol en hydravion au-dessus des atolls. Un survol spectaculaire des lagons turquoise pour rejoindre votre île.",
        img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&h=600&fit=crop&auto=format",
        alt: "Hydravion survolant les atolls des Maldives",
        align: "left",
      },
      {
        id: "villa-pilotis",
        label: "JOUR 2",
        title: "Installation en villa sur pilotis",
        text: "Prise de possession de votre villa sur pilotis, accès direct au lagon depuis votre terrasse privée. Première baignade dans une eau à 28 °C et premier coucher de soleil sur l'océan Indien.",
        img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop&auto=format",
        alt: "Terrasse d'une villa sur pilotis donnant sur le lagon",
        align: "right",
      },
      {
        id: "snorkeling-recif",
        label: "JOUR 3",
        title: "Snorkeling sur le récif",
        text: "Palmes, masque et tuba pour explorer le récif corallien qui borde l'île. Bancs de poissons-perroquets, tortues et jardins de corail : un aquarium grandeur nature accessible depuis le rivage.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
        alt: "Snorkeling au-dessus d'un récif corallien aux Maldives",
        align: "left",
      },
      {
        id: "plongee-raies-requins",
        label: "JOUR 4",
        title: "Plongée avec raies et requins-baleines",
        text: "Sortie en bateau vers les sites de plongée réputés de l'atoll. Avec un peu de chance, rencontre avec les majestueuses raies manta et les paisibles requins-baleines, les géants des mers des Maldives.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format",
        alt: "Raie manta nageant dans les eaux des Maldives",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "ile-deserte",
        label: "JOUR 5",
        title: "Pique-nique sur une île déserte",
        text: "Excursion vers un banc de sable isolé, une île déserte rien que pour vous. Pique-nique les pieds dans l'eau, baignade dans un lagon translucide et farniente loin de tout, façon Robinson Crusoé.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&h=600&fit=crop&auto=format",
        alt: "Banc de sable désert entouré d'un lagon turquoise aux Maldives",
        align: "left",
      },
      {
        id: "spa-dhoni",
        label: "JOUR 6",
        title: "Spa & coucher de soleil en dhoni",
        text: "Matinée détente au spa posé sur l'eau, soins inspirés des traditions locales. En fin de journée, croisière au coucher du soleil à bord d'un dhoni traditionnel, à la recherche des dauphins.",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop&auto=format",
        alt: "Dhoni traditionnel maldivien au coucher du soleil",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme une croisière entre atolls, un combiné avec
        Dubaï ou le Sri Lanka, ou un séjour sur une île locale peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Maldives",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter les Maldives&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Les Maldives se visitent toute l&apos;année, mais deux saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (novembre à avril)</strong> : la période
                idéale, ensoleillée et peu humide, parfaite pour la plage et la
                plongée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison humide (mai à octobre)</strong> : averses courtes,
                mers plus agitées mais tarifs plus doux et meilleure visibilité des
                raies manta.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et l&apos;atoll les plus
              adaptés à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre aux Maldives&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient
              d&apos;un visa touristique gratuit délivré à l&apos;arrivée.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                de retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>réservation d&apos;hébergement</strong> et un billet de
                retour sont demandés à l&apos;arrivée.
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
        question: <>Quels types de voyages proposez-vous aux Maldives&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour les Maldives :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour balnéaire</strong> : détente totale en resort sur une
                île privée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lune de miel</strong> : villa sur pilotis, dîners romantiques
                et expériences privatisées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade plongée</strong> : croisière ou séjour dédié aux
                plus beaux sites de l&apos;archipel.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné</strong> : les Maldives associées à Dubaï ou au Sri
                Lanka.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Peut-on personnaliser entièrement le séjour&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                L&apos;<strong>atoll et le resort</strong> : selon votre budget, vos
                envies de calme ou d&apos;animation.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : villa sur pilotis,
                villa de plage ou suite avec piscine privée.
              </li>
              <li>
                <Icon name="check" />
                Les <strong>expériences</strong> : plongée, excursion île déserte,
                spa, croisière au coucher du soleil.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage aux Maldives&nbsp;?</>,
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
                Le niveau de resort et le type de villa
              </li>
              <li>
                <Icon name="check" />
                Le mode de transfert (hydravion ou speedboat)
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
        question: <>Comment se déplace-t-on entre les îles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Tout est organisé pour vous.</strong> Selon la distance de
              votre resort :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hydravion</strong> : pour les atolls les plus éloignés, un
                vol panoramique inoubliable.
              </li>
              <li>
                <Icon name="check" />
                <strong>Speedboat</strong> : pour les îles proches de Malé, un
                transfert rapide en bateau rapide.
              </li>
              <li>
                <Icon name="check" />
                <strong>Vol domestique</strong> : pour les atolls du Sud, suivi
                d&apos;un court trajet en bateau.
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
                <strong>Villas sur pilotis</strong> avec accès direct au lagon.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas de plage</strong> les pieds dans le sable.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts 5 étoiles et de luxe</strong> sur îles privées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Guesthouses sur îles locales</strong> pour une expérience
                plus authentique et accessible.
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
        question: "Quelle est la meilleure période pour visiter les Maldives ?",
        answer:
          "La saison sèche, de novembre à avril, est la période idéale : ensoleillée et peu humide, parfaite pour la plage et la plongée. La saison humide (mai à octobre) offre des tarifs plus doux et une meilleure visibilité des raies manta.",
      },
      {
        question: "Faut-il un visa pour se rendre aux Maldives ?",
        answer:
          "Non, les ressortissants français bénéficient d'un visa touristique gratuit délivré à l'arrivée. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous aux Maldives ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des lunes de miel, des escapades plongée, des combinés avec Dubaï ou le Sri Lanka et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement le séjour aux Maldives ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre séjour pas à pas : choix de l'atoll, du resort, du type de villa et des expériences, selon vos envies et votre budget.",
      },
      {
        question: "Combien coûte un voyage aux Maldives ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau de resort, le type de villa, le mode de transfert et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplace-t-on entre les îles aux Maldives ?",
        answer:
          "Selon la distance de votre resort : hydravion pour les atolls éloignés, speedboat pour les îles proches de Malé, ou vol domestique pour les atolls du Sud. Tous les transferts sont organisés pour vous.",
      },
      {
        question: "Quels hébergements proposez-vous aux Maldives ?",
        answer:
          "Villas sur pilotis, villas de plage, resorts 5 étoiles et de luxe sur îles privées, ainsi que des guesthouses sur îles locales pour une expérience plus authentique.",
      },
      {
        question: "Comment demander un devis pour un voyage aux Maldives ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Aux Maldives comme ailleurs, nous
        privilégions des resorts engagés dans la préservation des récifs coralliens,
        des prestataires locaux responsables et un tourisme respectueux des
        écosystèmes marins, parmi les plus fragiles de la planète.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Maldives commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, lune de miel, escapade plongée ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default maldives;
