import { Resend } from "resend";

import { subscribeToBrevo } from "@/lib/brevo";

/**
 * Reception des demandes de devis, envoyees par Resend.
 *
 * L'envoi passe par le serveur et non par le navigateur : la cle Resend est un
 * secret, elle ne doit jamais partir dans le bundle client.
 *
 * Il n'y a volontairement pas de repli sur un autre service. Le precedent,
 * FormSubmit, refuse desormais nos requetes par un 403 : appelees depuis le
 * serveur et non plus depuis le navigateur, elles n'ont plus l'origine qu'il
 * attend. Un repli condamne avalerait la demande en silence la ou une erreur
 * franche invite le visiteur a reessayer ou a telephoner.
 */

/** Destinataire principal des demandes. Boite historique, inchangee. */
const RECIPIENT = "voyages@cta-events.com";

/** Conseilleres et responsables recevant chaque demande en copie. */
const CC = [
  "caroline.guiraud@cta-events.com",
  "stephanie.belbes@cta-events.com",
  "kevin.massat@cta-events.com",
  "kz@cta-events.com",
  "jjc@cta-events.com",
  "jc@clickzou.fr",
];

/**
 * Expediteur. Le domaine verifie chez Resend est cta-voyages.com, dont la cle
 * DKIM est publiee sur resend._domainkey ; l'adresse doit donc appartenir a ce
 * domaine. Le sous-domaine `send` ne porte que le retour technique (SPF et MX
 * de bounce), il n'a pas vocation a apparaitre dans l'expediteur.
 *
 * A noter : les MX de cta-voyages.com restent ceux d'OVH. Envoyer via Resend
 * ne change rien a la reception du courrier.
 */
const FROM = process.env.RESEND_FROM ?? "CTA Voyages <devis@cta-voyages.com>";

/** Champs affiches en clair dans l'e-mail, dans cet ordre. */
const LABELS: Record<string, string> = {
  type_voyage: "Type de voyage",
  destination: "Destination",
  sport: "Sport",
  date_arrivee: "Date d'arrivée",
  date_depart: "Date de départ",
  flexibilite_arrivee: "Flexibilité arrivée",
  flexibilite_depart: "Flexibilité départ",
  nombre_voyageurs: "Nombre de voyageurs",
  budget: "Budget",
  nom: "Nom",
  prenom: "Prénom",
  telephone: "Téléphone",
  email: "E-mail",
  message: "Message",
  consentement_rgpd: "Consentement RGPD",
  newsletter: "Newsletter",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(data: Record<string, string>): string {
  const rows = Object.entries(LABELS)
    .filter(([key]) => data[key])
    .map(
      ([key, label]) =>
        `<tr>
          <td style="padding:8px 12px;background:#f4f6f9;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:8px 12px">${escapeHtml(data[key]).replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");

  return `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#111">
    <h1 style="font-size:18px;margin:0 0 16px">Nouvelle demande de devis</h1>
    <table style="border-collapse:collapse;font-size:14px;width:100%;max-width:640px">${rows}</table>
  </div>`;
}

function buildText(data: Record<string, string>): string {
  return Object.entries(LABELS)
    .filter(([key]) => data[key])
    .map(([key, label]) => `${label} : ${data[key]}`)
    .join("\n");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête illisible." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  // On ne conserve que des chaines, bornees en longueur : le contenu arrive
  // d'un formulaire public et finit dans un e-mail.
  const data: Record<string, string> = {};
  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    if (typeof value === "string" && value.trim()) {
      data[key] = value.trim().slice(0, 5000);
    }
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }
  if (!data.nom) {
    return Response.json({ error: "Le nom est obligatoire." }, { status: 400 });
  }

  const subject = data._subject || "Nouvelle demande de devis : CTA Voyages";
  delete data._subject;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY absente : impossible d'envoyer la demande.");
    return Response.json(
      { error: "L'envoi a échoué. Merci de réessayer." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      cc: CC,
      // Repondre a l'e-mail ecrit directement au prospect.
      replyTo: data.email,
      subject,
      html: buildHtml(data),
      text: buildText(data),
    });

    if (error) throw new Error(error.message);

    // La case « offres et actualites » vaut opt-in : le contact rejoint la
    // meme liste Brevo que le bloc newsletter du site, sans ressaisie. Un
    // echec est seulement journalise — la demande de devis, elle, est partie,
    // et il serait absurde de la declarer perdue au visiteur pour autant.
    if (data.newsletter === "Oui") {
      try {
        await subscribeToBrevo(data.email, "demande de devis");
      } catch (err) {
        console.error("Echec de l'inscription newsletter depuis le devis :", err);
      }
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Echec de l'envoi de la demande de devis :", err);
    return Response.json(
      { error: "L'envoi a échoué. Merci de réessayer." },
      { status: 502 }
    );
  }
}
