import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { THEME_GROUPS } from "@/lib/theme-links";
import { LINKABLE_DESTINATIONS } from "@/lib/internal-links";
import { BLOG_META } from "@/lib/blog-content/meta.generated";
import { BLOG_TOTAL_PAGES } from "@/lib/blog-content/pagination";
import { pagePath } from "@/components/Pagination";

export const metadata: Metadata = {
  alternates: { canonical: "/plan-du-site" },
  title: "Plan du site",
  description:
    "Plan du site CTA Voyages : retrouvez l'ensemble de nos pages : offres, destinations, blog, événements sportifs et informations pratiques.",
};

type SiteLink = { label: string; href: string };
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
      { label: "Newsletter", href: "/newsletter" },
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

/** Pages de la grille du blog, en plus des articles eux-mêmes. */
const BLOG_PAGES: SiteLink[] = Array.from(
  { length: BLOG_TOTAL_PAGES },
  (_, i) => ({
    label: i === 0 ? "Blog (page 1)" : `Blog (page ${i + 1})`,
    href: pagePath("/blog", i + 1),
  }),
);

function LinkList({ links }: { links: SiteLink[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant hover:text-[#3179C4] transition-colors inline-flex items-start gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px] text-[#3179C4] flex-shrink-0 mt-0.5">
              chevron_right
            </span>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Block({
  title,
  count,
  children,
}: {
  title: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-h3 text-[16px] sm:text-[18px] font-bold text-on-surface mb-4 pb-2 border-b border-outline-variant/40">
        {title}
        {count !== undefined && (
          <span className="ml-2 font-normal text-[13px] text-on-surface-variant">
            ({count})
          </span>
        )}
      </h2>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-gutter">
          <Breadcrumbs
            className="mb-4"
            items={[
              { label: "Accueil", href: "/" },
              { label: "Plan du site" },
            ]}
          />
          <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
            Navigation
          </p>
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-h2 text-on-surface mb-6">
            Plan du site
          </h1>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mb-12 max-w-2xl">
            Retrouvez l&apos;ensemble des pages du site CTA Voyages, regroupées
            par rubrique : {LINKABLE_DESTINATIONS.length} fiches destination,{" "}
            {BLOG_META.length} articles de blog et toutes nos thématiques de
            voyage.
          </p>

          {/* Rubriques principales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {SECTIONS.map((section) => (
              <Block key={section.title} title={section.title}>
                <LinkList links={section.links} />
              </Block>
            ))}
          </div>

          {/* Thématiques de chaque offre */}
          <h2 className="font-h2 text-[22px] sm:text-[26px] text-on-surface mt-16 mb-8 pb-3 border-b-2 border-outline-variant/40">
            Nos thématiques de voyage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {THEME_GROUPS.map((group) => (
              <Block
                key={group.href}
                title={group.title}
                count={group.themes.length}
              >
                <LinkList links={group.themes} />
              </Block>
            ))}
          </div>

          {/* Toutes les fiches destination */}
          <h2 className="font-h2 text-[22px] sm:text-[26px] text-on-surface mt-16 mb-8 pb-3 border-b-2 border-outline-variant/40">
            Nos destinations
            <span className="ml-2 font-normal text-[15px] text-on-surface-variant">
              ({LINKABLE_DESTINATIONS.length})
            </span>
          </h2>
          <ul className="columns-1 sm:columns-2 lg:columns-3 gap-8 sm:gap-10 [&>li]:break-inside-avoid">
            {LINKABLE_DESTINATIONS.map((d) => (
              <li key={d.slug} className="mb-3">
                <Link
                  href={d.href}
                  className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant hover:text-[#3179C4] transition-colors inline-flex items-start gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#3179C4] flex-shrink-0 mt-0.5">
                    chevron_right
                  </span>
                  Voyage {d.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tous les articles du blog */}
          <h2 className="font-h2 text-[22px] sm:text-[26px] text-on-surface mt-16 mb-8 pb-3 border-b-2 border-outline-variant/40">
            Nos articles de blog
            <span className="ml-2 font-normal text-[15px] text-on-surface-variant">
              ({BLOG_META.length})
            </span>
          </h2>
          <div className="mb-8">
            <Block title="Pages de la grille" count={BLOG_TOTAL_PAGES}>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {BLOG_PAGES.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="font-body-md text-[14px] text-on-surface-variant hover:text-[#3179C4] transition-colors"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </Block>
          </div>
          <ul className="columns-1 sm:columns-2 gap-8 sm:gap-10 [&>li]:break-inside-avoid">
            {BLOG_META.map((a) => (
              <li key={a.slug} className="mb-3">
                <Link
                  href={`/blog/${a.slug}`}
                  className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant hover:text-[#3179C4] transition-colors inline-flex items-start gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#3179C4] flex-shrink-0 mt-0.5">
                    chevron_right
                  </span>
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
