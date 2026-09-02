import Link from "next/link";

/**
 * Appel a l'inscription newsletter, pose dans le bloc bleu des pages.
 *
 * La saisie elle-meme se fait sur /newsletter : la page collecte prenom, nom et
 * adresse, la ou un champ unique pose au milieu d'une page ne pouvait demander
 * que l'e-mail. Un seul formulaire a maintenir, une seule promesse affichee.
 */
export default function NewsletterForm() {
  return (
    <div>
      <Link
        href="/newsletter"
        className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 bg-white text-[#3179C4] border-[1.5px] border-white font-label text-[13px] sm:text-[14px] font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
      >
        S&rsquo;inscrire à la newsletter
        <span className="material-symbols-outlined text-[18px]">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
