import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterForm from "@/components/home/NewsletterForm";
import { getDestination, getAllSlugs } from "@/lib/destinations";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
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
  const dest = getDestination(slug);

  if (!dest) {
    notFound();
  }

  return (
    <>
      <main className="pt-[72px]">
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`Voyage ${dest.name} avec CTA Voyages`}
            className="w-full h-full object-cover"
            src={dest.heroImg}
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute inset-0 flex flex-col justify-end pb-10 sm:pb-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter w-full">
              <span className="inline-block bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px] sm:text-[13px] mb-3 sm:mb-4 tracking-wider uppercase">
                {dest.continent}
              </span>
              <h1 className="font-h1 text-[30px] sm:text-[42px] md:text-h1 text-white mb-3 sm:mb-4 leading-[1.1] max-w-3xl">
                Voyage {dest.name}
              </h1>
              <p className="font-body-lg text-[15px] sm:text-[18px] text-white/90 mb-6 sm:mb-8 max-w-2xl">
                {dest.intro}
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/demande-devis"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/demande-renseignement"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRÉSENTATION + POINTS FORTS */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
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
                  vous ressemble, à votre rythme, selon vos envies et votre budget.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 luxury-shadow border border-outline-variant/30">
                <p className="text-primary font-label text-label mb-4 tracking-wider uppercase text-[12px] sm:text-[14px]">
                  Les points forts
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
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Inspirations
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
                Nos expériences {dest.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {dest.experiences.map((exp, i) => (
                <div
                  key={exp.title}
                  className="unified-card bg-surface-container-lowest rounded-xl luxury-shadow border border-outline-variant/30 p-6 sm:p-8 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-[#3179C4]/10 flex items-center justify-center mb-5">
                    <span className="font-h3 text-[18px] font-bold text-[#3179C4]">
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
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-10 luxury-shadow border border-outline-variant/30 text-center">
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
