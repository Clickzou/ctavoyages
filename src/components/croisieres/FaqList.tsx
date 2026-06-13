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
    question: <>Qu&apos;est-ce qu&apos;une croisière&nbsp;?</>,
    answer: (
      <p>
        Une <strong>croisière</strong> est un voyage touristique effectué
        principalement à bord d&apos;un navire. Elle comprend généralement le{" "}
        <strong>transport maritime</strong>, l&apos;<strong>hébergement</strong>,
        la <strong>restauration</strong> et diverses activités de loisirs ou
        d&apos;animation à bord, tout en proposant des escales dans différents
        ports.
      </p>
    ),
  },
  {
    question: (
      <>
        Quelle différence entre une croisière en mer et une croisière
        fluviale&nbsp;?
      </>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-2 ml-1">
        <li>
          <Check />
          <span>
            <strong>Croisière en mer</strong> — grands paquebots, espaces de
            loisirs nombreux, escales dans des villes portuaires ou des îles.
          </span>
        </li>
        <li>
          <Check />
          <span>
            <strong>Croisière fluviale</strong> — bateaux plus intimes,
            navigation au cœur des villes, ambiance culturelle et conviviale.
          </span>
        </li>
      </ul>
    ),
  },
  {
    question: <>Les repas et activités sont-ils inclus dans le prix&nbsp;?</>,
    answer: (
      <>
        <p>En général, le prix d&apos;une croisière inclut :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            L&apos;hébergement à bord
          </li>
          <li>
            <Check />
            Les repas principaux au restaurant principal
          </li>
          <li>
            <Check />
            Les animations et spectacles à bord
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Les excursions dans les escales et les restaurants spécialisés sont
          souvent en supplément.
        </p>
      </>
    ),
  },
  {
    question: (
      <>Peut-on combiner une croisière avec une extension terrestre&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous pouvons organiser une <strong>extension terrestre</strong>{" "}
        avant ou après votre croisière — séjour dans la ville d&apos;embarquement,
        visite d&apos;une destination en escale ou prolongation dans un hôtel.
        Votre conseiller vous propose les combinaisons les plus intéressantes.
      </p>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Quelles sont vos destinations de croisières les plus demandées&nbsp;?</>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          <strong>Méditerranée</strong> — Italie, Espagne, France, Grèce
        </li>
        <li>
          <Check />
          <strong>Fjords norvégiens</strong> et Europe du Nord
        </li>
        <li>
          <Check />
          <strong>Caraïbes</strong> et Antilles
        </li>
        <li>
          <Check />
          <strong>Îles grecques</strong> et mer Égée
        </li>
        <li>
          <Check />
          <strong>Océan Indien</strong> — Maurice, Seychelles, Zanzibar
        </li>
      </ul>
    ),
  },
  {
    question: <>Comment choisir sa catégorie de cabine&nbsp;?</>,
    answer: (
      <>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            <strong>Cabine intérieure</strong> — sans hublot, option la plus
            économique
          </li>
          <li>
            <Check />
            <strong>Cabine extérieure</strong> — avec hublot, lumière naturelle
          </li>
          <li>
            <Check />
            <strong>Cabine avec balcon</strong> — vue mer et espace extérieur
            privé
          </li>
          <li>
            <Check />
            <strong>Suite</strong> — grand espace, services premium et avantages
            exclusifs
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Votre conseiller vous guidera selon votre budget et vos habitudes de
          voyage.
        </p>
      </>
    ),
  },
  {
    question: <>Puis-je demander un devis gratuit pour une croisière&nbsp;?</>,
    answer: (
      <p>
        Oui, bien sûr. Contactez-nous par téléphone, email ou via notre
        formulaire en ligne. Nos attachées clientèle prennent contact avec vous{" "}
        <strong>sous 48h</strong> pour affiner votre projet et vous proposer une
        sélection personnalisée, <strong>gratuitement et sans engagement</strong>.
      </p>
    ),
  },
  {
    question: <>Une croisière est-elle adaptée aux familles&nbsp;?</>,
    answer: (
      <p>
        Absolument. De nombreux paquebots proposent des{" "}
        <strong>clubs enfants</strong>, des <strong>piscines dédiées</strong>,
        des animations familiales et des cabines communicantes. Nous
        sélectionnons les navires et les itinéraires les mieux adaptés aux
        familles avec enfants.
      </p>
    ),
  },
];

export default function FaqList() {
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
