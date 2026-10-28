import { NextResponse } from "next/server";
import { omniSearch } from "@/lib/omni-api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const results = await omniSearch(q);
    return NextResponse.json({ results });
  } catch (err) {
    console.warn("[api/omnisearch] Search failed:", err);
    return NextResponse.json({ results: [] });
  }
}
