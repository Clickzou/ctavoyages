"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type DestOption = {
  text: string;
  value: string;
  types: string; // comma-separated
  sports: string; // comma-separated
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
    label: "Europe",
    options: [
      { text: "Angleterre", value: "Angleterre", types: "sportif", sports: "Football / Boxing Day,Rugby" },
      { text: "Espagne", value: "Espagne", types: "sportif", sports: "Football,NFL,Formule 1,Moto GP" },
      { text: "Italie", value: "Italie", types: "sportif", sports: "Football,Rugby,Formule 1,Moto GP" },
      { text: "Allemagne", value: "Allemagne", types: "sportif", sports: "Football" },
      { text: "France", value: "France", types: "sportif", sports: "Rugby" },
      { text: "Pays de Galles", value: "Pays de Galles", types: "sportif", sports: "Rugby" },
      { text: "Écosse", value: "Écosse", types: "sportif", sports: "Rugby" },
      { text: "Irlande", value: "Irlande", types: "sportif", sports: "Rugby" },
      { text: "Monaco", value: "Monaco", types: "sportif", sports: "Formule 1" },
      { text: "Belgique", value: "Belgique", types: "sportif", sports: "Formule 1" },
    ],
  },
  {
    label: "Amériques",
    options: [
      { text: "États-Unis", value: "États-Unis", types: "sportif", sports: "NBA" },
      { text: "Canada", value: "Canada", types: "sportif", sports: "Formule 1" },
    ],
  },
  {
    label: "Asie",
    options: [
      { text: "Qatar", value: "Qatar", types: "sportif", sports: "Formule 1" },
      { text: "Émirats arabes unis", value: "Émirats arabes unis", types: "sportif", sports: "Formule 1" },
    ],
  },
  {
    label: null,
    options: [
      {
        text: "Autre destination",
        value: "Autre destination",
        types: "sejour,circuit,croisiere,glamping,sur-mesure,sportif",
        sports: "Football,Rugby,NBA,NFL,Formule 1,Moto GP,Boxing Day",
      },
    ],
  },
];

const FLEX_OPTIONS = [
  { val: "1", label: "+/- 1 jour" },
  { val: "3", label: "+/- 3 jours" },
  { val: "7", label: "+/- 1 semaine" },
];

