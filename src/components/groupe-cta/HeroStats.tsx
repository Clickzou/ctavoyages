"use client";

import { useEffect, useRef } from "react";

function formatNumber(n: number, separator?: string) {
  if (!separator) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export default function HeroStats() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const counters = hero.querySelectorAll<HTMLElement>(".counter-value");
    if (!counters.length) return;
    let played = false;

    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const suffix = el.dataset.suffix || "";
      const separator = el.dataset.separator || "";
      const duration = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent =
          formatNumber(Math.round(eased * target), separator) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            played = true;
            counters.forEach(animateCounter);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-group" ref={heroRef}>
      <div className="hero-bg-carousel" aria-hidden="true">
        <div
          className="hero-bg-slide sop"
          style={{ backgroundImage: "url('/assets/images/hero_sop.jpg')" }}
        ></div>
        <div
          className="hero-bg-slide bt"
          style={{ backgroundImage: "url('/assets/images/hero_cta_bt.jpg')" }}
        ></div>
        <div
          className="hero-bg-slide me"
          style={{ backgroundImage: "url('/assets/images/hero_cta_me.jpg')" }}
        ></div>
      </div>

      <div className="hero-inner">
        <div>
          <span className="hero-kicker">Groupe CTA</span>
          <h1 className="hero-title">
            Quatre expertises pour créer des expériences qui rapprochent
          </h1>
          <p className="hero-text">
            Depuis plus de 30 ans, le Groupe CTA accompagne entreprises et
            particuliers dans leurs voyages, déplacements professionnels et
            événements. Notre ambition : concevoir des moments utiles, fluides et
            mémorables, avec l&apos;humain au cœur de chaque projet.
          </p>
        </div>

        <aside
          className="hero-entities"
          aria-label="Accès rapides aux expertises du Groupe CTA"
        >
          <a
            href="/"
            className="hero-entity-card"
            style={
              {
                "--entity-bg":
                  "linear-gradient(135deg, #004191, #2974be, #73a6d8)",
                "--entity-glow": "rgba(115, 166, 216, .55)",
              } as React.CSSProperties
            }
          >
            <span>
              <strong>CTA Voyages</strong>
              <span>Voyages individuels, séjours et expériences sur mesure</span>
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>

          <a
            href="#sop-events"
            className="hero-entity-card"
            style={
              {
                "--entity-bg": "linear-gradient(135deg, #cb1d48, #dc3d31)",
                "--entity-glow": "rgba(220, 61, 49, .55)",
              } as React.CSSProperties
            }
          >
            <span>
              <strong>SOP Events</strong>
              <span>Événements, team buildings, soirées et incentives</span>
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>

          <a
            href="#business-travel"
            className="hero-entity-card"
            style={
              {
                "--entity-bg": "#1481C2",
                "--entity-glow": "rgba(20, 129, 194, .55)",
              } as React.CSSProperties
            }
          >
            <span>
              <strong>CTA Business Travel</strong>
              <span>Déplacements professionnels et plateforme corporate</span>
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>

          <a
            href="#meeting-events"
            className="hero-entity-card"
            style={
              {
                "--entity-bg": "#477ff7",
                "--entity-glow": "rgba(71, 127, 247, .55)",
              } as React.CSSProperties
            }
          >
            <span>
              <strong>CTA Meeting &amp; Events</strong>
              <span>Événements MICE, inscriptions et pilotage participants</span>
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </aside>
      </div>

      <div className="hero-stats-wrap" aria-label="Chiffres clés du Groupe CTA">
        <div className="hero-stats-box">
          <div className="hero-stats-grid">
            <div className="hero-stat">
              <span
                className="hero-stat-number counter-value"
                data-target="30"
                data-suffix="+"
              >
                0
              </span>
              <span className="hero-stat-label">années d&apos;expertise</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number counter-value" data-target="4">
                0
              </span>
              <span className="hero-stat-label">métiers complémentaires</span>
            </div>
            <div className="hero-stat">
              <span
                className="hero-stat-number counter-value"
                data-target="1500"
                data-separator=" "
              >
                0
              </span>
              <span className="hero-stat-label">événements annuels</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">assistance business travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
