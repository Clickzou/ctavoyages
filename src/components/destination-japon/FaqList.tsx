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
    <div className="faq-item border border-outline-variant rounded-xl overflow-hidden bg-white">
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
      <div className="faq-answer" ref={answerRef} style={{ maxHeight }}>
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
    question: <>Quelle est la meilleure période pour visiter le Japon&nbsp;?</>,
    answer: (
      <>
        <p>Le Japon se visite toute l&apos;année, mais deux saisons se distinguent :</p>
        <ul>
          <li>
            <Icon name="check" />
            <strong>Printemps (mars à mai)</strong> : cerisiers en fleur, idéal
            pour les circuits et séjours urbains.
          </li>
          <li>
            <Icon name="check" />
            <strong>Automne (octobre à novembre)</strong> : érables flamboyants et
            paysages spectaculaires.
          </li>
          <li>
            <Icon name="check" />
            <strong>Hiver (décembre à février)</strong> : ski à Hokkaido, onsen
            sous la neige.
          </li>
        </ul>
        <p>
          Votre conseiller vous guidera sur la période la plus adaptée à votre
          projet.
        </p>
      </>
    ),
  },
  {
    question: <>Faut-il un visa pour se rendre au Japon&nbsp;?</>,
    answer: (
      <>
        <p>
          <strong>Non</strong>, les ressortissants français n&apos;ont pas besoin
          de visa pour un séjour inférieur à 90 jours.
        </p>
        <ul>
          <li>
            <Icon name="check" />
            Un <strong>passeport valide</strong> pour toute la durée du séjour
            suffit.
          </li>
          <li>
            <Icon name="check" />
            L&apos;inscription sur <strong>Visit Japan Web</strong> est
            recommandée.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Quels types de voyages proposez-vous au Japon&nbsp;?</>,
    answer: (
      <>
        <p>CTA Voyages propose l&apos;ensemble de nos formules pour le Japon :</p>
        <ul>
          <li>
            <Icon name="check" />
            <strong>Séjour</strong> : hôtel ou ryokan dans une ou plusieurs villes.
          </li>
          <li>
            <Icon name="check" />
            <strong>Circuit</strong> : itinéraire multi-étapes individuel,
            accompagné ou en groupe.
          </li>
          <li>
            <Icon name="check" />
            <strong>Voyage sur mesure</strong> : programme construit pas à pas
            selon vos envies.
          </li>
          <li>
            <Icon name="check" />
            <strong>Croisière</strong> : découverte de l&apos;archipel par la mer.
          </li>
          <li>
            <Icon name="check" />
            <strong>Glamping</strong> : hébergements insolites immergés dans la
            nature japonaise.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Peut-on personnaliser entièrement l&apos;itinéraire&nbsp;?</>,
    answer: (
      <>
        <p>
          <strong>Absolument, c&apos;est notre spécialité.</strong> Vous
          choisissez :
        </p>
        <ul>
          <li>
            <Icon name="check" />
            Les <strong>étapes et la durée</strong> : Tokyo, Kyoto, Hiroshima,
            Nara, Alpes japonaises…
          </li>
          <li>
            <Icon name="check" />
            Le <strong>type d&apos;hébergement</strong> : hôtel, ryokan,
            temple-logement.
          </li>
          <li>
            <Icon name="check" />
            Le <strong>rythme et les expériences</strong> : cérémonie du thé, cours
            de cuisine, calligraphie.
          </li>
        </ul>
      </>
    ),
  },
];

const RIGHT: FaqEntry[] = [
  {
    question: <>Combien coûte un voyage au Japon&nbsp;?</>,
    answer: (
      <>
        <p>Le budget dépend de plusieurs facteurs :</p>
        <ul>
          <li>
            <Icon name="check" />
            La durée du séjour
          </li>
          <li>
            <Icon name="check" />
            La période de départ
          </li>
          <li>
            <Icon name="check" />
            Le niveau d&apos;hébergement souhaité
          </li>
          <li>
            <Icon name="check" />
            Le type de voyage choisi
          </li>
          <li>
            <Icon name="check" />
            Les activités et prestations incluses
          </li>
        </ul>
        <p>
          Pour obtenir une estimation, <a href="/demande-devis">contactez-nous</a>.
          Nos conseillers vous adressent une proposition personnalisée, gratuite et
          sans engagement.
        </p>
      </>
    ),
  },
  {
    question: <>La barrière de la langue est-elle un problème&nbsp;?</>,
    answer: (
      <>
        <p>
          <strong>Pas du tout.</strong> CTA Voyages prévoit tout :
        </p>
        <ul>
          <li>
            <Icon name="check" />
            <strong>Guides francophones privés</strong> pour toutes les visites.
          </li>
          <li>
            <Icon name="check" />
            <strong>Documents de voyage en français</strong> : carnets, bons,
            programmes.
          </li>
          <li>
            <Icon name="check" />
            <strong>Assistance téléphonique</strong> joignable pendant tout votre
            séjour.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Quels hébergements proposez-vous&nbsp;?</>,
    answer: (
      <>
        <p>Nous sélectionnons les hébergements selon vos préférences :</p>
        <ul>
          <li>
            <Icon name="check" />
            <strong>Hôtels 4 et 5 étoiles</strong> dans les grandes villes.
          </li>
          <li>
            <Icon name="check" />
            <strong>Ryokans</strong> : auberges traditionnelles avec tatamis,
            futons et bains onsen.
          </li>
          <li>
            <Icon name="check" />
            <strong>Shukubo</strong> : hébergements en temple bouddhiste.
          </li>
          <li>
            <Icon name="check" />
            <strong>Hébergements insolites</strong> en pleine nature.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: <>Comment demander un devis&nbsp;?</>,
    answer: (
      <>
        <p>C&apos;est simple, rapide et gratuit :</p>
        <ul>
          <li>
            <Icon name="description" />
            Via notre <strong>formulaire en ligne</strong>.
          </li>
          <li>
            <Icon name="call" />
            Par téléphone : <strong>+33 (0)5 34 391 391</strong>
          </li>
          <li>
            <Icon name="mail" />
            Par email : <strong>voyages@cta-events.com</strong>
          </li>
        </ul>
        <p>
          Nos conseillers vous répondent <strong>sous 48h</strong>, gratuitement et
          sans engagement.
        </p>
      </>
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
