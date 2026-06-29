import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const venise: DestinationContent = {
  slug: "venise",
  meta: {
    title:
      "Voyage à Venise : séjour, week-end et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Venise avec CTA Voyages. Place Saint-Marc, Grand Canal en gondole, pont du Rialto, îles de Murano et Burano, séjour romantique ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Gondoles sur le Grand Canal au coucher du soleil — Voyage à Venise avec CTA Voyages",
    label: "Destination Venise",
    h1: "Voyage à Venise : la Sérénissime entre canaux et palais",
    description:
      "Week-end romantique, séjour culturel, escapade sur les îles de la lagune ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~1h45 de vol",
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
      value: "Avril-juin & sept-oct",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Venise, la Sérénissime sur l'eau",
    body: (
      <>
        Posée sur sa lagune comme un songe suspendu entre ciel et eau, Venise
        n&apos;a pas d&apos;équivalent au monde. Ville sans voitures parcourue de{" "}
        <strong>cent soixante-dix canaux</strong> et de plus de quatre cents
        ponts, la cité des Doges déploie ses palais gothiques, ses églises
        baroques et ses ruelles secrètes dans une lumière dorée que les peintres
        n&apos;ont cessé de poursuivre. De la majesté de la{" "}
        <strong>place Saint-Marc</strong> au charme animé du{" "}
        <strong>pont du Rialto</strong>, des verreries de{" "}
        <strong>Murano</strong> aux maisons multicolores de{" "}
        <strong>Burano</strong>, chaque quartier raconte mille ans
        d&apos;histoire, de commerce et de raffinement. Glisser en gondole au fil
        du Grand Canal, savourer un spritz sur un campo au soleil couchant, se
        perdre volontiers dans le dédale du Dorsoduro ou voguer vers les îles de
        la lagune : Venise se vit aussi bien en{" "}
        <strong>week-end romantique</strong> qu&apos;en{" "}
        <strong>séjour culturel</strong>, en <strong>escapade sur les îles</strong>{" "}
        ou en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Venise ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine d'exception",
        text: "Basilique Saint-Marc, palais des Doges, églises et musées : Venise est une ville-musée à ciel ouvert, classée au patrimoine mondial de l'UNESCO.",
        img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop&auto=format",
        alt: "Basilique Saint-Marc et son campanile sur la place Saint-Marc à Venise",
      },
      {
        icon: "rowing",
        title: "La magie des canaux",
        text: "Gondoles, vaporettos et ponts romantiques : se déplacer sur l'eau est une expérience unique au monde, du Grand Canal aux plus discrets rii.",
        img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800&h=600&fit=crop&auto=format",
        alt: "Gondole glissant sur un canal étroit bordé de palais à Venise",
      },
      {
        icon: "palette",
        title: "Un art de vivre raffiné",
        text: "Verreries de Murano, dentelle de Burano, carnaval et Biennale : Venise cultive un artisanat et une scène artistique parmi les plus prestigieux d'Europe.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop&auto=format",
        alt: "Maisons aux façades colorées le long d'un canal de l'île de Burano",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie vénitienne",
        text: "Cicchetti dans les bacari, risotto de fruits de mer, spritz à l'heure de l'apéritif : la cuisine vénitienne se savoure au fil des comptoirs et des terrasses.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format",
        alt: "Assortiment de cicchetti vénitiens sur un comptoir de bacaro",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Venise",
    steps: [
      {
        id: "saint-marc",
        label: "JOUR 1",
        title: "Place Saint-Marc & basilique",
        text: "Premier émerveillement au cœur de la Sérénissime : la place Saint-Marc, la basilique aux mosaïques dorées, le campanile et le palais des Doges, joyaux gothiques de la cité.",
        img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=600&fit=crop&auto=format",
        alt: "Place Saint-Marc et basilique au lever du jour à Venise",
        align: "left",
      },
      {
        id: "grand-canal",
        label: "JOUR 2",
        title: "Le Grand Canal en gondole",
        text: "Descente du Grand Canal au fil de l'eau, entre palais Renaissance et façades patinées. Une balade en gondole au coucher du soleil, instant suspendu et inoubliable.",
        img: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&h=600&fit=crop&auto=format",
        alt: "Grand Canal de Venise bordé de palais avec gondoles",
        align: "right",
      },
      {
        id: "rialto",
        label: "JOUR 3",
        title: "Pont du Rialto & marché",
        text: "Le célèbre pont du Rialto, cœur marchand de Venise, et son marché aux poissons et aux fruits et légumes. Dégustation de cicchetti dans les bacari du quartier de San Polo.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop&auto=format",
        alt: "Pont du Rialto enjambant le Grand Canal à Venise",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "murano-burano",
        label: "JOUR 4",
        title: "Murano & Burano",
        text: "Escapade en vaporetto vers les îles de la lagune : Murano et ses maîtres verriers, puis Burano et ses maisons multicolores, paradis de la dentelle et de la photographie.",
        img: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?w=800&h=600&fit=crop&auto=format",
        alt: "Maisons colorées et canal sur l'île de Burano dans la lagune de Venise",
        align: "right",
      },
      {
        id: "dorsoduro",
        label: "JOUR 5",
        title: "Le quartier du Dorsoduro",
        text: "Immersion dans le Venise des artistes : la collection Peggy Guggenheim, les Gallerie dell'Accademia, l'église de la Salute et les terrasses animées des Zattere face à la Giudecca.",
        img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=800&h=600&fit=crop&auto=format",
        alt: "Basilique Santa Maria della Salute vue depuis le Dorsoduro à Venise",
        align: "left",
      },
      {
        id: "lagune",
        label: "JOUR 6",
        title: "Les îles de la lagune",
        text: "Voguer vers les trésors discrets de la lagune : Torcello et sa basilique millénaire, le Lido et ses plages, ou San Giorgio Maggiore pour un panorama saisissant sur la ville.",
        img: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&h=600&fit=crop&auto=format",
        alt: "Île de San Giorgio Maggiore et lagune de Venise au coucher du soleil",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme une visite des théâtres et de la Fenice,
        une excursion vers les villas de la Brenta ou une extension vers Vérone et
        les Dolomites peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Venise",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Venise&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Venise se visite toute l&apos;année, mais certaines saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : climat doux et
                lumineux, idéal pour flâner avant l&apos;affluence estivale.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à octobre)</strong> : douceur,
                lumières dorées et atmosphère plus paisible.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver &amp; carnaval (février)</strong> : Venise
                mystérieuse et féerique, à découvrir hors des foules.
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
        question: <>Faut-il un visa pour se rendre à Venise&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> L&apos;Italie fait partie de l&apos;Union
              européenne et de l&apos;espace Schengen.
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
                Aucune formalité de visa n&apos;est requise pour un séjour
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
        question: <>Quels types de voyages proposez-vous à Venise&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Venise :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Week-end</strong> : escapade citadine de 2 à 4 jours.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour culturel</strong> : musées, palais et îles de la
                lagune.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Italie</strong> : Venise et Vérone, les
                Dolomites ou la Toscane.
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
                Les <strong>étapes et la durée</strong> : Saint-Marc, Rialto,
                Murano, Burano, Dorsoduro…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : palais sur le
                Grand Canal, boutique-hôtel ou adresse de charme.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : balade en
                gondole privée, atelier de verre, dîner gastronomique.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Venise&nbsp;?</>,
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
        question: <>Comment se déplace-t-on dans Venise&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Venise se découvre à pied et sur l&apos;eau.</strong> La
              ville est entièrement piétonne :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>À pied</strong> : la meilleure façon d&apos;explorer
                ruelles, ponts et campi.
              </li>
              <li>
                <Icon name="check" />
                <strong>En vaporetto</strong> : les bateaux-bus relient le Grand
                Canal et les îles de la lagune.
              </li>
              <li>
                <Icon name="check" />
                <strong>En gondole ou taxi-bateau</strong> : pour une balade
                romantique ou un transfert privé.
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
                <strong>Palais et hôtels 5 étoiles</strong> sur le Grand Canal.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de caractère</strong> au cœur des
                quartiers historiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> dans le Dorsoduro ou le
                Cannaregio, loin de l&apos;agitation.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels confortables</strong> au meilleur rapport
                qualité-prix.
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
        question: "Quelle est la meilleure période pour visiter Venise ?",
        answer:
          "Le printemps (avril à juin) et l'automne (septembre à octobre) sont les périodes idéales : climat doux, belles lumières et affluence plus modérée. L'hiver et le carnaval de février offrent une Venise féerique et plus paisible.",
      },
      {
        question: "Faut-il un visa pour se rendre à Venise ?",
        answer:
          "Non, l'Italie fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous à Venise ?",
        answer:
          "CTA Voyages propose des week-ends, des séjours culturels, des combinés Italie (Vérone, Dolomites, Toscane), des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Venise ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget, du choix des étapes à celui de l'hébergement et des expériences.",
      },
      {
        question: "Combien coûte un voyage à Venise ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplace-t-on dans Venise ?",
        answer:
          "Venise est entièrement piétonne : on la découvre à pied, en vaporetto (bateaux-bus) sur le Grand Canal et les îles, et en gondole ou taxi-bateau pour les balades et transferts privés.",
      },
      {
        question: "Quels hébergements proposez-vous à Venise ?",
        answer:
          "Palais et hôtels 5 étoiles sur le Grand Canal, boutique-hôtels de caractère, adresses de charme dans le Dorsoduro ou le Cannaregio, et hôtels confortables au meilleur rapport qualité-prix.",
      },
      {
        question: "Comment demander un devis pour un voyage à Venise ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Venise, ville fragile face au
        surtourisme et à la montée des eaux, nous privilégions des séjours hors
        des pics d&apos;affluence, des hébergements et artisans locaux ainsi que
        des découvertes respectueuses de la lagune et de son patrimoine unique.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Venise commence ici",
    body: "Parlez-nous de votre projet. Week-end romantique, séjour culturel, escapade sur les îles ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default venise;
