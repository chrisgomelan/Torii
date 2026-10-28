"use client";

import { ShieldCheck, Zap, Lock, Tv, Sparkles, RefreshCw } from "lucide-react";

export function ConvergenceTicker() {
  const points = [
    { icon: <ShieldCheck className="size-3.5 text-emerald-400" />, title: "Zero Paywalls & No Subscriptions" },
    { icon: <Zap className="size-3.5 text-amber-400" />, title: "3 Separate High-Performance Streaming Realms" },
    { icon: <Lock className="size-3.5 text-violet-400" />, title: "No Accounts Required (100% Local Savepoints)" },
    { icon: <RefreshCw className="size-3.5 text-rose-400" />, title: "Instant Failover Mirror Servers" },
  ];

  return (
    <div className="border-y border-white/5 bg-white/[0.015] py-3">
      <div className="mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
        {points.map((p, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {p.icon}
            <span className="font-semibold text-white/80">{p.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
