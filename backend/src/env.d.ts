declare namespace NodeJS {
    interface ProcessEnv {
        // Port
        PORT?: string

        // Auth
        JWT_SECRET: string

        // PostgreSQL
        DB_HOST: string
        DB_PORT: string
        DB_USERNAME: string
        DB_PASSWORD: string
        DB_NAME: string
    }
}
