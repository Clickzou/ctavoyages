"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FaqEntry = {
  question: ReactNode;
  answer: ReactNode;
};

function FaqItem({
  entry,
  isOpen,
  onToggle,
}: {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    setMaxHeight(isOpen ? `${el.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="faq-item border border-outline-variant rounded-xl overflow-hidden">
      <button
        className={`faq-toggle w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer${
          isOpen ? " faq-open" : ""
        }`}
        onClick={onToggle}
      >
        <span className="faq-question-text font-h3 text-[14px] sm:text-[16px] font-bold text-on-surface pr-4">
          {entry.question}
        </span>
        <span className="material-symbols-outlined text-primary faq-icon transition-transform duration-300 flex-shrink-0">
          expand_more
        </span>
      </button>
      <div className="faq-answer overflow-hidden" ref={answerRef} style={{ maxHeight }}>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">{entry.answer}</div>
      </div>
    </div>
  );
}

const LEFT: FaqEntry[] = [
  {
    question: <>Quels matchs NBA proposez-vous&nbsp;?</>,
    answer: (
      <>
        <p>Selon la programmation de la saison :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <span className="material-symbols-outlined">sports_basketball</span>
            <strong>New York</strong> — Knicks (Madison Square Garden), Nets
            (Barclays Center)
          </li>
          <li>
            <span className="material-symbols-outlined">sports_basketball</span>
            <strong>Los Angeles</strong> — Lakers, Clippers (Intuit Dome)
          </li>
          <li>
            <span className="material-symbols-outlined">check</span>
            Options multi-matchs disponibles (deux rencontres dans le même
            séjour)
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Que comprend le pack NBA&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Billets officiels</strong> pour le match NBA de votre choix
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Hôtel 4 étoiles</strong> avec petits-déjeuners inclus
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Vols aller-retour</strong> Paris – États-Unis
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Transferts</strong> aéroport-hôtel inclus
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Assistance spécialisée</strong> sur place
        </li>
      </ul>
    ),
  },
  {
    question: <>Peut-on assister à plusieurs matchs durant le séjour&nbsp;?</>,
    answer: (
      <p>
        Oui, des options <strong>multi-matchs</strong> sont tout à fait
        possibles. La NBA propose des rencontres quasi-quotidiennes, ce qui
        permet d&apos;assister à deux ou trois matchs lors d&apos;un même séjour
        d&apos;une semaine. Votre conseiller vous proposera les meilleures
        combinaisons selon le calendrier.
      </p>
    ),
  },
  {
    question: (
      <>Quelle est la meilleure période pour assister à un match NBA&nbsp;?</>
    ),
    answer: (
      <p>
        La saison régulière NBA se déroule d&apos;<strong>octobre à avril</strong>,
        avec des matchs pratiquement tous les jours. Les Playoffs se jouent
        d&apos;<strong>avril à juin</strong> pour les meilleures équipes. Nous
        vous conseillons de réserver tôt car les matchs à forte affiche (derbys,
        grandes équipes) se remplissent rapidement.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Peut-on voir les plus grandes stars de la NBA&nbsp;?</>,
    answer: (
      <>
        <p>Oui. Nos destinations permettent de voir :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <span className="material-symbols-outlined">sports_basketball</span>
            <strong>LeBron James</strong> avec les Lakers à Los Angeles
          </li>
          <li>
            <span className="material-symbols-outlined">sports_basketball</span>
            <strong>Luka Dončić</strong> avec les Lakers à Los Angeles
          </li>
          <li>
            <span className="material-symbols-outlined">sports_basketball</span>
            <strong>Victor Wembanyama</strong> si les Spurs jouent à New York ou
            LA
          </li>
          <li>
            <span className="material-symbols-outlined">sports_basketball</span>
            Et bien d&apos;autres selon le calendrier de la saison
          </li>
        </ul>
      </>
    ),
  },
  {
    question: (
      <>Proposez-vous des séjours NBA pour les groupes ou entreprises&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous créons des formules sur mesure pour les{" "}
        <strong>voyages clients</strong>, les <strong>incentives</strong>, les{" "}
        <strong>team buildings</strong> ou les groupes d&apos;amis. Billets
        groupes, suites VIP, logistique complète — nous gérons tout pour une
        expérience NBA inoubliable.
      </p>
    ),
  },
  {
    question: <>Peut-on découvrir la ville en plus du match&nbsp;?</>,
    answer: (
      <>
        <p>Absolument. Nous pouvons enrichir votre séjour avec :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <span className="material-symbols-outlined">location_on</span>
            <strong>New York</strong> — Times Square, Central Park, Empire State
            Building, Brooklyn Bridge
          </li>
          <li>
            <span className="material-symbols-outlined">location_on</span>
            <strong>Los Angeles</strong> — Venice Beach, Hollywood, Griffith
            Observatory, Santa Monica
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Comment demander un devis pour un séjour NBA&nbsp;?</>,
    answer: (
      <p>
        Cliquez sur &laquo;&nbsp;Demander un devis gratuit&nbsp;&raquo; ou
        contactez-nous par téléphone ou email. Nos conseillers spécialisés
        prennent contact avec vous <strong>sous 48h</strong> pour composer votre
        séjour NBA sur mesure, <strong>gratuitement et sans engagement</strong>.
      </p>
    ),
  },
];

export default function FaqList() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const renderColumn = (entries: FaqEntry[], prefix: string) => (
    <div className="flex-1 flex flex-col gap-4">
      {entries.map((entry, i) => {
        const key = `${prefix}-${i}`;
        return (
          <FaqItem
            key={key}
            entry={entry}
            isOpen={openKey === key}
            onToggle={() => setOpenKey((cur) => (cur === key ? null : key))}
          />
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-5">
      {renderColumn(LEFT, "left")}
      {renderColumn(RIGHT, "right")}
    </div>
  );
}
