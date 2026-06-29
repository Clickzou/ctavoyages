import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const londres: DestinationContent = {
  slug: "londres",
  meta: {
    title:
      "Voyage à Londres : séjour, week-end et city break sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Londres avec CTA Voyages. Westminster et Big Ben, British Museum, Tower of London, Camden, musées de South Kensington, week-end ou séjour sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Big Ben et le palais de Westminster au bord de la Tamise — Voyage à Londres avec CTA Voyages",
    label: "Destination Londres",
    h1: "Voyage à Londres : élégance royale et énergie urbaine",
    description:
      "Week-end, city break, séjour culturel ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~1h30 de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-1h",
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
      value: "Livre sterling (GBP)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Londres, capitale aux mille visages",
    body: (
      <>
        Cosmopolite et intemporelle, Londres marie le faste de la monarchie à
        l&apos;effervescence créative des quartiers les plus branchés
        d&apos;Europe. De la silhouette majestueuse de{" "}
        <strong>Big Ben</strong> aux trésors universels du{" "}
        <strong>British Museum</strong>, des remparts millénaires de la{" "}
        <strong>Tower of London</strong> à l&apos;ambiance bohème des marchés de{" "}
        <strong>Camden</strong>, chaque quartier raconte une histoire singulière.
        Flâner le long de la Tamise, assister à la relève de la garde, explorer les
        galeries gratuites de South Kensington, déambuler dans les parcs royaux ou
        franchir le méridien de Greenwich : Londres se vit aussi bien en{" "}
        <strong>week-end culturel</strong> qu&apos;en <strong>city break</strong>,
        en <strong>escapade en famille</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. À seulement 1h30 de vol de
        Paris, la capitale britannique se prête à toutes les envies. Votre
        conseiller CTA Voyages conçoit avec vous l&apos;itinéraire qui vous
        ressemble, à votre rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Londres ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine royal",
        text: "Westminster, Buckingham Palace, la Tower of London : Londres déploie mille ans d'histoire monarchique au fil de monuments iconiques et de cérémonies fastueuses.",
        img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&h=600&fit=crop&auto=format",
        alt: "Relève de la garde devant Buckingham Palace à Londres",
      },
      {
        icon: "museum",
        title: "Des musées d'exception",
        text: "British Museum, National Gallery, Tate Modern, musées de South Kensington : des collections parmi les plus riches au monde, souvent gratuites.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&auto=format",
        alt: "Galerie du British Museum à Londres",
      },
      {
        icon: "storefront",
        title: "Des quartiers vibrants",
        text: "Camden, Notting Hill, Shoreditch, Covent Garden : chaque quartier a son atmosphère, ses marchés, ses pubs et sa scène culturelle bouillonnante.",
        img: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&h=600&fit=crop&auto=format",
        alt: "Façades colorées et marché animé de Camden à Londres",
      },
      {
        icon: "park",
        title: "Des parcs royaux",
        text: "Hyde Park, St James's Park, Regent's Park : de vastes poumons verts au cœur de la ville, parfaits pour souffler entre deux visites.",
        img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=600&fit=crop&auto=format",
        alt: "Allée arborée d'un parc royal londonien au printemps",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Londres",
    steps: [
      {
        id: "westminster",
        label: "JOUR 1",
        title: "Westminster & Big Ben : le cœur royal",
        text: "Premier contact avec la capitale au fil de la Tamise : l'abbaye de Westminster, le palais et la silhouette emblématique de Big Ben, puis la relève de la garde devant Buckingham Palace.",
        img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=600&fit=crop&auto=format",
        alt: "Westminster",
        align: "left",
      },
      {
        id: "british-museum",
        label: "JOUR 2",
        title: "British Museum : un voyage dans le temps",
        text: "Une journée au British Museum, l'un des plus grands musées du monde : la pierre de Rosette, les marbres du Parthénon et des trésors des cinq continents, entièrement gratuit.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&auto=format",
        alt: "British Museum",
        align: "right",
      },
      {
        id: "tower-bridge",
        label: "JOUR 3",
        title: "Tower of London & Tower Bridge",
        text: "Plongée dans le Londres médiéval : la Tower of London, ses joyaux de la Couronne et ses légendes, puis la traversée du célèbre Tower Bridge surplombant la Tamise.",
        img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=600&fit=crop&auto=format",
        alt: "Tower Bridge",
        align: "left",
      },
      {
        id: "camden",
        label: "JOUR 4",
        title: "Camden & les marchés londoniens",
        text: "Immersion dans le Londres alternatif : les étals foisonnants de Camden Market, les canaux de Little Venice et l'ambiance bohème de ce quartier culte, entre street food et boutiques vintage.",
        img: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&h=600&fit=crop&auto=format",
        alt: "Camden",
        align: "right",
      },
      {
        id: "south-kensington",
        label: "JOUR 5",
        title: "South Kensington : les grands musées",
        text: "Le quartier des musées : le Natural History Museum et son emblématique hall, le Science Museum et le Victoria and Albert Museum, trois institutions gratuites idéales en famille.",
        img: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&h=600&fit=crop&auto=format",
        alt: "South Kensington",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "greenwich",
        label: "JOUR 6",
        title: "Greenwich : le méridien et la Tamise",
        text: "Escapade au fil de l'eau vers Greenwich : le méridien zéro, l'Observatoire royal, le superbe panorama sur la City et le grand voilier Cutty Sark pour clôturer le séjour.",
        img: "https://images.unsplash.com/photo-1577086664693-894d8405334a?w=800&h=600&fit=crop&auto=format",
        alt: "Greenwich",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme une comédie musicale dans le West End, une
        excursion à Windsor, un afternoon tea ou une journée à Notting Hill peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Londres",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Londres&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Londres se visite toute l&apos;année, mais certaines périodes se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps et été (mai à septembre)</strong> : la période
                idéale, douce et lumineuse, parcs en fleurs et longues journées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (octobre-novembre)</strong> : ambiance feutrée,
                musées au calme et tarifs plus doux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Décembre</strong> : magie des illuminations de Noël et des
                marchés festifs.
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
        question: <>Faut-il un visa ou un passeport pour aller à Londres&nbsp;?</>,
        answer: (
          <>
            <p>
              Depuis le Brexit, les formalités ont évolué pour les ressortissants
              français :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport en cours de validité</strong> est désormais
                exigé (la carte d&apos;identité n&apos;est plus acceptée).
              </li>
              <li>
                <Icon name="check" />
                Une <strong>autorisation électronique (ETA)</strong> est requise
                avant le départ pour les séjours touristiques.
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
        question: <>Quels types de voyages proposez-vous à Londres&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Londres :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Week-end</strong> : escapade de 2 à 3 jours, l&apos;essentiel
                de la capitale.
              </li>
              <li>
                <Icon name="check" />
                <strong>City break</strong> : séjour culturel rythmé, musées et
                monuments.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour en famille</strong> : musées gratuits, parcs et
                attractions adaptés.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade spectacle</strong> : comédies musicales et théâtres
                du West End.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Peut-on personnaliser entièrement le séjour&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>visites et la durée</strong> : Westminster, British
                Museum, Tower of London, Greenwich…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                établissement central ou adresse design.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : afternoon tea,
                comédie musicale, croisière sur la Tamise.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Londres&nbsp;?</>,
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
        question: <>Comment se déplacer dans Londres&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Très facilement.</strong> Londres dispose d&apos;un réseau de
              transports parmi les plus complets au monde :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le <strong>métro (Tube)</strong> dessert tous les quartiers,
                rapidement et fréquemment.
              </li>
              <li>
                <Icon name="check" />
                Les célèbres <strong>bus à impériale</strong> et les bateaux-bus sur
                la Tamise.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>carte Oyster ou sans contact</strong> suffit pour tout
                régler.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des quartiers
                emblématiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de charme</strong> à l&apos;atmosphère
                so british.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses design</strong> dans les quartiers tendance comme
                Shoreditch.
              </li>
              <li>
                <Icon name="check" />
                <strong>Établissements familiaux</strong> proches des musées et des
                parcs.
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
        question: "Quelle est la meilleure période pour visiter Londres ?",
        answer:
          "Le printemps et l'été, de mai à septembre, offrent une météo douce, des parcs en fleurs et de longues journées. L'automne est plus calme et économique, et décembre séduit par ses illuminations de Noël.",
      },
      {
        question: "Faut-il un visa ou un passeport pour aller à Londres ?",
        answer:
          "Depuis le Brexit, un passeport en cours de validité est exigé (la carte d'identité n'est plus acceptée) et une autorisation électronique de voyage (ETA) est requise avant le départ pour un séjour touristique.",
      },
      {
        question: "Quels types de voyages proposez-vous à Londres ?",
        answer:
          "CTA Voyages propose des week-ends, des city breaks culturels, des séjours en famille, des escapades spectacle dans le West End et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement le séjour à Londres ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre séjour pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Londres ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplacer dans Londres ?",
        answer:
          "Le métro (Tube), les bus à impériale et les bateaux-bus sur la Tamise couvrent toute la ville. Une carte Oyster ou un paiement sans contact suffit pour tout régler.",
      },
      {
        question: "Quels hébergements proposez-vous à Londres ?",
        answer:
          "Hôtels 4 et 5 étoiles, boutique-hôtels de charme, adresses design dans les quartiers tendance et établissements familiaux proches des musées et des parcs.",
      },
      {
        question: "Comment demander un devis pour un voyage à Londres ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Londres comme ailleurs, nous
        privilégions des hébergements engagés, les transports en commun plutôt que
        la voiture et des adresses locales qui font vivre les quartiers, pour un
        tourisme respectueux de la ville et de ses habitants.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Londres commence ici",
    body: "Parlez-nous de votre projet. Week-end, city break, séjour en famille ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default londres;
