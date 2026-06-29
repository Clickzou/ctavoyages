"use client";

import { useMemo, useState } from "react";
import { MAP_DESTINATIONS } from "@/lib/map-destinations";

type CardType = "destination" | "sport";
type Continent = "asie" | "afrique" | "ameriques" | "europe";

type DestCard = {
  badge: string;
  continent: Continent;
  type: CardType;
  href: string;
  img: string;
  alt: string;
  title: string;
  desc: string;
  cta: string;
};

const CONTINENT_NAMES: Record<Continent, string> = {
  asie: "Asie",
  afrique: "Afrique",
  ameriques: "Amériques",
  europe: "Europe",
};

/** Destinations déjà listées en dur ci-dessous (évite les doublons). */
const EXISTING_GRID_IDS = new Set([
  "japon", "thailande", "maroc", "ile-maurice", "seychelles", "zanzibar",
  "canada", "costa-rica", "laponie", "londres", "amsterdam", "porto", "rome",
]);
/** Toutes les autres destinations (fiches riches) ajoutées automatiquement. */
const EXTRA_DEST_CARDS: DestCard[] = MAP_DESTINATIONS.filter(
  (m) => !EXISTING_GRID_IDS.has(m.id),
).map((m) => ({
  badge: m.name.toUpperCase(),
  continent: m.continent,
  type: "destination" as const,
  href: m.href,
  img: m.img,
  alt: `Voyage ${m.name}`,
  title: m.name,
  desc: m.desc,
  cta: "DÉCOUVRIR",
}));

