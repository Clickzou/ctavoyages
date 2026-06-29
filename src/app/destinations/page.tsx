import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import DestinationsGrid from "@/components/destinations/DestinationsGrid";
import WorldMap from "@/components/home/WorldMap";
import FaqList from "@/components/destinations/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Nos destinations et événements sportifs - CTA Voyages",
  description:
    "Découvrez les destinations et événements sportifs proposés par CTA Voyages : Japon, Thaïlande, Maroc, Île Maurice, Seychelles, Zanzibar, Canada, Costa Rica, Laponie, Londres, Amsterdam, Porto, Rome et nos séjours sportifs en Europe, Amériques et Asie.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelles destinations proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons 13 destinations de voyage et 14 destinations d'événements sportifs à travers le monde.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on personnaliser un voyage vers l'une de ces destinations ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Chaque destination est entièrement personnalisable : itinéraire, hébergements, activités, durée et budget.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des séjours sportifs ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Notre catalogue sportif propose des séjours clés en main pour le football, le rugby, la NBA, la NFL, la Formule 1, le Moto GP et le Boxing Day.",
      },
    },
    {
      "@type": "Question",
      name: "Comment demander un devis ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Par téléphone, email ou formulaire. Nos attachées clientèle prennent contact avec vous sous 48h, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function DestinationsPage() {
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
          style={{ minHeight: "420px", height: "55vh", maxHeight: "600px" }}
        >
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Destinations et événements sportifs dans le monde"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14">
            <div className="max-w-2xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Nos destinations et événements
              </p>
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]">
                Destinations de voyage et événements sportifs
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-5 max-w-xl">
                De l&apos;Asie aux escapades européennes, en passant par l&apos;Océan
                Indien et les Amériques. Découvrez aussi nos séjours sportifs :
                football, rugby, NBA, NFL, Formule 1, Moto GP et Boxing Day.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Nous contacter
                </a>
                <a
                  href="#dest-section"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Explorer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CARTE INTERACTIVE (mêmes destinations que la home) */}
        <WorldMap />

        {/* GRILLE DESTINATIONS */}
        <section className="bg-white py-section_padding_v" id="dest-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOS DESTINATIONS ET ÉVÉNEMENTS
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface mb-3">
                Où souhaitez-vous voyager ?
              </h2>
            </div>

            <DestinationsGrid />
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
                Questions fréquentes sur nos destinations
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
                  Vous avez une destination en tête ?
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre projet. Nos attachées clientèle prennent
                  contact avec vous sous 48h pour construire ensemble le voyage
                  qui vous ressemble.
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
                Ne manquez rien de notre actualité
              </h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                Recevez en avant-première nos meilleures offres et nos conseils de
                voyage.
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
