import { AuthResolver } from "@/api/auth"
import { EducationResolver } from "@/api/education"
import { ExperienceResolver } from "@/api/experience"
import { ProjectResolver } from "@/api/project"
import { UserResolver } from "@/api/user"

export const resolvers = [
    AuthResolver,
    EducationResolver,
    ExperienceResolver,
    ProjectResolver,
    UserResolver
]
