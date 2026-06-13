"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#3179C4] text-white shadow-lg flex items-center justify-center z-40 transition-all duration-300 hover:bg-[#004191] hover:scale-110 active:scale-95 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Retour en haut"
    >
      <span className="material-symbols-outlined text-[24px]">
        keyboard_arrow_up
      </span>
    </button>
  );
}
