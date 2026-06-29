import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const ouzbekistan: DestinationContent = {
  slug: "ouzbekistan",
  meta: {
    title:
      "Voyage en Ouzbékistan : circuit Route de la Soie et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Ouzbékistan avec CTA Voyages. Route de la Soie, place du Registan à Samarcande, médersas de Boukhara, remparts de Khiva, nuit en yourte dans le désert de Kyzylkoum. Circuit ou voyage sur mesure, devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Place du Registan et ses médersas aux mosaïques turquoise à Samarcande — Voyage en Ouzbékistan avec CTA Voyages",
    label: "Destination Ouzbékistan",
    h1: "Voyage en Ouzbékistan : sur les pas de la Route de la Soie",
    description:
      "Circuit culturel le long de la Route de la Soie, immersion dans les cités-musées d'Asie centrale, nuit en yourte dans le désert ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+4h",
    },
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~8h (avec escale)",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Ouzbek",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Sum (UZS)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Avril-mai & sept-oct",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Ouzbékistan, cœur battant de la Route de la Soie",
    body: (
      <>
        Carrefour des civilisations au cœur de l&apos;Asie centrale,
        l&apos;Ouzbékistan déroule ses cités mythiques, ses coupoles turquoise et
        ses caravansérails dans une lumière dorée venue d&apos;un autre temps. De
        l&apos;effervescence moderne de <strong>Tachkent</strong> à la splendeur de
        la place du Registan à <strong>Samarcande</strong>, des médersas séculaires
        de <strong>Boukhara</strong> aux remparts de terre de{" "}
        <strong>Khiva</strong>, chaque étape ressuscite la grande épopée des
        marchands, des poètes et des conquérants. Flâner dans un bazar parfumé
        d&apos;épices, contempler le ciel étoilé depuis une yourte au milieu du
        désert de <strong>Kyzylkoum</strong>, partager le thé avec les artisans de
        la vallée de <strong>Ferghana</strong> ou s&apos;émerveiller devant les
        mosaïques d&apos;un mausolée : l&apos;Ouzbékistan se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>escapade nature</strong>, en{" "}
        <strong>voyage entièrement sur mesure</strong> ou en{" "}
        <strong>aventure hors des sentiers battus</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Ouzbékistan ?",
    cards: [
      {
        icon: "mosque",
        title: "Des cités de la Route de la Soie",
        text: "Samarcande, Boukhara, Khiva : trois joyaux classés à l'UNESCO, véritables musées à ciel ouvert où chaque coupole raconte mille ans d'histoire.",
        img: "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=800&h=600&fit=crop&auto=format",
        alt: "Médersas et minarets aux mosaïques bleues le long de la Route de la Soie en Ouzbékistan",
      },
      {
        icon: "auto_awesome",
        title: "Une architecture éblouissante",
        text: "Faïences émaillées, coupoles turquoise et calligraphies dorées : la place du Registan et le Chah-e-Zindeh comptent parmi les plus beaux ensembles du monde islamique.",
        img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=600&fit=crop&auto=format",
        alt: "Mosaïques turquoise et dorées d'une médersa de la place du Registan à Samarcande",
      },
      {
        icon: "landscape",
        title: "Le désert et les yourtes",
        text: "Une nuit sous les étoiles au camp de yourtes du Kyzylkoum, le silence des dunes, le galop d'un cheval et le thé partagé au coucher du soleil.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&auto=format",
        alt: "Campement de yourtes traditionnelles au cœur du désert de Kyzylkoum",
      },
      {
        icon: "diversity_3",
        title: "Une hospitalité légendaire",
        text: "Artisans, tisseurs de soie et potiers de la vallée de Ferghana, marchés colorés et tables généreuses : l'accueil ouzbek est d'une chaleur inoubliable.",
        img: "https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=800&h=600&fit=crop&auto=format",
        alt: "Étals d'épices et de fruits secs sur un bazar traditionnel en Ouzbékistan",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire sur la Route de la Soie",
    steps: [
      {
        id: "tachkent",
        label: "JOURS 1 À 2",
        title: "Tachkent : la capitale aux deux visages",
        text: "Arrivée dans la capitale, entre larges avenues soviétiques et vieille ville. Découverte du bazar Chorsu, du complexe Hazrati Imam et de son célèbre Coran d'Othman, puis du métro aux stations somptueuses.",
        img: "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=800&h=600&fit=crop&auto=format",
        alt: "Place et architecture de Tachkent, capitale de l'Ouzbékistan",
        align: "left",
      },
      {
        id: "samarcande",
        label: "JOURS 3 À 5",
        title: "Samarcande : la place du Registan",
        text: "Le cœur mythique de la Route de la Soie. Émerveillement devant la place du Registan et ses trois médersas, la mosquée Bibi-Khanym, la nécropole Chah-e-Zindeh et le mausolée Gour Emir de Tamerlan.",
        img: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&h=600&fit=crop&auto=format",
        alt: "Les trois médersas de la place du Registan à Samarcande",
        align: "right",
      },
      {
        id: "boukhara",
        label: "JOURS 6 À 8",
        title: "Boukhara : la cité sainte",
        text: "Ville-musée aux 140 monuments classés. Promenade autour du bassin Lyab-i-Hauz, le minaret Kalon, la forteresse de l'Ark et les coupoles marchandes où l'on chine soieries, tapis et couteaux ciselés.",
        img: "https://images.unsplash.com/photo-1591019479261-1a103585c559?w=800&h=600&fit=crop&auto=format",
        alt: "Minaret Kalon et médersas de la vieille ville de Boukhara",
        align: "left",
      },
      {
        id: "khiva",
        label: "JOURS 9 À 10",
        title: "Khiva : la ville-musée fortifiée",
        text: "Dans l'enceinte de terre d'Itchan Kala, on se croirait mille ans en arrière : minarets émaillés, médersas, palais et ruelles désertes au crépuscule. Le joyau le mieux préservé de la Route de la Soie.",
        img: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=800&h=600&fit=crop&auto=format",
        alt: "Remparts de terre et minaret émaillé de la cité fortifiée de Khiva",
        align: "right",
      },
      {
        id: "kyzylkoum",
        label: "JOUR 11",
        title: "Désert de Kyzylkoum : nuit en yourte",
        text: "Cap sur les dunes du Kyzylkoum et son camp de yourtes au bord du lac Aydarkoul. Balade à dos de chameau, dîner autour du feu et ciel étoilé d'une pureté rare pour une parenthèse hors du temps.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&auto=format",
        alt: "Camp de yourtes dans le désert de Kyzylkoum au coucher du soleil",
        align: "left",
      },
      {
        id: "ferghana",
        label: "JOURS 12 À 13",
        title: "Vallée de Ferghana : terre d'artisans",
        text: "La plus fertile et la plus traditionnelle des régions. Rencontre avec les tisseurs de soie d'Ichtikhan, les potiers de Richtan et leurs faïences bleues, et les marchés colorés au pied des montagnes.",
        img: "https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=800&h=600&fit=crop&auto=format",
        alt: "Artisan tissant la soie dans la vallée de Ferghana en Ouzbékistan",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Chakhrisabz, la ville natale de Tamerlan, le lac
        Aydarkoul ou une extension vers le Tadjikistan et le Turkménistan peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Ouzbékistan",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter l&apos;Ouzbékistan&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              L&apos;Ouzbékistan connaît un climat continental marqué. Deux saisons
              se distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à mai)</strong> : la période idéale, douce
                et fleurie, parfaite pour les visites culturelles.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne (septembre à octobre)</strong> : températures
                agréables, ciel lumineux et saison des fruits et des récoltes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juin à août)</strong> : très chaud et sec, à réserver
                aux voyageurs avertis ; <strong>hiver</strong> froid mais
                photogénique sous la neige.
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
        question: <>Faut-il un visa pour se rendre en Ouzbékistan&nbsp;?</>,
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
                Un <strong>passeport valide au moins 3 mois</strong> après la date
                de retour est exigé.
              </li>
              <li>
                <Icon name="check" />
                L&apos;<strong>enregistrement auprès des hôtels</strong> à chaque
                étape est automatique et fait office de formalité de séjour.
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
        question: <>Quels types de voyages proposez-vous en Ouzbékistan&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour
              l&apos;Ouzbékistan :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Circuit Route de la Soie</strong> : Tachkent, Samarcande,
                Boukhara et Khiva, individuel ou en groupe.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit accompagné</strong> : guide francophone du premier
                au dernier jour.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Asie centrale</strong> : extension vers le
                Tadjikistan, le Kirghizistan ou le Turkménistan.
              </li>
              <li>
                <Icon name="check" />
                <strong>Aventure nature</strong> : nuit en yourte dans le désert et
                immersion dans la vallée de Ferghana.
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
                Les <strong>étapes et la durée</strong> : Tachkent, Samarcande,
                Boukhara, Khiva, Kyzylkoum, Ferghana…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                maison d&apos;hôtes traditionnelle, camp de yourtes.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : cours de cuisine,
                rencontre d&apos;artisans, balade à chameau, train à grande vitesse.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Ouzbékistan&nbsp;?</>,
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
                votre séjour.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment se déplace-t-on en Ouzbékistan&nbsp;?</>,
        answer: (
          <>
            <p>Les déplacements sont confortables et bien organisés :</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Train à grande vitesse Afrosiyob</strong> entre Tachkent,
                Samarcande et Boukhara.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voiture privée avec chauffeur</strong> pour les étapes plus
                isolées comme Khiva ou le désert.
              </li>
              <li>
                <Icon name="check" />
                <strong>Vols intérieurs</strong> possibles pour gagner du temps sur
                les longues distances.
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
        question: "Quelle est la meilleure période pour visiter l'Ouzbékistan ?",
        answer:
          "Le printemps (avril-mai) et l'automne (septembre-octobre) sont les périodes idéales : températures douces et lumière agréable pour les visites culturelles. L'été est très chaud et sec, l'hiver froid mais photogénique sous la neige.",
      },
      {
        question: "Faut-il un visa pour se rendre en Ouzbékistan ?",
        answer:
          "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique de courte durée. Un passeport valide au moins 3 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Ouzbékistan ?",
        answer:
          "CTA Voyages propose des circuits Route de la Soie, des circuits accompagnés francophones, des combinés Asie centrale, des aventures nature avec nuit en yourte et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Ouzbékistan ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget : étapes, hébergements et expériences sur mesure.",
      },
      {
        question: "Combien coûte un voyage en Ouzbékistan ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Ouzbékistan ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage, avec des documents en français.",
      },
      {
        question: "Comment se déplace-t-on en Ouzbékistan ?",
        answer:
          "Grâce au train à grande vitesse Afrosiyob entre les grandes villes, à une voiture privée avec chauffeur pour les étapes isolées et à des vols intérieurs pour les longues distances.",
      },
      {
        question: "Comment demander un devis pour un voyage en Ouzbékistan ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. En Ouzbékistan comme ailleurs,
        nous privilégions des prestataires locaux responsables, des maisons
        d&apos;hôtes familiales et des rencontres avec les artisans, pour un
        tourisme respectueux des cultures, des savoir-faire et des écosystèmes
        fragiles de l&apos;Asie centrale.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Ouzbékistan commence ici",
    body: "Parlez-nous de votre projet. Circuit Route de la Soie, voyage accompagné, aventure nature ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default ouzbekistan;
