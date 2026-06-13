import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import ItinerarySection from "@/components/destination-japon/ItinerarySection";
import FaqList from "@/components/destination-japon/FaqList";
import DestCarousel from "@/components/destination-japon/DestCarousel";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Voyage au Japon : séjour, circuit et voyage sur mesure | CTA Voyages",
  description:
    "Organisez votre voyage au Japon avec CTA Voyages. Séjour en ryokan, circuit culturel de Tokyo à Kyoto, glamping, croisière ou voyage sur mesure. Devis gratuit, conseiller dédié, contact sous 48h.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la meilleure période pour visiter le Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le printemps (mars-mai) pour les cerisiers et l'automne (octobre-novembre) pour les feuillages sont les périodes les plus prisées. L'hiver offre le ski à Hokkaido et les onsen sous la neige.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un visa pour se rendre au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, les ressortissants français n'ont pas besoin de visa pour un séjour inférieur à 90 jours. Un passeport valide suffit.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de voyages proposez-vous au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CTA Voyages propose des séjours, circuits culturels, voyages sur mesure, croisières et escapades glamping au Japon.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on personnaliser entièrement l'itinéraire au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, absolument. Nos conseillers construisent votre voyage pas à pas selon vos envies, votre rythme et votre budget.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte un voyage au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le budget dépend de la durée, la période, le niveau d'hébergement, le type de voyage et les activités incluses. Contactez-nous pour une proposition personnalisée et gratuite.",
      },
    },
    {
      "@type": "Question",
      name: "La barrière de la langue est-elle un problème au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Nos guides francophones et notre assistance vous accompagnent tout au long du voyage.",
      },
    },
    {
      "@type": "Question",
      name: "Quels hébergements proposez-vous au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hôtels 4 et 5 étoiles, ryokans traditionnels avec bains onsen, shukubo et hébergements insolites.",
      },
    },
    {
      "@type": "Question",
      name: "Comment demander un devis pour un voyage au Japon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Via notre formulaire, par téléphone ou email. Réponse sous 48h, gratuitement et sans engagement.",
      },
    },
  ],
};

