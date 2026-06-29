"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ItineraryStep } from "@/lib/destination-content/types";

export default function ItinerarySection({ steps }: { steps: ItineraryStep[] }) {
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
        {steps.map((step) => {
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
        {steps.map((step) => {
          const highlighted = activeStop === step.id || hoveredStop === step.id;
          return (
            <div
              key={step.id}
              className={`treasure-cell ${
                step.align === "right" ? "align-right" : "align-left"
              }`}
            >
              <div
                className={`treasure-stop${highlighted ? " stop-highlighted" : ""}`}
                onMouseEnter={() => setHoveredStop(step.id)}
                onMouseLeave={() => setHoveredStop(null)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.img}
                  alt={step.alt}
                  style={
                    step.objectPosition
                      ? { objectPosition: step.objectPosition }
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
