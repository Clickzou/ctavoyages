import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const polynesie: DestinationContent = {
  slug: "polynesie",
  meta: {
    title:
      "Voyage en Polynésie française : séjour, croisière et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Polynésie française avec CTA Voyages. Lagons de Bora Bora, villas sur pilotis, plongée à Rangiroa, perles de Taha'a, séjour, croisière ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Lagon turquoise et villas sur pilotis au cœur de Bora Bora — Voyage en Polynésie française avec CTA Voyages",
    label: "Destination Polynésie française",
    h1: "Voyage en Polynésie française : lagons turquoise et villas sur pilotis",
    description:
      "Séjour balnéaire, croisière entre les îles, escapade plongée ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~22h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-11h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Français & tahitien",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Franc Pacifique (XPF)",
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
    h2: "La Polynésie française, un paradis au bout du monde",
    body: (
      <>
        Éparpillées sur une immensité d&apos;océan Pacifique grande comme
        l&apos;Europe, les <strong>118 îles</strong> de la Polynésie française
        composent l&apos;une des plus belles destinations de la planète. Lagons
        d&apos;un turquoise irréel, villas sur pilotis posées sur l&apos;eau,
        montagnes volcaniques drapées de végétation, fonds marins grouillant de
        vie et culture <em>mā&apos;ohi</em> d&apos;une douceur infinie : ici,
        chaque île est un monde. De l&apos;effervescence colorée de{" "}
        <strong>Papeete</strong> aux pics déchiquetés de{" "}
        <strong>Moorea</strong>, du lagon mythique de{" "}
        <strong>Bora Bora</strong> aux passes plongée de{" "}
        <strong>Rangiroa</strong>, des plantations de vanille de{" "}
        <strong>Taha&apos;a</strong> aux baies sacrées de{" "}
        <strong>Huahine</strong>, la Polynésie se savoure sans jamais se presser.
        On y vient pour un <strong>voyage de noces</strong> de rêve, une{" "}
        <strong>croisière entre les îles</strong>, une{" "}
        <strong>escapade plongée</strong> ou un{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages compose avec vous l&apos;itinéraire idéal entre les archipels, à
        votre rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Polynésie française ?",
    cards: [
      {
        icon: "water",
        title: "Des lagons d'exception",
        text: "Bora Bora, Moorea, Taha'a : des lagons aux dégradés de bleu uniques au monde, parmi les plus beaux décors marins de la planète.",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon turquoise de Bora Bora bordé de motu et de cocotiers",
      },
      {
        icon: "house",
        title: "Les villas sur pilotis",
        text: "L'expérience polynésienne par excellence : se réveiller au-dessus du lagon, plonger depuis sa terrasse et dîner les pieds au-dessus de l'eau.",
        img: "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?w=800&h=600&fit=crop&auto=format",
        alt: "Villas sur pilotis posées sur le lagon turquoise de Bora Bora",
      },
      {
        icon: "scuba_diving",
        title: "Une plongée mythique",
        text: "Raies manta, requins, dauphins et passes vertigineuses : Rangiroa et Fakarava comptent parmi les plus beaux spots de plongée au monde.",
        img: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop&auto=format",
        alt: "Plongeur évoluant au-dessus d'un récif corallien dans un lagon polynésien",
      },
      {
        icon: "favorite",
        title: "Une culture chaleureuse",
        text: "Danses tahitiennes, tatouages ancestraux, perles noires et marae sacrés : la culture mā'ohi se vit dans un accueil d'une rare douceur.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Danseuse tahitienne en costume traditionnel lors d'un spectacle polynésien",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Polynésie française",
    steps: [
      {
        id: "tahiti",
        label: "JOURS 1 À 2",
        title: "Tahiti : l'arrivée à Papeete",
        text: "Première immersion sur l'île reine : le marché coloré de Papeete, ses étals de monoï et de perles noires, la côte sauvage de la presqu'île de Tahiti Iti et les cascades de la vallée de Papenoo.",
        img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop&auto=format",
        alt: "Côte volcanique et végétation luxuriante de l'île de Tahiti",
        align: "left",
      },
      {
        id: "moorea",
        label: "JOURS 3 À 4",
        title: "Moorea : l'île aux pics",
        text: "À 30 minutes de Tahiti, Moorea déploie ses baies de Cook et d'Opunohu, ses pics déchiquetés et son lagon clair. Nage avec les raies et les requins à pointe noire, ananas et plantations à perte de vue.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
        alt: "Pics volcaniques de Moorea surplombant la baie de Cook",
        align: "right",
      },
      {
        id: "bora-bora",
        label: "JOURS 5 À 7",
        title: "Bora Bora : le lagon mythique",
        text: "Le joyau de la Polynésie : son lagon d'un turquoise irréel dominé par le mont Otemanu, ses motu de sable blanc et l'expérience inoubliable d'une villa sur pilotis au-dessus de l'eau.",
        img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon de Bora Bora et villa sur pilotis face au mont Otemanu",
        align: "left",
      },
      {
        id: "rangiroa",
        label: "JOURS 8 À 9",
        title: "Rangiroa : l'aquarium géant",
        text: "Cap sur l'archipel des Tuamotu et son immense atoll. Rangiroa est l'un des plus beaux spots de plongée au monde : la passe de Tiputa, ses dauphins, raies manta et requins dans une eau d'une transparence absolue.",
        img: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop&auto=format",
        alt: "Plongée dans la passe d'un atoll des Tuamotu à Rangiroa",
        align: "right",
      },
      {
        id: "huahine",
        label: "JOURS 10 À 11",
        title: "Huahine : l'île authentique",
        text: "Retour aux îles Sous-le-Vent et à la plus secrète d'entre elles. Huahine la sauvage séduit par ses baies profondes, ses villages préservés, ses marae sacrés et ses anguilles aux yeux bleus de Faie.",
        img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=600&fit=crop&auto=format",
        alt: "Baie et végétation luxuriante de l'île de Huahine",
        align: "left",
      },
      {
        id: "tahaa",
        label: "JOURS 12 À 13",
        title: "Taha'a : vanille & perles",
        text: "L'île vanille pour clôturer le voyage : parfum enivrant des plantations, visite d'une ferme perlière, jardin de corail entre Taha'a et Raiatea et farniente dans un lagon partagé. L'art de vivre polynésien dans toute sa douceur.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon et motu de Taha'a, l'île vanille de Polynésie française",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres îles comme Raiatea, Fakarava, Tikehau ou les Marquises
        peuvent facilement s&apos;intégrer à votre programme, en séjour comme en
        croisière.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Polynésie française",
    left: [
      {
        question: (
          <>
            Quelle est la meilleure période pour visiter la Polynésie&nbsp;?
          </>
        ),
        answer: (
          <>
            <p>
              La Polynésie se visite toute l&apos;année, mais une saison se
              distingue :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (mai à octobre)</strong> : la période
                idéale, plus fraîche et moins humide, parfaite pour les lagons et
                la plongée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison humide (novembre à avril)</strong> : plus chaude
                et plus arrosée, mais une végétation luxuriante et des tarifs
                souvent plus doux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juillet à août</strong> : le festival du{" "}
                <em>Heiva</em>, grande fête de la culture polynésienne, anime
                toutes les îles.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et les îles les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: (
          <>Faut-il un visa pour se rendre en Polynésie française&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Polynésie française est une collectivité
              d&apos;outre-mer&nbsp;: pour les ressortissants français, aucun
              visa n&apos;est nécessaire.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte nationale d&apos;identité ou un passeport en
                cours de validité</strong> suffit.
              </li>
              <li>
                <Icon name="check" />
                Attention aux <strong>escales</strong> (États-Unis avec ESTA,
                par exemple) selon l&apos;itinéraire choisi.
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
        question: (
          <>Quels types de voyages proposez-vous en Polynésie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la
              Polynésie&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : une ou deux îles, en villa sur pilotis
                ou en bungalow de charme.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné multi-îles</strong> : Tahiti, Moorea, Bora Bora
                et les îles Sous-le-Vent.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière</strong> : navigation entre les archipels à
                bord d&apos;un paquebot ou d&apos;un voilier.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de rêve et
                expériences privatisées.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: (
          <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>îles et la durée</strong> : Tahiti, Moorea, Bora
                Bora, Rangiroa, Huahine, Taha&apos;a…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : villa sur pilotis,
                pension de famille, hôtel de luxe.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : plongée, ferme
                perlière, sortie lagon, danses tahitiennes.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Polynésie&nbsp;?</>,
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
                Le nombre d&apos;îles visitées
              </li>
              <li>
                <Icon name="check" />
                Le niveau d&apos;hébergement souhaité
              </li>
              <li>
                <Icon name="check" />
                La période de départ et les vols
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
        question: <>Comment se déplace-t-on entre les îles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Principalement en avion.</strong> Les distances étant
              importantes, l&apos;archipel se parcourt surtout par les airs :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Vols inter-îles</strong> réguliers depuis Tahiti vers
                toutes les îles principales.
              </li>
              <li>
                <Icon name="check" />
                <strong>Bateau</strong> entre les îles proches comme Tahiti et
                Moorea.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière</strong> pour relier plusieurs archipels sans
                refaire ses valises.
              </li>
            </ul>
            <p>
              Nous organisons l&apos;ensemble de vos transferts et de votre
              logistique.
            </p>
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
                <strong>Villas sur pilotis</strong> au-dessus des plus beaux
                lagons.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels et resorts 4 et 5 étoiles</strong> face à la mer.
              </li>
              <li>
                <Icon name="check" />
                <strong>Pensions de famille</strong> authentiques pour une
                immersion locale.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et lodges de caractère sur
                les motu.
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
        question:
          "Quelle est la meilleure période pour visiter la Polynésie française ?",
        answer:
          "La saison sèche, de mai à octobre, est la période idéale : plus fraîche et moins humide, parfaite pour les lagons et la plongée. La saison humide (novembre à avril) offre une végétation luxuriante et des tarifs souvent plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre en Polynésie française ?",
        answer:
          "Non. La Polynésie française est une collectivité d'outre-mer : pour les ressortissants français, une carte nationale d'identité ou un passeport en cours de validité suffit. Attention aux escales, comme les États-Unis (ESTA), selon l'itinéraire.",
      },
      {
        question: "Quels types de voyages proposez-vous en Polynésie française ?",
        answer:
          "CTA Voyages propose des séjours en villa sur pilotis, des combinés multi-îles, des croisières entre les archipels, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question:
          "Peut-on personnaliser entièrement l'itinéraire en Polynésie française ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon les îles choisies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Polynésie française ?",
        answer:
          "Le budget dépend de la durée, du nombre d'îles, du niveau d'hébergement, de la période et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question:
          "Comment se déplace-t-on entre les îles en Polynésie française ?",
        answer:
          "Principalement en avion, grâce aux vols inter-îles depuis Tahiti, mais aussi en bateau entre les îles proches et en croisière pour relier plusieurs archipels. Nous organisons tous vos transferts.",
      },
      {
        question: "Quels hébergements proposez-vous en Polynésie française ?",
        answer:
          "Villas sur pilotis au-dessus des lagons, hôtels et resorts 4 et 5 étoiles, pensions de famille authentiques et adresses de charme sur les motu.",
      },
      {
        question: "Comment demander un devis pour un voyage en Polynésie française ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Polynésie comme ailleurs,
        nous privilégions des pensions de famille et prestataires locaux, des
        sorties lagon et activités respectueuses des récifs coralliens, et un
        tourisme attentif à la préservation des écosystèmes marins et de la
        culture <em>mā&apos;ohi</em>.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Polynésie française commence ici",
    body: "Parlez-nous de votre projet. Séjour, combiné multi-îles, croisière ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default polynesie;
