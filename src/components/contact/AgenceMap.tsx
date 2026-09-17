"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { AGENCE, ADRESSE_COMPLETE } from "@/lib/agence";

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Situe l'agence sur une carte OpenStreetMap.
 *
 * On garde Leaflet plutôt qu'une iframe Google Maps : l'iframe déposerait des
 * cookies Google dès l'affichage de la page, avant tout consentement, alors que
 * les tuiles utilisées ici n'en déposent aucun. Leaflet est déjà embarqué par la
 * carte des destinations, l'ajout ne coûte donc rien de plus au bundle.
 */
export default function AgenceMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let map: any;
    let cancelled = false;

    (async () => {
      const L: any = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      const center: [number, number] = [
        AGENCE.geo.latitude,
        AGENCE.geo.longitude,
      ];

      map = L.map(container, {
        center,
        zoom: 15,
        // La molette reste rendue à la page : sur mobile comme sur desktop, un
        // scroll qui se fait capturer par la carte bloque la lecture.
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          subdomains: "abcd",
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(map);

      const pin = document.createElement("div");
      pin.className = "agence-pin";
      pin.setAttribute("aria-hidden", "true");

      L.marker(center, {
        icon: L.divIcon({
          className: "",
          html: pin,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
        }),
        // Le nom sert d'étiquette au survol et de texte alternatif.
        title: `${AGENCE.name} — ${ADRESSE_COMPLETE}`,
      }).addTo(map);
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-outline-variant z-0"
      role="img"
      aria-label={`Carte de situation de ${AGENCE.name}, ${ADRESSE_COMPLETE}`}
    />
  );
}
