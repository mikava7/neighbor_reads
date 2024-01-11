import { Pool } from "pg";

// Create a pool for PostgreSQL connections (configure with your database details)
const pool = new Pool({
  user: "iraklisql",
  host: "127.0.0.1",
  database: "testdata",
  password: "1991",
  port: "5432",
});

export default pool;
