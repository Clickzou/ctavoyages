import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const maroc: DestinationContent = {
  slug: "maroc",
  meta: {
    title:
      "Voyage au Maroc : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Maroc avec CTA Voyages. Médinas de Marrakech et Fès, route des kasbahs, désert de Merzouga, Chefchaouen la bleue, Essaouira. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Médina aux teintes ocre et palmeraie au coucher du soleil — Voyage au Maroc avec CTA Voyages",
    label: "Destination Maroc",
    h1: "Voyage au Maroc : médinas, kasbahs et grand désert",
    description:
      "Circuit culturel, escapade dans le désert, séjour balnéaire ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
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
      value: "~3h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Arabe & berbère",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dirham (MAD)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Mars à mai, sept. à nov.",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Maroc, mille couleurs aux portes de l'Afrique",
    body: (
      <>
        À quelques heures de vol seulement, le Maroc déploie une richesse de
        paysages et de cultures qui fascine les voyageurs. De l&apos;effervescence
        envoûtante des médinas et des souks à la sérénité infinie des dunes du
        Sahara, des sommets enneigés de l&apos;<strong>Atlas</strong> aux ruelles
        bleues de <strong>Chefchaouen</strong>, chaque étape révèle une facette de
        ce royaume où traditions millénaires, art de vivre et hospitalité légendaire
        se conjuguent à merveille. Flâner dans la place{" "}
        <strong>Jemaa el-Fna</strong> à la nuit tombée, dormir sous les étoiles dans
        un bivouac du <strong>désert de Merzouga</strong>, se perdre dans le dédale
        de la médina de <strong>Fès</strong> ou respirer l&apos;air iodé
        d&apos;Essaouira : le Maroc se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>escapade dans le désert</strong>, en{" "}
        <strong>séjour balnéaire</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Maroc ?",
    cards: [
      {
        icon: "storefront",
        title: "Des médinas envoûtantes",
        text: "Souks colorés, artisanat, riads de charme : les médinas de Marrakech et Fès, classées à l'UNESCO, sont un labyrinthe de senteurs et de couleurs.",
        img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=600&fit=crop&auto=format",
        alt: "Souk coloré et épices dans la médina de Marrakech au Maroc",
      },
      {
        icon: "landscape",
        title: "Le désert du Sahara",
        text: "Bivouac sous les étoiles, dunes dorées de Merzouga et balades à dos de dromadaire : le grand désert offre des nuits inoubliables au cœur du silence.",
        img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes dorées du désert de Merzouga et dromadaires au Maroc",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie généreuse",
        text: "Tajines mijotés, couscous du vendredi, pâtisseries au miel et thé à la menthe : la cuisine marocaine est une invitation au partage et à la convivialité.",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&auto=format",
        alt: "Tajine marocain traditionnel aux légumes et épices",
      },
      {
        icon: "castle",
        title: "Kasbahs et palais",
        text: "Route des kasbahs, ksour de terre crue, palais ornés de zelliges : le patrimoine architectural marocain est un voyage dans le temps à chaque détour.",
        img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=600&fit=crop&auto=format",
        alt: "Kasbah de terre crue d'Aït-Ben-Haddou au Maroc",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Maroc",
    steps: [
      {
        id: "marrakech",
        label: "JOURS 1 À 3",
        title: "Marrakech & sa médina",
        text: "Immersion dans la ville rouge : la place Jemaa el-Fna animée jour et nuit, les souks, le palais de la Bahia, les jardins Majorelle et un premier thé à la menthe au cœur d'un riad de charme.",
        img: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=800&h=600&fit=crop&auto=format",
        alt: "Marrakech",
        align: "left",
      },
      {
        id: "ait-ben-haddou",
        label: "JOUR 4",
        title: "Aït-Ben-Haddou & la route des kasbahs",
        text: "Franchissement du col du Tizi n'Tichka dans l'Atlas, puis découverte du ksar d'Aït-Ben-Haddou, citadelle de terre classée à l'UNESCO et décor de cinéma mythique.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop&auto=format",
        alt: "Aït-Ben-Haddou",
        align: "right",
      },
      {
        id: "merzouga",
        label: "JOURS 5 À 6",
        title: "Le désert de Merzouga : bivouac",
        text: "Vallée du Drâa, gorges du Todra puis arrivée aux portes du Sahara. Coucher de soleil sur les dunes de l'Erg Chebbi à dos de dromadaire et nuit magique en bivouac sous les étoiles.",
        img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop&auto=format",
        alt: "Merzouga",
        align: "left",
      },
      {
        id: "fes",
        label: "JOURS 7 À 8",
        title: "Fès : la capitale spirituelle",
        text: "Plongée dans la plus ancienne médina du monde : les tanneries de Chouara, l'université Al Quaraouiyine, les médersas ornées de zelliges et l'artisanat séculaire de la ville impériale.",
        img: "https://images.unsplash.com/photo-1577147443647-81856d5151af?w=800&h=600&fit=crop&auto=format",
        alt: "Fès",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "chefchaouen",
        label: "JOUR 9",
        title: "Chefchaouen la bleue",
        text: "Au cœur du Rif, la perle bleue du Maroc : ruelles peintes dans toutes les nuances d'azur, ambiance paisible et points de vue superbes sur les montagnes environnantes.",
        img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&h=600&fit=crop&auto=format",
        alt: "Chefchaouen",
        align: "left",
      },
      {
        id: "essaouira",
        label: "JOURS 10 À 12",
        title: "Essaouira : final iodé",
        text: "Cap sur l'Atlantique et la cité des alizés : remparts face à l'océan, port de pêche animé, médina bohème et longue plage de sable pour clôturer le voyage en douceur.",
        img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop&auto=format",
        alt: "Essaouira",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Rabat, Casablanca, la vallée de l&apos;Ourika ou
        les plages d&apos;Agadir peuvent facilement s&apos;intégrer à votre
        programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Maroc",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Maroc&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Maroc se visite toute l&apos;année, mais deux périodes se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (mars à mai)</strong> : la période idéale, douce et
                fleurie, parfaite pour les villes impériales et le désert.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à novembre)</strong> : températures
                agréables, lumière magnifique, idéale pour les circuits.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : très chaud à l&apos;intérieur,
                privilégiez alors la côte atlantique et Essaouira.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et les régions les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Maroc&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient d&apos;une
              exemption de visa pour un séjour touristique de moins de 90 jours.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide</strong> couvrant toute la durée du séjour
                est exigé.
              </li>
              <li>
                <Icon name="check" />
                Une <strong>fiche de police</strong> peut être remplie à
                l&apos;arrivée.
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
        question: <>Quels types de voyages proposez-vous au Maroc&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Maroc :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin à Marrakech ou balnéaire à Essaouira
                et Agadir.
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
                <strong>Aventure dans le désert</strong> : route des kasbahs et
                bivouac sous les étoiles.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : riads de charme et expériences
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
                Les <strong>étapes et la durée</strong> : Marrakech, Fès, Merzouga,
                Chefchaouen, Essaouira…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : riad de charme, hôtel,
                bivouac de luxe dans le désert.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : atelier cuisine,
                hammam, balade à dos de dromadaire.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Maroc&nbsp;?</>,
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
              <strong>Pas du tout.</strong> Le français est très largement parlé au
              Maroc, et CTA Voyages prévoit tout :
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
                <strong>Assistance téléphonique</strong> joignable pendant tout votre
                séjour.
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
                <strong>Riads de charme</strong> au cœur des médinas de Marrakech et
                Fès.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels 4 et 5 étoiles</strong> et resorts en bord
                d&apos;Atlantique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Bivouacs et campements de luxe</strong> au cœur du désert.
              </li>
              <li>
                <Icon name="check" />
                <strong>Maisons d&apos;hôtes</strong> et adresses de caractère.
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
        question: "Quelle est la meilleure période pour visiter le Maroc ?",
        answer:
          "Le printemps (mars à mai) et l'automne (septembre à novembre) sont les périodes idéales : températures douces et belle lumière, parfaites pour les villes impériales et le désert. L'été, privilégiez la côte atlantique et Essaouira.",
      },
      {
        question: "Faut-il un visa pour se rendre au Maroc ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique de moins de 90 jours. Un passeport valide couvrant toute la durée du séjour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Maroc ?",
        answer:
          "CTA Voyages propose des séjours citadins et balnéaires, des circuits culturels, des aventures dans le désert avec bivouac, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Maroc ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Maroc ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Maroc ?",
        answer:
          "Non. Le français est très largement parlé au Maroc, et nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous au Maroc ?",
        answer:
          "Riads de charme au cœur des médinas, hôtels 4 et 5 étoiles, resorts en bord d'Atlantique, bivouacs de luxe dans le désert et maisons d'hôtes de caractère.",
      },
      {
        question: "Comment demander un devis pour un voyage au Maroc ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Maroc comme ailleurs, nous
        privilégions des prestataires locaux responsables, des riads et campements
        engagés et un tourisme respectueux des cultures, des oasis et des
        écosystèmes du désert.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Maroc commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, aventure dans le désert ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default maroc;
