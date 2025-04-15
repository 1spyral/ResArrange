import { IEducation } from "@/models/Education"
import { IExperience } from "@/models/Experience"
import { IProject } from "@/models/Project"
import { ISkill } from "@/models/Skill"

export interface IUser {
    name: string

    phone?: string
    email?: string
    linkedin?: string
    github?: string
    website?: string
    location?: string

    education: IEducation[]
    experience: IExperience[]
    projects: IProject[]
    skills: ISkill[],
}