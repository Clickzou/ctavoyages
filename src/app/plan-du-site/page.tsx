import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan du site",
  description:
    "Plan du site CTA Voyages : retrouvez l'ensemble de nos pages — offres, destinations, blog, événements sportifs et informations pratiques.",
};

type SiteLink = { label: string; href: string; external?: boolean };
type SiteSection = { title: string; links: SiteLink[] };

const SECTIONS: SiteSection[] = [
  {
    title: "Général",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Destinations", href: "/destinations" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Nos offres",
    links: [
      { label: "Séjours", href: "/sejours" },
      { label: "Circuits", href: "/circuits" },
      { label: "Croisières", href: "/croisieres" },
      { label: "Glamping", href: "/glamping" },
      { label: "Voyages sur mesure", href: "/voyage-sur-mesure" },
      { label: "Catalogue sportif", href: "/catalogue-sportif" },
    ],
  },
  {
    title: "Séjours par thématique",
    links: [
      { label: "Séjour balnéaire", href: "/sejours/balneaire" },
      { label: "Séjour culturel", href: "/sejours/culturel" },
      { label: "Escapade urbaine", href: "/sejours/escapade-urbaine" },
      { label: "Séjour en famille", href: "/sejours/famille" },
      { label: "Séjour nature", href: "/sejours/nature" },
      { label: "Séjour romantique", href: "/sejours/romantique" },
    ],
  },
  {
    title: "Événements sportifs",
    links: [
      { label: "Formule 1", href: "/f1" },
      { label: "MotoGP", href: "/motogp" },
      { label: "Rugby", href: "/rugby" },
      { label: "Football européen", href: "/foot-europeen" },
      { label: "NBA", href: "/nba" },
      { label: "NFL", href: "/nfl" },
      { label: "Boxing Day", href: "/boxing-day" },
    ],
  },
  {
    title: "À propos",
    links: [
      { label: "L'équipe CTA Voyages", href: "/equipe" },
      { label: "Notre engagement RSE", href: "/engagements-rse" },
      { label: "Le Groupe CTA", href: "/groupe-cta" },
    ],
  },
  {
    title: "Contact & devis",
    links: [
      { label: "Demander un devis gratuit", href: "/demande-devis" },
      { label: "Demande de renseignement", href: "/demande-renseignement" },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Politique de cookies", href: "/cookies" },
    ],
  },
];

export default function Page() {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-gutter">
          <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
            Navigation
          </p>
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-h2 text-on-surface mb-6">
            Plan du site
          </h1>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mb-12 max-w-2xl">
            Retrouvez l&apos;ensemble des pages du site CTA Voyages, regroupées
            par rubrique.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-h3 text-[16px] sm:text-[18px] font-bold text-on-surface mb-4 pb-2 border-b border-outline-variant/40">
                  {section.title}
                </h2>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant hover:text-[#3179C4] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[16px] text-[#3179C4]">
                          chevron_right
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
