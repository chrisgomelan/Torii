import type { Metadata } from "next";
import "./globals.css";
import { ToriiNavbar } from "@/components/ToriiNavbar";
import { ToriiFooter } from "@/components/ToriiFooter";

export const metadata: Metadata = {
  title: "Torii — Gate to Tanuki, Kitsune & Gumiho",
  description: "Minimalist gateway to Movies (Tanuki), Anime (Kitsune), and Series (Gumiho).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#08080a] text-zinc-100 antialiased flex flex-col">
        <ToriiNavbar />
        <main className="flex-1">{children}</main>
        <ToriiFooter />
      </body>
    </html>
  );
}
