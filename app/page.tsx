import { ToriiGateIcon } from "@/components/Icons";
import { OmniSearch } from "@/components/OmniSearch";
import { RealmPortals } from "@/components/RealmPortals";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="w-full max-w-4xl space-y-10 sm:space-y-12">
        {/* Gateway Emblem & Header */}
        <section className="text-center space-y-3 max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10 text-white">
              <ToriiGateIcon className="size-6 text-white" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Torii
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
            The gateway to all realms.
          </p>

          {/* OmniSearch */}
          <div className="pt-2">
            <OmniSearch />
          </div>
        </section>

        {/* Portal Realm Cards */}
        <section className="w-full">
          <RealmPortals />
        </section>
      </div>
    </main>
  );
}
