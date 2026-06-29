import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const dubai: DestinationContent = {
  slug: "dubai",
  meta: {
    title:
      "Voyage à Dubaï : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Dubaï avec CTA Voyages. Burj Khalifa, safari dans le désert, vieux Dubaï et ses souks, plages de Palm Jumeirah, excursion à Abu Dhabi. Séjour, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Skyline de Dubaï avec le Burj Khalifa au coucher du soleil — Voyage à Dubaï avec CTA Voyages",
    label: "Destination Dubaï",
    h1: "Voyage à Dubaï : démesure, désert doré et luxe oriental",
    description:
      "Séjour citadin, escapade balnéaire, aventure dans le désert ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+3h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~7h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Arabe",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dirham (AED)",
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
    h2: "Dubaï, la perle audacieuse du Golfe",
    body: (
      <>
        Surgie du désert en quelques décennies, Dubaï fascine par sa démesure et son
        art de réconcilier les contraires. Ici, la flèche vertigineuse du{" "}
        <strong>Burj Khalifa</strong>, plus haute tour du monde, domine un horizon de
        gratte-ciel futuristes, tandis qu&apos;à quelques minutes les ruelles du{" "}
        <strong>vieux Dubaï</strong> embaument l&apos;encens, l&apos;or et les épices.
        De la traversée de la crique en <strong>abra</strong> traditionnelle aux dunes
        ocre d&apos;un <strong>safari dans le désert</strong>, des plages immaculées de{" "}
        <strong>Palm Jumeirah</strong> aux centres commerciaux les plus spectaculaires
        de la planète, chaque journée mêle modernité éclatante et hospitalité
        bédouine. À une heure de route, la majestueuse{" "}
        <strong>mosquée Cheikh Zayed</strong> d&apos;Abu Dhabi rappelle la profondeur
        culturelle de la région. Destination idéale pour une escapade ensoleillée en
        plein hiver, Dubaï se vit aussi bien en <strong>séjour citadin</strong>{" "}
        qu&apos;en <strong>escapade balnéaire</strong>, en{" "}
        <strong>aventure dans le désert</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Dubaï ?",
    cards: [
      {
        icon: "apartment",
        title: "Une architecture spectaculaire",
        text: "Burj Khalifa, Burj Al Arab, Museum of the Future : Dubaï repousse sans cesse les limites de l'audace architecturale et offre des panoramas à couper le souffle.",
        img: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&h=600&fit=crop&auto=format",
        alt: "Le Burj Khalifa et les gratte-ciel de Downtown Dubaï",
      },
      {
        icon: "landscape",
        title: "Le désert à portée de main",
        text: "Dune bashing en 4x4, balade à dos de dromadaire et dîner sous les étoiles : à quelques minutes de la ville, le désert dévoile son silence et ses lumières dorées.",
        img: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes dorées du désert près de Dubaï au coucher du soleil",
      },
      {
        icon: "storefront",
        title: "Souks et traditions",
        text: "Souk de l'or, souk aux épices, traversée de la crique en abra : le vieux Dubaï préserve l'âme marchande et l'authenticité du Golfe d'autrefois.",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop&auto=format",
        alt: "Étals d'épices colorées dans un souk traditionnel de Dubaï",
      },
      {
        icon: "beach_access",
        title: "Plages et art de vivre",
        text: "Eaux chaudes du Golfe, resorts de Palm Jumeirah, brunchs raffinés et boutiques de luxe : Dubaï conjugue farniente balnéaire et plaisirs de la grande ville.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de Palm Jumeirah avec les gratte-ciel de Dubaï en arrière-plan",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Dubaï",
    steps: [
      {
        id: "downtown",
        label: "JOUR 1",
        title: "Burj Khalifa & Downtown",
        text: "Premier émerveillement au cœur de Downtown : montée au sommet du Burj Khalifa, spectacle des fontaines de Dubaï et flânerie dans le gigantesque Dubai Mall, entre boutiques de luxe et aquarium géant.",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop&auto=format",
        alt: "Le Burj Khalifa illuminé au-dessus du quartier de Downtown Dubaï",
        align: "left",
      },
      {
        id: "desert",
        label: "JOUR 2",
        title: "Safari dans le désert & dîner sous tente",
        text: "Cap sur les dunes pour une après-midi d'aventure : dune bashing en 4x4, sandboard et balade à dos de dromadaire, avant un dîner barbecue sous tente bédouine, bercé par la musique et la danse au cœur du désert.",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&auto=format",
        alt: "Caravane de dromadaires dans le désert au coucher du soleil près de Dubaï",
        align: "right",
      },
      {
        id: "vieux-dubai",
        label: "JOUR 3",
        title: "Vieux Dubaï : souks & abra",
        text: "Retour aux sources dans le quartier historique de Deira et Bur Dubai : traversée de la crique à bord d'une abra traditionnelle, exploration du souk de l'or et du souk aux épices, puis découverte du quartier d'Al Fahidi et de ses maisons à tours de vent.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop&auto=format",
        alt: "Bateaux abra traditionnels sur la crique du vieux Dubaï",
        align: "left",
      },
      {
        id: "palm-jumeirah",
        label: "JOUR 4",
        title: "Palm Jumeirah & plages",
        text: "Journée détente sur l'île artificielle de Palm Jumeirah : plages de sable fin, eaux turquoise du Golfe et vue sur l'emblématique hôtel Atlas. Pour les plus actifs, parc aquatique d'Aquaventure ou balade sur la promenade de The Pointe.",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&auto=format",
        alt: "Vue aérienne de l'île de Palm Jumeirah et de ses plages à Dubaï",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "abu-dhabi",
        label: "JOUR 5",
        title: "Excursion à Abu Dhabi",
        text: "Excursion vers la capitale des Émirats : visite de la somptueuse mosquée Cheikh Zayed, l'une des plus grandes du monde avec ses dômes de marbre blanc, puis découverte du Louvre Abu Dhabi et de sa coupole de lumière signée Jean Nouvel.",
        img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&h=600&fit=crop&auto=format",
        alt: "La grande mosquée Cheikh Zayed à Abu Dhabi, dômes de marbre blanc",
        align: "left",
      },
      {
        id: "parcs-shopping",
        label: "JOUR 6",
        title: "Parcs & shopping",
        text: "Journée loisirs et plaisirs avant le retour : parcs à thème de Dubai Parks, IMG Worlds ou ski indoor au Mall of the Emirates, puis ultime session shopping et dégustation dans l'un des restaurants panoramiques de la ville.",
        img: "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?w=800&h=600&fit=crop&auto=format",
        alt: "Galerie marchande spectaculaire d'un centre commercial de Dubaï",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme une croisière en dhow au coucher du soleil, une
        journée à Sharjah ou une escapade dans les montagnes de Hatta peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Dubaï",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Dubaï&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Dubaï se visite toute l&apos;année, mais une saison se distingue
              nettement :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hiver (novembre à mars)</strong> : la période idéale,
                ensoleillée et douce, parfaite pour le désert, les plages et la
                ville.
              </li>
              <li>
                <Icon name="check" />
                <strong>Intersaison (avril et octobre)</strong> : encore agréable,
                avec des tarifs souvent plus doux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (mai à septembre)</strong> : très chaud, mais idéal pour
                profiter des hôtels, piscines et centres climatisés à prix réduits.
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
        question: <>Faut-il un visa pour se rendre à Dubaï&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient d&apos;une
              entrée sans visa pour un séjour touristique aux Émirats arabes unis.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                d&apos;entrée est exigé.
              </li>
              <li>
                <Icon name="check" />
                L&apos;exemption couvre les <strong>séjours touristiques courts</strong>{" "}
                (jusqu&apos;à 90 jours sur une période de 180 jours).
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
        question: <>Quels types de voyages proposez-vous à Dubaï&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Dubaï :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour citadin</strong> : quelques jours pour découvrir la
                ville et ses incontournables.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade balnéaire</strong> : resort pieds dans l&apos;eau sur
                Palm Jumeirah ou Jumeirah Beach.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Dubaï &amp; Abu Dhabi</strong> : le meilleur des deux
                émirats en un seul voyage.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses d&apos;exception et
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
                Les <strong>étapes et la durée</strong> : Downtown, désert, vieux
                Dubaï, Palm Jumeirah, Abu Dhabi…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel design, resort de
                plage, palace iconique.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : safari, croisière en
                dhow, parcs à thème, gastronomie.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Dubaï&nbsp;?</>,
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
                Les activités et excursions incluses
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
              <strong>Pas du tout.</strong> À Dubaï, l&apos;anglais est partout, et
              CTA Voyages prévoit tout :
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur de Downtown et de la
                Marina.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur Palm Jumeirah et
                Jumeirah Beach.
              </li>
              <li>
                <Icon name="check" />
                <strong>Palaces iconiques</strong> pour une expérience d&apos;exception.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et hôtels design de caractère.
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
        question: "Quelle est la meilleure période pour visiter Dubaï ?",
        answer:
          "L'hiver, de novembre à mars, est la période idéale : ensoleillée et douce, parfaite pour le désert, les plages et la ville. L'été (mai à septembre) est très chaud mais offre des tarifs réduits et le confort des hôtels climatisés.",
      },
      {
        question: "Faut-il un visa pour se rendre à Dubaï ?",
        answer:
          "Non, les ressortissants français bénéficient d'une entrée sans visa pour un séjour touristique aux Émirats arabes unis. Un passeport valide au moins 6 mois après la date d'entrée est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous à Dubaï ?",
        answer:
          "CTA Voyages propose des séjours citadins, des escapades balnéaires, des combinés Dubaï et Abu Dhabi, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Dubaï ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergement, rythme et expériences.",
      },
      {
        question: "Combien coûte un voyage à Dubaï ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à Dubaï ?",
        answer:
          "Non. L'anglais est largement parlé à Dubaï, et nos guides francophones ainsi que notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous à Dubaï ?",
        answer:
          "Hôtels 4 et 5 étoiles à Downtown et à la Marina, resorts pieds dans l'eau sur Palm Jumeirah, palaces iconiques et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage à Dubaï ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Dubaï comme ailleurs, nous
        privilégions des prestataires locaux responsables, des excursions dans le
        désert respectueuses des écosystèmes fragiles et un tourisme attentif aux
        cultures et aux traditions de la région.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Dubaï commence ici",
    body: "Parlez-nous de votre projet. Séjour citadin, escapade balnéaire, aventure dans le désert ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default dubai;
