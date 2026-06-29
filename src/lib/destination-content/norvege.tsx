import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const norvege: DestinationContent = {
  slug: "norvege",
  meta: {
    title:
      "Voyage en Norvège : fjords, aurores boréales et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Norvège avec CTA Voyages. Fjords spectaculaires, îles Lofoten, aurores boréales à Tromsø, train de Flåm, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Fjord norvégien aux falaises abruptes reflétées dans une eau calme — Voyage en Norvège avec CTA Voyages",
    label: "Destination Norvège",
    h1: "Voyage en Norvège : fjords majestueux et aurores boréales",
    description:
      "Circuit nature, croisière dans les fjords, chasse aux aurores boréales ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des paysages uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "Aucun",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h30 de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Norvégien",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Couronne (NOK)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin-août & hiver (aurores)",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Norvège, le royaume des fjords",
    body: (
      <>
        Sculptée par les glaciers et baignée par la lumière du Grand Nord, la Norvège
        déploie ses fjords vertigineux, ses villages de pêcheurs colorés et ses
        montagnes plongeant dans la mer dans une nature d&apos;une pureté saisissante.
        De l&apos;élégance scandinave d&apos;<strong>Oslo</strong> aux quais
        hanséatiques de <strong>Bergen</strong>, des eaux profondes du{" "}
        <strong>Geirangerfjord</strong> aux sommets dentelés des{" "}
        <strong>îles Lofoten</strong>, chaque étape révèle un décor à couper le
        souffle. Naviguer entre les cascades d&apos;un fjord, contempler le soleil de
        minuit en été ou lever les yeux vers les <strong>aurores boréales</strong> en
        hiver, emprunter le légendaire <strong>train de Flåm</strong> : la Norvège se
        vit aussi bien en <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>croisière dans les fjords</strong>, en{" "}
        <strong>escapade hivernale</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Norvège ?",
    cards: [
      {
        icon: "water",
        title: "Des fjords spectaculaires",
        text: "Geirangerfjord, Nærøyfjord, Sognefjord : ces bras de mer cernés de falaises et de cascades comptent parmi les plus beaux paysages du monde, classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop&auto=format",
        alt: "Geirangerfjord et ses cascades vu depuis un belvédère en Norvège",
      },
      {
        icon: "auto_awesome",
        title: "Les aurores boréales",
        text: "De septembre à mars, le ciel du Grand Nord s'embrase de voiles verts et violets. Tromsø et les Lofoten figurent parmi les meilleurs spots au monde pour les observer.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop&auto=format",
        alt: "Aurore boréale verte au-dessus d'un paysage enneigé en Norvège",
      },
      {
        icon: "hiking",
        title: "Une nature grandiose",
        text: "Glaciers, randonnées vers le Preikestolen ou le Trolltunga, soleil de minuit en été : la Norvège est un terrain de jeu infini pour les amoureux du grand air.",
        img: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=800&h=600&fit=crop&auto=format",
        alt: "Randonneur surplombant un fjord depuis une falaise en Norvège",
      },
      {
        icon: "sailing",
        title: "Des villages de charme",
        text: "Maisons de bois colorées sur pilotis, quais hanséatiques de Bergen, ports de pêche des Lofoten : l'art de vivre scandinave se savoure dans des décors de carte postale.",
        img: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=800&h=600&fit=crop&auto=format",
        alt: "Maisons de pêcheurs rouges sur pilotis dans les îles Lofoten",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Norvège",
    steps: [
      {
        id: "oslo",
        label: "JOURS 1 À 2",
        title: "Oslo : la capitale design",
        text: "Immersion dans l'élégance scandinave : l'Opéra de marbre, le parc de sculptures Vigeland, le musée des navires vikings et le quartier branché d'Aker Brygge au bord du fjord d'Oslo.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Opéra d'Oslo et front de mer au coucher du soleil",
        align: "left",
      },
      {
        id: "bergen",
        label: "JOURS 3 À 4",
        title: "Bergen & les maisons hanséatiques",
        text: "Cap sur Bergen, porte des fjords. Flânerie sur le quai de Bryggen et ses maisons de bois colorées classées à l'UNESCO, le marché aux poissons et la montée en funiculaire vers le mont Fløyen.",
        img: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800&h=600&fit=crop&auto=format",
        alt: "Maisons hanséatiques colorées du quai de Bryggen à Bergen",
        align: "right",
      },
      {
        id: "geirangerfjord",
        label: "JOURS 5 À 6",
        title: "Geirangerfjord : le joyau des fjords",
        text: "Croisière au cœur du majestueux Geirangerfjord, entre falaises vertigineuses et cascades comme les Sept Sœurs. Panoramas inoubliables depuis la route en lacets de Trollstigen.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop&auto=format",
        alt: "Geirangerfjord et ses cascades depuis un belvédère",
        align: "left",
      },
      {
        id: "flam",
        label: "JOUR 7",
        title: "Train de Flåm & Nærøyfjord",
        text: "Embarquement à bord du légendaire train de Flåm, l'un des plus beaux trajets ferroviaires au monde, puis croisière sur le Nærøyfjord, le bras le plus étroit et spectaculaire du Sognefjord.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Train panoramique de Flåm traversant une vallée verdoyante",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "lofoten",
        label: "JOURS 8 À 10",
        title: "Les îles Lofoten",
        text: "Envol vers le Nord et l'archipel des Lofoten : pics granitiques jaillissant de la mer, villages de pêcheurs aux cabanes rouges (rorbuer), plages immaculées et soleil de minuit en été.",
        img: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=800&h=600&fit=crop&auto=format",
        alt: "Village de pêcheurs et montagnes des îles Lofoten",
        align: "left",
      },
      {
        id: "tromso",
        label: "JOURS 11 À 12",
        title: "Tromsø & aurores boréales",
        text: "Final magique à Tromsø, la « porte de l'Arctique ». En hiver, chasse aux aurores boréales, balade en traîneau à chiens et rencontre du peuple sâme ; en été, croisière sous le soleil de minuit.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop&auto=format",
        alt: "Aurore boréale au-dessus de Tromsø en Norvège arctique",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le Preikestolen, le cap Nord, le glacier de
        Jostedalsbreen ou une croisière express côtière peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Norvège",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Norvège&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Tout dépend de ce que vous souhaitez vivre, car la Norvège offre deux
              visages :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : journées très longues, soleil de
                minuit, idéal pour les fjords, la randonnée et les croisières.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (septembre à mars)</strong> : la saison des aurores
                boréales, des paysages enneigés et des activités arctiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mi-saison (mai et septembre)</strong> : nature préservée,
                fréquentation plus douce et belle lumière.
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
        question: <>Faut-il un visa pour se rendre en Norvège&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, la Norvège fait partie de l&apos;espace Schengen :
              aucun visa n&apos;est nécessaire pour les ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit.
              </li>
              <li>
                <Icon name="check" />
                Pensez à vérifier la validité de vos documents avant le départ.
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
        question: <>Quels types de voyages proposez-vous en Norvège&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Norvège :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Circuit nature</strong> : itinéraire multi-étapes entre fjords
                et montagnes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière dans les fjords</strong> : navigation au cœur des
                paysages classés à l&apos;UNESCO.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade aurores boréales</strong> : séjour hivernal à Tromsø
                ou aux Lofoten.
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
                Les <strong>étapes et la durée</strong> : Oslo, Bergen, Geirangerfjord,
                Lofoten, Tromsø…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel design, cabane de
                pêcheur (rorbu), lodge face au fjord.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : croisière, traîneau à
                chiens, randonnée glaciaire, chasse aux aurores.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Norvège&nbsp;?</>,
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
        question: <>Quand peut-on observer les aurores boréales&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>De septembre à mars</strong>, lors des nuits sombres et
              dégagées :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Tromsø et les Lofoten</strong> comptent parmi les meilleurs
                spots au monde.
              </li>
              <li>
                <Icon name="check" />
                Nous organisons des <strong>sorties guidées « chasse aux
                aurores »</strong> pour maximiser vos chances.
              </li>
              <li>
                <Icon name="check" />
                Le phénomène reste <strong>naturel</strong> : aucune observation ne
                peut être garantie, mais l&apos;expérience est inoubliable.
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
                <strong>Hôtels design 4 et 5 étoiles</strong> au cœur d&apos;Oslo et
                Bergen.
              </li>
              <li>
                <Icon name="check" />
                <strong>Cabanes de pêcheurs (rorbuer)</strong> face à la mer dans les
                Lofoten.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et hôtels face aux fjords</strong> au plus près de la
                nature.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses insolites</strong> : igloos de verre et lodges
                arctiques pour admirer les aurores.
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
        question: "Quelle est la meilleure période pour visiter la Norvège ?",
        answer:
          "L'été (juin à août) est idéal pour les fjords, la randonnée et le soleil de minuit. L'hiver (septembre à mars) est la saison des aurores boréales et des activités arctiques. Mai et septembre offrent une nature préservée et une fréquentation plus douce.",
      },
      {
        question: "Faut-il un visa pour se rendre en Norvège ?",
        answer:
          "Non, la Norvège fait partie de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français.",
      },
      {
        question: "Quels types de voyages proposez-vous en Norvège ?",
        answer:
          "CTA Voyages propose des circuits nature, des croisières dans les fjords, des escapades aurores boréales, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Norvège ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et expériences.",
      },
      {
        question: "Combien coûte un voyage en Norvège ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Quand peut-on observer les aurores boréales en Norvège ?",
        answer:
          "De septembre à mars, lors des nuits sombres et dégagées. Tromsø et les Lofoten figurent parmi les meilleurs spots au monde. Nous organisons des sorties guidées pour maximiser vos chances.",
      },
      {
        question: "Quels hébergements proposez-vous en Norvège ?",
        answer:
          "Hôtels design 4 et 5 étoiles, cabanes de pêcheurs (rorbuer) dans les Lofoten, lodges face aux fjords et adresses insolites comme les igloos de verre pour admirer les aurores.",
      },
      {
        question: "Comment demander un devis pour un voyage en Norvège ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Norvège comme ailleurs, nous
        privilégions des prestataires locaux engagés, des excursions respectueuses des
        écosystèmes arctiques et fragiles des fjords, et un tourisme attentif aux
        communautés, notamment au peuple sâme.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Norvège commence ici",
    body: "Parlez-nous de votre projet. Circuit nature, croisière dans les fjords, chasse aux aurores boréales ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default norvege;
