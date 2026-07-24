import type { Destination } from "../destinations";

/** Lot 8 — Asie : pays ajoutés (Indonésie remplace Bali, Malaisie, Cambodge…). */
export const BATCH8: Destination[] = [
  {
    slug: "indonesie",
    name: "Indonésie",
    continent: "Asie",
    heroImg: "/generated/indonesie.jpg",
    intro:
      "Plus grand archipel du monde, l'Indonésie aligne plus de 17 000 îles, des rizières en terrasses de Bali aux volcans fumants de Java, des temples millénaires aux fonds marins les plus riches de la planète. Spiritualité, nature démesurée et hospitalité chaleureuse composent un voyage aux mille visages.",
    highlights: [
      "Bali : rizières d'Ubud, temples suspendus et plages du sud",
      "Le temple de Borobudur et les palais royaux de Java",
      "Le lever de soleil sur le volcan Bromo et le cratère bleu d'Ijen",
      "Les dragons de Komodo et la plongée dans les eaux de Flores",
      "Les Gili, Raja Ampat et les jardins de corail parmi les plus beaux du monde",
    ],
    bestSeason:
      "D'avril à octobre, durant la saison sèche : un ciel dégagé idéal pour les volcans, les rizières et la plongée.",
    experiences: [
      {
        title: "Java & Bali, temples et volcans",
        description:
          "Un circuit emblématique de Borobundur au Bromo puis à Ubud, entre sites sacrés, villages d'artisans et rizières en terrasses.",
      },
      {
        title: "Îles & plongée",
        description:
          "Navigation entre Komodo, Flores et les Gili, à la rencontre des dragons, des raies manta et des récifs préservés.",
      },
      {
        title: "Voyage de noces balinais",
        description:
          "Villa privée avec piscine face aux rizières, soins traditionnels, dîner sur la plage et excursions privatisées.",
      },
    ],
  },
  {
    slug: "malaisie",
    name: "Malaisie",
    continent: "Asie",
    heroImg: "/generated/malaisie.jpg",
    intro:
      "Carrefour des cultures malaise, chinoise et indienne, la Malaisie surprend par sa diversité. Gratte-ciel futuristes de Kuala Lumpur, maisons coloniales de Penang, jungle primaire de Bornéo et îles de sable blanc : peu de pays offrent autant de contrastes sur un même voyage.",
    highlights: [
      "Kuala Lumpur, ses tours Petronas et ses marchés de nuit",
      "George Town à Penang, classée UNESCO, capitale du street food",
      "La jungle de Bornéo et l'observation des orangs-outans à Sepilok",
      "Les îles de Langkawi, Perhentian et Tioman aux eaux turquoise",
      "Les plantations de thé et la fraîcheur des Cameron Highlands",
    ],
    bestSeason:
      "De décembre à février pour la côte ouest et les îles de Langkawi, de mai à septembre pour la côte est et Bornéo.",
    experiences: [
      {
        title: "Villes, jungle & plages",
        description:
          "Un circuit complet de Kuala Lumpur à Penang puis vers les îles, entre patrimoine colonial, nature luxuriante et farniente.",
      },
      {
        title: "Aventure à Bornéo",
        description:
          "Rencontre avec les orangs-outans, croisière sur la rivière Kinabatangan et nuit en lodge au cœur de la forêt primaire.",
      },
      {
        title: "Saveurs & patrimoine",
        description:
          "Immersion gourmande à George Town et Malacca : street food, temples, maisons de marchands et fresques urbaines.",
      },
    ],
  },
  {
    slug: "cambodge",
    name: "Cambodge",
    continent: "Asie",
    heroImg: "/generated/cambodge.jpg",
    intro:
      "Terre du sourire khmer, le Cambodge abrite l'un des plus grands sites archéologiques du monde. Au-delà des temples d'Angkor enlacés par la jungle, le pays révèle des villages flottants sur le Tonlé Sap, une campagne d'un vert intense et des plages encore confidentielles au sud.",
    highlights: [
      "Angkor Wat au lever du soleil et les visages du Bayon",
      "Ta Prohm, le temple envahi par les racines de fromagers géants",
      "Les villages flottants et la vie au fil du lac Tonlé Sap",
      "Phnom Penh, son palais royal et son devoir de mémoire",
      "Les plages tranquilles de Kep, Kampot et l'archipel de Koh Rong",
    ],
    bestSeason:
      "De novembre à mars, durant la saison sèche et fraîche : les conditions idéales pour visiter les temples d'Angkor.",
    experiences: [
      {
        title: "Temples d'Angkor & Tonlé Sap",
        description:
          "Plusieurs jours d'exploration des temples khmers avec guide francophone, puis découverte des villages lacustres en pirogue.",
      },
      {
        title: "Combiné Vietnam & Cambodge",
        description:
          "De la baie d'Along au Mékong jusqu'à Angkor : le grand itinéraire indochinois, en circuit privé ou en petit groupe.",
      },
      {
        title: "Temples & plages du sud",
        description:
          "L'alliance des sites archéologiques et de la détente sur les îles du golfe de Thaïlande, encore préservées du tourisme de masse.",
      },
    ],
  },
  {
    slug: "laos",
    name: "Laos",
    continent: "Asie",
    heroImg: "/generated/laos.jpg",
    intro:
      "Le Laos avance à son rythme, celui du Mékong. Pays sans littoral au cœur de l'Indochine, il séduit par la sérénité de Luang Prabang, ses moines en robe safran, ses cascades turquoise et ses montagnes brumeuses. Une destination pour voyageurs en quête d'authenticité et de lenteur.",
    highlights: [
      "Luang Prabang, classée UNESCO, et l'aumône matinale des moines",
      "Les cascades turquoise de Kuang Si et les grottes de Pak Ou",
      "La descente du Mékong en bateau lent entre villages et forêts",
      "La Plaine des Jarres et les montagnes de Phonsavan",
      "Les 4 000 îles du sud et le plateau des Bolovens, terre de café",
    ],
    bestSeason:
      "De novembre à mars, durant la saison sèche : un climat doux, parfait pour la navigation sur le Mékong et les randonnées.",
    experiences: [
      {
        title: "Le Laos au fil du Mékong",
        description:
          "Croisière en bateau traditionnel entre Houeisay et Luang Prabang, avec escales dans les villages ethniques riverains.",
      },
      {
        title: "Immersion à Luang Prabang",
        description:
          "Temples dorés, marché de nuit, cascades et cours de cuisine lao : quelques jours au rythme paisible de la cité royale.",
      },
      {
        title: "Trek & rencontres ethniques",
        description:
          "Randonnée dans les montagnes du nord, nuits chez l'habitant et découverte des traditions hmong et khmu.",
      },
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    continent: "Asie",
    heroImg: "/generated/philippines.jpg",
    intro:
      "7 641 îles, des lagons émeraude cernés de falaises karstiques, des rizières sculptées depuis deux mille ans et l'un des peuples les plus accueillants d'Asie : les Philippines sont un archipel de superlatifs, encore préservé des grands flux touristiques.",
    highlights: [
      "Palawan : les lagons d'El Nido et la rivière souterraine de Puerto Princesa",
      "Coron et ses épaves de la Seconde Guerre mondiale à explorer en plongée",
      "Les rizières en terrasses de Banaue, classées à l'UNESCO",
      "Les collines de chocolat et les tarsiers de Bohol",
      "La plage de sable blanc de Boracay et la plongée à Siargao",
    ],
    bestSeason:
      "De novembre à mai, durant la saison sèche : mer calme, ciel dégagé et conditions optimales pour la plongée.",
    experiences: [
      {
        title: "Island hopping à Palawan",
        description:
          "Navigation entre les lagons d'El Nido et l'archipel de Bacuit, criques secrètes, snorkeling et nuits en bord de plage.",
      },
      {
        title: "Plongée & fonds marins",
        description:
          "Un itinéraire dédié aux plongeurs : épaves de Coron, récifs de Tubbataha et rencontres avec les tortues et requins-baleines.",
      },
      {
        title: "Rizières & culture du Nord",
        description:
          "Découverte des terrasses de Banaue et Batad, randonnées entre villages ifugao et immersion dans la vie des Cordillères.",
      },
    ],
  },
  {
    slug: "coree-du-sud",
    name: "Corée du Sud",
    continent: "Asie",
    heroImg: "/generated/coree-du-sud.jpg",
    intro:
      "Entre palais royaux et néons futuristes, la Corée du Sud fascine par son mélange détonnant de tradition et d'ultramodernité. Séoul la trépidante, les temples bouddhistes nichés en montagne, la gastronomie généreuse et l'île volcanique de Jeju composent une destination montante d'Asie.",
    highlights: [
      "Séoul : palais de Gyeongbokgung, village hanok de Bukchon et quartiers branchés",
      "Gyeongju, musée à ciel ouvert de l'ancien royaume de Silla",
      "Les temples de montagne et l'expérience du temple stay",
      "L'île volcanique de Jeju, ses cratères et ses plongeuses haenyeo",
      "La gastronomie coréenne : barbecue, kimchi et marchés de rue de Busan",
    ],
    bestSeason:
      "D'avril à juin pour les cerisiers en fleurs et la douceur printanière, ou de septembre à novembre pour les couleurs d'automne.",
    experiences: [
      {
        title: "Séoul, tradition & modernité",
        description:
          "Palais royaux, quartiers créatifs, street food et vue panoramique depuis la tour Namsan : la capitale sous toutes ses facettes.",
      },
      {
        title: "Circuit culturel Corée",
        description:
          "De Séoul à Busan en train à grande vitesse, avec étapes à Gyeongju, Andong et dans les temples de montagne.",
      },
      {
        title: "Nature & île de Jeju",
        description:
          "Randonnée sur le volcan Hallasan, sentiers côtiers Olle, plages de sable noir et gastronomie insulaire.",
      },
    ],
  },
  {
    slug: "chine",
    name: "Chine",
    continent: "Asie",
    heroImg: "/generated/chine.jpg",
    intro:
      "Empire de tous les superlatifs, la Chine déroule cinq mille ans d'histoire et des paysages d'une variété inouïe. De la Grande Muraille aux gratte-ciel de Shanghai, des pics karstiques de Guilin aux montagnes sacrées du Sichuan, chaque étape est un changement de monde.",
    highlights: [
      "La Grande Muraille et la Cité interdite à Pékin",
      "L'armée de terre cuite de Xi'an et l'ancienne route de la Soie",
      "Les pics karstiques de Guilin et la rivière Li en croisière",
      "Shanghai, le Bund et les jardins classiques de Suzhou",
      "Les pandas géants de Chengdu et les rizières en terrasses du Yunnan",
    ],
    bestSeason:
      "D'avril à juin et de septembre à novembre : des températures agréables et une lumière idéale sur les grands sites.",
    experiences: [
      {
        title: "Grand circuit impérial",
        description:
          "Pékin, Xi'an et Shanghai reliées en train à grande vitesse, entre Grande Muraille, armée de terre cuite et modernité.",
      },
      {
        title: "Paysages du Sud",
        description:
          "Croisière sur la rivière Li, rizières en terrasses de Longji et villages ethniques du Guangxi et du Yunnan.",
      },
      {
        title: "Chine sur mesure en privé",
        description:
          "Guide francophone privatif, hébergements de caractère et rythme adapté pour découvrir la Chine en toute sérénité.",
      },
    ],
  },
];
