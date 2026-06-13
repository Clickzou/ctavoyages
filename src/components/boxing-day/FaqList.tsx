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
    question: <>C&apos;est quoi exactement le Boxing Day&nbsp;?</>,
    answer: (
      <p>
        C&apos;est une tradition britannique célébrée le 26 décembre. En
        football, c&apos;est une journée complète de championnat où tous les
        clubs de Premier League jouent, offrant un spectacle permanent aux fans.
      </p>
    ),
  },
  {
    question: <>Où se déroulent les matchs&nbsp;?</>,
    answer: (
      <p>
        Partout au Royaume-Uni. Nos packs se concentrent sur les villes majeures
        : Londres (Chelsea, Arsenal, Tottenham), Manchester (United, City) et
        Liverpool.
      </p>
    ),
  },
  {
    question: (
      <>Quels sont les jours exacts des matchs du Boxing Day&nbsp;?</>
    ),
    answer: (
      <p>
        Le Boxing Day lui-même tombe traditionnellement le{" "}
        <strong>26 décembre</strong>. Cependant, la période des fêtes en Premier
        League est très dense : des matchs sont également joués autour du 28-29
        décembre, et le 1er ou 2 janvier. Nous pouvons organiser votre séjour
        pour assister à plusieurs de ces rencontres.
      </p>
    ),
  },
  {
    question: (
      <>Les transports publics fonctionnent-ils le 26 décembre&nbsp;?</>
    ),
    answer: (
      <p>
        C&apos;est un point de logistique important : le 26 décembre, les
        transports publics (métro, trains) tournent souvent au ralenti ou sont
        interrompus. C&apos;est pourquoi{" "}
        <strong>nos packs incluent des hôtels stratégiquement situés</strong> ou
        des transferts privés pour vous garantir un accès facile au stade sans
        stress.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Les packs sont-ils adaptés aux enfants&nbsp;?</>,
    answer: (
      <p>
        Oui, le Boxing Day est une fête familiale par excellence en Angleterre.
        L&apos;ambiance est très conviviale et sécurisée pour les jeunes
        supporters.
      </p>
    ),
  },
  {
    question: <>Quand faut-il réserver son pack&nbsp;?</>,
    answer: (
      <p>
        Idéalement dès la sortie du calendrier en juin ou durant l&apos;été. Les
        disponibilités hôtelières et les billets pour les grandes affiches
        s&apos;épuisent très vite en fin d&apos;année.
      </p>
    ),
  },
  {
    question: (
      <>
        Peut-on combiner un match de Boxing Day avec le réveillon du Nouvel
        An&nbsp;?
      </>
    ),
    answer: (
      <p>
        Oui, absolument ! Beaucoup de nos clients choisissent de prolonger leur
        séjour pour passer le réveillon à Londres ou Manchester, et profitent
        souvent d&apos;un second match organisé les 1er ou 2 janvier. Votre
        conseiller construira un itinéraire sur mesure.
      </p>
    ),
  },
  {
    question: (
      <>Quelles autres activités proposez-vous pendant cette période&nbsp;?</>
    ),
    answer: (
      <p>
        En plus du football, nous pouvons inclure dans votre pack des billets
        pour : <strong>Winter Wonderland</strong> à Hyde Park, une visite des{" "}
        <strong>studios Harry Potter</strong> décorés pour Noël, une croisière
        sur la Tamise, ou des réservations dans les meilleurs pubs et
        restaurants pour vos soirées festives.
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
