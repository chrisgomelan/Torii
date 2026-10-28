import { REALM_LIST } from "@/lib/realm-config";

export function ToriiFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-8 text-xs text-zinc-500">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="font-semibold text-white">Torii</span>
          <span>•</span>
          <span>Portal Gateway to Digital Realms</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-zinc-400">
          {REALM_LIST.map((realm) => (
            <a
              key={realm.id}
              href={realm.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {realm.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
