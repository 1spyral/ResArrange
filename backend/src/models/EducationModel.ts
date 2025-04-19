import { Schema, Document } from "mongoose"
import { IEducation } from "@/interfaces/Education"
import { skillSchema } from "@/models/SkillModel"

export interface EducationDocument extends IEducation, Document {}

export const educationSchema = new Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    location: { type: String, required: true },

    startDate: { type: Date, required: true },
    endDate: { type: Date },

    description: { type: String },
    points: { type: [String] },

    courses: { type: [String] },
    skills: { type: [skillSchema] },
})
