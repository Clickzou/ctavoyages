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
    <div className="faq-item">
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
      <div className="faq-answer" ref={answerRef} style={{ maxHeight }}>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">{entry.answer}</div>
      </div>
    </div>
  );
}

const LEFT: FaqEntry[] = [
  {
    question: <>Qu&rsquo;est-ce que la démarche RSE du Groupe CTA&nbsp;?</>,
    answer: (
      <p>
        Elle vise à concilier performance économique, respect de l&rsquo;humain
        et préservation de la planète dans nos activités de voyage, d&rsquo;
        événementiel et de mobilité professionnelle.
      </p>
    ),
  },
  {
    question: <>Sur quels référentiels s&rsquo;appuie-t-elle&nbsp;?</>,
    answer: (
      <p>
        Notre démarche s&rsquo;inspire notamment de la norme ISO 26000, des
        Objectifs de Développement Durable, du Pacte Mondial des Nations Unies,
        de l&rsquo;OIT, de l&rsquo;OCDE et du RGPD.
      </p>
    ),
  },
  {
    question: (
      <>
        Comment réduisez-vous l&rsquo;impact environnemental des
        événements&nbsp;?
      </>
    ),
    answer: (
      <p>
        Nous travaillons sur la mobilité, la sélection de prestataires
        responsables, la réduction des impressions, la gestion des déchets, les
        circuits courts et la saisonnalité.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Quels engagements sociaux sont portés par le Groupe CTA&nbsp;?</>
    ),
    answer: (
      <p>
        Nous défendons l&rsquo;égalité professionnelle, la stabilité de
        l&rsquo;emploi, la qualité de vie au travail, la formation continue, la
        santé et la sécurité de nos collaborateurs.
      </p>
    ),
  },
  {
    question: <>Pourquoi parlez-vous d&rsquo;achats responsables&nbsp;?</>,
    answer: (
      <p>
        Parce que nos choix de fournisseurs, de lieux, d&rsquo;hébergements et de
        prestataires influencent directement l&rsquo;impact global de nos voyages
        et événements.
      </p>
    ),
  },
  {
    question: <>Où consulter vos documents RSE&nbsp;?</>,
    answer: (
      <p>
        Les documents sont disponibles dans la section dédiée de cette page :
        charte RSE et charte des entreprises engagées contre le cancer.
      </p>
    ),
  },
];

export default function RseFaq() {
  // Une seule réponse ouverte à la fois (comportement du script d'origine).
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
