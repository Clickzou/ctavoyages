import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/nfl/Countdown";
import FaqList from "@/components/nfl/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Séjour NFL Madrid Game - CTA Voyages",
  description:
    "Vivez le NFL Madrid Game 2026 avec CTA Voyages. Atlanta Falcons vs Cincinnati Bengals au Santiago Bernabéu le 8 novembre 2026 — billets officiels, hôtel et options inclus. Devis gratuit.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel match aura lieu à Madrid en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le match Atlanta Falcons vs Cincinnati Bengals, rencontre officielle de saison régulière NFL, se jouera le 8 novembre 2026 au Santiago Bernabéu.",
      },
    },
    {
      "@type": "Question",
      name: "Que comprend un pack NFL Madrid Game ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1 ou 2 nuits d'hôtel 3 ou 4 étoiles, le billet de match officiel, et des options vols et transferts.",
      },
    },
    {
      "@type": "Question",
      name: "Où se déroule le match ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Au stade Santiago Bernabéu de Madrid, récemment rénové pour accueillir les plus grands événements sportifs mondiaux.",
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

export default function NflPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap"
        rel="stylesheet"
      />
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
              alt="NFL Madrid Game — CTA Voyages"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 40%" }}
              src="/assets/images/iStock-1838780282.jpg"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <p className="font-label text-label text-white/80 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Catalogue sportif · NFL
              </p>
              <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
                NFL Madrid Game — vivez un match historique au Santiago Bernabéu
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                Le <strong>8 novembre 2026</strong>, les Atlanta Falcons
                affrontent les Cincinnati Bengals au légendaire Santiago
                Bernabéu. Une occasion unique de vivre l&apos;intensité du
                football américain au cœur de l&apos;Europe.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Réserver mon pack NFL
                </a>
                <a
                  href="#event-details"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Détails de l&apos;événement
                </a>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    calendar_today
                  </span>
                  8 novembre 2026
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    stadium
                  </span>
                  Santiago Bernabéu
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    location_on
                  </span>
                  Madrid, Espagne
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

        {/* COMPTE À REBOURS */}
        <section className="bg-gradient-to-r from-[#004191] to-[#3179C4] py-8 sm:py-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <p className="font-label text-label text-white/80 mb-4 tracking-wider uppercase text-[12px] sm:text-[14px]">
              Le match approche — réservez dès maintenant
            </p>
            <Countdown />
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface mb-4 sm:mb-6">
                Un événement historique à ne pas manquer
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                En 2026, la NFL s&apos;invite à nouveau à Madrid pour un
                événement exceptionnel. Le dimanche 8 novembre 2026, les Atlanta
                Falcons affrontent les Cincinnati Bengals au légendaire Santiago
                Bernabéu, temple du Real Madrid. Une occasion unique de vivre
                l&apos;intensité du football américain au cœur de l&apos;Europe,
                dans une ambiance survoltée mêlant passion, spectacle et culture
                sportive. Après un premier succès la saison passée, le NFL Madrid
                Game 2026 marque une nouvelle étape dans l&apos;expansion de la
                ligue américaine à l&apos;international.
              </p>
            </div>
          </div>
        </section>

        {/* LES ÉQUIPES */}
        <section className="section-bg-blue py-section_padding_v" id="event-details">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                LE MATCH
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Atlanta Falcons vs Cincinnati Bengals
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div
                className="team-card group p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500"
                data-team="falcons"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="team-logo w-14 h-14 rounded-full bg-[#A71930] flex items-center justify-center flex-shrink-0">
                    <span className="team-icon material-symbols-outlined text-[24px] text-white transition-all duration-300">
                      sports_football
                    </span>
                    <span className="team-letter opacity-0 absolute transition-all duration-300">
                      F
                    </span>
                  </div>
                  <div>
                    <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold text-on-surface transition-colors duration-300">
                      Atlanta Falcons
                    </h3>
                    <p className="text-[13px] text-on-surface-variant transition-colors duration-300">
                      Conférence NFC · Division Sud
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed transition-colors duration-300">
                  Les doubles finalistes du Super Bowl arrivent à Madrid avec
                  l&apos;ambition de s&apos;imposer sur la scène internationale.
                  Une franchise emblématique de la NFL qui promet un match de
                  haute intensité.
                </p>
              </div>

              <div
                className="team-card group p-6 sm:p-8 border border-outline-variant/20 transition-all duration-500"
                data-team="bengals"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="team-logo w-14 h-14 rounded-full bg-[#FB4F14] flex items-center justify-center flex-shrink-0">
                    <span className="team-icon material-symbols-outlined text-[24px] text-white transition-all duration-300">
                      sports_football
                    </span>
                    <span className="team-letter opacity-0 absolute transition-all duration-300">
                      B
                    </span>
                  </div>
                  <div>
                    <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold text-on-surface transition-colors duration-300">
                      Cincinnati Bengals
                    </h3>
                    <p className="text-[13px] text-on-surface-variant transition-colors duration-300">
                      Conférence AFC · Division Nord
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed transition-colors duration-300">
                  Les Bengals, triples vainqueurs de la Conférence AFC, apportent
                  leur jeu spectaculaire au cœur de l&apos;Europe. Une équipe
                  redoutable qui promet des actions à couper le souffle.
                </p>
              </div>
            </div>

            {/* Infos match */}
            <div className="bg-gradient-to-r from-[#004191] to-[#3179C4] rounded-2xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="material-symbols-outlined text-[#FBBF12] text-[32px] mb-2 block">
                    calendar_today
                  </span>
                  <p className="font-h3 text-[16px] sm:text-[18px] font-bold mb-1">
                    Date
                  </p>
                  <p className="text-[14px] text-white/85">
                    Dimanche 8 novembre 2026
                  </p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#FBBF12] text-[32px] mb-2 block">
                    stadium
                  </span>
                  <p className="font-h3 text-[16px] sm:text-[18px] font-bold mb-1">
                    Stade
                  </p>
                  <p className="text-[14px] text-white/85">Santiago Bernabéu</p>
                  <p className="text-[13px] text-white/65">+80 000 places</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#FBBF12] text-[32px] mb-2 block">
                    location_on
                  </span>
                  <p className="font-h3 text-[16px] sm:text-[18px] font-bold mb-1">
                    Ville
                  </p>
                  <p className="text-[14px] text-white/85">Madrid, Espagne</p>
                  <p className="text-[13px] text-white/65">
                    Capitale de l&apos;Espagne
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CE QUE COMPREND LE PACK */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOTRE PACK NFL
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
                  src="/assets/images/iStock-2205703289.jpg"
                  alt="Match de football américain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    confirmation_number
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Billet officiel
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Accès au match Atlanta Falcons vs Cincinnati Bengals au
                    Santiago Bernabéu.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format"
                  alt="Hôtel Madrid"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    hotel
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Hébergement
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    1 ou 2 nuits d&apos;hôtel 3 ou 4 étoiles à Madrid avec
                    petits-déjeuners.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&h=400&fit=crop&auto=format"
                  alt="Vol Paris Madrid"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    flight
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Vol A/R
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Option vol aller-retour depuis Paris ou ailleurs et
                    transferts vers le stade sur demande.
                  </p>
                </div>
              </div>

              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=500&h=400&fit=crop&auto=format"
                  alt="Madrid découverte"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    explore
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Extension Madrid
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Prolongez votre séjour à Madrid entre tapas, Palais Royal,
                    Plaza Mayor et art de vivre madrilène.
                  </p>
                </div>
              </div>
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
                Votre week-end NFL à Madrid, de A à Z
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
                    Vous nous contactez
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Indiquez-nous vos dates, le nombre de personnes et vos
                    préférences. Nos conseillers composent votre pack sur mesure.
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
                    Nous gérons tout
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Billets officiels, hôtel, vol, transferts et options
                    culturelles — nous orchestrons chaque détail pour un week-end
                    sans souci.
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
                    Vous vibrez au Bernabéu
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après le match, nous assurons une
                    assistance locale francophone pour que votre expérience soit
                    mémorable.
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
          aria-label="Questions fréquentes sur le NFL Madrid Game"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
                Questions fréquentes
              </span>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Questions fréquentes sur le NFL Madrid Game
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
                  Réservez votre pack NFL dès maintenant
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Les billets sont limités et les hôtels se remplissent vite. Nos
                  conseillers prennent contact avec vous sous 48h pour composer
                  votre week-end NFL à Madrid.
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link
                    href="/demande-devis"
                    className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
                  >
                    Réserver mon pack NFL
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
                des grands événements et nos offres exclusives.
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
