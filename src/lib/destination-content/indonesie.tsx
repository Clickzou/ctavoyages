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

const indonesie: DestinationContent = {
  slug: "indonesie",
  meta: {
    title:
      "Voyage en Indonésie : séjour, circuit",
    description:
      "Organisez votre voyage en Indonésie avec CTA Voyages. Rizières de Bali, temple de Borobudur, volcans Bromo et Ijen, dragons de Komodo et plongée à Raja Ampat.",
  },
  hero: {
    image: "/generated/indonesie.jpg",
    imageAlt:
      "Rizières en terrasses et volcan en arrière-plan en Indonésie — Voyage en Indonésie avec CTA Voyages",
    label: "Destination Indonésie",
    h1: "Voyage en Indonésie : volcans, temples et îles infinies",
    description:
      "Circuit Java-Bali, séjour balnéaire, croisière entre les îles ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~16h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+6h (Bali, été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Indonésien" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Roupie indonésienne (IDR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Indonésie, 17 000 îles et autant de visages",
    body: (
      <>
        Étiré sur 5 000 kilomètres entre l&apos;océan Indien et le Pacifique,
        l&apos;archipel indonésien est le plus vaste du monde. On y vient
        d&apos;abord pour <strong>Bali</strong>, ses rizières en terrasses autour
        d&apos;<strong>Ubud</strong>, ses temples suspendus au-dessus de
        l&apos;océan et ses cérémonies quotidiennes fleuries. Mais l&apos;
        <strong>île des Dieux</strong> n&apos;est qu&apos;une porte
        d&apos;entrée. À l&apos;ouest, <strong>Java</strong> abrite le temple
        bouddhiste de <strong>Borobudur</strong>, le plus grand du monde, et une
        chaîne de volcans actifs dont le <strong>Bromo</strong>, dont le lever de
        soleil compte parmi les spectacles les plus saisissants d&apos;Asie, et
        l&apos;<strong>Ijen</strong> et ses flammes bleues. À l&apos;est,{" "}
        <strong>Flores</strong> et <strong>Komodo</strong> abritent les derniers
        dragons de la planète, tandis que <strong>Raja Ampat</strong> concentre
        la plus grande biodiversité marine connue. <strong>Circuit</strong>,{" "}
        <strong>séjour balnéaire</strong>, <strong>croisière</strong>,{" "}
        <strong>voyage de noces</strong> ou{" "}
        <strong>itinéraire sur mesure</strong>&nbsp;: votre conseiller CTA
        Voyages compose le voyage qui vous ressemble.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Indonésie ?",
    cards: [
      {
        icon: "agriculture",
        title: "Les rizières de Bali",
        text: "Autour d'Ubud, les terrasses de Tegallalang et de Jatiluwih, irriguées depuis mille ans par le système traditionnel subak classé à l'UNESCO.",
        img: "/generated/indonesie-1.jpg",
        alt: "Rizières en terrasses verdoyantes autour d'Ubud à Bali",
      },
      {
        icon: "temple_buddhist",
        title: "Temples & spiritualité",
        text: "Borobudur au lever du soleil, Prambanan l'hindouiste, Tanah Lot posé sur son rocher : l'Indonésie vit au rythme de ses rites et de ses offrandes.",
        img: "/generated/indonesie-2.jpg",
        alt: "Temple ancien indonésien émergeant de la brume matinale",
      },
      {
        icon: "volcano",
        title: "Les volcans de Java",
        text: "Le Bromo au petit matin dans sa mer de sable, les flammes bleues du cratère d'Ijen : deux des ascensions les plus spectaculaires du Sud-Est asiatique.",
        img: "/generated/indonesie-4.jpg",
        alt: "Cratère volcanique fumant et paysage minéral à Java",
      },
      {
        icon: "scuba_diving",
        title: "Des fonds marins d'exception",
        text: "Raies manta de Nusa Penida, récifs de Komodo, jardins coralliens de Raja Ampat : l'archipel est l'un des sanctuaires de plongée les plus riches au monde.",
        img: "/generated/indonesie-3.jpg",
        alt: "Bateau traditionnel et eaux turquoise d'une île indonésienne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Indonésie",
    steps: [
      {
        id: "yogyakarta-borobudur",
        label: "JOURS 1 À 3",
        title: "Yogyakarta & Borobudur",
        text: "Arrivée à Java. Découverte du palais du sultan et des ateliers de batik, puis lever de soleil sur les stupas de Borobudur et visite du temple hindou de Prambanan.",
        img: "/generated/indonesie-2.jpg",
        alt: "Stupas du temple de Borobudur au lever du soleil",
        align: "left",
      },
      {
        id: "bromo-ijen",
        label: "JOURS 4 ET 5",
        title: "Volcans Bromo & Ijen",
        text: "Départ nocturne pour assister au lever de soleil sur la caldeira du Bromo, puis route vers l'Ijen et son lac d'acide turquoise, célèbre pour ses flammes bleues.",
        img: "/generated/indonesie.jpg",
        alt: "Lever de soleil sur la caldeira du volcan Bromo",
        align: "right",
      },
      {
        id: "ubud",
        label: "JOURS 6 À 8",
        title: "Ubud, cœur culturel de Bali",
        text: "Traversée vers Bali. Rizières en terrasses, forêt des singes, ateliers d'artisans, temples de l'eau et soirée de danse traditionnelle balinaise.",
        img: "/generated/indonesie-1.jpg",
        alt: "Rizières en terrasses et végétation tropicale autour d'Ubud",
        align: "left",
      },
      {
        id: "nusa-penida",
        label: "JOUR 9",
        title: "Nusa Penida & raies manta",
        text: "Excursion en bateau rapide vers l'île voisine : falaises vertigineuses de Kelingking, plages sauvages et snorkeling au milieu des raies manta.",
        img: "/generated/indonesie-3.jpg",
        alt: "Falaises et plage sauvage de l'île de Nusa Penida",
        align: "right",
      },
      {
        id: "plages-bali",
        label: "JOURS 10 À 12",
        title: "Détente sur les plages du Sud",
        text: "Fin du voyage face à l'océan : plages de Seminyak ou d'Uluwatu, temples perchés sur les falaises, spa balinais et couchers de soleil sur l'océan Indien.",
        img: "/generated/indonesie-3.jpg",
        alt: "Plage balinaise et coucher de soleil sur l'océan Indien",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Une croisière vers Komodo et Flores, les îles Gili, Lombok ou une
        extension plongée à Raja Ampat s&apos;intègrent facilement au programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Indonésie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour partir en Indonésie&nbsp;?</>
        ),
        answer: (
          <>
            <p>Le climat est équatorial, avec deux saisons marquées&nbsp;:</p>
            {checklist([
              <>
                <strong>D&apos;avril à octobre</strong>&nbsp;: la saison sèche,
                idéale pour les volcans, les rizières et la plongée.
              </>,
              <>
                <strong>Juillet et août</strong>&nbsp;: le pic de fréquentation
                et les meilleures conditions en mer.
              </>,
              <>
                <strong>De novembre à mars</strong>&nbsp;: saison des pluies, sous
                forme d&apos;averses courtes et intenses&nbsp;; les tarifs
                baissent et la nature est éclatante.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités et quelle santé&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches restent simples&nbsp;:</p>
            {checklist([
              <>
                <strong>Passeport valide 6 mois</strong> après la date de retour
                et un visa touristique à l&apos;arrivée ou en ligne.
              </>,
              <>
                Aucun <strong>vaccin obligatoire</strong>, mais une protection
                antimoustique est recommandée.
              </>,
              <>
                Évitez l&apos;eau du robinet&nbsp;: l&apos;eau en bouteille est
                disponible partout.
              </>,
            ])}
            <p>
              Nous vous transmettons les formalités à jour à la réservation.
            </p>
          </>
        ),
      },
      faqFormules("en Indonésie", [
        <>
          <strong>Circuit Java-Bali</strong>&nbsp;: temples, volcans et rizières.
        </>,
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: Bali, Lombok ou les îles Gili.
        </>,
        <>
          <strong>Croisière</strong>&nbsp;: navigation vers Komodo, Flores et les
          îles de la Sonde.
        </>,
        <>
          <strong>Voyage de noces</strong>&nbsp;: villa privée, spa et
          expériences privatisées.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>îles et la durée</strong>&nbsp;: Java, Bali, Lombok,
          Flores, Sulawesi, Raja Ampat.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: itinérance culturelle, aventure
          volcanique ou détente balnéaire.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: cours de cuisine, cérémonie
          traditionnelle, plongée, trek au lever du jour.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Indonésie",
        "Le nombre d'îles visitées et les vols intérieurs nécessaires",
      ),
      {
        question: <>Combien de temps prévoir&nbsp;?</>,
        answer: (
          <>
            <p>
              L&apos;archipel est immense&nbsp;: mieux vaut choisir plutôt que
              tout enchaîner.
            </p>
            {checklist([
              <>
                <strong>10 jours</strong>&nbsp;: Bali seule, entre culture,
                rizières et plages.
              </>,
              <>
                <strong>15 jours</strong>&nbsp;: le combiné Java-Bali, le grand
                classique de la destination.
              </>,
              <>
                <strong>3 semaines</strong>&nbsp;: Java, Bali et une extension
                vers Komodo, Flores ou Sulawesi.
              </>,
            ])}
            <p>
              Le vol étant long, nous conseillons au minimum douze jours sur
              place.
            </p>
          </>
        ),
      },
      faqHebergements("en Indonésie", [
        <>
          <strong>Villas privées</strong> avec piscine face aux rizières
          d&apos;Ubud.
        </>,
        <>
          <strong>Resorts de charme</strong> les pieds dans l&apos;eau à Bali et
          Lombok.
        </>,
        <>
          <strong>Maisons d&apos;hôtes</strong> familiales à Java et dans les
          villages.
        </>,
        <>
          <strong>Bateaux traditionnels</strong> (phinisi) pour naviguer entre
          les îles de la Sonde.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour partir en Indonésie ?",
        answer:
          "D'avril à octobre pendant la saison sèche, idéale pour les volcans, les rizières et la plongée. Juillet et août offrent les meilleures conditions en mer. De novembre à mars, la saison des pluies apporte des averses courtes, des tarifs plus doux et une nature éclatante.",
      },
      {
        question: "Quelles formalités pour se rendre en Indonésie ?",
        answer:
          "Un passeport valide six mois après la date de retour et un visa touristique obtenu à l'arrivée ou en ligne. Aucun vaccin n'est obligatoire, mais une protection antimoustique est recommandée et il faut privilégier l'eau en bouteille.",
      },
      {
        question: "Combien de temps prévoir pour un voyage en Indonésie ?",
        answer:
          "Comptez 10 jours pour Bali seule, 15 jours pour le combiné Java-Bali et 3 semaines pour y ajouter Komodo, Flores ou Sulawesi. Le vol étant long, un minimum de douze jours sur place est conseillé.",
      },
      {
        question: "Combien coûte un voyage en Indonésie ?",
        answer:
          "Le budget dépend de la durée, de la saison, du nombre d'îles visitées et des vols intérieurs nécessaires, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "en Indonésie",
        "des circuits Java-Bali, des séjours balnéaires à Bali, Lombok ou aux Gili, des croisières vers Komodo et Flores, des voyages de noces et des voyages entièrement sur mesure.",
        "Villas privées avec piscine face aux rizières d'Ubud, resorts de charme les pieds dans l'eau, maisons d'hôtes familiales à Java et bateaux traditionnels phinisi pour naviguer entre les îles.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Indonésie, nous
        travaillons avec des guides et des hébergeurs locaux, limitons la
        pression touristique en privilégiant les villages moins fréquentés et
        sélectionnons des centres de plongée engagés dans la protection des
        récifs coralliens.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Indonésie commence ici",
    body: "Parlez-nous de votre projet. Circuit Java-Bali, séjour balnéaire, croisière entre les îles ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default indonesie;
