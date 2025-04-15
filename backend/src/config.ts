import dotenv from "dotenv"

dotenv.config()

const env = process.env

export const PORT = env.PORT || 3000
