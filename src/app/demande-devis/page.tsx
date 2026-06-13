import "./styles.css";
import type { Metadata } from "next";
import DevisForm from "@/components/demande-devis/DevisForm";

export const metadata: Metadata = {
  title: "Demande de devis - CTA Voyages",
  description:
    "Demandez un devis gratuit pour votre prochain voyage. Séjours, circuits, croisières, glamping ou voyages sur mesure — nos attachées clientèle vous recontactent sous 48h.",
};

export default function DemandeDevisPage() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{ minHeight: "300px", height: "40vh", maxHeight: "440px" }}
      >
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Demande de devis voyage"
            className="w-full h-full object-cover"
            src="/assets/images/iStock-489525460.jpg"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full text-center">
          <p className="font-label text-label text-white/70 mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
            Votre projet sur mesure
          </p>
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-[44px] text-white mb-4 leading-[1.1]">
            Concevons ensemble votre voyage idéal
          </h1>
          <p className="font-body-lg text-[15px] sm:text-[18px] text-white/90 max-w-2xl mx-auto">
            Confiez-nous vos envies. Nos attachées clientèle prennent contact avec vous sous 48h pour affiner votre
            projet.
          </p>
        </div>
      </section>

      {/* FORMULAIRE MULTI-ÉTAPES */}
      <section className="py-12 sm:py-16 px-4 sm:px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <DevisForm />

          {/* Réassurance */}
          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-outline-variant/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#3179C4] text-[28px] sm:text-[32px] flex-shrink-0">
                verified_user
              </span>
              <div>
                <h4 className="font-bold text-[14px] sm:text-[15px] mb-1">Expertise locale</h4>
                <p className="text-on-surface-variant text-[13px]">Des spécialistes passionnés par chaque destination.</p>
              </div>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-outline-variant/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#3179C4] text-[28px] sm:text-[32px] flex-shrink-0">
                thumb_up
              </span>
              <div>
                <h4 className="font-bold text-[14px] sm:text-[15px] mb-1">Zéro frais de dossier</h4>
                <p className="text-on-surface-variant text-[13px]">Une tarification transparente et directe.</p>
              </div>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-outline-variant/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#3179C4] text-[28px] sm:text-[32px] flex-shrink-0">
                timer
              </span>
              <div>
                <h4 className="font-bold text-[14px] sm:text-[15px] mb-1">Contact sous 48h</h4>
                <p className="text-on-surface-variant text-[13px]">
                  Nos attachées clientèle prennent contact rapidement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
