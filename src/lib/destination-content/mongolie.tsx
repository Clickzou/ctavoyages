import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const mongolie: DestinationContent = {
  slug: "mongolie",
  meta: {
    title:
      "Voyage en Mongolie : circuit, steppes et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Mongolie avec CTA Voyages. Steppes infinies, désert de Gobi, immersion chez les nomades, nuits en yourte, circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Cavaliers nomades galopant dans les steppes infinies au coucher du soleil — Voyage en Mongolie avec CTA Voyages",
    label: "Destination Mongolie",
    h1: "Voyage en Mongolie : steppes infinies et terres nomades",
    description:
      "Circuit nature, immersion nomade, aventure dans le désert de Gobi ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des terres uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~10h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+6h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Mongol",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Tugrik (MNT)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "La Mongolie, le pays du Ciel Bleu Éternel",
    body: (
      <>
        Terre de tous les espaces, la Mongolie déroule ses steppes sans fin sous
        l&apos;un des ciels les plus purs de la planète. Ici, l&apos;horizon
        n&apos;a pas de limite : troupeaux en liberté, yourtes blanches piquées
        dans l&apos;immensité, cavaliers nomades héritiers de{" "}
        <strong>Gengis Khan</strong> et silence absolu des grands espaces. De
        l&apos;effervescence contrastée d&apos;<strong>Oulan-Bator</strong> aux
        dunes dorées du <strong>désert de Gobi</strong>, des falaises rouges de
        Bayanzag aux rivières de la <strong>vallée de l&apos;Orkhon</strong>,
        chaque étape révèle une nature brute et une culture nomade encore
        vivante. Partager le quotidien d&apos;une famille d&apos;éleveurs,
        chevaucher dans la steppe, dormir sous les étoiles dans une yourte
        chauffée au poêle ou écouter le chant diphonique au coin du feu : la
        Mongolie se vit aussi bien en <strong>circuit nature</strong>{" "}
        qu&apos;en <strong>immersion nomade</strong>, en{" "}
        <strong>aventure dans le Gobi</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Mongolie ?",
    cards: [
      {
        icon: "landscape",
        title: "Des espaces infinis",
        text: "Steppes à perte de vue, montagnes de l'Altaï, lacs sacrés et silence absolu : la Mongolie offre quelques-uns des derniers grands espaces sauvages de la planète.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&auto=format",
        alt: "Steppe verdoyante et montagnes à perte de vue en Mongolie",
      },
      {
        icon: "cottage",
        title: "L'hospitalité nomade",
        text: "Nuits en yourte, repas partagés et thé au lait salé : les familles d'éleveurs vous accueillent avec une hospitalité légendaire, au cœur d'un mode de vie millénaire.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Yourtes traditionnelles mongoles dressées dans la steppe",
      },
      {
        icon: "landscape_2",
        title: "Le désert de Gobi",
        text: "Dunes chantantes de Khongoryn Els, falaises rouges de Bayanzag et chameaux de Bactriane : le Gobi est un désert grandiose aux paysages d'une diversité saisissante.",
        img: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes de sable doré du désert de Gobi en Mongolie",
      },
      {
        icon: "bedtime",
        title: "Des nuits étoilées",
        text: "Loin de toute pollution lumineuse, la Mongolie révèle des ciels d'une pureté rare. Couchers de soleil flamboyants et Voie lactée éclatante au-dessus de la steppe.",
        img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&h=600&fit=crop&auto=format",
        alt: "Ciel étoilé et Voie lactée au-dessus de la steppe mongole",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Mongolie",
    steps: [
      {
        id: "oulan-bator",
        label: "JOURS 1 À 2",
        title: "Oulan-Bator : la capitale des contrastes",
        text: "Arrivée dans la seule grande ville du pays, où gratte-ciel et yourtes se côtoient. Découverte du monastère de Gandan, de la place Sükhbaatar et du musée national pour comprendre l'épopée de Gengis Khan.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Oulan-Bator",
        align: "left",
      },
      {
        id: "terelj",
        label: "JOURS 3 À 4",
        title: "Parc de Terelj : première nuit en yourte",
        text: "Cap sur le parc national de Gorkhi-Terelj et ses formations rocheuses spectaculaires. Première nuit en yourte, randonnée vers le rocher de la Tortue et visite de l'immense statue équestre de Gengis Khan.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Parc de Terelj",
        align: "right",
      },
      {
        id: "gobi-khongoryn",
        label: "JOURS 5 À 7",
        title: "Désert de Gobi & dunes de Khongoryn",
        text: "Envol vers le grand Sud et le désert de Gobi. Ascension des dunes chantantes de Khongoryn Els au coucher du soleil et rencontre des éleveurs de chameaux de Bactriane.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes de Khongoryn",
        align: "left",
        objectPosition: "center 60%",
      },
      {
        id: "bayanzag",
        label: "JOUR 8",
        title: "Falaises de Bayanzag : les falaises flamboyantes",
        text: "Découverte des célèbres falaises rouges de Bayanzag, surnommées les « Flaming Cliffs », haut lieu de la paléontologie où furent découverts les premiers œufs de dinosaures.",
        img: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?w=800&h=600&fit=crop&auto=format",
        alt: "Falaises de Bayanzag",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "orkhon",
        label: "JOURS 9 À 11",
        title: "Vallée de l'Orkhon : rivières et cascades",
        text: "Remontée vers la verdoyante vallée de l'Orkhon, classée à l'UNESCO. Cascade de l'Orkhon, sources chaudes, prairies fleuries et vestiges de l'ancienne capitale impériale de Karakorum.",
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&h=600&fit=crop&auto=format",
        alt: "Vallée de l'Orkhon",
        align: "left",
      },
      {
        id: "nomades",
        label: "JOURS 12 À 14",
        title: "Immersion chez les nomades & chevaux",
        text: "Final en immersion totale : vie partagée avec une famille d'éleveurs, traite des juments, fabrication du fromage et balades à cheval dans la steppe, à la rencontre du véritable mode de vie nomade.",
        img: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?w=800&h=600&fit=crop&auto=format",
        alt: "Immersion chez les nomades",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le lac Khövsgöl, les montagnes de l&apos;Altaï,
        les chasseurs à l&apos;aigle de l&apos;Ouest ou le festival du Naadam
        peuvent facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Mongolie",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter la Mongolie&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              La Mongolie connaît un climat continental extrême. La belle saison
              s&apos;étend de juin à septembre :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : steppes verdoyantes,
                journées douces et nuits fraîches, période idéale pour voyager.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mi-juillet</strong> : le célèbre festival du Naadam,
                jeux des « trois virilités » (lutte, tir à l&apos;arc, courses
                de chevaux).
              </li>
              <li>
                <Icon name="check" />
                <strong>Septembre</strong> : lumières dorées de l&apos;automne et
                affluence réduite, un mois superbe pour la photographie.
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
        question: <>Faut-il un visa pour se rendre en Mongolie&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non</strong>, les ressortissants français bénéficient
              d&apos;une exemption de visa pour un séjour touristique de courte
              durée.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date de retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                L&apos;exemption couvre les séjours touristiques jusqu&apos;à
                <strong> 30 jours</strong>.
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
        question: <>Quels types de voyages proposez-vous en Mongolie&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour la
              Mongolie :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Circuit nature</strong> : steppes, Gobi et vallée de
                l&apos;Orkhon en itinéraire multi-étapes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Immersion nomade</strong> : séjour chez l&apos;habitant
                en yourte, au rythme des éleveurs.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Aventure &amp; trek</strong> : randonnée à cheval,
                bivouac et grands espaces sauvages.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage événementiel</strong> : départ calé sur le
                festival du Naadam.
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
                Les <strong>étapes et la durée</strong> : Gobi, Terelj, Orkhon,
                lac Khövsgöl, Altaï…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : camp de yourtes
                confort, yourte chez l&apos;habitant ou hôtel à Oulan-Bator.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnée à
                cheval, chameaux du Gobi, rencontres nomades.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Mongolie&nbsp;?</>,
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
                Les vols intérieurs et prestations incluses
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
                <strong>Guides francophones</strong> pour vous accompagner tout
                au long du circuit.
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
                <strong>Camps de yourtes confort</strong> avec sanitaires
                privatifs au cœur de la steppe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Yourtes chez l&apos;habitant</strong> pour une immersion
                authentique chez les éleveurs.
              </li>
              <li>
                <Icon name="check" />
                <strong>Hôtels de standing</strong> à Oulan-Bator en début et
                fin de séjour.
              </li>
              <li>
                <Icon name="check" />
                <strong>Bivouacs et campements</strong> pour les étapes les plus
                aventurières.
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
        question: "Quelle est la meilleure période pour visiter la Mongolie ?",
        answer:
          "La belle saison s'étend de juin à septembre, lorsque les steppes sont verdoyantes et le climat clément. Mi-juillet a lieu le festival du Naadam, et septembre offre de superbes lumières automnales avec moins d'affluence.",
      },
      {
        question: "Faut-il un visa pour se rendre en Mongolie ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique jusqu'à 30 jours. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Mongolie ?",
        answer:
          "CTA Voyages propose des circuits nature, des immersions nomades en yourte, des aventures et treks à cheval, des voyages calés sur le festival du Naadam et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Mongolie ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergement et expériences.",
      },
      {
        question: "Combien coûte un voyage en Mongolie ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage, les vols intérieurs et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Mongolie ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Mongolie ?",
        answer:
          "Camps de yourtes confort, yourtes chez l'habitant pour l'immersion nomade, hôtels de standing à Oulan-Bator et bivouacs pour les étapes aventurières.",
      },
      {
        question: "Comment demander un devis pour un voyage en Mongolie ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Mongolie comme ailleurs,
        nous privilégions des prestataires locaux responsables, des camps de
        yourtes tenus par les communautés nomades et un tourisme respectueux des
        traditions, des troupeaux et des fragiles écosystèmes de la steppe et du
        Gobi.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Mongolie commence ici",
    body: "Parlez-nous de votre projet. Circuit nature, immersion nomade, aventure dans le Gobi ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default mongolie;
