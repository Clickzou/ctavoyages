"use client";

import { useEffect, useRef } from "react";

function format(n: number, sep?: string) {
  if (!sep) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export default function StatsCounters() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>(".counter-value");
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
      { threshold: 0.3 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="mt-10 sm:mt-14 bg-white rounded-2xl p-6 sm:p-10 luxury-shadow"
      id="stats-section"
      ref={sectionRef}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col">
          <span className="font-h1 text-[28px] sm:text-[36px] font-bold text-[#004191] leading-none mb-1">
            <span className="counter-value" data-target="7">
              0
            </span>
          </span>
          <span className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
            sports proposés
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-h1 text-[28px] sm:text-[36px] font-bold text-[#004191] leading-none mb-1">
            <span className="counter-value" data-target="20" data-suffix="+">
              0
            </span>
          </span>
          <span className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
            destinations sportives
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-h1 text-[28px] sm:text-[36px] font-bold text-[#004191] leading-none mb-1">
            <span className="counter-value" data-target="20" data-suffix="ans">
              0
            </span>
          </span>
          <span className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
            d&apos;expérience événementielle
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-h1 text-[28px] sm:text-[36px] font-bold text-[#004191] leading-none mb-1">
            <span
              className="material-symbols-outlined text-[32px] text-[#004191]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </span>
          <span className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
            Billets officiels garantis
          </span>
        </div>
      </div>
    </div>
  );
}