const CARDS: DestCard[] = [
  // ── DESTINATIONS VOYAGE ──
  {
    badge: "JAPON",
    continent: "asie",
    type: "destination",
    href: "/destination-japon",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure au Japon",
    title: "Japon : Le pays impérial",
    desc: "Vivez une immersion raffinée entre temples ancestraux, quartiers effervescents et nuits en ryokan traditionnel.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "THAÏLANDE",
    continent: "asie",
    type: "destination",
    href: "/destination-thailande",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage en Thaïlande",
    title: "Thaïlande : temples dorés et îles turquoise",
    desc: "Partez entre temples dorés, plages tropicales et douceur de vivre au cœur de l'Asie du Sud-Est.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "MAROC",
    continent: "afrique",
    type: "destination",
    href: "/destination/maroc",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage au Maroc",
    title: "Maroc : Marrakech et désert du Sahara",
    desc: "Laissez-vous séduire par les médinas animées, les paysages du désert et le charme d'un riad ou d'une kasbah.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "ÎLE MAURICE",
    continent: "afrique",
    type: "destination",
    href: "/destination/ile-maurice",
    img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage à l'Île Maurice",
    title: "Île Maurice : douceur tropicale et lagons",
    desc: "Profitez d'un séjour entre lagons turquoise, plages idylliques et adresses de charme en bord d'océan.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "SEYCHELLES",
    continent: "afrique",
    type: "destination",
    href: "/destination/seychelles",
    img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage aux Seychelles",
    title: "Seychelles : rochers de granit et eaux cristallines",
    desc: "Offrez-vous une parenthèse paradisiaque entre nature préservée, plages de rêve et hébergements confidentiels.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "ZANZIBAR",
    continent: "afrique",
    type: "destination",
    href: "/destination/zanzibar",
    img: "/assets/images/tanzanie.jpg",
    alt: "Voyage à Zanzibar",
    title: "Zanzibar : plages et Stone Town",
    desc: "Vivez une escapade envoûtante entre plages de sable blanc, culture swahilie et ruelles historiques de Stone Town.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "CANADA",
    continent: "ameriques",
    type: "destination",
    href: "/destination/canada",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage au Canada",
    title: "Canada : Rocheuses, Banff & Québec",
    desc: "Explorez l'immensité canadienne entre grands espaces, forêts majestueuses et villes chaleureuses.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "COSTA RICA",
    continent: "ameriques",
    type: "destination",
    href: "/destination/costa-rica",
    img: "/assets/images/costa_rica.jpg",
    alt: "Voyage au Costa Rica",
    title: "Costa Rica : volcans et forêts tropicales",
    desc: "Partez à l'aventure entre volcans, jungle luxuriante et écolodges nichés au cœur de la nature.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "LAPONIE",
    continent: "europe",
    type: "destination",
    href: "/destination/laponie",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage en Laponie",
    title: "Laponie : Aurores boréales & rennes",
    desc: "Vivez une expérience magique entre aurores boréales, étendues enneigées et nuit en igloo hôtel.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "LONDRES",
    continent: "europe",
    type: "destination",
    href: "/destination/londres",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Londres",
    title: "Londres : Big Ben, musées & gastronomie",
    desc: "Découvrez une capitale vibrante où patrimoine, culture et art de vivre cosmopolite se rencontrent.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "AMSTERDAM",
    continent: "europe",
    type: "destination",
    href: "/destination/amsterdam",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Amsterdam",
    title: "Amsterdam : Canaux, musées & vélos",
    desc: "Flânez entre canaux, maisons élégantes et ambiance créative au cœur d'une ville pleine de charme.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "PORTO",
    continent: "europe",
    type: "destination",
    href: "/destination/porto",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Porto",
    title: "Porto : Azulejos, Douro & fado",
    desc: "Laissez-vous porter par l'authenticité de Porto, entre façades colorées, caves du Douro et séjour en pousada de caractère.",
    cta: "DÉCOUVRIR",
  },
  {
    badge: "ROME",
    continent: "europe",
    type: "destination",
    href: "/destination/rome",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Rome",
    title: "Rome : Colisée, Vatican & dolce vita",
    desc: "Plongez dans l'histoire éternelle entre vestiges antiques, places emblématiques et douceur de vivre italienne.",
    cta: "DÉCOUVRIR",
  },
  ...EXTRA_DEST_CARDS,
  // ── ÉVÉNEMENTS SPORTIFS ──
  {
    badge: "ANGLETERRE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/angleterre.jpg",
    alt: "Stade de football et ambiance sportive en Angleterre",
    title: "Angleterre : Football & rugby",
    desc: "Football : Premier League, Boxing Day. Rugby : 6 Nations, Champions Cup.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "ESPAGNE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/espagne.jpg",
    alt: "Ambiance de grand événement sportif en Espagne",
    title: "Espagne : Liga, NFL, F1 & Moto GP",
    desc: "Football : Liga. NFL : Madrid Game. Formule 1 : GP d'Espagne. Moto GP : Catalogne, Aragon, Valence.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "ITALIE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/italie.jpg",
    alt: "Ville italienne et univers du sport en Italie",
    title: "Italie : Serie A, F1 Monza & Moto GP",
    desc: "Football : Serie A. Rugby : 6 Nations. Formule 1 : GP de Monza. Moto GP : Mugello.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "ALLEMAGNE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/allemagne.jpg",
    alt: "Stade emblématique et atmosphère sportive en Allemagne",
    title: "Bundesliga & grands stades",
    desc: "Football : Bundesliga, matchs dans les stades mythiques allemands.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "FRANCE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/france.jpg",
    alt: "Ambiance rugby et événement sportif en France",
    title: "France : VI Nations et autres compétitions internationales",
    desc: "Rugby : 6 Nations et Champions Cup à Paris et dans les grandes villes françaises.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "PAYS DE GALLES",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/pays_de_galles.jpg",
    alt: "Stade de rugby et ambiance sportive au pays de Galles",
    title: "Pays de Galles : Rugby à Cardiff",
    desc: "Rugby : 6 Nations et grandes affiches internationales au Principality Stadium de Cardiff.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "ÉCOSSE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/ecosse.jpg",
    alt: "Ambiance rugby et stade emblématique en Écosse",
    title: "Écosse : Rugby à Édimbourg",
    desc: "Rugby : 6 Nations à Édimbourg, ambiance électrique au stade de Murrayfield.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "IRLANDE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/irlande.jpg",
    alt: "Stade et ambiance de match en Irlande",
    title: "Irlande : Rugby à Dublin",
    desc: "Rugby : 6 Nations et Champions Cup à Dublin, l'Aviva Stadium sous une atmosphère unique.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "MONACO",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/monaco.jpg",
    alt: "Circuit urbain et ambiance Formule 1 à Monaco",
    title: "Monaco : Grand Prix de Monaco",
    desc: "Formule 1 : Grand Prix de Monaco, le circuit légendaire en pleine ville.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "BELGIQUE",
    continent: "europe",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/belgique.jpg",
    alt: "Circuit automobile et ambiance Formule 1 en Belgique",
    title: "Belgique : F1 à Spa-Francorchamps",
    desc: "Formule 1 : Grand Prix de Belgique sur le mythique circuit de Spa-Francorchamps.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "ÉTATS-UNIS",
    continent: "ameriques",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/usa.jpg",
    alt: "Arène de basketball et ambiance NBA aux États-Unis",
    title: "États-Unis : NBA aux États-Unis",
    desc: "NBA : matchs à New York et Los Angeles dans les plus grandes arènes américaines.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "CANADA",
    continent: "ameriques",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/canada.jpg",
    alt: "Circuit automobile et ambiance Formule 1 au Canada",
    title: "Canada : Grand Prix à Montréal",
    desc: "Formule 1 : Grand Prix du Canada sur le circuit Gilles-Villeneuve à Montréal.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "QATAR",
    continent: "asie",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/qatar.jpg",
    alt: "Circuit de course et ambiance Formule 1 au Qatar",
    title: "Qatar : Grand Prix du Qatar",
    desc: "Formule 1 : Grand Prix du Qatar sur le circuit international de Lusail.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    badge: "ÉMIRATS ARABES UNIS",
    continent: "asie",
    type: "sport",
    href: "/catalogue-sportif",
    img: "/assets/images/emirats_arabes_unis.jpg",
    alt: "Circuit Yas Marina et ambiance Formule 1 à Abu Dhabi",
    title: "Émirats : Grand Prix d'Abu Dhabi",
    desc: "Formule 1 : Grand Prix d'Abu Dhabi sur le circuit de Yas Marina.",
    cta: "VOIR LE CATALOGUE",
  },
];