export default function DestinationJaponPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-[72px]">
        {/* HERO */}
        <section className="relative h-[480px] sm:h-[580px] md:h-[640px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Temple de Kyoto entouré de cerisiers en fleur — Voyage au Japon avec CTA Voyages"
            className="w-full h-full object-cover"
            src="/assets/images/iStock-1969999309.jpg"
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute inset-0 flex flex-col justify-end pb-10 sm:pb-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter w-full">
              <p className="font-label text-label text-white/70 mb-2 sm:mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Destination Japon
              </p>
              <h1 className="font-h1 text-[30px] sm:text-[42px] md:text-h1 text-white mb-3 sm:mb-4 leading-[1.1] max-w-3xl">
                Voyage au Japon : entre tradition et modernité
              </h1>
              <p className="font-body-lg text-[15px] sm:text-[18px] text-white/90 mb-6 sm:mb-8 max-w-2xl">
                Séjour en ryokan, circuit culturel, glamping, croisière ou voyage
                sur mesure. Votre conseiller dédié conçoit le voyage qui vous
                ressemble, de A à Z.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#cta-final"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href="#itineraire"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A1A1A] active:scale-95 transition-all text-center"
                >
                  Des lieux uniques
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INFOS ESSENTIELLES */}
        <section className="info-band py-4 sm:py-5">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
              <div
                className="info-zone zone-clock"
                data-cursor-color="white"
                style={
                  {
                    "--minute-rotation": "2880deg",
                    "--hour-rotation": "240deg",
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
                  <p className="info-label">Décalage horaire</p>
                  <p className="info-value">+7h / +8h</p>
                </div>
              </div>
              <div className="info-zone zone-plane" data-cursor-color="white">
                <span
                  className="material-symbols-outlined info-plane-icon"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  flight
                </span>
                <div className="info-text">
                  <p className="info-label">Vol depuis Paris</p>
                  <p className="info-value">~12h de vol</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Présentation
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-6 sm:mb-8">
                Le Japon, une invitation au voyage hors du commun
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed">
                Archipel de contrastes saisissants, le Japon fascine par sa
                capacité unique à marier l&apos;ultra-modernité et la sérénité
                millénaire. Des néons vertigineux de Shinjuku aux jardins zen
                apaisants de Kyoto, des sources chaudes d&apos;Hakone aux ruelles
                envoûtantes de Gion, chaque étape révèle une facette inédite
                d&apos;une culture d&apos;une richesse infinie. Séjourner dans un{" "}
                <strong>ryokan</strong> traditionnel, déguster un kaiseki aux côtés
                d&apos;une rivière, traverser les forêts de bambous de
                l&apos;Arashiyama ou observer le Mont Fuji depuis les eaux du lac
                Ashi : le Japon est une expérience sensorielle totale, qui se vit
                aussi bien en <strong>séjour urbain</strong> qu&apos;en{" "}
                <strong>circuit culturel</strong>, en{" "}
                <strong>escapade nature</strong>, en <strong>croisière</strong> ou
                en <strong>voyage entièrement sur mesure</strong>. Votre conseiller
                CTA Voyages conçoit avec vous l&apos;itinéraire qui vous ressemble,
                à votre rythme, selon vos envies et votre budget.
              </p>
            </div>
          </div>
        </section>

        {/* POURQUOI VOYAGER AU JAPON */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Nos coups de cœur
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
                Pourquoi voyager au Japon ?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="pack-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop&auto=format"
                  alt="Temple bouddhiste japonais entouré de nature"
                />
                <div className="pack-overlay"></div>
                <div className="pack-content">
                  <span className="material-symbols-outlined pack-icon">
                    temple_buddhist
                  </span>
                  <h4>Une culture millénaire</h4>
                  <p>
                    Temples bouddhistes, sanctuaires shinto, cérémonie du thé, arts
                    martiaux : chaque étape est un voyage dans le temps.
                  </p>
                </div>
              </div>
              <div className="pack-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop&auto=format"
                  alt="Gastronomie japonaise kaiseki raffinée"
                />
                <div className="pack-overlay"></div>
                <div className="pack-content">
                  <span className="material-symbols-outlined pack-icon">
                    ramen_dining
                  </span>
                  <h4>Une gastronomie d&apos;exception</h4>
                  <p>
                    Sushis, ramen, kaiseki, street food de Dotonbori : la cuisine
                    japonaise est une invitation au raffinement absolu.
                  </p>
                </div>
              </div>
              <div className="pack-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&h=400&fit=crop&auto=format"
                  alt="Mont Fuji et cerisiers en fleur au Japon"
                />
                <div className="pack-overlay"></div>
                <div className="pack-content">
                  <span className="material-symbols-outlined pack-icon">
                    landscape
                  </span>
                  <h4>Des paysages d&apos;une beauté rare</h4>
                  <p>
                    Cerisiers au printemps, érables en automne, neige en hiver : les
                    saisons japonaises sont un spectacle permanent.
                  </p>
                </div>
              </div>
              <div className="pack-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format"
                  alt="Bain onsen japonais apaisant dans la nature"
                />
                <div className="pack-overlay"></div>
                <div className="pack-content">
                  <span className="material-symbols-outlined pack-icon">
                    verified_user
                  </span>
                  <h4>Sécurité et sérénité</h4>
                  <p>
                    Parmi les pays les plus sûrs du monde, le Japon offre une
                    hospitalité sincère, une propreté exemplaire et une sérénité
                    unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ITINÉRAIRE */}
        <section className="section-bg-blue py-section_padding_v" id="itineraire">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Inspiration
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-3">
                Un exemple d&apos;itinéraire au Japon
              </h2>
            </div>
            <ItinerarySection />
            {/* Disclaimer recentré sous les deux colonnes */}
            <div className="mt-10 sm:mt-12">
              <div className="max-w-3xl mx-auto bg-white rounded-xl p-4 sm:p-5 flex items-start gap-3 border border-outline-variant/30 shadow-sm">
                <span className="material-symbols-outlined text-[#3179C4] text-[20px] flex-shrink-0 mt-0.5">
                  info
                </span>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant leading-relaxed">
                  <strong>Itinéraire indicatif.</strong> Cet exemple est proposé
                  pour vous inspirer. Votre conseiller CTA Voyages adaptera chaque
                  étape selon vos envies, votre rythme et votre budget. D&apos;autres
                  destinations comme Hiroshima, Nara ou Nikko peuvent facilement
                  s&apos;intégrer à votre programme.
                </p>
              </div>
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
                Tout savoir avant de partir au Japon
              </h2>
            </div>
            <FaqList />
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
                Notre volonté : voyager mieux, pas moins. Au Japon comme ailleurs,
                nous privilégions des prestataires locaux responsables et un
                tourisme respectueux des cultures et des écosystèmes.
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
                  Votre voyage au Japon commence ici
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Parlez-nous de votre projet. Séjour, circuit, voyage sur mesure ou
                  croisière : votre conseiller dédié construit avec vous le voyage
                  qui vous ressemble, gratuitement et sans engagement.
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
            <DestCarousel />
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
