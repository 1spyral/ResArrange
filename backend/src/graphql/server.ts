import { authChecker } from "@/graphql/authChecker"
import { Context, context } from "@/graphql/context"
import { resolvers } from "@/graphql/resolvers"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import path from "node:path"
import process from "node:process"
import { buildSchema } from "type-graphql"

const server = new ApolloServer<Context>({
    schema: await buildSchema({
        resolvers,
        authChecker,
        emitSchemaFile: path.resolve(process.cwd(), "schema.graphql"),
    }),
})

await server.start()
console.log("✅ Apollo Server started")

export const apolloMiddleware = expressMiddleware(server, {
    context,
})
