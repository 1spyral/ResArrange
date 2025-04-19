import { schema } from "@/graphql"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"

const server = new ApolloServer({ schema })

await server.start()
console.log("✅ Apollo Server started")

export const apolloMiddleware = expressMiddleware(server)
