import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

export const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT_NUMBER,
});

export default async function connectToDB() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    console.log("Connected to the database:", result.rows[0].now);
    client.release();
  } catch (err) {
    console.error("Error connecting to the database:", err.stack);
  }
}
