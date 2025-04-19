import cors from "cors"
import express from "express"
import { userRoutes } from "@/routes/userRoutes"
import { apolloMiddleware } from "@/apolloServer"

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get("/", (req, res) => {
    res.send("Root endpoint")
})

app.use("/user", userRoutes)

app.use("/graphql", apolloMiddleware)
