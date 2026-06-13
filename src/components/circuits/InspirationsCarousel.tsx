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
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit au Japon",
    badge: "JAPON",
    title: "Tokyo, Kyoto & Alpes japonaises",
    desc: "Un itinéraire entre modernité, traditions et nature, pensé étape par étape.",
  },
  {
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit au Canada",
    badge: "CANADA",
    title: "Des Rocheuses à Québec",
    desc: "Un circuit grands espaces entre lacs, montagnes, villes historiques et nature sauvage.",
  },
  {
    img: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit au Costa Rica",
    badge: "COSTA RICA",
    title: "Volcans, jungle & côte Pacifique",
    desc: "Un voyage rythmé entre volcans actifs, forêts tropicales et plages sauvages.",
  },
  {
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit au Maroc",
    badge: "MAROC",
    title: "Marrakech, Atlas & Sahara",
    desc: "Une immersion entre médinas, kasbahs, vallées berbères et dunes infinies.",
  },
  {
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit en Thaïlande",
    badge: "THAÏLANDE",
    title: "Bangkok, temples & îles du Sud",
    desc: "Un circuit équilibré entre culture, gastronomie, jungle et farniente en fin de voyage.",
  },
  {
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Circuit en Laponie",
    badge: "LAPONIE",
    title: "Forêts boréales & aurores boréales",
    desc: "Un circuit d'hiver entre nature arctique, activités nordiques et hébergements insolites.",
  },
];

export default function InspirationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

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

  const goToCta = () => {
    const target = document.getElementById("cta-final");
    if (target) {
      const offset =
        target.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top: offset, behavior: "smooth" });
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
      <div className="carousel-track" id="circuit-carousel" ref={trackRef}>
        {INSPIRATIONS.map((c, i) => (
          <div
            key={`${c.badge}-${i}`}
            className="carousel-card bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden group cursor-pointer border border-outline-variant/30"
            onClick={goToCta}
          >
            <div className="h-52 sm:h-64 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={c.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={c.img}
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]">
                {c.badge}
              </div>
            </div>
            <div className="p-4 sm:p-card_padding">
              <h4 className="card-title font-h3 text-[20px] sm:text-[22px] font-bold mb-2">
                {c.title}
              </h4>
              <p className="card-desc font-body-md text-[14px] sm:text-[16px] text-on-surface-variant mb-4">
                {c.desc}
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
                IMAGINER CE CIRCUIT{" "}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
