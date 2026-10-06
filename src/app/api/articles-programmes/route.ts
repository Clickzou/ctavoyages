import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site";
import { getArticle } from "@/lib/blog-content";
import { BLOG_META } from "@/lib/blog-content/meta.generated";
import { cheminApercu } from "@/lib/blog-content/apercu";
import { aujourdhuiParis } from "@/lib/blog-content/publication";
import { ENTETES_TABLEAU_DE_BORD, controleTableauDeBord } from "@/lib/blog-content/tableau-de-bord";
import { destinationsForArticle } from "@/lib/internal-links";

/**
 * GET /api/articles-programmes — la liste des articles pour le tableau de bord
 * client Clickzou (clickzou.fr/espace-client, onglet « Articles programmés »),
 * au format `ArticleClient` attendu par Clickzou
 * (`src/lib/espace-client/articles.ts` du dépôt clickzou-v2).
 *
 * Pour chaque article : statut (publié / programmé), lien public ou lien
 * d'aperçu signé, et la matière des posts LinkedIn / Google Business (chapô,
 * points clés, mot-clé, page d'offre servie). Sans clé valide : 401 (503 si la
 * clé n'est pas configurée sur le site), et les sujets à venir ne sortent pas.
 *
 * Le site n'a pas de barre finale : l'adresse à déclarer côté Clickzou est
 * `https://cta-voyages.com/api/articles-programmes` (la forme avec barre
 * redirige en 308).
 */
export const dynamic = "force-dynamic";

/** Texte brut d'un contenu JSX (chapô) : les textes mis bout à bout. */
function texteBrut(noeud: unknown): string {
  if (noeud === null || noeud === undefined || typeof noeud === "boolean") return "";
  if (typeof noeud === "string" || typeof noeud === "number") return String(noeud);
  if (Array.isArray(noeud)) return noeud.map(texteBrut).join("");
  if (typeof noeud === "object" && "props" in noeud) {
    return texteBrut((noeud as { props: { children?: unknown } }).props.children);
  }
  return "";
}

const espaces = (t: string) => t.replace(/\s+/g, " ").trim();

/**
 * La page d'offre servie par l'article (`pilier`), chemin relatif comme chez
 * Un Seul Souffle : rubrique d'offre explicite pour les articles d'offre et
 * les thématiques, sinon la première fiche destination traitée, sinon le
 * voyage sur mesure.
 */
const PILIERS: Record<string, { href: string; ancre: string }> = {
  "croisiere-premiere-fois-conseils": { href: "/croisieres", ancre: "croisières" },
  "croisiere-mediterranee-rome-barcelone": { href: "/croisieres/mediterranee", ancre: "croisière en Méditerranée" },
  "croisiere-fjords-norvegiens": { href: "/croisieres/fjords", ancre: "croisière dans les fjords" },
  "croisiere-caraibes-antilles": { href: "/croisieres/caraibes", ancre: "croisière aux Caraïbes" },
  "croisiere-fluviale-europe": { href: "/croisieres/fluviale", ancre: "croisière fluviale" },
  "circuit-canada-rocheuses-quebec": { href: "/circuits", ancre: "circuits" },
  "circuit-costa-rica-volcans-jungle": { href: "/circuits", ancre: "circuits" },
  "circuit-maroc-marrakech-atlas-sahara": { href: "/circuits", ancre: "circuits" },
  "glamping-cabane-canada": { href: "/glamping", ancre: "glamping et hébergements insolites" },
  "glamping-eco-lodge-costa-rica": { href: "/glamping", ancre: "glamping et hébergements insolites" },
  "glamping-ryokan-japon": { href: "/glamping", ancre: "glamping et hébergements insolites" },
  "lune-de-miel-destination": { href: "/voyage-sur-mesure/noces", ancre: "voyage de noces sur mesure" },
  "partir-en-amoureux-week-end": { href: "/sejours/romantique", ancre: "séjour romantique" },
  "voyage-famille-astuces": { href: "/voyage-sur-mesure/famille", ancre: "voyage en famille sur mesure" },
  "voyager-avec-bebe-conseils": { href: "/voyage-sur-mesure/famille", ancre: "voyage en famille sur mesure" },
  "voyage-avec-ados-idees": { href: "/voyage-sur-mesure/famille", ancre: "voyage en famille sur mesure" },
  "voyage-solo-femme-destinations": { href: "/voyage-sur-mesure/solo", ancre: "voyage en solo sur mesure" },
  "destinations-voyage-aventure": { href: "/voyage-sur-mesure/aventure", ancre: "voyage d'aventure sur mesure" },
};

function pilier(slug: string): { href: string; ancre: string } {
  if (PILIERS[slug]) return PILIERS[slug];
  const destination = destinationsForArticle(slug)[0];
  if (destination) return { href: destination.href, ancre: `voyage ${destination.name}` };
  return { href: "/voyage-sur-mesure", ancre: "voyage sur mesure" };
}

export async function GET(requete: Request) {
  const acces = controleTableauDeBord(requete);
  if (acces !== 200) {
    return NextResponse.json({ ok: false }, { status: acces, headers: ENTETES_TABLEAU_DE_BORD });
  }

  // `url` : l'adresse DÉFINITIVE (cta-voyages.com), celle qu'on diffuse ;
  // `urlActuelle`, `apercuUrl`, `image` : le domaine réellement servi (celui de
  // la requête : identique en production, localhost en test).
  const base = new URL(requete.url).origin;
  const jour = aujourdhuiParis();

  const liste = [...BLOG_META]
    .sort((a, b) => a.datePublication.localeCompare(b.datePublication))
    .map((m) => {
      const a = getArticle(m.slug)!;
      const publie = m.datePublication <= jour;
      const chemin = `/blog/${m.slug}`;
      const apercu = publie ? null : cheminApercu(m.slug);
      const chapo = espaces(texteBrut(a.intro));
      return {
        slug: m.slug,
        titre: a.title,
        datePublication: m.datePublication,
        statut: publie ? "publie" : "programme",
        url: `${SITE_URL}${chemin}`,
        urlActuelle: `${base}${chemin}`,
        image: a.heroImg.startsWith("/") ? `${base}${a.heroImg}` : a.heroImg,
        apercuUrl: apercu ? `${base}${apercu}` : null,
        auteur: "CTA Voyages",
        motCle: a.motCle,
        motsClesSecondaires: a.motsClesSecondaires ?? [],
        metaDescription: a.meta.description,
        chapo,
        // L'essentiel : le résumé de l'article, et ses intertitres (H2) comme
        // points clés — rien qui ne soit écrit dans l'article.
        essentiel: { reponse: a.excerpt, points: a.sections.map((s) => s.h2) },
        pilier: pilier(m.slug),
      };
    });

  return NextResponse.json(
    { ok: true, site: "CTA Voyages", articles: liste },
    { headers: ENTETES_TABLEAU_DE_BORD },
  );
}
