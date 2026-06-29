import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const ecosse: DestinationContent = {
  slug: "ecosse",
  meta: {
    title:
      "Voyage en Écosse : circuit, autotour et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Écosse avec CTA Voyages. Château d'Édimbourg, Highlands et Glencoe, Loch Ness, île de Skye, distilleries de whisky du Speyside. Circuit, autotour ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Vallée brumeuse de Glencoe dans les Highlands écossais — Voyage en Écosse avec CTA Voyages",
    label: "Destination Écosse",
    h1: "Voyage en Écosse : châteaux, Highlands et lochs mystérieux",
    description:
      "Circuit culturel, autotour dans les Highlands, escapade nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des paysages uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "-1h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~2h de vol",
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
      value: "Livre sterling (GBP)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mai à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Écosse, terre de légendes et de grands espaces",
    body: (
      <>
        Aux confins des îles Britanniques, l&apos;Écosse déploie ses châteaux
        perchés, ses lochs miroitants et ses landes battues par les vents dans
        une atmosphère d&apos;une beauté sauvage incomparable. De
        l&apos;élégance médiévale d&apos;<strong>Édimbourg</strong> aux sommets
        embrumés des <strong>Highlands</strong>, des eaux mystérieuses du{" "}
        <strong>Loch Ness</strong> aux reliefs spectaculaires de l&apos;
        <strong>île de Skye</strong>, chaque étape révèle une facette de ce pays
        où histoire, légendes celtiques et hospitalité chaleureuse se conjuguent
        à merveille. Parcourir la mythique route de Glencoe, déguster un single
        malt dans une distillerie du <strong>Speyside</strong>, longer les
        lochs à bord d&apos;un train panoramique ou flâner dans les ruelles
        pavées d&apos;une vieille ville classée : l&apos;Écosse se vit aussi bien
        en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>autotour dans les Highlands</strong>, en{" "}
        <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Écosse ?",
    cards: [
      {
        icon: "castle",
        title: "Des châteaux de légende",
        text: "Édimbourg, Stirling, Eilean Donan, Dunnottar : l'Écosse compte parmi les plus beaux châteaux d'Europe, perchés sur leurs falaises ou cernés de lochs.",
        img: "https://images.unsplash.com/photo-1536323760109-ca8c07450053?w=800&h=600&fit=crop&auto=format",
        alt: "Château d'Eilean Donan se reflétant dans le loch en Écosse",
      },
      {
        icon: "landscape",
        title: "Des paysages grandioses",
        text: "Vallées glaciaires, montagnes embrumées et landes infinies : les Highlands et l'île de Skye offrent certains des panoramas les plus spectaculaires du monde.",
        img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&h=600&fit=crop&auto=format",
        alt: "Le Old Man of Storr sur l'île de Skye dans les Highlands écossais",
      },
      {
        icon: "liquor",
        title: "La patrie du whisky",
        text: "Du Speyside à Islay, l'Écosse est le berceau du single malt. Visites de distilleries centenaires et dégustations font partie de l'expérience.",
        img: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=600&fit=crop&auto=format",
        alt: "Alambics de cuivre dans une distillerie de whisky écossaise",
      },
      {
        icon: "auto_stories",
        title: "Une terre de légendes",
        text: "Monstre du Loch Ness, clans, kilts et cornemuses : l'Écosse cultive un imaginaire celtique fascinant, entre histoire véritable et récits mythiques.",
        img: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&h=600&fit=crop&auto=format",
        alt: "Les eaux sombres du Loch Ness sous un ciel nuageux en Écosse",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Écosse",
    steps: [
      {
        id: "edimbourg",
        label: "JOURS 1 À 3",
        title: "Édimbourg & son château",
        text: "Immersion dans la capitale écossaise : le château perché sur son rocher volcanique, la Royal Mile pavée, le palais de Holyrood et les ruelles de la vieille ville classée à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Vue du château d'Édimbourg dominant la vieille ville",
        align: "left",
      },
      {
        id: "highlands-glencoe",
        label: "JOUR 4",
        title: "Highlands & Glencoe",
        text: "Cap au nord vers les Highlands : la route légendaire de Glencoe, ses vallées glaciaires et ses sommets embrumés, parmi les paysages les plus spectaculaires d'Écosse.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format",
        alt: "La vallée de Glencoe et ses montagnes dans les Highlands",
        align: "right",
      },
      {
        id: "loch-ness-inverness",
        label: "JOURS 5 À 6",
        title: "Loch Ness & Inverness",
        text: "Découverte du mythique Loch Ness, de son château d'Urquhart et de ses légendes, puis halte à Inverness, capitale des Highlands, au bord de la rivière Ness.",
        img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=600&fit=crop&auto=format",
        alt: "Le château d'Urquhart au bord du Loch Ness",
        align: "left",
      },
      {
        id: "skye",
        label: "JOURS 7 À 8",
        title: "L'île de Skye",
        text: "Traversée vers l'île de Skye, joyau des Hébrides : le Old Man of Storr, les Quiraing, les piscines féeriques et les villages de pêcheurs colorés de Portree.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Paysage spectaculaire de l'île de Skye en Écosse",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "speyside",
        label: "JOUR 9",
        title: "Distilleries du Speyside",
        text: "Sur la route du retour, immersion dans le Speyside, cœur du whisky écossais : visite d'une distillerie centenaire et dégustation de single malt à la rencontre des maîtres distillateurs.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&auto=format",
        alt: "Distillerie de whisky du Speyside au cœur de la campagne écossaise",
        align: "left",
      },
      {
        id: "stirling-lochs",
        label: "JOURS 10 À 11",
        title: "Stirling & lochs",
        text: "Final entre histoire et nature : le château de Stirling et son champ de bataille, puis le parc national des Trossachs et les rives paisibles du Loch Lomond avant le retour.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Le château de Stirling perché sur sa colline en Écosse",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Glasgow, l&apos;île de Mull, le train
        panoramique du Jacobite ou les côtes sauvages de la North Coast 500
        peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Écosse",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Écosse&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Écosse se visite principalement à la belle saison, mais
              chaque période a son charme :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Mai à septembre</strong> : la période idéale, jours
                longs, températures douces et paysages verdoyants, parfaite pour
                les Highlands.
              </li>
              <li>
                <Icon name="check" />
                <strong>Avril et octobre</strong> : ailes de saison plus calmes,
                couleurs splendides et tarifs plus doux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver</strong> : atmosphère féerique à Édimbourg et
                ambiance intimiste, pour les amateurs de paysages enneigés.
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
        question: <>Faut-il un visa pour se rendre en Écosse&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, mais depuis le Brexit, le Royaume-Uni
              impose de nouvelles formalités :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> est désormais exigé (la
                carte d&apos;identité n&apos;est plus acceptée).
              </li>
              <li>
                <Icon name="check" />
                Une <strong>autorisation électronique de voyage (ETA)</strong>{" "}
                est requise avant le départ pour les séjours touristiques.
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
        question: <>Quels types de voyages proposez-vous en Écosse&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour
              l&apos;Écosse :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Édimbourg ou Glasgow.
              </li>
              <li>
                <Icon name="check" />
                <strong>Autotour</strong> : road-trip libre dans les Highlands à
                votre rythme.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes accompagné ou
                en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage thématique</strong> : route des distilleries,
                châteaux ou randonnée.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: (
          <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
              choisissez :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>étapes et la durée</strong> : Édimbourg, Highlands,
                Skye, Speyside, Stirling…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                château, B&amp;B traditionnel, lodge.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : dégustation de
                whisky, randonnée, train panoramique.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Écosse&nbsp;?</>,
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
        question: <>La conduite à gauche est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> Si vous optez pour un autotour, CTA
              Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Véhicule adapté</strong> avec boîte automatique sur
                demande pour plus de sérénité.
              </li>
              <li>
                <Icon name="check" />
                <strong>Road-book détaillé en français</strong> avec
                itinéraires et conseils de conduite.
              </li>
              <li>
                <Icon name="check" />
                <strong>Assistance téléphonique</strong> joignable pendant tout
                votre séjour.
              </li>
            </ul>
            <p>
              Préférez les circuits accompagnés&nbsp;? Nous prévoyons alors un
              chauffeur-guide francophone.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur d&apos;Édimbourg
                et des grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Châteaux-hôtels</strong> pour une nuit hors du temps
                dans les Highlands.
              </li>
              <li>
                <Icon name="check" />
                <strong>B&amp;B traditionnels</strong> et auberges de campagne
                authentiques.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et lodges face aux lochs.
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
        question: "Quelle est la meilleure période pour visiter l'Écosse ?",
        answer:
          "La période idéale s'étend de mai à septembre : jours longs, températures douces et paysages verdoyants, parfaite pour les Highlands. Avril et octobre offrent de belles couleurs et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre en Écosse ?",
        answer:
          "Non, mais depuis le Brexit un passeport valide est exigé (la carte d'identité n'est plus acceptée) et une autorisation électronique de voyage (ETA) est requise avant le départ pour les séjours touristiques.",
      },
      {
        question: "Quels types de voyages proposez-vous en Écosse ?",
        answer:
          "CTA Voyages propose des séjours citadins, des autotours dans les Highlands, des circuits accompagnés, des voyages thématiques (whisky, châteaux) et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Écosse ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Écosse ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La conduite à gauche est-elle un problème en Écosse ?",
        answer:
          "Non. Pour les autotours, nous prévoyons un véhicule adapté (boîte automatique sur demande), un road-book en français et une assistance téléphonique. Des circuits avec chauffeur-guide francophone sont aussi disponibles.",
      },
      {
        question: "Quels hébergements proposez-vous en Écosse ?",
        answer:
          "Hôtels 4 et 5 étoiles, châteaux-hôtels dans les Highlands, B&B traditionnels et adresses de charme face aux lochs.",
      },
      {
        question: "Comment demander un devis pour un voyage en Écosse ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Écosse comme ailleurs, nous
        privilégions des hébergements et prestataires locaux engagés, le respect
        des espaces naturels protégés des Highlands et un tourisme attentif aux
        communautés et aux écosystèmes fragiles des îles.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Écosse commence ici",
    body: "Parlez-nous de votre projet. Séjour, autotour dans les Highlands, circuit ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default ecosse;
