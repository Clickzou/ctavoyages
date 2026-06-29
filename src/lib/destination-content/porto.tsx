import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const porto: DestinationContent = {
  slug: "porto",
  meta: {
    title:
      "Voyage à Porto : séjour, circuit et city-break sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Porto avec CTA Voyages. Ribeira et pont Dom-Luís, caves de Porto à Vila Nova de Gaia, croisière sur le Douro, city-break ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Vue sur la Ribeira et le pont Dom-Luís au-dessus du Douro — Voyage à Porto avec CTA Voyages",
    label: "Destination Porto",
    h1: "Voyage à Porto : la perle du Douro",
    description:
      "City-break culturel, escapade gourmande, séjour œnologique ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
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
      value: "~2h de vol",
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
    h2: "Porto, la perle du nord du Portugal",
    body: (
      <>
        Accrochée aux rives escarpées du <strong>Douro</strong>, Porto déploie ses
        ruelles pavées, ses façades d&apos;azulejos et ses toits de tuiles dans une
        lumière dorée incomparable. De l&apos;effervescence colorée du quartier de la{" "}
        <strong>Ribeira</strong>, classé au patrimoine mondial de l&apos;UNESCO, aux
        chais centenaires des <strong>caves de Porto</strong> à Vila Nova de Gaia,
        chaque ruelle raconte une histoire de marins, de commerçants et de vignerons.
        Flâner sous les arches du <strong>pont Dom-Luís</strong>, se perdre dans la
        magie de la <strong>Livraria Lello</strong>, déguster un verre de porto face
        au fleuve, naviguer entre les vignobles en terrasses de la vallée du Douro ou
        s&apos;attabler devant une francesinha généreuse : Porto se vit aussi bien en{" "}
        <strong>city-break culturel</strong> qu&apos;en{" "}
        <strong>escapade gourmande</strong>, en <strong>séjour œnologique</strong> ou
        en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme,
        selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Porto ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine d'exception",
        text: "Ribeira classée à l'UNESCO, gare São Bento et ses azulejos, Livraria Lello : Porto est un musée à ciel ouvert où chaque façade raconte une histoire.",
        img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop&auto=format",
        alt: "Façades colorées et azulejos de la Ribeira à Porto",
      },
      {
        icon: "wine_bar",
        title: "Le vin de Porto",
        text: "Les chais centenaires de Vila Nova de Gaia se visitent et se dégustent : Tawny, Ruby ou Vintage, le porto est une institution à savourer face au fleuve.",
        img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop&auto=format",
        alt: "Verres de vin de Porto dans une cave de Vila Nova de Gaia",
      },
      {
        icon: "ramen_dining",
        title: "Une gastronomie généreuse",
        text: "Francesinha, bacalhau, pastéis de nata et fruits de mer : la cuisine portuense est conviviale, savoureuse et étonnamment abordable.",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&auto=format",
        alt: "Pastéis de nata dorés, pâtisserie typique du Portugal",
      },
      {
        icon: "sailing",
        title: "La vallée du Douro",
        text: "À quelques kilomètres, les vignobles en terrasses de la vallée du Douro, classés à l'UNESCO, offrent croisières et dégustations dans des paysages à couper le souffle.",
        img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop&auto=format",
        alt: "Vignobles en terrasses de la vallée du Douro au Portugal",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Porto",
    steps: [
      {
        id: "ribeira",
        label: "JOUR 1",
        title: "Ribeira & pont Dom-Luís",
        text: "Premiers pas dans le cœur historique : flânerie dans les ruelles colorées de la Ribeira, classée à l'UNESCO, puis traversée du majestueux pont Dom-Luís pour un panorama inoubliable sur la ville et le Douro.",
        img: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=800&h=600&fit=crop&auto=format",
        alt: "Le pont Dom-Luís et le quartier de la Ribeira à Porto",
        align: "left",
      },
      {
        id: "caves-gaia",
        label: "JOUR 2",
        title: "Les caves de Porto à Vila Nova de Gaia",
        text: "Sur l'autre rive du fleuve, visite des chais centenaires de Vila Nova de Gaia. Découverte des secrets du vin de Porto et dégustation commentée de Tawny, Ruby et Vintage, face aux barcos rabelos amarrés.",
        img: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop&auto=format",
        alt: "Caves de vin de Porto à Vila Nova de Gaia",
        align: "right",
      },
      {
        id: "lello-centre",
        label: "JOUR 3",
        title: "Livraria Lello & centre historique",
        text: "Émerveillement devant la Livraria Lello, l'une des plus belles librairies du monde, puis découverte de la gare São Bento, de la tour des Clérigos et des azulejos de l'église do Carmo.",
        img: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?w=800&h=600&fit=crop&auto=format",
        alt: "Escalier de la Livraria Lello à Porto",
        align: "left",
      },
      {
        id: "croisiere-douro",
        label: "JOUR 4",
        title: "Croisière sur le Douro",
        text: "Embarquement pour une croisière sur le Douro : passage sous les six ponts de la ville puis remontée vers la vallée viticole, entre vignobles en terrasses, quintas et villages perchés classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=800&h=600&fit=crop&auto=format",
        alt: "Croisière sur le Douro entre les vignobles en terrasses",
        align: "right",
        objectPosition: "center 60%",
      },
      {
        id: "foz-ocean",
        label: "JOUR 5",
        title: "Foz & l'océan Atlantique",
        text: "Cap vers l'embouchure du Douro : balade le long de la Foz, ses villas et son phare, face à l'océan Atlantique. Détente sur les terrasses en bord de mer et coucher de soleil sur l'Atlantique.",
        img: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=800&h=600&fit=crop&auto=format",
        alt: "Bord de mer de la Foz do Douro à Porto au coucher du soleil",
        align: "left",
      },
      {
        id: "guimaraes-braga",
        label: "JOUR 6",
        title: "Excursion à Guimarães ou Braga",
        text: "Excursion vers le berceau du Portugal : Guimarães et son château médiéval classé à l'UNESCO, ou Braga la religieuse et son sanctuaire baroque du Bom Jesus do Monte, ses escaliers monumentaux et ses jardins.",
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop&auto=format",
        alt: "Centre historique médiéval de Guimarães au Portugal",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Aveiro, la « Venise portugaise », Coimbra et son
        université historique ou un séjour prolongé dans la vallée du Douro peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Porto",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Porto&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Porto se visite toute l&apos;année, mais certaines saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : la période idéale, douce
                et fleurie, parfaite pour flâner et découvrir la ville.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet à septembre)</strong> : ensoleillé et animé,
                idéal pour la Foz, l&apos;océan et les terrasses.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (octobre)</strong> : saison des vendanges dans le
                Douro, lumières dorées et affluence plus douce.
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
        question: <>Faut-il un visa pour se rendre à Porto&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, le Portugal fait partie de l&apos;Union européenne
              et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité</strong> ou un{" "}
                <strong>passeport en cours de validité</strong> suffit pour les
                ressortissants français.
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
        question: <>Quels types de voyages proposez-vous à Porto&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Porto :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>City-break</strong> : un week-end ou quelques jours au cœur de
                la ville.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : Porto combinée au Douro, à Lisbonne ou au
                nord du Portugal.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade œnologique</strong> : caves, dégustations et croisière
                dans la vallée du Douro.
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
                Les <strong>étapes et la durée</strong> : Porto, vallée du Douro,
                Guimarães, Braga, Aveiro…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, quinta
                viticole, boutique-hôtel face au fleuve.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : croisière, dégustations,
                cours de cuisine, visites guidées.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Porto&nbsp;?</>,
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur du centre historique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de charme</strong> face au Douro ou dans la
                Ribeira.
              </li>
              <li>
                <Icon name="check" />
                <strong>Quintas viticoles</strong> au cœur des vignobles de la vallée
                du Douro.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de caractère</strong> alliant authenticité et
                confort.
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
        question: "Quelle est la meilleure période pour visiter Porto ?",
        answer:
          "Le printemps (avril à juin) est la période idéale : douce et fleurie, parfaite pour flâner. L'été est ensoleillé et animé, idéal pour la Foz et l'océan, tandis que l'automne offre la saison des vendanges dans le Douro et une affluence plus douce.",
      },
      {
        question: "Faut-il un visa pour se rendre à Porto ?",
        answer:
          "Non, le Portugal fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français, sans formalité de visa.",
      },
      {
        question: "Quels types de voyages proposez-vous à Porto ?",
        answer:
          "CTA Voyages propose des city-breaks, des circuits combinant Porto et le Douro ou Lisbonne, des escapades œnologiques, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Porto ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget, du choix des étapes à celui des hébergements.",
      },
      {
        question: "Combien coûte un voyage à Porto ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à Porto ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous à Porto ?",
        answer:
          "Hôtels 4 et 5 étoiles au cœur du centre historique, boutique-hôtels de charme face au Douro, quintas viticoles dans la vallée du Douro et adresses de caractère.",
      },
      {
        question: "Comment demander un devis pour un voyage à Porto ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Porto comme ailleurs, nous
        privilégions des prestataires locaux responsables, des quintas familiales
        engagées dans une viticulture durable et un tourisme respectueux du
        patrimoine et des habitants.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Porto commence ici",
    body: "Parlez-nous de votre projet. City-break, circuit, escapade œnologique ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default porto;
