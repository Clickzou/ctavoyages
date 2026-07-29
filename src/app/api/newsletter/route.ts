/**
 * Inscription a la newsletter.
 *
 * Le contact est cree directement dans la liste Brevo qui sert aux campagnes :
 * une adresse saisie sur le site est ainsi immediatement exploitable, sans
 * ressaisie manuelle. La cle d'API reste cote serveur.
 *
 * Deux variables d'environnement sont attendues :
 *   BREVO_API_KEY  — cle d'API v3 (Brevo : SMTP & API > Cles API)
 *   BREVO_LIST_ID  — identifiant numerique de la liste de destination
 */

const BREVO_ENDPOINT = "https://api.brevo.com/v3/contacts";

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

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    console.error(
      "BREVO_API_KEY ou BREVO_LIST_ID absente : inscription impossible."
    );
    return Response.json(
      { error: "L'inscription est momentanément indisponible." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // updateEnabled evite l'erreur sur une adresse deja connue : le contact
      // est alors simplement rattache a la liste.
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes: { OPTIN_SOURCE: "site cta-voyages.com" },
      }),
    });

    // 201 : contact cree. 204 : contact existant mis a jour.
    if (res.status === 201 || res.status === 204) {
      return Response.json({ ok: true });
    }

    const detail = await res.text();
    throw new Error(`Brevo a repondu ${res.status} : ${detail.slice(0, 300)}`);
  } catch (err) {
    console.error("Echec de l'inscription à la newsletter :", err);
    return Response.json(
      { error: "L'inscription a échoué. Merci de réessayer." },
      { status: 502 }
    );
  }
}
