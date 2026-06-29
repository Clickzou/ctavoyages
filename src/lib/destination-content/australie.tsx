import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const australie: DestinationContent = {
  slug: "australie",
  meta: {
    title: "Voyage en Australie : circuit et sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Australie avec CTA Voyages. Sydney, Uluru, Grande Barrière de corail, Great Ocean Road. Circuit ou sur mesure, devis gratuit sous 48h.",
  },
  hero: {
    image: "/generated/australie-hero.jpg",
    imageAlt:
      "Opéra de Sydney et Harbour Bridge au coucher du soleil — Voyage en Australie avec CTA Voyages",
    label: "Destination Australie",
    h1: "Voyage en Australie : villes vibrantes, Outback et récifs",
    description:
      "Circuit grand format, autotour le long des côtes, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Un continent à explorer",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+8h à +9h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~22 à 24h (avec escale)",
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
      value: "Dollar australien (AUD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Septembre à novembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Australie, un continent-île aux mille visages",
    body: (
      <>
        Aux antipodes de l&apos;Europe, l&apos;Australie déploie sur un continent
        entier une diversité de paysages et d&apos;ambiances qui donne le vertige.
        Des voiles emblématiques de l&apos;<strong>Opéra de Sydney</strong> aux
        immensités rouges de l&apos;<strong>Outback</strong>, du monolithe sacré
        d&apos;<strong>Uluru</strong> aux jardins de corail de la{" "}
        <strong>Grande Barrière</strong>, chaque région raconte une autre histoire.
        Ici, la nature est démesurée&nbsp;: déserts à perte de vue, forêts
        tropicales humides, plages infinies battues par l&apos;océan et routes
        côtières spectaculaires comme la <strong>Great Ocean Road</strong>. Mais
        l&apos;Australie, c&apos;est aussi une <strong>faune unique au monde</strong>{" "}
        — kangourous, koalas, wombats et wallabies — et la{" "}
        <strong>culture aborigène</strong>, l&apos;une des plus anciennes de
        l&apos;humanité, vivante et profondément liée à la terre. Côté villes,
        Sydney la festive et Melbourne la branchée, avec ses cafés et son art de
        vivre, complètent le tableau. L&apos;Australie se vit aussi bien en{" "}
        <strong>circuit grand format</strong> qu&apos;en{" "}
        <strong>autotour le long des côtes</strong>, en{" "}
        <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme,
        selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Australie ?",
    cards: [
      {
        icon: "location_city",
        title: "Des villes au bord de l'eau",
        text: "Sydney et son port mythique, Melbourne et sa scène culturelle, Cairns et ses tropiques : les grandes villes australiennes mêlent modernité, plages et art de vivre décontracté.",
        img: "/generated/australie.jpg",
        alt: "Opéra de Sydney et front de mer au crépuscule",
      },
      {
        icon: "scuba_diving",
        title: "La Grande Barrière de corail",
        text: "Plus grand récif corallien du monde, classé à l'UNESCO : un sanctuaire sous-marin grandeur nature, paradis du snorkeling et de la plongée parmi les poissons multicolores et les tortues.",
        img: "/generated/australie-hero.jpg",
        alt: "Récif de corail et eaux turquoise de la Grande Barrière de corail",
      },
      {
        icon: "landscape",
        title: "L'Outback et le désert rouge",
        text: "Uluru qui s'embrase au coucher du soleil, les dômes de Kata Tjuta, les pistes infinies : le cœur rouge de l'Australie offre des paysages d'une puissance brute et spirituelle.",
        img: "/generated/australie.jpg",
        alt: "Le monolithe d'Uluru au coucher du soleil dans le désert rouge",
      },
      {
        icon: "pets",
        title: "Une faune unique au monde",
        text: "Kangourous, koalas, wombats, wallabies et oiseaux colorés : l'Australie abrite des espèces que l'on ne croise nulle part ailleurs, à observer dans leur milieu naturel.",
        img: "/generated/australie-hero.jpg",
        alt: "Kangourou dans la nature australienne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Australie",
    steps: [
      {
        id: "sydney",
        label: "JOURS 1 À 3",
        title: "Sydney : la cité du port",
        text: "Première immersion dans la plus célèbre ville d'Australie. L'Opéra et le Harbour Bridge, croisière dans la baie, quartier des Rocks et farniente à Bondi Beach, surfeurs et front de mer pour commencer le voyage en douceur.",
        img: "/generated/australie-hero.jpg",
        alt: "Sydney, l'Opéra et le Harbour Bridge",
        align: "left",
      },
      {
        id: "blue-mountains",
        label: "JOUR 4",
        title: "Blue Mountains : forêts et falaises",
        text: "Excursion à l'ouest de Sydney, dans un parc national classé à l'UNESCO. Falaises de grès, vallées tapissées d'eucalyptus à la brume bleutée, formation des Trois Sœurs et premières rencontres avec les kangourous sauvages.",
        img: "/generated/australie.jpg",
        alt: "Les Blue Mountains et la formation des Trois Sœurs",
        align: "right",
      },
      {
        id: "uluru",
        label: "JOURS 5 ET 6",
        title: "Uluru & Kata Tjuta : le cœur rouge",
        text: "Envol vers le centre rouge et le désert. Lever et coucher de soleil sur le monolithe sacré d'Uluru, marche au pied des dômes de Kata Tjuta et immersion dans la culture aborigène, gardienne millénaire de ces terres.",
        img: "/generated/australie-hero.jpg",
        alt: "Uluru et le désert rouge de l'Outback",
        align: "left",
      },
      {
        id: "cairns",
        label: "JOURS 7 À 9",
        title: "Cairns & la Grande Barrière de corail",
        text: "Cap au nord tropical. Depuis Cairns, journée en mer sur la Grande Barrière de corail : snorkeling ou plongée parmi les coraux, les poissons multicolores et les tortues. Possibilité d'escapade dans la forêt tropicale de Daintree.",
        img: "/generated/australie.jpg",
        alt: "La Grande Barrière de corail au large de Cairns",
        align: "right",
      },
      {
        id: "great-ocean-road",
        label: "JOURS 10 ET 11",
        title: "Great Ocean Road & les Douze Apôtres",
        text: "Au départ de Melbourne, l'une des plus belles routes côtières du monde. Falaises sculptées par l'océan, plages de surf, forêts d'eucalyptus et l'incontournable panorama des Douze Apôtres, ces pitons rocheux dressés dans les flots.",
        img: "/generated/australie-hero.jpg",
        alt: "Les Douze Apôtres le long de la Great Ocean Road",
        align: "left",
      },
      {
        id: "melbourne",
        label: "JOURS 12 ET 13",
        title: "Melbourne : art de vivre & faune",
        text: "Pour clôturer le voyage, la capitale culturelle de l'Australie. Ruelles couvertes de street art, cafés réputés, marchés et quartiers branchés. À deux pas, Phillip Island et sa célèbre parade des manchots au crépuscule.",
        img: "/generated/australie.jpg",
        alt: "Melbourne, ses ruelles et son art de vivre",
        align: "right",
        objectPosition: "center 40%",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Brisbane et la Gold Coast, Kangaroo Island, la
        Tasmanie, Perth ou les Whitsundays peuvent facilement s&apos;intégrer à
        votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Australie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Australie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Les saisons sont inversées par rapport à l&apos;Europe et le pays est
              immense&nbsp;: plusieurs périodes se prêtent au voyage selon les
              régions.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps austral (septembre à novembre)</strong> : la
                période la plus polyvalente, climat doux sur l&apos;ensemble du
                pays.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été austral (décembre à février)</strong> : idéal pour le
                sud (Sydney, Melbourne) mais chaud et humide dans le nord tropical.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (mai à octobre)</strong> : la meilleure
                période pour le nord, le centre rouge et la Grande Barrière de
                corail.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et l&apos;itinéraire les
              plus adaptés à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Australie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, une autorisation électronique est obligatoire
              pour les ressortissants français&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                L&apos;<strong>eVisitor (sous-classe 651)</strong>, gratuit, ou
                l&apos;<strong>ETA</strong> selon les cas, doit être obtenu avant le
                départ.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> pour toute la durée du séjour
                est exigé.
              </li>
              <li>
                <Icon name="check" />
                Ces autorisations permettent généralement des séjours touristiques
                jusqu&apos;à 3&nbsp;mois.
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
        question: <>Quels types de voyages proposez-vous en Australie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour
              l&apos;Australie&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Autotour</strong> : road-trip en liberté le long des côtes
                ou de la Great Ocean Road.
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
                <strong>Séjour nature & plongée</strong> : Outback, parcs nationaux
                et Grande Barrière de corail.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et expériences
                d&apos;exception.
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
                Les <strong>étapes et la durée</strong> : Sydney, Uluru, Cairns,
                Great Ocean Road, Melbourne…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, lodge dans le
                désert, resort en bord de mer ou camping-car.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : plongée sur le
                récif, survol d&apos;Uluru, rencontre aborigène.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Australie&nbsp;?</>,
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
                Le type de voyage choisi
              </li>
              <li>
                <Icon name="check" />
                Les vols intérieurs, activités et prestations incluses
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
        question: <>Combien de temps faut-il pour visiter l&apos;Australie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Le pays est un continent</strong> : mieux vaut prévoir du
              temps pour profiter des distances&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>2 semaines</strong> pour un premier aperçu (Sydney, le
                centre rouge et le récif).
              </li>
              <li>
                <Icon name="check" />
                <strong>3 semaines ou plus</strong> pour combiner côte est,
                Outback et sud.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>vols intérieurs</strong> sont indispensables pour
                relier les grandes étapes.
              </li>
            </ul>
            <p>
              Nous organisons l&apos;ensemble de votre logistique sur place pour un
              voyage serein.
            </p>
          </>
        ),
      },
      {
        question: <>Comment se déplace-t-on en Australie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Vols intérieurs et voiture</strong> se combinent pour profiter
              du pays&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Vols domestiques</strong> pour franchir les grandes
                distances entre régions.
              </li>
              <li>
                <Icon name="check" />
                <strong>Location de voiture ou camping-car</strong> pour les routes
                côtières et les parcs.
              </li>
              <li>
                <Icon name="check" />
                <strong>Conduite à gauche</strong> : un permis international est
                recommandé.
              </li>
            </ul>
            <p>
              Nous organisons l&apos;ensemble de votre logistique sur place pour un
              voyage serein.
            </p>
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
              Nos conseillers vous répondent <strong>sous 48h</strong>, gratuitement
              et sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter l'Australie ?",
        answer:
          "Le printemps austral (septembre à novembre) est la période la plus polyvalente, avec un climat doux sur l'ensemble du pays. L'été (décembre à février) convient au sud, tandis que la saison sèche (mai à octobre) est idéale pour le nord, le centre rouge et la Grande Barrière de corail.",
      },
      {
        question: "Faut-il un visa pour se rendre en Australie ?",
        answer:
          "Oui, une autorisation électronique (eVisitor sous-classe 651, gratuit, ou ETA) est obligatoire pour les ressortissants français et doit être obtenue avant le départ. Un passeport valide pour toute la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Australie ?",
        answer:
          "CTA Voyages propose des autotours le long des côtes, des circuits multi-étapes, des séjours nature et plongée, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Australie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Australie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les vols intérieurs, activités et prestations incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Combien de temps faut-il pour visiter l'Australie ?",
        answer:
          "Comptez environ 2 semaines pour un premier aperçu (Sydney, centre rouge et récif) et 3 semaines ou plus pour combiner la côte est, l'Outback et le sud. Des vols intérieurs sont indispensables pour relier les grandes étapes.",
      },
      {
        question: "Comment se déplace-t-on en Australie ?",
        answer:
          "Vols intérieurs et voiture se combinent : vols domestiques pour les grandes distances, location de voiture ou camping-car pour les routes côtières et les parcs. La conduite se fait à gauche et un permis international est recommandé.",
      },
      {
        question: "Comment demander un devis pour un voyage en Australie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Australie comme ailleurs,
        nous privilégions des prestataires locaux engagés, le respect des sites
        naturels protégés, des parcs nationaux et de la Grande Barrière de corail,
        ainsi qu&apos;une découverte authentique et respectueuse de la culture
        aborigène, gardienne millénaire de ces terres.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Australie commence ici",
    body: "Parlez-nous de votre projet. Autotour côtier, circuit grand format, séjour nature ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default australie;
