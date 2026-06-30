import Link from "next/link";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import WorldMap from "@/components/home/WorldMap";
import OfferCarousel from "@/components/home/OfferCarousel";
import DestCarousel from "@/components/home/DestCarousel";
import StatsCounters from "@/components/home/StatsCounters";
import NewsletterForm from "@/components/home/NewsletterForm";

const ATOUTS = [
  {
    icon: "headset_mic",
    title: "Un interlocuteur unique",
    text: "Du premier échange à votre retour, un seul conseiller connaît votre dossier dans son intégralité.",
  },
  {
    icon: "assignment_turned_in",
    title: "Organisation complète",
    text: "Vols, hébergements, transferts, excursions : nous gérons tout pour que vous profitiez pleinement.",
  },
  {
    icon: "support_agent",
    title: "Assistance complète",
    text: "Avant, pendant et après votre voyage, nous assurons une assistance personnalisée.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
          <HeroSlideshow />
        </section>

        {/* QUI SOMMES-NOUS */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            {/* Intro */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <span
                data-reveal="fade-down"
                className="inline-flex items-center gap-3 text-primary font-label tracking-wider uppercase text-[12px] sm:text-[13px] mb-4"
              >
                <span className="h-px w-8 bg-[#FBBF12]" />
                Qui sommes-nous
                <span className="h-px w-8 bg-[#FBBF12]" />
              </span>
              <h2
                data-reveal="fade-up"
                className="font-h2 text-[28px] sm:text-[34px] md:text-h2 text-on-surface mb-5"
              >
                CTA Voyages, votre partenaire d&apos;évasion
              </h2>
              <p
                data-reveal="fade-up"
                data-reveal-delay={120}
                className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant leading-relaxed"
              >
                CTA Voyages propose une large gamme de prestations pour les
                voyageurs individuels : séjours, circuits, croisières, glamping,
                catalogue sportif et voyages sur mesure. Quel que soit votre style
                de voyage, nous concevons des expériences personnalisées pour
                répondre à toutes vos envies d&apos;évasion.
              </p>
            </div>

            {/* 3 atouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {ATOUTS.map((a, i) => (
                <div
                  key={a.title}
                  data-reveal="fade-up"
                  data-reveal-delay={i * 140}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-outline-variant/40 shadow-[0_2px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(49,121,196,0.16)] transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#3179C4] to-[#FBBF12] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-14 h-14 rounded-2xl bg-[#3179C4]/10 flex items-center justify-center mb-6 group-hover:bg-[#3179C4] group-hover:scale-105 transition-all duration-300">
                    <span className="material-symbols-outlined text-[28px] text-[#3179C4] group-hover:text-white transition-colors duration-300">
                      {a.icon}
                    </span>
                  </div>
                  <h3 className="font-h3 text-[19px] sm:text-[21px] font-bold mb-3 text-on-surface">
                    {a.title}
                  </h3>
                  <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed">
                    {a.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOS OFFRES — CARROUSEL (pleine largeur, 5 cartes, marges 50px) */}
        <section className="py-section_padding_v section-bg-blue overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div data-reveal="fade-up" className="text-center mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-3 tracking-wider">NOS PRESTATIONS</p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">Tous les types de voyages, une seule agence</h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant mt-3 max-w-2xl mx-auto">
                Séjour balnéaire, circuit culturel, croisière, glamping, catalogue sportif ou voyage sur mesure : nous créons l&apos;expérience qui vous correspond.
              </p>
            </div>
          </div>
          <div
            data-reveal="fade-up"
            data-reveal-delay={120}
            className="px-4 sm:px-[50px]"
          >
            <OfferCarousel />
          </div>
        </section>

        {/* TRUST BANNER */}
        <div className="trust-banner bg-[#004191] h-[48px] px-4 sm:px-gutter">
          <div className="trust-ticker">
            <div className="trust-ticker-item">
              <p className="text-white font-body-md text-[12px] xs:text-[14px] md:text-[16px] text-center">
                Membre du réseau <span className="font-bold">TourCom</span> — Premier réseau européen · 1 200 agences · 6 000 points de vente
              </p>
            </div>
            <div className="trust-ticker-item">
              <p className="text-white font-body-md text-[12px] xs:text-[14px] md:text-[16px] text-center font-bold">
                Plus de 30 années d&apos;expertise.
              </p>
            </div>
          </div>
        </div>

        {/* MAP (client) */}
        <WorldMap />

        {/* DESTINATIONS CARROUSEL — pleine largeur, marges 50px, 5 cartes */}
        <section className="py-section_padding_v bg-white overflow-hidden">
          <div className="dest-fullwidth w-full px-6 lg:px-[50px]">
            <div data-reveal="fade-right" className="mb-8 sm:mb-12">
              <p className="text-primary font-label text-label mb-2">DESTINATIONS PHARES</p>
              <h3 className="font-h3 text-[24px] sm:text-h3 text-on-surface">Nos destinations d&apos;exception</h3>
            </div>
            <div data-reveal="fade-up">
              <DestCarousel />
            </div>
            <div data-reveal="fade-up" className="text-center mt-8 sm:mt-10">
              <Link href="/destinations" className="inline-flex items-center gap-2 border-[1.5px] border-[#3179C4] text-[#3179C4] px-6 py-3 rounded-lg font-label text-[13px] sm:text-[14px] hover:bg-[#3179C4] hover:text-white transition-all">
                Voir toutes nos destinations <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <div data-reveal="fade-up" className="mb-10 sm:mb-16">
              <p className="text-primary font-label text-label mb-2">NOTRE SAVOIR-FAIRE</p>
              <h2 className="font-h2 text-[28px] sm:text-[32px] md:text-h2 text-on-surface">Une expertise sur-mesure</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div data-reveal="fade-up" className="unified-card expertise-card">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">forum</span>
                </div>
                <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">Écoute &amp; dialogue</h4>
                <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">Nous prenons le temps de comprendre vos envies, vos passions et vos impératifs pour créer un voyage qui vous ressemble vraiment.</p>
              </div>
              <div data-reveal="fade-up" data-reveal-delay={140} className="unified-card expertise-card">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">map</span>
                </div>
                <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">Conception unique</h4>
                <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">Chaque détail est minutieusement étudié par nos conseillers experts pour garantir une fluidité parfaite et des moments d&apos;exception.</p>
              </div>
              <div data-reveal="fade-up" data-reveal-delay={280} className="unified-card expertise-card sm:col-span-2 md:col-span-1">
                <div className="icon-circle w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#3179C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">verified_user</span>
                </div>
                <h4 className="font-h3 text-[18px] sm:text-[20px] font-bold mb-4">Accompagnement</h4>
                <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant">De la genèse de votre projet jusqu&apos;à votre retour, que ce soit avant, pendant ou après votre voyage, nous assurons une assistance personnalisée.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS + TOURCOM (client) */}
        <StatsCounters />

        {/* RSE */}
        <section className="rse-section w-full py-12 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="rse-bg-img" src="/assets/images/iStock-1372488167.jpg" alt="Paysage naturel RSE" />
          <div className="rse-overlay" />
          <div className="rse-content max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div data-reveal="fade-up" className="flex flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Logo EcoVadis" className="h-[56px] sm:h-[72px] w-auto mb-6 sm:mb-8 ecovadis-glow" src="/assets/images/logo-ecovadis.png" />
              <p className="font-label text-label text-white/70 mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">Notre engagement</p>
              <p className="font-h3 text-[20px] sm:text-[24px] font-bold text-white mb-4 sm:mb-6 leading-snug max-w-2xl">Labellisé Entreprise engagée RSE.</p>
              <p className="text-[16px] sm:text-[18px] text-white/90 mb-4 sm:mb-6 leading-snug max-w-2xl">Notre volonté : voyager mieux, pas moins.</p>
              <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:85b4177f-e598-4849-8afd-14da21f3ebf8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-label text-label text-[13px] sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all group">
                Découvrir notre démarche RSE <span className="material-symbols-outlined text-[16px] sm:text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA BANDEAU */}
        <section id="cta-final" className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div data-reveal="zoom" className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">Prêt à créer votre voyage idéal ?</h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre projet. Votre conseiller dédié vous envoie une proposition personnalisée, gratuite et sans engagement.
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link href="/demande-devis" className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center">
                    Demander mon devis gratuit
                  </Link>
                  <a href="tel:+33534391391" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">call</span> +33 (0)5 34 391 391
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">check_circle</span> Devis gratuit</span>
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">check_circle</span> Sans engagement</span>
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">check_circle</span> Contact sous 48h</span>
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
                <span className="material-symbols-outlined text-[#FBBF12] text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <p className="font-label text-[12px] sm:text-[14px] text-white/70 tracking-wider uppercase">Newsletter</p>
              </div>
              <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-3">Ne manquez rien de notre actualité</h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                Recevez en avant-première nos meilleures offres, nos nouveaux itinéraires et nos conseils de voyage directement dans votre boîte mail.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[420px]">
              <NewsletterForm />
              <div className="flex items-center gap-4 mt-4 justify-center sm:justify-start">
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] sm:text-[12px]"><span className="material-symbols-outlined text-[14px] text-[#FBBF12]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Gratuit</div>
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] sm:text-[12px]"><span className="material-symbols-outlined text-[14px] text-[#FBBF12]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Sans spam</div>
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] sm:text-[12px]"><span className="material-symbols-outlined text-[14px] text-[#FBBF12]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Désinscription libre</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
