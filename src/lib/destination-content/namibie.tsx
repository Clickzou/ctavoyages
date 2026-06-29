import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const namibie: DestinationContent = {
  slug: "namibie",
  meta: {
    title:
      "Voyage en Namibie : circuit, safari et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Namibie avec CTA Voyages. Dunes de Sossusvlei, désert du Namib, safari à Etosha, canyon de la Fish River, voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Dunes orangées du désert du Namib au lever du soleil — Voyage en Namibie avec CTA Voyages",
    label: "Destination Namibie",
    h1: "Voyage en Namibie : déserts immenses et safaris sauvages",
    description:
      "Circuit nature, safari animalier, autotour à travers le désert ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~14h (avec escale)",
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
      value: "Anglais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dollar namibien (NAD)",
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
    h2: "La Namibie, terre des grands espaces",
    body: (
      <>
        Joyau brut de l&apos;Afrique australe, la Namibie déploie ses paysages à
        couper le souffle dans un silence presque irréel. Des dunes orangées de{" "}
        <strong>Sossusvlei</strong>, parmi les plus hautes du monde, aux étendues
        infinies du <strong>désert du Namib</strong>, le plus ancien de la planète,
        ce pays semble taillé pour les amoureux de la nature à l&apos;état pur. Ici,
        les éléphants du désert traversent les lits asséchés du{" "}
        <strong>Damaraland</strong>, les lions et les rhinocéros se font face aux
        points d&apos;eau du <strong>parc d&apos;Etosha</strong>, et le{" "}
        <strong>canyon de la Fish River</strong>, deuxième plus grand au monde,
        défie le regard. Entre la côte battue par l&apos;Atlantique à Swakopmund,
        les villages himbas et les ciels étoilés d&apos;une pureté absolue, la
        Namibie se vit aussi bien en <strong>autotour</strong> qu&apos;en{" "}
        <strong>safari animalier</strong>, en <strong>circuit accompagné</strong>{" "}
        ou en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Namibie ?",
    cards: [
      {
        icon: "landscape",
        title: "Des déserts grandioses",
        text: "Les dunes de Sossusvlei, le Deadvlei et ses arbres pétrifiés, le désert du Namib : des décors lunaires parmi les plus spectaculaires de la planète.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes rouges et arbres pétrifiés du Deadvlei dans le désert du Namib",
      },
      {
        icon: "pets",
        title: "Des safaris d'exception",
        text: "Le parc d'Etosha et son immense pan salé concentrent lions, éléphants, rhinocéros et girafes autour des points d'eau : un safari inoubliable.",
        img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop&auto=format",
        alt: "Éléphants et zèbres autour d'un point d'eau dans le parc d'Etosha",
      },
      {
        icon: "nights_stay",
        title: "Des ciels étoilés uniques",
        text: "Loin de toute pollution lumineuse, la Namibie offre l'un des plus beaux ciels nocturnes au monde : une voûte étoilée d'une pureté absolue.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop&auto=format",
        alt: "Ciel étoilé et Voie lactée au-dessus du désert namibien",
      },
      {
        icon: "diversity_3",
        title: "Des peuples authentiques",
        text: "À la rencontre des Himbas, des San et des communautés du désert : la Namibie est aussi une terre de cultures ancestrales préservées.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop&auto=format",
        alt: "Femme himba parée de bijoux traditionnels dans le nord de la Namibie",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Namibie",
    steps: [
      {
        id: "windhoek",
        label: "JOURS 1 À 2",
        title: "Windhoek : la porte d'entrée",
        text: "Arrivée dans la capitale namibienne, mélange surprenant d'architecture coloniale allemande et de modernité africaine. Premiers préparatifs avant le grand départ vers les déserts du Sud.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop&auto=format",
        alt: "Windhoek",
        align: "left",
      },
      {
        id: "sossusvlei",
        label: "JOURS 3 À 4",
        title: "Sossusvlei : les dunes mythiques",
        text: "Cap sur le désert du Namib et ses dunes géantes. Ascension de Dune 45 au lever du soleil et marche au cœur du Deadvlei, ce lac d'argile blanc hérissé d'acacias pétrifiés vieux de plusieurs siècles.",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop&auto=format",
        alt: "Sossusvlei",
        align: "right",
      },
      {
        id: "swakopmund",
        label: "JOURS 5 À 6",
        title: "Swakopmund : entre désert et océan",
        text: "Direction la côte atlantique et son charme désuet de station balnéaire allemande. Sandboard sur les dunes, quad dans le désert ou survol en avion : Swakopmund est la capitale namibienne de l'aventure.",
        img: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?w=800&h=600&fit=crop&auto=format",
        alt: "Swakopmund",
        align: "left",
      },
      {
        id: "damaraland",
        label: "JOURS 7 À 8",
        title: "Damaraland : sur les traces des éléphants du désert",
        text: "Paysages volcaniques et grandioses du Damaraland, à la recherche des rares éléphants du désert et des rhinocéros noirs. Découverte des gravures rupestres millénaires de Twyfelfontein, classées à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&h=600&fit=crop&auto=format",
        alt: "Damaraland",
        align: "right",
      },
      {
        id: "etosha",
        label: "JOURS 9 À 11",
        title: "Etosha : le grand safari",
        text: "Trois jours de safari au cœur du parc national d'Etosha, autour de son immense pan salé. À l'affût aux points d'eau : lions, éléphants, girafes, zèbres et rhinocéros se côtoient dans un spectacle saisissant.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&auto=format",
        alt: "Etosha",
        align: "left",
      },
      {
        id: "fish-river",
        label: "JOURS 12 À 14",
        title: "Fish River Canyon : le final spectaculaire",
        text: "Descente vers le Sud et le vertigineux canyon de la Fish River, deuxième plus grand au monde. Panoramas à perte de vue, sources chaudes de l'Ai-Ais et derniers couchers de soleil flamboyants avant le retour.",
        img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&h=600&fit=crop&auto=format",
        alt: "Fish River Canyon",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le Kalahari, le Caprivi, Lüderitz et la
        ville-fantôme de Kolmanskop ou la réserve de Cape Cross et ses otaries
        peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Namibie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Namibie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Namibie se visite toute l&apos;année, mais une saison se
              distingue&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (mai à octobre)</strong> : la période idéale,
                ensoleillée et plus fraîche, parfaite pour les safaris quand les
                animaux se concentrent aux points d&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                <strong>Intersaison (avril et novembre)</strong> : températures
                agréables, paysages encore verdoyants et fréquentation plus douce.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison des pluies (décembre à mars)</strong> : chaleur,
                averses ponctuelles et désert qui reverdit, pour les amateurs de
                photographie.
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
        question: <>Faut-il un visa pour se rendre en Namibie&nbsp;?</>,
        answer: (
          <>
            <p>
              Les ressortissants français doivent disposer d&apos;une{" "}
              <strong>autorisation d&apos;entrée</strong> pour un séjour
              touristique.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                de retour, avec deux pages vierges, est exigé.
              </li>
              <li>
                <Icon name="check" />
                Les formalités d&apos;entrée évoluant régulièrement, un{" "}
                <strong>visa ou e-visa</strong> peut être requis selon la
                réglementation en vigueur.
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
        question: <>Quels types de voyages proposez-vous en Namibie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la
              Namibie&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Autotour</strong> : au volant d&apos;un 4x4 équipé, en toute
                liberté.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit accompagné</strong> : itinéraire multi-étapes avec
                guide francophone.
              </li>
              <li>
                <Icon name="check" />
                <strong>Safari animalier</strong> : focus sur Etosha et les réserves
                privées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Namibie &amp; Afrique australe</strong> : prolongé
                vers le Botswana ou les chutes Victoria.
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
              choisissez&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>étapes et la durée</strong> : Sossusvlei, Swakopmund,
                Damaraland, Etosha, Fish River…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : lodge de charme, camp
                de toile, guesthouse ou campement sous les étoiles.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : safari, survol en
                montgolfière, rencontre des Himbas, randonnée.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Namibie&nbsp;?</>,
        answer: (
          <>
            <p>Le budget dépend de plusieurs facteurs&nbsp;:</p>
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
                Le type de voyage choisi (autotour ou circuit accompagné)
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
        question: <>La Namibie est-elle une destination sûre&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui.</strong> La Namibie est l&apos;un des pays les plus
              stables et sûrs d&apos;Afrique australe&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Infrastructures fiables</strong> et réseau routier de bonne
                qualité, idéal pour l&apos;autotour.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout
                votre séjour.
              </li>
              <li>
                <Icon name="check" />
                <strong>Itinéraires éprouvés</strong> et hébergements sélectionnés
                avec soin par nos équipes.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels hébergements proposez-vous&nbsp;?</>,
        answer: (
          <>
            <p>Nous sélectionnons les hébergements selon vos préférences&nbsp;:</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Lodges de charme</strong> face aux dunes ou en bordure des
                parcs.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps de toile</strong> luxueux au cœur de la nature.
              </li>
              <li>
                <Icon name="check" />
                <strong>Guesthouses</strong> chaleureuses dans les villes et sur la
                côte.
              </li>
              <li>
                <Icon name="check" />
                <strong>Campements sous les étoiles</strong> pour une immersion
                totale dans le désert.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment demander un devis&nbsp;?</>,
        answer: (
          <>
            <p>C&apos;est simple, rapide et gratuit&nbsp;:</p>
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
        question: "Quelle est la meilleure période pour visiter la Namibie ?",
        answer:
          "La saison sèche, de mai à octobre, est la période idéale : ensoleillée et plus fraîche, parfaite pour les safaris quand les animaux se concentrent aux points d'eau. L'intersaison (avril et novembre) offre des paysages encore verdoyants et une fréquentation plus douce.",
      },
      {
        question: "Faut-il un visa pour se rendre en Namibie ?",
        answer:
          "Les ressortissants français doivent disposer d'une autorisation d'entrée pour un séjour touristique, et d'un passeport valide au moins 6 mois après la date de retour avec deux pages vierges. Nous communiquons les formalités à jour au moment de la réservation.",
      },
      {
        question: "Quels types de voyages proposez-vous en Namibie ?",
        answer:
          "CTA Voyages propose des autotours en 4x4, des circuits accompagnés avec guide francophone, des safaris animaliers, des combinés avec l'Afrique australe et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Namibie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et expériences.",
      },
      {
        question: "Combien coûte un voyage en Namibie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage (autotour ou circuit accompagné) et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La Namibie est-elle une destination sûre ?",
        answer:
          "Oui, la Namibie est l'un des pays les plus stables et sûrs d'Afrique australe, avec des infrastructures fiables et un bon réseau routier idéal pour l'autotour.",
      },
      {
        question: "Quels hébergements proposez-vous en Namibie ?",
        answer:
          "Lodges de charme face aux dunes ou en bordure des parcs, camps de toile luxueux, guesthouses chaleureuses et campements sous les étoiles.",
      },
      {
        question: "Comment demander un devis pour un voyage en Namibie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Namibie comme ailleurs, nous
        privilégions des lodges engagés dans la protection de la faune, des
        prestataires locaux responsables et un tourisme respectueux des
        communautés himbas et des écosystèmes désertiques, parmi les plus fragiles
        de la planète.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Namibie commence ici",
    body: "Parlez-nous de votre projet. Autotour, safari, circuit accompagné ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default namibie;
