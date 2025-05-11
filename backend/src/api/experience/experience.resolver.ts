import { Project } from "@/api/project"
import { checkNotNull, checkNotNullOrEmpty } from "@/helpers/validateInput"
import { CreateExperienceInput, UpdateExperienceInput } from "."
import { Skill } from "@/api/skill"
import { User } from "@/api/user"
import { Context } from "@/graphql/context"
import { extractRelations } from "@/helpers/extractRelations"
import { GraphQLInt, GraphQLResolveInfo } from "graphql"
import { Experience } from "."
import {
    Arg,
    Authorized,
    Ctx,
    Info,
    Mutation,
    Query,
    Resolver,
} from "type-graphql"

@Resolver(Experience)
export class ExperienceResolver {
    @Authorized()
    @Query(() => Experience, { name: "experience", nullable: true })
    async getExperience(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<Experience | null> {
        const populate = extractRelations(info)

        return await em.findOne(
            Experience,
            { id, user: em.getReference(User, user!.id) },
            {
                populate,
            }
        )
    }

    @Authorized()
    @Query(() => [Experience], { name: "experiences" })
    async getExperiences(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context
    ): Promise<Experience[]> {
        const populate = extractRelations(info)

        return await em.find(
            Experience,
            { user: em.getReference(User, user!.id) },
            { populate }
        )
    }

    @Authorized()
    @Mutation(() => Experience)
    async createExperience(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => CreateExperienceInput) input: CreateExperienceInput
    ): Promise<Experience> {
        const populate = extractRelations(info)

        const experience = em.create(Experience, {
            ...input,
            user: em.getReference(User, user!.id),
            skills: input.skillIds.map(id => em.getReference(Skill, id)),
        })

        await em.flush()

        await em.populate(experience, populate)

        return experience
    }

    @Authorized()
    @Mutation(() => Experience)
    async updateExperience(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => UpdateExperienceInput) input: UpdateExperienceInput
    ): Promise<Experience> {
        checkNotNullOrEmpty(
            input.company,
            "company cannot be null or empty, omit field instead"
        )
        checkNotNullOrEmpty(
            input.title,
            "title cannot be null or empty, omit field instead"
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
            input.skillIds,
            "skillIds cannot be null, omit field instead"
        )

        const populate = extractRelations(info)

        const experience = await em.findOneOrFail(
            Experience,
            { id: input.id, user: user!.id },
            { populate }
        )

        em.assign(
            experience,
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
                skillIds: undefined,
            },
            {
                ignoreUndefined: true,
            }
        )

        await em.flush()

        experience.startDate = new Date(experience.startDate)
        experience.endDate = experience.endDate
            ? new Date(experience.endDate)
            : undefined

        return experience
    }

    @Authorized()
    @Mutation(() => Boolean)
    async deleteExperience(
        @Ctx() { user, em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<boolean> {
        return !!(await em.nativeDelete(Experience, { id, user: user!.id }))
    }
}
