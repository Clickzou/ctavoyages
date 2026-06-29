/** Indicateur de scroll (souris animée + chevron) à placer dans un hero plein écran. */
export default function HeroScrollIndicator() {
  return (
    <div className="hero-scroll" aria-hidden="true">
      <span className="hero-mouse">
        <span className="hero-mouse-wheel" />
      </span>
      <span className="material-symbols-outlined hero-scroll-chevron">
        keyboard_arrow_down
      </span>
    </div>
  );
}
