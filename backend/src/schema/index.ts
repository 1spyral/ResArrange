import { GraphQLSchema } from "graphql/type"
import { query } from "./query"
import { mutation } from "./mutation"

export const schema = new GraphQLSchema({
    query,
    mutation
})