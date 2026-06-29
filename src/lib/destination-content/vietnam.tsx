import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const vietnam: DestinationContent = {
  slug: "vietnam",
  meta: {
    title:
      "Voyage au Vietnam : séjour, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Vietnam avec CTA Voyages. Hanoï et sa vieille ville, croisière dans la baie d'Halong, lanternes de Hoi An, cité impériale de Hué, delta du Mékong et Saïgon. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Jonques traditionnelles entre les pitons karstiques de la baie d'Halong — Voyage au Vietnam avec CTA Voyages",
    label: "Destination Vietnam",
    h1: "Voyage au Vietnam : baies émeraude et villes lanternes",
    description:
      "Circuit culturel du Nord au Sud, croisière dans la baie d'Halong, escapade au fil du Mékong ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~12h (avec escale)",
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
      value: "Vietnamien",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Dong (VND)",
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
    h2: "Le Vietnam, un long ruban de merveilles",
    body: (
      <>
        Étiré sur plus de 1 600 kilomètres entre montagnes et mer de Chine, le
        Vietnam déroule des paysages d&apos;une diversité saisissante : rizières
        en terrasses du Nord, baies parsemées de pitons karstiques, plages
        bordées de cocotiers et labyrinthe d&apos;eau du delta du Mékong. De
        l&apos;effervescence chaleureuse de <strong>Hanoï</strong> et sa vieille
        ville aux lanternes colorées de <strong>Hoi An</strong>, des tombeaux
        impériaux de <strong>Hué</strong> à l&apos;énergie trépidante de{" "}
        <strong>Hô-Chi-Minh-Ville</strong>, chaque étape révèle une nouvelle
        facette de ce pays attachant. Naviguer entre les jonques de la{" "}
        <strong>baie d&apos;Halong</strong>, savourer un pho fumant au coin
        d&apos;une rue, glisser en sampan sur les bras du{" "}
        <strong>Mékong</strong> ou se perdre dans les marchés flottants : le
        Vietnam se vit aussi bien en <strong>circuit culturel</strong> qu&apos;en{" "}
        <strong>croisière</strong>, en <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Vietnam ?",
    cards: [
      {
        icon: "sailing",
        title: "La baie d'Halong",
        text: "Croisière au cœur d'un décor irréel : des milliers de pitons calcaires émergent des eaux émeraude, à découvrir à bord d'une jonque traditionnelle.",
        img: "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=900&h=700&fit=crop&auto=format",
        alt: "Jonque naviguant entre les pitons karstiques de la baie d'Halong",
      },
      {
        icon: "lightbulb",
        title: "Les lanternes de Hoi An",
        text: "Classée à l'UNESCO, la vieille ville de Hoi An s'illumine chaque soir de milliers de lanternes de soie, le long de sa rivière et de ses maisons de marchands.",
        img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=900&h=700&fit=crop&auto=format",
        alt: "Lanternes de soie colorées illuminant la vieille ville de Hoi An la nuit",
      },
      {
        icon: "ramen_dining",
        title: "Une gastronomie de rue",
        text: "Pho, banh mi, nem, café glacé : la cuisine vietnamienne, fraîche et parfumée, se déguste sur de petits tabourets au cœur des marchés animés.",
        img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=900&h=700&fit=crop&auto=format",
        alt: "Bol de pho fumant, soupe traditionnelle vietnamienne",
      },
      {
        icon: "terrain",
        title: "Rizières et delta du Mékong",
        text: "Des terrasses émeraude de Sapa aux marchés flottants du Mékong, le Vietnam offre une nature généreuse et un art de vivre rythmé par l'eau.",
        img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&h=700&fit=crop&auto=format",
        alt: "Rizières en terrasses verdoyantes dans le nord du Vietnam",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Vietnam",
    steps: [
      {
        id: "hanoi",
        label: "JOURS 1 À 3",
        title: "Hanoï & la vieille ville",
        text: "Immersion dans la capitale millénaire : flânerie dans les 36 corporations de la vieille ville, lac Hoan Kiem, temple de la Littérature et spectacle de marionnettes sur l'eau, entre charme colonial et effervescence locale.",
        img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=900&h=700&fit=crop&auto=format",
        alt: "Rue animée de la vieille ville de Hanoï",
        align: "left",
      },
      {
        id: "halong",
        label: "JOURS 4 À 5",
        title: "Baie d'Halong : croisière",
        text: "Embarquement à bord d'une jonque traditionnelle pour une nuit au cœur de la baie d'Halong, classée à l'UNESCO. Navigation entre les pitons karstiques, grottes spectaculaires et baignade dans les eaux émeraude.",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=900&h=700&fit=crop&auto=format",
        alt: "Croisière en jonque dans la baie d'Halong",
        align: "right",
      },
      {
        id: "hoi-an",
        label: "JOURS 6 À 8",
        title: "Hoi An & ses lanternes",
        text: "Cap au centre vers Hoi An, joyau classé à l'UNESCO. Ses ruelles de maisons de marchands, son pont japonais, ses ateliers de tailleurs et ses milliers de lanternes qui s'illuminent à la tombée du jour le long de la rivière Thu Bon.",
        img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=900&h=700&fit=crop&auto=format",
        alt: "Pont japonais et lanternes de Hoi An",
        align: "left",
      },
      {
        id: "hue",
        label: "JOUR 9",
        title: "Hué & la cité impériale",
        text: "Ancienne capitale des empereurs Nguyen, Hué dévoile sa citadelle, sa cité pourpre interdite et ses tombeaux impériaux disséminés au bord de la rivière des Parfums. Une plongée dans le Vietnam impérial classé à l'UNESCO.",
        img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=900&h=700&fit=crop&auto=format",
        alt: "Porte de la cité impériale de Hué",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "mekong",
        label: "JOURS 10 À 11",
        title: "Le delta du Mékong",
        text: "Au sud, le Mékong déploie son labyrinthe de canaux, de rizières et de vergers. Balade en sampan, marchés flottants de Cai Rang, ateliers artisanaux et nuit chez l'habitant au plus près de la vie du delta.",
        img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&h=700&fit=crop&auto=format",
        alt: "Marché flottant sur le delta du Mékong",
        align: "left",
      },
      {
        id: "saigon",
        label: "JOURS 12 À 13",
        title: "Hô-Chi-Minh-Ville (Saïgon)",
        text: "Final dans la trépidante Saïgon : marché de Ben Thanh, cathédrale Notre-Dame, poste centrale et quartiers animés. Excursion possible vers les tunnels de Cu Chi avant l'envol retour.",
        img: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=900&h=700&fit=crop&auto=format",
        alt: "Vue nocturne de Hô-Chi-Minh-Ville",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong> Cet exemple est proposé pour vous
        inspirer. Votre conseiller CTA Voyages adaptera chaque étape selon vos
        envies, votre rythme et votre budget. D&apos;autres étapes comme les
        rizières en terrasses de <strong>Sapa</strong>, la baie de{" "}
        <strong>Ninh Binh</strong> (« Halong terrestre ») ou les plages de{" "}
        <strong>Nha Trang</strong> et <strong>Phu Quoc</strong> peuvent
        facilement s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Vietnam",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Vietnam&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Vietnam s&apos;étire sur 1 600 km : le climat varie donc
              fortement du Nord au Sud. La période la plus favorable pour
              parcourir l&apos;ensemble du pays s&apos;étend{" "}
              <strong>d&apos;octobre à avril</strong> :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Nord (Hanoï, Halong, Sapa)</strong> : octobre à avril,
                plus sec et agréable.
              </li>
              <li>
                <Icon name="check" />
                <strong>Centre (Hué, Hoi An)</strong> : février à août, à éviter
                en saison des pluies (octobre-novembre).
              </li>
              <li>
                <Icon name="check" />
                <strong>Sud (Saïgon, Mékong)</strong> : décembre à avril, saison
                sèche et ensoleillée.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera sur la meilleure période selon votre
              itinéraire.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Vietnam&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Cela dépend de la durée du séjour.</strong> Les
              ressortissants français bénéficient d&apos;une exemption pour les
              courts séjours, sous conditions.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Pour les séjours plus longs, un <strong>e-visa</strong> en ligne
                est généralement requis.
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
        question: <>Quels types de voyages proposez-vous au Vietnam&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le
              Vietnam :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Circuit du Nord au Sud</strong> : Hanoï, Halong, Hoi An,
                Hué, Mékong et Saïgon.
              </li>
              <li>
                <Icon name="check" />
                <strong>Croisière</strong> : nuit à bord d&apos;une jonque dans
                la baie d&apos;Halong.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné culture &amp; plage</strong> : les villes
                impériales puis les plages du Centre ou de Phu Quoc.
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
                Les <strong>étapes et la durée</strong> : Hanoï, Halong, Hoi An,
                Hué, Mékong, Sapa, Ninh Binh…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                jonque de croisière, nuit chez l&apos;habitant.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : cours de
                cuisine, balade en sampan, marchés flottants.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Vietnam&nbsp;?</>,
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur des grandes
                villes.
              </li>
              <li>
                <Icon name="check" />
                <strong>Jonques de croisière</strong> tout confort dans la baie
                d&apos;Halong.
              </li>
              <li>
                <Icon name="check" />
                <strong>Nuits chez l&apos;habitant</strong> au cœur du delta du
                Mékong.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et boutique-hôtels de
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
        question: "Quelle est la meilleure période pour visiter le Vietnam ?",
        answer:
          "La période d'octobre à avril est la plus favorable pour parcourir l'ensemble du pays. Le climat varie du Nord au Sud : le Nord est agréable d'octobre à avril, le Centre de février à août et le Sud de décembre à avril.",
      },
      {
        question: "Faut-il un visa pour se rendre au Vietnam ?",
        answer:
          "Cela dépend de la durée du séjour. Les ressortissants français bénéficient d'une exemption pour les courts séjours sous conditions ; un e-visa en ligne est requis pour les séjours plus longs. Un passeport valide au moins 6 mois après le retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Vietnam ?",
        answer:
          "CTA Voyages propose des circuits du Nord au Sud, des croisières dans la baie d'Halong, des combinés culture et plage, des voyages de noces et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Vietnam ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Vietnam ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "La barrière de la langue est-elle un problème au Vietnam ?",
        answer:
          "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
      {
        question: "Quels hébergements proposez-vous au Vietnam ?",
        answer:
          "Hôtels 4 et 5 étoiles, jonques de croisière dans la baie d'Halong, nuits chez l'habitant dans le delta du Mékong et adresses de charme.",
      },
      {
        question: "Comment demander un devis pour un voyage au Vietnam ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Vietnam comme ailleurs,
        nous privilégions des prestataires locaux responsables, des croisières
        respectueuses de la baie d&apos;Halong, des nuits chez l&apos;habitant
        et un tourisme attentif aux cultures et aux écosystèmes.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Vietnam commence ici",
    body: "Parlez-nous de votre projet. Circuit du Nord au Sud, croisière dans la baie d'Halong, escapade au fil du Mékong ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default vietnam;
