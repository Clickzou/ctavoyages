"use client";

import { useEffect, useRef } from "react";

type TypeHebergement = {
  img: string;
  alt: string;
  title: string;
  desc: string;
};

const TYPES: TypeHebergement[] = [
  {
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
    alt: "Tente lodge glamping",
    title: "Tente lodge",
    desc: "Grand espace, literie haut de gamme et terrasse privée — l'élégance du safari dans un décor naturel préservé.",
  },
  {
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&h=400&fit=crop&auto=format",
    alt: "Cabane dans les arbres",
    title: "Cabane dans les arbres",
    desc: "Perchée dans la canopée, avec vue panoramique sur la forêt — une expérience suspendue entre ciel et terre.",
  },
  {
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Igloo hôtel Laponie",
    title: "Igloo & cabane arctique",
    desc: "Dormir sous les aurores boréales dans un igloo de verre ou une cabane chauffée au cœur de la Laponie.",
  },
  {
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&auto=format",
    alt: "Bulle transparente nuit étoilée",
    title: "Bulle transparente",
    desc: "Dormir à la belle étoile dans une bulle de verre panoramique — une nuit magique entre ciel et nature.",
  },
  {
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format",
    alt: "Lodge safari Afrique",
    title: "Lodge safari",
    desc: "Au cœur de la savane africaine, des lodges d'exception offrant une immersion totale dans la vie sauvage.",
  },
  {
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&h=400&fit=crop&auto=format",
    alt: "Campement désert Maroc",
    title: "Campement du désert",
    desc: "Une nuit au cœur des dunes du Sahara dans un campement berbère de luxe, sous un ciel étoilé à couper le souffle.",
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
