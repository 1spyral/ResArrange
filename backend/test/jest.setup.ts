import { MikroORM } from "@mikro-orm/postgresql"
import {
    PostgreSqlContainer,
    StartedPostgreSqlContainer,
} from "@testcontainers/postgresql"

let container: StartedPostgreSqlContainer
export let orm: MikroORM

beforeAll(async () => {
    container = await new PostgreSqlContainer()
        .withHostname("localhost")
        .withExposedPorts(5432)
        .withDatabase("test")
        .withUsername("test")
        .withPassword("test")
        .start()

    const config = {
        entities: ["./dist/**/*.entity.js"],
        entitiesTs: ["./src/**/*.entity.ts"],
        host: container.getHost(),
        port: container.getMappedPort(),
        user: container.getUsername(),
        password: container.getPassword(),
        dbName: container.getDatabase(),
    }

    orm = await MikroORM.init(config)

    await orm.getSchemaGenerator().createSchema()
})

afterAll(async () => {
    await container.stop()
})
