/**
 * Relecture des articles par le client, depuis son espace Clickzou
 * (clickzou.fr/espace-client, onglet « Articles programmés » — demande de JC du
 * 6 octobre 2026, sur le modèle d'Alps Ski Transfers et d'Un Seul Souffle).
 *
 * Le client modifie le TEXTE d'un article ; Clickzou enregistre ses
 * modifications dans `corrections-client.json` (commit GitHub sur main), et le
 * registre des articles les applique au chargement (`index.ts`).
 *
 * Particularité de CTA Voyages : le corps des articles est en JSX. Seuls les
 * blocs de texte « simples » sont donc proposés à la relecture — texte brut,
 * avec du **gras** (<strong>) et de l'*italique* (<em>), rendus ici en
 * balisage léger et reconstruits à l'identique à l'application :
 *   - `intro` (chapô) et `conclusion`, en entier ou paragraphe par paragraphe ;
 *   - `sections.N.body.K` : paragraphe K de la section N ;
 *   - `sections.N.body.K.items.J` : élément J de la liste K de la section N ;
 *   - `faq.N.q` / `faq.N.a` : question et réponse de FAQ (texte simple).
 *
 * Restent verrouillés, donc absents de `champsEditables` et refusés par
 * `appliquerCorrections` : titre (H1), intertitres H2, `meta` (title,
 * description), `excerpt` (carte du blog), slug, dates, mot-clé, images,
 * catégorie. Les liens ne vivent pas dans le texte des articles : ils sont
 * posés au rendu (noms de destinations → fiches, `linkify`), et le maillage
 * reste donc hors d'atteinte de la relecture. Un bloc qui contient autre chose
 * que du texte, du gras et de l'italique (exposant, lien en dur…) n'est pas
 * proposé.
 *
 * L'import du JSON est en chemin RELATIF : ce fichier peut être chargé hors
 * Next, où l'alias `@/` n'est pas garanti.
 */
import {
  Children,
  Fragment,
  cloneElement,
  createElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { BlogArticle } from "./types";
import corrections from "./corrections-client.json";

export type ChampEditable = {
  /** Adresse du texte dans l'article : « sections.2.body.1 », « faq.0.a ». */
  chemin: string;
  /** Regroupement à l'écran : « Introduction », « Section 2 — <titre H2> », « Questions fréquentes ». */
  section: string;
  libelle: string;
  texte: string;
};

type CorrectionsClient = Record<
  string,
  { champs: Record<string, string>; modifieLe?: string; par?: string }
>;

type Element = ReactElement<{ children?: ReactNode }>;

const MARQUES: Record<string, string> = { strong: "**", em: "*" };

/* ─────────── JSX ⇄ texte balisé ─────────── */

/**
 * Le texte balisé d'un contenu en ligne (texte, <strong>, <em>, fragments),
 * ou `null` s'il contient autre chose : le bloc n'est alors pas modifiable. Un
 * astérisque déjà présent dans le texte rendrait le balisage ambigu : `null`.
 */
function versTexte(noeud: ReactNode, dansMarque = false): string | null {
  if (noeud === null || noeud === undefined || typeof noeud === "boolean") return "";
  if (typeof noeud === "string" || typeof noeud === "number") {
    const t = String(noeud);
    return t.includes("*") ? null : t;
  }
  if (Array.isArray(noeud)) {
    let out = "";
    for (const n of noeud) {
      const t = versTexte(n, dansMarque);
      if (t === null) return null;
      out += t;
    }
    return out;
  }
  if (!isValidElement(noeud)) return null;
  const el = noeud as Element;
  if (el.type === Fragment) return versTexte(el.props.children, dansMarque);
  const marque = typeof el.type === "string" ? MARQUES[el.type] : undefined;
  // Pas de gras dans l'italique (ni l'inverse) : le retour en JSX serait ambigu.
  if (!marque || dansMarque) return null;
  const interieur = versTexte(el.props.children, true);
  if (interieur === null || !interieur.trim()) return null;
  return `${marque}${interieur}${marque}`;
}

/** Retour en JSX : `**gras**` → <strong>, `*italique*` → <em>, le reste en texte. */
function depuisTexte(texte: string): ReactNode[] {
  const morceaux: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let dernier = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(texte))) {
    if (m.index > dernier) morceaux.push(texte.slice(dernier, m.index));
    morceaux.push(
      m[1] !== undefined
        ? createElement("strong", null, m[1])
        : createElement("em", null, m[2]),
    );
    dernier = re.lastIndex;
  }
  if (dernier < texte.length) morceaux.push(texte.slice(dernier));
  return morceaux;
}

/** Les blocs d'un contenu : les enfants d'un fragment, sinon le contenu seul. */
function blocs(noeud: ReactNode): ReactNode[] {
  if (isValidElement(noeud) && (noeud as Element).type === Fragment) {
    return Children.toArray((noeud as Element).props.children);
  }
  return [noeud];
}

/** Les éléments <li> d'une liste <ul>/<ol>. */
function itemsDe(el: Element): ReactNode[] {
  return Children.toArray(el.props.children).filter(
    (n) => isValidElement(n) && (n as Element).type === "li",
  );
}

/** Texte non vide, sinon `null` (un bloc vide n'est pas proposé). */
const plein = (t: string | null) => (t !== null && t.trim() ? t : null);

/* ─────────── Champs modifiables ─────────── */

