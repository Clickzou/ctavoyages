import "./styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AgenceMap from "@/components/contact/AgenceMap";
import {
  ADRESSE_COMPLETE,
  AGENCE,
  HORAIRES,
  ITINERAIRE_URL,
  MAPS_URL,
} from "@/lib/agence";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact : votre agence de voyages à Toulouse",
  description:
    "Contactez CTA Voyages, agence de voyages à Toulouse : 99 rue de Fenouillet, 05 34 39 13 91. Horaires, accès, devis gratuit et contact sous 48 h.",
};

/**
 * Page de contact et page locale de l'agence.
 *
 * C'est la destination du lien porté par la fiche Google Business Profile :
 * elle doit répéter mot pour mot l'adresse, le téléphone et les horaires que la
 * fiche affiche, sans quoi le rapprochement entre les deux perd de sa force.
 */

const questions = [
  {
    question: "Où se trouve l'agence et faut-il prendre rendez-vous ?",
    answer: `Notre agence est au ${ADRESSE_COMPLETE}, dans le quartier de Fondeyre. Vous pouvez passer nous voir aux heures d'ouverture, mais nous vous conseillons d'appeler le ${AGENCE.phoneDisplay} pour être sûr qu'une conseillère soit disponible pour vous recevoir.`,
  },
  {
    question: "Le devis est-il payant ?",
    answer:
      "Non. Le devis est gratuit et sans engagement. Après votre demande, une conseillère vous contacte sous 48 h pour préciser vos envies et votre budget avant de vous proposer un projet de voyage.",
  },
  {
    question: "Êtes-vous une agence habilitée ?",
    answer: `Oui. CTA Voyages est immatriculée Atout France sous le numéro ${AGENCE.atoutFrance} et dispose d'une garantie financière ainsi que d'une assurance responsabilité civile professionnelle. Vos versements sont protégés.`,
  },
  {
    question:
      "Organisez-vous des voyages de groupe pour les associations et les comités d'entreprise ?",
    answer:
      "Oui, c'est une part importante de notre activité. Nous établissons un devis groupe avec des conditions dédiées, des gratuités selon l'effectif et un accompagnement sur place si vous le souhaitez.",
  },
  {
    question: "Peut-on vous confier seulement une partie du voyage ?",
    answer:
      "Oui. Certains clients nous confient l'organisation complète, d'autres uniquement les vols, l'hébergement ou un circuit sur place. Nous nous adaptons à votre demande.",
  },
];

