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
    question: <>Quelles étapes du Tour de France 2027 proposez-vous&nbsp;?</>,
    answer: (
      <>
        <p>
          Le Tour 2027 part d&apos;Édimbourg, pour la première fois en Écosse.
          Nous proposons les trois premières étapes, au Royaume-Uni&nbsp;:
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="directions_bike" />
            <strong>Étape 1, vendredi 2 juillet</strong> : Édimbourg → Carlisle,
            au Village Départ
          </li>
          <li>
            <Icon name="directions_bike" />
            <strong>Étape 2, samedi 3 juillet</strong> : Keswick → Liverpool, en
            espace VIP à l&apos;arrivée
          </li>
          <li>
            <Icon name="directions_bike" />
            <strong>Étape 3, dimanche 4 juillet</strong> : Welshpool → Cardiff,
            en espace VIP à l&apos;arrivée
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Que comprend l&apos;accès au Village Départ&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          L&apos;accès au Village pendant <strong>3 heures avant le départ</strong>
        </li>
        <li>
          <Icon name="check" />
          Une vue privilégiée sur la <strong>signature des coureurs</strong>, au
          pied du podium
        </li>
        <li>
          <Icon name="check" />
          Restauration et boissons dans un espace de réception
        </li>
        <li>
          <Icon name="check" />
          L&apos;accès au paddock et la présence d&apos;anciens coureurs
          professionnels
        </li>
      </ul>
    ),
  },
  {
    question: <>Que comprend l&apos;espace VIP à l&apos;arrivée&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          Un espace invités <strong>à quelques mètres de la ligne d&apos;arrivée</strong>,
          ouvert dès 3 heures avant le départ de la course
        </li>
        <li>
          <Icon name="check" />
          Restauration et boissons tout l&apos;après-midi
        </li>
        <li>
          <Icon name="check" />
          La course en direct sur écran géant et la vue sur l&apos;arrivée des
          coureurs
        </li>
      </ul>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Et les étapes suivantes&nbsp;?</>,
    answer: (
      <p>
        Le reste du parcours 2027 n&apos;est pas encore connu. Inscrivez-vous à
        notre newsletter ou contactez-nous&nbsp;: nous vous prévenons dès que
        de nouvelles étapes sont proposées.
      </p>
    ),
  },
  {
    question: <>Organisez-vous le voyage jusqu&apos;au Royaume-Uni&nbsp;?</>,
    answer: (
      <p>
        Sur demande, votre conseiller compose le voyage autour de l&apos;étape
        choisie&nbsp;: trajet depuis Toulouse et hébergement. Pensez à votre
        passeport&nbsp;: il est nécessaire pour entrer au Royaume-Uni, comme
        l&apos;autorisation de voyage électronique (ETA).
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
