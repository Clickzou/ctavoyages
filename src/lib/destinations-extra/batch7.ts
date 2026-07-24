import type { Destination } from "../destinations";

/** Lot 7 — Europe : pays ajoutés / regroupés (Royaume-Uni, Pays-Bas, Danemark…). */
export const BATCH7: Destination[] = [
  {
    slug: "royaume-uni",
    name: "Royaume-Uni",
    continent: "Europe",
    heroImg: "/generated/royaume-uni.jpg",
    intro:
      "De l'effervescence de Londres aux Highlands d'Écosse, le Royaume-Uni conjugue patrimoine royal, campagnes verdoyantes et villes créatives. Châteaux perchés, pubs chaleureux, côtes sauvages du pays de Galles et musées de rang mondial : quatre nations, une infinité d'atmosphères, à moins de deux heures de vol.",
    highlights: [
      "Londres : Big Ben, Tower Bridge, British Museum et marchés branchés",
      "Les Highlands écossais, le loch Ness et la route panoramique de Skye",
      "Les universités d'Oxford et Cambridge et les villages des Cotswolds",
      "Le pays de Galles : châteaux de Conwy et Caernarfon, parc de Snowdonia",
      "Édimbourg et son château, Bath et ses thermes romains, la côte de Cornouailles",
    ],
    bestSeason:
      "De mai à septembre, pour des journées longues, des jardins en fleurs et un climat plus clément ; Londres et les grandes villes se visitent toute l'année.",
    experiences: [
      {
        title: "City break à Londres",
        description:
          "Un week-end prolongé entre monuments emblématiques, musées gratuits, comédies musicales du West End et quartiers créatifs.",
      },
      {
        title: "Road trip Écosse & Highlands",
        description:
          "Autotour d'Édimbourg à l'île de Skye, entre lochs, distilleries de whisky, châteaux et paysages de landes à perte de vue.",
      },
      {
        title: "Angleterre & pays de Galles en famille",
        description:
          "Châteaux médiévaux, studios Harry Potter, villages des Cotswolds et randonnées dans le parc national de Snowdonia.",
      },
    ],
  },
  {
    slug: "pays-bas",
    name: "Pays-Bas",
    continent: "Europe",
    heroImg: "/generated/pays-bas.jpg",
    intro:
      "Pays des canaux, des moulins et des champs de tulipes, les Pays-Bas cultivent un art de vivre décontracté et créatif. D'Amsterdam la bohème aux villages de pêcheurs du Zuiderzee, en passant par l'architecture audacieuse de Rotterdam, tout se parcourt facilement à vélo ou au fil de l'eau.",
    highlights: [
      "Les canaux d'Amsterdam classés à l'UNESCO et le quartier du Jordaan",
      "Les jardins de Keukenhof et les champs de tulipes au printemps",
      "Le Rijksmuseum, le musée Van Gogh et la maison d'Anne Frank",
      "Les moulins de Kinderdijk et le village préservé de Zaanse Schans",
      "Rotterdam et son architecture contemporaine, Delft et ses faïences bleues",
    ],
    bestSeason:
      "D'avril à mai pour la floraison spectaculaire des tulipes, ou de juin à septembre pour les terrasses au bord des canaux et les balades à vélo.",
    experiences: [
      {
        title: "Week-end romantique à Amsterdam",
        description:
          "Croisière privée sur les canaux, hôtel de charme dans une maison à pignon et dîner intimiste au cœur du Jordaan.",
      },
      {
        title: "Tulipes & moulins au printemps",
        description:
          "Escapade dans les champs de fleurs du Bollenstreek, visite des jardins de Keukenhof et découverte des moulins de Kinderdijk.",
      },
      {
        title: "Les Pays-Bas à vélo",
        description:
          "Itinéraire doux entre polders, digues et villages traditionnels, avec étapes gourmandes et nuits en maison d'hôtes.",
      },
    ],
  },
  {
    slug: "danemark",
    name: "Danemark",
    continent: "Europe",
    heroImg: "/generated/danemark.jpg",
    intro:
      "Berceau du hygge et du design scandinave, le Danemark séduit par sa douceur de vivre et son élégance discrète. Entre les façades colorées de Nyhavn, les châteaux de contes de fées, les plages sauvages du Jutland et une gastronomie parmi les plus créatives d'Europe, le royaume danois se découvre à taille humaine.",
    highlights: [
      "Copenhague : Nyhavn, les jardins de Tivoli et le quartier design de Vesterbro",
      "Le château de Kronborg à Elseneur, décor du Hamlet de Shakespeare",
      "La nouvelle cuisine nordique et les marchés gourmands de la capitale",
      "Les dunes et les plages infinies de la côte ouest du Jutland",
      "Odense, ville natale d'Andersen, et les îles paisibles de Fionie et Møn",
    ],
    bestSeason:
      "De mai à septembre, pour des journées très longues, un climat doux et des terrasses animées ; décembre pour les marchés de Noël de Copenhague.",
    experiences: [
      {
        title: "City break design à Copenhague",
        description:
          "Architecture contemporaine, boutiques de créateurs, tables gastronomiques et balades à vélo comme un vrai Copenhaguois.",
      },
      {
        title: "Châteaux & côtes du Danemark",
        description:
          "Autotour entre châteaux royaux, villages de pêcheurs colorés et grandes plages de la mer du Nord.",
      },
      {
        title: "Escapade hygge en famille",
        description:
          "Parcs d'attractions, musées interactifs, plages de sable et hébergements chaleureux : le Danemark côté douceur de vivre.",
      },
    ],
  },
  {
    slug: "finlande",
    name: "Finlande",
    continent: "Europe",
    heroImg: "/generated/finlande.jpg",
    intro:
      "Pays des mille lacs et du silence, la Finlande offre deux visages : l'été des nuits blanches et des forêts sans fin, l'hiver des aurores boréales et de la neige immaculée. De Helsinki la design au Grand Nord lapon, c'est une immersion nature où le sauna rythme la vie quotidienne.",
    highlights: [
      "Les aurores boréales et les nuits en igloo de verre en Laponie",
      "Le village du Père Noël à Rovaniemi et les balades en traîneau à chiens",
      "Helsinki : architecture design, sauna urbain et marché du port",
      "La région des lacs de Saimaa, ses mökki au bord de l'eau et ses phoques annelés",
      "L'archipel de Turku et ses milliers d'îles à explorer en été",
    ],
    bestSeason:
      "De décembre à mars pour la neige, les activités polaires et les aurores boréales ; de juin à août pour le soleil de minuit et les lacs.",
    experiences: [
      {
        title: "Aurores boréales & igloo de verre",
        description:
          "Séjour au-delà du cercle polaire : chasse aux aurores guidée, motoneige et nuit sous une coupole de verre face au ciel étoilé.",
      },
      {
        title: "Laponie en famille",
        description:
          "Traîneau à chiens, rencontre avec les rennes, visite du Père Noël et journées de neige pour petits et grands.",
      },
      {
        title: "Lacs, forêts & sauna en été",
        description:
          "Chalet au bord de l'eau, canoë sous le soleil de minuit, cueillette de baies et sauna traditionnel au coucher du soleil.",
      },
    ],
  },
  {
    slug: "autriche",
    name: "Autriche",
    continent: "Europe",
    heroImg: "/generated/autriche.jpg",
    intro:
      "Entre palais impériaux et sommets alpins, l'Autriche cultive l'art de vivre à la viennoise. Valses et cafés historiques à Vienne, villages de carte postale au bord des lacs du Salzkammergut, routes panoramiques du Tyrol : le pays de Mozart conjugue culture raffinée et grands paysages de montagne.",
    highlights: [
      "Vienne : château de Schönbrunn, Hofburg, opéra et cafés historiques",
      "Salzbourg, ville natale de Mozart, et sa forteresse dominant la vieille ville",
      "Les lacs du Salzkammergut et le village d'Hallstatt classé à l'UNESCO",
      "La route alpine du Grossglockner et les vallées du Tyrol",
      "Innsbruck, la vallée de la Wachau et ses vignobles en terrasses sur le Danube",
    ],
    bestSeason:
      "De mai à septembre pour la randonnée, les lacs et les villes ; de décembre à mars pour le ski et les marchés de Noël.",
    experiences: [
      {
        title: "Vienne impériale & musicale",
        description:
          "Palais des Habsbourg, concerts classiques, musées d'exception et pauses gourmandes dans les cafés viennois centenaires.",
      },
      {
        title: "Lacs & Alpes autrichiennes",
        description:
          "Autotour de Salzbourg au Tyrol : villages au bord des lacs, cols panoramiques et randonnées face aux sommets enneigés.",
      },
      {
        title: "Marchés de Noël & tradition",
        description:
          "Escapade hivernale entre chalets illuminés, vin chaud, traîneau dans la neige et hôtels de charme au pied des pistes.",
      },
    ],
  },
  {
    slug: "suisse",
    name: "Suisse",
    continent: "Europe",
    heroImg: "/generated/suisse.jpg",
    intro:
      "Sommets mythiques, lacs d'un bleu profond et trains panoramiques parmi les plus beaux du monde : la Suisse est un concentré d'Alpes à ciel ouvert. Du Cervin à la Jungfrau, des vignobles du Lavaux aux villages de chalets fleuris, tout y est d'une précision et d'une beauté saisissantes.",
    highlights: [
      "Le Cervin et le village sans voiture de Zermatt",
      "Le Glacier Express et le Bernina Express, trains panoramiques légendaires",
      "La région de la Jungfrau : Grindelwald, Lauterbrunnen et ses cascades",
      "Lucerne, son pont de bois et le lac des Quatre-Cantons",
      "Les vignobles en terrasses du Lavaux et la Riviera du lac Léman",
    ],
    bestSeason:
      "De juin à septembre pour la randonnée et les cols alpins ; de décembre à mars pour le ski et les paysages enneigés.",
    experiences: [
      {
        title: "Trains panoramiques des Alpes",
        description:
          "Un itinéraire ferroviaire d'exception entre Zermatt, Saint-Moritz et l'Oberland bernois, en voitures vitrées face aux glaciers.",
      },
      {
        title: "Randonnée face au Cervin",
        description:
          "Séjour actif au cœur des Alpes valaisannes : sentiers d'altitude, refuges de montagne et panoramas sur les 4 000 mètres.",
      },
      {
        title: "Lacs & douceur helvétique",
        description:
          "Escapade entre Lucerne, Interlaken et le Léman : croisières, vignobles en terrasses et hôtels de charme au bord de l'eau.",
      },
    ],
  },
];
