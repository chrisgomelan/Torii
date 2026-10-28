import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torii — Portal Gateway",
  description: "The gateway to Tanuki, Kitsune, and Gumiho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
