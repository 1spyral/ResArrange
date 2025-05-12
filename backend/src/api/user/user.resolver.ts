import { Skill } from "@/api/skill"
import { checkNotNullOrEmpty } from "@/helpers/validateInput"
import { User } from "."
import { UpdateUserInput } from "@/api/user/user.input"
import { Context } from "@/graphql/context"
import { extractRelations } from "@/helpers/extractRelations"
import { GraphQLResolveInfo } from "graphql"
import {
    Arg,
    Authorized,
    Ctx,
    Info,
    Mutation,
    Query,
    Resolver
} from "type-graphql"

@Resolver(User)
export class UserResolver {
    @Authorized()
    @Query(() => User, { name: "user" })
    async getUser(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context
    ): Promise<User> {
        const id = user!.id

        const populate = extractRelations(info)

        const result = await em.findOne(User, id, { populate })

        return result!
    }

    @Authorized()
    @Mutation(() => User)
    async updateUser(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => UpdateUserInput) input: UpdateUserInput
    ): Promise<User> {
        checkNotNullOrEmpty(
            input.name,
            "Name cannot be null or empty, omit field instead"
        )

        const id = user!.id

        const populate = extractRelations(info)

        const result = (await em.findOne(User, id, { populate }))!

        em.assign(
            result,
            {
                ...input,
                skills: input.skillIds?.map(id => em.getReference(Skill, id)),
                skillIds: undefined
            },
            { ignoreUndefined: true }
        )

        await em.flush()

        await em.populate(result, populate)

        return result
    }
}
