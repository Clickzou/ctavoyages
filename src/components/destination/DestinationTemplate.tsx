import "./styles.css";
import Link from "next/link";
import ItinerarySection from "./ItinerarySection";
import FaqList from "./FaqList";
import DestCarousel from "./DestCarousel";
import NewsletterForm from "@/components/home/NewsletterForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import type { DestinationContent, InfoZone } from "@/lib/destination-content/types";

function InfoZoneView({ zone }: { zone: InfoZone }) {
  if (zone.kind === "clock") {
    return (
      <div
        className="info-zone zone-clock"
        data-cursor-color="white"
        style={
          {
            "--minute-rotation": zone.minuteRotation,
            "--hour-rotation": zone.hourRotation,
          } as React.CSSProperties
        }
      >
        <div className="clock-wrap">
          <svg className="clock-svg" viewBox="0 0 48 48" aria-hidden="true">
            <circle className="clock-face" cx="24" cy="24" r="19"></circle>
            <line className="clock-hour" x1="24" y1="24" x2="24" y2="14"></line>
            <line className="clock-minute" x1="24" y1="24" x2="24" y2="8"></line>
            <circle className="clock-center" cx="24" cy="24" r="2.5"></circle>
          </svg>
        </div>
        <div className="info-text">
          <p className="info-label">{zone.label}</p>
          <p className="info-value">{zone.value}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="info-zone zone-plane" data-cursor-color="white">
      <span
        className="material-symbols-outlined info-plane-icon"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {zone.icon}
      </span>
      <div className="info-text">
        <p className="info-label">{zone.label}</p>
        <p className="info-value">{zone.value}</p>
      </div>
    </div>
  );
}

export default function DestinationTemplate({
  content,
}: {
  content: DestinationContent;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.jsonLd.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* HERO */}
        <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={content.hero.imageAlt}
            className="w-full h-full object-cover"
            src={content.hero.image}
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <HeroScrollIndicator />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="hero-anim max-w-[1200px] mx-auto px-4 sm:px-gutter w-full">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                {content.hero.label}
              </p>
              <h1 className="font-h1 text-[30px] sm:text-[42px] md:text-h1 text-white mb-3 sm:mb-4 leading-[1.1] max-w-3xl">
                {content.hero.h1}
              </h1>
              <p className="font-body-lg text-[15px] sm:text-[18px] text-white/90 mb-6 sm:mb-8 max-w-2xl">
                {content.hero.description}
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="#cta-final" className="hero-cta-primary group">
                  {content.hero.primaryCtaLabel}
                  <span className="material-symbols-outlined hero-cta-arrow">
                    arrow_forward
                  </span>
                </a>
                <a href="#itineraire" className="hero-cta-ghost">
                  {content.hero.secondaryCtaLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INFOS ESSENTIELLES */}
        <section className="info-band py-4 sm:py-5">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              {content.infos.map((zone, i) => (
                <InfoZoneView key={i} zone={zone} />
              ))}
            </div>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                {content.presentation.eyebrow}
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-6 sm:mb-8">
                {content.presentation.h2}
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                {content.presentation.body}
              </p>
            </div>
          </div>
        </section>

        {/* POURQUOI VOYAGER */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                {content.why.eyebrow}
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
                {content.why.h2}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {content.why.cards.map((card) => (
                <div className="pack-card" key={card.title}>
                  <div className="pack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.img} alt={card.alt} />
                  </div>
                  <div className="pack-content">
                    <span className="material-symbols-outlined pack-icon">
                      {card.icon}
                    </span>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ITINÉRAIRE */}
        <section className="section-bg-blue py-section_padding_v" id="itineraire">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                {content.itinerary.eyebrow}
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-3">
                {content.itinerary.h2}
              </h2>
            </div>
            <ItinerarySection steps={content.itinerary.steps} />
            {/* Disclaimer recentré sous les deux colonnes */}
            <div className="mt-10 sm:mt-12">
              <div className="max-w-3xl mx-auto bg-white rounded-xl p-4 sm:p-5 flex items-start gap-3 border border-outline-variant/30 shadow-sm">
                <span className="material-symbols-outlined text-[#3179C4] text-[20px] flex-shrink-0 mt-0.5">
                  info
                </span>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant leading-relaxed">
                  {content.itinerary.disclaimer}
                </p>
              </div>
            </div>
            {/* CTA devis sous l'itinéraire */}
            <div className="text-center mt-8 sm:mt-10">
              <Link href="/demande-devis" className="hero-cta-primary group">
                Demander un devis personnalisé
                <span className="material-symbols-outlined hero-cta-arrow">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
                {content.faq.eyebrow}
              </span>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                {content.faq.h2}
              </h2>
            </div>
            <FaqList left={content.faq.left} right={content.faq.right} />
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
          <div className="rse-overlay"></div>
          <div className="rse-content max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="flex flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Logo EcoVadis — Certification RSE de CTA Voyages"
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
                {content.rse.body}
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

        {/* CTA */}
        <section id="cta-final" className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">
                  {content.ctaFinal.h2}
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  {content.ctaFinal.body}
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link
                    href="/demande-devis"
                    className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center"
                  >
                    Demander mon devis gratuit
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

        {/* CARROUSEL DESTINATIONS */}
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
                className="text-primary font-label text-[13px] sm:text-[14px] flex items-center gap-2 hover:underline flex-shrink-0"
                href="/destinations"
              >
                Voir tout{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <DestCarousel excludeName={content.hero.label.replace(/^Destination\s+/i, "")} />
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
                Recevez en avant-première nos meilleures offres, nos nouveaux
                itinéraires et nos conseils de voyage directement dans votre boîte
                mail.
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
