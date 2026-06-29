import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const canada: DestinationContent = {
  slug: "canada",
  meta: {
    title:
      "Voyage au Canada : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Canada avec CTA Voyages. Montréal et Québec, chutes du Niagara, Rocheuses et lac Louise, Vancouver, observation des baleines et des ours. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Lac turquoise et sommets enneigés des Rocheuses canadiennes — Voyage au Canada avec CTA Voyages",
    label: "Destination Canada",
    h1: "Voyage au Canada : grands espaces et nature sauvage",
    description:
      "Circuit grand Nord, séjour citadin, road trip dans les Rocheuses ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~8h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-6h (Est)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Anglais & français",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dollar canadien (CAD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin à sept., hiver pour la neige",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Canada, l'appel des grands espaces",
    body: (
      <>
        Deuxième plus grand pays du monde, le Canada déploie une nature à couper le
        souffle, des métropoles cosmopolites et un art de vivre où se mêlent
        influences françaises et anglo-saxonnes. Des ruelles pavées du{" "}
        <strong>Vieux-Québec</strong> à l&apos;effervescence créative de{" "}
        <strong>Montréal</strong>, du grondement des{" "}
        <strong>chutes du Niagara</strong> aux lacs turquoise des{" "}
        <strong>Rocheuses</strong>, chaque région révèle une facette de cet immense
        territoire. Observer les baleines dans le Saint-Laurent, croiser un ours noir
        au détour d&apos;une forêt, parcourir la mythique route des glaciers, savourer
        une cabane à sucre au printemps ou s&apos;émerveiller devant les aurores
        boréales : le Canada se vit aussi bien en{" "}
        <strong>circuit nature</strong> qu&apos;en <strong>séjour citadin</strong>, en{" "}
        <strong>road trip</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Canada ?",
    cards: [
      {
        icon: "landscape",
        title: "Des paysages grandioses",
        text: "Lacs turquoise, glaciers, forêts à perte de vue et sommets enneigés : les Rocheuses et leurs parcs nationaux comptent parmi les plus beaux décors du monde.",
        img: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=800&h=600&fit=crop&auto=format",
        alt: "Lac Moraine entouré de sommets dans les Rocheuses canadiennes",
      },
      {
        icon: "pets",
        title: "Une faune sauvage",
        text: "Baleines du Saint-Laurent, ours noirs et grizzlys, orignaux et caribous : le Canada offre des rencontres animalières inoubliables, dans le respect de la nature.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&auto=format",
        alt: "Baleine à bosse surgissant des eaux au large des côtes canadiennes",
      },
      {
        icon: "location_city",
        title: "Des villes vibrantes",
        text: "Montréal la créative, Québec et son charme français, Toronto la cosmopolite, Vancouver entre océan et montagnes : des métropoles à taille humaine et chaleureuses.",
        img: "https://images.unsplash.com/photo-1519178614-68673b201f36?w=800&h=600&fit=crop&auto=format",
        alt: "Ruelles pavées et architecture du Vieux-Québec",
      },
      {
        icon: "forest",
        title: "Une nature généreuse",
        text: "Été indien flamboyant, cabanes à sucre au printemps, aurores boréales l'hiver : au fil des saisons, les grands espaces canadiens se réinventent.",
        img: "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?w=800&h=600&fit=crop&auto=format",
        alt: "Forêt aux couleurs flamboyantes de l'été indien au Canada",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Canada",
    steps: [
      {
        id: "montreal",
        label: "JOURS 1 À 3",
        title: "Montréal : la métropole créative",
        text: "Immersion dans l'énergie de Montréal : le Vieux-Montréal et ses ruelles pavées, le quartier du Plateau-Mont-Royal, le mont Royal et une scène culinaire et artistique parmi les plus vibrantes d'Amérique du Nord.",
        img: "https://images.unsplash.com/photo-1519178614-68673b201f36?w=800&h=600&fit=crop&auto=format",
        alt: "Skyline de Montréal au crépuscule",
        align: "left",
      },
      {
        id: "quebec-charlevoix",
        label: "JOURS 4 À 6",
        title: "Québec & Charlevoix : le charme français",
        text: "Cap sur le Vieux-Québec classé à l'UNESCO, le château Frontenac et les remparts. Puis la région de Charlevoix, ses villages d'artistes, ses fjords et ses premières observations de baleines dans le Saint-Laurent.",
        img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=600&fit=crop&auto=format",
        alt: "Château Frontenac et le Vieux-Québec en bord de fleuve",
        align: "right",
      },
      {
        id: "toronto-niagara",
        label: "JOURS 7 À 9",
        title: "Toronto & les chutes du Niagara",
        text: "Envol vers Toronto, la métropole cosmopolite, sa tour CN et ses quartiers multiculturels. Excursion incontournable vers les spectaculaires chutes du Niagara, à admirer depuis la terre ou en bateau.",
        img: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&h=600&fit=crop&auto=format",
        alt: "Chutes du Niagara avec bateau d'excursion au premier plan",
        align: "left",
      },
      {
        id: "rocheuses",
        label: "JOURS 10 À 13",
        title: "Rocheuses : Banff & lac Louise",
        text: "Direction l'Ouest et les Rocheuses canadiennes : le parc national de Banff, les eaux turquoise du lac Louise et du lac Moraine, la route des glaciers et les sommets enneigés à perte de vue.",
        img: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=800&h=600&fit=crop&auto=format",
        alt: "Lac Louise et son hôtel face aux montagnes des Rocheuses",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "vancouver",
        label: "JOURS 14 À 16",
        title: "Vancouver : entre océan et montagnes",
        text: "Découverte de Vancouver, l'une des plus belles villes du monde, blottie entre Pacifique et montagnes : le parc Stanley, le marché de Granville Island et l'ambiance décontractée de la côte Ouest.",
        img: "https://images.unsplash.com/photo-1560814304-4f05b62af116?w=800&h=600&fit=crop&auto=format",
        alt: "Skyline de Vancouver entre océan et montagnes",
        align: "left",
      },
      {
        id: "baleines-ours",
        label: "JOURS 17 À 18",
        title: "Observation des baleines & des ours",
        text: "Final nature sur l'île de Vancouver : sortie en mer à la rencontre des baleines et des orques, observation des ours en forêt et farniente face au Pacifique pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&auto=format",
        alt: "Ours noir en bord de forêt sur l'île de Vancouver",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Ottawa, le parc de Jasper, la Gaspésie ou le Grand
        Nord et ses aurores boréales peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Canada",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Canada&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Canada se visite toute l&apos;année, mais chaque saison a son
              caractère :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été (juin à septembre)</strong> : la période idéale, douce et
                ensoleillée, parfaite pour les villes, les Rocheuses et
                l&apos;observation des baleines.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (sept. à oct.)</strong> : l&apos;été indien et ses
                forêts flamboyantes, un spectacle inoubliable.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (déc. à mars)</strong> : neige, sports d&apos;hiver,
                aurores boréales et magie des paysages enneigés.
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
        question: <>Faut-il un visa pour se rendre au Canada&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas de visa</strong> pour un séjour touristique, mais une
              autorisation est requise :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>AVE (Autorisation de Voyage Électronique)</strong> est
                obligatoire pour les ressortissants français arrivant par avion.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> pour toute la durée du séjour est
                exigé.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour et vous accompagnons dans
              vos démarches au moment de votre réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous au Canada&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Canada :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Montréal, Québec ou Vancouver.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Road trip</strong> : autotour dans les Rocheuses ou sur la
                côte Ouest, en toute liberté.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : adresses de charme et expériences
                privatisées.
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
                Les <strong>étapes et la durée</strong> : Montréal, Québec, Toronto,
                Banff, Vancouver…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, lodge en
                pleine nature, chalet face au lac.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : observation des
                baleines, randonnée, canoë, survol en hydravion.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Canada&nbsp;?</>,
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
              <strong>Pas du tout.</strong> Le Canada est{" "}
              <strong>bilingue</strong> et le français est largement parlé au Québec.
              CTA Voyages prévoit tout :
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
                <strong>Assistance téléphonique</strong> joignable pendant tout votre
                séjour.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et chalets</strong> face aux lacs et aux montagnes des
                Rocheuses.
              </li>
              <li>
                <Icon name="check" />
                <strong>Écolodges</strong> au cœur de la nature pour l&apos;observation
                de la faune.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et auberges de caractère.
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
        question: "Quelle est la meilleure période pour visiter le Canada ?",
        answer:
          "L'été, de juin à septembre, est la période idéale : douce et ensoleillée, parfaite pour les villes, les Rocheuses et l'observation des baleines. L'automne offre l'été indien flamboyant et l'hiver la magie de la neige et des aurores boréales.",
      },
      {
        question: "Faut-il un visa pour se rendre au Canada ?",
        answer:
          "Pas de visa pour un séjour touristique, mais une AVE (Autorisation de Voyage Électronique) est obligatoire pour les ressortissants français arrivant par avion. Un passeport valide pour toute la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Canada ?",
        answer:
          "CTA Voyages propose des séjours citadins, des circuits, des road trips dans les Rocheuses et sur la côte Ouest, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Canada ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Canada ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Canada ?",
        answer:
          "Non. Le Canada est bilingue et le français est largement parlé au Québec. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous au Canada ?",
        answer:
          "Hôtels 4 et 5 étoiles en ville, lodges et chalets face aux lacs et montagnes, écolodges au cœur de la nature et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage au Canada ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Canada comme ailleurs, nous
        privilégions des prestataires locaux responsables, une observation de la faune
        respectueuse des animaux et de leur habitat, et un tourisme attentif aux
        peuples des Premières Nations et aux écosystèmes fragiles des grands espaces.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Canada commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, road trip dans les Rocheuses ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default canada;
