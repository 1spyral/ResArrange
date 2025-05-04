import { User } from "@/api/user"
import { Context } from "@/graphql/context"
import { extractRelations } from "@/helpers/extractRelations"
import { GraphQLResolveInfo } from "graphql"
import { Authorized, Ctx, Info, Query, Resolver } from "type-graphql"

@Resolver(User)
export class UserResolver {
    @Authorized()
    @Query(() => User, { nullable: true })
    async user(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context
    ): Promise<User | null> {
        const id = user!.id

        const populate = extractRelations(info)

        return await em.findOne(User, id, {
            populate,
        })
    }
}
