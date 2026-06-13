import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

export const metadata: Metadata = {
  title: "Merci",
  description:
    "Merci pour votre demande. Nos attachées clientèle prennent contact avec vous sous 48h pour vous proposer une offre personnalisée.",
};

export default function MerciPage() {
  return (
    <main className="pt-[72px]">
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-gutter">
        <div className="max-w-[600px] mx-auto text-center py-16 sm:py-24">
          <span
            className="anim-check material-symbols-outlined text-[80px] sm:text-[100px] text-green-600 mb-6 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>

          <h1 className="anim-fade-1 font-h1 text-[28px] sm:text-[36px] md:text-[42px] font-bold text-on-surface mb-4 leading-tight">
            Merci pour votre demande !
          </h1>

          <p className="anim-fade-2 font-body-lg text-[16px] sm:text-[18px] text-on-surface-variant leading-relaxed mb-4">
            Votre message a bien été envoyé. Nos attachées clientèle prennent
            contact avec vous <strong>sous 48h</strong> pour affiner votre
            demande et vous proposer une offre personnalisée.
          </p>

          <p className="anim-fade-2 font-body-md text-[14px] sm:text-[16px] text-on-surface-variant leading-relaxed mb-4 font-bold">
            En attendant, n&apos;hésitez pas à explorer nos destinations et nos
            offres.
          </p>

          <div className="anim-fade-3 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">
                home
              </span>{" "}
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-white text-[#3179C4] border-[1.5px] border-[#3179C4] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-[#3179C4] hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>{" "}
              Voir nos destinations
            </Link>
          </div>

          <div className="anim-fade-4 bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-xl p-6 sm:p-8 text-left">
            <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold text-white mb-5 text-center">
              Nos coordonnées
            </h3>
            <div className="flex flex-col gap-4">
              <a
                className="font-body-md text-[14px] text-white/90 hover:text-[#FBBF12] transition-colors flex items-center gap-3"
                href="mailto:voyages@cta-events.com"
              >
                <span className="material-symbols-outlined text-[20px] text-[#FBBF12]">
                  mail
                </span>
                voyages@cta-events.com
              </a>
              <p className="font-body-md text-[14px] text-white/90 flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#FBBF12]">
                  call
                </span>
                +33 (0)5 34 391 391
              </p>
              <p className="font-body-md text-[14px] text-white/90 flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#FBBF12]">
                  calendar_today
                </span>
                Lun–Jeu : 9h-18h · Ven : 9h-17h
              </p>
              <a
                className="font-body-md text-[14px] text-white/90 hover:text-[#FBBF12] transition-colors flex items-center gap-3"
                href="https://www.google.com/maps/place/99+Rue+de+Fenouillet,+31200+Toulouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px] text-[#FBBF12]">
                  location_on
                </span>
                99 rue de Fenouillet, 31200 Toulouse
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
