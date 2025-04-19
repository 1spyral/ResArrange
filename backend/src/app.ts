import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import { schema } from "@/schema"
import { context } from "@/Context"
import { userRoutes } from "@/routes/userRoutes"

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Root endpoint")
})

app.use("/user", userRoutes)

app.all("/graphql", createHandler({
    schema,
    context: context as any
}))
