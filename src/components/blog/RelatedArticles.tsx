import Link from "next/link";
import type { BlogMeta } from "@/lib/blog-content/meta.generated";

/**
 * Suggestions d'articles : sert en fin de lecture (« à lire ensuite ») comme sur
 * une fiche destination (« nos articles sur ce pays »).
 *
 * Sans ce bloc, un article n'avait aucun lien sortant vers un autre contenu du
 * site : chaque lecture s'arrêtait là, et l'autorité de la page ne circulait pas.
 */
export default function RelatedArticles({
  articles,
  title,
  intro,
  className = "",
}: {
  articles: BlogMeta[];
  title: string;
  intro?: string;
  className?: string;
}) {
  if (articles.length === 0) return null;

  return (
    <section className={className}>
      <h2 className="font-h2 text-[22px] sm:text-[28px] text-on-surface mb-2">
        {title}
      </h2>
      {intro && (
        <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant mb-6 leading-relaxed">
          {intro}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-outline-variant/40 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(49,121,196,0.16)] transition-all duration-300"
          >
            <div className="h-40 overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={a.heroAlt}
                src={a.heroImg}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[11px]">
                {a.category}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-h3 text-[16px] sm:text-[17px] font-bold text-on-surface mb-2 leading-snug">
                {a.title}
              </h3>
              <p className="font-body-md text-[13px] text-on-surface-variant mb-4 flex-grow line-clamp-3">
                {a.excerpt}
              </p>
              <span className="mt-auto text-primary font-label text-[13px] font-bold flex items-center gap-1">
                Lire l&apos;article
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
