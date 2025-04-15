import { ISkill } from "@/models/Skill"

export interface IProject {
    title: string

    startDate: Date
    endDate?: Date

    description?: string
    points: string[]

    skills?: ISkill[]

    icon?: "github"
    website?: string
}