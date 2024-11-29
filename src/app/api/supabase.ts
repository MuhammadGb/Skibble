import { createClient } from "@supabase/supabase-js";

export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
};

type Database = {
  products: Product;
};
const supabaseUrl = "https://cteyhxnnsrdemdfgmzul.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0ZXloeG5uc3JkZW1kZmdtenVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2NTgwODgsImV4cCI6MjA0ODIzNDA4OH0.8iwNpu1GdZkBs81MxiKSqCvWLPf50C5kJ8GgKsZu9Zo";
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
