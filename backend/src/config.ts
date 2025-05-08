import "dotenv/config"

const env = process.env

export const NODE_ENV = env.NODE_ENV ?? "development"

// Port
export const PORT = env.PORT ? parseInt(env.PORT) : 4000

// Auth
export const JWT_SECRET = env.JWT_SECRET ?? crypto.randomUUID()

// PostgreSQL
export const DB_HOST = env.DB_HOST ?? "localhost"
export const DB_PORT = env.DB_PORT ? parseInt(env.DB_PORT) : 5432
export const DB_USERNAME = env.DB_USERNAME ?? "postgres"
export const DB_PASSWORD = env.DB_PASSWORD
export const DB_NAME = env.DB_NAME ?? "postgres"
