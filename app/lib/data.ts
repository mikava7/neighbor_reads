import { sql } from "@vercel/postgres";
import { Book } from "./definitions.js";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchBooks() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    const data = await sql<Book>`SELECT * FROM books`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
