import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const floride: DestinationContent = {
  slug: "floride",
  meta: {
    title:
      "Voyage en Floride : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Floride avec CTA Voyages. Miami et South Beach, Everglades, route des Keys, parcs d'Orlando, Kennedy Space Center, côte du Golfe. Séjour, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Plage de Miami Beach et palmiers au lever du soleil — Voyage en Floride avec CTA Voyages",
    label: "Destination Floride",
    h1: "Voyage en Floride : soleil, plages et grands espaces",
    description:
      "Séjour balnéaire, road trip de Miami aux Keys, parcs à thème d'Orlando ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "-6h",
      minuteRotation: "2160deg",
      hourRotation: "180deg",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~10h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Anglais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dollar (USD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Novembre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Floride, le Sunshine State",
    body: (
      <>
        Surnommé le <strong>Sunshine State</strong>, la Floride déroule ses plages
        de sable blanc, ses palmiers et son art de vivre décontracté sous un soleil
        quasi permanent. De l&apos;effervescence latino de <strong>Miami</strong> et
        des façades Art déco de South Beach à la nature sauvage des{" "}
        <strong>Everglades</strong>, de la mythique route des{" "}
        <strong>Keys</strong> jusqu&apos;à Key West aux parcs à thème légendaires
        d&apos;<strong>Orlando</strong>, chaque étape révèle une facette de cet État
        aux mille visages. Assister à un lancement depuis le{" "}
        <strong>Kennedy Space Center</strong>, observer les alligators au fil de
        l&apos;eau, savourer les couchers de soleil dorés de la côte du Golfe à{" "}
        <strong>Naples</strong> : la Floride se vit aussi bien en{" "}
        <strong>séjour balnéaire</strong> qu&apos;en <strong>road trip</strong>, en{" "}
        <strong>escapade en famille</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Floride ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des plages mythiques",
        text: "Sable blanc, eaux chaudes et ambiance balnéaire : de Miami Beach à la côte du Golfe, la Floride aligne quelques-unes des plus belles plages d'Amérique.",
        img: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc et eaux turquoise sur la côte de Floride",
      },
      {
        icon: "attractions",
        title: "Les parcs à thème",
        text: "Walt Disney World, Universal Studios, SeaWorld : Orlando est la capitale mondiale des parcs d'attractions, pour des souvenirs inoubliables en famille.",
        img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=800&h=600&fit=crop&auto=format",
        alt: "Château d'un parc à thème d'Orlando illuminé au crépuscule",
      },
      {
        icon: "forest",
        title: "Une nature préservée",
        text: "Les Everglades, leurs mangroves et leurs alligators, comptent parmi les écosystèmes les plus fascinants des États-Unis, à explorer en hydroglisseur.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
        alt: "Alligator dans les marais des Everglades en Floride",
      },
      {
        icon: "rocket_launch",
        title: "La conquête spatiale",
        text: "Au Kennedy Space Center de Cap Canaveral, plongez dans l'histoire des missions Apollo et assistez, avec un peu de chance, à un lancement de fusée.",
        img: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=600&fit=crop&auto=format",
        alt: "Lancement d'une fusée depuis Cap Canaveral en Floride",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Floride",
    steps: [
      {
        id: "miami",
        label: "JOURS 1 À 3",
        title: "Miami & South Beach : l'énergie latino",
        text: "Immersion dans l'effervescence de Miami : les façades Art déco de South Beach, les plages animées, le quartier coloré de Wynwood et l'ambiance cubaine de Little Havana.",
        img: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&h=600&fit=crop&auto=format",
        alt: "Façades Art déco et palmiers de South Beach à Miami",
        align: "left",
      },
      {
        id: "everglades",
        label: "JOUR 4",
        title: "Les Everglades : au pays des alligators",
        text: "Cap sur le parc national des Everglades. Balade en hydroglisseur au cœur des mangroves à la rencontre des alligators, des oiseaux et de cette nature sauvage unique au monde.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
        alt: "Hydroglisseur dans les marais des Everglades",
        align: "right",
      },
      {
        id: "keys",
        label: "JOURS 5 À 6",
        title: "Les Keys & Key West : la route du bout du monde",
        text: "Descente de l'Overseas Highway et de ses 42 ponts au-dessus de l'océan, d'île en île jusqu'à Key West, son ambiance bohème et son célèbre coucher de soleil sur Mallory Square.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format",
        alt: "Pont de l'Overseas Highway reliant les Keys de Floride",
        align: "left",
      },
      {
        id: "orlando",
        label: "JOURS 7 À 9",
        title: "Orlando : les parcs à thème",
        text: "Remontée vers Orlando, capitale mondiale du divertissement : Walt Disney World, Universal Studios et SeaWorld pour des journées de pure magie en famille ou entre amis.",
        img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=800&h=600&fit=crop&auto=format",
        alt: "Parc à thème illuminé à Orlando",
        align: "right",
      },
      {
        id: "cap-canaveral",
        label: "JOUR 10",
        title: "Cap Canaveral : le Kennedy Space Center",
        text: "Journée dédiée à la conquête spatiale au Kennedy Space Center. Navette Atlantis, fusée Saturn V, simulateurs et, selon le calendrier, un lancement à observer en direct.",
        img: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=600&fit=crop&auto=format",
        alt: "Fusée exposée au Kennedy Space Center de Cap Canaveral",
        align: "left",
      },
      {
        id: "cote-du-golfe",
        label: "JOURS 11 À 13",
        title: "La côte du Golfe : final à Naples",
        text: "Traversée vers la côte ouest et ses couchers de soleil dorés : Naples et ses plages élégantes, Sarasota ou Fort Myers pour un final balnéaire en douceur face au golfe du Mexique.",
        img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&h=600&fit=crop&auto=format",
        alt: "Coucher de soleil sur une plage de la côte du Golfe à Naples",
        align: "right",
        objectPosition: "center 40%",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Tampa, St. Augustine, les Dry Tortugas ou une
        croisière au départ de Miami peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Floride",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Floride&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Floride profite d&apos;un climat agréable presque toute
              l&apos;année, mais une saison se distingue :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison sèche (novembre à avril)</strong> : la période
                idéale, ensoleillée et plus douce, parfaite pour combiner plages,
                parcs et road trip.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison humide (mai à octobre)</strong> : chaude et
                orageuse, avec des averses courtes en fin de journée et des tarifs
                plus doux.
              </li>
              <li>
                <Icon name="check" />
                La <strong>saison des ouragans</strong> court de juin à novembre :
                votre conseiller vous oriente sur les meilleures dates.
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
        question: <>Faut-il un visa pour se rendre en Floride&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, mais une autorisation est obligatoire pour les
              ressortissants français :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>autorisation ESTA</strong> est exigée pour tout séjour
                touristique inférieur à 90 jours.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport biométrique valide</strong> est nécessaire au
                moment du voyage.
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
        question: <>Quels types de voyages proposez-vous en Floride&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Floride :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire à Miami ou sur la côte du
                Golfe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Road trip</strong> : autotour de Miami aux Keys, d&apos;une
                côte à l&apos;autre.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour en famille</strong> : parcs à thème d&apos;Orlando et
                plages.
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
                Les <strong>étapes et la durée</strong> : Miami, Keys, Orlando, Cap
                Canaveral, Naples…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel en bord de
                plage, resort familial, adresse de charme.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : parcs à thème,
                Everglades, croisière, plongée.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Floride&nbsp;?</>,
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
        question: <>Faut-il louer une voiture en Floride&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est vivement recommandé.</strong> La Floride se
              découvre idéalement au volant :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Location de voiture</strong> incluse dans nos formules road
                trip et autotour.
              </li>
              <li>
                <Icon name="check" />
                <strong>Itinéraires détaillés</strong> et carnet de route fournis en
                français.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance</strong> joignable pendant tout votre séjour en
                cas de besoin.
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
                <strong>Hôtels 3 à 5 étoiles</strong> au cœur des grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts en bord de plage</strong> à Miami et sur la côte du
                Golfe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels familiaux</strong> à proximité des parcs
                d&apos;Orlando.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels Art déco.
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
        question: "Quelle est la meilleure période pour visiter la Floride ?",
        answer:
          "La saison sèche, de novembre à avril, est la période idéale : ensoleillée et plus douce, parfaite pour combiner plages, parcs et road trip. La saison humide (mai-octobre) est plus chaude, avec des averses courtes et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre en Floride ?",
        answer:
          "Non, mais une autorisation ESTA est obligatoire pour les ressortissants français pour tout séjour touristique inférieur à 90 jours, avec un passeport biométrique valide.",
      },
      {
        question: "Quels types de voyages proposez-vous en Floride ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des road trips de Miami aux Keys, des séjours en famille autour des parcs d'Orlando, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Floride ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Floride ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Faut-il louer une voiture en Floride ?",
        answer:
          "C'est vivement recommandé : la Floride se découvre idéalement au volant. La location est incluse dans nos formules road trip, avec carnet de route en français et assistance.",
      },
      {
        question: "Quels hébergements proposez-vous en Floride ?",
        answer:
          "Hôtels 3 à 5 étoiles, resorts en bord de plage à Miami et sur la côte du Golfe, hôtels familiaux près des parcs d'Orlando et adresses de charme Art déco.",
      },
      {
        question: "Comment demander un devis pour un voyage en Floride ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Floride comme ailleurs, nous
        privilégions des prestataires locaux responsables, des excursions
        respectueuses des Everglades et de leur faune, et un tourisme attentif à la
        préservation des écosystèmes côtiers et marins.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Floride commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, road trip de Miami aux Keys, parcs d'Orlando en famille ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default floride;
