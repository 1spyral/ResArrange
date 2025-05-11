import { checkNotNull, checkNotNullOrEmpty } from "@/helpers/validateInput"
import { Project, CreateProjectInput, UpdateProjectInput } from "."
import { Skill } from "@/api/skill"
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

        return await em.findOne(Project, { id, user: user!.id }, { populate })
    }

    @Authorized()
    @Query(() => [Project], { name: "projects" })
    async getProjects(
        @Info() info: GraphQLResolveInfo,
        @Ctx() { user, em }: Context
    ): Promise<Project[]> {
        const populate = extractRelations(info)

        return await em.find(Project, { user: user!.id }, { populate })
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
            user: user!.id,
            skills: input.skillIds.map(id => em.getReference(Skill, id))
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
        checkNotNullOrEmpty(
            input.title,
            "title cannot be null or empty, omit field instead"
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

        const project = await em.findOneOrFail(Project, {
            id: input.id,
            user: user!.id
        })

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
                skillIds: undefined
            },
            { ignoreUndefined: true }
        )

        await em.flush()

        project.startDate = new Date(project.startDate)
        project.endDate = project.endDate
            ? new Date(project.endDate)
            : undefined

        await em.populate(project, populate)

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
