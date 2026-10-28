"use client";

import { REALM_LIST } from "@/lib/realm-config";
import { ArrowUpRight, Compass } from "lucide-react";
import { TanukiMaskIcon, KitsuneMaskIcon, GumihoCrestIcon } from "@/components/Icons";
import type { RealmMeta } from "@/types/torii";

function renderRealmIcon(realm: RealmMeta) {
  if (realm.iconName === "tanuki" || realm.id === "tanuki") {
    return <TanukiMaskIcon className="size-4 text-amber-400" />;
  }
  if (realm.iconName === "kitsune" || realm.id === "kitsune") {
    return <KitsuneMaskIcon className="size-4 text-violet-400" />;
  }
  if (realm.iconName === "gumiho" || realm.id === "gumiho") {
    return <GumihoCrestIcon className="size-4 text-rose-400" />;
  }
  return <Compass className="size-4 text-cyan-400" />;
}

export function RealmPortals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
      {REALM_LIST.map((realm) => {
        const dotColor = realm.dotColor || "bg-cyan-400";
        const typeLabel = realm.type || realm.category?.split("&")[0]?.trim() || "Portal";
        const headline = realm.headline || realm.tagline;
        const desc = realm.desc || realm.description;

        return (
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
                    {renderRealmIcon(realm)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`size-1.5 rounded-full ${dotColor}`} />
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                      {typeLabel}
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
                  {headline}
                </p>
                <p className="text-xs text-zinc-500 pt-0.5 leading-relaxed">
                  {desc}
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
        );
      })}
    </div>
  );
}

