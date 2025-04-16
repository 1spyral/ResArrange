import { Schema, Document } from "mongoose"
import { ISkill } from "@/interfaces/Skill"

export interface SkillDocument extends ISkill, Document {}

export const skillSchema = new Schema({
    name: { type: String, required: true },
    categories: { type: [String], required: true },
})
