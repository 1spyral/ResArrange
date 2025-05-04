import { User } from "@/api/user"
import { Context } from "@/graphql/context"
import { Auth, ProviderType } from "."
import { JWT_SECRET } from "@/config"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Arg, Ctx, Mutation, Resolver } from "type-graphql"
import validator from "validator"

@Resolver(Auth)
export class AuthResolver {
    @Mutation(() => String, {
        description: "Returns a JWT token of the created user's session",
    })
    async signup(
        @Ctx() { em }: Context,
        @Arg("username", () => String) username: string,
        @Arg("password", () => String) password: string
    ): Promise<string> {
        if (!validator.isEmail(username)) {
            throw new Error("Invalid email format")
        }
        if (!username || !password) {
            throw new Error("Username and password are required")
        }

        // Check if user already exists
        const existingUser = await em.findOne(Auth, { username })
        if (existingUser) {
            // TODO: Check password and login if it matches
            throw new Error("User already exists")
        }

        // Create new user
        const user = em.create(User, {
            email: username,
        })

        await em.flush()

        // Hash the password
        password = bcrypt.hashSync(password, 12)

        // Create auth record
        const auth = em.create(Auth, {
            user: user.id,
            provider: ProviderType.PASSWORD,
            username,
            password,
        })

        await em.flush()

        return jwt.sign(
            {
                id: auth.user.id,
            },
            JWT_SECRET,
            { expiresIn: "12h" }
        )
    }

    @Mutation(() => String, {
        description: "Returns a JWT token of the logged in user",
    })
    async login(
        @Ctx() { em }: Context,
        @Arg("username", () => String) username: string,
        @Arg("password", () => String) password: string
    ): Promise<string> {
        if (!validator.isEmail(username)) {
            throw new Error("Invalid email format")
        }
        if (!username || !password) {
            throw new Error("Username and password are required")
        }

        // Check if user exists
        const auth = await em.findOne(
            Auth,
            { username },
            { populate: ["user.id"] }
        )
        if (!auth) {
            throw new Error("User not found")
        }

        // Check password
        const isValid = bcrypt.compareSync(password, auth.password!)
        if (!isValid) {
            throw new Error("Invalid password")
        }

        return jwt.sign(
            {
                id: auth.user.id,
            },
            JWT_SECRET,
            { expiresIn: "12h" }
        )
    }
}
