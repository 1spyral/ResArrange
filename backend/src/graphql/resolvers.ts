import { AuthResolver } from "@/api/auth"
import { ProjectResolver } from "@/api/project"
import { UserResolver } from "@/api/user"

export const resolvers = [AuthResolver, ProjectResolver, UserResolver]
