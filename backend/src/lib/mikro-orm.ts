import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME,
    NODE_ENV,
} from "@/config"
import { MikroORM } from "@mikro-orm/postgresql"
import * as fs from "node:fs"

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

if (NODE_ENV === "development") {
    const schemaGenerator = orm.getSchemaGenerator()
    const dump = await schemaGenerator.getCreateSchemaSQL()
    fs.writeFileSync("./schema.sql", dump)
    console.log("Schema dumped to schema.sql")
}
