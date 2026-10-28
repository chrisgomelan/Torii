import React from "react";

interface IconProps {
  className?: string;
}

/** The Sacred Shinto Torii Gate Icon */
export function ToriiGateIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {/* Top curved lintel (Kasagi) */}
      <path d="M2 5c6-2 14-2 20 0" />
      {/* Secondary horizontal beam (Shimaki/Nuki) */}
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="4" y1="11" x2="20" y2="11" />
      {/* Left pillar (Hashira) */}
      <line x1="7" y1="5" x2="6" y2="21" />
      {/* Right pillar (Hashira) */}
      <line x1="17" y1="5" x2="18" y2="21" />
      {/* Central tablet / Gakuzuka */}
      <rect x="11" y="8" width="2" height="3" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

/** Tanuki Raccoon Mask Icon */
export function TanukiMaskIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 8l3-5 3 3" />
      <path d="M20 8l-3-5-3 3" />
      <circle cx="12" cy="14" r="8" />
      <ellipse cx="8.5" cy="13" rx="2.2" ry="1.6" fill="currentColor" fillOpacity="0.3" />
      <ellipse cx="15.5" cy="13" rx="2.2" ry="1.6" fill="currentColor" fillOpacity="0.3" />
      <circle cx="8.5" cy="13" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="13" r="0.8" fill="currentColor" />
      <path d="M12 15.5v1m-1 1h2" />
      <path d="M12 6c-1-2 1-3 2-3s1 2 0 3-2 0-2 0z" fill="currentColor" />
    </svg>
  );
}

/** Celestial Kitsune Mask Icon */
export function KitsuneMaskIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 5l4 4-2 7 6 5 6-5-2-7 4-4-5 1-3-3-3 3z" />
      <ellipse cx="8" cy="13" rx="1.5" ry="2" fill="currentColor" fillOpacity="0.4" />
      <ellipse cx="16" cy="13" rx="1.5" ry="2" fill="currentColor" fillOpacity="0.4" />
      <line x1="12" y1="16" x2="12" y2="18" />
    </svg>
  );
}

/** Gumiho Mystic Nine-Tails Crest Icon */
export function GumihoCrestIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2C8 6 4 11 4 16a8 8 0 0 0 16 0c0-5-4-10-8-14z" />
      <path d="M12 8c-2 2-3 4-3 6a3 3 0 0 0 6 0c0-2-1-4-3-6z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

export function SparklesIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
      <path d="M19 4v4M17 6h4" />
    </svg>
  );
}

export function ExternalArrowIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  );
}
