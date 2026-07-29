import "./styles.css";
import type { Metadata } from "next";
import TeamSection from "@/components/equipe/TeamSection";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  alternates: { canonical: "/equipe" },
  title: "Nos conseillères voyages sur mesure à Toulouse",
  description:
    "Découvrez l'équipe CTA Voyages. Caroline et Stéphanie conçoivent vos séjours individuels ou en groupe, en France, en Europe et à l'international, avec un accompagnement personnalisé.",
};

export default function EquipePage() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="hero-team py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter relative z-10 w-full">
          <div className="max-w-3xl">
            <p className="font-label text-label text-white/70 mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
              L&apos;équipe CTA Voyages
            </p>
            <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.2]">
              Des conseillères dédiées pour imaginer votre prochain voyage
            </h1>
            <p className="font-body-lg text-[16px] sm:text-[18px] text-white/90 leading-relaxed max-w-2xl">
              Nos attachées clientèle conçoivent des séjours individuels ou en
              groupe, en France comme à l&apos;international, pour répondre à
              toutes vos envies d&apos;évasion.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
              Accompagnement personnalisé
            </p>
            <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-6">
              Votre projet, notre expertise
            </h2>
            <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
              Voyage en famille, séjour à la plage, découverte de pays, week-end
              en Europe, parenthèse détente, parcs à thème ou simple billet
              d&apos;avion… Caroline et Stéphanie élaborent pour vous des séjours
              dans toute l&apos;Europe mais aussi à l&apos;international, avec un
              accompagnement personnalisé à chaque étape.
            </p>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section id="equipe" className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
              Nos conseillères
            </p>
            <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
              Une équipe à votre écoute
            </h2>
          </div>

          <TeamSection />

          <div className="mt-10 text-center">
            <a
              href="#contact-equipe"
              className="inline-flex items-center justify-center gap-2 bg-[#3179C4] text-white font-label text-[13px] sm:text-[14px] px-6 py-3 rounded-lg hover:bg-[#004191] transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contacter l&apos;équipe CTA Voyages
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-equipe" className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">
                Vous avez une demande ?
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                Parlez-nous de votre projet. Notre équipe vous accompagne pour
                construire votre séjour, vérifier une disponibilité ou répondre à
                votre demande de voyage.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:voyages@cta-events.com"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  voyages@cta-events.com
                </a>
                <a
                  href="tel:+33534391391"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  05 34 391 391
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>{" "}
                  Réponse personnalisée
                </span>
                <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>{" "}
                  Accompagnement dédié
                </span>
                <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>{" "}
                  Contact sous 48h
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        className="w-full py-12 sm:py-16"
        style={{ backgroundColor: "#004191" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="text-center lg:text-left max-w-xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span
                  className="material-symbols-outlined text-[#FBBF12] text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  mail
                </span>
                <p className="font-label text-[12px] sm:text-[14px] text-white/70 tracking-wider uppercase">
                  Newsletter
                </p>
              </div>
              <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-3">
                Ne manquez rien de notre actualité
              </h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                Recevez en avant-première nos meilleures offres, nos nouveaux
                itinéraires et nos conseils de voyage directement dans votre
                boîte mail.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[420px]">
              <NewsletterForm />
              <div className="flex items-center gap-4 mt-4 justify-center sm:justify-start">
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] sm:text-[12px]">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#FBBF12]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Gratuit
                </div>
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] sm:text-[12px]">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#FBBF12]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Sans spam
                </div>
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] sm:text-[12px]">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#FBBF12]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Désinscription libre
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
