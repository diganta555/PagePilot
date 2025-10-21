import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

// ...existing code...
export default defineConfig({
  out: './drizzle',
  schema: './config/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});