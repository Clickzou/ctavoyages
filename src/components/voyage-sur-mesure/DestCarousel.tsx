"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { destinationHref, destinationImg } from "@/lib/destinations";

type Dest = {
  href: string;
  img: string;
  alt: string;
  badge: string;
  title: string;
  desc: string;
};

// Seule la page Japon existe ; les autres destinations pointent vers /destinations.
const DESTS: Dest[] = [
  {
    href: "/destination-japon",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure au Japon",
    badge: "JAPON",
    title: "Le Japon impérial",
    desc: "Temples millénaires, cerisiers en fleur et gastronomie unique.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure en Thaïlande",
    badge: "THAÏLANDE",
    title: "Temples dorés & îles turquoise",
    desc: "Bangkok, plages du sud, temples dorés et hospitalité légendaire.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure au Maroc",
    badge: "MAROC",
    title: "Marrakech & désert du Sahara",
    desc: "Riads, médinas, Atlas et dunes infinies du Sahara.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Île Maurice",
    badge: "ÎLE MAURICE",
    title: "Douceur tropicale & lagons",
    desc: "Lagons turquoise, hôtels de charme et douceur de vivre.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Seychelles",
    badge: "SEYCHELLES",
    title: "Rochers de granit & eaux cristallines",
    desc: "Plages préservées, nature exceptionnelle et tranquillité.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Zanzibar",
    badge: "ZANZIBAR",
    title: "Plages & Stone Town",
    desc: "Sable blanc, épices et histoire dans un cadre paradisiaque.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Canada",
    badge: "CANADA",
    title: "Rocheuses, Banff & Québec",
    desc: "Grands espaces sauvages, lacs et villes cosmopolites.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Costa Rica",
    badge: "COSTA RICA",
    title: "Volcans & forêts tropicales",
    desc: "Volcans actifs, biodiversité et plages sauvages.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Laponie",
    badge: "LAPONIE",
    title: "Aurores boréales & rennes",
    desc: "Cabanes sous les étoiles et nature arctique.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Londres",
    badge: "LONDRES",
    title: "Big Ben, musées & scène culinaire",
    desc: "Culture, gastronomie et marchés vintage.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Amsterdam",
    badge: "AMSTERDAM",
    title: "Canaux, musées & vélos",
    desc: "Canaux romantiques et musées incontournables.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Porto",
    badge: "PORTO",
    title: "Azulejos, Douro & fado",
    desc: "Ruelles dorées, caves à vin et gastronomie portugaise.",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&auto=format",
    alt: "Voyage sur mesure Rome",
    badge: "ROME",
    title: "Colisée, Vatican & dolce vita",
    desc: "Piazzas baroques, art millénaire et cuisine italienne.",
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
            key={`${d.badge}-${i}`}
            className="carousel-card bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden group cursor-pointer border border-outline-variant/30"
            onClick={() => router.push(destinationHref(d.badge, d.href))}
          >
            <div className="h-52 sm:h-64 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={d.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={destinationImg(d.badge) ?? d.img}
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
              <Link
                className="discover-link text-primary font-label text-label text-[13px] sm:text-[14px] flex items-center hover:gap-2 transition-all"
                href={destinationHref(d.badge, d.href)}
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
