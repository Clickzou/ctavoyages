import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import StatsCounters from "@/components/circuits/StatsCounters";
import TypeCarousel from "@/components/circuits/TypeCarousel";
import InspirationsCarousel from "@/components/circuits/InspirationsCarousel";
import FaqList from "@/components/circuits/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Nos circuits - CTA Voyages",
  description:
    "Découvrez nos circuits individuels, accompagnés ou en petit groupe avec CTA Voyages. Itinéraires organisés, conseiller dédié, devis gratuit et accompagnement personnalisé.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un circuit touristique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un circuit est un voyage comprenant plusieurs étapes et déplacements successifs selon un itinéraire organisé à l'avance. Il peut être individuel, accompagné ou en groupe.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle différence entre un circuit individuel et un circuit accompagné ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un circuit individuel vous laisse plus d'autonomie dans le rythme du voyage, tandis qu'un circuit accompagné inclut un guide ou accompagnateur tout au long de l'itinéraire.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des circuits sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous pouvons adapter l'itinéraire, le rythme, les hébergements et les expériences selon vos envies et votre budget.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont vos destinations de circuits les plus demandées ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos circuits les plus recherchés concernent le Japon, le Canada, le Costa Rica, la Thaïlande, le Maroc et la Laponie.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je demander un devis gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien sûr. Nos attachées clientèle prennent contact avec vous sous 48h pour affiner votre demande et vous proposer une offre personnalisée, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function CircuitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* HERO */}
        <section
          className="relative w-full flex items-end sm:items-center overflow-hidden"
          style={{ minHeight: "600px", height: "100svh" }}
        >
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Circuit organisé à travers des paysages d'exception — CTA Voyages"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=900&fit=crop&auto=format"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <HeroScrollIndicator />
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="hero-anim max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Circuits
              </p>
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]">
                Circuits individuels, accompagnés ou en petit groupe
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                De la découverte culturelle au road trip parfaitement orchestré,
                nous organisons des circuits pensés étape par étape selon vos
                envies, votre rythme et votre niveau de confort.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a href="#cta-final" className="hero-cta-primary group">
                  Imaginer mon circuit
                  <span className="material-symbols-outlined hero-cta-arrow">
                    arrow_forward
                  </span>
                </a>
                <a href="#inspirations-circuits" className="hero-cta-ghost">
                  Voir nos inspirations
                </a>
              </div>
              <div className="hero-trust flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Conseiller dédié
                </div>
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Itinéraire organisé
                </div>
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Réseau TourCom
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
                Des circuits organisés pour découvrir une destination en
                profondeur
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Un circuit est un voyage composé de plusieurs étapes, avec des
                déplacements successifs et un itinéraire pensé à l&apos;avance. Chez
                CTA Voyages, nous organisons des circuits individuels, des circuits
                accompagnés et des circuits en petit groupe, en France comme à
                l&apos;international. Que vous rêviez d&apos;un circuit au Japon,
                d&apos;un voyage nature au Costa Rica, d&apos;un road trip au Canada
                ou d&apos;une immersion culturelle au Maroc, nous concevons des
                itinéraires fluides, cohérents et adaptés à votre profil.
                Hébergements, transports, visites, rythme, niveau de confort :
                chaque détail est soigneusement planifié avec vous.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES DE CIRCUITS */}
        <section className="section-bg-blue py-section_padding_v overflow-hidden">
          <div className="w-full px-6 lg:px-[50px]">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOS ENVIES
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Quel type de circuit recherchez-vous&nbsp;?
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Itinéraire autonome, guide expert, road trip, immersion culturelle
                ou nature grand format — nous adaptons chaque circuit à votre
                manière de voyager.
              </p>
            </div>
            <TypeCarousel />
          </div>
        </section>

        {/* POURQUOI CTA */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOTRE DIFFÉRENCE
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Pourquoi organiser votre circuit avec CTA Voyages&nbsp;?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      headset_mic
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Conseil humain &amp; itinéraire adapté
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Votre conseiller construit un circuit cohérent selon vos
                    envies, votre rythme et vos impératifs de voyage.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      route
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Organisation fluide
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Étapes, transferts, visites et hébergements s&apos;enchaînent
                    naturellement pour rendre votre circuit agréable et bien
                    rythmé.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      hub
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Tarifs négociés
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Grâce à TourCom, nous bénéficions de tarifs compétitifs sur les
                    transports, hébergements et prestations de nos circuits.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      support_agent
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Assistance complète
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Avant, pendant et après votre circuit, nous assurons un
                    accompagnement personnalisé pour réagir à chaque imprévu.
                  </p>
                </div>
              </div>
            </div>
            <StatsCounters />
          </div>
        </section>

        {/* INSPIRATIONS DE CIRCUITS */}
        <section
          className="section-bg-blue py-section_padding_v overflow-hidden"
          id="inspirations-circuits"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOS IDÉES DE CIRCUITS
              </p>
              <h3 className="font-h3 text-[24px] sm:text-h3 text-on-surface">
                Nos inspirations d&apos;itinéraires
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl">
                De l&apos;archipel japonais aux grands espaces canadiens, voici
                quelques idées de circuits pour vous inspirer.
              </p>
            </div>
            <InspirationsCarousel />
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <section className="bg-white py-section_padding_v human-support-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-2">
                NOTRE MÉTHODE
              </p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">
                Un circuit pensé dans les moindres détails
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      travel_explore
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Vous nous expliquez votre projet
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Votre conseiller échange avec vous pour définir les étapes, le
                    rythme, la durée et le niveau de confort souhaité.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      route
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Nous construisons l&apos;itinéraire
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Étapes, transferts, visites, hébergements, temps libres — nous
                    orchestrons chaque séquence pour un voyage fluide.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      verified_user
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Vous voyagez sereinement
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après votre circuit, nous assurons une
                    assistance personnalisée pour vous accompagner à chaque étape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSE */}
        <section className="rse-section w-full py-12 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rse-bg-img"
            src="/assets/images/iStock-1372488167.jpg"
            alt="Paysage naturel illustrant l'engagement RSE de CTA Voyages"
          />
          <div className="rse-overlay" />
          <div className="rse-content max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="flex flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Logo certification EcoVadis"
                className="h-[56px] sm:h-[72px] w-auto mb-6 sm:mb-8 ecovadis-glow"
                src="/assets/images/logo-ecovadis.png"
              />
              <p className="font-label text-label text-white/70 mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Notre engagement
              </p>
              <p className="font-h3 text-[20px] sm:text-[24px] font-bold text-white mb-4 sm:mb-6 leading-snug max-w-2xl">
                Labellisé Entreprise engagée RSE.
              </p>
              <p className="text-[16px] sm:text-[18px] text-white/90 mb-4 sm:mb-6 leading-snug max-w-2xl">
                Notre volonté : voyager mieux, pas moins.
              </p>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:85b4177f-e598-4849-8afd-14da21f3ebf8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-label text-label text-[13px] sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all group"
              >
                Découvrir notre démarche RSE{" "}
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
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
                Questions fréquentes sur nos circuits
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
                  Vous avez un projet de circuit&nbsp;?
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre destination et construisons ensemble votre
                  itinéraire idéal.
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link
                    href="/demande-renseignement"
                    className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
                  >
                    Nous contacter
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
                Recevez en avant-première nos idées de circuits, nos nouveaux
                itinéraires et nos conseils de voyage.
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
