export interface RealmMeta {
  id: "tanuki" | "kitsune" | "gumiho";
  name: string;
  kanji: string;
  guardian: string;
  category: string;
  tagline: string;
  description: string;
  accentHex: string;
  glowClass: string;
  borderClass: string;
  bgGradient: string;
  badgeClass: string;
  badgeText: string;
  url: string;
  features: string[];
  stats: {
    itemsCount: string;
    resolution: string;
    servers: string;
  };
}

export interface OmniSearchResult {
  id: string | number;
  realmId: "tanuki" | "kitsune" | "gumiho";
  realmName: string;
  title: string;
  subtitle?: string;
  year?: string;
  score?: number | string;
  poster: string;
  genre: string;
  watchUrl: string;
}

export interface OracleSuggestion {
  realmId: "tanuki" | "kitsune" | "gumiho";
  realmName: string;
  title: string;
  synopsis: string;
  genre: string;
  year: string;
  rating: string;
  poster: string;
  url: string;
  omen: string;
}
