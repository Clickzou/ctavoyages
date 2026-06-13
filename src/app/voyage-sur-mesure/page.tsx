import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import StatsCounters from "@/components/voyage-sur-mesure/StatsCounters";
import TypeCarousel from "@/components/voyage-sur-mesure/TypeCarousel";
import DestCarousel from "@/components/voyage-sur-mesure/DestCarousel";
import FaqList from "@/components/voyage-sur-mesure/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Voyage sur mesure - CTA Voyages",
  description:
    "Créez votre voyage sur mesure avec CTA Voyages : itinéraire personnalisé, conseiller dédié, devis gratuit. Japon, Thaïlande, Maroc, Canada, Seychelles et 13 destinations.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un voyage sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un voyage sur mesure est un voyage entièrement personnalisé : l'itinéraire, les hébergements, les activités et le rythme sont conçus selon vos envies, avec l'accompagnement d'un conseiller expert.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi choisir un voyage sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liberté totale : vous choisissez votre destination, votre rythme et vos hébergements. Pas de groupe imposé, pas de programme figé.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont vos destinations les plus demandées ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japon, Thaïlande, Maroc, Île Maurice, Seychelles, Zanzibar, Canada, Costa Rica, Laponie, Londres, Amsterdam, Porto et Rome.",
      },
    },
    {
      "@type": "Question",
      name: "Organisez-vous des voyages sur mesure en famille ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Rythme adapté aux enfants, hébergements familiaux, activités pour tous les âges.",
      },
    },
    {
      "@type": "Question",
      name: "Comment demander un devis ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Par téléphone, email ou formulaire en ligne. Nos attachées clientèle prennent contact avec vous sous 48h pour affiner votre demande, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function VoyageSurMesurePage() {
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
              alt="Voyage sur mesure — paysage immersif"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop&auto=format"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Voyage sur mesure
              </p>
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]">
                Créez le voyage qui vous ressemble
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-3 max-w-2xl">
                De l&apos;aventure au voyage de luxe, du voyage en famille au
                voyage solo, chaque itinéraire est conçu pour vous — selon vos
                envies, votre budget et votre style de voyage.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Imaginer mon voyage sur mesure
                </a>
                <a
                  href="#destinations-vsm"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Voir nos inspirations
                </a>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-5 sm:gap-x-7">
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
                  Itinéraire personnalisé
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
                Votre voyage à la carte, organisé par un spécialiste
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Un voyage sur mesure est un voyage qui se construit pas à pas en
                fonction de vos envies. Nous identifions vos besoins, votre budget
                et vos attentes pour élaborer un voyage unique : transport,
                hébergement, activités, durée, niveau de confort — tout est
                personnalisable. Contrairement aux plateformes standardisées, vous
                bénéficiez d&apos;un interlocuteur unique qui planifie chaque
                détail de votre voyage. Que vous partiez en solo, en famille, en
                couple ou entre amis, nous créons le voyage qui vous ressemble — du
                premier échange jusqu&apos;à votre retour.
              </p>
            </div>
          </div>
        </section>

        {/* POURQUOI CTA */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOTRE DIFFÉRENCE
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Pourquoi choisir CTA Voyages pour votre voyage sur mesure&nbsp;?
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Agences en ligne, plateformes de comparaison, tour-opérateurs
                généralistes… Les options ne manquent pas. Voici ce qui nous
                différencie concrètement.
              </p>
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
                    Conseiller dédié
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Votre interlocuteur unique planifie votre voyage de A à Z. Un
                    vrai échange humain, pas un algorithme.
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
                    Réseau TourCom
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    1 200 agences, 6 000 points de vente, premier réseau européen
                    pour des tarifs négociés et des prestations de qualité.
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
                      assignment_turned_in
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Organisation complète
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Vols, hébergements, transferts, activités, carnets de voyage :
                    nous gérons tout pour vous.
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
                      support_agent
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Assistance complète
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Avant, pendant et après votre voyage, nous assurons une
                    assistance personnalisée en cas d&apos;imprévu.
                  </p>
                </div>
              </div>
            </div>
            <StatsCounters />
          </div>
        </section>

        {/* TYPES DE VOYAGES SUR MESURE */}
        <section className="bg-white py-section_padding_v overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOYAGES SUR MESURE
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Un voyage personnalisé quel que soit votre style
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Famille, couple, solo, amis ou aventure — chaque profil de
                voyageur mérite un itinéraire pensé pour lui.
              </p>
            </div>
            <TypeCarousel />
          </div>
        </section>

        {/* DESTINATIONS */}
        <section
          className="section-bg-blue py-section_padding_v overflow-hidden"
          id="destinations-vsm"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOS DESTINATIONS
              </p>
              <h3 className="font-h3 text-[24px] sm:text-h3 text-on-surface">
                Explorez le monde avec un voyage sur mesure
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl">
                13 destinations soigneusement sélectionnées, toutes
                personnalisables selon vos envies.
              </p>
            </div>
            <DestCarousel />
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#3179C4] text-[#3179C4] px-6 py-3 rounded-lg font-label text-[13px] sm:text-[14px] hover:bg-[#3179C4] hover:text-white hover:border-[#3179C4] hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
              >
                Voir toutes nos destinations{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* TIMELINE — COMMENT ÇA MARCHE */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOTRE PARCOURS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Comment se passe la création de votre voyage sur mesure&nbsp;?
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                De l&apos;idée au départ, nous vous accompagnons en 5 étapes
                simples.
              </p>
            </div>
            <div className="timeline-wrap max-w-5xl mx-auto">
              <div className="timeline-line hidden md:block" />
              <div className="timeline-line md:hidden" />
              <div className="timeline-step">
                <div className="timeline-num">1</div>
                <div>
                  <h4 className="font-h3 text-[15px] sm:text-[16px] font-semibold text-on-surface mb-1">
                    Échangeons
                  </h4>
                  <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
                    Parlez-nous de vos envies, dates, budget et style de voyage.
                    Par téléphone ou email.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-num">2</div>
                <div>
                  <h4 className="font-h3 text-[15px] sm:text-[16px] font-semibold text-on-surface mb-1">
                    Proposition
                  </h4>
                  <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
                    Votre conseiller crée un itinéraire sur mesure détaillé et vous
                    prend contact sous 48h.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-num">3</div>
                <div>
                  <h4 className="font-h3 text-[15px] sm:text-[16px] font-semibold text-on-surface mb-1">
                    Ajustements
                  </h4>
                  <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
                    On affine ensemble jusqu&apos;à ce que le voyage soit parfait.
                    Sans frais supplémentaires.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-num">4</div>
                <div>
                  <h4 className="font-h3 text-[15px] sm:text-[16px] font-semibold text-on-surface mb-1">
                    Réservation
                  </h4>
                  <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
                    Nous réservons vols, hôtels, activités et vous remettez votre
                    carnet de voyage.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-num">5</div>
                <div>
                  <h4 className="font-h3 text-[15px] sm:text-[16px] font-semibold text-on-surface mb-1">
                    Bon voyage&nbsp;!
                  </h4>
                  <p className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant">
                    Partez serein avec notre assistance pendant tout votre séjour en
                    cas d&apos;imprévu.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10 sm:mt-14">
              <a
                href="#cta-final"
                className="inline-flex items-center gap-2 bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                Lancer mon projet de voyage{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* RSE */}
        <section className="rse-section w-full py-12 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rse-bg-img"
            src="/assets/images/iStock-1372488167.jpg"
            alt="Paysage naturel RSE CTA Voyages"
          />
          <div className="rse-overlay" />
          <div className="rse-content max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="flex flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Logo EcoVadis"
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
                Vos questions sur le voyage sur mesure
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
                  Prêt à créer votre voyage sur mesure&nbsp;?
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre projet de voyage, nous vous proposons votre
                  itinéraire personnalisé idéal.
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
                Recevez en avant-première nos meilleures idées de voyages sur
                mesure, nos nouvelles destinations et nos conseils de voyage.
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
