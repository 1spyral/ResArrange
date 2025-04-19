import { buildSchema } from "type-graphql"
import path from "node:path"
import process from "node:process"

const resolvers = []

export const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(process.cwd(), "schema.graphql"),
})
