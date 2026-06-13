import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'équipe CTA Voyages",
  description:
    "Rencontrez l'équipe de conseillers CTA Voyages, votre agence de voyages sur mesure à Toulouse.",
};

export default function EquipePage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter text-center">
          <p className="text-primary font-label text-label mb-3 tracking-wider">
            NOTRE ÉQUIPE
          </p>
          <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-on-surface mb-6">
            L&apos;équipe CTA Voyages
          </h1>
          <p className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Des conseillers passionnés et expérimentés, à votre écoute pour concevoir le voyage qui vous ressemble.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/Photo de l'équipe CTA Voyages.png"
            alt="Photo de l'équipe CTA Voyages"
            className="w-full max-w-4xl mx-auto rounded-2xl luxury-shadow"
          />
          <div className="mt-12">
            <Link
              href="/demande-renseignement"
              className="inline-flex items-center gap-2 bg-[#3179C4] text-white px-6 py-3 rounded-lg font-label text-label hover:bg-[#004191] transition-all"
            >
              Contactez-nous
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
