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
    question: (
      <>Quels clubs puis-je voir lors d&apos;un voyage foot en Europe&nbsp;?</>
    ),
    answer: (
      <>
        <p>Les meilleurs clubs européens :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="check" />
            <strong>Angleterre</strong> — Arsenal, Chelsea, Manchester United,
            Manchester City, Tottenham, Liverpool
          </li>
          <li>
            <Icon name="check" />
            <strong>Espagne</strong> — Real Madrid, Atlético Madrid, FC Barcelone
          </li>
          <li>
            <Icon name="check" />
            <strong>Italie</strong> — Inter Milan, AC Milan, Juventus, Naples
          </li>
          <li>
            <Icon name="check" />
            <strong>Allemagne</strong> — Bayern Munich, Borussia Dortmund
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Que comprend un séjour foot&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          <strong>Billets de match officiels</strong> pour le championnat ou la
          compétition européenne de votre choix
        </li>
        <li>
          <Icon name="check" />
          <strong>Nuits d&apos;hôtel</strong> avec petit-déjeuner, en centre-ville
          ou proche du stade
        </li>
        <li>
          <Icon name="check" />
          <strong>Options de transport</strong> — vol + hôtel, transferts selon la
          destination
        </li>
        <li>
          <Icon name="check" />
          <strong>Expériences culturelles</strong> — visites guidées, musées,
          gastronomie locale
        </li>
      </ul>
    ),
  },
  {
    question: <>Où se déroulent les séjours proposés&nbsp;?</>,
    answer: (
      <>
        <p>Dans les capitales du football européen :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="location_on" />
            <strong>Londres</strong> — Emirates Stadium, Stamford Bridge,
            Tottenham Hotspur Stadium
          </li>
          <li>
            <Icon name="location_on" />
            <strong>Manchester</strong> — Old Trafford, Etihad Stadium
          </li>
          <li>
            <Icon name="location_on" />
            <strong>Madrid</strong> — Santiago Bernabéu, Wanda Metropolitano
          </li>
          <li>
            <Icon name="location_on" />
            <strong>Milan</strong> — San Siro (Giuseppe Meazza)
          </li>
          <li>
            <Icon name="location_on" />
            <strong>Munich</strong> — Allianz Arena
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Pourquoi choisir un voyage foot en Europe&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Icon name="check" />
          Accéder aux <strong>plus grands stades européens</strong> : Emirates
          Stadium, Old Trafford, Santiago Bernabéu, San Siro, Allianz Arena
        </li>
        <li>
          <Icon name="check" />
          Profiter d&apos;<strong>offres voyages complètes</strong> : billets +
          hôtel + transport
        </li>
        <li>
          <Icon name="check" />
          Partager des <strong>émotions fortes</strong> avec vos amis, collègues
          ou clients
        </li>
        <li>
          <Icon name="check" />
          Associer <strong>sport et culture</strong> : un voyage foot, c&apos;est
          aussi découvrir Madrid, Londres, Milan ou Munich
        </li>
      </ul>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Proposez-vous des séjours pour la Ligue des Champions&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous créons des offres sur mesure pour les matchs de{" "}
        <strong>Ligue des Champions</strong>, <strong>Europa League</strong> et{" "}
        <strong>Conference League</strong>. Ces soirées européennes sont parmi
        les plus intenses de la saison — contactez-nous le plus tôt possible car
        les billets partent très vite.
      </p>
    ),
  },
  {
    question: <>Peut-on assister à un derby ou à un match de gala&nbsp;?</>,
    answer: (
      <>
        <p>
          Absolument. Voici quelques exemples de matchs que nous pouvons
          organiser :
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Icon name="sports_soccer" />
            <strong>Manchester United – Arsenal</strong> à Old Trafford
          </li>
          <li>
            <Icon name="sports_soccer" />
            <strong>Real Madrid – FC Barcelone</strong> au Santiago Bernabéu
          </li>
          <li>
            <Icon name="sports_soccer" />
            <strong>Bayern Munich – Borussia Dortmund</strong> à l&apos;Allianz
            Arena
          </li>
          <li>
            <Icon name="sports_soccer" />
            <strong>Derby della Madonnina</strong> (Inter – AC Milan) à San Siro
          </li>
        </ul>
      </>
    ),
  },
  {
    question: (
      <>Proposez-vous des séjours pour les groupes ou entreprises&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous créons des formules sur mesure pour les{" "}
        <strong>voyages clients</strong>, les <strong>incentives</strong>, les{" "}
        <strong>team buildings</strong> ou les groupes d&apos;amis. Billets
        groupes, animations, logistique complète — nous gérons tout pour vous.
      </p>
    ),
  },
  {
    question: <>Comment demander un devis pour un séjour football&nbsp;?</>,
    answer: (
      <p>
        Cliquez sur &quot;Demander un devis gratuit&quot; en bas de cette page ou
        contactez-nous par téléphone ou email. Nos conseillers spécialisés
        prennent contact avec vous <strong>sous 48h</strong> pour composer votre
        pack foot sur mesure, <strong>gratuitement et sans engagement</strong>.
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
