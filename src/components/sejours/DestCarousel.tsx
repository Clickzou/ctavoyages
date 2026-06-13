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

// Seule la page Japon existe ; les autres destinations pointent vers /destinations.
const DESTS: Dest[] = [
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour au Maroc — riad et médina",
    badge: "AFRIQUE",
    name: "Maroc",
    desc: "Riads de charme, désert du Sahara et médinas millénaires.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour à l'Île Maurice — resort et lagon",
    badge: "OCÉAN INDIEN",
    name: "Île Maurice",
    desc: "Resorts de charme, lagons turquoise et douceur tropicale.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour aux Seychelles — plages et nature",
    badge: "OCÉAN INDIEN",
    name: "Seychelles",
    desc: "Rochers de granit, eaux cristallines et nature préservée.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour à Zanzibar — plages et épices",
    badge: "AFRIQUE",
    name: "Zanzibar",
    desc: "Plages de sable blanc, épices et Stone Town historique.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour en Thaïlande — temples et plages",
    badge: "ASIE",
    name: "Thaïlande",
    desc: "Temples dorés, îles turquoise et cuisine légendaire.",
  },
  {
    href: "/destination-japon",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour au Japon — ryokans et temples",
    badge: "ASIE",
    name: "Japon",
    desc: "Ryokans traditionnels, temples millénaires et gastronomie d'exception.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour en Laponie — aurores boréales et cabanes",
    badge: "EUROPE",
    name: "Laponie",
    desc: "Aurores boréales, rennes et cabanes sous les étoiles arctiques.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Londres — Big Ben",
    badge: "EUROPE",
    name: "Londres",
    desc: "Big Ben, musées world-class et scène culinaire vibrante.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Amsterdam — canaux",
    badge: "EUROPE",
    name: "Amsterdam",
    desc: "Canaux romantiques, musées incontournables et vélos à l'infini.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Porto — azulejos et Douro",
    badge: "EUROPE",
    name: "Porto",
    desc: "Azulejos, caves à vin du Douro et fado dans les ruelles dorées.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
    alt: "Escapade à Rome — Colisée",
    badge: "EUROPE",
    name: "Rome",
    desc: "Colisée, Vatican, piazzas baroques et dolce vita à l'italienne.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour au Canada — Rocheuses",
    badge: "AMÉRIQUES",
    name: "Canada",
    desc: "Rocheuses, Banff, Québec et immensités sauvages du Grand Nord.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?w=600&h=400&fit=crop&auto=format",
    alt: "Séjour au Costa Rica — forêt tropicale",
    badge: "AMÉRIQUES",
    name: "Costa Rica",
    desc: "Volcans actifs, forêts tropicales et biodiversité exceptionnelle.",
  },
];

export default function DestCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  // Animation d'apparition au scroll (translateX + fade)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>(".carousel-card")
    );
    if (!cards.length) return;
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateX(60px)";
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            cards.forEach((c, i) => {
              setTimeout(() => {
                c.style.opacity = "1";
                c.style.transform = "translateX(0)";
                c.style.transition = "opacity 0.5s, transform 0.5s";
              }, i * 150);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(cards[0]);
    return () => obs.disconnect();
  }, []);

  // Auto-scroll toutes les 5 secondes
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
