"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-08T20:00:00").getTime();

type Parts = { days: string; hours: string; minutes: string; seconds: string };

const PLACEHOLDER: Parts = {
  days: "--",
  hours: "--",
  minutes: "--",
  seconds: "--",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function compute(): Parts {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
  return {
    days: pad(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    minutes: pad(Math.floor((diff % 3600000) / 60000)),
    seconds: pad(Math.floor((diff % 60000) / 1000)),
  };
}

export default function Countdown() {
  const [parts, setParts] = useState<Parts>(PLACEHOLDER);

  useEffect(() => {
    setParts(compute());
    const id = setInterval(() => setParts(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  const boxes: { value: string; label: string }[] = [
    { value: parts.days, label: "Jours" },
    { value: parts.hours, label: "Heures" },
    { value: parts.minutes, label: "Minutes" },
    { value: parts.seconds, label: "Secondes" },
  ];

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
      {boxes.map((box, i) => (
        <div key={box.label} className="contents">
          <div className="countdown-box">
            <p className="font-h1 text-[28px] sm:text-[36px] font-bold text-white leading-none">
              {box.value}
            </p>
            <p className="font-label text-[10px] sm:text-[11px] text-white/75 uppercase tracking-wider mt-1">
              {box.label}
            </p>
          </div>
          {i < boxes.length - 1 && (
            <span className="text-white/60 text-[24px] font-bold">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
