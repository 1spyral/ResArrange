import { Project, ProjectResolver } from "@/api/project"
import { User } from "@/api/user"
import { Context } from "@/graphql/context"
import { Payload } from "@/types/payload"
import { GraphQLResolveInfo } from "graphql"
import { orm } from "@test/jest.setup"

jest.mock("@/helpers/extractRelations")

describe("ProjectResolver", () => {
    let mockContext: Context
    let projectResolver: ProjectResolver

    beforeEach(async () => {
        mockContext = {
            user: {
                id: 1,
            } as Payload,
            em: orm.em.fork(),
        }

        const em = orm.em.fork()

        em.create(User, {
            email: "test@test.com",
        })

        await em.flush()
        projectResolver = new ProjectResolver()
    })

    it("should create a project", async () => {
        await projectResolver.createProject(
            {} as unknown as GraphQLResolveInfo,
            mockContext,
            {
                title: "Test Project",
                points: [],
                skillIds: [],
                startDate: new Date(),
            }
        )

        const em = orm.em.fork()

        const result = await em.findOne(Project, { title: "Test Project" })

        expect(result).toBeInstanceOf(Project)
        expect(result?.title).toBe("Test Project")
    })
})
