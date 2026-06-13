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
    question: <>Quel match aura lieu à Madrid en 2026&nbsp;?</>,
    answer: (
      <p>
        Le match <strong>Atlanta Falcons vs Cincinnati Bengals</strong>,
        rencontre officielle de saison régulière NFL, se jouera le{" "}
        <strong>dimanche 8 novembre 2026</strong> au stade Santiago Bernabéu de
        Madrid, récemment rénové et capable d&apos;accueillir plus de 80 000
        spectateurs.
      </p>
    ),
  },
  {
    question: <>Que comprend un pack NFL Madrid Game&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>1 ou 2 nuits d&apos;hôtel</strong> 3 ou 4 étoiles à Madrid avec
          petits-déjeuners
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Billet officiel</strong> pour le match Falcons vs Bengals au
          Santiago Bernabéu
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Option vol A/R</strong> depuis Paris et transferts sur demande
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>
          <strong>Assistance locale</strong> francophone et organisation clé en
          main
        </li>
      </ul>
    ),
  },
  {
    question: <>Où se déroule le match&nbsp;?</>,
    answer: (
      <p>
        Au <strong>stade Santiago Bernabéu</strong> de Madrid, récemment rénové
        et équipé pour accueillir les plus grands événements sportifs mondiaux.
        Avec plus de 80 000 places, c&apos;est l&apos;un des stades les plus
        emblématiques d&apos;Europe — un cadre exceptionnel pour vivre la NFL.
      </p>
    ),
  },
  {
    question: <>Pourquoi c&apos;est un événement exceptionnel&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <span className="material-symbols-outlined">check</span>Un match de{" "}
          <strong>saison régulière officielle</strong> — pas un match
          d&apos;exhibition
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Le{" "}
          <strong>Santiago Bernabéu</strong> accueille pour la première fois la
          NFL
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Une{" "}
          <strong>ambiance internationale</strong> unique mêlant fans américains
          et supporters européens
        </li>
        <li>
          <span className="material-symbols-outlined">check</span>Madrid :{" "}
          <strong>tapas, culture et art de vivre</strong> pour enrichir
          l&apos;expérience
        </li>
      </ul>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Proposez-vous des séjours pour les groupes ou entreprises&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nos équipes créent des formules sur mesure pour les{" "}
        <strong>groupes</strong>, les <strong>incentives</strong> ou les{" "}
        <strong>voyages clients</strong> autour du NFL Madrid Game. Billets
        groupes, hébergement privatisé, animations et logistique complète — nous
        gérons tout.
      </p>
    ),
  },
  {
    question: <>Peut-on profiter de Madrid en plus du match&nbsp;?</>,
    answer: (
      <>
        <p>Absolument. Nous proposons des extensions pour découvrir Madrid :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <span className="material-symbols-outlined">location_on</span>Musée du
            Prado, Reina Sofia, Parc del Retiro
          </li>
          <li>
            <span className="material-symbols-outlined">location_on</span>Tapas,
            gastronomie et bars à vins dans le quartier de La Latina
          </li>
          <li>
            <span className="material-symbols-outlined">location_on</span>Visite du
            Santiago Bernabéu (musée et stade)
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Quand réserver pour le NFL Madrid Game&nbsp;?</>,
    answer: (
      <p>
        Le plus tôt possible. Les billets pour cet événement unique partent très
        rapidement et les hôtels à Madrid se remplissent vite autour du match.
        Nous vous conseillons de réserver{" "}
        <strong>plusieurs mois à l&apos;avance</strong> pour garantir les
        meilleures options.
      </p>
    ),
  },
  {
    question: <>Comment demander un devis&nbsp;?</>,
    answer: (
      <p>
        Cliquez sur «&nbsp;Réserver mon pack NFL&nbsp;» ou contactez-nous par
        téléphone ou email. Nos conseillers spécialisés prennent contact avec
        vous <strong>sous 48h</strong>,{" "}
        <strong>gratuitement et sans engagement</strong>.
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
