"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Bandeau de consentement et chargement conditionnel de Google Analytics.
 *
 * La mesure d'audience n'est pas exemptée de consentement en France : le script
 * n'est monté qu'après acceptation explicite, jamais avant. Refuser est aussi
 * immédiat qu'accepter, les deux boutons étant de même niveau, et le choix
 * reste modifiable depuis la page cookies.
 *
 * Sans NEXT_PUBLIC_GA_ID, il n'y a ni mesure ni bandeau : le site ne dépose
 * alors aucun cookie et n'a rien à faire accepter.
 */

const STORAGE_KEY = "cta-consent-audience";

/**
 * Identifiant de mesure GA4 de la propriété « CTA Voyages ». Ce n'est pas un
 * secret — il figure en clair dans toute page qui charge le tag — d'où sa
 * présence ici plutôt que dans une variable d'environnement, qu'il faudrait
 * penser à redéployer. NEXT_PUBLIC_GA_ID reste prioritaire si elle est définie,
 * pour pointer une autre propriété le temps d'un test.
 */
const DEFAULT_GA_ID = "G-719J95EWVK";

type Choice = "granted" | "denied";

/** Efface le choix mémorisé : la page cookies s'en sert pour revenir dessus. */
export function resetConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
}

export default function CookieConsent() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;
  const [choice, setChoice] = useState<Choice | null>(null);
  // Le rendu serveur ne connaît pas le choix : on n'affiche rien avant lecture.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") setChoice(stored);
    setReady(true);
  }, []);

  function decide(next: Choice) {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
  }

  if (!gaId) return null;

  return (
    <>
      {choice === "granted" && <GoogleAnalytics gaId={gaId} />}

      {ready && choice === null && (
        <div
          role="dialog"
          aria-label="Consentement aux cookies de mesure d'audience"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-outline-variant/40 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter py-5 sm:py-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed flex-grow">
              Nous utilisons des cookies de mesure d&apos;audience pour comprendre
              comment le site est consulté et l&apos;améliorer. Ils ne sont
              déposés qu&apos;avec votre accord et ne servent ni à la publicité,
              ni à vous identifier.{" "}
              <Link
                href="/cookies"
                className="text-primary font-medium hover:underline"
              >
                En savoir plus
              </Link>
            </p>
            <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="h-11 px-6 rounded-lg border-[1.5px] border-outline-variant font-label text-[13px] sm:text-[14px] text-on-surface hover:bg-[#F4F6F9] transition-colors"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="h-11 px-6 rounded-lg bg-[#3179C4] text-white font-label text-[13px] sm:text-[14px] font-bold hover:bg-[#004191] transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
