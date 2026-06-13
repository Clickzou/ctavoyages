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
    question: <>Quels Grands Prix proposez-vous&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="speed" />
          <strong>Barcelone</strong> — Grand Prix de Catalogne
        </li>
        <li>
          <Icon name="speed" />
          <strong>Monaco</strong> — Grand Prix mythique dans les rues de
          Monte-Carlo
        </li>
        <li>
          <Icon name="speed" />
          <strong>Monza</strong> — temple de la vitesse en Italie
        </li>
        <li>
          <Icon name="speed" />
          <strong>Spa-Francorchamps</strong> — l&apos;un des circuits préférés
          des pilotes
        </li>
        <li>
          <Icon name="speed" />
          <strong>Montréal</strong> — Grand Prix du Canada
        </li>
        <li>
          <Icon name="speed" />
          <strong>Lusail</strong> — Grand Prix du Qatar
        </li>
        <li>
          <Icon name="speed" />
          <strong>Abu Dhabi</strong> — finale spectaculaire de saison à Yas
          Marina
        </li>
        <li>
          <Icon name="speed" />
          <strong>Madrid</strong> — nouveau Grand Prix en ville dès 2026
        </li>
      </ul>
    ),
  },
  {
    question: <>Que comprend un pack Formule 1&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          <strong>Billets officiels</strong> — admission générale, tribunes ou
          hospitalité VIP
        </li>
        <li>
          <Icon name="check" />
          <strong>Hôtel</strong> 3, 4 ou 5 étoiles avec petits-déjeuners inclus
        </li>
        <li>
          <Icon name="check" />
          <strong>Transferts</strong> hôtel-circuit et options aéroport
        </li>
        <li>
          <Icon name="check" />
          <strong>Expériences exclusives</strong> — visites guidées, excursions
          culturelles, croisières, dîners thématiques
        </li>
      </ul>
    ),
  },
  {
    question: <>Peut-on réserver uniquement pour le jour de course&nbsp;?</>,
    answer: (
      <p>
        Oui. Nous proposons des formules <strong>1 jour</strong>,{" "}
        <strong>2 jours</strong> ou <strong>week-end complet</strong> (essais +
        qualifications + course), selon vos envies et votre budget.
      </p>
    ),
  },
  {
    question: <>Pourquoi choisir un voyage F1&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          Vivre les <strong>courses les plus spectaculaires</strong> du
          championnat du monde
        </li>
        <li>
          <Icon name="check" />
          Choisir entre <strong>tribunes panoramiques</strong>, zones debout ou
          hospitalités VIP
        </li>
        <li>
          <Icon name="check" />
          Associer <strong>sport et tourisme</strong> dans des villes
          emblématiques du monde entier
        </li>
        <li>
          <Icon name="check" />
          Partager un séjour exceptionnel entre amis, collaborateurs ou clients
        </li>
      </ul>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Proposez-vous des options VIP pour les Grands Prix&nbsp;?</>,
    answer: (
      <p>
        Oui. Vous pouvez bénéficier d&apos;options <strong>hospitalité</strong>,{" "}
        <strong>salons privés</strong>,{" "}
        <strong>restauration haut de gamme</strong> ou de places premium en
        tribunes pour vivre le Grand Prix dans des conditions d&apos;exception.
      </p>
    ),
  },
  {
    question: (
      <>
        Quelle est la meilleure destination pour une première expérience
        F1&nbsp;?
      </>
    ),
    answer: (
      <>
        <p>Tout dépend de votre profil :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1 mt-3">
          <li>
            <Icon name="flag" />
            <strong>Monaco</strong> pour le prestige et le glamour
          </li>
          <li>
            <Icon name="flag" />
            <strong>Barcelone</strong> pour l&apos;accessibilité et
            l&apos;ambiance
          </li>
          <li>
            <Icon name="flag" />
            <strong>Monza</strong> pour les tifosi et la passion italienne
          </li>
          <li>
            <Icon name="flag" />
            <strong>Abu Dhabi</strong> pour une finale de saison spectaculaire
          </li>
        </ul>
      </>
    ),
  },
  {
    question: (
      <>Proposez-vous des séjours F1 pour les entreprises ou groupes&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous organisons des formules sur mesure pour les{" "}
        <strong>voyages clients</strong>, les <strong>incentives</strong>, les{" "}
        <strong>team buildings</strong> ou les groupes d&apos;amis. Billets
        groupes, hospitalités, logistique complète — nous gérons tout.
      </p>
    ),
  },
  {
    question: <>Comment demander un devis pour un séjour Formule 1&nbsp;?</>,
    answer: (
      <p>
        Cliquez sur &quot;Demander un devis gratuit&quot; ou contactez-nous par
        téléphone ou email. Nos conseillers spécialisés prennent contact avec
        vous <strong>sous 48h</strong> pour composer votre pack F1 sur mesure,{" "}
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
