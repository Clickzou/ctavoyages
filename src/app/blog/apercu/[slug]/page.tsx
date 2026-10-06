import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import VueArticle from "@/components/blog/VueArticle";
import { getArticle } from "@/lib/blog-content";
import { apercuValide } from "@/lib/blog-content/apercu";
import { estPublie, metaArticle } from "@/lib/blog-content/publication";

/**
 * `/blog/apercu/<slug>?sig=…` — aperçu d'un article programmé, pour la
 * relecture par le client depuis son tableau de bord Clickzou (onglet
 * « Articles programmés »). Voir `src/lib/blog-content/apercu.ts`.
 *
 * Jamais indexable, par quatre verrous qui se complètent :
 *   - lien signé : sans signature valide → 404, rien ne fuit, pas même le titre ;
 *   - balise robots noindex/nofollow ;
 *   - `referrer: no-referrer` : la signature ne part pas dans l'en-tête Referer
 *     des liens sortants ;
 *   - absent du sitemap, sans données structurées ni canonical.
 *
 * Seule page publique qui lit un article sans passer par `estPublie` : c'est
 * son rôle de montrer ce qui n'est pas encore publié.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Aperçu d'article",
  alternates: { canonical: null },
  referrer: "no-referrer",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default async function ApercuArticle({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sig?: string | string[] }>;
}) {
  const { slug } = await params;
  const { sig } = await searchParams;
  const article = getArticle(slug);
  const meta = metaArticle(slug);
  if (!article || !meta || !apercuValide(slug, typeof sig === "string" ? sig : undefined)) {
    notFound();
  }

  // Déjà en ligne : l'aperçu n'a plus lieu d'être, on renvoie vers la vraie page.
  if (estPublie(slug)) redirect(`/blog/${slug}`);

  return <VueArticle article={article} apercu={meta.datePublication} />;
}
