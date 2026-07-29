import Link from "next/link";
import { LINKABLE_DESTINATIONS } from "@/lib/internal-links";

/**
 * Index complet des fiches destination, groupé par continent.
 *
 * La grille filtrable au-dessus est un composant client qui n'affiche que huit
 * cartes avant interaction, et la carte du monde construit ses liens en
 * JavaScript après montage : ni l'une ni l'autre n'expose les 71 fiches au
 * chargement. Cet index les rend toutes atteignables en un clic depuis la
 * rubrique, sans dépendre du sitemap ni d'un bouton « voir plus ».
 */

/** Ordre d'affichage des groupes ; les badges inconnus suivent, par ordre alphabétique. */
const CONTINENT_ORDER = [
  "Europe",
  "Asie",
  "Afrique",
  "Océan Indien",
  "Amériques",
  "Océanie",
  "Moyen-Orient",
];

function groupByContinent() {
  const groups = new Map<string, typeof LINKABLE_DESTINATIONS>();
  for (const destination of LINKABLE_DESTINATIONS) {
    const list = groups.get(destination.continent) ?? [];
    list.push(destination);
    groups.set(destination.continent, list);
  }
  return [...groups.entries()].sort(([a], [b]) => {
    const ia = CONTINENT_ORDER.indexOf(a);
    const ib = CONTINENT_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, "fr");
  });
}

export default function AllDestinations() {
  const groups = groupByContinent();

  return (
    <section className="bg-white py-section_padding_v">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary font-label text-label mb-2 tracking-wider uppercase text-[12px] sm:text-[14px]">
            Index
          </p>
          <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-h2 text-on-surface mb-3">
            Toutes nos destinations
          </h2>
          <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Les {LINKABLE_DESTINATIONS.length} destinations que nos conseillers
            organisent, classées par région.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {groups.map(([continent, destinations]) => (
            <div key={continent}>
              <h3 className="font-h3 text-[16px] sm:text-[17px] font-bold text-on-surface mb-3 pb-2 border-b border-outline-variant/50">
                {continent}
                <span className="ml-2 font-normal text-[13px] text-on-surface-variant">
                  ({destinations.length})
                </span>
              </h3>
              <ul className="space-y-1.5">
                {destinations.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={d.href}
                      className="group inline-flex items-center gap-1.5 font-body-md text-[14px] sm:text-[15px] text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span
                        className="material-symbols-outlined text-[16px] text-primary/50 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        chevron_right
                      </span>
                      Voyage {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
