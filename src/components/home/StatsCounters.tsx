"use client";

import { useEffect, useRef } from "react";

type Stat = {
  target: number;
  suffix?: string;
  separator?: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 13, suffix: "+", label: "Destinations" },
  { target: 1200, separator: " ", label: "Agences partenaires TourCom" },
  { target: 6000, separator: " ", label: "Points de vente en Europe" },
];

function format(n: number, sep?: string) {
  if (!sep) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export default function StatsCounters() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section className="w-full bg-white" id="stats-section" ref={sectionRef}>
      <div className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="flex justify-center mb-8 sm:mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Logo TourCom"
              className="h-[40px] sm:h-[52px] w-auto"
              src="/assets/images/logo-tourcom-2020.png"
            />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8 text-center">
            {STATS.map((s) => (
              <div className="flex flex-col" key={s.label}>
                <span className="font-h1 text-[32px] sm:text-[42px] font-bold text-[#004191] leading-none mb-2">
                  <span
                    className="counter-value"
                    data-target={s.target}
                    data-suffix={s.suffix}
                    data-separator={s.separator}
                  >
                    0
                  </span>
                </span>
                <span className="font-body-md text-[13px] sm:text-[15px] text-on-surface-variant">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
