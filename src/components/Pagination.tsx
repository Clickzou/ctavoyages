import Link from "next/link";

/**
 * Pagination par URL : chaque page est une adresse réelle (`/blog/page/3`),
 * rendue en `<a>` dès le HTML initial.
 *
 * C'est ce qui rend une longue liste explorable : un bouton « charger plus »
 * n'expose que la première tranche aux moteurs, qui ne cliquent pas.
 */
export function pagePath(basePath: string, page: number): string {
  return page <= 1 ? basePath : `${basePath}/page/${page}`;
}

/**
 * Numéros à afficher. En deçà du seuil, toutes les pages sont listées : chacune
 * reçoit alors un lien depuis toutes les autres, ce qui vaut mieux qu'une
 * fenêtre resserrée où les pages du milieu ne sont atteignables que de proche
 * en proche.
 */
const SHOW_ALL_UP_TO = 12;

function pageNumbers(page: number, total: number): (number | "…")[] {
  if (total <= SHOW_ALL_UP_TO)
    return Array.from({ length: total }, (_, i) => i + 1);

  const items = new Set<number>([1, total, page]);
  if (page - 1 > 1) items.add(page - 1);
  if (page + 1 < total) items.add(page + 1);

  const sorted = [...items].sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

export default function Pagination({
  basePath,
  page,
  totalPages,
  label = "Pagination",
}: {
  basePath: string;
  page: number;
  totalPages: number;
  label?: string;
}) {
  if (totalPages <= 1) return null;

  const box =
    "inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full font-label text-[14px] border transition-colors";
  const inactive =
    "bg-white text-on-surface-variant border-outline-variant/60 hover:border-primary hover:text-primary";
  const active = "bg-primary text-white border-primary pointer-events-none";

  return (
    <nav
      aria-label={label}
      className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {page > 1 && (
        <Link
          href={pagePath(basePath, page - 1)}
          rel="prev"
          aria-label="Page précédente"
          className={`${box} ${inactive}`}
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_left
          </span>
        </Link>
      )}

      {pageNumbers(page, totalPages).map((n, i) =>
        n === "…" ? (
          <span
            key={`gap-${i}`}
            aria-hidden="true"
            className="px-1 text-on-surface-variant/60"
          >
            …
          </span>
        ) : (
          <Link
            key={n}
            href={pagePath(basePath, n)}
            aria-label={`Page ${n}`}
            aria-current={n === page ? "page" : undefined}
            className={`${box} ${n === page ? active : inactive}`}
          >
            {n}
          </Link>
        ),
      )}

      {page < totalPages && (
        <Link
          href={pagePath(basePath, page + 1)}
          rel="next"
          aria-label="Page suivante"
          className={`${box} ${inactive}`}
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_right
          </span>
        </Link>
      )}
    </nav>
  );
}
