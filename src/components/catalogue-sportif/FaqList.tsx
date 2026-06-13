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
    question: <>Comment réserver un séjour sportif&nbsp;?</>,
    answer: (
      <p>
        Rien de plus simple. Choisissez votre pack sportif, cliquez sur
        &quot;Découvrir&quot; puis renseignez votre demande. Nos conseillers
        spécialisés prennent contact avec vous <strong>sous 48h</strong> pour
        finaliser votre séjour sur mesure, gratuitement et sans engagement.
      </p>
    ),
  },
  {
    question: <>Quels sports proposez-vous dans votre catalogue&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="sports_soccer" />
          <strong>Football européen</strong> — Premier League, Liga, Serie A,
          Bundesliga
        </li>
        <li>
          <Icon name="sports_rugby" />
          <strong>Rugby</strong> — Champions Cup, 6 Nations, Quilter Nations
          Series
        </li>
        <li>
          <Icon name="sports_basketball" />
          <strong>NBA</strong> — New York, Los Angeles
        </li>
        <li>
          <Icon name="sports_football" />
          <strong>NFL</strong> — Madrid Game 2026
        </li>
        <li>
          <Icon name="speed" />
          <strong>Formule 1</strong> — Monaco, Barcelone, Monza, Abu Dhabi…
        </li>
        <li>
          <Icon name="two_wheeler" />
          <strong>Moto GP</strong> — Catalogne, Mugello, Valence
        </li>
        <li>
          <Icon name="sports_soccer" />
          <strong>Boxing Day</strong> — Premier League pendant les fêtes
        </li>
      </ul>
    ),
  },
  {
    question: <>Que comprend un séjour sportif&nbsp;?</>,
    answer: (
      <>
        <p>Chaque séjour inclut généralement&nbsp;:</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="check" />
            L&apos;hébergement en hôtel soigneusement sélectionné
          </li>
          <li>
            <Icon name="check" />
            Les <strong>billets officiels</strong> pour l&apos;événement sportif
            choisi
          </li>
          <li>
            <Icon name="check" />
            Des options sur mesure : transferts, repas, visites ou{" "}
            <strong>packs VIP</strong>
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Nos offres sont adaptables pour les particuliers, les entreprises et
          les groupes.
        </p>
      </>
    ),
  },
  {
    question: (
      <>Quelles sont les destinations phares de vos séjours sportifs&nbsp;?</>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="sports_soccer" />
          <strong>Football</strong> — Londres, Manchester, Madrid, Milan, Munich
        </li>
        <li>
          <Icon name="sports_rugby" />
          <strong>Rugby</strong> — Paris, Dublin, Cardiff, Édimbourg, Bilbao
        </li>
        <li>
          <Icon name="sports_basketball" />
          <strong>NBA</strong> — New York, Los Angeles
        </li>
        <li>
          <Icon name="sports_football" />
          <strong>NFL</strong> — Madrid (Santiago Bernabéu)
        </li>
        <li>
          <Icon name="speed" />
          <strong>Formule 1</strong> — Monaco, Barcelone, Monza, Spa, Montréal,
          Abu Dhabi, Madrid
        </li>
        <li>
          <Icon name="two_wheeler" />
          <strong>Moto GP</strong> — Barcelone, Mugello, Valence
        </li>
        <li>
          <Icon name="sports_soccer" />
          <strong>Boxing Day</strong> — Londres, Manchester, Liverpool,
          Newcastle
        </li>
      </ul>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Proposez-vous des options VIP&nbsp;?</>,
    answer: (
      <p>
        Oui. Selon l&apos;événement, nous proposons des options VIP :
        hospitalités, salons privés, accès paddocks (F1), VIP Village (MotoGP),
        places premium en tribune… pour une immersion totale dans les coulisses
        du sport de haut niveau.
      </p>
    ),
  },
  {
    question: (
      <>Proposez-vous des séjours pour les entreprises et groupes&nbsp;?</>
    ),
    answer: (
      <p>
        Absolument. Nous créons des formules sur mesure pour les{" "}
        <strong>voyages clients</strong>, les <strong>incentives</strong>, les{" "}
        <strong>team buildings</strong> ou les groupes d&apos;amis. Billets
        groupes, animations, logistique complète — nous gérons tout.
      </p>
    ),
  },
  {
    question: <>Quand réserver pour être sûr d&apos;avoir des billets&nbsp;?</>,
    answer: (
      <p>
        Le plus tôt possible. Les grands événements sportifs (6 Nations,
        Champions Cup, NFL Madrid Game, Grands Prix F1…) affichent complet très
        rapidement. Nous vous recommandons de nous contacter{" "}
        <strong>plusieurs mois à l&apos;avance</strong> pour garantir la
        disponibilité des billets.
      </p>
    ),
  },
  {
    question: <>Puis-je personnaliser mon séjour sportif&nbsp;?</>,
    answer: (
      <p>
        Oui, tous nos packs sont entièrement personnalisables : durée du séjour,
        catégorie d&apos;hôtel, catégorie de billets, ajout d&apos;excursions
        culturelles, d&apos;options VIP ou d&apos;un vol depuis votre ville de
        départ. Votre conseiller construit le programme qui correspond
        exactement à vos envies et votre budget.
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