export default function DevisForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [currentStep, setCurrentStep] = useState(1);

  // Étape 1
  const [type, setType] = useState("");
  const [destination, setDestination] = useState("");
  const [sport, setSport] = useState("");
  const [dateArrivee, setDateArrivee] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [message, setMessage] = useState("");

  // Flexibilité (chip sélectionné par groupe)
  const [flexArrivee, setFlexArrivee] = useState("");
  const [flexDepart, setFlexDepart] = useState("");

  // Étape 2
  const [voyageurs, setVoyageurs] = useState("2");
  const [budget, setBudget] = useState("");

  // Étape 3
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const showSport = type === "sportif";

  // Destinations filtrées selon le type sélectionné
  const filteredDestGroups = useMemo<DestGroup[]>(() => {
    return ALL_DEST_GROUPS.map((group) => {
      if (group.label) {
        const filtered = group.options.filter((o) => {
          if (!type) return true;
          return o.types.split(",").indexOf(type) !== -1;
        });
        return { label: group.label, options: filtered };
      }
      // options hors optgroup
      const filtered = group.options.filter((o) => {
        if (!type) return true;
        return o.types.split(",").indexOf(type) !== -1;
      });
      return { label: null, options: filtered };
    }).filter((g) => g.options.length > 0);
  }, [type]);

  // Liste des sports disponibles selon la destination choisie
  const availableSports = useMemo<string[]>(() => {
    if (!destination) return [];
    for (const group of ALL_DEST_GROUPS) {
      for (const o of group.options) {
        if (o.value === destination && o.sports) {
          return o.sports.split(",").map((s) => s.trim());
        }
      }
    }
    return [];
  }, [destination]);

  function findDestOption(value: string): DestOption | null {
    for (const group of ALL_DEST_GROUPS) {
      for (const o of group.options) {
        if (o.value === value) return o;
      }
    }
    return null;
  }

  function clearError(id: string) {
    setErrors((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function clearAllErrors() {
    setErrors({});
  }

  function scrollToCard() {
    const formCard = document.querySelector(".bg-white.rounded-2xl");
    if (formCard) {
      window.scrollTo({
        top: formCard.getBoundingClientRect().top + window.scrollY - 88,
        behavior: "smooth",
      });
    }
  }

  function onTypeChange(newType: string) {
    setType(newType);
    // Réinitialiser le sport quand on change de type
    if (newType === "sportif") {
      setSport("");
    } else {
      setSport("");
      clearError("sport");
      clearError("message");
    }
    // Si la destination courante n'est plus disponible pour ce type, la réinitialiser
    const opt = findDestOption(destination);
    if (destination && opt && newType && opt.types.split(",").indexOf(newType) === -1) {
      setDestination("");
    }
  }

  function onDestinationChange(newDest: string) {
    setDestination(newDest);
    if (!newDest) return;

    const selected = findDestOption(newDest);
    if (!selected) return;
    const types = selected.types.split(",");

    // Si le type n'est pas encore choisi, le pré-remplir
    if (!type) {
      if (types.indexOf("sportif") !== -1 && types.length === 1) {
        setType("sportif");
        setSport("");
      } else if (types.length > 0 && types[0] !== "") {
        setType(types[0]);
        setSport("");
        clearError("sport");
        clearError("message");
      }
    } else {
      // Le type est déjà choisi
      const currentType = type;
      if (types.indexOf(currentType) === -1) {
        if (types.indexOf("sportif") !== -1) {
          setType("sportif");
          setSport("");
        } else {
          setType(types[0]);
          setSport("");
          clearError("sport");
          clearError("message");
        }
      } else if (currentType === "sportif") {
        // Re-filtrer les sports : réinitialiser la sélection
        setSport("");
      }
    }
  }

  // Pré-sélection automatique si un seul sport disponible
  const sportSelectValue = useMemo(() => {
    if (availableSports.length === 1) return availableSports[0];
    return sport;
  }, [availableSports, sport]);

  function toggleFlex(group: "arrivee" | "depart", val: string) {
    if (group === "arrivee") {
      setFlexArrivee((prev) => (prev === val ? "" : val));
    } else {
      setFlexDepart((prev) => (prev === val ? "" : val));
    }
  }

  function validateStep(step: number): boolean {
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    if (step === 1) {
      if (!type) {
        newErrors["type"] = true;
        valid = false;
      }
      if (!destination) {
        newErrors["destination"] = true;
        valid = false;
      }
      if (!dateArrivee) {
        newErrors["date-arrivee"] = true;
        valid = false;
      }
      if (!dateDepart) {
        newErrors["date-depart"] = true;
        valid = false;
      }
      if (type === "sportif") {
        if (!sportSelectValue) {
          newErrors["sport"] = true;
          valid = false;
        }
        if (!message.trim()) {
          newErrors["message"] = true;
          valid = false;
        }
      }
    }
    if (step === 2) {
      if (!voyageurs || parseInt(voyageurs) < 1) {
        newErrors["voyageurs"] = true;
        valid = false;
      }
      if (!budget) {
        newErrors["budget"] = true;
        valid = false;
      }
    }
    if (step === 3) {
      if (!nom.trim()) {
        newErrors["nom"] = true;
        valid = false;
      }
      if (!tel.trim()) {
        newErrors["tel"] = true;
        valid = false;
      }
      if (!consent) {
        newErrors["consent"] = true;
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  }

  function goToStep(step: number) {
    if (step < currentStep) {
      clearAllErrors();
      setCurrentStep(step);
      scrollToCard();
      return;
    }
    if (step > currentStep) {
      if (!validateStep(currentStep)) return;
      clearAllErrors();
      setCurrentStep(step);
      scrollToCard();
      return;
    }
  }

  function handleStepperClick(targetStep: number) {
    if (targetStep !== currentStep) goToStep(targetStep);
  }

  function submitForm(e: React.MouseEvent) {
    e.preventDefault();
    if (!validateStep(3)) return;
    // Pas de backend : redirection vers la page de remerciement (origine : _next = merci.html)
    router.push("/merci");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function stepClass(s: number) {
    if (s === currentStep) return "step-item step-active";
    if (s < currentStep) return "step-item step-done";
    return "step-item step-inactive";
  }

  const inputClass =
    "w-full border border-outline-variant rounded-lg p-3 text-[14px] focus:border-[#3179C4] focus:ring-1 focus:ring-[#3179C4] outline-none transition-all";

  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_30px_rgba(49,121,196,0.06)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* SIDEBAR STEPPER */}
        <div className="lg:col-span-4 bg-[#004191] p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between">
          <div>
            <h3 className="font-h3 text-[22px] sm:text-[26px] font-bold mb-6 sm:mb-8">Votre demande</h3>
            <div className="space-y-5 sm:space-y-6" id="stepper">
              <div
                className={`${stepClass(1)} flex items-center gap-3 sm:gap-4`}
                style={{ cursor: "pointer" }}
                onClick={() => handleStepperClick(1)}
              >
                <div className="step-dot">1</div>
                <div>
                  <p className="font-label text-[10px] sm:text-[11px] opacity-70 uppercase tracking-wider">Étape 1</p>
                  <p className="font-bold text-[13px] sm:text-[14px]">Destination &amp; dates</p>
                </div>
              </div>
              <div
                className={`${stepClass(2)} flex items-center gap-3 sm:gap-4`}
                style={{ cursor: "pointer" }}
                onClick={() => handleStepperClick(2)}
              >
                <div className="step-dot">2</div>
                <div>
                  <p className="font-label text-[10px] sm:text-[11px] opacity-70 uppercase tracking-wider">Étape 2</p>
                  <p className="font-bold text-[13px] sm:text-[14px]">Voyageurs &amp; budget</p>
                </div>
              </div>
              <div
                className={`${stepClass(3)} flex items-center gap-3 sm:gap-4`}
                style={{ cursor: "pointer" }}
                onClick={() => handleStepperClick(3)}
              >
                <div className="step-dot">3</div>
                <div>
                  <p className="font-label text-[10px] sm:text-[11px] opacity-70 uppercase tracking-wider">Étape 3</p>
                  <p className="font-bold text-[13px] sm:text-[14px]">Coordonnées</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 sm:p-5 bg-white/10 rounded-xl">
            <span className="material-symbols-outlined mb-2 text-[24px]">support_agent</span>
            <p className="text-[13px] sm:text-[14px] italic opacity-90">
              &quot;Nos attachées clientèle prennent contact avec vous sous 48h pour affiner votre projet.&quot;
            </p>
          </div>
        </div>

        {/* CONTENU FORMULAIRE */}
        <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">
          <form id="devis-form" ref={formRef} onSubmit={handleSubmit}>
            {/* ÉTAPE 1 */}
            <div className={`form-step ${currentStep === 1 ? "step-visible" : ""}`} id="form-step-1">
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <span className="material-symbols-outlined text-[#3179C4] text-[24px]">travel_explore</span>
                <h2 className="font-h3 text-[20px] sm:text-[24px] font-bold">Où et quand souhaitez-vous partir ?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Type de voyage *
                  </label>
                  <select
                    id="f-type"
                    name="type_voyage"
                    required
                    value={type}
                    onChange={(e) => onTypeChange(e.target.value)}
                    className={`${inputClass}${errors["type"] ? " field-error" : ""}`}
                  >
                    <option value="">Choisir un type</option>
                    <option value="sejour">Séjour</option>
                    <option value="circuit">Circuit</option>
                    <option value="croisiere">Croisière</option>
                    <option value="glamping">Glamping</option>
                    <option value="sur-mesure">Voyage sur mesure</option>
                    <option value="sportif">Catalogue sportif</option>
                  </select>
                  <p className={`error-msg${errors["type"] ? " visible" : ""}`} id="err-type">
                    Veuillez choisir un type de voyage.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5" id="destination-wrap">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Destination souhaitée *
                  </label>
                  <select
                    id="f-destination"
                    name="destination"
                    required
                    value={destination}
                    onChange={(e) => onDestinationChange(e.target.value)}
                    className={`${inputClass}${errors["destination"] ? " field-error" : ""}`}
                  >
                    <option value="">Choisir une destination</option>
                    {filteredDestGroups.map((group, gi) =>
                      group.label ? (
                        <optgroup key={`g-${gi}`} label={group.label}>
                          {group.options.map((o) => (
                            <option
                              key={`${gi}-${o.value}`}
                              value={o.value}
                              style={o.text === "Autre destination" ? { fontWeight: 700 } : undefined}
                            >
                              {o.text}
                            </option>
                          ))}
                        </optgroup>
                      ) : (
                        group.options.map((o) => (
                          <option
                            key={`${gi}-${o.value}`}
                            value={o.value}
                            style={o.text === "Autre destination" ? { fontWeight: 700 } : undefined}
                          >
                            {o.text}
                          </option>
                        ))
                      )
                    )}
                  </select>
                  <p className={`error-msg${errors["destination"] ? " visible" : ""}`} id="err-destination">
                    Veuillez sélectionner une destination.
                  </p>
                </div>
                <div className={`sm:col-span-2${showSport ? "" : " hidden"}`} id="sport-wrap">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                      Sport / manifestation *
                    </label>
                    <select
                      id="f-sport"
                      name="sport_manifestation"
                      value={sportSelectValue}
                      onChange={(e) => setSport(e.target.value)}
                      className={`${inputClass}${errors["sport"] ? " field-error" : ""}`}
                    >
                      <option value="">Choisir un sport</option>
                      {(availableSports.length > 0
                        ? availableSports
                        : ["Football", "Rugby", "NBA", "NFL", "Formule 1", "Moto GP", "Boxing Day"]
                      ).map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <p className={`error-msg${errors["sport"] ? " visible" : ""}`} id="err-sport">
                      Veuillez sélectionner un sport.
                    </p>
                    <p className="text-[12px] text-on-surface-variant mt-1 italic">
                      Précisez la manifestation souhaitée dans le champ « message ».
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Date d&apos;arrivée souhaitée *
                  </label>
                  <input
                    id="f-date-arrivee"
                    name="date_arrivee"
                    type="date"
                    required
                    value={dateArrivee}
                    onChange={(e) => setDateArrivee(e.target.value)}
                    className={`${inputClass}${errors["date-arrivee"] ? " field-error" : ""}`}
                  />
                  <p className={`error-msg${errors["date-arrivee"] ? " visible" : ""}`} id="err-date-arrivee">
                    Veuillez indiquer une date d&apos;arrivée.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="font-label text-[10px] text-on-surface-variant mr-1">Flexibilité :</span>
                    {FLEX_OPTIONS.map((f) => (
                      <button
                        key={`arrivee-${f.val}`}
                        type="button"
                        className={`flex-chip${flexArrivee === f.val ? " chip-active" : ""}`}
                        onClick={() => toggleFlex("arrivee", f.val)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="flexibilite_arrivee" value={flexArrivee} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Date de départ souhaitée *
                  </label>
                  <input
                    id="f-date-depart"
                    name="date_depart"
                    type="date"
                    required
                    value={dateDepart}
                    onChange={(e) => setDateDepart(e.target.value)}
                    className={`${inputClass}${errors["date-depart"] ? " field-error" : ""}`}
                  />
                  <p className={`error-msg${errors["date-depart"] ? " visible" : ""}`} id="err-date-depart">
                    Veuillez indiquer une date de départ.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="font-label text-[10px] text-on-surface-variant mr-1">Flexibilité :</span>
                    {FLEX_OPTIONS.map((f) => (
                      <button
                        key={`depart-${f.val}`}
                        type="button"
                        className={`flex-chip${flexDepart === f.val ? " chip-active" : ""}`}
                        onClick={() => toggleFlex("depart", f.val)}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="flexibilite_depart" value={flexDepart} />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Message / précisions{" "}
                    <span id="msg-required-star" className={showSport ? "" : "hidden"}>
                      *
                    </span>
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-y${errors["message"] ? " field-error" : ""}`}
                    placeholder="Décrivez votre projet, vos envies, vos contraintes..."
                  ></textarea>
                  <p className={`error-msg${errors["message"] ? " visible" : ""}`} id="err-message">
                    Ce champ est obligatoire pour le catalogue sportif.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="bg-[#3179C4] text-white px-8 py-3 rounded-lg font-label text-[14px] font-bold hover:bg-[#004191] active:scale-95 transition-all flex items-center gap-2"
                >
                  Suivant <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* ÉTAPE 2 */}
            <div className={`form-step ${currentStep === 2 ? "step-visible" : ""}`} id="form-step-2">
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <span className="material-symbols-outlined text-[#3179C4] text-[24px]">group</span>
                <h2 className="font-h3 text-[20px] sm:text-[24px] font-bold">Nombre de voyageurs et budget</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Nombre de voyageurs *
                  </label>
                  <input
                    id="f-voyageurs"
                    name="nombre_voyageurs"
                    type="number"
                    min={1}
                    required
                    value={voyageurs}
                    onChange={(e) => setVoyageurs(e.target.value)}
                    className={`${inputClass}${errors["voyageurs"] ? " field-error" : ""}`}
                  />
                  <p className={`error-msg${errors["voyageurs"] ? " visible" : ""}`} id="err-voyageurs">
                    Veuillez indiquer le nombre de voyageurs.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Budget approximatif par personne (€) *
                  </label>
                  <input
                    id="f-budget"
                    name="budget_par_personne"
                    type="number"
                    min={0}
                    required
                    placeholder="Ex : 3000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`${inputClass}${errors["budget"] ? " field-error" : ""}`}
                  />
                  <p className={`error-msg${errors["budget"] ? " visible" : ""}`} id="err-budget">
                    Veuillez indiquer un budget approximatif.
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className="border border-outline-variant text-on-surface-variant px-6 py-3 rounded-lg font-label text-[14px] hover:bg-surface-container transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span> Retour
                </button>
                <button
                  type="button"
                  onClick={() => goToStep(3)}
                  className="bg-[#3179C4] text-white px-8 py-3 rounded-lg font-label text-[14px] font-bold hover:bg-[#004191] active:scale-95 transition-all flex items-center gap-2"
                >
                  Suivant <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* ÉTAPE 3 */}
            <div className={`form-step ${currentStep === 3 ? "step-visible" : ""}`} id="form-step-3">
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <span className="material-symbols-outlined text-[#3179C4] text-[24px]">person</span>
                <h2 className="font-h3 text-[20px] sm:text-[24px] font-bold">Vos coordonnées</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Prénom et nom *
                  </label>
                  <input
                    id="f-nom"
                    name="prenom_nom"
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className={`${inputClass}${errors["nom"] ? " field-error" : ""}`}
                  />
                  <p className={`error-msg${errors["nom"] ? " visible" : ""}`} id="err-nom">
                    Veuillez indiquer votre nom.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    N° de téléphone *
                  </label>
                  <input
                    id="f-tel"
                    name="telephone"
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className={`${inputClass}${errors["tel"] ? " field-error" : ""}`}
                  />
                  <p className={`error-msg${errors["tel"] ? " visible" : ""}`} id="err-tel">
                    Veuillez indiquer votre numéro.
                  </p>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="font-label text-[11px] sm:text-[12px] text-on-surface-variant uppercase tracking-wider">
                    Adresse email
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Facultatif si le téléphone est renseigné.</p>
                </div>
              </div>
              <div className="mt-8 space-y-4 border-t border-outline-variant/30 pt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="f-consent"
                    name="rgpd_consent"
                    value="Oui"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 rounded border-outline-variant text-[#3179C4] focus:ring-[#3179C4] flex-shrink-0"
                  />
                  <span className="text-[13px] text-on-surface-variant leading-relaxed">
                    J&apos;accepte que mes données soient traitées par CTA Voyages conformément à la{" "}
                    <Link href="/confidentialite" className="text-[#3179C4] underline">
                      politique de confidentialité
                    </Link>
                    . *
                  </span>
                </label>
                <p className={`error-msg ml-8${errors["consent"] ? " visible" : ""}`} id="err-consent">
                  Vous devez accepter le traitement de vos données.
                </p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    value="Oui"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-1 rounded border-outline-variant text-[#3179C4] focus:ring-[#3179C4] flex-shrink-0"
                  />
                  <span className="text-[13px] text-on-surface-variant leading-relaxed">
                    Je souhaite recevoir les offres et actualités de CTA Voyages.{" "}
                    <span className="opacity-60">(optionnel)</span>
                  </span>
                </label>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="border border-outline-variant text-on-surface-variant px-6 py-3 rounded-lg font-label text-[14px] hover:bg-surface-container transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span> Retour
                </button>
                <button
                  type="button"
                  onClick={submitForm}
                  className="bg-[#FBBF12] text-[#1A1A1A] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-label text-[14px] font-bold hover:brightness-110 active:scale-95 shadow-lg transition-all flex items-center gap-2"
                >
                  Envoyer ma demande <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
              <p className="text-[12px] text-on-surface-variant flex items-center gap-1.5 mt-4">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lock
                </span>
                Vos données sont sécurisées et confidentielles.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
