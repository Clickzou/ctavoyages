"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  /** Titre affiché par-dessus la slide. La 1re slide porte le <h1> de la page. */
  title: string;
  subtitle: string;
};

// Slides du hero de la home, dans l'ordre choisi. Chaque slide a son propre
// titre (rêve + sérieux) et son accroche.
const SLIDES: Slide[] = [
  {
    src: "/grece.jpg",
    alt: "Village aux maisons blanches et dômes bleus en Grèce",
    title: "Agence de voyage sur mesure",
    subtitle:
      "Séjours, circuits, croisières, glamping, catalogue sportif et voyages sur mesure. Votre conseiller dédié conçoit le voyage qui vous ressemble, de A à Z.",
  },
  {
    src: "/ile-maurice-chapelle.jpg",
    alt: "Chapelle pittoresque au bord de l'eau, Île Maurice",
    title: "La déconnexion, version paradis",
    subtitle:
      "Lagons scintillants, adresses de charme et douceur de vivre insulaire — un séjour taillé à vos envies, loin du tumulte du quotidien.",
  },
  {
    src: "/vacances-agence-de-voyage.jpg",
    alt: "Vacances de rêve organisées par une agence de voyage",
    title: "Lâchez prise, on pense à tout",
    subtitle:
      "Déconnexion totale et souvenirs plein la tête : de la première idée au retour, un conseiller dédié orchestre chaque détail de votre voyage.",
  },
  {
    src: "/plage-thailande.jpg",
    alt: "Plage paradisiaque aux eaux turquoise en Thaïlande",
    title: "Le dépaysement, les pieds dans l'eau",
    subtitle:
      "Eaux turquoise, plages de sable fin et farniente sous les tropiques — l'évasion balnéaire pensée pour vous, sans la moindre contrainte.",
  },
  {
    src: "/maroc-ruelle.jpg",
    alt: "Ruelle traditionnelle colorée d'une médina au Maroc",
    title: "Plongez au cœur d'une autre culture",
    subtitle:
      "Médinas envoûtantes, ruelles colorées et traditions vivantes — un voyage immersif et dépaysant, bâti avec un expert qui connaît le terrain.",
  },
  {
    src: "/tanzanie.jpg",
    alt: "Troupeau d'éléphants en safari dans la savane de Tanzanie",
    title: "Face à la vie sauvage, en toute sérénité",
    subtitle:
      "Savane à perte de vue, troupeaux d'éléphants et paysages époustouflants : vivez le safari de vos rêves, nous gérons toute la logistique.",
  },
];

const INTERVAL_MS = 5000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* IMAGES (fondu enchaîné) */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            alt={slide.alt}
            src={slide.src}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* CONTENU (titre par slide + CTA fixes) */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter w-full">
          <div className="max-w-3xl">
            {/* Pile de titres/accroches : un seul visible à la fois.
                La 1re slide porte le <h1> (toujours présent dans le DOM pour le SEO),
                les suivantes sont des <div> stylés à l'identique. */}
            <div className="grid mb-6 sm:mb-10">
              {SLIDES.map((slide, i) => {
                const active = i === index;
                const stateClass = `transition-opacity duration-1000 ease-in-out ${
                  active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`;
                const titleClass =
                  "font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]";
                return (
                  <div
                    key={slide.src}
                    className={stateClass}
                    style={{ gridArea: "1 / 1" }}
                    aria-hidden={!active}
                  >
                    {i === 0 ? (
                      <h1 className={titleClass}>{slide.title}</h1>
                    ) : (
                      <div className={titleClass} role="heading" aria-level={2}>
                        {slide.title}
                      </div>
                    )}
                    <p className="font-body-lg text-[16px] sm:text-[18px] md:text-[20px] text-white/90 max-w-2xl">
                      {slide.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA fixes */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#cta-final"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBBF12] to-[#f5a623] text-[#1A1A1A] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-label text-label text-[13px] sm:text-[14px] shadow-[0_8px_24px_-6px_rgba(251,191,18,0.65)] hover:shadow-[0_12px_30px_-6px_rgba(251,191,18,0.8)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center"
              >
                Demander un devis gratuit
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                href="#map-section"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/70 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] hover:border-white hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center"
              >
                <span className="material-symbols-outlined text-[18px]">
                  travel_explore
                </span>
                Voir nos destinations
              </a>
            </div>

            {/* Réassurance */}
            <div className="hero-trust flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-6 sm:gap-x-8">
              <div className="flex items-center gap-2 text-white/70 text-[12px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  check_circle
                </span>
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-[12px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  check_circle
                </span>
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-[12px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  check_circle
                </span>
                <span>Contact sous 48h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll (souris) */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-mouse">
          <span className="hero-mouse-wheel" />
        </span>
        <span className="material-symbols-outlined hero-scroll-chevron">
          keyboard_arrow_down
        </span>
      </div>

      {/* Puces de navigation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Afficher la photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-7 bg-[#FBBF12]"
                : "w-2.5 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </>
  );
}
