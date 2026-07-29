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

const suisse: DestinationContent = {
  slug: "suisse",
  meta: {
    title:
      "Voyage en Suisse : séjour, circuit",
    description:
      "Organisez votre voyage en Suisse avec CTA Voyages. Cervin et Zermatt, Glacier Express, Jungfrau et Grindelwald, Lucerne, Lavaux et lac Léman.",
  },
  hero: {
    image: "/generated/suisse.jpg",
    imageAlt:
      "Le Cervin dominant un village alpin suisse — Voyage en Suisse avec CTA Voyages",
    label: "Destination Suisse",
    h1: "Voyage en Suisse : trains panoramiques, sommets et lacs",
    description:
      "Itinéraire en trains panoramiques, séjour randonnée face au Cervin, escapade au bord des lacs ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "train",
      label: "Depuis Paris",
      value: "~3h05 en TGV (Genève)",
    },
    { kind: "fact", icon: "schedule", label: "Décalage horaire", value: "Aucun" },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Français, allemand, italien",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Franc suisse (CHF)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin à sept. / déc. à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Suisse, les Alpes dans leur plus bel écrin",
    body: (
      <>
        Nulle part ailleurs la montagne n&apos;est aussi accessible. En Suisse,
        des trains à crémaillère, des téléphériques et des funiculaires
        conduisent au pied des glaciers avec une ponctualité légendaire. Le{" "}
        <strong>Cervin</strong> veille sur <strong>Zermatt</strong>, village sans
        voiture où l&apos;on circule en calèche électrique&nbsp;; la région de la{" "}
        <strong>Jungfrau</strong> aligne Grindelwald, Lauterbrunnen et ses
        soixante-douze cascades&nbsp;; le <strong>Glacier Express</strong> et le{" "}
        <strong>Bernina Express</strong>, classé à l&apos;UNESCO, comptent parmi
        les plus beaux trajets ferroviaires du monde. Plus bas, les lacs prennent
        le relais&nbsp;: <strong>Lucerne</strong> et son pont de bois couvert, le{" "}
        <strong>lac Léman</strong> bordé par les vignobles en terrasses du{" "}
        <strong>Lavaux</strong>, le lac de Lugano aux airs de Méditerranée. En{" "}
        <strong>circuit ferroviaire</strong>, en{" "}
        <strong>séjour randonnée</strong>, en <strong>escapade lacustre</strong>{" "}
        ou en <strong>voyage sur mesure</strong>, la Suisse se savoure lentement.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Suisse ?",
    cards: [
      {
        icon: "terrain",
        title: "Le Cervin & Zermatt",
        text: "La montagne la plus photographiée du monde, et un village sans voiture d'où partent téléphériques et sentiers d'altitude spectaculaires.",
        img: "/generated/suisse-1.jpg",
        alt: "Le Cervin se reflétant dans un lac de montagne au lever du jour",
      },
      {
        icon: "train",
        title: "Les trains panoramiques",
        text: "Glacier Express, Bernina Express, GoldenPass : des voitures vitrées, des viaducs vertigineux et huit heures de paysages sans un instant creux.",
        img: "/generated/suisse-2.jpg",
        alt: "Train panoramique franchissant un viaduc dans les Alpes suisses",
      },
      {
        icon: "hiking",
        title: "La randonnée d'altitude",
        text: "65 000 km de sentiers balisés, des refuges confortables et des remontées mécaniques qui rendent la haute montagne accessible à tous.",
        img: "/generated/suisse-4.jpg",
        alt: "Sentier de randonnée d'altitude face aux glaciers suisses",
      },
      {
        icon: "sailing",
        title: "Les lacs & les vignobles",
        text: "Lucerne, Léman, Lugano : croisières à bord de bateaux à vapeur, terrasses au bord de l'eau et vignobles du Lavaux classés à l'UNESCO.",
        img: "/generated/suisse-3.jpg",
        alt: "Lac suisse bordé de villages et de vignobles en terrasses",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Suisse",
    steps: [
      {
        id: "geneve-lavaux",
        label: "JOURS 1 ET 2",
        title: "Genève, Lavaux & Riviera",
        text: "Arrivée en TGV. Découverte de Genève et de sa vieille ville, puis route le long du Léman : vignobles en terrasses du Lavaux, Montreux et le château de Chillon.",
        img: "/generated/suisse-3.jpg",
        alt: "Vignobles en terrasses du Lavaux au-dessus du lac Léman",
        align: "left",
      },
      {
        id: "zermatt",
        label: "JOURS 3 ET 4",
        title: "Zermatt & le Cervin",
        text: "Montée en train jusqu'au village sans voiture de Zermatt. Ascension au Gornergrat face au Cervin et à vingt-neuf sommets de plus de 4 000 mètres.",
        img: "/generated/suisse-1.jpg",
        alt: "Village de Zermatt au pied du Cervin",
        align: "right",
      },
      {
        id: "glacier-express",
        label: "JOUR 5",
        title: "Le Glacier Express",
        text: "Huit heures à bord du train panoramique le plus lent du monde : 291 ponts, 91 tunnels et la traversée du col de l'Oberalp jusqu'à Saint-Moritz.",
        img: "/generated/suisse-2.jpg",
        alt: "Voiture panoramique du Glacier Express traversant les Alpes",
        align: "left",
      },
      {
        id: "jungfrau",
        label: "JOURS 6 ET 7",
        title: "Région de la Jungfrau",
        text: "Cap sur l'Oberland bernois : Grindelwald, la vallée de Lauterbrunnen et ses cascades, puis montée au Jungfraujoch, la plus haute gare d'Europe.",
        img: "/generated/suisse.jpg",
        alt: "Vallée de Lauterbrunnen et sommets de la Jungfrau",
        align: "right",
      },
      {
        id: "lucerne",
        label: "JOURS 8 ET 9",
        title: "Lucerne & lac des Quatre-Cantons",
        text: "Fin du voyage dans la plus jolie ville de Suisse centrale : pont de bois couvert, vieille ville peinte, croisière en bateau à vapeur et montée au mont Pilate.",
        img: "/generated/suisse-3.jpg",
        alt: "Pont de bois couvert et vieille ville de Lucerne au bord du lac",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le Tessin italophone, les Grisons ou une extension vers Milan ou
        Chamonix complètent facilement le programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Suisse",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Suisse&nbsp;?</>
        ),
        answer: (
          <>
            <p>Tout dépend de ce que vous venez chercher&nbsp;:</p>
            {checklist([
              <>
                <strong>De juin à septembre</strong>&nbsp;: sentiers dégagés,
                cols ouverts, alpages fleuris — la meilleure période pour la
                randonnée et les trains panoramiques.
              </>,
              <>
                <strong>De décembre à mars</strong>&nbsp;: ski, luge et villages
                enneigés, avec des trains panoramiques encore plus
                spectaculaires.
              </>,
              <>
                <strong>Mai et octobre</strong>&nbsp;: tarifs plus doux et
                affluence réduite, mais certaines remontées sont fermées pour
                entretien.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Le Swiss Travel Pass vaut-il le coup&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Le plus souvent, oui</strong>, dès trois ou quatre trajets
              par séjour&nbsp;:
            </p>
            {checklist([
              <>
                Il couvre <strong>trains, bus et bateaux</strong> sur tout le
                réseau national.
              </>,
              <>
                Il inclut l&apos;<strong>entrée de 500 musées</strong> et des
                réductions sur les remontées mécaniques de montagne.
              </>,
              <>
                Les <strong>suppléments de réservation</strong> restent dus sur
                les trains panoramiques.
              </>,
            ])}
            <p>
              Nous calculons pour vous la formule la plus avantageuse selon votre
              itinéraire.
            </p>
          </>
        ),
      },
      faqFormules("en Suisse", [
        <>
          <strong>Circuit en trains panoramiques</strong>&nbsp;: Glacier Express,
          Bernina, GoldenPass.
        </>,
        <>
          <strong>Séjour randonnée</strong>&nbsp;: Zermatt, Jungfrau, Engadine.
        </>,
        <>
          <strong>Séjour au ski</strong>&nbsp;: grandes stations et chalets
          d&apos;altitude.
        </>,
        <>
          <strong>Escapade lacustre</strong>&nbsp;: Lucerne, Léman, Lugano.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>régions et la durée</strong>&nbsp;: Valais, Oberland
          bernois, Grisons, Tessin, Suisse romande.
        </>,
        <>
          Le <strong>mode de transport</strong>&nbsp;: tout-train, voiture de
          location ou combinaison des deux.
        </>,
        <>
          Le <strong>niveau d&apos;activité</strong>&nbsp;: contemplatif,
          randonnée légère ou itinérance sportive.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Suisse",
        "Le coût de la vie helvétique, plus élevé qu'en France, notamment pour la restauration",
      ),
      {
        question: <>La Suisse est-elle adaptée aux familles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Particulièrement, oui.</strong> Le pays est pensé pour
              rendre la montagne accessible&nbsp;:
            </p>
            {checklist([
              <>
                Des <strong>remontées mécaniques</strong> qui amènent tout le
                monde en altitude sans effort.
              </>,
              <>
                Des <strong>sentiers thématiques</strong> conçus pour les enfants
                dans la plupart des stations.
              </>,
              <>
                Les <strong>trajets en train</strong> gratuits pour les moins de
                16 ans accompagnés, avec la carte adaptée.
              </>,
              <>
                Des <strong>luges d&apos;été</strong>, lacs de baignade et fermes
                d&apos;alpage à visiter.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("en Suisse", [
        <>
          <strong>Hôtels de montagne</strong> avec spa et vue sur les sommets.
        </>,
        <>
          <strong>Chalets traditionnels</strong> en bois dans les villages
          alpins.
        </>,
        <>
          <strong>Hôtels historiques</strong> au bord des lacs de Lucerne et du
          Léman.
        </>,
        <>
          <strong>Auberges d&apos;altitude</strong> pour une nuit face au lever
          du soleil sur les glaciers.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Suisse ?",
        answer:
          "De juin à septembre pour la randonnée, les cols ouverts et les trains panoramiques, et de décembre à mars pour le ski et les villages enneigés. Mai et octobre offrent des tarifs plus doux mais certaines remontées sont fermées.",
      },
      {
        question: "Le Swiss Travel Pass est-il rentable ?",
        answer:
          "Le plus souvent oui, dès trois ou quatre trajets : il couvre trains, bus et bateaux du réseau national, inclut l'entrée de 500 musées et donne des réductions sur les remontées mécaniques. Les suppléments de réservation des trains panoramiques restent dus.",
      },
      {
        question: "La Suisse est-elle adaptée aux familles ?",
        answer:
          "Oui : les remontées mécaniques rendent l'altitude accessible à tous, des sentiers thématiques sont conçus pour les enfants, les trajets en train sont gratuits pour les moins de 16 ans accompagnés avec la carte adaptée, et luges d'été et lacs de baignade complètent l'offre.",
      },
      {
        question: "Combien coûte un voyage en Suisse ?",
        answer:
          "Le budget dépend de la durée, de la saison, des régions visitées, du niveau d'hébergement et des activités incluses, en tenant compte d'un coût de la vie plus élevé qu'en France. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      ...jsonLdCommon(
        "en Suisse",
        "des circuits en trains panoramiques, des séjours randonnée, des séjours au ski, des escapades lacustres et des voyages entièrement sur mesure.",
        "Hôtels de montagne avec spa, chalets traditionnels en bois, hôtels historiques au bord des lacs et auberges d'altitude face aux glaciers.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Suisse, le train
        remplace naturellement l&apos;avion et la voiture&nbsp;: nous
        construisons la majorité de nos itinéraires sur le réseau ferroviaire,
        avec des hébergements familiaux et des prestataires attentifs à la
        préservation des milieux alpins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Suisse commence ici",
    body: "Parlez-nous de votre projet. Trains panoramiques, randonnée face au Cervin, escapade au bord des lacs ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default suisse;
