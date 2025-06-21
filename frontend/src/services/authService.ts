import client from "@/apollo/client.ts"
import {
    LoginDocument,
    type LoginMutation,
    type LoginMutationVariables,
} from "@/gql/graphql.ts"

export class AuthService {
    async login(username: string, password: string) {
        const { data } = await client.query<
            LoginMutation,
            LoginMutationVariables
        >({
            query: LoginDocument,
            variables: { username, password },
        })

        console.log(data.login)

        return data.login
    }
}
