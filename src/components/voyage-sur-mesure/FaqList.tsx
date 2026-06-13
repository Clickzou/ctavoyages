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
    question: <>Qu&apos;est-ce qu&apos;un voyage sur mesure&nbsp;?</>,
    answer: (
      <p>
        Un <strong>voyage sur mesure</strong> est un voyage entièrement
        personnalisé : l&apos;itinéraire, les hébergements, les activités et le
        rythme sont conçus selon vos envies, avec l&apos;accompagnement d&apos;un
        conseiller expert. Contrairement à un voyage organisé, chaque détail est
        ajustable.
      </p>
    ),
  },
  {
    question: (
      <>Puis-je modifier mon itinéraire après la première proposition&nbsp;?</>
    ),
    answer: (
      <p>
        Oui, absolument. Nous ajustons autant de fois que nécessaire avant
        confirmation, <strong>sans frais supplémentaires</strong>. C&apos;est le
        principe même du sur mesure : votre voyage évolue jusqu&apos;à ce
        qu&apos;il vous corresponde parfaitement.
      </p>
    ),
  },
  {
    question: <>Organisez-vous des voyages sur mesure en famille&nbsp;?</>,
    answer: (
      <>
        <p>
          Oui. Nous adaptons le rythme aux enfants, sélectionnons des
          hébergements familiaux et proposons des activités pour tous les âges.
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            Destinations idéales :{" "}
            <strong>Thaïlande, Costa Rica, Maroc, Canada</strong>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Concevez-vous des voyages de noces sur mesure&nbsp;?</>,
    answer: (
      <>
        <p>
          Oui, c&apos;est l&apos;une de nos spécialités. Hébergements
          romantiques, expériences exclusives, petites attentions sur place.
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            Destinations phares :{" "}
            <strong>Seychelles, Île Maurice, Zanzibar, Japon</strong>
          </li>
        </ul>
      </>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Quelles sont vos destinations les plus demandées&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          <strong>Japon, Thaïlande, Maroc</strong>
        </li>
        <li>
          <Check />
          <strong>Île Maurice, Seychelles, Zanzibar</strong>
        </li>
        <li>
          <Check />
          <strong>Canada, Costa Rica, Laponie</strong>
        </li>
        <li>
          <Check />
          <strong>Londres, Amsterdam, Porto, Rome</strong>
        </li>
      </ul>
    ),
  },
  {
    question: <>Votre agence est-elle agréée&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          Immatriculée <strong>Atout France</strong> (IM031110034)
        </li>
        <li>
          <Check />
          Membre du réseau <strong>TourCom</strong>
        </li>
        <li>
          <Check />
          Labellisée <strong>Engagé RSE</strong> par l&apos;AFNOR
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>Comment demander un devis pour un voyage sur mesure&nbsp;?</>
    ),
    answer: (
      <>
        <p>C&apos;est simple et gratuit :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <span className="material-symbols-outlined">call</span>
            Par téléphone : <strong>+33 (0)5 34 391 391</strong>
          </li>
          <li>
            <span className="material-symbols-outlined">mail</span>
            Par email : <strong>voyages@cta-events.com</strong>
          </li>
          <li>
            <span className="material-symbols-outlined">description</span>
            Via notre <strong>formulaire en ligne</strong>
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Nos attachées clientèle prennent contact avec vous{" "}
          <strong>sous 48h</strong> pour affiner votre demande, gratuitement et
          sans engagement.
        </p>
      </>
    ),
  },
  {
    question: <>Proposez-vous des voyages sur mesure en solo&nbsp;?</>,
    answer: (
      <p>
        Absolument. Itinéraire sécurisé, hébergements adaptés aux voyageurs
        seuls et activités favorisant les rencontres locales et les échanges
        culturels.
      </p>
    ),
  },
];

export default function FaqList() {
  // Une seule réponse ouverte à la fois (clé unique), null = aucune.
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
