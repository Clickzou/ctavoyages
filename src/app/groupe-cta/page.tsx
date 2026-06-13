import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import HeroStats from "@/components/groupe-cta/HeroStats";
import FaqGroupe from "@/components/groupe-cta/FaqGroupe";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title:
    "Groupe CTA : voyages d'affaires, événementiel, MICE et voyages sur mesure | CTA Voyages",
  description:
    "Découvrez les expertises du Groupe CTA : SOP Events pour l'événementiel, CTA Business Travel pour les déplacements professionnels, CTA Meeting & Events pour les événements MICE, et CTA Voyages pour les voyages sur mesure.",
};

export default function GroupeCtaPage() {
  return (
    <main className="pt-[72px]">
      {/* HERO (carrousel CSS + compteurs animés) */}
      <HeroStats />

      {/* INTRO */}
      <section className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
          <p className="section-kicker">Notre vision</p>
          <h2 className="section-title">
            Voyager, réunir, fédérer et créer du lien
          </h2>
          <p className="section-lead">
            Chaque déplacement est une opportunité de rencontre, chaque événement
            un catalyseur d&apos;émotions. Le Groupe CTA réunit des expertises
            complémentaires pour accompagner les organisations dans leurs enjeux
            de mobilité, de communication, d&apos;engagement interne et
            d&apos;expérience client.
          </p>
        </div>
      </section>

      {/* EXPERTISES TITLE */}
      <section id="expertises" className="bg-white pt-section_padding_v pb-0">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
          <p className="section-kicker">Nos métiers</p>
          <h2 className="section-title">
            Un groupe, quatre façons de vous accompagner
          </h2>
          <p className="section-lead">
            Découvrez nos expertises à travers les pôles du Groupe CTA.
          </p>
        </div>
      </section>

      {/* SOP EVENTS */}
      <section id="sop-events" className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <article
            className="mission-section"
            style={
              {
                "--brand": "linear-gradient(135deg, #cb1d48, #dc3d31)",
                "--brand-solid": "#cb1d48",
                "--hover-bg": "linear-gradient(135deg, #cb1d48, #dc3d31)",
                "--accent": "#cb1d48",
                "--glow": "rgba(220, 61, 49, .42)",
              } as React.CSSProperties
            }
          >
            <div className="mission-grid">
              <div
                className="mission-visual"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(203, 29, 72, .58), rgba(220, 61, 49, .68)), url('/assets/images/sop_events.jpg')",
                }}
              >
                <div className="mission-logo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mission-logo logo-color"
                    src="/assets/images/logo_sop_degrade.png"
                    alt="SOP Events"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mission-logo logo-white"
                    src="/assets/images/logo_sop_blanc.png"
                    alt="SOP Events"
                  />
                  <p className="mission-logo-caption">Vivez l&apos;expérience</p>
                </div>
              </div>

              <div className="mission-body">
                <p className="mission-kicker">Événementiel d&apos;entreprise</p>
                <h3 className="mission-title">
                  Créer des moments forts, fédérateurs et impactants
                </h3>
                <p className="mission-text">
                  SOP Events conçoit, imagine et donne vie aux projets
                  d&apos;entreprise : séminaires, team buildings, soirées,
                  incentives, animations et événements sur mesure. L&apos;agence
                  transforme vos idées en expériences humaines, chargées
                  d&apos;émotions et alignées avec votre culture d&apos;entreprise.
                </p>

                <div className="feature-list">
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">hotel</span>
                    Hébergement
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">emoji_people</span>
                    Team building
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">
                      theater_comedy
                    </span>
                    Animations
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">restaurant</span>
                    Restauration
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">
                      settings_input_component
                    </span>
                    Technique
                  </span>
                </div>

                <ul className="mission-checks">
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Plus de 20 ans d&apos;expertise et un pilotage complet de la
                      conception au jour J.
                    </span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Un chargé de projet dédié, des concepts 100 % sur mesure et
                      une facture globale simplifiée.
                    </span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Des tarifs préférentiels grâce à un réseau de prestataires de
                      confiance.
                    </span>
                  </li>
                </ul>

                <a
                  href="https://sop-events.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mission-cta"
                >
                  Découvrir SOP Events
                  <span className="material-symbols-outlined text-[17px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA BUSINESS TRAVEL */}
      <section id="business-travel" className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <article
            className="mission-section"
            style={
              {
                "--brand": "#1481C2",
                "--brand-solid": "#1481C2",
                "--hover-bg": "#1481C2",
                "--accent": "#1481C2",
                "--glow": "rgba(20, 129, 194, .42)",
              } as React.CSSProperties
            }
          >
            <div className="mission-grid reverse">
              <div className="mission-body">
                <p className="mission-kicker">Voyages d&apos;affaires</p>
                <h3 className="mission-title">
                  Optimiser, sécuriser et simplifier vos déplacements
                  professionnels
                </h3>
                <p className="mission-text">
                  CTA Business Travel accompagne les entreprises dans la gestion de
                  leurs déplacements professionnels. Plateforme de réservation
                  corporate, assistance 24h/24 et 7j/7, tarifs négociés, politique
                  voyages personnalisée : tout est pensé pour garantir fluidité,
                  confort et maîtrise des dépenses.
                </p>

                <div className="feature-list">
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">
                      flight_takeoff
                    </span>
                    Avion
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">train</span>Train
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">hotel</span>Hôtel
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">
                      directions_car
                    </span>
                    Voiture
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">support_agent</span>
                    Assistance 24/7
                  </span>
                </div>

                <ul className="mission-checks">
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      CTA Business Connect : une plateforme intuitive pour réserver
                      vols, trains, hôtels et véhicules.
                    </span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Des conditions tarifaires exclusives via le réseau de
                      partenaires et TourCom.
                    </span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Des reportings pour aligner les mobilités professionnelles
                      avec vos engagements RSE.
                    </span>
                  </li>
                </ul>

                <a
                  href="https://ctabusinesstravel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mission-cta"
                >
                  Découvrir CTA Business Travel
                  <span className="material-symbols-outlined text-[17px]">
                    open_in_new
                  </span>
                </a>
              </div>

              <div
                className="mission-visual"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(20, 129, 194, .56), rgba(20, 129, 194, .72)), url('/assets/images/cta_bt.jpg')",
                }}
              >
                <div className="mission-logo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mission-logo logo-color"
                    src="/assets/images/logo_cta_bt.png"
                    alt="CTA Business Travel"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mission-logo logo-white"
                    src="/assets/images/logo_cta_bt_blanc.png"
                    alt="CTA Business Travel"
                  />
                  <p className="mission-logo-caption">
                    Au-delà du voyage d&apos;affaires
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA MEETING & EVENTS */}
      <section id="meeting-events" className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <article
            className="mission-section"
            style={
              {
                "--brand": "#477ff7",
                "--brand-solid": "#477ff7",
                "--hover-bg": "#477ff7",
                "--accent": "#477ff7",
                "--glow": "rgba(71, 127, 247, .42)",
              } as React.CSSProperties
            }
          >
            <div className="mission-grid">
              <div
                className="mission-visual"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(71, 127, 247, .54), rgba(71, 127, 247, .72)), url('/assets/images/cta_me.png')",
                }}
              >
                <div className="mission-logo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mission-logo logo-color"
                    src="/assets/images/logo_cta_me.png"
                    alt="CTA Meeting & Events"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mission-logo logo-white"
                    src="/assets/images/logo_cta_me_blanc.png"
                    alt="CTA Meeting & Events"
                  />
                  <p className="mission-logo-caption">
                    Événements professionnels en France et à l&apos;étranger
                  </p>
                </div>
              </div>

              <div className="mission-body">
                <p className="mission-kicker">MICE &amp; pilotage événementiel</p>
                <h3 className="mission-title">
                  Concevoir et piloter vos événements business de bout en bout
                </h3>
                <p className="mission-text">
                  CTA Meeting &amp; Events organise des événements professionnels
                  sur mesure, en France comme à l&apos;international. L&apos;équipe
                  accompagne les projets internes ou ouverts à des participants
                  externes, en donnant vie à vos objectifs, en renforçant votre
                  image de marque et en adaptant chaque dispositif à vos besoins et
                  à votre budget.
                </p>

                <div className="feature-list">
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">
                      app_registration
                    </span>
                    Inscriptions
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">language</span>Site
                    événementiel
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">smartphone</span>
                    Application mobile
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">location_city</span>
                    Hôtels &amp; lieux
                  </span>
                  <span className="feature-pill">
                    <span className="material-symbols-outlined">
                      airport_shuttle
                    </span>
                    Transport
                  </span>
                </div>

                <ul className="mission-checks">
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Gestion des invitations, formulaires d&apos;inscription,
                      badges, QR codes, reporting et enquêtes de satisfaction.
                    </span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Création de sites et applications dédiés pour présenter
                      l&apos;événement et encourager le networking.
                    </span>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>
                      Recherche et coordination des hôtels, lieux, transports,
                      paiements fournisseurs et assistance sur site.
                    </span>
                  </li>
                </ul>

                <a
                  href="https://ctameetingevents.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mission-cta"
                >
                  Découvrir CTA Meeting &amp; Events
                  <span className="material-symbols-outlined text-[17px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SYNERGIES */}
      <section className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-kicker">Notre force</p>
            <h2 className="section-title">
              Des synergies pour simplifier vos projets
            </h2>
            <p className="section-lead">
              Une même culture de service, des expertises complémentaires et des
              interlocuteurs capables de coordonner voyages, événements et
              logistique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="process-card">
              <div className="process-icon bg-[#3179C4]">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <h3 className="font-h3 text-[20px] font-bold mb-3">
                Un écosystème intégré
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                Vos projets peuvent combiner déplacements, hébergements, réunions,
                activités, événementiel et voyages individuels grâce aux expertises
                du groupe.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon bg-[#FBBF12] text-[#1A1A1A]">
                <span className="material-symbols-outlined">person_pin_circle</span>
              </div>
              <h3 className="font-h3 text-[20px] font-bold mb-3">
                Un accompagnement humain
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                Chaque mission est pilotée par des équipes expertes qui prennent le
                temps de comprendre vos contraintes, votre culture et vos objectifs.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon bg-[#43A047]">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="font-h3 text-[20px] font-bold mb-3">
                Une démarche responsable
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                Le groupe inscrit ses activités dans une logique de performance
                durable, avec un pilotage des risques sociaux, éthiques et
                environnementaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSE */}
      <section id="rse" className="rse-section w-full py-12 sm:py-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rse-bg-img"
          src="/assets/images/iStock-1372488167.jpg"
          alt="Paysage naturel illustrant l'engagement RSE du Groupe CTA"
        />
        <div className="rse-overlay"></div>

        <div className="rse-content max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Logo EcoVadis — Certification RSE du Groupe CTA"
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
            <Link
              href="/engagements-rse"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-label text-label text-[13px] sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all group"
            >
              Découvrir nos engagements RSE
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] group-hover:translate-x-1 transition-transform">
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
              Questions fréquentes
            </span>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Quelle expertise du Groupe CTA pour votre projet ?
            </h2>
          </div>

          <FaqGroupe />
        </div>
      </section>

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
    </main>
  );
}
