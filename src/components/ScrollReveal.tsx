"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Anime l'entrée des éléments portant `data-reveal` quand ils entrent dans le
 * viewport. Variante via la valeur (fade-up, fade-down, fade-left, fade-right,
 * zoom, blur) et décalage via `data-reveal-delay` (en ms).
 * Respecte prefers-reduced-motion. Re-scanne le DOM à chaque navigation.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.reveal-in)"),
    );
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.getAttribute("data-reveal-delay");
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("reveal-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
