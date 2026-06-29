import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const france: DestinationContent = {
  slug: "france",
  meta: {
    title:
      "Voyage en France : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en France avec CTA Voyages. Paris, châteaux de la Loire, Provence, Côte d'Azur, Bretagne et Alpes, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Tour Eiffel et toits de Paris au coucher du soleil — Voyage en France avec CTA Voyages",
    label: "Destination France",
    h1: "Voyage en France : art de vivre, patrimoine et grands espaces",
    description:
      "Circuit culturel, séjour œnologique, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Accès",
      value: "Train ou vol intérieur",
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
      value: "Français",
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
      value: "Mai à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La France, un concentré d'art de vivre",
    body: (
      <>
        Riche d&apos;un patrimoine exceptionnel et d&apos;une diversité de paysages
        rare, la France se découvre comme un voyage en soi. De l&apos;élégance
        intemporelle de <strong>Paris</strong> aux châteaux Renaissance de la{" "}
        <strong>vallée de la Loire</strong>, des champs de lavande de la{" "}
        <strong>Provence</strong> aux criques turquoise de la{" "}
        <strong>Côte d&apos;Azur</strong>, chaque région révèle une facette de ce
        pays où gastronomie, vignobles d&apos;exception, villages perchés et
        littoraux sauvages se conjuguent à merveille. Flâner sur les marchés
        provençaux, longer les côtes découpées de Bretagne, déguster un grand cru
        ou contempler les sommets enneigés des Alpes : la France se vit aussi bien
        en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>séjour œnologique</strong>, en <strong>escapade nature</strong> ou
        en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en France ?",
    cards: [
      {
        icon: "museum",
        title: "Un patrimoine d'exception",
        text: "Cathédrales gothiques, châteaux Renaissance, musées de renommée mondiale : la France est l'un des pays les plus riches au monde en sites classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&h=400&fit=crop&auto=format",
        alt: "Façade du musée du Louvre et sa pyramide de verre à Paris",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie de légende",
        text: "Tables étoilées, marchés colorés, fromages et grands vins : la cuisine française, inscrite au patrimoine de l'UNESCO, est un art de vivre à part entière.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
        alt: "Table gastronomique française dressée avec vin et mets raffinés",
      },
      {
        icon: "wine_bar",
        title: "Des vignobles d'exception",
        text: "Bordeaux, Bourgogne, Champagne, vallée du Rhône : sillonnez les plus belles routes des vins du monde, entre dégustations et domaines de caractère.",
        img: "https://images.unsplash.com/photo-1543418219-44e30b057fea?w=600&h=400&fit=crop&auto=format",
        alt: "Vignes en rangées dans un domaine viticole français au soleil",
      },
      {
        icon: "landscape",
        title: "Une nature à couper le souffle",
        text: "Côtes sauvages de Bretagne, lavandes de Provence, sommets des Alpes et calanques méditerranéennes : la diversité des paysages français est unique.",
        img: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&h=400&fit=crop&auto=format",
        alt: "Champ de lavande en fleurs en Provence avec un mas en arrière-plan",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en France",
    steps: [
      {
        id: "paris",
        label: "JOURS 1 À 3",
        title: "Paris : la Ville Lumière",
        text: "Immersion dans la capitale : la tour Eiffel, le musée du Louvre, Notre-Dame, Montmartre et une croisière sur la Seine au coucher du soleil, entre grands boulevards et cafés de quartier.",
        img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop&auto=format",
        alt: "Tour Eiffel illuminée au crépuscule à Paris",
        align: "left",
      },
      {
        id: "loire",
        label: "JOURS 4 À 5",
        title: "Les châteaux de la Loire",
        text: "Cap sur la vallée des rois : Chambord et son escalier à double révolution, Chenonceau enjambant le Cher, Amboise et ses jardins. Sur la route, dégustation des vins de Touraine.",
        img: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=600&h=400&fit=crop&auto=format",
        alt: "Château de Chambord et ses tours Renaissance reflétés dans l'eau",
        align: "right",
      },
      {
        id: "provence",
        label: "JOURS 6 À 8",
        title: "Provence & Lubéron",
        text: "Au cœur du Sud : champs de lavande, villages perchés de Gordes et Roussillon, marchés provençaux parfumés et cités antiques d'Avignon et des Baux-de-Provence.",
        img: "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=600&h=400&fit=crop&auto=format",
        alt: "Village perché de Gordes dans le Lubéron en Provence",
        align: "left",
      },
      {
        id: "cote-azur",
        label: "JOURS 9 À 11",
        title: "La Côte d'Azur",
        text: "Sur la Riviera : la promenade des Anglais à Nice, le charme de Saint-Paul-de-Vence, les criques turquoise de l'Estérel et le glamour de Cannes et de Saint-Tropez.",
        img: "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=600&h=400&fit=crop&auto=format",
        alt: "Vue sur la baie de Nice et la Méditerranée sur la Côte d'Azur",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "bretagne",
        label: "JOURS 12 À 13",
        title: "La Bretagne sauvage",
        text: "Changement d'ambiance vers l'Ouest : côtes découpées, pointe du Raz, Saint-Malo et ses remparts, crêperies authentiques et légendes celtiques au gré des marées.",
        img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop&auto=format",
        alt: "Côte rocheuse et phare en Bretagne face à l'océan Atlantique",
        align: "left",
      },
      {
        id: "alpes",
        label: "JOURS 14 À 15",
        title: "Les Alpes & Annecy",
        text: "Final en altitude : la perle des Alpes, Annecy et son lac cristallin, ses canaux fleuris et sa vieille ville, au pied des sommets enneigés du massif des Aravis.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&h=400&fit=crop&auto=format",
        alt: "Lac d'Annecy et montagnes des Alpes par temps clair",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme l&apos;Alsace et sa route des vins, le Pays
        basque, la Bourgogne ou la Corse peuvent facilement s&apos;intégrer à
        votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en France",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la France&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La France se visite toute l&apos;année, mais certaines saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (mai à juin)</strong> : nature en fleurs,
                températures douces et affluence modérée, idéal pour les visites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet à août)</strong> : la saison du littoral et
                de la Provence, parfaite pour le Sud et les festivals.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à octobre)</strong> : vendanges,
                lumières dorées et tarifs plus doux pour les régions viticoles.
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
        question: <>Comment se déplace-t-on en France&nbsp;?</>,
        answer: (
          <>
            <p>
              La France bénéficie d&apos;un réseau de transport parmi les plus
              performants au monde :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le <strong>TGV</strong> relie les grandes villes en quelques
                heures à grande vitesse.
              </li>
              <li>
                <Icon name="check" />
                La <strong>location de voiture</strong> est idéale pour les
                régions rurales et les routes des vins.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>vols intérieurs</strong> facilitent les grandes
                distances, comme Paris–Nice.
              </li>
            </ul>
            <p>
              Nous organisons l&apos;ensemble de vos transports pour un voyage
              fluide et sans souci.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous en France&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la France :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Paris ou balnéaire sur la
                Côte d&apos;Azur.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-régions individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade œnologique</strong> : routes des vins et domaines
                d&apos;exception.
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
                Les <strong>étapes et la durée</strong> : Paris, Loire, Provence,
                Côte d&apos;Azur, Bretagne, Alpes…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : palace parisien,
                mas provençal, château-hôtel.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : dégustation de
                vins, cours de cuisine, croisière.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en France&nbsp;?</>,
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
        question: <>Faut-il des formalités pour voyager en France&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Aucune formalité particulière</strong> pour les
              ressortissants français :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport</strong> en
                cours de validité suffit.
              </li>
              <li>
                <Icon name="check" />
                Aucun <strong>décalage horaire</strong> ni vaccin spécifique
                requis.
              </li>
              <li>
                <Icon name="check" />
                Une destination <strong>idéale en toutes saisons</strong>, sans
                contrainte sanitaire.
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
                <strong>Hôtels 4 et 5 étoiles</strong> et palaces au cœur des
                grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mas et bastides de charme</strong> en Provence et dans le
                Sud.
              </li>
              <li>
                <Icon name="check" />
                <strong>Châteaux-hôtels</strong> au cœur des vignobles et de la
                Loire.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de caractère</strong> et maisons d&apos;hôtes
                authentiques.
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
        question: "Quelle est la meilleure période pour visiter la France ?",
        answer:
          "Le printemps (mai-juin) et l'automne (septembre-octobre) offrent douceur et affluence modérée, idéals pour les visites et les vignobles. L'été est parfait pour le littoral et la Provence.",
      },
      {
        question: "Comment se déplace-t-on en France ?",
        answer:
          "La France dispose d'un réseau performant : TGV entre les grandes villes, location de voiture pour les régions rurales et vols intérieurs pour les longues distances. Nous organisons tous vos transports.",
      },
      {
        question: "Quels types de voyages proposez-vous en France ?",
        answer:
          "CTA Voyages propose des séjours citadins ou balnéaires, des circuits multi-régions, des escapades œnologiques, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en France ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en France ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Faut-il des formalités pour voyager en France ?",
        answer:
          "Aucune formalité particulière pour les ressortissants français : une carte d'identité ou un passeport en cours de validité suffit, sans décalage horaire ni vaccin requis.",
      },
      {
        question: "Quels hébergements proposez-vous en France ?",
        answer:
          "Hôtels 4 et 5 étoiles et palaces, mas et bastides de charme en Provence, châteaux-hôtels dans les vignobles et adresses de caractère.",
      },
      {
        question: "Comment demander un devis pour un voyage en France ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En France comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements
        engagés et des mobilités douces comme le train, pour un tourisme
        respectueux des territoires et des écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en France commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, escapade œnologique ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default france;
