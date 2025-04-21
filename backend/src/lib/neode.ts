import { NEO4J_PASSWORD, NEO4J_URI, NEO4J_USERNAME } from "@/config"
import Neode from "neode"

export const neode = new Neode(NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD)
