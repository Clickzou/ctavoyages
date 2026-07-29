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

const tunisie: DestinationContent = {
  slug: "tunisie",
  meta: {
    title:
      "Voyage en Tunisie : séjour, circuit",
    description:
      "Organisez votre voyage en Tunisie avec CTA Voyages. Carthage et Sidi Bou Saïd, médina de Tunis, amphithéâtre d'El Jem, Kairouan, oasis de Tozeur, Sahara et plages de Djerba. Circuit, thalasso ou voyage sur mesure. Devis gratuit, contact sous 48h.",
  },
  hero: {
    image: "/generated/tunisie.jpg",
    imageAlt:
      "Ruelle bleue et blanche de Sidi Bou Saïd en Tunisie — Voyage en Tunisie avec CTA Voyages",
    label: "Destination Tunisie",
    h1: "Voyage en Tunisie : Méditerranée, médinas et Sahara",
    description:
      "Circuit antique, escapade dans le désert, séjour balnéaire et thalasso ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h30 (direct)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-1h (été)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Arabe, français",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dinar tunisien (TND)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril-juin / sept.-octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Tunisie, trois mille ans d'histoire au bord de la Méditerranée",
    body: (
      <>
        À deux heures et demie de vol seulement, la Tunisie condense une
        étonnante variété de paysages et d&apos;époques. Sur la côte, les
        vestiges de <strong>Carthage</strong>, rivale de Rome, dominent le golfe
        de Tunis, et le village de <strong>Sidi Bou Saïd</strong> décline le bleu
        et le blanc au-dessus de la mer. La <strong>médina de Tunis</strong>,
        classée à l&apos;UNESCO, se perd en souks et en palais&nbsp;; plus au
        sud, l&apos;amphithéâtre romain d&apos;<strong>El Jem</strong>, presque
        intact, pouvait accueillir trente-cinq mille spectateurs, et{" "}
        <strong>Kairouan</strong>, ville sainte, abrite l&apos;une des plus
        anciennes grandes mosquées du monde musulman. Puis vient le{" "}
        <strong>Sahara</strong>&nbsp;: les oasis de montagne de{" "}
        <strong>Chebika</strong> et Tamerza, les palmeraies de{" "}
        <strong>Tozeur</strong>, l&apos;immense lac salé du{" "}
        <strong>Chott el-Jérid</strong> et les décors de cinéma laissés dans le
        désert. Enfin, <strong>Djerba</strong> et <strong>Hammamet</strong>{" "}
        offrent plages, thalassothérapie et douceur de vivre.{" "}
        <strong>Circuit culturel</strong>, <strong>séjour balnéaire</strong>,{" "}
        <strong>aventure saharienne</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: tout se combine aisément.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Tunisie ?",
    cards: [
      {
        icon: "account_balance",
        title: "L'héritage antique",
        text: "Carthage, Dougga, El Jem : la Tunisie possède certains des sites romains les mieux conservés du bassin méditerranéen, souvent sans la foule.",
        img: "/generated/tunisie-2.jpg",
        alt: "Colonnes et vestiges romains d'un site antique tunisien",
      },
      {
        icon: "mosque",
        title: "Les médinas & les souks",
        text: "Tunis, Sousse, Kairouan : ruelles voûtées, ateliers d'artisans, portes cloutées et thé à la menthe dans les patios ombragés.",
        img: "/generated/tunisie-4.jpg",
        alt: "Ruelle voûtée et échoppes d'une médina tunisienne",
      },
      {
        icon: "landscape",
        title: "Le désert et ses oasis",
        text: "Dunes du Grand Erg oriental, oasis de montagne, chott salé miroitant et villages troglodytes : le Sud tunisien est un dépaysement total.",
        img: "/generated/tunisie-1.jpg",
        alt: "Dunes du Sahara tunisien et palmeraie d'oasis",
      },
      {
        icon: "spa",
        title: "Plages & thalassothérapie",
        text: "Djerba, Hammamet et Monastir concentrent des centres de thalasso réputés, à quelques pas de longues plages de sable fin.",
        img: "/generated/tunisie-3.jpg",
        alt: "Plage de sable fin et mer Méditerranée en Tunisie",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Tunisie",
    steps: [
      {
        id: "tunis-carthage",
        label: "JOURS 1 ET 2",
        title: "Tunis, Carthage & Sidi Bou Saïd",
        text: "Arrivée dans la capitale : médina classée à l'UNESCO, musée du Bardo et ses mosaïques, site antique de Carthage puis coucher de soleil à Sidi Bou Saïd.",
        img: "/generated/tunisie.jpg",
        alt: "Village bleu et blanc de Sidi Bou Saïd surplombant la mer",
        align: "left",
      },
      {
        id: "dougga-kairouan",
        label: "JOURS 3 ET 4",
        title: "Dougga & Kairouan la sainte",
        text: "Route vers l'intérieur : la cité romaine de Dougga, remarquablement conservée, puis Kairouan, sa Grande Mosquée et ses ateliers de tapis.",
        img: "/generated/tunisie-2.jpg",
        alt: "Site archéologique romain de Dougga en Tunisie",
        align: "right",
      },
      {
        id: "el-jem-tozeur",
        label: "JOURS 5 ET 6",
        title: "El Jem & les oasis de Tozeur",
        text: "Visite du colossal amphithéâtre d'El Jem, puis descente vers le Sud : palmeraie de Tozeur, oasis de montagne de Chebika et Tamerza, canyon de Mides.",
        img: "/generated/tunisie-1.jpg",
        alt: "Oasis de montagne et palmeraie du sud tunisien",
        align: "left",
      },
      {
        id: "sahara",
        label: "JOUR 7",
        title: "Chott el-Jérid & Sahara",
        text: "Traversée du grand lac salé aux mirages, puis nuit sous tente au bord des dunes, dîner berbère autour du feu et lever de soleil sur l'erg.",
        img: "/generated/tunisie-1.jpg",
        alt: "Dunes de sable et campement dans le Sahara tunisien",
        align: "right",
      },
      {
        id: "djerba",
        label: "JOURS 8 À 10",
        title: "Matmata & l'île de Djerba",
        text: "Villages troglodytes de Matmata, ksour berbères de Tataouine, puis fin du voyage à Djerba : plages, souk de Houmt Souk et soins en thalassothérapie.",
        img: "/generated/tunisie-3.jpg",
        alt: "Plage et bord de mer sur l'île de Djerba",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le circuit se raccourcit facilement en séjour balnéaire avec excursions,
        ou s&apos;étend vers Sousse, Monastir et le Cap Bon.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Tunisie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Tunisie&nbsp;?</>
        ),
        answer: (
          <>
            <p>Cela dépend beaucoup de votre programme&nbsp;:</p>
            {checklist([
              <>
                <strong>D&apos;avril à juin et de septembre à octobre</strong>
                &nbsp;: l&apos;idéal pour un circuit, avec des températures
                douces au nord comme au sud.
              </>,
              <>
                <strong>De juillet à août</strong>&nbsp;: parfait pour la plage,
                mais trop chaud pour le désert et les sites archéologiques.
              </>,
              <>
                <strong>De novembre à mars</strong>&nbsp;: la meilleure saison
                pour le Sahara, avec des journées douces et des nuits fraîches.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour la Tunisie&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont minimales&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique de moins de 90 jours.
              </>,
              <>
                <strong>Passeport en cours de validité</strong>&nbsp;; la carte
                d&apos;identité est acceptée dans le cadre d&apos;un voyage
                organisé.
              </>,
              <>
                Aucun <strong>vaccin obligatoire</strong>&nbsp;; le dinar ne
                s&apos;exporte pas, le change se fait sur place.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Tunisie", [
        <>
          <strong>Circuit antique & médinas</strong>&nbsp;: Carthage, Dougga, El
          Jem et Kairouan.
        </>,
        <>
          <strong>Aventure saharienne</strong>&nbsp;: oasis, chott, dunes et nuit
          sous tente.
        </>,
        <>
          <strong>Séjour balnéaire</strong>&nbsp;: Djerba, Hammamet ou Sousse en
          hôtel-club.
        </>,
        <>
          <strong>Séjour thalasso</strong>&nbsp;: cures et soins dans les centres
          réputés du littoral.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Le <strong>dosage</strong>&nbsp;: part de circuit culturel et part de
          détente en bord de mer.
        </>,
        <>
          Le <strong>mode de circuit</strong>&nbsp;: véhicule privatif avec
          chauffeur-guide ou petit groupe.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: nuit dans le désert, hammam
          traditionnel, atelier de poterie, dîner berbère.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Tunisie",
        "La formule choisie : hôtel-club en formule tout compris ou circuit privatif",
      ),
      {
        question: <>La Tunisie est-elle adaptée aux familles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est une destination familiale très pratique.</strong>
            </p>
            {checklist([
              <>
                Un <strong>vol court</strong> de 2h30 et une heure de décalage
                seulement.
              </>,
              <>
                De nombreux <strong>hôtels-clubs</strong> avec animations,
                piscines et clubs enfants.
              </>,
              <>
                Le <strong>français largement parlé</strong>, ce qui simplifie
                tous les échanges.
              </>,
              <>
                Des <strong>excursions courtes</strong> depuis les stations
                balnéaires, adaptées au rythme des enfants.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("en Tunisie", [
        <>
          <strong>Hôtels-clubs</strong> en bord de mer à Djerba, Hammamet et
          Sousse.
        </>,
        <>
          <strong>Dar et riads</strong> restaurés dans les médinas de Tunis et
          Sousse.
        </>,
        <>
          <strong>Campements sahariens</strong> au bord des dunes.
        </>,
        <>
          <strong>Hôtels de charme</strong> dans les palmeraies de Tozeur et de
          Douz.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Tunisie ?",
        answer:
          "D'avril à juin et de septembre à octobre pour un circuit, avec des températures douces. De juillet à août pour la plage, mais il fait alors trop chaud pour le désert et les sites archéologiques. De novembre à mars, c'est la meilleure saison pour le Sahara.",
      },
      {
        question: "Faut-il un visa pour la Tunisie ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique de moins de 90 jours. Un passeport en cours de validité suffit, la carte d'identité étant acceptée dans le cadre d'un voyage organisé.",
      },
      {
        question: "La Tunisie est-elle adaptée aux familles ?",
        answer:
          "Oui, c'est une destination familiale très pratique : vol court de 2h30, une heure de décalage, nombreux hôtels-clubs avec animations et clubs enfants, français largement parlé et excursions courtes depuis les stations balnéaires.",
      },
      {
        question: "Combien coûte un voyage en Tunisie ?",
        answer:
          "Le budget dépend de la durée, de la saison, de la formule choisie (hôtel-club tout compris ou circuit privatif), du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "en Tunisie",
        "des circuits antiques et médinas, des aventures sahariennes, des séjours balnéaires en hôtel-club, des séjours thalasso et des voyages entièrement sur mesure.",
        "Hôtels-clubs en bord de mer à Djerba, Hammamet et Sousse, dar et riads restaurés dans les médinas, campements sahariens au bord des dunes et hôtels de charme dans les palmeraies.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Tunisie, nous
        privilégions les maisons d&apos;hôtes familiales dans les médinas, les
        campements sahariens gérés par des familles du Sud et les guides
        tunisiens francophones, afin que les retombées du voyage bénéficient
        directement aux territoires visités.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Tunisie commence ici",
    body: "Parlez-nous de votre projet. Circuit antique, nuit dans le Sahara, séjour balnéaire et thalasso ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default tunisie;
