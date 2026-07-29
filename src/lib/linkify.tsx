import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import Link from "next/link";
import type { LinkableDestination } from "./internal-links";

/**
 * Transforme les noms de destinations cités dans le corps d'un article en liens
 * vers leur fiche.
 *
 * Le contenu des articles est du JSX rédigé à la main : plutôt que d'éditer 116
 * fichiers pour y poser des liens, la transformation se fait au rendu. Elle ne
 * touche qu'aux nœuds texte et laisse le balisage intact.
 *
 * Garde-fous : une destination n'est liée qu'une fois, jamais à l'intérieur d'un
 * lien existant, et le nombre total est plafonné — un article truffé de liens
 * se lit mal et dilue le signal envoyé aux moteurs.
 */

/** Échappe une chaîne pour l'insérer telle quelle dans une expression régulière. */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Bornes de mot compatibles avec les accents : `\b` considère « é » comme une
 * frontière, ce qui ferait reconnaître « Inde » dans « Indépendant ».
 */
function wordBoundedPattern(name: string): RegExp {
  return new RegExp(`(?<!\\p{L})${escapeRegExp(name)}(?!\\p{L})`, "iu");
}

export type Linkifier = (node: ReactNode) => ReactNode;

/**
 * Construit un transformateur à usage unique pour un article : l'état (quelles
 * destinations ont déjà été liées, combien de liens posés) est partagé entre
 * tous les appels, de sorte que l'intro et les sections se répartissent le
 * quota au lieu de le consommer chacune de leur côté.
 */
export function createLinkifier(
  destinations: LinkableDestination[],
  max = 5,
): Linkifier {
  const pending = destinations.map((destination) => ({
    destination,
    pattern: wordBoundedPattern(destination.name),
  }));
  let used = 0;
  let key = 0;

  /** Première destination citée dans le texte, la plus à gauche. */
  function findFirst(text: string) {
    let best: { index: number; length: number; target: (typeof pending)[0] } | null =
      null;
    for (const candidate of pending) {
      const match = candidate.pattern.exec(text);
      if (!match) continue;
      if (!best || match.index < best.index) {
        best = { index: match.index, length: match[0].length, target: candidate };
      }
    }
    return best;
  }

  function transformString(text: string): ReactNode {
    const parts: ReactNode[] = [];
    let rest = text;

    while (used < max && pending.length > 0) {
      const found = findFirst(rest);
      if (!found) break;

      const { index, length, target } = found;
      // On conserve la casse du texte d'origine : « la thaïlande » reste en
      // minuscules dans le lien, seule l'ancre change d'apparence.
      const label = rest.slice(index, index + length);
      parts.push(rest.slice(0, index));
      parts.push(
        <Link
          key={`linkify-${key++}`}
          href={target.destination.href}
          className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
        >
          {label}
        </Link>,
      );
      rest = rest.slice(index + length);

      used += 1;
      pending.splice(pending.indexOf(target), 1);
    }

    if (parts.length === 0) return text;
    parts.push(rest);
    return parts;
  }

  function transform(node: ReactNode): ReactNode {
    if (used >= max || pending.length === 0) return node;
    if (typeof node === "string") return transformString(node);
    if (Array.isArray(node)) return Children.map(node, transform);

    if (isValidElement(node)) {
      // Ne jamais imbriquer un lien dans un autre.
      if (node.type === "a" || node.type === Link) return node;

      const { children } = node.props as { children?: ReactNode };
      if (children === undefined || children === null) return node;

      return cloneElement(node, undefined, transform(children));
    }

    return node;
  }

  return transform;
}
