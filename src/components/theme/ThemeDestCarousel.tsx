"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { slugForDestinationName, destinationImg } from "@/lib/destinations";

type Card = {
  href: string;
  img: string;
  alt: string;
  badge: string;
  name: string;
  desc: string;
};

/**
 * Lien de la carte : si une fiche destination existe pour ce nom, on pointe
 * vers /destination/<slug> ; sinon on conserve le href fourni (souvent
 * /destinations, ou /destination-<slug> pour les fiches riches Japon/Thaïlande).
 */
function resolveHref(card: Card): string {
  if (card.href && card.href !== "/destinations") return card.href;
  const slug = slugForDestinationName(card.name);
  return slug ? `/destination/${slug}` : card.href || "/destinations";
}

/**
 * Carrousel de destinations propre à une page thème : reçoit ses cartes en
 * props (cohérence garantie avec le sujet — pas de liste générique partagée).
 * Réutilise les styles .dest-carousel-* du gabarit destination.
 */
export default function ThemeDestCarousel({ cards }: { cards: Card[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
            className="dest-carousel-card"
            onClick={() => router.push(resolveHref(c))}
          >
            <div className="h-48 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={c.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                src={destinationImg(c.name) ?? c.img}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]">
                {c.badge}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-h3 text-[18px] font-bold mb-1">{c.name}</h4>
              <p className="text-[13px] text-on-surface-variant mb-3">{c.desc}</p>
              <Link
                className="discover-link font-label text-[13px] flex items-center gap-2 transition-all text-primary"
                href={resolveHref(c)}
                onClick={(e) => e.stopPropagation()}
              >
                DÉCOUVRIR{" "}
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
