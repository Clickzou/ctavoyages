import "./styles.css";
import type { Metadata } from "next";
import RenseignementForm from "@/components/demande-renseignement/RenseignementForm";

export const metadata: Metadata = {
  title: "Demande de devis - CTA Voyages",
  description:
    "Demandez un devis gratuit pour votre prochain voyage avec CTA Voyages. Séjours, circuits, croisières, glamping ou voyages sur mesure — nos attachées clientèle vous recontactent sous 48h.",
};

export default function DemandeRenseignementPage() {
  return (
    <main className="pt-[72px]">
      {/* SECTION FORMULAIRE */}
      <section className="section-bg-blue py-section_padding_v px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 flex flex-col items-center">
            <h1 className="font-h1 text-[26px] sm:text-[32px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">
              Construisons votre voyage ensemble
            </h1>
            <p className="font-body-md text-[14px] sm:text-[16px] text-on-surface-variant max-w-[650px]">
              Dites-nous où vous rêvez d&apos;aller. Nos attachées clientèle prennent
              contact avec vous sous 48h pour affiner votre demande et vous proposer
              une offre personnalisée, gratuitement et sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 sm:gap-10 items-stretch">
            {/* FORMULAIRE */}
            <RenseignementForm />

            {/* PANNEAU VISUEL */}
            <div className="lg:col-span-4 relative rounded-[16px] overflow-hidden min-h-[350px] sm:min-h-[400px] lg:min-h-full flex flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 25%" }}
                alt="L'équipe CTA Voyages"
                src="/assets/images/Photo de l'équipe CTA Voyages.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 sm:p-8 w-full">
                <div className="bg-white px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
                  <span
                    className="material-symbols-outlined text-[#FBBF12] text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label text-[10px] sm:text-[11px] font-bold text-[#1A1A1A] tracking-wider uppercase">
                    Vos attachées clientèle voyages dédiées
                  </span>
                </div>
                <ul className="text-white/95 text-[14px] sm:text-[16px] leading-relaxed max-w-[320px] space-y-1">
                  <li className="flex items-start gap-2">
                    <span
                      className="material-symbols-outlined text-[#FBBF12] text-[16px] mt-0.5 flex-shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      schedule
                    </span>
                    <span>Du lundi au jeudi : 9h à 18h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="material-symbols-outlined text-[#FBBF12] text-[16px] mt-0.5 flex-shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      schedule
                    </span>
                    <span>Le vendredi : 9h à 17h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
