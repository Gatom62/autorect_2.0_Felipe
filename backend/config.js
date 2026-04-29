import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Forzar la ruta correcta del .env
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, ".env") });

export const config = {
  db: {
    URI: process.env.DB_URI,
  },
  JWT: {
    secret: process.env.JWT_secret_key,
  },
  email: {
    senderEmail: process.env.SENDER_EMAIL || process.env.USER_EMAIL,
    senderPassword: process.env.SENDER_PASSWORD || process.env.USER_PASSWORD,
  },
  app: {
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  },
};