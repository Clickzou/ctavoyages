import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/boxing-day/FaqList";

export const metadata: Metadata = {
  title: "Séjour Boxing Day - CTA Voyages",
  description:
    "Vivez la magie du Football Boxing Day en Angleterre avec CTA Voyages. Chelsea, Liverpool, Manchester United — billets officiels et séjour féerique inclus. Devis gratuit.",
};

export default function BoxingDayPage() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section
        className="relative w-full flex items-end sm:items-center overflow-hidden"
        style={{ minHeight: "520px", height: "68vh", maxHeight: "760px" }}
      >
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Stade anglais — Boxing Day CTA Voyages"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            src="/assets/images/iStock-1479691232-2.jpg"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="font-label text-label text-white/80 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
              Catalogue sportif · Boxing Day
            </p>
            <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
              Vivez la magie du foot anglais pendant les fêtes
            </h1>
            <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
              Le Boxing Day est une tradition ancrée dans l&apos;ADN du football
              britannique. Vibrez au rythme de la Premier League le 26 décembre
              dans une ambiance unique au monde.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
              <a
                href="#cta-final"
                className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
              >
                Réserver mon pack Boxing Day
              </a>
              <Link
                href="/catalogue-sportif"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
              >
                Voir tous les packs
              </Link>
            </div>
            <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
              <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                  calendar_today
                </span>
                26 décembre
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                  sports_soccer
                </span>
                Premier League
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                  location_on
                </span>
                Royaume-Uni
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                  check_circle
                </span>
                Contact sous 48h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-bg-blue py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface mb-4 sm:mb-6">
              Une tradition incontournable du football mondial
            </h2>
            <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
              Chaque année, au lendemain de Noël, la Premier League enflamme les
              stades du Royaume-Uni avec une journée de rencontres
              spectaculaires. Assister à un match de Boxing Day, c&apos;est
              plonger au cœur d&apos;une fête sportive où familles, supporters et
              voyageurs du monde entier vibrent ensemble. De Londres à Manchester,
              Liverpool ou Newcastle, un séjour Boxing Day vous promet des
              souvenirs inoubliables et une immersion totale dans la magie des
              fêtes en Angleterre.
            </p>
          </div>
        </div>
      </section>

      {/* OFFRE PACK */}
      <section className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-primary font-label text-label mb-2 tracking-wider">
              VOTRE SÉJOUR CLÉ EN MAIN
            </p>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Une offre voyage complète de A à Z
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="/assets/images/iStock-2278746282.jpg"
                alt="Stade Premier League"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  confirmation_number
                </span>
                <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Billets officiels
                </h4>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Places garanties pour les chocs du 26 décembre (Chelsea,
                  Liverpool, Man. Utd...).
                </p>
              </div>
            </div>

            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format"
                alt="Hôtel Angleterre"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  hotel
                </span>
                <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Hébergement
                </h4>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Hôtel sélectionné avec soin, situé au cœur de l&apos;ambiance
                  festive des fêtes.
                </p>
              </div>
            </div>

            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&h=400&fit=crop&auto=format"
                alt="Voyage Angleterre"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  flight
                </span>
                <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Transports
                </h4>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Vols, transferts et logistique complète pour un week-end sans
                  stress.
                </p>
              </div>
            </div>

            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=400&fit=crop&auto=format"
                alt="Marché de Noël Londres"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  auto_awesome
                </span>
                <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Expérience Noël
                </h4>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Visites de stades, musées ou marchés de Noël pour prolonger la
                  féerie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPS FORTS */}
      <section className="section-bg-blue py-section_padding_v boxing-day-features">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-primary font-label text-label mb-2 tracking-wider">
              LES MOMENTS FORTS
            </p>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Pourquoi choisir un séjour Boxing Day&nbsp;?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="unified-card">
              <div className="card-content w-full">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">
                    history
                  </span>
                </div>
                <h4 className="font-h3 text-[17px] sm:text-[19px] font-bold mb-3">
                  Un moment historique
                </h4>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant">
                  Une tradition qui remonte au XIXème siècle, devenue le
                  rendez-vous incontournable du calendrier anglais.
                </p>
              </div>
            </div>

            <div className="unified-card">
              <div className="card-content w-full">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">
                    stadium
                  </span>
                </div>
                <h4 className="font-h3 text-[17px] sm:text-[19px] font-bold mb-3">
                  Affiches légendaires
                </h4>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant">
                  Les plus grands clubs de Premier League s&apos;affrontent dans
                  des stades combles et survoltés.
                </p>
              </div>
            </div>

            <div className="unified-card">
              <div className="card-content w-full">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">
                    festival
                  </span>
                </div>
                <h4 className="font-h3 text-[17px] sm:text-[19px] font-bold mb-3">
                  Ambiance familiale
                </h4>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant">
                  Une atmosphère festive unique, mêlant passion du foot et
                  convivialité des fêtes de fin d&apos;année.
                </p>
              </div>
            </div>

            <div className="unified-card">
              <div className="card-content w-full">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">
                    location_city
                  </span>
                </div>
                <h4 className="font-h3 text-[17px] sm:text-[19px] font-bold mb-3">
                  Villes en fête
                </h4>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant">
                  Londres, Liverpool ou Manchester brillent de mille feux avec
                  leurs illuminations et marchés de Noël.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-white py-section_padding_v"
        role="region"
        aria-label="Questions fréquentes sur le Boxing Day"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
              Questions fréquentes
            </span>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Tout savoir sur le Boxing Day
            </h2>
          </div>
          <FaqList />
        </div>
      </section>

      {/* CTA BANDEAU */}
      <section id="cta-final" className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">
                Vivez la magie du Boxing Day
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                Parlez-nous de votre projet. Nos attachées clientèle prennent
                contact avec vous sous 48h pour composer votre week-end foot
                anglais sur mesure.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/demande-devis"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+33534391391"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>{" "}
                  +33 (0)5 34 391 391
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
