import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignup from "./NewsletterSignup";

export const metadata: Metadata = {
  alternates: { canonical: "/newsletter" },
  title: "Newsletter CTA Voyages",
  description:
    "Inscrivez-vous à la newsletter CTA Voyages : idées de circuits, nouveaux itinéraires, offres sur les grands événements sportifs et conseils de voyage.",
};

/** Ce que l'abonne recoit : promesse editoriale affichee sous le formulaire. */
const BENEFITS = [
  {
    icon: "explore",
    title: "Nos nouvelles destinations",
    description:
      "Les itinéraires que nous venons d'ouvrir et les destinations à réserver avant tout le monde.",
  },
  {
    icon: "sports_soccer",
    title: "Les grands événements sportifs",
    description:
      "F1, MotoGP, rugby, NBA, NFL, football européen : les offres et les dates d'ouverture des ventes.",
  },
  {
    icon: "local_offer",
    title: "Offres et bons plans",
    description:
      "Séjours, croisières et circuits à tarif privilégié, communiqués en avant-première à nos abonnés.",
  },
  {
    icon: "lightbulb",
    title: "Conseils de voyage",
    description:
      "Les recommandations de nos conseillers pour préparer votre voyage sereinement.",
  },
];

export default function NewsletterPage() {
  return (
    <main className="pt-[72px]">
      {/* HERO + FORMULAIRE */}
      <section className="bg-gradient-to-br from-[#004191] to-[#3179C4] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="material-symbols-outlined text-[20px] text-[#FBBF12]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
              <p className="font-label text-[12px] sm:text-[14px] text-white/70 tracking-wider uppercase">
                Newsletter
              </p>
            </div>

            <Breadcrumbs
              variant="hero"
              className="mb-4"
              items={[{ label: "Accueil", href: "/" }, { label: "Newsletter" }]}
            />

            <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-[44px] font-bold text-white mb-4 leading-tight">
              Ne manquez rien de notre actualité voyage
            </h1>
            <p className="font-body-md text-[15px] sm:text-[17px] text-white/80 leading-relaxed mb-8 max-w-xl">
              Recevez en avant-première nos idées de circuits, nos nouveaux
              itinéraires, nos offres sur les grands événements sportifs et les
              conseils de nos conseillers voyage.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {["Gratuit", "1 e-mail par mois", "Désinscription en un clic"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-white/70 font-body-md text-[13px] sm:text-[14px]"
                  >
                    <span
                      className="material-symbols-outlined text-[16px] text-[#FBBF12]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="w-full">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CE QUE VOUS RECEVEZ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-h2 text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-3">
              Ce que vous recevez
            </h2>
            <p className="font-body-md text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
              Un rendez-vous mensuel, court et inspirant, préparé par l&rsquo;équipe
              CTA Voyages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {BENEFITS.map((benefit) => (
              <article
                key={benefit.title}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <span
                  className="material-symbols-outlined text-[28px] text-[#3179C4] mb-3 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {benefit.icon}
                </span>
                <h3 className="font-h2 text-[17px] sm:text-[19px] font-bold text-[#1A1A1A] mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body-md text-[14px] text-[#4A4A4A] leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DEVIS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-h2 text-[20px] sm:text-[24px] font-bold text-[#1A1A1A] mb-3">
            Un projet de voyage déjà en tête ?
          </h2>
          <p className="font-body-md text-[14px] sm:text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
            Nos conseillers construisent votre itinéraire sur mesure et vous
            répondent sous 48h.
          </p>
          <a
            href="/demande-devis"
            className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-7 sm:px-8 bg-[#FBBF12] text-[#1A1A1A] font-label text-[14px] font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg"
          >
            Demander un devis
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
