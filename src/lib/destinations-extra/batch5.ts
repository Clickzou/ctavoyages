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
];
