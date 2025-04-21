import { NEO4J_PASSWORD, NEO4J_URI, NEO4J_USERNAME } from "@/config"
import { Neode } from "@bytebunker/neode"

export const neode = new Neode({
    connectionString: NEO4J_URI,
    username: NEO4J_USERNAME,
    password: NEO4J_PASSWORD,
    enterprise: false,
})
