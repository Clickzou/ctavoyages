import { Icon } from "@/components/destination/FaqList";
import type { DestinationContent } from "./types";

const amsterdam: DestinationContent = {
  slug: "amsterdam",
  meta: {
    title:
      "Voyage à Amsterdam : séjour, week-end et voyage sur mesure | CTA Voyages",
    description:
      "Organisez votre voyage à Amsterdam avec CTA Voyages. Canaux classés à l'UNESCO, Rijksmuseum et musée Van Gogh, quartier du Jordaan, balades à vélo. Séjour, week-end ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1600&h=900&fit=crop&auto=format",
    imageAlt:
      "Canaux d'Amsterdam et maisons à pignons au coucher du soleil — Voyage à Amsterdam avec CTA Voyages",
    label: "Destination Amsterdam",
    h1: "Voyage à Amsterdam : canaux romantiques et chefs-d'œuvre",
    description:
      "Week-end culturel, escapade romantique, séjour en famille ou voyage entièrement sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
    primaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaLabel: "Des lieux uniques",
  },
  infos: [
    {
      kind: "transport",
      icon: "flight",
      label: "Vol depuis Paris",
      value: "~1h20 de vol",
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
      value: "Néerlandais",
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
      value: "Avril à septembre",
    },
  ],
  presentation: {
    eyebrow: "Présentation",
    h2: "Amsterdam, la Venise du Nord",
    body: (
      <>
        Sillonnée par ses canaux scintillants classés au patrimoine mondial de
        l&apos;UNESCO, Amsterdam séduit par son élégance discrète et son art de
        vivre décontracté. La capitale des Pays-Bas aligne ses maisons à pignons
        le long de l&apos;eau, ses ponts fleuris et ses vélos par milliers dans
        une atmosphère d&apos;une douceur singulière. Des chefs-d&apos;œuvre du{" "}
        <strong>Rijksmuseum</strong> et du <strong>musée Van Gogh</strong> aux
        cafés bruns chaleureux du <strong>Jordaan</strong>, de la bouleversante{" "}
        <strong>maison d&apos;Anne Frank</strong> aux pelouses verdoyantes du{" "}
        <strong>Vondelpark</strong>, chaque rue raconte une page d&apos;histoire
        et d&apos;art. Flâner le long des canaux, pédaler comme un véritable
        Amstellodamois, embarquer pour une croisière au fil de l&apos;eau ou
        s&apos;échapper vers les moulins de Zaanse Schans : Amsterdam se vit
        aussi bien en <strong>week-end culturel</strong> qu&apos;en{" "}
        <strong>escapade romantique</strong>, en <strong>séjour en famille</strong>{" "}
        ou en <strong>voyage entièrement sur mesure</strong>. Votre conseiller CTA
        Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble, à votre
        rythme, selon vos envies et votre budget.
      </>
    ),
  },
  why: {
    eyebrow: "Nos coups de cœur",
    h2: "Pourquoi voyager à Amsterdam ?",
    cards: [
      {
        icon: "directions_boat",
        title: "Des canaux d'exception",
        text: "Classée à l'UNESCO, la ceinture de canaux du XVIIe siècle se découvre à pied ou en bateau, entre maisons à pignons, ponts illuminés et péniches fleuries.",
        img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&h=600&fit=crop&auto=format",
        alt: "Canal d'Amsterdam bordé de maisons à pignons et de vélos",
      },
      {
        icon: "palette",
        title: "Des musées de légende",
        text: "Rijksmuseum, musée Van Gogh, maison d'Anne Frank : Amsterdam concentre une densité artistique et historique rare, des maîtres flamands à l'art moderne.",
        img: "https://images.unsplash.com/photo-1558551649-e44c8f992010?w=800&h=600&fit=crop&auto=format",
        alt: "Façade du Rijksmuseum d'Amsterdam au crépuscule",
      },
      {
        icon: "pedal_bike",
        title: "La ville du vélo",
        text: "Avec ses pistes cyclables omniprésentes, Amsterdam se savoure à deux roues : la façon la plus authentique et la plus libre d'explorer chaque quartier.",
        img: "https://images.unsplash.com/photo-1576924542622-772281b13aa8?w=800&h=600&fit=crop&auto=format",
        alt: "Vélos stationnés le long d'un canal à Amsterdam",
      },
      {
        icon: "local_florist",
        title: "Un art de vivre coloré",
        text: "Marché aux fleurs flottant, champs de tulipes au printemps, cafés bruns et terrasses au bord de l'eau : Amsterdam cultive une douceur de vivre unique.",
        img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop&auto=format",
        alt: "Champs de tulipes colorées aux environs d'Amsterdam",
      },
    ],
  },
  itinerary: {
    eyebrow: "Inspiration",
    h2: "Un exemple d'itinéraire à Amsterdam",
    steps: [
      {
        id: "croisiere-canaux",
        label: "JOUR 1",
        title: "Croisière sur les canaux",
        text: "Première immersion au fil de l'eau : embarquez pour une croisière sur la ceinture de canaux classée à l'UNESCO, entre maisons à pignons, ponts illuminés et péniches, pour saisir l'âme de la ville sous son plus bel angle.",
        img: "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?w=800&h=600&fit=crop&auto=format",
        alt: "Croisière sur un canal d'Amsterdam au coucher du soleil",
        align: "left",
      },
      {
        id: "musees",
        label: "JOUR 2",
        title: "Rijksmuseum & musée Van Gogh",
        text: "Journée d'art au cœur du Museumplein : les maîtres flamands et la Ronde de nuit de Rembrandt au Rijksmuseum, puis la plus grande collection au monde du peintre au musée Van Gogh.",
        img: "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?w=800&h=600&fit=crop&auto=format",
        alt: "Galerie d'honneur du Rijksmuseum d'Amsterdam",
        align: "right",
      },
      {
        id: "jordaan",
        label: "JOUR 3",
        title: "Le quartier du Jordaan",
        text: "Flânerie dans le plus charmant quartier d'Amsterdam : ruelles pavées, boutiques d'artisans, galeries, cafés bruns chaleureux et marché du Noordermarkt. L'Amsterdam authentique et bohème.",
        img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&h=600&fit=crop&auto=format",
        alt: "Ruelle pittoresque du quartier du Jordaan à Amsterdam",
        align: "left",
      },
      {
        id: "anne-frank",
        label: "JOUR 4",
        title: "La maison d'Anne Frank",
        text: "Visite émouvante de l'Annexe où la jeune fille rédigea son célèbre journal. Un lieu de mémoire bouleversant, prolongé par une promenade dans le quartier historique des canaux occidentaux.",
        img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=600&fit=crop&auto=format",
        alt: "Maison d'Anne Frank au bord du canal Prinsengracht à Amsterdam",
        align: "right",
        objectPosition: "center 40%",
      },
      {
        id: "velo-vondelpark",
        label: "JOUR 5",
        title: "Balade à vélo & Vondelpark",
        text: "Adoptez le mode de vie local : à vélo, parcourez les quartiers d'Amsterdam jusqu'au Vondelpark, le poumon vert de la ville, idéal pour une pause détente entre étangs, pelouses et terrasses ensoleillées.",
        img: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&h=600&fit=crop&auto=format",
        alt: "Cycliste sur un pont d'Amsterdam près du Vondelpark",
        align: "left",
      },
      {
        id: "zaanse-schans",
        label: "JOUR 6",
        title: "Excursion à Zaanse Schans",
        text: "Échappée hors de la ville vers Zaanse Schans et ses moulins à vent emblématiques. Maisons vertes traditionnelles, fabrique de sabots, fromagerie artisanale : un voyage dans la Hollande de carte postale.",
        img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop&auto=format",
        alt: "Moulins à vent traditionnels de Zaanse Schans aux Pays-Bas",
        align: "right",
      },
    ],
    disclaimer: (
      <>
        <strong>Itinéraire indicatif.</strong>{" "}
        Cet exemple est proposé pour vous inspirer. Votre conseiller CTA Voyages
        adaptera chaque étape selon vos envies, votre rythme et votre budget.
        D&apos;autres étapes comme les champs de tulipes du Keukenhof, le village
        de Volendam, La Haye ou une journée à Rotterdam peuvent facilement
        s&apos;intégrer à votre programme.
      </>
    ),
  },
  faq: {
    eyebrow: "Questions fréquentes",
    h2: "Tout savoir avant de partir à Amsterdam",
    left: [
      {
        question: (
          <>Quelle est la meilleure période pour visiter Amsterdam&nbsp;?</>
        ),
        answer: (
          <>
            <p>
              Amsterdam se visite toute l&apos;année, mais certaines saisons se
              distinguent :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Printemps (avril à juin)</strong> : la période idéale,
                avec la floraison des tulipes et le Keukenhof à proximité.
              </li>
              <li>
                <Icon name="check" />
                <strong>Été (juillet et août)</strong> : longues journées
                ensoleillées, terrasses et croisières, mais forte affluence.
              </li>
              <li>
                <Icon name="check" />
                <strong>Automne et hiver</strong> : ambiance feutrée, musées au
                calme et féerie des illuminations du Light Festival.
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
        question: <>Faut-il un visa pour se rendre à Amsterdam&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Non.</strong> Les Pays-Bas font partie de l&apos;espace
              Schengen : aucun visa n&apos;est nécessaire pour les
              ressortissants français.
            </p>
            <ul>
              <li>
                <Icon name="check" />
                Une <strong>carte d&apos;identité ou un passeport en cours de
                validité</strong> suffit pour entrer sur le territoire.
              </li>
              <li>
                <Icon name="check" />
                Le voyage en avion ne dure qu&apos;<strong>1h20 depuis
                Paris</strong>, sans décalage horaire.
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
        question: <>Quels types de voyages proposez-vous à Amsterdam&nbsp;?</>,
        answer: (
          <>
            <p>
              CTA Voyages propose l&apos;ensemble de nos formules pour Amsterdam :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>Week-end</strong> : escapade de 2 à 4 jours, l&apos;idéal
                pour découvrir la ville.
              </li>
              <li>
                <Icon name="check" />
                <strong>Séjour</strong> : citadin et culturel, à votre rythme.
              </li>
              <li>
                <Icon name="check" />
                <strong>Voyage sur mesure</strong> : programme construit pas à
                pas selon vos envies.
              </li>
              <li>
                <Icon name="check" />
                <strong>Escapade romantique</strong> : adresses de charme et
                croisière privatisée.
              </li>
              <li>
                <Icon name="check" />
                <strong>Combiné Pays-Bas</strong> : Amsterdam, La Haye,
                Rotterdam et les champs de tulipes.
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
                Les <strong>étapes et la durée</strong> : Amsterdam,
                Zaanse Schans, Keukenhof, Volendam, La Haye…
              </li>
              <li>
                <Icon name="check" />
                Le <strong>type d&apos;hébergement</strong> : hôtel de charme,
                boutique-hôtel ou péniche sur les canaux.
              </li>
              <li>
                <Icon name="check" />
                Le <strong>rythme et les expériences</strong> : croisière,
                visites guidées, balades à vélo, musées.
              </li>
            </ul>
          </>
        ),
      },
    ],
    right: [
      {
        question: <>Combien coûte un voyage à Amsterdam&nbsp;?</>,
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
        question: <>Comment se déplacer dans Amsterdam&nbsp;?</>,
        answer: (
          <>
            <p>
              <strong>Amsterdam se parcourt très facilement.</strong> Plusieurs
              options s&apos;offrent à vous :
            </p>
            <ul>
              <li>
                <Icon name="check" />
                <strong>À pied</strong> : le centre historique et ses canaux se
                découvrent idéalement en flânant.
              </li>
              <li>
                <Icon name="check" />
                <strong>À vélo</strong> : le moyen de transport roi, libre et
                authentique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Tramways et bateaux</strong> : un réseau dense et un
                aéroport relié au centre en 15 minutes de train.
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
                <strong>Hôtels 4 et 5 étoiles</strong> au cœur du centre
                historique.
              </li>
              <li>
                <Icon name="check" />
                <strong>Boutique-hôtels de charme</strong> dans les maisons de
                canal d&apos;époque.
              </li>
              <li>
                <Icon name="check" />
                <strong>Péniches aménagées</strong> pour une nuit insolite sur
                l&apos;eau.
              </li>
              <li>
                <Icon name="check" />
                <strong>Adresses design</strong> et hôtels familiaux bien
                situés.
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
        question: "Quelle est la meilleure période pour visiter Amsterdam ?",
        answer:
          "Le printemps (avril à juin) est la période idéale, avec la floraison des tulipes et le Keukenhof à proximité. L'été offre de longues journées ensoleillées tandis que l'automne et l'hiver séduisent par leur ambiance feutrée et les illuminations du Light Festival.",
      },
      {
        question: "Faut-il un visa pour se rendre à Amsterdam ?",
        answer:
          "Non. Les Pays-Bas font partie de l'espace Schengen : aucun visa n'est nécessaire pour les ressortissants français. Une carte d'identité ou un passeport en cours de validité suffit.",
      },
      {
        question: "Quels types de voyages proposez-vous à Amsterdam ?",
        answer:
          "CTA Voyages propose des week-ends, des séjours citadins, des escapades romantiques, des combinés Pays-Bas et des voyages entièrement sur mesure.",
      },
      {
        question: "Peut-on personnaliser entièrement l'itinéraire à Amsterdam ?",
        answer:
          "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
      {
        question: "Combien coûte un voyage à Amsterdam ?",
        answer:
          "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
      {
        question: "Comment se déplacer dans Amsterdam ?",
        answer:
          "Amsterdam se parcourt facilement à pied, à vélo, en tramway ou en bateau. L'aéroport de Schiphol est relié au centre-ville en 15 minutes de train.",
      },
      {
        question: "Quels hébergements proposez-vous à Amsterdam ?",
        answer:
          "Hôtels 4 et 5 étoiles dans le centre historique, boutique-hôtels de charme dans les maisons de canal, péniches aménagées et adresses design ou familiales.",
      },
      {
        question: "Comment demander un devis pour un voyage à Amsterdam ?",
        answer:
          "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    ],
  },
  rse: {
    body: (
      <>
        Notre volonté : voyager mieux, pas moins. À Amsterdam comme ailleurs,
        nous privilégions des prestataires locaux responsables, les mobilités
        douces — vélo, marche et croisières électriques — et un tourisme
        respectueux des habitants et du patrimoine de la ville.
      </>
    ),
  },
  ctaFinal: {
    h2: "Votre voyage à Amsterdam commence ici",
    body: "Parlez-nous de votre projet. Week-end, séjour culturel, escapade romantique ou voyage sur mesure : votre conseiller dédié construit avec vous le voyage qui vous ressemble, gratuitement et sans engagement.",
  },
};

export default amsterdam;
