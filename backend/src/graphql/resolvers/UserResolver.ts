import { Arg, Query, Resolver } from "type-graphql"
import { UserDTO } from "../types/UserDTO"

@Resolver(UserDTO)
export class UserResolver {

    @Query(() => UserDTO, { nullable: true })
    async user(@Arg("id", () => String) id: string) {
        return null
    }
}
