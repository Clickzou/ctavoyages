import type { Metadata } from "next";
import NewsletterForm from "@/components/home/NewsletterForm";
import BlogGrid, { type BlogCard } from "@/components/blog/BlogGrid";
import { BLOG_LIST } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: "Blog voyage — Conseils, inspirations & guides | CTA Voyages",
  description:
    "Le blog de CTA Voyages : conseils d'experts, idées de destinations, guides pratiques et inspirations pour préparer votre prochain voyage sur mesure.",
};

export default function BlogPage() {
  // Données sérialisables passées au composant client (grille + recherche + pagination).
  const articles: BlogCard[] = BLOG_LIST.map((a) => ({
    slug: a.slug,
    category: a.category,
    date: a.date,
    title: a.title,
    excerpt: a.excerpt,
    heroImg: a.heroImg,
    heroAlt: a.heroAlt,
  }));

  return (
    <>
      <main>
        {/* EN-TÊTE */}
        <section className="section-bg-blue pt-[104px] sm:pt-[128px] pb-12 sm:pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
            <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
              Le blog CTA Voyages
            </p>
            <h1 className="font-h1 text-[30px] sm:text-[40px] md:text-h1 text-on-surface mb-4 leading-[1.1]">
              Conseils, inspirations & guides de voyage
            </h1>
            <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Les idées et l&apos;expertise de nos conseillers pour préparer votre
              prochain voyage — destinations, bons plans et carnets de route.
            </p>
          </div>
        </section>

        {/* ARTICLES */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <BlogGrid articles={articles} />
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
                Ne manquez aucun de nos articles
              </h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                Recevez nos derniers conseils de voyage, idées de destinations et
                bons plans directement dans votre boîte mail.
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
