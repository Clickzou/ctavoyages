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
    question: <>Quels Grands Prix MotoGP proposez-vous&nbsp;?</>,
    answer: (
      <>
        <p>Nous proposons actuellement trois des plus beaux Grands Prix de la saison&nbsp;:</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="two_wheeler" />
            <strong>Catalogne (Barcelone)</strong> — ambiance méditerranéenne
          </li>
          <li>
            <Icon name="two_wheeler" />
            <strong>Mugello (Italie)</strong> — tracé mythique en Toscane
          </li>
          <li>
            <Icon name="two_wheeler" />
            <strong>Valence (Espagne)</strong> — la grande finale de la saison
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Que comprend un forfait MotoGP&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          <strong>Billets officiels</strong> pour les qualifications et la course
        </li>
        <li>
          <Icon name="check" />
          <strong>Hôtel 3 ou 4 étoiles</strong> avec petits-déjeuners
        </li>
        <li>
          <Icon name="check" />
          Options de <strong>transferts</strong> et transports
        </li>
        <li>
          <Icon name="check" />
          Options <strong>VIP Village</strong> pour une expérience haut de gamme
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>
        Quelle est la différence entre un billet classique et l&apos;accès VIP
        Village&nbsp;?
      </>
    ),
    answer: (
      <p>
        Le billet classique vous donne accès à votre place en tribune. Le{" "}
        <strong>VIP Village</strong> est l&apos;offre hospitalité officielle la
        plus exclusive&nbsp;: il inclut une vue privilégiée sur la ligne de
        départ/arrivée, un accès au paddock à des horaires précis, un service de
        restauration gourmet (petit-déjeuner, déjeuner buffet, open bar) et des
        écrans géants pour ne rien manquer de la course.
      </p>
    ),
  },
  {
    question: <>Peut-on rencontrer les pilotes ou accéder aux stands&nbsp;?</>,
    answer: (
      <p>
        L&apos;accès direct aux stands (Pit Lane) est généralement réservé aux
        détenteurs de pass VIP lors de sessions spécifiques (Pit Lane Walk).
        Cependant, nous pouvons organiser des options incluant des{" "}
        <strong>visites de paddocks</strong> ou des rencontres exclusives selon
        les disponibilités de nos partenaires et des écuries.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>
        Quels sont les Grands Prix les plus impressionnants à vivre en
        tribune&nbsp;?
      </>
    ),
    answer: (
      <p>
        Le <strong>Mugello</strong> est célèbre pour son ambiance électrique au
        milieu des collines toscanes. Le GP de <strong>Catalogne</strong> offre
        souvent des duels mémorables sur une piste très technique. Enfin,{" "}
        <strong>Valence</strong> est incontournable car c&apos;est la finale de la
        saison&nbsp;: la tension et la fête y sont à leur comble.
      </p>
    ),
  },
  {
    question: <>Comment se passe le transport vers les circuits&nbsp;?</>,
    answer: (
      <p>
        Pour vous éviter les contraintes de stationnement et d&apos;embouteillages,
        nous proposons dans nos packs des{" "}
        <strong>navettes privées ou collectives</strong> dédiées depuis votre
        hôtel jusqu&apos;à l&apos;entrée du circuit. Nous pouvons également
        organiser la location d&apos;un véhicule si vous préférez être autonome.
      </p>
    ),
  },
  {
    question: <>Où se trouvent les hôtels&nbsp;?</>,
    answer: (
      <p>
        Selon vos envies et la disponibilité, nous proposons des hôtels soit{" "}
        <strong>à proximité immédiate du circuit</strong> pour faciliter la
        logistique, soit en <strong>centre-ville</strong> (Barcelone, Valence,
        Florence) pour profiter de l&apos;animation, de la gastronomie et de la
        vie nocturne.
      </p>
    ),
  },
  {
    question: <>Proposez-vous des options VIP pour les séjours MotoGP&nbsp;?</>,
    answer: (
      <p>
        Oui, vous pouvez bénéficier d&apos;un placement premium via le{" "}
        <strong>VIP Village</strong> pour vivre le Grand Prix dans des conditions
        exceptionnelles&nbsp;: espaces lounge, restauration haut de gamme, vue
        imprenable sur la piste et accès privilégiés.
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
