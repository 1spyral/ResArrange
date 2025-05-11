import { Skill } from "."
import { Context } from "@/graphql/context"
import { extractRelations } from "@/helpers/extractRelations"
import { GraphQLInt, GraphQLResolveInfo } from "graphql"
import { Arg, Ctx, Info, Mutation, Query, Resolver } from "type-graphql"

@Resolver(Skill)
export class SkillResolver {
    @Query(() => Skill, { name: "skill", nullable: true })
    async getSkill(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<Skill | null> {
        const populate = extractRelations(info)

        return await em.findOne(Skill, { id }, { populate })
    }

    @Query(() => [Skill], { name: "autocompleteSkills" })
    async getAutocompleteSkills(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { em }: Context,
        @Arg("query", () => String) query: string
    ): Promise<Skill[]> {
        const populate = extractRelations(info)

        // TODO: implement autocomplete logic

        return []
    }

    @Mutation(() => Skill)
    async createSkill(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { em }: Context,
        @Arg("name", () => String) name: string
    ): Promise<Skill> {
        const populate = extractRelations(info)

        // TODO: search for existing skill by name

        const skill = em.create(Skill, { name })

        await em.flush()

        await em.populate(skill, populate)

        return skill
    }
}
