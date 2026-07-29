"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!res.ok) throw new Error(json?.error || "L'inscription a échoué.");

      setStatus("success");
      setMessage("Merci, votre inscription est enregistrée.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "L'inscription a échoué."
      );
    }
  }

  return (
    <div>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
        <div className="flex-grow relative">
          <label htmlFor="newsletter-email" className="sr-only">
            Votre adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Votre adresse email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "sending"}
            className="w-full h-12 sm:h-14 px-5 pl-12 font-body-md text-[14px] sm:text-[16px] rounded-lg border-0 outline-none focus:ring-2 focus:ring-[#FBBF12] bg-white/15 text-white placeholder:text-white/50 backdrop-blur-sm transition-all disabled:opacity-60"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-[20px]">
            email
          </span>
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-[#3179C4] border-[1.5px] border-white font-label text-[13px] sm:text-[14px] font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === "sending" ? "Envoi…" : "S'inscrire"}{" "}
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </form>

      {/* aria-live : le retour est annonce aux lecteurs d'ecran, l'inscription
          ne se traduisant par aucun changement de page. */}
      <p
        aria-live="polite"
        className={`font-body-md text-[13px] sm:text-[14px] mt-3 min-h-[20px] ${
          status === "error" ? "text-[#FFD4D4]" : "text-white/90"
        }`}
      >
        {message}
      </p>
    </div>
  );
}
