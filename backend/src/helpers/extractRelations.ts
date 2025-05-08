import { GraphQLResolveInfo } from "graphql"
import graphqlFields from "graphql-fields"

export function extractRelations(info: GraphQLResolveInfo): false {
    const fields = graphqlFields(info)

    return extractRelationsFromFields(fields) as unknown as false
}

function extractRelationsFromFields(fields: any, prefix = ""): string[] {
    const relations: string[] = []

    for (const key in fields) {
        if (Object.keys(fields[key]).length > 0) {
            const path = prefix ? `${prefix}.${key}` : key
            relations.push(path)
            relations.push(...extractRelationsFromFields(fields[key], path))
        }
    }

    return relations
}
