import { Request, Router } from "express"
import { UserService } from "@/services/UserService"

export const userRoutes = Router()

userRoutes.get("/", async (req: Request<{}, {}, {}, { id: string }>, res) => {
    try {
        const { id } = req.query

        if (!id) {
            res.status(400).send({ error: "ID is required" })
        }

        const user = await UserService.getUser(id)

        if (user) {
            res.send(user)
        } else {
            res.status(404).send({ error: "User not found" })
        }
    } catch (error) {
        if (error instanceof Error && error.name === "BSONError") {
            res.status(400).send({ error: "Invalid ID format" })
        } else {
            console.error("Error fetching user:", error)
            res.status(500).send({ error: "Internal Server Error" })
        }
    }
})

userRoutes.post("/", async (req: Request, res) => {
    try {
        const { input } = req.body

        const user = await UserService.createUser(input)

        res.send(user)
    } catch (error) {
        if (error instanceof Error && error.name === "BSONError") {
            res.status(400).send({ error: "Invalid input" })
        } else {
            console.error("Error creating user:", error)
            res.status(500).send({ error: "Internal Server Error" })
        }
    }
})
