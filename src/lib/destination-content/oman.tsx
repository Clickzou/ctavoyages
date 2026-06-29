import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const oman: DestinationContent = {
  slug: "oman",
  meta: {
    title:
      "Voyage à Oman : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Oman avec CTA Voyages. Grande Mosquée de Mascate, fort de Nizwa, désert de Wahiba, wadis, Jebel Akhdar et fjords de Musandam, en circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Dunes dorées du désert de Wahiba au coucher du soleil — Voyage à Oman avec CTA Voyages",
    label: "Destination Oman",
    h1: "Voyage à Oman : déserts dorés et forteresses millénaires",
    description:
      "Circuit culturel, escapade dans le désert, randonnée en montagne ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~7h (avec escale)",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+3h",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Arabe",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Rial (OMR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Octobre à avril",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Oman, l'Arabie authentique et préservée",
    body: (
      <>
        Écrin de la péninsule arabique, Oman déploie ses déserts ocre, ses oasis
        de palmiers et ses forteresses millénaires dans une atmosphère d&apos;une
        sérénité rare. Loin des excès de ses voisins, le sultanat a su préserver
        son âme : ruelles blanchies de <strong>Mascate</strong>, marchés
        traditionnels embaumés d&apos;encens, villages perchés du{" "}
        <strong>Jebel Akhdar</strong> et bivouacs sous les étoiles du{" "}
        <strong>désert de Wahiba</strong>. Se baigner dans les eaux émeraude
        d&apos;un wadi caché, dormir au cœur des dunes, arpenter le{" "}
        <strong>souk de Nizwa</strong> ou naviguer entre les{" "}
        <strong>fjords de Musandam</strong> : Oman se vit aussi bien en{" "}
        <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>aventure dans le désert</strong>, en{" "}
        <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Oman ?",
    cards: [
      {
        icon: "mosque",
        title: "Un patrimoine d'exception",
        text: "Grande Mosquée de Mascate, forts de Nizwa et de Bahla, souks séculaires : Oman est une plongée vibrante au cœur de l'art et de l'histoire arabes.",
        img: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&h=600&fit=crop&auto=format",
        alt: "Grande Mosquée du Sultan Qaboos à Mascate",
      },
      {
        icon: "landscape",
        title: "Des déserts grandioses",
        text: "Dunes infinies du Wahiba, bivouacs sous un ciel d'étoiles et balades à dos de dromadaire : le désert omanais offre des paysages à couper le souffle.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop&auto=format",
        alt: "Dunes du désert de Wahiba Sands au lever du soleil",
      },
      {
        icon: "water_drop",
        title: "Des wadis secrets",
        text: "Piscines naturelles aux eaux turquoise nichées dans les canyons, palmeraies luxuriantes : les wadis omanais sont des oasis de fraîcheur inattendues.",
        img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&auto=format",
        alt: "Eaux turquoise et canyon du Wadi Bani Khalid",
      },
      {
        icon: "sailing",
        title: "Les fjords de Musandam",
        text: "Surnommée la « Norvège d'Arabie », la péninsule de Musandam déroule ses fjords spectaculaires où nagent dauphins et où s'égrènent villages de pêcheurs.",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop&auto=format",
        alt: "Fjords escarpés de la péninsule de Musandam",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Oman",
    steps: [
      {
        id: "mascate",
        label: "JOURS 1 À 3",
        title: "Mascate : la capitale blanche",
        text: "Immersion dans la sérénité de Mascate : la majestueuse Grande Mosquée du Sultan Qaboos, le souk de Mutrah embaumé d'encens, la corniche et le palais Al Alam aux couleurs vives.",
        img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&h=600&fit=crop&auto=format",
        alt: "Mascate",
        align: "left",
      },
      {
        id: "nizwa",
        label: "JOUR 4",
        title: "Nizwa & son fort",
        text: "Route vers l'ancienne capitale Nizwa : son imposant fort circulaire du XVIIe siècle, son souk traditionnel réputé pour l'argenterie et l'artisanat, et son marché aux bestiaux animé.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Nizwa",
        align: "right",
      },
      {
        id: "wahiba",
        label: "JOURS 5 À 6",
        title: "Désert de Wahiba : bivouac sous les étoiles",
        text: "Cap sur les dunes dorées du Wahiba en 4x4. Balade à dos de dromadaire, coucher de soleil sur les crêtes de sable et nuit magique en bivouac, sous une voûte d'étoiles inoubliable.",
        img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&h=600&fit=crop&auto=format",
        alt: "Désert de Wahiba",
        align: "left",
      },
      {
        id: "wadis",
        label: "JOUR 7",
        title: "Les wadis : oasis de fraîcheur",
        text: "Découverte du Wadi Bani Khalid et de ses piscines naturelles aux eaux émeraude, nichées entre les palmiers et les parois rocheuses. Baignade rafraîchissante au cœur du canyon.",
        img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop&auto=format",
        alt: "Wadi Bani Khalid",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "jebel-akhdar",
        label: "JOURS 8 À 9",
        title: "Jebel Akhdar : la montagne verte",
        text: "Ascension vers le Jebel Akhdar, la « montagne verte », et ses villages perchés en terrasses. Roseraies, vergers d'abricotiers et panoramas vertigineux sur le grand canyon d'Oman.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop&auto=format",
        alt: "Jebel Akhdar",
        align: "left",
      },
      {
        id: "musandam",
        label: "JOURS 10 À 12",
        title: "Fjords de Musandam : final maritime",
        text: "Envol vers le Nord et la péninsule de Musandam, la « Norvège d'Arabie ». Croisière en boutre traditionnel entre les fjords spectaculaires, rencontre des dauphins et baignade dans des criques isolées.",
        img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600&fit=crop&auto=format",
        alt: "Musandam",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme la côte du Dhofar et Salalah, les tortues de
        Ras al Jinz ou le fort de Bahla peuvent facilement s&apos;intégrer à
        votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Oman",
    left: [
      {
        question: <>Quelle est la meilleure période pour visiter Oman&nbsp;?</>,
        answer: (
          <>
            <p>
              Oman se visite principalement durant la saison fraîche, mais
              certaines régions ont leur propre calendrier :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison idéale (octobre à avril)</strong> : températures
                agréables, parfaites pour le désert, les villes et la randonnée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (mai à septembre)</strong> : très chaud à
                l&apos;intérieur, à réserver aux amateurs de plages et de
                plongée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Khareef à Salalah (juin à septembre)</strong> : la
                mousson transforme le Dhofar en paysage verdoyant et brumeux.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la période et la région les plus
              adaptées à votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre à Oman&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, mais les formalités sont simples pour les
              ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>visa touristique</strong> s&apos;obtient facilement en
                ligne (e-visa) avant le départ.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date de retour est exigé.
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
        question: <>Quels types de voyages proposez-vous à Oman&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Oman :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : balnéaire sur la côte ou citadin à
                Mascate.
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
                <strong>Aventure 4x4 &amp; désert</strong> : déserts, wadis et
                bivouacs sous les étoiles.
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
                Les <strong>étapes et la durée</strong> : Mascate, Nizwa,
                Wahiba, Jebel Akhdar, Musandam…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel, resort de
                luxe, camp dans le désert.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : randonnée,
                croisière en boutre, bivouac, baignade dans les wadis.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Oman&nbsp;?</>,
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur de Mascate et des
                grandes villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts de luxe</strong> en bord de mer ou perchés sur
                le Jebel Akhdar.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps dans le désert</strong> pour une nuit magique au
                cœur des dunes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et maisons d&apos;hôtes de
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
        question: "Quelle est la meilleure période pour visiter Oman ?",
        answer:
          "La saison fraîche, d'octobre à avril, est la période idéale : températures agréables pour le désert, les villes et la randonnée. Pour Salalah, la mousson khareef (juin à septembre) transforme le Dhofar en paysage verdoyant.",
      },
      {
        question: "Faut-il un visa pour se rendre à Oman ?",
        answer:
          "Oui, mais un visa touristique s'obtient facilement en ligne (e-visa) avant le départ. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous à Oman ?",
        answer:
          "CTA Voyages propose des séjours, des circuits culturels, des aventures 4x4 et désert, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Oman ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Oman ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème à Oman ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous à Oman ?",
        answer:
          "Hôtels 4 et 5 étoiles à Mascate, resorts de luxe en bord de mer ou sur le Jebel Akhdar, camps dans le désert et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage à Oman ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Oman comme ailleurs, nous
        privilégions des prestataires locaux responsables, des camps respectueux
        du désert et un tourisme attentif aux cultures, aux traditions et aux
        écosystèmes fragiles du sultanat.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Oman commence ici",
    body: "Parlez-nous de votre projet. Séjour, circuit, aventure dans le désert ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default oman;
