import { Schema, Document } from "mongoose"
import { IProject } from "@/interfaces/Project"
import { skillSchema } from "@/models/SkillModel"

export interface ProjectDocument extends IProject, Document {}

export const projectSchema = new Schema({
    title: { type: String, required: true },

    startDate: { type: Date, required: true },
    endDate: { type: Date },

    description: { type: String },
    points: { type: [String], required: true },

    skills: { type: [skillSchema] },

    icon: { type: String, enum: ["github"] },
    website: { type: String },
})
