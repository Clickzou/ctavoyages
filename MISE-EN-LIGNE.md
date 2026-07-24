# Mise en ligne — procédure de bascule

Le nouveau site (Next.js, hébergé sur **Vercel**) remplace la plateforme de
réservation actuelle (Ruby on Rails, hébergée chez **Gandi**) sur le domaine
`www.cta-events.com`.

## État des lieux

| | Site actuel | Nouveau site |
|---|---|---|
| Adresse | `www.cta-events.com` | `ctavoyages.vercel.app` |
| Hébergeur | Gandi (`xvm-8-163.dc0.ghst.net`, IP `92.243.8.163`) | Vercel (région `cdg1`) |
| DNS | Gandi (`ns-153-a`, `ns-47-b`, `ns-82-c.gandi.net`) | — |
| Technologie | Rails + nginx | Next.js 16 |
| Dépôt / déploiement | — | GitHub `Clickzou/ctavoyages`, déploiement auto au push sur `main` |

Le site actuel est une plateforme de réservation : 120 pages pays, 14 thématiques,
11 types de produits, un catalogue de fiches produit, un moteur de recherche, un
panier et des comptes clients. Le nouveau site est une vitrine de génération de
contacts : 70 fiches destination et un formulaire de devis. **La vente en ligne
disparaît** — c'est un choix assumé.

Les URL de l'ancien site sont reprises en redirections 308 dans
[`next.config.ts`](next.config.ts) : 58 pays vers leur fiche destination, les
thématiques et types vers la rubrique équivalente, les pages légales et de
contact vers leur nouvelle adresse, et tout le reste rabattu sur `/destinations`.

## Bascule DNS

1. **Dans Vercel** : Settings → Domains → ajouter `www.cta-events.com` et
   `cta-events.com`. Vercel affiche les valeurs exactes à recopier.
2. **Chez Gandi**, dans la zone DNS — **sans changer les serveurs de noms**,
   qui doivent rester ceux de Gandi :
   - `www` → CNAME vers `cname.vercel-dns.com.`
   - `@` → A vers l'IP indiquée par Vercel, en remplacement de `92.243.8.163`
3. **Ne pas toucher aux enregistrements MX ni aux TXT** (SPF/DKIM) :
   `voyages@cta-events.com` doit continuer de fonctionner. Ne modifier que les
   enregistrements A et CNAME n'affecte pas la messagerie.

## Précautions

- **Abaisser le TTL à 300 s quelques heures avant la bascule.** Le retour en
  arrière consiste à remettre l'ancienne IP `92.243.8.163` ; avec un TTL bas il
  est effectif en minutes plutôt qu'en heures.
- **Le back-office `/gestion` deviendra inaccessible via `www`.** S'il est encore
  utilisé (dossiers clients, réservations en cours), créer au préalable un
  sous-domaine `ancien.cta-events.com` pointant vers `92.243.8.163`, et vérifier
  avec le prestataire de la plateforme Rails que l'application y répond.
- **Vérifier le contrat d'hébergement Gandi** et celui de la plateforme de
  réservation avant de les résilier : la bascule DNS coupe l'accès public, elle
  ne met pas fin aux abonnements.

## Après la bascule

- Soumettre `https://www.cta-events.com/sitemap.xml` dans la Google Search
  Console et demander une réindexation.
- Conserver les redirections de `next.config.ts` **au moins un an**, le temps que
  les moteurs de recherche réindexent l'ensemble.
- Surveiller les 404 dans la Search Console les premières semaines : toute URL
  oubliée peut être ajoutée aux tables de correspondance de `next.config.ts`.
