import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const crete: DestinationContent = {
  slug: "crete",
  meta: {
    title:
      "Voyage en Crète : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Crète avec CTA Voyages. Port vénitien de La Canée, palais de Knossos, gorges de Samaria, lagons de Balos et Elafonissi, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Lagon turquoise et plage de sable rose en Crète — Voyage en Crète avec CTA Voyages",
    label: "Destination Crète",
    h1: "Voyage en Crète : lagons turquoise et berceau de la Grèce antique",
    description:
      "Circuit culturel, séjour balnéaire, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+1h",
      minuteRotation: "240deg",
      hourRotation: "30deg",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~3h30 de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Grec",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Euro (EUR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Crète, l'île aux mille visages",
    body: (
      <>
        Plus grande île de Grèce et berceau de la civilisation minoenne, la Crète
        déploie ses ports vénitiens, ses montagnes sauvages et ses plages parmi les
        plus spectaculaires de Méditerranée. Des ruelles colorées de{" "}
        <strong>La Canée</strong> aux fresques du <strong>palais de Knossos</strong>,
        des vertigineuses <strong>gorges de Samaria</strong> aux eaux irréelles du{" "}
        <strong>lagon de Balos</strong>, chaque étape révèle une facette de cette
        terre où mythologie, gastronomie ensoleillée et hospitalité légendaire se
        conjuguent à merveille. Randonner sur les sentiers des Montagnes Blanches,
        savourer un mezze face à la mer, explorer un site archéologique au lever du
        jour ou se prélasser sur le sable rose d&apos;Elafonissi : la Crète se vit
        aussi bien en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>séjour balnéaire</strong>, en <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Crète ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine antique",
        text: "Palais de Knossos, site de Phaistos, musée d'Héraklion : la Crète est le berceau de la mystérieuse civilisation minoenne, vieille de 4 000 ans.",
        img: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&auto=format",
        alt: "Fresques et colonnes rouges du palais minoen de Knossos en Crète",
      },
      {
        icon: "beach_access",
        title: "Des plages de rêve",
        text: "Sable rose, lagons turquoise et eaux cristallines : Balos, Elafonissi et Falassarna comptent parmi les plus belles plages d'Europe.",
        img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon turquoise et langue de sable de la plage de Balos en Crète",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie ensoleillée",
        text: "Huile d'olive, fromages fermiers, vins locaux et tavernes de village : la cuisine crétoise, pilier du régime méditerranéen, est un régal authentique.",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop&auto=format",
        alt: "Table de mezze crétois avec olives, fromages et légumes grillés",
      },
      {
        icon: "hiking",
        title: "Une nature spectaculaire",
        text: "Gorges vertigineuses, plateaux d'altitude et villages perchés : les Montagnes Blanches et les gorges de Samaria sont un paradis pour les randonneurs.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&auto=format",
        alt: "Sentier de randonnée au fond des gorges de Samaria en Crète",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Crète",
    steps: [
      {
        id: "la-canee",
        label: "JOURS 1 À 2",
        title: "La Canée & son port vénitien",
        text: "Flânerie dans la plus belle ville de Crète : son port vénitien et son phare emblématique, ses ruelles colorées, ses marchés couverts et ses tavernes au bord de l'eau au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Port vénitien et phare de La Canée au crépuscule en Crète",
        align: "left",
      },
      {
        id: "rethymnon",
        label: "JOUR 3",
        title: "Réthymnon : la cité-forteresse",
        text: "Découverte de Réthymnon, joyau de pierre dominé par sa forteresse vénitienne, la Fortezza. Vieille ville aux influences ottomanes, fontaines Renaissance et longue plage dorée.",
        img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&h=600&fit=crop&auto=format",
        alt: "Forteresse vénitienne Fortezza dominant la ville de Réthymnon",
        align: "right",
      },
      {
        id: "knossos",
        label: "JOURS 4 À 5",
        title: "Héraklion & le palais de Knossos",
        text: "Cap sur la capitale et son riche musée archéologique, puis immersion dans le légendaire palais de Knossos, labyrinthe du roi Minos et cœur de la civilisation minoenne.",
        img: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&auto=format",
        alt: "Colonnes et fresques restaurées du palais de Knossos en Crète",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "samaria",
        label: "JOUR 6",
        title: "Les gorges de Samaria",
        text: "Aventure inoubliable dans les plus longues gorges d'Europe : 16 km de descente au cœur des Montagnes Blanches, entre falaises vertigineuses et la célèbre Porte de fer.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&auto=format",
        alt: "Sentier étroit entre les hautes parois des gorges de Samaria",
        align: "right",
      },
      {
        id: "balos",
        label: "JOURS 7 À 8",
        title: "Le lagon de Balos",
        text: "Excursion en bateau vers le lagon de Balos, paysage de carte postale aux eaux turquoise et au sable blanc, niché entre la presqu'île de Gramvoussa et son fort vénitien.",
        img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&h=600&fit=crop&auto=format",
        alt: "Eaux turquoise et langue de sable du lagon de Balos vus d'en haut",
        align: "left",
      },
      {
        id: "elafonissi",
        label: "JOURS 9 À 10",
        title: "La plage d'Elafonissi : final balnéaire",
        text: "Clôture en beauté sur le sable rose d'Elafonissi, lagon peu profond aux eaux translucides à l'extrême sud-ouest de l'île. Farniente, baignade et couchers de soleil pour finir le voyage en douceur.",
        img: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&h=600&fit=crop&auto=format",
        alt: "Sable rose et eaux peu profondes de la plage d'Elafonissi en Crète",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le plateau du Lassithi, le site de Phaistos, la
        région de Sitia ou les villages de l&apos;arrière-pays peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Crète",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Crète&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Crète bénéficie d&apos;un climat méditerranéen généreux, avec une
              longue saison ensoleillée :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (mai-juin)</strong> : douceur idéale, nature
                fleurie et sites peu fréquentés, parfait pour culture et randonnée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet-août)</strong> : chaleur et soleil garantis,
                idéal pour profiter pleinement des plages et lagons.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre-octobre)</strong> : mer encore chaude,
                lumière douce et ambiance plus paisible.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à votre
              projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Crète&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Crète fait partie de la Grèce, membre de
              l&apos;Union européenne et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Pour les ressortissants français, une{" "}
                <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong>{" "}
                suffit.
              </li>
              <li>
                <Icon name="check" />
                Aucune formalité de visa n&apos;est nécessaire pour un séjour
                touristique.
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
        question: <>Quels types de voyages proposez-vous en Crète&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Crète :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire au bord des plus belles plages ou
                citadin à La Canée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné culture &amp; plage</strong> : sites antiques et villes
                vénitiennes, puis lagons du littoral.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et expériences
                privatisées.
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
                Les <strong>étapes et la durée</strong> : La Canée, Réthymnon,
                Héraklion, Balos, Elafonissi…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, resort
                en bord de mer, villa avec piscine.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnée dans les
                gorges, dégustation d&apos;huile d&apos;olive, sortie en bateau.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Crète&nbsp;?</>,
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
                <strong>Guides francophones</strong> pour les principales visites.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des villes vénitiennes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plus belles
                plages de l&apos;île.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas et maisons de charme</strong> dans l&apos;arrière-pays
                et les villages traditionnels.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses authentiques</strong> et boutique-hôtels de caractère.
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
        question: "Quelle est la meilleure période pour visiter la Crète ?",
        answer:
          "De mai à octobre. Le printemps (mai-juin) offre douceur et nature fleurie, l'été (juillet-août) le soleil idéal pour les plages, et l'automne (septembre-octobre) une mer chaude et une ambiance paisible.",
      },
      {
        question: "Faut-il un visa pour se rendre en Crète ?",
        answer:
          "Non. La Crète fait partie de la Grèce, dans l'espace Schengen. Pour les ressortissants français, une carte d'identité ou un passeport en cours de validité suffit, sans formalité de visa.",
      },
      {
        question: "Quels types de voyages proposez-vous en Crète ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits culturels, des combinés culture et plage, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Crète ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Crète ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Crète ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage. L'anglais est par ailleurs très répandu sur l'île.",
      },
      {
        question: "Quels hébergements proposez-vous en Crète ?",
        answer:
          "Hôtels 4 et 5 étoiles dans les villes vénitiennes, resorts pieds dans l'eau sur les plages, villas de charme dans l'arrière-pays et adresses authentiques.",
      },
      {
        question: "Comment demander un devis pour un voyage en Crète ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Crète comme ailleurs, nous
        privilégions des prestataires locaux responsables, des producteurs et
        tavernes du terroir, et un tourisme respectueux des sites antiques, des
        villages et des écosystèmes fragiles de l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Crète commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné culture et plage ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default crete;
