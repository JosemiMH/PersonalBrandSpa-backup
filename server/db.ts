import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Check if DATABASE_URL is set
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn(
    "⚠️  WARNING: DATABASE_URL is not set. Database features will not work.",
  );
  console.warn("The application will run but database operations will fail.");
}

// Create pool only if DATABASE_URL is available
export const pool = databaseUrl ? new Pool({ connectionString: databaseUrl }) : null;
export const db = pool ? drizzle({ client: pool, schema }) : null;