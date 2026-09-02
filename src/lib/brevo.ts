/**
 * Inscription d'un contact a la liste Brevo qui sert aux campagnes.
 *
 * Deux points d'entree l'utilisent : le bloc newsletter du site et la case a
 * cocher du formulaire de devis. La logique est ici pour qu'ils inscrivent
 * exactement de la meme facon, dans la meme liste.
 *
 * Deux variables d'environnement sont attendues :
 *   BREVO_API_KEY  — cle d'API v3 (Brevo : SMTP & API > Cles API)
 *   BREVO_LIST_ID  — identifiant numerique de la liste de destination
 *
 * La cle ne doit jamais quitter le serveur : ce module n'est importe que par
 * des routes d'API.
 */

const BREVO_ENDPOINT = "https://api.brevo.com/v3/contacts";

/**
 * Cree ou met a jour le contact, puis le rattache a la liste.
 *
 * `source` est enregistre dans l'attribut OPTIN_SOURCE : il permet de savoir,
 * dans Brevo, d'ou vient chaque adresse — page newsletter ou demande de devis.
 * `identity` porte le prenom et le nom quand le formulaire les demande.
 *
 * Leve une erreur si l'inscription echoue ; a l'appelant de decider si cela
 * doit ou non faire echouer sa propre reponse.
 */
export async function subscribeToBrevo(
  email: string,
  source: string,
  identity: { firstName?: string; lastName?: string } = {}
): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    throw new Error("BREVO_API_KEY ou BREVO_LIST_ID absente.");
  }

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
      attributes: {
        OPTIN_SOURCE: source,
        // PRENOM / NOM sont les attributs standards du compte Brevo : renseignes
        // quand le formulaire les collecte, laisses de cote sinon pour ne pas
        // ecraser une valeur deja connue par une chaine vide.
        ...(identity.firstName ? { PRENOM: identity.firstName } : {}),
        ...(identity.lastName ? { NOM: identity.lastName } : {}),
      },
    }),
  });

  // 201 : contact cree. 204 : contact existant mis a jour.
  if (res.status === 201 || res.status === 204) return;

  const detail = await res.text();
  throw new Error(`Brevo a repondu ${res.status} : ${detail.slice(0, 300)}`);
}
