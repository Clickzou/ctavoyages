import type { Destination } from "../destinations";

/** Lot 10 — Amériques : pays ajoutés (Argentine remplace Patagonie, Brésil, Chili…). */
export const BATCH10: Destination[] = [
  {
    slug: "argentine",
    name: "Argentine",
    continent: "Amériques",
    heroImg: "/generated/argentine.jpg",
    intro:
      "De la démesure des chutes d'Iguazú aux glaciers de Patagonie, l'Argentine déroule un territoire long de 3 700 kilomètres. Buenos Aires vibre au rythme du tango, les vignobles de Mendoza s'étirent au pied des Andes et le Grand Sud offre certains des paysages les plus spectaculaires de la planète.",
    highlights: [
      "Buenos Aires, ses quartiers de La Boca et San Telmo, et ses soirées tango",
      "Les chutes d'Iguazú, l'une des merveilles naturelles du monde",
      "Le glacier Perito Moreno et les sommets du Fitz Roy en Patagonie",
      "Les vignobles de Mendoza au pied de l'Aconcagua",
      "Le Nord-Ouest andin : Salta, Purmamarca et la montagne aux sept couleurs",
    ],
    bestSeason:
      "D'octobre à avril pour la Patagonie et le Sud, de mars à mai et de septembre à novembre pour Buenos Aires, le Nord et les vignobles.",
    experiences: [
      {
        title: "Grand tour d'Argentine",
        description:
          "Buenos Aires, Iguazú, Salta et la Patagonie reliées par vols intérieurs : le condensé des incontournables argentins.",
      },
      {
        title: "Patagonie & glaciers",
        description:
          "Randonnées à El Chaltén, navigation face au Perito Moreno et nuits en estancia au cœur de la steppe.",
      },
      {
        title: "Tango, vins & estancias",
        description:
          "Immersion portègne, dégustations de malbec à Mendoza et séjour dans une estancia traditionnelle de la Pampa.",
      },
    ],
  },
  {
    slug: "bresil",
    name: "Brésil",
    continent: "Amériques",
    heroImg: "/generated/bresil.jpg",
    intro:
      "Géant coloré de l'Amérique du Sud, le Brésil fait rimer plages mythiques, forêt amazonienne et fièvre du carnaval. De Rio et son Corcovado aux dunes des Lençóis Maranhenses, du Pantanal aux villages coloniaux du Nordeste, c'est une explosion de nature, de musique et de joie de vivre.",
    highlights: [
      "Rio de Janeiro : Christ Rédempteur, Pain de Sucre, Copacabana et Ipanema",
      "Les chutes d'Iguaçu côté brésilien, face au spectaculaire Gorge du Diable",
      "L'Amazonie : croisière sur le Rio Negro et nuits en lodge dans la forêt",
      "Le Pantanal, meilleur endroit du continent pour observer le jaguar",
      "Salvador de Bahia, sa culture afro-brésilienne et les plages du Nordeste",
    ],
    bestSeason:
      "De mai à septembre pour un temps sec et doux dans la plupart des régions ; décembre à mars pour le Sud, le carnaval et les plages.",
    experiences: [
      {
        title: "Rio, Iguaçu & Bahia",
        description:
          "Le grand classique brésilien : la ville merveilleuse, les chutes d'Iguaçu et les plages ensoleillées du Nordeste.",
      },
      {
        title: "Amazonie & Pantanal",
        description:
          "Deux écosystèmes d'exception : navigation en Amazonie et safari photo dans le Pantanal, à la recherche du jaguar.",
      },
      {
        title: "Plages & villages coloniaux",
        description:
          "Séjour entre Salvador, Praia do Forte et les criques préservées de la côte bahianaise, au rythme de la samba.",
      },
    ],
  },
  {
    slug: "chili",
    name: "Chili",
    continent: "Amériques",
    heroImg: "/generated/chili.jpg",
    intro:
      "Étiré sur 4 300 kilomètres entre le Pacifique et les Andes, le Chili aligne les extrêmes : le désert le plus aride du monde au nord, les vignobles de la vallée centrale, les volcans et lacs de l'Araucanie, les tours de granit de Torres del Paine et l'île de Pâques au large.",
    highlights: [
      "Le désert d'Atacama : geysers du Tatio, vallée de la Lune et ciel étoilé",
      "Le parc national Torres del Paine et ses massifs de granit",
      "Valparaíso, ville portuaire classée UNESCO et ses collines colorées",
      "La région des lacs et des volcans autour de Pucón et Puerto Varas",
      "L'île de Pâques et ses mystérieux moaï face au Pacifique",
    ],
    bestSeason:
      "De novembre à mars pour la Patagonie chilienne et les lacs ; l'Atacama se visite toute l'année grâce à son climat désertique.",
    experiences: [
      {
        title: "Atacama & Torres del Paine",
        description:
          "Les deux extrêmes du pays reliés par vols intérieurs : le désert le plus aride du monde et la Patagonie sauvage.",
      },
      {
        title: "Volcans, lacs & vignobles",
        description:
          "Autotour de Santiago à Puerto Varas, entre vallées viticoles, forêts d'araucarias et volcans enneigés.",
      },
      {
        title: "Île de Pâques",
        description:
          "Extension confidentielle au cœur du Pacifique, à la découverte des moaï, des volcans et de la culture rapa nui.",
      },
    ],
  },
  {
    slug: "bolivie",
    name: "Bolivie",
    continent: "Amériques",
    heroImg: "/generated/bolivie.jpg",
    intro:
      "Pays des hauts plateaux et des couleurs impossibles, la Bolivie offre l'un des voyages les plus photogéniques du continent. Le salar d'Uyuni, immense miroir de sel, les lagunes rouges de l'Altiplano et les traditions aymaras encore très vivantes en font une destination hors du commun.",
    highlights: [
      "Le salar d'Uyuni, plus grand désert de sel du monde, et son effet miroir",
      "Les lagunes colorées et les geysers du Sud Lípez, à 4 800 mètres d'altitude",
      "Le lac Titicaca, l'Isla del Sol et les communautés aymaras",
      "La Paz, ses marchés, ses téléphériques et la Vallée de la Lune",
      "Potosí, Sucre la blanche et l'héritage colonial de l'argent",
    ],
    bestSeason:
      "De mai à octobre pour la saison sèche et les pistes de l'Altiplano ; de janvier à mars pour l'effet miroir sur le salar d'Uyuni.",
    experiences: [
      {
        title: "Salar d'Uyuni & Sud Lípez",
        description:
          "Traversée en 4x4 du désert de sel jusqu'aux lagunes andines, avec nuit en hôtel de sel et lever de soleil inoubliable.",
      },
      {
        title: "Andes & lac Titicaca",
        description:
          "De La Paz au Titicaca, entre sites précolombiens de Tiwanaku, îles sacrées et villages traditionnels.",
      },
      {
        title: "Combiné Pérou & Bolivie",
        description:
          "Le grand itinéraire andin du Machu Picchu au salar d'Uyuni, en passant par le lac Titicaca.",
      },
    ],
  },
  {
    slug: "mexique",
    name: "Mexique",
    continent: "Amériques",
    heroImg: "/generated/mexique.jpg",
    intro:
      "Cités mayas englouties par la jungle, cénotes d'eau cristalline, villes coloniales aux façades pastel et plages des Caraïbes : le Mexique est une destination-continent d'une intensité rare. Sa cuisine, classée au patrimoine de l'UNESCO, et sa culture flamboyante font le reste.",
    highlights: [
      "Chichén Itzá, Tulum et Palenque, joyaux de la civilisation maya",
      "Les cénotes du Yucatán et la réserve de biosphère de Sian Ka'an",
      "Mexico, Teotihuacán et le quartier coloré de Coyoacán",
      "Les villes coloniales de San Miguel de Allende, Guanajuato et Oaxaca",
      "Les plages de la Riviera Maya et la barrière de corail de Cozumel",
    ],
    bestSeason:
      "De novembre à avril, durant la saison sèche : un climat ensoleillé et des températures idéales pour les sites comme pour la plage.",
    experiences: [
      {
        title: "Yucatán : Mayas & cénotes",
        description:
          "Autotour de Mérida à Tulum, entre cités mayas, villages coloniaux, baignades en cénote et plages caribéennes.",
      },
      {
        title: "Mexique colonial & Oaxaca",
        description:
          "De Mexico à Oaxaca : pyramides, marchés, ateliers d'artisans et gastronomie parmi les plus riches du monde.",
      },
      {
        title: "Combiné culture & Riviera Maya",
        description:
          "L'alliance parfaite entre découverte des sites archéologiques et détente en resort les pieds dans l'eau.",
      },
    ],
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    continent: "Amériques",
    heroImg: "/generated/guatemala.jpg",
    intro:
      "Cœur du monde maya, le Guatemala concentre sur un petit territoire des volcans en activité, des lacs d'altitude, des marchés indigènes hauts en couleur et le site majestueux de Tikal émergeant de la jungle. Une destination intense, authentique et étonnamment accessible.",
    highlights: [
      "Tikal, cité maya monumentale au cœur de la forêt du Petén",
      "Le lac Atitlán, cerné de volcans et de villages mayas",
      "Antigua, ancienne capitale coloniale classée à l'UNESCO",
      "Le marché de Chichicastenango, le plus coloré d'Amérique centrale",
      "L'ascension du volcan Acatenango face aux éruptions du Fuego",
    ],
    bestSeason:
      "De novembre à avril, durant la saison sèche : ciel dégagé sur les volcans et conditions idéales pour la randonnée.",
    experiences: [
      {
        title: "Volcans, lacs & cités mayas",
        description:
          "Circuit d'Antigua au lac Atitlán puis à Tikal, entre marchés indigènes, ruines monumentales et paysages volcaniques.",
      },
      {
        title: "Combiné Guatemala & Mexique",
        description:
          "Le grand itinéraire maya de Palenque à Tikal, en passant par les Hautes Terres guatémaltèques.",
      },
      {
        title: "Rencontres & traditions mayas",
        description:
          "Immersion dans les villages du lac Atitlán, ateliers de tissage, cours de langue et nuits chez l'habitant.",
      },
    ],
  },
  {
    slug: "jamaique",
    name: "Jamaïque",
    continent: "Amériques",
    heroImg: "/generated/jamaique.jpg",
    intro:
      "Île du reggae et de la nonchalance caribéenne, la Jamaïque ne se résume pas à ses plages de rêve. Montagnes Bleues couvertes de plantations de café, cascades à escalader, rivières à descendre en radeau de bambou et une culture musicale qui a conquis la planète.",
    highlights: [
      "Les chutes de Dunn's River à Ocho Rios, à gravir les pieds dans l'eau",
      "Negril, sa plage de sept miles et ses couchers de soleil sur les falaises",
      "Les Montagnes Bleues et la route du café le plus réputé du monde",
      "Kingston, le musée Bob Marley et le berceau du reggae",
      "La lagune bleue de Port Antonio et la descente du Rio Grande en radeau",
    ],
    bestSeason:
      "De novembre à avril, hors saison des pluies et des cyclones : chaleur agréable, mer calme et ensoleillement maximal.",
    experiences: [
      {
        title: "Séjour balnéaire all inclusive",
        description:
          "Resort les pieds dans l'eau à Negril ou Montego Bay, sports nautiques, spa et excursions à la carte.",
      },
      {
        title: "Jamaïque nature & cascades",
        description:
          "Randonnées dans les Montagnes Bleues, baignade dans les cascades et descente de rivière en radeau de bambou.",
      },
      {
        title: "Sur la route du reggae",
        description:
          "Kingston, Nine Mile et Trench Town : une immersion dans la culture jamaïcaine et l'héritage de Bob Marley.",
      },
    ],
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    continent: "Amériques",
    heroImg: "/generated/bahamas.jpg",
    intro:
      "Sept cents îles et îlots posés sur des eaux d'un turquoise irréel : les Bahamas sont la carte postale des Caraïbes. Plages de sable rose, bancs de sable émergents, épaves à explorer et fonds marins parmi les plus limpides du monde composent un décor idéal pour un séjour de rêve.",
    highlights: [
      "Les eaux translucides des Exumas et ses célèbres cochons nageurs",
      "La plage de sable rose d'Harbour Island",
      "Nassau, ses forts coloniaux, son marché de paille et Paradise Island",
      "La plongée sur les blue holes et les récifs d'Andros",
      "La navigation en catamaran entre les îlots déserts de l'archipel",
    ],
    bestSeason:
      "De décembre à avril : temps sec, mer calme et températures idéales, hors saison cyclonique.",
    experiences: [
      {
        title: "Séjour balnéaire de luxe",
        description:
          "Resort face au lagon, plages privées, spa et sorties en bateau vers les îlots les plus confidentiels.",
      },
      {
        title: "Croisière dans les Exumas",
        description:
          "Navigation en catamaran entre bancs de sable, grottes marines et mouillages de rêve, en cabine ou en privatisation.",
      },
      {
        title: "Lune de miel aux Caraïbes",
        description:
          "Suite face à l'océan, dîner sur la plage et journée en bateau privatisé pour une parenthèse à deux hors du temps.",
      },
    ],
  },
  {
    slug: "antilles-francaises",
    name: "Antilles françaises",
    continent: "Amériques",
    heroImg: "/generated/antilles-francaises.jpg",
    intro:
      "Guadeloupe et Martinique : les Caraïbes en français, sans dépaysement administratif mais avec un dépaysement total. Plages de sable blanc ou noir, forêt tropicale, volcans, rhumeries centenaires et cuisine créole métissée composent un séjour ensoleillé à seulement huit heures de vol.",
    highlights: [
      "Les Saintes et Marie-Galante, îles préservées au large de la Guadeloupe",
      "La Soufrière, le parc national et les chutes du Carbet",
      "La plage des Salines et la presqu'île de Sainte-Anne en Martinique",
      "La route des rhums et les distilleries traditionnelles",
      "Le snorkeling dans la réserve Cousteau et les fonds blancs",
    ],
    bestSeason:
      "De décembre à avril, durant le carême : temps sec, mer chaude et ensoleillement optimal ; le carnaval anime février.",
    experiences: [
      {
        title: "Séjour plage & farniente",
        description:
          "Hôtel les pieds dans l'eau ou villa privée, plages de rêve, sorties en catamaran et détente au rythme créole.",
      },
      {
        title: "Combiné Guadeloupe & Martinique",
        description:
          "Deux îles, deux ambiances : randonnées volcaniques, distilleries de rhum et plages parmi les plus belles des Caraïbes.",
      },
      {
        title: "Nature, rhum & créolité",
        description:
          "Immersion entre forêt tropicale, jardins botaniques, tables créoles et rencontres avec les producteurs locaux.",
      },
    ],
  },
];
