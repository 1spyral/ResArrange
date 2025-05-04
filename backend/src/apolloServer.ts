import { Context } from "@/context"
import { orm } from "@/lib/mikro-orm"
import { resolvers } from "@/resolvers"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import path from "node:path"
import process from "node:process"
import { buildSchema } from "type-graphql"

const server = new ApolloServer<Context>({
    schema: await buildSchema({
        resolvers,
        emitSchemaFile: path.resolve(process.cwd(), "schema.graphql"),
    }),
})

await server.start()
console.log("✅ Apollo Server started")

export const apolloMiddleware = expressMiddleware(server, {
    context: async () => ({
        em: orm.em.fork(),
    }),
})
