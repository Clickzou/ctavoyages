export type Experience = {
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  /** Badge continent affiché : "Asie", "Afrique", "Océan Indien", "Amériques", "Europe" */
  continent: string;
  heroImg: string;
  /** 2-3 phrases d'introduction */
  intro: string;
  /** 4-5 points forts (lieux / expériences) */
  highlights: string[];
  /** Texte court sur la meilleure saison */
  bestSeason: string;
  /** 3 cartes expériences (type de voyage adapté) */
  experiences: [Experience, Experience, Experience];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "thailande",
    name: "Thaïlande",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Le Sourire de l'Asie déploie ses temples dorés, ses marchés flottants et ses plages de carte postale au cœur de l'Asie du Sud-Est. De l'effervescence de Bangkok à la quiétude des îles de la mer d'Andaman, la Thaïlande conjugue spiritualité, gastronomie de rue légendaire et hospitalité chaleureuse.",
    highlights: [
      "Les temples scintillants de Bangkok : Wat Arun, Wat Pho et le Grand Palais",
      "Le triangle culturel du Nord : Chiang Mai, ses ateliers d'artisans et ses sanctuaires d'éléphants éthiques",
      "Les plages et les eaux turquoise de Krabi, Koh Phi Phi et Koh Lanta",
      "La cuisine de rue et les cours de cuisine thaïe traditionnelle",
      "Les marchés flottants de Damnoen Saduak et les ruines d'Ayutthaya",
    ],
    bestSeason:
      "De novembre à mars, durant la saison sèche et fraîche : un climat idéal pour combiner visites culturelles et farniente balnéaire.",
    experiences: [
      {
        title: "Circuit culturel Nord & temples",
        description:
          "De Bangkok à Chiang Mai, un itinéraire rythmé entre temples bouddhistes, villages de montagne et rencontres avec les artisans locaux.",
      },
      {
        title: "Séjour balnéaire dans les îles",
        description:
          "Détente absolue sur les plages de la mer d'Andaman, snorkeling dans les eaux turquoise et nuits en resort de charme face au lagon.",
      },
      {
        title: "Voyage de noces sur mesure",
        description:
          "Une parenthèse romantique alliant villa privée, dîner sur la plage et excursions en bateau privatisé vers des criques secrètes.",
      },
    ],
  },
  {
    slug: "maroc",
    name: "Maroc",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&h=900&fit=crop&auto=format",
    intro:
      "À quelques heures de vol, le Maroc déroule ses médinas labyrinthiques, ses dunes infinies et ses palais ornés de zelliges. Entre l'effervescence de Marrakech, la sérénité du désert et la fraîcheur des montagnes de l'Atlas, le royaume chérifien est une invitation permanente aux sens.",
    highlights: [
      "La médina de Marrakech, la place Jemaa el-Fna et les jardins Majorelle",
      "Une nuit sous les étoiles dans un bivouac de luxe au cœur du désert de Merzouga",
      "Les villes impériales : Fès, sa tannerie et Meknès",
      "La perle bleue de Chefchaouen, nichée dans le Rif",
      "Les vallées et kasbahs de l'Atlas, du Ouarzazate à la palmeraie de Skoura",
    ],
    bestSeason:
      "Le printemps (mars-mai) et l'automne (septembre-novembre) offrent des températures douces, idéales pour le désert comme pour les villes.",
    experiences: [
      {
        title: "Villes impériales & médinas",
        description:
          "Un circuit immersif de Marrakech à Fès, à la découverte des souks, des riads d'exception et de l'artisanat marocain.",
      },
      {
        title: "Désert & bivouac de luxe",
        description:
          "Trek à dos de dromadaire, coucher de soleil sur les dunes de l'Erg Chebbi et nuit en campement nomade tout confort.",
      },
      {
        title: "Escapade détente en riad",
        description:
          "Quelques jours de douceur entre hammam, patios fleuris et gastronomie raffinée, à deux pas de la médina.",
      },
    ],
  },
  {
    slug: "ile-maurice",
    name: "Île Maurice",
    continent: "Océan Indien",
    heroImg:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Joyau de l'océan Indien, l'Île Maurice marie lagons turquoise, plages de sable blanc et reliefs volcaniques verdoyants. Métissage de cultures et douceur de vivre créole en font une destination de rêve, aussi bien pour un séjour balnéaire qu'une lune de miel inoubliable.",
    highlights: [
      "Les lagons protégés de Belle Mare, Le Morne et Trou aux Biches",
      "La terre des sept couleurs de Chamarel et ses cascades",
      "Le jardin botanique de Pamplemousses et ses nénuphars géants",
      "Les sports nautiques : plongée, kitesurf et catamaran vers l'île aux Cerfs",
      "La gastronomie créole et la route du thé et du rhum",
    ],
    bestSeason:
      "De mai à décembre, durant l'hiver austral : un climat sec et ensoleillé, idéal pour profiter du lagon et des activités nautiques.",
    experiences: [
      {
        title: "Séjour balnéaire 5 étoiles",
        description:
          "Détente sur les plus belles plages de l'île, hébergement en resort pieds dans l'eau et spa face au lagon.",
      },
      {
        title: "Voyage de noces tropical",
        description:
          "Suite avec piscine privée, dîner romantique sous les étoiles et excursion privatisée vers les îlots du nord-est.",
      },
      {
        title: "Découverte nature & culture",
        description:
          "Randonnées dans le parc national des Gorges de Rivière Noire, dégustations créoles et rencontre des traditions mauriciennes.",
      },
    ],
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    continent: "Océan Indien",
    heroImg:
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Archipel préservé de 115 îles, les Seychelles incarnent le paradis à l'état pur : rochers de granit sculptés, eaux cristallines et nature luxuriante. Entre Mahé, Praslin et La Digue, le temps semble suspendu au rythme des plages les plus photographiées du monde.",
    highlights: [
      "Anse Source d'Argent à La Digue, l'une des plus belles plages du monde",
      "La vallée de Mai à Praslin et son célèbre coco de mer",
      "Le snorkeling et la plongée dans les jardins de corail",
      "Les tortues géantes d'Aldabra et la faune endémique",
      "La capitale Victoria, son marché et ses jardins botaniques",
    ],
    bestSeason:
      "D'avril à mai et d'octobre à novembre, l'intersaison offre une mer calme et un ensoleillement optimal pour la plongée.",
    experiences: [
      {
        title: "Island hopping de rêve",
        description:
          "Un itinéraire en bateau entre Mahé, Praslin et La Digue, à la découverte des plages secrètes et des criques de granit.",
      },
      {
        title: "Lune de miel d'exception",
        description:
          "Villa privée surplombant l'océan, dîner les pieds dans le sable et croisière au coucher du soleil pour deux.",
      },
      {
        title: "Croisière & nature préservée",
        description:
          "Navigation entre les îles intérieures, observation des tortues et plongée dans des réserves marines protégées.",
      },
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    continent: "Afrique",
    heroImg: "/assets/images/tanzanie.jpg",
    intro:
      "Au large de la Tanzanie, l'île aux épices envoûte par ses plages de sable blanc, ses eaux translucides et son riche héritage swahili. Entre les ruelles chargées d'histoire de Stone Town et les lagons turquoise du nord-est, Zanzibar mêle farniente, culture et aventure.",
    highlights: [
      "Stone Town, classée à l'UNESCO, et ses portes sculptées",
      "Les plages paradisiaques de Nungwi, Kendwa et Paje",
      "La tournée des plantations d'épices et de la forêt de Jozani",
      "La plongée et le snorkeling autour de l'atoll de Mnemba",
      "L'extension idéale après un safari en Tanzanie",
    ],
    bestSeason:
      "De juin à octobre et de décembre à février, durant les saisons sèches : un climat chaud et ensoleillé idéal pour la plage.",
    experiences: [
      {
        title: "Combiné safari & plage",
        description:
          "L'alliance parfaite entre les grands parcs de Tanzanie et le repos sur les plages immaculées de Zanzibar.",
      },
      {
        title: "Immersion culture swahilie",
        description:
          "Découverte de Stone Town, marché aux épices et rencontres avec les artisans et pêcheurs de l'île.",
      },
      {
        title: "Séjour détente en bord de lagon",
        description:
          "Hébergement de charme face à la mer, sorties en boutre traditionnel et plongée dans les jardins de corail.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    continent: "Amériques",
    heroImg:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Pays-continent aux espaces vertigineux, le Canada déploie ses Rocheuses enneigées, ses forêts infinies et ses lacs d'un bleu irréel. Des villes cosmopolites au charme francophone du Québec, c'est une terre d'aventure et de grands espaces qui se vit en toutes saisons.",
    highlights: [
      "Les Rocheuses canadiennes : Banff, Jasper et le lac Louise",
      "Le charme du Vieux-Québec et l'effervescence de Montréal",
      "Les chutes du Niagara et les routes panoramiques de l'Ontario",
      "L'été indien et les forêts d'érables flamboyantes en automne",
      "L'observation des baleines dans le Saint-Laurent et la faune sauvage",
    ],
    bestSeason:
      "De juin à septembre pour les grands espaces et la randonnée, ou en septembre-octobre pour les couleurs flamboyantes de l'été indien.",
    experiences: [
      {
        title: "Road trip dans les Rocheuses",
        description:
          "De Calgary à Vancouver, un autotour spectaculaire entre parcs nationaux, lacs émeraude et sommets enneigés.",
      },
      {
        title: "Est canadien & été indien",
        description:
          "Circuit de Montréal à Québec et Toronto, au rythme des forêts d'érables, des chutes du Niagara et de la culture francophone.",
      },
      {
        title: "Aventure nature & faune",
        description:
          "Observation des baleines, nuit en lodge au cœur de la forêt et activités de plein air pour les amoureux des grands espaces.",
      },
    ],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    continent: "Amériques",
    heroImg: "/assets/images/costa_rica.jpg",
    intro:
      "Pionnier de l'écotourisme, le Costa Rica concentre une biodiversité exceptionnelle sur un territoire à taille humaine. Volcans fumants, forêts tropicales luxuriantes et plages des deux océans : la « pura vida » se vit ici au plus près d'une nature préservée et foisonnante.",
    highlights: [
      "Le volcan Arenal et ses sources d'eau chaude naturelles",
      "La forêt de nuages de Monteverde et ses ponts suspendus",
      "Le parc national Manuel Antonio, entre jungle et plage",
      "L'observation des paresseux, toucans et tortues marines",
      "Les plages du Pacifique et la côte Caraïbe de Tortuguero",
    ],
    bestSeason:
      "De décembre à avril, durant la saison sèche : un climat ensoleillé idéal pour explorer parcs nationaux et plages.",
    experiences: [
      {
        title: "Aventure volcans & jungle",
        description:
          "Tyrolienne dans la canopée, randonnée au pied de l'Arenal et baignade dans les sources chaudes naturelles.",
      },
      {
        title: "Écolodge & observation faune",
        description:
          "Séjour en lodge éco-responsable au cœur de la forêt, à la rencontre des paresseux, singes et oiseaux multicolores.",
      },
      {
        title: "Combiné nature & plage",
        description:
          "L'alliance parfaite entre exploration des parcs nationaux et détente sur les plages du Pacifique.",
      },
    ],
  },
  {
    slug: "laponie",
    name: "Laponie",
    continent: "Europe",
    heroImg:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Aux confins du cercle polaire, la Laponie est un royaume de neige et de silence où dansent les aurores boréales. Entre traîneaux à chiens, rennes et nuits sous les étoiles dans un igloo de verre, c'est une destination féérique qui réveille l'âme d'enfant.",
    highlights: [
      "L'observation des aurores boréales sous le ciel polaire",
      "Une nuit insolite en igloo de verre ou en hôtel de glace",
      "Les balades en traîneau à chiens ou tiré par les rennes",
      "La rencontre avec le Père Noël à Rovaniemi",
      "La motoneige et le sauna finlandais traditionnel",
    ],
    bestSeason:
      "De décembre à mars pour la neige, les activités hivernales et les meilleures conditions d'observation des aurores boréales.",
    experiences: [
      {
        title: "Chasse aux aurores boréales",
        description:
          "Soirées d'observation guidées loin de toute pollution lumineuse et nuits en igloo de verre face au ciel étoilé.",
      },
      {
        title: "Aventure grand froid en famille",
        description:
          "Traîneau à chiens, rencontre avec les rennes et visite du village du Père Noël : la magie de l'hiver pour petits et grands.",
      },
      {
        title: "Évasion bien-être polaire",
        description:
          "Motoneige à travers les forêts enneigées, sauna finlandais et détente dans un lodge cosy au cœur du Grand Nord.",
      },
    ],
  },
  {
    slug: "londres",
    name: "Londres",
    continent: "Europe",
    heroImg:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Capitale bouillonnante et cosmopolite, Londres marie tradition royale et créativité avant-gardiste. Entre musées world-class, marchés vintage, scène culinaire foisonnante et parcs majestueux, la ville se réinvente sans cesse au fil de ses quartiers aux mille visages.",
    highlights: [
      "Les incontournables : Big Ben, Tower Bridge et Buckingham Palace",
      "Les musées gratuits de renommée mondiale : British Museum, Tate Modern",
      "Les marchés branchés de Camden, Borough et Portobello",
      "Les comédies musicales du West End et la scène théâtrale",
      "Les quartiers tendance de Shoreditch et Notting Hill",
    ],
    bestSeason:
      "De mai à septembre pour profiter des journées longues, des parcs en fleurs et des terrasses, mais Londres se visite toute l'année.",
    experiences: [
      {
        title: "City break culturel",
        description:
          "Un week-end prolongé entre musées, monuments emblématiques et spectacles du West End, hébergement central inclus.",
      },
      {
        title: "Escapade shopping & gastronomie",
        description:
          "Marchés branchés, boutiques de créateurs et tables tendance : Londres au rythme de ses adresses les plus pointues.",
      },
      {
        title: "Londres en famille",
        description:
          "Du Harry Potter Studio Tour aux grands parcs et musées interactifs, un séjour ludique pensé pour petits et grands.",
      },
    ],
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    continent: "Europe",
    heroImg:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Sillonnée de canaux romantiques et bordée de maisons à pignons, Amsterdam séduit par son atmosphère bohème et créative. Capitale du vélo et des grands musées, la Venise du Nord se découvre au fil de l'eau, entre patrimoine du Siècle d'or et ambiance résolument décontractée.",
    highlights: [
      "Une croisière sur les canaux classés à l'UNESCO",
      "Le musée Van Gogh et le Rijksmuseum",
      "La maison d'Anne Frank et le quartier du Jordaan",
      "Le marché aux fleurs flottant et les champs de tulipes au printemps",
      "La découverte de la ville à vélo, comme un véritable Amstellodamois",
    ],
    bestSeason:
      "D'avril à mai pour la floraison spectaculaire des tulipes, ou de juin à septembre pour profiter des terrasses au bord des canaux.",
    experiences: [
      {
        title: "Week-end romantique au fil de l'eau",
        description:
          "Croisière privée sur les canaux, hôtel de charme et dîner intimiste dans le quartier pittoresque du Jordaan.",
      },
      {
        title: "Escapade culturelle & musées",
        description:
          "Plongée dans l'art néerlandais avec le Rijksmuseum, le musée Van Gogh et les galeries du Siècle d'or.",
      },
      {
        title: "Amsterdam à vélo & tulipes",
        description:
          "Balades à vélo dans la ville et excursion vers les champs de tulipes et les jardins de Keukenhof au printemps.",
      },
    ],
  },
  {
    slug: "porto",
    name: "Porto",
    continent: "Europe",
    heroImg:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Posée sur les rives du Douro, Porto séduit par ses azulejos bleutés, ses ruelles escarpées et ses caves de vin centenaires. Authentique et chaleureuse, la cité portugaise mêle patrimoine baroque, gastronomie généreuse et douceur de vivre face au fleuve.",
    highlights: [
      "Le quartier de la Ribeira et le pont Dom-Luís Ier",
      "Les caves de Vila Nova de Gaia et la dégustation de porto",
      "La librairie Lello et la gare São Bento aux azulejos",
      "Une croisière sur le Douro et ses vignobles en terrasses",
      "La gastronomie locale : francesinha, pastéis et fruits de mer",
    ],
    bestSeason:
      "D'avril à juin et de septembre à octobre, pour un climat doux, des vendanges dans le Douro et une affluence modérée.",
    experiences: [
      {
        title: "City break & caves à porto",
        description:
          "Découverte de la vieille ville, balade le long du Douro et dégustations dans les caves historiques de Gaia.",
      },
      {
        title: "Escapade vins du Douro",
        description:
          "Croisière sur le fleuve et journée dans les quintas viticoles à flanc de coteaux, entre dégustations et paysages classés.",
      },
      {
        title: "Week-end gourmand & culture",
        description:
          "Tables typiques, marchés locaux et patrimoine baroque : Porto au rythme de ses saveurs et de son authenticité.",
      },
    ],
  },
  {
    slug: "rome",
    name: "Rome",
    continent: "Europe",
    heroImg:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Ville éternelle à ciel ouvert, Rome déroule deux mille ans d'histoire à chaque coin de rue. Du Colisée aux fontaines baroques, des trésors du Vatican aux trattorias animées, la capitale italienne se savoure entre vestiges antiques, art sublime et irrésistible dolce vita.",
    highlights: [
      "Le Colisée, le Forum romain et le mont Palatin",
      "La cité du Vatican : basilique Saint-Pierre et chapelle Sixtine",
      "La fontaine de Trevi, le Panthéon et la place Navone",
      "Les ruelles du Trastevere et la dolce vita romaine",
      "La gastronomie italienne : pasta, gelato et cafés mythiques",
    ],
    bestSeason:
      "D'avril à juin et de septembre à octobre, pour un climat agréable et une affluence plus douce qu'en plein été.",
    experiences: [
      {
        title: "Rome antique & Vatican",
        description:
          "Visites guidées coupe-file du Colisée, du Forum et des musées du Vatican, au cœur de l'histoire de la Ville éternelle.",
      },
      {
        title: "Week-end dolce vita",
        description:
          "Flâneries dans le Trastevere, places baroques et tables typiques pour savourer Rome à l'italienne.",
      },
      {
        title: "Escapade romantique",
        description:
          "Hôtel de charme, dîner aux chandelles et balade au coucher du soleil sur les plus belles places de la ville.",
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getAllSlugs(): string[] {
  return DESTINATIONS.map((d) => d.slug);
}
