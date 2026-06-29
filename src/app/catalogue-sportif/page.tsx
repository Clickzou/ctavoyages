import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import StatsCounters from "@/components/catalogue-sportif/StatsCounters";
import SportCarousel from "@/components/catalogue-sportif/SportCarousel";
import FaqList from "@/components/catalogue-sportif/FaqList";
import AlsoCarousel from "@/components/catalogue-sportif/AlsoCarousel";
import NewsletterForm from "@/components/home/NewsletterForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Catalogue sportif - CTA Voyages",
  description:
    "Vivez les plus grands événements sportifs du monde avec CTA Voyages. Football, Rugby, NBA, NFL, Formule 1, Moto GP, Boxing Day — des séjours clés en main pour vivre le sport autrement.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment réserver un séjour sportif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il suffit de nous contacter via notre formulaire de demande ou par téléphone. Nos attachés clientèle spécialisés vous guideront pour créer un séjour 100% adapté à vos envies.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sports sont concernés par le catalogue sportif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons des séjours sportifs autour du football, rugby, basket (NBA), NFL, Formule 1, MotoGP et le Boxing Day.",
      },
    },
    {
      "@type": "Question",
      name: "Que comprend un séjour sportif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque séjour inclut généralement l'hébergement en hôtel sélectionné, les billets officiels pour l'événement sportif et des options sur-mesure : transferts, repas, visites ou packs VIP.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des options VIP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Selon l'événement, nous proposons des places premium, hospitalités, accès paddocks et restauration haut de gamme pour vivre l'expérience dans les meilleures conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je demander un devis gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien sûr. Nos attachées clientèle prennent contact avec vous sous 48h pour affiner votre demande et vous proposer un séjour personnalisé, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function CatalogueSportifPage() {
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
              alt="Stade de football — Catalogue sportif CTA Voyages"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              src="/assets/images/iStock-1254996096.jpg"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <HeroScrollIndicator />
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="hero-anim max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Catalogue sportif
              </p>
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]">
                Le meilleur du sport vous attend !
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                Football, Rugby, NBA, NFL, Formule 1, Moto GP, Boxing Day — des
                séjours clés en main pour transformer chaque déplacement sportif
                en un moment exceptionnel, original et mémorable.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a href="#cta-final" className="hero-cta-primary group">
                  Demander un devis gratuit
                  <span className="material-symbols-outlined hero-cta-arrow">
                    arrow_forward
                  </span>
                </a>
                <a href="#packs-sportifs" className="hero-cta-ghost">
                  Voir nos packs sportifs
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
                  Billets officiels
                </div>
                <div className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-[13px]">
                  <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                    check_circle
                  </span>
                  Séjours clés en main
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
                Vivez une expérience sportive unique
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Notre agence spécialisée dans la commercialisation de voyages et
                d&apos;événements vous accompagne de A à Z pour transformer chaque
                déplacement en un moment exceptionnel. Parce qu&apos;assister à un
                grand match, vibrer lors d&apos;une compétition internationale ou
                partager un voyage autour du sport est un vecteur d&apos;émotions
                unique, nous concevons des packs adaptés à vos envies, vos
                objectifs et votre budget. Que ce soit pour un week-end autour du
                football européen, un séjour lors d&apos;un Grand Prix de Formule
                1, une immersion au cœur de la NBA à New York ou encore pour
                vibrer au rythme du MotoGP, nous créons des prestations sur mesure
                mêlant passion, découverte et émotions fortes.
              </p>
            </div>
          </div>
        </section>

        {/* PACKS SPORTIFS — CARROUSEL */}
        <section
          className="section-bg-blue py-section_padding_v overflow-hidden"
          id="packs-sportifs"
        >
          <div className="w-full px-6 lg:px-[50px]">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOS PACKS SPORTIFS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Choisissez votre aventure sportive
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Football, Rugby, NBA, NFL, Formule 1, Moto GP ou Boxing Day —
                chaque pack est conçu pour vous offrir une immersion totale dans
                votre passion.
              </p>
            </div>
            <SportCarousel />
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
                Pourquoi choisir le catalogue sportif CTA Voyages&nbsp;?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      emoji_events
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Une expertise reconnue
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Plus de 20 ans d&apos;expérience dans l&apos;organisation de
                    séjours sportifs pour les particuliers, les entreprises et les
                    groupes.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      tune
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Des offres variées &amp; personnalisables
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Chaque programme est conçu sur mesure selon vos besoins :
                    sport choisi, destination, hébergement, catégorie de billets
                    et expériences exclusives.
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
                      luggage
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Un accompagnement clé en main
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Nous gérons tout : billets officiels, hôtel, transport,
                    transferts, activités et encadrement. Vous n&apos;avez qu&apos;à
                    vibrer.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      inventory_2
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Votre pack comprend
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Le vol aller-retour, l&apos;hébergement en hôtel 3 à 5 étoiles
                    et votre billet pour l&apos;événement sportif. Options VIP
                    disponibles.
                  </p>
                </div>
              </div>
            </div>

            <StatsCounters />
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
                Un séjour sport pensé de A à Z
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
                    Votre sport, votre destination, vos dates, votre budget — nos
                    conseillers spécialisés prennent le temps d&apos;écouter vos
                    envies.
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
                    Billets officiels, hôtel, transports, transferts et options
                    exclusives — nous orchestrons chaque détail pour un séjour sans
                    souci.
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
                    Vous n&apos;avez plus qu&apos;à vibrer
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après l&apos;événement, nous assurons une
                    assistance personnalisée pour que chaque moment soit
                    exceptionnel.
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
                Notre volonté : voyager mieux, pas moins. Même pour le sport.
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
                Questions fréquentes sur le catalogue sportif
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
                  Vous avez un projet de séjour sportif&nbsp;?
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre sport, votre destination et vos dates. Nos
                  conseillers spécialisés prennent contact avec vous sous 48h pour
                  composer votre pack sur mesure.
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

        {/* VOUS AIMEREZ AUSSI */}
        <section className="bg-white py-section_padding_v overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="flex justify-between items-end mb-8 sm:mb-10">
              <div>
                <p className="text-primary font-label text-label mb-2 tracking-wider uppercase text-[12px] sm:text-[14px]">
                  Inspirations
                </p>
                <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-h2 text-on-surface">
                  Vous aimerez aussi
                </h2>
              </div>
              <Link
                href="/destinations"
                className="text-primary font-label text-[13px] sm:text-[14px] flex items-center gap-2 hover:underline flex-shrink-0"
              >
                Voir tout
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <AlsoCarousel />
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
