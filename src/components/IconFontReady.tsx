"use client";

import { useEffect } from "react";

/**
 * Évite le FOUT des icônes Material Symbols : tant que la police d'icônes n'est
 * pas chargée, le navigateur affiche le texte des ligatures (« keyboard_arrow_down »…).
 * On ajoute la classe `icons-ready` sur <html> dès que la police est prête
 * (globals.css masque les glyphes jusque-là). Repli temporisé si l'API Font
 * Loading est indisponible ou trop lente.
 */
export default function IconFontReady() {
  useEffect(() => {
    const markReady = () =>
      document.documentElement.classList.add("icons-ready");

    if (typeof document !== "undefined" && "fonts" in document) {
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        markReady();
      };
      // document.fonts.ready se résout quand toutes les polices utilisées sont chargées.
      document.fonts.ready.then(finish);
      // Filet de sécurité : ne jamais laisser les icônes masquées indéfiniment.
      const t = setTimeout(finish, 3000);
      return () => clearTimeout(t);
    }
    markReady();
  }, []);

  return null;
}
