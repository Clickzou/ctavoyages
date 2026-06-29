import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const suede: DestinationContent = {
  slug: "suede",
  meta: {
    title:
      "Voyage en Suède : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Suède avec CTA Voyages. Stockholm et la vieille ville, archipel, Göteborg, Laponie suédoise, hôtel de glace, aurores boréales à Kiruna. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Maisons colorées au bord de l'eau dans la vieille ville de Stockholm — Voyage en Suède avec CTA Voyages",
    label: "Destination Suède",
    h1: "Voyage en Suède : Stockholm, archipels et grand Nord",
    description:
      "Escapade citadine, croisière dans les archipels, immersion en Laponie ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h15 de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "Aucun",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Suédois",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Couronne (SEK)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin-août & hiver (Laponie)",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Suède, l'élégance scandinave grandeur nature",
    body: (
      <>
        Terre de contrastes et d&apos;équilibre, la Suède séduit par sa nature
        immense, son design épuré et son art de vivre tout en sérénité. De
        l&apos;élégance maritime de <strong>Stockholm</strong>, bâtie sur
        quatorze îles, aux ruelles médiévales de <strong>Gamla Stan</strong>,
        des milliers d&apos;îlots de l&apos;<strong>archipel</strong> aux forêts
        infinies de la <strong>Laponie</strong>, chaque étape révèle une facette
        de ce royaume nordique où modernité et grands espaces se conjuguent à
        merveille. Glisser en kayak entre les îles boisées, dormir dans un{" "}
        <strong>hôtel de glace</strong>, lever les yeux vers le ballet des{" "}
        <strong>aurores boréales</strong> ou flâner dans les villages aux
        chalets rouges de Dalécarlie : la Suède se vit aussi bien en{" "}
        <strong>escapade citadine</strong> qu&apos;en{" "}
        <strong>aventure polaire</strong>, en <strong>séjour nature</strong> ou
        en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Suède ?",
    cards: [
      {
        icon: "location_city",
        title: "Stockholm, la beauté sur l'eau",
        text: "Capitale posée sur quatorze îles, Stockholm marie palais royaux, ruelles médiévales de Gamla Stan et design scandinave dans un décor maritime unique.",
        img: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800&h=600&fit=crop&auto=format",
        alt: "Vue sur les toits et le port de la vieille ville de Stockholm",
      },
      {
        icon: "aurora",
        title: "Les aurores boréales",
        text: "En hiver, le ciel de la Laponie suédoise s'embrase de voiles verts et violets. Kiruna et Abisko comptent parmi les meilleurs spots au monde.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop&auto=format",
        alt: "Aurores boréales vertes au-dessus d'un paysage enneigé de Laponie",
      },
      {
        icon: "sailing",
        title: "Un archipel envoûtant",
        text: "Près de 30 000 îles et îlots s'étirent au large de Stockholm : kayak, maisons rouges les pieds dans l'eau et baignades nordiques au cœur d'une nature préservée.",
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop&auto=format",
        alt: "Maisons rouges sur une île boisée de l'archipel de Stockholm",
      },
      {
        icon: "ac_unit",
        title: "L'expérience du grand Nord",
        text: "Hôtel de glace, traîneau à chiens, rencontre du peuple sami et nuits sous les étoiles polaires : la Laponie suédoise est une invitation à l'émerveillement.",
        img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=600&fit=crop&auto=format",
        alt: "Traîneau à chiens dans un paysage enneigé de Laponie suédoise",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Suède",
    steps: [
      {
        id: "stockholm",
        label: "JOURS 1 À 3",
        title: "Stockholm & la vieille ville (Gamla Stan)",
        text: "Immersion dans la capitale scandinave : flânerie dans les ruelles pavées de Gamla Stan, Palais royal, musée Vasa et son navire du XVIIe siècle, puis ambiance design et fika dans les quartiers branchés de Södermalm.",
        img: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&h=600&fit=crop&auto=format",
        alt: "Ruelle pavée et façades colorées de Gamla Stan, la vieille ville de Stockholm",
        align: "left",
      },
      {
        id: "archipel",
        label: "JOUR 4",
        title: "L'archipel de Stockholm",
        text: "Embarquement vers les îles : croisière au fil des îlots boisés, escale dans un village de pêcheurs aux maisons rouges, kayak et déjeuner les pieds dans l'eau au cœur d'une nature préservée.",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop&auto=format",
        alt: "Bateau naviguant entre les îles boisées de l'archipel de Stockholm",
        align: "right",
      },
      {
        id: "goteborg",
        label: "JOURS 5 À 6",
        title: "Göteborg, la perle de la côte ouest",
        text: "Cap vers l'ouest et son port animé : canaux du quartier de Haga, halles gourmandes de Feskekôrka, scène culinaire réputée et excursion vers les îles rocheuses de la côte de Bohuslän.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&auto=format",
        alt: "Canal et maisons traditionnelles du quartier de Haga à Göteborg",
        align: "left",
      },
      {
        id: "laponie",
        label: "JOURS 7 À 8",
        title: "Laponie suédoise & hôtel de glace",
        text: "Envol vers le grand Nord et Jukkasjärvi : nuit féerique dans le célèbre hôtel de glace, sculpté chaque hiver, traîneau à chiens sur la rivière gelée et rencontre de la culture sami.",
        img: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&h=600&fit=crop&auto=format",
        alt: "Chambre sculptée dans la glace de l'hôtel de glace de Jukkasjärvi",
        align: "right",
      },
      {
        id: "kiruna",
        label: "JOURS 9 À 10",
        title: "Kiruna & aurores boréales",
        text: "Au-delà du cercle polaire, Kiruna ouvre les portes du parc national d'Abisko, l'un des meilleurs endroits au monde pour observer le ballet des aurores boréales, motoneige et nuits sous le ciel arctique.",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop&auto=format",
        alt: "Aurores boréales au-dessus des montagnes enneigées près de Kiruna",
        align: "left",
      },
      {
        id: "dalecarlie",
        label: "JOUR 11",
        title: "La Dalécarlie, le cœur traditionnel",
        text: "Sur la route du retour, la province de Dalécarlie incarne la Suède authentique : chalets rouges au bord du lac Siljan, chevaux de Dalécarlie peints à la main et villages où vit encore l'âme suédoise.",
        img: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800&h=600&fit=crop&auto=format",
        alt: "Chalets rouges traditionnels au bord d'un lac en Dalécarlie",
        align: "right",
        objectPosition: "center 40%",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Malmö, le canal de Götaland, l&apos;île de
        Gotland ou la région des lacs peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Suède",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Suède&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Suède se visite toute l&apos;année, mais deux saisons se
              distinguent selon vos envies :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : journées très longues,
                soleil de minuit dans le Nord, idéal pour les villes, l&apos;archipel
                et la nature.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (décembre à mars)</strong> : la magie polaire,
                aurores boréales, hôtel de glace et activités enneigées en
                Laponie.
              </li>
              <li>
                <Icon name="check" />
                <strong>Printemps et automne</strong> : nature flamboyante et
                fréquentation plus douce.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période la plus adaptée à
              votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre en Suède&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Suède fait partie de l&apos;Union
              européenne et de l&apos;espace Schengen.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit pour les ressortissants français.
              </li>
              <li>
                <Icon name="check" />
                Aucun <strong>visa</strong> n&apos;est requis pour un séjour
                touristique.
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
        question: <>Quels types de voyages proposez-vous en Suède&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Suède :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : city break à Stockholm ou Göteborg.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Aventure polaire</strong> : Laponie, hôtel de glace et
                aurores boréales.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
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
                Les <strong>étapes et la durée</strong> : Stockholm, archipel,
                Göteborg, Laponie, Dalécarlie…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel design,
                cabane en forêt, hôtel de glace.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : kayak, traîneau
                à chiens, observation des aurores.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Suède&nbsp;?</>,
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
              adressent une proposition personnalisée, gratuite et sans
              engagement.
            </p>
          </>
        ),
      },
      {
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> L&apos;anglais est parlé partout, et
              CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales
                visites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong> : carnets,
                bons, programmes.
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
                <strong>Hôtels design 4 et 5 étoiles</strong> au cœur de
                Stockholm et Göteborg.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtel de glace</strong> et lodges arctiques en Laponie.
              </li>
              <li>
                <Icon name="check" />
                <strong>Cabanes et maisons rouges</strong> au bord de l&apos;eau
                dans l&apos;archipel.
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
        question: "Quelle est la meilleure période pour visiter la Suède ?",
        answer:
          "L'été (juin à août) offre de longues journées et le soleil de minuit, idéal pour les villes, l'archipel et la nature. L'hiver (décembre à mars) est parfait pour les aurores boréales, l'hôtel de glace et les activités enneigées en Laponie.",
      },
      {
        question: "Faut-il un visa pour se rendre en Suède ?",
        answer:
          "Non. La Suède fait partie de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français, sans visa.",
      },
      {
        question: "Quels types de voyages proposez-vous en Suède ?",
        answer:
          "CTA Voyages propose des city breaks à Stockholm ou Göteborg, des circuits, des aventures polaires en Laponie, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Suède ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et expériences.",
      },
      {
        question: "Combien coûte un voyage en Suède ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Suède ?",
        answer:
          "Non. L'anglais est parlé partout, et nos guides francophones ainsi que notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Suède ?",
        answer:
          "Hôtels design 4 et 5 étoiles à Stockholm et Göteborg, hôtel de glace et lodges arctiques en Laponie, cabanes au bord de l'eau dans l'archipel et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage en Suède ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Suède comme ailleurs, nous
        privilégions des prestataires locaux responsables, des activités nature
        à faible impact et le respect de la culture sami et des écosystèmes
        fragiles du grand Nord.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Suède commence ici",
    body: "Parlez-nous de votre projet. City break, circuit, aventure polaire en Laponie ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default suede;
