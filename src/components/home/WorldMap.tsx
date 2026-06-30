"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MAP_DESTINATIONS } from "@/lib/map-destinations";

/* eslint-disable @typescript-eslint/no-explicit-any */

type Dest = {
  id: string;
  name: string;
  c: string;
  ll: [number, number];
  badge: string;
  desc: string;
  img: string;
  alt: string;
  href: string;
  flagCode?: string;
  flagUrl?: string;
  sport: boolean;
};

const CONT_MAP: Record<string, string> = {
  asie: "asia",
  afrique: "africa",
  ameriques: "americas",
  europe: "europe",
};
/** Ids déjà présents ci-dessous (on ne les reduplique pas depuis MAP_DESTINATIONS). */
const EXISTING_MAP_IDS = new Set([
  "japon", "thailande", "maroc", "ile-maurice", "seychelles", "zanzibar",
  "canada", "costa-rica", "laponie", "londres", "amsterdam", "porto", "rome",
]);
/** Drapeau (code ISO 3166-1 alpha-2, ou subdivision flagcdn) par slug de destination. */
const FLAG_BY_SLUG: Record<string, string> = {
  islande: "is", france: "fr", grece: "gr", santorin: "gr", crete: "gr",
  italie: "it", venise: "it", espagne: "es", portugal: "pt", croatie: "hr",
  ecosse: "gb-sct", norvege: "no", suede: "se", slovenie: "si", acores: "pt",
  egypte: "eg", kenya: "ke", tanzanie: "tz", "afrique-du-sud": "za",
  namibie: "na", botswana: "bw", maldives: "mv", madagascar: "mg",
  "la-reunion": "re", vietnam: "vn", inde: "in", "sri-lanka": "lk", bali: "id",
  ouzbekistan: "uz", mongolie: "mn", jordanie: "jo", dubai: "ae", oman: "om",
  polynesie: "pf", "nouvelle-zelande": "nz", australie: "au", perou: "pe",
  patagonie: "ar", floride: "us", "republique-dominicaine": "do",
};
const EXTRA_MAP_DEST: Dest[] = MAP_DESTINATIONS.filter(
  (m) => !EXISTING_MAP_IDS.has(m.id),
).map((m) => ({
  id: m.id,
  name: m.name,
  c: CONT_MAP[m.continent],
  ll: m.ll,
  badge: m.badge,
  desc: m.desc,
  img: m.img,
  alt: `Voyage ${m.name}`,
  href: m.href,
  flagCode: FLAG_BY_SLUG[m.id] || "un",
  sport: false,
}));

