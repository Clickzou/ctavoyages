import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const kenya: DestinationContent = {
  slug: "kenya",
  meta: {
    title:
      "Voyage au Kenya : safari, circuit et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage au Kenya avec CTA Voyages. Safari dans le Masai Mara, flamants roses du lac Nakuru, Kilimandjaro depuis Amboseli, plages de Diani. Circuit ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Éléphants traversant la savane au lever du soleil — Voyage au Kenya avec CTA Voyages",
    label: "Destination Kenya",
    h1: "Voyage au Kenya : safaris mythiques et terre des Big Five",
    description:
      "Safari dans le Masai Mara, savanes infinies, lacs aux flamants roses et plages de l'océan Indien. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
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
      value: "~8h de vol",
    },
    {
      kind: "fact",
      icon: "translate",
      label: "Langue",
      value: "Swahili & anglais",
    },
    {
      kind: "fact",
      icon: "payments",
      label: "Monnaie",
      value: "Shilling (KES)",
    },
    {
      kind: "fact",
      icon: "wb_sunny",
      label: "Meilleure saison",
      value: "Juin-oct & déc-fév",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Le Kenya, berceau du safari africain",
    body: (
      <>
        Terre mythique de l&apos;Afrique de l&apos;Est, le Kenya déploie ses savanes
        dorées à perte de vue, ses lacs constellés de flamants roses et ses sommets
        coiffés de neige sous l&apos;équateur. De la légendaire réserve du{" "}
        <strong>Masai Mara</strong>, théâtre de la grande migration, aux silhouettes
        d&apos;éléphants se découpant devant le <strong>Kilimandjaro</strong> à
        Amboseli, des paysages lunaires de <strong>Samburu</strong> aux plages de
        sable blanc bordées de cocotiers de la <strong>côte de Mombasa</strong>,
        chaque étape révèle une facette de ce pays où la faune sauvage règne en
        majesté. Observer un lion à l&apos;aube, partager un moment avec les guerriers
        massaïs, contempler une nuée de flamants au lac Nakuru ou se prélasser sur la
        plage de Diani : le Kenya se vit aussi bien en{" "}
        <strong>safari d&apos;exception</strong> qu&apos;en{" "}
        <strong>combiné savane &amp; plage</strong>, en{" "}
        <strong>escapade nature</strong> ou en{" "}
        <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA Voyages
        conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre rythme, selon
        vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager au Kenya ?",
    cards: [
      {
        icon: "pets",
        title: "Les Big Five en liberté",
        text: "Lion, léopard, éléphant, rhinocéros et buffle : le Kenya est l'un des meilleurs endroits au monde pour observer la grande faune africaine dans son habitat naturel.",
        img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&h=400&fit=crop&auto=format",
        alt: "Lion dans la savane du Masai Mara au Kenya",
      },
      {
        icon: "filter_drama",
        title: "La grande migration",
        text: "Chaque année, près de deux millions de gnous et de zèbres traversent le Masai Mara dans un spectacle naturel parmi les plus saisissants de la planète.",
        img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=400&fit=crop&auto=format",
        alt: "Troupeau de gnous et zèbres lors de la grande migration",
      },
      {
        icon: "groups",
        title: "La culture massaï",
        text: "Rencontrer les communautés massaïs et samburu, partager leurs traditions ancestrales et leur lien unique à la terre : une immersion humaine inoubliable.",
        img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop&auto=format",
        alt: "Guerriers massaïs en tenue traditionnelle au Kenya",
      },
      {
        icon: "beach_access",
        title: "L'océan Indien",
        text: "Sable blanc, lagons turquoise et récifs coralliens : la côte de Diani et de Mombasa offre un final balnéaire de rêve après l'aventure du safari.",
        img: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=600&h=400&fit=crop&auto=format",
        alt: "Plage de sable blanc et eaux turquoise de Diani sur la côte kenyane",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire au Kenya",
    steps: [
      {
        id: "nairobi",
        label: "JOURS 1 À 2",
        title: "Nairobi : porte d'entrée du safari",
        text: "Arrivée dans la capitale kenyane et premières découvertes : l'orphelinat d'éléphants de la fondation Sheldrick, le centre des girafes et le musée Karen Blixen, avant de prendre la route vers la savane.",
        img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&h=600&fit=crop&auto=format",
        alt: "Nairobi",
        align: "left",
      },
      {
        id: "masai-mara",
        label: "JOURS 3 À 5",
        title: "Masai Mara : le safari mythique",
        text: "Au cœur de la réserve la plus célèbre d'Afrique, partez à la rencontre des Big Five lors de game drives matin et soir. Selon la saison, assistez au spectacle de la grande migration et passez une soirée auprès d'un village massaï.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&h=600&fit=crop&auto=format",
        alt: "Masai Mara",
        align: "right",
      },
      {
        id: "lac-nakuru",
        label: "JOUR 6",
        title: "Lac Nakuru : la terre des flamants",
        text: "Cap sur la vallée du Rift et son joyau, le lac Nakuru, dont les rives s'embrasent de rose au passage de milliers de flamants. Le parc abrite aussi rhinocéros blancs et noirs ainsi que de rares girafes de Rothschild.",
        img: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&h=600&fit=crop&auto=format",
        alt: "Lac Nakuru",
        align: "left",
      },
      {
        id: "amboseli",
        label: "JOURS 7 À 8",
        title: "Amboseli : face au Kilimandjaro",
        text: "Direction le parc d'Amboseli, célèbre pour ses grands troupeaux d'éléphants évoluant devant la silhouette majestueuse du Kilimandjaro. Les marais et la lumière du couchant offrent des panoramas d'une beauté saisissante.",
        img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&h=600&fit=crop&auto=format",
        alt: "Amboseli",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "samburu",
        label: "JOURS 9 À 10",
        title: "Samburu : le Kenya sauvage du Nord",
        text: "Hors des sentiers battus, la réserve de Samburu dévoile des paysages semi-désertiques et des espèces uniques : girafe réticulée, zèbre de Grévy, oryx beisa et gérénuk. Une rencontre avec le peuple samburu complète l'expérience.",
        img: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=900&h=600&fit=crop&auto=format",
        alt: "Samburu",
        align: "left",
      },
      {
        id: "diani-mombasa",
        label: "JOURS 11 À 14",
        title: "Mombasa & Diani : final balnéaire",
        text: "Envol vers la côte de l'océan Indien pour clôturer le voyage en beauté : plages de sable blanc de Diani, eaux turquoise, sorties snorkeling sur les récifs et flânerie dans la vieille ville swahilie de Mombasa.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&h=600&fit=crop&auto=format",
        alt: "Diani",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme le parc de Tsavo, le lac Naivasha, la réserve
        d&apos;Ol Pejeta ou l&apos;archipel de Lamu peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir au Kenya",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter le Kenya&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Le Kenya se visite toute l&apos;année, mais deux saisons sèches se
              distinguent pour le safari&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Juin à octobre</strong> : la meilleure période, ciel
                dégagé et faune concentrée près des points d&apos;eau. C&apos;est
                aussi la saison de la grande migration dans le Masai Mara.
              </li>
              <li>
                <Icon name="check" />
                <strong>Décembre à février</strong> : temps chaud et ensoleillé,
                idéal pour combiner safari et plages de la côte.
              </li>
              <li>
                <Icon name="check" />
                <strong>Saisons des pluies (mars-mai et nov.)</strong> : paysages
                verdoyants, moins de visiteurs et tarifs plus doux.
              </li>
            </ul>
            <p>
              Votre conseiller vous guidera vers la période la mieux adaptée à
              votre projet.
            </p>
          </>
        ),
      },
      {
        question: <>Faut-il un visa pour se rendre au Kenya&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Oui</strong>, une autorisation électronique de voyage est
              désormais requise pour entrer au Kenya.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                L&apos;<strong>eTA (Electronic Travel Authorization)</strong> se
                demande en ligne avant le départ.
              </li>
              <li>
                <Icon name="check" />
                Un <strong>passeport valide au moins 6 mois</strong> après la date
                de retour est exigé.
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
        question: <>Quels types de voyages proposez-vous au Kenya&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour le Kenya&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Safari</strong> : circuit en 4x4 à travers les réserves et
                parcs nationaux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné savane &amp; plage</strong> : le safari, puis la
                côte de l&apos;océan Indien.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à pas
                selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage de noces</strong> : lodges de charme et expériences
                privatisées.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage en famille</strong> : safaris adaptés aux enfants et
                hébergements confortables.
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
                Les <strong>parcs et la durée</strong> : Masai Mara, Amboseli,
                Samburu, lac Nakuru, Tsavo…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : lodge de safari, camp
                de toile de luxe, resort en bord de mer.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : montgolfière au-
                dessus de la Mara, rencontres massaïs, snorkeling.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage au Kenya&nbsp;?</>,
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
                Le nombre de parcs et de game drives
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
        question: <>Faut-il un traitement antipaludéen&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Une protection est recommandée.</strong> Le Kenya est une
              zone de présence du paludisme&nbsp;:
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Un <strong>traitement antipaludéen</strong> est conseillé, à
                déterminer avec votre médecin.
              </li>
              <li>
                <Icon name="check" />
                Pensez aux <strong>répulsifs</strong> et aux vêtements couvrants au
                lever et au coucher du soleil.
              </li>
              <li>
                <Icon name="check" />
                Certains vaccins peuvent être recommandés selon votre itinéraire.
              </li>
            </ul>
            <p>
              Nous vous transmettons les recommandations sanitaires à jour avant le
              départ.
            </p>
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
                <strong>Lodges de safari</strong> au cœur des réserves et parcs
                nationaux.
              </li>
              <li>
                <Icon name="check" />
                <strong>Camps de toile de luxe</strong> pour une nuit au plus près
                de la faune.
              </li>
              <li>
                <Icon name="check" />
                <strong>Resorts pieds dans l&apos;eau</strong> sur les plages de
                Diani et de Mombasa.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses de charme</strong> et écolodges responsables.
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
        question: "Quelle est la meilleure période pour visiter le Kenya ?",
        answer:
          "Les deux saisons sèches sont idéales pour le safari : de juin à octobre, période de la grande migration dans le Masai Mara, et de décembre à février, parfaite pour combiner safari et plages.",
      },
      {
        question: "Faut-il un visa pour se rendre au Kenya ?",
        answer:
          "Oui, une autorisation électronique de voyage (eTA) est désormais requise et se demande en ligne avant le départ. Un passeport valide au moins 6 mois après la date de retour est exigé.",
      },
      {
        question: "Quels types de voyages proposez-vous au Kenya ?",
        answer:
          "CTA Voyages propose des safaris en 4x4, des combinés savane et plage, des voyages de noces, des voyages en famille et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire au Kenya ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre safari pas à pas selon les parcs choisis, le type d'hébergement, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage au Kenya ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le nombre de parcs et de game drives et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Faut-il un traitement antipaludéen pour le Kenya ?",
        answer:
          "Une protection antipaludéenne est recommandée, à déterminer avec votre médecin, car le Kenya est une zone de présence du paludisme. Nous transmettons les recommandations sanitaires à jour avant le départ.",
      },
      {
        question: "Quels hébergements proposez-vous au Kenya ?",
        answer:
          "Lodges de safari au cœur des réserves, camps de toile de luxe, resorts pieds dans l'eau sur la côte et écolodges responsables.",
      },
      {
        question: "Comment demander un devis pour un voyage au Kenya ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. Au Kenya comme ailleurs, nous
        privilégions des lodges et conservancies engagés dans la protection de la
        faune, des prestataires locaux responsables et un tourisme qui bénéficie
        directement aux communautés massaïs et samburu et préserve des écosystèmes
        fragiles.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage au Kenya commence ici",
    body: "Parlez-nous de votre projet. Safari, combiné savane et plage, voyage de noces ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default kenya;
