"use client";

import { useState } from "react";
import Image from "next/image";
import { ORACLE_DESTINATIONS } from "@/lib/omni-api";
import type { OracleSuggestion } from "@/types/torii";
import { Sparkles, Compass, RotateCw, ExternalLink, Star } from "lucide-react";

export function SpiritOracle() {
  const [current, setCurrent] = useState<OracleSuggestion>(ORACLE_DESTINATIONS[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleDivinate = () => {
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * ORACLE_DESTINATIONS.length);
      setCurrent(ORACLE_DESTINATIONS[randomIdx]);
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 90);
  };

  const getRealmBadge = (realmId: string) => {
    if (realmId === "tanuki") return { bg: "bg-amber-500/20 text-amber-300 ring-amber-500/30", label: "Tanuki Realm • Movie" };
    if (realmId === "kitsune") return { bg: "bg-violet-500/20 text-violet-300 ring-violet-500/30", label: "Kitsune Realm • Anime" };
    return { bg: "bg-rose-500/20 text-rose-300 ring-rose-500/30", label: "Gumiho Realm • Series" };
  };

  const badge = getRealmBadge(current.realmId);

  return (
    <section
      id="oracle"
      aria-label="The Spirit Oracle"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950/40 via-zinc-900/90 to-[#07080d] p-5 sm:p-8 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl"
    >
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
        {/* Left Side Lore & Button */}
        <div className="flex-1 space-y-3.5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300 ring-1 ring-red-500/30">
            <Compass className="size-3.5 text-red-400" />
            <span>The Spirit Oracle (Omikuji)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Indecisive? Let the Spirits Choose.
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl">
            Torn between a blockbuster movie, a seasonal anime, or an addictive drama? Consult the Torii Oracle for a personalized cross-realm omen.
          </p>

          <div className="pt-2 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={handleDivinate}
              disabled={isSpinning}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-red-950/60 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <RotateCw className={`size-4 ${isSpinning ? "animate-spin" : ""}`} />
              <span>{isSpinning ? "Divining the Realms…" : "Consult The Spirits"}</span>
            </button>
          </div>
        </div>

        {/* Right Side Result Card */}
        <div className="w-full max-w-md shrink-0">
          <div className="relative overflow-hidden rounded-2xl bg-black/50 p-4 ring-1 ring-white/15 backdrop-blur-md shadow-2xl transition-all">
            <div className="flex gap-4 items-center">
              <div className="relative aspect-[2/3] w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/20">
                <Image
                  src={current.poster}
                  alt={current.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold ring-1 ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-[10px] text-amber-400 font-bold flex items-center gap-0.5">
                    <Star className="size-2.5 fill-current" />
                    {current.rating}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-extrabold text-white truncate">
                  {current.title}
                </h4>

                <p className="text-[11px] text-white/50 line-clamp-2">
                  {current.synopsis}
                </p>

                <p className="text-[10px] italic text-amber-300/80 font-medium pt-1">
                  &ldquo;{current.omen}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-white/40 font-medium">
                {current.genre} • {current.year}
              </span>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/20 active:scale-95"
              >
                <span>Teleport to Watch</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
