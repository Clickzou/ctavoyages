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
    question: <>Quels événements rugby proposez-vous&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">check</span>Les finales de la{" "}
          <strong>Champions Cup</strong> et de la <strong>Challenge Cup</strong>
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Les matchs du{" "}
          <strong>Tournoi des 6 Nations</strong>
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Les rencontres du XV
          de France lors de la <strong>Quilter Nations Series</strong>
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Des matchs amicaux et
          événements rugby tout au long de la saison
        </li>
      </ul>
    ),
  },
  {
    question: <>Que comprend un pack rugby&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Billets officiels</strong> pour les plus grands matchs
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Hébergement</strong> en hôtel 3 ou 4 étoiles avec petits-déjeuners
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Transferts</strong> aéroport-hôtel-stade selon la formule choisie
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Options sur mesure</strong> : repas d&apos;avant-match, soirées
          festives, visites culturelles
        </li>
      </ul>
    ),
  },
  {
    question: <>Où se déroulent les séjours proposés&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">location_on</span>
          <strong>Paris</strong> — Stade de France
        </li>
        <li>
          <span className="material-symbols-outlined">location_on</span>
          <strong>Dublin</strong> — Aviva Stadium
        </li>
        <li>
          <span className="material-symbols-outlined">location_on</span>
          <strong>Cardiff</strong> — Principality Stadium
        </li>
        <li>
          <span className="material-symbols-outlined">location_on</span>
          <strong>Édimbourg</strong> — Murrayfield
        </li>
        <li>
          <span className="material-symbols-outlined">location_on</span>
          <strong>Bilbao</strong> — San Mamés (finales 2026)
        </li>
      </ul>
    ),
  },
  {
    question: <>Pourquoi choisir un séjour rugby&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">check</span>Assister aux plus
          grands matchs européens et internationaux
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Profiter d&apos;offres
          clés en main avec billets, hôtel et transferts
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Découvrir des villes
          emblématiques du rugby : Paris, Dublin, Cardiff
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Allier sport et culture
          dans des voyages conviviaux
        </li>
      </ul>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Quand réserver pour assister à un grand match de rugby&nbsp;?</>
    ),
    answer: (
      <p>
        Le plus tôt possible. Les événements comme le{" "}
        <strong>Tournoi des 6 Nations</strong> ou les{" "}
        <strong>finales de Champions Cup</strong> affichent complet très rapidement.
        Nous vous recommandons de nous contacter plusieurs mois à l&apos;avance pour
        garantir la disponibilité des billets et des hôtels.
      </p>
    ),
  },
  {
    question: <>Proposez-vous différentes catégories de billets&nbsp;?</>,
    answer: (
      <p>
        Oui. Selon l&apos;événement, nous proposons plusieurs catégories de billets afin
        d&apos;adapter l&apos;expérience à vos envies et à votre budget — des places en
        tribune aux options hospitalité et VIP.
      </p>
    ),
  },
  {
    question: (
      <>Proposez-vous des séjours pour les groupes ou entreprises&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous créons des formules sur mesure pour les voyages clients, les
        incentives, les team buildings ou les groupes d&apos;amis. Billets groupes,
        animations, repas d&apos;avant-match — nous gérons tout.
      </p>
    ),
  },
  {
    question: <>Comment demander un devis pour un séjour rugby&nbsp;?</>,
    answer: (
      <p>
        Cliquez sur &quot;Demander un devis gratuit&quot; en bas de cette page ou
        contactez-nous par téléphone ou email. Nos conseillers spécialisés prennent
        contact avec vous <strong>sous 48h</strong> pour composer votre pack rugby sur
        mesure, <strong>gratuitement et sans engagement</strong>.
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
