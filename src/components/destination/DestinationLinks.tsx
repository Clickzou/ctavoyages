import Link from "next/link";
import type { LinkableDestination } from "@/lib/internal-links";

/**
 * Fiches destination citées par un article, en pastilles cliquables.
 *
 * C'est le sens blog → destination du maillage : l'article amène le lecteur
 * (et l'autorité de la page) sur la fiche commerciale correspondante.
 */
export default function DestinationLinks({
  destinations,
  title = "Les destinations de cet article",
  className = "",
}: {
  destinations: LinkableDestination[];
  title?: string;
  className?: string;
}) {
  if (destinations.length === 0) return null;

  return (
    <section className={className}>
      <h2 className="font-h2 text-[20px] sm:text-[24px] text-on-surface mb-4">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2.5">
        {destinations.map((d) => (
          <li key={d.slug}>
            <Link
              href={d.href}
              className="group inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-outline-variant/60 bg-white px-4 py-2 font-label text-[14px] text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
            >
              <span
                className="material-symbols-outlined text-[18px] text-primary"
                aria-hidden="true"
              >
                location_on
              </span>
              Voyage {d.name}
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
