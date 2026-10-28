"use client";

import { REALMS } from "@/lib/realm-config";
import { ArrowUpRight } from "lucide-react";
import { TanukiMaskIcon, KitsuneMaskIcon, GumihoCrestIcon } from "@/components/Icons";

export function RealmPortals() {
  const cards = [
    {
      ...REALMS.tanuki,
      type: "Movies",
      headline: "Feature Films",
      desc: "Blockbusters, classics, and 4K cinema streaming.",
      icon: <TanukiMaskIcon className="size-4 text-amber-400" />,
      dotColor: "bg-amber-400",
    },
    {
      ...REALMS.kitsune,
      type: "Anime",
      headline: "Animation Sagas",
      desc: "Top ranked, seasonal hits, sub and dub.",
      icon: <KitsuneMaskIcon className="size-4 text-violet-400" />,
      dotColor: "bg-violet-400",
    },
    {
      ...REALMS.gumiho,
      type: "Series",
      headline: "K-Dramas & TV",
      desc: "Korean dramas and Western television series.",
      icon: <GumihoCrestIcon className="size-4 text-rose-400" />,
      dotColor: "bg-rose-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full">
      {cards.map((realm) => (
        <a
          key={realm.id}
          href={realm.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#101014] p-5 transition hover:border-white/20 hover:bg-[#131318] active:scale-[0.99]"
        >
          <div className="space-y-3.5">
            {/* Header: Icon container on left + Type badge, Arrow on right */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] ring-1 ring-white/10 transition group-hover:bg-white/[0.08]">
                  {realm.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full ${realm.dotColor}`} />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                    {realm.type}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="size-3.5 text-zinc-600 transition group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* Title & Description */}
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white tracking-tight">
                {realm.name}
              </h2>
              <p className="text-xs text-zinc-400">
                {realm.headline}
              </p>
              <p className="text-xs text-zinc-500 pt-0.5 leading-relaxed">
                {realm.desc}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-5 flex items-center justify-between text-xs border-t border-white/[0.04]">
            <span className="text-[11px] text-zinc-500 font-mono">100% Free</span>
            <span className="text-zinc-400 group-hover:text-white transition font-medium">
              Enter &rarr;
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
