import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const japon: DestinationContent = {
  slug: "japon",
  meta: {
    title: "Voyage au Japon : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Japon avec CTA Voyages. Séjour en ryokan, circuit culturel de Tokyo à Kyoto, glamping, croisière ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image: "/assets/images/iStock-1969999309.jpg",
    imageAlt:
      "Temple de Kyoto entouré de cerisiers en fleur — Voyage au Japon avec CTA Voyages",
    label: "Destination Japon",
    h1: "Voyage au Japon : entre tradition et modernité",
    description:
      "Séjour en ryokan, circuit culturel, glamping, croisière ou voyage sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "clock",
      label: "Décalage horaire",
      value: "+7h / +8h",
      minuteRotation: "2880deg",
      hourRotation: "240deg",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~12h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Japonais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Yen (JPY)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mars-Mai / Oct-Nov",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Japon, une invitation au voyage hors du commun",
    body: (
      <>
        Archipel de contrastes saisissants, le Japon fascine par sa capacité unique
        à marier l&apos;ultra-modernité et la sérénité millénaire. Des néons
        vertigineux de Shinjuku aux jardins zen apaisants de Kyoto, des sources
        chaudes d&apos;Hakone aux ruelles envoûtantes de Gion, chaque étape révèle
        une facette inédite d&apos;une culture d&apos;une richesse infinie. Séjourner
        dans un <strong>ryokan</strong> traditionnel, déguster un kaiseki aux côtés
        d&apos;une rivière, traverser les forêts de bambous de l&apos;Arashiyama ou
        observer le Mont Fuji depuis les eaux du lac Ashi : le Japon est une
        expérience sensorielle totale, qui se vit aussi bien en{" "}
        <strong>séjour urbain</strong> qu&apos;en{" "}
        <strong>circuit culturel</strong>, en <strong>escapade nature</strong>, en{" "}
        <strong>croisière</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Japon ?",
    cards: [
      {
        icon: "temple_buddhist",
        title: "Une culture millénaire",
        text: "Temples bouddhistes, sanctuaires shinto, cérémonie du thé, arts martiaux : chaque étape est un voyage dans le temps.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop&auto=format",
        alt: "Temple bouddhiste japonais entouré de nature",
      },
      {
        icon: "ramen_dining",
        title: "Une gastronomie d'exception",
        text: "Sushis, ramen, kaiseki, street food de Dotonbori : la cuisine japonaise est une invitation au raffinement absolu.",
        img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop&auto=format",
        alt: "Gastronomie japonaise kaiseki raffinée",
      },
      {
        icon: "landscape",
        title: "Des paysages d'une beauté rare",
        text: "Cerisiers au printemps, érables en automne, neige en hiver : les saisons japonaises sont un spectacle permanent.",
        img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&h=400&fit=crop&auto=format",
        alt: "Mont Fuji et cerisiers en fleur au Japon",
      },
      {
        icon: "verified_user",
        title: "Sécurité et sérénité",
        text: "Parmi les pays les plus sûrs du monde, le Japon offre une hospitalité sincère, une propreté exemplaire et une sérénité unique.",
        img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format",
        alt: "Bain onsen japonais apaisant dans la nature",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Japon",
    steps: [
      {
        id: "tokyo",
        label: "JOURS 1 À 3",
        title: "Tokyo : la mégapole du futur",
        text: "Immersion dans l'énergie de Tokyo : Shibuya, Asakusa, les néons de Shinjuku et la culture pop d'Akihabara. Une ville qui surprend à chaque coin de rue.",
        img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=280&fit=crop&auto=format",
        alt: "Tokyo",
        align: "left",
      },
      {
        id: "hakone",
        label: "JOURS 4 ET 5",
        title: "Hakone : sérénité au pied du Fuji",
        text: "Croisière sur le lac Ashi avec vue sur le Mont Fuji, jardins de Gora et sources volcaniques. Nuit en ryokan avec bains onsen pour une immersion dans le Japon authentique.",
        img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&h=280&fit=crop&auto=format",
        alt: "Hakone",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "takayama",
        label: "JOURS 6 ET 7",
        title: "Takayama : le Japon rural",
        text: "Au cœur des Alpes japonaises, Takayama et ses maisons de saké du XVIIe siècle. À proximité, Shirakawa-go et ses toits de chaume classés à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&h=280&fit=crop&auto=format",
        alt: "Takayama",
        align: "left",
      },
      {
        id: "kyoto",
        label: "JOURS 8 À 10",
        title: "Kyoto : l'âme du Japon éternel",
        text: "Les torii de Fushimi Inari, le Pavillon d'Or Kinkaku-ji, les bambous d'Arashiyama et le quartier de Gion où les geikos circulent encore au crépuscule.",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=280&fit=crop&auto=format",
        alt: "Kyoto",
        align: "right",
      },
      {
        id: "osaka",
        label: "JOURS 11 ET 12",
        title: "Osaka : la capitale gourmande",
        text: "Dotonbori, le château d'Osaka et la street food légendaire de la ville : takoyaki, okonomiyaki, gyoza. Un final haut en couleurs avant le vol retour.",
        img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=500&h=280&fit=crop&auto=format",
        alt: "Osaka",
        align: "left",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages adaptera chaque étape selon vos
        envies, votre rythme et votre budget. D&apos;autres destinations comme
        Hiroshima, Nara ou Nikko peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Japon",
    left: [
      {
        question: <>Quelle est la meilleure période pour visiter le Japon&nbsp;?</>,
        answer: (
          <>
            <p>
              Le Japon se visite toute l&apos;année, mais deux saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (mars à mai)</strong> : cerisiers en fleur, idéal
                pour les circuits et séjours urbains.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (octobre à novembre)</strong> : érables flamboyants
                et paysages spectaculaires.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hiver (décembre à février)</strong> : ski à Hokkaido, onsen
                sous la neige.
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
        question: <>Faut-il un visa pour se rendre au Japon&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français n&apos;ont pas
              besoin de visa pour un séjour inférieur à 90 jours.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> pour toute la durée du séjour
                suffit.
              </li>
              <li>
                <Icon name="check" />
                L&apos;inscription sur <strong>Visit Japan Web</strong> est
                recommandée.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Quels types de voyages proposez-vous au Japon&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Japon :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : hôtel ou ryokan dans une ou plusieurs
                villes.
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
                <strong>Croisière</strong> : découverte de l&apos;archipel par la
                mer.
              </li>
              <li>
                <Icon name="check" />
                <strong>Glamping</strong> : hébergements insolites immergés dans la
                nature japonaise.
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
                Les <strong>étapes et la durée</strong> : Tokyo, Kyoto, Hiroshima,
                Nara, Alpes japonaises…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, ryokan,
                temple-logement.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : cérémonie du thé,
                cours de cuisine, calligraphie.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Japon&nbsp;?</>,
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
        question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones privés</strong> pour toutes les visites.
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
                <strong>Hôtels 4 et 5 étoiles</strong> dans les grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Ryokans</strong> : auberges traditionnelles avec tatamis,
                futons et bains onsen.
              </li>
              <li>
                <Icon name="check" />
                <strong>Shukubo</strong> : hébergements en temple bouddhiste.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hébergements insolites</strong> en pleine nature.
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
        question: "Quelle est la meilleure période pour visiter le Japon ?",
        answer:
          "Le printemps (mars-mai) pour les cerisiers et l'automne (octobre-novembre) pour les feuillages sont les périodes les plus prisées. L'hiver offre le ski à Hokkaido et les onsen sous la neige.",
      },
      {
        question: "Faut-il un visa pour se rendre au Japon ?",
        answer:
          "Non, les ressortissants français n'ont pas besoin de visa pour un séjour inférieur à 90 jours. Un passeport valide suffit.",
      },
      {
        question: "Quels types de voyages proposez-vous au Japon ?",
        answer:
          "CTA Voyages propose des séjours, circuits culturels, voyages sur mesure, croisières et escapades glamping au Japon.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Japon ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Japon ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Japon ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous au Japon ?",
        answer:
          "Hôtels 4 et 5 étoiles, ryokans traditionnels avec bains onsen, shukubo et hébergements insolites.",
      },
      {
        question: "Comment demander un devis pour un voyage au Japon ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Japon comme ailleurs, nous
        privilégions des prestataires locaux responsables et un tourisme respectueux
        des cultures et des écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Japon commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, voyage sur mesure ou croisière : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default japon;
