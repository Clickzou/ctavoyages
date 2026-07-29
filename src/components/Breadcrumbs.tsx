import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export type Crumb = {
  label: string;
  /** Absent pour le dernier maillon : la page courante ne se lie pas elle-même. */
  href?: string;
};

/**
 * Fil d'Ariane : remontée hiérarchique visible et balisage `BreadcrumbList`.
 *
 * Le balisage donne à Google le chemin de la page dans le site (affiché en
 * place de l'URL dans les résultats de recherche) ; les liens donnent aux
 * pages profondes un lien de retour vers leur rubrique parente.
 *
 * `variant="hero"` pour une pose sur photo (texte clair), `"page"` sur fond clair.
 */
export default function Breadcrumbs({
  items,
  variant = "page",
  className = "",
}: {
  items: Crumb[];
  variant?: "hero" | "page";
  className?: string;
}) {
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  const hero = variant === "hero";
  const textColor = hero ? "text-white/70" : "text-on-surface-variant";
  const linkColor = hero
    ? "hover:text-white transition-colors"
    : "hover:text-primary transition-colors";
  const sepColor = hero ? "text-white/40" : "text-on-surface-variant/40";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Fil d'Ariane"
        className={`font-label text-label tracking-wider uppercase text-[12px] sm:text-[14px] ${textColor} ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-x-2">
              {i > 0 && (
                <span className={sepColor} aria-hidden="true">
                  /
                </span>
              )}
              {item.href ? (
                <Link href={item.href} className={linkColor}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
