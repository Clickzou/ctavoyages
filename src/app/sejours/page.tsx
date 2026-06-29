import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import StatsCounters from "@/components/sejours/StatsCounters";
import TypeCarousel from "@/components/sejours/TypeCarousel";
import DestCarousel from "@/components/sejours/DestCarousel";
import FaqList from "@/components/sejours/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Nos séjours - CTA Voyages",
  description:
    "Découvrez nos séjours tout compris : hôtels, clubs, resorts et hébergements de charme en France et à l'international. Conseiller dédié, devis gratuit, accompagnement personnalisé.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un séjour tout compris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un séjour tout compris inclut l'hébergement, les repas principaux, les boissons et souvent les activités et animations. Vous maîtrisez votre budget avant le départ.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont vos destinations de séjours les plus demandées ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos destinations phares : Maroc, Île Maurice, Seychelles, Zanzibar, Thaïlande, Laponie, et les escapades européennes à Londres, Amsterdam, Porto et Rome.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des séjours sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Votre conseiller dédié construit un séjour personnalisé selon vos dates, budget, envies et style de voyage.",
      },
    },
    {
      "@type": "Question",
      name: "Organisez-vous des séjours en club, en resort ou en hôtel de charme ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons toutes ces formules : clubs, resorts, hôtels de charme, riads, ryokans et hébergements typiques selon la destination.",
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
    {
      "@type": "Question",
      name: "Proposez-vous des courts séjours et escapades ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous proposons des escapades de 2 à 5 nuits, notamment à Londres, Amsterdam, Porto et Rome.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi passer par une agence pour réserver un séjour ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conseil personnalisé, tarifs négociés via le réseau TourCom et assistance complète avant, pendant et après votre voyage.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des séjours en amoureux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Boutique-hôtels, resorts élégants, riads intimistes ou lodges isolés — nous sélectionnons les adresses les plus romantiques.",
      },
    },
  ],
};

export default function SejoursPage() {
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
              alt="Séjour tout compris dans un resort bord de mer — CTA Voyages"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop&auto=format"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <HeroScrollIndicator />
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="hero-anim max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Séjours
              </p>
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]">
                Séjours tout compris, hôtels de charme et escapades
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                De l&apos;hôtel de charme au resort bord de mer, du riad marocain
                au ryokan japonais — nous créons des séjours qui vous ressemblent,
                en France et à l&apos;international.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a href="#cta-final" className="hero-cta-primary group">
                  Trouver mon séjour idéal
                  <span className="material-symbols-outlined hero-cta-arrow">
                    arrow_forward
                  </span>
                </a>
                <a href="#destinations" className="hero-cta-ghost">
                  Voir nos destinations
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
                  Devis gratuit
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

        {/* INTRO SEO */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface mb-4 sm:mb-6">
                Des séjours en France et à l&apos;international pour toutes les
                envies
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Envie d&apos;un séjour tout compris au Maroc, d&apos;un club de
                vacances sur une île paradisiaque, d&apos;un resort aux Seychelles
                ou d&apos;une escapade à Porto&nbsp;? CTA Voyages conçoit des
                séjours personnalisés selon vos envies, vos dates et votre budget.
                Grâce à notre accompagnement humain et à la force du réseau
                TourCom, nous vous aidons à trouver le bon hébergement et la bonne
                formule — du séjour accessible au séjour haut de gamme. Un
                interlocuteur unique vous guide à chaque étape, avant, pendant et
                après votre voyage.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES DE SÉJOURS — CARROUSEL */}
        <section className="section-bg-blue py-section_padding_v overflow-hidden">
          <div className="w-full px-6 lg:px-[50px]">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOS ENVIES
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Quel type de séjour recherchez-vous&nbsp;?
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Balnéaire, culturel, nature, romantique ou en famille — nous
                adaptons chaque séjour à votre profil.
              </p>
            </div>
            <TypeCarousel />
          </div>
        </section>

        {/* POURQUOI CTA VOYAGES */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOTRE DIFFÉRENCE
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Pourquoi réserver vos séjours avec CTA Voyages&nbsp;?
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
                    Conseil humain &amp; séjour personnalisé
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Un interlocuteur unique vous accompagne pour construire un
                    séjour adapté à vos envies, à votre budget et à votre style de
                    voyage.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      verified
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Sélection qualitative
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Hôtels, clubs, resorts, riads, ryokans — chaque hébergement
                    est sélectionné avec soin via nos partenaires et notre
                    expertise terrain.
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
                    Avec TourCom, CTA Voyages fait partie d&apos;un réseau de
                    1&nbsp;200 agences adhérentes et 6&nbsp;000 points de vente en
                    Europe.
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
                    Avant, pendant et après votre séjour, nous assurons un
                    accompagnement personnalisé pour réagir à chaque imprévu.
                  </p>
                </div>
              </div>
            </div>
            <StatsCounters />
          </div>
        </section>

        {/* DESTINATIONS CARROUSEL */}
        <section
          className="section-bg-blue py-section_padding_v overflow-hidden"
          id="destinations"
        >
          <div className="dest-4up max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                OÙ PARTIR
              </p>
              <h3 className="font-h3 text-[24px] sm:text-h3 text-on-surface">
                Nos idées de séjours
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl">
                Du riad marocain au resort mauricien, du ryokan japonais à la
                cabane lapone — découvrez nos destinations.
              </p>
            </div>
            <DestCarousel />
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#3179C4] text-[#3179C4] px-6 py-3 rounded-lg font-label text-[13px] sm:text-[14px] hover:bg-[#3179C4] hover:text-white hover:border-[#3179C4] hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
              >
                Voir toutes nos destinations
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ACCOMPAGNEMENT HUMAIN */}
        <section className="bg-white py-section_padding_v human-support-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-2">
                NOTRE MÉTHODE
              </p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">
                Un accompagnement humain, du premier échange au retour
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
                    Vous nous parlez de votre projet
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Votre conseiller prend le temps de comprendre vos envies, vos
                    dates, votre budget et vos attentes.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      map
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Nous sélectionnons les meilleures options
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Grâce à notre réseau et notre expertise, nous vous présentons
                    une sélection de séjours adaptée à votre profil.
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
                    Vous partez serein
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après votre séjour, nous assurons une
                    assistance personnalisée pour que votre voyage se passe
                    parfaitement.
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
                alt="Logo certification EcoVadis — engagement RSE du Groupe CTA"
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
                Questions fréquentes sur nos séjours
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
                  Vous avez un projet de séjour&nbsp;?
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre projet et imaginons le séjours idéal.
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
                Recevez en avant-première nos meilleures offres de séjours, nos
                nouveaux hébergements et nos conseils de voyage.
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
