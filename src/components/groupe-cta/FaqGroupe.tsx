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
    question: (
      <>
        Quelle entité contacter pour un séminaire ou une soirée
        d&apos;entreprise&nbsp;?
      </>
    ),
    answer: (
      <p>
        SOP Events est l&apos;interlocuteur privilégié pour concevoir des
        événements fédérateurs : séminaires, soirées, team buildings, incentives,
        animations, lieux, restauration et technique.
      </p>
    ),
  },
  {
    question: <>Qui gère les déplacements professionnels récurrents&nbsp;?</>,
    answer: (
      <p>
        CTA Business Travel accompagne les entreprises dans la réservation,
        l&apos;optimisation budgétaire, la politique voyages, les tarifs négociés,
        le reporting et l&apos;assistance 24/7.
      </p>
    ),
  },
  {
    question: (
      <>Quelle différence entre SOP Events et CTA Meeting &amp; Events&nbsp;?</>
    ),
    answer: (
      <p>
        SOP Events est orienté création d&apos;expériences et événements
        d&apos;entreprise. CTA Meeting &amp; Events pilote les dispositifs MICE
        plus structurés : inscriptions, plateformes, participants, hôtels, lieux,
        transport, paiements et assistance sur site.
      </p>
    ),
  },
  {
    question: <>Le Groupe CTA peut-il coordonner voyage et événement&nbsp;?</>,
    answer: (
      <p>
        Oui. Les entités travaillent en synergie pour coordonner hébergement,
        transport, inscription, événementiel, activités, restauration et
        assistance selon le niveau de complexité du projet.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>
        Proposez-vous des solutions pour des événements à l&apos;international&nbsp;?
      </>
    ),
    answer: (
      <p>
        Oui. SOP Events et CTA Meeting &amp; Events interviennent en France et à
        l&apos;étranger, avec une gestion adaptée des lieux, hébergements,
        transports, participants et prestataires.
      </p>
    ),
  },
  {
    question: (
      <>
        Pouvez-vous créer un site ou une application pour mon événement&nbsp;?
      </>
    ),
    answer: (
      <p>
        Oui. CTA Meeting &amp; Events peut mettre en place un site événementiel,
        une application mobile dédiée, des formulaires d&apos;inscription, des QR
        codes, des badges nominatifs et des reportings réguliers.
      </p>
    ),
  },
  {
    question: <>Le Groupe CTA accompagne-t-il les démarches RSE&nbsp;?</>,
    answer: (
      <p>
        Oui. Le Groupe CTA inscrit ses activités dans une démarche responsable,
        notamment avec des reportings carbone pour les mobilités et une approche
        alignée sur des critères sociaux, éthiques et environnementaux.
      </p>
    ),
  },
  {
    question: <>Je ne sais pas quelle entité contacter : que faire&nbsp;?</>,
    answer: (
      <p>
        Vous pouvez passer par le formulaire de renseignement CTA Voyages. Votre
        demande sera orientée vers le bon interlocuteur selon votre besoin :
        voyage, événement, déplacement professionnel ou projet MICE.
      </p>
    ),
  },
];

export default function FaqGroupe() {
  // Une seule réponse ouverte à la fois sur toute la grille.
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
