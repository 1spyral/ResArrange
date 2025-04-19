import express from "express"
import { userRoutes } from "@/routes/userRoutes"

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Root endpoint")
})

app.use("/user", userRoutes)
