import { IEducation } from "@/interfaces/Education"
import { IExperience } from "@/interfaces/Experience"
import { IProject } from "@/interfaces/Project"
import { ISkill } from "@/interfaces/Skill"

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