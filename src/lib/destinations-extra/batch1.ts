import type { Destination } from "../destinations";

export const BATCH1: Destination[] = [
  {
    slug: "maldives",
    name: "Maldives",
    continent: "Océan Indien",
    heroImg:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Constellation de 1 200 îles posées sur l'océan Indien, les Maldives incarnent le paradis dans son expression la plus pure. Villas sur pilotis suspendues au-dessus d'un lagon turquoise, jardins de corail foisonnants et sable d'une blancheur irréelle composent un décor d'exception, idéal pour une lune de miel ou une parenthèse hors du temps.",
    highlights: [
      "Les villas sur pilotis et leur accès direct au lagon translucide",
      "La plongée et le snorkeling parmi raies manta, requins-baleines et tortues",
      "Le phénomène magique du plancton bioluminescent la nuit sur certaines plages",
      "Les atolls préservés d'Ari, de Baa (réserve de biosphère UNESCO) et de Malé Sud",
      "Les dîners privés sur sandbanks et les spas posés au-dessus de l'eau",
    ],
    bestSeason:
      "De novembre à avril, durant la saison sèche : mer calme, ciel dégagé et visibilité optimale pour la plongée.",
    experiences: [
      {
        title: "Lune de miel sur pilotis",
        description:
          "Villa privée au-dessus du lagon, dîner romantique les pieds dans le sable et soin en duo dans un spa face à l'océan.",
      },
      {
        title: "Séjour plongée & jardins de corail",
        description:
          "Exploration des plus beaux spots des atolls, rencontre avec les raies manta et baptêmes encadrés par des moniteurs experts.",
      },
      {
        title: "Évasion balnéaire tout confort",
        description:
          "Resort 5 étoiles en pension complète, transferts en hydravion et journées rythmées par le farniente et les sports nautiques.",
      },
    ],
  },
  {
    slug: "madagascar",
    name: "Madagascar",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Île-continent au bout du monde, Madagascar abrite une nature unique sur la planète, où 80 % des espèces ne se rencontrent nulle part ailleurs. Forêts d'épineux, allées de baobabs majestueux, lémuriens facétieux et plages désertes composent un voyage d'aventure et d'émerveillement, porté par la chaleur du peuple malgache.",
    highlights: [
      "L'allée des Baobabs au coucher du soleil, près de Morondava",
      "Les lémuriens et la forêt primaire des parcs d'Andasibe et de Ranomafana",
      "Les pitons calcaires du Tsingy de Bemaraha, classé à l'UNESCO",
      "Les plages paradisiaques et le snorkeling de Nosy Be et Nosy Iranja",
      "La mythique Route Nationale 7, des hauts plateaux jusqu'au sud aride",
    ],
    bestSeason:
      "D'avril à novembre, durant la saison sèche : un climat agréable pour explorer parcs et littoral, idéal d'août à octobre.",
    experiences: [
      {
        title: "Aventure nature & lémuriens",
        description:
          "Treks guidés dans les parcs nationaux à la rencontre des lémuriens et caméléons, nuits en lodge au cœur de la forêt.",
      },
      {
        title: "Grand tour de la RN7",
        description:
          "Un autotour mythique des hauts plateaux jusqu'au sud, entre villages d'artisans, paysages contrastés et baobabs géants.",
      },
      {
        title: "Combiné aventure & plage",
        description:
          "L'exploration de la grande île prolongée par quelques jours de détente sur les plages préservées de Nosy Be.",
      },
    ],
  },
  {
    slug: "la-reunion",
    name: "La Réunion",
    continent: "Océan Indien",
    heroImg:
      "https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Île intense au cœur de l'océan Indien, La Réunion concentre des paysages d'une diversité saisissante. Volcan en activité, cirques vertigineux, cascades infinies et lagons turquoise font de cette terre française un véritable terrain de jeu pour les amoureux de randonnée, de nature grandiose et de métissage créole.",
    highlights: [
      "L'ascension du Piton de la Fournaise, l'un des volcans les plus actifs du monde",
      "Les cirques classés à l'UNESCO : Mafate, Cilaos et Salazie",
      "Le lagon de l'Ermitage et Saint-Gilles pour le snorkeling et la plongée",
      "Le survol de l'île en hélicoptère au-dessus du Trou de Fer",
      "La cuisine créole métissée et la route des Tamarins panoramique",
    ],
    bestSeason:
      "De mai à novembre, durant l'hiver austral : un climat sec et doux, parfait pour la randonnée et la découverte des cirques.",
    experiences: [
      {
        title: "Trek au cœur des cirques",
        description:
          "Randonnées d'exception dans Mafate et Cilaos, nuits en gîte de montagne et panoramas vertigineux sur l'île intense.",
      },
      {
        title: "Volcan & sensations fortes",
        description:
          "Ascension du Piton de la Fournaise, survol en hélicoptère et canyoning dans les ravines pour les amateurs d'adrénaline.",
      },
      {
        title: "Lagon & douceur créole",
        description:
          "Détente sur les plages de l'ouest, snorkeling dans le lagon et immersion dans la culture et la gastronomie créoles.",
      },
    ],
  },
  {
    slug: "namibie",
    name: "Namibie",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Terre de l'extrême et du silence, la Namibie déploie les plus vieux déserts du monde et des espaces d'une beauté minérale à couper le souffle. Dunes ocres plongeant dans l'Atlantique, faune sauvage en liberté et ciels étoilés d'une pureté absolue font de ce pays une aventure photographique inoubliable, loin de toute foule.",
    highlights: [
      "Les dunes rouges de Sossusvlei et le surréaliste Deadvlei",
      "Les safaris dans le parc national d'Etosha et son immense pan blanc",
      "La Skeleton Coast, ses épaves et ses colonies d'otaries",
      "Les peuples himbas et l'art rupestre de Twyfelfontein, classé à l'UNESCO",
      "Les ciels parmi les plus étoilés au monde pour l'observation astronomique",
    ],
    bestSeason:
      "De mai à octobre, durant la saison sèche : températures clémentes et faune concentrée autour des points d'eau, idéale pour les safaris.",
    experiences: [
      {
        title: "Autotour grands espaces",
        description:
          "Un road trip mythique en 4x4 des dunes de Sossusvlei à Etosha, en lodges de charme au cœur des paysages namibiens.",
      },
      {
        title: "Safari & faune sauvage",
        description:
          "Observation des éléphants, lions et rhinocéros dans le parc d'Etosha, guidée par des rangers connaisseurs du bush.",
      },
      {
        title: "Désert & nuits étoilées",
        description:
          "Bivouac d'exception sous l'un des ciels les plus purs de la planète, entre dunes infinies et silence absolu.",
      },
    ],
  },
  {
    slug: "kenya",
    name: "Kenya",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Berceau du safari, le Kenya offre le spectacle le plus saisissant de la faune africaine au cœur de savanes mythiques. Du Masai Mara aux plages de l'océan Indien, en passant par les rencontres avec le peuple masaï, c'est une destination de grands frissons et d'émotions intenses, fidèle à l'image rêvée de l'Afrique sauvage.",
    highlights: [
      "La grande migration des gnous dans la réserve du Masai Mara (juillet-octobre)",
      "Le Big Five : lions, léopards, éléphants, rhinocéros et buffles",
      "Les flamants roses du lac Nakuru et les paysages de la vallée du Rift",
      "La rencontre authentique avec les communautés masaïs",
      "L'extension balnéaire sur les plages de Diani et Mombasa",
    ],
    bestSeason:
      "De juin à octobre, durant la saison sèche, pour les safaris et la grande migration ; de janvier à février pour un climat ensoleillé.",
    experiences: [
      {
        title: "Safari grande migration",
        description:
          "Cap sur le Masai Mara au cœur de la migration des gnous, en lodge ou camp de tente pour vivre le bush au plus près.",
      },
      {
        title: "Combiné safari & plage",
        description:
          "L'aventure des grands parcs prolongée par la détente sur les plages de sable blanc de la côte de l'océan Indien.",
      },
      {
        title: "Rencontre des peuples masaïs",
        description:
          "Immersion dans un village masaï, partage des traditions et observation de la faune guidée par les gardiens de la savane.",
      },
    ],
  },
  {
    slug: "tanzanie",
    name: "Tanzanie",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Sanctuaire de la vie sauvage, la Tanzanie réunit les plus grands parcs d'Afrique de l'Est et le toit du continent. Plaines infinies du Serengeti, cratère du Ngorongoro grouillant de vie et sommet enneigé du Kilimandjaro composent un voyage légendaire, à prolonger sur les plages paradisiaques de Zanzibar.",
    highlights: [
      "Les plaines du Serengeti et la grande migration des gnous et zèbres",
      "Le cratère du Ngorongoro, immense arche de Noé classée à l'UNESCO",
      "L'ascension du Kilimandjaro, le plus haut sommet d'Afrique",
      "Les parcs de Tarangire et de Manyara, entre baobabs et éléphants",
      "L'extension idéale vers les plages et les épices de Zanzibar",
    ],
    bestSeason:
      "De juin à octobre, durant la saison sèche, pour les safaris ; de janvier à février pour assister aux naissances dans le Serengeti.",
    experiences: [
      {
        title: "Safari grands parcs du Nord",
        description:
          "Le circuit d'exception du Serengeti au Ngorongoro, en lodges et camps, à la rencontre du Big Five et de la migration.",
      },
      {
        title: "Ascension du Kilimandjaro",
        description:
          "Le défi d'une vie vers le toit de l'Afrique, encadré par des guides expérimentés, pour les amoureux de trek et d'altitude.",
      },
      {
        title: "Combiné safari & Zanzibar",
        description:
          "L'aventure des grands parcs sublimée par quelques jours de détente sur les plages turquoise de l'île aux épices.",
      },
    ],
  },
];
