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

const Check = () => (
  <span className="material-symbols-outlined">check</span>
);

const LEFT: FaqEntry[] = [
  {
    question: <>Qu&apos;est-ce qu&apos;un séjour tout compris&nbsp;?</>,
    answer: (
      <p>
        Un <strong>séjour tout compris</strong> inclut l&apos;hébergement, les
        repas (petit-déjeuner, déjeuner, dîner), les boissons et souvent les
        animations et activités sur place. Vous maîtrisez votre budget avant le
        départ, sans mauvaise surprise.
      </p>
    ),
  },
  {
    question: (
      <>Quelle différence entre un séjour en hôtel, un club et un resort&nbsp;?</>
    ),
    answer: (
      <>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-2 ml-1">
          <li>
            <Check />
            <span>
              <strong>Hôtel</strong> — hébergement classique, prestation variable
              selon les étoiles.
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>Club</strong> — formule tout compris avec animations,
              activités et ambiance conviviale.
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>Resort</strong> — établissement haut de gamme avec
              piscines, spa, restaurants et services premium.
            </span>
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Nous vous aidons à choisir la formule la plus adaptée à votre profil.
        </p>
      </>
    ),
  },
  {
    question: <>Proposez-vous des courts séjours et escapades&nbsp;?</>,
    answer: (
      <>
        <p>
          Oui. Nous organisons des <strong>escapades de 2 à 5 nuits</strong>,
          notamment dans nos destinations européennes :
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            <strong>Londres, Amsterdam, Porto, Rome</strong> — city breaks
            culturels et gastronomiques
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Proposez-vous des séjours en amoureux&nbsp;?</>,
    answer: (
      <>
        <p>
          Oui. Nous sélectionnons les adresses les plus romantiques selon votre
          destination :
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            Boutique-hôtels &amp; riads intimistes au <strong>Maroc</strong>
          </li>
          <li>
            <Check />
            Resorts face à l&apos;océan aux <strong>Seychelles</strong> et à l&apos;
            <strong>Île Maurice</strong>
          </li>
          <li>
            <Check />
            Ryokans avec bains onsen privatifs au <strong>Japon</strong>
          </li>
        </ul>
      </>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Quelles sont vos destinations de séjours les plus demandées&nbsp;?</>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          <strong>Maroc</strong> — riads de Marrakech, désert du Sahara
        </li>
        <li>
          <Check />
          <strong>Île Maurice</strong> — resorts et lagons
        </li>
        <li>
          <Check />
          <strong>Seychelles</strong> — nature préservée et plages
        </li>
        <li>
          <Check />
          <strong>Thaïlande</strong> — temples et plages du sud
        </li>
        <li>
          <Check />
          <strong>Laponie</strong> — aurores boréales et cabanes
        </li>
        <li>
          <Check />
          <strong>Londres, Amsterdam, Porto, Rome</strong> — escapades urbaines
        </li>
      </ul>
    ),
  },
  {
    question: <>Puis-je demander un devis gratuit pour un séjour&nbsp;?</>,
    answer: (
      <p>
        Bien sûr. Contactez-nous par téléphone, email ou via notre formulaire en
        ligne. Nos attachées clientèle prennent contact avec vous{" "}
        <strong>sous 48h</strong> pour affiner votre demande et vous proposer une
        sélection personnalisée, <strong>gratuitement et sans engagement</strong>.
      </p>
    ),
  },
  {
    question: (
      <>Pourquoi réserver mon séjour via une agence plutôt qu&apos;en ligne&nbsp;?</>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          Un <strong>conseiller humain</strong> qui connaît les hébergements et
          destinations
        </li>
        <li>
          <Check />
          <strong>Tarifs négociés</strong> via le réseau TourCom (1 200 agences,
          6 000 points de vente)
        </li>
        <li>
          <Check />
          <strong>Assistance personnalisée</strong> avant, pendant et après votre
          voyage
        </li>
        <li>
          <Check />
          Une agence <strong>agréée Atout France</strong> et labellisée RSE
        </li>
      </ul>
    ),
  },
  {
    question: <>Organisez-vous des séjours en famille&nbsp;?</>,
    answer: (
      <>
        <p>
          Oui. Nous sélectionnons des hébergements adaptés aux familles avec
          enfants :
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            Clubs avec mini-clubs et activités enfants
          </li>
          <li>
            <Check />
            Resorts avec piscines et espaces dédiés
          </li>
          <li>
            <Check />
            Rythme adapté et transferts organisés
          </li>
        </ul>
      </>
    ),
  },
];

export default function FaqList() {
  // Index global unique ouvert (une seule réponse à la fois), null = aucune.
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
