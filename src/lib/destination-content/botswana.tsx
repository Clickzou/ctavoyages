import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const botswana: DestinationContent = {
  slug: "botswana",
  meta: {
    title:
      "Voyage au Botswana : safari, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Botswana avec CTA Voyages. Delta de l'Okavango en mokoro, réserve de Moremi, éléphants de Chobe, désert du Kalahari, extension chutes Victoria. Safari ou voyage sur mesure, devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Troupeau d'éléphants au coucher du soleil dans la savane africaine — Voyage au Botswana avec CTA Voyages",
    label: "Destination Botswana",
    h1: "Voyage au Botswana : safaris d'exception et nature sauvage",
    description:
      "Safari de luxe, exploration du delta de l'Okavango, circuit nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+1h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~13h (avec escale)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Anglais & tswana",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Pula (BWP)",
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
    h2: "Le Botswana, joyau sauvage de l'Afrique australe",
    body: (
      <>
        Sanctuaire de la faune africaine, le Botswana déploie ses paysages
        grandioses dans un écrin préservé d&apos;une beauté à couper le souffle.
        Des eaux labyrinthiques du{" "}
        <strong>delta de l&apos;Okavango</strong>, classé au patrimoine mondial
        de l&apos;UNESCO, aux immensités arides du{" "}
        <strong>désert du Kalahari</strong>, des concentrations
        d&apos;éléphants du <strong>parc de Chobe</strong> aux marais
        scintillants de <strong>Makgadikgadi</strong>, chaque étape révèle une
        Afrique authentique et intacte. Glisser en mokoro entre les nénuphars au
        lever du jour, observer les grands fauves de la réserve de Moremi,
        camper sous une voûte étoilée d&apos;une pureté absolue ou rencontrer les
        derniers Bochimans du Kalahari : le Botswana se vit aussi bien en{" "}
        <strong>safari de luxe</strong> qu&apos;en{" "}
        <strong>circuit nature</strong>, en{" "}
        <strong>aventure hors des sentiers battus</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Pionnier d&apos;un
        tourisme à faible empreinte et à forte valeur, ce pays a fait de la
        préservation de sa nature une véritable philosophie. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Botswana ?",
    cards: [
      {
        icon: "kayaking",
        title: "Le delta de l'Okavango",
        text: "Un delta intérieur unique au monde : explorez en mokoro, la pirogue traditionnelle, ce labyrinthe d'eau et de canaux où la vie sauvage abonde.",
        img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&h=700&fit=crop&auto=format",
        alt: "Pirogue mokoro glissant sur les eaux du delta de l'Okavango au Botswana",
      },
      {
        icon: "pets",
        title: "Une faune exceptionnelle",
        text: "Plus grande population d'éléphants au monde, lions, léopards, guépards et lycaons : le Botswana offre des safaris parmi les plus riches d'Afrique.",
        img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&h=700&fit=crop&auto=format",
        alt: "Troupeau d'éléphants se désaltérant au bord d'une rivière au Botswana",
      },
      {
        icon: "nights_stay",
        title: "Des ciels étoilés magiques",
        text: "Loin de toute pollution lumineuse, le désert du Kalahari offre l'un des plus beaux ciels nocturnes de la planète, à admirer autour du feu de camp.",
        img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&h=700&fit=crop&auto=format",
        alt: "Voie lactée scintillant au-dessus du désert du Kalahari au Botswana",
      },
      {
        icon: "eco",
        title: "Un tourisme préservé",
        text: "Faible affluence, lodges intimistes et politique de conservation exemplaire : le Botswana est la destination idéale d'un safari exclusif et responsable.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=900&h=700&fit=crop&auto=format",
        alt: "Lodge de safari isolé dans la savane sauvage du Botswana",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Botswana",
    steps: [
      {
        id: "okavango",
        label: "JOURS 1 À 3",
        title: "Le delta de l'Okavango en mokoro",
        text: "Immersion au cœur du delta : navigation silencieuse en mokoro entre les nénuphars, safaris à pied sur les îles et premières rencontres avec hippopotames, antilopes et oiseaux multicolores.",
        img: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&h=700&fit=crop&auto=format",
        alt: "Delta de l'Okavango en mokoro",
        align: "left",
      },
      {
        id: "moremi",
        label: "JOURS 4 À 5",
        title: "La réserve de Moremi : safari grand format",
        text: "Au cœur du delta, la réserve de Moremi compte parmi les plus belles d'Afrique. Safaris en 4x4 à la recherche des grands fauves, lions, léopards et lycaons, dans des décors de savane et de forêts inondées.",
        img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&h=700&fit=crop&auto=format",
        alt: "Réserve de Moremi",
        align: "right",
      },
      {
        id: "chobe",
        label: "JOURS 6 À 7",
        title: "Le parc de Chobe et ses éléphants",
        text: "Cap au nord vers Chobe, royaume des éléphants. Croisière au coucher du soleil sur la rivière Chobe, où se rassemblent par centaines éléphants, buffles et hippopotames venus s'abreuver.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&h=700&fit=crop&auto=format",
        alt: "Parc de Chobe",
        align: "left",
      },
      {
        id: "kalahari",
        label: "JOURS 8 À 9",
        title: "Le désert du Kalahari",
        text: "Changement d'atmosphère dans les étendues infinies du Kalahari. Pistage de la faune désertique, rencontre avec la culture des Bochimans et nuits sous un ciel étoilé d'une pureté absolue.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&h=700&fit=crop&auto=format",
        alt: "Désert du Kalahari",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "makgadikgadi",
        label: "JOURS 10 À 11",
        title: "Les marais de Makgadikgadi",
        text: "Découverte des immenses salines de Makgadikgadi, anciens lacs asséchés aux paysages lunaires. Rencontre avec les suricates, traversée en quad et soirées magiques au cœur d'un silence absolu.",
        img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&h=700&fit=crop&auto=format",
        alt: "Marais de Makgadikgadi",
        align: "left",
      },
      {
        id: "chutes-victoria",
        label: "JOURS 12 À 13",
        title: "Extension : les chutes Victoria",
        text: "Final grandiose à la frontière, face aux chutes Victoria, l'une des merveilles naturelles du monde. Survol en hélicoptère, embruns spectaculaires et croisière sur le Zambèze pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&h=700&fit=crop&auto=format",
        alt: "Chutes Victoria",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la réserve de Savuti, le parc de Nxai Pan ou
        une extension vers le Cap et les vignobles sud-africains peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Botswana",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Botswana&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Botswana se découvre principalement en safari, et la saison
              sèche est la plus propice à l&apos;observation de la faune :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (mai à octobre)</strong> : la période
                idéale. La faune se concentre autour des points d&apos;eau, le
                climat est agréable et les moustiques rares.
              </li>
              <li>
                <Icon name="check" />
                <strong>Pleine saison (juillet à septembre)</strong> :
                observations exceptionnelles, journées ensoleillées et nuits
                fraîches.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison verte (novembre à avril)</strong> : paysages
                luxuriants, naissances d&apos;animaux et tarifs plus doux,
                malgré quelques averses.
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
        question: <>Faut-il un visa pour se rendre au Botswana&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient
              d&apos;une exemption de visa pour un séjour touristique de courte
              durée.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date de retour, avec des pages vierges, est exigé.
              </li>
              <li>
                <Icon name="check" />
                En cas d&apos;extension vers les{" "}
                <strong>chutes Victoria</strong> (Zimbabwe ou Zambie), un visa
                peut être requis à la frontière.
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
        question: <>Quels types de voyages proposez-vous au Botswana&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le
              Botswana :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Safari</strong> : observation de la faune en 4x4, en
                mokoro ou en bateau.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en petit groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné multi-pays</strong> : Botswana, chutes Victoria,
                Namibie ou Afrique du Sud.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : lodges d&apos;exception et
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
                Les <strong>étapes et la durée</strong> : Okavango, Moremi,
                Chobe, Kalahari, Makgadikgadi…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : camp de toile,
                lodge de luxe, campement mobile en pleine nature.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : safari en
                mokoro, vol en avion de brousse, marche guidée.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Botswana&nbsp;?</>,
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
                Le type de safari et les transferts en avion de brousse
              </li>
              <li>
                <Icon name="check" />
                Les activités et prestations incluses
              </li>
            </ul>
            <p>
              Le Botswana mise sur un tourisme haut de gamme et exclusif. Pour
              obtenir une estimation,{" "}
              <a href="/demande-devis">contactez-nous</a>. Nos conseillers vous
              adressent une proposition personnalisée, gratuite et sans
              engagement.
            </p>
          </>
        ),
      },
      {
        question: <>Le safari au Botswana est-il adapté aux familles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui, sous certaines conditions.</strong> CTA Voyages
              sélectionne :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Des <strong>lodges accueillant les familles</strong>, avec
                activités adaptées aux enfants.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>guides francophones expérimentés</strong> pour des
                safaris pédagogiques et sécurisés.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>rythme sur mesure</strong> pensé pour le confort des
                petits comme des grands.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels hébergements proposez-vous au Botswana&nbsp;?</>,
        answer: (
          <>
            <p>Nous sélectionnons les hébergements selon vos préférences :</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Lodges de luxe</strong> au cœur des réserves privées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps de toile</strong> intimistes, face à la faune
                sauvage.
              </li>
              <li>
                <Icon name="check" />
                <strong>Campements mobiles</strong> pour une immersion totale en
                pleine nature.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses d&apos;exception</strong> au bord du delta ou
                des rivières.
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
        question: "Quelle est la meilleure période pour visiter le Botswana ?",
        answer:
          "La saison sèche, de mai à octobre, est la période idéale pour un safari : la faune se concentre autour des points d'eau, le climat est agréable et les moustiques rares. La pleine saison (juillet-septembre) offre les meilleures observations.",
      },
      {
        question: "Faut-il un visa pour se rendre au Botswana ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique de courte durée. Un passeport valide au moins 6 mois après la date de retour, avec des pages vierges, est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Botswana ?",
        answer:
          "CTA Voyages propose des safaris, des circuits multi-étapes, des combinés multi-pays (chutes Victoria, Namibie, Afrique du Sud), des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Botswana ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre safari pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et expériences.",
      },
      {
        question: "Combien coûte un voyage au Botswana ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de safari et les activités incluses. Le Botswana mise sur un tourisme haut de gamme. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Le safari au Botswana est-il adapté aux familles ?",
        answer:
          "Oui. Nous sélectionnons des lodges accueillant les familles, des guides francophones expérimentés et un rythme sur mesure adapté au confort des enfants comme des adultes.",
      },
      {
        question: "Quels hébergements proposez-vous au Botswana ?",
        answer:
          "Lodges de luxe au cœur des réserves, camps de toile intimistes, campements mobiles en pleine nature et adresses d'exception au bord du delta et des rivières.",
      },
      {
        question: "Comment demander un devis pour un voyage au Botswana ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Le Botswana est un modèle de
        conservation, et nous privilégions des lodges éco-responsables, des
        prestataires locaux engagés et un tourisme à faible empreinte,
        respectueux de la faune, des écosystèmes et des communautés qui en sont
        les premiers gardiens.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Botswana commence ici",
    body: "Parlez-nous de votre projet. Safari, circuit nature, combiné multi-pays ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default botswana;
