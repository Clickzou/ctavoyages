"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitToFormsubmit } from "@/lib/submitForm";

type DestOption = {
  text: string;
  value: string;
  types: string; // comma-separated
  sports: string; // comma-separated
  bold?: boolean;
};

type DestGroup = {
  label: string | null;
  options: DestOption[];
};

// Reproduction fidèle des optgroups d'origine
const ALL_DEST_GROUPS: DestGroup[] = [
  {
    label: "Asie",
    options: [
      { text: "Japon", value: "Japon", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Thaïlande", value: "Thaïlande", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
    ],
  },
  {
    label: "Afrique et Océan Indien",
    options: [
      { text: "Maroc", value: "Maroc", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Île Maurice", value: "Île Maurice", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Seychelles", value: "Seychelles", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Zanzibar", value: "Zanzibar", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
    ],
  },
  {
    label: "Amériques",
    options: [
      { text: "Canada", value: "Canada", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Costa Rica", value: "Costa Rica", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
    ],
  },
  {
    label: "Europe",
    options: [
      { text: "Laponie", value: "Laponie", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Londres", value: "Londres", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Amsterdam", value: "Amsterdam", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Porto", value: "Porto", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
      { text: "Rome", value: "Rome", types: "sejour,circuit,croisiere,glamping,sur-mesure", sports: "" },
    ],
  },
  {
    label: "Sport — Europe",
    options: [
      { text: "Angleterre", value: "Angleterre", types: "catalogue-sportif", sports: "Football / Boxing Day,Rugby" },
      { text: "Espagne", value: "Espagne", types: "catalogue-sportif", sports: "Football,NFL,Formule 1,Moto GP" },
      { text: "Italie", value: "Italie", types: "catalogue-sportif", sports: "Football,Rugby,Formule 1,Moto GP" },
      { text: "Allemagne", value: "Allemagne", types: "catalogue-sportif", sports: "Football" },
      { text: "France", value: "France", types: "catalogue-sportif", sports: "Rugby" },
      { text: "Pays de Galles", value: "Pays de Galles", types: "catalogue-sportif", sports: "Rugby" },
      { text: "Écosse", value: "Écosse", types: "catalogue-sportif", sports: "Rugby" },
      { text: "Irlande", value: "Irlande", types: "catalogue-sportif", sports: "Rugby" },
      { text: "Monaco", value: "Monaco", types: "catalogue-sportif", sports: "Formule 1" },
      { text: "Belgique", value: "Belgique", types: "catalogue-sportif", sports: "Formule 1" },
    ],
  },
  {
    label: "Sport — Amériques",
    options: [
      { text: "États-Unis", value: "États-Unis", types: "catalogue-sportif", sports: "NBA" },
      { text: "Canada — F1 Montréal", value: "Canada — F1 Montréal", types: "catalogue-sportif", sports: "Formule 1" },
    ],
  },
  {
    label: "Sport — Asie",
    options: [
      { text: "Qatar", value: "Qatar", types: "catalogue-sportif", sports: "Formule 1" },
      { text: "Émirats arabes unis", value: "Émirats arabes unis", types: "catalogue-sportif", sports: "Formule 1" },
    ],
  },
  {
    label: null,
    options: [
      {
        text: "Autre destination",
        value: "Autre destination",
        types: "sejour,circuit,croisiere,glamping,sur-mesure,catalogue-sportif",
        sports: "Football,Rugby,NBA,NFL,Formule 1,Moto GP,Boxing Day",
        bold: true,
      },
    ],
  },
];

// Filtre les destinations selon le type d'offre sélectionné
function buildFilteredGroups(type: string): DestGroup[] {
  return ALL_DEST_GROUPS.map((g) => {
    if (g.label) {
      const filtered = g.options.filter((o) => {
        if (!type) return true;
        return o.types.split(",").indexOf(type) !== -1;
      });
      return { label: g.label, options: filtered };
    }
    // option sans groupe (Autre destination)
    const filtered = g.options.filter((o) => {
      if (!type) return true;
      return o.types.split(",").indexOf(type) !== -1;
    });
    return { label: null, options: filtered };
  }).filter((g) => g.options.length > 0);
}

// Construit la liste de sports affichables à partir d'une chaîne
function buildSports(sportsStr: string): string[] {
  return sportsStr ? sportsStr.split(",").map((s) => s.trim()) : [];
}

const SPORT_ALL = "Football,Rugby,NBA,NFL,Formule 1,Moto GP,Boxing Day";

export default function RenseignementForm() {
  const router = useRouter();

  const [offerType, setOfferType] = useState("");
  const [destination, setDestination] = useState("");
  const [sportsStr, setSportsStr] = useState(""); // chaîne de sports disponibles
  const [sport, setSport] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const showSportField = offerType === "catalogue-sportif";
  const messageRequired = showSportField;

  const filteredGroups = useMemo(() => buildFilteredGroups(offerType), [offerType]);

  // Liste des destinations à plat pour retrouver une option par valeur
  const findDestOption = (value: string): DestOption | undefined => {
    for (const g of ALL_DEST_GROUPS) {
      const found = g.options.find((o) => o.value === value);
      if (found) return found;
    }
    return undefined;
  };

  const sportOptions = useMemo(() => buildSports(sportsStr), [sportsStr]);

  // Changement de type d'offre
  function onOfferTypeChange(value: string) {
    setOfferType(value);
    // Si la destination courante n'existe plus dans le filtre, on la réinitialise
    const stillValid = buildFilteredGroups(value).some((g) =>
      g.options.some((o) => o.value === destination)
    );
    if (!stillValid) setDestination("");

    if (value === "catalogue-sportif") {
      setSportsStr(SPORT_ALL);
      // conserve le sport courant s'il existe encore, sinon réinitialise
      const list = buildSports(SPORT_ALL);
      if (list.length === 1) setSport(list[0]);
      else if (!list.includes(sport)) setSport("");
    } else {
      setSportsStr("");
      setSport("");
    }
  }

  // Changement de destination : peut déduire/forcer le type d'offre
  function onDestChange(value: string) {
    setDestination(value);
    if (!value) return;

    const opt = findDestOption(value);
    if (!opt) return;

    const types = (opt.types || "").split(",");
    const sports = opt.sports || "";

    if (!offerType) {
      if (types.indexOf("catalogue-sportif") !== -1 && types.length === 1) {
        setOfferType("catalogue-sportif");
        applySports(sports);
      } else if (types.length > 0 && types[0] !== "") {
        setOfferType(types[0]);
        setSportsStr("");
        setSport("");
      }
    } else {
      const curType = offerType;
      if (types.indexOf(curType) === -1) {
        if (types.indexOf("catalogue-sportif") !== -1) {
          setOfferType("catalogue-sportif");
          applySports(sports);
        } else {
          setOfferType(types[0]);
          setSportsStr("");
          setSport("");
        }
      } else if (curType === "catalogue-sportif") {
        applySports(sports);
      }
    }
  }

  // Applique une liste de sports + auto-sélection si un seul sport
  function applySports(sports: string) {
    setSportsStr(sports);
    const list = buildSports(sports);
    if (list.length === 1) setSport(list[0]);
    else if (!list.includes(sport)) setSport("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setError(null);
    try {
      await submitToFormsubmit(form, {
        subject: "Nouvelle demande de renseignement — CTA Voyages",
      });
      router.push("/merci");
    } catch {
      setError(
        "Une erreur est survenue lors de l'envoi. Merci de réessayer, ou de nous contacter au +33 (0)5 34 391 391."
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="lg:col-span-6 bg-white rounded-[16px] p-5 sm:p-8 lg:p-10 shadow-[0_20px_30px_rgba(49,121,196,0.06)] flex flex-col">
      <form
        id="contact-form"
        className="space-y-5 sm:space-y-6 flex-grow"
        onSubmit={handleSubmit}
      >
        {/* Nom + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Prénom et nom
            </label>
            <input
              name="prenom_nom"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60"
              placeholder="Ex: Jean Dupont"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Adresse email <span className="text-error">*</span>
            </label>
            <input
              name="email"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60"
              placeholder="jean.dupont@email.com"
              type="email"
              required
            />
          </div>
        </div>

        {/* Téléphone + Type d'offre */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Téléphone <span className="text-error">*</span>
            </label>
            <input
              name="telephone"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60"
              placeholder="06 12 34 56 78"
              type="tel"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Type d&apos;offre <span className="text-error">*</span>
            </label>
            <select
              id="offer-type"
              name="type_offre"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
              value={offerType}
              onChange={(e) => onOfferTypeChange(e.target.value)}
              required
            >
              <option disabled value="">
                Choisir un type d&apos;offre
              </option>
              <option value="sejour">Séjour</option>
              <option value="circuit">Circuit</option>
              <option value="croisiere">Croisière</option>
              <option value="glamping">Glamping</option>
              <option value="sur-mesure">Voyage sur mesure</option>
              <option value="catalogue-sportif">Catalogue sportif</option>
            </select>
          </div>
        </div>

        {/* Destination + Voyageurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Destination souhaitée <span className="text-error">*</span>
            </label>
            <select
              id="dest-select"
              name="destination"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
              value={destination}
              onChange={(e) => onDestChange(e.target.value)}
              required
            >
              <option disabled value="">
                Choisir une destination
              </option>
              {filteredGroups.map((g, gi) =>
                g.label ? (
                  <optgroup key={`og-${gi}`} label={g.label}>
                    {g.options.map((o) => (
                      <option
                        key={o.value}
                        value={o.value}
                        style={o.bold ? { fontWeight: 700 } : undefined}
                      >
                        {o.text}
                      </option>
                    ))}
                  </optgroup>
                ) : (
                  g.options.map((o) => (
                    <option
                      key={o.value}
                      value={o.value}
                      style={o.bold ? { fontWeight: 700 } : undefined}
                    >
                      {o.text}
                    </option>
                  ))
                )
              )}
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Nombre de voyageurs <span className="text-error">*</span>
            </label>
            <input
              name="nombre_voyageurs"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60"
              placeholder="Ex: 2 adultes, 1 enfant"
              type="text"
              required
            />
          </div>
        </div>

        {/* Sport conditionnel */}
        <div
          id="sport-field-wrap"
          className={showSportField ? "sport-visible" : undefined}
        >
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Sport / Manifestation <span className="text-error">*</span>
            </label>
            <select
              id="sport-select"
              name="sport_manifestation"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              required={messageRequired}
            >
              <option disabled value="">
                Choisir un sport
              </option>
              {sportOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <p className="text-[12px] sm:text-[13px] text-primary italic flex items-start gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px] mt-0.5 flex-shrink-0">
                info
              </span>
              Précisez votre demande dans le champ Message
            </p>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Date d&apos;arrivée souhaitée <span className="text-error">*</span>
            </label>
            <input
              name="date_arrivee"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              type="date"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
              Date de départ souhaitée <span className="text-error">*</span>
            </label>
            <input
              name="date_depart"
              className="w-full h-11 sm:h-12 px-4 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              type="date"
              required
            />
          </div>
        </div>

        {/* Flexibilité */}
        <div className="space-y-2">
          <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
            Flexibilité sur les dates (optionnel)
          </label>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <label className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-outline-variant cursor-pointer hover:border-primary hover:bg-primary-fixed/30 transition-all has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary">
              <input type="radio" name="flexibilite" value="Dates exactes" className="sr-only" defaultChecked />
              <span className="text-[12px] sm:text-[13px] font-label">Dates exactes</span>
            </label>
            <label className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-outline-variant cursor-pointer hover:border-primary hover:bg-primary-fixed/30 transition-all has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary">
              <input type="radio" name="flexibilite" value="+/- 1 jour" className="sr-only" />
              <span className="text-[12px] sm:text-[13px] font-label">+/- 1 jour</span>
            </label>
            <label className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-outline-variant cursor-pointer hover:border-primary hover:bg-primary-fixed/30 transition-all has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary">
              <input type="radio" name="flexibilite" value="+/- 3 jours" className="sr-only" />
              <span className="text-[12px] sm:text-[13px] font-label">+/- 3 jours</span>
            </label>
            <label className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-outline-variant cursor-pointer hover:border-primary hover:bg-primary-fixed/30 transition-all has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary">
              <input type="radio" name="flexibilite" value="+/- 1 semaine" className="sr-only" />
              <span className="text-[12px] sm:text-[13px] font-label">+/- 1 semaine</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="font-h3 text-[13px] sm:text-[14px] font-semibold text-on-surface-variant">
            Message / précisions{" "}
            <span
              id="message-required-star"
              className={messageRequired ? "text-error" : "text-error hidden"}
            >
              *
            </span>
          </label>
          <textarea
            id="message-field"
            name="message"
            className="w-full px-4 py-3 font-body-md text-[14px] sm:text-[16px] rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60 resize-none"
            placeholder="Parlez-nous de vos envies, de votre budget, des manifestations sportives qui vous intéressent..."
            rows={4}
            required={messageRequired}
          ></textarea>
        </div>

        {/* RGPD */}
        <div className="space-y-4 pt-1">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="rgpd_consent"
              value="Oui"
              required
              className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 rounded border-outline-variant text-primary focus:ring-primary"
            />
            <span className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant leading-relaxed">
              J&apos;accepte que mes données soient traitées par CTA Voyages dans le
              cadre de ma demande, conformément à la{" "}
              <Link href="/confidentialite" className="text-primary underline">
                politique de confidentialité
              </Link>
              . <span className="text-error font-bold">*</span>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="newsletter"
              value="Oui"
              className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 rounded border-outline-variant text-primary focus:ring-primary"
            />
            <span className="font-body-md text-[12px] sm:text-[13px] text-on-surface-variant leading-relaxed">
              Je souhaite recevoir les offres et actualités de CTA Voyages par email.{" "}
              <span className="text-outline-variant text-[11px] italic">(optionnel)</span>
            </span>
          </label>
        </div>

        {/* Bouton */}
        <div className="pt-2">
          {error && (
            <p className="mb-3 text-[13px] sm:text-[14px] text-error font-medium text-center">
              {error}
            </p>
          )}
          <button
            className="w-full h-[50px] sm:h-[56px] bg-[#FBBF12] text-[#1A1A1A] font-h3 text-[14px] sm:text-[15px] font-bold rounded-lg hover:brightness-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Envoi en cours…" : "Envoyer ma demande"}{" "}
            <span className="material-symbols-outlined font-bold text-[18px]">
              {submitting ? "progress_activity" : "arrow_forward"}
            </span>
          </button>
        </div>
      </form>

      {/* Réassurance */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-outline-variant/20">
        <div className="flex items-center gap-1.5 text-on-surface-variant font-body-md text-[12px] sm:text-[13px]">
          <span
            className="material-symbols-outlined text-primary text-[16px] sm:text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          Contact sous 48h
        </div>
        <div className="flex items-center gap-1.5 text-on-surface-variant font-body-md text-[12px] sm:text-[13px]">
          <span
            className="material-symbols-outlined text-primary text-[16px] sm:text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          Devis gratuit
        </div>
        <div className="flex items-center gap-1.5 text-on-surface-variant font-body-md text-[12px] sm:text-[13px]">
          <span
            className="material-symbols-outlined text-primary text-[16px] sm:text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          Sans engagement
        </div>
        <div className="flex items-center gap-1.5 text-on-surface-variant font-body-md text-[12px] sm:text-[13px]">
          <span
            className="material-symbols-outlined text-primary text-[16px] sm:text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          Conseillère dédiée
        </div>
      </div>
      <p className="text-[11px] sm:text-[12px] text-on-surface-variant/60 text-center mt-4">
        Les champs marqués d&apos;un <span className="text-error font-bold">*</span> sont
        obligatoires.
      </p>
    </div>
  );
}
