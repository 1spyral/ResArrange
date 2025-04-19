import { Schema, Document } from "mongoose"
import { IExperience } from "@/interfaces/Experience"
import { skillSchema } from "@/models/SkillModel"

export interface ExperienceDocument extends IExperience, Document {}

export const experienceSchema = new Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },

    startDate: { type: Date, required: true },
    endDate: { type: Date },

    description: { type: String },
    points: { type: [String] },

    skills: { type: [skillSchema] },
})
