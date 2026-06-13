import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/nba/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Séjour NBA - CTA Voyages",
  description:
    "Vivez un match NBA à New York ou Los Angeles avec CTA Voyages. Knicks, Nets, Lakers, Clippers — billets officiels, hôtel, vols et expériences inclus. Devis gratuit.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels matchs NBA proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selon la programmation : les New York Knicks, Brooklyn Nets, Los Angeles Lakers et Los Angeles Clippers.",
      },
    },
    {
      "@type": "Question",
      name: "Que comprend le pack NBA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Billets officiels, hôtel 4 étoiles, vols aller-retour, transferts et assistance sur place.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on assister à plusieurs matchs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, des options multi-matchs sont tout à fait possibles.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je demander un devis gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien sûr. Nos attachées clientèle prennent contact avec vous sous 48h, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function NbaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-[72px]">
        {/* HERO */}
        <section
          className="relative w-full flex items-end sm:items-center overflow-hidden"
          style={{ minHeight: "520px", height: "68vh", maxHeight: "760px" }}
        >
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Match NBA — CTA Voyages"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&h=900&fit=crop&auto=format"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <p className="font-label text-label text-white/80 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Catalogue sportif · NBA
              </p>
              <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
                Voyagez et vibrez pour le basket américain
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                LeBron James, Victor Wembanyama, Luka Dončić, Steph Curry — des
                séjours clés en main à New York et Los Angeles avec billets
                officiels, hôtel, vols et expériences exclusives.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#destinations-nba"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Nos destinations NBA
                </a>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Billets officiels
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Vols inclus
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Hôtel 4 étoiles
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
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface mb-4 sm:mb-6">
                Des séjours NBA clés en main aux États-Unis
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Envie de réaliser le rêve de tout fan de basket ? Offrez-vous un
                voyage NBA à New York ou Los Angeles et vibrez au rythme des plus
                grands matchs de la saison. Que ce soit au Madison Square Garden,
                au Barclays Center ou au flambant neuf Intuit Dome, assistez à des
                rencontres d&apos;exception où évoluent les plus grandes stars de
                la ligue. Nos séjours NBA combinent billets de match, hôtel 4
                étoiles, vols aller-retour et expériences exclusives pour
                transformer votre passion en voyage inoubliable.
              </p>
            </div>
          </div>
        </section>

        {/* CE QUE COMPREND LE PACK */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOTRE PACK NBA
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
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop&auto=format"
                  alt="Arène NBA"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    confirmation_number
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Billets officiels
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Knicks, Nets, Lakers, Clippers — accès garanti aux arènes les
                    plus mythiques de la NBA.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format"
                  alt="Hôtel 4 étoiles"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    hotel
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Hôtel 4 étoiles
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Séjour en hôtel 4 étoiles avec petits-déjeuners, idéalement
                    situé à Manhattan ou Los Angeles.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&h=400&fit=crop&auto=format"
                  alt="Vol transatlantique"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    flight
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Vols A/R
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Vols aller-retour Paris — États-Unis et transferts
                    aéroport-hôtel inclus.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&h=400&fit=crop&auto=format"
                  alt="Times Square New York"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    museum
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Expériences
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Times Square, Empire State Building, Venice Beach — option
                    deuxième match NBA disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESTINATIONS NBA */}
        <section className="bg-white py-section_padding_v" id="destinations-nba">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                LES DESTINATIONS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Les destinations phares pour un séjour NBA
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <a
                href="#cta-final"
                className="nba-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="newyork"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_basketball
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="États-Unis"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  New York
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300 mb-3">
                  Vibrez au mythique Madison Square Garden (Knicks) ou au Barclays
                  Center (Nets) et explorez Times Square, Central Park et
                  l&apos;Empire State Building.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full transition-all group-hover:bg-white/20 group-hover:text-white">
                    Knicks
                  </span>
                  <span className="text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full transition-all group-hover:bg-white/20 group-hover:text-white">
                    Nets
                  </span>
                  <span className="text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full transition-all group-hover:bg-white/20 group-hover:text-white">
                    Madison Square Garden
                  </span>
                </div>
              </a>

              <a
                href="#cta-final"
                className="nba-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="losangeles"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_basketball
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="États-Unis"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Los Angeles
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300 mb-3">
                  Encouragez les Lakers de LeBron James ou les Clippers au Staples
                  Center et au nouvel Intuit Dome, entre plages de Venice Beach et
                  ambiance californienne.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full transition-all group-hover:bg-white/20 group-hover:text-white">
                    Lakers
                  </span>
                  <span className="text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full transition-all group-hover:bg-white/20 group-hover:text-white">
                    Clippers
                  </span>
                  <span className="text-[11px] font-label bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full transition-all group-hover:bg-white/20 group-hover:text-white">
                    Intuit Dome
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <section className="section-bg-blue py-section_padding_v human-support-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-2">
                NOTRE MÉTHODE
              </p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">
                Votre American Trip NBA, de A à Z
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      forum
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Choisissez votre match
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Dites-nous quelle équipe, quelle ville et quelles dates vous
                    intéressent. Nos conseillers composent votre séjour idéal.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      confirmation_number
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Nous composons votre pack
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Billets officiels, hôtel 4 étoiles, vols, transferts et
                    options multi-matchs — tout est organisé.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      sports_score
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Vivez l&apos;expérience NBA
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après le match, nous assurons une assistance
                    personnalisée pour que votre voyage soit parfait.
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
          aria-label="Questions fréquentes sur nos séjours NBA"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
                Questions fréquentes
              </span>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Questions fréquentes sur nos séjours NBA
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
                  Réalisez votre rêve NBA
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Dites-nous quelle équipe vous fait vibrer. Nos conseillers
                  prennent contact avec vous sous 48h pour composer votre rêve
                  américain sur mesure.
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
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                  <span className="text-white/75 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Devis gratuit
                  </span>
                  <span className="text-white/75 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Sans engagement
                  </span>
                  <span className="text-white/75 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Contact sous 48h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                <p className="font-label text-[12px] sm:text-[14px] text-white/80 tracking-wider uppercase">
                  Newsletter
                </p>
              </div>
              <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-3">
                Ne manquez aucun événement sportif
              </h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                Recevez en avant-première nos nouveaux packs sportifs, les dates
                des grands matchs et nos offres exclusives.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[420px]">
              <NewsletterForm />
              <div className="flex items-center gap-4 mt-4 justify-center sm:justify-start">
                <div className="flex items-center gap-1.5 text-white/75 text-[11px] sm:text-[12px]">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#FBBF12]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Gratuit
                </div>
                <div className="flex items-center gap-1.5 text-white/75 text-[11px] sm:text-[12px]">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#FBBF12]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Sans spam
                </div>
                <div className="flex items-center gap-1.5 text-white/75 text-[11px] sm:text-[12px]">
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
    </>
  );
}
