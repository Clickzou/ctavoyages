import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const laponie: DestinationContent = {
  slug: "laponie",
  meta: {
    title:
      "Voyage en Laponie : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Laponie avec CTA Voyages. Aurores boréales, igloo de verre, traîneau à chiens, motoneige, rencontre des Samis et du Père Noël à Rovaniemi. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Aurore boréale verte au-dessus d'une forêt enneigée — Voyage en Laponie avec CTA Voyages",
    label: "Destination Laponie",
    h1: "Voyage en Laponie : aurores boréales et grand blanc",
    description:
      "Séjour féerique sous les aurores, aventure en traîneau à chiens, nuit en igloo de verre ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+1h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~3h30 de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Finnois",
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
      value: "Déc. à mars (aurores), été midi du soleil",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Laponie, le royaume du Grand Nord",
    body: (
      <>
        Terre mythique aux confins du cercle polaire, la Laponie déploie ses
        forêts givrées, ses lacs gelés et ses immensités de neige immaculée dans
        un silence presque irréel. C&apos;est ici, sous le ciel arctique, que
        dansent les <strong>aurores boréales</strong>, ces voiles de lumière
        verte et pourpre qui font rêver les voyageurs du monde entier. De{" "}
        <strong>Rovaniemi</strong>, capitale officielle du Père Noël, aux
        villages reculés où vit encore le peuple <strong>sami</strong>, la
        Laponie finlandaise se vit comme un conte. Filer en traîneau tiré par une
        meute de huskies, s&apos;élancer en motoneige à travers la taïga, dormir
        dans un <strong>igloo de verre</strong> pour observer les étoiles, partager
        un café au coin du feu dans une ferme de rennes : chaque expérience y
        prend une dimension magique. La Laponie se découvre aussi bien en{" "}
        <strong>séjour féerique</strong> qu&apos;en{" "}
        <strong>aventure sportive</strong>, en{" "}
        <strong>escapade en famille</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Laponie ?",
    cards: [
      {
        icon: "auto_awesome",
        title: "Les aurores boréales",
        text: "Sous le ciel polaire, les aurores boréales déploient leurs voiles de lumière : un spectacle naturel inoubliable, parmi les plus saisissants de la planète.",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop&auto=format",
        alt: "Aurore boréale verte au-dessus d'un paysage enneigé en Laponie",
      },
      {
        icon: "sledding",
        title: "Le traîneau à chiens",
        text: "S'élancer dans la taïga avec sa propre meute de huskies, conduit par leur énergie et leur joie de courir : une aventure grisante au cœur du grand blanc.",
        img: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&h=600&fit=crop&auto=format",
        alt: "Attelage de chiens de traîneau husky dans la neige en Laponie",
      },
      {
        icon: "cabin",
        title: "Les igloos de verre",
        text: "Dormir au chaud sous une voûte transparente, les yeux tournés vers les étoiles et les aurores : une nuit hors du temps, unique au monde.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop&auto=format",
        alt: "Igloo de verre éclairé sous un ciel étoilé en Laponie",
      },
      {
        icon: "pets",
        title: "Rennes & culture samie",
        text: "À la rencontre du peuple sami et de ses troupeaux de rennes, gardiens d'un mode de vie ancestral en parfaite harmonie avec la nature arctique.",
        img: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800&h=600&fit=crop&auto=format",
        alt: "Renne dans un paysage enneigé de Laponie finlandaise",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Laponie",
    steps: [
      {
        id: "rovaniemi",
        label: "JOURS 1 À 2",
        title: "Rovaniemi & le village du Père Noël",
        text: "Arrivée dans la capitale de la Laponie finlandaise. Franchissez le cercle polaire au village du Père Noël, rencontrez l'homme en rouge, postez vos cartes depuis le bureau de poste officiel et flânez dans les boutiques d'artisanat.",
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&h=900&fit=crop&auto=format",
        alt: "Village enneigé du Père Noël à Rovaniemi en Laponie",
        align: "left",
      },
      {
        id: "motoneige",
        label: "JOUR 3",
        title: "Safari en motoneige dans la taïga",
        text: "Casque vissé, guidon en main, partez en safari motoneige à travers forêts givrées et lacs gelés. Une immersion grisante dans les grands espaces arctiques, suivie d'une pause au coin du feu sous un abri lapon.",
        img: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=800&h=900&fit=crop&auto=format",
        alt: "Safari en motoneige dans un paysage enneigé de Laponie",
        align: "right",
      },
      {
        id: "husky",
        label: "JOUR 4",
        title: "Traîneau à chiens de husky",
        text: "Rencontre avec une ferme de huskies, puis prise en main de votre propre attelage. Vous filez dans le silence de la forêt, portés par l'énergie joyeuse de la meute : l'une des expériences les plus emblématiques du Grand Nord.",
        img: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=800&h=900&fit=crop&auto=format",
        alt: "Traîneau tiré par des chiens husky dans la neige en Laponie",
        align: "left",
      },
      {
        id: "igloo",
        label: "JOUR 5",
        title: "Nuit en igloo de verre sous les aurores",
        text: "Une nuit d'exception dans un igloo à la voûte de verre, blotti au chaud face au ciel arctique. Avec un peu de chance, les aurores boréales viennent danser au-dessus de votre lit pour un souvenir gravé à jamais.",
        img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=900&fit=crop&auto=format",
        alt: "Igloo de verre sous une aurore boréale en Laponie",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "rennes-samis",
        label: "JOUR 6",
        title: "Ferme de rennes & rencontre samie",
        text: "Immersion dans la culture samie au sein d'une ferme de rennes. Promenade en traîneau tiré par un renne, partage d'un café autour du feu et récits de ce peuple autochtone, gardien des traditions du Grand Nord.",
        img: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&h=900&fit=crop&auto=format",
        alt: "Traîneau tiré par un renne dans une ferme samie de Laponie",
        align: "left",
      },
      {
        id: "peche-raquettes",
        label: "JOUR 7",
        title: "Pêche blanche & raquettes",
        text: "Pour finir en douceur, initiez-vous à la pêche blanche sur un lac gelé, puis chaussez les raquettes pour une randonnée dans la forêt boréale. Le grand blanc dans toute sa quiétude, avant le retour.",
        img: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&h=900&fit=crop&auto=format",
        alt: "Randonnée en raquettes dans une forêt enneigée de Laponie",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme le sauna finlandais, le brise-glace et le
        bain en combinaison polaire, ou la découverte de villages comme Saariselkä
        et Levi peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Laponie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Laponie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Tout dépend de l&apos;ambiance recherchée, mais deux saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Décembre à mars (hiver polaire)</strong> : la période
                phare, neige garantie, aurores boréales, traîneaux et villages de
                Noël.
              </li>
              <li>
                <Icon name="check" />
                <strong>Fin août à mars</strong> : la saison des aurores
                boréales, lorsque les nuits redeviennent assez longues et sombres.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juin à juillet (été)</strong> : le soleil de minuit,
                randonnées et nature verdoyante sous une lumière permanente.
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
        question: <>Faut-il un visa pour se rendre en Laponie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Laponie finlandaise fait partie de
              l&apos;Union européenne et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Pour les ressortissants français, une{" "}
                <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong>{" "}
                suffit.
              </li>
              <li>
                <Icon name="check" />
                La monnaie est l&apos;<strong>euro</strong>, aucun change
                n&apos;est nécessaire.
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
        question: <>Quels types de voyages proposez-vous en Laponie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Laponie :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : escapade féerique avec activités
                hivernales au départ de Rovaniemi.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en petit groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage en famille</strong> : magie de Noël et activités
                adaptées aux enfants.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : igloos de verre et adresses de
                charme sous les aurores.
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
                Les <strong>étapes et la durée</strong> : Rovaniemi, Saariselkä,
                Levi, Kakslauttanen…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : chalet en rondins,
                igloo de verre, hôtel de charme.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les activités</strong> : traîneau à chiens,
                motoneige, ferme de rennes, raquettes.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Laponie&nbsp;?</>,
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
                La période de départ (les fêtes de fin d&apos;année sont très
                demandées)
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
              adressent une proposition personnalisée, gratuite et sans
              engagement.
            </p>
          </>
        ),
      },
      {
        question: <>Verra-t-on forcément des aurores boréales&nbsp;?</>,
        answer: (
          <>
            <p>
              Les aurores sont un <strong>phénomène naturel</strong> : aucune
              garantie absolue, mais on met toutes les chances de votre côté.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>séjour entre décembre et mars</strong>, par ciel
                dégagé, offre de très belles probabilités.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>chasses aux aurores</strong> guidées, loin des
                lumières, augmentent vos chances de les observer.
              </li>
              <li>
                <Icon name="check" />
                Les <strong>igloos de verre</strong> permettent de les guetter au
                chaud depuis votre lit.
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
                <strong>Igloos de verre</strong> face au ciel arctique pour
                observer les aurores.
              </li>
              <li>
                <Icon name="check" />
                <strong>Chalets en rondins</strong> chaleureux avec sauna privé.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels confortables</strong> au cœur de Rovaniemi et des
                stations.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses insolites</strong> : igloos de neige, cabanes et
                lodges nature.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment se protéger du froid&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Aucune inquiétude</strong>, tout est prévu pour profiter
              sereinement du grand froid :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Combinaisons thermiques</strong>, bottes et gants fournis
                pour la plupart des activités.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>conseils d&apos;équipement</strong> (système multi
                couches) communiqués avant le départ.
              </li>
              <li>
                <Icon name="check" />
                Des <strong>pauses au chaud</strong> et des boissons réconfortantes
                rythment chaque excursion.
              </li>
            </ul>
          </>
        ),
      },
    ],
    jsonLd: [
      {
        question: "Quelle est la meilleure période pour visiter la Laponie ?",
        answer:
          "De décembre à mars pour la neige, les aurores boréales, les traîneaux et la magie de Noël. La saison des aurores s'étend de fin août à mars. En juin-juillet, on profite du soleil de minuit et de la nature verdoyante.",
      },
      {
        question: "Faut-il un visa pour se rendre en Laponie ?",
        answer:
          "Non. La Laponie finlandaise fait partie de l'Union européenne et de l'espace Schengen. Pour les ressortissants français, une carte d'identité ou un passeport en cours de validité suffit, et la monnaie est l'euro.",
      },
      {
        question: "Quels types de voyages proposez-vous en Laponie ?",
        answer:
          "CTA Voyages propose des séjours féeriques, des circuits, des voyages en famille, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Laponie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et activités.",
      },
      {
        question: "Combien coûte un voyage en Laponie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Verra-t-on forcément des aurores boréales en Laponie ?",
        answer:
          "Les aurores sont un phénomène naturel sans garantie absolue, mais un séjour entre décembre et mars par ciel dégagé offre de très belles probabilités, surtout lors de chasses aux aurores guidées.",
      },
      {
        question: "Quels hébergements proposez-vous en Laponie ?",
        answer:
          "Igloos de verre face au ciel arctique, chalets en rondins avec sauna, hôtels confortables à Rovaniemi et adresses insolites comme les igloos de neige et lodges nature.",
      },
      {
        question: "Comment se protéger du froid en Laponie ?",
        answer:
          "Des combinaisons thermiques, bottes et gants sont fournis pour la plupart des activités, des conseils d'équipement sont communiqués avant le départ, et des pauses au chaud rythment chaque excursion.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Laponie comme ailleurs, nous
        privilégions des prestataires locaux responsables, des fermes de huskies
        et de rennes respectueuses du bien-être animal, et un tourisme attentif à
        la fragilité des écosystèmes arctiques et aux traditions du peuple sami.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Laponie commence ici",
    body: "Parlez-nous de votre projet. Séjour féerique, aventure sportive, escapade en famille ou voyage sur mesure sous les aurores : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default laponie;
