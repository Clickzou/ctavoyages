"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { destinationHref, destinationImg } from "@/lib/destinations";

type Card = {
  href: string;
  img: string;
  alt: string;
  badge: string;
  badgeSport?: boolean;
  name: string;
  desc: string;
  cta: string;
  sport?: boolean;
};

// Liste partagée « Autres destinations » (carrousel commun à toutes les fiches).
const CARDS: Card[] = [
  {
    href: "/destination-thailande",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=300&fit=crop&auto=format",
    alt: "Temple bouddhiste en Thaïlande",
    badge: "ASIE",
    name: "Thaïlande",
    desc: "Temples dorés, plages tropicales et douceur de vivre.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destination-japon",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=300&fit=crop&auto=format",
    alt: "Temple de Kyoto entouré de cerisiers au Japon",
    badge: "ASIE",
    name: "Japon",
    desc: "Tradition millénaire, modernité et art de vivre raffiné.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=500&h=300&fit=crop&auto=format",
    alt: "Lagon turquoise île Maurice",
    badge: "OCÉAN INDIEN",
    name: "Île Maurice",
    desc: "Lagons turquoise et adresses de charme en bord d'océan.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=500&h=300&fit=crop&auto=format",
    alt: "Médina de Marrakech au Maroc",
    badge: "AFRIQUE",
    name: "Maroc",
    desc: "Médinas animées, désert du Sahara et charme d'un riad.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=500&h=300&fit=crop&auto=format",
    alt: "Montagnes Rocheuses au Canada",
    badge: "AMÉRIQUES",
    name: "Canada",
    desc: "Grands espaces sauvages, Rocheuses et villes chaleureuses.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=300&fit=crop&auto=format",
    alt: "Aurores boréales en Laponie",
    badge: "EUROPE",
    name: "Laponie",
    desc: "Aurores boréales, étendues enneigées et nuit en igloo hôtel.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/catalogue-sportif",
    img: "/assets/images/angleterre.jpg",
    alt: "Stade de football en Angleterre",
    badge: "SPORT",
    badgeSport: true,
    sport: true,
    name: "Angleterre",
    desc: "Premier League, Boxing Day et 6 Nations dans les grands stades anglais.",
    cta: "VOIR LE CATALOGUE",
  },
  {
    href: "/catalogue-sportif",
    img: "/assets/images/espagne.jpg",
    alt: "Grand stade en Espagne événement sportif",
    badge: "SPORT",
    badgeSport: true,
    sport: true,
    name: "Espagne",
    desc: "Liga, NFL Madrid Game, Formule 1 et Moto GP en Espagne.",
    cta: "VOIR LE CATALOGUE",
  },
];

export default function DestCarousel({ excludeName }: { excludeName?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const cards = excludeName
    ? CARDS.filter((c) => c.name !== excludeName)
    : CARDS;

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".dest-carousel-card");
    const amt = card ? card.offsetWidth + 24 : 324;
    if (direction === 1) {
      const mx = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= mx - 5)
        track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: amt, behavior: "smooth" });
    } else {
      if (track.scrollLeft <= 5)
        track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      else track.scrollBy({ left: -amt, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
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
      <div className="dest-carousel-track" ref={trackRef}>
        {cards.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className={`dest-carousel-card${c.sport ? " sport-carousel-card" : ""}`}
            onClick={() => router.push(destinationHref(c.name, c.href))}
          >
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={c.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                src={destinationImg(c.name) ?? c.img}
              />
              {c.badgeSport ? (
                <div className="absolute top-4 left-4 bg-[#e74c3c]/90 px-3 py-1 rounded-full text-label font-label text-white text-[12px]">
                  {c.badge}
                </div>
              ) : (
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]">
                  {c.badge}
                </div>
              )}
            </div>
            <div className="p-4">
              <h4 className="font-h3 text-[18px] font-bold mb-1">{c.name}</h4>
              <p className="text-[13px] text-on-surface-variant mb-3">{c.desc}</p>
              <Link
                className={`discover-link font-label text-[13px] flex items-center gap-2 transition-all ${
                  c.sport ? "text-[#e74c3c]" : "text-primary"
                }`}
                href={destinationHref(c.name, c.href)}
                onClick={(e) => e.stopPropagation()}
              >
                {c.cta}{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
