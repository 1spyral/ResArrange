import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "@/config"
import { MikroORM } from "@mikro-orm/postgresql"

const config = {
    entities: ["./dist/**/*.entity.js"],
    entitiesTs: ["./src/**/*.entity.ts"],
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    dbName: DB_NAME,
}

export const orm = await MikroORM.init(config)
