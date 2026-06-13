import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/rugby/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Séjour Rugby - CTA Voyages",
  description:
    "Vivez les plus grands événements rugby avec CTA Voyages. Champions Cup, 6 Nations, Quilter Nations Series — billets officiels, hôtel et transport inclus. Devis gratuit.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels événements rugby proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les finales de la Champions Cup et Challenge Cup, les matchs du Tournoi des 6 Nations et les rencontres du XV de France lors de la Quilter Nations Series.",
      },
    },
    {
      "@type": "Question",
      name: "Que comprend un pack rugby ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les billets officiels, l'hébergement en hôtel, les petits-déjeuners, les transferts selon formule et des options festives.",
      },
    },
    {
      "@type": "Question",
      name: "Quand réserver pour assister à un grand match de rugby ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le plus tôt possible. Les événements comme le Tournoi des 6 Nations ou les finales affichent complet très vite.",
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

export default function RugbyPage() {
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
              alt="Match de rugby — CTA Voyages"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 40%" }}
              src="/assets/images/iStock-1417770031.jpg"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Catalogue sportif · Rugby
              </p>
              <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
                Vivez les plus grands matchs et tournois de rugby européen
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                Champions Cup, 6 Nations, Quilter Nations Series — des séjours clés en
                main avec billets officiels, hôtel et options sur mesure pour plonger
                dans l&apos;univers de l&apos;ovalie.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#competitions-rugby"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Les compétitions rugby
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
                  Options festives
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
                Des séjours rugby clés en main en France et en Europe
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Plongez dans l&apos;ambiance unique de l&apos;ovalie avec nos séjours
                rugby en France et en Europe. Que ce soit pour assister aux finales de la
                Champions Cup et de la Challenge Cup, vibrer pendant le Tournoi des 6
                Nations, ou soutenir le XV de France pendant la Quilter Nations Series,
                nos voyages rugby vous promettent intensité, passion et convivialité. Des
                stades mythiques de Dublin à Murrayfield, en passant par Cardiff, Paris ou
                Bilbao, chaque destination offre une expérience sportive et culturelle
                exceptionnelle.
              </p>
            </div>
          </div>
        </section>

        {/* CE QUE COMPREND LE PACK */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOTRE PACK RUGBY
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
                  src="/assets/images/iStock-1268222741.jpg"
                  alt="Match de rugby dans un stade"
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
                    Champions Cup, Challenge Cup, 6 Nations, Quilter Nations Series —
                    accès aux plus grands événements rugby.
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
                    Hôtel 3 ou 4 étoiles avec petits-déjeuners, en centre-ville ou à
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
                    Transferts
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Transferts aéroport-hôtel-stade selon la formule choisie. Options vols
                    disponibles.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&h=400&fit=crop&auto=format"
                  alt="Supporters rugby"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    celebration
                  </span>
                  <h4 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Options festives
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Repas d&apos;avant-match, soirées festives, visites culturelles ou
                    excursions locales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LES COMPÉTITIONS */}
        <section className="bg-white py-section_padding_v" id="competitions-rugby">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                LES COMPÉTITIONS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Les grands rendez-vous rugby de la saison
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <a
                href="#cta-final"
                className="comp-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="champions"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_rugby
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/es.png"
                      alt="Espagne"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Champions Cup &amp; Challenge Cup
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  En 2026 à Bilbao, au San Mamés — deux journées spectaculaires dans un
                  stade légendaire, entre gastronomie basque et ferveur sportive.
                </p>
              </a>

              <a
                href="#cta-final"
                className="comp-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="sixnations"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_rugby
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/eu.png"
                      alt="Europe"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Tournoi des 6 Nations
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  Soutenez le XV de France à Paris, Édimbourg, Cardiff ou Dublin — des
                  stades mythiques et des ambiances hors du commun.
                </p>
              </a>

              <a
                href="#cta-final"
                className="comp-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="quilter"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_rugby
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/fr.png"
                      alt="France"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  Quilter Nations Series
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  Assistez aux matchs du XV de France à l&apos;automne face aux plus
                  grandes nations de l&apos;hémisphère sud lors de ce tournoi
                  d&apos;exception.
                </p>
              </a>

              <a
                href="#cta-final"
                className="comp-card group rounded-xl p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500 cursor-pointer"
                data-color="amicaux"
              >
                <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-3 flex items-center gap-3 transition-colors duration-300">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[28px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_rugby
                    </span>
                    <span className="material-symbols-outlined text-white text-[26px] absolute inset-0 m-auto opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      groups
                    </span>
                  </span>
                  Matchs amicaux &amp; événements
                </h3>
                <p className="text-[14px] leading-relaxed transition-colors duration-300">
                  Des rencontres de prestige tout au long de la saison — vivez la passion
                  du rugby toute l&apos;année dans les plus grands stades européens.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <section className="section-bg-blue py-section_padding_v human-support-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-2">NOTRE MÉTHODE</p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">
                Un séjour rugby pensé de A à Z
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
                    Dites-nous quelle compétition, quelle destination et quelles dates
                    vous intéressent. Nos conseillers trouvent le meilleur match pour
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
                    Billets officiels, hôtel, transferts et options festives — tout est
                    organisé pour un week-end rugby sans souci.
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
                    Vibrez dans les tribunes
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après le match, nous assurons une assistance
                    personnalisée pour que votre expérience soit mémorable.
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
                Questions fréquentes sur nos séjours rugby
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
                  Vibrez au rythme de l&apos;ovalie
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Dites-nous quelle compétition vous fait rêver. Nos conseillers prennent
                  contact avec vous sous 48h pour composer votre séjour rugby sur mesure.
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
                    <span className="material-symbols-outlined text-[18px]">call</span>{" "}
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
                  Ne manquez aucun événement sportif
                </h2>
                <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                  Recevez en avant-première nos nouveaux packs sportifs, les dates des
                  grands matchs et nos offres exclusives.
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
    </>
  );
}
