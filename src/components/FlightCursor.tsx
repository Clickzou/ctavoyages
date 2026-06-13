"use client";

import { useEffect, useRef } from "react";

/**
 * Curseur « avion » avec traînée pointillée tricolore qui suit la souris.
 * Désactivé sous 768px. Porté depuis le script inline d'origine.
 */
export default function FlightCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const planePath = planeRef.current;
    if (!canvas || !cursor || !planePath) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Color = { r: number; g: number; b: number; hex: string };
    type Point = { x: number; y: number; a: number; c: Color };

    let trail: Point[] = [];
    const MAX_POINTS = 35;
    const FADE_SPEED = 0.94;
    let mx = 0,
      my = 0,
      angle = 0;
    let moving = false;
    let moveTimer: ReturnType<typeof setTimeout> | null = null;
    let raf = 0;

    const COLOR_BLUE: Color = { r: 49, g: 121, b: 196, hex: "#3179C4" };
    const COLOR_YELLOW: Color = { r: 251, g: 191, b: 18, hex: "#FBBF12" };
    const COLOR_RED: Color = { r: 231, g: 76, b: 60, hex: "#e74c3c" };
    let targetColor = COLOR_BLUE;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t || !t.closest) return;
      if (t.closest(".tf-sport, .country-sport, .sport-card, .sport-marker")) {
        targetColor = COLOR_RED;
        planePath.setAttribute("fill", COLOR_RED.hex);
      } else if (
        t.closest(
          '.discover-link, .offer-btn, .offer-carousel-card, .unified-card, .dest-card:not(.sport-card), .map-reset-btn, a[href="#cta-final"], button[type="submit"]'
        )
      ) {
        targetColor = COLOR_YELLOW;
        planePath.setAttribute("fill", COLOR_YELLOW.hex);
      } else {
        targetColor = COLOR_BLUE;
        planePath.setAttribute("fill", COLOR_BLUE.hex);
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      moving = true;
      cursor.style.opacity = "1";
      if (moveTimer) clearTimeout(moveTimer);
      moveTimer = setTimeout(() => {
        moving = false;
        cursor.style.opacity = "0";
      }, 200);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousemove", onMove);

    const svg = cursor.querySelector("svg");

    const loop = () => {
      raf = requestAnimationFrame(loop);

      if (moving) {
        trail.push({ x: mx, y: my, a: 1, c: { ...targetColor } });
        if (trail.length > MAX_POINTS) trail.shift();
      }

      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";

      if (trail.length >= 2) {
        const a = trail[trail.length - 2];
        const b = trail[trail.length - 1];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        }
      }
      if (svg) (svg as SVGElement).style.transform = `rotate(${angle}deg)`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (trail.length < 2) return;

      for (let i = 0; i < trail.length; i++) trail[i].a *= FADE_SPEED;

      for (let j = 0; j < trail.length; j += 2) {
        const p = trail[j];
        if (p.a < 0.02) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8 * p.a + 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c.r}, ${p.c.g}, ${p.c.b}, ${p.a * 0.5})`;
        ctx.fill();
      }

      while (trail.length > 0 && trail[0].a < 0.01) trail.shift();
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousemove", onMove);
      if (moveTimer) clearTimeout(moveTimer);
    };
  }, []);

  return (
    <>
      <canvas id="flight-trail" ref={canvasRef} />
      <div id="flight-cursor" ref={cursorRef} style={{ opacity: 0 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            ref={planeRef}
            id="plane-path"
            d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="#3179C4"
          />
        </svg>
      </div>
    </>
  );
}
