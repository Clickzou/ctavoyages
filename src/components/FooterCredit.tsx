"use client";

import { usePathname } from "next/navigation";

/**
 * Crédit de création du site — affiché uniquement sur la page d'accueil.
 */
export default function FooterCredit() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter py-3 text-center">
        <p className="font-body-md text-[12px] text-white/50">
          Site créé par clickzou —{" "}
          <a
            href="https://clickzou.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#FBBF12] transition-colors underline-offset-2 hover:underline"
          >
            Agence ia et digitale
          </a>
        </p>
      </div>
    </div>
  );
}
