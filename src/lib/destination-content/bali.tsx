import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const bali: DestinationContent = {
  slug: "bali",
  meta: {
    title:
      "Voyage à Bali : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Bali avec CTA Voyages. Rizières de Tegallalang, temples de Tanah Lot et Uluwatu, lever de soleil au Mont Batur, plages du sud et Nusa Penida. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Temple au bord de l'eau et rizières en terrasses au coucher du soleil — Voyage à Bali avec CTA Voyages",
    label: "Destination Bali",
    h1: "Voyage à Bali : île des dieux, rizières et temples sacrés",
    description:
      "Circuit culturel, séjour balnéaire, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~16h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+7h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Indonésien",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Roupie (IDR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril à octobre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Bali, l'Île des Dieux",
    body: (
      <>
        Surnommée l&apos;<strong>Île des Dieux</strong>, Bali concentre dans un
        écrin de verdure tout ce qui fait la magie de l&apos;Indonésie : rizières
        en terrasses ciselées à flanc de colline, temples hindous suspendus
        au-dessus de l&apos;océan, volcans fumants et plages de sable doré. De
        l&apos;effervescence artistique d&apos;<strong>Ubud</strong>, capitale
        spirituelle nichée dans la jungle, aux falaises spectaculaires
        d&apos;<strong>Uluwatu</strong>, des cérémonies parfumées d&apos;encens
        aux eaux cristallines de <strong>Nusa Penida</strong>, chaque étape révèle
        une facette de cette île où la dévotion rythme le quotidien. Gravir le{" "}
        <strong>Mont Batur</strong> avant l&apos;aube, se baigner dans une source
        sacrée, s&apos;initier à la culture balinaise ou se prélasser face au
        coucher de soleil de Seminyak : Bali se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>séjour balnéaire</strong>, en <strong>escapade nature</strong> ou
        en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Bali ?",
    cards: [
      {
        icon: "temple_hindu",
        title: "Des temples enchanteurs",
        text: "Tanah Lot posé sur son rocher, Uluwatu en haut de sa falaise, Besakih le temple mère : Bali est une plongée vibrante au cœur de l'hindouisme balinais.",
        img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=600&fit=crop&auto=format",
        alt: "Temple de Tanah Lot posé sur un rocher face à l'océan au coucher du soleil",
      },
      {
        icon: "agriculture",
        title: "Des rizières spectaculaires",
        text: "Terrasses de Tegallalang et de Jatiluwih, classées à l'UNESCO : un dégradé de verts à perte de vue, sculpté par le système d'irrigation traditionnel subak.",
        img: "https://images.unsplash.com/photo-1531592937781-344ad608fabf?w=800&h=600&fit=crop&auto=format",
        alt: "Rizières en terrasses verdoyantes de Tegallalang près d'Ubud",
      },
      {
        icon: "self_improvement",
        title: "Une île spirituelle",
        text: "Offrandes fleuries, cérémonies, yoga au lever du jour et sources sacrées : Ubud et toute l'île invitent au ressourcement et à la sérénité.",
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&h=600&fit=crop&auto=format",
        alt: "Offrandes balinaises traditionnelles fleuries devant un temple",
      },
      {
        icon: "scuba_diving",
        title: "Des eaux turquoise",
        text: "Plages de sable doré, spots de surf mythiques et snorkeling à Nusa Penida ou Amed : l'archipel balinais déploie des fonds marins parmi les plus beaux d'Asie.",
        img: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&h=600&fit=crop&auto=format",
        alt: "Falaise de Kelingking Beach et eaux turquoise à Nusa Penida",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Bali",
    steps: [
      {
        id: "ubud",
        label: "JOURS 1 À 3",
        title: "Ubud & les rizières de Tegallalang",
        text: "Immersion au cœur spirituel de l'île : la forêt des singes, le marché d'art, les ateliers d'artisans et, à quelques minutes, les célèbres rizières en terrasses de Tegallalang baignées de lumière.",
        img: "https://images.unsplash.com/photo-1531592937781-344ad608fabf?w=800&h=600&fit=crop&auto=format",
        alt: "Rizières en terrasses de Tegallalang près d'Ubud",
        align: "left",
      },
      {
        id: "temples",
        label: "JOUR 4",
        title: "Tanah Lot & Uluwatu : les temples sacrés",
        text: "Journée dédiée aux deux temples les plus emblématiques de Bali : Tanah Lot, posé sur son rocher battu par les vagues, et Uluwatu, perché sur sa falaise, où s'achève la journée par une danse Kecak au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=600&fit=crop&auto=format",
        alt: "Temple de Tanah Lot au coucher du soleil",
        align: "right",
      },
      {
        id: "batur",
        label: "JOUR 5",
        title: "Lever de soleil au Mont Batur",
        text: "Ascension nocturne du volcan Batur pour assister, depuis le sommet, à un lever de soleil inoubliable au-dessus des nuages et du lac de cratère. Détente méritée ensuite dans les sources d'eau chaude voisines.",
        img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=600&fit=crop&auto=format",
        alt: "Lever de soleil depuis le sommet du Mont Batur",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "plages-sud",
        label: "JOURS 6 À 8",
        title: "Les plages du sud : Seminyak & Jimbaran",
        text: "Cap au sud pour une parenthèse balnéaire : couchers de soleil et beach clubs de Seminyak, dîner de fruits de mer les pieds dans le sable sur la plage de Jimbaran, et farniente face à l'océan Indien.",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable doré et coucher de soleil dans le sud de Bali",
        align: "right",
      },
      {
        id: "nusa-penida",
        label: "JOUR 9",
        title: "Nusa Penida : l'île aux falaises",
        text: "Excursion en bateau vers Nusa Penida et ses panoramas vertigineux : la falaise de Kelingking en forme de T-Rex, les piscines naturelles d'Angel's Billabong et le snorkeling avec les raies manta.",
        img: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&h=600&fit=crop&auto=format",
        alt: "Falaise de Kelingking Beach à Nusa Penida",
        align: "left",
      },
      {
        id: "cascades",
        label: "JOUR 10",
        title: "Cascades & sources sacrées",
        text: "Pour clôturer le voyage en douceur : la cascade de Tegenungan, les eaux bleutées de Sekumpul et le temple-source de Tirta Empul, où l'on assiste au rituel de purification dans les bassins sacrés.",
        img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop&auto=format",
        alt: "Cascade luxuriante au cœur de la jungle balinaise",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme les îles Gili, Amed et ses fonds marins,
        Munduk et ses lacs ou une extension vers Lombok peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Bali",
    left: [
      {
        question: <>Quelle est la meilleure période pour visiter Bali&nbsp;?</>,
        answer: (
          <>
            <p>
              Bali se visite toute l&apos;année grâce à son climat tropical, mais
              une saison se distingue :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (avril à octobre)</strong> : la période
                idéale, ensoleillée et moins humide, parfaite pour combiner
                culture, randonnées et plages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison des pluies (novembre à mars)</strong> : averses
                souvent courtes, paysages d&apos;un vert éclatant et tarifs plus
                doux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juillet et août</strong> : le pic touristique, avec une
                ambiance animée — pensez à réserver tôt.
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
        question: <>Faut-il un visa pour se rendre à Bali&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa à l&apos;arrivée (VOA) est requis pour
              les ressortissants français, simple à obtenir.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le <strong>visa à l&apos;arrivée</strong> s&apos;obtient en ligne
                (e-VOA) ou à l&apos;aéroport pour un séjour touristique.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                d&apos;entrée est exigé.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>taxe touristique</strong> est également demandée à
                l&apos;entrée sur l&apos;île.
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
        question: <>Quels types de voyages proposez-vous à Bali&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Bali :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire dans le sud ou ressourcement à
                Ubud.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné île & îles</strong> : Bali, puis Nusa Penida, les
                Gili ou Lombok.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : villas privées et expériences
                d&apos;exception.
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
                Les <strong>étapes et la durée</strong> : Ubud, Uluwatu, Mont
                Batur, Nusa Penida, les Gili…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : villa avec piscine,
                resort en bord de mer, lodge dans les rizières.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : cours de cuisine,
                yoga, surf, plongée avec les raies manta.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Bali&nbsp;?</>,
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
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales visites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets, bons,
                programmes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout
                votre séjour.
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
                <strong>Villas privées avec piscine</strong> nichées dans la
                jungle ou face à l&apos;océan.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plages du
                sud.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et écolodges</strong> au cœur des rizières
                d&apos;Ubud.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de
                caractère.
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
        question: "Quelle est la meilleure période pour visiter Bali ?",
        answer:
          "La saison sèche, d'avril à octobre, est la période idéale : ensoleillée et moins humide, parfaite pour combiner culture, randonnées et plages. La saison des pluies (novembre à mars) offre des paysages d'un vert éclatant et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre à Bali ?",
        answer:
          "Oui, un visa à l'arrivée (VOA) est requis pour les ressortissants français, simple à obtenir en ligne (e-VOA) ou à l'aéroport. Un passeport valide au moins 6 mois après l'entrée est exigé, ainsi qu'une taxe touristique.",
      },
      {
        question: "Quels types de voyages proposez-vous à Bali ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits culturels, des combinés île et îles (Nusa Penida, Gili, Lombok), des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Bali ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Bali ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à Bali ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous à Bali ?",
        answer:
          "Villas privées avec piscine, resorts pieds dans l'eau sur les plages du sud, lodges au cœur des rizières d'Ubud et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage à Bali ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Bali comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements
        engagés dans la préservation des rizières et de l&apos;eau, et un tourisme
        respectueux des traditions et des écosystèmes de l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Bali commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné île et îles ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default bali;
