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

const coreeDuSud: DestinationContent = {
  slug: "coree-du-sud",
  meta: {
    title:
      "Voyage en Corée du Sud : séjour, circuit",
    description:
      "Organisez votre voyage en Corée du Sud avec CTA Voyages. Séoul et ses palais, village hanok de Bukchon, Gyeongju, temple stay, île de Jeju et gastronomie coréenne. Circuit ou voyage sur mesure.",
  },
  hero: {
    image: "/generated/coree-du-sud.jpg",
    imageAlt:
      "Palais traditionnel coréen et maisons hanok à Séoul — Voyage en Corée du Sud avec CTA Voyages",
    label: "Destination Corée du Sud",
    h1: "Voyage en Corée du Sud : palais, néons et montagnes sacrées",
    description:
      "Circuit culturel de Séoul à Busan, immersion en temple, escapade sur l'île de Jeju ou voyage entièrement sur mesure.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h30 (direct)",
    },
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+7h (été)",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    { kind: "fact", icon: "translate", label: "Langue", value: "Coréen" },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Won (KRW)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril-juin / sept.-novembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Corée du Sud, entre dynasties et hypermodernité",
    body: (
      <>
        En une seule rue de <strong>Séoul</strong>, on passe d&apos;un palais de
        la dynastie Joseon à une avenue de néons, d&apos;une maison{" "}
        <em>hanok</em> aux toits recourbés à un café perché au trente-septième
        étage. Cette cohabitation permanente est ce qui rend la Corée du Sud
        fascinante. La capitale concentre cinq palais royaux, dont{" "}
        <strong>Gyeongbokgung</strong> et sa relève de la garde, le village
        traditionnel de <strong>Bukchon</strong> et des quartiers créatifs qui
        dictent les tendances de toute l&apos;Asie. Au sud,{" "}
        <strong>Gyeongju</strong>, « musée sans murs », conserve les tombes
        royales et les temples du royaume de Silla&nbsp;;{" "}
        <strong>Busan</strong> mêle plages, marché aux poissons et villages
        accrochés à la colline. Partout, des <strong>temples de montagne</strong>{" "}
        où l&apos;on peut passer une nuit en <em>temple stay</em>, et une{" "}
        <strong>gastronomie</strong> généreuse qui se partage au centre de la
        table. Au large, l&apos;île volcanique de <strong>Jeju</strong> offre
        cratères, sentiers côtiers et plongeuses <em>haenyeo</em>.{" "}
        <strong>Circuit</strong>, <strong>city break</strong>,{" "}
        <strong>voyage gastronomique</strong> ou{" "}
        <strong>séjour sur mesure</strong>&nbsp;: tout est possible.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Corée du Sud ?",
    cards: [
      {
        icon: "castle",
        title: "Les palais de Séoul",
        text: "Cinq palais royaux au cœur de la ville, la relève de la garde en costume et le village hanok de Bukchon, entre gratte-ciel et montagnes.",
        img: "/generated/coree-du-sud-2.jpg",
        alt: "Palais royal coréen et toits traditionnels à Séoul",
      },
      {
        icon: "temple_buddhist",
        title: "Les temples de montagne",
        text: "Nichés dans les forêts, ils accueillent les voyageurs pour une nuit de temple stay : méditation à l'aube, repas monastique et silence absolu.",
        img: "/generated/coree-du-sud-1.jpg",
        alt: "Temple bouddhiste coréen niché dans la forêt de montagne",
      },
      {
        icon: "restaurant",
        title: "La table coréenne",
        text: "Barbecue, bibimbap, kimchi et une nuée de petits plats partagés : l'une des cuisines les plus généreuses et les plus vivantes d'Asie.",
        img: "/generated/coree-du-sud-3.jpg",
        alt: "Table coréenne garnie de plats partagés et de banchan",
      },
      {
        icon: "forest",
        title: "Les saisons spectaculaires",
        text: "Cerisiers en fleurs en avril, érables écarlates en octobre : la Corée vit intensément ses saisons, et ses paysages changent du tout au tout.",
        img: "/generated/coree-du-sud-4.jpg",
        alt: "Forêt coréenne aux couleurs d'automne et sentier de montagne",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Corée du Sud",
    steps: [
      {
        id: "seoul",
        label: "JOURS 1 À 4",
        title: "Séoul, la capitale bouillonnante",
        text: "Palais de Gyeongbokgung et relève de la garde, village hanok de Bukchon, marché de Gwangjang, quartiers créatifs d'Insadong et Hongdae, et vue de nuit depuis la tour Namsan.",
        img: "/generated/coree-du-sud-2.jpg",
        alt: "Palais royal et gratte-ciel de Séoul",
        align: "left",
      },
      {
        id: "dmz",
        label: "JOUR 5",
        title: "La zone démilitarisée",
        text: "Excursion vers la frontière la plus surveillée du monde : postes d'observation sur la Corée du Nord, tunnels d'infiltration et pont de la Liberté.",
        img: "/generated/coree-du-sud.jpg",
        alt: "Paysage de collines à la frontière intercoréenne",
        align: "right",
      },
      {
        id: "temple-stay",
        label: "JOURS 6 ET 7",
        title: "Temple stay en montagne",
        text: "Immersion dans un monastère bouddhiste : cérémonie du thé, méditation au lever du jour, repas monastique et randonnée dans les forêts du parc national.",
        img: "/generated/coree-du-sud-1.jpg",
        alt: "Temple bouddhiste en montagne et sentier forestier",
        align: "left",
      },
      {
        id: "gyeongju",
        label: "JOURS 8 ET 9",
        title: "Gyeongju, capitale de Silla",
        text: "Tombes royales en forme de tumulus, grotte de Seokguram et temple de Bulguksa classés à l'UNESCO : mille ans d'histoire coréenne à ciel ouvert.",
        img: "/generated/coree-du-sud-1.jpg",
        alt: "Tumulus royaux et pavillons historiques de Gyeongju",
        align: "right",
      },
      {
        id: "busan",
        label: "JOURS 10 À 12",
        title: "Busan & la côte",
        text: "Fin du voyage dans la grande ville portuaire : marché aux poissons de Jagalchi, village coloré de Gamcheon, temple maritime de Haedong Yonggungsa et plages.",
        img: "/generated/coree-du-sud-3.jpg",
        alt: "Marché de nuit et étals de cuisine coréenne à Busan",
        align: "left",
      },
    ],
    disclaimer: itineraryDisclaimer(
      <>
        L&apos;île volcanique de Jeju, la ville de Jeonju et son village hanok ou
        une extension vers le Japon complètent aisément le programme.
      </>,
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Corée du Sud",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour la Corée du Sud&nbsp;?</>
        ),
        answer: (
          <>
            <p>Deux saisons se détachent nettement&nbsp;:</p>
            {checklist([
              <>
                <strong>D&apos;avril à juin</strong>&nbsp;: la floraison des
                cerisiers en avril puis un printemps doux et lumineux.
              </>,
              <>
                <strong>De septembre à novembre</strong>&nbsp;: l&apos;automne et
                ses érables écarlates, sans doute la plus belle saison.
              </>,
              <>
                <strong>Juillet et août</strong>&nbsp;: chauds et humides, avec la
                mousson&nbsp;; l&apos;hiver est sec mais froid, propice au ski.
              </>,
            ])}
          </>
        ),
      },
      {
        question: <>Quelles formalités pour la Corée du Sud&nbsp;?</>,
        answer: (
          <>
            <p>Les démarches sont légères&nbsp;:</p>
            {checklist([
              <>
                <strong>Aucun visa</strong> pour les ressortissants français pour
                un séjour touristique jusqu&apos;à 90 jours.
              </>,
              <>
                Une <strong>autorisation électronique (K-ETA)</strong> peut être
                requise selon la période&nbsp;: nous vous le confirmons.
              </>,
              <>
                <strong>Passeport valide</strong> pendant toute la durée du
                séjour.
              </>,
            ])}
          </>
        ),
      },
      faqFormules("en Corée du Sud", [
        <>
          <strong>Circuit culturel</strong>&nbsp;: Séoul, Gyeongju et Busan en
          train à grande vitesse.
        </>,
        <>
          <strong>City break</strong>&nbsp;: Séoul en séjour court, souvent en
          stopover.
        </>,
        <>
          <strong>Temple stay & nature</strong>&nbsp;: monastères, parcs
          nationaux et randonnée.
        </>,
        <>
          <strong>Combiné Corée & Japon</strong>&nbsp;: deux cultures voisines et
          pourtant très différentes.
        </>,
        <>
          <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas à pas
          selon vos envies.
        </>,
      ]),
      faqPersonnalisation([
        <>
          Les <strong>étapes et la durée</strong>&nbsp;: Séoul seule, grand
          circuit ou extension à Jeju.
        </>,
        <>
          Le <strong>rythme</strong>&nbsp;: patrimoine, nature et randonnée, ou
          culture urbaine et gastronomie.
        </>,
        <>
          Les <strong>expériences</strong>&nbsp;: temple stay, cours de cuisine,
          port du hanbok, marché de nuit.
        </>,
      ]),
    ],
    right: [
      faqBudget(
        "en Corée du Sud",
        "Le recours ou non aux trains à grande vitesse et aux guides francophones",
      ),
      {
        question: <>Se déplace-t-on facilement en Corée&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Le pays est remarquablement équipé.</strong>
            </p>
            {checklist([
              <>
                Le <strong>KTX</strong>, train à grande vitesse, relie Séoul à
                Busan en 2h30.
              </>,
              <>
                Le <strong>métro de Séoul</strong> est l&apos;un des plus
                efficaces au monde, avec signalétique en anglais.
              </>,
              <>
                La <strong>barrière de la langue</strong> peut se faire sentir
                hors des grandes villes&nbsp;: nous prévoyons un guide
                francophone sur les étapes clés.
              </>,
            ])}
          </>
        ),
      },
      faqHebergements("en Corée du Sud", [
        <>
          <strong>Hôtels design</strong> dans les quartiers centraux de Séoul.
        </>,
        <>
          <strong>Maisons hanok</strong> traditionnelles restaurées à Séoul et
          Jeonju.
        </>,
        <>
          <strong>Temples bouddhistes</strong> pour une nuit de temple stay.
        </>,
        <>
          <strong>Hôtels balnéaires</strong> à Busan et sur l&apos;île de Jeju.
        </>,
      ]),
      faqDevis(),
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Corée du Sud ?",
        answer:
          "D'avril à juin pour la floraison des cerisiers et un printemps lumineux, et de septembre à novembre pour l'automne et ses érables écarlates, sans doute la plus belle saison. Juillet et août sont chauds et humides avec la mousson.",
      },
      {
        question: "Faut-il un visa pour la Corée du Sud ?",
        answer:
          "Non, aucun visa n'est requis pour les ressortissants français pour un séjour touristique jusqu'à 90 jours. Une autorisation électronique K-ETA peut être demandée selon la période, et le passeport doit être valide pendant tout le séjour.",
      },
      {
        question: "Comment se déplacer en Corée du Sud ?",
        answer:
          "Le train à grande vitesse KTX relie Séoul à Busan en 2h30, le métro de Séoul est l'un des plus efficaces au monde avec une signalétique en anglais, et un guide francophone est conseillé sur les étapes hors des grandes villes.",
      },
      {
        question: "Combien coûte un voyage en Corée du Sud ?",
        answer:
          "Le budget dépend de la durée, de la saison, des étapes choisies, du recours aux trains à grande vitesse et aux guides francophones, du niveau d'hébergement et des activités incluses. Contactez-nous pour une proposition gratuite.",
      },
      ...jsonLdCommon(
        "en Corée du Sud",
        "des circuits culturels de Séoul à Busan, des city breaks à Séoul, des séjours temple stay et nature, des combinés Corée-Japon et des voyages entièrement sur mesure.",
        "Hôtels design dans les quartiers centraux de Séoul, maisons hanok traditionnelles restaurées, temples bouddhistes pour une nuit de temple stay et hôtels balnéaires à Busan et sur l'île de Jeju.",
      ),
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Corée du Sud, nous
        privilégions le train plutôt que les vols intérieurs, les hébergements
        traditionnels tenus par des familles et les expériences qui font vivre
        l&apos;artisanat et les monastères, garants d&apos;un patrimoine
        immatériel fragile.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Corée du Sud commence ici",
    body: "Parlez-nous de votre projet. Circuit culturel de Séoul à Busan, nuit en temple, escapade à Jeju ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default coreeDuSud;
