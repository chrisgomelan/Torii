import { OmniSearch } from "@/components/OmniSearch";
import { RealmPortals } from "@/components/RealmPortals";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 space-y-12">
      {/* Cool, Minimal Hero */}
      <section className="text-center space-y-3 max-w-md mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Torii
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400">
          The gateway to Tanuki, Kitsune, and Gumiho.
        </p>

        {/* Clean, sleek OmniSearch */}
        <div className="pt-3">
          <OmniSearch />
        </div>
      </section>

      {/* The 3 Clean Realm Cards */}
      <section className="pt-2">
        <RealmPortals />
      </section>
    </div>
  );
}
