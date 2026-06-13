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
    img: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière Méditerranée",
    badge: "MÉDITERRANÉE",
    title: "Rome, Barcelone & Côte d'Azur",
    desc: "Un grand classique méditerranéen entre patrimoine, gastronomie et rivages ensoleillés.",
  },
  {
    img: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière fjords norvégiens",
    badge: "EUROPE DU NORD",
    title: "Fjords norvégiens & aurores boréales",
    desc: "Paysages époustouflants, nature sauvage et lumières polaires dans les eaux du Grand Nord.",
  },
  {
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière Caraïbes",
    badge: "CARAÏBES",
    title: "Îles des Caraïbes & Antilles",
    desc: "Plages de sable blanc, eaux cristallines et escales paradisiaques dans les îles des Caraïbes.",
  },
  {
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière îles grecques",
    badge: "GRÈCE",
    title: "Santorin, Mykonos & Rhodes",
    desc: "Les incontournables des îles grecques entre architecture cycladique, sites antiques et mer Égée.",
  },
  {
    img: "https://images.unsplash.com/photo-1589979481223-deb893043163?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière Océan Indien",
    badge: "OCÉAN INDIEN",
    title: "Maurice, Seychelles & Zanzibar",
    desc: "Cap sur les plus belles îles tropicales entre lagons turquoise et nature préservée.",
  },
  {
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
    alt: "Croisière fluviale Europe",
    badge: "EUROPE FLUVIALE",
    title: "Douro, Rhin & Danube",
    desc: "Vignobles, châteaux et cités historiques au fil des plus beaux fleuves d'Europe à bord d'un bateau de croisière.",
  },
];

export default function InspirationCarousel() {
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

  const goToCta = () => {
    const target = document.getElementById("cta-final");
    if (target) {
      const offset =
        target.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

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
            key={d.title}
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
