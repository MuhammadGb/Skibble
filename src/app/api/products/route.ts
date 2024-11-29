// src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase, Product } from "../supabase";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const { data, count, error }: PostgrestResponse<Product> = await supabase
    .from("Products")
    .select("*", { count: "exact" })
    .range(start, end);

  if (error) {
    console.error("Error fetching products:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data, count } ?? [], { status: 200 });
}
