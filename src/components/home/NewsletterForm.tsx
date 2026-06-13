"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex-grow relative">
        <input
          type="email"
          placeholder="Votre adresse email"
          required
          className="w-full h-12 sm:h-14 px-5 pl-12 font-body-md text-[14px] sm:text-[16px] rounded-lg border-0 outline-none focus:ring-2 focus:ring-[#FBBF12] bg-white/15 text-white placeholder:text-white/50 backdrop-blur-sm transition-all"
        />
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-[20px]">
          email
        </span>
      </div>
      <button
        type="submit"
        className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-[#3179C4] border-[1.5px] border-white font-label text-[13px] sm:text-[14px] font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
      >
        S&apos;inscrire{" "}
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </form>
  );
}
