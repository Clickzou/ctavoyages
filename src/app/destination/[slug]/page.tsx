import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import NewsletterForm from "@/components/home/NewsletterForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import DestCarousel from "@/components/destination/DestCarousel";
import DestinationTemplate from "@/components/destination/DestinationTemplate";
import { getDestination, getAllSlugs } from "@/lib/destinations";
import { getDestinationContent } from "@/lib/destination-content";

/** Slugs disposant d'une fiche riche servie en page statique dédiée (/destination-<slug>). */
const STATIC_RICH_SLUGS = ["japon", "thailande"];

export function generateStaticParams() {
  // On exclut japon/thailande (servis sur /destination-<slug>).
  return getAllSlugs()
    .filter((slug) => !STATIC_RICH_SLUGS.includes(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rich = getDestinationContent(slug);
  if (rich) {
    return { title: rich.meta.title, description: rich.meta.description };
  }
  const dest = getDestination(slug);
  if (!dest) {
    return { title: "Destination introuvable | CTA Voyages" };
  }
  return {
    title: `Voyage ${dest.name} : séjour, circuit et voyage sur mesure | CTA Voyages`,
    description: `Organisez votre voyage ${dest.name} avec CTA Voyages. ${dest.intro} Devis gratuit, conseiller dédié, contact sous 48h.`,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // japon/thailande : fiche riche servie sur /destination-<slug>.
  if (STATIC_RICH_SLUGS.includes(slug)) {
    redirect(`/destination-${slug}`);
  }

  // Fiche riche (template complet avec itinéraire) si disponible.
  const rich = getDestinationContent(slug);
  if (rich) {
    return <DestinationTemplate content={rich} />;
  }

  // Sinon, fiche générique (repli).
  const dest = getDestination(slug);
  if (!dest) {
    notFound();
  }

  return (
    <>
      <main>
        {/* HERO plein écran */}
        <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`Voyage ${dest.name} avec CTA Voyages`}
            className="w-full h-full object-cover"
            src={dest.heroImg}
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <HeroScrollIndicator />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="hero-anim max-w-[1200px] mx-auto px-4 sm:px-gutter w-full">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>{" "}
                <span className="text-white/40">/</span> {dest.continent}
              </p>
              <h1 className="font-h1 text-[30px] sm:text-[42px] md:text-h1 text-white mb-3 sm:mb-4 leading-[1.1] max-w-3xl">
                Voyage {dest.name}
              </h1>
              <p className="font-body-lg text-[15px] sm:text-[18px] text-white/90 mb-6 sm:mb-8 max-w-2xl">
                {dest.intro}
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href="/demande-devis" className="hero-cta-primary group">
                  Demander mon devis gratuit
                  <span className="material-symbols-outlined hero-cta-arrow">
                    arrow_forward
                  </span>
                </Link>
                <a href="#presentation" className="hero-cta-ghost">
                  Découvrir la destination
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PRÉSENTATION + POINTS FORTS */}
        <section id="presentation" className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div data-reveal="fade-up">
                <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                  Présentation
                </p>
                <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-6">
                  {dest.name}, une destination d&apos;exception
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                  {dest.intro}
                </p>
                <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-5">
                  Votre conseiller CTA Voyages conçoit avec vous l&apos;itinéraire qui
                  vous ressemble, à votre rythme, selon vos envies et votre budget —
                  en séjour, en circuit ou en voyage entièrement sur mesure.
                </p>
              </div>
              <div
                data-reveal="fade-up"
                data-reveal-delay={120}
                className="bg-white rounded-2xl p-6 sm:p-8 luxury-shadow border border-outline-variant/30"
              >
                <p className="text-primary font-label text-label mb-4 tracking-wider uppercase text-[12px] sm:text-[14px]">
                  Les incontournables
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {dest.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-[#3179C4] text-[22px] flex-shrink-0 mt-0.5"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NOS EXPÉRIENCES */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14" data-reveal="fade-up">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Inspirations
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
                Nos idées de voyage {dest.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {dest.experiences.map((exp, i) => (
                <div
                  key={exp.title}
                  data-reveal="fade-up"
                  data-reveal-delay={i * 120}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-outline-variant/40 shadow-[0_2px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(49,121,196,0.16)] transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#3179C4] to-[#FBBF12] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-12 h-12 rounded-full bg-[#3179C4]/10 flex items-center justify-center mb-5 group-hover:bg-[#3179C4] transition-colors duration-300">
                    <span className="font-h3 text-[18px] font-bold text-[#3179C4] group-hover:text-white transition-colors duration-300">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-h3 text-[19px] sm:text-[21px] font-bold text-on-surface mb-3 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEILLEURE SAISON */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div
              data-reveal="zoom"
              className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-10 luxury-shadow border border-outline-variant/30 text-center"
            >
              <span
                className="material-symbols-outlined text-[#FBBF12] text-[40px] sm:text-[48px] mb-4 inline-block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                calendar_month
              </span>
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Quand partir
              </p>
              <h2 className="font-h2 text-[22px] sm:text-[28px] md:text-[32px] text-on-surface mb-4">
                Meilleure saison
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                {dest.bestSeason}
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="cta-final" className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">
                  Votre voyage {dest.name} commence ici
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre projet. Séjour, circuit ou voyage sur mesure :
                  votre conseiller dédié construit avec vous le voyage qui vous
                  ressemble, gratuitement et sans engagement.
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link href="/demande-devis" className="hero-cta-primary group">
                    Demander mon devis gratuit
                    <span className="material-symbols-outlined hero-cta-arrow">
                      arrow_forward
                    </span>
                  </Link>
                  <a
                    href="tel:+33534391391"
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>{" "}
                    +33 (0)5 34 391 391
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                  {["Devis gratuit", "Sans engagement", "Contact sous 48h"].map(
                    (m) => (
                      <span
                        key={m}
                        className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[15px]">
                          check_circle
                        </span>{" "}
                        {m}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTRES DESTINATIONS */}
        <section className="section-bg-blue py-section_padding_v overflow-hidden">
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
            <DestCarousel excludeName={dest.name} />
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
