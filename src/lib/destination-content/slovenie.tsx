import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const slovenie: DestinationContent = {
  slug: "slovenie",
  meta: {
    title:
      "Voyage en Slovénie : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Slovénie avec CTA Voyages. Lac de Bled, gorges de Vintgar, grottes de Postojna, parc du Triglav, Ljubljana et la côte de Piran. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Église sur l'île du lac de Bled au pied des Alpes juliennes — Voyage en Slovénie avec CTA Voyages",
    label: "Destination Slovénie",
    h1: "Voyage en Slovénie : lacs émeraude et Alpes juliennes",
    description:
      "Circuit nature, séjour culturel, escapade alpine ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~1h45 de vol",
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
      value: "Slovène",
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
      value: "Mai à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Slovénie, l'Europe verte en miniature",
    body: (
      <>
        Nichée entre les Alpes, l&apos;Adriatique et les plaines de Pannonie, la
        Slovénie concentre sur un territoire grand comme une région française une
        diversité de paysages à couper le souffle. Des eaux émeraude du{" "}
        <strong>lac de Bled</strong> aux sommets enneigés des{" "}
        <strong>Alpes juliennes</strong>, des gorges sauvages de{" "}
        <strong>Vintgar</strong> aux galeries souterraines des{" "}
        <strong>grottes de Postojna</strong>, chaque étape révèle une nature
        préservée et généreuse. Ljubljana, capitale verte et conviviale, séduit
        par ses ponts fleuris et ses terrasses au bord de la rivière, tandis que la
        petite côte slovène déploie le charme vénitien de{" "}
        <strong>Piran</strong> face à la mer. Randonner au pied du{" "}
        <strong>Triglav</strong>, naviguer sur le lac de Bohinj, déguster un vin de
        la vallée de la Vipava ou flâner dans une vieille ville médiévale : la
        Slovénie se vit aussi bien en <strong>circuit nature</strong> qu&apos;en{" "}
        <strong>séjour culturel</strong>, en <strong>escapade alpine</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme,
        selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Slovénie ?",
    cards: [
      {
        icon: "water",
        title: "Des lacs émeraude",
        text: "Le lac de Bled et son île, le lac de Bohinj et ses eaux cristallines : la Slovénie offre certains des plus beaux paysages lacustres d'Europe.",
        img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&h=600&fit=crop&auto=format",
        alt: "Île et église au milieu du lac de Bled entourée de montagnes",
      },
      {
        icon: "hiking",
        title: "Une nature alpine",
        text: "Le parc national du Triglav, les gorges de Vintgar et les Alpes juliennes sont un paradis pour la randonnée et les amoureux du grand air.",
        img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop&auto=format",
        alt: "Passerelle en bois au-dessus des gorges de Vintgar en Slovénie",
      },
      {
        icon: "landscape",
        title: "Un monde souterrain",
        text: "Les grottes de Postojna et le château troglodyte de Predjama révèlent un univers karstique spectaculaire, parmi les plus célèbres au monde.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Château de Predjama encastré dans une falaise en Slovénie",
      },
      {
        icon: "location_city",
        title: "Des villes pleines de charme",
        text: "Ljubljana la verte et ses ponts fleuris, Piran et son allure vénitienne : la Slovénie séduit par ses villes à taille humaine et leur douceur de vivre.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Vieille ville de Ljubljana au bord de la rivière Ljubljanica",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Slovénie",
    steps: [
      {
        id: "ljubljana",
        label: "JOURS 1 À 2",
        title: "Ljubljana : la capitale verte",
        text: "Immersion dans l'atmosphère paisible de Ljubljana : le château perché, le pont des Dragons, les ponts dessinés par Plečnik, le marché central et les terrasses animées au bord de la Ljubljanica.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Ljubljana",
        align: "left",
      },
      {
        id: "bled",
        label: "JOUR 3",
        title: "Le lac de Bled & son île",
        text: "Le joyau de la Slovénie : traversée en barque traditionnelle « pletna » vers l'île et son église romantique, montée au château médiéval surplombant les eaux émeraude et dégustation de la célèbre crème de Bled.",
        img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&h=600&fit=crop&auto=format",
        alt: "Lac de Bled",
        align: "right",
      },
      {
        id: "vintgar",
        label: "JOUR 4",
        title: "Les gorges de Vintgar",
        text: "Randonnée le long des passerelles en bois suspendues au-dessus des eaux turquoise de la rivière Radovna, à travers un canyon spectaculaire jusqu'à la cascade de Šum.",
        img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop&auto=format",
        alt: "Gorges de Vintgar",
        align: "left",
        objectPosition: "center 40%",
      },
      {
        id: "postojna-predjama",
        label: "JOUR 5",
        title: "Grottes de Postojna & château de Predjama",
        text: "Plongée dans le monde karstique : balade en petit train à travers les galeries féeriques des grottes de Postojna, puis visite de l'étonnant château de Predjama, encastré dans une falaise.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Château de Predjama",
        align: "right",
      },
      {
        id: "triglav-bohinj",
        label: "JOURS 6 À 7",
        title: "Parc du Triglav & lac de Bohinj",
        text: "Au cœur du seul parc national du pays : randonnées au pied du mont Triglav, eaux paisibles et sauvages du lac de Bohinj, cascade de Savica et grands espaces alpins préservés.",
        img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&h=600&fit=crop&auto=format",
        alt: "Lac de Bohinj",
        align: "left",
      },
      {
        id: "piran",
        label: "JOURS 8 À 9",
        title: "La côte & Piran : final adriatique",
        text: "Descente vers l'Adriatique et le charme vénitien de Piran : ruelles médiévales, place Tartini, remparts dominant la mer et farniente face au coucher de soleil pour clôturer le voyage en beauté.",
        img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop&auto=format",
        alt: "Piran",
        align: "right",
        objectPosition: "center 60%",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la vallée de Soča aux eaux émeraude, les
        vignobles de la Vipava, le haras de Lipica ou la ville thermale de Maribor
        peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Slovénie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Slovénie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Slovénie se découvre en toute saison, mais une période se
              distingue :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (mai-juin)</strong> : nature verdoyante, cascades
                puissantes et températures douces, idéal pour la randonnée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet-août)</strong> : la haute saison, parfaite pour
                les lacs, la baignade et la côte adriatique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre-octobre)</strong> : couleurs
                flamboyantes, vendanges et affluence plus douce.
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
        question: <>Faut-il un visa pour se rendre en Slovénie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> La Slovénie est membre de l&apos;Union
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
                La monnaie est l&apos;<strong>euro</strong> et il n&apos;y a{" "}
                <strong>aucun décalage horaire</strong> avec la France.
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
        question: <>Quels types de voyages proposez-vous en Slovénie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la Slovénie :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Ljubljana ou au bord du lac de
                Bled.
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
                <strong>Combiné nature &amp; culture</strong> : Alpes juliennes,
                grottes et villes de charme.
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
                Les <strong>étapes et la durée</strong> : Ljubljana, Bled, Bohinj,
                Postojna, Piran, vallée de Soča…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme, villa
                au bord du lac, chalet de montagne.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnée,
                œnologie, sortie en barque, spa thermal.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Slovénie&nbsp;?</>,
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
                votre séjour. L&apos;anglais est par ailleurs très répandu.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur de Ljubljana et de
                Bled.
              </li>
              <li>
                <Icon name="check" />
                <strong>Villas et hôtels vue lac</strong> face aux Alpes juliennes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Chalets et écolodges</strong> au cœur du parc du Triglav.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de caractère
                sur la côte.
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
        question: "Quelle est la meilleure période pour visiter la Slovénie ?",
        answer:
          "De mai à septembre est la période idéale. Le printemps offre une nature verdoyante et des cascades puissantes, l'été est parfait pour les lacs et la côte, et l'automne séduit par ses couleurs flamboyantes et une affluence plus douce.",
      },
      {
        question: "Faut-il un visa pour se rendre en Slovénie ?",
        answer:
          "Non. La Slovénie est membre de l'Union européenne et de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français. La monnaie est l'euro et il n'y a aucun décalage horaire avec la France.",
      },
      {
        question: "Quels types de voyages proposez-vous en Slovénie ?",
        answer:
          "CTA Voyages propose des séjours, des circuits, des combinés nature et culture, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Slovénie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Slovénie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Slovénie ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage, et l'anglais est très répandu.",
      },
      {
        question: "Quels hébergements proposez-vous en Slovénie ?",
        answer:
          "Hôtels 4 et 5 étoiles à Ljubljana et Bled, villas et hôtels vue lac, chalets au cœur du parc du Triglav et adresses de charme sur la côte.",
      },
      {
        question: "Comment demander un devis pour un voyage en Slovénie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Slovénie, première destination
        certifiée « Green » au monde, nous privilégions des prestataires locaux
        responsables, la préservation des parcs naturels et un tourisme respectueux
        des écosystèmes alpins et des communautés.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Slovénie commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, combiné nature et culture ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default slovenie;
