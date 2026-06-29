import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const zanzibar: DestinationContent = {
  slug: "zanzibar",
  meta: {
    title:
      "Voyage à Zanzibar : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Zanzibar avec CTA Voyages. Stone Town classée UNESCO, plages de Nungwi et Kendwa, île aux épices, banc de sable de Nakupenda, snorkeling à Mnemba. Séjour, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Plage de sable blanc et eaux turquoise bordées de boutres traditionnels — Voyage à Zanzibar avec CTA Voyages",
    label: "Destination Zanzibar",
    h1: "Voyage à Zanzibar : l'île aux épices et ses plages turquoise",
    description:
      "Séjour balnéaire de rêve, escapade culturelle à Stone Town, immersion nature ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+2h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~10h (avec escale)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Swahili",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Shilling (TZS)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin à oct. & déc. à fév.",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Zanzibar, le joyau de l'océan Indien",
    body: (
      <>
        Posée au large de la Tanzanie, baignée par les eaux turquoise de
        l&apos;océan Indien, Zanzibar est une invitation à la rêverie. L&apos;île
        aux épices marie le bleu lagon de ses plages de sable blanc à
        l&apos;effervescence parfumée de ses marchés et au charme labyrinthique de{" "}
        <strong>Stone Town</strong>, sa vieille ville classée à l&apos;UNESCO.
        Ici, l&apos;héritage swahili, arabe, indien et africain se mêle dans une
        atmosphère hors du temps, au rythme lent des <strong>boutres</strong> qui
        glissent au large. Flâner dans les ruelles aux portes sculptées,
        s&apos;enivrer des senteurs de girofle et de vanille dans une plantation
        d&apos;épices, plonger au-dessus des récifs colorés de{" "}
        <strong>Mnemba</strong>, ou simplement se laisser bercer face au lagon de{" "}
        <strong>Nungwi</strong> : Zanzibar se vit aussi bien en{" "}
        <strong>séjour balnéaire</strong> qu&apos;en{" "}
        <strong>escapade culturelle</strong>, en{" "}
        <strong>aventure nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages compose avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Zanzibar ?",
    cards: [
      {
        icon: "beach_access",
        title: "Des plages paradisiaques",
        text: "Sable blanc poudreux, lagon turquoise et cocotiers : Nungwi, Kendwa et Paje comptent parmi les plus belles plages de l'océan Indien.",
        img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de sable blanc et eaux turquoise bordée de cocotiers à Zanzibar",
      },
      {
        icon: "history_edu",
        title: "Stone Town, ville d'histoire",
        text: "Ruelles labyrinthiques, portes sculptées et marchés parfumés : la vieille ville classée à l'UNESCO raconte des siècles de métissage swahili.",
        img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop&auto=format",
        alt: "Ruelle pavée et porte sculptée traditionnelle de Stone Town, Zanzibar",
      },
      {
        icon: "scuba_diving",
        title: "Des fonds marins préservés",
        text: "Récifs coralliens, tortues et bancs de poissons multicolores : l'atoll de Mnemba offre l'un des plus beaux spots de snorkeling et de plongée de la région.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format",
        alt: "Snorkeling au-dessus d'un récif corallien aux eaux cristallines à Zanzibar",
      },
      {
        icon: "eco",
        title: "L'île aux épices",
        text: "Girofle, vanille, cannelle et noix de muscade : les plantations parfumées de Zanzibar dévoilent une nature généreuse et toute une histoire commerciale.",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&auto=format",
        alt: "Épices colorées sur un marché traditionnel de Zanzibar",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Zanzibar",
    steps: [
      {
        id: "stone-town",
        label: "JOURS 1 À 2",
        title: "Stone Town : le cœur historique",
        text: "Plongée dans le dédale envoutant de Stone Town, classée à l'UNESCO : portes sculptées, marché de Darajani, maison de naissance de Freddie Mercury et coucher de soleil sur les boutres depuis Forodhani.",
        img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=600&fit=crop&auto=format",
        alt: "Vue sur les toits et le front de mer de Stone Town au coucher du soleil",
        align: "left",
      },
      {
        id: "nungwi-kendwa",
        label: "JOURS 3 À 4",
        title: "Plages du Nord : Nungwi & Kendwa",
        text: "Cap au nord vers les plus belles plages de l'île. Sable blanc, lagon turquoise et farniente à Nungwi et Kendwa, deux plages épargnées par les marées, idéales pour la baignade à toute heure.",
        img: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=800&h=600&fit=crop&auto=format",
        alt: "Plage de Kendwa au sable blanc et aux eaux turquoise, nord de Zanzibar",
        align: "right",
      },
      {
        id: "ile-aux-epices",
        label: "JOUR 5",
        title: "L'île aux épices",
        text: "Visite guidée d'une plantation d'épices à l'intérieur des terres : girofle, vanille, cannelle, poivre et noix de muscade. Une expérience sensorielle qui révèle l'âme et l'histoire de Zanzibar.",
        img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&h=600&fit=crop&auto=format",
        alt: "Plantation d'épices verdoyante à Zanzibar",
        align: "left",
      },
      {
        id: "nakupenda",
        label: "JOUR 6",
        title: "Le banc de sable de Nakupenda",
        text: "Excursion en bateau vers Nakupenda, un éphémère banc de sable blanc émergeant en plein océan. Baignade dans une eau cristalline, déjeuner de fruits de mer les pieds dans le lagon : un moment suspendu.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
        alt: "Banc de sable blanc de Nakupenda émergeant des eaux turquoise à Zanzibar",
        align: "right",
      },
      {
        id: "jozani",
        label: "JOUR 7",
        title: "La forêt de Jozani",
        text: "Immersion dans la forêt de Jozani, dernier refuge des colobes roux endémiques de Zanzibar. Sentiers sur pilotis au cœur de la mangrove et rencontre avec une faune unique au monde.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Singe colobe roux dans la forêt de Jozani à Zanzibar",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "mnemba",
        label: "JOURS 8 À 10",
        title: "Snorkeling à Mnemba : final aquatique",
        text: "Pour clôturer le voyage, sortie en boutre vers l'atoll de Mnemba, sanctuaire marin aux récifs intacts. Snorkeling parmi les tortues et les poissons multicolores, puis derniers jours de farniente face au lagon.",
        img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop&auto=format",
        alt: "Boutre traditionnel et eaux cristallines près de l'atoll de Mnemba, Zanzibar",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres expériences comme une croisière au coucher du soleil en
        boutre, la découverte de Prison Island et ses tortues géantes, ou un
        combiné <strong>safari en Tanzanie</strong> avant la plage peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Zanzibar",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Zanzibar&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Zanzibar profite d&apos;un climat tropical agréable presque toute
              l&apos;année, avec deux saisons sèches idéales :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>De juin à octobre</strong> : la grande saison sèche,
                ensoleillée et plus fraîche, parfaite pour la plage comme pour la
                culture.
              </li>
              <li>
                <Icon name="check" />
                <strong>De décembre à février</strong> : une seconde fenêtre sèche
                et chaude, idéale pour la baignade et le snorkeling.
              </li>
              <li>
                <Icon name="check" />
                <strong>Les saisons des pluies</strong> (mars-mai et nov.) offrent
                des paysages luxuriants et des tarifs plus doux.
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
        question: <>Faut-il un visa pour se rendre à Zanzibar&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa est requis pour entrer en Tanzanie
              (dont Zanzibar fait partie).
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le <strong>visa touristique</strong> s&apos;obtient en ligne
                (e-visa) ou à l&apos;arrivée.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                de retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>assurance santé</strong> et, selon votre parcours, un
                certificat de vaccination peuvent être demandés.
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
        question: <>Quels types de voyages proposez-vous à Zanzibar&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Zanzibar :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour balnéaire</strong> : farniente dans un resort pieds
                dans l&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : combiné Stone Town, plages et
                excursions.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné safari &amp; plage</strong> : safari en Tanzanie
                puis détente à Zanzibar.
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
                Les <strong>étapes et la durée</strong> : Stone Town, Nungwi,
                Kendwa, Paje, Mnemba…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : resort de luxe,
                boutique-hôtel, lodge en bord de plage.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : plongée, tour des
                épices, sortie en boutre, forêt de Jozani.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Zanzibar&nbsp;?</>,
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
                Le type de voyage choisi (avec ou sans safari)
              </li>
              <li>
                <Icon name="check" />
                Les activités et excursions incluses
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
              <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales visites
                et excursions.
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
                <strong>Resorts 4 et 5 étoiles</strong> pieds dans l&apos;eau sur
                les plus belles plages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de charme</strong> au cœur de Stone Town.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et écolodges</strong> en bord de lagon, au plus près
                de la nature.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas privées</strong> avec service personnalisé.
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
        question: "Quelle est la meilleure période pour visiter Zanzibar ?",
        answer:
          "Les deux saisons sèches sont idéales : de juin à octobre (ensoleillée et plus fraîche) et de décembre à février (chaude, parfaite pour la baignade). Les saisons des pluies offrent des paysages luxuriants et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre à Zanzibar ?",
        answer:
          "Oui, un visa est requis pour entrer en Tanzanie, dont Zanzibar fait partie. Il s'obtient en ligne (e-visa) ou à l'arrivée. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous à Zanzibar ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits, des combinés safari et plage avec la Tanzanie, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Zanzibar ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Zanzibar ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage (avec ou sans safari) et les excursions incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à Zanzibar ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous à Zanzibar ?",
        answer:
          "Resorts 4 et 5 étoiles pieds dans l'eau, boutique-hôtels de charme à Stone Town, lodges en bord de lagon et villas privées.",
      },
      {
        question: "Comment demander un devis pour un voyage à Zanzibar ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Zanzibar comme ailleurs, nous
        privilégions des prestataires locaux responsables, des hébergements
        engagés dans la préservation du lagon, et un tourisme respectueux des
        communautés swahilies et des écosystèmes marins comme la forêt de Jozani.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Zanzibar commence ici",
    body: "Parlez-nous de votre projet. Séjour balnéaire, circuit, combiné safari et plage ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default zanzibar;
