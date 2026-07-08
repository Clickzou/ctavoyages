"use client";

import { useEffect, useState } from "react";

type Profile = {
  key: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  badgeDefault: string;
  badgeHover: string;
  teaser: string;
  text: string;
  mail: string;
};

const PROFILES: Profile[] = [
  {
    key: "caroline",
    name: "Caroline Guiraud",
    role: "Attachée clientèle voyage",
    image: "/caroline.JPEG",
    alt: "Caroline Guiraud — Attachée clientèle voyage",
    badgeDefault: "Voyages sur mesure",
    badgeHover: "Conseil voyage",
    teaser:
      "Plus de 30 années d’expérience au service de vos projets de voyages en France, en Europe et à l’international.",
    text: "Plus de 30 années d’expérience au service de vos projets de voyages en France, en Europe et à l’international. Caroline vous accompagne dans la construction d’un séjour fluide, personnalisé et adapté à vos envies.",
    mail: "mailto:caroline.guiraud@cta-events.com",
  },
  {
    key: "stephanie",
    name: "Stéphanie Belbes",
    role: "Attachée clientèle voyage et sport",
    image: "/stephanie.JPEG",
    alt: "Stéphanie Belbes — Attachée clientèle voyage et sport",
    badgeDefault: "Conseil voyage",
    badgeHover: "Voyages sur mesure",
    teaser:
      "Plus de 30 années d’expérience pour vous guider dans vos séjours loisirs, voyages sur mesure et expériences sportives.",
    text: "Plus de 30 années d’expérience pour vous guider dans vos séjours loisirs, voyages sur mesure et expériences sportives. Stéphanie vous conseille à chaque étape pour créer un séjour qui vous ressemble.",
    mail: "mailto:stephanie.belbes@cta-events.com",
  },
];

export default function TeamSection() {
  const [active, setActive] = useState<Profile | null>(null);

  // Verrou du scroll + fermeture au clavier (Échap) quand la modale est ouverte.
  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROFILES.map((p) => (
          <article className="team-card" key={p.key}>
            <div className="team-photo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="team-photo" src={p.image} alt={p.alt} />
              <span className="team-badge">
                <span className="badge-default">{p.badgeDefault}</span>
                <span className="badge-hover">{p.badgeHover}</span>
              </span>
            </div>
            <div className="team-card-body">
              <h3 className="team-name">{p.name}</h3>
              <p className="team-role">{p.role}</p>
              <p className="team-description">{p.teaser}</p>
              <div className="team-actions">
                <button
                  type="button"
                  className="team-more-link"
                  onClick={() => setActive(p)}
                >
                  En savoir plus{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* MODALE PROFIL */}
      <div
        className={`team-modal-overlay${active ? " modal-open" : ""}`}
        aria-hidden={active ? "false" : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
      >
        <div
          className="team-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
          aria-describedby="team-modal-text"
        >
          <div className="team-modal-grid">
            <div className="team-modal-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active?.image ?? PROFILES[0].image}
                alt={active?.alt ?? "Portrait de la conseillère voyage"}
              />
            </div>
            <div className="team-modal-content">
              <button
                type="button"
                className="team-modal-close"
                onClick={() => setActive(null)}
                aria-label="Fermer la fiche profil"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <h2 id="team-modal-title" className="team-modal-title">
                {active?.name}
              </h2>
              <p className="team-modal-role">{active?.role}</p>
              <p id="team-modal-text" className="team-modal-text">
                {active?.text}
              </p>
              <a
                href={active?.mail ?? "mailto:voyages@cta-events.com"}
                className="inline-flex items-center gap-2 bg-[#3179C4] text-white font-label text-[13px] px-5 py-3 rounded-lg hover:bg-[#004191] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
