"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const HREFS = [
  "/croisieres/mediterranee",
  "/croisieres/fjords",
  "/croisieres/caraibes",
  "/croisieres/iles-grecques",
  "/croisieres/ocean-indien",
  "/croisieres/fluviale",
];

type TypeCroisiere = {
  img: string;
  alt: string;
  title: string;
  desc: string;
};

const TYPES: TypeCroisiere[] = [
  {
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière en Méditerranée",
    title: "Croisière Méditerranée",
    desc: "Ports historiques, villes emblématiques et mer bleue entre la France, l'Italie, la Grèce et l'Espagne.",
  },
  {
    img: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière fjords norvégiens",
    title: "Fjords & Europe du Nord",
    desc: "Fjords spectaculaires, aurores boréales et capitales nordiques — un voyage grandiose dans les terres du Grand Nord.",
  },
  {
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière Caraïbes",
    title: "Croisière Caraïbes",
    desc: "Eaux turquoise, plages de rêve et îles paradisiaques — la croisière idéale pour se ressourcer au soleil.",
  },
  {
    img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière îles grecques",
    title: "Îles grecques & Égée",
    desc: "Santorin, Mykonos, Rhodes — un itinéraire mythique entre mer azur, villages blancs et sites antiques.",
  },
  {
    img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière Océan Indien",
    title: "Croisière Océan Indien",
    desc: "Île Maurice, Seychelles, Zanzibar — cap sur les îles tropicales de l'Océan Indien à bord d'un navire de luxe.",
  },
  {
    img: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière fluviale",
    title: "Croisière fluviale",
    desc: "Rhin, Danube, Seine ou Douro — naviguer en douceur à travers les plus beaux paysages et villages d'Europe.",
  },
];

export default function TypeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".type-carousel-card");
    const amt = card ? card.offsetWidth + 24 : 364;
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
    const auto = () => {
      if (paused) return;
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= max - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const c = track.querySelector<HTMLElement>(".type-carousel-card");
        track.scrollBy({ left: c ? c.offsetWidth + 24 : 364, behavior: "smooth" });
      }
    };
    const id = setInterval(auto, 4000);
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    const onTouchStart = () => (paused = true);
    const onTouchEnd = () => setTimeout(() => (paused = false), 3000);
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      clearInterval(id);
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
      <div className="type-carousel-track" ref={trackRef}>
        {TYPES.map((t, i) => (
          <Link
            key={t.title}
            href={HREFS[i]}
            className="type-carousel-card flex flex-col"
          >
            <div className="h-44 sm:h-52 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={t.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={t.img}
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold text-on-surface mb-2">
                {t.title}
              </h3>
              <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant mb-4">
                {t.desc}
              </p>
              <span className="mt-auto text-[#3179C4] font-label text-[13px] font-bold flex items-center gap-1">
                Découvrir{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
