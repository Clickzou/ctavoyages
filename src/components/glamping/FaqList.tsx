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
    question: <>Qu&apos;est-ce que le glamping&nbsp;?</>,
    answer: (
      <p>
        Le <strong>glamping</strong> (contraction de &quot;glamorous camping&quot;)
        est une forme d&apos;hébergement touristique qui associe le contact avec la
        nature du camping et le confort d&apos;un hébergement haut de gamme. On
        profite de la nature et des grands espaces sans sacrifier le confort ni le
        raffinement.
      </p>
    ),
  },
  {
    question: <>Quels types d&apos;hébergements insolites proposez-vous&nbsp;?</>,
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          <strong>Tentes lodges</strong> — élégantes, spacieuses et bien équipées
        </li>
        <li>
          <Check />
          <strong>Cabanes dans les arbres</strong> — perchées dans la canopée
        </li>
        <li>
          <Check />
          <strong>Igloos &amp; cabanes arctiques</strong> — en Laponie et dans les
          régions nordiques
        </li>
        <li>
          <Check />
          <strong>Bulles transparentes</strong> — pour dormir sous les étoiles
        </li>
        <li>
          <Check />
          <strong>Lodges safari</strong> — en Afrique, face à la savane
        </li>
        <li>
          <Check />
          <strong>Campements désert</strong> — au Maroc ou en Jordanie
        </li>
      </ul>
    ),
  },
  {
    question: <>Le glamping est-il adapté aux familles avec enfants&nbsp;?</>,
    answer: (
      <p>
        Oui, absolument. De nombreux hébergements de glamping sont pensés pour les
        familles avec des <strong>espaces confortables</strong>, des{" "}
        <strong>activités nature</strong> adaptées aux enfants et des environnements
        sécurisés. C&apos;est une excellente façon de transmettre l&apos;amour de la
        nature aux plus jeunes.
      </p>
    ),
  },
  {
    question: <>Le glamping est-il adapté pour un séjour romantique&nbsp;?</>,
    answer: (
      <>
        <p>
          Oui, c&apos;est même l&apos;un des contextes les plus romantiques qui
          soit. Nous sélectionnons des hébergements particulièrement adaptés :
        </p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            Bulles transparentes pour une nuit sous les étoiles
          </li>
          <li>
            <Check />
            Cabanes isolées avec jacuzzi privatif
          </li>
          <li>
            <Check />
            Tentes lodges avec terrasse et vue panoramique
          </li>
        </ul>
      </>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: (
      <>Quelles sont vos destinations de glamping les plus demandées&nbsp;?</>
    ),
    answer: (
      <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
        <li>
          <Check />
          <strong>Laponie</strong> — igloos et cabanes sous les aurores boréales
        </li>
        <li>
          <Check />
          <strong>Kenya</strong> — lodges safari dans la savane
        </li>
        <li>
          <Check />
          <strong>Canada</strong> — cabanes en forêt boréale
        </li>
        <li>
          <Check />
          <strong>Maroc</strong> — campements dans les dunes du Sahara
        </li>
        <li>
          <Check />
          <strong>Costa Rica</strong> — éco-lodges dans la forêt tropicale
        </li>
        <li>
          <Check />
          <strong>Japon</strong> — ryokans traditionnels avec bains onsen
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>Peut-on combiner un séjour glamping avec un circuit ou une activité&nbsp;?</>
    ),
    answer: (
      <p>
        Oui. Nous pouvons combiner un hébergement insolite avec un{" "}
        <strong>circuit</strong>, un <strong>safari</strong>, des activités nature
        (raquettes, traîneaux à chiens, plongée, trek) ou un séjour culturel dans la
        région. Votre conseiller vous propose les meilleures combinaisons selon
        votre destination.
      </p>
    ),
  },
  {
    question: <>Quel budget prévoir pour un séjour glamping&nbsp;?</>,
    answer: (
      <>
        <p>Le budget varie selon la destination et le type d&apos;hébergement :</p>
        <ul className="font-body-md text-[14px] text-on-surface-variant space-y-1.5 ml-1">
          <li>
            <Check />
            <strong>Entrée de gamme</strong> — tentes lodges et cabanes en Europe
          </li>
          <li>
            <Check />
            <strong>Milieu de gamme</strong> — igloos en Laponie, éco-lodges au
            Costa Rica
          </li>
          <li>
            <Check />
            <strong>Haut de gamme</strong> — lodges safari en Afrique, ryokans au
            Japon
          </li>
        </ul>
        <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-3">
          Votre conseiller vous oriente selon votre budget pour trouver le meilleur
          rapport qualité-expérience.
        </p>
      </>
    ),
  },
  {
    question: <>Puis-je demander un devis gratuit&nbsp;?</>,
    answer: (
      <p>
        Bien sûr. Contactez-nous par téléphone, email ou via notre formulaire. Nos
        attachées clientèle prennent contact avec vous <strong>sous 48h</strong>{" "}
        pour affiner votre demande et vous proposer une sélection personnalisée,{" "}
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
