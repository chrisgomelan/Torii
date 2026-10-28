"use client";

// Deterministic particle positions and timings for zero-CPU, 100% pure CSS GPU acceleration
const PARTICLES = [
  { id: 1, left: "10%", size: 2, duration: "18s", delay: "0s", opacity: 0.25 },
  { id: 2, left: "22%", size: 3, duration: "24s", delay: "3s", opacity: 0.3 },
  { id: 3, left: "35%", size: 1.5, duration: "20s", delay: "7s", opacity: 0.2 },
  { id: 4, left: "48%", size: 2.5, duration: "22s", delay: "1s", opacity: 0.35 },
  { id: 5, left: "62%", size: 2, duration: "19s", delay: "5s", opacity: 0.2 },
  { id: 6, left: "75%", size: 3, duration: "26s", delay: "9s", opacity: 0.3 },
  { id: 7, left: "88%", size: 1.5, duration: "21s", delay: "4s", opacity: 0.25 },
  { id: 8, left: "15%", size: 2, duration: "23s", delay: "11s", opacity: 0.2 },
  { id: 9, left: "55%", size: 2.5, duration: "17s", delay: "13s", opacity: 0.3 },
  { id: 10, left: "82%", size: 2, duration: "25s", delay: "8s", opacity: 0.25 },
  { id: 11, left: "40%", size: 3, duration: "28s", delay: "15s", opacity: 0.2 },
  { id: 12, left: "93%", size: 1.5, duration: "19s", delay: "2s", opacity: 0.3 },
];

export function AtmosphericBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-[#070709]"
    >
      {/* 1. Deep subtle radial ambient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(255,255,255,0.04)_0%,_transparent_70%)]" />

      {/* 2. Slow drifting ethereal aura (Hardware accelerated via GPU transform) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[46rem] rounded-full bg-white/[0.015] blur-[100px] animate-aurora-drift" />

      {/* 3. Subtle micro-dot matrix overlay */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* 4. Rising Stardust & Embers (Pure CSS hardware-accelerated translate3d) */}
      <div className="absolute inset-0">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-white will-change-transform animate-float-ember"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
