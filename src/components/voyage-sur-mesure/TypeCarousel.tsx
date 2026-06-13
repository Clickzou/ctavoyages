"use client";

import { useEffect, useRef } from "react";

type TypeVoyage = {
  img: string;
  alt: string;
  badge: string;
  title: string;
  desc: string;
};

const TYPES: TypeVoyage[] = [
  {
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure en famille",
    badge: "Famille",
    title: "Voyage en famille",
    desc: "Rythme adapté aux enfants, hébergements familiaux, activités pour tous les âges.",
  },
  {
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage de noces sur mesure",
    badge: "Couple",
    title: "Voyage de noces & en couple",
    desc: "Hébergements romantiques, expériences exclusives. Seychelles, Maldives, Japon…",
  },
  {
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage solo sur mesure",
    badge: "Solo",
    title: "Voyage solo",
    desc: "Itinéraire sécurisé, hébergements adaptés, rencontres locales authentiques.",
  },
  {
    img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage entre amis sur mesure",
    badge: "Amis",
    title: "Voyage entre amis",
    desc: "Aventures partagées, activités de groupe, hébergements conviviaux et adaptés.",
  },
  {
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage aventure sur mesure",
    badge: "Aventure",
    title: "Voyage aventure",
    desc: "Trek, safari, plongée, road trip — pour les voyageurs en quête d'adrénaline et de grand air.",
  },
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage de luxe sur mesure",
    badge: "Luxe",
    title: "Voyage de luxe",
    desc: "Hôtels 5 étoiles, services premium, expériences exclusives et conciergerie privée.",
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
        {TYPES.map((t) => (
          <a
            key={t.title}
            href="#cta-final"
            className="type-carousel-card flex flex-col"
          >
            <div className="relative h-44 sm:h-52 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={t.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={t.img}
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-[#3179C4] px-3 py-1 rounded-full text-[12px] font-semibold">
                  {t.badge}
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold text-on-surface mb-2">
                {t.title}
              </h3>
              <p className="font-body-md text-[13px] text-on-surface-variant mb-3">
                {t.desc}
              </p>
              <span className="mt-auto text-[#3179C4] font-label text-[13px] font-bold flex items-center gap-1">
                Nous contacter{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