/**
 * La page ne redéclare pas l'agence : elle désigne par son `@id` la fiche
 * `TravelAgency` servie depuis le layout, ce qui donne à Google un seul objet
 * plutôt que deux descriptions concurrentes du même établissement.
 */
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#page`,
  url: `${SITE_URL}/contact`,
  name: `Contacter ${AGENCE.name}, agence de voyages à ${AGENCE.city}`,
  description:
    "Adresse, horaires, téléphone et accès de l'agence CTA Voyages à Toulouse.",
  mainEntity: { "@id": `${SITE_URL}/#agence` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

/** Univers de voyage, pour orienter un visiteur arrivé par la fiche Google. */
const UNIVERS = [
  {
    href: "/voyage-sur-mesure",
    icon: "explore",
    label: "Voyage sur mesure",
    desc: "Un itinéraire construit avec vous, du week-end au grand départ.",
  },
  {
    href: "/sejours",
    icon: "beach_access",
    label: "Séjours",
    desc: "Hôtels, clubs et resorts, en tout compris ou en demi-pension.",
  },
  {
    href: "/circuits",
    icon: "route",
    label: "Circuits",
    desc: "Individuels, accompagnés ou en petit groupe avec guide francophone.",
  },
  {
    href: "/croisieres",
    icon: "directions_boat",
    label: "Croisières",
    desc: "En mer comme sur les fleuves, cabine et pension comprises.",
  },
  {
    href: "/glamping",
    icon: "cabin",
    label: "Glamping",
    desc: "Cabanes, tentes lodges et hébergements insolites.",
  },
  {
    href: "/catalogue-sportif",
    icon: "sports_soccer",
    label: "Catalogue sportif",
    desc: "Football, rugby, NBA, NFL, F1, MotoGP : billet, hôtel et transferts.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-[72px]">
        {/* HERO */}
        <section className="hero-contact py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter relative z-10">
            <div className="max-w-3xl">
              <Breadcrumbs
                variant="hero"
                className="mb-3 sm:mb-4"
                items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
              />
              <h1 className="font-h1 text-[32px] sm:text-[40px] md:text-h1 text-white mb-4 sm:mb-6 leading-[1.15]">
                Votre agence de voyages à Toulouse
              </h1>
              <p className="font-body-lg text-[16px] sm:text-[18px] text-white/90 leading-relaxed max-w-2xl mb-8">
                Nos conseillères vous reçoivent {AGENCE.streetAddress}, dans le
                quartier de Fondeyre, et répondent à vos projets de voyage par
                téléphone ou par e-mail. Devis gratuit, contact sous 48 h.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/demande-devis"
                  className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    edit_document
                  </span>
                  Demander un devis gratuit
                </Link>
                <a
                  href={`tel:${AGENCE.phone}`}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  {AGENCE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COORDONNÉES */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {/* Adresse */}
              <div className="border border-outline-variant rounded-2xl p-6 flex flex-col gap-3">
                <span
                  className="material-symbols-outlined text-primary text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <h2 className="font-h3 text-[18px] font-bold text-on-surface">
                  Adresse de l&apos;agence
                </h2>
                <address className="font-body-md text-[15px] text-on-surface-variant not-italic leading-relaxed">
                  {AGENCE.name}
                  <br />
                  {AGENCE.streetAddress}
                  <br />
                  {AGENCE.postalCode} {AGENCE.city}
                </address>
                <a
                  href={ITINERAIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-primary font-label text-[13px] hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    directions
                  </span>
                  Calculer mon itinéraire
                </a>
              </div>

              {/* Téléphone et e-mail */}
              <div className="border border-outline-variant rounded-2xl p-6 flex flex-col gap-3">
                <span
                  className="material-symbols-outlined text-primary text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  contact_support
                </span>
                <h2 className="font-h3 text-[18px] font-bold text-on-surface">
                  Nous joindre
                </h2>
                <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                  <a
                    href={`tel:${AGENCE.phone}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {AGENCE.phoneDisplay}
                  </a>
                  <br />
                  <a
                    href={`mailto:${AGENCE.email}`}
                    className="text-primary font-medium hover:underline break-all"
                  >
                    {AGENCE.email}
                  </a>
                </p>
                <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed mt-auto">
                  Une conseillère reprend contact avec vous sous 48 h après votre
                  demande.
                </p>
              </div>

              {/* Horaires */}
              <div className="border border-outline-variant rounded-2xl p-6 flex flex-col gap-3">
                <span
                  className="material-symbols-outlined text-primary text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
                <h2 className="font-h3 text-[18px] font-bold text-on-surface">
                  Horaires d&apos;ouverture
                </h2>
                <dl className="font-body-md text-[15px] text-on-surface-variant flex flex-col gap-1.5">
                  {HORAIRES.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt>{h.label}</dt>
                      <dd className="font-medium text-on-surface whitespace-nowrap">
                        {h.opens && h.closes
                          ? `${h.opens.replace(":", "h")} – ${h.closes.replace(":", "h")}`
                          : "Fermé"}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-primary font-label text-[13px] hover:underline"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    reviews
                  </span>
                  Voir la fiche et les avis Google
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ACCÈS */}
        <section id="acces" className="section-bg-blue py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Venir nous voir
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
                L&apos;agence, au nord de Toulouse
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <AgenceMap />
              <div className="flex flex-col gap-4">
                <p className="font-body-lg text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
                  Nous sommes installés {ADRESSE_COMPLETE}, dans la zone
                  d&apos;activité de Fondeyre, au nord de la ville. Passez nous
                  voir pour parler de votre projet de voyage : une conseillère
                  prend le temps de comprendre vos envies, votre rythme et votre
                  budget avant de construire une proposition.
                </p>
                <p className="font-body-lg text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
                  Nous vous conseillons d&apos;appeler avant de venir : cela nous
                  permet de préparer votre venue et de vous recevoir sans
                  attente.
                </p>
                {/* Le stationnement et l'arrêt de transport le plus proche
                    seraient utiles ici : ils font partie des informations que
                    les visiteurs venus d'une fiche Google cherchent en premier.
                    À compléter avec les précisions de l'agence. */}
                <div className="flex flex-col xs:flex-row flex-wrap gap-3 mt-2">
                  <a
                    href={ITINERAIRE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#3179C4] text-white font-label text-[13px] sm:text-[14px] px-6 py-3 rounded-lg hover:bg-[#004191] transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      directions
                    </span>
                    Itinéraire
                  </a>
                  <a
                    href={`tel:${AGENCE.phone}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#3179C4] text-[#3179C4] font-label text-[13px] sm:text-[14px] px-6 py-3 rounded-lg hover:bg-[#3179C4] hover:text-white transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      call
                    </span>
                    Appeler l&apos;agence
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNIVERS */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Nos prestations
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface mb-4">
                Ce que nous organisons pour vous
              </h2>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                Plus de 70 destinations, en individuel, en famille ou en groupe,
                préparées depuis Toulouse par une conseillère dédiée.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {UNIVERS.map((u) => (
                <Link
                  key={u.href}
                  href={u.href}
                  className="group border border-outline-variant rounded-2xl p-6 flex flex-col gap-3 hover:border-[#3179C4] hover:shadow-md transition-all"
                >
                  <span
                    className="material-symbols-outlined text-primary text-[26px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {u.icon}
                  </span>
                  <h3 className="font-h3 text-[17px] font-bold text-on-surface group-hover:text-[#3179C4] transition-colors">
                    {u.label}
                  </h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">
                    {u.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq-contact"
          className="section-bg-blue py-section_padding_v"
        >
          <div className="max-w-[800px] mx-auto px-4 sm:px-gutter">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary font-label text-label mb-3 tracking-wider uppercase text-[12px] sm:text-[14px]">
                Questions fréquentes
              </p>
              <h2 className="font-h2 text-[26px] sm:text-[32px] md:text-h2 text-on-surface">
                Avant de nous contacter
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              {questions.map((q) => (
                <details
                  key={q.question}
                  className="faq-contact-item border border-outline-variant rounded-xl bg-white overflow-hidden"
                >
                  <summary className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4">
                    <span className="font-h3 text-[14px] sm:text-[16px] font-bold text-on-surface">
                      {q.question}
                    </span>
                    <span className="material-symbols-outlined text-primary faq-contact-icon flex-shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed">
                      {q.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
            <p className="font-body-md text-[14px] text-on-surface-variant text-center mt-8">
              Une autre question ? Écrivez-nous à{" "}
              <a
                href={`mailto:${AGENCE.email}`}
                className="text-primary font-medium hover:underline"
              >
                {AGENCE.email}
              </a>{" "}
              ou passez par le{" "}
              <Link
                href="/demande-devis"
                className="text-primary font-medium hover:underline"
              >
                formulaire de devis
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-white py-section_padding_v">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-gutter">
            <div className="bg-gradient-to-br from-[#004191] to-[#3179C4] rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="font-h2 text-[24px] sm:text-[30px] md:text-h2 text-white mb-4">
                  Parlons de votre prochain voyage
                </h2>
                <p className="font-body-lg text-[15px] sm:text-body-lg text-white/85 mb-8 max-w-2xl mx-auto">
                  Décrivez-nous votre projet en quelques lignes. Une conseillère
                  vous rappelle sous 48 h pour en discuter, gratuitement et sans
                  engagement.
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Link
                    href="/demande-devis"
                    className="bg-[#FBBF12] text-[#1A1A1A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-lg text-center flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      edit_document
                    </span>
                    Demander un devis gratuit
                  </Link>
                  <Link
                    href="/equipe"
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label text-label text-[13px] sm:text-[14px] hover:bg-white hover:text-[#004191] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      groups
                    </span>
                    Découvrir l&apos;équipe
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Agence immatriculée Atout France {AGENCE.atoutFrance}
                  </span>
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Garantie financière
                  </span>
                  <span className="text-white/60 text-[12px] sm:text-[13px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>{" "}
                    Contact sous 48h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
