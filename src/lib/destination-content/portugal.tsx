import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const portugal: DestinationContent = {
  slug: "portugal",
  meta: {
    title:
      "Voyage au Portugal : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Portugal avec CTA Voyages. Lisbonne et ses tramways, Porto et la vallée du Douro, falaises de l'Algarve, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Tramway jaune dans une ruelle pavée de Lisbonne — Voyage au Portugal avec CTA Voyages",
    label: "Destination Portugal",
    h1: "Voyage au Portugal : entre océan, azulejos et douceur de vivre",
    description:
      "Circuit culturel, séjour balnéaire, escapade œnologique ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-1h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h30 de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Portugais",
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
      value: "Avril à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Portugal, le charme atlantique de l'Europe",
    body: (
      <>
        À la pointe de l&apos;Europe, le Portugal déploie ses collines coiffées
        d&apos;azulejos, ses falaises ocre battues par l&apos;océan et ses
        vignobles en terrasses dans une lumière d&apos;une douceur incomparable.
        De l&apos;effervescence bohème de <strong>Lisbonne</strong> aux ruelles
        romantiques de <strong>Porto</strong>, des palais féériques de{" "}
        <strong>Sintra</strong> aux méandres de la{" "}
        <strong>vallée du Douro</strong>, chaque étape révèle une facette de ce
        pays où histoire maritime, gastronomie généreuse et hospitalité
        chaleureuse se conjuguent à merveille. Flâner dans les quartiers de
        l&apos;Alfama au son du fado, déguster un porto face au fleuve, longer
        les plages sauvages de l&apos;Algarve ou se perdre dans les plaines
        dorées de l&apos;Alentejo : le Portugal se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>séjour balnéaire</strong>, en{" "}
        <strong>escapade œnologique</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Portugal ?",
    cards: [
      {
        icon: "tram",
        title: "Des villes de caractère",
        text: "Lisbonne et ses tramways jaunes, Porto et ses ruelles colorées, des miradors à couper le souffle et des façades d'azulejos à chaque coin de rue.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&h=700&fit=crop&auto=format",
        alt: "Tramway jaune historique dans une rue en pente de Lisbonne",
      },
      {
        icon: "beach_access",
        title: "Des plages spectaculaires",
        text: "Falaises dorées, grottes marines et criques turquoise : l'Algarve compte parmi les plus belles côtes d'Europe, baignées de soleil.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&h=700&fit=crop&auto=format",
        alt: "Falaises dorées et plage de la côte de l'Algarve au Portugal",
      },
      {
        icon: "wine_bar",
        title: "Une gastronomie généreuse",
        text: "Pastéis de nata, poissons grillés, vins du Douro et porto millésimé : la table portugaise est un délice authentique et convivial.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=900&h=700&fit=crop&auto=format",
        alt: "Pastéis de nata, pâtisseries traditionnelles portugaises",
      },
      {
        icon: "history_edu",
        title: "Un patrimoine d'exception",
        text: "Palais de Sintra, monastères manuélins, vignobles classés à l'UNESCO : le Portugal est une plongée vivante dans l'âge d'or des grandes découvertes.",
        img: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=900&h=700&fit=crop&auto=format",
        alt: "Palais coloré de la Pena à Sintra, Portugal",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Portugal",
    steps: [
      {
        id: "lisbonne",
        label: "JOURS 1 À 3",
        title: "Lisbonne & l'Alfama : la capitale lumineuse",
        text: "Immersion dans l'âme de Lisbonne : le quartier historique de l'Alfama et ses ruelles labyrinthiques, le château São Jorge, le tramway 28, la tour de Belém et une soirée fado au cœur de la ville.",
        img: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=900&h=700&fit=crop&auto=format",
        alt: "Vue sur les toits de l'Alfama et le Tage à Lisbonne",
        align: "left",
      },
      {
        id: "sintra",
        label: "JOUR 4",
        title: "Sintra & ses palais : escapade féérique",
        text: "Excursion vers Sintra, classée à l'UNESCO : le palais multicolore de la Pena perché dans la brume, le château des Maures et les jardins romantiques de la Quinta da Regaleira.",
        img: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=900&h=700&fit=crop&auto=format",
        alt: "Palais de la Pena dans la brume à Sintra",
        align: "right",
      },
      {
        id: "porto",
        label: "JOURS 5 À 7",
        title: "Porto : la cité du fleuve",
        text: "Cap au nord vers Porto : le quartier de la Ribeira au bord du Douro, le pont Dom-Luís, la librairie Lello et la dégustation de porto dans les caves historiques de Vila Nova de Gaia.",
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&h=700&fit=crop&auto=format",
        alt: "Quartier coloré de la Ribeira au bord du Douro à Porto",
        align: "left",
      },
      {
        id: "douro",
        label: "JOUR 8",
        title: "La vallée du Douro : vignobles en terrasses",
        text: "Journée au fil du Douro, premier vignoble délimité au monde : croisière sur le fleuve, dégustation dans une quinta familiale et panoramas vertigineux sur les coteaux classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=900&h=700&fit=crop&auto=format",
        alt: "Vignobles en terrasses de la vallée du Douro au Portugal",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "algarve",
        label: "JOURS 9 À 11",
        title: "L'Algarve : falaises & plages",
        text: "Descente vers le sud et ses eaux turquoise : les falaises dorées de Lagos, les grottes marines de Benagil, les criques de la Praia da Marinha et le farniente face à l'Atlantique.",
        img: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=900&h=700&fit=crop&auto=format",
        alt: "Grotte marine de Benagil sur la côte de l'Algarve",
        align: "left",
      },
      {
        id: "evora",
        label: "JOUR 12",
        title: "Évora & l'Alentejo : sur la route du retour",
        text: "Découverte d'Évora, joyau classé à l'UNESCO, avec sa chapelle des Os et son temple romain, au cœur des plaines dorées et des vignobles de l'Alentejo, avant le retour vers Lisbonne.",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&h=700&fit=crop&auto=format",
        alt: "Temple romain d'Évora dans l'Alentejo au Portugal",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Coimbra, Aveiro, Óbidos ou l&apos;archipel de
        Madère peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Portugal",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Portugal&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Portugal se visite presque toute l&apos;année grâce à son climat
              doux, mais certaines saisons se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : douceur idéale,
                paysages fleuris et affluence modérée, parfait pour la culture et
                les villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet à septembre)</strong> : chaud et ensoleillé,
                la période reine pour les plages de l&apos;Algarve.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (octobre)</strong> : lumière dorée, vendanges
                dans le Douro et tarifs plus doux.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et la région les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Portugal&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, le Portugal fait partie de l&apos;Union
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
                Aucun <strong>visa</strong> n&apos;est requis pour un séjour
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
        question: <>Quels types de voyages proposez-vous au Portugal&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Portugal :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Lisbonne ou Porto, ou
                balnéaire en Algarve.
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
                <strong>Escapade œnologique</strong> : la vallée du Douro et ses
                quintas viticoles.
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
                Les <strong>étapes et la durée</strong> : Lisbonne, Sintra, Porto,
                le Douro, l&apos;Algarve, l&apos;Alentejo…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                quinta viticole, resort en bord de mer.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : dégustation de
                porto, soirée fado, croisière sur le Douro.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Portugal&nbsp;?</>,
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
              <strong>Pas du tout.</strong> Le Portugal est une destination très
              accessible :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>L&apos;anglais et le français</strong> sont largement
                compris dans les zones touristiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales visites.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur de Lisbonne et
                Porto.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts en bord de mer</strong> sur les plus belles plages
                de l&apos;Algarve.
              </li>
              <li>
                <Icon name="check" />
                <strong>Quintas viticoles</strong> au cœur des vignobles du Douro.
              </li>
              <li>
                <Icon name="check" />
                <strong>Pousadas et adresses de charme</strong> dans des demeures
                historiques.
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
        question: "Quelle est la meilleure période pour visiter le Portugal ?",
        answer:
          "Le Portugal se visite presque toute l'année grâce à son climat doux. Le printemps (avril à juin) et l'automne (octobre) offrent une douceur idéale pour la culture et les villes, tandis que l'été (juillet à septembre) est parfait pour les plages de l'Algarve.",
      },
      {
        question: "Faut-il un visa pour se rendre au Portugal ?",
        answer:
          "Non, le Portugal fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français, sans visa.",
      },
      {
        question: "Quels types de voyages proposez-vous au Portugal ?",
        answer:
          "CTA Voyages propose des séjours citadins ou balnéaires, des circuits culturels, des escapades œnologiques dans le Douro, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Portugal ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Portugal ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Portugal ?",
        answer:
          "Non. L'anglais et le français sont largement compris dans les zones touristiques, et nos guides francophones vous accompagnent pour les principales visites.",
      },
      {
        question: "Quels hébergements proposez-vous au Portugal ?",
        answer:
          "Hôtels 4 et 5 étoiles à Lisbonne et Porto, resorts en bord de mer en Algarve, quintas viticoles dans le Douro et pousadas de charme dans des demeures historiques.",
      },
      {
        question: "Comment demander un devis pour un voyage au Portugal ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Portugal comme ailleurs,
        nous privilégions des hébergements et prestataires locaux engagés, des
        quintas viticoles familiales et un tourisme respectueux des terroirs,
        du patrimoine et des écosystèmes côtiers.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Portugal commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, escapade œnologique ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default portugal;
