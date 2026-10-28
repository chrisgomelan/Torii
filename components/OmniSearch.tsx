"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, Loader2, X, ArrowUpRight } from "lucide-react";
import type { OmniSearchResult } from "@/types/torii";

export function OmniSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<OmniSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults([]);
      setIsLoading(false);
      setIsOpen(false);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setIsOpen(true);

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/omnisearch?q=${encodeURIComponent(trimmed)}`, {
          signal: controller.signal,
        });
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto text-left">
      {/* Clean Minimal Search Input */}
      <div className="relative flex items-center rounded-xl border border-white/10 bg-[#101014] px-3.5 transition focus-within:border-white/25">
        <Search className="size-4 text-zinc-500 shrink-0" />
        <input
          type="text"
          placeholder="Search across all realms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.trim().length >= 2) setIsOpen(true);
          }}
          className="h-11 w-full bg-transparent pl-3 pr-8 text-xs font-medium text-white placeholder-zinc-500 focus:outline-none"
        />
        {isLoading && <Loader2 className="size-3.5 animate-spin text-zinc-500 absolute right-8" />}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-3 text-zinc-500 hover:text-white transition"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>

      {/* Clean Dropdown */}
      {isOpen && query.trim().length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 overflow-hidden rounded-xl border border-white/10 bg-[#101014] p-2 shadow-xl">
          {/* Results */}
          {results.length === 0 ? (
            <div className="py-6 text-center text-xs text-zinc-500">
              {isLoading ? "Searching realms..." : "No matches found."}
            </div>
          ) : (
            <div className="max-h-80 overflow-y-auto space-y-1">
              {results.map((item, idx) => (
                <a
                  key={`${item.realmId}-${item.id}-${idx}`}
                  href={item.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg p-2 hover:bg-white/[0.04] transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative aspect-[2/3] w-9 shrink-0 overflow-hidden rounded bg-zinc-800">
                      {item.poster ? (
                        <Image
                          src={item.poster}
                          alt={item.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                        <span className="uppercase tracking-wider font-medium text-zinc-400">
                          {item.realmName.split(" ")[0]}
                        </span>
                        {item.year && <span>• {item.year}</span>}
                      </div>
                      <h4 className="text-xs font-semibold text-zinc-200 truncate group-hover:text-white transition">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 shrink-0 ml-2" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
