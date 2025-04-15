import dotenv from "dotenv"

dotenv.config()

const env = process.env

// Port
export const PORT = env.PORT ? parseInt(env.PORT) : 3000

// MongoDB
export const MONGODB_URI = env.MONGODB_URI