"use client";

import { useEffect, useRef } from "react";

type Inspiration = {
  img: string;
  alt: string;
  badge: string;
  title: string;
  desc: string;
};

const INSPIRATIONS: Inspiration[] = [
  {
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Glamping Laponie — cabane sous les aurores boréales",
    badge: "LAPONIE",
    title: "Igloo de verre sous les aurores boréales",
    desc: "Dormir dans un igloo panoramique en Finlande et observer les aurores boréales depuis son lit.",
  },
  {
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
    alt: "Lodge safari Kenya",
    badge: "KENYA",
    title: "Lodge safari au cœur du Masai Mara",
    desc: "Un lodge de luxe face à la savane, avec vue sur les animaux sauvages et couchers de soleil inoubliables.",
  },
  {
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&h=400&fit=crop&auto=format",
    alt: "Cabane forêt Canada",
    badge: "CANADA",
    title: "Cabane en rondins au bord d'un lac canadien",
    desc: "Une cabane isolée dans la forêt boréale avec jacuzzi, bain nordique et canoë sur le lac au lever du soleil.",
  },
  {
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Campement désert Maroc",
    badge: "MAROC",
    title: "Campement de luxe dans les dunes du Sahara",
    desc: "Des tentes berbères somptueuses au cœur des dunes de Merzouga, avec dîner aux étoiles et promenade à dos de dromadaire.",
  },
  {
    img: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?w=600&h=400&fit=crop&auto=format",
    alt: "Éco-lodge Costa Rica",
    badge: "COSTA RICA",
    title: "Éco-lodge en forêt tropicale",
    desc: "Un lodge suspendu dans la canopée du Costa Rica, entre biodiversité exceptionnelle et nature sauvage.",
  },
  {
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format",
    alt: "Ryokan Japon nature",
    badge: "JAPON",
    title: "Ryokan traditionnel avec bains onsen",
    desc: "Un ryokan isolé dans les Alpes japonaises, avec bains thermaux privatifs et vue sur les montagnes enneigées.",
  },
];

export default function InspirationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const goToCta = () => {
    const target = document.getElementById("cta-final");
    if (target) {
      const offset =
        target.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const scrollByDir = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".carousel-card");
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
    const auto = () => {
      if (paused) return;
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= max - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const c = track.querySelector<HTMLElement>(".carousel-card");
        track.scrollBy({ left: c ? c.offsetWidth + 24 : 384, behavior: "smooth" });
      }
    };
    const id = setInterval(auto, 5000);
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
      <div className="carousel-track" ref={trackRef}>
        {INSPIRATIONS.map((d) => (
          <div
            key={d.badge}
            className="carousel-card bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden group cursor-pointer border border-outline-variant/30"
            onClick={goToCta}
          >
            <div className="h-52 sm:h-64 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={d.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={d.img}
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]">
                {d.badge}
              </div>
            </div>
            <div className="p-4 sm:p-card_padding">
              <h4 className="card-title font-h3 text-[20px] sm:text-[22px] font-bold mb-2">
                {d.title}
              </h4>
              <p className="card-desc font-body-md text-[14px] sm:text-[16px] text-on-surface-variant mb-4">
                {d.desc}
              </p>
              <a
                className="discover-link text-primary font-label text-label text-[13px] sm:text-[14px] flex items-center hover:gap-2 transition-all"
                href="#cta-final"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToCta();
                }}
              >
                NOUS CONTACTER{" "}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
