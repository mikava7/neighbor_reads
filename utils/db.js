import { Pool } from "pg";

// Create a pool for PostgreSQL connections (configure with your database details)
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "neighbor_reads",
  password: "JOANmadu365A",
  port: "5432",
});

export default pool;
