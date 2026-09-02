"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulaire d'inscription de la page /newsletter.
 *
 * Il collecte prenom, nom et adresse : Brevo les enregistre dans PRENOM / NOM,
 * ce qui permet de personnaliser les campagnes ("Bonjour Marie") la ou le bloc
 * newsletter des pages ne demandait qu'une adresse.
 */
export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
        body: JSON.stringify({ email, firstName, lastName }),
      });
      const json = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!res.ok) throw new Error(json?.error || "L'inscription a échoué.");

      setStatus("success");
      setMessage("");
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "L'inscription a échoué.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-center">
        <span
          className="material-symbols-outlined text-[48px] text-[#3179C4]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h2 className="font-h2 text-[22px] sm:text-[26px] font-bold text-[#1A1A1A] mt-4 mb-3">
          Inscription confirmée
        </h2>
        <p className="font-body-md text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
          Merci ! Vous recevrez nos prochaines inspirations de voyage dans votre
          boîte mail. Pensez à vérifier vos indésirables lors du premier envoi.
        </p>
        <a
          href="/destinations"
          className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-[#3179C4] text-white font-label text-[14px] font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all"
        >
          Explorer nos destinations
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
      <h2 className="font-h2 text-[22px] sm:text-[26px] font-bold text-[#1A1A1A] mb-2">
        Inscrivez-vous gratuitement
      </h2>
      <p className="font-body-md text-[14px] sm:text-[16px] text-[#4A4A4A] mb-6">
        Quelques secondes suffisent, et vous pouvez vous désinscrire en un clic.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="newsletter-firstname"
              className="block font-label text-[13px] font-bold text-[#1A1A1A] mb-1.5"
            >
              Prénom
            </label>
            <input
              id="newsletter-firstname"
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="Marie"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={status === "sending"}
              className="w-full h-12 px-4 font-body-md text-[15px] rounded-lg border border-[#D8DEE6] outline-none focus:border-[#3179C4] focus:ring-2 focus:ring-[#3179C4]/20 transition-all disabled:opacity-60"
            />
          </div>
          <div>
            <label
              htmlFor="newsletter-lastname"
              className="block font-label text-[13px] font-bold text-[#1A1A1A] mb-1.5"
            >
              Nom
            </label>
            <input
              id="newsletter-lastname"
              type="text"
              name="lastName"
              autoComplete="family-name"
              placeholder="Durand"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={status === "sending"}
              className="w-full h-12 px-4 font-body-md text-[15px] rounded-lg border border-[#D8DEE6] outline-none focus:border-[#3179C4] focus:ring-2 focus:ring-[#3179C4]/20 transition-all disabled:opacity-60"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="newsletter-email"
            className="block font-label text-[13px] font-bold text-[#1A1A1A] mb-1.5"
          >
            Adresse e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="prenom.nom@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "sending"}
            className="w-full h-12 px-4 font-body-md text-[15px] rounded-lg border border-[#D8DEE6] outline-none focus:border-[#3179C4] focus:ring-2 focus:ring-[#3179C4]/20 transition-all disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="h-12 sm:h-14 w-full bg-[#3179C4] text-white font-label text-[14px] font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:brightness-100"
        >
          {status === "sending" ? "Envoi…" : "S'inscrire"}
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>

        {/* aria-live : le retour est annonce aux lecteurs d'ecran, l'inscription
            ne se traduisant par aucun changement de page. */}
        <p
          aria-live="polite"
          className="font-body-md text-[13px] text-[#C0392B] min-h-[20px]"
        >
          {status === "error" ? message : ""}
        </p>

        <p className="font-body-md text-[12px] text-[#6B7280] leading-relaxed">
          En vous inscrivant, vous acceptez de recevoir nos communications. Vos
          données sont traitées conformément à notre{" "}
          <a href="/confidentialite" className="text-[#3179C4] underline">
            politique de confidentialité
          </a>
          .
        </p>
      </form>
    </div>
  );
}
