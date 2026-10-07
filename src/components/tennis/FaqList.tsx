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

const Icon = ({ name }: { name: string }) => (
  <span className="material-symbols-outlined">{name}</span>
);

const LEFT: FaqEntry[] = [
  {
    question: <>Quels tournois de tennis proposez-vous&nbsp;?</>,
    answer: (
      <>
        <p>Pour la saison 2027, nous proposons quatre grands tournois&nbsp;:</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="sports_tennis" />
            <strong>Monte-Carlo</strong> : le Masters 1000 sur terre battue, en avril
          </li>
          <li>
            <Icon name="sports_tennis" />
            <strong>Madrid</strong> : le Masters 1000 de la Caja Mágica, au printemps
          </li>
          <li>
            <Icon name="sports_tennis" />
            <strong>Rome</strong> : les Internationaux d&apos;Italie au Foro Italico, en mai
          </li>
          <li>
            <Icon name="sports_tennis" />
            <strong>Wimbledon</strong> : le Grand Chelem sur gazon, à Londres, en été
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Que comprend un séjour tennis&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          Les <strong>billets</strong>{" "}pour le tournoi choisi
        </li>
        <li>
          <Icon name="check" />
          L&apos;<strong>hébergement à l&apos;hôtel</strong>
        </li>
        <li>
          <Icon name="check" />
          Sur demande, le <strong>trajet depuis Toulouse</strong>{" "}(avion ou
          train) organisé par votre conseiller
        </li>
      </ul>
    ),
  },
  {
    question: <>Quand réserver un séjour pour un grand tournoi&nbsp;?</>,
    answer: (
      <p>
        Le plus tôt possible. Les places pour les tournois les plus courus,{" "}
        <strong>Wimbledon</strong>{" "}en tête, partent très vite, et les hôtels
        proches des sites aussi. Contactez-nous plusieurs mois à l&apos;avance
        pour garder le choix des dates.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Peut-on choisir son jour de tournoi&nbsp;?</>,
    answer: (
      <p>
        Oui. Indiquez-nous si vous préférez les premiers tours, où l&apos;on
        voit le plus de joueurs, ou les derniers jours, quand les meilleurs
        s&apos;affrontent. Votre conseiller vous indique les journées disponibles
        dans votre devis.
      </p>
    ),
  },
  {
    question: <>Partez-vous de Toulouse&nbsp;?</>,
    answer: (
      <p>
        CTA Voyages est installée à Toulouse. Votre conseiller peut organiser le
        trajet vers Monte-Carlo, Madrid, Rome ou Londres et caler les horaires
        sur ceux du tournoi.
      </p>
    ),
  },
  {
    question: <>Le devis est-il gratuit&nbsp;?</>,
    answer: (
      <p>
        Oui. Le devis est <strong>gratuit et sans engagement</strong>, et nous
        ne facturons <strong>aucuns frais de dossier</strong>. Un conseiller
        prend contact avec vous sous 48h.
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
