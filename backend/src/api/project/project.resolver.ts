import { Project } from "@/api/project/project.entity"
import {
    CreateProjectInput,
    UpdateProjectInput,
} from "@/api/project/project.input"
import { Skill } from "@/api/skill"
import { User } from "@/api/user"
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
    Resolver,
} from "type-graphql"

@Resolver(Project)
export class ProjectResolver {
    @Authorized()
    @Query(() => Project, { name: "project", nullable: true })
    async getProject(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<Project | null> {
        const populate = extractRelations(info)

        return await em.findOne(
            Project,
            { id, user: em.getReference(User, user!.id) },
            {
                populate,
            }
        )
    }

    @Authorized()
    @Mutation(() => Project)
    async createProject(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => CreateProjectInput) input: CreateProjectInput
    ): Promise<Project> {
        const populate = extractRelations(info)

        const project = em.create(Project, {
            ...input,
            user: em.getReference(User, user!.id),
            skills: input.skillIds.map(id => em.getReference(Skill, id)),
        })

        await em.flush()

        await em.populate(project, populate)

        return project
    }

    @Authorized()
    @Mutation(() => Project)
    async updateProject(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context,
        @Arg("input", () => UpdateProjectInput) input: UpdateProjectInput
    ): Promise<Project> {
        if (
            input.title === null ||
            (typeof input.title === "string" && !input.title?.trim())
        ) {
            throw Error("Title cannot be null or empty, omit field instead")
        }
        if (input.startDate === null) {
            throw Error("Start date cannot be null, omit field instead")
        }
        if (input.points === null) {
            throw Error("Points cannot be null, omit field instead")
        }
        if (input.skillIds === null) {
            throw Error("Skill IDs cannot be null, omit field instead")
        }

        const populate = extractRelations(info)

        const project = await em.findOneOrFail(
            Project,
            { id: input.id, user: user!.id },
            { populate }
        )

        em.assign(
            project,
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

        project.startDate = new Date(project.startDate)
        project.endDate = project.endDate
            ? new Date(project.endDate)
            : undefined

        return project
    }

    @Authorized()
    @Mutation(() => Boolean)
    async deleteProject(
        @Ctx() { user, em }: Context,
        @Arg("id", () => GraphQLInt) id: number
    ): Promise<boolean> {
        return !!(await em.nativeDelete(Project, { id, user: user!.id }))
    }
}
