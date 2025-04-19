import { UserService } from "@/services/UserService"

export interface Context {
    services: {
        user: UserService
    }
    loaders: {

    }
}

export const context: Context = {
    services: {
        user: UserService
    },
    loaders: {

    }
}