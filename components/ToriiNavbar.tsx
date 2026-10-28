"use client";

import Link from "next/link";
import { ToriiGateIcon } from "@/components/Icons";
import { REALMS } from "@/lib/realm-config";
import { ArrowUpRight } from "lucide-react";

export function ToriiNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08080a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-85 transition">
          <ToriiGateIcon className="size-4 text-white" />
          <span className="font-bold text-xs tracking-widest uppercase">Torii</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <a
            href={REALMS.tanuki.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition"
          >
            <span>Tanuki</span>
            <span className="text-[10px] text-zinc-600 hidden sm:inline">Movies</span>
            <ArrowUpRight className="size-3 opacity-60" />
          </a>

          <a
            href={REALMS.kitsune.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition"
          >
            <span>Kitsune</span>
            <span className="text-[10px] text-zinc-600 hidden sm:inline">Anime</span>
            <ArrowUpRight className="size-3 opacity-60" />
          </a>

          <a
            href={REALMS.gumiho.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition"
          >
            <span>Gumiho</span>
            <span className="text-[10px] text-zinc-600 hidden sm:inline">Series</span>
            <ArrowUpRight className="size-3 opacity-60" />
          </a>
        </nav>
      </div>
    </header>
  );
}
