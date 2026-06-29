import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const tanzanie: DestinationContent = {
  slug: "tanzanie",
  meta: {
    title:
      "Voyage en Tanzanie : safari, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Tanzanie avec CTA Voyages. Safari dans le Serengeti, cratère du Ngorongoro, grande migration, plages de Zanzibar, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Troupeau d'éléphants dans la savane au coucher du soleil — Voyage en Tanzanie avec CTA Voyages",
    label: "Destination Tanzanie",
    h1: "Voyage en Tanzanie : safaris mythiques et plages de Zanzibar",
    description:
      "Safari dans les grands parcs, observation de la grande migration, ascension du Kilimandjaro ou farniente à Zanzibar. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~9h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+2h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Swahili",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Shilling (TZS)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Tanzanie, le berceau du safari africain",
    body: (
      <>
        Terre de tous les superlatifs, la Tanzanie incarne l&apos;Afrique des grands
        espaces et des émotions brutes. Ici s&apos;étendent les plaines infinies du{" "}
        <strong>Serengeti</strong>, théâtre de la légendaire{" "}
        <strong>grande migration</strong>, et le <strong>cratère du Ngorongoro</strong>,
        immense caldeira où se concentre une faune d&apos;une densité unique au monde.
        Du sommet enneigé du <strong>Kilimandjaro</strong>, plus haute cime
        d&apos;Afrique, aux eaux turquoise de <strong>Zanzibar</strong>, l&apos;île aux
        épices, la Tanzanie déploie une palette de paysages à couper le souffle. Croiser
        les Big Five au petit matin, partager un instant avec les bergers massaïs,
        observer des milliers de gnous franchir une rivière, puis se laisser bercer par
        l&apos;océan Indien sur une plage de sable blanc : la Tanzanie se vit aussi bien
        en <strong>safari</strong> qu&apos;en <strong>séjour balnéaire</strong>, en{" "}
        <strong>ascension du Kilimandjaro</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon vos
        envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Tanzanie ?",
    cards: [
      {
        icon: "pets",
        title: "Des safaris d'exception",
        text: "Serengeti, Ngorongoro, Tarangire : la Tanzanie offre certains des plus beaux safaris au monde, avec les Big Five et une faune d'une richesse incomparable.",
        img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&h=600&fit=crop&auto=format",
        alt: "Lion observant la savane dans le Serengeti, Tanzanie",
      },
      {
        icon: "savings",
        title: "La grande migration",
        text: "Chaque année, près de deux millions de gnous et de zèbres traversent le Serengeti : un des plus grands spectacles naturels de la planète.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&h=600&fit=crop&auto=format",
        alt: "Troupeau de gnous lors de la grande migration dans le Serengeti",
      },
      {
        icon: "beach_access",
        title: "Les plages de Zanzibar",
        text: "Sable blanc, lagons turquoise et culture swahilie : Zanzibar prolonge le safari par une parenthèse balnéaire idyllique au cœur de l'océan Indien.",
        img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc et boutre traditionnel à Zanzibar",
      },
      {
        icon: "diversity_3",
        title: "La culture massaï",
        text: "Rencontre authentique avec le peuple massaï, gardien des traditions ancestrales et figure emblématique des grands espaces tanzaniens.",
        img: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=800&h=600&fit=crop&auto=format",
        alt: "Guerriers massaïs en tenue traditionnelle dans la savane",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Tanzanie",
    steps: [
      {
        id: "arusha",
        label: "JOUR 1",
        title: "Arusha : la porte des safaris",
        text: "Arrivée à Arusha, capitale du safari nichée au pied du mont Meru. Première nuit reposante dans un lodge de charme avant le grand départ vers les parcs du Nord.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop&auto=format",
        alt: "Arusha",
        align: "left",
      },
      {
        id: "tarangire",
        label: "JOUR 2",
        title: "Le parc de Tarangire",
        text: "Cap sur Tarangire, célèbre pour ses immenses baobabs et ses troupeaux d'éléphants. Le long de la rivière, la faune se rassemble pour un premier safari inoubliable.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop&auto=format",
        alt: "Tarangire",
        align: "right",
      },
      {
        id: "ngorongoro",
        label: "JOURS 3 À 4",
        title: "Le cratère du Ngorongoro",
        text: "Descente dans le légendaire cratère du Ngorongoro, immense caldeira classée à l'UNESCO. Dans ce paradis préservé se concentre une faune extraordinaire, dont le rare rhinocéros noir.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Ngorongoro",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "serengeti",
        label: "JOURS 5 À 7",
        title: "Le Serengeti & la grande migration",
        text: "Immersion totale dans les plaines mythiques du Serengeti. Au gré des saisons, vous suivez la grande migration des gnous et des zèbres, sous l'œil des lions et des guépards.",
        img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop&auto=format",
        alt: "Serengeti",
        align: "right",
      },
      {
        id: "lac-manyara",
        label: "JOUR 8",
        title: "Le lac Manyara",
        text: "Sur la route du retour, le parc du lac Manyara surprend par sa diversité : forêt luxuriante, lions grimpeurs et nuées de flamants roses sur les rives du lac.",
        img: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&h=600&fit=crop&auto=format",
        alt: "Lac Manyara",
        align: "left",
      },
      {
        id: "zanzibar",
        label: "JOURS 9 À 12",
        title: "Zanzibar : final balnéaire",
        text: "Envol vers Zanzibar pour clôturer le voyage en beauté : ruelles parfumées de Stone Town, plages de sable blanc, lagons turquoise et farniente face à l'océan Indien.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Zanzibar",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages adaptera
        chaque étape selon vos envies, votre rythme et votre budget. D&apos;autres étapes
        comme le parc de Selous, le lac Natron, l&apos;ascension du Kilimandjaro ou les
        îles de Pemba et Mafia peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Tanzanie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Tanzanie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Tanzanie se visite toute l&apos;année, mais les conditions varient selon
              les saisons :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (juin à octobre)</strong> : la période idéale pour
                le safari, la faune se concentre autour des points d&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                <strong>Grande migration (variable)</strong> : les traversées de rivière
                ont lieu de juillet à septembre dans le nord du Serengeti.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison verte (novembre à mai)</strong> : paysages luxuriants,
                naissances et tarifs plus doux, ponctués d&apos;averses.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à votre projet
              et aux animaux que vous souhaitez observer.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Tanzanie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa est obligatoire pour les ressortissants
              français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Il s&apos;obtient facilement en ligne (<strong>e-visa</strong>) avant le
                départ, ou à l&apos;arrivée dans les aéroports.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date de
                retour est exigé.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour, y compris les recommandations
              sanitaires, au moment de votre réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous en Tanzanie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Tanzanie :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Safari</strong> : circuit dans les grands parcs du Nord ou du
                Sud, en lodge ou en camp de toile.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné safari &amp; plage</strong> : les parcs puis les plages de
                Zanzibar.
              </li>
              <li>
                <Icon name="check" />
                <strong>Ascension du Kilimandjaro</strong> : trek encadré jusqu&apos;au
                toit de l&apos;Afrique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas selon
                vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : safari privatif et adresses de charme à
                Zanzibar.
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
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>parcs et la durée</strong> : Serengeti, Ngorongoro, Tarangire,
                Manyara, Selous…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : lodge de luxe, camp de toile
                ou resort pieds dans l&apos;eau à Zanzibar.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : safari en montgolfière,
                rencontre massaï, plongée.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Tanzanie&nbsp;?</>,
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
                La période de départ et la saison de migration
              </li>
              <li>
                <Icon name="check" />
                Le niveau d&apos;hébergement souhaité
              </li>
              <li>
                <Icon name="check" />
                Le nombre de parcs visités
              </li>
              <li>
                <Icon name="check" />
                Les activités et prestations incluses
              </li>
            </ul>
            <p>
              Pour obtenir une estimation,{" "}
              <a href="/demande-devis">contactez-nous</a>. Nos conseillers vous adressent
              une proposition personnalisée, gratuite et sans engagement.
            </p>
          </>
        ),
      },
      {
        question: <>Le safari est-il adapté aux familles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui, tout à fait.</strong> Nous adaptons chaque voyage :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Lodges familiaux</strong> et véhicules 4x4 privatifs confortables.
              </li>
              <li>
                <Icon name="check" />
                <strong>Rythme aménagé</strong> avec des étapes plus courtes pour les
                enfants.
              </li>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pédagogues et passionnés de faune.
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
                <strong>Lodges de safari</strong> au cœur ou aux portes des parcs.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps de toile</strong> au plus près de la faune, pour une
                expérience immersive.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plus belles plages
                de Zanzibar.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de caractère.
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
              Nos conseillers vous répondent <strong>sous 48h</strong>, gratuitement et
              sans engagement.
            </p>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Tanzanie ?",
        answer:
          "La saison sèche, de juin à octobre, est la période idéale pour le safari : la faune se concentre autour des points d'eau. Les traversées de rivière de la grande migration ont lieu de juillet à septembre dans le nord du Serengeti.",
      },
      {
        question: "Faut-il un visa pour se rendre en Tanzanie ?",
        answer:
          "Oui, un visa est obligatoire pour les ressortissants français. Il s'obtient en ligne (e-visa) avant le départ ou à l'arrivée. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Tanzanie ?",
        answer:
          "CTA Voyages propose des safaris dans les grands parcs, des combinés safari et plage à Zanzibar, l'ascension du Kilimandjaro, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Tanzanie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre safari pas à pas selon les parcs, les hébergements, le rythme et les expériences que vous souhaitez.",
      },
      {
        question: "Combien coûte un voyage en Tanzanie ?",
        answer:
          "Le budget dépend de la durée, la période, la saison de migration, le niveau d'hébergement, le nombre de parcs et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Le safari est-il adapté aux familles ?",
        answer:
          "Oui. Nous proposons des lodges familiaux, des véhicules 4x4 privatifs, un rythme aménagé pour les enfants et des guides francophones pédagogues.",
      },
      {
        question: "Quels hébergements proposez-vous en Tanzanie ?",
        answer:
          "Lodges de safari au cœur des parcs, camps de toile immersifs, resorts pieds dans l'eau à Zanzibar et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Tanzanie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Tanzanie comme ailleurs, nous
        privilégions des prestataires locaux responsables, des lodges engagés dans la
        préservation de la faune et un tourisme respectueux des communautés massaïs et des
        écosystèmes fragiles des parcs nationaux.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Tanzanie commence ici",
    body: "Parlez-nous de votre projet. Safari, combiné safari et plage, ascension du Kilimandjaro ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default tanzanie;
