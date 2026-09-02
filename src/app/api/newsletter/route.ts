import { subscribeToBrevo } from "@/lib/brevo";

/**
 * Inscription a la newsletter depuis le bloc du site.
 *
 * Le contact est cree directement dans la liste Brevo qui sert aux campagnes :
 * une adresse saisie sur le site est ainsi immediatement exploitable, sans
 * ressaisie manuelle. La cle d'API reste cote serveur (voir `@/lib/brevo`).
 */

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête illisible." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null
      ? String((body as Record<string, unknown>).email ?? "").trim()
      : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Merci de saisir une adresse e-mail valide." },
      { status: 400 }
    );
  }

  if (!process.env.BREVO_API_KEY || !process.env.BREVO_LIST_ID) {
    console.error(
      "BREVO_API_KEY ou BREVO_LIST_ID absente : inscription impossible."
    );
    return Response.json(
      { error: "L'inscription est momentanément indisponible." },
      { status: 500 }
    );
  }

  try {
    await subscribeToBrevo(email, "site cta-voyages.com");
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Echec de l'inscription à la newsletter :", err);
    return Response.json(
      { error: "L'inscription a échoué. Merci de réessayer." },
      { status: 502 }
    );
  }
}