const DEST: Dest[] = [
  { id: "japon", name: "Japon", c: "asia", ll: [36.2, 138.2], badge: "Asie", desc: "Vivez une immersion raffinée entre temples ancestraux, quartiers effervescents et nuits en ryokan traditionnel.", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=200&fit=crop&auto=format", alt: "Temple traditionnel et cerisiers en fleurs au Japon", href: "/destination-japon", flagCode: "jp", sport: false },
  { id: "thailande", name: "Thaïlande", c: "asia", ll: [15.8, 101.0], badge: "Asie", desc: "Partez entre temples dorés, plages tropicales et douceur de vivre au cœur de l'Asie du Sud-Est.", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=200&fit=crop&auto=format", alt: "Temple thaïlandais et paysage tropical en Thaïlande", href: "/destination/thailande", flagCode: "th", sport: false },
  { id: "maroc", name: "Maroc", c: "africa", ll: [31.8, -7.1], badge: "Afrique", desc: "Laissez-vous séduire par les médinas animées, les paysages du désert et le charme d'un riad ou d'une kasbah.", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&h=200&fit=crop&auto=format", alt: "Ruelle traditionnelle et architecture marocaine au Maroc", href: "/destination/maroc", flagCode: "ma", sport: false },
  { id: "maurice", name: "Île Maurice", c: "africa", ll: [-20.3, 57.5], badge: "Océan Indien", desc: "Profitez d'un séjour entre lagons turquoise, plages idylliques et adresses de charme en bord d'océan.", img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=400&h=200&fit=crop&auto=format", alt: "Plage paradisiaque et lagon turquoise à l'île Maurice", href: "/destination/ile-maurice", flagCode: "mu", sport: false },
  { id: "seychelles", name: "Seychelles", c: "africa", ll: [-4.6, 55.5], badge: "Océan Indien", desc: "Offrez-vous une parenthèse paradisiaque entre nature préservée, plages de rêve et hébergements confidentiels.", img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=400&h=200&fit=crop&auto=format", alt: "Plage de sable blanc et rochers granitiques aux Seychelles", href: "/destination/seychelles", flagCode: "sc", sport: false },
  { id: "zanzibar", name: "Zanzibar", c: "africa", ll: [-6.1, 39.2], badge: "Afrique", desc: "Vivez une escapade envoûtante entre plages de sable blanc, culture swahilie et ruelles historiques de Stone Town.", img: "/assets/images/tanzanie.jpg", alt: "Plage tropicale et paysage côtier en Tanzanie, Zanzibar", href: "/destination/zanzibar", flagCode: "tz", sport: false },
  { id: "canada", name: "Canada", c: "americas", ll: [53.0, -100.0], badge: "Amériques", desc: "Explorez l'immensité canadienne entre grands espaces, forêts majestueuses et villes chaleureuses.", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=200&fit=crop&auto=format", alt: "Paysage de grands espaces et montagnes au Canada", href: "/destination/canada", flagCode: "ca", sport: false },
  { id: "costa-rica", name: "Costa Rica", c: "americas", ll: [10.0, -84.1], badge: "Amériques", desc: "Partez à l'aventure entre volcans, jungle luxuriante et écolodges nichés au cœur de la nature.", img: "/assets/images/costa_rica.jpg", alt: "Forêt tropicale luxuriante et nature préservée au Costa Rica", href: "/destination/costa-rica", flagCode: "cr", sport: false },
  { id: "laponie", name: "Laponie", c: "europe", ll: [66.5, 25.7], badge: "Europe", desc: "Vivez une expérience magique entre aurores boréales, étendues enneigées et nuit en igloo hôtel.", img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=200&fit=crop&auto=format", alt: "Paysage enneigé et ambiance polaire en Laponie", href: "/destination/laponie", flagCode: "fi", sport: false },
  { id: "londres", name: "Londres", c: "europe", ll: [51.5, -0.1], badge: "Europe", desc: "Découvrez une capitale vibrante où patrimoine, culture et art de vivre cosmopolite se rencontrent.", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=200&fit=crop&auto=format", alt: "Vue emblématique de Londres et architecture urbaine", href: "/destination/londres", flagCode: "gb", sport: false },
  { id: "amsterdam", name: "Amsterdam", c: "europe", ll: [52.4, 4.9], badge: "Europe", desc: "Flânez entre canaux, maisons élégantes et ambiance créative au cœur d'une ville pleine de charme.", img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=200&fit=crop&auto=format", alt: "Canaux et maisons traditionnelles à Amsterdam", href: "/destination/amsterdam", flagCode: "nl", sport: false },
  { id: "porto", name: "Porto", c: "europe", ll: [41.1, -8.6], badge: "Europe", desc: "Laissez-vous porter par l'authenticité de Porto, entre façades colorées, caves du Douro et séjour en pousada de caractère.", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=200&fit=crop&auto=format", alt: "Façades colorées et vue urbaine à Porto", href: "/destination/porto", flagCode: "pt", sport: false },
  { id: "rome", name: "Rome", c: "europe", ll: [41.9, 12.5], badge: "Europe", desc: "Plongez dans l'histoire éternelle entre vestiges antiques, places emblématiques et douceur de vivre italienne.", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=200&fit=crop&auto=format", alt: "Monument antique et ambiance historique à Rome", href: "/destination/rome", flagCode: "it", sport: false },

  { id: "angleterre-sport", name: "Angleterre", c: "europe", ll: [52.8, -1.6], badge: "Sport", desc: "Football : Premier League, Boxing Day. Rugby : 6 Nations, Champions Cup.", img: "/assets/images/angleterre.jpg", alt: "Stade de football et ambiance sportive en Angleterre", href: "/catalogue-sportif", flagCode: "gb", sport: true },
  { id: "espagne-sport", name: "Espagne", c: "europe", ll: [40.3, -3.7], badge: "Sport", desc: "Football : Liga. NFL : Madrid Game. Formule 1 : GP d'Espagne. Moto GP : Catalogne, Aragon, Valence.", img: "/assets/images/espagne.jpg", alt: "Ambiance de grand événement sportif en Espagne", href: "/catalogue-sportif", flagCode: "es", sport: true },
  { id: "italie-sport", name: "Italie", c: "europe", ll: [42.8, 12.6], badge: "Sport", desc: "Football : Serie A. Rugby : 6 Nations. Formule 1 : GP de Monza. Moto GP : Mugello.", img: "/assets/images/italie.jpg", alt: "Ville italienne et univers du sport en Italie", href: "/catalogue-sportif", flagCode: "it", sport: true },
  { id: "allemagne-sport", name: "Allemagne", c: "europe", ll: [51.2, 10.4], badge: "Sport", desc: "Football : Bundesliga, matchs dans les stades mythiques allemands.", img: "/assets/images/allemagne.jpg", alt: "Stade emblématique et atmosphère sportive en Allemagne", href: "/catalogue-sportif", flagCode: "de", sport: true },
  { id: "france-sport", name: "France", c: "europe", ll: [46.5, 2.2], badge: "Sport", desc: "Rugby : 6 Nations et Champions Cup à Paris et dans les grandes villes françaises.", img: "/assets/images/france.jpg", alt: "Ambiance rugby et événement sportif en France", href: "/catalogue-sportif", flagCode: "fr", sport: true },
  { id: "galles-sport", name: "Pays de Galles", c: "europe", ll: [52.1, -3.7], badge: "Sport", desc: "Rugby : 6 Nations et grandes affiches internationales au Principality Stadium de Cardiff.", img: "/assets/images/pays_de_Galles.jpg", alt: "Stade de rugby et ambiance sportive au pays de Galles", href: "/catalogue-sportif", flagUrl: "/assets/images/drapeau_pays_de_galles.png", sport: true },
  { id: "ecosse-sport", name: "Écosse", c: "europe", ll: [56.5, -4.0], badge: "Sport", desc: "Rugby : 6 Nations à Édimbourg, ambiance électrique au stade de Murrayfield.", img: "/assets/images/ecosse.jpg", alt: "Ambiance rugby et stade emblématique en Écosse", href: "/catalogue-sportif", flagUrl: "/assets/images/drapeau_ecosse.png", sport: true },
  { id: "irlande-sport", name: "Irlande", c: "europe", ll: [53.3, -8.0], badge: "Sport", desc: "Rugby : 6 Nations et Champions Cup à Dublin, l'Aviva Stadium sous une atmosphère unique.", img: "/assets/images/irlande.jpg", alt: "Stade et ambiance de match en Irlande", href: "/catalogue-sportif", flagCode: "ie", sport: true },
  { id: "monaco-sport", name: "Monaco", c: "europe", ll: [43.735, 7.42], badge: "Sport", desc: "Formule 1 : Grand Prix de Monaco, le circuit légendaire en pleine ville.", img: "/assets/images/monaco.jpg", alt: "Circuit urbain et ambiance Formule 1 à Monaco", href: "/catalogue-sportif", flagCode: "mc", sport: true },
  { id: "belgique-sport", name: "Belgique", c: "europe", ll: [50.5, 4.5], badge: "Sport", desc: "Formule 1 : Grand Prix de Belgique sur le mythique circuit de Spa-Francorchamps.", img: "/assets/images/belgique.jpg", alt: "Circuit automobile et ambiance Formule 1 en Belgique", href: "/catalogue-sportif", flagCode: "be", sport: true },
  { id: "etatsunis-sport", name: "États-Unis", c: "americas", ll: [39.8, -98.6], badge: "Sport", desc: "NBA : matchs à New York et Los Angeles dans les plus grandes arènes américaines.", img: "/assets/images/usa.jpg", alt: "Arène de basketball et ambiance NBA aux États-Unis", href: "/catalogue-sportif", flagCode: "us", sport: true },
  { id: "canada-sport", name: "Montréal", c: "americas", ll: [45.5, -73.6], badge: "Sport", desc: "Formule 1 : Grand Prix du Canada sur le circuit Gilles-Villeneuve à Montréal.", img: "/assets/images/canada.jpg", alt: "Circuit automobile et ambiance Formule 1 au Canada", href: "/catalogue-sportif", flagCode: "ca", sport: true },
  { id: "qatar-sport", name: "Qatar", c: "asia", ll: [25.5, 51.2], badge: "Sport", desc: "Formule 1 : Grand Prix du Qatar sur le circuit international de Lusail.", img: "/assets/images/qatar.jpg", alt: "Circuit de course et ambiance Formule 1 au Qatar", href: "/catalogue-sportif", flagCode: "qa", sport: true },
  { id: "emirats-sport", name: "Émirats arabes unis", c: "asia", ll: [24.5, 54.6], badge: "Sport", desc: "Formule 1 : Grand Prix d'Abu Dhabi sur le circuit de Yas Marina.", img: "/assets/images/emirats_arabes_unis.jpg", alt: "Circuit Yas Marina et ambiance Formule 1 à Abu Dhabi", href: "/catalogue-sportif", flagCode: "ae", sport: true },
  ...EXTRA_MAP_DEST,
];

const CONTINENT_NAMES: Record<string, string> = { asia: "Asie", africa: "Afrique", americas: "Amériques", europe: "Europe" };

export default function WorldMap() {
  useEffect(() => {
    let cancelled = false;
    let map: any = null;

    (async () => {
      const L: any = (await import("leaflet")).default;
      if (cancelled) return;

      const VIEWS: any = { all: { center: [20, 10], zoom: 2.0 }, asia: { center: [20, 105], zoom: 3.2 }, africa: { center: [5, 25], zoom: 3.0 }, americas: { center: [15, -80], zoom: 2.5 }, europe: { center: [54, 10], zoom: 3.8 } };
      const COUNTRY_VIEWS: any = {
        japon: { center: [36.2, 138.2], zoom: 5 }, thailande: { center: [15.8, 101.0], zoom: 5.5 }, maroc: { center: [31.8, -7.1], zoom: 5.5 },
        zanzibar: { center: [-6.1, 39.2], zoom: 7 }, seychelles: { center: [-4.6, 55.5], zoom: 7 }, maurice: { center: [-20.3, 57.5], zoom: 8 },
        canada: { center: [53.0, -100.0], zoom: 3.5 }, "costa-rica": { center: [10.0, -84.1], zoom: 6.5 },
        laponie: { center: [66.5, 25.7], zoom: 5.5 }, londres: { center: [51.5, -0.1], zoom: 9 }, amsterdam: { center: [52.4, 4.9], zoom: 9 },
        porto: { center: [41.1, -8.6], zoom: 9 }, rome: { center: [41.9, 12.5], zoom: 9 },
        "angleterre-sport": { center: [52.8, -1.6], zoom: 6 }, "espagne-sport": { center: [40.3, -3.7], zoom: 6 },
        "italie-sport": { center: [42.8, 12.6], zoom: 6 }, "allemagne-sport": { center: [51.2, 10.4], zoom: 5.8 },
        "france-sport": { center: [46.5, 2.2], zoom: 5.8 }, "galles-sport": { center: [52.1, -3.7], zoom: 7 },
        "ecosse-sport": { center: [56.5, -4.0], zoom: 6.5 }, "irlande-sport": { center: [53.3, -8.0], zoom: 6.5 },
        "monaco-sport": { center: [43.735, 7.42], zoom: 13 }, "belgique-sport": { center: [50.5, 4.5], zoom: 7 },
        "etatsunis-sport": { center: [39.8, -98.6], zoom: 3.6 }, "canada-sport": { center: [45.5, -73.6], zoom: 7 },
        "qatar-sport": { center: [25.5, 51.2], zoom: 8 }, "emirats-sport": { center: [24.5, 54.6], zoom: 8 },
      };

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        VIEWS.all.zoom = 1.2; VIEWS.asia.zoom = 2.4; VIEWS.africa.zoom = 2.2; VIEWS.americas.zoom = 1.8; VIEWS.europe.zoom = 2.8;
        Object.keys(COUNTRY_VIEWS).forEach((k) => { COUNTRY_VIEWS[k].zoom = Math.max(COUNTRY_VIEWS[k].zoom - 1, 2); });
      }

      const container = document.getElementById("leaflet-map");
      if (!container) return;
      map = L.map(container, { center: VIEWS.all.center, zoom: VIEWS.all.zoom, zoomControl: true, scrollWheelZoom: false, doubleClickZoom: true, dragging: true, minZoom: 1.0, maxZoom: 14, worldCopyJump: true });
      map.zoomControl.setPosition("topright");
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png", { maxZoom: 19, subdomains: "abcd" }).addTo(map);

      const tooltip = document.getElementById("cta-tooltip")!;
      const tipImg = document.getElementById("tip-img") as HTMLImageElement;
      const tipBadge = document.getElementById("tip-badge")!;
      const tipName = document.getElementById("tip-name")!;
      const tipDesc = document.getElementById("tip-desc")!;
      const tipLink = document.getElementById("tip-link") as HTMLAnchorElement;
      const tipArrow = document.getElementById("tip-arrow")!;
      const mapFilters = document.getElementById("map-filters")!;
      const countryFilters = document.getElementById("country-filters")!;
      const countryButtons = document.getElementById("country-buttons")!;
      const activeContinentBadge = document.getElementById("active-continent-badge")!;

      let activeEl: any = null, currentContinent = "all", currentCountry: string | null = null, currentType = "all";
      let hideTimer: any = null, onMarker = false, onTooltip = false;
      const markerElements: Record<string, HTMLElement> = {};

      function hideTooltip() {
        tooltip.classList.remove("tip-visible");
        if (activeEl) { activeEl.classList.remove("marker-active"); activeEl = null; }
        currentCountry = null;
        document.querySelectorAll(".country-filter-btn").forEach((b) => b.classList.remove("f-active"));
      }

      function showTip(d: Dest, el: HTMLElement) {
        tipImg.src = d.img; tipImg.alt = d.alt || d.name; tipBadge.textContent = d.badge;
        tipBadge.className = "tip-continent-badge" + (d.sport ? " badge-sport" : "");
        tipName.textContent = d.name; tipDesc.textContent = d.desc; tipLink.href = d.href;
        tipLink.innerHTML = d.sport
          ? 'Voir le catalogue sportif <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3179C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
          : 'En savoir plus <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3179C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        if (activeEl && activeEl !== el) activeEl.classList.remove("marker-active");
        activeEl = el; el.classList.add("marker-active"); tooltip.classList.add("tip-visible");
        currentCountry = d.id; positionTip(el);
        document.querySelectorAll(".country-filter-btn").forEach((b) => b.classList.toggle("f-active", (b as HTMLElement).dataset.id === d.id));
      }

      function positionTip(_el: HTMLElement) {
        // La vignette apparaît TOUJOURS au même endroit : un panneau fixe ancré
        // juste à droite de la carte, centré verticalement (quel que soit le marqueur).
        const mapEl = document.getElementById("map-wrap");
        if (!mapEl) return;
        const mR = mapEl.getBoundingClientRect();
        const TW = tooltip.offsetWidth || 258;
        const TH = tooltip.offsetHeight || 280;
        const MARGIN = 14;
        const GAP = 24; // espace entre le bord droit de la carte et la vignette

        // Centrage vertical par rapport à la carte (borné au viewport).
        let top = mR.top + mR.height / 2 - TH / 2;
        top = Math.max(MARGIN, Math.min(top, window.innerHeight - TH - MARGIN));

        let left: number;
        if (window.innerWidth < 768) {
          // Mobile : centré horizontalement.
          left = (window.innerWidth - TW) / 2;
        } else {
          // Toujours dans la marge, à droite de la carte (borné au viewport).
          left = mR.right + GAP;
        }
        left = Math.max(MARGIN, Math.min(left, window.innerWidth - TW - MARGIN));

        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
        // Plus de flèche : la vignette est un panneau latéral fixe.
        tipArrow.style.display = "none";
      }

      const onDocClick = (e: any) => {
        if (!e.target.closest(".cta-marker-wrap") && !e.target.closest("#cta-tooltip") && !e.target.closest(".country-filter-btn")) hideTooltip();
      };
      document.addEventListener("click", onDocClick);
      tooltip.addEventListener("mouseenter", () => { onTooltip = true; clearTimeout(hideTimer); });
      tooltip.addEventListener("mouseleave", () => { onTooltip = false; scheduleHide(); });
      function scheduleHide() { clearTimeout(hideTimer); hideTimer = setTimeout(() => { if (!onMarker && !onTooltip) hideTooltip(); }, 75); }

      function matchesDest(d: Dest) {
        const matchType = currentType === "all" || (currentType === "sport" && d.sport) || (currentType === "destination" && !d.sport);
        const matchContinent = currentContinent === "all" || d.c === currentContinent;
        return matchType && matchContinent;
      }

      function applyMarkerVisibility() {
        document.querySelectorAll(".cta-marker-wrap").forEach((el) => {
          const d = DEST.find((dd) => dd.id === (el as HTMLElement).dataset.id);
          if (!d) { el.classList.add("marker-dimmed"); return; }
          el.classList.toggle("marker-dimmed", !matchesDest(d));
        });
      }

      function updateContinentButtons() {
        const continentsWithData = new Set<string>();
        DEST.forEach((d) => {
          const matchType = currentType === "all" || (currentType === "sport" && d.sport) || (currentType === "destination" && !d.sport);
          if (matchType) continentsWithData.add(d.c);
        });
        document.querySelectorAll("#map-filters .map-filter-btn[data-c]").forEach((btn) => {
          const c = (btn as HTMLElement).dataset.c!;
          if (c === "all") { (btn as HTMLElement).style.display = ""; return; }
          (btn as HTMLElement).style.display = continentsWithData.has(c) ? "" : "none";
        });
      }

      DEST.forEach((d) => {
        const el = document.createElement("div");
        el.className = "cta-marker-wrap" + (d.sport ? " sport-marker" : "");
        el.dataset.continent = d.c; el.dataset.id = d.id; el.dataset.sport = d.sport ? "true" : "false";
        const flagUrl = d.flagUrl || "https://flagcdn.com/w40/" + (d.flagCode || "un") + ".png";
        el.innerHTML = '<img class="cta-flag" src="' + flagUrl + '" alt="' + d.name + '"/><div class="cta-ring"></div><div class="cta-dot"></div>';

        el.addEventListener("mouseenter", () => { onMarker = true; clearTimeout(hideTimer); showTip(d, el); const p = el.closest(".leaflet-marker-icon") as HTMLElement; if (p) p.style.zIndex = "9999"; });
        el.addEventListener("mouseleave", () => { onMarker = false; scheduleHide(); const p = el.closest(".leaflet-marker-icon") as HTMLElement; if (p) p.style.zIndex = ""; });
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          if (currentCountry === d.id) { window.location.href = d.href; }
          else { showTip(d, el); const cv = COUNTRY_VIEWS[d.id]; if (cv) map.flyTo(cv.center, cv.zoom, { animate: true, duration: 1.0 }); }
        });

        markerElements[d.id] = el;
        L.marker(d.ll, { icon: L.divIcon({ className: "", html: el, iconSize: [32, 32], iconAnchor: [16, 16] }), zIndexOffset: 0 }).addTo(map);
      });

      function buildCountryButtons(continent: string) {
        countryButtons.innerHTML = "";
        DEST.filter((d) => d.c === continent && matchesDest(d)).forEach((d) => {
          const btn = document.createElement("button");
          btn.className = "country-filter-btn" + (d.sport ? " country-sport" : "");
          btn.dataset.id = d.id;
          const flagUrl = d.flagUrl || "https://flagcdn.com/w20/" + (d.flagCode || "un") + ".png";
          btn.innerHTML = '<span style="display:flex;align-items:center;gap:6px;"><img src="' + flagUrl + '" alt="" style="width:18px;height:13px;border-radius:2px;object-fit:cover;"/> ' + d.name + "</span>";
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const el = markerElements[d.id];
            if (el) {
              hideTooltip();
              currentCountry = null;
              const cv = COUNTRY_VIEWS[d.id];
              if (cv) map.flyTo(cv.center, cv.zoom, { animate: true, duration: 1.0 });
              document.querySelectorAll(".country-filter-btn").forEach((b) => b.classList.remove("f-active"));
              btn.classList.add("f-active");
            }
          });
          countryButtons.appendChild(btn);
        });
      }

      function ctaTypeFilter(type: string) {
        hideTooltip(); currentType = type;
        document.querySelectorAll(".type-filter-btn").forEach((b) => b.classList.toggle("tf-active", (b as HTMLElement).dataset.type === type));
        updateContinentButtons();
        applyMarkerVisibility();
        if (currentContinent !== "all") buildCountryButtons(currentContinent);
        if (currentContinent === "all") map.flyTo(VIEWS.all.center, VIEWS.all.zoom, { animate: true, duration: 1.0 });
      }

      function ctaFilter(continent: string) {
        hideTooltip(); currentContinent = continent;
        document.querySelectorAll("#map-filters .map-filter-btn[data-c]").forEach((b) => b.classList.toggle("f-active", (b as HTMLElement).dataset.c === continent));
        if (continent === "all") {
          countryFilters.style.display = "none";
          applyMarkerVisibility();
          map.flyTo(VIEWS.all.center, VIEWS.all.zoom, { animate: true, duration: 1.4 });
          document.querySelectorAll(".continent-label").forEach((l) => { (l as HTMLElement).style.opacity = "1"; });
          return;
        }
        const v = VIEWS[continent] || VIEWS.all;
        map.flyTo(v.center, v.zoom, { animate: true, duration: 1.4 });
        mapFilters.style.display = "none";
        countryFilters.style.removeProperty("display"); countryFilters.style.display = "flex";
        activeContinentBadge.textContent = CONTINENT_NAMES[continent] || continent;
        buildCountryButtons(continent);
        applyMarkerVisibility();
        document.querySelectorAll(".continent-label").forEach((lbl) => {
          const dc = (lbl as HTMLElement).dataset.c;
          if (continent === "americas") (lbl as HTMLElement).style.opacity = dc === "north-america" || dc === "south-america" ? "1" : "0";
          else (lbl as HTMLElement).style.opacity = dc === continent ? "1" : "0";
        });
      }

      function ctaReset() {
        hideTooltip(); currentContinent = "all"; currentCountry = null;
        map.flyTo(VIEWS.all.center, VIEWS.all.zoom, { animate: true, duration: 1.4 });
        countryFilters.style.display = "none";
        mapFilters.style.removeProperty("display"); mapFilters.style.display = "flex";
        countryButtons.innerHTML = "";
        document.querySelectorAll("#map-filters .map-filter-btn[data-c]").forEach((b) => b.classList.toggle("f-active", (b as HTMLElement).dataset.c === "all"));
        applyMarkerVisibility();
        document.querySelectorAll(".continent-label").forEach((l) => { (l as HTMLElement).style.opacity = "1"; });
      }

      // Câblage des boutons de filtres (remplace les onclick inline)
      document.querySelectorAll<HTMLElement>(".type-filter-btn").forEach((b) =>
        b.addEventListener("click", () => ctaTypeFilter(b.dataset.type!))
      );
      document.querySelectorAll<HTMLElement>("#map-filters .map-filter-btn[data-c]").forEach((b) =>
        b.addEventListener("click", () => ctaFilter(b.dataset.c!))
      );
      const resetBtn = document.querySelector<HTMLElement>(".map-reset-btn");
      if (resetBtn) resetBtn.addEventListener("click", () => ctaReset());

      // Repositionne la vignette quand la carte bouge
      map.on("move", () => { if (activeEl) positionTip(activeEl); });

      (map as any)._ctaCleanup = () => { document.removeEventListener("click", onDocClick); };
    })();

    return () => {
      cancelled = true;
      if (map) {
        if ((map as any)._ctaCleanup) (map as any)._ctaCleanup();
        map.remove();
      }
    };
  }, []);

  return (
    <section id="map-section">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
        <div className="text-center mb-8 sm:mb-10">
          <h2 data-reveal="fade-up" className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface mb-3">
            Des expériences uniques aux quatre coins du monde
          </h2>
          <p data-reveal="fade-up" data-reveal-delay={120} className="font-body-md text-[14px] sm:text-[16px] text-[#555] max-w-[560px] mx-auto leading-relaxed">
            Parcourez la carte de nos destinations et laissez-vous guider vers votre prochain voyage.
          </p>
        </div>

        {/* PANNEAU DE FILTRES (fond animé voyage) */}
        <div className="map-controls" data-reveal="fade-up">
        {/* ÉTAPE 1 : TYPE */}
        <div className="map-filter-row mb-10 sm:mb-12">
          <span className="filter-label">Votre événement</span>
          <div className="filter-buttons">
            <button className="type-filter-btn tf-active" data-type="all">
              <span className="flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">public</span> Tout
              </span>
            </button>
            <button className="type-filter-btn" data-type="destination">
              <span className="flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">flight_takeoff</span> Destinations
              </span>
            </button>
            <button className="type-filter-btn tf-sport" data-type="sport">
              <span className="flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">sports_soccer</span> Voyage sport
              </span>
            </button>
          </div>
        </div>

        {/* ÉTAPE 2 : CONTINENTS */}
        <div id="map-filters" className="map-filter-row mb-6">
          <span className="filter-label">Continent</span>
          <div className="filter-buttons">
            <button className="map-filter-btn f-active" data-c="all">Tous</button>
            <button className="map-filter-btn" data-c="asia">Asie</button>
            <button className="map-filter-btn" data-c="africa">Afrique</button>
            <button className="map-filter-btn" data-c="americas">Amériques</button>
            <button className="map-filter-btn" data-c="europe">Europe</button>
          </div>
        </div>

        {/* ÉTAPE 3 : PAYS (dynamique) */}
        <div
          id="country-filters"
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-[10px] mb-6 sm:mb-7"
          style={{ display: "none" }}
        >
          <button className="map-reset-btn">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span> Retour
            </span>
          </button>
          <span id="active-continent-badge" className="map-filter-btn f-active" style={{ pointerEvents: "none", flex: "none", padding: "9px 22px" }} />
          <span className="text-outline-sep hidden sm:inline">|</span>
          <div id="country-buttons" className="flex flex-wrap justify-center gap-2 sm:gap-[10px]" />
        </div>
        </div>
        {/* /map-controls */}

        <div id="map-wrap" data-reveal="zoom">
          <div id="leaflet-map" />
          <div id="continent-labels">
            <span className="continent-label" data-c="north-america">Amérique du Nord</span>
            <span className="continent-label" data-c="south-america">Amérique du Sud</span>
            <span className="continent-label" data-c="europe">Europe</span>
            <span className="continent-label" data-c="africa">Afrique</span>
            <span className="continent-label" data-c="asia">Asie</span>
          </div>
        </div>

        {/* Légende + lien */}
        <div className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
              <span style={{ display: "inline-block", width: "12px", height: "12px", borderRadius: "50%", background: "#3179C4", border: "2px solid #fff", boxShadow: "0 1px 4px rgba(49,121,196,.4)" }} />
              Destinations de voyage
            </div>
            <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
              <span style={{ display: "inline-block", width: "12px", height: "12px", borderRadius: "50%", background: "#e74c3c", border: "2px solid #fff", boxShadow: "0 1px 4px rgba(231,76,60,.4)" }} />
              Événements sportifs
            </div>
          </div>
          <a href="/demande-renseignement" className="inline-flex items-center gap-1.5 font-body-md text-[14px] sm:text-[15px] font-medium text-[#3179C4] hover:underline">
            Vous ne trouvez pas votre destination ou événement ? Contactez-nous
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3179C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Vignette destination — hors du conteneur animé (will-change) pour un position:fixed correct */}
      <div id="cta-tooltip">
        <div className="tip-img-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="tip-img"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt=""
          />
          <span id="tip-badge" className="tip-continent-badge" />
        </div>
        <div className="tip-body">
          <p className="tip-name" id="tip-name" />
          <p className="tip-desc" id="tip-desc" />
          <a className="tip-cta" id="tip-link" href="#">
            En savoir plus{" "}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3179C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div id="tip-arrow" />
      </div>
    </section>
  );
}
