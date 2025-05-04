import { Context } from "@/graphql/context"
import { AuthChecker } from "type-graphql"

export const authChecker: AuthChecker<Context> = ({ context }, roles) => {
    if (!context.user) {
        return false
    }

    if (roles.length === 0) {
        return true
    }

    // TODO: check different roles
    return true
}