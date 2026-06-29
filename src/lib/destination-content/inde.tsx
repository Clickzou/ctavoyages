import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const inde: DestinationContent = {
  slug: "inde",
  meta: {
    title:
      "Voyage en Inde : circuit Rajasthan, Taj Mahal et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage en Inde avec CTA Voyages. Triangle d'or Delhi-Agra-Jaipur, palais du Rajasthan, Taj Mahal, lacs d'Udaipur et le Gange à Varanasi. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Le Taj Mahal au lever du soleil reflété dans ses bassins — Voyage en Inde avec CTA Voyages",
    label: "Destination Inde",
    h1: "Voyage en Inde : palais du Rajasthan et merveilles éternelles",
    description:
      "Circuit culturel, triangle d'or, escapade dans le Rajasthan ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~9h de vol",
    },
    {
      kind: "fact",
      icon: "schedule",
      label: "Décalage horaire",
      value: "+4h30",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Hindi & anglais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Roupie (INR)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Octobre à mars",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "L'Inde, un voyage au cœur des sens",
    body: (
      <>
        Terre de mille couleurs et de spiritualité millénaire, l&apos;Inde
        bouleverse et émerveille à chaque instant. De l&apos;effervescence de{" "}
        <strong>Delhi</strong> à la perfection marbrée du{" "}
        <strong>Taj Mahal</strong>, des palais flottants d&apos;
        <strong>Udaipur</strong> aux ruelles ocre de{" "}
        <strong>Jaipur la ville rose</strong>, ce pays-continent déroule un
        kaléidoscope de forteresses, de temples et de marchés débordants de vie.
        Le <strong>Rajasthan</strong>, terre des maharadjas, fait défiler ses
        cités fortifiées, ses dunes dorées et ses havelis sculptés, tandis que
        sur les ghats de <strong>Varanasi</strong>, le Gange déploie ses
        cérémonies sacrées dans la lumière de l&apos;aube. Saveurs épicées,
        soieries chatoyantes, hospitalité légendaire&nbsp;: l&apos;Inde se vit
        aussi bien en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>escapade dans le Rajasthan</strong>, en{" "}
        <strong>voyage spirituel</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager en Inde ?",
    cards: [
      {
        icon: "account_balance",
        title: "Un patrimoine inouï",
        text: "Taj Mahal, forts du Rajasthan, palais des maharadjas : l'Inde concentre certains des monuments les plus spectaculaires et émouvants de la planète.",
        img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&auto=format",
        alt: "Le Taj Mahal et son dôme de marbre blanc à Agra",
      },
      {
        icon: "palette",
        title: "Une explosion de couleurs",
        text: "Saris flamboyants, marchés aux épices, fêtes de Holi et façades pastel : l'Inde est un festival visuel permanent, du désert du Thar aux ruelles bleues de Jodhpur.",
        img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&h=600&fit=crop&auto=format",
        alt: "Étals d'épices et de pigments colorés sur un marché indien",
      },
      {
        icon: "self_improvement",
        title: "Une spiritualité vivante",
        text: "Temples hindous, cérémonies du Gange à Varanasi, méditation et yoga : l'Inde est le berceau d'une spiritualité profonde et d'une sérénité contagieuse.",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop&auto=format",
        alt: "Cérémonie religieuse sur les ghats du Gange à Varanasi",
      },
      {
        icon: "restaurant",
        title: "Une gastronomie d'exception",
        text: "Currys parfumés, thalis généreux, street food et pains naan tout juste sortis du tandoor : la cuisine indienne est un voyage sensoriel à elle seule.",
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&auto=format",
        alt: "Assortiment de plats indiens épicés et colorés",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire en Inde",
    steps: [
      {
        id: "delhi",
        label: "JOURS 1 À 3",
        title: "Delhi : entre traditions et modernité",
        text: "Immersion dans la capitale aux mille visages : la Vieille Delhi et la grande mosquée Jama Masjid, le tombeau de Humayun, la Porte de l'Inde et les ruelles animées de Chandni Chowk.",
        img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&auto=format",
        alt: "La Porte de l'Inde à New Delhi",
        align: "left",
      },
      {
        id: "agra",
        label: "JOURS 4 À 5",
        title: "Agra & le Taj Mahal",
        text: "Rencontre avec le joyau de l'Inde : le Taj Mahal au lever du soleil, ode éternelle à l'amour, puis le majestueux Fort Rouge d'Agra, classé à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&auto=format",
        alt: "Le Taj Mahal au lever du soleil à Agra",
        align: "right",
      },
      {
        id: "jaipur",
        label: "JOURS 6 À 8",
        title: "Jaipur : la ville rose",
        text: "Capitale du Rajasthan baignée de teintes ocre : le Palais des Vents, le fort d'Amber perché sur sa colline, le City Palace et l'observatoire astronomique Jantar Mantar.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop&auto=format",
        alt: "Le Palais des Vents (Hawa Mahal) à Jaipur",
        align: "left",
      },
      {
        id: "jodhpur",
        label: "JOURS 9 À 10",
        title: "Jodhpur : la ville bleue",
        text: "Au pied de l'imposant fort de Mehrangarh, la vieille ville déploie ses maisons azur à perte de vue. Flânerie dans les bazars colorés et panorama saisissant depuis les remparts.",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop&auto=format",
        alt: "Les maisons bleues de la vieille ville de Jodhpur",
        align: "right",
      },
      {
        id: "udaipur",
        label: "JOURS 11 À 13",
        title: "Udaipur & ses lacs",
        text: "La Venise de l'Orient et ses palais flottants sur le lac Pichola. Promenade en barque au coucher du soleil, City Palace somptueux et jardins romantiques font d'Udaipur la plus poétique des cités.",
        img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&h=600&fit=crop&auto=format",
        alt: "Le lac Pichola et ses palais à Udaipur",
        align: "left",
      },
      {
        id: "varanasi",
        label: "JOURS 14 À 15",
        title: "Varanasi : le Gange sacré",
        text: "Final spirituel sur les rives du fleuve sacré : cérémonie de l'Aarti à la tombée du jour, balade en barque à l'aube le long des ghats et immersion dans la ville la plus sacrée de l'hindouisme.",
        img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&auto=format",
        alt: "Les ghats de Varanasi au bord du Gange",
        align: "right",
        objectPosition: "center 40%",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme Pushkar et sa foire aux chameaux, les temples
        de Khajuraho, le désert du Thar à Jaisalmer ou les plages de Goa peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir en Inde",
    left: [
      {
        question: <>Quelle est la meilleure période pour visiter l&apos;Inde&nbsp;?</>,
        answer: (
          <>
            <p>
              Le nord de l&apos;Inde et le Rajasthan se visitent idéalement
              pendant la saison sèche&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Saison fraîche (octobre à mars)</strong>&nbsp;: la
                période idéale, agréable et ensoleillée, parfaite pour le
                triangle d&apos;or et le Rajasthan.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saison chaude (avril à juin)</strong>&nbsp;:
                températures élevées dans les plaines, plus propice à
                l&apos;Himalaya et aux régions d&apos;altitude.
              </li>
              <li>
                <Icon name="check" />
                <strong>Mousson (juillet à septembre)</strong>&nbsp;: paysages
                verdoyants et tarifs plus doux, avec des averses parfois
                soutenues.
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
        question: <>Faut-il un visa pour se rendre en Inde&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, un visa électronique (e-Visa) est
              obligatoire pour les ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Il se demande <strong>en ligne avant le départ</strong>, sous
                quelques jours.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la
                date d&apos;entrée est exigé.
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
        question: <>Quels types de voyages proposez-vous en Inde&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour
              l&apos;Inde&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Circuit triangle d&apos;or</strong>&nbsp;:
                Delhi, Agra et Jaipur, l&apos;essentiel en quelques jours.
              </li>
              <li>
                <Icon name="check" />
                <strong>Circuit Rajasthan</strong>&nbsp;: les cités des
                maharadjas, des forts aux lacs d&apos;Udaipur.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong>&nbsp;: programme construit pas
                à pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage spirituel</strong>&nbsp;: Varanasi, le Gange, yoga
                et temples sacrés.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong>&nbsp;: palais-hôtels et
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
                Les <strong>étapes et la durée</strong>&nbsp;: Delhi, Agra,
                Jaipur, Jodhpur, Udaipur, Varanasi…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong>&nbsp;: hôtel,
                palais-hôtel de maharadja, haveli de charme.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong>&nbsp;: safari dans
                le Thar, cours de cuisine, cérémonie sur le Gange.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage en Inde&nbsp;?</>,
        answer: (
          <>
            <p>Le budget dépend de plusieurs facteurs&nbsp;:</p>
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
              <strong>Pas du tout.</strong> L&apos;anglais est très répandu et
              CTA Voyages prévoit tout&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Guides francophones</strong> pour les principales
                visites.
              </li>
              <li>
                <Icon name="check" />
                <strong>Documents de voyage en français</strong>&nbsp;: carnets,
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
            <p>Nous sélectionnons les hébergements selon vos préférences&nbsp;:</p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes
                villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Palais-hôtels de maharadjas</strong> au Rajasthan, pour
                un séjour d&apos;exception.
              </li>
              <li>
                <Icon name="check" />
                <strong>Havelis de charme</strong> aux décors sculptés et patios
                fleuris.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps de luxe</strong> sous tente dans le désert du Thar.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: <>Comment demander un devis&nbsp;?</>,
        answer: (
          <>
            <p>C&apos;est simple, rapide et gratuit&nbsp;:</p>
            <ul>
              <li>
                <Icon name="description" />
                Via notre <strong>formulaire en ligne</strong>.
              </li>
              <li>
                <Icon name="call" />
                Par téléphone&nbsp;: <strong>+33 (0)5 34 391 391</strong>
              </li>
              <li>
                <Icon name="mail" />
                Par email&nbsp;: <strong>voyages@cta-events.com</strong>
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
        question: "Quelle est la meilleure période pour visiter l'Inde ?",
        answer:
          "La saison fraîche, d'octobre à mars, est la période idéale pour le nord de l'Inde et le Rajasthan : agréable et ensoleillée, parfaite pour le triangle d'or. La mousson (juillet-septembre) offre des paysages verdoyants et des tarifs plus doux.",
      },
      {
        question: "Faut-il un visa pour se rendre en Inde ?",
        answer:
          "Oui, un visa électronique (e-Visa) est obligatoire pour les ressortissants français. Il se demande en ligne avant le départ et un passeport valide au moins 6 mois est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous en Inde ?",
        answer:
          "CTA Voyages propose des circuits triangle d'or, des circuits Rajasthan, des voyages spirituels autour du Gange, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire en Inde ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage en Inde ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème en Inde ?",
        answer:
          "Non. L'anglais est très répandu et nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous en Inde ?",
        answer:
          "Hôtels 4 et 5 étoiles, palais-hôtels de maharadjas au Rajasthan, havelis de charme et camps de luxe dans le désert du Thar.",
      },
      {
        question: "Comment demander un devis pour un voyage en Inde ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté&nbsp;: voyager mieux, pas moins. En Inde comme ailleurs,
        nous privilégions des prestataires locaux responsables, l&apos;artisanat
        et les hébergements engagés, pour un tourisme respectueux des
        communautés, des traditions et des écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage en Inde commence ici",
    body: "Parlez-nous de votre projet. Triangle d'or, circuit Rajasthan, voyage spirituel ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default inde;
