import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import { blogTotalPages } from "@/lib/blog-content/pagination";

/**
 * Pages 2 et suivantes de la grille du blog.
 *
 * La page 1 reste servie par `/blog` : la générer aussi ici créerait deux URL
 * pour la même liste. `/blog/page/1` redirige donc vers `/blog`.
 *
 * Publication programmée : régénérées au plus toutes les heures, et une page
 * qui naît d'un article paru après le build est rendue à la demande
 * (`dynamicParams`, valeur par défaut, explicitée ici).
 */
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return Array.from({ length: blogTotalPages() - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

function parsePage(value: string): number | null {
  // Refuse "01", "2.0", "-3" : une seule forme d'URL par page.
  if (!/^[1-9][0-9]*$/.test(value)) return null;
  return Number(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const n = parsePage(page);
  if (!n || n > blogTotalPages()) return { title: "Page introuvable" };

  return {
    title: `Blog voyage : conseils et inspirations (page ${n})`,
    description:
      "Le blog de CTA Voyages : conseils d'experts, idées de destinations, guides pratiques et inspirations pour préparer votre prochain voyage sur mesure.",
    alternates: { canonical: `/blog/page/${n}` },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = parsePage(page);
  if (!n || n > blogTotalPages()) notFound();
  if (n === 1) redirect("/blog");

  return <BlogListing page={n} />;
}
