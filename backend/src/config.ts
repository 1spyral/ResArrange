import "dotenv/config"

const env = process.env

// Port
export const PORT = env.PORT ? parseInt(env.PORT) : 4000

// MongoDB
export const MONGODB_URI = env.MONGODB_URI

// Neo4j
export const NEO4J_URI = env.NEO4J_URI ?? "bolt://localhost:7687"
export const NEO4J_USERNAME = env.NEO4J_USERNAME ?? "neo4j"
export const NEO4J_PASSWORD = env.NEO4J_PASSWORD
