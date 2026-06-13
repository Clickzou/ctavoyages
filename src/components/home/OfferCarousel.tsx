"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Offer = {
  href: string;
  img: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
  cta: string;
};

const OFFERS: Offer[] = [
  {
    href: "/sejours",
    img: "/assets/images/iStock-2236715619 (1).jpg",
    alt: "Séjours hôtels clubs et resorts — CTA Voyages",
    tag: "Séjours",
    title: "Hôtels, clubs & resorts",
    desc: "Des séjours tout compris adaptés à votre budget et vos envies, en France et à l'international.",
    cta: "Découvrir",
  },
  {
    href: "/circuits",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop&auto=format",
    alt: "Circuits culturels et découverte — CTA Voyages",
    tag: "Circuits",
    title: "Circuits & itinéraires",
    desc: "Voyagez à votre rythme ou avec un guide expert. Circuits individuels, accompagnés ou en groupe.",
    cta: "Découvrir",
  },
  {
    href: "/croisieres",
    img: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop&auto=format",
    alt: "Croisières en mer — CTA Voyages",
    tag: "Croisières",
    title: "Croisières & voyages en mer",
    desc: "Transport, hébergement, restauration et animations à bord. Une expérience complète sur les mers du monde.",
    cta: "Découvrir",
  },
  {
    href: "/glamping",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&auto=format",
    alt: "Glamping hébergement insolite nature — CTA Voyages",
    tag: "Nature",
    title: "Glamping & hébergements insolites",
    desc: "Le meilleur de la nature avec le confort du haut de gamme. Tentes lodges, cabanes, igloo hôtels et bien plus.",
    cta: "Découvrir",
  },
  {
    href: "/catalogue-sportif",
    img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop&auto=format",
    alt: "Catalogue sportif — CTA Voyages",
    tag: "Sport",
    title: "Catalogue sportif",
    desc: "Football, Rugby, NBA, NFL, Formule 1, Moto GP, Boxing Day : vivez les plus grands événements sportifs du monde.",
    cta: "Découvrir",
  },
  {
    href: "/voyage-sur-mesure",
    img: "/assets/images/iStock-891573112.jpg",
    alt: "Voyages sur mesure personnalisés — CTA Voyages",
    tag: "Voyages sur mesure",
    title: "Voyages sur mesure",
    desc: "Votre itinéraire, vos dates, votre rythme. Nous construisons pas à pas le voyage qui vous ressemble, de A à Z.",
    cta: "En savoir plus",
  },
];

export default function OfferCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".offer-carousel-card");
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
        const c = track.querySelector<HTMLElement>(".offer-carousel-card");
        track.scrollBy({ left: c ? c.offsetWidth + 24 : 384, behavior: "smooth" });
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
      <div className="offer-carousel-track" ref={trackRef}>
        {OFFERS.map((o) => (
          <div
            key={o.href}
            className="offer-carousel-card flex flex-col"
            onClick={() => router.push(o.href)}
          >
            <div className="h-48 sm:h-56 w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={o.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={o.img}
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <span className="offer-tag inline-flex items-center gap-1 px-3 py-1 mb-4 text-xs font-label text-on-surface-variant bg-surface-container-high rounded uppercase w-fit transition-all">
                <span
                  className="offer-star material-symbols-outlined text-[14px] hidden"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                {o.tag}
              </span>
              <h3 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mb-3">
                {o.title}
              </h3>
              <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant mb-6 sm:mb-8">
                {o.desc}
              </p>
              <div className="mt-auto">
                <Link
                  href={o.href}
                  onClick={(e) => e.stopPropagation()}
                  className="offer-btn w-full py-3 px-6 rounded-lg font-label text-sm block text-center"
                >
                  {o.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
