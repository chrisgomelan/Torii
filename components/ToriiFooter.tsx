import { REALMS } from "@/lib/realm-config";

export function ToriiFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-8 text-xs text-zinc-500">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="font-semibold text-white">Torii</span>
          <span>•</span>
          <span>Gateway to Tanuki, Kitsune & Gumiho</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href={REALMS.tanuki.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Tanuki</a>
          <a href={REALMS.kitsune.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Kitsune</a>
          <a href={REALMS.gumiho.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Gumiho</a>
        </div>
      </div>
    </footer>
  );
}
