declare namespace NodeJS {
    interface ProcessEnv {
        // Port
        PORT?: string

        // MongoDB
        MONGODB_URI: string

        // Neo4j
        NEO4J_URI: string
        NEO4J_USERNAME: string
        NEO4J_PASSWORD: string
    }
}
