import "./styles.css";
import type { Metadata } from "next";
import RseStats from "@/components/engagements-rse/RseStats";
import RseFaq from "@/components/engagements-rse/RseFaq";
import NewsletterForm from "@/components/home/NewsletterForm";

export const metadata: Metadata = {
  title: "Engagements RSE du Groupe CTA | Voyager et organiser mieux",
  description:
    "Découvrez la politique RSE du Groupe CTA : environnement, social, éthique, achats responsables, numérique responsable, bien-être des équipes et engagements solidaires.",
};

export default function EngagementsRsePage() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="hero-rse">
        <div className="hero-rse-inner">
          <div>
            <span className="hero-kicker">Engagements RSE</span>
            <h1 className="hero-title">
              Voyager et organiser mieux, avec sens et responsabilité
            </h1>
            <p className="hero-text">
              Le Groupe CTA fait de la responsabilité sociétale et
              environnementale un pilier de sa démarche. Nos choix en matière de
              mobilité, d&rsquo;événementiel, d&rsquo;achats et de partenariats
              sont pensés pour conjuguer performance économique, respect de
              l&rsquo;humain et préservation de la planète.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#demarche"
                className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center"
              >
                Découvrir notre démarche
              </a>
              <a
                href="/assets/documents/charte-rse-groupe-cta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center"
              >
                Télécharger la charte
              </a>
            </div>
          </div>
          <aside
            className="hero-rse-panel"
            aria-label="Certification et démarche RSE"
          >
            <div className="ecovadis-logo-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/logo-ecovadis.png" alt="Logo EcoVadis" />
            </div>
            <strong>Labellisé Entreprise engagée RSE.</strong>
            <p>
              Depuis 2021, notre démarche s&rsquo;appuie sur plus de 50 critères
              inspirés de la norme ISO 26000 et des Objectifs de Développement
              Durable.
            </p>
          </aside>
        </div>
      </section>

      {/* DEMARCHE */}
      <section id="demarche" className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <p className="section-kicker">Notre politique RSE</p>
            <h2 className="section-title">
              Une démarche structurée autour de valeurs fortes
            </h2>
            <p className="section-lead">
              Notre action s&rsquo;appuie sur des références reconnues :
              conventions de l&rsquo;Organisation Internationale du Travail,
              Pacte Mondial des Nations Unies, principes directeurs de
              l&rsquo;OCDE, réglementations sociales et environnementales, ainsi
              que le RGPD.
            </p>
          </div>
          <RseStats />
        </div>
      </section>

      {/* PILIERS */}
      <section id="piliers" className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-kicker">Nos piliers</p>
            <h2 className="section-title">Trois axes pour agir concrètement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <article className="pillar-card">
              <div className="icon-circle">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3>Agir pour la planète</h3>
              <p>
                Réduire notre empreinte environnementale, privilégier la
                mobilité douce, promouvoir le numérique responsable, concevoir
                des événements plus durables et limiter les déchets.
              </p>
            </article>
            <article className="pillar-card">
              <div className="icon-circle">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h3>Respecter et valoriser l&rsquo;humain</h3>
              <p>
                Garantir la santé, la sécurité, le bien-être, l&rsquo;égalité des
                chances, la non-discrimination, le développement professionnel et
                un dialogue social transparent.
              </p>
            </article>
            <article className="pillar-card">
              <div className="icon-circle">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Agir avec éthique</h3>
              <p>
                Sécuriser les flux financiers, protéger les données personnelles,
                sélectionner des prestataires responsables et entretenir des
                relations de confiance sur le long terme.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section id="preuves" className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-10 sm:mb-14">
            <p className="section-kicker">Nos actions</p>
            <h2 className="section-title">
              Des engagements mesurables et opérationnels
            </h2>
            <p className="section-lead">
              Notre démarche RSE se traduit dans nos pratiques quotidiennes, nos
              choix de prestataires, notre politique RH et notre manière de
              concevoir les voyages et événements.
            </p>
          </div>
          <div className="commitment-list">
            <article className="commitment-card">
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <h3>Circuits courts &amp; saisonnalité</h3>
                <p>
                  Promotion d&rsquo;une alimentation issue de circuits courts et
                  respectueuse de la saisonnalité lors des événements.
                </p>
              </div>
            </article>
            <article className="commitment-card">
              <span className="material-symbols-outlined">recycling</span>
              <div>
                <h3>Réduction des déchets</h3>
                <p>
                  Actions concrètes pour limiter les déchets, former aux
                  éco-gestes et améliorer la gestion des ressources.
                </p>
              </div>
            </article>
            <article className="commitment-card">
              <span className="material-symbols-outlined">dns</span>
              <div>
                <h3>Numérique responsable</h3>
                <p>
                  Hébergement national des données, réduction des impressions et
                  optimisation des processus digitaux.
                </p>
              </div>
            </article>
            <article className="commitment-card">
              <span className="material-symbols-outlined">handshake</span>
              <div>
                <h3>Achats responsables</h3>
                <p>
                  Sélection de prestataires engagés, labellisés ou certifiés RSE,
                  et relations durables avec nos fournisseurs.
                </p>
              </div>
            </article>
            <article className="commitment-card">
              <span className="material-symbols-outlined">balance</span>
              <div>
                <h3>Égalité professionnelle</h3>
                <p>
                  70 % de femmes et 30 % d&rsquo;hommes, équité salariale,
                  stabilité de l&rsquo;emploi et qualité de vie au travail.
                </p>
              </div>
            </article>
            <article className="commitment-card">
              <span className="material-symbols-outlined">school</span>
              <div>
                <h3>Formation continue</h3>
                <p>
                  Formation aux outils digitaux, à l&rsquo;intelligence
                  artificielle, aux compétences relationnelles et à la sécurité
                  au travail.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SOLIDARITE */}
      <section className="section-bg-blue py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="solidarity-band">
            <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_280px] gap-8 items-center">
              <div>
                <p className="font-label text-label text-white/70 mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                  Solidarité &amp; société
                </p>
                <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-white mb-5">
                  Des engagements qui dépassent nos métiers
                </h2>
                <p className="font-body-md text-[15px] sm:text-[16px] leading-relaxed mb-6">
                  Le Groupe CTA affirme son rôle sociétal à travers des
                  initiatives solidaires : signature de la charte des entreprises
                  engagées auprès de la Ligue contre le Cancer, soutien à des
                  initiatives d&rsquo;insertion et mécénat pour La Vie Animale,
                  association œuvrant pour la protection animale.
                </p>
                <a
                  href="/assets/documents/charte-entreprises-engagees-contre-le-cancer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-label text-label text-[13px] sm:text-[14px] px-5 py-3 rounded-lg transition-all"
                >
                  Voir la charte des entreprises engagées contre le cancer{" "}
                  <span className="material-symbols-outlined text-[17px]">
                    open_in_new
                  </span>
                </a>
              </div>
              <div className="solidarity-logo-box justify-self-center lg:justify-self-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/ligue_contre_le_cancer_31.png"
                  alt="Ligue contre le cancer 31"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-section_padding_v">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-primary font-label text-label tracking-widest uppercase mb-2 block text-[12px] sm:text-[14px]">
              Questions fréquentes
            </span>
            <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-on-surface">
              Comprendre notre démarche RSE
            </h2>
          </div>
          <RseFaq />
        </div>
      </section>

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
                itinéraires et nos conseils de voyage directement dans votre
                boîte mail.
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
