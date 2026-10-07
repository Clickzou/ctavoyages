import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/tennis/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/tennis" },
  title: "Séjour Tennis",
  description:
    "Monte-Carlo, Madrid, Rome, Wimbledon : séjours tennis 2027 avec hôtel et billets, organisés par CTA Voyages, agence de voyages à Toulouse.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels tournois de tennis proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour la saison 2027 : le Masters 1000 de Monte-Carlo, le Masters 1000 de Madrid, les Internationaux d'Italie à Rome et Wimbledon à Londres."
      }
    },
    {
      "@type": "Question",
      name: "Que comprend un séjour tennis ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les billets pour le tournoi choisi et l'hébergement à l'hôtel. Sur demande, votre conseiller organise aussi le trajet depuis Toulouse."
      }
    },
    {
      "@type": "Question",
      name: "Quand réserver un séjour pour un grand tournoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le plus tôt possible : les places pour les tournois les plus courus, Wimbledon en tête, partent très vite, comme les hôtels proches des sites."
      }
    },
    {
      "@type": "Question",
      name: "Le devis est-il gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le devis est gratuit et sans engagement, et nous ne facturons aucuns frais de dossier. Un conseiller prend contact avec vous sous 48h."
      }
    }
  ],
};

export default function TennisPage() {
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
              alt="Court de tennis en gazon baigné de soleil, tribunes pleines"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 35%" }}
              src="/generated/sport-tennis-hero.jpg"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <Breadcrumbs
                variant="hero"
                className="mb-3 sm:mb-4"
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Catalogue sportif", href: "/catalogue-sportif" },
                  { label: "Tennis" },
                ]}
              />
              <h1 className="font-h1 text-[26px] sm:text-[34px] md:text-[42px] text-white mb-3 sm:mb-4 leading-[1.1]">
                Vivez les plus grands tournois de tennis depuis les tribunes
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                Monte-Carlo, Madrid, Rome, Wimbledon : des séjours tennis avec
                hôtel et billets, organisés depuis Toulouse par votre conseiller
                CTA Voyages.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center flex items-center justify-center"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#tournois-tennis"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Les tournois
                </a>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Billets inclus
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
                  Sans frais de dossier
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
                Des séjours tennis clés en main en Europe
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                La terre battue de Monte-Carlo face à la Méditerranée, la Caja
                Mágica de Madrid, les pins du Foro Italico à Rome, le gazon de
                Wimbledon : chaque grand tournoi a son décor et son ambiance. Nos
                séjours tennis réunissent les billets et l&apos;hôtel pour que
                vous n&apos;ayez plus qu&apos;à profiter du jeu. Votre conseiller
                peut aussi organiser le trajet depuis Toulouse.
              </p>
            </div>
          </div>
        </section>

        {/* CE QUE COMPREND LE PACK */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOTRE SÉJOUR TENNIS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Billets, hôtel et trajet réunis
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="/generated/sport-tennis-billets.jpg"
                  alt="Court de terre battue entouré de tribunes"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    confirmation_number
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Billets
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Vos places pour le tournoi et la journée de votre choix.
                  </p>
                </div>
              </div>
              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format"
                  alt="Hôtel"
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
                    Un hôtel sélectionné pour rejoindre facilement le site du tournoi.
                  </p>
                </div>
              </div>
              <div className="pack-card group relative rounded-xl overflow-hidden h-[280px] sm:h-[300px] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=500&h=400&fit=crop&auto=format"
                  alt="Trajet"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="material-symbols-outlined text-[40px] mb-3 transition-colors duration-300 group-hover:text-[#FBBF12]">
                    flight
                  </span>
                  <h3 className="font-h3 text-[16px] sm:text-[18px] font-bold mb-2">
                    Trajet depuis Toulouse
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                    Sur demande, avion ou train calés sur les horaires du tournoi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOURNOIS */}
        <section className="bg-white py-section_padding_v" id="tournois-tennis">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                LES TOURNOIS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Les tournois de notre catalogue tennis 2027
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <a
                href="#cta-final"
                className="tennis-card group p-5 sm:p-6 cursor-pointer"
                data-color="monte-carlo"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_tennis
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/mc.png"
                      alt="Monaco"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                    Monte-Carlo
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed transition-colors duration-300">
                  Masters 1000 sur terre battue, en avril, avec la Méditerranée en toile de fond.
                </p>
              </a>
              <a
                href="#cta-final"
                className="tennis-card group p-5 sm:p-6 cursor-pointer"
                data-color="madrid"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_tennis
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
                  Masters 1000 de la Caja Mágica, au printemps, dans la capitale espagnole.
                </p>
              </a>
              <a
                href="#cta-final"
                className="tennis-card group p-5 sm:p-6 cursor-pointer"
                data-color="rome"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_tennis
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/it.png"
                      alt="Italie"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                    Rome
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed transition-colors duration-300">
                  Les Internationaux d&apos;Italie au Foro Italico, en mai, dernier Masters 1000 sur terre battue avant Roland-Garros.
                </p>
              </a>
              <a
                href="#cta-final"
                className="tennis-card group p-5 sm:p-6 cursor-pointer"
                data-color="wimbledon"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="league-icon relative w-8 h-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3179C4] text-[24px] transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                      sports_tennis
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="Royaume-Uni"
                      className="absolute inset-0 w-7 h-5 m-auto object-cover rounded-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </span>
                  <h3 className="font-h3 text-[15px] sm:text-[16px] font-bold transition-colors duration-300">
                    Wimbledon
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed transition-colors duration-300">
                  Le plus ancien tournoi du Grand Chelem, sur le gazon de Londres, en été.
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
                Votre séjour tennis, de A à Z
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
                  <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Choisissez votre tournoi
                  </h3>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Dites-nous quel tournoi, quelles journées et combien vous êtes. Votre conseiller vous propose la meilleure formule.
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
                  <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Nous composons votre séjour
                  </h3>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Billets, hôtel et, si vous le souhaitez, trajet depuis Toulouse : tout est réuni dans un seul devis.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      sports_tennis
                    </span>
                  </div>
                  <h3 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Profitez du tournoi
                  </h3>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Vous partez l&apos;esprit libre. Votre conseiller reste joignable avant et pendant le séjour.
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
          aria-label="Questions fréquentes sur nos séjours tennis"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
                Questions fréquentes
              </span>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Questions fréquentes sur nos séjours tennis
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
                  Offrez-vous un grand tournoi de tennis
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Dites-nous quel tournoi vous fait envie. Nos conseillers prennent
                  contact avec vous sous 48h pour composer votre séjour,
                  gratuitement et sans engagement.
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link
                    href="/demande-devis"
                    className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center flex items-center justify-center"
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
