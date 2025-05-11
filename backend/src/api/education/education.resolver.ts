import { Skill } from "@/api/skill"
import { checkNotNull, checkNotNullOrEmpty } from "@/helpers/validateInput"
import { Education, CreateEducationInput, UpdateEducationInput } from "."
import { Context } from "@/graphql/context"
import { extractRelations } from "@/helpers/extractRelations"
import { GraphQLInt, GraphQLResolveInfo } from "graphql"
import {
    Arg,
    Authorized,
    Ctx,
    Info,
    Mutation,
    Query,
    Resolver
} from "type-graphql"

@Resolver(Education)
export class EducationResolver {
    @Authorized()
    @Query(() => Education, { name: "education", nullable: true })
    async getEducation(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<Education | null> {
        const populate = extractRelations(info)

        return await em.findOne(
            Education,
            { id, user: user!.id },
            { populate }
        )
    }

    @Authorized()
    @Query(() => [Education], { name: "educations" })
    async getEducations(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context
    ): Promise<Education[]> {
        const populate = extractRelations(info)

        return await em.find(
            Education,
            { user: user!.id },
            { populate }
        )
    }

    @Authorized()
    @Mutation(() => Education)
    async createEducation(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => CreateEducationInput) input: CreateEducationInput
    ): Promise<Education> {
        const populate = extractRelations(info)

        const education = em.create(Education, {
            ...input,
            user: user!.id,
            skills: input.skillIds.map(id => em.getReference(Skill, id))
        })

        await em.flush()

        await em.populate(education, populate)

        return education
    }

    @Authorized()
    @Mutation(() => Education)
    async updateEducation(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => UpdateEducationInput) input: UpdateEducationInput
    ): Promise<Education> {
        checkNotNullOrEmpty(
            input.institution,
            "institution cannot be null or empty, omit field instead"
        )
        checkNotNullOrEmpty(
            input.degree,
            "degree cannot be null or empty, omit field instead"
        )
        checkNotNullOrEmpty(
            input.location,
            "location cannot be null or empty, omit field instead"
        )
        checkNotNull(
            input.startDate,
            "startDate cannot be null, omit field instead"
        )
        checkNotNull(input.points, "points cannot be null, omit field instead")
        checkNotNull(
            input.courses,
            "courses cannot be null, omit field instead"
        )
        checkNotNull(
            input.skillIds,
            "skillIds cannot be null, omit field instead"
        )

        const populate = extractRelations(info)

        const education = await em.findOneOrFail(
            Education,
            { id: input.id, user: user!.id },
            { populate }
        )

        em.assign(
            education,
            {
                ...input,
                startDate: input.startDate?.toISOString(),
                endDate:
                    input.endDate === null
                        ? null
                        : input.endDate?.toISOString(),
                skills: input.skillIds
                    ? input.skillIds.map(id => em.getReference(Skill, id))
                    : undefined,
                skillIds: undefined
            },
            { ignoreUndefined: true }
        )

        await em.flush()

        education.startDate = new Date(education.startDate)
        education.endDate = education.endDate
            ? new Date(education.endDate)
            : undefined

        return education
    }

    @Authorized()
    @Mutation(() => Boolean)
    async deleteEducation(
        @Ctx() { user, em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<boolean> {
        return !!(await em.nativeDelete(Education, { id, user: user!.id }))
    }
}
