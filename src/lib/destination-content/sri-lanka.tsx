import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const sriLanka: DestinationContent = {
  slug: "sri-lanka",
  meta: {
    title:
      "Voyage au Sri Lanka : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Sri Lanka avec CTA Voyages. Rocher de Sigiriya, temple de la Dent à Kandy, train des plantations de thé, safari à Yala, plages du sud. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1536323760109-ca8c07450053?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Rocher de Sigiriya émergeant de la jungle au lever du soleil — Voyage au Sri Lanka avec CTA Voyages",
    label: "Destination Sri Lanka",
    h1: "Voyage au Sri Lanka : l'île aux mille facettes",
    description:
      "Circuit culturel, safari nature, séjour balnéaire ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+4h30",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h (avec escale)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Cinghalais & tamoul",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Roupie (LKR)",
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
    h2: "Le Sri Lanka, la perle de l'océan Indien",
    body: (
      <>
        Suspendue au sud de l&apos;Inde, l&apos;île de Ceylan concentre sur un
        territoire grand comme l&apos;Irlande une diversité de paysages
        stupéfiante. En quelques heures de route, on passe des cités royales du{" "}
        <strong>Triangle culturel</strong> aux plantations de thé d&apos;altitude,
        des temples bouddhistes séculaires aux réserves où rôdent éléphants et
        léopards, avant de finir les pieds dans le sable face à l&apos;océan
        Indien. Gravir le légendaire <strong>rocher de Sigiriya</strong>, se
        recueillir au <strong>temple de la Dent</strong> de Kandy, emprunter le
        train mythique à travers les collines de <strong>Nuwara Eliya</strong>,
        partir en safari au <strong>parc de Yala</strong> ou observer les baleines
        bleues au large de <strong>Mirissa</strong> : chaque étape révèle une
        facette de ce pays à la spiritualité douce et à l&apos;hospitalité
        légendaire. Le Sri Lanka se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>safari nature</strong>, en <strong>séjour balnéaire</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Sri Lanka ?",
    cards: [
      {
        icon: "landscape",
        title: "Un patrimoine millénaire",
        text: "Sigiriya, Anuradhapura, Polonnaruwa, Kandy : huit sites classés à l'UNESCO racontent plus de deux mille ans d'histoire et de spiritualité bouddhiste.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Rocher de Sigiriya et ses jardins royaux au Sri Lanka",
      },
      {
        icon: "emoji_nature",
        title: "Une faune exceptionnelle",
        text: "Éléphants sauvages, léopards, ours lippus et baleines bleues : les parcs de Yala et d'Udawalawe offrent des safaris parmi les plus riches d'Asie.",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop&auto=format",
        alt: "Léopard observé lors d'un safari au parc national de Yala",
      },
      {
        icon: "local_cafe",
        title: "Les collines du thé",
        text: "Plantations émeraude à perte de vue, cascades et trajets en train légendaires : les hautes terres de Nuwara Eliya et Ella sont un enchantement.",
        img: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800&h=600&fit=crop&auto=format",
        alt: "Plantations de thé en terrasses dans les hautes terres de Nuwara Eliya",
      },
      {
        icon: "beach_access",
        title: "Des plages dorées",
        text: "Cocotiers, lagons turquoise et spots de surf : le sud de l'île, de Mirissa à Tangalle, déroule certaines des plus belles plages de l'océan Indien.",
        img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&h=600&fit=crop&auto=format",
        alt: "Plage bordée de cocotiers et de palmiers à Mirissa, sud du Sri Lanka",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Sri Lanka",
    steps: [
      {
        id: "colombo",
        label: "JOURS 1 À 2",
        title: "Colombo : porte d'entrée de l'île",
        text: "Arrivée dans la capitale animée et son joyeux mélange d'influences : temples colorés, marchés du quartier de Pettah, élégance coloniale du Fort et coucher de soleil sur Galle Face Green.",
        img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop&auto=format",
        alt: "Temple coloré de Gangaramaya à Colombo, Sri Lanka",
        align: "left",
      },
      {
        id: "sigiriya",
        label: "JOURS 3 À 4",
        title: "Sigiriya : le rocher du lion",
        text: "Au cœur du Triangle culturel, ascension du spectaculaire rocher de Sigiriya, forteresse royale perchée à 200 mètres, ses fresques et ses jardins aquatiques classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1546708973-b339540b5162?w=800&h=600&fit=crop&auto=format",
        alt: "Vue depuis le sommet du rocher de Sigiriya sur la jungle environnante",
        align: "right",
      },
      {
        id: "kandy",
        label: "JOURS 5 À 6",
        title: "Kandy & le temple de la Dent",
        text: "Au bord de son lac, l'ancienne capitale royale abrite le Temple de la Dent, sanctuaire le plus sacré du bouddhisme cinghalais. Spectacle de danses kandyennes et visite d'un jardin botanique luxuriant.",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop&auto=format",
        alt: "Temple de la Dent au bord du lac de Kandy au crépuscule",
        align: "left",
      },
      {
        id: "nuwara-eliya",
        label: "JOURS 7 À 8",
        title: "Nuwara Eliya : le pays du thé",
        text: "Embarquement à bord du train mythique qui serpente à travers les plantations de thé. Découverte des hautes terres de Nuwara Eliya, ses fabriques de thé, ses cascades et son ambiance « petite Angleterre ».",
        img: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&h=600&fit=crop&auto=format",
        alt: "Train traversant les plantations de thé verdoyantes près de Nuwara Eliya",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "yala",
        label: "JOURS 9 À 10",
        title: "Yala : safari au cœur de la jungle",
        text: "Cap au sud-est pour un safari en 4x4 dans le parc national de Yala, royaume du léopard. À l'aube comme au crépuscule, à l'affût des éléphants, crocodiles, buffles et d'une avifaune foisonnante.",
        img: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&h=600&fit=crop&auto=format",
        alt: "Éléphant sauvage dans le parc national de Yala au Sri Lanka",
        align: "left",
      },
      {
        id: "mirissa",
        label: "JOURS 11 À 14",
        title: "Mirissa : final balnéaire au sud",
        text: "Détente sur les plages dorées du sud, de Mirissa à Tangalle. Farniente sous les cocotiers, sortie en mer à la rencontre des baleines bleues et escapade dans la cité fortifiée de Galle pour clôturer le voyage.",
        img: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de Mirissa bordée de cocotiers au sud du Sri Lanka",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme les cités anciennes d&apos;Anuradhapura et
        Polonnaruwa, le rocher d&apos;Ella, le temple d&apos;or de Dambulla ou les
        plages de la côte est peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Sri Lanka",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Sri Lanka&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Sri Lanka connaît deux moussons décalées, ce qui permet d&apos;y
              voyager toute l&apos;année selon les régions :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Décembre à mars</strong> : la période idéale pour le sud,
                l&apos;ouest et le centre culturel, ensoleillée et sèche.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mai à septembre</strong> : la meilleure saison pour la
                côte est et le nord (Trincomalee, Arugam Bay).
              </li>
              <li>
                <Icon name="check" />
                <strong>Hautes terres</strong> : agréables presque toute
                l&apos;année, plus fraîches en altitude.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et la côte les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Sri Lanka&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, une autorisation électronique de voyage (ETA)
              est nécessaire pour les ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Elle s&apos;obtient <strong>en ligne avant le départ</strong>, de
                manière simple et rapide.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                de retour est exigé.
              </li>
            </ul>
            <p>
              Nous vous communiquons les formalités à jour et vous accompagnons
              dans vos démarches au moment de votre réservation.
            </p>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous au Sri Lanka&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Sri
              Lanka :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire sur les plages du sud ou de la
                côte est.
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
                <strong>Combiné culture &amp; safari</strong> : le Triangle
                culturel, les parcs et les plages.
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
                Les <strong>étapes et la durée</strong> : Sigiriya, Kandy, Nuwara
                Eliya, Yala, Mirissa…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, bungalow de
                plantation, lodge de safari, resort en bord de mer.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : train des
                plantations, safari, observation des baleines, cours de cuisine.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Sri Lanka&nbsp;?</>,
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
                <strong>Hôtels 4 et 5 étoiles</strong> dans les villes et le
                Triangle culturel.
              </li>
              <li>
                <Icon name="check" />
                <strong>Bungalows de plantation</strong> de caractère au cœur des
                collines de thé.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges de safari</strong> aux portes des parcs nationaux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plus belles
                plages du sud.
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
        question: "Quelle est la meilleure période pour visiter le Sri Lanka ?",
        answer:
          "De décembre à mars, c'est la période idéale pour le sud, l'ouest et le centre culturel, ensoleillée et sèche. La côte est et le nord sont plus agréables de mai à septembre. Les hautes terres se visitent presque toute l'année.",
      },
      {
        question: "Faut-il un visa pour se rendre au Sri Lanka ?",
        answer:
          "Oui, une autorisation électronique de voyage (ETA) est nécessaire pour les ressortissants français. Elle s'obtient en ligne avant le départ. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Sri Lanka ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits culturels, des combinés culture et safari, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Sri Lanka ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Sri Lanka ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Sri Lanka ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous au Sri Lanka ?",
        answer:
          "Hôtels 4 et 5 étoiles, bungalows de plantation au cœur des collines de thé, lodges de safari aux portes des parcs et resorts pieds dans l'eau sur les plages du sud.",
      },
      {
        question: "Comment demander un devis pour un voyage au Sri Lanka ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Sri Lanka comme ailleurs,
        nous privilégions des prestataires locaux responsables, des safaris
        respectueux de la faune sauvage et un tourisme attentif aux communautés
        et aux écosystèmes fragiles de l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Sri Lanka commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné culture et safari ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default sriLanka;
