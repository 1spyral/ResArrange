import "reflect-metadata"

import { app } from "@/app"
import { PORT } from "@/config"
import { connectDB } from "@/lib/mongoose"

await connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
