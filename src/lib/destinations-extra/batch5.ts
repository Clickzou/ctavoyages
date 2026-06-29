import type { Destination } from "../destinations";

export const BATCH5: Destination[] = [
  {
    slug: "vietnam",
    name: "Vietnam",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Tout en longueur le long de la mer de Chine, le Vietnam déploie ses rizières en terrasses, ses baies hérissées de pitons karstiques et ses villes chargées d'histoire. Du tumulte des deux-roues de Hanoï à la sérénité du delta du Mékong, le pays conjugue paysages spectaculaires, héritage millénaire et gastronomie raffinée.",
    highlights: [
      "Une croisière parmi les pitons karstiques de la baie d'Halong",
      "Les rizières en terrasses et les villages ethniques de Sapa",
      "Le charme intemporel de Hoi An et ses lanternes colorées",
      "L'effervescence de Hanoï et de son vieux quartier",
      "La vie au fil de l'eau dans le delta du Mékong",
    ],
    bestSeason:
      "De novembre à avril pour le Sud, et de février à mai pour le Nord et le Centre, périodes les plus douces et les plus ensoleillées.",
    experiences: [
      {
        title: "Grand circuit Nord au Sud",
        description:
          "De Hanoï à Saïgon en passant par Hué et Hoi An, un itinéraire complet entre baies, rizières et cités impériales.",
      },
      {
        title: "Croisière baie d'Halong",
        description:
          "Une nuit à bord d'une jonque traditionnelle parmi les îlots de calcaire, entre kayak, baignade et couchers de soleil.",
      },
      {
        title: "Immersion ethnique à Sapa",
        description:
          "Randonnée dans les rizières en terrasses, rencontre avec les minorités montagnardes et nuit chez l'habitant.",
      },
    ],
  },
  {
    slug: "inde",
    name: "Inde",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Sous-continent aux mille visages, l'Inde envoûte par la profusion de ses couleurs, de ses parfums et de ses spiritualités. Du faste des palais du Rajasthan à la ferveur des rives du Gange, c'est un voyage sensoriel intense où chaque étape réserve son lot d'émerveillement.",
    highlights: [
      "Le Taj Mahal d'Agra, joyau immaculé de l'amour éternel",
      "Le Triangle d'or : Delhi, Agra et Jaipur la rose",
      "Les forts et palais du Rajasthan, de Jodhpur à Udaipur",
      "Les rituels sacrés sur les ghats de Varanasi",
      "Les rétrolittoraux du Kerala et ses backwaters paisibles",
    ],
    bestSeason:
      "De novembre à mars, durant la saison sèche et fraîche, idéale pour parcourir le Nord comme le Sud avant les fortes chaleurs.",
    experiences: [
      {
        title: "Triangle d'or & Rajasthan",
        description:
          "Un circuit emblématique entre Delhi, Agra et les cités fortifiées du Rajasthan, au cœur des palais et des bazars.",
      },
      {
        title: "Spiritualité sur le Gange",
        description:
          "Cérémonie de l'aarti, navigation à l'aube sur le fleuve sacré et découverte des temples millénaires de Varanasi.",
      },
      {
        title: "Douceur du Kerala",
        description:
          "Croisière sur les backwaters en house-boat, plantations de thé des Ghats et plages bordées de cocotiers.",
      },
    ],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Île scintillante au sud de l'Inde, le Sri Lanka concentre une diversité saisissante sur un territoire compact. Temples bouddhistes, plantations de thé en altitude, jungle peuplée d'éléphants et plages dorées se succèdent au gré d'un voyage d'une rare intensité.",
    highlights: [
      "Le rocher du Lion de Sigiriya et ses fresques anciennes",
      "Le triangle culturel : Anuradhapura, Polonnaruwa et Dambulla",
      "Les plantations de thé et le train panoramique de Nuwara Eliya",
      "La ville coloniale fortifiée de Galle",
      "Les safaris au parc de Yala, à la rencontre des léopards et éléphants",
    ],
    bestSeason:
      "De décembre à mars pour la côte sud et l'intérieur, et de mai à septembre pour la côte est, selon les régions parcourues.",
    experiences: [
      {
        title: "Circuit triangle culturel",
        description:
          "Ascension de Sigiriya, temples troglodytes de Dambulla et cités royales, au cœur de l'histoire cinghalaise.",
      },
      {
        title: "Trains & plantations de thé",
        description:
          "Le légendaire trajet ferroviaire à travers les montagnes verdoyantes, entre cueilleuses et fabriques de thé.",
      },
      {
        title: "Safari & plages du Sud",
        description:
          "Observation des léopards à Yala, puis détente sur les plages dorées de la côte sud face à l'océan Indien.",
      },
    ],
  },
  {
    slug: "bali",
    name: "Bali",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Île des Dieux au cœur de l'archipel indonésien, Bali enchante par ses rizières en escalier, ses temples perchés et sa spiritualité omniprésente. Entre l'art de vivre d'Ubud, les plages de surf du Sud et les volcans sacrés, l'île respire une harmonie singulière entre nature et culture.",
    highlights: [
      "Les rizières en terrasses de Tegallalang et de Jatiluwih",
      "Ubud, capitale culturelle et spirituelle de l'île",
      "Les temples emblématiques de Tanah Lot et Uluwatu",
      "L'ascension du mont Batur au lever du soleil",
      "Les plages et spots de surf de la presqu'île de Bukit",
    ],
    bestSeason:
      "D'avril à octobre, durant la saison sèche, pour profiter d'un climat ensoleillé propice aux activités comme à la détente.",
    experiences: [
      {
        title: "Immersion culturelle à Ubud",
        description:
          "Temples, ateliers d'artisans et rituels balinais au cœur des rizières, entre yoga et spiritualité.",
      },
      {
        title: "Voyage de noces idyllique",
        description:
          "Villa privée avec piscine, dîner romantique en bord de plage et escapade vers les îles Gili voisines.",
      },
      {
        title: "Aventure volcans & nature",
        description:
          "Ascension du mont Batur à l'aube, cascades cachées et baignade dans les sources d'eau chaude naturelles.",
      },
    ],
  },
  {
    slug: "ouzbekistan",
    name: "Ouzbékistan",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Au cœur de l'Asie centrale, l'Ouzbékistan ressuscite la magie de la route de la Soie. Coupoles turquoise, medersas ornées de mosaïques et caravansérails séculaires jalonnent un voyage hors du temps, entre cités-musées et hospitalité légendaire des steppes.",
    highlights: [
      "La place du Régistan et les coupoles de Samarcande",
      "La cité-musée de Khiva, écrin médiéval préservé",
      "Les medersas et minarets de Boukhara la sainte",
      "Les mausolées de la nécropole Chah-e-Zindeh",
      "Les bazars animés et l'artisanat de la soie et de la céramique",
    ],
    bestSeason:
      "D'avril à juin et de septembre à octobre, lorsque les températures sont douces et idéales pour parcourir les cités de la route de la Soie.",
    experiences: [
      {
        title: "Sur la route de la Soie",
        description:
          "Un circuit mythique reliant Khiva, Boukhara et Samarcande, au fil des caravansérails et des coupoles azur.",
      },
      {
        title: "Trésors de Samarcande",
        description:
          "Exploration approfondie du Régistan, des mausolées et des ateliers de tapis, joyaux de l'art timouride.",
      },
      {
        title: "Rencontres & artisanat",
        description:
          "Immersion dans les bazars, ateliers de soie et de céramique, et repas partagés au sein des familles ouzbèkes.",
      },
    ],
  },
  {
    slug: "mongolie",
    name: "Mongolie",
    continent: "Asie",
    heroImg:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Terre des grands espaces et des nomades, la Mongolie déploie ses steppes infinies, ses dunes du Gobi et ses lacs d'altitude sous un ciel immense. Au pays de Gengis Khan, le voyage se vit au rythme des chevaux et des yourtes, dans une nature sauvage d'une pureté absolue.",
    highlights: [
      "Les steppes infinies et la vie nomade sous la yourte",
      "Le désert de Gobi et ses dunes de Khongoryn Els",
      "Le parc national de Terelj et ses formations rocheuses",
      "Le lac Khövsgöl, la perle bleue du Nord",
      "Le festival du Naadam et ses jeux ancestraux",
    ],
    bestSeason:
      "De juin à septembre, durant l'été continental, pour profiter des steppes verdoyantes, des festivals et de nuits sous la yourte.",
    experiences: [
      {
        title: "Aventure dans le Gobi",
        description:
          "Traversée des dunes et des canyons du désert, nuits en campement nomade et rencontres avec les éleveurs de chameaux.",
      },
      {
        title: "Steppes & vie nomade",
        description:
          "Randonnées à cheval à travers les vallées, immersion dans une famille d'éleveurs et nuits authentiques sous la yourte.",
      },
      {
        title: "Festival du Naadam",
        description:
          "Lutte, tir à l'arc et courses de chevaux : plongée au cœur de la plus grande fête traditionnelle mongole.",
      },
    ],
  },
];
