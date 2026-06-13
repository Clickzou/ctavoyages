import Link from "next/link";

/** Gabarit simple pour les pages légales (placeholder, contenu à compléter). */
export default function LegalPage({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20 min-h-[60vh]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-gutter">
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-h2 text-on-surface mb-6">
            {title}
          </h1>
          <p className="font-body-lg text-[16px] sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
            {intro}
          </p>
          <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Le contenu détaillé de cette page sera prochainement mis en ligne. Pour toute question,{" "}
            <Link href="/demande-renseignement" className="text-primary font-medium hover:underline">
              contactez-nous
            </Link>{" "}
            ou écrivez à{" "}
            <a href="mailto:voyages@cta-events.com" className="text-primary font-medium hover:underline">
              voyages@cta-events.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
