import mongoose, { Schema, Document } from "mongoose"
import { IUser } from "@/interfaces/User"
import { educationSchema } from "@/models/EducationModel"
import { experienceSchema } from "@/models/ExperienceModel"
import { projectSchema } from "@/models/ProjectModel"
import { skillSchema } from "@/models/SkillModel"

export interface UserDocument extends IUser, Document {}

const userSchema = new Schema({
    name: { type: String, required: true },

    phone: { type: String },
    email: { type: String },
    linkedin: { type: String },
    github: { type: String },
    website: { type: String },
    location: { type: String },

    education: { type: [educationSchema], required: true },
    experience: { type: [experienceSchema], required: true },
    projects: { type: [projectSchema], required: true },
    skills: { type: [skillSchema], required: true },
})

export const UserModel = mongoose.model<UserDocument>("User", userSchema)
