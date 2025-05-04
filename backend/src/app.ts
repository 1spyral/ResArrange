import { apolloMiddleware } from "@/graphql/server"
import { authenticateToken } from "@/middleware/authenticateToken"
import cors from "cors"
import express from "express"

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get("/", (req, res) => {
    res.send("Root endpoint")
})

app.use("/graphql", authenticateToken, apolloMiddleware)
