"use client";

import { useState } from "react";
import Link from "next/link";

/** Liens de navigation partagés (Header + Footer). */
export const OFFERS = [
  { label: "Séjours", href: "/sejours" },
  { label: "Circuits", href: "/circuits" },
  { label: "Croisières", href: "/croisieres" },
  { label: "Glamping", href: "/glamping" },
  { label: "Voyages sur mesure", href: "/voyage-sur-mesure" },
  { label: "Catalogue sportif", href: "/catalogue-sportif" },
];

const ABOUT = [
  { label: "Le Groupe CTA", href: "/groupe-cta" },
  { label: "Nos engagements RSE", href: "/engagements-rse" },
  { label: "L'équipe CTA Voyages", href: "/equipe" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  const toggleSub = (key: string) =>
    setOpenSub((prev) => (prev === key ? null : key));

  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-sm h-[72px] bg-white">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-gutter h-full">
          <div className="flex items-center gap-6 lg:gap-12">
            <Link className="flex-shrink-0" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="CTA Voyages — Agence de voyages sur mesure à Toulouse"
                className="h-[36px] sm:h-[40px] w-auto"
                src="/assets/images/Logo CTA Voyages.png"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                className="font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] transition-colors pb-1 border-b-2 border-transparent hover:border-[#3179C4]"
                href="/"
              >
                Accueil
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] transition-colors pb-1 border-b-2 border-transparent group-hover:border-[#3179C4]">
                  Nos offres{" "}
                  <span className="material-symbols-outlined text-sm">
                    keyboard_arrow_down
                  </span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {OFFERS.map((o) => (
                    <Link
                      key={o.href}
                      className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-surface-container hover:text-[#3179C4]"
                      href={o.href}
                    >
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                className="font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] transition-colors pb-1 border-b-2 border-transparent hover:border-[#3179C4]"
                href="/destinations"
              >
                Destinations
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] transition-colors pb-1 border-b-2 border-transparent group-hover:border-[#3179C4]">
                  En savoir plus{" "}
                  <span className="material-symbols-outlined text-sm">
                    keyboard_arrow_down
                  </span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {ABOUT.map((a) => (
                    <Link
                      key={a.href}
                      className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-surface-container hover:text-[#3179C4]"
                      href={a.href}
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/demande-renseignement"
              className="hidden sm:inline-flex bg-white text-[#3179C4] border-[1.5px] border-[#3179C4] px-4 lg:px-6 py-2.5 rounded-lg font-label text-label hover:bg-[#3179C4] hover:text-white active:scale-95 transition-all shadow-sm text-[13px] lg:text-[14px]"
            >
              Un renseignement ?
            </Link>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span className="material-symbols-outlined text-[28px] text-on-surface">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay + panneau mobile */}
      <div
        className={`mobile-menu-overlay${menuOpen ? " menu-open" : ""}`}
        onClick={closeMenu}
      />
      <nav className={`mobile-menu-panel${menuOpen ? " menu-open" : ""}`}>
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="CTA Voyages logo"
            className="h-[32px] w-auto"
            src="/assets/images/Logo CTA Voyages.png"
          />
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container"
            aria-label="Fermer le menu"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <div className="p-4 flex flex-col gap-1">
          <Link
            className="block py-3 px-4 font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
            href="/"
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <div>
            <button
              className="w-full flex items-center justify-between py-3 px-4 font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
              onClick={() => toggleSub("offers")}
            >
              Nos offres{" "}
              <span
                className="material-symbols-outlined text-sm transition-transform duration-300"
                style={{
                  transform:
                    openSub === "offers" ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                keyboard_arrow_down
              </span>
            </button>
            <div
              className={`mobile-submenu ml-4${
                openSub === "offers" ? " sub-open" : ""
              }`}
            >
              {OFFERS.map((o) => (
                <Link
                  key={o.href}
                  className="block py-2.5 px-4 text-[14px] text-on-surface-variant hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
                  href={o.href}
                  onClick={closeMenu}
                >
                  {o.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            className="block py-3 px-4 font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
            href="/destinations"
            onClick={closeMenu}
          >
            Destinations
          </Link>
          <div>
            <button
              className="w-full flex items-center justify-between py-3 px-4 font-h2 text-[15px] font-medium text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
              onClick={() => toggleSub("about")}
            >
              En savoir plus{" "}
              <span
                className="material-symbols-outlined text-sm transition-transform duration-300"
                style={{
                  transform:
                    openSub === "about" ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                keyboard_arrow_down
              </span>
            </button>
            <div
              className={`mobile-submenu ml-4${
                openSub === "about" ? " sub-open" : ""
              }`}
            >
              {ABOUT.map((a) => (
                <Link
                  key={a.href}
                  className="block py-2.5 px-4 text-[14px] text-on-surface-variant hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
                  href={a.href}
                  onClick={closeMenu}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-outline-variant mt-2">
          <Link
            href="/demande-renseignement"
            className="block w-full bg-white text-[#3179C4] border-[1.5px] border-[#3179C4] py-3 rounded-lg font-label text-label hover:bg-[#3179C4] hover:text-white transition-all shadow-sm text-center"
            onClick={closeMenu}
          >
            Un renseignement ?
          </Link>
          <div className="flex flex-col gap-3 mt-6">
            <a
              className="text-[14px] text-on-surface-variant flex items-center gap-2"
              href="mailto:voyages@cta-events.com"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>{" "}
              voyages@cta-events.com
            </a>
            <p className="text-[14px] text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">call</span>{" "}
              +33 (0)5 34 391 391
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
