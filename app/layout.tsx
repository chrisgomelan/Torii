import type { Metadata } from "next";
import "./globals.css";
import { AtmosphericBackground } from "@/components/AtmosphericBackground";

export const metadata: Metadata = {
  title: "Torii — Portal Gateway",
  description: "Three realms. One gate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#070709] text-zinc-100 antialiased selection:bg-white/20 selection:text-white relative">
        <AtmosphericBackground />
        {children}
      </body>
    </html>
  );
}
