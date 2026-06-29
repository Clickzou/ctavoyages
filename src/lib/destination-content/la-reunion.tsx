import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const laReunion: DestinationContent = {
  slug: "la-reunion",
  meta: {
    title:
      "Voyage à La Réunion : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à La Réunion avec CTA Voyages. Piton de la Fournaise, cirques de Mafate, Salazie et Cilaos, lagon de l'Ermitage, randonnées et plages. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Cirque volcanique et pitons verdoyants au lever du soleil — Voyage à La Réunion avec CTA Voyages",
    label: "Destination La Réunion",
    h1: "Voyage à La Réunion : l'île intense de l'océan Indien",
    description:
      "Volcan, cirques vertigineux, cascades, lagon turquoise et métissage culturel. Circuit nature, séjour balnéaire ou voyage entièrement sur mesure : votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des paysages uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+3h",
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
      value: "Mai à novembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Réunion, l'île intense",
    body: (
      <>
        Posée au cœur de l&apos;océan Indien, La Réunion concentre sur un territoire
        minuscule une diversité de paysages à couper le souffle. Île française et
        européenne, elle offre le dépaysement total des tropiques sans changer de
        monnaie ni de langue. En quelques heures de route, on passe des plages de
        sable du lagon aux <strong>remparts vertigineux des cirques</strong>, des
        coulées de lave du <strong>Piton de la Fournaise</strong>, l&apos;un des
        volcans les plus actifs de la planète, aux forêts primaires noyées de brume
        des Hauts. Classée au patrimoine mondial de l&apos;UNESCO, l&apos;île est un
        paradis pour les amoureux de nature et de randonnée, avec les cirques de{" "}
        <strong>Mafate</strong>, <strong>Salazie</strong> et <strong>Cilaos</strong>{" "}
        et leurs villages perchés. Mais La Réunion, c&apos;est aussi un{" "}
        <strong>métissage culturel</strong> unique, une cuisine créole généreuse et
        un art de vivre chaleureux. Randonnée et survol en hélicoptère, baignade
        dans le lagon de l&apos;Ermitage, dégustation d&apos;un carry au feu de bois
        ou observation des baleines : l&apos;île se vit aussi bien en{" "}
        <strong>circuit nature</strong> qu&apos;en <strong>séjour balnéaire</strong>,
        en <strong>aventure sportive</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à La Réunion ?",
    cards: [
      {
        icon: "volcano",
        title: "Un volcan vivant",
        text: "Le Piton de la Fournaise, l'un des volcans les plus actifs du monde, déroule ses coulées de lave et son paysage lunaire dans un décor spectaculaire et accessible.",
        img: "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?w=800&h=600&fit=crop&auto=format",
        alt: "Cratère et coulées de lave du Piton de la Fournaise à La Réunion",
      },
      {
        icon: "hiking",
        title: "Le paradis de la randonnée",
        text: "Cirques classés à l'UNESCO, sentiers vertigineux et villages isolés de Mafate accessibles seulement à pied : l'île intense est un terrain de jeu unique pour les marcheurs.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&auto=format",
        alt: "Randonneur sur un sentier de montagne au-dessus d'un cirque verdoyant à La Réunion",
      },
      {
        icon: "beach_access",
        title: "Un lagon turquoise",
        text: "Protégé par sa barrière de corail, le lagon de l'Ermitage offre des eaux calmes et chaudes, idéales pour la baignade, le snorkeling et le farniente sur le sable.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon turquoise bordé de cocotiers sur la côte ouest de La Réunion",
      },
      {
        icon: "restaurant",
        title: "Un métissage savoureux",
        text: "Carry, rougail, samoussas et rhum arrangé : la cuisine créole mêle influences africaines, indiennes, chinoises et européennes dans une explosion de saveurs.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format",
        alt: "Plat créole épicé servi à La Réunion",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à La Réunion",
    steps: [
      {
        id: "saint-denis",
        label: "JOURS 1 À 2",
        title: "Saint-Denis : la capitale créole",
        text: "Arrivée et immersion dans le chef-lieu de l'île. Flânerie le long de la rue de Paris et ses cases créoles colorées, le marché du Chaudron, le Jardin de l'État et les maisons coloniales classées qui racontent l'histoire de La Réunion.",
        img: "https://images.unsplash.com/photo-1596397249129-c7a8f8718873?w=800&h=600&fit=crop&auto=format",
        alt: "Saint-Denis",
        align: "left",
      },
      {
        id: "piton-fournaise",
        label: "JOURS 3 À 4",
        title: "Le Piton de la Fournaise : le volcan",
        text: "Route spectaculaire à travers la plaine des Sables et son paysage lunaire jusqu'au Pas de Bellecombe. Randonnée vers le cratère Dolomieu pour admirer de près l'un des volcans les plus actifs de la planète.",
        img: "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?w=800&h=600&fit=crop&auto=format",
        alt: "Piton de la Fournaise",
        align: "right",
      },
      {
        id: "mafate",
        label: "JOURS 5 À 6",
        title: "Le cirque de Mafate : la randonnée",
        text: "Plongée dans le plus sauvage des trois cirques, accessible uniquement à pied ou en hélicoptère. Nuit en gîte dans un îlet isolé, à la rencontre des Mafatais, pour une immersion hors du temps au cœur d'une nature préservée.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&auto=format",
        alt: "Cirque de Mafate",
        align: "left",
      },
      {
        id: "salazie",
        label: "JOUR 7",
        title: "Salazie & ses cascades",
        text: "Le plus vert des cirques, tapissé de cascades dont le célèbre Voile de la Mariée. Découverte du village classé d'Hell-Bourg, l'un des plus beaux de France, et de ses cases créoles fleuries au pied du Piton des Neiges.",
        img: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&h=600&fit=crop&auto=format",
        alt: "Salazie",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "cilaos",
        label: "JOURS 8 À 9",
        title: "Cilaos : montagne et thermes",
        text: "Route mythique aux 400 virages jusqu'au cirque de Cilaos, réputé pour ses thermes, son vin et ses lentilles. Randonnées vers le Piton des Neiges, point culminant de l'océan Indien, et détente au cœur d'un décor de haute montagne.",
        img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&auto=format",
        alt: "Cilaos",
        align: "left",
      },
      {
        id: "ermitage",
        label: "JOURS 10 À 12",
        title: "Le lagon de l'Ermitage : final balnéaire",
        text: "Cap sur la côte ouest et son lagon protégé pour clôturer le voyage en douceur. Baignade et snorkeling dans les eaux turquoise de l'Ermitage, couchers de soleil sur les plages de Saint-Gilles et, en saison, observation des baleines à bosse.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&h=600&fit=crop&auto=format",
        alt: "Lagon de l'Ermitage",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme le survol de l&apos;île en hélicoptère, le
        canyoning à Sainte-Suzanne, la route des laves du Sud Sauvage ou une
        extension à l&apos;île Maurice voisine peuvent facilement s&apos;intégrer à
        votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à La Réunion",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter La Réunion&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Réunion se visite toute l&apos;année, mais deux saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hiver austral (mai à novembre)</strong> : la période idéale,
                sèche et plus fraîche, parfaite pour la randonnée et l&apos;ascension
                du volcan.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été austral (décembre à avril)</strong> : plus chaud et plus
                humide, propice à la baignade dans le lagon mais avec un risque de
                cyclones.
              </li>
              <li>
                <Icon name="check" />
                <strong>De juin à septembre</strong> : c&apos;est aussi la saison
                d&apos;observation des baleines à bosse au large des côtes.
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
        question: <>Faut-il un visa pour se rendre à La Réunion&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Réunion est un département français
              d&apos;outre-mer : aucun visa ni passeport n&apos;est nécessaire pour
              les ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte nationale d&apos;identité ou un passeport en cours
                de validité</strong> suffit.
              </li>
              <li>
                <Icon name="check" />
                Vous voyagez avec l&apos;<strong>euro</strong> et le{" "}
                <strong>français</strong>, sans dépaysement administratif.
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
        question: <>Quels types de voyages proposez-vous à La Réunion&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour La Réunion :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire sur la côte ouest ou détente dans
                les Hauts.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : tour de l&apos;île multi-étapes,
                individuel ou accompagné.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour rando &amp; nature</strong> : traversée des cirques et
                ascension du volcan.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Réunion &amp; Maurice</strong> : l&apos;île intense
                puis l&apos;île sœur, en quelques heures de vol.
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
                Les <strong>étapes et la durée</strong> : Saint-Denis, le volcan,
                Mafate, Salazie, Cilaos, le lagon…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel face au lagon,
                gîte de montagne, table d&apos;hôtes créole.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnée, survol en
                hélicoptère, canyoning, baleines.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à La Réunion&nbsp;?</>,
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
        question: <>Faut-il louer une voiture sur place&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est vivement recommandé.</strong> La voiture est le
              meilleur moyen d&apos;explorer l&apos;île en toute liberté :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>routes des cirques</strong> (Cilaos, Salazie) et du volcan
                se font en véhicule.
              </li>
              <li>
                <Icon name="check" />
                Nous incluons la <strong>location de voiture</strong> dans la plupart
                de nos programmes.
              </li>
              <li>
                <Icon name="check" />
                Pour Mafate, accessible uniquement <strong>à pied ou en
                hélicoptère</strong>, nous organisons l&apos;intendance.
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
                <strong>Hôtels et resorts</strong> face au lagon, sur la côte ouest.
              </li>
              <li>
                <Icon name="check" />
                <strong>Gîtes et lodges de montagne</strong> au cœur des cirques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Tables et chambres d&apos;hôtes créoles</strong> pour une
                immersion authentique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et hôtels de caractère dans les
                Hauts.
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
        question: "Quelle est la meilleure période pour visiter La Réunion ?",
        answer:
          "L'hiver austral, de mai à novembre, est la période idéale : sèche et plus fraîche, parfaite pour la randonnée et l'ascension du volcan. De juin à septembre, c'est aussi la saison d'observation des baleines à bosse.",
      },
      {
        question: "Faut-il un visa pour se rendre à La Réunion ?",
        answer:
          "Non. La Réunion est un département français d'outre-mer : aucun visa n'est nécessaire pour les ressortissants français. Une carte nationale d'identité ou un passeport en cours de validité suffit.",
      },
      {
        question: "Quels types de voyages proposez-vous à La Réunion ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits, des séjours rando et nature, des combinés Réunion-Maurice et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à La Réunion ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à La Réunion ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Faut-il louer une voiture à La Réunion ?",
        answer:
          "C'est vivement recommandé pour explorer l'île en liberté. Nous incluons la location de voiture dans la plupart de nos programmes. Le cirque de Mafate, lui, est accessible uniquement à pied ou en hélicoptère.",
      },
      {
        question: "Quels hébergements proposez-vous à La Réunion ?",
        answer:
          "Hôtels et resorts face au lagon, gîtes et lodges de montagne dans les cirques, tables et chambres d'hôtes créoles et adresses de charme dans les Hauts.",
      },
      {
        question: "Comment demander un devis pour un voyage à La Réunion ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À La Réunion comme ailleurs, nous
        privilégions des hébergeurs et des guides locaux, le respect du Parc national
        et de ses écosystèmes fragiles, et des expériences qui font vivre les îlets et
        les producteurs créoles dans un esprit de tourisme durable.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à La Réunion commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, circuit nature, séjour rando ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default laReunion;
