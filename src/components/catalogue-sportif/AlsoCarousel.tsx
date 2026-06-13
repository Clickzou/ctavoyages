"use client";

import Link from "next/link";
import { useRef } from "react";

type AlsoCard = {
  href: string;
  img: string;
  alt: string;
  badge: string;
  sport: boolean;
  title: string;
  desc: string;
  cta: string;
};

const CARDS: AlsoCard[] = [
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=300&fit=crop&auto=format",
    alt: "Séjour à Londres entre sport, culture et grands stades",
    badge: "EUROPE",
    sport: false,
    title: "Londres",
    desc: "Premier League, Boxing Day, 6 Nations et city-break vibrant.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=300&fit=crop&auto=format",
    alt: "Escapade à Rome entre patrimoine italien et événements sportifs",
    badge: "EUROPE",
    sport: false,
    title: "Rome",
    desc: "Serie A, rugby des 6 Nations, Colisée et dolce vita italienne.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/destinations",
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=500&h=300&fit=crop&auto=format",
    alt: "Voyage au Canada entre grands espaces et Grand Prix de Montréal",
    badge: "AMÉRIQUES",
    sport: false,
    title: "Canada",
    desc: "Montréal, Grand Prix du Canada, nature immense et villes chaleureuses.",
    cta: "DÉCOUVRIR",
  },
  {
    href: "/catalogue-sportif#packs-sportifs",
    img: "/assets/images/usa.jpg",
    alt: "Séjour sportif aux États-Unis pour vivre la NBA et la NFL",
    badge: "SPORT",
    sport: true,
    title: "États-Unis",
    desc: "NBA, NFL, grandes arènes américaines et ambiance spectaculaire.",
    cta: "VOIR LES OFFRES",
  },
  {
    href: "/catalogue-sportif#packs-sportifs",
    img: "/assets/images/monaco.jpg",
    alt: "Grand Prix de Formule 1 à Monaco",
    badge: "SPORT",
    sport: true,
    title: "Monaco",
    desc: "Le Grand Prix mythique, entre circuit urbain et expérience premium.",
    cta: "VOIR LES OFFRES",
  },
  {
    href: "/catalogue-sportif#packs-sportifs",
    img: "/assets/images/emirats_arabes_unis.jpg",
    alt: "Grand Prix de Formule 1 à Abu Dhabi aux Émirats arabes unis",
    badge: "SPORT",
    sport: true,
    title: "Abu Dhabi",
    desc: "Grand Prix de Formule 1, Yas Marina et séjour haut de gamme.",
    cta: "VOIR LES OFFRES",
  },
  {
    href: "/catalogue-sportif#packs-sportifs",
    img: "/assets/images/irlande.jpg",
    alt: "Séjour rugby en Irlande pour le tournoi des 6 Nations",
    badge: "SPORT",
    sport: true,
    title: "Irlande",
    desc: "Rugby, 6 Nations, Dublin et ambiance unique à l’Aviva Stadium.",
    cta: "VOIR LES OFFRES",
  },
];

export default function AlsoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".also-carousel-card");
    const amount = card ? card.offsetWidth + 24 : 324;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (direction === 1) {
      if (track.scrollLeft >= maxScroll - 5)
        track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: amount, behavior: "smooth" });
    } else {
      if (track.scrollLeft <= 5)
        track.scrollTo({ left: maxScroll, behavior: "smooth" });
      else track.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <button
        className="carousel-arrow arrow-left hidden sm:flex"
        type="button"
        onClick={() => scrollByDir(-1)}
        aria-label="Précédent"
      >
        <span className="material-symbols-outlined text-[22px]">chevron_left</span>
      </button>
      <button
        className="carousel-arrow arrow-right hidden sm:flex"
        type="button"
        onClick={() => scrollByDir(1)}
        aria-label="Suivant"
      >
        <span className="material-symbols-outlined text-[22px]">chevron_right</span>
      </button>
      <div className="also-carousel-track" ref={trackRef}>
        {CARDS.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className={
              c.sport
                ? "also-carousel-card also-sport-card"
                : "also-carousel-card"
            }
            data-cursor-color={c.sport ? "red" : undefined}
          >
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={c.alt}
                className="w-full h-full object-cover"
                src={c.img}
              />
              <div
                className={
                  c.sport
                    ? "absolute top-4 left-4 bg-[#e74c3c]/90 px-3 py-1 rounded-full text-label font-label text-white text-[12px]"
                    : "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]"
                }
              >
                {c.badge}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-h3 text-[18px] font-bold mb-1">{c.title}</h4>
              <p className="text-[13px] text-on-surface-variant mb-3">{c.desc}</p>
              <span
                className={
                  c.sport
                    ? "discover-link text-[#e74c3c] font-label text-[13px] flex items-center gap-2 transition-all"
                    : "discover-link text-primary font-label text-[13px] flex items-center gap-2 transition-all"
                }
              >
                {c.cta}
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
