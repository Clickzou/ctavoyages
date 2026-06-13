"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type SportPack = {
  href: string;
  img: string;
  alt: string;
  badge: string;
  title: string;
  desc: string;
  tags: { label: string; highlight?: boolean }[];
};

const PACKS: SportPack[] = [
  {
    href: "/foot-europeen",
    img: "/assets/images/iStock-1479681277.jpg",
    alt: "Séjour Football Européen",
    badge: "FOOTBALL",
    title: "Football Européen",
    desc: "Premier League, Liga, Serie A, Bundesliga — vivez les plus grands matchs dans les stades mythiques d'Europe.",
    tags: [
      { label: "Londres" },
      { label: "Madrid" },
      { label: "Milan" },
      { label: "Munich" },
    ],
  },
  {
    href: "/rugby",
    img: "/assets/images/iStock-1417770031.jpg",
    alt: "Séjour Rugby",
    badge: "RUGBY",
    title: "Rugby",
    desc: "Champions Cup, 6 Nations, Quilter Nations Series — plongez dans l'atmosphère unique de l'ovalie.",
    tags: [
      { label: "Paris" },
      { label: "Dublin" },
      { label: "Cardiff" },
      { label: "Bilbao" },
    ],
  },
  {
    href: "/nba",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour NBA",
    badge: "NBA",
    title: "NBA",
    desc: "LeBron James, Wembanyama, Luka Dončić — vibrez dans les arènes les plus mythiques du basket américain.",
    tags: [{ label: "New York" }, { label: "Los Angeles" }],
  },
  {
    href: "/nfl",
    img: "/assets/images/iStock-1838780282.jpg",
    alt: "Séjour NFL Madrid Game",
    badge: "NFL",
    title: "NFL — Madrid Game",
    desc: "8 novembre 2026 — Atlanta Falcons vs Cincinnati Bengals au Santiago Bernabéu.",
    tags: [{ label: "Madrid" }, { label: "8 nov. 2026", highlight: true }],
  },
  {
    href: "/f1",
    img: "/assets/images/iStock-166272826.jpg",
    alt: "Séjour Formule 1",
    badge: "FORMULE 1",
    title: "Formule 1",
    desc: "Monaco, Barcelone, Monza, Spa, Abu Dhabi — vivez les Grands Prix dans les plus belles destinations du monde.",
    tags: [
      { label: "Monaco" },
      { label: "Barcelone" },
      { label: "Abu Dhabi" },
    ],
  },
  {
    href: "/motogp",
    img: "/assets/images/iStock-526134650.jpg",
    alt: "Séjour Moto GP",
    badge: "MOTO GP",
    title: "Moto GP",
    desc: "Catalogne, Mugello, Valence — ressentez l'adrénaline des plus grands circuits du championnat du monde moto.",
    tags: [
      { label: "Barcelone" },
      { label: "Mugello" },
      { label: "Valence" },
    ],
  },
  {
    href: "/boxing-day",
    img: "/assets/images/iStock-1479691232-2.jpg",
    alt: "Séjour Boxing Day",
    badge: "BOXING DAY",
    title: "Boxing Day",
    desc: "La magie du football anglais pendant les fêtes — Chelsea, Liverpool, Manchester United le 26 décembre.",
    tags: [
      { label: "Londres" },
      { label: "Manchester" },
      { label: "Liverpool" },
    ],
  },
];

export default function SportCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".sport-card");
    const amt = card ? card.offsetWidth + 24 : 384;
    if (direction === 1) {
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= max - 5)
        track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: amt, behavior: "smooth" });
    } else {
      if (track.scrollLeft <= 5)
        track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      else track.scrollBy({ left: -amt, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    const auto = () => {
      if (paused) return;
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= max - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const c = track.querySelector<HTMLElement>(".sport-card");
        track.scrollBy({
          left: c ? c.offsetWidth + 24 : 384,
          behavior: "smooth",
        });
      }
    };
    const id = setInterval(auto, 4000);
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    const onTouchStart = () => (paused = true);
    const onTouchEnd = () =>
      (resumeTimer = setTimeout(() => (paused = false), 3000));
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      clearInterval(id);
      if (resumeTimer) clearTimeout(resumeTimer);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="carousel-arrow arrow-left hidden sm:flex"
        onClick={() => scrollByDir(-1)}
        aria-label="Précédent"
      >
        <span className="material-symbols-outlined text-[22px]">chevron_left</span>
      </button>
      <button
        className="carousel-arrow arrow-right hidden sm:flex"
        onClick={() => scrollByDir(1)}
        aria-label="Suivant"
      >
        <span className="material-symbols-outlined text-[22px]">chevron_right</span>
      </button>
      <div className="sport-carousel-track" ref={trackRef}>
        {PACKS.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="sport-card flex flex-col"
          >
            <div className="relative h-[220px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                src={p.img}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="sport-badge bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]">
                  <span className="badge-star material-symbols-outlined">star</span>
                  {p.badge}
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="font-h3 text-[19px] sm:text-[21px] font-bold text-on-surface mb-2">
                {p.title}
              </h3>
              <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant mb-3 line-clamp-2">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t.label}
                    className={
                      t.highlight
                        ? "text-[11px] font-label bg-[#FBBF12]/20 text-[#92400E] px-2.5 py-1 rounded-full"
                        : "text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full"
                    }
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <span className="discover-link mt-auto text-primary font-label text-label text-[13px] sm:text-[14px] flex items-center hover:gap-2 transition-all">
                DÉCOUVRIR{" "}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