/**
 * Les textes modifiables d'un contenu JSX (`racine` = « intro »,
 * « sections.N.body », « conclusion »). Un contenu entièrement en ligne
 * (texte + gras) forme un seul champ ; sinon, chaque paragraphe et chaque
 * élément de liste en forme un.
 */
function champsDuContenu(
  noeud: ReactNode,
  racine: string,
  section: string,
): ChampEditable[] {
  const enLigne = plein(versTexte(noeud));
  if (enLigne !== null) return [{ chemin: racine, section, libelle: "Texte", texte: enLigne }];
  const champs: ChampEditable[] = [];
  blocs(noeud).forEach((b, k) => {
    if (!isValidElement(b)) return;
    const el = b as Element;
    if (el.type === "p") {
      const t = plein(versTexte(el.props.children));
      if (t !== null) champs.push({ chemin: `${racine}.${k}`, section, libelle: "Paragraphe", texte: t });
    } else if (el.type === "ul" || el.type === "ol") {
      itemsDe(el).forEach((li, j) => {
        const t = plein(versTexte((li as Element).props.children));
        if (t !== null) {
          champs.push({ chemin: `${racine}.${k}.items.${j}`, section, libelle: `Liste — élément ${j + 1}`, texte: t });
        }
      });
    }
  });
  return champs;
}

export function champsEditables(article: BlogArticle): ChampEditable[] {
  const champs: ChampEditable[] = [];
  champs.push(
    ...champsDuContenu(article.intro, "intro", "Introduction").map((c) => ({
      ...c,
      libelle: c.chemin === "intro" ? "Chapô" : c.libelle,
    })),
  );
  article.sections.forEach((s, n) => {
    champs.push(...champsDuContenu(s.body, `sections.${n}.body`, `Section ${n + 1} — ${s.h2}`));
  });
  champs.push(...champsDuContenu(article.conclusion, "conclusion", "Conclusion"));
  (article.faq ?? []).forEach((f, i) => {
    if (f.q.trim()) champs.push({ chemin: `faq.${i}.q`, section: "Questions fréquentes", libelle: `Question ${i + 1}`, texte: f.q });
    if (f.a.trim()) champs.push({ chemin: `faq.${i}.a`, section: "Questions fréquentes", libelle: `Réponse ${i + 1}`, texte: f.a });
  });
  return champs;
}

/* ─────────── Application des corrections ─────────── */

/**
 * Remplace, dans un contenu JSX, le texte d'un champ (`reste` = chemin sous la
 * racine : "" pour le contenu entier, « K » pour un paragraphe, « K.items.J »
 * pour un élément de liste). Renvoie le contenu inchangé si l'adresse ne
 * correspond pas à un champ modifiable : on ne crée jamais de structure.
 */
function remplacer(noeud: ReactNode, reste: string, texte: string): ReactNode {
  if (reste === "") {
    return plein(versTexte(noeud)) !== null
      ? createElement(Fragment, null, ...depuisTexte(texte))
      : noeud;
  }
  const m = /^(\d+)(?:\.items\.(\d+))?$/.exec(reste);
  if (!m || plein(versTexte(noeud)) !== null) return noeud;
  const k = Number(m[1]);
  const liste = blocs(noeud);
  const bloc = liste[k];
  if (!isValidElement(bloc)) return noeud;
  const el = bloc as Element;
  let nouveau: ReactNode = el;
  if (m[2] === undefined && el.type === "p" && plein(versTexte(el.props.children)) !== null) {
    nouveau = cloneElement(el, undefined, ...depuisTexte(texte));
  } else if (m[2] !== undefined && (el.type === "ul" || el.type === "ol")) {
    const j = Number(m[2]);
    const items = itemsDe(el);
    const li = items[j];
    if (!isValidElement(li) || plein(versTexte((li as Element).props.children)) === null) return noeud;
    items[j] = cloneElement(li as Element, undefined, ...depuisTexte(texte));
    nouveau = cloneElement(el, undefined, ...items);
  } else {
    return noeud;
  }
  liste[k] = nouveau;
  return createElement(Fragment, null, ...liste);
}

/** Applique les corrections enregistrées pour cet article (copie ; l'original reste intact). */
export function appliquerCorrections(article: BlogArticle): BlogArticle {
  const c = (corrections as CorrectionsClient)[article.slug];
  if (!c?.champs) return article;
  const a: BlogArticle = {
    ...article,
    sections: article.sections.map((s) => ({ ...s })),
    faq: article.faq?.map((f) => ({ ...f })),
  };
  for (const [chemin, texte] of Object.entries(c.champs)) {
    if (typeof texte !== "string" || !texte.trim()) continue;
    let m: RegExpExecArray | null;
    if ((m = /^(intro|conclusion)(?:\.(.+))?$/.exec(chemin))) {
      const cle = m[1] as "intro" | "conclusion";
      a[cle] = remplacer(a[cle], m[2] ?? "", texte);
    } else if ((m = /^sections\.(\d+)\.body(?:\.(.+))?$/.exec(chemin))) {
      const s = a.sections[Number(m[1])];
      if (s) s.body = remplacer(s.body, m[2] ?? "", texte);
    } else if ((m = /^faq\.(\d+)\.(q|a)$/.exec(chemin))) {
      const f = a.faq?.[Number(m[1])];
      if (f) f[m[2] as "q" | "a"] = texte;
    }
  }
  return a;
}
