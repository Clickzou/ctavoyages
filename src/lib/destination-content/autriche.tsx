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

const autriche: DestinationContent = {
  slug: "autriche",
  meta: {
    title:
      "Voyage en Autriche : séjour, circuit et voyage sur mesure",
    description:
      "Organisez votre voyage en Autriche avec CTA Voyages. Vienne impériale, Salzbourg et Mozart, lacs du Salzkammergut, Hallstatt, Tyrol et route du Grossglockner.",
  },
  hero: {
    image: "/generated/autriche.jpg",
    imageAlt:
      "Village alpin au bord d'un lac dans le Salzkammergut — Voyage en Autriche avec CTA Voyages",
    label: "Destination Autriche",
    h1: "Voyage en Autriche : palais impériaux, lacs et sommets alpins",
    description:
      "Escapade viennoise, autotour entre lacs et montagnes, séjour hivernal ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h (Vienne, direct)",
    },
    { kind: "fact", icon: "schedule", label: "Décalage horaire", value: "Aucun" },
    { kind: "fact", icon: "translate", label: "Langue", value: "Allemand" },
    { kind: "fact", icon: "payments", label: "Monnaie", value: "Euro (EUR)" },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à sept. / déc. à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Autriche, de la valse impériale aux cimes alpines",
    body: (
      <>
        Pendant six siècles, les Habsbourg ont fait de <strong>Vienne</strong>{" "}
        l&apos;une des capitales les plus raffinées d&apos;Europe. Il en reste le
        palais de <strong>Schönbrunn</strong> et ses jardins à la française, la{" "}
        <strong>Hofburg</strong>, l&apos;Opéra, des musées d&apos;une richesse
        vertigineuse et ces cafés centenaires où l&apos;on s&apos;attarde des
        heures devant une Sachertorte. À trois heures de route,{" "}
        <strong>Salzbourg</strong> conserve intacte la ville natale de Mozart,
        dominée par sa forteresse. Puis le pays bascule dans la montagne&nbsp;:
        les lacs émeraude du <strong>Salzkammergut</strong>, le village de{" "}
        <strong>Hallstatt</strong> accroché entre l&apos;eau et la falaise, la
        route alpine du <strong>Grossglockner</strong> et les vallées du{" "}
        <strong>Tyrol</strong>. Ajoutez les vignobles en terrasses de la{" "}
        <strong>Wachau</strong> le long du Danube, et vous obtenez une
        destination qui se prête aussi bien au <strong>city break</strong>{" "}
        qu&apos;à l&apos;<strong>autotour</strong>, au{" "}
        <strong>séjour au ski</strong> qu&apos;au{" "}
        <strong>voyage sur mesure</strong>.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Autriche ?",
    cards: [
      {
        icon: "castle",
        title: "Vienne impériale",
        text: "Schönbrunn, la Hofburg, l'Opéra et les grands musées : la capitale des Habsbourg concentre un patrimoine unique en Europe.",
        img: "/generated/autriche-2.jpg",
        alt: "Palais impérial et architecture baroque à Vienne",
      },
      {
        icon: "landscape",
        title: "Les lacs du Salzkammergut",
        text: "Eaux émeraude, montagnes abruptes et villages de carte postale : Hallstatt et le lac de Wolfgang comptent parmi les plus beaux paysages d'Europe.",
        img: "/generated/autriche-1.jpg",
        alt: "Village alpin et lac émeraude dans le Salzkammergut",
      },
      {
        icon: "music_note",
        title: "La capitale de la musique",
        text: "Mozart, Haydn, Strauss, Mahler : concerts classiques, opéras et festivals rythment l'année dans les plus belles salles du continent.",
        img: "/generated/autriche-4.jpg",
        alt: "Salle de concert et ambiance musicale à Vienne",
      },
      {
        icon: "downhill_skiing",
        title: "Les Alpes tyroliennes",
        text: "Randonnées estivales face aux glaciers, cols panoramiques et stations de ski réputées, avec chalets traditionnels et tables de montagne.",
        img: "/generated/autriche-3.jpg",
        alt: "Village de montagne tyrolien au pied des sommets alpins",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Autriche",
    steps: [
      {
        id: "vienne",
        label: "JOURS 1 À 3",
        title: "Vienne, la capitale des Habsbourg",
        text: "Arrivée à Vienne. Schönbrunn et ses jardins, la Hofburg, le quartier des musées et une soirée à l'Opéra, entrecoupés de pauses dans les cafés historiques.",
        img: "/generated/autriche-2.jpg",
        alt: "Palais et grandes avenues du centre historique de Vienne",
        align: "left",
      },
      {
        id: "wachau",
        label: "JOUR 4",
        title: "La vallée de la Wachau",
        text: "Route le long du Danube : abbaye baroque de Melk, vignobles en terrasses classés à l'UNESCO et dégustation de grüner veltliner chez un vigneron.",
        img: "/generated/autriche.jpg",
        alt: "Vignobles en terrasses au-dessus du Danube dans la Wachau",
        align: "right",
      },
      {
        id: "salzbourg",
        label: "JOURS 5 ET 6",
        title: "Salzbourg, la ville de Mozart",
        text: "Vieille ville classée, maison natale de Mozart, forteresse de Hohensalzburg et château de Mirabell, dans une ville à taille humaine cernée de montagnes.",
        img: "/generated/autriche-3.jpg",
        alt: "Vieille ville de Salzbourg dominée par sa forteresse",
        align: "left",
      },
      {
        id: "hallstatt-lacs",
        label: "JOUR 7",
        title: "Hallstatt & le Salzkammergut",
        text: "Journée au bord des lacs : le village d'Hallstatt et ses maisons suspendues au-dessus de l'eau, ses mines de sel millénaires et une croisière sur le lac.",
        img: "/generated/autriche-1.jpg",
        alt: "Maisons de Hallstatt au bord du lac et falaises alentour",
        align: "right",
      },
      {
        id: "tyrol",
        label: "JOURS 8 À 10",
        title: "Tyrol & route du Grossglockner",
        text: "Fin du voyage dans les Alpes : la route panoramique du Grossglockner face au plus haut sommet du pays, puis Innsbruck et les villages fleuris du Tyrol.",
        img: "/generated/autriche-3.jpg",
        alt: "Route alpine panoramique et sommets enneigés du Tyrol",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le même itinéraire se décline en version hivernale, entre marchés de
        Noël, ski et chalets d&apos;altitude.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Autriche",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Autriche&nbsp;?</>
        ),
        answer: (
          <>
            <p>Le pays se visite en deux saisons bien distinctes&nbsp;:</p>
            {checklist([
              <>
                <strong>De mai à septembre</strong>&nbsp;: randonnée, lacs, cols
                alpins ouverts et festivals — la meilleure période pour un
                circuit complet.
              </>,
              <>
                <strong>De décembre à mars</strong>&nbsp;: ski dans le Tyrol et
                le Vorarlberg, marchés de Noël et concerts du Nouvel An.
              </>,
              <>
                <strong>Avril et octobre</strong>&nbsp;: villes agréables, moins
                de monde, mais certains cols de montagne restent fermés.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Vienne ou les Alpes&nbsp;: que choisir&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Les deux se combinent très bien</strong> sur une même
              semaine&nbsp;:
            </p>
            {checklist([
              <>
                <strong>3 à 4 jours à Vienne</strong> suffisent à parcourir
                l&apos;essentiel des palais et des musées.
              </>,
              <>
                <strong>Salzbourg est à 2h30 de train</strong> de Vienne et
                constitue la porte d&apos;entrée idéale vers les lacs.
              </>,
              <>
                <strong>Le Tyrol</strong> demande une voiture et au moins trois
                jours pour en profiter pleinement.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Autriche", [
        <>
          <strong>City break</strong>&nbsp;: Vienne ou Salzbourg en week-end
          prolongé.
        </>,
        <>
          <strong>Autotour</strong>&nbsp;: Vienne, Wachau, lacs et Tyrol au
          volant.
        </>,
        <>
          <strong>Séjour montagne</strong>&nbsp;: randonnée en été, ski en hiver.
        </>,
        <>
          <strong>Croisière sur le Danube</strong>&nbsp;: de Passau à Budapest en
          passant par Vienne.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Vienne, Salzbourg,
          Salzkammergut, Tyrol, Carinthie.
        </>,
        <>
          Le <strong>transport</strong>&nbsp;: train pour les villes, voiture de
          location pour les Alpes.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: concert classique, visite de
          cave, spa alpin, croisière fluviale.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Autriche",
        "La saison : les tarifs montent nettement en haute saison de ski et pendant les fêtes",
      ),
      {
        question: <>Comment se déplacer sur place&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Le pays est parfaitement équipé.</strong> Nous organisons
              vos déplacements&nbsp;:
            </p>
            {checklist([
              <>
                <strong>Le train</strong>&nbsp;: très efficace entre Vienne,
                Salzbourg et Innsbruck, avec de superbes tronçons panoramiques.
              </>,
              <>
                <strong>La voiture de location</strong>&nbsp;: indispensable pour
                les lacs, le Tyrol et les routes alpines.
              </>,
              <>
                <strong>La vignette autoroutière</strong> est obligatoire&nbsp;:
                elle est incluse dans nos locations.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("en Autriche", [
        <>
          <strong>Hôtels historiques</strong> au cœur de Vienne et de Salzbourg.
        </>,
        <>
          <strong>Chalets et hôtels alpins</strong> avec spa dans le Tyrol.
        </>,
        <>
          <strong>Auberges de lac</strong> traditionnelles dans le
          Salzkammergut.
        </>,
        <>
          <strong>Domaines viticoles</strong> avec chambres dans la vallée de la
          Wachau.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter l'Autriche ?",
        answer:
          "De mai à septembre pour la randonnée, les lacs, les cols alpins et les festivals, et de décembre à mars pour le ski, les marchés de Noël et les concerts du Nouvel An. Avril et octobre conviennent aux villes, mais certains cols restent fermés.",
      },
      {
        question: "Faut-il choisir entre Vienne et les Alpes autrichiennes ?",
        answer:
          "Non, les deux se combinent bien sur une semaine : 3 à 4 jours suffisent pour Vienne, Salzbourg est à 2h30 de train et sert de porte d'entrée vers les lacs, et le Tyrol demande une voiture et au moins trois jours.",
      },
      {
        question: "Comment se déplacer en Autriche ?",
        answer:
          "Le train est très efficace entre Vienne, Salzbourg et Innsbruck, avec de beaux tronçons panoramiques. La voiture de location est indispensable pour les lacs, le Tyrol et les routes alpines ; la vignette autoroutière obligatoire est incluse dans nos locations.",
      },
      {
        question: "Combien coûte un voyage en Autriche ?",
        answer:
          "Le budget dépend de la durée, de la saison — les tarifs montent en haute saison de ski et pendant les fêtes —, des régions visitées, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "en Autriche",
        "des city breaks à Vienne ou Salzbourg, des autotours entre lacs et Tyrol, des séjours montagne été comme hiver, des croisières sur le Danube et des voyages entièrement sur mesure.",
        "Hôtels historiques à Vienne et Salzbourg, chalets et hôtels alpins avec spa dans le Tyrol, auberges de lac dans le Salzkammergut et domaines viticoles avec chambres dans la Wachau.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Autriche, nous
        privilégions le train pour rejoindre le pays et circuler entre les
        villes, des hébergements familiaux engagés dans les labels
        environnementaux alpins et des prestataires attentifs à la préservation
        des parcs nationaux de montagne.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Autriche commence ici",
    body: "Parlez-nous de votre projet. Escapade viennoise, autotour entre lacs et sommets, séjour au ski ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default autriche;
