import { pool } from "@/utils/connectToDB.js";

export async function fetchBooks() {
  try {
    // Query the database using the pool
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch books data.");
  }
}
