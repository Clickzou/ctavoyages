/**
 * Envoi des demandes de devis.
 *
 * Le navigateur poste vers notre propre route `/api/devis`, qui se charge de
 * l'expedition via Resend. Passer par le serveur permet de garder la cle d'API
 * secrete et de ne plus exposer les adresses des destinataires dans le code
 * client.
 */

/** Transmet une demande de devis déjà validée par le formulaire. */
export async function submitDevisRequest(
  data: Record<string, string>,
  opts: { subject: string }
): Promise<void> {
  const res = await fetch("/api/devis", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, _subject: opts.subject }),
  });

  if (!res.ok) {
    const json = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(json?.error || "Échec de l'envoi du formulaire.");
  }
}
