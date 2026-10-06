import { NextResponse } from "next/server";
import { getArticle } from "@/lib/blog-content";
import { champsEditables } from "@/lib/blog-content/edition-client";
import { estPublie, metaArticle } from "@/lib/blog-content/publication";
import { ENTETES_TABLEAU_DE_BORD, controleTableauDeBord } from "@/lib/blog-content/tableau-de-bord";

/**
 * GET /api/articles-programmes/contenu?slug=<slug> — les textes modifiables
 * d'un article, pour l'éditeur de l'espace client Clickzou. Même clé et même
 * contrat que chez Un Seul Souffle et Alps. Les textes renvoyés intègrent les
 * corrections déjà enregistrées (`corrections-client.json`).
 */
export const dynamic = "force-dynamic";

export async function GET(requete: Request) {
  const acces = controleTableauDeBord(requete);
  if (acces !== 200) {
    return NextResponse.json({ ok: false }, { status: acces, headers: ENTETES_TABLEAU_DE_BORD });
  }
  const slug = new URL(requete.url).searchParams.get("slug") ?? "";
  const article = getArticle(slug);
  const meta = metaArticle(slug);
  if (!article || !meta) {
    return NextResponse.json(
      { ok: false, erreur: "Article introuvable" },
      { status: 404, headers: ENTETES_TABLEAU_DE_BORD },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      slug,
      titre: article.title,
      datePublication: meta.datePublication,
      statut: estPublie(slug) ? "publie" : "programme",
      // Chemin du fichier de corrections dans le dépôt : Clickzou y écrit.
      fichierCorrections: "src/lib/blog-content/corrections-client.json",
      champs: champsEditables(article),
    },
    { headers: ENTETES_TABLEAU_DE_BORD },
  );
}
