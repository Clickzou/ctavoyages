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

const bolivie: DestinationContent = {
  slug: "bolivie",
  meta: {
    title:
      "Voyage en Bolivie : séjour, circuit et voyage sur mesure",
    description:
      "Organisez votre voyage en Bolivie avec CTA Voyages. Salar d'Uyuni et son effet miroir, lagunes du Sud Lípez, lac Titicaca et Isla del Sol, La Paz, Potosí et Sucre. Circuit ou voyage sur mesure.",
  },
  hero: {
    image: "/generated/bolivie.jpg",
    imageAlt:
      "Effet miroir sur le salar d'Uyuni en Bolivie — Voyage en Bolivie avec CTA Voyages",
    label: "Destination Bolivie",
    h1: "Voyage en Bolivie : salar d'Uyuni, Andes et lagunes colorées",
    description:
      "Traversée du salar d'Uyuni, découverte du lac Titicaca, combiné andin avec le Pérou ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~17h (avec escale)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-6h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Espagnol, quechua, aymara",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Boliviano (BOB)",
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
    h2: "La Bolivie, le pays des altitudes et des couleurs impossibles",
    body: (
      <>
        La Bolivie est le pays le plus élevé d&apos;Amérique du Sud, et
        probablement le plus photogénique. Le{" "}
        <strong>salar d&apos;Uyuni</strong>, plus grand désert de sel du monde
        avec ses dix mille kilomètres carrés, se transforme en immense miroir
        après les pluies&nbsp;: le ciel et le sol se confondent, et toute notion
        d&apos;échelle disparaît. Plus au sud, le{" "}
        <strong>Sud Lípez</strong> aligne à près de cinq mille mètres
        d&apos;altitude des lagunes rouges et vertes peuplées de flamants, des
        geysers bouillonnants et des déserts de pierre. Au nord, le{" "}
        <strong>lac Titicaca</strong>, plus haut lac navigable de la planète,
        abrite l&apos;<strong>Isla del Sol</strong>, berceau mythique des Incas,
        et des communautés <strong>aymaras</strong> qui perpétuent des traditions
        millénaires. <strong>La Paz</strong> s&apos;étage entre 3 200 et 4 100
        mètres, reliée par un réseau de téléphériques urbains unique au
        monde&nbsp;; <strong>Potosí</strong> et <strong>Sucre</strong> conservent
        l&apos;héritage colonial de l&apos;argent. <strong>Circuit</strong>,{" "}
        <strong>combiné andin</strong> ou{" "}
        <strong>voyage sur mesure</strong>&nbsp;: nous organisons chaque étape.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Bolivie ?",
    cards: [
      {
        icon: "water",
        title: "Le salar d'Uyuni",
        text: "Dix mille kilomètres carrés de sel, un horizon parfaitement plat, et de janvier à mars un miroir géant où le ciel se reflète à l'infini.",
        img: "/generated/bolivie-1.jpg",
        alt: "Étendue de sel du salar d'Uyuni avec effet miroir",
      },
      {
        icon: "landscape",
        title: "Les lagunes du Sud Lípez",
        text: "Laguna Colorada et ses eaux rouges, laguna Verde au pied du volcan Licancabur, geysers du Sol de Mañana : un autre monde, à 4 800 mètres.",
        img: "/generated/bolivie-3.jpg",
        alt: "Lagune colorée et flamants roses sur l'altiplano bolivien",
      },
      {
        icon: "sailing",
        title: "Le lac Titicaca",
        text: "Le plus haut lac navigable du monde, ses eaux d'un bleu profond, l'Isla del Sol et les communautés aymaras de ses rives.",
        img: "/generated/bolivie-4.jpg",
        alt: "Lac Titicaca et embarcation traditionnelle au pied des Andes",
      },
      {
        icon: "location_city",
        title: "La Paz & l'héritage colonial",
        text: "Une capitale accrochée à un canyon, ses téléphériques urbains, son marché des sorcières, puis Potosí et Sucre, joyaux de l'époque coloniale.",
        img: "/generated/bolivie-2.jpg",
        alt: "Ville de La Paz étagée dans son canyon andin",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Bolivie",
    steps: [
      {
        id: "la-paz",
        label: "JOURS 1 ET 2",
        title: "La Paz & la Vallée de la Lune",
        text: "Arrivée à 3 600 mètres et acclimatation en douceur : téléphériques urbains, marché des sorcières, Vallée de la Lune et panorama sur l'Illimani.",
        img: "/generated/bolivie-2.jpg",
        alt: "Quartiers étagés et téléphériques urbains de La Paz",
        align: "left",
      },
      {
        id: "titicaca",
        label: "JOURS 3 ET 4",
        title: "Lac Titicaca & Isla del Sol",
        text: "Route vers Copacabana et navigation vers l'Isla del Sol : sentiers incas, terrasses agricoles, villages aymaras et coucher de soleil sur le lac.",
        img: "/generated/bolivie-4.jpg",
        alt: "Rives et terrasses de l'Isla del Sol sur le lac Titicaca",
        align: "right",
      },
      {
        id: "sucre-potosi",
        label: "JOURS 5 ET 6",
        title: "Sucre & Potosí",
        text: "Vol vers la capitale constitutionnelle et ses façades blanches classées à l'UNESCO, puis Potosí, l'ancienne cité de l'argent, à 4 000 mètres d'altitude.",
        img: "/generated/bolivie-2.jpg",
        alt: "Ville andine et architecture coloniale bolivienne en altitude",
        align: "left",
      },
      {
        id: "uyuni",
        label: "JOURS 7 ET 8",
        title: "Le salar d'Uyuni",
        text: "Traversée du plus grand désert de sel du monde en 4x4 : cimetière de trains, île Incahuasi et ses cactus géants, coucher de soleil sur l'infini blanc.",
        img: "/generated/bolivie-1.jpg",
        alt: "Traversée en 4x4 du désert de sel d'Uyuni",
        align: "right",
      },
      {
        id: "sud-lipez",
        label: "JOURS 9 À 11",
        title: "Le Sud Lípez & les lagunes",
        text: "Deux jours d'expédition à haute altitude : laguna Colorada et ses flamants, geysers du Sol de Mañana à l'aube, sources chaudes et laguna Verde.",
        img: "/generated/bolivie-3.jpg",
        alt: "Lagune rouge et volcans du Sud Lípez bolivien",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        Le circuit se prolonge naturellement vers le Pérou et le Machu Picchu, ou
        vers l&apos;Atacama chilien depuis la laguna Verde.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Bolivie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Bolivie&nbsp;?</>
        ),
        answer: (
          <>
            <p>Deux périodes, deux expériences très différentes&nbsp;:</p>
            {checklist([
              <>
                <strong>De mai à octobre</strong>&nbsp;: la saison sèche, ciel
                dégagé et pistes praticables — la période la plus sûre pour le
                Sud Lípez.
              </>,
              <>
                <strong>De janvier à mars</strong>&nbsp;: la fine pellicule
                d&apos;eau sur le salar produit le fameux effet miroir, mais
                certaines pistes deviennent impraticables.
              </>,
              <>
                <strong>Les nuits sont très froides</strong> toute
                l&apos;année en altitude&nbsp;: jusqu&apos;à -15 °C dans le Sud
                Lípez.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Comment gérer l&apos;altitude&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est le vrai point d&apos;attention du voyage.</strong>{" "}
              La Paz culmine à 3 600 m, le Sud Lípez à 4 800 m.
            </p>
            {checklist([
              <>
                Nous prévoyons une <strong>acclimatation progressive</strong> dès
                les premiers jours, sans effort intense.
              </>,
              <>
                <strong>Hydratation, repas légers</strong> et infusion de coca,
                l&apos;usage local contre le mal des montagnes.
              </>,
              <>
                Un <strong>avis médical préalable</strong> est recommandé en cas
                de problème cardiaque ou respiratoire.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Bolivie", [
        <>
          <strong>Circuit classique</strong>&nbsp;: La Paz, Titicaca, Sucre et
          Uyuni.
        </>,
        <>
          <strong>Expédition Sud Lípez</strong>&nbsp;: 4x4 et lagunes
          d&apos;altitude sur plusieurs jours.
        </>,
        <>
          <strong>Combiné Pérou & Bolivie</strong>&nbsp;: du Machu Picchu au
          salar d&apos;Uyuni.
        </>,
        <>
          <strong>Combiné Bolivie & Chili</strong>&nbsp;: passage vers
          l&apos;Atacama par la laguna Verde.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>étapes et la durée</strong>&nbsp;: altiplano seul ou
          combiné avec les pays voisins.
        </>,
        <>
          Le <strong>confort</strong>&nbsp;: expédition 4x4 partagée ou véhicule
          privatif avec guide francophone.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: nuit en hôtel de sel, marché de
          Tarabuco, rencontre des communautés aymaras.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Bolivie",
        "Le format de l'expédition dans le Sud Lípez : 4x4 partagé ou privatif",
      ),
      {
        question: <>Quand voir l&apos;effet miroir du salar&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Entre janvier et mars, principalement</strong>, mais
              c&apos;est un phénomène capricieux&nbsp;:
            </p>
            {checklist([
              <>
                Il faut une <strong>fine couche d&apos;eau</strong> laissée par
                les pluies sur la croûte de sel.
              </>,
              <>
                Février est <strong>statistiquement le meilleur mois</strong>,
                sans aucune garantie.
              </>,
              <>
                En contrepartie, l&apos;accès à certaines zones du salar et au
                Sud Lípez peut être <strong>limité par les inondations</strong>.
              </>,
            ])}
            <p>
              Nous vous aidons à arbitrer entre effet miroir et accessibilité
              complète.
            </p>
          </>
        ),
      },
      faqHebergements("en Bolivie", [
        <>
          <strong>Hôtels de sel</strong>, entièrement bâtis en blocs de sel, en
          bordure du salar.
        </>,
        <>
          <strong>Hôtels de charme</strong> dans les demeures coloniales de Sucre
          et La Paz.
        </>,
        <>
          <strong>Écolodges</strong> sur les rives du lac Titicaca.
        </>,
        <>
          <strong>Refuges d&apos;altitude</strong> simples mais chaleureux dans le
          Sud Lípez.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Bolivie ?",
        answer:
          "De mai à octobre pendant la saison sèche, avec un ciel dégagé et des pistes praticables, période la plus sûre pour le Sud Lípez. De janvier à mars, le salar d'Uyuni offre son effet miroir mais certaines pistes deviennent impraticables.",
      },
      {
        question: "Comment gérer l'altitude en Bolivie ?",
        answer:
          "La Paz culmine à 3 600 m et le Sud Lípez à 4 800 m : nous prévoyons une acclimatation progressive dès les premiers jours, sans effort intense, avec hydratation, repas légers et infusion de coca. Un avis médical préalable est recommandé en cas de problème cardiaque ou respiratoire.",
      },
      {
        question: "Quand voir l'effet miroir du salar d'Uyuni ?",
        answer:
          "Principalement entre janvier et mars, lorsqu'une fine couche d'eau recouvre la croûte de sel, février étant statistiquement le meilleur mois sans garantie. En contrepartie, l'accès à certaines zones peut être limité par les inondations.",
      },
      {
        question: "Combien coûte un voyage en Bolivie ?",
        answer:
          "Le budget dépend de la durée, de la saison, des étapes visitées, du format de l'expédition dans le Sud Lípez (4x4 partagé ou privatif), du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "en Bolivie",
        "des circuits classiques La Paz-Titicaca-Sucre-Uyuni, des expéditions dans le Sud Lípez, des combinés Pérou-Bolivie ou Bolivie-Chili et des voyages entièrement sur mesure.",
        "Hôtels de sel en bordure du salar, hôtels de charme dans les demeures coloniales de Sucre et La Paz, écolodges au bord du lac Titicaca et refuges d'altitude dans le Sud Lípez.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Bolivie, nous
        travaillons avec des agences locales et des chauffeurs-guides boliviens,
        favorisons les hébergements communautaires du lac Titicaca et veillons à
        la gestion des déchets dans le Sud Lípez, un milieu désertique où rien ne
        se dégrade.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Bolivie commence ici",
    body: "Parlez-nous de votre projet. Traversée du salar d'Uyuni, expédition dans le Sud Lípez, combiné andin avec le Pérou ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default bolivie;
