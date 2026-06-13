import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/f1/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Séjour Formule 1 - CTA Voyages",
  description:
    "Vivez les Grands Prix de Formule 1 avec CTA Voyages. Monaco, Barcelone, Monza, Spa, Abu Dhabi, Madrid — billets officiels, hôtel et transport inclus. Devis gratuit.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels Grands Prix proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Barcelone, Monza, Monaco, Spa-Francorchamps, Montréal, Lusail (Qatar), Abu Dhabi et dès 2026 le premier Grand Prix à Madrid.",
      },
    },
    {
      "@type": "Question",
      name: "Que comprend un pack Formule 1 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Billets officiels (essais, qualifications, course), hôtel avec petit-déjeuner et options selon vos besoins (transferts, visites, VIP).",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on réserver uniquement pour le jour de course ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous proposons des formules billets pour un jour, deux jours ou tout le week-end.",
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

export default function F1Page() {
  return (
    <main className="pt-[72px]" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative w-full flex items-end sm:items-center overflow-hidden"
        style={{ minHeight: "520px", height: "68vh", maxHeight: "760px" }}
      >
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Formule 1 — CTA Voyages"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
            src="/assets/images/iStock-166272826.jpg"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="font-label text-label text-white/80 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
              Catalogue sportif · Formule 1
            </p>
            <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
              Vivez les Grands Prix dans les plus belles destinations du monde
            </h1>
            <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
              De Barcelone à Abu Dhabi, en passant par Monaco, Spa-Francorchamps
              et Monza — des séjours clés en main pour combiner adrénaline,
              passion et découverte culturelle.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
              <a
                href="#cta-final"
                className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
              >
                Demander un devis gratuit
              </a>
              <a
                href="#circuits-f1"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
              >
                Les circuits F1
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
                Hôtel inclus
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                  check_circle
                </span>
                Options VIP
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
              Des séjours F1 clés en main dans le monde entier
            </h2>
            <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
              Assistez aux courses les plus spectaculaires du championnat du
              monde de Formule 1 et plongez au cœur d&apos;une expérience unique.
              De Barcelone à Abu Dhabi, en passant par Monaco, Spa-Francorchamps
              ou Monza, chaque destination vous invite à combiner adrénaline,
              passion et découverte culturelle. Nos voyages F1 sont conçus pour
              transformer un simple week-end sportif en un moment inoubliable —
              que vous soyez un passionné de vitesse ou en quête d&apos;une
              première immersion dans l&apos;univers de la F1.
            </p>
          </div>
        </div>
      </section>

      {/* CE QUE COMPREND LE PACK */}
      <section className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-primary font-label text-label mb-2 tracking-wider">
              VOTRE PACK FORMULE 1
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
                src="/assets/images/iStock-166272845.jpg"
                alt="Circuit Formule 1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  confirmation_number
                </span>
                <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Billets officiels
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Admission générale, tribunes ou hospitalité VIP — essais,
                  qualifications et course.
                </p>
              </div>
            </div>

            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format"
                alt="Hôtel F1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  hotel
                </span>
                <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Hébergement
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Hôtel 3, 4 ou 5 étoiles avec petits-déjeuners, proche du
                  circuit ou en centre-ville.
                </p>
              </div>
            </div>

            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&h=400&fit=crop&auto=format"
                alt="Transferts F1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  flight
                </span>
                <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Transferts
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Transferts hôtel-circuit inclus et options aéroport sur
                  demande.
                </p>
              </div>
            </div>

            <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop&auto=format"
                alt="Expériences VIP F1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                  diamond
                </span>
                <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                  Expériences VIP
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                  Hospitalité, salons privés, restauration haut de gamme et accès
                  paddocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LES CIRCUITS F1 */}
      <section className="bg-white py-section_padding_v" id="circuits-f1">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-primary font-label text-label mb-2 tracking-wider">
              LES GRANDS PRIX
            </p>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Les destinations phares du catalogue Formule 1
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <a
              href="#cta-final"
              className="f1-card group block p-5 sm:p-6 cursor-pointer"
              data-color="barcelone"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Espagne"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Barcelone
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                GP de Catalogne — ambiance vibrante dans la capitale catalane.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="monaco"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/mc.png"
                    alt="Monaco"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Monaco
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Cadre prestigieux, yachts et virages mythiques au cœur de
                Monte-Carlo.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="monza"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/it.png"
                    alt="Italie"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Monza
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Le temple de la vitesse, acclamé par des tifosi passionnés.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="spa"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/be.png"
                    alt="Belgique"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Spa
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Un tracé technique et spectaculaire, préféré des pilotes.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="montreal"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/ca.png"
                    alt="Canada"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Montréal
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Culture cosmopolite et fête autour du circuit Gilles Villeneuve.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="lusail"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/qa.png"
                    alt="Qatar"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Lusail
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Courses nocturnes captivantes sous les projecteurs du Qatar.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="abudhabi"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/ae.png"
                    alt="Émirats"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Abu Dhabi
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Finale spectaculaire dans le décor féérique de Yas Marina.
              </p>
            </a>

            <a
              href="#cta-final"
              className="f1-card group p-5 sm:p-6 cursor-pointer"
              data-color="madrid"
            >
              <div className="absolute top-2 right-2">
                <span className="badge-new text-[10px] font-label px-2 py-0.5 rounded-full border border-transparent bg-[#3179C4] text-white transition-all duration-300">
                  NOUVEAU EN 2026
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                    speed
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Espagne"
                    className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                  Madrid
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed transition-colors duration-300">
                Le nouveau tracé en ville de Madrid — un week-end d&apos;exception.
              </p>
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
              Votre week-end F1, de A à Z
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
                  Choisissez votre Grand Prix
                </h4>
                <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                  Dites-nous quel circuit, quelles dates et quel niveau de
                  confort vous intéressent. Nos conseillers trouvent la meilleure
                  formule.
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
                  Billets officiels, hôtel, transferts et options VIP ou
                  excursions culturelles — tout est organisé.
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
                  Prenez rendez-vous avec le premier virage
                </h4>
                <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                  Avant, pendant et après la course, nous assurons une assistance
                  personnalisée pour une immersion totale.
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
        aria-label="Questions fréquentes sur nos séjours Formule 1"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
              Questions fréquentes
            </span>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Questions fréquentes sur nos séjours Formule 1
            </h2>
          </div>
          <FaqList />
        </div>
      </section>

      {/* CTA BANDEAU */}
      <section id="cta-final" className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">
                Prenez rendez-vous avec le premier virage
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                Dites-nous quel Grand Prix vous fait rêver. Nos conseillers
                prennent contact avec vous sous 48h pour composer votre week-end
                F1 sur mesure.
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
    </main>
  );
}
