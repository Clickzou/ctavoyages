import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VueArticle from "@/components/blog/VueArticle";
import { getArticle } from "@/lib/blog-content";
import { articlesPublies, estPublie } from "@/lib/blog-content/publication";

/**
 * Publication programmée (voir `publication.ts`) : seuls les articles déjà
 * parus sont générés au build ; un article daté dans le futur répond 404
 * jusqu'à sa date, puis est rendu à la demande (`dynamicParams`) et mis en
 * cache, régénéré au plus toutes les heures (`revalidate`).
 */
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return articlesPublies().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = estPublie(slug) ? getArticle(slug) : undefined;
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Un article programmé n'existe pas encore pour le public : 404, rien ne
  // fuit (ni titre, ni métadonnées). Sa relecture passe par l'aperçu signé.
  const article = estPublie(slug) ? getArticle(slug) : undefined;
  if (!article) notFound();

  return <VueArticle article={article} />;
}
