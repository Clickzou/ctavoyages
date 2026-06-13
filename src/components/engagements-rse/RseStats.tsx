"use client";

import { useEffect, useRef } from "react";

function format(n: number, sep?: string) {
  if (!sep) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export default function RseStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>(".counter-value");
    if (!els.length) return;
    let fired = false;

    const anim = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const suf = el.dataset.suffix || "";
      const sep = el.dataset.separator || "";
      const dur = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = format(Math.round(e * target), sep) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !fired) {
            fired = true;
            els.forEach(anim);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <div className="stats-card">
        <span className="stat-number counter-value" data-target="2021">
          0
        </span>
        <span className="stat-label">
          année de structuration de notre démarche
        </span>
      </div>
      <div className="stats-card">
        <span className="stat-number counter-value" data-target="50" data-suffix="+">
          0
        </span>
        <span className="stat-label">critères rigoureux suivis</span>
      </div>
      <div className="stats-card">
        <span
          className="stat-number counter-value"
          data-target="100"
          data-suffix="%"
        >
          0
        </span>
        <span className="stat-label">collaborateurs en CDI</span>
      </div>
      <div className="stats-card">
        <span
          className="stat-number counter-value"
          data-target="5"
          data-suffix=" ans"
        >
          0
        </span>
        <span className="stat-label">ancienneté moyenne des équipes</span>
      </div>
    </div>
  );
}
