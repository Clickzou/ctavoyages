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

const Check = () => <span className="material-symbols-outlined">check</span>;

const LEFT: FaqEntry[] = [
  {
    question: <>Qu&apos;est-ce qu&apos;un circuit touristique&nbsp;?</>,
    answer: (
      <p>
        Un <strong>circuit</strong> est un voyage composé de plusieurs étapes,
        avec des déplacements successifs et un itinéraire organisé à l&apos;avance.
        Il permet de découvrir une destination dans sa diversité, en combinant
        plusieurs lieux, expériences et ambiances.
      </p>
    ),
  },
  {
    question: (
      <>
        Quelle différence entre un circuit individuel et un circuit
        accompagné&nbsp;?
      </>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-2 ml-1">
        <li>
          <Check />
          <span>
            <strong>Circuit individuel</strong> — plus de souplesse dans le
            rythme, tout en conservant une organisation structurée.
          </span>
        </li>
        <li>
          <Check />
          <span>
            <strong>Circuit accompagné</strong> — un guide ou accompagnateur vous
            suit sur tout ou partie du parcours.
          </span>
        </li>
      </ul>
    ),
  },
  {
    question: <>Proposez-vous des circuits en petit groupe&nbsp;?</>,
    answer: (
      <p>
        Oui. Nous pouvons organiser des <strong>circuits en petit groupe</strong>,
        idéals pour conjuguer convivialité, confort et découverte, sans la
        rigidité d&apos;un grand groupe.
      </p>
    ),
  },
  {
    question: <>Peut-on personnaliser un circuit&nbsp;?</>,
    answer: (
      <p>
        Oui. Nous pouvons adapter les étapes, les hébergements, la durée et le
        niveau de confort selon votre profil. C&apos;est tout l&apos;intérêt de
        passer par une agence qui vous conseille réellement.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Quelles sont vos destinations de circuits les plus demandées&nbsp;?</>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          <strong>Japon</strong> — entre Tokyo, Kyoto et les Alpes japonaises
        </li>
        <li>
          <Check />
          <strong>Canada</strong> — Rocheuses, lacs et grands espaces
        </li>
        <li>
          <Check />
          <strong>Costa Rica</strong> — volcans, jungle et biodiversité
        </li>
        <li>
          <Check />
          <strong>Thaïlande</strong> — temples, villes et littoral tropical
        </li>
        <li>
          <Check />
          <strong>Maroc</strong> et <strong>Laponie</strong> — deux univers
          forts, culturels ou nature
        </li>
      </ul>
    ),
  },
  {
    question: <>Comment demander un devis pour un circuit&nbsp;?</>,
    answer: (
      <p>
        C&apos;est simple : contactez-nous par téléphone, email ou via notre
        formulaire. Nos attachées clientèle prennent contact avec vous{" "}
        <strong>sous 48h</strong> pour préciser votre projet et affiner votre
        besoin, gratuitement et sans engagement.
      </p>
    ),
  },
  {
    question: <>Pourquoi passer par une agence pour organiser un circuit&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          Un <strong>itinéraire cohérent</strong> pensé dans les moindres détails
        </li>
        <li>
          <Check />
          Une <strong>logistique simplifiée</strong> : étapes, hébergements,
          transports et visites organisés
        </li>
        <li>
          <Check />
          Des <strong>tarifs négociés</strong> via le réseau TourCom
        </li>
        <li>
          <Check />
          Une <strong>assistance personnalisée</strong> avant, pendant et après
          votre voyage
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>Un circuit est-il adapté à un voyage en couple ou en famille&nbsp;?</>
    ),
    answer: (
      <p>
        Absolument. Un circuit peut être pensé pour un{" "}
        <strong>voyage en couple</strong>, avec des étapes romantiques et des
        hébergements de charme, ou pour un <strong>voyage en famille</strong>, avec
        un rythme plus souple et des activités adaptées aux enfants.
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
