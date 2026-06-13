import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/foot-europeen/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Séjour Football Européen - CTA Voyages",
  description:
    "Vivez les plus grands matchs de football européen avec CTA Voyages. Premier League, Liga, Serie A, Bundesliga — billets officiels, hôtel et transport inclus. Devis gratuit.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels clubs puis-je voir lors d'un voyage foot en Europe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arsenal, Chelsea, Manchester United, Manchester City, Real Madrid, Atlético, Bayern Munich, Borussia Dortmund, Inter Milan, Juventus et bien d'autres.",
      },
    },
    {
      "@type": "Question",
      name: "Que comprend un séjour foot ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Billets de match officiels, nuits d'hôtel avec petit-déjeuner et options de transport.",
      },
    },
    {
      "@type": "Question",
      name: "Où se déroulent les séjours proposés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À Londres, Manchester, Madrid, Milan, Munich et dans les plus grands stades d'Europe.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des séjours pour la Ligue des Champions ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous créons des offres sur mesure pour les matchs de Ligue des Champions, Europa League et Conference League.",
      },
    },
  ],
};

export default function FootEuropeenPage() {
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
              alt="Stade de football européen — CTA Voyages"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              src="/assets/images/iStock-1479681277.jpg"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Catalogue sportif · Football
              </p>
              <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
                Vivez les plus grands matchs de football en Europe
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                Premier League, Liga, Serie A, Bundesliga — des séjours clés en
                main avec billets officiels, hôtel et transport pour vivre
                l&apos;émotion du football au plus près des stades mythiques.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#championnats"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Les compétitions européennes
                </a>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Billets officiels
                </div>
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Hôtel inclus
                </div>
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Transport sur demande
                </div>
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
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
                Des séjours foot clés en main en Europe
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Que ce soit pour découvrir les stades mythiques de Londres,
                vibrer au Santiago Bernabéu à Madrid, assister à un match de
                Bundesliga en Allemagne ou encourager l&apos;Inter Milan à San
                Siro, nos séjours football vous offrent une immersion totale dans
                la passion du ballon rond. Chaque voyage combine billets de
                match, hôtel et options exclusives pour découvrir la ville hôte.
                Entre Premier League, Liga, Serie A ou Bundesliga, vivez la
                saison de football européen au plus près des plus grandes
                équipes.
              </p>
            </div>
          </div>
        </section>

        {/* CE QUE COMPREND LE PACK */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOTRE PACK FOOTBALL
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
                  src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=400&fit=crop&auto=format"
                  alt="Stade de football"
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
                    Premier League, Liga, Serie A, Bundesliga — accès aux stades
                    mythiques d&apos;Europe.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format"
                  alt="Hôtel européen"
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
                    Hôtel soigneusement sélectionné, en centre-ville ou à
                    proximité du stade.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&h=400&fit=crop&auto=format"
                  alt="Avion au décollage"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    flight
                  </span>
                  <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Transport
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Vol + hôtel et transferts disponibles selon la destination
                    choisie.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop&auto=format"
                  alt="Touristes en voyage"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    museum
                  </span>
                  <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Expériences
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Visites guidées, musées et gastronomie locale pour enrichir
                    votre week-end foot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LES TEMPS FORTS */}
        <section className="bg-white py-section_padding_v" id="championnats">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                LES CHAMPIONNATS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Les temps forts d&apos;un séjour football européen
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <a
                href="#cta-final"
                className="league-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="#39013C"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_soccer
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/gb-eng.png"
                      alt="Angleterre"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Premier League
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  Arsenal, Chelsea, Manchester United, Manchester City, Tottenham
                  à Londres ou Manchester — l&apos;atmosphère unique des stades
                  anglais.
                </p>
              </a>

              <a
                href="#cta-final"
                className="league-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="#FF4B44"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_soccer
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/es.png"
                      alt="Espagne"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Liga espagnole
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  Real Madrid et Atlético Madrid au Santiago Bernabéu — matchs
                  sous haute tension et ambiance caliente.
                </p>
              </a>

              <a
                href="#cta-final"
                className="league-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="#0074FF"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_soccer
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/it.png"
                      alt="Italie"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Serie A italienne
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  L&apos;Inter Milan et l&apos;AC Milan au Giuseppe Meazza, la
                  Juventus à Turin ou Naples au Diego Maradona Stadium.
                </p>
              </a>

              <a
                href="#cta-final"
                className="league-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="#D3010D"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_soccer
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/de.png"
                      alt="Allemagne"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Bundesliga
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  Borussia Dortmund au Signal Iduna Park ou Bayern Munich à
                  l&apos;Allianz Arena — les ambiances les plus électriques
                  d&apos;Europe.
                </p>
              </a>
            </div>

            {/* Compétitions européennes */}
            <a
              href="#cta-final"
              className="ucl-card group mt-8 block bg-gradient-to-r from-[#004191] to-[#3179C4] rounded-xl p-6 sm:p-8 text-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(49,121,196,.4)]"
            >
              <div className="ucl-stars absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="absolute text-white/20 text-[24px] top-[10%] left-[8%] animate-pulse">
                  ★
                </span>
                <span
                  className="absolute text-white/15 text-[18px] top-[15%] right-[12%] animate-pulse"
                  style={{ animationDelay: ".3s" }}
                >
                  ★
                </span>
                <span
                  className="absolute text-white/20 text-[22px] bottom-[15%] left-[15%] animate-pulse"
                  style={{ animationDelay: ".6s" }}
                >
                  ★
                </span>
                <span
                  className="absolute text-white/15 text-[16px] bottom-[20%] right-[8%] animate-pulse"
                  style={{ animationDelay: ".9s" }}
                >
                  ★
                </span>
                <span
                  className="absolute text-white/10 text-[28px] top-[40%] left-[3%] animate-pulse"
                  style={{ animationDelay: "1.2s" }}
                >
                  ★
                </span>
                <span
                  className="absolute text-white/15 text-[20px] top-[35%] right-[5%] animate-pulse"
                  style={{ animationDelay: ".4s" }}
                >
                  ★
                </span>
                <span
                  className="absolute text-white/10 text-[14px] bottom-[10%] left-[45%] animate-pulse"
                  style={{ animationDelay: ".7s" }}
                >
                  ★
                </span>
                <span
                  className="absolute text-white/20 text-[16px] top-[8%] left-[50%] animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  ★
                </span>
              </div>
              <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold text-white mb-2 flex items-center justify-center gap-2 relative z-10">
                <span className="material-symbols-outlined text-[#FBBF12]">
                  emoji_events
                </span>
                Compétitions européennes
              </h3>
              <p className="text-[14px] text-white/85 leading-relaxed relative z-10">
                Europa League et Ligue des Champions — vivez les soirées les plus
                intenses de la saison avec des offres sur mesure.
              </p>
            </a>
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
                Un séjour foot pensé de A à Z
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
                    Dites-nous quel club, quel championnat et quelles dates vous
                    intéressent. Nos conseillers trouvent le meilleur match pour
                    vous.
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
                    Billets officiels, hôtel, transport et activités culturelles
                    — tout est organisé pour un week-end foot sans souci.
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
                    Vivez le match
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après le match, nous assurons une
                    assistance personnalisée pour que votre expérience soit
                    parfaite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
                Questions fréquentes
              </span>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Questions fréquentes sur nos séjours football
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
                  Vivez la passion du football européen
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Dites-nous quel match vous fait rêver. Nos conseillers prennent
                  contact avec vous sous 48h pour composer votre week-end foot
                  sur mesure.
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
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Devis gratuit
                  </span>
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Sans engagement
                  </span>
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
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
      <section className="w-full py-12 sm:py-16" style={{ backgroundColor: "#004191" }}>
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
    </>
  );
}
