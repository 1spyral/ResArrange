import { Context } from "@/context"
import { extractRelations } from "@/helpers/extractRelations"
import { User } from "@/models/User"
import { GraphQLResolveInfo } from "graphql"
import { Arg, Ctx, Info, Int, Mutation, Query, Resolver } from "type-graphql"

@Resolver(User)
export class UserResolver {
    @Query(() => User, { nullable: true })
    async user(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { em }: Context,
        @Arg("id", () => Int) id: number
    ): Promise<User | null> {
        const populate = extractRelations(info)

        return await em.findOne(User, id, {
            populate,
        })
    }
}
