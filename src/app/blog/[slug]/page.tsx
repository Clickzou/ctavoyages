import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterForm from "@/components/home/NewsletterForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { getArticle, BLOG_SLUGS } from "@/lib/blog-content";
import { SECTION_IMAGES } from "@/lib/blog-content/section-images.generated";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article introuvable | CTA Voyages" };
  return { title: article.meta.title, description: article.meta.description };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Images de section : superposition Unsplash (par index) sauf si l'article
  // définit déjà son image en dur (ex. Maldives). La section 0 garde son visuel.
  const overlay = SECTION_IMAGES[slug] || {};
  const imgFor = (i: number) => article.sections[i].img ?? overlay[i]?.src;
  const altFor = (i: number) =>
    article.sections[i].imgAlt ?? overlay[i]?.alt ?? article.sections[i].h2;

  // Le chapô (intro) est intégré à la 1re section si elle porte une image.
  const introInFirst =
    article.sections.length > 0 && Boolean(imgFor(0));

  // Crédits photos (attribution Unsplash) regroupés en bas d'article, dédupliqués.
  const credits = (() => {
    const seen = new Set<string>();
    const list: { name: string; link: string }[] = [];
    article.sections.forEach((s, i) => {
      const c = s.imgCredit ?? overlay[i]?.credit;
      if (c && !seen.has(c.link)) {
        seen.add(c.link);
        list.push(c);
      }
    });
    return list;
  })();

  // Fond de la bande finale (conclusion + FAQ) : inverse de la dernière section.
  const trailingGray = article.sections.length % 2 === 1;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta.description,
    image: article.heroImg,
    datePublished: article.date,
    author: { "@type": "Organization", name: "CTA Voyages" },
    publisher: { "@type": "Organization", name: "CTA Voyages" },
  };

  // Balisage FAQPage (rich results Google) si l'article comporte une FAQ.
  const faqJsonLd =
    article.faq && article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main>
        {/* HERO */}
        <section className="relative h-[68vh] min-h-[420px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={article.heroAlt}
            className="w-full h-full object-cover"
            src={article.heroImg}
          />
          <div className="absolute inset-0 hero-overlay"></div>
          <HeroScrollIndicator />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16">
            <div className="hero-anim max-w-[860px] mx-auto px-4 sm:px-gutter w-full">
              <p className="font-label text-label text-white/70 mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>{" "}
                <span className="text-white/40">/</span> {article.category}
              </p>
              <h1 className="font-h1 text-[28px] sm:text-[40px] md:text-h1 text-white mb-4 leading-[1.12] max-w-3xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/80 text-[13px] sm:text-[14px]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_month
                  </span>
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    schedule
                  </span>
                  {article.readingTime} de lecture
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CORPS DE L'ARTICLE */}
        <article>
          {/* Chapô (uniquement si la 1re section ne porte pas d'image) */}
          {!introInFirst && (
            <div className="bg-white pt-10 sm:pt-14">
              <div className="max-w-[760px] mx-auto px-4 sm:px-gutter">
                <p className="font-body-lg text-[17px] sm:text-[19px] text-on-surface leading-relaxed">
                  {article.intro}
                </p>
              </div>
            </div>
          )}

          {/* Sections : bandes pleine largeur alternées (blanc/gris, photo gauche/droite) */}
          {article.sections.map((section, i) => {
            const gray = i % 2 === 1;
            const photoRight = i % 2 === 1;
            const bg = gray ? "bg-[#F4F6F9]" : "bg-white";
            const imgSrc = imgFor(i);

            if (!imgSrc) {
              // Section sans image : texte centré lisible sur la bande colorée.
              return (
                <section key={i} className={`${bg} w-full py-12 sm:py-16`}>
                  <div className="max-w-[760px] mx-auto px-4 sm:px-gutter">
                    <h2 className="font-h2 text-[22px] sm:text-[28px] text-on-surface mb-4 sm:mb-5">
                      {section.h2}
                    </h2>
                    <div className="article-body font-body-md text-[15px] sm:text-[17px] text-on-surface-variant leading-relaxed space-y-4">
                      {section.body}
                    </div>
                  </div>
                </section>
              );
            }

            return (
              <section
                key={i}
                className={`${bg} w-full px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  <figure className={`m-0 ${photoRight ? "lg:order-2" : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={altFor(i)}
                      src={imgSrc}
                      className="w-full aspect-[4/3] object-cover rounded-2xl luxury-shadow"
                    />
                  </figure>
                  <div className={photoRight ? "lg:order-1" : ""}>
                    {i === 0 && introInFirst && (
                      <p className="font-body-lg text-[16px] sm:text-[18px] text-on-surface leading-relaxed mb-6">
                        {article.intro}
                      </p>
                    )}
                    <h2 className="font-h2 text-[24px] sm:text-[30px] text-on-surface mb-4 sm:mb-5">
                      {section.h2}
                    </h2>
                    <div className="article-body font-body-md text-[15px] sm:text-[17px] text-on-surface-variant leading-relaxed space-y-4">
                      {section.body}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Bande finale (conclusion + FAQ + CTA) : fond inverse de la dernière section */}
          <section
            className={`${trailingGray ? "bg-[#F4F6F9]" : "bg-white"} w-full py-12 sm:py-16`}
          >
            <div className="max-w-[760px] mx-auto px-4 sm:px-gutter">
              <div className="border-l-4 border-[#FBBF12] bg-white shadow-sm rounded-r-xl pl-5 pr-4 py-4 sm:py-5 mb-12">
                <p className="font-body-md text-[15px] sm:text-[17px] text-on-surface leading-relaxed">
                  {article.conclusion}
                </p>
              </div>

              {/* FAQ (SEO) */}
              {article.faq && article.faq.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-h2 text-[22px] sm:text-[28px] text-on-surface mb-5 sm:mb-6">
                    Questions fréquentes
                  </h2>
                  <div className="space-y-3">
                    {article.faq.map((item, i) => (
                      <details
                        key={i}
                        className="group rounded-xl border border-outline-variant/40 bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 font-h3 text-[16px] sm:text-[18px] font-bold text-on-surface">
                          {item.q}
                          <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                            expand_more
                          </span>
                        </summary>
                        <p className="mt-3 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-7 sm:p-10 text-center">
                <h2 className="font-h2 text-[22px] sm:text-[28px] text-white mb-3">
                  Envie de partir ?
                </h2>
                <p className="font-body-md text-[15px] sm:text-[16px] text-white/85 mb-6 max-w-xl mx-auto">
                  Votre conseiller dédié construit avec vous le voyage qui vous
                  ressemble, gratuitement et sans engagement.
                </p>
                <Link href="/demande-devis" className="hero-cta-primary group">
                  Demander mon devis gratuit
                  <span className="material-symbols-outlined hero-cta-arrow">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Crédits photos (attribution Unsplash) */}
              {credits.length > 0 && (
                <p className="mt-8 text-[12px] text-on-surface-variant/70 leading-relaxed">
                  Crédits photos&nbsp;:{" "}
                  {credits.map((c, idx) => (
                    <span key={idx}>
                      {idx > 0 && ", "}
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {c.name}
                      </a>
                    </span>
                  ))}{" "}
                  — via{" "}
                  <a
                    href="https://unsplash.com/?utm_source=cta_voyages&utm_medium=referral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Unsplash
                  </a>
                  .
                </p>
              )}

              <div className="mt-10 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary font-label text-[14px] hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_back
                  </span>
                  Retour au blog
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* NEWSLETTER */}
      <section
        className="w-full py-12 sm:py-16"
        style={{ backgroundColor: "#004191" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-3">
                Ne manquez aucun de nos articles
              </h2>
              <p className="font-body-md text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                Recevez nos conseils de voyage, idées de destinations et bons plans
                directement dans votre boîte mail.
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
