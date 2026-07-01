import Link from "next/link";
import FooterCredit from "./FooterCredit";

export default function Footer() {
  return (
    <footer className="w-full footer-gradient text-white">
      <div className="max-w-[1200px] mx-auto pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr_1.45fr] gap-8 sm:gap-10">
          <div className="flex flex-col gap-5 sm:gap-6 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="CTA Voyages logo blanc"
                className="h-8 sm:h-10 w-auto self-start"
                src="/assets/images/Logo CTA Voyages blanc.png"
              />
            </Link>
            <p className="font-body-md text-white/80 italic text-[14px]">
              &laquo;&nbsp;Faire de vos rêves une réalité&nbsp;&raquo;
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded w-fit">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="font-label text-[11px] sm:text-[12px] uppercase tracking-wider">
                Engagé RSE · Certification EcoVadis
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FBBF12] hover:text-[#004191] hover:border-transparent transition-all"
                href="https://www.linkedin.com/company/cta-voyages"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn CTA Voyages"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19,3a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19M18.5,18.5V13.2A3.26,3.26,0,0,0,15.24,9.94C13.93,9.94,13,10.63,12.6,11.47V10.11H9.05V18.5H12.6V12.93c0-.81.62-1.46,1.39-1.46s1.41.65,1.41,1.46V18.5H18.5M6.76,8.66A1.55,1.55,0,0,0,8.3,7.11,1.53,1.53,0,0,0,6.76,5.58,1.57,1.57,0,0,0,5.21,7.11,1.56,1.56,0,0,0,6.76,8.66M8.53,18.5V10.11H5V18.5H8.53Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-h1 text-[14px] font-bold uppercase tracking-wide text-white mb-4 sm:mb-6">
              Nos offres
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/sejours">Séjours</Link></li>
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/circuits">Circuits</Link></li>
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/croisieres">Croisières</Link></li>
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/glamping">Glamping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-h1 text-[14px] font-bold uppercase tracking-wide text-white mb-4 sm:mb-6 invisible hidden lg:block">.</h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/voyage-sur-mesure">Voyages sur mesure</Link></li>
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/catalogue-sportif">Catalogue sportif</Link></li>
              <li>
                <Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors flex items-center gap-2" href="/destinations">
                  Destinations <span className="material-symbols-outlined text-sm">map</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-h1 text-[14px] font-bold uppercase tracking-wide text-white mb-4 sm:mb-6">
              À propos
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/equipe">L&apos;équipe CTA Voyages</Link></li>
              <li><Link className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="/engagements-rse">Notre engagement RSE</Link></li>
              <li><a className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="https://sop-events.fr/" target="_blank" rel="noopener noreferrer">SOP Events</a></li>
              <li><a className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="https://ctabusinesstravel.com/" target="_blank" rel="noopener noreferrer">CTA Business Travel</a></li>
              <li><a className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors" href="https://ctameetingevents.fr/" target="_blank" rel="noopener noreferrer">CTA Meeting &amp; Events</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-h1 text-[14px] font-bold uppercase tracking-wide text-white mb-4 sm:mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors flex items-start gap-3" href="https://www.google.com/maps/place/99+Rue+de+Fenouillet,+31200+Toulouse" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-sm mt-1 flex-shrink-0">location_on</span>
                <span>99 rue de Fenouillet, 31200 Toulouse</span>
              </a>
              <a className="font-body-md text-[14px] text-white/80 hover:text-[#FBBF12] transition-colors flex items-start gap-3" href="mailto:voyages@cta-events.com">
                <span className="material-symbols-outlined text-sm mt-1 flex-shrink-0">mail</span>
                <span>voyages@cta-events.com</span>
              </a>
              <p className="font-body-md text-[14px] text-white/80 flex items-start gap-3">
                <span className="material-symbols-outlined text-sm mt-1 flex-shrink-0">call</span>
                <span>+33 (0)5 34 391 391</span>
              </p>
              <p className="font-body-md text-[14px] text-white/80 flex items-start gap-3">
                <span className="material-symbols-outlined text-sm mt-1 flex-shrink-0">calendar_today</span>
                <span>Lun–Jeu : 9h-18h · Ven : 9h-17h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="font-body-md text-[12px] sm:text-[13px] text-white/60">
            © 2026 CTA Voyages — Groupe CTA
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link className="font-body-md text-[12px] sm:text-[13px] text-white/60 hover:text-[#FBBF12] transition-colors" href="/plan-du-site">Plan du site</Link>
            <Link className="font-body-md text-[12px] sm:text-[13px] text-white/60 hover:text-[#FBBF12] transition-colors" href="/mentions-legales">Mentions légales</Link>
            <Link className="font-body-md text-[12px] sm:text-[13px] text-white/60 hover:text-[#FBBF12] transition-colors" href="/confidentialite">Politique de confidentialité</Link>
            <Link className="font-body-md text-[12px] sm:text-[13px] text-white/60 hover:text-[#FBBF12] transition-colors" href="/cookies">Politique de cookies</Link>
          </div>
        </div>
      </div>
      <FooterCredit />
    </footer>
  );
}
