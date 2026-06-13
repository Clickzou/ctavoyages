/**
 * Envoi d'un formulaire via FormSubmit (https://formsubmit.co) — service
 * form-to-email sans backend, utilisé par le site d'origine.
 *
 * NB : la PREMIÈRE soumission déclenche un email d'activation envoyé à
 * l'adresse destinataire ; il faut cliquer le lien d'activation une fois
 * pour que les emails suivants soient reçus directement.
 */
const RECIPIENT = "voyages@cta-events.com";

export async function submitToFormsubmit(
  formEl: HTMLFormElement,
  opts: { subject: string }
): Promise<void> {
  const fd = new FormData(formEl);
  const payload: Record<string, string> = {};
  fd.forEach((value, key) => {
    payload[key] = typeof value === "string" ? value : "";
  });
  payload["_subject"] = opts.subject;
  payload["_template"] = "table";
  payload["_captcha"] = "false";

  const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  await postPayload(payload);
}

/** Variante : envoi d'un objet de données déjà construit (formulaires contrôlés). */
export async function submitDataToFormsubmit(
  data: Record<string, string>,
  opts: { subject: string }
): Promise<void> {
  await postPayload({
    ...data,
    _subject: opts.subject,
    _template: "table",
    _captcha: "false",
  });
}

async function postPayload(payload: Record<string, string>): Promise<void> {
  const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Échec de l'envoi du formulaire.");
  const json = (await res.json()) as { success?: string | boolean; message?: string };
  if (json.success !== "true" && json.success !== true) {
    throw new Error(json.message || "Échec de l'envoi du formulaire.");
  }
}