// Données pays pour les boutons de filtre (reprend COUNTRY_DATA du script source)
const COUNTRY_DATA: Record<Continent, { destination: string[]; sport: string[] }> = {
  asie: {
    destination: ["Japon", "Thaïlande"],
    sport: ["Qatar", "Émirats arabes unis"],
  },
  afrique: {
    destination: ["Maroc", "Île Maurice", "Seychelles", "Zanzibar"],
    sport: [],
  },
  ameriques: {
    destination: ["Canada", "Costa Rica"],
    sport: ["États-Unis", "Canada (F1)"],
  },
  europe: {
    destination: ["Laponie", "Londres", "Amsterdam", "Porto", "Rome"],
    sport: [
      "Angleterre",
      "Espagne",
      "Italie",
      "Allemagne",
      "France",
      "Pays de Galles",
      "Écosse",
      "Irlande",
      "Monaco",
      "Belgique",
    ],
  },
};

const PER_PAGE = 6;
const CONTINENTS: Continent[] = ["asie", "afrique", "ameriques", "europe"];

/** Normalise (minuscules + sans accents) pour la recherche. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export default function DestinationsGrid() {
  const [activeType, setActiveType] = useState<"all" | CardType>("all");
  const [activeContinent, setActiveContinent] = useState<"all" | Continent>("all");
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  // Continents disponibles selon le type actif (masque les boutons vides)
  const continentsWithData = useMemo(() => {
    const set = new Set<Continent>();
    CARDS.forEach((card) => {
      const matchType = activeType === "all" || activeType === card.type;
      if (matchType) set.add(card.continent);
    });
    return set;
  }, [activeType]);

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return CARDS.filter((card) => {
      const matchType = activeType === "all" || activeType === card.type;
      const matchContinent =
        activeContinent === "all" || card.continent === activeContinent;
      const matchCountry =
        !activeCountry || card.badge.toUpperCase() === activeCountry.toUpperCase();
      const matchQuery =
        !q || norm(`${card.title} ${card.badge} ${card.desc}`).includes(q);
      return matchType && matchContinent && matchCountry && matchQuery;
    });
  }, [activeType, activeContinent, activeCountry, query]);

  const total = filtered.length;
  const visibleCount = currentPage * PER_PAGE;
  const visibleCards = filtered.slice(0, visibleCount);
  const remaining = total - visibleCount;

  const countryButtons = useMemo(() => {
    if (activeContinent === "all") return [];
    const data = COUNTRY_DATA[activeContinent];
    let countries: string[];
    if (activeType === "all") countries = [...data.destination, ...data.sport];
    else if (activeType === "destination") countries = data.destination;
    else countries = data.sport;
    return countries.map((name) => ({
      name,
      sport: data.sport.includes(name),
    }));
  }, [activeContinent, activeType]);

  function handleType(type: "all" | CardType) {
    setActiveType(type);
    setActiveContinent("all");
    setActiveCountry(null);
    setCurrentPage(1);
  }

  function handleContinent(continent: "all" | Continent) {
    setActiveContinent(continent);
    setActiveCountry(null);
    setCurrentPage(1);
  }

  function handleCountry(name: string) {
    setActiveCountry((cur) => (cur === name ? null : name));
    setCurrentPage(1);
  }

  function resetToContinent() {
    setActiveContinent("all");
    setActiveCountry(null);
    setCurrentPage(1);
  }

  function loadMore() {
    if (visibleCount >= total) {
      setCurrentPage(1);
      const grid = document.getElementById("dest-grid");
      if (grid) {
        window.scrollTo({
          top: grid.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: "smooth",
        });
      }
    } else {
      setCurrentPage((p) => p + 1);
    }
  }

  const showLoadMore = total > PER_PAGE;
  const isLess = remaining <= 0;
  const nextChunk = Math.min(PER_PAGE, Math.max(remaining, 0));

  return (
    <>
      {/* ÉTAPE 1 : CONTINENTS */}
      {activeContinent === "all" && (
        <div className="map-filter-row mb-10 sm:mb-12">
          <span className="filter-label">Continent</span>
          <div className="filter-buttons">
            <button
              className={`map-filter-btn${activeContinent === "all" ? " f-active" : ""}`}
              onClick={() => handleContinent("all")}
            >
              Tous
            </button>
            {CONTINENTS.map((c) =>
              continentsWithData.has(c) ? (
                <button
                  key={c}
                  className="map-filter-btn"
                  onClick={() => handleContinent(c)}
                >
                  {CONTINENT_NAMES[c]}
                </button>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* ÉTAPE 2 : TYPE */}
      <div className="map-filter-row mb-4">
        <span className="filter-label">Votre événement</span>
        <div className="filter-buttons">
          <button
            className={`type-filter-btn${activeType === "all" ? " tf-active" : ""}`}
            onClick={() => handleType("all")}
          >
            <span className="flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">public</span> Tout
            </span>
          </button>
          <button
            className={`type-filter-btn${activeType === "destination" ? " tf-active" : ""}`}
            onClick={() => handleType("destination")}
          >
            <span className="flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>{" "}
              Destinations
            </span>
          </button>
          <button
            className={`type-filter-btn tf-sport${activeType === "sport" ? " tf-active" : ""}`}
            onClick={() => handleType("sport")}
          >
            <span className="flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">sports_soccer</span>{" "}
              Voyage sport
            </span>
          </button>
        </div>
      </div>

      {/* ÉTAPE 3 : PAYS */}
      {activeContinent !== "all" && (
        <div
          id="country-filters"
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-[10px] mb-6 sm:mb-7"
        >
          <button className="map-reset-btn" onClick={resetToContinent}>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span> Retour
            </span>
          </button>
          <span
            className="map-filter-btn f-active"
            style={{ pointerEvents: "none", flex: "none", padding: "9px 22px" }}
          >
            {CONTINENT_NAMES[activeContinent]}
          </span>
          <span className="text-outline-sep hidden sm:inline">|</span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-[10px]">
            {countryButtons.map((c) => (
              <button
                key={c.name}
                className={`country-filter-btn${c.sport ? " country-sport" : ""}${
                  activeCountry === c.name ? " f-active" : ""
                }`}
                onClick={() => handleCountry(c.name)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Légende */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
          <span
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#3179C4",
              border: "2px solid #fff",
              boxShadow: "0 1px 4px rgba(49,121,196,.4)",
            }}
          />
          Destinations de voyage
        </div>
        <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
          <span
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#e74c3c",
              border: "2px solid #fff",
              boxShadow: "0 1px 4px rgba(231,76,60,.4)",
            }}
          />
          Événements sportifs
        </div>
      </div>

      {/* COMPTEUR + RECHERCHE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <p className="font-h3 text-[18px] sm:text-[20px] font-bold text-on-surface">
          {total} résultat{total > 1 ? "s" : ""}
        </p>
        <div className="relative w-full sm:w-[320px]">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">
            search
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Rechercher une destination…"
            aria-label="Rechercher une destination"
            className="w-full pl-11 pr-10 py-2.5 rounded-full border-[1.5px] border-outline-variant/60 bg-white text-[14px] text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-[#3179C4] focus:ring-2 focus:ring-[#3179C4]/15 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCurrentPage(1);
              }}
              aria-label="Effacer la recherche"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-[#3179C4] flex items-center"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* GRILLE */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        id="dest-grid"
      >
        {visibleCards.map((card) => {
          const isSport = card.type === "sport";
          return (
            <a
              key={card.badge + card.title}
              href={card.href}
              className={`dest-card block${isSport ? " sport-card" : ""}`}
            >
              <div className="relative h-[220px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.08]"
                  src={card.img}
                  loading="lazy"
                />
                <div
                  className={`dest-badge${
                    isSport ? " badge-sport" : ""
                  } absolute top-4 left-4 px-3 py-1 rounded-full text-label font-label text-primary text-[12px] flex items-center gap-1`}
                >
                  <span className="badge-star material-symbols-outlined">star</span>
                  {card.badge}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-[18px] sm:text-[20px] mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
                  {card.desc}
                </p>
                <span className="discover-link text-primary font-label text-label text-[13px] sm:text-[14px] flex items-center hover:gap-2 transition-all">
                  {card.cta}{" "}
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Aucun résultat */}
      {total === 0 && (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant/40 mb-3 block">
            search_off
          </span>
          <p className="font-h3 text-[18px] text-on-surface-variant mb-2">
            Aucune destination trouvée
          </p>
          <p className="font-body-md text-[14px] text-on-surface-variant/70">
            Essayez un autre filtre ou{" "}
            <a href="/demande-renseignement" className="text-[#3179C4] underline">
              contactez-nous
            </a>
            .
          </p>
        </div>
      )}

      {/* Bouton charger plus */}
      {total > 0 && showLoadMore && (
        <div className="flex flex-col items-center gap-4 mt-10 sm:mt-14">
          <button
            className={
              isLess
                ? "bg-white border-[1.5px] border-outline-variant text-on-surface-variant font-label text-label px-10 py-3 rounded-lg hover:border-[#3179C4] hover:text-[#3179C4] transition-all inline-flex items-center gap-2"
                : "bg-white border-[1.5px] border-[#3179C4] text-[#3179C4] font-label text-label px-10 py-3 rounded-lg hover:bg-[#3179C4] hover:text-white transition-all inline-flex items-center gap-2"
            }
            onClick={loadMore}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isLess ? "expand_less" : "expand_more"}
            </span>
            <span>
              {isLess
                ? "Afficher moins"
                : `Charger ${nextChunk} résultat${nextChunk > 1 ? "s" : ""} de plus`}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
