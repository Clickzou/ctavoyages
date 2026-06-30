"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type BlogCard = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  heroImg: string;
  heroAlt: string;
};

const PER_PAGE = 12;

/** Normalise (minuscule + sans accents) pour une recherche tolérante. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function BlogGrid({ articles }: { articles: BlogCard[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("Tous");
  const [visible, setVisible] = useState(PER_PAGE);

  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles],
  );

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return articles.filter((a) => {
      const matchCat = cat === "Tous" || a.category === cat;
      const matchQuery =
        !q || norm(`${a.title} ${a.excerpt} ${a.category}`).includes(q);
      return matchCat && matchQuery;
    });
  }, [articles, query, cat]);

  const shown = filtered.slice(0, visible);

  const resetAndSet = (fn: () => void) => {
    fn();
    setVisible(PER_PAGE);
  };

  return (
    <div>
      {/* Contrôles : recherche + filtres catégories */}
      <div className="mb-8 sm:mb-10 flex flex-col gap-5">
        <div className="relative max-w-md mx-auto w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">
            search
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => resetAndSet(() => setQuery(e.target.value))}
            placeholder="Rechercher un article…"
            className="w-full pl-11 pr-10 py-2.5 rounded-full border-[1.5px] border-outline-variant/60 bg-white text-[15px] text-on-surface focus:border-primary focus:outline-none transition-colors"
          />
          {query && (
            <button
              onClick={() => resetAndSet(() => setQuery(""))}
              aria-label="Effacer"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => resetAndSet(() => setCat(c))}
              className={`px-4 py-1.5 rounded-full text-[13px] font-label transition-colors border ${
                cat === c
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-on-surface-variant border-outline-variant/60 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Compteur */}
      <p className="text-center text-[13px] text-on-surface-variant mb-6">
        {filtered.length} article{filtered.length > 1 ? "s" : ""}
        {cat !== "Tous" ? ` · ${cat}` : ""}
      </p>

      {/* Grille */}
      {shown.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {shown.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-outline-variant/40 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(49,121,196,0.16)] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={a.heroAlt}
                  src={a.heroImg}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label font-label text-primary text-[12px]">
                  {a.category}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <p className="text-[12px] text-on-surface-variant mb-2">{a.date}</p>
                <h2 className="font-h3 text-[18px] sm:text-[20px] font-bold text-on-surface mb-2 leading-snug">
                  {a.title}
                </h2>
                <p className="font-body-md text-[13px] sm:text-[14px] text-on-surface-variant mb-4 flex-grow">
                  {a.excerpt}
                </p>
                <span className="mt-auto text-primary font-label text-[13px] font-bold flex items-center gap-1">
                  Lire l&apos;article{" "}
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-on-surface-variant py-12">
          Aucun article ne correspond à votre recherche.
        </p>
      )}

      {/* Charger plus */}
      {visible < filtered.length && (
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => setVisible((v) => v + PER_PAGE)}
            className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-primary bg-white px-8 py-3 font-label text-[14px] font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5"
          >
            Charger plus d&apos;articles
            <span className="text-[13px] text-on-surface-variant group-hover:text-white/80">
              ({filtered.length - visible})
            </span>
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-y-0.5">
              expand_more
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
