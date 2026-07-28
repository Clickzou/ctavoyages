import type { Destination } from "../destinations";

export const BATCH2: Destination[] = [
  {
    slug: "afrique-du-sud",
    name: "Afrique du Sud",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Nation arc-en-ciel aux mille visages, l'Afrique du Sud concentre en un seul pays la grande faune africaine, des vignobles réputés et des paysages côtiers spectaculaires. Du sommet de Table Mountain aux savanes du parc Kruger, c'est une terre de contrastes saisissants où l'aventure se conjugue au raffinement.",
    highlights: [
      "Le safari Big Five dans le parc national Kruger et ses réserves privées",
      "Le Cap, Table Mountain et la pointe du Cap de Bonne-Espérance",
      "La route des vins de Stellenbosch et Franschhoek",
      "La Route des Jardins le long de la côte de l'océan Indien",
      "Les colonies de manchots de Boulders Beach et l'observation des baleines à Hermanus",
    ],
    bestSeason:
      "De mai à septembre, durant l'hiver austral sec, pour des safaris optimaux ; les mois de septembre à novembre offrent un climat doux idéal pour le Cap.",
    experiences: [
      {
        title: "Safari & réserves privées",
        description:
          "À la recherche des Big Five dans le Kruger, hébergement en lodge d'exception et sorties guidées au lever et au coucher du soleil.",
      },
      {
        title: "Le Cap & route des vins",
        description:
          "Découverte de la mère des villes sud-africaines, ascension de Table Mountain et dégustations dans les domaines viticoles de Stellenbosch.",
      },
      {
        title: "Autotour Route des Jardins",
        description:
          "Un itinéraire panoramique le long de la côte, entre plages sauvages, lagons et villages pittoresques jusqu'à Port Elizabeth.",
      },
    ],
  },
  {
    slug: "botswana",
    name: "Botswana",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Sanctuaire de la faune sauvage par excellence, le Botswana mise sur un tourisme d'exception, intime et préservé. Entre les méandres du delta de l'Okavango et l'immensité des plaines du Kalahari, ce pays offre certaines des plus belles expériences de safari du continent, loin des foules.",
    highlights: [
      "Le delta de l'Okavango et ses safaris en mokoro, la pirogue traditionnelle",
      "Le parc national de Chobe et ses gigantesques troupeaux d'éléphants",
      "Les vastes étendues sauvages du désert du Kalahari",
      "L'observation des fauves dans la réserve de Moremi",
      "Les camps de toile de luxe au cœur d'une nature intacte",
    ],
    bestSeason:
      "De mai à octobre, durant la saison sèche, lorsque la faune se concentre autour des points d'eau et que l'observation est à son apogée.",
    experiences: [
      {
        title: "Safari de luxe dans l'Okavango",
        description:
          "Survol en avion léger, navigation en mokoro et nuits en camp de toile raffiné au cœur du delta inondé.",
      },
      {
        title: "Aventure Chobe & éléphants",
        description:
          "Safaris en 4x4 et croisières sur le fleuve Chobe, à la rencontre des plus grandes concentrations d'éléphants d'Afrique.",
      },
      {
        title: "Combiné delta & chutes Victoria",
        description:
          "L'alliance des grands espaces botswanais et de la majesté des chutes Victoria, à la frontière du Zimbabwe.",
      },
    ],
  },
  {
    slug: "egypte",
    name: "Égypte",
    continent: "Afrique",
    heroImg:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600&h=900&fit=crop&auto=format",
    intro:
      "Berceau de l'une des plus fascinantes civilisations de l'humanité, l'Égypte déploie ses temples millénaires le long du Nil nourricier. Des pyramides de Gizeh aux trésors de la vallée des Rois, le pays des pharaons mêle grandeur antique, croisière mythique et eaux cristallines de la mer Rouge.",
    highlights: [
      "Les pyramides de Gizeh et l'énigmatique Sphinx",
      "La croisière sur le Nil entre Louxor et Assouan",
      "La vallée des Rois et les temples de Karnak et Louxor",
      "Le temple d'Abou Simbel, sculpté dans la roche",
      "La plongée et le snorkeling dans les récifs de la mer Rouge",
    ],
    bestSeason:
      "D'octobre à avril, pour échapper aux fortes chaleurs estivales et profiter d'un climat doux, idéal pour les visites et la croisière.",
    experiences: [
      {
        title: "Croisière sur le Nil",
        description:
          "De Louxor à Assouan, une navigation au fil de l'eau ponctuée de visites des temples antiques et des sites pharaoniques majeurs.",
      },
      {
        title: "Le Caire & trésors pharaoniques",
        description:
          "Découverte des pyramides, du Sphinx et des collections du Grand Musée égyptien au cœur de la capitale millénaire.",
      },
      {
        title: "Combiné Nil & mer Rouge",
        description:
          "L'alliance parfaite entre l'émerveillement des temples antiques et la détente balnéaire sur les rivages de Hurghada.",
      },
    ],
  },
];
