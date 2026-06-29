import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const seychelles: DestinationContent = {
  slug: "seychelles",
  meta: {
    title:
      "Voyage aux Seychelles : séjour, croisière et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage aux Seychelles avec CTA Voyages. Plages de Mahé, Vallée de Mai à Praslin, Anse Source d'Argent à La Digue, snorkeling et tortues géantes. Séjour, croisière ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1589979481223-deb893043163?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Plage de sable blanc et rochers de granit aux Seychelles — Voyage aux Seychelles avec CTA Voyages",
    label: "Destination Seychelles",
    h1: "Voyage aux Seychelles : plages de rêve et nature préservée",
    description:
      "Séjour balnéaire, croisière inter-îles, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~10h de vol",
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
      value: "Créole, anglais, français",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Roupie (SCR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril-mai & oct.-nov.",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Les Seychelles, un paradis posé sur l'océan Indien",
    body: (
      <>
        Éparpillé au cœur de l&apos;océan Indien, l&apos;archipel des Seychelles
        compte parmi les destinations les plus envoûtantes de la planète. Ses
        plages de sable blanc nimbées d&apos;eaux turquoise, ses spectaculaires
        rochers de granit sculptés par le temps et sa végétation tropicale
        luxuriante composent des décors d&apos;une beauté presque irréelle. De
        l&apos;animation tranquille de <strong>Mahé</strong> et sa capitale
        Victoria à la forêt primaire de la <strong>Vallée de Mai</strong> à{" "}
        <strong>Praslin</strong>, en passant par l&apos;envoûtante{" "}
        <strong>Anse Source d&apos;Argent</strong> de{" "}
        <strong>La Digue</strong>, chaque île révèle un visage singulier. Ici, on
        glisse en masque et tuba au-dessus de jardins de corail, on croise des
        tortues géantes en liberté, on parcourt les sentiers à vélo et l&apos;on
        savoure la cuisine créole face au coucher du soleil. Les Seychelles se
        vivent aussi bien en <strong>séjour balnéaire</strong> qu&apos;en{" "}
        <strong>croisière inter-îles</strong>, en{" "}
        <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager aux Seychelles ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des plages mythiques",
        text: "Anse Source d'Argent, Anse Lazio, Beau Vallon : sable poudreux, eaux cristallines et rochers de granit composent les plus belles plages du monde.",
        img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc bordée de rochers de granit aux Seychelles",
      },
      {
        icon: "scuba_diving",
        title: "Un monde sous-marin",
        text: "Jardins de corail, raies, tortues et poissons multicolores : les parcs marins des Seychelles offrent un snorkeling et une plongée d'exception.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format",
        alt: "Tortue de mer nageant au-dessus d'un récif corallien aux Seychelles",
      },
      {
        icon: "pets",
        title: "Une nature unique",
        text: "Tortues géantes d'Aldabra, coco-fesses de la Vallée de Mai, oiseaux endémiques : l'archipel abrite des trésors naturels classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&h=600&fit=crop&auto=format",
        alt: "Tortue géante des Seychelles dans son habitat naturel",
      },
      {
        icon: "restaurant",
        title: "Une culture créole",
        text: "Mariage de saveurs africaines, indiennes et françaises, l'art de vivre créole se déguste dans une atmosphère chaleureuse et nonchalante.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format",
        alt: "Plat de cuisine créole aux saveurs épicées des Seychelles",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire aux Seychelles",
    steps: [
      {
        id: "mahe",
        label: "JOURS 1 À 2",
        title: "Mahé & la plage de Beau Vallon",
        text: "Arrivée sur l'île principale et premiers pas dans l'ambiance créole : la capitale Victoria et son marché coloré, le jardin botanique, puis détente sur l'immense plage de Beau Vallon face au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de Beau Vallon sur l'île de Mahé aux Seychelles",
        align: "left",
      },
      {
        id: "praslin",
        label: "JOURS 3 À 4",
        title: "Praslin & la Vallée de Mai",
        text: "Cap sur Praslin, deuxième plus grande île de l'archipel. Randonnée dans la forêt primaire de la Vallée de Mai, classée à l'UNESCO, berceau du légendaire coco-fesses, puis baignade à l'Anse Lazio.",
        img: "https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=800&h=600&fit=crop&auto=format",
        alt: "Forêt tropicale de la Vallée de Mai à Praslin aux Seychelles",
        align: "right",
      },
      {
        id: "la-digue",
        label: "JOUR 5",
        title: "La Digue & l'Anse Source d'Argent à vélo",
        text: "Traversée vers La Digue, l'île la plus authentique, que l'on découvre à vélo au rythme nonchalant des chars à bœufs. Découverte de l'Anse Source d'Argent, ses rochers de granit et ses eaux peu profondes parmi les plus photographiées au monde.",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop&auto=format",
        alt: "Vélos sur l'île de La Digue près de l'Anse Source d'Argent",
        align: "left",
      },
      {
        id: "snorkeling",
        label: "JOUR 6",
        title: "Snorkeling dans le parc marin",
        text: "Sortie en bateau vers le parc national marin de Sainte-Anne ou de Port-Launay : masque et tuba au-dessus des jardins de corail, à la rencontre des poissons multicolores, des raies et des tortues de mer.",
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop&auto=format",
        alt: "Snorkeling au-dessus d'un récif corallien dans un parc marin des Seychelles",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "curieuse",
        label: "JOUR 7",
        title: "Île de Curieuse & tortues géantes",
        text: "Excursion vers l'île de Curieuse, sanctuaire des tortues géantes d'Aldabra que l'on approche en liberté. Balade dans la mangrove, déjeuner barbecue créole sur la plage et baignade dans un cadre sauvage préservé.",
        img: "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&h=600&fit=crop&auto=format",
        alt: "Tortues géantes en liberté sur l'île de Curieuse aux Seychelles",
        align: "left",
      },
      {
        id: "farniente",
        label: "JOUR 8",
        title: "Journée farniente & coucher de soleil",
        text: "Dernière journée placée sous le signe de la détente : massage en bord de mer, baignade dans une crique secrète et farniente sur le sable. Le voyage s'achève en beauté face à un flamboyant coucher de soleil sur l'océan Indien.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format",
        alt: "Coucher de soleil sur une plage des Seychelles",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong> Cet exemple est proposé pour vous
        inspirer. Votre conseiller CTA Voyages adaptera chaque étape selon vos
        envies, votre rythme et votre budget. D&apos;autres étapes comme
        l&apos;île de Silhouette, l&apos;atoll d&apos;Aldabra ou une croisière en
        catamaran entre les îles peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir aux Seychelles",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter les Seychelles&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Les Seychelles se visitent toute l&apos;année grâce à leur climat
              tropical, mais deux périodes se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Avril-mai et octobre-novembre</strong> : les intersaisons
                idéales, mer calme et vents faibles, parfaites pour la baignade et
                le snorkeling.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mai à septembre</strong> : saison plus sèche et fraîche,
                avec un peu de vent, prisée des amateurs de voile.
              </li>
              <li>
                <Icon name="check" />
                <strong>Décembre à mars</strong> : saison plus chaude et humide,
                végétation luxuriante et averses courtes.
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
        question: <>Faut-il un visa pour se rendre aux Seychelles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, il n&apos;y a pas de visa à proprement parler.
              Une <strong>autorisation de voyage électronique</strong> est
              toutefois requise avant le départ.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> couvrant la durée du séjour
                est exigé.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>billet de retour</strong> et un justificatif
                d&apos;hébergement peuvent être demandés.
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
        question: <>Quels types de voyages proposez-vous aux Seychelles&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour les
              Seychelles :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire sur une ou plusieurs îles.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné inter-îles</strong> : Mahé, Praslin et La Digue.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière en catamaran</strong> : navigation entre les
                îles intérieures.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
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
                Les <strong>îles et la durée</strong> : Mahé, Praslin, La Digue,
                Silhouette…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, resort pieds
                dans l&apos;eau, lodge de charme.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : snorkeling,
                croisière, sortie aux tortues géantes.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage aux Seychelles&nbsp;?</>,
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
                Le nombre d&apos;îles visitées
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
        question: <>Comment se déplace-t-on entre les îles&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>C&apos;est simple et bien organisé.</strong> Plusieurs
              options s&apos;offrent à vous :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Ferry rapide</strong> entre Mahé, Praslin et La Digue.
              </li>
              <li>
                <Icon name="check" />
                <strong>Vols intérieurs</strong> entre Mahé et Praslin en quinze
                minutes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Transferts privés</strong> et excursions en bateau
                organisés de bout en bout.
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
                <strong>Hôtels 4 et 5 étoiles</strong> face aux plus belles
                plages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> et villas privées
                avec piscine.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et écolodges</strong> au cœur de la nature.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et guesthouses créoles
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
        question: "Quelle est la meilleure période pour visiter les Seychelles ?",
        answer:
          "Les Seychelles se visitent toute l'année. Les intersaisons d'avril-mai et octobre-novembre sont idéales : mer calme et vents faibles, parfaites pour la baignade et le snorkeling.",
      },
      {
        question: "Faut-il un visa pour se rendre aux Seychelles ?",
        answer:
          "Il n'y a pas de visa, mais une autorisation de voyage électronique est requise avant le départ. Un passeport valide couvrant la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous aux Seychelles ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des combinés inter-îles, des croisières en catamaran, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire aux Seychelles ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage aux Seychelles ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le nombre d'îles visitées et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplace-t-on entre les îles aux Seychelles ?",
        answer:
          "En ferry rapide entre Mahé, Praslin et La Digue, en vols intérieurs ou via des transferts privés et excursions en bateau organisés de bout en bout.",
      },
      {
        question: "Quels hébergements proposez-vous aux Seychelles ?",
        answer:
          "Hôtels 4 et 5 étoiles face aux plages, resorts pieds dans l'eau, villas privées, lodges au cœur de la nature et adresses de charme créoles.",
      },
      {
        question: "Comment demander un devis pour un voyage aux Seychelles ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Aux Seychelles comme ailleurs,
        nous privilégions des prestataires locaux responsables, des excursions
        respectueuses des parcs marins et des sanctuaires de tortues, pour un
        tourisme soucieux de préserver des écosystèmes parmi les plus fragiles de
        la planète.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage aux Seychelles commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, croisière inter-îles, escapade nature ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default seychelles;
