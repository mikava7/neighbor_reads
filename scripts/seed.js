import { pool } from "../utils/db.js";
const { books } = require("../app/lib/books-data.js");

async function seedBooks(client) {
  console.log("Starting seedBooks function");

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "books" table if it doesn't exist
    const createTable = await pool.query`
      CREATE TABLE IF NOT EXISTS books (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL,
        imageLink VARCHAR(255) NOT NULL,
        language VARCHAR(255) NOT NULL,

        pages INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        year INTEGER NOT NULL
      )
    `;
    console.log(`Created "books" table`);

    // Insert data into the "books" table
    const insertedBooks = await Promise.all(
      books.map(async (book) => {
        return client.sql`
          INSERT INTO books (id, author, country, link, pages, title, year)
          VALUES (${book.id}, ${book.author}, ${book.country}, ${book.link}, ${book.pages}, ${book.title}, ${book.year})
          ON CONFLICT (id) DO NOTHING
        `;
      })
    );

    console.log(`Seeded ${insertedBooks.length} books`);

    return {
      createTable,
      books: insertedBooks,
    };
  } catch (error) {
    console.error("Error seeding books:", error);
    throw error;
  }
}
async function main() {
  // Use pool.connect() instead of db.connect()
  const client = await pool.connect();

  await seedBooks(client);
  await client.release(); // You should release the client back to the pool
}

main().catch((error) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    error
  );
});
