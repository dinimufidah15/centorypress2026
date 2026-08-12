import { useEffect, useRef, useState } from "react";

type Spark = { x: number; y: number; life: number; size: number; teal: boolean };

const INTERACTIVE = "a,button,input,textarea,select,label,[role='button'],summary";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const penRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-on");
    return () => document.documentElement.classList.remove("custom-cursor-on");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const pen = penRef.current;
    if (!canvas || !pen) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let x = -100;
    let y = -100;
    let lastX = x;
    let lastY = y;
    let hover = false;
    let sparks: Spark[] = [];
    let raf = 0;
    let acc = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as Element | null;
      hover = !!t && !!t.closest?.(INTERACTIVE);
      pen.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${hover ? 1.18 : 1})`;
      pen.style.opacity = "1";
    };
    const onLeave = () => {
      pen.style.opacity = "0";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    const loop = () => {
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);
      lastX = x;
      lastY = y;

      if (dist > 1.2 && sparks.length < 26) {
        acc += dist;
        while (acc > 16 && sparks.length < 26) {
          acc -= 16;
          sparks.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8 + 6,
            life: 1,
            size: 0.7 + Math.random() * 1.1,
            teal: Math.random() > 0.45,
          });
        }
      } else {
        acc = 0;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const boost = hover ? 1.35 : 1;
      sparks = sparks.filter((s) => {
        s.life -= 0.032;
        if (s.life <= 0) return false;
        s.y += 0.25;
        const a = Math.max(0, s.life) * (hover ? 0.75 : 0.55);
        ctx.beginPath();
        ctx.fillStyle = s.teal
          ? `rgba(56, 189, 178, ${a})`
          : `rgba(255, 255, 255, ${a * 0.85})`;
        ctx.arc(s.x, s.y, s.size * boost, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9998]"
      />
      <div
        ref={penRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 transition-[transform,opacity] duration-150 ease-out will-change-transform"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ display: "block" }}>
          <path
            d="M2 1.5 L15.2 14.1 L9.6 15.2 L7.2 20.4 Z"
            fill="oklch(0.22 0.02 183)"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
          <path d="M2 1.5 L8.2 12.6 L9.6 15.2 Z" fill="oklch(0.34 0.03 183)" />
          <circle cx="2.6" cy="2.1" r="1.5" fill="oklch(0.72 0.1 184)" />
        </svg>
      </div>
    </>
  );
}
