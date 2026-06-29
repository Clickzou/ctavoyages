import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const rome: DestinationContent = {
  slug: "rome",
  meta: {
    title:
      "Voyage à Rome : séjour, circuit et city-break sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Rome avec CTA Voyages. Colisée, Vatican, fontaine de Trevi, dolce vita et trésors de la Ville éternelle. City-break, séjour ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Le Colisée de Rome illuminé au coucher du soleil — Voyage à Rome avec CTA Voyages",
    label: "Destination Rome",
    h1: "Voyage à Rome : la Ville éternelle, entre histoire et dolce vita",
    description:
      "City-break culturel, séjour gastronomique, escapade romantique ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "Aucun",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Italien",
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
      value: "Avril à juin, sept. à oct.",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Rome, la Ville éternelle",
    body: (
      <>
        Capitale millénaire et musée à ciel ouvert, Rome déploie vingt-huit
        siècles d&apos;histoire à chaque coin de rue, dans une atmosphère où la
        grandeur antique se mêle à la douceur de vivre italienne. Du{" "}
        <strong>Colisée</strong> dressé au cœur du Forum romain à la majesté de
        la <strong>basilique Saint-Pierre</strong>, des fresques de la{" "}
        <strong>chapelle Sixtine</strong> aux fontaines baroques qui bruissent
        sur les places pavées, chaque pas révèle un nouveau trésor. Lancer une
        pièce dans la <strong>fontaine de Trevi</strong>, savourer une glace
        artisanale à l&apos;ombre du Panthéon, flâner dans les ruelles bohèmes du{" "}
        <strong>Trastevere</strong> à la nuit tombée ou s&apos;attabler devant
        une assiette de cacio e pepe : Rome se vit aussi bien en{" "}
        <strong>city-break culturel</strong> qu&apos;en{" "}
        <strong>escapade romantique</strong>, en{" "}
        <strong>séjour gastronomique</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Rome ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine antique unique",
        text: "Colisée, Forum romain, Panthéon, voies pavées : Rome est la plus extraordinaire plongée au cœur de la civilisation antique, à ciel ouvert.",
        img: "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?w=600&h=400&fit=crop&auto=format",
        alt: "Le Forum romain et ses colonnes antiques au cœur de Rome",
      },
      {
        icon: "church",
        title: "Le cœur de la chrétienté",
        text: "Basilique Saint-Pierre, chapelle Sixtine, musées du Vatican : un trésor d'art sacré et de chefs-d'œuvre de la Renaissance sans équivalent.",
        img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=400&fit=crop&auto=format",
        alt: "La basilique Saint-Pierre et sa coupole vues depuis la place du Vatican",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie généreuse",
        text: "Cacio e pepe, carbonara, supplì, gelato artisanal et trattorias de quartier : la cuisine romaine est un délice authentique à chaque repas.",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop&auto=format",
        alt: "Assiette de pâtes à la romaine servie dans une trattoria",
      },
      {
        icon: "fountain",
        title: "La dolce vita romaine",
        text: "Fontaines baroques, places animées, terrasses de café et ruelles du Trastevere : Rome cultive un art de vivre où chaque instant se savoure.",
        img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&h=400&fit=crop&auto=format",
        alt: "La fontaine de Trevi baroque illuminée à Rome",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Rome",
    steps: [
      {
        id: "colisee-forum",
        label: "JOUR 1",
        title: "Colisée & Forum romain",
        text: "Plongée dans la Rome antique : le Colisée, plus grand amphithéâtre du monde romain, le Forum, cœur politique de l'Empire, et le mont Palatin où naquit la ville.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
        alt: "Le Colisée de Rome vu de l'intérieur",
        align: "left",
      },
      {
        id: "vatican",
        label: "JOUR 2",
        title: "Vatican : basilique & musées",
        text: "Journée au plus petit État du monde : la grandiose basilique Saint-Pierre, les musées du Vatican et leurs galeries infinies, jusqu'aux fresques de la chapelle Sixtine.",
        img: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=600&h=400&fit=crop&auto=format",
        alt: "La place Saint-Pierre et sa colonnade au Vatican",
        align: "right",
      },
      {
        id: "pantheon-trevi",
        label: "JOUR 3",
        title: "Panthéon & fontaine de Trevi",
        text: "Le centre baroque à pied : le Panthéon et son dôme parfait, la fontaine de Trevi où l'on jette sa pièce, la place Navone et les marches espagnoles.",
        img: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=600&h=400&fit=crop&auto=format",
        alt: "Le Panthéon de Rome et sa façade à colonnes",
        align: "left",
      },
      {
        id: "trastevere",
        label: "JOUR 4",
        title: "Trastevere : la Rome bohème",
        text: "Flânerie dans le quartier le plus pittoresque de Rome : ruelles pavées, façades ocre, basilique Santa Maria et trattorias authentiques pour une soirée typiquement romaine.",
        img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=400&fit=crop&auto=format",
        alt: "Ruelle pavée et façades colorées du quartier du Trastevere",
        align: "right",
      },
      {
        id: "villa-borghese",
        label: "JOUR 5",
        title: "Villa Borghèse & ses jardins",
        text: "Respiration verdoyante au cœur de la ville : les jardins de la Villa Borghèse, la galerie Borghèse et ses Caravage et Bernin, puis le belvédère du Pincio sur les toits de Rome.",
        img: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=600&h=400&fit=crop&auto=format",
        alt: "Les jardins de la Villa Borghèse à Rome",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "tivoli-ostie",
        label: "JOUR 6",
        title: "Excursion à Tivoli ou Ostie",
        text: "Échappée hors de Rome : les jardins et fontaines de la Villa d'Este à Tivoli, classée à l'UNESCO, ou les vestiges du port antique d'Ostie, la « Pompéi de Rome ».",
        img: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=600&h=400&fit=crop&auto=format",
        alt: "Les fontaines de la Villa d'Este à Tivoli",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le château Saint-Ange, les catacombes de la
        Via Appia, le quartier de l&apos;EUR ou une excursion vers les
        Castelli Romani peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Rome",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Rome&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Rome se visite toute l&apos;année, mais deux périodes se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : la période idéale,
                températures douces, lumière magnifique et terrasses animées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à octobre)</strong> : encore
                ensoleillé, moins de foule et une atmosphère apaisée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet-août)</strong> : chaud et touristique, mais
                idéal pour profiter des soirées en plein air.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à
              votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre à Rome&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, l&apos;Italie fait partie de l&apos;Union
              européenne et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit pour les ressortissants français.
              </li>
              <li>
                <Icon name="check" />
                Aucune <strong>formalité de visa</strong> n&apos;est requise
                pour un séjour touristique.
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
        question: <>Quels types de voyages proposez-vous à Rome&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Rome :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>City-break</strong> : escapade de 3 à 5 jours au cœur de
                la Ville éternelle.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour culturel</strong> : visites guidées, musées et
                sites antiques en accès privilégié.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné</strong> : Rome associée à Florence, Naples ou
                la côte amalfitaine.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade romantique</strong> : adresses de charme et
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
                Les <strong>visites et la durée</strong> : Colisée, Vatican,
                Panthéon, Villa Borghèse, excursions…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel central,
                palace historique, boutique-hôtel de charme.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : visites privées,
                cours de cuisine, dégustations.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Rome&nbsp;?</>,
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
                Les visites et prestations incluses
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
        question: <>Comment se déplacer dans Rome&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Rome se découvre surtout à pied</strong>, mais plusieurs
              options s&apos;offrent à vous :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>À pied</strong> : le centre historique se parcourt
                facilement, de site en site.
              </li>
              <li>
                <Icon name="check" />
                <strong>Métro et bus</strong> : pratiques pour rejoindre le
                Vatican ou les quartiers plus éloignés.
              </li>
              <li>
                <Icon name="check" />
                <strong>Transferts privés</strong> : nous organisons vos trajets
                aéroport et vos excursions en toute sérénité.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur du centre
                historique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Palaces et hôtels d&apos;exception</strong> avec vue sur
                les monuments.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de charme</strong> dans les quartiers
                authentiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de caractère</strong> proches des plus beaux
                sites.
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
        question: "Quelle est la meilleure période pour visiter Rome ?",
        answer:
          "Le printemps (avril à juin) et l'automne (septembre à octobre) sont les périodes idéales : températures douces, belle lumière et moins de foule. L'été est chaud et touristique mais agréable pour les soirées en plein air.",
      },
      {
        question: "Faut-il un visa pour se rendre à Rome ?",
        answer:
          "Non, l'Italie fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous à Rome ?",
        answer:
          "CTA Voyages propose des city-breaks, des séjours culturels, des escapades romantiques, des combinés avec Florence ou Naples et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Rome ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Rome ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les visites incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplacer dans Rome ?",
        answer:
          "Rome se découvre surtout à pied dans son centre historique. Le métro et les bus complètent les déplacements, et nous organisons vos transferts privés et excursions.",
      },
      {
        question: "Quels hébergements proposez-vous à Rome ?",
        answer:
          "Hôtels 4 et 5 étoiles au cœur du centre historique, palaces d'exception avec vue sur les monuments, boutique-hôtels de charme et adresses de caractère.",
      },
      {
        question: "Comment demander un devis pour un voyage à Rome ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Rome comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements
        engagés et un tourisme respectueux du patrimoine et de la vie des
        quartiers, pour préserver la Ville éternelle et ceux qui y vivent.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Rome commence ici",
    body: "Parlez-nous de votre projet. City-break, séjour culturel, escapade romantique ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default rome;
