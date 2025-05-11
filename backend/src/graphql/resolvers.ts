import { AuthResolver } from "@/api/auth"
import { ExperienceResolver } from "@/api/experience"
import { ProjectResolver } from "@/api/project"
import { UserResolver } from "@/api/user"

export const resolvers = [
    AuthResolver,
    ExperienceResolver,
    ProjectResolver,
    UserResolver
]
