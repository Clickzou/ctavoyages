import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog voyage : Conseils, inspirations & guides",
  description:
    "Le blog de CTA Voyages : conseils d'experts, idées de destinations, guides pratiques et inspirations pour préparer votre prochain voyage sur mesure.",
};

export default function BlogPage() {
  return <BlogListing page={1} />;
}
