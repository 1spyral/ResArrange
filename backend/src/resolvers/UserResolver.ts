import { Context } from "@/context"
import { extractRelations } from "@/helpers/extractRelations"
import { User } from "@/models/User"
import { Populate } from "@mikro-orm/core"
import { GraphQLResolveInfo } from "graphql"
import { Arg, Ctx, Info, Int, Query, Resolver } from "type-graphql"

@Resolver(User)
export class UserResolver {
    @Query(() => User, { nullable: true })
    async user(
        @Arg("id", () => Int) id: number,
        @Ctx() { em }: Context,
        @Info() info: GraphQLResolveInfo
    ): Promise<User | null> {
        const populate = extractRelations(info)

        return await em.findOne(User, id, {
            populate: populate as unknown as Populate<User, string>,
        })
    }
}
