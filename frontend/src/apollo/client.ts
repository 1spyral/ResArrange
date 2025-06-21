import { useAuthStore } from "@/stores"
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API_URL,
})

const authLink = setContext((_, { headers }) => {
    const { bearerToken } = useAuthStore.getState()

    return {
        headers: {
            ...headers,
            authorization: bearerToken ? `Bearer ${bearerToken}` : "",
        },
    }
})

const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
        },
        query: {
            fetchPolicy: "no-cache",
        },
        mutate: {
            fetchPolicy: "no-cache",
        },
    },
})

export default client
