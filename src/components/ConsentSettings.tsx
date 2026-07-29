"use client";

import { useEffect, useState } from "react";

/**
 * Permet de revenir sur son choix depuis la page cookies. Retirer un
 * consentement doit être aussi simple que le donner : le bouton efface la
 * préférence enregistrée et le bandeau réapparaît immédiatement.
 */

const STORAGE_KEY = "cta-consent-audience";

export default function ConsentSettings() {
  const [choice, setChoice] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(window.localStorage.getItem(STORAGE_KEY));
    setReady(true);
  }, []);

  if (!ready) return null;

  const label =
    choice === "granted"
      ? "Vous avez accepté les cookies de mesure d'audience."
      : choice === "denied"
        ? "Vous avez refusé les cookies de mesure d'audience."
        : "Vous n'avez pas encore fait de choix.";

  return (
    <div className="mt-4 rounded-xl border border-outline-variant/40 bg-[#F4F6F9] p-5 sm:p-6">
      <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
        <strong>Votre choix actuel&nbsp;:</strong> {label}
      </p>
      <button
        type="button"
        onClick={() => {
          window.localStorage.removeItem(STORAGE_KEY);
          window.location.reload();
        }}
        className="mt-4 h-11 px-6 rounded-lg bg-[#3179C4] text-white font-label text-[13px] sm:text-[14px] font-bold hover:bg-[#004191] transition-colors"
      >
        Modifier mon choix
      </button>
    </div>
  );
}
