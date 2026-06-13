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
    question: <>Quelles destinations de voyage proposez-vous&nbsp;?</>,
    answer: (
      <>
        <p>
          Nous proposons <strong>13 destinations de voyage</strong> :
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="check" />
            <strong>Asie</strong> : Japon, Thaïlande
          </li>
          <li>
            <Icon name="check" />
            <strong>Afrique et Océan Indien</strong> : Maroc, Île Maurice,
            Seychelles, Zanzibar
          </li>
          <li>
            <Icon name="check" />
            <strong>Amériques</strong> : Canada, Costa Rica
          </li>
          <li>
            <Icon name="check" />
            <strong>Europe</strong> : Laponie, Londres, Amsterdam, Porto, Rome
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Quels événements sportifs proposez-vous&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="sports_soccer" />
          <strong>Football</strong> : Premier League, Liga, Serie A, Bundesliga,
          Boxing Day
        </li>
        <li>
          <Icon name="sports_rugby" />
          <strong>Rugby</strong> : 6 Nations, Champions Cup (Angleterre, France,
          Irlande, Écosse, Pays de Galles, Italie)
        </li>
        <li>
          <Icon name="sports_basketball" />
          <strong>NBA</strong> : New York, Los Angeles
        </li>
        <li>
          <Icon name="sports_football" />
          <strong>NFL</strong> : Madrid Game 2026
        </li>
        <li>
          <Icon name="speed" />
          <strong>Formule 1</strong> : Monaco, Espagne, Italie, Belgique, Canada,
          Qatar, Abu Dhabi
        </li>
        <li>
          <Icon name="two_wheeler" />
          <strong>Moto GP</strong> : Espagne, Italie
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>Peut-on personnaliser un voyage vers l&apos;une de ces destinations&nbsp;?</>
    ),
    answer: (
      <p>
        Oui, absolument. Chaque destination est entièrement personnalisable :
        itinéraire, hébergements, activités, durée et budget. C&apos;est tout le
        principe de notre approche sur mesure.
      </p>
    ),
  },
  {
    question: <>Proposez-vous des escapades courtes en Europe&nbsp;?</>,
    answer: (
      <p>
        Oui. Nous organisons des <strong>escapades de 2 à 5 nuits</strong> à
        Londres, Amsterdam, Porto et Rome. Idéal pour un week-end prolongé ou une
        escapade culturelle et gastronomique.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Que comprend un séjour sportif&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          L&apos;hébergement en hôtel soigneusement sélectionné
        </li>
        <li>
          <Icon name="check" />
          Les <strong>billets officiels</strong> pour l&apos;événement sportif
        </li>
        <li>
          <Icon name="check" />
          Des options sur mesure : transferts, repas, visites ou{" "}
          <strong>packs VIP</strong>
        </li>
      </ul>
    ),
  },
  {
    question: <>Proposez-vous des destinations hors catalogue&nbsp;?</>,
    answer: (
      <p>
        Oui. Grâce au réseau TourCom et à nos partenaires, nous pouvons organiser
        des voyages vers de nombreuses autres destinations dans le monde.{" "}
        <a href="/demande-renseignement" className="text-[#3179C4] underline">
          Contactez-nous
        </a>{" "}
        pour en discuter.
      </p>
    ),
  },
  {
    question: <>Comment demander un devis&nbsp;?</>,
    answer: (
      <>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="call" />
            Par téléphone : <strong>+33 (0)5 34 391 391</strong>
          </li>
          <li>
            <Icon name="mail" />
            Par email : <strong>voyages@cta-events.com</strong>
          </li>
          <li>
            <Icon name="description" />
            Via notre <strong>formulaire en ligne</strong>
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Nos attachées clientèle prennent contact sous <strong>48h</strong>,
          gratuitement et sans engagement.
        </p>
      </>
    ),
  },
  {
    question: <>Peut-on combiner plusieurs destinations&nbsp;?</>,
    answer: (
      <p>
        Oui. Nous pouvons combiner plusieurs étapes dans un même voyage : un
        circuit au Japon suivi d&apos;un séjour en Thaïlande, ou une escapade à
        Londres puis Amsterdam. Votre conseiller vous propose les meilleures
        combinaisons selon vos envies et votre budget.
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
