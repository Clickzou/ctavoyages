"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

/** Routes avec un hero plein écran sombre : header transparent autorisé en haut de page. */
const TRANSPARENT_ROUTES = new Set([
  "/",
  "/sejours",
  "/circuits",
  "/croisieres",
  "/glamping",
  "/catalogue-sportif",
  "/voyage-sur-mesure",
]);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header transparent en haut d'une page à hero plein écran (offres + fiches
  // destination /destination-*), menu mobile fermé.
  const overHero =
    (TRANSPARENT_ROUTES.has(pathname) ||
      pathname.startsWith("/destination-") ||
      pathname.startsWith("/destination/") ||
      // Pages thème (ex. /sejours/balneaire) : hero plein écran sombre.
      pathname.startsWith("/sejours/") ||
      pathname.startsWith("/circuits/") ||
      pathname.startsWith("/croisieres/") ||
      pathname.startsWith("/glamping/") ||
      pathname.startsWith("/voyage-sur-mesure/")) &&
    !scrolled &&
    !menuOpen;

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  const toggleSub = (key: string) =>
    setOpenSub((prev) => (prev === key ? null : key));

  const navLink = `font-h2 text-[13px] font-semibold uppercase tracking-wide transition-colors py-1 border-b-2 border-transparent ${
    overHero
      ? "text-white hover:text-[#FBBF12] hover:border-[#FBBF12]"
      : "text-[#1A1A1A] hover:text-[#3179C4] hover:border-[#3179C4]"
  }`;
  const navTrigger = `flex items-center gap-1 font-h2 text-[13px] font-semibold uppercase tracking-wide transition-colors py-1 border-b-2 border-transparent ${
    overHero
      ? "text-white group-hover:text-[#FBBF12] group-hover:border-[#FBBF12]"
      : "text-[#1A1A1A] group-hover:text-[#3179C4] group-hover:border-[#3179C4]"
  }`;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 h-[72px] transition-all duration-300 ${
          overHero ? "bg-transparent" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-gutter h-full">
          <Link className="flex-shrink-0" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="CTA Voyages — Agence de voyages sur mesure à Toulouse"
              className="h-[48px] sm:h-[56px] w-auto transition-opacity duration-300"
                src={
                  overHero
                    ? "/assets/images/Logo CTA Voyages blanc.png"
                    : "/assets/images/Logo CTA Voyages.png"
                }
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
              <Link className={navLink} href="/">
                Accueil
              </Link>
              <div className="relative group">
                <button className={navTrigger}>
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
              <Link className={navLink} href="/destinations">
                Destinations
              </Link>
              <Link className={navLink} href="/blog">
                Blog
              </Link>
              <div className="relative group">
                <button className={navTrigger}>
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
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/demande-renseignement"
              className={`hidden sm:inline-flex px-4 lg:px-6 py-2.5 rounded-lg font-label text-label uppercase tracking-wide active:scale-95 transition-all text-[13px] lg:text-[14px] ${
                overHero
                  ? "bg-white/10 backdrop-blur-sm text-white border-[1.5px] border-white hover:bg-white hover:text-[#3179C4]"
                  : "bg-white text-[#3179C4] border-[1.5px] border-[#3179C4] hover:bg-[#3179C4] hover:text-white shadow-sm"
              }`}
            >
              Un renseignement ?
            </Link>
            <button
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                overHero ? "hover:bg-white/15" : "hover:bg-surface-container"
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span
                className={`material-symbols-outlined text-[28px] ${
                  overHero ? "text-white" : "text-on-surface"
                }`}
              >
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
            className="block py-3 px-4 font-h2 text-[14px] font-semibold uppercase tracking-wide text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
            href="/"
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <div>
            <button
              className="w-full flex items-center justify-between py-3 px-4 font-h2 text-[14px] font-semibold uppercase tracking-wide text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
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
            className="block py-3 px-4 font-h2 text-[14px] font-semibold uppercase tracking-wide text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
            href="/destinations"
            onClick={closeMenu}
          >
            Destinations
          </Link>
          <Link
            className="block py-3 px-4 font-h2 text-[14px] font-semibold uppercase tracking-wide text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
            href="/blog"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <div>
            <button
              className="w-full flex items-center justify-between py-3 px-4 font-h2 text-[14px] font-semibold uppercase tracking-wide text-[#1A1A1A] hover:text-[#3179C4] hover:bg-surface-container-low rounded-lg"
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
            className="block w-full bg-white text-[#3179C4] border-[1.5px] border-[#3179C4] py-3 rounded-lg font-label text-label uppercase tracking-wide hover:bg-[#3179C4] hover:text-white transition-all shadow-sm text-center"
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
