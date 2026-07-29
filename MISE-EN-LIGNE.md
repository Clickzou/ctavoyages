# Mise en ligne — procédure de bascule

Le nouveau site (Next.js, hébergé sur **Vercel**) remplace la plateforme de
réservation actuelle (Ruby on Rails, hébergée chez **Gandi**). Il est servi sur
un **nouveau domaine, `cta-voyages.com`** (acheté chez OVH), **sans `www`** :
`www.cta-voyages.com` et `cta-events.com` redirigent vers lui et n'hébergent
plus rien.

## État des lieux

| | Site actuel | Nouveau site |
|---|---|---|
| Adresse | `www.cta-events.com` | `cta-voyages.com` (sans `www`) |
| Registrar / DNS | Gandi (`ns-153-a`, `ns-47-b`, `ns-82-c.gandi.net`) | OVH |
| Hébergeur | Gandi (`xvm-8-163.dc0.ghst.net`, IP `92.243.8.163`) | Vercel (région `cdg1`) |
| Technologie | Rails + nginx | Next.js 16 |
| Dépôt / déploiement | — | GitHub `Clickzou/ctavoyages`, déploiement auto au push sur `main` |

**L'e-mail ne change pas** : `voyages@cta-events.com` reste la boîte de contact,
affichée telle quelle sur tout le site. Le domaine `cta-events.com` doit donc
rester actif et ses enregistrements MX intacts, même après la bascule.

Le site actuel est une plateforme de réservation : 120 pages pays, 14 thématiques,
11 types de produits, un catalogue de fiches produit, un moteur de recherche, un
panier et des comptes clients. Le nouveau site est une vitrine de génération de
contacts : 70 fiches destination et un formulaire de devis. **La vente en ligne
disparaît** — c'est un choix assumé.

Les URL de l'ancien site sont reprises en redirections 308 dans
[`next.config.ts`](next.config.ts) : 58 pays vers leur fiche destination, les
thématiques et types vers la rubrique équivalente, les pages légales et de
contact vers leur nouvelle adresse, et tout le reste rabattu sur `/destinations`.

## Bascule

L'ordre compte : le nouveau domaine doit répondre **avant** que le code ne le
déclare canonique, et l'ancien ne doit rediriger qu'une fois le nouveau en
ligne.

### 1. Mettre le site en ligne sur cta-voyages.com

1. **Dans Vercel**, projet `ctavoyages` → Settings → Domains : ajouter
   `cta-voyages.com` en **Production** et `www.cta-voyages.com` en **redirection
   308 vers l'apex**. Vercel affiche les valeurs DNS exactes à recopier, propres
   au projet — les relever plutôt que les recopier d'ici.
2. **Chez OVH**, dans la zone DNS de `cta-voyages.com`. Les deux noms doivent
   pointer vers Vercel : l'apex parce qu'il sert le site, `www` parce que c'est
   Vercel qui émet sa redirection.
   - `@` → A vers l'IP indiquée par Vercel, **en remplacement du A de parking
     `213.186.33.5`**
   - `www` → CNAME vers la valeur indiquée par Vercel (de la forme
     `<hash>.vercel-dns-0NN.com.`). Supprimer d'abord le `A www` de parking et
     le `TXT www "3|welcome"` : OVH refuse un CNAME tant qu'un autre
     enregistrement existe sur le même nom.
   - supprimer aussi le `TXT "1|www.cta-voyages.com"` et le `CNAME ftp`, restes
     de la configuration de parking.
3. Attendre que Vercel affiche les deux domaines en **Valid Configuration** et
   que le certificat TLS soit émis, puis vérifier que `https://cta-voyages.com`
   sert le site et que `https://www.cta-voyages.com` y redirige.

### 2. Basculer le code sur le nouveau domaine

`metadataBase` ([`src/app/layout.tsx`](src/app/layout.tsx)),
[`src/app/robots.ts`](src/app/robots.ts) et
[`src/app/sitemap.ts`](src/app/sitemap.ts) déclarent `https://cta-voyages.com`,
sans `www` — la forme doit rester strictement identique à celle du domaine de
production Vercel, sans quoi les canoniques désignent une URL redirigée.
**Ne pousser ce changement qu'une fois l'étape 1 terminée** : publier des URL
canoniques vers un domaine qui ne résout pas encore enverrait Google sur des
pages mortes. Le push sur `main` déclenche le déploiement.

### 3. Faire rediriger cta-events.com

1. **Dans Vercel** : ajouter `www.cta-events.com` et `cta-events.com`, tous deux
   en **Redirect to `cta-voyages.com`** avec conservation du chemin. Les
   anciennes URL Rails déjà indexées arrivent ainsi sur les redirections 308 de
   [`next.config.ts`](next.config.ts).
2. **Chez Gandi**, dans la zone DNS — **sans changer les serveurs de noms**, qui
   doivent rester ceux de Gandi :
   - `www` → CNAME vers `cname.vercel-dns.com.`
   - `@` → A vers l'IP indiquée par Vercel, en remplacement de `92.243.8.163`
3. **Ne toucher ni aux MX ni aux TXT** (SPF/DKIM) : `voyages@cta-events.com`
   reste l'adresse de contact du site et doit continuer de fonctionner. Ne
   modifier que les A et CNAME n'affecte pas la messagerie.

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
- **Le site étant servi sur l'apex, son IP Vercel est figée dans la zone OVH.**
  Un CNAME aurait suivi automatiquement les évolutions d'adressage de Vercel ;
  un A, non. Si Vercel signale un jour que la configuration est devenue
  invalide, c'est ce `A @` qu'il faut mettre à jour.
- **Ne jamais laisser expirer `cta-events.com`** : il porte la boîte
  `voyages@cta-events.com` et les redirections qui transmettent le
  référencement acquis. Le renouveler chez Gandi tant que les deux services
  vivent.

## Après la bascule

- Créer une **nouvelle propriété Search Console pour `cta-voyages.com`** et y
  soumettre `https://cta-voyages.com/sitemap.xml`.
- Dans la propriété `cta-events.com`, utiliser l'**outil de changement d'adresse**
  de la Search Console : c'est ce qui transmet le plus vite l'historique au
  nouveau domaine.
- Un changement de domaine coûte temporairement du trafic organique, le temps que
  Google suive les redirections. Compter quelques semaines avant retour au
  niveau antérieur.
- Reporter le nouveau domaine dans les **fiches Google Business, réseaux sociaux
  et signatures e-mail**, et demander aux partenaires qui font un lien de le
  mettre à jour : un lien direct vaut mieux qu'un lien redirigé.
- Conserver les redirections de `next.config.ts` **au moins un an**, le temps que
  les moteurs de recherche réindexent l'ensemble.
- Surveiller les 404 dans la Search Console les premières semaines : toute URL
  oubliée peut être ajoutée aux tables de correspondance de `next.config.ts`.
