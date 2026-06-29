import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const madagascar: DestinationContent = {
  slug: "madagascar",
  meta: {
    title:
      "Voyage à Madagascar : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Madagascar avec CTA Voyages. Allée des Baobabs, parc de l'Isalo, lémuriens d'Andasibe, plages de Nosy Be et Sainte-Marie, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Allée des Baobabs au coucher du soleil à Morondava — Voyage à Madagascar avec CTA Voyages",
    label: "Destination Madagascar",
    h1: "Voyage à Madagascar : baobabs, lémuriens et plages sauvages",
    description:
      "Circuit nature, séjour balnéaire, aventure hors des sentiers battus ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~11h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+2h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Malgache & français",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Ariary (MGA)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril à novembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Madagascar, l'île-continent aux mille visages",
    body: (
      <>
        Détachée de l&apos;Afrique il y a des millions d&apos;années, la grande
        île de Madagascar a façonné un monde à part, où près de 90&nbsp;% de la
        faune et de la flore ne se rencontrent nulle part ailleurs. Des{" "}
        <strong>baobabs majestueux</strong> de Morondava aux canyons sculptés du{" "}
        <strong>parc de l&apos;Isalo</strong>, des lémuriens bondissant dans la
        forêt humide d&apos;<strong>Andasibe</strong> aux lagons turquoise de{" "}
        <strong>Nosy Be</strong> et de l&apos;<strong>Île Sainte-Marie</strong>,
        chaque étape dévoile une nature spectaculaire et une culture métissée
        d&apos;une rare générosité. Arpenter les pistes de l&apos;arrière-pays,
        observer les baleines à bosse au large de Sainte-Marie, partager le
        quotidien des villages malgaches ou se prélasser sur une plage déserte :
        Madagascar se vit aussi bien en <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>séjour balnéaire</strong>, en{" "}
        <strong>aventure hors des sentiers battus</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Madagascar ?",
    cards: [
      {
        icon: "pets",
        title: "Une faune unique au monde",
        text: "Lémuriens, caméléons, geckos et oiseaux endémiques : Madagascar est un sanctuaire vivant où la nature a inventé des espèces que l'on ne croise nulle part ailleurs.",
        img: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&h=400&fit=crop&auto=format",
        alt: "Lémurien catta dans la forêt malgache",
      },
      {
        icon: "park",
        title: "Les baobabs légendaires",
        text: "Symbole de l'île, l'allée des Baobabs de Morondava aligne ses géants millénaires dans une lumière dorée inoubliable, l'une des plus belles images de Madagascar.",
        img: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?w=600&h=400&fit=crop&auto=format",
        alt: "Allée des Baobabs au crépuscule à Morondava",
      },
      {
        icon: "beach_access",
        title: "Des îles paradisiaques",
        text: "Nosy Be, Sainte-Marie et leurs lagons turquoise : plages de sable blanc, snorkeling, cocotiers et observation des baleines composent un décor de pur paradis.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et lagon turquoise à Nosy Be",
      },
      {
        icon: "landscape",
        title: "Des paysages grandioses",
        text: "Canyons de l'Isalo, hautes terres en terrasses, forêts humides et pistes de l'arrière-pays : Madagascar est un terrain d'aventure aux décors spectaculaires.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format",
        alt: "Canyons et formations rocheuses du parc national de l'Isalo",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Madagascar",
    steps: [
      {
        id: "antananarivo",
        label: "JOURS 1 À 2",
        title: "Antananarivo : la capitale des hauts plateaux",
        text: "Arrivée à Tana, la capitale perchée sur ses collines. Découverte de la ville haute, du palais de la Reine, des marchés colorés et de l'ambiance animée des hauts plateaux avant de prendre la route.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=1100&fit=crop&auto=format",
        alt: "Antananarivo",
        align: "left",
      },
      {
        id: "morondava",
        label: "JOURS 3 À 4",
        title: "L'allée des Baobabs à Morondava",
        text: "Cap à l'ouest vers Morondava et sa célèbre allée des Baobabs. Au coucher du soleil, ces géants millénaires se découpent dans une lumière dorée : l'une des images les plus emblématiques de l'île.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&h=1100&fit=crop&auto=format",
        alt: "Morondava",
        align: "right",
      },
      {
        id: "isalo",
        label: "JOURS 5 À 7",
        title: "Le parc national de l'Isalo",
        text: "Randonnées au cœur des canyons sculptés de l'Isalo : piscines naturelles, oasis de palmiers, formations gréseuses et points de vue spectaculaires sur les paysages les plus grandioses du Sud.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&h=1100&fit=crop&auto=format",
        alt: "Isalo",
        align: "left",
      },
      {
        id: "andasibe",
        label: "JOURS 8 À 9",
        title: "Andasibe : à la rencontre des lémuriens",
        text: "Direction la forêt humide d'Andasibe pour observer l'indri, le plus grand des lémuriens, et écouter son chant unique. Balades de jour comme de nuit au cœur d'une biodiversité exceptionnelle.",
        img: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=900&h=1100&fit=crop&auto=format",
        alt: "Andasibe",
        align: "right",
      },
      {
        id: "nosy-be",
        label: "JOURS 10 À 12",
        title: "Nosy Be : l'île aux parfums",
        text: "Envol vers le Nord et l'île de Nosy Be, ses plantations d'ylang-ylang et ses lagons turquoise. Snorkeling, sorties en pirogue vers les îlots voisins et farniente sur les plages de sable blanc.",
        img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=900&h=1100&fit=crop&auto=format",
        alt: "Nosy Be",
        align: "left",
      },
      {
        id: "sainte-marie",
        label: "JOURS 13 À 15",
        title: "L'Île Sainte-Marie : final balnéaire",
        text: "Cap sur Sainte-Marie, ancien repaire de pirates bordé de plages sauvages. Selon la saison, observation des baleines à bosse au large, avant de clôturer le voyage les pieds dans le sable.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&h=1100&fit=crop&auto=format",
        alt: "Île Sainte-Marie",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le parc de Ranomafana, les Tsingy de
        Bemaraha, le canal des Pangalanes ou les plages d&apos;Ifaty peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Madagascar",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Madagascar&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La grande île se visite principalement pendant la saison sèche,
              d&apos;avril à novembre :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Avril à juin</strong> : paysages verdoyants après les
                pluies, températures agréables, idéal pour la nature et les
                parcs.
              </li>
              <li>
                <Icon name="check" />
                <strong>Juillet à septembre</strong> : pleine saison sèche et{" "}
                <strong>observation des baleines</strong> à Sainte-Marie.
              </li>
              <li>
                <Icon name="check" />
                <strong>Octobre à novembre</strong> : conditions idéales pour
                combiner circuit nature et plages.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et les régions les
              plus adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre à Madagascar&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa de tourisme est exigé pour les
              ressortissants français, mais la démarche est simple.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Le <strong>visa s&apos;obtient à l&apos;arrivée</strong> à
                l&apos;aéroport ou en ligne avant le départ.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date de retour est requis.
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
        question: <>Quels types de voyages proposez-vous à Madagascar&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour
              Madagascar&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire à Nosy Be ou Sainte-Marie.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit</strong> : itinéraire multi-étapes individuel,
                accompagné ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné nature &amp; plage</strong> : les parcs et les
                baobabs, puis les lagons du Nord.
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
              choisissez&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Les <strong>étapes et la durée</strong> : Morondava, Isalo,
                Andasibe, Nosy Be, Sainte-Marie…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, lodge de
                charme, bungalow pieds dans l&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnées,
                observation des baleines, rencontres villageoises.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Madagascar&nbsp;?</>,
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
                Les vols intérieurs, activités et prestations incluses
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
        question: <>La santé et les vaccins, comment ça se passe&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Quelques précautions simples</strong> suffisent pour
              voyager sereinement :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>traitement antipaludéen</strong> est généralement
                recommandé, à valider avec votre médecin.
              </li>
              <li>
                <Icon name="check" />
                Les <strong>vaccins universels</strong> doivent être à jour ;
                d&apos;autres peuvent être conseillés.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>assistance et assurance voyage</strong> sont vivement
                conseillées.
              </li>
            </ul>
            <p>
              Nous vous transmettons toutes les recommandations sanitaires à jour
              avant le départ.
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
                <strong>Hôtels de charme</strong> sur les hauts plateaux et en
                ville.
              </li>
              <li>
                <Icon name="check" />
                <strong>Bungalows pieds dans l&apos;eau</strong> sur les plages
                de Nosy Be et Sainte-Marie.
              </li>
              <li>
                <Icon name="check" />
                <strong>Lodges et écolodges</strong> au cœur des parcs nationaux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses authentiques</strong> au plus près des villages
                et de la nature.
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
        question: "Quelle est la meilleure période pour visiter Madagascar ?",
        answer:
          "La saison sèche, d'avril à novembre, est la période idéale. D'avril à juin les paysages sont verdoyants, de juillet à septembre c'est la saison de l'observation des baleines à Sainte-Marie, et octobre-novembre est parfait pour combiner nature et plages.",
      },
      {
        question: "Faut-il un visa pour se rendre à Madagascar ?",
        answer:
          "Oui, un visa de tourisme est exigé pour les ressortissants français. Il s'obtient simplement à l'arrivée à l'aéroport ou en ligne avant le départ. Un passeport valide au moins 6 mois après le retour est requis.",
      },
      {
        question: "Quels types de voyages proposez-vous à Madagascar ?",
        answer:
          "CTA Voyages propose des séjours balnéaires, des circuits nature, des combinés nature et plage, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Madagascar ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Madagascar ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les vols intérieurs et activités inclus. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Quels vaccins et précautions de santé pour Madagascar ?",
        answer:
          "Un traitement antipaludéen est généralement recommandé et les vaccins universels doivent être à jour. Nous transmettons toutes les recommandations sanitaires à jour avant le départ.",
      },
      {
        question: "Quels hébergements proposez-vous à Madagascar ?",
        answer:
          "Hôtels de charme sur les hauts plateaux, bungalows pieds dans l'eau à Nosy Be et Sainte-Marie, lodges et écolodges au cœur des parcs nationaux.",
      },
      {
        question: "Comment demander un devis pour un voyage à Madagascar ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Madagascar comme ailleurs,
        nous privilégions des prestataires locaux responsables, des lodges
        engagés pour la préservation de la biodiversité et un tourisme
        respectueux des communautés et des écosystèmes endémiques de l&apos;île.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Madagascar commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné nature et plage ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default madagascar;
