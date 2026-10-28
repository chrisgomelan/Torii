import { REALMS } from "@/lib/realm-config";
import type { OmniSearchResult, OracleSuggestion } from "@/types/torii";

const CINEMETA_BASE = "https://v3-cinemeta.strem.io";
const JIKAN_BASE = "https://api.jikan.moe/v4";
const TVMAZE_BASE = "https://api.tvmaze.com";

export async function searchMovies(query: string, limit = 5): Promise<OmniSearchResult[]> {
  try {
    const res = await fetch(`${CINEMETA_BASE}/catalog/movie/top/search=${encodeURIComponent(query)}.json`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.metas)) {
        return data.metas.slice(0, limit).map((m: any) => ({
          id: m.id,
          realmId: "tanuki" as const,
          realmName: "Tanuki (Movies)",
          title: m.name ?? "Untitled Movie",
          subtitle: m.director ? `Dir. ${Array.isArray(m.director) ? m.director[0] : m.director}` : undefined,
          year: m.releaseInfo ?? m.year ? String(m.releaseInfo ?? m.year) : "2024",
          score: m.imdbRating ? `${m.imdbRating} ★` : "7.5 ★",
          poster: m.poster ?? "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80",
          genre: Array.isArray(m.genres) ? m.genres[0] : "Cinema",
          watchUrl: `${REALMS.tanuki.url}/movie/${m.id}`,
        }));
      }
    }
  } catch (err) {
    console.warn("[omni] Movie search fallback:", err);
  }
  return [];
}

export async function searchAnime(query: string, limit = 5): Promise<OmniSearchResult[]> {
  try {
    const res = await fetch(`${JIKAN_BASE}/anime?q=${encodeURIComponent(query)}&limit=${limit}&order_by=popularity`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.data)) {
        return data.data.slice(0, limit).map((a: any) => ({
          id: a.mal_id,
          realmId: "kitsune" as const,
          realmName: "Kitsune (Anime)",
          title: a.title ?? "Untitled Anime",
          subtitle: a.title_english && a.title_english !== a.title ? a.title_english : undefined,
          year: a.year ? String(a.year) : (a.aired?.from ? a.aired.from.slice(0, 4) : "Anime"),
          score: a.score ? `${a.score} ★` : "8.0 ★",
          poster: a.images?.webp?.large_image_url || a.images?.jpg?.image_url || "",
          genre: Array.isArray(a.genres) && a.genres[0] ? a.genres[0].name : "Anime",
          watchUrl: `${REALMS.kitsune.url}/anime/${a.mal_id}`,
        }));
      }
    }
  } catch (err) {
    console.warn("[omni] Anime search fallback:", err);
  }
  return [];
}

export async function searchSeries(query: string, limit = 5): Promise<OmniSearchResult[]> {
  try {
    const res = await fetch(`${TVMAZE_BASE}/search/shows?q=${encodeURIComponent(query)}`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        return data.slice(0, limit).map((item: any) => {
          const s = item.show;
          return {
            id: s.id,
            realmId: "gumiho" as const,
            realmName: "Gumiho (Series)",
            title: s.name ?? "Untitled Series",
            subtitle: s.network?.name ?? s.webChannel?.name ?? undefined,
            year: s.premiered ? s.premiered.slice(0, 4) : "Series",
            score: s.rating?.average ? `${s.rating.average} ★` : "8.0 ★",
            poster: s.image?.medium ?? s.image?.original ?? "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=80",
            genre: Array.isArray(s.genres) && s.genres[0] ? s.genres[0] : "Drama",
            watchUrl: `${REALMS.gumiho.url}/series/${s.id}`,
          };
        });
      }
    }
  } catch (err) {
    console.warn("[omni] Series search fallback:", err);
  }
  return [];
}

export async function omniSearch(query: string): Promise<OmniSearchResult[]> {
  const q = query.trim();
  if (!q) return [];
  const [movies, anime, series] = await Promise.all([
    searchMovies(q, 4),
    searchAnime(q, 4),
    searchSeries(q, 4),
  ]);
  return [...movies, ...anime, ...series];
}

export const ORACLE_DESTINATIONS: OracleSuggestion[] = [
  {
    realmId: "tanuki",
    realmName: "Tanuki Realm",
    title: "Oppenheimer",
    synopsis: "The gripping biographical epic of J. Robert Oppenheimer, architect of the atomic bomb, and the moral devastation that ensued.",
    genre: "Drama / History",
    year: "2023",
    rating: "8.9 / 10",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    url: `${REALMS.tanuki.url}/movie/872585`,
    omen: "The fire of creation beckons. Confront history at its turning point.",
  },
  {
    realmId: "kitsune",
    realmName: "Kitsune Realm",
    title: "Frieren: Beyond Journey's End",
    synopsis: "An immortal elven mage embarks on a nostalgic quest to understand the fleeting hearts of humanity long after defeating the Demon King.",
    genre: "Fantasy / Adventure",
    year: "2023",
    rating: "9.3 / 10",
    poster: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    url: `${REALMS.kitsune.url}/anime/52991`,
    omen: "Time passes like a fleeting breath. Cherish the journey beyond the triumph.",
  },
  {
    realmId: "gumiho",
    realmName: "Gumiho Realm",
    title: "Queen of Tears",
    synopsis: "A marital crisis and miraculous rebirth of love between a department store heiress and a supermarket legal director.",
    genre: "Romance / K-Drama",
    year: "2024",
    rating: "8.4 / 10",
    poster: "https://image.tmdb.org/t/p/w500/4n7v7e0e7WnJjFpZJqIeF4q7wLp.jpg",
    url: `${REALMS.gumiho.url}/kdramas`,
    omen: "Tears and reign entwine. Passion shall reignite from the embers of despair.",
  },
  {
    realmId: "tanuki",
    realmName: "Tanuki Realm",
    title: "Dune: Part Two",
    synopsis: "Paul Atreides unites with Chani and the Fremen to wage holy retribution against the conspirators who devastated his lineage.",
    genre: "Sci-Fi / Adventure",
    year: "2024",
    rating: "8.6 / 10",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    url: `${REALMS.tanuki.url}/movie/693134`,
    omen: "The sands of destiny shift. Lead the uprising across the desert.",
  },
  {
    realmId: "kitsune",
    realmName: "Kitsune Realm",
    title: "Jujutsu Kaisen Season 2",
    synopsis: "The Shibuya Incident shatters the sorcery world as cursed spirits launch an all-out assault on Halloween night in Tokyo.",
    genre: "Action / Supernatural",
    year: "2023",
    rating: "8.8 / 10",
    poster: "https://cdn.myanimelist.net/images/anime/1792/138042l.jpg",
    url: `${REALMS.kitsune.url}/anime/51009`,
    omen: "Curse and curse collide under neon skies. Unleash your inner domain.",
  },
  {
    realmId: "gumiho",
    realmName: "Gumiho Realm",
    title: "Severance",
    synopsis: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.",
    genre: "Sci-Fi / Thriller",
    year: "2022",
    rating: "8.7 / 10",
    poster: "https://image.tmdb.org/t/p/w500/mgh4hZqfQJ9uWf3C9eG1tq5H9hK.jpg",
    url: `${REALMS.gumiho.url}/american`,
    omen: "Two lives in one body. Which self are you ready to awaken?",
  },
];
