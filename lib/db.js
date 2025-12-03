import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // Fail fast with a clear message instead of trying localhost
  throw new Error(
    "DATABASE_URL is not set. Configure it in your environment settings."
  );
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export default pool;
