import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import StatsCounters from "@/components/croisieres/StatsCounters";
import TypeCarousel from "@/components/croisieres/TypeCarousel";
import InspirationCarousel from "@/components/croisieres/InspirationCarousel";
import FaqList from "@/components/croisieres/FaqList";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Croisières - CTA Voyages",
  description:
    "Découvrez nos croisières en mer avec CTA Voyages. Transport, hébergement, restauration et animations à bord — une expérience complète sur les mers du monde. Devis gratuit, conseiller dédié.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'une croisière ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une croisière est un voyage touristique effectué à bord d'un navire. Elle inclut généralement le transport maritime, l'hébergement, la restauration et des activités à bord.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles destinations proposez-vous en croisière ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons des croisières en Méditerranée, dans les Caraïbes, en Europe du Nord, aux îles grecques, le long des fjords norvégiens et bien d'autres destinations.",
      },
    },
    {
      "@type": "Question",
      name: "Les repas sont-ils inclus dans le prix de la croisière ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. La plupart des croisières incluent les repas principaux à bord. Certaines offrent également les boissons selon la formule choisie.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on personnaliser une croisière ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous pouvons combiner une croisière avec des extensions terrestres, des excursions dans les escales et des hébergements pre ou post-croisière.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je demander un devis gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien sûr. Nos attachées clientèle prennent contact avec vous sous 48h pour affiner votre demande, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function CroisieresPage() {
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
              alt="Croisière en mer — CTA Voyages"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1600&h=900&fit=crop&auto=format"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-gutter w-full py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Croisières
              </p>
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.1]">
                Croisières en mer : une expérience de voyage à part entière
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-4 sm:mb-5 max-w-2xl">
                Transport, hébergement, restauration et animations à bord — vivez
                une expérience complète sur les mers du monde, avec le confort
                d&apos;un hôtel flottant et la magie de chaque escale.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Embarquer pour ma croisière
                </a>
                <a
                  href="#inspirations-croisieres"
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
                  Hébergement inclus
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
                Voyager en mer, une expérience unique à chaque escale
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Une croisière est bien plus qu&apos;un simple voyage en bateau.
                C&apos;est un séjour à bord d&apos;un navire qui inclut
                l&apos;hébergement, la restauration, les animations et les loisirs,
                tout en vous emmenant de port en port à travers des destinations
                d&apos;exception. Chez CTA Voyages, nous sélectionnons avec soin les
                meilleures compagnies de croisières et les itinéraires les plus
                inspirants — Méditerranée, fjords norvégiens, Caraïbes, îles
                grecques ou encore Europe du Nord. Votre conseiller dédié vous aide
                à choisir la croisière adaptée à votre profil, à votre budget et à
                vos envies d&apos;évasion, et peut enrichir votre voyage
                d&apos;extensions terrestres avant ou après l&apos;embarquement.
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
                Pourquoi réserver votre croisière avec CTA Voyages&nbsp;?
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
                    Conseil humain &amp; sélection adaptée
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Votre conseiller vous guide parmi les compagnies et itinéraires
                    pour trouver la croisière qui vous correspond vraiment.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div
                  className="card-reveal-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1600&h=900&fit=crop&auto=format')",
                  }}
                />
                <div className="card-reveal-overlay" />
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      sailing
                    </span>
                  </div>
                  <h3 className="font-h3 text-[17px] sm:text-[19px] font-semibold mb-3 text-on-surface">
                    Tout compris à bord
                  </h3>
                  <p className="font-body-md text-[13px] sm:text-[14px] text-[#555]">
                    Hébergement, repas, animations et loisirs — profitez de chaque
                    instant sans vous soucier des dépenses.
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
                    Grâce à TourCom et à nos partenariats avec les grandes
                    compagnies, nous accédons à des tarifs compétitifs.
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
                    Avant, pendant et après votre croisière, nous assurons un
                    accompagnement personnalisé pour réagir à chaque imprévu.
                  </p>
                </div>
              </div>
            </div>
            <StatsCounters />
          </div>
        </section>

        {/* TYPES DE CROISIÈRES */}
        <section className="bg-white py-section_padding_v overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                VOS ENVIES
              </p>
              <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
                Quel type de croisière recherchez-vous&nbsp;?
              </h2>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Méditerranée ensoleillée, fjords majestueux, îles exotiques ou
                grande traversée — nous trouvons la croisière qui correspond à
                votre rythme et vos envies.
              </p>
            </div>
            <TypeCarousel />
          </div>
        </section>

        {/* INSPIRATIONS DE CROISIÈRES */}
        <section
          className="section-bg-blue py-section_padding_v overflow-hidden"
          id="inspirations-croisieres"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2 tracking-wider">
                NOS IDÉES DE CROISIÈRES
              </p>
              <h3 className="font-h3 text-[24px] sm:text-h3 text-on-surface">
                Nos inspirations d&apos;itinéraires en mer
              </h3>
              <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant mt-3 max-w-2xl">
                Des fjords norvégiens aux îles grecques, voici quelques idées de
                croisières pour vous inspirer.
              </p>
            </div>
            <InspirationCarousel />
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

        {/* ACCOMPAGNEMENT */}
        <section className="bg-white py-section_padding_v human-support-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div className="mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-2">
                NOTRE MÉTHODE
              </p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">
                Une croisière pensée pour vous, de A à Z
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
                    Vous nous parlez de vos envies
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Votre conseiller prend le temps de comprendre vos attentes :
                    destination, durée, type de navire, budget et ambiance
                    souhaitée.
                  </p>
                </div>
              </div>
              <div className="unified-card">
                <div className="card-content w-full">
                  <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      sailing
                    </span>
                  </div>
                  <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">
                    Nous sélectionnons la croisière idéale
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Compagnie, itinéraire, catégorie de cabine, excursions et
                    extensions terrestres — nous organisons tout pour vous.
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
                    Vous embarquez sereinement
                  </h4>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">
                    Avant, pendant et après votre croisière, nous assurons une
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
                Questions fréquentes sur nos croisières
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
                  Vous avez un projet de croisière&nbsp;?
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre destination et de votre croisière idéale.
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
                Recevez en avant-première nos meilleures offres de croisières, nos
                nouveaux itinéraires et nos conseils de voyage.
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
