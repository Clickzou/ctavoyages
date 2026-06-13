"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Dest = {
  href: string;
  img: string;
  alt: string;
  badge: string;
  name: string;
  desc: string;
};

// Seule la page Japon existe ; les autres pointent vers /destinations.
const DESTS: Dest[] = [
  {
    href: "/destination-japon",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure au Japon",
    badge: "ASIE",
    name: "Japon",
    desc: "Entre traditions séculaires et modernité fulgurante.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage en Thaïlande",
    badge: "ASIE",
    name: "Thaïlande",
    desc: "Temples dorés, îles turquoise et cuisine légendaire.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage au Maroc",
    badge: "AFRIQUE",
    name: "Maroc",
    desc: "Marrakech, désert du Sahara et médinas millénaires.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage à l'Île Maurice",
    badge: "OCÉAN INDIEN",
    name: "Île Maurice",
    desc: "Lagons turquoise, resorts de charme et douceur tropicale.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage aux Seychelles",
    badge: "OCÉAN INDIEN",
    name: "Seychelles",
    desc: "Rochers de granit, eaux cristallines et nature préservée.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage en Laponie",
    badge: "EUROPE",
    name: "Laponie",
    desc: "Aurores boréales, rennes et cabanes sous les étoiles.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Londres",
    badge: "EUROPE",
    name: "Londres",
    desc: "Big Ben, musées world-class, marchés vintage et scène culinaire.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Amsterdam",
    badge: "EUROPE",
    name: "Amsterdam",
    desc: "Canaux romantiques, musées incontournables et vélos à l'infini.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Porto",
    badge: "EUROPE",
    name: "Porto",
    desc: "Azulejos, caves à vin du Douro et fado dans les ruelles dorées.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Rome",
    badge: "EUROPE",
    name: "Rome",
    desc: "Colisée, Vatican, piazzas baroques et dolce vita à l'italienne.",
  },
];

export default function DestCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".carousel-card");
    const amt = card ? card.offsetWidth + 24 : 384;
    const mx = track.scrollWidth - track.clientWidth;
    if (direction === 1) {
      if (track.scrollLeft >= mx - 5)
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
      const mx = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= mx - 5) {
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
    <div className="relative bg-white">
      <button
        className="carousel-arrow arrow-left hidden sm:flex"
        onClick={() => scrollBy(-1)}
        aria-label="Précédent"
      >
        <span className="material-symbols-outlined text-[22px]">chevron_left</span>
      </button>
      <button
        className="carousel-arrow arrow-right hidden sm:flex"
        onClick={() => scrollBy(1)}
        aria-label="Suivant"
      >
        <span className="material-symbols-outlined text-[22px]">chevron_right</span>
      </button>
      <div className="carousel-track" ref={trackRef}>
        {DESTS.map((d, i) => (
          <div
            key={`${d.name}-${i}`}
            className="carousel-card bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden group cursor-pointer border border-outline-variant/30"
            onClick={() => router.push(d.href)}
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
              <h4 className="font-h3 text-[20px] sm:text-[22px] font-bold mb-2">
                {d.name}
              </h4>
              <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant mb-4">
                {d.desc}
              </p>
              <Link
                className="discover-link text-primary font-label text-label text-[13px] sm:text-[14px] flex items-center hover:gap-2 transition-all"
                href={d.href}
                onClick={(e) => e.stopPropagation()}
              >
                DÉCOUVRIR{" "}
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
