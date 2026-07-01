import type { BlogArticle } from "./types";

/**
 * Article test — sert de modèle pour les suivants.
 * (Images Unsplash placeholders à remplacer par tes visuels.)
 */
const quandPartirMaldives: BlogArticle = {
  slug: "quand-partir-maldives",
  category: "Conseils",
  date: "Juin 2026",
  readingTime: "8 min",
  meta: {
    title: "Quand partir aux Maldives ? Saisons, spots & conseils | CTA Voyages",
    description:
      "Saison sèche, mousson, meilleurs atolls et spots secrets : le guide complet de CTA Voyages pour choisir le bon moment et réussir votre voyage aux Maldives.",
  },
  title: "Quand partir aux Maldives ? Le guide saison par saison",
  excerpt:
    "Saison sèche, mousson, meilleurs spots et atolls secrets : tout ce qu'il faut savoir pour choisir le meilleur moment et profiter d'un lagon parfait.",
  heroImg:
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&h=900&fit=crop&auto=format",
  heroAlt: "Villas sur pilotis au-dessus d'un lagon turquoise aux Maldives",
  intro: (
    <>
      Eaux turquoise, sable d&apos;une blancheur éclatante et villas posées sur le
      lagon&nbsp;: les Maldives font figure de paradis sur Terre. Mais derrière
      l&apos;image de carte postale se cache un archipel de près de{" "}
      <strong>1&nbsp;200 îles</strong>{" "}réparties en 26&nbsp;atolls, où le climat,
      la faune marine et l&apos;ambiance changent au fil des mois. Entre saison
      sèche et mousson, voici nos repères d&apos;initiés pour choisir la période
      idéale — et les spots où vivre les plus belles expériences.
    </>
  ),
  sections: [
    {
      h2: "Deux saisons bien distinctes",
      body: (
        <>
          <p>
            Les Maldives connaissent un climat tropical rythmé par deux
            moussons&nbsp;: la mousson sèche du nord-est (l&apos;
            <strong>iruvai</strong>, de novembre à avril) et la mousson humide du
            sud-ouest (le <strong>hulhangu</strong>, de mai à octobre). La
            température de l&apos;air comme de l&apos;eau reste agréable toute
            l&apos;année, autour de 28&nbsp;à 30&nbsp;°C.
          </p>
          <p>
            Bonne nouvelle&nbsp;: il n&apos;y a jamais de «&nbsp;mauvaise&nbsp;»
            saison aux Maldives. Tout dépend de ce que vous recherchez — soleil
            garanti, petits prix ou rencontres sous-marines exceptionnelles.
          </p>
        </>
      ),
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1000&h=750&fit=crop&auto=format",
      imgAlt: "Plage de sable blanc et eaux cristallines aux Maldives",
    },
    {
      h2: "La meilleure période : de novembre à avril",
      body: (
        <>
          <p>
            C&apos;est la <strong>haute saison</strong>&nbsp;: ciel dégagé, mer
            calme, soleil généreux et visibilité maximale sous l&apos;eau. La
            période rêvée pour la plongée, le snorkeling et le farniente. Revers
            de la médaille&nbsp;: les tarifs grimpent, surtout autour des fêtes de
            fin d&apos;année et en février.
          </p>
          <p>
            Notre conseil d&apos;initié&nbsp;: visez <strong>janvier</strong>{" "}ou la
            <strong> seconde quinzaine d&apos;avril</strong>{" "}pour un climat optimal
            avec des prix plus doux et des resorts moins courus.
          </p>
        </>
      ),
      img: "/generated/blog-quand-partir-maldives-2.jpg",
      imgAlt: "Plage tropicale et eaux turquoise limpides aux Maldives",
      imgCredit: {
        name: "Adam Juman",
        link: "https://unsplash.com/@jumanjiphotos?utm_source=cta_voyages&utm_medium=referral",
      },
    },
    {
      h2: "Mai à octobre : pluie, mais bons plans et raies manta",
      body: (
        <>
          <p>
            La mousson humide n&apos;a rien de dissuasif&nbsp;: les averses sont
            souvent brèves et intenses, entrecoupées de belles éclaircies.
            C&apos;est la <strong>basse saison</strong>, donc le moment idéal pour
            s&apos;offrir un resort de rêve à prix réduit (jusqu&apos;à 40&nbsp;%
            de moins).
          </p>
          <p>
            C&apos;est aussi la saison des géants des mers&nbsp;: le plancton
            attire <strong>raies manta</strong>{" "}et <strong>requins-baleines</strong>,
            offrant des rencontres parmi les plus mémorables de l&apos;océan
            Indien.
          </p>
        </>
      ),
      img: "/generated/blog-quand-partir-maldives-3.jpg",
      imgAlt: "Raie manta évoluant sous l'eau dans l'océan Indien",
      imgCredit: {
        name: "Ishan @seefromthesky",
        link: "https://unsplash.com/@seefromthesky?utm_source=cta_voyages&utm_medium=referral",
      },
    },
    {
      h2: "Les meilleurs spots des Maldives",
      body: (
        <>
          <p>
            Chaque atoll a sa personnalité. Voici nos pépites pour cibler le bon
            endroit selon vos envies&nbsp;:
          </p>
          <ul>
            <li>
              <strong>Baa (Hanifaru Bay)</strong>{" "}— réserve de biosphère UNESCO,
              théâtre du célèbre «&nbsp;ballet&nbsp;» de centaines de raies manta
              de mai à novembre.
            </li>
            <li>
              <strong>Ari (Ari Atoll)</strong>{" "}— le spot des requins-baleines toute
              l&apos;année et des plus beaux jardins de corail.
            </li>
            <li>
              <strong>Malé Nord & Sud</strong>{" "}— facilement accessibles, parfaits
              pour un premier séjour ou un court week-end prolongé.
            </li>
            <li>
              <strong>Vaadhoo</strong>{" "}— la plage de la «&nbsp;mer d&apos;étoiles&nbsp;»,
              où le plancton bioluminescent fait scintiller le sable la nuit.
            </li>
          </ul>
        </>
      ),
      img: "/generated/blog-quand-partir-maldives-4.jpg",
      imgAlt: "Vue aérienne d'un atoll et de ses îles aux Maldives",
      imgCredit: {
        name: "Jailam Rashad",
        link: "https://unsplash.com/@jailam_r?utm_source=cta_voyages&utm_medium=referral",
      },
    },
    {
      h2: "Le saviez-vous ?",
      body: (
        <>
          <p>
            Les Maldives sont le pays le plus plat du monde&nbsp;: leur point
            culminant ne dépasse pas <strong>2,4&nbsp;mètres</strong>{" "}au-dessus du
            niveau de la mer. Une raison de plus pour les découvrir — et pour
            voyager de façon responsable, en privilégiant les resorts engagés dans
            la préservation des récifs.
          </p>
          <p>
            Autre particularité&nbsp;: ici, un resort = une île. Vous privatisez
            quasiment un bout de paradis, avec sa maison-récif accessible
            directement depuis la plage.
          </p>
        </>
      ),
      img: "/generated/blog-quand-partir-maldives-5.jpg",
      imgAlt: "Villas sur pilotis et récif d'un resort aux Maldives",
      imgCredit: {
        name: "Muhammadh Saamy",
        link: "https://unsplash.com/@piiiiine?utm_source=cta_voyages&utm_medium=referral",
      },
    },
    {
      h2: "Combien de temps rester ?",
      body: (
        <>
          <p>
            Comptez au minimum <strong>7&nbsp;nuits</strong>{" "}pour rentabiliser le
            temps de vol (environ 10&nbsp;heures avec escale) et savourer
            pleinement l&apos;art de vivre maldivien. Pour une lune de miel ou une
            occasion spéciale, 10&nbsp;à 12&nbsp;nuits permettent de combiner deux
            atolls — ou d&apos;ajouter une étape à <strong>Dubaï</strong>{" "}sur le
            trajet.
          </p>
        </>
      ),
      img: "/generated/blog-quand-partir-maldives-6.jpg",
      imgAlt: "Hamac entre deux palmiers au bord d'un lagon des Maldives",
      imgCredit: {
        name: "Serey Kim",
        link: "https://unsplash.com/@shuttergenic?utm_source=cta_voyages&utm_medium=referral",
      },
    },
  ],
  conclusion: (
    <>
      En résumé, <strong>novembre à avril</strong>{" "}garantit le beau temps, tandis
      que <strong>mai à octobre</strong>{" "}séduit par ses tarifs et ses rencontres
      sous-marines. Quel que soit le moment, votre conseiller CTA Voyages
      sélectionne l&apos;atoll, le resort et la formule qui correspondent à vos
      envies et à votre budget — et vous glisse ses adresses confidentielles.
    </>
  ),
  faq: [
    {
      q: "Quelle est la meilleure période pour aller aux Maldives ?",
      a: "La période idéale s'étend de novembre à avril : c'est la saison sèche, avec un ciel dégagé, une mer calme et une excellente visibilité sous l'eau. Janvier et la seconde quinzaine d'avril offrent le meilleur compromis météo/prix.",
    },
    {
      q: "Peut-on aller aux Maldives pendant la mousson ?",
      a: "Oui. De mai à octobre, les averses sont souvent brèves et entrecoupées d'éclaircies. C'est la basse saison : les tarifs chutent (jusqu'à 40 % de moins) et c'est la meilleure période pour observer raies manta et requins-baleines.",
    },
    {
      q: "Combien de temps faut-il rester aux Maldives ?",
      a: "Comptez au minimum 7 nuits pour rentabiliser le temps de vol (environ 10 heures avec escale). Pour une lune de miel, 10 à 12 nuits permettent de combiner deux atolls ou d'ajouter une étape à Dubaï.",
    },
    {
      q: "Quel budget prévoir pour un voyage aux Maldives ?",
      a: "Le budget varie fortement selon le resort et la saison. La basse saison (mai-octobre) et la réservation anticipée permettent d'accéder à des établissements de rêve à prix réduit. Votre conseiller CTA Voyages ajuste la formule à votre budget.",
    },
    {
      q: "Quel atoll choisir aux Maldives ?",
      a: "Baa (Hanifaru Bay) pour les raies manta, Ari pour les requins-baleines et les jardins de corail, Malé Nord et Sud pour un premier séjour facile d'accès. Le choix dépend de vos envies de plongée, de calme ou de proximité de l'aéroport.",
    },
  ],
};

export default quandPartirMaldives;
