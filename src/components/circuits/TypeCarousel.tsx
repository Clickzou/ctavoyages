"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type TypeCircuit = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  href: string;
};

const TYPES: TypeCircuit[] = [
  {
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit individuel sur mesure",
    title: "Circuit individuel",
    desc: "Un itinéraire organisé rien que pour vous, avec davantage de liberté dans le rythme et les étapes.",
    href: "/circuits/individuel",
  },
  {
    img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit accompagné avec guide",
    title: "Circuit accompagné",
    desc: "Un guide ou accompagnateur vous suit sur les temps forts du voyage pour enrichir chaque découverte.",
    href: "/circuits/accompagne",
  },
  {
    img: "/generated/circuit-petit-groupe.jpg",
    alt: "Circuit en petit groupe",
    title: "Circuit en petit groupe",
    desc: "La convivialité d'un groupe à taille humaine, sans sacrifier le confort ni la qualité des expériences.",
    href: "/circuits/petit-groupe",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop&auto=format",
    alt: "Road trip organisé",
    title: "Road trip organisé",
    desc: "Voiture, étapes optimisées, hébergements réservés — l'aventure en toute fluidité.",
    href: "/circuits/road-trip",
  },
  {
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit culturel",
    title: "Circuit culturel",
    desc: "Temples, médinas, villages, grands sites historiques — pour aller au cœur d'une destination.",
    href: "/circuits/culturel",
  },
  {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit nature et grands espaces",
    title: "Circuit nature",
    desc: "Parcs nationaux, volcans, forêts boréales et grands espaces pour les amateurs d'immersion nature.",
    href: "/circuits/nature",
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
      <div className="type-carousel-track" id="type-carousel" ref={trackRef}>
        {TYPES.map((t, i) => (
          <Link
            key={`${t.title}-${i}`}
            href={t.href}
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
