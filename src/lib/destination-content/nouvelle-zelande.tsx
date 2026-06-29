import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const nouvelleZelande: DestinationContent = {
  slug: "nouvelle-zelande",
  meta: {
    title:
      "Voyage en Nouvelle-Zélande : circuit, autotour et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Nouvelle-Zélande avec CTA Voyages. Fjords du Milford Sound, geysers de Rotorua, Hobbiton, aventure à Queenstown, glaciers de Franz Josef. Circuit, autotour ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Montagnes et lac turquoise au cœur des fjords — Voyage en Nouvelle-Zélande avec CTA Voyages",
    label: "Destination Nouvelle-Zélande",
    h1: "Voyage en Nouvelle-Zélande : fjords, volcans et grands espaces",
    description:
      "Circuit nature, autotour entre les deux îles, escapade aventure ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+11h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~24h (avec escale)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langues",
      value: "Anglais & maori",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dollar néo-zélandais (NZD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Décembre à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Nouvelle-Zélande, terre de tous les contrastes",
    body: (
      <>
        À l&apos;autre bout du monde, la Nouvelle-Zélande concentre sur deux îles
        une diversité de paysages à couper le souffle. Des fjords vertigineux du{" "}
        <strong>Milford Sound</strong> aux sommets enneigés des Alpes du Sud, des
        geysers fumants de <strong>Rotorua</strong> aux plages sauvages de la côte,
        chaque kilomètre dévoile un décor de cinéma — celui-là même qui a inspiré la
        saga du Seigneur des Anneaux. Ici, la nature est reine : volcans en activité,
        glaciers descendant jusqu&apos;à la forêt tropicale, lacs d&apos;un bleu
        irréel et collines verdoyantes peuplées de moutons. Mais l&apos;Aotearoa,
        « le pays du long nuage blanc », c&apos;est aussi la{" "}
        <strong>culture maorie</strong> vivante et chaleureuse, l&apos;esprit
        aventurier de <strong>Queenstown</strong>, capitale mondiale des sports
        extrêmes, et une hospitalité sincère. La Nouvelle-Zélande se vit aussi bien
        en <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>autotour entre les deux îles</strong>, en{" "}
        <strong>escapade aventure</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Nouvelle-Zélande ?",
    cards: [
      {
        icon: "landscape",
        title: "Des paysages grandioses",
        text: "Fjords, glaciers, volcans, lacs turquoise et montagnes : la Nouvelle-Zélande offre l'une des plus extraordinaires concentrations de paysages naturels au monde.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Vallée verdoyante et montagnes enneigées des Alpes du Sud, Nouvelle-Zélande",
      },
      {
        icon: "hiking",
        title: "Le paradis de l'aventure",
        text: "Saut à l'élastique, randonnées mythiques, kayak dans les fjords ou jet-boat : Queenstown et toute l'île du Sud sont un terrain de jeu pour les amoureux de sensations.",
        img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&h=600&fit=crop&auto=format",
        alt: "Randonneurs face à un lac et des montagnes près de Queenstown",
      },
      {
        icon: "volcano",
        title: "Une terre volcanique vivante",
        text: "Geysers, sources d'eau chaude, bassins de boue bouillonnante : la région de Rotorua et le parc de Tongariro révèlent l'énergie brute de la Terre.",
        img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=600&fit=crop&auto=format",
        alt: "Geyser et terrasses géothermiques colorées à Rotorua",
      },
      {
        icon: "diversity_3",
        title: "La culture maorie",
        text: "Cérémonies traditionnelles, haka, sculptures et légendes : à la rencontre du peuple maori, gardien d'une culture millénaire et profondément liée à la nature.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
        alt: "Sculpture maorie traditionnelle en bois, Nouvelle-Zélande",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Nouvelle-Zélande",
    steps: [
      {
        id: "auckland",
        label: "JOURS 1 À 3",
        title: "Auckland : la cité des voiles",
        text: "Première immersion dans la plus grande ville du pays, posée entre deux ports. Panorama depuis la Sky Tower, quartiers du front de mer, vignobles de Waiheke Island et premiers paysages volcaniques.",
        img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop&auto=format",
        alt: "Auckland",
        align: "left",
      },
      {
        id: "rotorua",
        label: "JOURS 4 ET 5",
        title: "Rotorua : geysers & culture maorie",
        text: "Au cœur de la zone géothermique, geysers jaillissants, lacs colorés et sources chaudes fumantes. Soirée immersion dans un village maori : cérémonie traditionnelle, haka et hangi, le repas cuit sous terre.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Rotorua",
        align: "right",
      },
      {
        id: "hobbiton",
        label: "JOUR 6",
        title: "Hobbiton : au pays des Hobbits",
        text: "Sur la route, halte dans la célèbre Comté du Seigneur des Anneaux. Les trous de hobbits aux portes rondes, les jardins fleuris et l'auberge du Dragon Vert : un décor de cinéma préservé au milieu des collines verdoyantes.",
        img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=600&fit=crop&auto=format",
        alt: "Hobbiton",
        align: "left",
      },
      {
        id: "queenstown",
        label: "JOURS 7 À 9",
        title: "Queenstown : la capitale de l'aventure",
        text: "Envol vers l'île du Sud et sa station mythique au bord du lac Wakatipu. Saut à l'élastique, jet-boat, télécabine panoramique ou simples randonnées : à chacun son rythme, entre adrénaline et grands espaces.",
        img: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&h=600&fit=crop&auto=format",
        alt: "Queenstown",
        align: "right",
      },
      {
        id: "milford-sound",
        label: "JOUR 10",
        title: "Milford Sound : le joyau des fjords",
        text: "Excursion vers le plus spectaculaire des fjords néo-zélandais. Croisière entre les parois abruptes, les cascades et les sommets plongeant dans la mer, au cœur du parc national du Fiordland classé à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
        alt: "Milford Sound",
        align: "left",
      },
      {
        id: "franz-josef",
        label: "JOURS 11 ET 12",
        title: "Franz Josef : les glaciers",
        text: "Remontée par la côte ouest sauvage jusqu'aux glaciers Franz Josef et Fox, où la glace descend jusqu'à la forêt tropicale. Marche sur la glace, survol en hélicoptère ou randonnée face aux séracs pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1580196969807-cc6de06c05be?w=800&h=600&fit=crop&auto=format",
        alt: "Franz Josef",
        align: "right",
        objectPosition: "center 40%",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le parc national de Tongariro, la péninsule de
        Coromandel, Wellington, Wanaka ou le Mont Cook peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Nouvelle-Zélande",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Nouvelle-Zélande&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Les saisons sont inversées par rapport à l&apos;Europe. Plusieurs
              périodes se prêtent au voyage :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été austral (décembre à mars)</strong> : la période idéale,
                chaude et ensoleillée, parfaite pour les randonnées et les fjords.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (avril-mai)</strong> : couleurs flamboyantes,
                affluence moindre et lumière magnifique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (juin à août)</strong> : idéal pour les sports de
                neige autour de Queenstown et Wanaka.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et l&apos;itinéraire les
              plus adaptés à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Nouvelle-Zélande&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas de visa</strong>, mais une autorisation électronique est
              requise pour les ressortissants français :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le <strong>NZeTA</strong> (autorisation de voyage électronique) doit
                être obtenu avant le départ.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> pour toute la durée du séjour est
                exigé.
              </li>
              <li>
                <Icon name="check" />
                Une taxe touristique (IVL) est généralement incluse dans le NZeTA.
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
        question: <>Quels types de voyages proposez-vous en Nouvelle-Zélande&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la
              Nouvelle-Zélande :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Autotour</strong> : road-trip en liberté entre l&apos;île du
                Nord et l&apos;île du Sud.
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
                <strong>Séjour aventure</strong> : randonnées, sports extrêmes et
                grands espaces.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et expériences
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
                Les <strong>étapes et la durée</strong> : Auckland, Rotorua,
                Queenstown, Milford Sound, Mont Cook…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, lodge de luxe,
                camping-car ou ferme néo-zélandaise.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : croisière dans les
                fjords, vol au-dessus des glaciers, rencontre maorie.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Nouvelle-Zélande&nbsp;?</>,
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
        question: <>Comment se déplace-t-on en Nouvelle-Zélande&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>La voiture est reine</strong> pour profiter pleinement des
              paysages :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Location de voiture ou camping-car</strong> pour un autotour
                en toute liberté.
              </li>
              <li>
                <Icon name="check" />
                <strong>Vols intérieurs</strong> pour relier rapidement les deux îles.
              </li>
              <li>
                <Icon name="check" />
                <strong>Conduite à gauche</strong> : un permis international est
                recommandé.
              </li>
            </ul>
            <p>
              Nous organisons l&apos;ensemble de votre logistique sur place pour un
              voyage serein.
            </p>
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges de luxe</strong> face aux lacs et aux montagnes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camping-cars équipés</strong> pour les amateurs de liberté.
              </li>
              <li>
                <Icon name="check" />
                <strong>Fermes et adresses de charme</strong> pour une immersion
                authentique.
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
        question:
          "Quelle est la meilleure période pour visiter la Nouvelle-Zélande ?",
        answer:
          "L'été austral, de décembre à mars, est la période idéale : chaud et ensoleillé, parfait pour les randonnées et les fjords. L'automne (avril-mai) offre de belles couleurs et moins d'affluence, tandis que l'hiver convient aux sports de neige.",
      },
      {
        question: "Faut-il un visa pour se rendre en Nouvelle-Zélande ?",
        answer:
          "Pas de visa, mais une autorisation électronique NZeTA est requise pour les ressortissants français et doit être obtenue avant le départ. Un passeport valide pour toute la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Nouvelle-Zélande ?",
        answer:
          "CTA Voyages propose des autotours entre les deux îles, des circuits nature, des séjours aventure, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question:
          "Peut-on personnaliser entièrement l'itinéraire en Nouvelle-Zélande ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Nouvelle-Zélande ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplace-t-on en Nouvelle-Zélande ?",
        answer:
          "La voiture est le moyen idéal : location de voiture ou camping-car pour un autotour, vols intérieurs pour relier les deux îles. La conduite se fait à gauche et un permis international est recommandé.",
      },
      {
        question: "Quels hébergements proposez-vous en Nouvelle-Zélande ?",
        answer:
          "Hôtels 4 et 5 étoiles, lodges de luxe face aux lacs et montagnes, camping-cars équipés et fermes ou adresses de charme pour une immersion authentique.",
      },
      {
        question: "Comment demander un devis pour un voyage en Nouvelle-Zélande ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Nouvelle-Zélande comme ailleurs,
        nous privilégions des prestataires locaux engagés, le respect des sites
        naturels protégés et des parcs nationaux, ainsi qu&apos;une découverte
        authentique de la culture maorie, dans l&apos;esprit du{" "}
        <em>kaitiakitanga</em>, la protection de la nature chère au peuple
        néo-zélandais.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Nouvelle-Zélande commence ici",
    body: "Parlez-nous de votre projet. Autotour, circuit nature, séjour aventure ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default nouvelleZelande;
