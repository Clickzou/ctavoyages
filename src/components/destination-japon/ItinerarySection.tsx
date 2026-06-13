"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Step = {
  id: string;
  label: string;
  title: string;
  text: string;
};

type Stop = {
  id: string;
  align: "left" | "right";
  img: string;
  alt: string;
  objectPosition?: string;
};

const STEPS: Step[] = [
  {
    id: "tokyo",
    label: "JOURS 1 À 3",
    title: "Tokyo : la mégapole du futur",
    text: "Immersion dans l'énergie de Tokyo : Shibuya, Asakusa, les néons de Shinjuku et la culture pop d'Akihabara. Une ville qui surprend à chaque coin de rue.",
  },
  {
    id: "hakone",
    label: "JOURS 4 ET 5",
    title: "Hakone : sérénité au pied du Fuji",
    text: "Croisière sur le lac Ashi avec vue sur le Mont Fuji, jardins de Gora et sources volcaniques. Nuit en ryokan avec bains onsen pour une immersion dans le Japon authentique.",
  },
  {
    id: "takayama",
    label: "JOURS 6 ET 7",
    title: "Takayama : le Japon rural",
    text: "Au cœur des Alpes japonaises, Takayama et ses maisons de saké du XVIIe siècle. À proximité, Shirakawa-go et ses toits de chaume classés à l'UNESCO.",
  },
  {
    id: "kyoto",
    label: "JOURS 8 À 10",
    title: "Kyoto : l'âme du Japon éternel",
    text: "Les torii de Fushimi Inari, le Pavillon d'Or Kinkaku-ji, les bambous d'Arashiyama et le quartier de Gion où les geikos circulent encore au crépuscule.",
  },
  {
    id: "osaka",
    label: "JOURS 11 ET 12",
    title: "Osaka : la capitale gourmande",
    text: "Dotonbori, le château d'Osaka et la street food légendaire de la ville : takoyaki, okonomiyaki, gyoza. Un final haut en couleurs avant le vol retour.",
  },
];

const STOPS: Stop[] = [
  {
    id: "tokyo",
    align: "left",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=280&fit=crop&auto=format",
    alt: "Tokyo",
  },
  {
    id: "hakone",
    align: "right",
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&h=280&fit=crop&auto=format",
    alt: "Hakone",
    objectPosition: "center 40%",
  },
  {
    id: "takayama",
    align: "left",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&h=280&fit=crop&auto=format",
    alt: "Takayama",
  },
  {
    id: "kyoto",
    align: "right",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=280&fit=crop&auto=format",
    alt: "Kyoto",
  },
  {
    id: "osaka",
    align: "left",
    img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=500&h=280&fit=crop&auto=format",
    alt: "Osaka",
  },
];

export default function ItinerarySection() {
  const [activeStop, setActiveStop] = useState<string | null>(null);
  const [hoveredStop, setHoveredStop] = useState<string | null>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const resizeTreasurePath = useCallback(() => {
    const col = columnRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!col || !svg || !path || col.offsetHeight < 10) return;
    const h = col.offsetHeight + 80;
    svg.setAttribute("viewBox", "0 0 400 " + h);
    const stops = col.querySelectorAll<HTMLElement>(".treasure-stop");
    if (stops.length < 2) return;
    const points: { x: number; y: number }[] = [];
    stops.forEach((s) => {
      const cell = s.closest<HTMLElement>(".treasure-cell");
      if (!cell) return;
      const cy = cell.offsetTop + s.offsetTop + s.offsetHeight / 2;
      const isRight = cell.classList.contains("align-right");
      const cx = isRight ? 310 : 90;
      points.push({ x: cx, y: cy });
    });
    if (points.length < 2) return;
    let d = "M" + points[0].x + "," + points[0].y;
    for (let i = 1; i < points.length; i++) {
      const p = points[i - 1];
      const q = points[i];
      const my = (p.y + q.y) / 2;
      d += " C" + p.x + "," + my + " " + q.x + "," + my + " " + q.x + "," + q.y;
    }
    path.setAttribute("d", d);
  }, []);

  useEffect(() => {
    const id = setTimeout(resizeTreasurePath, 150);
    window.addEventListener("resize", resizeTreasurePath);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", resizeTreasurePath);
    };
  }, [resizeTreasurePath]);

  return (
    <div className="itinerary-grid">
      {/* Colonne gauche : frise */}
      <div className="itinerary-list">
        {STEPS.map((step) => {
          const classes = ["itinerary-step"];
          if (activeStop === step.id) classes.push("is-active");
          if (hoveredStop === step.id) classes.push("image-hovered");
          return (
            <div
              key={step.id}
              className={classes.join(" ")}
              onClick={() => setActiveStop(step.id)}
            >
              <div className="step-dot">
                <div className="step-dot-inner"></div>
              </div>
              <span className="step-label font-label text-on-surface-variant text-[13px] sm:text-[14px] transition-colors">
                {step.label}
              </span>
              <h4 className="step-title font-h3 text-[18px] sm:text-[20px] font-bold mb-3 transition-colors">
                {step.title}
              </h4>
              <p className="text-on-surface-variant text-[14px] sm:text-body-md">
                {step.text}
              </p>
            </div>
          );
        })}
      </div>
      {/* Colonne droite : carte au trésor (desktop) */}
      <div className="treasure-column" ref={columnRef}>
        <div className="treasure-path-wrap">
          <svg ref={svgRef} viewBox="0 0 400 1000" preserveAspectRatio="none">
            <path
              ref={pathRef}
              className="treasure-path-line"
              d="M90,20 C90,100 310,100 310,200 C310,300 90,300 90,400"
            />
          </svg>
        </div>
        {STOPS.map((stop) => {
          const highlighted = activeStop === stop.id || hoveredStop === stop.id;
          return (
            <div
              key={stop.id}
              className={`treasure-cell ${
                stop.align === "right" ? "align-right" : "align-left"
              }`}
            >
              <div
                className={`treasure-stop${highlighted ? " stop-highlighted" : ""}`}
                onMouseEnter={() => setHoveredStop(stop.id)}
                onMouseLeave={() => setHoveredStop(null)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stop.img}
                  alt={stop.alt}
                  style={
                    stop.objectPosition
                      ? { objectPosition: stop.objectPosition }
                      : undefined
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
