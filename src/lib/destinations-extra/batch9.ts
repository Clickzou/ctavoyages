import type { Destination } from "../destinations";

/** Lot 9 — Afrique / Océan Indien : pays ajoutés (Sénégal, Cap-Vert, Tunisie). */
export const BATCH9: Destination[] = [
  {
    slug: "senegal",
    name: "Sénégal",
    continent: "Afrique",
    heroImg: "/generated/senegal.jpg",
    intro:
      "Pays de la teranga, cette hospitalité légendaire, le Sénégal est une porte d'entrée idéale vers l'Afrique de l'Ouest. À cinq heures de vol seulement, il conjugue plages de l'Atlantique, delta du Saloum, savane du Niokolo-Koba et une scène musicale et culinaire d'une richesse rare.",
    highlights: [
      "L'île de Gorée et sa maison des Esclaves, classées à l'UNESCO",
      "Saint-Louis, ancienne capitale coloniale au charme suranné",
      "Le delta du Saloum, ses bolongs et ses villages de pêcheurs",
      "Le lac Rose, le désert de Lompoul et la Petite Côte",
      "Les réserves de Bandia et du Niokolo-Koba pour l'observation de la faune",
    ],
    bestSeason:
      "De novembre à mai, durant la saison sèche : chaleur douce, ciel dégagé et conditions idéales pour la découverte comme pour la plage.",
    experiences: [
      {
        title: "Découverte du Sénégal authentique",
        description:
          "Circuit de Dakar à Saint-Louis puis au Saloum, entre patrimoine, villages de brousse et rencontres avec les habitants.",
      },
      {
        title: "Séjour balnéaire Petite Côte",
        description:
          "Détente sur les plages de Saly et Somone, sorties en pirogue et excursions à la journée vers les réserves animalières.",
      },
      {
        title: "Delta du Saloum & nature",
        description:
          "Navigation entre les bolongs de mangrove, observation des oiseaux et nuits en campement écologique au bord de l'eau.",
      },
    ],
  },
  {
    slug: "cap-vert",
    name: "Cap-Vert",
    continent: "Afrique",
    heroImg: "/generated/cap-vert.jpg",
    intro:
      "Dix îles posées au large du Sénégal, entre Afrique et Atlantique : le Cap-Vert offre le soleil toute l'année, des plages de sable blond, des volcans à gravir et une âme musicale héritée de la morna. Un archipel où la douceur de vivre porte un nom : la morabeza.",
    highlights: [
      "Les plages et les dunes de Sal et Boa Vista, paradis du kitesurf",
      "Les sentiers vertigineux de Santo Antão au-dessus des vallées cultivées",
      "Le volcan Pico do Fogo et ses villages perchés dans la caldeira",
      "Mindelo à São Vicente, capitale culturelle et berceau de Cesária Évora",
      "L'observation des tortues marines et des baleines à bosse en saison",
    ],
    bestSeason:
      "Toute l'année grâce à un climat doux et sec ; de novembre à juin pour éviter les rares pluies, de juillet à octobre pour la ponte des tortues.",
    experiences: [
      {
        title: "Séjour balnéaire à Sal ou Boa Vista",
        description:
          "Plages infinies, hôtels en bord de mer, sports nautiques et excursions vers les salines et les dunes de sable.",
      },
      {
        title: "Randonnées à Santo Antão",
        description:
          "Trek entre crêtes volcaniques et vallées luxuriantes, nuits en maisons d'hôtes et rencontres avec les cultivateurs de canne.",
      },
      {
        title: "Îles & musique cap-verdienne",
        description:
          "Un itinéraire multi-îles au rythme de la morna et de la coladeira, entre Mindelo, Fogo et Santiago.",
      },
    ],
  },
  {
    slug: "tunisie",
    name: "Tunisie",
    continent: "Afrique",
    heroImg: "/generated/tunisie.jpg",
    intro:
      "À deux heures et demie de vol, la Tunisie condense la Méditerranée, le désert et trois mille ans d'histoire. Des ruines de Carthage aux oasis du Sahara, des médinas animées aux plages de Djerba, elle offre un dépaysement immédiat et une hospitalité sans façon.",
    highlights: [
      "Le site antique de Carthage et le village bleu et blanc de Sidi Bou Saïd",
      "La médina de Tunis et l'amphithéâtre romain d'El Jem",
      "Kairouan, ville sainte, et sa Grande Mosquée",
      "Les oasis de Tozeur, le Chott el-Jérid et les décors de Star Wars",
      "Les plages de Djerba, Hammamet et les thalassos réputées du littoral",
    ],
    bestSeason:
      "D'avril à juin et de septembre à octobre pour la douceur ; l'été pour la plage, l'hiver pour le désert et les circuits culturels.",
    experiences: [
      {
        title: "Circuit antique & médinas",
        description:
          "De Carthage à El Jem en passant par Kairouan et Dougga : les grands sites romains et islamiques de Tunisie.",
      },
      {
        title: "Sahara & oasis de montagne",
        description:
          "Nuit sous tente dans le désert, oasis de Chebika et Tamerza, ksour berbères et grand chott salé.",
      },
      {
        title: "Séjour balnéaire & thalasso",
        description:
          "Farniente sur les plages de Djerba ou Hammamet, soins en centre de thalassothérapie et découverte des souks.",
      },
    ],
  },
];
